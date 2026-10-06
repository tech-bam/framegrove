/* Apple creative assets require PNG with no alpha channel (RGB colour type 2).
   Browser canvas exporters may write RGBA even when every pixel is opaque. */
(function(global) {
  const table = Array.from({length:256},(_,n)=>{ for(let k=0;k<8;k++) n=n&1?0xedb88320^(n>>>1):n>>>1; return n>>>0; });
  const crc = bytes => { let c=0xffffffff;for(const b of bytes)c=table[(c^b)&255]^(c>>>8);return (c^0xffffffff)>>>0; };
  function chunk(type,data) {
    const out=new Uint8Array(data.length+12),view=new DataView(out.buffer);
    view.setUint32(0,data.length);out.set(new TextEncoder().encode(type),4);out.set(data,8);view.setUint32(out.length-4,crc(out.subarray(4,out.length-4)));return out;
  }
  async function encode(canvas,compress) {
    const {width:W,height:H}=canvas,rgba=canvas.getContext('2d').getImageData(0,0,W,H).data;
    const rows=new Uint8Array(H*(W*3+1));
    for(let y=0;y<H;y++) for(let x=0;x<W;x++) {
      const source=(y*W+x)*4,target=y*(W*3+1)+1+x*3,alpha=rgba[source+3]/255;
      for(let c=0;c<3;c++) rows[target+c]=Math.round(rgba[source+c]*alpha+255*(1-alpha));
    }
    const compressed=compress?await compress(rows):new Uint8Array(await new Response(new Blob([rows]).stream().pipeThrough(new CompressionStream('deflate'))).arrayBuffer());
    const header=new Uint8Array(13),view=new DataView(header.buffer);view.setUint32(0,W);view.setUint32(4,H);header[8]=8;header[9]=2;
    const pieces=[new Uint8Array([137,80,78,71,13,10,26,10]),chunk('IHDR',header),chunk('IDAT',compressed),chunk('IEND',new Uint8Array())];
    const result=new Uint8Array(pieces.reduce((n,p)=>n+p.length,0));let offset=0;for(const piece of pieces){result.set(piece,offset);offset+=piece.length;}return result;
  }
  global.OpaquePNG={encode};
})(typeof window !== 'undefined'?window:globalThis);

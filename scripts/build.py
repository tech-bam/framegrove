from pathlib import Path
import shutil,zipfile,json
r=Path(__file__).resolve().parent.parent
out=r/'public'
if out.exists():shutil.rmtree(out)
out.mkdir()
for n in ['app','engine','templates','mcp','creative-assets','privacy','common.js','fonts.css','site.css','index.html','robots.txt','sitemap.xml','social.svg']:
 s=r/n
 if s.is_dir():
  if n=='mcp':
   (out/n).mkdir();shutil.copy2(s/'index.html',out/n/'index.html')
  else:shutil.copytree(s,out/n)
 elif s.exists():shutil.copy2(s,out/n)
(out/'downloads').mkdir()
with zipfile.ZipFile(out/'downloads/framegrove-mcp.zip','w',zipfile.ZIP_DEFLATED) as z:
 for folder in ['engine','mcp']:
  for p in sorted((r/folder).rglob('*')):
   rel=p.relative_to(r)
   if p.is_file() and not {'node_modules','fonts'}.intersection(rel.parts) and p.name!='index.html':z.write(p,'framegrove-mcp/'+str(rel))
 z.write(r/'README.md','framegrove-mcp/README.md')
 z.write(r/'LICENSE','framegrove-mcp/LICENSE')
print('Built static site and standalone MCP download.')

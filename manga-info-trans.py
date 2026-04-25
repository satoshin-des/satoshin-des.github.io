from bs4 import BeautifulSoup

html = """
<tr>
    <td>hoge</td>
    <td>huga</td>
    <td>XXXX</td>
    <td>piyo</td>
</tr>
"""

soup = BeautifulSoup(html, "html.parser")

result = []
for i, tr in enumerate(soup.find_all("tr"), start=1):
    tds = [td.get_text(strip=True) for td in tr.find_all("td")]
    if len(tds) == 4:
      result.append({
"id": i,
"title": tds[0],
"author": tds[1],
"year": tds[2],
"company": tds[3]
      })

print(f"{result}".replace("}, ", "},\n"))
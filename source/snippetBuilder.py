from tkinter import Tk # in Python 2, use "Tkinter" instead 

print('Luminary Snippet Builder')
print('***')
s_title=input('Title: ')
s_content=input('Snippet: ')
s_keywords=input('Keywords: ')
s_lan=input('Language: ')
s_author=input('Author: ')
s_lic=input('License: ')

print('***')
print('***')
print('***')
print('Snippet:')

snippet='{ id: x, title: "'+s_title+'", search_content:"'+s_keywords+'", content: "'+s_content+'", author: "'+s_author+'", language: "'+s_lan+'", license: "'+s_lic+'"},'
print(snippet)


r = Tk()
r.withdraw()
r.clipboard_clear()
r.clipboard_append(snippet)

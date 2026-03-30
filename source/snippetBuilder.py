from tkinter import Tk # in Python 2, use "Tkinter" instead 

print('Luminary Snippet Builder')
print('=====')
print('m 4 manual')
print('t 4 template')
print('=====')
mode = input('Mode: ')

if mode == 'm':
    s_title=input('Title: ')
    s_content=repr(input('Snippet: '))
    s_keywords=input('Keywords: ')
    s_lan=input('Language: ')
    s_author=input('Author: ')
    s_lic=input('License: ')


    print('=====')
    print('=====')
    print('=====')
    print('Snippet:')

    snippet='{ id: x, title: "'+s_title+'", search_content:"'+s_keywords+'", content: '+s_content+', author: "'+s_author+'", language: "'+s_lan+'", license: "'+s_lic+'"},'
    print(snippet)


    r = Tk()
    r.withdraw()
    r.clipboard_clear()
    r.clipboard_append(snippet)


if mode == 't':
    s_title=input('Title: ')
    s_content=repr(input('Snippet: '))
    s_keywords=input('Keywords: ')
    s_lan=input('Language: ')
    s_platform=input('platform: ')

    if s_platform == 'bulma':
        s_author = 'Jeremy Thomas'
        s_lic='MIT'

        print('=====')
        print('=====')
        print('=====')
        print('Snippet:')

        snippet='{ id: x, title: "'+s_title+'", search_content:"'+s_keywords+'", content: '+s_content+', author: "'+s_author+'", language: "'+s_lan+'", license: "'+s_lic+'"},'
        print(snippet)

        r = Tk()
        r.withdraw()
        r.clipboard_clear()
        r.clipboard_append(snippet)


    if s_platform == 'lum' or 'luminary':
        s_author = 'Borg'
        s_lic='MIT'

        print('=====')
        print('=====')
        print('=====')
        print('Snippet:')

        snippet='{ id: x, title: "'+s_title+'", search_content:"'+s_keywords+'", content: '+s_content+', author: "'+s_author+'", language: "'+s_lan+'", license: "'+s_lic+'"},'
        print(snippet)

        r = Tk()
        r.withdraw()
        r.clipboard_clear()
        r.clipboard_append(snippet)

    if s_platform == 'bootstrap' or 'boot':
        s_author = 'Bootstrap Team'
        s_lic='MIT'

        print('=====')
        print('=====')
        print('=====')
        print('Snippet:')

        snippet='{ id: x, title: "'+s_title+'", search_content:"'+s_keywords+'", content: '+s_content+', author: "'+s_author+'", language: "'+s_lan+'", license: "'+s_lic+'"},'
        print(snippet)

        r = Tk()
        r.withdraw()
        r.clipboard_clear()
        r.clipboard_append(snippet)

    if s_platform == 'foundation' or 'found':
        s_author = 'ZURB, Inc.'
        s_lic='MIT'

        print('=====')
        print('=====')
        print('=====')
        print('Snippet:')

        snippet='{ id: x, title: "'+s_title+'", search_content:"'+s_keywords+'", content: '+s_content+', author: "'+s_author+'", language: "'+s_lan+'", license: "'+s_lic+'"},'
        print(snippet)

        r = Tk()
        r.withdraw()
        r.clipboard_clear()
        r.clipboard_append(snippet)

    


    



def to_camel_case(text):
    ''' Text is separated by either _ or - '''
    if text == '':
        return ''
    for char in text:
        if char in '_-':
            text = text.replace(char, ' ')
    splt = text.split()
    return splt[0] + ''.join([e[0].upper() + e[1:] for e in splt if e != splt[0]])


print(to_camel_case('the_Cat-is_Pippi'))

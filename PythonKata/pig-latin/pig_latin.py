def pig_latin_converter(word):
    vowels = 'aeiou'
    indexVowelList = []

    if word[:1] in vowels:
        return word + 'way'

    for letter in word:
        if letter in vowels:
            indexVowelList.append(word.index(letter))
    return word[min(indexVowelList):] + word[0:min(indexVowelList)] + 'ay'


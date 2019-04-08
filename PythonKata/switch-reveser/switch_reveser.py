def switch_reversing(lst):
    if not all(type(x) == type(lst[0]) for x in lst):
        return lst
    else:
        if type(lst[0]) == int:
            return lst[::-1]
        elif type(lst[0]) == str:
            return [element.upper() for element in lst]
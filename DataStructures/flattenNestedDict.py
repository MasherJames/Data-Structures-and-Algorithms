# def flattenNestedDict(d):
#     return
# print(flattenNestedDict({
#     "key": 3,
#     "foo": {
#         "a": 5,
#         "bar": {
#             "baz": 8
#         }
#     }
# }))

d = {
    'name': 'james',
    'age': 20,
    'course':  'maths computer',
    'kk': {
        'k1': 'blunt',
        'k2': {
            'swishers': 'kid'
        }
    }
}

for k, v in d.items():
    print([k, v])
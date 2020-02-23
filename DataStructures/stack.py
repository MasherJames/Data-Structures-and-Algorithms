# def maxDepthNestedParenthesis(s):

#     count = 0
#     maxCount = 0
#     for e in s:
#         if e == '(':
#             count += 1
#             if count > maxCount:
#                 maxCount = count
#         elif e == ')':
#             if count < 0:
#                 return -1
#             count -= 1

#     return -1 if count is not 0 else maxCount


# print(maxDepthNestedParenthesis("(a(b)(c)(d(e(f)g)h)I(j(k)l)m)"))
# print(maxDepthNestedParenthesis("(b)((c)()"))
# print(maxDepthNestedParenthesis("(p((q))((s)t))"))
# print(maxDepthNestedParenthesis("b)(c)()"))

# def lengthOfLongestSubString(s):
#     stack = []
#     res = 0
#     for p in s:
#         if p == "(":
#             stack.append(p)
#         elif p == ")":
#             if len(stack) > 0:
#                 stack.pop()
#                 res += 2
#     return res


# print(lengthOfLongestSubString(")"))
# print(lengthOfLongestSubString(")()())"))
# print(lengthOfLongestSubString("()(()))))"))

# def checkBalancedParenthesis(s):
#     stack = []
#     for p in s:
#         if p == '[' or p == '{' or p == '(':
#             stack.append(p)
#         else:
#             if p == ']' and stack[-1] == '[':
#                 stack.pop()
#             elif p == '}' and stack[-1] == '{':
#                 stack.pop()
#             elif p == ')' and stack[-1] == '(':
#                 stack.pop()

#     return "Not Ballanced" if len(stack) != 0 else "Balanced"


# print(checkBalancedParenthesis("[()]{}{[()()]()}"))
# print(checkBalancedParenthesis("[(])"))

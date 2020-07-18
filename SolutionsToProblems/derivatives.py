from sympy import Symbol, Derivative
x = Symbol('x')
function = -5*x**2+10*x+4
d = Derivative(function, x)
res = d.doit().subs({x:3})
print(res)
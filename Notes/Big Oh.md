# <ins>Big Oh Notation

- Describes the upper bound of a function or its limiting behaviour as the inputs grow to a particular value or infinity

- Mathematically:
  a function f(n) is O(g(n)) if there exists a +ve n<sub>o</sub> and a constant +ve constant C, such that:

  ```
      f(n) <= Cg(n)
  ```

  ### <ins>Runtime Analysis(best-to-worst performance)

  - O(1) - Constant running time. The algorithm always takes the same amount of time, regardless of the input size
  - O(log log n) - Double logarithmic runtime, The algorithm repeatedly reduces the problem to sub-problems of size that is the square root of the original problem size.
  - O(log n) - Logarithmic. The algorithm reduces the problem/number of operations by halve as the input size increases.
  - O(n) - Liner. Runtime increases directly in proportion to the input size
  - O(n log n) - Linearithmic. Runtimes grows as the input(n) increases where the result is performing O(log n) operations n times.
  - O(n<sup>c</sup>) - Polynomial. The runtime worst case scenario is a polynomial expression (exponents are +ve integers) in the size of the inputs.
  - O(c<sup>n</sup>) - Exponential.
  - O(n!) - Factorial.

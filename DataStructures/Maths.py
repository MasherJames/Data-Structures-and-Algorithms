
# least prime factor
# Lcm and Gcd

import math

# Prime factors


# def findPrimeFactors(num):
#     primeFactors = []
#     while num % 2 == 0:
#         num = num / 2
#         primeFactors.append(2)
#     for i in range(3, int(math.sqrt(num)) + 1, 2):
#         while num % i == 0:
#             num = num / i
#             primeFactors.append(i)
#     if num > 2:
#         primeFactors.append(num)
#     return primeFactors


# print(findPrimeFactors(315))

# Sieve of erathosnese


def sieveOfErathosnese(num):
    primeNumbers = [2]
    firstPrime = 2

    for n in range(firstPrime+1, num + 1):
        if n % firstPrime != 0:
            primeNumbers.append(n)
    num = primeNumbers
    return primeNumbers


print(sieveOfErathosnese(30))

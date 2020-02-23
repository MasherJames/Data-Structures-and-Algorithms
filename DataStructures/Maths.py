
# least prime factor
# Lcm and Gcd

import math

# Prime factors
# def findPrimeFactors(num):
#     primeFactors = []
#     # Exhaust all 2s as prime factors
#     while num % 2 == 0:
#         num = num / 2
#         primeFactors.append(2)

#     # from 3 exhaust all odd prime factors
#     for i in range(3, int(math.sqrt(num)), 2):
#         while num % i == 0:
#             num = num / i
#             primeFactors.append(i)
#     # Exhaust any other prime factor
#     if num > 2:
#         primeFactors.append(num)
#     return primeFactors


# print(findPrimeFactors(315))

# Sieve of erathosnese
def sieveOfErathosnese(n):
    # Mark all numbers as True
    primes = [True for i in range(n + 1)]
    p = 2

    # loop only if value of p**2 is less or equal to the given n
    # this because a number less than p**2 is already cancelled be another factor
    while(p**2 <= n):
        if (primes[p]):
            # cancel all the numbers divisible by the current num
            for i in range(p*p, n+1, p):
                primes[i] = False
        p += 1

    return [p for p in range(2, n+1) if primes[p]]


print(sieveOfErathosnese(10))

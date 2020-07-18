

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
# def sieveOfErathosnese(n):
#     # Mark all numbers as True
#     primes = [True for i in range(n + 1)]
#     p = 2

#     # loop only if value of p**2 is less or equal to the given n
#     # this because a number less than p**2 is already cancelled be another factor
#     while(p**2 <= n):
#         if (primes[p]):
#             # cancel all the numbers divisible by the current num
#             for i in range(p*p, n+1, p):
#                 primes[i] = False
#         p += 1

#     return [p for p in range(2, n+1) if primes[p]]


# print(sieveOfErathosnese(10))


# least prime factor
# def leastPrimeFactor(n):
#     # An array with n number of zeros
#     least_prime_factors = [0] * (n + 1)
#     # Mark initial pos as 1. i.e 1 is is own l.p.f
#     least_prime_factors[1] = 1

#     # Loop from 2 to n
#     for i in range(2, n+1):
#         # Check if the current pos is already marked
#         if (least_prime_factors[i]) == 0:
#             # Mark the current prime as the l.p.f of itself
#             least_prime_factors[i] = i

#             # loop the array to cancel nos. divisible by the current prime
#             for j in range(2*i, n+1, i):
#                 if least_prime_factors[j] == 0:
#                     least_prime_factors[j] = i

#     return least_prime_factors


# print(leastPrimeFactor(6))

# GCD
def gcd(a, b):
    if a == 0:
        return b
        # Divide with the smaller number until the remainder is zero
        # return the prev a
    return gcd(b % a, a)


# print(gcd(36, 15))
# print(gcd(10, 20))
# Lcm

# Lcm(a, b) = (a * b) / gcd(a, b)

def lcm(a, b):
    return (a*b) / gcd(a, b)


print(lcm(10, 20))

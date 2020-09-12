

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

def sieveOfEratosthenese(n):
    # Mark all the numbers as prime
    primes = [True for val in range(n+1)]

    # 0 and 1 are defintely not primes
    primes[0] = False
    primes[1] = False

    # Loop until sqrt of n and remove multiples of the current prime
    # At the sqrt of n, the program already knows one of the prime factorts
    for i in range(2, int(math.sqrt(n))):
        # Mark all prime numbers common multiples false
        if primes[i]:
            for j in range(i * i, n+1, i):
                primes[j] = False
    return [p for p in range(0, n+1) if primes[p]]
print(sieveOfEratosthenese(100))


# least prime factor
def leastPrimeFactor(n):
    # An array with n number of zeros
    least_prime_factors = [0] * (n + 1)
    # Mark initial pos as 1. i.e 1 is is own l.p.f
    least_prime_factors[1] = 1

    # Loop from 2 to n
    for i in range(2, n+1):
        # Check if the current pos is already marked
        if (least_prime_factors[i]) == 0:
            # Mark the current prime as the l.p.f of itself
            least_prime_factors[i] = i

            # loop the array to cancel nos. divisible by the current prime
            for j in range(2*i, n+1, i):
                if least_prime_factors[j] == 0:
                    least_prime_factors[j] = i

    return least_prime_factors


# print(leastPrimeFactor(6))

# GCD
# def gcd(a, b):
#     if a == 0:
#         return b
        # Divide with the smaller number until the remainder is zero
        # return the prev a
    # return gcd(b % a, a)


# print(gcd(36, 15))
# print(gcd(10, 20))
# Lcm

# Lcm(a, b) = (a * b) / gcd(a, b)

# def lcm(a, b):
#     return (a*b) / gcd(a, b)


# print(lcm(10, 20))

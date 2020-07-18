from math import sqrt

def sieve(n):
	# returns all primes between 2 and n
	primes = list(range(2,n+1))
	max = sqrt(n)
	num = 2
	while num < max:
		i = num
		while i <= n:
			i += num
			if i in primes:
				primes.remove(i)
		for j in primes:
			if j > num:
				num = j
				break
	return primes

print(sieve(100))

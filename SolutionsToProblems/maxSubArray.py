def maxSequence(arr):
    max_ending_here = 0
    max_so_far = 0
    for num in arr:
        max_ending_here += num
        if max_ending_here < 0:
            max_ending_here = 0
        elif max_so_far < max_ending_here:
            max_so_far = max_ending_here
    return max_so_far


print(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

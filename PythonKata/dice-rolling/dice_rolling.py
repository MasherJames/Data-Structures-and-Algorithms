# from random import randint
# import time

# def runner():
#     print('The dice has been rolled: ')
#     time.sleep(2)
#     r1 = randint(1, 6)
# 	while r1:
# 		print(r1)
# 		print('Do you want to roll again ?: ')
# 	else:
# 		print('No side found')

# def roll_dice():
# 	side = runner()
#     while side:
#         res = input('Enter y to continue or n to terminate the game: ')
#         while res == 'y':
# 			runner()
# 		else:
# 			print('Game over')
# roll_dice()
import random


def roll_dice():
    num = random.randint(1, 6)
    return num

MENU_PROMT = "Type 'y' to start or 'n' to end the game?\n==>"


def menu():
    print("Welcome to a simulated Dice rolling Game.")
    selection = input(MENU_PROMT)
    while selection != "n":
        if selection == "y":
           print("\nResults: {}\n".format(roll_dice()))
        selection = input(MENU_PROMT)
    print("***Game Over***")

menu()

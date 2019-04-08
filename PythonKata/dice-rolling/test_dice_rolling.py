import unittest
from unittest.mock import patch
import dice_rolling

class TestDiceRolling(unittest.TestCase):
    def test_dice_rolling(self):
        with patch('builtins.input', return_value='y'):
            res = dice_rolling.roll_dice()
            self.assertIn(res, range(1,7))

        with patch('builtins.input', return_value='n'):
            res = dice_rolling.menu()
            self.assertNotIn( res,range(1,7))

if __name__ == '__main__':
    unittest.main()


#code

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

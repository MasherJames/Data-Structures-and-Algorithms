import unittest
from unittest.mock import patch
import magic_ball


class MagicBall(unittest.TestCase):
    def test_magic_ball(self):
        with patch('builtins.input', return_value='y'):
            res = magic_ball.magicBall()
            self.assertIn(res, range(1,7))

        with patch('builtins.input', return_value='n'):
            res = dice_rolling.menu()
            self.assertNotIn( res,range(1,7))
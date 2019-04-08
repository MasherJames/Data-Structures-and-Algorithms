import unittest
from unittest.mock import patch
import password_checker

class ValidPassword(unittest.TestCase):
    def test_valid_password(self):
        user_input = ['ABd1234@1','a F1#','2w3E*','2We3345']
        with patch('builtins.input', side_effect=user_input):
            res = password_checker.valid_password()
        self.assertEqual(res, 'ABd1234@1')

if __name__ == "__main__":
    unittest.main()
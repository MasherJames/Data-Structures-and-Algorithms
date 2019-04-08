import unittest
import pig_latin

class TestPigLlatin(unittest.TestCase):
    def test_pig_latin(self):
        self.assertEqual(pig_latin.pig_latin_converter('andela'), 'andelaway')
        self.assertEqual(pig_latin.pig_latin_converter('category'), 'ategorycay')
        self.assertEqual(pig_latin.pig_latin_converter('trash'), 'ashtray')

if __name__ == "__main__":
    unittest.main()
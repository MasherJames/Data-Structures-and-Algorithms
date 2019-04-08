import unittest
import switch_reveser

class TestSwitchReveser(unittest.TestCase):
    def test_switch_reveser(self):
        self.assertEqual(switch_reveser.switch_reversing([1,2,3,4,5,6]), [6,5,4,3,2,1])
        self.assertEqual(switch_reveser.switch_reversing(['this','is','python','andela']), ['THIS','IS','PYTHON','ANDELA'])
        self.assertEqual(switch_reveser.switch_reversing(['they','are',3,4,'not','same',1]), ['they','are',3,4,'not','same',1])

if __name__ == "__main__":
    unittest.main()
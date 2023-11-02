from unittest import TestCase, main

from whiteboard import solution

class MatchTestCase2(TestCase):
    def test_multi_word(self):
        self.assertEqual(solution( "Hey fellow warriors" ),"Hey wollef sroirraw" )
    def test_multi_word_2(self):
        self.assertEqual(solution("This sentence is a sentence"), "This ecnetnes is a ecnetnes")
    def test_single(self):
        self.assertEqual(solution("Stodder"),"reddotS")
    def test_single_2(self):
        self.assertEqual(solution("CodeWars"), "sraWedoC")
        
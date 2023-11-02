# Write a function that takes in a string of one or more words,
#  and returns the same string, 
# but with all five or more letter words reversed.
#  Strings passed in will consist of only letters and spaces.
#  Spaces will be included only when more than one word is present.

def solution(string): 
    str_array = string.split()
    str_array = [s if len(s) < 5 else s[::-1] for s in str_array]
    return ' '.join(str_array)
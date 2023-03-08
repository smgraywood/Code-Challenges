# You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

# Increment the large integer by one and return the resulting array of digits.


class Solution(object):
   def plusOne(self, digits):
      """
      :type digits: List[int]
      :rtype: List[int]
      """
      num = ""
      for i in digits:
         num +=str(i)
      num = int(num)
      num+=1
      num = str(num)
      ans = []
      for i in num:
         ans.append(int(i))
      return ans
digits = [5,3,2,4]
ob1 = Solution()
print(ob1.plusOne(digits))

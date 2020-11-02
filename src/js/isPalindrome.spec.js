import { isPalindrome } from './isPalindrome';
describe('isPalindrome', () => {
  it('checks if a word is a palindrome', () => {
    expect(isPalindrome('kayak')).toBeTruthy();
  });
  it('checks if a phrase is a palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal. Panama')).toBeTruthy();
  });
});

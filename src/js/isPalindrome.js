const clean = str => str.toLowerCase().replace(/[\W_]/g, '');

export const isPalindrome = str => {
  const cleanStr = clean(str);
  const len = cleanStr.length;
  for (var i = 0; i < len / 2; i++) {
    if (cleanStr[i] !== cleanStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

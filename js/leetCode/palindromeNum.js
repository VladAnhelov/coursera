var isPalindrome = function (x) {
  let y = x.toString();
  for (let i = 0; i < y.length / 2; i++) {
    if (y.charAt(i) != y.charAt(y.length - 1 - i)) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));

module.exports = isPalindrome;

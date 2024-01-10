function isPalindrome(string) {
  // Start coding here
  let splitString=string.split("")
  let reverseString=splitString.reverse()
  let joinString=reverseString.join("")
  if (joinString===string){
    return true 
  }
  else{
    return false
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false
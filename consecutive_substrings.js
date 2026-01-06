function consecutiveSubstrings(string) {
  const result = [];

  // Loops
  for (let i = 0; i < string.length; i++) {
    let current = "";

    //substrings
    for (let j = i; j < string.length; j++) {
      current += string[j];
      result.push(current);
    }
  }

  return result;
}

if (require.main === module) {
  // tests
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;
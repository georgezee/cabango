function Letters () {}

Letters.Generate = function() {
  var baseLetters = "AAAAAAAAAABBBBBDDDEEFFFFGGHHHHHHHIIIJKLLLMMMMNNOOOOPPPQRRSSSSSSSTTTTTTTTTTUVWWWWWXYYZL";
  var numLetters = 3;

  var result = "";
  for (var i = 0; i < numLetters; i++) {
    var letterIndex = Math.floor(Math.random() * baseLetters.length);
    result = result + baseLetters[letterIndex] + ".";

  }
  return result;
}

export default Letters;

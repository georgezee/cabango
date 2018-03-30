function Letters () {}

  // Call a Lambda function to generate the letters.
  //  fetch("https://axnic9m9qe.execute-api.us-east-1.amazonaws.com/beta/CabangoLetters")
  //  .then(response => response.json())
  //  .then(jsondata => console.log(jsondata))
   
   // //choose between X and Y number of letters
   // //this.randomiser = new Random(BitConverter.ToInt32(Guid.NewGuid().ToByteArray(), 0));

   //  Random rand = new Random();
   //  Int32 numLetters;

   //  Int32 randNum = rand.Next(0, 100);
   //  if (randNum <= 65) //65% chance of using MIN letters
   //  {
   //      numLetters = lettersMin;
   //  }
   //  else
   //  { //35% chance of MAX letters
   //      numLetters = lettersMax;
   //  }
   //  Int32 letterIndex;
   //  word = "";

   //  string baseStr;
   //  //we use a weighting here so that more common letters are listed first
   //  //frequencies taken from http://en.wikipedia.org/wiki/Letter_frequency
   //  if (characterSet == "af") //Afrikaans (no c's)
   //  {
   //      baseStr = "AAAAAAAAAABBBBBDDDEEFFFFGGHHHHHHHIIIJKLLLMMMMNNOOOOPPPQRRSSSSSSSTTTTTTTTTTUVWWWWWXYYZL";
   //  }
   //  else if (characterSet == "ez")
   //  { //easy doesn't contain the tricky letters
   //      baseStr = "AAAAAAAAAABBBBBCCCDDDDEEFFFFGGHHHHHHHJKLLLMMMMNNOOOPPPRRSSSSSSSTTTTTTTTTTUVWWWWWL";
   //  }
   //  else
   //  {
   //      //default character set for English
   //      baseStr = "AAAAAAAAAABBBBBCCCCCDDDDEEFFFFGGGGHHHHHHHIIIJJKLLLLMMMMNNNNOOOOPPPPQRRSSSSSSSTTTTTTTTTTUVWWWWWXYYZL";
   //  }

   //  for (Int32 i = 0; i < numLetters; i++)
   //  {
   //      letterIndex = rand.Next(0, (baseStr.Length-1));
   //      word = word + baseStr[letterIndex] + ".";
   //      letters.Add(baseStr[letterIndex]);
   //  }

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

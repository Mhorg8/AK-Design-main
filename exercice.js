let fullName = "mohammad hosein alirezaie";

let spilt = fullName.split(" ");
console.log(spilt);

let indexOf1 = fullName.indexOf("alirezie");
console.log(indexOf1);

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString('Hello World!'));

function reversStr(name) {
  let revers = "";
  for (let i = name.length - 1; i >= 0; i--) {
    revers += name[i];
  }
  return revers;
}

// console.log(reversStr('mohammad'));

function titleCheck() {
  const sentence = prompt("Enter a sentence:");

  const words = sentence.split(" ");

  const titleCaseWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  const titleCaseSentence = titleCaseWords.join(" ");

  console.log(`Title case sentence: ${titleCaseSentence}`);
}

// titleCheck()

function rev(str) {
  let reveredStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reveredStr += str[i];
  }
  return reveredStr;
}

// console.log(rev('mohamamd'));

function revsStr(str) {
  return str.split("").reverse().join("");
}

// console.log(revsStr("mohammad"));

function countVowel(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i <= str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

console.log(countVowel("mohammad hosein"));

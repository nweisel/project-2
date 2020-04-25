// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//Reverse Words 1 with for loop
let revWords1 = s => {
  let result = "";
  for (let i = 0; i <s.length; i++) {
    result = s[i] + result;
  }
  return result;
};

//Reverse Words 2 with .forEach method
let revWords2 = s => {
  let arr = s.split('');
  let result = "";
  arr.forEach((char) => {
  result = char + result;
});
  return result;
};

//Reverse Words 3 with for of loop
let revWords3 = s => {
    let result ="";

  for(char of s){
    result = char +result;
  }
  return result;
};

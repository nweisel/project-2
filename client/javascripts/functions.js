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


let revWords1 = s => {
  let letters = s.split(" ");
  let result = "";
  for (let i = 0; i <s.length; i++) {
    result = s[i] + result;
  }
  return result;
};

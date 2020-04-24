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
  let reverse;
  let split = s.split("");
  for (var i = 0; i < reverse.length; i++) {
  reverse ="";
  for (var j = split[i].length-1;j>=0;j--){
    reverse+=split[i][j];
  }
  split[i]=reverse
}
  returnreverse.join(" ");
};

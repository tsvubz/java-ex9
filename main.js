let num1 = 2;
let num2 = 5;

function findBigNum(num1, num2) {
  if (num1 > num2) {
    return `${num1} is the big number`;
  }else if (num2 > num1) {
    return `${num2} is the big number`;
  }else {
    return `${num1} and ${num2} are equal numbers`;
  }
  return 0;
}
let bigNum = findBigNum(num1, num2);

console.log(bigNum);
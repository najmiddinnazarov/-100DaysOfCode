// 405. Convert a Number to Hexadecimal
/* var toHex = function (num) {
  if (num > 0) {
    return help(num);
  } else if (num === 0) {
    return "0";
  } else {
    num = -num;
    return help(0xffffffff - num + 1);
  }
  function help(num) {
    let arr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let res = "";
    while (num) {
      let index = num % 16;
      res = arr[index] + res;
      num = ~~(num / 16);
    }
    return res;
  }
};
 */

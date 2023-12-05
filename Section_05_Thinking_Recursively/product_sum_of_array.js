/*
 * Input can contain numbers or arrays of numbers
 * 1, 2, [3, 2], 6, [[2, 3], 1], 7
 * 1  2          6               7  Depth = 1
 *        3  2               1      Depth = 2
 *                    2  3          Depth = 3
 * 1 + 2 + (3+2)*2 + 6 + ((2+3)*3+1)*2 + 7
 * 3 + 10 + 6 + 32 + 7 = 58
 */

function productSum(list, depth = 1) {
  let sum = 0;
  list.forEach((element) => {
    if (Array.isArray(element)) {
      sum += productSum(element, depth + 1);
    } else {
      sum += element;
    }
  });
  return sum * depth;
}

const list = [1, 2, [3, 2], 6, [[2, 3], 1], 7];
console.log(productSum(list));

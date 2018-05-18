/**
 * Array of integers will be provided
 *
 * Find the minimum sum which is obtained from summing each Two
 * integers product
 *
 */

function minSum(intArr) {
  let total = 0;
  while (intArr.length > 0) {
    const max = Math.max(...intArr);
    const min = Math.min(...intArr);

    total += intArr.splice(intArr.indexOf(max), 1) * intArr.splice(intArr.indexOf(min), 1);
  }

  return total;
}

console.log(minSum([2,3,4,5,6]));
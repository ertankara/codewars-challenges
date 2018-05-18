/**
 * Check if given number is perfect power
 *
 * In math a perfect power is a positive integer that can be expressed
 * as an integer power of another positive integer.
 *
 * Formally: m > 1 and k > 1 such that m^k = n in this case n is a perfect power
 *
 * if the given number isn't perfect power then return null
 *
 * if the given number is a perfect power then return as an array
 * first index holds the base number while the second number represents
 * the exponent
 */

function isPP(num) {
  if (num < 0)
    return null;

  let m = 2;
  while (true) {
    for (let k = 2; Math.pow(m, k) <= num; k++) {
      if (Math.pow(m, k) === num)
        return [m, k];
        //return `${num} = ${m}^${k}`;
    }

    m++;
    if (m > num)
      return null;


  }
}

console.log(isPP(16));
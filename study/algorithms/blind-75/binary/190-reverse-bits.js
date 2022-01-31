// Reverse bits of a given 32 bits unsigned integer.

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 

// Example 1:

// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
// Example 2:

// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.


var reverseBits = function(n) {
    var result = 0;
    var count = 32;
  
    while (count--) {
      result *= 2;
      result += n & 1;
      n = n >> 1;
    }
    return result;
  };

//   Just in case your interviewer wants you to use only the bitwise operators:
// using << coerces the int to a 32-bit signed int, so the tests fail because it's interpreted as a negative value.

// Using *= coerces it back to a JS float, which is interpreted as the correct positive value (JS floats can store its up to 53 bits)
// You can still use result = result << 1 if you either (a) Math.abs(result) at the end before returning or (b) return result >>> 0 before returning. Both have the same effect.
// This is documented here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

// Without reading that or just knowing it, there's no way to reason out why << doesn't work.
function reverseBits(n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    // find the last bit of n
    const lastBit = n & 1;

    // shift the last bit of n to the left
    const reversedLastBit = lastBit << (31 - i);

    // insert the reversed last bit of n into the result
    result |= reversedLastBit;

    // the last bit of n is already taken care of, so we need to drop it
    n >>>= 1;
  }

  // convert the result to an unsigned 32-bit integer
  return result >>> 0;
}
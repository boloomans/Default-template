/* ===========================
 * Add leading zeros to number
 * ===========================
 */

Number.prototype.numLength = function(size) { // Size is the amount of numbers that has to exist in the number string (if you enter 2 and your number is 9, result will be 09)
  let s = String(this);
  while (s.length < (size || 1)) {s = "0" + s;}
  return s;
};
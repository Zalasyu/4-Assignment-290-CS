// Pass max and min vlaues that v is allowed to be.
// If v is less than or equal to min, then return min, otherwise
// If v is greater than or equal to max, then return max, otherwise
// return the value of the current v.
//
// Cascading if-else statements using ternary operator. 
const clamp = (min, max) => (v) => v <= min ? min: v >= max ? max : v;

export default clamp;

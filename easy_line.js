// In the drawing below we have a part of the Pascal's triangle, lines are numbered from zero (top).
//
// We want to calculate the sum of the squares of the binomial coefficients on a given line with a function called easyline (or easyLine or easy-line).
//
// Can you write a program which calculate easyline(n) where n is the line number?
//
// The function will take n (with: n>= 0) as parameter and will return the sum of the squares of the binomial coefficients on line n.

function easyLine(n) {
     for (var i = 1, sum = 1; i <= n; i++)
    sum *= (n + i) / i;
  return Math.round(Math.log(sum));
}

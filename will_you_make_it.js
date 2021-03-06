/*You were camping with your friends far away from home, but when it's time to go back, you realize that you fuel is running out and the nearest pump is 50 miles away!
You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
Considering these factors, write a function that tells you if it is possible to get to the pump or not.
Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not.*/

/*
P: distanceToPump, mpg, fuelLeft
R: If possible return true, if not, false.
E: mpg * fuelLeft = distanceToPump
P: mpg multiplied by fuelLeft equals distanceToPump, return true
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

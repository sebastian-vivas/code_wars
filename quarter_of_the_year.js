// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


const quarterOf = (month) => {

if( month === 1 || month === 2 || month === 3 ) return 1;
if( month === 4 || month === 5 || month === 6 ) return 2;
if( month === 7 || month === 8 || month === 9 ) return 3;
if( month === 10 || month === 11 || month === 12 ) return 4;
}

// p: one parameter
// r: return which quarter of the year it belongs as an integer number
// e: month 2 is part of the first quarter
// p: Return number 1-4 based on the number of the month
// You need to approach your boss. Her decision will be based on three parameters:
//
// val=your value to the organisation
// happ=her happiness level at the time of asking and finally
// The numbers of letters from 'sabbatical' that are present in string 'x'.
//
// Note that if x contains three instances of the letter 'l', that still scores three points, even though there is only one in the word sabbatical.
//
// If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.

function sabb(x, val, happ){

const count = (x.match(/[sabticl]/gi)||[]).length;
return count + val + happ > 22 ? "Sabbatical! Boom!":"Back to your desk, boy.";
}

const step1 = `
*
`;

const step2 = `
\|/
- -
/|\
`;

const step3 = `
.....
.   .
.   .
.   .
.....
`;

const arr = [step1, step2, step3];

module.exports = arr.map(el => el.substring(1, el.length - 1));

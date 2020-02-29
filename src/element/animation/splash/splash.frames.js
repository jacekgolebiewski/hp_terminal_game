const step1 = `  
* 
`;

const step2 = `
\\|/
-0-
/|\\
`;

const step3 = `
.....
.000.
.000.
.000.
.....
`;

const step4 = `
00000
00000
00000
00000
00000
`;

const arr = [step1, step2, step3, step4];

module.exports = arr.map(el => el.substring(1, el.length - 1));

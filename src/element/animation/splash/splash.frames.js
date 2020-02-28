const step1 = `  
* 
`;

const step2 = `
\\|/
-_-
/|\\
`;

const step3 = `
.....
.___.
.___.
.___.
.....
`;

const step4 = `
_____
_____
_____
_____
_____
`;

const arr = [step1, step2, step3, step4];

module.exports = arr.map(el => el.substring(1, el.length - 1));

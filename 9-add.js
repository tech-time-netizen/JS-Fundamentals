const arg1 = process.argv[2];
const arg2 = process.argv[3];

function add(arg1, arg2) {
  return parseInt(arg1) + parseInt(arg2);
}
if (isNaN(arg1) || isNaN(arg2)) {
  console.log("NaN");
}
console.log(add(arg1, arg2));
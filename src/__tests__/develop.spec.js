import GetNumberSum from '../develop.js'
function test() {
  const testCases = [
    { input: { a: 1, b: 2 }, expected: 3 },
    { input: { a: -2, b: 1 }, expected: 0 },
    { input: { a: 'not a number', b: 'number' }, expected: "Error: Cannot plus non number params" } 
  ];
  let testResults
  testResults = testCases.map((testCase) => {
  const results = GetNumberSum(testCase.input.a, testCase.input.b); 
  const isPassed = results === testCase.expected; 
  return isPassed;
});
  return testResults;
}
try{
  if (results !== expected ) {
    throw  Error("expexted !== result")};
}catch(error){
alert('something went wrong')
}
console.log(results);
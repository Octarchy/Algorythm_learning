import GetNumberSum from '../develop.js';

function test() {
  const testCases = [
    { input: { a: 1, b: 2 }, expected: 3 },
    { input: { a: -2, b: 1 }, expected: 0 },
    { input: { a: 'not a number', b: 'number' }, expected: "Error: Cannot plus non number params" } 
  ];
  const testResults = testCases.map((testCase) => (GetNumberSum(testCase.input.a, testCase.input.b) === testCase.expected 
  ));
  return testResults;
}
try {
  const results = test();
  if (results.some(result => !result)) {
    throw `There is an error in the test results: ${results.map(result => result)}`
  }
  else console.log("SUCCESS")
} catch(error) {
  console.error(`FAILS: ${error}`);
}
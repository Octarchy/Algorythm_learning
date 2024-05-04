import GetNumberSum from '../develop.js';

function test() {
  const testCases = [
    { input: { a: 1, b: 2 }, expected: 3 },
    { input: { a: -2, b: 1 }, expected: 12 },
    { input: { a: 'not a number', b: 'number' }, expected: "Error: Cannot plus non number params" } 
  ];
  const testResults = testCases.map((testCase) => {GetNumberSum(testCase.input.a, testCase.input.b) === testCase.expected; 
    return isPassed;
  });
  return testResults;
}
try {
  const results = test();
  if (results.some(result => !result)) {
    throw 'There is an error in the test results'
  }
} catch(error) {
  console.error('Something went wrong:');
}
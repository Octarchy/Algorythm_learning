import GetNumberSum from '../develop.js';

function test() {
  const testCases = [
    { input: { a: 1, b: 2 }, expected: 3 },
    { input: { a: -2, b: 1 }, expected: 12 },
    { input: { a: 'not a number', b: 'number' }, expected: "Error: Cannot plus non number params" } 
  ];
  const testResults = testCases.map((testCase) => {
    const results = GetNumberSum(testCase.input.a, testCase.input.b); 
    const isPassed = results === testCase.expected; 
    return isPassed;
  });
  return testResults;
}
try {
  const results = test();
  if (results.includes(false)) {
    throw 'There is an error in the test results'
  }
} catch(error) {
  console.error('Something went wrong:');
}
import GetNumberSum from '../develop.js'

function test() {
    const testCases = [
      { input: { a: 1, b: 2 }, expected: 3 },
      { input: { a: -2, b: 1 }, expected: 0 },
      { input: { a: 'not a number', b: 'number' }, expected: "Error: Cannot plus non number params" } 
    ];
  
    const testResults = [];
  
    testCases.map((testCase) => {
      const result = GetNumberSum(testCase.input.a, testCase.input.b); 
      const isPassed = result === testCase.expected; 
      testResults.push(isPassed);
      return result === testCase.expected;
    });
    return testResults;
  }
  const results = test();
  console.log(results);
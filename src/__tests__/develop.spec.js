import GetNumberSum from '../develop.js'

function test() {
    const testCases = [
      { input: { a: 1, b: 2 }, expected: 3 },
      { input: { a: -2, b: 1 }, expected: -1 },
      { input: { a: 0, b: 0 }, expected: 0 } 
    ];
  
    const testResults = [];
  
    testCases.forEach((testCase) => {
      const result = GetNumberSum(testCase.input.a, testCase.input.b); 
      const isPassed = result === testCase.expected; 
      testResults.push(isPassed);
    });
    return testResults;
  }//ne ponel pro kakoi massiv ti govoril
  const results = test();
  console.log(results);
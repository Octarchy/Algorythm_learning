function GetNumberSum(a, b) {
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Cannot plus non number params"; 
    }

    
    if (a < 0 || b < 0) {
        return 0;
    }

    
    return a + b;
}

console.log(GetNumberSum(1, 2)); 
console.log(GetNumberSum(-1, -2)); 
console.log(GetNumberSum("not a number", false)); 
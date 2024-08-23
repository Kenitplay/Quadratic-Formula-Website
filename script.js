document.getElementById('quadraticForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    
    if (a === 0) {
        document.getElementById('result').innerHTML = `<div style="color: red; font-size: 1.5rem;">Coefficient 'a' cannot be zero in a quadratic equation.</div>`;
        return; // Stop further execution
    }
    
    const discriminant = b * b - 4 * a * c;
    let resultText = '';
    
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultText = `Roots are real and distinct: x = { ${root1.toFixed(2)}, ${root2.toFixed(2)} }`;
    } 
    else if (discriminant === 0) {
        const root = -b / (2 * a);
        resultText = `Root is real and repeated: x = { ${root.toFixed(2)}, ${root.toFixed(2)} }`;
    } 
    else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        resultText = `Roots are complex: x = { ${realPart} + ${imaginaryPart}i, ${realPart} - ${imaginaryPart}i }`;
    }
    document.getElementById('result').innerHTML = `<div>${resultText}</div>`;
});
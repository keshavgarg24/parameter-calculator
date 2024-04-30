function calculateParameters() {
    // Get Z-parameters entered by the user
    const z11 = parseFloat(document.getElementById('z11').value);
    const z12 = parseFloat(document.getElementById('z12').value);
    const z21 = parseFloat(document.getElementById('z21').value);
    const z22 = parseFloat(document.getElementById('z22').value);
  
    // Calculate Y-parameters
    const y11 = z22 / (z11 * z22 - z12 * z21);
    const y12 = -z12 / (z11 * z22 - z12 * z21);
    const y21 = -z21 / (z11 * z22 - z12 * z21);
    const y22 = z11 / (z11 * z22 - z12 * z21);
  
    // Calculate H-parameters
    const h11 = -z11 / z21;
    const h12 = z12 / z22 ;
    const h21 = -z21 / z22 ;
    const h22 = 1 / z22;
  
    // Calculate ABCD-parameters
    const abcdA = 1 + ((z11 * z21) / z22) ;
    const abcdB = z12 / z22 ;
    const abcdC = z21 * (1 + (z11 / z22));
    const abcdD = z22;
  
    // Display the results
    document.getElementById('result').innerHTML = `
      <p>Y-Parameters: Y11=${y11.toFixed(4)}, Y12=${y12.toFixed(4)}, Y21=${y21.toFixed(4)}, Y22=${y22.toFixed(4)}</p>
      <p>H-Parameters: H11=${h11.toFixed(4)}, H12=${h12.toFixed(4)}, H21=${h21.toFixed(4)}, H22=${h22.toFixed(4)}</p>
      <p>ABCD-Parameters: A=${abcdA.toFixed(4)}, B=${abcdB.toFixed(4)}, C=${abcdC.toFixed(4)}, D=${abcdD.toFixed(4)}</p>
    `;
  }
  
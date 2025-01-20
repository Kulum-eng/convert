import React, { useState } from 'react';
import './Convert.css'; 

const Convert = () => {
  const [inputText, setInputText] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');
  const [binary, setBinary] = useState('');

  const handleConvert = () => {
    const number = parseInt(inputText, 10);

    if (!isNaN(number)) {
      const hex = `0x${number.toString(16).toUpperCase()}`;
      setHexadecimal(hex);

      const bin = number.toString(2);
      setBinary(bin);
    } 
    //  si el input es hexadecimal
    else if (/^0x[0-9A-Fa-f]+$/.test(inputText.trim())) {
      const hexValue = inputText.trim();
      setHexadecimal(hexValue.toUpperCase());

      const bin = parseInt(hexValue, 16).toString(2);
      setBinary(bin);
    } 
    // Si es texto 
    else {
      const hex = inputText
        .split('')
        .map((char) => char.charCodeAt(0).toString(16).toUpperCase())
        .join(' ');
      setHexadecimal(hex);

      setBinary('');
    }
  };

  return (
    <div className="convert-page">
      <h1>Conversor de Números, Texto y Hexadecimal</h1>
      <textarea
        placeholder="Escribe un número, texto o hexadecimal aquí..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={5}
        cols={30}
      />
      <button onClick={handleConvert}>Convertir</button>
      <div className="results">
        <h3>Hexadecimal:</h3>
        <p>{hexadecimal || 'Resultado en hexadecimal aparecerá aquí.'}</p>
        {binary && (
          <>
            <h3>Binario:</h3>
            <p>{binary || 'Resultado en binario aparecerá aquí.'}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Convert;

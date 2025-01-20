import React, { useState } from 'react';
import './Convert.css'; 

const Convert = () => {
  const [inputText, setInputText] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');
  const [binary, setBinary] = useState('');

  const handleConvert = () => {
    // Verifica si el valor ingresado es un número
    const number = parseInt(inputText, 10);
    if (!isNaN(number)) {
      // Si es un número, lo convierte a hexadecimal y binario
      const hex = `0x${number.toString(16).toUpperCase()}`;
      setHexadecimal(hex);
      
      const bin = number.toString(2);
      setBinary(bin);
    } else {
      // Si no es un número, convierte cada carácter de texto a hexadecimal
      const hex = inputText
        .split('')
        .map(char => char.charCodeAt(0).toString(16).toUpperCase())
        .join(' ');
      setHexadecimal(hex);
      
      setBinary(''); // Limpiar el valor binario si se ingresa texto
    }
  };

  return (
    <div className="convert-page">
      <h1>Conversor de Números y Texto</h1>
      <textarea
        placeholder="Escribe un número o texto aquí..."
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

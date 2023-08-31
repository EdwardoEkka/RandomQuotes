import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(`${data.content} - ${data.author}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <div className="quote-container">
          <p className="quote">{quote}</p>
        </div>
        <button className="generate-button" onClick={fetchRandomQuote}>
          Generate Random Quote
        </button>
      </header>
    </div>
  );
}

export default App;

/**
  Note:

  URL: https://federex-potolin-random-qoutes.netlify.app/

  I use reactjs + vite + tailwind

  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^4.0.0-beta.0",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.38.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "postcss": "^8.4.23",
    "tailwindcss": "^3.3.1",
    "vite": "^4.3.0"
  }

*/

import React, { useState, useEffect } from 'react';
import { FiTwitter } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight, FaTumblr } from 'react-icons/fa';


const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // set initial random qoutes
  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, []);

  // set new random qoutes
  const newQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      });
    handleRandomColor();
  };

  // set the initial background color to white
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  // set the initial color button and text to black
  const [color, setColor] = useState('#000000');

  // update the background color of the body element
  const handleRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // generate a random hex color
    setBackgroundColor(randomColor);
    setColor(randomColor);
    document.body.style.backgroundColor = randomColor;
  };

  // tweetQuote
  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen shadow-lg" id="quote-box">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="mb-4">
            <div className="text-lg flex items-center" style={{ color: color }}>
              <FaQuoteLeft className="w-6 mr-2" />
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" id="text" >{quote}</h1>
              <FaQuoteRight className="w-6 ml-2" />
            </div>
            <p
              className="text-lg font-medium text-right mt-5"
              style={{ color: color }}
              id="author"
            >
              - {author}
            </p>
          </div>
          <div className="flex justify-between mt-10">
            <div className='flex text-left gap-1'>
              <div className="bg-blue-400 rounded-lg p-2 mt-2 shadow-lg" style={{ backgroundColor: color }} >
                <FiTwitter onClick={tweetQuote} id="tweet-quote" className='h-5 w-5 font text-white' />
              </div>
              <div className="bg-blue-400 rounded-lg p-2 mt-2 shadow-lg" style={{ backgroundColor: color }} >
                <FaTumblr id="tumblr-quote" className='h-5 w-5 font text-white' />
              </div>

            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              id="new-quote"
              onClick={newQuote}
              style={{ backgroundColor: color }}
            >
              New Quote
            </button>
          </div>
          <div className="flex justify-center mt-10">
            <p className="text-sm" style={{ color: color }}>
              by Federex Potolin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteMachine;

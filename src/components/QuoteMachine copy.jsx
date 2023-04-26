import React, { useState, useEffect } from 'react';
import { FiTwitter } from "react-icons/fi";
import TweetQuote from './TweetQuote';

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
  const handleClick = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      });
      handleNewQuote();
  };

  // set the initial background color to white
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');


  // update the background color of the body element
  const handleNewQuote = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // generate a random hex color
    setBackgroundColor(randomColor);
    setColor(randomColor);
    document.body.style.backgroundColor = randomColor;
  };

  // set the initial color to black
  const [color, setColor] = useState('#000000');

  const getFontColor = (bgColor) => {
    // calculate the relative luminance of the background color
    const r = parseInt(bgColor.substr(1, 2), 16);
    const g = parseInt(bgColor.substr(3, 2), 16);
    const b = parseInt(bgColor.substr(5, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // return white or black based on the luminance
    return luminance > 0.5 ? '#ffffff' : '#000000';
  };

  const getButtonColor = (bgColor) => {
    // calculate the relative luminance of the background color
    const r = parseInt(bgColor.substr(1, 2), 16);
    const g = parseInt(bgColor.substr(3, 2), 16);
    const b = parseInt(bgColor.substr(5, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // return a lighter or darker shade of the background color based on the luminance
    return luminance > 0.5 ? `#${(r + 20).toString(16)}${(g + 20).toString(16)}${(b + 20).toString(16)}` : `#${(r - 20).toString(16)}${(g - 20).toString(16)}${(b - 20).toString(16)}`;
  };

  const getIconColor = (bgColor) => {
    // calculate the relative luminance of the background color
    const r = parseInt(bgColor.substr(1, 2), 16);
    const g = parseInt(bgColor.substr(3, 2), 16);
    const b = parseInt(bgColor.substr(5, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // return a lighter or darker shade of the background color based on the luminance
    return luminance > 0.5 ? `#${(r + 40).toString(16)}${(g + 40).toString(16)}${(b + 40).toString(16)}` : `#${(r - 40).toString(16)}${(g - 40).toString(16)}${(b - 40).toString(16)}`;
  };

  const fontColor = getFontColor(color);
  const buttonColor = getButtonColor(color);
  const iconColor = getIconColor(color);


  // tweetQuote
  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    // <div className="" id="quote-box">
    //   <h1>Random Quote Machine</h1>
    //   <div className="">
    //     <p id="text" >{quote}</p>
    //     <p id="author" >- {author}</p>
    //   </div>
    //   <button id="new-quote" onClick={handleClick}>New Quote</button>
    //   <TweetQuote quote={quote} author={author} />
    // </div>
    <div className=''>
      <div id="quote-machine" className="flex justify-center items-center h-screen shadow-lg">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h1 className="text-2xl font-bold mb-4" style={{ color: color }} >Random Quote Machine</h1>
              <div className="quote mb-4">
                <p className="text-lg" style={{ color: color }} >{quote}</p>
                <p className="text-lg font-medium" style={{ color: color }} >- {author}</p>
              </div>
              <div className="flex justify-between">
              <div className="bg-blue-400 rounded-lg p-2 mt-2  shadow-lg" style={{ backgroundColor: color }} >
              <FiTwitter onClick={tweetQuote} id="tweet-quote" className='h-5 w-5 font text-white'/>
              </div>
                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: color }} >
                  New Quote
                </button>
              </div>
            </div>
      </div>
    </div>
  );
};

export default QuoteMachine;

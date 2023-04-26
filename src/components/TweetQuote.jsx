

const TweetQuote = ({ quote, author }) => {
  console.log('quotex: ', quote);
  console.log('authorx: ', author);
  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <a href="#" onClick={tweetQuote} id="tweet-quote">
      Tweet Quote
    </a>
  );
};

export default TweetQuote;
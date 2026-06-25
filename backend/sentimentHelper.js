const Sentiment = require('sentiment');
const sentiment = new Sentiment();

function analyzeMood(text) {
  const result = sentiment.analyze(text);
  const score = result.score;
  let mood = 'neutral';

  if (score <= -2) mood = 'negative';
  else if (score >= 2) mood = 'positive';

  return {
    score,
    comparative: result.comparative,
    mood,
    positiveWords: result.positive,
    negativeWords: result.negative,
    keywords: result.words
  };
}

module.exports = { analyzeMood };
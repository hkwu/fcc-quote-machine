import React from 'react';
import classNames from 'classnames';

export default function TweetButton({ text, author, isLoading }) {
  const tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${text}" ${author}`)}`;

  return (
    <a
      className={classNames('button', 'is-primary')}
      href={tweetLink}
      title="Tweet this quote!"
      target="_blank"
      rel="noopener noreferrer"
      disabled={isLoading}
    >
      <span className="icon">
        <i className="fa fa-twitter" />
      </span>
      <span>Tweet</span>
    </a>
  );
}

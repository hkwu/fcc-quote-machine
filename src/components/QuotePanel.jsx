import React from 'react';
import NewQuoteButton from './NewQuoteButton';
import TweetButton from './TweetButton';

export default function QuotePanel(props) {
  const { text, author, newQuoteHandler, isLoading } = props;

  return (
    <div className="box">
      <div className="hero">
        <div className="hero-body">
          <h1 className="title">
            <span className="icon is-medium">
              <i className="fa fa-quote-left" />
            </span>
            {text}
            <span className="icon is-medium">
              <i className="fa fa-quote-right" />
            </span>
          </h1>
          <h2 className="subtitle is-pulled-right">- {author}</h2>
        </div>
        <div className="hero-foot">
          <div className="field is-grouped">
            <p className="control">
              <TweetButton text={text} author={author} isLoading={isLoading} />
            </p>
            <p className="control">
              <NewQuoteButton onClickHandler={newQuoteHandler} isLoading={isLoading} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

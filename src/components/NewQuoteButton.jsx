import React from 'react';
import classNames from 'classnames';

export default function NewQuoteButton({ onClickHandler, isLoading }) {
  return (
    <button
      className={classNames('button', 'is-primary', { 'is-loading': isLoading })}
      onClick={onClickHandler}
      disabled={isLoading}
    >
      New Quote
    </button>
  );
}

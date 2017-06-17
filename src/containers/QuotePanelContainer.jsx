import { connect } from 'react-redux';
import React from 'react';
import { getNewQuote } from '../actions/QuoteActions';
import QuotePanel from '../components/QuotePanel';

function QuotePanelContainer({ getNewQuote, ...rest }) {
  return <QuotePanel newQuoteHandler={getNewQuote} {...rest} />;
}

export default connect(
  ({ quote }) => {
    const { text, author, isLoading } = quote;

    return {
      text,
      author,
      isLoading,
    };
  },
  { getNewQuote },
)(QuotePanelContainer);

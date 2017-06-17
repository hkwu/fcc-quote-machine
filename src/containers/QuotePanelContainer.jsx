import { connect } from 'react-redux';
import React from 'react';
import { fetchNewQuote } from '../actions/QuoteActions';
import QuotePanel from '../components/QuotePanel';

function QuotePanelContainer({ fetchNewQuote, ...rest }) {
  return <QuotePanel newQuoteHandler={fetchNewQuote} {...rest} />;
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
  { fetchNewQuote },
)(QuotePanelContainer);

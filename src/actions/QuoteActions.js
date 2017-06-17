import * as Actions from '../constants/Actions';

function getNewQuote() {
  return {
    type: Actions.GET_NEW_QUOTE,
  };
}

function receiveNewQuote(quoteData) {
  const { text, author } = quoteData;

  return {
    type: Actions.RECEIVE_NEW_QUOTE,
    payload: {
      text,
      author,
    },
  };
}

export function fetchNewQuote() {
  return async (dispatch) => {
    dispatch(getNewQuote());

    try {
      const result = await fetch('https://random-quote-generator.herokuapp.com/api/quotes/random');
      const { quote, author } = await result.json();

      return dispatch(receiveNewQuote({
        text: quote,
        author,
      }));
    } catch (error) {
      console.log('Bad')
    }
  };
}

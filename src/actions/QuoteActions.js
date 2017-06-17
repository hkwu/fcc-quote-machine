import * as Actions from '../constants/Actions';

function getNewQuote() {
  return {
    type: Actions.GET_NEW_QUOTE,
  };
}

export function getNewQuote() {
  return async (dispatch) => {
    dispatch({ type: Actions.GET_NEW_QUOTE });

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

export function receiveNewQuote(quoteData) {
  const { text, author } = quoteData;

  return {
    type: Actions.RECEIVE_NEW_QUOTE,
    payload: {
      text,
      author,
    },
  };
}

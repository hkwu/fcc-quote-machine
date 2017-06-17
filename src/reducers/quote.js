import * as Actions from '../constants/Actions';

const initialState = {
  text: 'It\'s so empty...',
  author: 'Anonymous',
  isLoading: false,
};

export default function quote(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_NEW_QUOTE:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.RECEIVE_NEW_QUOTE:
      return {
        text: action.payload.text,
        author: action.payload.author,
        isLoading: false,
      };
    default:
      return state;
  }
}

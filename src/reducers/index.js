import { actions } from '../actions/index';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      if (
        state.myList.filter((element) => element.id == action.payload.id)
          .length !== 0
      ) {
        return state;
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    case actions.deleteFavorite:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };

    case actions.loginRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.logoutRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.registerRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.getVideoSource:
      return {
        ...state,
        playing:
          state.trends
            .concat(state.originals)
            .find((item) => item.id === Number(action.payload)) || [],
      };

    default:
      return state;
  }
};

export default reducer;

import { actions } from '../actions/index';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      if (
        /* esta validacion, esta verificando si se encuentra un elemento
          ya existente en myList */
        state.myList.filter((element) => element.id == action.payload.id)
          .length !== 0
        /*De existir myList.length seria diferente de cero por lo cual si ya esta agregado */
      ) {
        return state;
      }
      return {
        /* De no Existir el codigo sigue hasta este bloque, que agrega dicho elemento a
          myList*/
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

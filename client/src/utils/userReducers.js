import { useReducer } from "react";

import { ACTIONS } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS:
      return {
        ...state,
        action: [...action.actions],
      };

    default:
      return state;
  }
};

export function useUserReducer(initialState) {
  return useReducer(reducer, initialState);
}

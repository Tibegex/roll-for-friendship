import { useReducer } from "react";

import { SET_CURRENT_USER } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log("userReducer: SET_CURRENT_USER");
      return {
        ...state,
        currentUserName: action.payload,
      };

    default:
      return state;
  }
};

export function useUserReducer(initialState) {
  return useReducer(reducer, initialState);
}

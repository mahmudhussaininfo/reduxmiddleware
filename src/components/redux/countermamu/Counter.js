import {
  mamuAddFaild,
  mamuAddRequest,
  mamuAddSuccess,
  mamuDelate,
  mamuFaild,
  mamuRequest,
  mamuSuccess,
} from "./ActionType";
import { inicialState } from "./IncicilaState";

const CounterMamu = (state = inicialState, { type, payload }) => {
  switch (type) {
    case mamuRequest:
      return {
        ...state,
        loading: true,
      };
    case mamuSuccess:
      return {
        ...state,
        loading: false,
        mamus: payload,
      };
    case mamuFaild:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case mamuAddRequest:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case mamuAddSuccess:
      return {
        ...state,
        loading: false,
        mamus: [...state.mamus, payload],
      };
    case mamuAddFaild:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case mamuDelate:
      return {
        ...state,
        mamus: state.mamus.filter((data) => data.id !== payload),
      };

    default:
      return state;
  }
};

export default CounterMamu;

import {
  TodoAddFaild,
  TodoAddRequest,
  TodoAddSuccess,
  TodoDelate,
  TodoFaild,
  TodoRequest,
  TodoSuccess,
} from "./ActionType";
import { inicialState } from "./InicialState";

const todoReducer = (state = inicialState, { type, payload }) => {
  switch (type) {
    case TodoRequest:
      return {
        ...state,
        loading: true,
      };
    case TodoSuccess:
      return {
        ...state,
        loading: false,
        todos: payload,
      };
    case TodoFaild:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case TodoAddRequest:
      return {
        ...state,
        loading: true,
      };
    case TodoAddSuccess:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, payload],
      };
    case TodoAddFaild:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case TodoDelate:
      return {
        ...state,
        todos: [state.todos.filter((data) => data.id !== payload)],
      };

    default:
      return state;
  }
};

export default todoReducer;

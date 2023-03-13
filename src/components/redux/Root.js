import { combineReducers } from "redux";
import Color from "./color/Color";
import Counter from "./counter/Counter";
import CounterMamu from "./countermamu/Counter";
import todoReducer from "./todo/TodoReducer";

const rootReduce = combineReducers({
  counter: Counter,
  color: Color,
  todo: todoReducer,
  mamu: CounterMamu,
});

export default rootReduce;

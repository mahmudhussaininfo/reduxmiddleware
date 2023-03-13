import { dec, inc, res } from "./ActionType";
import { inicialState } from "./IncicilaState";

const Counter = (state = inicialState, { type, payload }) => {
  switch (type) {
    case inc:
      return (state = state + 1);
    case dec:
      return (state = state - 1);
    case res:
      return (state = 0);

    default:
      return state;
  }
};

export default Counter;

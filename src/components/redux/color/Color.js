import { BL, GR, RD } from "./ActionType";
import { inicialState } from "./InicialState";

const Color = (state = inicialState, { type, payload }) => {
  switch (type) {
    case GR:
      return (state = "green");
    case RD:
      return (state = "red");
    case BL:
      return (state = "blue");

    default:
      return state;
  }
};

export default Color;

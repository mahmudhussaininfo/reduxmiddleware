import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { testMiddleware } from "./Middlewares/Test";
import rootReduce from "./Root";
import thunk from "redux-thunk";

const middleWares = [testMiddleware, thunk];

const store = createStore(
  rootReduce,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export default store;

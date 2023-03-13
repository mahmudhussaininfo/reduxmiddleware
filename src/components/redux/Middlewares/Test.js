export const testMiddleware = (store) => (next) => (action) => {
  next(action);
};

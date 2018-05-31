import rootReducer from '../reducers';
import {applyMiddleware, createStore} from "redux";
import {updateDimensions} from "../actions";
import {Dimensions} from "react-native";
import thunk from "redux-thunk";


export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  store.dispatch(updateDimensions());

  Dimensions.addEventListener("change", () => store.dispatch(updateDimensions()));
  return store;
};
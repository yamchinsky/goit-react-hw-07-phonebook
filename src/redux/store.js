import { applyMiddleware, combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contacts-reducer";
import authReducer from "./auth/auth-reducer";
import logger from "redux-logger";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// const myMiddleware = (store) => (next) => (action) => {
//   console.log("прослойка", action);
//   next(action);
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // myMiddleware,
  logger,
];

const store = configureStore({
  reducer: { contacts: contactsReducer, auth: authReducer },
  // middleware,
  devTools: process.env.NODE_ENV === "development",
});
// const store = createStore(rootReducer, composeWithDevTools());

export default store;

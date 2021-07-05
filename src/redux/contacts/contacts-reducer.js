import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  contactSaveRequest,
  contactSaveSuccess,
  contactSaveError,
  contactRemoveRequest,
  contactRemoveSuccess,
  contactRemoveError,
  filterUpdate,
  fetchRequest,
  fetchSuccess,
  fetchError,
} from "./contacts-actions";


const items = createReducer([], {
  [fetchSuccess]: (state, { payload }) => payload,
  // [fetchRequest]: (state, { payload }) => payload,
  [contactSaveSuccess]: (state, { payload }) => [...state, payload],
  [contactRemoveSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filter = createReducer("", {
  [filterUpdate]: (state, { payload }) => {
    console.log(payload);
    return payload;
  },
});
const error = createReducer(null, {});

const loading = createReducer(false, {
  [contactSaveRequest]: () => true,
  [contactSaveSuccess]: () => false,
  [contactSaveError]: () => false,
  [contactRemoveRequest]: () => true,
  [contactRemoveSuccess]: () => false,
  [contactRemoveError]: () => false,
  [fetchRequest]: () => true,
  [fetchSuccess]: () => false,
  [fetchError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

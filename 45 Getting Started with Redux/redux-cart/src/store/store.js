import { createStore } from "redux";

const { cartReducers } = require("../redux/reducers/cartReducers");

export const store = createStore(cartReducers);
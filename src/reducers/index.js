import userReducer from "./reducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({ reducer: userReducer });

export default rootReducers;

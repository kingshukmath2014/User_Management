import { createStore } from "redux";
import rootReducers from "../reducers";

function saveToLocalStorage(state) {
  try {
    var newData = [];
    if (JSON.parse(localStorage.getItem("userdata"))) {
      JSON.parse(localStorage.getItem("userdata")).map((item, i) => {
        newData.push(item);
      });
      newData.push(state);
    }
    else newData.push(state);
    const serialisedState = JSON.stringify(newData);
    localStorage.setItem("userdata", serialisedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("userdata");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const store = createStore(rootReducers, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState().reducer));

export default store;

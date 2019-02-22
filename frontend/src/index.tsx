import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "./configureStore";
import "./index.scss";
import { Main } from "./main";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();

const initialState = (window as any).initialReduxState;
const store = configureStore(history, initialState);

ReactDOM.render(<Main store={store} history={history} />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// ./src/store/index.ts

import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { Action, AnyAction, combineReducers, Dispatch, Reducer } from "redux";
import { all, fork } from "redux-saga/effects";

// The top-level state object.
//
// `connected-react-router` already injects the router state typings for us,
// so we can ignore them here.
export interface ApplicationState {
  router: RouterState;
}

// We `fork()` these tasks so they execute in the background.
export function* rootSaga() {
  yield all([
    // `fork()` any other store sagas down here...
  ]);
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const composeReducers = (history: History) => combineReducers<ApplicationState>({
  router: connectRouter(history),
});

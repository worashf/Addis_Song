import { all } from "redux-saga/effects";
import { watchSongAsync } from "./songSaga";

export function* rootSaga() {
    yield all([
        watchSongAsync()
    ])
}
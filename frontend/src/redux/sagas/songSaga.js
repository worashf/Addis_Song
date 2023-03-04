import { call, put, takeEvery } from 'redux-saga/effects'
import { CREATE_SONG, DELETE_SONG, UPDATE_SONG, GET_SONGS, GET_SONG_STATS } from "../constants/actionType"
import { createSongApi, deleteSongApi, updateSongApi, getAllSongsApi } from "../../apis/songApi"
import { addSong, removeSong, editSong, retriveAllSongs, setError, clearError } from '../slice/songSlice'



function* createSongSaga(action) {
    try {
        const { data } = yield call(createSongApi, action.song)
        console.log(data, "response data")
        yield put(addSong(data.song))
        yield put(clearError(null))

    }
    catch (error) {
        yield put(setError(error.message));
    }

}


function* deleteSongSaga(action) {
    try {
        const { data } = yield call(deleteSongApi(action.id))
        yield put(removeSong(data))
        yield put(clearError(null))
    }
    catch (error) {
        yield put(setError(error.message));
    }

}

function* updateSongSaga(action) {
    try {
        const { data } = yield call(updateSongApi(action.user))
        yield put(editSong(data))
        yield put(clearError(null))

    } catch (error) {
        yield put(setError(error.message));
    }

}

function* getAllSongSaga() {
    try {
        const { data } = yield call(getAllSongsApi)
        console.log(data, "response data")
        yield put(retriveAllSongs(data.songs))
        yield put(clearError(null))

    } catch (error) {
        yield put(setError(error.message));
    }
}

export function* watchSongAsync() {
    yield takeEvery(CREATE_SONG, createSongSaga)
    yield takeEvery(DELETE_SONG, deleteSongSaga)
    yield takeEvery(UPDATE_SONG, updateSongSaga)
    yield takeEvery(GET_SONGS, getAllSongSaga)

}
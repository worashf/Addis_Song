import { call, put, takeEvery,all } from 'redux-saga/effects'
import { CREATE_SONG, DELETE_SONG, UPDATE_SONG, GET_SONGS, GET_SONG_STATS } from "../constants/actionType"
import { createSongApi, deleteSongApi, updateSongApi, getAllSongsApi,
   getAllSongsCountApi,getAlubmsCountApi,getArtistsCountApi,getGenresCountApi,
   getCountByArtistApi,getSongsByGenreApi

} from "../../apis/songApi"
import { addSong, removeSong, editSong, retriveAllSongs, setError, clearError, getSongStats } from '../slice/songSlice'



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
        const { data } = yield call(deleteSongApi,action.id)
 if(data.success){
    yield put(removeSong(action.id))
    yield put(clearError(null))
 }

    }
    catch (error) {
        yield put(setError(error.message));
    }

}

function* updateSongSaga(action) {
    try {
        const { data } = yield call(updateSongApi,action.newSong)
        yield put(editSong(data.song))
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

function * getSongsStatSaga() {
    try {
        const [res1,res2,res3,res4,res5,res6]  = yield all ([
           call( getAllSongsCountApi),call(getGenresCountApi), call( getAlubmsCountApi), call(getArtistsCountApi)
           , call( getCountByArtistApi), call(getSongsByGenreApi)
        ])
        // const res1= yield call(getAllSongsCountApi)
        // const  res2 = yield call(getGenresCountApi)
        // const res3= yield call(getAlubmsCountApi)
        // const  res4 = yield call(getArtistsCountApi)
        // const res5= yield call( getCountByArtistApi)
        // const  res6 = yield call(getSongsByGenreApi)
        let   stats  ={
             songCount:  res1.data.totalSongs[0].songsCount,
             genreCount:  res2.data.totalGenresCount[0].uniqueGenresCount,
             albumCount: res3.data.totalAlbumsCount[0].uniqueAlbumCount,
             artistCount : res4.data.totalArtistsCount[0].uniqueartistsCount,
             songCountByGenre:  res6.data.songsCount,
             songCountByArtist: res5.data.songsCount

        }
        console.log(stats, "stats")
        yield put(getSongStats(stats))
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
    yield takeEvery(GET_SONG_STATS, getSongsStatSaga)

}
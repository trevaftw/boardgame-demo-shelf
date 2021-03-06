import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* bgSearch(action) {
  try {
    const bgResponse = yield axios.get(`api/boardgames/search/${action.payload}`);
    yield put({ type: 'BG_RESULTS', payload: bgResponse.data })
  } catch (error) {
    console.log('Error with bgSearchSaga:', error);
  }
}

function* addBG(action) {
  try {
    yield axios.post(`api/boardgames/add`, action.payload)
  }
  catch (error) {
    console.log('Error with add_bg Saga:', error);
  }
}

function* fetchGames(action) {
  try {
    yield console.log('fetchGames action.payload', action.payload)
    const fetchResponse = yield axios.get(`api/demos/search/${action.payload.players}/${action.payload.skill}`)
    // console.log('fetchResponse:', fetchResponse.data)
    yield put({ type: 'FETCH_RESULTS', payload: fetchResponse.data })
  } catch (error) {
    console.log('error with fetch games saga,', error)
  }
}

function* boardgameSaga() {
  yield takeLatest('BG_SEARCH', bgSearch);
  yield takeLatest('ADD_BG', addBG)
  yield takeLatest('FETCH_GAMES', fetchGames)
}

export default boardgameSaga;

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* bgSearch(action) {
  try {
   const bgResponse = yield axios.get(`api/boardgames/${action.payload}`);
   yield put ({ type: 'BG_RESULTS', payload: bgResponse.data})
  } catch (error) {
      console.log('Error with bgSearchSaga:', error);
  }
}

function* registrationSaga() {
  yield takeLatest('BG_SEARCH', bgSearch);
}

export default registrationSaga;

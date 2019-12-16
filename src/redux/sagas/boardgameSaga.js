import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* bgSearch(action) {
  try {
   yield console.log('bgSearch saga hit. payload:', action.payload)
   const bgResponse = yield axios.get(`api/boardgames/${action.payload}`);
   yield console.log('boardgame search response:', bgResponse.data)
  } catch (error) {
      console.log('Error with bgSearchSaga:', error);
  }
}

function* registrationSaga() {
  yield takeLatest('BG_SEARCH', bgSearch);
}

export default registrationSaga;

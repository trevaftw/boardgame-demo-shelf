import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

require('dotenv').config();


function* bgSearch(action) {
  try {
   yield console.log('bgSearch saga hit. payload:', action.payload)
//    const bgResponse = yield axios.get(`https://www.boardgameatlas.com/api/search?name=${action.payload}&client_id=9efyAUKWxl`);
   const bgResponse = yield axios.get(`api/boardgames/${action.payload}`);
   yield console.log('boardgame search response:', bgResponse)
  } catch (error) {
      console.log('Error with bgSearchSaga:', error);
  }
}

function* registrationSaga() {
  yield takeLatest('BG_SEARCH', bgSearch);
}

export default registrationSaga;

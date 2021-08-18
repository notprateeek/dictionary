import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH } from './constants';
import { fetchDataSuccess } from './actions';

function* getData(props) {
  try {
    const data = yield axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${props.value}`,
    );
    yield put(fetchDataSuccess(data.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* defaultSaga() {
  yield takeLatest(FETCH, getData);
}

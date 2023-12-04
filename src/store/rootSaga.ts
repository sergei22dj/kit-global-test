import { all } from 'redux-saga/effects';
import postsSaga from '../logic/Posts/postsSaga'; 

export default function* rootSaga() {
  yield all([postsSaga()]);
}

import { all } from 'redux-saga/effects';

import counterSaga from './count/count.saga';

export default function* rootSaga() {
    yield all([
        counterSaga(),
    ]);
}

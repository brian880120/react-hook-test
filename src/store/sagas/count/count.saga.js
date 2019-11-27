import {
    put,
    takeEvery,
    delay,
} from 'redux-saga/effects';

function* incrementAsync(data) {
    console.log(data);
    yield put({
        type: 'INCREMENT',
    })
}

export default function* counterSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

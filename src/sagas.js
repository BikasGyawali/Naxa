import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_PROJECT_DATA_FETCH, GET_PROJECT_DATA_SUCCESS } from './action/projectInfo';


function projectsFetch() {
    return fetch(`https://admin.naxa.com.np/api/projects`).then(response => response.json());
}

function* workGetProjectData() {
    const projects = yield call(projectsFetch);
    yield put({ type: GET_PROJECT_DATA_SUCCESS, projects })
}

function* mySaga() {
    yield takeEvery(GET_PROJECT_DATA_FETCH, workGetProjectData)
}

export default mySaga;
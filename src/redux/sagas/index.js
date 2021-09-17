import { takeLatest, call, put, delay } from "redux-saga/effects";
import * as api from "../../apis";
import * as actions from "../actions";

function* fetchPostsSaga(action) {
	try {
		yield delay(1000);
		const fetchedPost = yield call(api.fetchPosts);

		yield put(actions.fetchPosts.fetchPostsSuccess(fetchedPost));
	} catch (err) {
		yield put(actions.fetchPosts.fetchPostsFailure(err));
	}
}

function* fetchPostMarkdownSaga(action) {
	try {
		const fetchPostMarkdown = yield call(api.fetchPostMarkdown, action.payload);

		yield put(
			actions.fetchPostMarkdown.fetchPostMarkdownSuccess(fetchPostMarkdown.data)
		);
	} catch (err) {
		yield put(actions.fetchPostMarkdown.fetchPostMarkdownFailure(err));
	}
}

function* fetchUserInfoSaga() {
	try {
		const userInfo = yield call(api.fetchUserInfo);

		yield put(actions.fetchUserInfo.fetchUserInfoSuccess(userInfo.data));
	} catch (err) {
		yield put(actions.fetchUserInfo.fetchUserInfoFailure(err));
	}
}

function* mySaga() {
	yield takeLatest(
		actions.fetchUserInfo.fetchUserInfoRequest,
		fetchUserInfoSaga
	);
	yield takeLatest(actions.fetchPosts.fetchPostsRequest, fetchPostsSaga);
	yield takeLatest(
		actions.fetchPostMarkdown.fetchPostMarkdownRequest,
		fetchPostMarkdownSaga
	);
	// yield takeLatest(actions.switchDarkMode, fetchPostMarkdownSaga);
}
export default mySaga;

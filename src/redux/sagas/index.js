import { takeLatest, call, put } from "redux-saga/effects";
import * as api from "../../apis";
import * as actions from "../actions";
import { fetchedBlogs } from "../../constants/cloneDatabase";
function* fetchPostsSaga(action) {
	try {
	} catch (err) {}
}
function* fetchPostMarkdownSaga() {
	try {
		console.log("Run fetch markdown");
		const fetchPostMarkdown = yield call(
			api.fetchPostMarkdown,
			fetchedBlogs[0]
		);
		console.log(
			"🚀 ~ file: index.js ~ line 16 ~ function*fetchPostMarkdownSaga ~ fetchPostMarkdown",
			fetchPostMarkdown
		);
		yield put(
			actions.fetchPostMarkdown.fetchPostMarkdownSuccess(fetchPostMarkdown.data)
		);
	} catch (err) {
		yield put(actions.fetchPostMarkdown.fetchPostMarkdownFailure(err));
	}
}

function* mySaga() {
	// yield takeLatest(actions.fetchPosts.fetchPostsRequest, fetchPostsSaga);
	// yield takeLatest(actions.fetchPostMarkdown.fetchPostMarkdownRequest, fetchPostMarkdownSaga);
	yield takeLatest(actions.switchDarkMode, fetchPostMarkdownSaga);
}
export default mySaga;

import axios from "axios";

const API_URL = 'http://localhost:8000'

const API = {
	INFO: API_URL + '/',
	NOTES: API_URL + '/notes/',
	SEARCH: API_URL + '/notes/search/',
	NOTE: {
		NEW: API_URL + '/note/new/',
		DELETE: API_URL + '/note/delete/',
		UPDATE: API_URL + '/note/update/',
		GET: API_URL + '/note/',
	},
	SIGNIN: API_URL + '/signin/',
	SIGNUP: API_URL + '/signup/',
	LOGOUT: API_URL + '/logout/',
	CSRF: API_URL + '/csrf/'
}


let _csrfToken = null;

async function CSRF() {

	const response = await fetch(API.CSRF, {
		credentials: 'include',
	});
	const data = await response.json();
	_csrfToken = data.csrfToken;

	return _csrfToken;
}

async function POST(url, data){
	return axios.post(url, data, {
		headers: {
            "Content-Type": "multipart/form-data",
            'X-Csrftoken': await CSRF(),
        },
        withCredentials: true,
	})
}

export { API, API_URL, POST, CSRF }

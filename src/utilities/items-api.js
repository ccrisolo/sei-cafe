import { getToken } from "./users-service";
import { sendRequest } from './sendRequest'

const BASE_URL = "./api/items";

export function getAll() {
    return sendRequest(BASE_URL);
}

// This function is never actually used in SEI CAFE, it's
// only provided here to remind you to follow RESTful routing
export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

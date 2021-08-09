import { getToken } from "./users-service";

//HELPER FUNCTION
export const sendRequest = async (url, method = "GET", payload = null) => {
    // Fetch takes an optional options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options = { method };
    if (payload) {
        options.headers = { "Content-Type": "application/json" };
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        //ensure the headers object still exists
        options.headers = options.headers || {};
        //add token to an Authorization header
        //prefacing with 'Bearer' is recommended in the HTTP specification
        options.headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error("Bad Request");
}


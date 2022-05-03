import axios, { AxiosError } from "axios";

import { handleError } from "./errors";
import { IRequestReponse } from "./types";

axios.defaults.timeout = 5000;
// axios.defaults.baseURL = "";

class request {
    static get = <T>(url = "", params = {}, headers = {}): Promise<IRequestReponse<T>> => new Promise(async (resolve) => {
        try {
            resolve(await axios.get(url, { params, headers }));
        } catch (error) {
            resolve(handleError(error as AxiosError));
        }
    })

    static async post(url = "", body = {}, params = {}, headers = {}) {
        try {
            return await axios.post(url, body, { params, headers });
        } catch (error) {
            return handleError(error as AxiosError);
        }
    }

    static async put(url = "", body = {}, headers = {}) {
        if (Object.keys(body).length !== 0) {
            let params = this.setParams({ params: body });
            url = url + "?" + params;
        }

        try {
            return await axios.put(url, body, { headers });
        } catch (error) {
            return handleError(error as AxiosError);
        }
    }

    static async delete(url = "", data = {}, headers = {}) {
        try {
            return await axios.delete(url, { data, headers });
        } catch (error) {
            return handleError(error as AxiosError);
        }
    }

    static setParams({ url, params }: any) {
        return Object.entries(params).map(e => e.join("=")).join("&");
    };
}

export default request;
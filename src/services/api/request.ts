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
    });

    static post = <T>(url = "", body = {}, params = {}, headers = {}): Promise<IRequestReponse<T>> => new Promise(async (resolve) => {
        try {
            resolve(axios.post(url, body, { params, headers }));
        } catch (error) {
            resolve(handleError(error as AxiosError));
        }
    });

    static put = <T>(url = "", body = {}, headers = {}): Promise<IRequestReponse<T>> => new Promise(async (resolve) => {
        if (Object.keys(body).length !== 0) {
            let params = this.setParams({ params: body });
            url = url + "?" + params;
        }

        try {
            resolve(await axios.put(url, body, { headers }));
        } catch (error) {
            resolve(handleError(error as AxiosError));
        }
    });

    static delete = <T>(url = "", data = {}, headers = {}): Promise<IRequestReponse<T>> => new Promise(async (resolve) => {
        try {
            resolve(await axios.delete(url, { data, headers }));
        } catch (error) {
            resolve(handleError(error as AxiosError));
        }
    });

    static setParams({ url, params }: any) {
        return Object.entries(params).map(e => e.join("=")).join("&");
    };
}

export default request;
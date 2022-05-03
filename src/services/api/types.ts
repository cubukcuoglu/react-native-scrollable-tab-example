import { AxiosError } from "axios";

export interface IListRequest {
    page?: number
}

export interface IRequestReponse<T> {
    data?: T;
    error?: AxiosError
}

export interface IListResponse<T> {
    list: T[],
    hasNextPage: boolean,
    from: number,
    to: number,
    total: number,
    page: number
}
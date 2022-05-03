import { useState, useRef } from "react";
import { AxiosError } from "axios";

import { api, IListRequest, IListResponse } from "@services";
import { toast } from "@utils";

export type IUseListName = "stories" | "tagged" | "timeline";

export type IUseListInitialState<T> = {
    isRefreshing: boolean;
    isLoading: boolean;
    isLoaded: boolean;
    data: IListResponse<T>,
    error: AxiosError<any, any> | undefined;
}

export interface  IUseListResponse<T> extends IUseListInitialState<T> {
    notice: any;
    noticeCanVisible: boolean;
    refresh: () => void;
    get: () => void;
    next: () => void;
}

type ISetState<T> = {
    [K in keyof IUseListInitialState<T>]?: IUseListInitialState<T>[K];
}

const initialData: IListResponse<any> = {
    list: [],
    hasNextPage: false,
    total: 0,
    from: 0,
    to: 0,
    page: 0,
};

const initialState: IUseListInitialState<any> = {
    isRefreshing: false,
    isLoading: false,
    isLoaded: false,
    data: initialData,
    error: undefined,
};

const useList = <T>(name: IUseListName): IUseListResponse<T> => {
    const [state, setStateData] = useState({ ...initialState });
    const stateRef = useRef(state);

    const { isRefreshing, isLoading, isLoaded, error, data: { list, hasNextPage, page } } = state;

    const setState = (data: ISetState<T>) => {
        stateRef.current = { ...stateRef.current, ...data };
        setStateData({ ...stateRef.current });
    };

    const notice = (error || ((isLoaded && list.length === 0) ? "No content found" : null));
    const noticeCanVisible = (!isLoading && !isRefreshing && notice) ? true : false;

    const getList = async ({ refresh }: { refresh: boolean }) => {
        const { isRefreshing, isLoading, data: { list, page } } = stateRef.current;

        if (isRefreshing || isLoading) return;

        if (refresh) setState({ ...initialState, isRefreshing: true });
        else setState({ isLoading: true });

        const { data, error } = await request(name, { page: refresh ? 1 : (page + 1) });

        setState({ isRefreshing: false, isLoading: false });

        if (error) return (refresh ? setState({ error }) : toast({ message: error.message }));

        const newList = data?.list ?? [];

        const listAll = refresh ? newList : list.concat(newList);

        setState({ data: { ...((data ?? {}) as any), list: listAll }, isLoaded: true });
    };

    const refresh = () => getList({ refresh: true });
    const get = () => getList({ refresh: false });
    const next = () => getList({ refresh: false });

    const result: IUseListResponse<T> = { ...state, notice, noticeCanVisible, refresh, get, next };

    return { ...result };
};

const request = async (name: IUseListName, params: IListRequest) => {
    switch (name) {
        case "stories":
            return await api.post.stories(params);
        case "tagged":
            return await api.post.tagged(params);
        case "timeline":
            return await api.post.timeline(params);
        default:
            return {}
    }
};

export { useList }
import request from "./request";
import * as paths from "./paths";
import { IListRequest, IListResponse } from "./types";

import { ITimeLineItem, IStoryItem, ITaggedItem } from "../models";

class post {
    /**
     *
     * Timeline List
     *
     * @static
     * @memberof post
     */
    static timeline = async (params: IListRequest) => await request.get<IListResponse<ITimeLineItem>>(paths.timeline, params);

    /**
     *
     * Story List
     *
     * @static
     * @memberof post
     */
    static stories = async (params: IListRequest) => await request.get<IListResponse<IStoryItem>>(paths.stories, params);

    /**
     *
     * Tagged List
     *
     * @static
     * @memberof post
     */
    static tagged = async (params: IListRequest) => await request.get<IListResponse<ITaggedItem>>(paths.tagged, params);
}

export { post };
import { post } from "./post";
import * as _ from "@services";

/**
 * All api calls
 *
 * @class api
 */
class api {
    /**
     *
     * Post List
     * @static
     * @memberof api
     */
    static post = post;
}

export * from "./types";

export { api }
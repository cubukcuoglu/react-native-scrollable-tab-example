const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

export const mock = new MockAdapter(axios);

import * as paths from "../api/paths";

import db from "./db";

import { sleep } from "@utils";

mock.onGet(paths.timeline).reply(async function ({ params }) {
    await sleep(500);

    const { page = 1, limit = 18 } = params;

    return getList(page, limit, "timeline");
});

mock.onGet(paths.stories).reply(async function ({ params }) {
    await sleep(500);

    const { page = 1, limit = 12 } = params;

    return getList(page, limit, "stories");
});

mock.onGet(paths.tagged).reply(async function ({ params }) {
    await sleep(500);

    const { page = 1, limit = 18 } = params;

    return getList(page, limit, "tagged");
});

const getList = (page, limit, table) => {
    if (page < 1) {
        return [
            400,
            { message: "Page should be at least 1" }
        ]
    }

    const from = (page - 1) * limit;
    const to = page * limit;

    const list = db[table].slice(from, to);

    const total = db[table].length;

    const hasNextPage = total > to;

    return [
        200,
        {
            list,
            hasNextPage,
            from,
            to,
            total,
            page
        },
    ];
};
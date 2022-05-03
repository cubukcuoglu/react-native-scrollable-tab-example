import { NativeScrollPoint } from "react-native";

import { IScrollableTabLayouts, IScrollableTabLayout } from "./types";

export const DEFAULT_LAYOUT: IScrollableTabLayout = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
}

export const DEFAULT_CONTENT_OFFSET: NativeScrollPoint = {
    x: 0,
    y: 0
}

export const DEFAULT_LAYOUTS: IScrollableTabLayouts = {
    container: DEFAULT_LAYOUT,
    header: DEFAULT_LAYOUT,
    tabBar: DEFAULT_LAYOUT,
}
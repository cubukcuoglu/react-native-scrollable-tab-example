import { createContext, useState } from "react";
import { LayoutChangeEvent, LayoutRectangle, NativeScrollPoint } from "react-native";
import { runOnJS, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";

import { DEFAULT_CONTENT_OFFSET, DEFAULT_LAYOUT, DEFAULT_LAYOUTS } from "./constants";
import {
    IScrollableTabContext,
    IScrollableTabScrollHandlerContext,
    IScrollableTabFlatListNodes,
    IScrollableTabScrollViewNodes,
    IScrollableTabLayouts,
    IScrollableTabLayoutsName,
    IScrollableTabScrollPositions,
    IScrollableTabLayout
} from "./types";

export const Context = createContext<IScrollableTabContext>({} as IScrollableTabContext);

const flatListNodes: IScrollableTabFlatListNodes = {};
const scrollViewNodes: IScrollableTabScrollViewNodes = {};
const scrollPositions: IScrollableTabScrollPositions = {};

const useHook = () => {
    const containerLayout = useSharedValue<IScrollableTabLayout>({ ...DEFAULT_LAYOUT });
    const headerLayout = useSharedValue<IScrollableTabLayout>({ ...DEFAULT_LAYOUT });
    const tabBarLayout = useSharedValue<IScrollableTabLayout>({ ...DEFAULT_LAYOUT });
    const contentOffset = useSharedValue<NativeScrollPoint>({ ...DEFAULT_CONTENT_OFFSET });

    const [layouts, setLayouts] = useState<IScrollableTabLayouts>({ ...DEFAULT_LAYOUTS });

    const stateScrollPositions = (id: number, contentOffset: NativeScrollPoint) => {
        scrollPositions[id] = contentOffset;
    }

    const stateLayout = (name: IScrollableTabLayoutsName, value: LayoutRectangle) => {
        setLayouts((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const onLayoutHeader = async (event: LayoutChangeEvent) => {
        const layout = event.nativeEvent.layout;

        headerLayout.value = layout

        stateLayout("header", layout);
    }

    const onLayoutTabBar = async (event: LayoutChangeEvent) => {
        const layout = event.nativeEvent.layout;

        tabBarLayout.value = layout;

        stateLayout("tabBar", layout);
    }

    const onLayoutContainer = async (event: LayoutChangeEvent) => {
        const layout = event.nativeEvent.layout;

        containerLayout.value = layout;

        stateLayout("container", layout);
    }

    const fixScrolls = (withOutId?: any) => {
        const getOffset = (ownPosition: number): number => {
            const offset = (contentOffset.value.y >= headerLayout.value.height) ?
                Math.max(ownPosition, headerLayout.value.height) :
                contentOffset.value.y;

            return offset;
        }

        Object.keys(flatListNodes).filter(id => id != withOutId).forEach((id) => {
            const node = flatListNodes[Number(id)];

            const ownPosition = scrollPositions[Number(id)]?.y ?? 0;

            const offset = getOffset(ownPosition) + 0.001;

            node?.scrollToOffset({ offset: offset, animated: false });
        });

        Object.keys(scrollViewNodes).filter(id => id != withOutId).forEach((id) => {
            const node = scrollViewNodes[Number(id)];

            const ownPosition = scrollPositions[Number(id)]?.y ?? 0;

            const offset = getOffset(ownPosition) + 0.001;

            node?.scrollTo({ y: offset, animated: false });
        });
    }

    const lockScrolls = () => {
        Object.values({ ...flatListNodes, ...scrollViewNodes }).forEach((node) => {
            node?.setNativeProps({ scrollEnabled: false });
        })
    }

    const enableScrolls = () => {
        Object.values({ ...flatListNodes, ...scrollViewNodes }).forEach((node) => {
            node?.setNativeProps({ scrollEnabled: true });
        })
    }

    const enableScroll = (id: number) => {
        const node = flatListNodes[id] || scrollViewNodes[id];

        node?.setNativeProps({ scrollEnabled: true });
    }

    const scrollHandler = (id: number) => useAnimatedScrollHandler<IScrollableTabScrollHandlerContext>({
        onScroll: (event) => {
            const _contentOffset = event.contentOffset;

            contentOffset.value = _contentOffset;

            runOnJS(stateScrollPositions)(id, _contentOffset);
        },
        onMomentumEnd: () => runOnJS(fixScrolls)(id)
    });

    const rContainerStyle = useAnimatedStyle(() => ({
        opacity: (headerLayout.value.height) ? withDelay(100, withTiming(1, { duration: 0 })) : 0
    }));

    const rHeaderStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: -Math.min(headerLayout.value.height, contentOffset.value.y) }],
    }));

    const rTabBarStyle = useAnimatedStyle(() => ({
        top: headerLayout.value?.height,
        transform: [{ translateY: -Math.min(headerLayout.value.height, contentOffset.value.y) }],
    }));

    return {
        rContainerStyle,
        rHeaderStyle,
        rTabBarStyle,
        layouts,
        flatListNodes,
        scrollViewNodes,
        contentOffset,
        containerLayout,
        headerLayout,
        tabBarLayout,
        onLayoutContainer,
        onLayoutHeader,
        onLayoutTabBar,
        fixScrolls,
        lockScrolls,
        enableScrolls,
        enableScroll,
        scrollHandler
    }
};

export default useHook;
import React, { useContext, FC } from "react";
import { LayoutChangeEvent, LayoutRectangle, StyleProp, ViewStyle } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle } from "react-native-reanimated";

import { IScrollableTabNoticeProps } from "../../types";
import { Context } from "../../hook";

import { DEFAULT_LAYOUT } from "./constants";

const Notice: FC<IScrollableTabNoticeProps> = ({ children }) => {
    const { containerLayout, headerLayout, tabBarLayout, contentOffset } = useContext(Context);

    const layout = useSharedValue<LayoutRectangle>(DEFAULT_LAYOUT);

    const onLayout = (event: LayoutChangeEvent) => {
        const _layout = event.nativeEvent.layout;

        layout.value = _layout;
    }

    const rStyle = useAnimatedStyle(() => {
        const style: StyleProp<ViewStyle> = { opacity: layout.value.height ? 1 : 0 };
        
        const maxNoticeSize = containerLayout.value.height - tabBarLayout.value.height;

        if (layout.value.height > maxNoticeSize) return style;

        const minNoticeSize = containerLayout.value.height - headerLayout.value.height - tabBarLayout.value.height;
        const visibleNoticeSize = Math.min(minNoticeSize + contentOffset.value.y, maxNoticeSize);

        if (layout.value.height > visibleNoticeSize) return style;

        return {
            ...style,
            transform: [{ translateY: (visibleNoticeSize - layout.value.height) / 2 }]
        }
    });

    return (
        <Animated.View
            style={rStyle}
            children={children}
            onLayout={onLayout} />
    );
};

export { Notice as default }
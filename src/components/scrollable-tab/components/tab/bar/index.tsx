import React, { FC, useContext } from "react";
import Animated from "react-native-reanimated";

import { IScrollableTabTabBarProps } from "../../../types";
import { Context } from "../../../hook";

import styles from "./style";

const TabBar: FC<IScrollableTabTabBarProps> = (props) => {
    const { rTabBarStyle, onLayoutTabBar } = useContext(Context);

    return (
        <Animated.View 
            {...props} 
            style={[styles.tabBar, rTabBarStyle]}
            onLayout={onLayoutTabBar} />
    );
};

export { TabBar as default }
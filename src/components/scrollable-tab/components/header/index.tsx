import React, { FC, useContext } from "react";
import Animated from "react-native-reanimated";

import { IScrollableTabHeaderProps } from "../../types";
import { Context } from "../../hook";

import styles from "./style";

const Header: FC<IScrollableTabHeaderProps> = (props) => {
    const { rHeaderStyle, onLayoutHeader } = useContext(Context);

    return (
        <Animated.View 
            {...props} 
            style={[styles.header, rHeaderStyle]}
            pointerEvents="box-none"
            onLayout={onLayoutHeader} />
    );
};

export { Header as default }
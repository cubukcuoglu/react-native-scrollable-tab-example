import React, { FC } from "react";
import { ViewProps } from "react-native";
import Animated from "react-native-reanimated";

import useHook, { Context } from "../../hook";

import styles from "./styles";

const Container: FC<ViewProps> = (props) => {
    const hook = useHook();

    return (
        <Context.Provider value={{ ...hook }}>
            <Animated.View 
                {...props}
                style={[styles.container, props.style, hook.rContainerStyle]}
                onLayout={hook.onLayoutContainer} />
        </Context.Provider>
    );
};

export { Container as default }
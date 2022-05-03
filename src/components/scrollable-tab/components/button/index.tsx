import React, { FC } from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

import { IScrollableTabButtonProps } from "../../types";

import styles from "./style";

const Button: FC<IScrollableTabButtonProps> = (props) => {
    let { children, onPress } = props;

    const opacity = useSharedValue(1);

    const changeOpacity = (toValue: number, duration: number) => {
        opacity.value = withTiming(toValue, { duration })
    }

    const rStyle = useAnimatedStyle(() => ({
        opacity: opacity.value
    }));

    return (
        <TouchableWithoutFeedback
            onPress={(event) => onPress?.(event)}
            onPressIn={() => changeOpacity(0.5, 50)}
            onPressOut={() => changeOpacity(1, 200)}>
            <Animated.View
                {...props}
                style={[props.style, rStyle]}
                onTouchMove={() => changeOpacity(1, 200)}
                pointerEvents="box-none">
                <Text style={[styles.touchableArea]} />
                {children}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export { Button as default }

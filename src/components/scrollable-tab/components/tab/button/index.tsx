import React, { useContext, FC } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

import { Context } from "../../../hook";
import { IScrollableTabTabButtonProps } from "../../../types";

const TabButton: FC<IScrollableTabTabButtonProps> = (props) => {
    const { fixScrolls, lockScrolls } = useContext(Context);

    const { isActive, onPress } = props;

    const handlePress = (event: GestureResponderEvent) => {
        onPress?.(event);

        if (!isActive) {
            lockScrolls();
            fixScrolls();
        }
    };

    return (
        <TouchableOpacity
            {...props}
            onPress={handlePress} />
    );
};

export { TabButton as default }
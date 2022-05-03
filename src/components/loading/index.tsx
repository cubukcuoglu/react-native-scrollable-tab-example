import React, { FC } from "react";
import { View, ActivityIndicator } from "react-native";

import { LOADING_COLOR } from "@constants";

import styles from "./style";
import { ILoadingProps } from "./types";

const Loading: FC<ILoadingProps> = ({ isVisible, relative, style }) => {
    return isVisible ? (
        <View style={!relative && styles.loading}>
            <ActivityIndicator
                style={[styles.loadingIndicator, style]}
                size="large"
                color={LOADING_COLOR} />
        </View>
    ) : null;
};

export * from "./types";

export { Loading }
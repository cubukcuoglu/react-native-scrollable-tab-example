import React, { FC } from "react";
import { View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import styles from "./style";
import { INoticeProps } from "./types";

const Notice: FC<INoticeProps> = ({ isVisible, text, style }) => {
    return isVisible ? (
        <View style={[styles.notice, style]}>
            <View style={styles.noticeIconContainer}>
                <Feather
                    style={styles.noticeIcon}
                    name="camera" />
            </View>
            <Text style={styles.noticeText}>
                {text}
            </Text>
        </View>
    ) : null;
};

export * from "./types";

export { Notice }
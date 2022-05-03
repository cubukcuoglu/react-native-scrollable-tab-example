import React, { FC } from "react";
import { View, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Animated from "react-native-reanimated";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

import { ScrollableTab } from "@components";
import { navigate } from "@utils";

import styles from "./style";

const icons: { [name: string]: JSX.Element } = {
    "Timeline": <Ionicons style={styles.tabBarButtonIcon} name="grid-outline" />,
    "Stories": <Feather style={styles.tabBarButtonIcon} name="camera" />,
    "Tagged": <FontAwesome style={styles.tabBarButtonIcon} name="user-o" />
};

const TabBar: FC<MaterialTopTabBarProps> = ({ state, position }) => {
    const { width } = Dimensions.get("window");
    const tabButtonWidth = width / state.routeNames.length;

    const translateX = Animated.interpolateNode(position as any, {
        inputRange: [0, 1, 2],
        outputRange: [0, tabButtonWidth, 2 * tabButtonWidth],
    });

    return (
        <ScrollableTab.TabBar>
            <View style={styles.tabBar}>
                <Animated.View style={[
                    styles.tabBarLine,
                    { width: tabButtonWidth, transform: [{ translateX }] }
                ]} />
                {state.routes.map(({ key, name }, index) => {
                    const inputRange = state.routes.map((_, i) => i);
                    const opacity: any = Animated.interpolateNode(position as any, {
                        inputRange,
                        outputRange: inputRange.map(i => (i === index ? 1 : .7)),
                    });

                    const isActive = (index === state.index);

                    return (
                        <ScrollableTab.TabButton
                            key={key}
                            style={styles.tabBarButton}
                            isActive={isActive}
                            activeOpacity={1}
                            onPress={() => navigate({ page: name })}>
                            <Animated.View style={{ opacity }}>
                                {icons[name]}
                            </Animated.View>
                        </ScrollableTab.TabButton>
                    )
                })}
            </View>
        </ScrollableTab.TabBar>
    )
};

export default TabBar;

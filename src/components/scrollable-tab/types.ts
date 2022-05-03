import { RefObject, ReactNode } from "react";
import { FlatList, ScrollView, NativeScrollEvent, NativeScrollPoint, NativeSyntheticEvent, StyleProp, ViewStyle, TouchableOpacityProps, FlatListProps, ScrollViewProps, LayoutRectangle, LayoutChangeEvent } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";

export interface IScrollableTabHeaderProps {
    children?: ReactNode | Animated.Node<ReactNode>;
}

export interface IScrollableTabTabBarProps {
    children?: ReactNode | Animated.Node<ReactNode>;
}

export interface IScrollableTabNoticeProps {
    children?: ReactNode | Animated.Node<ReactNode>;
}

export interface IScrollableTabButtonProps extends TouchableOpacityProps {}

export interface IScrollableTabTabButtonProps extends TouchableOpacityProps {
    isActive: boolean;
}

export interface IScrollableTabFlatListProps extends FlatListProps<any> {
    isFocused: boolean;
}

export interface IScrollableTabScrollViewProps extends ScrollViewProps {
    isFocused: boolean;
}

export interface IScrollableTabLayout extends LayoutRectangle {}

export type IScrollableTabLayoutsName = "container" | "header" | "tabBar";

export type IScrollableTabLayouts = {
    [key in IScrollableTabLayoutsName]: IScrollableTabLayout
}

export type IScrollableTabScrollHandlerContext = {
    startContentOffsetY: number;
}

export interface IScrollableTabContext {
    rContainerStyle: StyleProp<ViewStyle>;
    rHeaderStyle: StyleProp<ViewStyle>;
    rTabBarStyle: StyleProp<ViewStyle>;
    layouts: IScrollableTabLayouts;
    flatListNodes: IScrollableTabFlatListNodes;
    scrollViewNodes: IScrollableTabScrollViewNodes;
    contentOffset: SharedValue<NativeScrollPoint>;
    containerLayout: SharedValue<IScrollableTabLayout>;
    headerLayout: SharedValue<IScrollableTabLayout>;
    tabBarLayout: SharedValue<IScrollableTabLayout>;
    onLayoutContainer: (event: LayoutChangeEvent) => void;
    onLayoutHeader: (event: LayoutChangeEvent) => void;
    onLayoutTabBar: (event: LayoutChangeEvent) => void;
    fixScrolls: () => void;
    lockScrolls: () => void;
    enableScrolls: () => void;
    enableScroll: (id: number) => void;
    scrollHandler: (id: number) => (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

export type IScrollableTabFlatListNodes = {[name: number]: FlatList<any> | null};

export type IScrollableTabScrollViewNodes = {[name: number]: ScrollView | null};

export type IScrollableTabScrollPositions = {[name: number]: NativeScrollPoint}
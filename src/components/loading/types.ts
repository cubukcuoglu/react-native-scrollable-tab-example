import { StyleProp, ViewStyle } from "react-native";

export interface ILoadingProps {
    isVisible: boolean;
    relative?: boolean;
    style?: StyleProp<ViewStyle>;
}
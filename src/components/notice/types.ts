import { StyleProp, ViewStyle } from "react-native";

export interface INoticeProps {
    isVisible: boolean;
    text?: string;
    style?: StyleProp<ViewStyle>;
}
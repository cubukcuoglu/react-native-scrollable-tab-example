import { Alert } from "react-native";

export interface ToastParams {
    message: string;
    type?: "success" | "error" | "info" | "warning"
}

const toast = ({ message, type }: ToastParams) => {
    let title: string = "";

    type === "success" && (title = "Success");
    type === "error" && (title = "Error");
    type === "info" && (title = "Info");
    type === "warning" && (title = "Warning");
 
    Alert.alert(title, message);
};

export { toast };
import { StyleSheet } from "react-native";

import { verticalScale } from "@utils";

export default StyleSheet.create({
    loading: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 0,
        height: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    loadingIndicator: {
        marginVertical: verticalScale(10)
    }
});
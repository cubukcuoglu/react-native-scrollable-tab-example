import { StyleSheet } from "react-native";

import { IMAGE_BG } from "@constants";

export default StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 1,
        paddingBottom: 2
    },

    item: {
        width: "33.333%",
        aspectRatio: 1,
        paddingHorizontal: 1,
        marginTop: 2
    },
    itemImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        backgroundColor: IMAGE_BG
    }
});
import { StyleSheet } from "react-native";

import { IMAGE_BG, PADDING_HORIZONTAL } from "@constants";
import { horizontalScale, radiusScale, verticalScale } from "@utils";

const itemPaddingHorizontal = horizontalScale(7);
const itemMarginTop = verticalScale(15);

export default StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: (PADDING_HORIZONTAL - itemPaddingHorizontal),
        paddingBottom: itemMarginTop
    },

    item: {
        width: "50%",
        aspectRatio: .7,
        borderRadius: radiusScale(10),
        paddingHorizontal: itemPaddingHorizontal,
        marginTop: itemMarginTop
    },
    itemImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: radiusScale(10),
        backgroundColor: IMAGE_BG,
    },

    loadingBottom: {
        marginTop: itemMarginTop,
        marginBottom: 0
    }
});
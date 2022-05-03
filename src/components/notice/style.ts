import { StyleSheet } from "react-native";

import { BORDER_COLOR, FONT_FAMILY_REGULAR, PADDING_HORIZONTAL } from "@constants";
import { fontScale, horizontalScale } from "@utils";

const iconContainerSize = horizontalScale(110);
const iconSize = iconContainerSize * 0.35;

export default StyleSheet.create({
    notice: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: PADDING_HORIZONTAL
    },
    noticeIconContainer: {
        width: iconContainerSize,
        height: iconContainerSize,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: iconContainerSize / 2,
        borderWidth: horizontalScale(3),
        borderColor: BORDER_COLOR
    },
    noticeIcon: {
        fontSize: iconSize,
    },
    noticeText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: fontScale(18),
        marginTop: 20
    }
});
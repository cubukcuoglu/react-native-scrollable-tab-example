import { StyleSheet } from "react-native";

import {
    BORDER_LIGHT_GRAY_COLOR,
    BORDER_BLACK_COLOR,
    PADDING_HORIZONTAL,
    FONT_FAMILY_SEMI_BOLD,
    FONT_FAMILY_REGULAR,
    FONT_DARK_GRAY_COLOR,
    IMAGE_BG,
    BUTTON_BLUE_BG,
    FONT_WHITE_COLOR,
    BUTTON_WHITE_BG,
    FONT_GRAY_COLOR,
    TAB_BAR_HEIGHT,
    TAB_BAR_BORDER_COLOR,
    TAB_BAR_BG,
    HEADER_BG
} from "@constants";
import { fontScale, horizontalScale, radiusScale, verticalScale } from "@utils";

const tabBarBorderBottomWidth = 1;
const tabBarLineHeight = 2;
const tabBarBottom = -1.5 * (tabBarLineHeight - tabBarBorderBottomWidth);

const profileImageSize = horizontalScale(80);

export default StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        width: "100%",
        paddingHorizontal: PADDING_HORIZONTAL,
        backgroundColor: HEADER_BG
    },
    headerProfile: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: verticalScale(20)
    },
    headerProfileImageOutside: {
        alignSelf: "flex-start"
    },
    headerProfileImage: {
        width: profileImageSize,
        height: profileImageSize,
        borderRadius: profileImageSize / 2,
        backgroundColor: IMAGE_BG
    },
    headerFollowers: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: PADDING_HORIZONTAL
    },
    headerFollowerItem: {
        alignItems: "center"
    },
    headerFollowerItemTopText: {
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        fontSize: fontScale(12)
    },
    headerFollowerItemBottomText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: fontScale(12)
    },
    headerNameText: {
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        fontSize: fontScale(12),
        marginTop: verticalScale(10)
    },
    headerWebsiteText: {
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        fontSize: fontScale(10),
        marginTop: verticalScale(5),
        color: FONT_GRAY_COLOR
    },
    headerDescriptionText: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: fontScale(12),
        marginTop: verticalScale(5),
        color: FONT_DARK_GRAY_COLOR
    },

    tabBar: {
        width: "100%",
        height: TAB_BAR_HEIGHT,
        flexDirection: "row",
        backgroundColor: TAB_BAR_BG,
        borderTopWidth: tabBarBorderBottomWidth,
        borderBottomWidth: tabBarBorderBottomWidth,
        borderColor: TAB_BAR_BORDER_COLOR
    },
    tabBarLine: {
        position: "absolute",
        bottom: tabBarBottom,
        height: tabBarLineHeight,
        backgroundColor: BORDER_BLACK_COLOR
    },
    tabBarButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tabBarButtonIcon: {
        fontSize: verticalScale(20)
    },

    optionBar: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: verticalScale(10),
    },
    optionBarButton: {
        width: "30%",
        height: verticalScale(30),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BUTTON_WHITE_BG,
        borderWidth: 1,
        borderColor: BORDER_LIGHT_GRAY_COLOR,
        borderRadius: radiusScale(5)
    },
    optionBarBlueButton: {
        backgroundColor: BUTTON_BLUE_BG,
        borderWidth: 0
    },
    optionBarButtonText: {
        fontSize: fontScale(12),
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        color: FONT_DARK_GRAY_COLOR
    },
    optionBarButtonWhiteText: {
        color: FONT_WHITE_COLOR
    }
});
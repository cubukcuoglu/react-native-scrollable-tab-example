import { Dimensions } from "react-native";

// APP
export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;

export const HORIZONTAL_SCALE_RATIO = WINDOW_WIDTH / 360;
export const VERTICAL_SCALE_RATIO = WINDOW_HEIGHT / 592;
export const RADIUS_SCALE_RATIO = 1;
export const FONT_SCALE_RATIO = WINDOW_WIDTH / 360;

export const PADDING_HORIZONTAL = HORIZONTAL_SCALE_RATIO * 20;
export const PADDING_VERTICAL = VERTICAL_SCALE_RATIO * 15;

export const ON_END_REACHED_PADDING = 1;

export const APP_COLOR = "#3A98F1";

// BACKGROUND
export const WHITE_BG = "#FFFFFF";
export const GRAY_BG = "#F7F8FA";
export const IMAGE_BG = "#EFEFEF";

// BORDER
export const BORDER_LIGHT_GRAY_COLOR = "#EFEFEF";
export const BORDER_COLOR = "#333333";
export const BORDER_BLACK_COLOR = "#000000";

// ITEM
export const ITEM_MARGIN_TOP = VERTICAL_SCALE_RATIO * 15;
export const ITEM_MARGIN_VERTICAL = ITEM_MARGIN_TOP / 2;

// TAB BAR
export const TAB_BAR_BG = "#FFFFFF";
export const TAB_BAR_HEIGHT = VERTICAL_SCALE_RATIO * 45;
export const TAB_BAR_BORDER_COLOR = "#EFEFEF";

// HEADER
export const HEADER_BG = "#FFFFFF";
export const HEADER_HEIGHT = VERTICAL_SCALE_RATIO * 45;
export const HEADER_BORDER_COLOR = "#EFEFEF";

// BUTTON
export const BUTTON_HEIGHT = VERTICAL_SCALE_RATIO * 40;
export const BUTTON_GRAY_BG = "#CCCCCC";
export const BUTTON_BLUE_BG = APP_COLOR;
export const BUTTON_WHITE_BG = "#FFFFFF";

// LOADING
export const LOADING_COLOR = APP_COLOR;

// FONT
export const FONT_FAMILY_REGULAR = "Montserrat-Regular";
export const FONT_FAMILY_MEDIUM = "Montserrat-Medium";
export const FONT_FAMILY_SEMI_BOLD = "Montserrat-SemiBold";
export const FONT_FAMILY_LIGHT = "Montserrat-Light";
export const FONT_FAMILY_ENGAGEMENT = "Engagement-Regular";
export const FONT_GRAY_COLOR = "#737373";
export const FONT_DARK_GRAY_COLOR = "#333333";
export const FONT_BLUE_COLOR = APP_COLOR;
export const FONT_WHITE_COLOR = "#FFFFFF";

import { HORIZONTAL_SCALE_RATIO, VERTICAL_SCALE_RATIO, RADIUS_SCALE_RATIO, FONT_SCALE_RATIO } from "@constants";

const horizontalScale = (value: number) => value * HORIZONTAL_SCALE_RATIO;
const verticalScale = (value: number) => value * VERTICAL_SCALE_RATIO;
const radiusScale = (value: number) => value * RADIUS_SCALE_RATIO;
const fontScale = (value: number) => value * FONT_SCALE_RATIO;

export { horizontalScale, verticalScale, fontScale, radiusScale }
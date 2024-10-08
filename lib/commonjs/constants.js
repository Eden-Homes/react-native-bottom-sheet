"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ANIMATION_DURATION = exports.ANIMATION_EASING = exports.ANIMATION_CONFIGS = exports.KEYBOARD_DISMISS_THRESHOLD = exports.KEYBOARD_INPUT_MODE = exports.KEYBOARD_BLUR_BEHAVIOR = exports.KEYBOARD_BEHAVIOR = exports.MODAL_STACK_BEHAVIOR = exports.SCROLLABLE_DECELERATION_RATE_MAPPER = exports.SCREEN_WIDTH = exports.SCREEN_HEIGHT = exports.WINDOW_WIDTH = exports.WINDOW_HEIGHT = exports.KEYBOARD_STATE = exports.SCROLLABLE_STATE = exports.SCROLLABLE_TYPE = exports.ANIMATION_SOURCE = exports.ANIMATION_METHOD = exports.ANIMATION_STATE = exports.SHEET_STATE = exports.GESTURE_SOURCE = void 0;

var _reactNative = require("react-native");

var _reactNativeReanimated = require("react-native-reanimated");

const {
  height: WINDOW_HEIGHT,
  width: WINDOW_WIDTH
} = _reactNative.Dimensions.get('window');

exports.WINDOW_WIDTH = WINDOW_WIDTH;
exports.WINDOW_HEIGHT = WINDOW_HEIGHT;

const {
  height: SCREEN_HEIGHT,
  width: SCREEN_WIDTH
} = _reactNative.Dimensions.get('screen');

exports.SCREEN_WIDTH = SCREEN_WIDTH;
exports.SCREEN_HEIGHT = SCREEN_HEIGHT;
var GESTURE_SOURCE;
exports.GESTURE_SOURCE = GESTURE_SOURCE;

(function (GESTURE_SOURCE) {
  GESTURE_SOURCE[GESTURE_SOURCE["UNDETERMINED"] = 0] = "UNDETERMINED";
  GESTURE_SOURCE[GESTURE_SOURCE["SCROLLABLE"] = 1] = "SCROLLABLE";
  GESTURE_SOURCE[GESTURE_SOURCE["HANDLE"] = 2] = "HANDLE";
  GESTURE_SOURCE[GESTURE_SOURCE["CONTENT"] = 3] = "CONTENT";
})(GESTURE_SOURCE || (exports.GESTURE_SOURCE = GESTURE_SOURCE = {}));

var SHEET_STATE;
exports.SHEET_STATE = SHEET_STATE;

(function (SHEET_STATE) {
  SHEET_STATE[SHEET_STATE["CLOSED"] = 0] = "CLOSED";
  SHEET_STATE[SHEET_STATE["OPENED"] = 1] = "OPENED";
  SHEET_STATE[SHEET_STATE["EXTENDED"] = 2] = "EXTENDED";
  SHEET_STATE[SHEET_STATE["OVER_EXTENDED"] = 3] = "OVER_EXTENDED";
  SHEET_STATE[SHEET_STATE["FILL_PARENT"] = 4] = "FILL_PARENT";
})(SHEET_STATE || (exports.SHEET_STATE = SHEET_STATE = {}));

var SCROLLABLE_STATE;
exports.SCROLLABLE_STATE = SCROLLABLE_STATE;

(function (SCROLLABLE_STATE) {
  SCROLLABLE_STATE[SCROLLABLE_STATE["LOCKED"] = 0] = "LOCKED";
  SCROLLABLE_STATE[SCROLLABLE_STATE["UNLOCKED"] = 1] = "UNLOCKED";
  SCROLLABLE_STATE[SCROLLABLE_STATE["UNDETERMINED"] = 2] = "UNDETERMINED";
})(SCROLLABLE_STATE || (exports.SCROLLABLE_STATE = SCROLLABLE_STATE = {}));

var SCROLLABLE_TYPE;
exports.SCROLLABLE_TYPE = SCROLLABLE_TYPE;

(function (SCROLLABLE_TYPE) {
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["UNDETERMINED"] = 0] = "UNDETERMINED";
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["VIEW"] = 1] = "VIEW";
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["FLATLIST"] = 2] = "FLATLIST";
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["SCROLLVIEW"] = 3] = "SCROLLVIEW";
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["SECTIONLIST"] = 4] = "SECTIONLIST";
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["VIRTUALIZEDLIST"] = 5] = "VIRTUALIZEDLIST";
})(SCROLLABLE_TYPE || (exports.SCROLLABLE_TYPE = SCROLLABLE_TYPE = {}));

var ANIMATION_STATE;
exports.ANIMATION_STATE = ANIMATION_STATE;

(function (ANIMATION_STATE) {
  ANIMATION_STATE[ANIMATION_STATE["UNDETERMINED"] = 0] = "UNDETERMINED";
  ANIMATION_STATE[ANIMATION_STATE["RUNNING"] = 1] = "RUNNING";
  ANIMATION_STATE[ANIMATION_STATE["STOPPED"] = 2] = "STOPPED";
  ANIMATION_STATE[ANIMATION_STATE["INTERRUPTED"] = 3] = "INTERRUPTED";
})(ANIMATION_STATE || (exports.ANIMATION_STATE = ANIMATION_STATE = {}));

var ANIMATION_SOURCE;
exports.ANIMATION_SOURCE = ANIMATION_SOURCE;

(function (ANIMATION_SOURCE) {
  ANIMATION_SOURCE[ANIMATION_SOURCE["NONE"] = 0] = "NONE";
  ANIMATION_SOURCE[ANIMATION_SOURCE["MOUNT"] = 1] = "MOUNT";
  ANIMATION_SOURCE[ANIMATION_SOURCE["GESTURE"] = 2] = "GESTURE";
  ANIMATION_SOURCE[ANIMATION_SOURCE["USER"] = 3] = "USER";
  ANIMATION_SOURCE[ANIMATION_SOURCE["CONTAINER_RESIZE"] = 4] = "CONTAINER_RESIZE";
  ANIMATION_SOURCE[ANIMATION_SOURCE["SNAP_POINT_CHANGE"] = 5] = "SNAP_POINT_CHANGE";
  ANIMATION_SOURCE[ANIMATION_SOURCE["KEYBOARD"] = 6] = "KEYBOARD";
})(ANIMATION_SOURCE || (exports.ANIMATION_SOURCE = ANIMATION_SOURCE = {}));

var ANIMATION_METHOD;
exports.ANIMATION_METHOD = ANIMATION_METHOD;

(function (ANIMATION_METHOD) {
  ANIMATION_METHOD[ANIMATION_METHOD["TIMING"] = 0] = "TIMING";
  ANIMATION_METHOD[ANIMATION_METHOD["SPRING"] = 1] = "SPRING";
})(ANIMATION_METHOD || (exports.ANIMATION_METHOD = ANIMATION_METHOD = {}));

var KEYBOARD_STATE;
exports.KEYBOARD_STATE = KEYBOARD_STATE;

(function (KEYBOARD_STATE) {
  KEYBOARD_STATE[KEYBOARD_STATE["UNDETERMINED"] = 0] = "UNDETERMINED";
  KEYBOARD_STATE[KEYBOARD_STATE["SHOWN"] = 1] = "SHOWN";
  KEYBOARD_STATE[KEYBOARD_STATE["HIDDEN"] = 2] = "HIDDEN";
})(KEYBOARD_STATE || (exports.KEYBOARD_STATE = KEYBOARD_STATE = {}));

const ANIMATION_EASING = _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.exp);

exports.ANIMATION_EASING = ANIMATION_EASING;
const ANIMATION_DURATION = 250;
exports.ANIMATION_DURATION = ANIMATION_DURATION;
const ANIMATION_CONFIGS_IOS = {
  damping: 500,
  stiffness: 1000,
  mass: 3,
  overshootClamping: true,
  restDisplacementThreshold: 10,
  restSpeedThreshold: 10
};
const ANIMATION_CONFIGS_ANDROID = {
  duration: ANIMATION_DURATION,
  easing: ANIMATION_EASING
};
const ANIMATION_CONFIGS = _reactNative.Platform.OS === 'ios' ? ANIMATION_CONFIGS_IOS : ANIMATION_CONFIGS_ANDROID;
exports.ANIMATION_CONFIGS = ANIMATION_CONFIGS;
const SCROLLABLE_DECELERATION_RATE_MAPPER = {
  [SCROLLABLE_STATE.UNDETERMINED]: 0,
  [SCROLLABLE_STATE.LOCKED]: 0,
  [SCROLLABLE_STATE.UNLOCKED]: _reactNative.Platform.select({
    ios: 0.998,
    android: 0.985,
    default: 1
  })
};
exports.SCROLLABLE_DECELERATION_RATE_MAPPER = SCROLLABLE_DECELERATION_RATE_MAPPER;
const MODAL_STACK_BEHAVIOR = {
  replace: 'replace',
  push: 'push'
};
exports.MODAL_STACK_BEHAVIOR = MODAL_STACK_BEHAVIOR;
const KEYBOARD_BEHAVIOR = {
  interactive: 'interactive',
  extend: 'extend',
  fillParent: 'fillParent'
};
exports.KEYBOARD_BEHAVIOR = KEYBOARD_BEHAVIOR;
const KEYBOARD_BLUR_BEHAVIOR = {
  none: 'none',
  restore: 'restore'
};
exports.KEYBOARD_BLUR_BEHAVIOR = KEYBOARD_BLUR_BEHAVIOR;
const KEYBOARD_INPUT_MODE = {
  adjustPan: 'adjustPan',
  adjustResize: 'adjustResize'
};
exports.KEYBOARD_INPUT_MODE = KEYBOARD_INPUT_MODE;
const KEYBOARD_DISMISS_THRESHOLD = 12.5;
exports.KEYBOARD_DISMISS_THRESHOLD = KEYBOARD_DISMISS_THRESHOLD;
//# sourceMappingURL=constants.js.map
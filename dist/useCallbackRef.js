"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var useCallbackRef = function useCallbackRef(initialValue) {
  var callbackRef = (0, _react.useRef)(initialValue);
  callbackRef.current = initialValue;
  var setCallbackRef = (0, _react.useCallback)(function (nextCallback) {
    var invokeImmediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (nextCallback !== callbackRef.current && typeof nextCallback === 'function') {
      callbackRef.current = nextCallback;
      if (invokeImmediately) callbackRef.current();
    }
  });
  return [callbackRef, setCallbackRef];
};

var _default = useCallbackRef;
exports["default"] = _default;
//# sourceMappingURL=useCallbackRef.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(stringToBeReversed) {
    var newStringArray = [""];
    for (var i = stringToBeReversed.length; i >= 0; --i) {
        newStringArray.push(stringToBeReversed.charAt(i).toString());
    }
    return newStringArray.join("");
}
exports.reverse = reverse;

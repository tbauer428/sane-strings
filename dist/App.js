'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(stringToBeReversed) {
    var newStringArray = [''];
    for (var i = stringToBeReversed.length; i >= 0; --i) {
        newStringArray.push(stringToBeReversed.charAt(i).toString());
    }
    return newStringArray.join('');
}
exports.reverse = reverse;
function beSarcastic(stringToBeSarcastisized) {
    var sarcastisizedStringArray = [''];
    for (var i = 0; i < stringToBeSarcastisized.length; i++) {
        if (i % 2 == 0) {
            sarcastisizedStringArray.push(stringToBeSarcastisized.charAt(i).toUpperCase().toString());
        }
        else {
            sarcastisizedStringArray.push(stringToBeSarcastisized.charAt(i).toString());
        }
    }
    return sarcastisizedStringArray.join('');
}
exports.beSarcastic = beSarcastic;

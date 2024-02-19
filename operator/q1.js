"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var evenArr = [];
for (var i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        evenArr.push(i);
    }
}
console.log(evenArr);
var newArr = __spreadArray([], evenArr, true);
for (var j = 5; j <= 9; j++) {
    if (j % 2 !== 0) {
        newArr.push(j);
    }
}
exports.default = newArr;

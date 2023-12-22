"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/content.scss");
var Images_1 = __importDefault(require("./Images"));
var Video_1 = __importDefault(require("./Video"));
var Home_1 = __importDefault(require("./Home"));
function Content(_a) {
    var currentPage = _a.currentPage;
    var renderContent = function () {
        if (currentPage === 'home') {
            return (0, jsx_runtime_1.jsx)(Home_1.default, {});
        }
        else if (currentPage === 'images') {
            return (0, jsx_runtime_1.jsx)(Images_1.default, {});
        }
        else if (currentPage === 'video') {
            return (0, jsx_runtime_1.jsx)(Video_1.default, {});
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: renderContent() }));
}
exports.default = Content;

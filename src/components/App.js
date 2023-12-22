"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_1 = __importDefault(require("./Header"));
var Content_1 = __importDefault(require("./Content"));
var Footer_1 = __importDefault(require("./Footer"));
var react_1 = require("react");
function App() {
    var _a = (0, react_1.useState)('home'), currentPage = _a[0], setCurrentPage = _a[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, { setCurrentPage: setCurrentPage }), (0, jsx_runtime_1.jsx)(Content_1.default, { currentPage: currentPage }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = App;

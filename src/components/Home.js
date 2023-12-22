"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/content.scss");
var tennis_racket_png_1 = __importDefault(require("../assets/tennis-racket.png"));
function Home() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "home", children: [(0, jsx_runtime_1.jsxs)("div", { className: "title", children: [(0, jsx_runtime_1.jsx)("div", { className: "title-item-container", children: (0, jsx_runtime_1.jsx)("p", { className: "title-item-container-title-sub text-shadow", children: "Piero Davatz" }) }), (0, jsx_runtime_1.jsx)("div", { className: "title-item-container", children: (0, jsx_runtime_1.jsx)("h1", { className: "title-item-container-title", children: "E-Portfolio" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsx)("div", { className: "container-wrapper", children: (0, jsx_runtime_1.jsx)("img", { className: "container-wrapper-image", src: tennis_racket_png_1.default, alt: "Tennis Racket" }) }) })] }) }));
}
exports.default = Home;

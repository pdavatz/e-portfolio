"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/header.scss");
var tennis_svg_1 = __importDefault(require("../assets/tennis.svg"));
var react_1 = require("react");
function Header(_a) {
    var setCurrentPage = _a.setCurrentPage;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    (0, react_1.useEffect)(function () {
        var handler = function () {
            setOpen(false);
        };
        document.addEventListener("mousedown", handler);
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("header", { className: "header", children: [(0, jsx_runtime_1.jsx)("div", { className: "header-container", children: (0, jsx_runtime_1.jsx)("a", { className: "header-container-logo-link", onClick: function () { return setCurrentPage('home'); }, children: (0, jsx_runtime_1.jsx)("img", { className: "header-container-logo", src: tennis_svg_1.default, alt: "Logo E-Portfolio" }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "header-container-test", children: [(0, jsx_runtime_1.jsxs)("div", { className: "header-container header-container-navigation", children: [(0, jsx_runtime_1.jsx)("a", { className: "header-container-navigation-link", onClick: function () { return setCurrentPage('home'); }, children: "Home" }), (0, jsx_runtime_1.jsx)("a", { className: "header-container-navigation-link", onClick: function () { return setCurrentPage('images'); }, children: "Bilder" }), (0, jsx_runtime_1.jsx)("a", { className: "header-container-navigation-link", onClick: function () { return setCurrentPage('video'); }, children: "Video" })] }), (0, jsx_runtime_1.jsxs)("nav", { className: "header-mobile-navbar", children: [(0, jsx_runtime_1.jsx)("button", { className: "header-mobile-navbar-menu", onClick: function () { setOpen(!open); }, children: (0, jsx_runtime_1.jsx)("span", { className: "header-mobile-navbar-icon material-symbols-outlined", children: "menu" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "header-mobile-navbar-content ".concat(open ? 'active' : 'inactive'), children: [(0, jsx_runtime_1.jsx)("li", { className: "header-mobile-navbar-content-list-element", children: (0, jsx_runtime_1.jsx)("a", { className: "header-container-navigation-link header-mobile-navbar-link", onClick: function () { return setCurrentPage('home'); }, children: "Home" }) }), (0, jsx_runtime_1.jsx)("li", { className: "header-mobile-navbar-content-list-element", children: (0, jsx_runtime_1.jsx)("a", { className: "header-container-navigation-link header-mobile-navbar-link", onClick: function () { return setCurrentPage('images'); }, children: "Bilder" }) }), (0, jsx_runtime_1.jsx)("li", { className: "header-mobile-navbar-content-list-element", children: (0, jsx_runtime_1.jsx)("a", { className: "header-container-navigation-link header-mobile-navbar-link", onClick: function () { return setCurrentPage('video'); }, children: "Video" }) })] })] })] })] }) }));
}
exports.default = Header;

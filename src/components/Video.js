"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/video.scss");
function Video() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "video", children: [(0, jsx_runtime_1.jsx)("div", { className: "video-container", children: (0, jsx_runtime_1.jsx)("h1", { className: "video-container-title", children: "Video" }) }), (0, jsx_runtime_1.jsx)("div", { className: "video-container", children: (0, jsx_runtime_1.jsx)("iframe", { className: "video-container-iframe", width: "560", height: "315", src: "https://www.youtube.com/embed/jqYYy3jfJ-o?si=TBhG265278mUyJ14", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true }) })] }) }));
}
exports.default = Video;

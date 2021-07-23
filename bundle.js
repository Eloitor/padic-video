/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/svg-utils.ts":
/*!**************************!*\
  !*** ./lib/svg-utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graph": () => (/* binding */ graph),
/* harmony export */   "screenToSVG": () => (/* binding */ screenToSVG),
/* harmony export */   "screenToSVGVector": () => (/* binding */ screenToSVGVector)
/* harmony export */ });
function graph(f, a = 0, b = 1, sampling = 100) {
    const instructions = new Array(sampling + 1)
        .fill(null)
        .map((_, n) => {
        const [x, y] = f(a + (n / sampling) * (b - a));
        return (n === 0) ? `M ${x} ${y}` : `L ${x} ${y}`;
    });
    return instructions.join(" ");
}
function screenToSVG(elt, x, y) {
    let graphicsElt = elt;
    while (!(graphicsElt instanceof SVGGraphicsElement))
        graphicsElt = graphicsElt.parentNode;
    const svgElt = (elt instanceof SVGSVGElement ? elt : elt.ownerSVGElement);
    const transform = graphicsElt.getScreenCTM().inverse();
    let pt = svgElt.createSVGPoint();
    pt.x = x, pt.y = y;
    pt = pt.matrixTransform(transform);
    return [pt.x, pt.y];
}
function screenToSVGVector(svg, dx, dy) {
    const rect = svg.getBoundingClientRect(), viewBox = svg.viewBox.baseVal, aspectX = rect.width / viewBox.width, aspectY = rect.height / viewBox.height, svgDx = dx / aspectX, svgDy = dy / aspectY;
    return [svgDx, svgDy];
}


/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "darker": () => (/* binding */ darker),
/* harmony export */   "brighter": () => (/* binding */ brighter),
/* harmony export */   "default": () => (/* binding */ color),
/* harmony export */   "rgbConvert": () => (/* binding */ rgbConvert),
/* harmony export */   "rgb": () => (/* binding */ rgb),
/* harmony export */   "Rgb": () => (/* binding */ Rgb),
/* harmony export */   "hslConvert": () => (/* binding */ hslConvert),
/* harmony export */   "hsl": () => (/* binding */ hsl)
/* harmony export */ });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");

function Color() { }
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.default)(Color, color, {
    copy: function (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable: function () {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m)
        : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)
            : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff)
                : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff)
                    : null)
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1)
            : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1)
                : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4])
                    : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4])
                        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1)
                            : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4])
                                : named.hasOwnProperty(format) ? rgbn(named[format])
                                    : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
                                        : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0)
        r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color))
        o = color(o);
    if (!o)
        return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.default)(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
    brighter: function (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function () {
        return this;
    },
    displayable: function () {
        return (-0.5 <= this.r && this.r < 255.5)
            && (-0.5 <= this.g && this.g < 255.5)
            && (-0.5 <= this.b && this.b < 255.5)
            && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0)
        h = s = l = NaN;
    else if (l <= 0 || l >= 1)
        h = s = NaN;
    else if (s <= 0)
        h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl)
        return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color))
        o = color(o);
    if (!o)
        return new Hsl;
    if (o instanceof Hsl)
        return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max)
            h = (g - b) / s + (g < b) * 6;
        else if (g === max)
            h = (b - r) / s + 2;
        else
            h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    }
    else {
        s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.default)(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
    brighter: function (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s))
            && (0 <= this.l && this.l <= 1)
            && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function () {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "hsl(" : "hsla(")
            + (this.h || 0) + ", "
            + (this.s || 0) * 100 + "%, "
            + (this.l || 0) * 100 + "%"
            + (a === 1 ? ")" : ", " + a + ")");
    }
}));
function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
            : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
                : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "extend": () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition)
        prototype[key] = definition[key];
    return prototype;
}


/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = { value: () => { } };
function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
        if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t))
            throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0)
            name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t))
            throw new Error("unknown type: " + t);
        return { type: t, name: name };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function (typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        if (arguments.length < 2) {
            while (++i < n)
                if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
                    return t;
            return;
        }
        if (callback != null && typeof callback !== "function")
            throw new Error("invalid callback: " + callback);
        while (++i < n) {
            if (t = (typename = T[i]).type)
                _[t] = set(_[t], typename.name, callback);
            else if (callback == null)
                for (t in _)
                    _[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function () {
        var copy = {}, _ = this._;
        for (var t in _)
            copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function (type, that) {
        if ((n = arguments.length - 2) > 0)
            for (var args = new Array(n), i = 0, n, t; i < n; ++i)
                args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type))
            throw new Error("unknown type: " + type);
        for (t = this._[type], i = 0, n = t.length; i < n; ++i)
            t[i].value.apply(that, args);
    },
    apply: function (type, that, args) {
        if (!this._.hasOwnProperty(type))
            throw new Error("unknown type: " + type);
        for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
            t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
        if ((c = type[i]).name === name) {
            return c.value;
        }
    }
}
function set(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
        if (type[i].name === name) {
            type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
            break;
        }
    }
    if (callback != null)
        type.push({ name: name, value: callback });
    return type;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);


/***/ }),

/***/ "./node_modules/d3-drag/src/nodrag.js":
/*!********************************************!*\
  !*** ./node_modules/d3-drag/src/nodrag.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "yesdrag": () => (/* binding */ yesdrag)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/d3-drag/src/noevent.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(view) {
    var root = view.document.documentElement, selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.default)(view).on("dragstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__.default, _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
    if ("onselectstart" in root) {
        selection.on("selectstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__.default, _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
    }
    else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function yesdrag(view, noclick) {
    var root = view.document.documentElement, selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.default)(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__.default, _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
        setTimeout(function () { selection.on("click.drag", null); }, 0);
    }
    if ("onselectstart" in root) {
        selection.on("selectstart.drag", null);
    }
    else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}


/***/ }),

/***/ "./node_modules/d3-drag/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-drag/src/noevent.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nonpassive": () => (/* binding */ nonpassive),
/* harmony export */   "nonpassivecapture": () => (/* binding */ nonpassivecapture),
/* harmony export */   "nopropagation": () => (/* binding */ nopropagation),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nonpassive = { passive: false };
const nonpassivecapture = { capture: true, passive: false };
function nopropagation(event) {
    event.stopImmediatePropagation();
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cubicIn": () => (/* binding */ cubicIn),
/* harmony export */   "cubicOut": () => (/* binding */ cubicOut),
/* harmony export */   "cubicInOut": () => (/* binding */ cubicInOut)
/* harmony export */ });
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    return --t * t * t + 1;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basis": () => (/* binding */ basis),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0
        + (4 - 6 * t2 + 3 * t3) * v1
        + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
        + t3 * v3) / 6;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
    var n = values.length - 1;
    return function (t) {
        var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
    };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
    var n = values.length;
    return function (t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__.basis)((t - i / n) * n, v0, v1, v2, v3);
    };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hue": () => (/* binding */ hue),
/* harmony export */   "gamma": () => (/* binding */ gamma),
/* harmony export */   "default": () => (/* binding */ nogamma)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");

function linear(a, d) {
    return function (t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function (a, b) {
        return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
    return a = +a, b = +b, function (t) {
        return a * (1 - t) + b * t;
    };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rgbBasis": () => (/* binding */ rgbBasis),
/* harmony export */   "rgbBasisClosed": () => (/* binding */ rgbBasisClosed)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {
    var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.gamma)(y);
    function rgb(start, end) {
        var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.default)(start.opacity, end.opacity);
        return function (t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
})(1));
function rgbSpline(spline) {
    return function (colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for (i = 0; i < n; ++i) {
            color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function (t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__.default);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__.default);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function () {
        return b;
    };
}
function one(b) {
    return function (t) {
        return b(t) + "";
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i])
                s[i] += bs;
            else
                s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i])
                s[i] += bm;
            else
                s[++i] = bm;
        }
        else {
            s[++i] = null;
            q.push({ i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__.default)(am, bm) });
        }
        bi = reB.lastIndex;
    }
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i])
            s[i] += bs;
        else
            s[++i] = bs;
    }
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function (t) {
            for (var i = 0, o; i < b; ++i)
                s[(o = q[i]).i] = o.x(t);
            return s.join("");
        });
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var degrees = 180 / Math.PI;
var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b))
        a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d)
        c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d))
        c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c)
        a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interpolateTransformCss": () => (/* binding */ interpolateTransformCss),
/* harmony export */   "interpolateTransformSvg": () => (/* binding */ interpolateTransformSvg)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/d3-interpolate/src/transform/parse.js");


function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({ i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__.default)(xa, xb) }, { i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__.default)(ya, yb) });
        }
        else if (xb || yb) {
            s.push("translate(" + xb + pxComma + yb + pxParen);
        }
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180)
                b += 360;
            else if (b - a > 180)
                a += 360;
            q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__.default)(a, b) });
        }
        else if (b) {
            s.push(pop(s) + "rotate(" + b + degParen);
        }
    }
    function skewX(a, b, s, q) {
        if (a !== b) {
            q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__.default)(a, b) });
        }
        else if (b) {
            s.push(pop(s) + "skewX(" + b + degParen);
        }
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({ i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__.default)(xa, xb) }, { i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__.default)(ya, yb) });
        }
        else if (xb !== 1 || yb !== 1) {
            s.push(pop(s) + "scale(" + xb + "," + yb + ")");
        }
    }
    return function (a, b) {
        var s = [], q = [];
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null;
        return function (t) {
            var i = -1, n = q.length, o;
            while (++i < n)
                s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__.parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__.parseSvg, ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseCss": () => (/* binding */ parseCss),
/* harmony export */   "parseSvg": () => (/* binding */ parseSvg)
/* harmony export */ });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose.js */ "./node_modules/d3-interpolate/src/transform/decompose.js");

var svgNode;
function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity : (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__.default)(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
    if (value == null)
        return _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity;
    if (!svgNode)
        svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate()))
        return _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity;
    value = value.matrix;
    return (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__.default)(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var epsilon2 = 1e-12;
function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function zoomRho(rho, rho2, rho4) {
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        if (d2 < epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function (t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        }
        else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function (t) {
                var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function (_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
})(Math.SQRT2, 2, 4));


/***/ }),

/***/ "./node_modules/d3-selection/src/array.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/array.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ array)
/* harmony export */ });
function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
    return function () {
        return x;
    };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespace.js */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");


function creatorInherit(name) {
    return function () {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml
            ? document.createElement(name)
            : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function () {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
    var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default)(name);
    return (fullname.local
        ? creatorFixed
        : creatorInherit)(fullname);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "childMatcher": () => (/* binding */ childMatcher)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
    return function () {
        return this.matches(selector);
    };
}
function childMatcher(selector) {
    return function (node) {
        return node.matches(selector);
    };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
        name = name.slice(i + 1);
    return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.default.hasOwnProperty(prefix) ? { space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.default[prefix], local: name } : name;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xhtml": () => (/* binding */ xhtml),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var xhtml = "http://www.w3.org/1999/xhtml";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/d3-selection/src/pointer.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/pointer.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent.js */ "./node_modules/d3-selection/src/sourceEvent.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event, node) {
    event = (0,_sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__.default)(event);
    if (node === undefined)
        node = event.currentTarget;
    if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [point.x, point.y];
        }
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
        }
    }
    return [event.pageX, event.pageY];
}


/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-selection/src/selection/index.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
    return typeof selector === "string"
        ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[document.querySelector(selector)]], [document.documentElement])
        : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.root);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
    var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.default)(name);
    return this.select(function () {
        return this.appendChild(create.apply(this, arguments));
    });
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace.js */ "./node_modules/d3-selection/src/namespace.js");

function attrRemove(name) {
    return function () {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function () {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function () {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function () {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            this.removeAttribute(name);
        else
            this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            this.removeAttributeNS(fullname.space, fullname.local);
        else
            this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
    var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default)(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local
            ? node.getAttributeNS(fullname.space, fullname.local)
            : node.getAttribute(fullname);
    }
    return this.each((value == null
        ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
        ? (fullname.local ? attrFunctionNS : attrFunction)
        : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function (name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function (name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function (name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
        list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
        list.remove(names[i]);
}
function classedTrue(names) {
    return function () {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function () {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function () {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while (++i < n)
            if (!list.contains(names[i]))
                return false;
        return true;
    }
    return this.each((typeof value === "function"
        ? classedFunction : value
        ? classedTrue
        : classedFalse)(names, value));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-selection/src/constant.js");



function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    for (; i < dataLength; ++i) {
        if (node = group[i]) {
            node.__data__ = data[i];
            update[i] = node;
        }
        else {
            enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);
        }
    }
    for (; i < groupLength; ++i) {
        if (node = group[i]) {
            exit[i] = node;
        }
    }
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    for (i = 0; i < groupLength; ++i) {
        if (node = group[i]) {
            keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
            if (nodeByKeyValue.has(keyValue)) {
                exit[i] = node;
            }
            else {
                nodeByKeyValue.set(keyValue, node);
            }
        }
    }
    for (i = 0; i < dataLength; ++i) {
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        }
        else {
            enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);
        }
    }
    for (i = 0; i < groupLength; ++i) {
        if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
            exit[i] = node;
        }
    }
}
function datum(node) {
    return node.__data__;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value, key) {
    if (!arguments.length)
        return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function")
        value = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__.default)(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
        var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
            if (previous = enterGroup[i0]) {
                if (i0 >= i1)
                    i1 = i0 + 1;
                while (!(next = updateGroup[i1]) && ++i1 < dataLength)
                    ;
                previous._next = next || null;
            }
        }
    }
    update = new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}
function arraylike(data) {
    return typeof data === "object" && "length" in data
        ? data
        : Array.from(data);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
    return arguments.length
        ? this.property("__data__", value)
        : this.node().__data__;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");

function dispatchEvent(node, type, params) {
    var window = (0,_window_js__WEBPACK_IMPORTED_MODULE_0__.default)(node), event = window.CustomEvent;
    if (typeof event === "function") {
        event = new event(type, params);
    }
    else {
        event = window.document.createEvent("Event");
        if (params)
            event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else
            event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function () {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function () {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(type, params) {
    return this.each((typeof params === "function"
        ? dispatchFunction
        : dispatchConstant)(type, params));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
            if (node = group[i])
                callback.call(node, node.__data__, i, group);
        }
    }
    return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return !this.node();
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "EnterNode": () => (/* binding */ EnterNode)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__.default), this._parents);
}
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function (child) { return this._parent.insertBefore(child, this._next); },
    insertBefore: function (child, next) { return this._parent.insertBefore(child, next); },
    querySelector: function (selector) { return this._parent.querySelector(selector); },
    querySelectorAll: function (selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__.default), this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
    if (typeof match !== "function")
        match = (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.default)(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
            }
        }
    }
    return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function () {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function () {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
    return arguments.length
        ? this.each(value == null
            ? htmlRemove : (typeof value === "function"
            ? htmlFunction
            : htmlConstant)(value))
        : this.node().innerHTML;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "Selection": () => (/* binding */ Selection),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectChild.js */ "./node_modules/d3-selection/src/selection/selectChild.js");
/* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectChildren.js */ "./node_modules/d3-selection/src/selection/selectChildren.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.js */ "./node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exit.js */ "./node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./join.js */ "./node_modules/d3-selection/src/selection/join.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order.js */ "./node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort.js */ "./node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./call.js */ "./node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nodes.js */ "./node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node.js */ "./node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./size.js */ "./node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./empty.js */ "./node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./each.js */ "./node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./style.js */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./property.js */ "./node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./classed.js */ "./node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./html.js */ "./node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./raise.js */ "./node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lower.js */ "./node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./append.js */ "./node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./insert.js */ "./node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./clone.js */ "./node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./datum.js */ "./node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./on.js */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/d3-selection/src/selection/dispatch.js");
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./iterator.js */ "./node_modules/d3-selection/src/selection/iterator.js");


































var root = [null];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([[document.documentElement]], root);
}
function selection_selection() {
    return this;
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: _select_js__WEBPACK_IMPORTED_MODULE_0__.default,
    selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__.default,
    selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__.default,
    selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__.default,
    filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__.default,
    data: _data_js__WEBPACK_IMPORTED_MODULE_5__.default,
    enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__.default,
    exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__.default,
    join: _join_js__WEBPACK_IMPORTED_MODULE_8__.default,
    merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__.default,
    selection: selection_selection,
    order: _order_js__WEBPACK_IMPORTED_MODULE_10__.default,
    sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__.default,
    call: _call_js__WEBPACK_IMPORTED_MODULE_12__.default,
    nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__.default,
    node: _node_js__WEBPACK_IMPORTED_MODULE_14__.default,
    size: _size_js__WEBPACK_IMPORTED_MODULE_15__.default,
    empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__.default,
    each: _each_js__WEBPACK_IMPORTED_MODULE_17__.default,
    attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__.default,
    style: _style_js__WEBPACK_IMPORTED_MODULE_19__.default,
    property: _property_js__WEBPACK_IMPORTED_MODULE_20__.default,
    classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__.default,
    text: _text_js__WEBPACK_IMPORTED_MODULE_22__.default,
    html: _html_js__WEBPACK_IMPORTED_MODULE_23__.default,
    raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__.default,
    lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__.default,
    append: _append_js__WEBPACK_IMPORTED_MODULE_26__.default,
    insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__.default,
    remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__.default,
    clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__.default,
    datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__.default,
    on: _on_js__WEBPACK_IMPORTED_MODULE_31__.default,
    dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__.default,
    [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__.default
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selection);


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");


function constantNull() {
    return null;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, before) {
    var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.default)(name), select = before == null ? constantNull : typeof before === "function" ? before : (0,_selector_js__WEBPACK_IMPORTED_MODULE_1__.default)(before);
    return this.select(function () {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
            if (node = group[i])
                yield node;
        }
    }
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter)
            enter = enter.selection();
    }
    else {
        enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
        update = onupdate(update);
        if (update)
            update = update.selection();
    }
    if (onexit == null)
        exit.remove();
    else
        onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lower() {
    if (this.previousSibling)
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return this.each(lower);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
    var selection = context.selection ? context.selection() : context;
    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
        for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group0[i] || group1[i]) {
                merge[i] = node;
            }
        }
    }
    for (; j < m0; ++j) {
        merges[j] = groups0[j];
    }
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(merges, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
            var node = group[i];
            if (node)
                return node;
        }
    }
    return null;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return Array.from(this);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contextListener(listener) {
    return function (event) {
        listener.call(this, event, this.__data__);
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0)
            name = t.slice(i + 1), t = t.slice(0, i);
        return { type: t, name: name };
    });
}
function onRemove(typename) {
    return function () {
        var on = this.__on;
        if (!on)
            return;
        for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
            if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
            }
            else {
                on[++i] = o;
            }
        }
        if (++i)
            on.length = i;
        else
            delete this.__on;
    };
}
function onAdd(typename, value, options) {
    return function () {
        var on = this.__on, o, listener = contextListener(value);
        if (on)
            for (var j = 0, m = on.length; j < m; ++j) {
                if ((o = on[j]).type === typename.type && o.name === typename.name) {
                    this.removeEventListener(o.type, o.listener, o.options);
                    this.addEventListener(o.type, o.listener = listener, o.options = options);
                    o.value = value;
                    return;
                }
            }
        this.addEventListener(typename.type, listener, options);
        o = { type: typename.type, name: typename.name, value: value, listener: listener, options: options };
        if (!on)
            this.__on = [o];
        else
            on.push(o);
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on)
            for (var j = 0, m = on.length, o; j < m; ++j) {
                for (i = 0, o = on[j]; i < n; ++i) {
                    if ((t = typenames[i]).type === o.type && t.name === o.name) {
                        return o.value;
                    }
                }
            }
        return;
    }
    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i)
        this.each(on(typenames[i], value, options));
    return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
        for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
            if (node = group[i]) {
                if (next && node.compareDocumentPosition(next) ^ 4)
                    next.parentNode.insertBefore(node, next);
                next = node;
            }
        }
    }
    return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function propertyRemove(name) {
    return function () {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function () {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            delete this[name];
        else
            this[name] = v;
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
    return arguments.length > 1
        ? this.each((value == null
            ? propertyRemove : typeof value === "function"
            ? propertyFunction
            : propertyConstant)(name, value))
        : this.node()[name];
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function raise() {
    if (this.nextSibling)
        this.parentNode.appendChild(this);
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return this.each(raise);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function remove() {
    var parent = this.parentNode;
    if (parent)
        parent.removeChild(this);
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return this.each(remove);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
    if (typeof select !== "function")
        select = (0,_selector_js__WEBPACK_IMPORTED_MODULE_0__.default)(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node)
                    subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
            }
        }
    }
    return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-selection/src/array.js");
/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll.js */ "./node_modules/d3-selection/src/selectorAll.js");



function arrayAll(select) {
    return function () {
        return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.default)(select.apply(this, arguments));
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
    if (typeof select === "function")
        select = arrayAll(select);
    else
        select = (0,_selectorAll_js__WEBPACK_IMPORTED_MODULE_1__.default)(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
            }
        }
    }
    return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(subgroups, parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChild.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChild.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");

var find = Array.prototype.find;
function childFind(match) {
    return function () {
        return find.call(this.children, match);
    };
}
function childFirst() {
    return this.firstElementChild;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
    return this.select(match == null ? childFirst
        : childFind(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChildren.js":
/*!*******************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChildren.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");

var filter = Array.prototype.filter;
function children() {
    return Array.from(this.children);
}
function childrenFilter(match) {
    return function () {
        return filter.call(this.children, match);
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
    return this.selectAll(match == null ? children
        : childrenFilter(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    let size = 0;
    for (const node of this)
        ++size;
    return size;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {
    if (!compare)
        compare = ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                sortgroup[i] = node;
            }
        }
        sortgroup.sort(compareNode);
    }
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(sortgroups, this._parents).order();
}
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(update) {
    return new Array(update.length);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styleValue": () => (/* binding */ styleValue)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");

function styleRemove(name) {
    return function () {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function () {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            this.style.removeProperty(name);
        else
            this.style.setProperty(name, v, priority);
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
    return arguments.length > 1
        ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
        : styleValue(this.node(), name);
}
function styleValue(node, name) {
    return node.style.getPropertyValue(name)
        || (0,_window_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function () {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function () {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
    return arguments.length
        ? this.each(value == null
            ? textRemove : (typeof value === "function"
            ? textFunction
            : textConstant)(value))
        : this.node().textContent;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function none() { }
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
    return selector == null ? none : function () {
        return this.querySelector(selector);
    };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function empty() {
    return [];
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
    return selector == null ? empty : function () {
        return this.querySelectorAll(selector);
    };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
    let sourceEvent;
    while (sourceEvent = event.sourceEvent)
        event = sourceEvent;
    return event;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
    return (node.ownerDocument && node.ownerDocument.defaultView)
        || (node.document && node)
        || node.defaultView;
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {
    var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__.Timer;
    delay = delay == null ? 0 : +delay;
    t.restart(elapsed => {
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "Timer": () => (/* binding */ Timer),
/* harmony export */   "timer": () => (/* binding */ timer),
/* harmony export */   "timerFlush": () => (/* binding */ timerFlush)
/* harmony export */ });
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) { setTimeout(f, 17); };
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call =
        this._time =
            this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function (callback, delay, time) {
        if (typeof callback !== "function")
            throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail)
                taskTail._next = this;
            else
                taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function () {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now();
    ++frame;
    var t = taskHead, e;
    while (t) {
        if ((e = clockNow - t._time) >= 0)
            t._call.call(undefined, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    }
    finally {
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay)
        clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
        if (t1._call) {
            if (time > t1._time)
                time = t1._time;
            t0 = t1, t1 = t1._next;
        }
        else {
            t2 = t1._next, t1._next = null;
            t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame)
        return;
    if (timeout)
        timeout = clearTimeout(timeout);
    var delay = time - clockNow;
    if (delay > 24) {
        if (time < Infinity)
            timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval)
            interval = clearInterval(interval);
    }
    else {
        if (!interval)
            clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/active.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-transition/src/active.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


var root = [null];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
    var schedules = node.__transition, schedule, i;
    if (schedules) {
        name = name == null ? null : name + "";
        for (i in schedules) {
            if ((schedule = schedules[i]).state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.SCHEDULED && schedule.name === name) {
                return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition([[node]], root, name, +i);
            }
        }
    }
    return null;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-transition/src/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transition": () => (/* reexport safe */ _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "active": () => (/* reexport safe */ _active_js__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "interrupt": () => (/* reexport safe */ _interrupt_js__WEBPACK_IMPORTED_MODULE_3__.default)
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-transition/src/selection/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _active_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active.js */ "./node_modules/d3-transition/src/active.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");






/***/ }),

/***/ "./node_modules/d3-transition/src/interrupt.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules)
        return;
    name = name == null ? null : name + "";
    for (i in schedules) {
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.STARTING && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.ENDING;
        schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.ENDED;
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty)
        delete node.__transition;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/selection/interrupt.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/selection/transition.js");



d3_selection__WEBPACK_IMPORTED_MODULE_0__.default.prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__.default;
d3_selection__WEBPACK_IMPORTED_MODULE_0__.default.prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__.default;


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
    return this.each(function () {
        (0,_interrupt_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, name);
    });
}


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/transition.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/cubic.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");




var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: d3_ease__WEBPACK_IMPORTED_MODULE_0__.cubicInOut
};
function inherit(node, id) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id])) {
        if (!(node = node.parentNode)) {
            throw new Error(`transition ${id} not found`);
        }
    }
    return timing;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
    var id, timing;
    if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition) {
        id = name._id, name = name._name;
    }
    else {
        id = (0,_transition_index_js__WEBPACK_IMPORTED_MODULE_1__.newId)(), (timing = defaultTiming).time = (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__.now)(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                (0,_transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__.default)(node, name, id, i, group, timing || inherit(node, id));
            }
        }
    }
    return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition(groups, this._parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attr.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");




function attrRemove(name) {
    return function () {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function () {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function () {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
                : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function () {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
                : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
        var string0, value1 = value(this), string1;
        if (value1 == null)
            return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
                : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
        var string0, value1 = value(this), string1;
        if (value1 == null)
            return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
                : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
    var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.default)(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__.interpolateTransformSvg : _interpolate_js__WEBPACK_IMPORTED_MODULE_2__.default;
    return this.attrTween(name, typeof value === "function"
        ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_3__.tweenValue)(this, "attr." + name, value))
        : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
            : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/namespace.js");

function attrInterpolate(name, i) {
    return function (t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function attrInterpolateNS(fullname, i) {
    return function (t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0)
            t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0)
            t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2)
        return (key = this.tween(key)) && key._value;
    if (value == null)
        return this.tween(key, null);
    if (typeof value !== "function")
        throw new Error;
    var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.default)(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

function delayFunction(id, value) {
    return function () {
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.init)(this, id).delay = +value.apply(this, arguments);
    };
}
function delayConstant(id, value) {
    return value = +value, function () {
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.init)(this, id).delay = value;
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
    var id = this._id;
    return arguments.length
        ? this.each((typeof value === "function"
            ? delayFunction
            : delayConstant)(id, value))
        : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).delay;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/duration.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

function durationFunction(id, value) {
    return function () {
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).duration = +value.apply(this, arguments);
    };
}
function durationConstant(id, value) {
    return value = +value, function () {
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).duration = value;
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
    var id = this._id;
    return arguments.length
        ? this.each((typeof value === "function"
            ? durationFunction
            : durationConstant)(id, value))
        : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).duration;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/ease.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

function easeConstant(id, value) {
    if (typeof value !== "function")
        throw new Error;
    return function () {
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).ease = value;
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
    var id = this._id;
    return arguments.length
        ? this.each(easeConstant(id, value))
        : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).ease;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/easeVarying.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/easeVarying.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

function easeVarying(id, value) {
    return function () {
        var v = value.apply(this, arguments);
        if (typeof v !== "function")
            throw new Error;
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).ease = v;
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
    if (typeof value !== "function")
        throw new Error;
    return this.each(easeVarying(this._id, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/end.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/end.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function (resolve, reject) {
        var cancel = { value: reject }, end = { value: function () { if (--size === 0)
                resolve(); } };
        that.each(function () {
            var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id), on = schedule.on;
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
        if (size === 0)
            resolve();
    });
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/matcher.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
    if (typeof match !== "function")
        match = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.default)(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
            }
        }
    }
    return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Transition(subgroups, this._parents, this._name, this._id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "default": () => (/* binding */ transition),
/* harmony export */   "newId": () => (/* binding */ newId)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-transition/src/transition/attr.js");
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attrTween.js */ "./node_modules/d3-transition/src/transition/attrTween.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./delay.js */ "./node_modules/d3-transition/src/transition/delay.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-transition/src/transition/duration.js");
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ease.js */ "./node_modules/d3-transition/src/transition/ease.js");
/* harmony import */ var _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./easeVarying.js */ "./node_modules/d3-transition/src/transition/easeVarying.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-transition/src/transition/filter.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-transition/src/transition/merge.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./on.js */ "./node_modules/d3-transition/src/transition/on.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-transition/src/transition/remove.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-transition/src/transition/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-transition/src/transition/selectAll.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection.js */ "./node_modules/d3-transition/src/transition/selection.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.js */ "./node_modules/d3-transition/src/transition/style.js");
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styleTween.js */ "./node_modules/d3-transition/src/transition/styleTween.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-transition/src/transition/text.js");
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./textTween.js */ "./node_modules/d3-transition/src/transition/textTween.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/transition/transition.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./end.js */ "./node_modules/d3-transition/src/transition/end.js");





















var id = 0;
function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function transition(name) {
    return (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.default)().transition(name);
}
function newId() {
    return ++id;
}
var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__.default.prototype;
Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: _select_js__WEBPACK_IMPORTED_MODULE_1__.default,
    selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_2__.default,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: _filter_js__WEBPACK_IMPORTED_MODULE_3__.default,
    merge: _merge_js__WEBPACK_IMPORTED_MODULE_4__.default,
    selection: _selection_js__WEBPACK_IMPORTED_MODULE_5__.default,
    transition: _transition_js__WEBPACK_IMPORTED_MODULE_6__.default,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: _on_js__WEBPACK_IMPORTED_MODULE_7__.default,
    attr: _attr_js__WEBPACK_IMPORTED_MODULE_8__.default,
    attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_9__.default,
    style: _style_js__WEBPACK_IMPORTED_MODULE_10__.default,
    styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_11__.default,
    text: _text_js__WEBPACK_IMPORTED_MODULE_12__.default,
    textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_13__.default,
    remove: _remove_js__WEBPACK_IMPORTED_MODULE_14__.default,
    tween: _tween_js__WEBPACK_IMPORTED_MODULE_15__.default,
    delay: _delay_js__WEBPACK_IMPORTED_MODULE_16__.default,
    duration: _duration_js__WEBPACK_IMPORTED_MODULE_17__.default,
    ease: _ease_js__WEBPACK_IMPORTED_MODULE_18__.default,
    easeVarying: _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__.default,
    end: _end_js__WEBPACK_IMPORTED_MODULE_20__.default,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
};


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/string.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
    var c;
    return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__.default
        : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_1__.default ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__.default
            : (c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.default)(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_2__.default)
                : d3_interpolate__WEBPACK_IMPORTED_MODULE_3__.default)(a, b);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transition) {
    if (transition._id !== this._id)
        throw new Error;
    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
        for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group0[i] || group1[i]) {
                merge[i] = node;
            }
        }
    }
    for (; j < m0; ++j) {
        merges[j] = groups0[j];
    }
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Transition(merges, this._parents, this._name, this._id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/on.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function (t) {
        var i = t.indexOf(".");
        if (i >= 0)
            t = t.slice(0, i);
        return !t || t === "start";
    });
}
function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__.init : _schedule_js__WEBPACK_IMPORTED_MODULE_0__.set;
    return function () {
        var schedule = sit(this, id), on = schedule.on;
        if (on !== on0)
            (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, listener) {
    var id = this._id;
    return arguments.length < 2
        ? (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).on.on(name)
        : this.each(onFunction(id, name, listener));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/remove.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeFunction(id) {
    return function () {
        var parent = this.parentNode;
        for (var i in this.__transition)
            if (+i !== id)
                return;
        if (parent)
            parent.removeChild(this);
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return this.on("end.remove", removeFunction(this._id));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATED": () => (/* binding */ CREATED),
/* harmony export */   "SCHEDULED": () => (/* binding */ SCHEDULED),
/* harmony export */   "STARTING": () => (/* binding */ STARTING),
/* harmony export */   "STARTED": () => (/* binding */ STARTED),
/* harmony export */   "RUNNING": () => (/* binding */ RUNNING),
/* harmony export */   "ENDING": () => (/* binding */ ENDING),
/* harmony export */   "ENDED": () => (/* binding */ ENDED),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "get": () => (/* binding */ get)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timeout.js");


var emptyOn = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__.default)("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules)
        node.__transition = {};
    else if (id in schedules)
        return;
    create(node, id, {
        name: name,
        index: index,
        group: group,
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
    });
}
function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED)
        throw new Error("too late; already scheduled");
    return schedule;
}
function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED)
        throw new Error("too late; already running");
    return schedule;
}
function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id]))
        throw new Error("transition not found");
    return schedule;
}
function create(node, id, self) {
    var schedules = node.__transition, tween;
    schedules[id] = self;
    self.timer = (0,d3_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);
        if (self.delay <= elapsed)
            start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        if (self.state !== SCHEDULED)
            return stop();
        for (i in schedules) {
            o = schedules[i];
            if (o.name !== self.name)
                continue;
            if (o.state === STARTED)
                return (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__.default)(start);
            if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
            else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__.default)(function () {
            if (self.state === STARTED) {
                self.state = RUNNING;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING)
            return;
        self.state = STARTED;
        tween = new Array(n = self.tween.length);
        for (i = 0, j = -1; i < n; ++i) {
            if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
                tween[++j] = o;
            }
        }
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
        while (++i < n) {
            tween[i].call(node, t);
        }
        if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for (var i in schedules)
            return;
        delete node.__transition;
    }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selector.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function")
        select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.default)(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node)
                    subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
                (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.default)(subgroup[i], name, id, i, subgroup, (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id));
            }
        }
    }
    return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Transition(subgroups, this._parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selectorAll.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function")
        select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.default)(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                for (var children = select.call(node, node.__data__, i, group), child, inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id), k = 0, l = children.length; k < l; ++k) {
                    if (child = children[k]) {
                        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.default)(child, name, id, k, children, inherit);
                    }
                }
                subgroups.push(children);
                parents.push(node);
            }
        }
    }
    return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Transition(subgroups, parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");

var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__.default.prototype.constructor;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return new Selection(this._groups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/style.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");





function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function () {
        var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name), string1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name));
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
                : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function styleRemove(name) {
    return function () {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function () {
        var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
                : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
        var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null)
            string1 = value1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name));
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
                : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function () {
        var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.set)(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;
        if (on !== on0 || listener0 !== listener)
            (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
    var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__.interpolateTransformCss : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__.default;
    return value == null ? this
        .styleTween(name, styleNull(name, i))
        .on("end.style." + name, styleRemove(name))
        : typeof value === "function" ? this
            .styleTween(name, styleFunction(name, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_4__.tweenValue)(this, "style." + name, value)))
            .each(styleMaybeRemove(this._id, name))
            : this
                .styleTween(name, styleConstant(name, i, value), priority)
                .on("end.style." + name, null);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleInterpolate(name, i, priority) {
    return function (t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0)
            t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2)
        return (key = this.tween(key)) && key._value;
    if (value == null)
        return this.tween(key, null);
    if (typeof value !== "function")
        throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");

function textConstant(value) {
    return function () {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function () {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
    return this.tween("text", typeof value === "function"
        ? textFunction((0,_tween_js__WEBPACK_IMPORTED_MODULE_0__.tweenValue)(this, "text", value))
        : textConstant(value == null ? "" : value + ""));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/textTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/textTween.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textInterpolate(i) {
    return function (t) {
        this.textContent = i.call(this, t);
    };
}
function textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0)
            t0 = (i0 = i) && textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
    var key = "text";
    if (arguments.length < 1)
        return (key = this.tween(key)) && key._value;
    if (value == null)
        return this.tween(key, null);
    if (typeof value !== "function")
        throw new Error;
    return this.tween(key, textTween(value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/transition.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    var name = this._name, id0 = this._id, id1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.newId)();
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                var inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id0);
                (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.default)(node, name, id1, i, group, {
                    time: inherit.time + inherit.delay + inherit.duration,
                    delay: 0,
                    duration: inherit.duration,
                    ease: inherit.ease
                });
            }
        }
    }
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Transition(groups, this._parents, name, id1);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/tween.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tweenValue": () => (/* binding */ tweenValue)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

function tweenRemove(id, name) {
    var tween0, tween1;
    return function () {
        var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id), tween = schedule.tween;
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for (var i = 0, n = tween1.length; i < n; ++i) {
                if (tween1[i].name === name) {
                    tween1 = tween1.slice();
                    tween1.splice(i, 1);
                    break;
                }
            }
        }
        schedule.tween = tween1;
    };
}
function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function")
        throw new Error;
    return function () {
        var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id), tween = schedule.tween;
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for (var t = { name: name, value: value }, i = 0, n = tween1.length; i < n; ++i) {
                if (tween1[i].name === name) {
                    tween1[i] = t;
                    break;
                }
            }
            if (i === n)
                tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).tween;
        for (var i = 0, n = tween.length, t; i < n; ++i) {
            if ((t = tween[i]).name === name) {
                return t.value;
            }
        }
        return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}
function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function () {
        var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function (node) {
        return (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(node, id).value[name];
    };
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/constant.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-zoom/src/constant.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-zoom/src/event.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/event.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomEvent)
/* harmony export */ });
function ZoomEvent(type, { sourceEvent, target, transform, dispatch }) {
    Object.defineProperties(this, {
        type: { value: type, enumerable: true, configurable: true },
        sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
        target: { value: target, enumerable: true, configurable: true },
        transform: { value: transform, enumerable: true, configurable: true },
        _: { value: dispatch }
    });
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zoom": () => (/* reexport safe */ _zoom_js__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "zoomTransform": () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "zoomIdentity": () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__.identity),
/* harmony export */   "ZoomTransform": () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__.Transform)
/* harmony export */ });
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom.js */ "./node_modules/d3-zoom/src/zoom.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform.js */ "./node_modules/d3-zoom/src/transform.js");




/***/ }),

/***/ "./node_modules/d3-zoom/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-zoom/src/noevent.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nopropagation": () => (/* binding */ nopropagation),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function nopropagation(event) {
    event.stopImmediatePropagation();
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/transform.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-zoom/src/transform.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => (/* binding */ Transform),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "default": () => (/* binding */ transform)
/* harmony export */ });
function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
Transform.prototype = {
    constructor: Transform,
    scale: function (k) {
        return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function (x, y) {
        return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function (point) {
        return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function (x) {
        return x * this.k + this.x;
    },
    applyY: function (y) {
        return y * this.k + this.y;
    },
    invert: function (location) {
        return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function (x) {
        return (x - this.x) / this.k;
    },
    invertY: function (y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function (x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function (y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function () {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
    while (!node.__zoom)
        if (!(node = node.parentNode))
            return identity;
    return node.__zoom;
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/zoom.js":
/*!******************************************!*\
  !*** ./node_modules/d3-zoom/src/zoom.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-drag */ "./node_modules/d3-drag/src/nodrag.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/pointer.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-zoom/src/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.js */ "./node_modules/d3-zoom/src/event.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform.js */ "./node_modules/d3-zoom/src/transform.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/d3-zoom/src/noevent.js");









function defaultFilter(event) {
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}
function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
        }
        return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
    }
    return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
    return this.__zoom || _transform_js__WEBPACK_IMPORTED_MODULE_3__.identity;
}
function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
    return navigator.maxTouchPoints || ("ontouchstart" in this);
}
function defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_5__.default, listeners = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_6__.default)("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
        selection
            .property("__zoom", defaultTransform)
            .on("wheel.zoom", wheeled, { passive: false })
            .on("mousedown.zoom", mousedowned)
            .on("dblclick.zoom", dblclicked)
            .filter(touchable)
            .on("touchstart.zoom", touchstarted)
            .on("touchmove.zoom", touchmoved)
            .on("touchend.zoom touchcancel.zoom", touchended)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function (collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", defaultTransform);
        if (collection !== selection) {
            schedule(collection, transform, point, event);
        }
        else {
            selection.interrupt().each(function () {
                gesture(this, arguments)
                    .event(event)
                    .start()
                    .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
                    .end();
            });
        }
    };
    zoom.scaleBy = function (selection, k, p, event) {
        zoom.scaleTo(selection, function () {
            var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
        }, p, event);
    };
    zoom.scaleTo = function (selection, k, p, event) {
        zoom.transform(selection, function () {
            var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
    };
    zoom.translateBy = function (selection, x, y, event) {
        zoom.transform(selection, function () {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
        }, null, event);
    };
    zoom.translateTo = function (selection, x, y, p, event) {
        zoom.transform(selection, function () {
            var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain(_transform_js__WEBPACK_IMPORTED_MODULE_3__.identity.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(transform.k, x, y);
    }
    function centroid(extent) {
        return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
    }
    function schedule(transition, transform, point, event) {
        transition
            .on("start.zoom", function () { gesture(this, arguments).event(event).start(); })
            .on("interrupt.zoom end.zoom", function () { gesture(this, arguments).event(event).end(); })
            .tween("zoom", function () {
            var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function (t) {
                if (t === 1)
                    t = b;
                else {
                    var l = i(t), k = w / l[2];
                    t = new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
            };
        });
    }
    function gesture(that, args, clean) {
        return (!clean && that.__zooming) || new Gesture(that, args);
    }
    function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent.apply(that, args);
        this.taps = 0;
    }
    Gesture.prototype = {
        event: function (event) {
            if (event)
                this.sourceEvent = event;
            return this;
        },
        start: function () {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function (key, transform) {
            if (this.mouse && key !== "mouse")
                this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch")
                this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch")
                this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function () {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function (type) {
            var d = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__.default)(this.that).datum();
            listeners.call(type, this.that, new _event_js__WEBPACK_IMPORTED_MODULE_2__.default(type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                type,
                transform: this.that.__zoom,
                dispatch: listeners
            }), d);
        }
    };
    function wheeled(event, ...args) {
        if (!filter.apply(this, arguments))
            return;
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__.default)(event);
        if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
                g.mouse[1] = t.invert(g.mouse[0] = p);
            }
            clearTimeout(g.wheel);
        }
        else if (t.k === k)
            return;
        else {
            g.mouse = [p, t.invert(p)];
            (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
            g.start();
        }
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.default)(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event, ...args) {
        if (touchending || !filter.apply(this, arguments))
            return;
        var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__.default)(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__.default)(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
        (0,d3_drag__WEBPACK_IMPORTED_MODULE_9__.default)(event.view);
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
        g.mouse = [p, this.__zoom.invert(p)];
        (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
        g.start();
        function mousemoved(event) {
            (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.default)(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event)
                .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__.default)(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            (0,d3_drag__WEBPACK_IMPORTED_MODULE_9__.yesdrag)(event.view, g.moved);
            (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.default)(event);
            g.event(event).end();
        }
    }
    function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments))
            return;
        var t0 = this.__zoom, p0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__.default)(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.default)(event);
        if (duration > 0)
            (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__.default)(this).transition().duration(duration).call(schedule, t1, p0, event);
        else
            (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__.default)(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments))
            return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
        for (i = 0; i < n; ++i) {
            t = touches[i], p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__.default)(t, this);
            p = [p, this.__zoom.invert(p), t.identifier];
            if (!g.touch0)
                g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
            else if (!g.touch1 && g.touch0[2] !== p[2])
                g.touch1 = p, g.taps = 0;
        }
        if (touchstarting)
            touchstarting = clearTimeout(touchstarting);
        if (started) {
            if (g.taps < 2)
                touchfirst = p[0], touchstarting = setTimeout(function () { touchstarting = null; }, touchDelay);
            (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
            g.start();
        }
    }
    function touchmoved(event, ...args) {
        if (!this.__zooming)
            return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.default)(event);
        for (i = 0; i < n; ++i) {
            t = touches[i], p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__.default)(t, this);
            if (g.touch0 && g.touch0[2] === t.identifier)
                g.touch0[0] = p;
            else if (g.touch1 && g.touch1[2] === t.identifier)
                g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
            var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
            l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
        }
        else if (g.touch0)
            p = g.touch0[0], l = g.touch0[1];
        else
            return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
        if (!this.__zooming)
            return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
        if (touchending)
            clearTimeout(touchending);
        touchending = setTimeout(function () { touchending = null; }, touchDelay);
        for (i = 0; i < n; ++i) {
            t = touches[i];
            if (g.touch0 && g.touch0[2] === t.identifier)
                delete g.touch0;
            else if (g.touch1 && g.touch1[2] === t.identifier)
                delete g.touch1;
        }
        if (g.touch1 && !g.touch0)
            g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0)
            g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
            g.end();
            if (g.taps === 2) {
                t = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__.default)(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__.default)(this).on("dblclick.zoom");
                    if (p)
                        p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function (_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__.default)(+_), zoom) : wheelDelta;
    };
    zoom.filter = function (_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__.default)(!!_), zoom) : filter;
    };
    zoom.touchable = function (_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__.default)(!!_), zoom) : touchable;
    };
    zoom.extent = function (_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__.default)([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
    };
    zoom.scaleExtent = function (_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
    };
    zoom.translateExtent = function (_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
    };
    zoom.constrain = function (_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function (_) {
        return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function (_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function () {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function (_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function (_) {
        return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {


var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        var test1 = new String('abc');
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !==
            'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    }
    catch (err) {
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


if (true) {
    (function () {
        'use strict';
        var React = __webpack_require__(/*! react */ "react");
        var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
        var REACT_ELEMENT_TYPE = 0xeac7;
        var REACT_PORTAL_TYPE = 0xeaca;
        exports.Fragment = 0xeacb;
        var REACT_STRICT_MODE_TYPE = 0xeacc;
        var REACT_PROFILER_TYPE = 0xead2;
        var REACT_PROVIDER_TYPE = 0xeacd;
        var REACT_CONTEXT_TYPE = 0xeace;
        var REACT_FORWARD_REF_TYPE = 0xead0;
        var REACT_SUSPENSE_TYPE = 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = 0xead8;
        var REACT_MEMO_TYPE = 0xead3;
        var REACT_LAZY_TYPE = 0xead4;
        var REACT_BLOCK_TYPE = 0xead9;
        var REACT_SERVER_BLOCK_TYPE = 0xeada;
        var REACT_FUNDAMENTAL_TYPE = 0xead5;
        var REACT_SCOPE_TYPE = 0xead7;
        var REACT_OPAQUE_ID_TYPE = 0xeae0;
        var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
        var REACT_OFFSCREEN_TYPE = 0xeae2;
        var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
        if (typeof Symbol === 'function' && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor('react.element');
            REACT_PORTAL_TYPE = symbolFor('react.portal');
            exports.Fragment = symbolFor('react.fragment');
            REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
            REACT_PROFILER_TYPE = symbolFor('react.profiler');
            REACT_PROVIDER_TYPE = symbolFor('react.provider');
            REACT_CONTEXT_TYPE = symbolFor('react.context');
            REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
            REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
            REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
            REACT_MEMO_TYPE = symbolFor('react.memo');
            REACT_LAZY_TYPE = symbolFor('react.lazy');
            REACT_BLOCK_TYPE = symbolFor('react.block');
            REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
            REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
            REACT_SCOPE_TYPE = symbolFor('react.scope');
            REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
            REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
            REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    args[_key2 - 1] = arguments[_key2];
                }
                printWarning('error', format, args);
            }
        }
        function printWarning(level, format, args) {
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([stack]);
                }
                var argsWithFormat = args.map(function (item) {
                    return '' + item;
                });
                argsWithFormat.unshift('Warning: ' + format);
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            }
            if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                    return true;
                }
            }
            return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || '';
            return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
            return type.displayName || 'Context';
        }
        function getComponentName(type) {
            if (type == null) {
                return null;
            }
            {
                if (typeof type.tag === 'number') {
                    error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
                }
            }
            if (typeof type === 'function') {
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch (type) {
                case exports.Fragment:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
            }
            if (typeof type === 'object') {
                switch (type.$$typeof) {
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        return getContextName(context) + '.Consumer';
                    case REACT_PROVIDER_TYPE:
                        var provider = type;
                        return getContextName(provider._context) + '.Provider';
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        return getComponentName(type.type);
                    case REACT_BLOCK_TYPE:
                        return getComponentName(type._render);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentName(init(payload));
                            }
                            catch (x) {
                                return null;
                            }
                        }
                }
            }
            return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() { }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd;
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        log: _assign({}, props, {
                            value: prevLog
                        }),
                        info: _assign({}, props, {
                            value: prevInfo
                        }),
                        warn: _assign({}, props, {
                            value: prevWarn
                        }),
                        error: _assign({}, props, {
                            value: prevError
                        }),
                        group: _assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: _assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: _assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
                if (prefix === undefined) {
                    try {
                        throw Error();
                    }
                    catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                }
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher.current;
                ReactCurrentDispatcher.current = null;
                disableLogs();
            }
            try {
                if (construct) {
                    var Fake = function () {
                        throw Error();
                    };
                    Object.defineProperty(Fake.prototype, 'props', {
                        set: function () {
                            throw Error();
                        }
                    });
                    if (typeof Reflect === 'object' && Reflect.construct) {
                        try {
                            Reflect.construct(Fake, []);
                        }
                        catch (x) {
                            control = x;
                        }
                        Reflect.construct(fn, [], Fake);
                    }
                    else {
                        try {
                            Fake.call();
                        }
                        catch (x) {
                            control = x;
                        }
                        fn.call(Fake.prototype);
                    }
                }
                else {
                    try {
                        throw Error();
                    }
                    catch (x) {
                        control = x;
                    }
                    fn();
                }
            }
            catch (sample) {
                if (sample && control && typeof sample.stack === 'string') {
                    var sampleLines = sample.stack.split('\n');
                    var controlLines = control.stack.split('\n');
                    var s = sampleLines.length - 1;
                    var c = controlLines.length - 1;
                    while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                        c--;
                    }
                    for (; s >= 1 && c >= 0; s--, c--) {
                        if (sampleLines[s] !== controlLines[c]) {
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--;
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                                        {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        }
                                        return _frame;
                                    }
                                } while (s >= 1 && c >= 0);
                            }
                            break;
                        }
                    }
                }
            }
            finally {
                reentry = false;
                {
                    ReactCurrentDispatcher.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch (type) {
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch (type.$$typeof) {
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                    case REACT_BLOCK_TYPE:
                        return describeFunctionComponentFrame(type._render);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                            }
                            catch (x) { }
                        }
                }
            }
            return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame.setExtraStackFrame(stack);
                }
                else {
                    ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
            }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
                var has = Function.call.bind(Object.prototype.hasOwnProperty);
                for (var typeSpecName in typeSpecs) {
                    if (has(typeSpecs, typeSpecName)) {
                        var error$1 = void 0;
                        try {
                            if (typeof typeSpecs[typeSpecName] !== 'function') {
                                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                                err.name = 'Invariant Violation';
                                throw err;
                            }
                            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                        }
                        catch (ex) {
                            error$1 = ex;
                        }
                        if (error$1 && !(error$1 instanceof Error)) {
                            setCurrentlyValidatingElement(element);
                            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                            setCurrentlyValidatingElement(null);
                        }
                        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                            loggedTypeFailures[error$1.message] = true;
                            setCurrentlyValidatingElement(element);
                            error('Failed %s type: %s', location, error$1.message);
                            setCurrentlyValidatingElement(null);
                        }
                    }
                }
            }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
            didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
            {
                if (hasOwnProperty.call(config, 'ref')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.ref !== undefined;
        }
        function hasValidKey(config) {
            {
                if (hasOwnProperty.call(config, 'key')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.key !== undefined;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
            {
                if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                    var componentName = getComponentName(ReactCurrentOwner.current.type);
                    if (!didWarnAboutStringRefs[componentName]) {
                        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                        didWarnAboutStringRefs[componentName] = true;
                    }
                }
            }
        }
        function defineKeyPropWarningGetter(props, displayName) {
            {
                var warnAboutAccessingKey = function () {
                    if (!specialPropKeyWarningShown) {
                        specialPropKeyWarningShown = true;
                        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                };
                warnAboutAccessingKey.isReactWarning = true;
                Object.defineProperty(props, 'key', {
                    get: warnAboutAccessingKey,
                    configurable: true
                });
            }
        }
        function defineRefPropWarningGetter(props, displayName) {
            {
                var warnAboutAccessingRef = function () {
                    if (!specialPropRefWarningShown) {
                        specialPropRefWarningShown = true;
                        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                };
                warnAboutAccessingRef.isReactWarning = true;
                Object.defineProperty(props, 'ref', {
                    get: warnAboutAccessingRef,
                    configurable: true
                });
            }
        }
        var ReactElement = function (type, key, ref, self, source, owner, props) {
            var element = {
                $$typeof: REACT_ELEMENT_TYPE,
                type: type,
                key: key,
                ref: ref,
                props: props,
                _owner: owner
            };
            {
                element._store = {};
                Object.defineProperty(element._store, 'validated', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: false
                });
                Object.defineProperty(element, '_self', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: self
                });
                Object.defineProperty(element, '_source', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: source
                });
                if (Object.freeze) {
                    Object.freeze(element.props);
                    Object.freeze(element);
                }
            }
            return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
            {
                var propName;
                var props = {};
                var key = null;
                var ref = null;
                if (maybeKey !== undefined) {
                    key = '' + maybeKey;
                }
                if (hasValidKey(config)) {
                    key = '' + config.key;
                }
                if (hasValidRef(config)) {
                    ref = config.ref;
                    warnIfStringRefCannotBeAutoConverted(config, self);
                }
                for (propName in config) {
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        props[propName] = config[propName];
                    }
                }
                if (type && type.defaultProps) {
                    var defaultProps = type.defaultProps;
                    for (propName in defaultProps) {
                        if (props[propName] === undefined) {
                            props[propName] = defaultProps[propName];
                        }
                    }
                }
                if (key || ref) {
                    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                    if (key) {
                        defineKeyPropWarningGetter(props, displayName);
                    }
                    if (ref) {
                        defineRefPropWarningGetter(props, displayName);
                    }
                }
                return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
            }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                }
                else {
                    ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                }
            }
        }
        var propTypesMisspellWarningShown;
        {
            propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
            {
                return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
        }
        function getDeclarationErrorAddendum() {
            {
                if (ReactCurrentOwner$1.current) {
                    var name = getComponentName(ReactCurrentOwner$1.current.type);
                    if (name) {
                        return '\n\nCheck the render method of `' + name + '`.';
                    }
                }
                return '';
            }
        }
        function getSourceInfoErrorAddendum(source) {
            {
                if (source !== undefined) {
                    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                    var lineNumber = source.lineNumber;
                    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
                }
                return '';
            }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
            {
                var info = getDeclarationErrorAddendum();
                if (!info) {
                    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
                    if (parentName) {
                        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                    }
                }
                return info;
            }
        }
        function validateExplicitKey(element, parentType) {
            {
                if (!element._store || element._store.validated || element.key != null) {
                    return;
                }
                element._store.validated = true;
                var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                    return;
                }
                ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                var childOwner = '';
                if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
                }
                setCurrentlyValidatingElement$1(element);
                error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                setCurrentlyValidatingElement$1(null);
            }
        }
        function validateChildKeys(node, parentType) {
            {
                if (typeof node !== 'object') {
                    return;
                }
                if (Array.isArray(node)) {
                    for (var i = 0; i < node.length; i++) {
                        var child = node[i];
                        if (isValidElement(child)) {
                            validateExplicitKey(child, parentType);
                        }
                    }
                }
                else if (isValidElement(node)) {
                    if (node._store) {
                        node._store.validated = true;
                    }
                }
                else if (node) {
                    var iteratorFn = getIteratorFn(node);
                    if (typeof iteratorFn === 'function') {
                        if (iteratorFn !== node.entries) {
                            var iterator = iteratorFn.call(node);
                            var step;
                            while (!(step = iterator.next()).done) {
                                if (isValidElement(step.value)) {
                                    validateExplicitKey(step.value, parentType);
                                }
                            }
                        }
                    }
                }
            }
        }
        function validatePropTypes(element) {
            {
                var type = element.type;
                if (type === null || type === undefined || typeof type === 'string') {
                    return;
                }
                var propTypes;
                if (typeof type === 'function') {
                    propTypes = type.propTypes;
                }
                else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
                    type.$$typeof === REACT_MEMO_TYPE)) {
                    propTypes = type.propTypes;
                }
                else {
                    return;
                }
                if (propTypes) {
                    var name = getComponentName(type);
                    checkPropTypes(propTypes, element.props, 'prop', name, element);
                }
                else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                    propTypesMisspellWarningShown = true;
                    var _name = getComponentName(type);
                    error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
                }
                if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                    error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
                }
            }
        }
        function validateFragmentProps(fragment) {
            {
                var keys = Object.keys(fragment.props);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (key !== 'children' && key !== 'key') {
                        setCurrentlyValidatingElement$1(fragment);
                        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                        setCurrentlyValidatingElement$1(null);
                        break;
                    }
                }
                if (fragment.ref !== null) {
                    setCurrentlyValidatingElement$1(fragment);
                    error('Invalid attribute `ref` supplied to `React.Fragment`.');
                    setCurrentlyValidatingElement$1(null);
                }
            }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
            {
                var validType = isValidElementType(type);
                if (!validType) {
                    var info = '';
                    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
                    }
                    var sourceInfo = getSourceInfoErrorAddendum(source);
                    if (sourceInfo) {
                        info += sourceInfo;
                    }
                    else {
                        info += getDeclarationErrorAddendum();
                    }
                    var typeString;
                    if (type === null) {
                        typeString = 'null';
                    }
                    else if (Array.isArray(type)) {
                        typeString = 'array';
                    }
                    else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
                        info = ' Did you accidentally export a JSX literal instead of a component?';
                    }
                    else {
                        typeString = typeof type;
                    }
                    error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
                }
                var element = jsxDEV(type, props, key, source, self);
                if (element == null) {
                    return element;
                }
                if (validType) {
                    var children = props.children;
                    if (children !== undefined) {
                        if (isStaticChildren) {
                            if (Array.isArray(children)) {
                                for (var i = 0; i < children.length; i++) {
                                    validateChildKeys(children[i], type);
                                }
                                if (Object.freeze) {
                                    Object.freeze(children);
                                }
                            }
                            else {
                                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                            }
                        }
                        else {
                            validateChildKeys(children, type);
                        }
                    }
                }
                if (type === exports.Fragment) {
                    validateFragmentProps(element);
                }
                else {
                    validatePropTypes(element);
                }
                return element;
            }
        }
        function jsxWithValidationStatic(type, props, key) {
            {
                return jsxWithValidation(type, props, key, true);
            }
        }
        function jsxWithValidationDynamic(type, props, key) {
            {
                return jsxWithValidation(type, props, key, false);
            }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
    })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (false) {}
else {
    module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/rp-katex/rp-katex.js":
/*!*******************************************!*\
  !*** ./node_modules/rp-katex/rp-katex.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KTX": () => (/* binding */ KTXBlocking),
/* harmony export */   "KTXBlocking": () => (/* binding */ KTXBlocking),
/* harmony export */   "KTXNonBlocking": () => (/* binding */ KTXNonBlocking),
/* harmony export */   "KaTeXReady": () => (/* binding */ KaTeXReady)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const KaTeXLoad = new Promise((resolve) => {
    const script = document.querySelector(`script[src*="katex.js"], script[src*="katex.min.js"]`);
    if (!script)
        return;
    if (window.hasOwnProperty("katex")) {
        resolve(katex);
    }
    else {
        script.addEventListener("load", () => resolve(katex));
    }
});
const KaTeXMacros = new Promise((resolve) => {
    const macros = {};
    const scripts = Array.from(document.querySelectorAll("head > script[type='math/tex']"));
    return Promise.all(scripts.map(script => fetch(script.src)
        .then(res => {
        if (res.ok)
            return res.text();
        throw new Error(`${res.status} ${res.statusText}: ${script.src}`);
    })
        .then(tex => {
        Object.assign(macros, parseMacros(tex));
    }))).then(() => resolve(macros));
});
const KaTeXReady = Promise.all([KaTeXLoad, KaTeXMacros]);
const implementation = function KTX(props, ref) {
    const spanRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const { children, display } = props, attrs = __rest(props, ["children", "display"]);
    const resolveRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const ready = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return new Promise((resolve) => {
            resolveRef.current = resolve;
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
        domElement: spanRef.current,
        ready
    }));
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        KaTeXReady.then(([katex, macros]) => {
            katex.render(children.toString(), spanRef.current, {
                displayMode: !!display,
                macros,
                strict: "ignore",
                throwOnError: false,
                trust: true
            });
            resolveRef.current();
        });
    }, [children]);
    if (display) {
        if (!attrs.style)
            attrs.style = {};
        attrs.style.display = "block";
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", Object.assign({}, attrs, { ref: spanRef })));
};
const KTXNonBlocking = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(implementation);
function parseMacros(file) {
    const macros = {};
    const rgx = /\\(?:ktx)?newcommand\{(.+?)\}(?:\[\d+\])?\{/g;
    let match;
    while (match = rgx.exec(file)) {
        let body = "";
        const macro = match[1];
        let braceCount = 1;
        for (let i = match.index + match[0].length; (braceCount > 0) && (i < file.length); ++i) {
            const char = file[i];
            if (char === "{") {
                braceCount++;
            }
            else if (char === "}") {
                braceCount--;
                if (braceCount === 0)
                    break;
            }
            else if (char === "\\") {
                body += file.slice(i, i + 2);
                ++i;
                continue;
            }
            body += char;
        }
        macros[macro] = body;
    }
    return macros;
}
const KTXBlocking = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function KTX(props, ref) {
    const player = (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
    const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    if (ref) {
        ref.current = innerRef.current;
    }
    const resolve = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const promise = new Promise((res) => {
            resolve.current = res;
        });
        player.obstruct("canplay", promise);
        player.obstruct("canplaythrough", promise);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (ref) {
            ref.current = innerRef.current;
        }
        innerRef.current.ready.then(() => resolve.current());
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(KTXNonBlocking, Object.assign({ ref: innerRef }, props)));
});



/***/ }),

/***/ "./node_modules/rp-recording/dist/rp-recording.js":
/*!********************************************************!*\
  !*** ./node_modules/rp-recording/dist/rp-recording.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


(function webpackUniversalModuleDefinition(root, factory) {
    if (true)
        module.exports = factory(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! ractive-player */ "ractive-player"));
    else {}
})(self, function (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_ractive_player__) {
    return (() => {
        "use strict";
        var __webpack_modules__ = ({
            "./node_modules/css-loader/dist/cjs.js!./style.css": ((module, __webpack_exports__, __nested_webpack_require_821__) => {
                __nested_webpack_require_821__.r(__webpack_exports__);
                __nested_webpack_require_821__.d(__webpack_exports__, {
                    "default": () => __WEBPACK_DEFAULT_EXPORT__
                });
                var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_821__("./node_modules/css-loader/dist/runtime/api.js");
                var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_821__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
                var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function (i) { return i[1]; });
                ___CSS_LOADER_EXPORT___.push([module.id, "@media (any-hover:none){#rp-recording{display:none}}#rp-recording{position:relative}#rp-recording-dialog{background-color:#2a2a2a;border-radius:2px 2px 0 0;box-shadow:2px -2px 2px 2px rgba(0,0,0,0.3);box-sizing:border-box;color:#fff;font-family:sans-serif;line-height:1;position:absolute;bottom:calc(var(--rp-controls-height) - 2px);right:0;z-index:3;max-height:20rem;overflow-y:auto;padding:.5em;width:23rem}#rp-recording-dialog > h3{color:#1a69b5;margin:.5em 0 .2em}#rp-recording-configuration{border-spacing:0 1em;width:100%}#rp-recording-configuration > tbody > tr > th,#rp-recording-configuration > tbody > tr > td{vertical-align:top}#rp-recording-configuration > tbody > tr > th{text-align:right}#rp-recording-configuration > tbody > tr td{padding-left:1em}#rp-recording-configuration > tbody > tr > th[colspan=\"2\"]{color:#1a69b5;text-align:center}#rp-recording-configuration > tbody > tr > th:not([colspan=\"2\"]){font-size:1em;font-weight:normal;padding-right:.2em;text-align:right}.recorder-plugin{display:inline-block;font-family:sans-serif;font-size:.8em;margin:0 .25em;text-align:center}.recorder-plugin-icon{background-color:#222;border-radius:5px;cursor:pointer;display:block}.recorder-plugin-icon.active{background-color:#f00}.recorder-plugin-icon text{user-select:none;-webkit-user-select:none}.recordings{font-size:1.5em;list-style-position:inside}.recording-results{border-collapse:collapse;font-size:.6em;width:100%}.recording-results > tbody > tr{background-color:#333}.recording-results > tbody > tr > th{padding:6px;width:36px}.recording-results > tbody > tr > td{padding:6px}.recording-results textarea{width:100%}.recording-results :link{background-color:#1a69b5;box-sizing:border-box;color:#fff !important;display:block;padding:.5em;text-align:center;text-decoration:none;width:100%}.shortcut{font-family:monospace;font-size:1em;width:18ch}", ""]);
                const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
            }),
            "./style.css": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_3685__) => {
                __nested_webpack_require_3685__.r(__webpack_exports__);
                __nested_webpack_require_3685__.d(__webpack_exports__, {
                    "default": () => __WEBPACK_DEFAULT_EXPORT__
                });
                var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3685__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
                var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_3685__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
                var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_3685__("./node_modules/css-loader/dist/cjs.js!./style.css");
                var options = {};
                options.insert = "head";
                options.singleton = false;
                var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);
                const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});
            }),
            "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": ((module, __unused_webpack_exports, __nested_webpack_require_5184__) => {
                var isOldIE = function isOldIE() {
                    var memo;
                    return function memorize() {
                        if (typeof memo === 'undefined') {
                            memo = Boolean(window && document && document.all && !window.atob);
                        }
                        return memo;
                    };
                }();
                var getTarget = function getTarget() {
                    var memo = {};
                    return function memorize(target) {
                        if (typeof memo[target] === 'undefined') {
                            var styleTarget = document.querySelector(target);
                            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                                try {
                                    styleTarget = styleTarget.contentDocument.head;
                                }
                                catch (e) {
                                    styleTarget = null;
                                }
                            }
                            memo[target] = styleTarget;
                        }
                        return memo[target];
                    };
                }();
                var stylesInDom = [];
                function getIndexByIdentifier(identifier) {
                    var result = -1;
                    for (var i = 0; i < stylesInDom.length; i++) {
                        if (stylesInDom[i].identifier === identifier) {
                            result = i;
                            break;
                        }
                    }
                    return result;
                }
                function modulesToDom(list, options) {
                    var idCountMap = {};
                    var identifiers = [];
                    for (var i = 0; i < list.length; i++) {
                        var item = list[i];
                        var id = options.base ? item[0] + options.base : item[0];
                        var count = idCountMap[id] || 0;
                        var identifier = "".concat(id, " ").concat(count);
                        idCountMap[id] = count + 1;
                        var index = getIndexByIdentifier(identifier);
                        var obj = {
                            css: item[1],
                            media: item[2],
                            sourceMap: item[3]
                        };
                        if (index !== -1) {
                            stylesInDom[index].references++;
                            stylesInDom[index].updater(obj);
                        }
                        else {
                            stylesInDom.push({
                                identifier: identifier,
                                updater: addStyle(obj, options),
                                references: 1
                            });
                        }
                        identifiers.push(identifier);
                    }
                    return identifiers;
                }
                function insertStyleElement(options) {
                    var style = document.createElement('style');
                    var attributes = options.attributes || {};
                    if (typeof attributes.nonce === 'undefined') {
                        var nonce =  true ? __nested_webpack_require_5184__.nc : 0;
                        if (nonce) {
                            attributes.nonce = nonce;
                        }
                    }
                    Object.keys(attributes).forEach(function (key) {
                        style.setAttribute(key, attributes[key]);
                    });
                    if (typeof options.insert === 'function') {
                        options.insert(style);
                    }
                    else {
                        var target = getTarget(options.insert || 'head');
                        if (!target) {
                            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        }
                        target.appendChild(style);
                    }
                    return style;
                }
                function removeStyleElement(style) {
                    if (style.parentNode === null) {
                        return false;
                    }
                    style.parentNode.removeChild(style);
                }
                var replaceText = function replaceText() {
                    var textStore = [];
                    return function replace(index, replacement) {
                        textStore[index] = replacement;
                        return textStore.filter(Boolean).join('\n');
                    };
                }();
                function applyToSingletonTag(style, index, remove, obj) {
                    var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css;
                    if (style.styleSheet) {
                        style.styleSheet.cssText = replaceText(index, css);
                    }
                    else {
                        var cssNode = document.createTextNode(css);
                        var childNodes = style.childNodes;
                        if (childNodes[index]) {
                            style.removeChild(childNodes[index]);
                        }
                        if (childNodes.length) {
                            style.insertBefore(cssNode, childNodes[index]);
                        }
                        else {
                            style.appendChild(cssNode);
                        }
                    }
                }
                function applyToTag(style, options, obj) {
                    var css = obj.css;
                    var media = obj.media;
                    var sourceMap = obj.sourceMap;
                    if (media) {
                        style.setAttribute('media', media);
                    }
                    else {
                        style.removeAttribute('media');
                    }
                    if (sourceMap && typeof btoa !== 'undefined') {
                        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                    }
                    if (style.styleSheet) {
                        style.styleSheet.cssText = css;
                    }
                    else {
                        while (style.firstChild) {
                            style.removeChild(style.firstChild);
                        }
                        style.appendChild(document.createTextNode(css));
                    }
                }
                var singleton = null;
                var singletonCounter = 0;
                function addStyle(obj, options) {
                    var style;
                    var update;
                    var remove;
                    if (options.singleton) {
                        var styleIndex = singletonCounter++;
                        style = singleton || (singleton = insertStyleElement(options));
                        update = applyToSingletonTag.bind(null, style, styleIndex, false);
                        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
                    }
                    else {
                        style = insertStyleElement(options);
                        update = applyToTag.bind(null, style, options);
                        remove = function remove() {
                            removeStyleElement(style);
                        };
                    }
                    update(obj);
                    return function updateStyle(newObj) {
                        if (newObj) {
                            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                                return;
                            }
                            update(obj = newObj);
                        }
                        else {
                            remove();
                        }
                    };
                }
                module.exports = function (list, options) {
                    options = options || {};
                    if (!options.singleton && typeof options.singleton !== 'boolean') {
                        options.singleton = isOldIE();
                    }
                    list = list || [];
                    var lastIdentifiers = modulesToDom(list, options);
                    return function update(newList) {
                        newList = newList || [];
                        if (Object.prototype.toString.call(newList) !== '[object Array]') {
                            return;
                        }
                        for (var i = 0; i < lastIdentifiers.length; i++) {
                            var identifier = lastIdentifiers[i];
                            var index = getIndexByIdentifier(identifier);
                            stylesInDom[index].references--;
                        }
                        var newLastIdentifiers = modulesToDom(newList, options);
                        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                            var _identifier = lastIdentifiers[_i];
                            var _index = getIndexByIdentifier(_identifier);
                            if (stylesInDom[_index].references === 0) {
                                stylesInDom[_index].updater();
                                stylesInDom.splice(_index, 1);
                            }
                        }
                        lastIdentifiers = newLastIdentifiers;
                    };
                };
            }),
            "./node_modules/css-loader/dist/runtime/api.js": ((module) => {
                module.exports = function (cssWithMappingToString) {
                    var list = [];
                    list.toString = function toString() {
                        return this.map(function (item) {
                            var content = cssWithMappingToString(item);
                            if (item[2]) {
                                return "@media ".concat(item[2], " {").concat(content, "}");
                            }
                            return content;
                        }).join("");
                    };
                    list.i = function (modules, mediaQuery, dedupe) {
                        if (typeof modules === "string") {
                            modules = [[null, modules, ""]];
                        }
                        var alreadyImportedModules = {};
                        if (dedupe) {
                            for (var i = 0; i < this.length; i++) {
                                var id = this[i][0];
                                if (id != null) {
                                    alreadyImportedModules[id] = true;
                                }
                            }
                        }
                        for (var _i = 0; _i < modules.length; _i++) {
                            var item = [].concat(modules[_i]);
                            if (dedupe && alreadyImportedModules[item[0]]) {
                                continue;
                            }
                            if (mediaQuery) {
                                if (!item[2]) {
                                    item[2] = mediaQuery;
                                }
                                else {
                                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                                }
                            }
                            list.push(item);
                        }
                    };
                    return list;
                };
            }),
            "./node_modules/events/events.js": ((module) => {
                var R = typeof Reflect === 'object' ? Reflect : null;
                var ReflectApply = R && typeof R.apply === 'function'
                    ? R.apply
                    : function ReflectApply(target, receiver, args) {
                        return Function.prototype.apply.call(target, receiver, args);
                    };
                var ReflectOwnKeys;
                if (R && typeof R.ownKeys === 'function') {
                    ReflectOwnKeys = R.ownKeys;
                }
                else if (Object.getOwnPropertySymbols) {
                    ReflectOwnKeys = function ReflectOwnKeys(target) {
                        return Object.getOwnPropertyNames(target)
                            .concat(Object.getOwnPropertySymbols(target));
                    };
                }
                else {
                    ReflectOwnKeys = function ReflectOwnKeys(target) {
                        return Object.getOwnPropertyNames(target);
                    };
                }
                function ProcessEmitWarning(warning) {
                    if (console && console.warn)
                        console.warn(warning);
                }
                var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
                    return value !== value;
                };
                function EventEmitter() {
                    EventEmitter.init.call(this);
                }
                module.exports = EventEmitter;
                module.exports.once = once;
                EventEmitter.EventEmitter = EventEmitter;
                EventEmitter.prototype._events = undefined;
                EventEmitter.prototype._eventsCount = 0;
                EventEmitter.prototype._maxListeners = undefined;
                var defaultMaxListeners = 10;
                function checkListener(listener) {
                    if (typeof listener !== 'function') {
                        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
                    }
                }
                Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
                    enumerable: true,
                    get: function () {
                        return defaultMaxListeners;
                    },
                    set: function (arg) {
                        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
                            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
                        }
                        defaultMaxListeners = arg;
                    }
                });
                EventEmitter.init = function () {
                    if (this._events === undefined ||
                        this._events === Object.getPrototypeOf(this)._events) {
                        this._events = Object.create(null);
                        this._eventsCount = 0;
                    }
                    this._maxListeners = this._maxListeners || undefined;
                };
                EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
                    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
                        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
                    }
                    this._maxListeners = n;
                    return this;
                };
                function _getMaxListeners(that) {
                    if (that._maxListeners === undefined)
                        return EventEmitter.defaultMaxListeners;
                    return that._maxListeners;
                }
                EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
                    return _getMaxListeners(this);
                };
                EventEmitter.prototype.emit = function emit(type) {
                    var args = [];
                    for (var i = 1; i < arguments.length; i++)
                        args.push(arguments[i]);
                    var doError = (type === 'error');
                    var events = this._events;
                    if (events !== undefined)
                        doError = (doError && events.error === undefined);
                    else if (!doError)
                        return false;
                    if (doError) {
                        var er;
                        if (args.length > 0)
                            er = args[0];
                        if (er instanceof Error) {
                            throw er;
                        }
                        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
                        err.context = er;
                        throw err;
                    }
                    var handler = events[type];
                    if (handler === undefined)
                        return false;
                    if (typeof handler === 'function') {
                        ReflectApply(handler, this, args);
                    }
                    else {
                        var len = handler.length;
                        var listeners = arrayClone(handler, len);
                        for (var i = 0; i < len; ++i)
                            ReflectApply(listeners[i], this, args);
                    }
                    return true;
                };
                function _addListener(target, type, listener, prepend) {
                    var m;
                    var events;
                    var existing;
                    checkListener(listener);
                    events = target._events;
                    if (events === undefined) {
                        events = target._events = Object.create(null);
                        target._eventsCount = 0;
                    }
                    else {
                        if (events.newListener !== undefined) {
                            target.emit('newListener', type, listener.listener ? listener.listener : listener);
                            events = target._events;
                        }
                        existing = events[type];
                    }
                    if (existing === undefined) {
                        existing = events[type] = listener;
                        ++target._eventsCount;
                    }
                    else {
                        if (typeof existing === 'function') {
                            existing = events[type] =
                                prepend ? [listener, existing] : [existing, listener];
                        }
                        else if (prepend) {
                            existing.unshift(listener);
                        }
                        else {
                            existing.push(listener);
                        }
                        m = _getMaxListeners(target);
                        if (m > 0 && existing.length > m && !existing.warned) {
                            existing.warned = true;
                            var w = new Error('Possible EventEmitter memory leak detected. ' +
                                existing.length + ' ' + String(type) + ' listeners ' +
                                'added. Use emitter.setMaxListeners() to ' +
                                'increase limit');
                            w.name = 'MaxListenersExceededWarning';
                            w.emitter = target;
                            w.type = type;
                            w.count = existing.length;
                            ProcessEmitWarning(w);
                        }
                    }
                    return target;
                }
                EventEmitter.prototype.addListener = function addListener(type, listener) {
                    return _addListener(this, type, listener, false);
                };
                EventEmitter.prototype.on = EventEmitter.prototype.addListener;
                EventEmitter.prototype.prependListener =
                    function prependListener(type, listener) {
                        return _addListener(this, type, listener, true);
                    };
                function onceWrapper() {
                    if (!this.fired) {
                        this.target.removeListener(this.type, this.wrapFn);
                        this.fired = true;
                        if (arguments.length === 0)
                            return this.listener.call(this.target);
                        return this.listener.apply(this.target, arguments);
                    }
                }
                function _onceWrap(target, type, listener) {
                    var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
                    var wrapped = onceWrapper.bind(state);
                    wrapped.listener = listener;
                    state.wrapFn = wrapped;
                    return wrapped;
                }
                EventEmitter.prototype.once = function once(type, listener) {
                    checkListener(listener);
                    this.on(type, _onceWrap(this, type, listener));
                    return this;
                };
                EventEmitter.prototype.prependOnceListener =
                    function prependOnceListener(type, listener) {
                        checkListener(listener);
                        this.prependListener(type, _onceWrap(this, type, listener));
                        return this;
                    };
                EventEmitter.prototype.removeListener =
                    function removeListener(type, listener) {
                        var list, events, position, i, originalListener;
                        checkListener(listener);
                        events = this._events;
                        if (events === undefined)
                            return this;
                        list = events[type];
                        if (list === undefined)
                            return this;
                        if (list === listener || list.listener === listener) {
                            if (--this._eventsCount === 0)
                                this._events = Object.create(null);
                            else {
                                delete events[type];
                                if (events.removeListener)
                                    this.emit('removeListener', type, list.listener || listener);
                            }
                        }
                        else if (typeof list !== 'function') {
                            position = -1;
                            for (i = list.length - 1; i >= 0; i--) {
                                if (list[i] === listener || list[i].listener === listener) {
                                    originalListener = list[i].listener;
                                    position = i;
                                    break;
                                }
                            }
                            if (position < 0)
                                return this;
                            if (position === 0)
                                list.shift();
                            else {
                                spliceOne(list, position);
                            }
                            if (list.length === 1)
                                events[type] = list[0];
                            if (events.removeListener !== undefined)
                                this.emit('removeListener', type, originalListener || listener);
                        }
                        return this;
                    };
                EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
                EventEmitter.prototype.removeAllListeners =
                    function removeAllListeners(type) {
                        var listeners, events, i;
                        events = this._events;
                        if (events === undefined)
                            return this;
                        if (events.removeListener === undefined) {
                            if (arguments.length === 0) {
                                this._events = Object.create(null);
                                this._eventsCount = 0;
                            }
                            else if (events[type] !== undefined) {
                                if (--this._eventsCount === 0)
                                    this._events = Object.create(null);
                                else
                                    delete events[type];
                            }
                            return this;
                        }
                        if (arguments.length === 0) {
                            var keys = Object.keys(events);
                            var key;
                            for (i = 0; i < keys.length; ++i) {
                                key = keys[i];
                                if (key === 'removeListener')
                                    continue;
                                this.removeAllListeners(key);
                            }
                            this.removeAllListeners('removeListener');
                            this._events = Object.create(null);
                            this._eventsCount = 0;
                            return this;
                        }
                        listeners = events[type];
                        if (typeof listeners === 'function') {
                            this.removeListener(type, listeners);
                        }
                        else if (listeners !== undefined) {
                            for (i = listeners.length - 1; i >= 0; i--) {
                                this.removeListener(type, listeners[i]);
                            }
                        }
                        return this;
                    };
                function _listeners(target, type, unwrap) {
                    var events = target._events;
                    if (events === undefined)
                        return [];
                    var evlistener = events[type];
                    if (evlistener === undefined)
                        return [];
                    if (typeof evlistener === 'function')
                        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
                    return unwrap ?
                        unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
                }
                EventEmitter.prototype.listeners = function listeners(type) {
                    return _listeners(this, type, true);
                };
                EventEmitter.prototype.rawListeners = function rawListeners(type) {
                    return _listeners(this, type, false);
                };
                EventEmitter.listenerCount = function (emitter, type) {
                    if (typeof emitter.listenerCount === 'function') {
                        return emitter.listenerCount(type);
                    }
                    else {
                        return listenerCount.call(emitter, type);
                    }
                };
                EventEmitter.prototype.listenerCount = listenerCount;
                function listenerCount(type) {
                    var events = this._events;
                    if (events !== undefined) {
                        var evlistener = events[type];
                        if (typeof evlistener === 'function') {
                            return 1;
                        }
                        else if (evlistener !== undefined) {
                            return evlistener.length;
                        }
                    }
                    return 0;
                }
                EventEmitter.prototype.eventNames = function eventNames() {
                    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
                };
                function arrayClone(arr, n) {
                    var copy = new Array(n);
                    for (var i = 0; i < n; ++i)
                        copy[i] = arr[i];
                    return copy;
                }
                function spliceOne(list, index) {
                    for (; index + 1 < list.length; index++)
                        list[index] = list[index + 1];
                    list.pop();
                }
                function unwrapListeners(arr) {
                    var ret = new Array(arr.length);
                    for (var i = 0; i < ret.length; ++i) {
                        ret[i] = arr[i].listener || arr[i];
                    }
                    return ret;
                }
                function once(emitter, name) {
                    return new Promise(function (resolve, reject) {
                        function eventListener() {
                            if (errorListener !== undefined) {
                                emitter.removeListener('error', errorListener);
                            }
                            resolve([].slice.call(arguments));
                        }
                        ;
                        var errorListener;
                        if (name !== 'error') {
                            errorListener = function errorListener(err) {
                                emitter.removeListener(name, eventListener);
                                reject(err);
                            };
                            emitter.once('error', errorListener);
                        }
                        emitter.once(name, eventListener);
                    });
                }
            }),
            "./src/Control.tsx": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_35507__) => {
                __nested_webpack_require_35507__.r(__webpack_exports__);
                __nested_webpack_require_35507__.d(__webpack_exports__, {
                    "default": () => Control
                });
                var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_35507__("react");
                var react__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_35507__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_35507__("ractive-player");
                var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = __nested_webpack_require_35507__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
                var _recording_manager__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_35507__("./src/recording-manager.ts");
                var _RecordingRow__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_35507__("./src/RecordingRow.tsx");
                var _recorders_audio_recorder__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_35507__("./src/recorders/audio-recorder.tsx");
                var _recorders_marker_recorder__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_35507__("./src/recorders/marker-recorder.tsx");
                const { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.mobile;
                const { useForceUpdate } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.react;
                const mac = navigator.platform === "MacIntel";
                const bindings = {
                    start: mac ? "Alt+Meta+2" : "Ctrl+Alt+2",
                    pause: mac ? "Alt+Meta+3" : "Ctrl+Alt+3",
                    discard: mac ? "Alt+Meta+4" : "Ctrl+Alt+4"
                };
                function Control(props) {
                    var _a, _b;
                    const player = (0, ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
                    const [recordings, setRecordings] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
                    const forceUpdate = useForceUpdate();
                    const plugins = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
                        var _a;
                        return [
                            _recorders_audio_recorder__WEBPACK_IMPORTED_MODULE_4__.AudioRecorderPlugin, _recorders_marker_recorder__WEBPACK_IMPORTED_MODULE_5__.MarkerRecorderPlugin,
                            ...((_a = props.plugins) !== null && _a !== void 0 ? _a : [])
                        ];
                    }, [props.plugins]);
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        player.hub.on("canvasClick", () => false);
                    }, []);
                    const manager = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        var _a;
                        manager.current = (_a = props.manager) !== null && _a !== void 0 ? _a : new _recording_manager__WEBPACK_IMPORTED_MODULE_2__.default(player);
                        manager.current.hub.on("finalize", forceUpdate);
                        manager.current.hub.on("start", forceUpdate);
                        manager.current.hub.on("pause", forceUpdate);
                        manager.current.hub.on("resume", forceUpdate);
                    }, []);
                    const activePlugins = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
                    if (activePlugins.current === null) {
                        activePlugins.current = {};
                        for (const plugin of plugins) {
                            activePlugins.current[plugin.key] = false;
                        }
                    }
                    ;
                    const [pluginsByKey] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
                        const dict = {};
                        for (const plugin of plugins) {
                            dict[plugin.key] = plugin;
                        }
                        return dict;
                    });
                    const start = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
                        const { active, beginRecording, endRecording } = manager.current;
                        if (active) {
                            endRecording().then(recording => setRecordings(prev => prev.concat(recording)));
                        }
                        else {
                            beginRecording(plugins.filter(plugin => activePlugins.current[plugin.key]));
                        }
                    }, []);
                    const pause = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
                        const { active, paused, pauseRecording, resumeRecording } = manager.current;
                        if (active) {
                            paused ? resumeRecording() : pauseRecording();
                        }
                    }, []);
                    const discard = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
                        const { active, endRecording, hub } = manager.current;
                        if (active) {
                            const listeners = hub.listeners("finalize");
                            for (const listener of listeners) {
                                hub.off("finalize", listener);
                            }
                            try {
                                await endRecording();
                            }
                            catch (e) {
                                console.error(e);
                            }
                            for (const listener of listeners) {
                                hub.on("finalize", listener);
                            }
                            forceUpdate();
                        }
                    }, []);
                    const prevent = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => { }, []);
                    const callbacks = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({ start, pause, discard }), []);
                    const reducer = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((state, action) => {
                        player.keymap.unbind(state[action.command], callbacks[action.command]);
                        player.keymap.bind(action.seq, callbacks[action.command]);
                        return Object.assign(Object.assign({}, state), { [action.command]: action.seq });
                    }, []);
                    const [state, dispatch] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, bindings);
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        for (const key in state) {
                            player.keymap.bind(state[key], callbacks[key]);
                        }
                    }, []);
                    const onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
                        e.preventDefault();
                        const name = e.currentTarget.getAttribute("name");
                        const seq = e.currentTarget.dataset.value;
                        dispatch({ command: name, seq });
                        player.resumeKeyCapture();
                    }, []);
                    const identifyKey = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
                        e.preventDefault();
                        const seq = ractive_player__WEBPACK_IMPORTED_MODULE_1__.KeyMap.identify(e);
                        e.currentTarget.dataset.value = seq;
                        e.currentTarget.value = fmtSeq(seq);
                    }, []);
                    const warn = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
                    warn.current = recordings.length > 0;
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        window.addEventListener("beforeunload", (e) => {
                            if (warn.current)
                                e.returnValue = "You have recording data";
                        });
                    }, []);
                    const [paneOpen, setPaneOpen] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
                    const togglePane = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => onClick(() => {
                        setPaneOpen(prev => !prev);
                    }), []);
                    const dialogStyle = {
                        display: paneOpen ? "block" : "none"
                    };
                    const setActive = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => onClick((e) => {
                        const key = e.currentTarget.dataset.plugin;
                        activePlugins.current[key] = !activePlugins.current[key];
                        forceUpdate();
                    }), []);
                    const commands = [
                        ["Start/Stop recording", "start"],
                        ["Pause recording", "pause"],
                        ["Discard recording", "discard"]
                    ];
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "rp-recording" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "rp-recording-dialog", style: dialogStyle }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { id: "rp-recording-configuration" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { colSpan: 2 }, "Commands")), commands.map(([desc, key]) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: key }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { scope: "row" }, desc), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { onBlur: onBlur, readOnly: true, onFocus: player.suspendKeyCapture, onKeyDown: identifyKey, className: "shortcut", name: key, type: "text", value: fmtSeq(state[key]) }))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Configuration"), plugins.map((plugin, i) => {
                        const classNames = ["recorder-plugin-icon"];
                        if (activePlugins.current[plugin.key])
                            classNames.push("active");
                        const styles = {};
                        const enabled = typeof plugin.enabled === "undefined" || plugin.enabled();
                        if (!enabled) {
                            styles.opacity = 0.3;
                        }
                        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "recorder-plugin", key: plugin.key, title: plugin.title, style: styles }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({ className: classNames.join(" "), height: "36", width: "36", viewBox: "0 0 100 100", "data-plugin": plugin.key }, (enabled ? setActive : {})), react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { height: "100", width: "100", fill: activePlugins.current[plugin.key] ? "red" : "#222" }), plugin.icon), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "recorder-plugin-name" }, plugin.name)));
                    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Saved data"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", { className: "recordings" }, recordings.map((recording, i) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RecordingRow__WEBPACK_IMPORTED_MODULE_3__.default, { key: i, data: recording, pluginsByKey: pluginsByKey }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({ height: "36", width: "36", viewBox: "-50 -50 100 100" }, togglePane), react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "0", cy: "0", r: "35", stroke: "white", strokeWidth: "5", fill: ((_a = manager.current) === null || _a === void 0 ? void 0 : _a.active) ? (((_b = manager.current) === null || _b === void 0 ? void 0 : _b.paused) ? "yellow" : "red") : "#666" }))));
                }
                function fmtSeq(str) {
                    if (navigator.platform !== "MacIntel")
                        return str;
                    if (str === void 0)
                        return str;
                    return str.split("+").map(k => {
                        if (k === "Ctrl")
                            return "^";
                        else if (k === "Alt")
                            return "⌥";
                        if (k === "Shift")
                            return "⇧";
                        if (k === "Meta")
                            return "⌘";
                        return k;
                    }).join("");
                }
            }),
            "./src/RecordingRow.tsx": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48605__) => {
                __nested_webpack_require_48605__.r(__webpack_exports__);
                __nested_webpack_require_48605__.d(__webpack_exports__, {
                    "default": () => RecordingRow
                });
                var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48605__("react");
                var react__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_48605__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_48605__("ractive-player");
                var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = __nested_webpack_require_48605__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
                function RecordingRow(props) {
                    const player = (0, ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
                    const [name, setName] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("Untitled");
                    const onChange = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
                        setName(e.target.value);
                    }, []);
                    const { data, pluginsByKey } = props;
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "recording-row" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "recording-name", onBlur: player.resumeKeyCapture, onFocus: player.suspendKeyCapture, onChange: onChange, type: "text", value: name }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: "recording-results" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, Object.keys(data).map(pluginKey => {
                        const plugin = pluginsByKey[pluginKey], SaveComponent = plugin.saveComponent;
                        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: pluginKey }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { key: "head", scope: "row" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: "recorder-plugin-icon", height: "36", width: "36", viewBox: "0 0 100 100" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { height: "100", width: "100", fill: "#222" }), plugin.icon)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { key: "cell" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(SaveComponent, { data: data[pluginKey] }))));
                    })))));
                }
            }),
            "./src/plugin.tsx": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_51150__) => {
                __nested_webpack_require_51150__.r(__webpack_exports__);
                __nested_webpack_require_51150__.d(__webpack_exports__, {
                    "RecordingControl": () => _Control__WEBPACK_IMPORTED_MODULE_1__.default,
                    "RecordingManager": () => _recording_manager__WEBPACK_IMPORTED_MODULE_2__.default,
                    "Recorder": () => _recorder__WEBPACK_IMPORTED_MODULE_3__.Recorder,
                    "ReplayDataRecorder": () => _recorders_replay_data_recorder__WEBPACK_IMPORTED_MODULE_4__.ReplayDataRecorder,
                    "AudioRecorderPlugin": () => _recorders_audio_recorder__WEBPACK_IMPORTED_MODULE_5__.AudioRecorderPlugin,
                    "MarkerRecorderPlugin": () => _recorders_marker_recorder__WEBPACK_IMPORTED_MODULE_6__.MarkerRecorderPlugin
                });
                var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_51150__("./style.css");
                var _Control__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_51150__("./src/Control.tsx");
                var _recording_manager__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_51150__("./src/recording-manager.ts");
                var _recorder__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_51150__("./src/recorder.ts");
                var _recorders_replay_data_recorder__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_51150__("./src/recorders/replay-data-recorder.ts");
                var _recorders_audio_recorder__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_51150__("./src/recorders/audio-recorder.tsx");
                var _recorders_marker_recorder__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_51150__("./src/recorders/marker-recorder.tsx");
            }),
            "./src/recorder.ts": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_52923__) => {
                __nested_webpack_require_52923__.r(__webpack_exports__);
                __nested_webpack_require_52923__.d(__webpack_exports__, {
                    "Recorder": () => Recorder
                });
                class Recorder {
                    constructor() {
                        this.intransigent = false;
                    }
                    beginRecording() { }
                    pauseRecording() { }
                    resumeRecording() { }
                    endRecording() { }
                    finalizeRecording(data, startDelay = 0, stopDelay = 0) {
                        return data;
                    }
                    provide({ push, manager, player }) {
                        this.push = push;
                        this.manager = manager;
                        this.player = player;
                    }
                    getUpdate(data, lastDuration) { }
                }
            }),
            "./src/recorders/audio-recorder.tsx": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_53979__) => {
                __nested_webpack_require_53979__.r(__webpack_exports__);
                __nested_webpack_require_53979__.d(__webpack_exports__, {
                    "AudioRecorder": () => AudioRecorder,
                    "AudioSaveComponent": () => AudioSaveComponent,
                    "AudioRecorderPlugin": () => AudioRecorderPlugin
                });
                var _types_MediaRecorder__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_53979__("./src/types/MediaRecorder.ts");
                var _types_MediaRecorder__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_53979__.n(_types_MediaRecorder__WEBPACK_IMPORTED_MODULE_0__);
                var react__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_53979__("react");
                var react__WEBPACK_IMPORTED_MODULE_1___default = __nested_webpack_require_53979__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                var _recorder__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_53979__("./src/recorder.ts");
                const icon = (react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", { transform: "scale(0.126261032057) translate(164.575)" }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", { stroke: "#FFF", transform: "translate(-140.62 -173.21)" }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", { d: "m568.57 620.93c0 116.77-94.66 211.43-211.43 211.43s-211.43-94.66-211.43-211.43v-0.00001", fillOpacity: "0", transform: "translate(14.904)", strokeLinecap: "round", strokeWidth: "20" }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", { d: "m568.57 620.93c0 116.77-94.66 211.43-211.43 211.43s-211.43-94.66-211.43-211.43v-0.00001", fillOpacity: "0", transform: "translate(14.904)", strokeLinecap: "round", strokeWidth: "40" }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", { d: "m372.05 832.36v114.29", strokeWidth: "30", fill: "none" }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", { fill: "#FFF", d: "m197.14 920.93c0.00001-18.935 59.482-34.286 132.86-34.286 73.375 0 132.86 15.35 132.86 34.286z", transform: "translate(42.047 34.286)", strokeLinecap: "round", strokeWidth: "20" }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", { fill: "#FFF", strokeWidth: "21.455", strokeLinecap: "round", d: "m372.06 183.94c-77.019-0.00001-139.47 62.45-139.47 139.47v289.62c0 77.019 62.45 139.47 139.47 139.47 77.019 0 139.44-62.45 139.44-139.47v-289.62c0-77.02-62.42-139.47-139.44-139.47z" }))));
                class AudioRecorder extends _recorder__WEBPACK_IMPORTED_MODULE_2__.Recorder {
                    constructor() {
                        super();
                        this.intransigent = true;
                        if (location.protocol !== "https:")
                            return;
                        try {
                            navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
                                this.stream = stream;
                            });
                        }
                        catch (e) {
                            console.log("no recording allowed");
                        }
                    }
                    beginRecording() {
                        if (!this.stream)
                            throw new Error("Navigator stream not available");
                        if (document.location.protocol !== "https:")
                            throw new Error("Page must be accessed via HTTPS in order to record audio");
                        this.promise = new Promise(async (resolve, reject) => {
                            this.mediaRecorder = new MediaRecorder(this.stream, { mimeType: "audio/webm" });
                            this.mediaRecorder.addEventListener("dataavailable", e => {
                                this.push(e.data);
                            });
                            let startDelay;
                            this.mediaRecorder.addEventListener("start", () => {
                                startDelay = this.manager.getTime();
                            });
                            this.mediaRecorder.addEventListener("stop", () => {
                                resolve([startDelay, this.manager.getTime()]);
                            });
                            this.mediaRecorder.start();
                        });
                    }
                    pauseRecording() {
                        this.mediaRecorder.pause();
                    }
                    resumeRecording() {
                        this.mediaRecorder.resume();
                    }
                    async endRecording() {
                        this.mediaRecorder.stop();
                        return this.promise;
                    }
                    finalizeRecording(chunks) {
                        return new Blob(chunks, { type: "audio/webm" });
                    }
                }
                function AudioSaveComponent(props) {
                    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, props.data ?
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { download: "audio.webm", href: URL.createObjectURL(props.data) }, "Download Audio")
                        :
                            "Audio not yet available"));
                }
                const recorder = new AudioRecorder();
                const AudioRecorderPlugin = {
                    enabled: () => typeof recorder.stream !== "undefined",
                    icon,
                    key: "audio",
                    name: "Audio",
                    recorder,
                    saveComponent: AudioSaveComponent,
                    title: "Record audio"
                };
            }),
            "./src/recorders/marker-recorder.tsx": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_59839__) => {
                __nested_webpack_require_59839__.r(__webpack_exports__);
                __nested_webpack_require_59839__.d(__webpack_exports__, {
                    "MarkerRecorder": () => MarkerRecorder,
                    "MarkerSaveComponent": () => MarkerSaveComponent,
                    "MarkerRecorderPlugin": () => MarkerRecorderPlugin
                });
                var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_59839__("react");
                var react__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_59839__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                var _recorder__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_59839__("./src/recorder.ts");
                var ractive_player__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_59839__("ractive-player");
                var ractive_player__WEBPACK_IMPORTED_MODULE_2___default = __nested_webpack_require_59839__.n(ractive_player__WEBPACK_IMPORTED_MODULE_2__);
                const { bind } = ractive_player__WEBPACK_IMPORTED_MODULE_2__.Utils.misc, { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_2__.Utils.mobile, { formatTimeMs } = ractive_player__WEBPACK_IMPORTED_MODULE_2__.Utils.time;
                const icon = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", { fill: "#FFF", fontFamily: "Helvetica", fontSize: "75", textAnchor: "middle", x: "50", y: "75" }, "M"));
                class MarkerRecorder extends _recorder__WEBPACK_IMPORTED_MODULE_1__.Recorder {
                    constructor() {
                        super();
                        bind(this, ["onMarkerUpdate"]);
                    }
                    beginRecording() {
                        this.lastTime = 0;
                        this.player.script.hub.on("markerupdate", this.onMarkerUpdate);
                    }
                    endRecording() {
                        this.player.script.hub.off("markerupdate", this.onMarkerUpdate);
                        this.captureMarker(this.player.script.markerName);
                    }
                    finalizeRecording(data, startDelay, stopDelay) {
                        data[0][1] -= startDelay;
                        data[data.length - 1][1] += stopDelay;
                        return data.map(cue => [cue[0], formatTimeMs(cue[1])]);
                    }
                    onMarkerUpdate(prevIndex) {
                        if (this.manager.paused)
                            return;
                        const { script } = this.player;
                        this.captureMarker(script.markers[prevIndex][0]);
                    }
                    captureMarker(markerName) {
                        const t = this.manager.getTime();
                        this.push([markerName, t - this.lastTime]);
                        this.lastTime = t;
                    }
                }
                function MarkerSaveComponent(props) {
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { readOnly: true, value: format(props.data) })));
                }
                const MarkerRecorderPlugin = {
                    icon,
                    key: "markers",
                    name: "Markers",
                    recorder: new MarkerRecorder,
                    saveComponent: MarkerSaveComponent
                };
                function format(data) {
                    return JSON.stringify(data, null, 2).replace(/\[\s+"(.+?)",\s+"(.+?)"\s+\]/g, "[\"$1\", \"$2\"]");
                }
            }),
            "./src/recorders/replay-data-recorder.ts": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_63557__) => {
                __nested_webpack_require_63557__.r(__webpack_exports__);
                __nested_webpack_require_63557__.d(__webpack_exports__, {
                    "ReplayDataRecorder": () => ReplayDataRecorder
                });
                var _recorder__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_63557__("./src/recorder.ts");
                var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_63557__("ractive-player");
                var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = __nested_webpack_require_63557__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
                const { bind } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.misc, { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.mobile, { formatTimeMs, parseTime } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.time;
                class ReplayDataRecorder extends _recorder__WEBPACK_IMPORTED_MODULE_0__.Recorder {
                    constructor() {
                        super();
                        this.duration = 0;
                        this.index = -1;
                    }
                    beginRecording() {
                        this.duration = 0;
                        this.index = -1;
                    }
                    finalizeRecording(data, startDelay = 0, stopDelay = 0) {
                        for (let sum = 0, i = 0; i < data.length && sum < startDelay; ++i) {
                            const dur = data[i][0];
                            if (dur === 0) {
                                continue;
                            }
                            if (sum + dur >= startDelay) {
                                data[i][0] -= startDelay - sum;
                                break;
                            }
                            sum += dur;
                            data.splice(i, 1);
                            --i;
                        }
                        return data;
                    }
                    capture(time, data) {
                        if (time - this.duration < 0) {
                        }
                        this.push([time - this.duration, data]);
                        this.duration = time;
                    }
                }
                function formatNum(x) {
                    return parseFloat(x.toFixed(2));
                }
            }),
            "./src/recording-manager.ts": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_66035__) => {
                __nested_webpack_require_66035__.r(__webpack_exports__);
                __nested_webpack_require_66035__.d(__webpack_exports__, {
                    "default": () => RecordingManager
                });
                var ractive_player__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_66035__("ractive-player");
                var ractive_player__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_66035__.n(ractive_player__WEBPACK_IMPORTED_MODULE_0__);
                var events__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_66035__("./node_modules/events/events.js");
                var events__WEBPACK_IMPORTED_MODULE_1___default = __nested_webpack_require_66035__.n(events__WEBPACK_IMPORTED_MODULE_1__);
                const { bind } = ractive_player__WEBPACK_IMPORTED_MODULE_0__.Utils.misc;
                class RecordingManager {
                    constructor(player) {
                        this.player = player;
                        this.captureData = {};
                        this.hub = new events__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
                        this.hub.setMaxListeners(0);
                        this.paused = false;
                        this.active = false;
                        bind(this, ["beginRecording", "endRecording", "pauseRecording", "resumeRecording", "capture"]);
                    }
                    beginRecording(plugins) {
                        this.plugins = plugins;
                        this.pauseTime = 0;
                        this.intransigentRecorder = void 0;
                        for (const plugin of this.plugins) {
                            const { recorder } = plugin;
                            recorder.provide({
                                push: (value) => this.capture(plugin.key, value),
                                manager: this,
                                player: this.player
                            });
                            this.captureData[plugin.key] = [];
                            if (recorder.intransigent) {
                                if (this.intransigentRecorder)
                                    throw new Error("At most one intransigent recorder is allowed");
                                this.intransigentRecorder = recorder;
                            }
                        }
                        this.baseTime = performance.now();
                        for (const plugin of this.plugins) {
                            plugin.recorder.beginRecording();
                        }
                        this.paused = false;
                        this.active = true;
                        this.hub.emit("start");
                    }
                    capture(key, value) {
                        this.captureData[key].push(value);
                        this.hub.emit("capture", key, value);
                    }
                    async endRecording() {
                        const endTime = this.getTime();
                        this.duration = endTime;
                        const recording = {};
                        let startDelay = 0, stopDelay = 0;
                        let promise;
                        if (this.intransigentRecorder) {
                            promise = this.intransigentRecorder.endRecording();
                        }
                        for (const plugin of this.plugins) {
                            if (plugin.recorder === this.intransigentRecorder)
                                continue;
                            plugin.recorder.endRecording();
                        }
                        if (this.intransigentRecorder) {
                            try {
                                const [startTime, stopTime] = await promise;
                                startDelay = startTime;
                                stopDelay = stopTime - endTime;
                                this.duration = this.duration + stopDelay - startDelay;
                            }
                            catch (e) {
                                startDelay = 0;
                                stopDelay = 0;
                                console.error(e);
                            }
                        }
                        for (const plugin of this.plugins) {
                            recording[plugin.key] = plugin.recorder.finalizeRecording(this.captureData[plugin.key], startDelay, stopDelay);
                            this.hub.emit("finalize", plugin.key, recording[plugin.key]);
                        }
                        this.active = false;
                        this.hub.emit("finalize", undefined, undefined);
                        return recording;
                    }
                    getTime() {
                        return performance.now() - this.baseTime - this.pauseTime;
                    }
                    pauseRecording() {
                        this.lastPauseTime = performance.now();
                        for (const plugin of this.plugins) {
                            plugin.recorder.pauseRecording();
                        }
                        this.paused = true;
                        this.hub.emit("pause");
                    }
                    setPlayer(player) {
                        this.player = player;
                    }
                    resumeRecording() {
                        this.pauseTime += performance.now() - this.lastPauseTime;
                        for (const plugin of this.plugins) {
                            plugin.recorder.resumeRecording();
                        }
                        this.paused = false;
                        this.hub.emit("resume");
                    }
                }
            }),
            "./src/types/MediaRecorder.ts": (() => {
            }),
            "ractive-player": ((module) => {
                module.exports = __WEBPACK_EXTERNAL_MODULE_ractive_player__;
            }),
            "react": ((module) => {
                module.exports = __WEBPACK_EXTERNAL_MODULE_react__;
            })
        });
        var __webpack_module_cache__ = {};
        function __nested_webpack_require_72211__(moduleId) {
            if (__webpack_module_cache__[moduleId]) {
                return __webpack_module_cache__[moduleId].exports;
            }
            var module = __webpack_module_cache__[moduleId] = {
                id: moduleId,
                exports: {}
            };
            __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_72211__);
            return module.exports;
        }
        (() => {
            __nested_webpack_require_72211__.n = (module) => {
                var getter = module && module.__esModule ?
                    () => module['default'] :
                    () => module;
                __nested_webpack_require_72211__.d(getter, { a: getter });
                return getter;
            };
        })();
        (() => {
            __nested_webpack_require_72211__.d = (exports, definition) => {
                for (var key in definition) {
                    if (__nested_webpack_require_72211__.o(definition, key) && !__nested_webpack_require_72211__.o(exports, key)) {
                        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    }
                }
            };
        })();
        (() => {
            __nested_webpack_require_72211__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        })();
        (() => {
            __nested_webpack_require_72211__.r = (exports) => {
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                }
                Object.defineProperty(exports, '__esModule', { value: true });
            };
        })();
        return __nested_webpack_require_72211__("./src/plugin.tsx");
    })();
});


/***/ }),

/***/ "./src/@development/controls.tsx":
/*!***************************************!*\
  !*** ./src/@development/controls.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rp_recording__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rp-recording */ "./node_modules/rp-recording/dist/rp-recording.js");
/* harmony import */ var rp_recording__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rp_recording__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [liqvid__WEBPACK_IMPORTED_MODULE_1__.Player.defaultControlsLeft, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "rp-controls-right" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_recording__WEBPACK_IMPORTED_MODULE_2__.RecordingControl, {}, void 0), liqvid__WEBPACK_IMPORTED_MODULE_1__.Player.defaultControlsRight] }), void 0)] }, void 0));


/***/ }),

/***/ "./src/Intro.tsx":
/*!***********************!*\
  !*** ./src/Intro.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Intro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var rp_katex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rp-katex */ "./node_modules/rp-katex/rp-katex.js");


function Intro(props) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({}, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", Object.assign({ "data-from-first": "intro/title", "data-from-last": "padics/" }, { children: "p-adic numbers" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", Object.assign({ id: "intro/agenda", "data-from-first": "intro/agenda" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "p-adic norm" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Completion" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Hensel's lemma" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_katex__WEBPACK_IMPORTED_MODULE_1__.KTX, { children: "\\mathbb Q_p" }, void 0), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_katex__WEBPACK_IMPORTED_MODULE_1__.KTX, { children: "\\mathbb Z_p" }, void 0)] }, void 0)] }), void 0)] }), void 0));
}


/***/ }),

/***/ "./src/Padics.tsx":
/*!************************!*\
  !*** ./src/Padics.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Padics)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_svg_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/svg-utils */ "./lib/svg-utils.ts");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");



const { constrain, range } = liqvid__WEBPACK_IMPORTED_MODULE_2__.Utils.misc;


const handler = (0,d3_zoom__WEBPACK_IMPORTED_MODULE_4__.zoom)();
class Open extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.state = {
            p: props.p,
            r: props.r,
            r_child: props.r * 0.37,
            cx: props.cx,
            cy: props.cy,
            fill: props.fill,
            stroke: props.stroke,
            strokeWidth: props.strokeWidth,
            value: props.value,
            level: props.level,
            childs: []
        };
    }
    onClick() {
        let childs = [];
        for (let i = 0; i < this.state.p; i++) {
            childs.push(this.state.value + i * this.state.p ** (1 + this.state.level));
        }
        this.setState({ childs: childs });
    }
    render() {
        let value = this.state.value;
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { onClick: () => this.onClick(), r: this.props.r, cx: this.props.cx, cy: this.props.cy, fill: this.props.fill, stroke: this.props.stroke, strokeWidth: this.props.strokeWidth }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", Object.assign({ x: this.props.cx, y: this.props.cy, fontSize: 0.8 * (0.37 ** (this.props.level)) + "em", fill: "black" }, { children: (this.state.childs.length === 0) ?
                        value :
                        '' }), void 0), this.draw_childs(), ") )"] }, void 0));
    }
    draw_childs() {
        return (range(this.state.childs.length).map(i => {
            const cx = (this.state.r - this.state.r_child) * Math.cos(2 * Math.PI * i / this.state.p);
            const cy = (this.state.r - this.state.r_child) * Math.sin(2 * Math.PI * i / this.state.p);
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Open, { p: this.state.p, r: this.state.r_child, cx: this.state.cx + (this.state.r - this.state.r_child) * Math.cos(2 * Math.PI * i / this.state.p), cy: this.state.cy - (this.state.r - this.state.r_child) * Math.sin(2 * Math.PI * i / this.state.p), fill: "lightgreen", stroke: this.state.stroke, strokeWidth: this.state.strokeWidth, value: this.state.value + i * this.state.p ** (1 + this.state.level), level: this.state.level + 1 }, this.state.value + '_' + i));
        }));
    }
}
function Padics(props) {
    const p = 5;
    const r = 50;
    const r_child = r * 0.37;
    const [opens, updateOpens] = react__WEBPACK_IMPORTED_MODULE_1__.useState(() => range(p));
    const svg = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    const zoom = react__WEBPACK_IMPORTED_MODULE_1__.useRef(1);
    const onWheel = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((e) => {
        const [x, y] = (0,_lib_svg_utils__WEBPACK_IMPORTED_MODULE_3__.screenToSVG)(svg.current, e.clientX, e.clientY);
        zoom.current = constrain(1, zoom.current - e.deltaY / 200, 20);
        svg.current.setAttribute("viewBox", [
            constrain(-50, (-50 - x) / zoom.current + x, 50),
            constrain(-50, (-50 - y) / zoom.current + y, 50),
            100 / zoom.current,
            100 / zoom.current
        ].join(" "));
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", Object.assign({}, props, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", Object.assign({ x: 0, y: 0, fontSize: 0.5, fill: 'black' }, { children: "Click on the opens to see what's inside them" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ id: "bubble", viewBox: "-50 -50 100 100", onWheel: onWheel, ref: svg }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "0", cy: "0", r: "50", fill: "blue" }, void 0), opens.map(i => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Open, { p: p, r: r_child, cx: (r - r_child) * Math.cos(2 * Math.PI * i / p), cy: -(r - r_child) * Math.sin(2 * Math.PI * i / p), fill: 'yellow', stroke: 'black', strokeWidth: 0.05, level: 0, value: i }, i)))] }), void 0)] }, void 0) }), void 0));
}


/***/ }),

/***/ "./src/markers.ts":
/*!************************!*\
  !*** ./src/markers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markers": () => (/* binding */ markers),
/* harmony export */   "script": () => (/* binding */ script),
/* harmony export */   "playback": () => (/* binding */ playback)
/* harmony export */ });
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_0__);

const markers = [
    ["intro/title", "0:01"],
    ["intro/agenda", "0:03"],
    ["padics/", "0:23"],
];
const script = new liqvid__WEBPACK_IMPORTED_MODULE_0__.Script(markers);
const playback = script.playback;


/***/ }),

/***/ "liqvid":
/*!*************************!*\
  !*** external "Liqvid" ***!
  \*************************/
/***/ ((module) => {

module.exports = Liqvid;

/***/ }),

/***/ "ractive-player":
/*!********************************!*\
  !*** external "RactivePlayer" ***!
  \********************************/
/***/ ((module) => {

module.exports = RactivePlayer;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _env_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/controls */ "./src/@development/controls.tsx");
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markers */ "./src/markers.ts");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Intro */ "./src/Intro.tsx");
/* harmony import */ var _Padics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Padics */ "./src/Padics.tsx");







function Lesson() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(liqvid__WEBPACK_IMPORTED_MODULE_2__.Player, Object.assign({ controls: _env_controls__WEBPACK_IMPORTED_MODULE_3__.default, script: _markers__WEBPACK_IMPORTED_MODULE_4__.script }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Intro__WEBPACK_IMPORTED_MODULE_5__.default, { "data-during": "intro/" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Padics__WEBPACK_IMPORTED_MODULE_6__.default, { "data-during": "padics/" }, void 0)] }), void 0));
}
react_dom__WEBPACK_IMPORTED_MODULE_1__.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Lesson, {}, void 0), document.querySelector("main"));

})();

/******/ })()
;
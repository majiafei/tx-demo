(window.webpackJsonp = window.webpackJsonp || []).push([[7], [function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "Children", function () {
        return G
    }), n.d(t, "Component", function () {
        return F
    }), n.d(t, "PureComponent", function () {
        return H
    }), n.d(t, "createElement", function () {
        return createElement$2
    }), n.d(t, "cloneElement", function () {
        return cloneElement
    }), n.d(t, "render", function () {
        return render
    }), n.d(t, "nextTick", function () {
        return u
    }), n.d(t, "options", function () {
        return N
    }), n.d(t, "findDOMNode", function () {
        return findDOMNode
    }), n.d(t, "isValidElement", function () {
        return isValidElement$1
    }), n.d(t, "unmountComponentAtNode", function () {
        return unmountComponentAtNode
    }), n.d(t, "createPortal", function () {
        return createPortal
    }), n.d(t, "unstable_renderSubtreeIntoContainer", function () {
        return unstable_renderSubtreeIntoContainer
    }), n.d(t, "hydrate", function () {
        return hydrate
    }), n.d(t, "createFactory", function () {
        return createFactory
    }), n.d(t, "unstable_batchedUpdates", function () {
        return J
    }), n.d(t, "version", function () {
        return K
    }), n.d(t, "PropTypes", function () {
        return X
    });
    var r = function () {
        var e;
        if (void 0 !== r) e = r; else if ("undefined" != typeof self) e = self; else try {
            e = Function("return this")()
        } catch (t) {
            throw new Error("global object is unavailable in this environment")
        }
        return e
    }(), o = "undefined" != typeof window;

    function noop() {
    }

    var i = o ? document : {createElement: noop, createElementNS: noop, createTextNode: noop};

    function isNumber(e) {
        return "number" == typeof e
    }

    var a = isFunction(i.createAttributeNS);

    function isString(e) {
        return "string" == typeof e
    }

    function isFunction(e) {
        return "function" == typeof e
    }

    var l = Array.isArray;

    function isUndefined(e) {
        return e === undefined
    }

    var c, s = "Promise" in r;
    s && (c = Promise.resolve());
    var u = function (e) {
        for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
        if (e = isFunction(e) ? e.bind.apply(e, [null].concat(t)) : e, s) return c.then(e);
        ("requestAnimationFrame" in r ? requestAnimationFrame : setTimeout)(e)
    };

    function shallowEqual(e, t) {
        if (null === e || null === t) return !1;
        if (Object.is(e, t)) return !0;
        var n = e ? Object.keys(e) : [], r = t ? Object.keys(t) : [];
        if (n.length !== r.length) return !1;
        for (var o = 0; o < n.length; o++) {
            var i = n[o];
            if (!t.hasOwnProperty(i) || !Object.is(e[i], t[i])) return !1
        }
        return !0
    }

    Object.is = Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    var f = function SimpleMap() {
        this.cache = [], this.size = 0
    };
    f.prototype.set = function set(e, t) {
        var n = this.cache.length;
        if (!n) return this.cache.push({k: e, v: t}), void (this.size += 1);
        for (var r = 0; r < n; r++) {
            var o = this.cache[r];
            if (o.k === e) return void (o.v = t)
        }
        this.cache.push({k: e, v: t}), this.size += 1
    }, f.prototype.get = function get(e) {
        var t = this.cache.length;
        if (t) for (var n = 0; n < t; n++) {
            var r = this.cache[n];
            if (r.k === e) return r.v
        }
    }, f.prototype.has = function has(e) {
        var t = this.cache.length;
        if (!t) return !1;
        for (var n = 0; n < t; n++) {
            if (this.cache[n].k === e) return !0
        }
        return !1
    }, f.prototype["delete"] = function delete$1(e) {
        for (var t = this.cache.length, n = 0; n < t; n++) {
            if (this.cache[n].k === e) return this.cache.splice(n, 1), this.size -= 1, !0
        }
        return !1
    }, f.prototype.clear = function clear() {
        var e = this.cache.length;
        if (this.size = 0, e) for (; e;) this.cache.pop(), e--
    };
    var d = "Map" in r ? Map : f;

    function isAttrAnEvent(e) {
        return "o" === e[0] && "n" === e[1]
    }

    var p = "assign" in Object ? function (e, t) {
        return t ? (Object.assign(e, t), e) : e
    } : function (e, t) {
        if (!t) return e;
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    };

    function clone(e) {
        return p({}, e)
    }

    var m, _ = {current: null}, y = [], v = {};

    function isNullOrUndef(e) {
        return e === undefined || null === e
    }

    function isInvalid(e) {
        return isNullOrUndef(e) || !0 === e || !1 === e
    }

    function isVNode(e) {
        return !isNullOrUndef(e) && 2 === e.vtype
    }

    function isComponent(e) {
        return !isInvalid(e) && e.isReactComponent === v
    }

    function isPortal(e, t) {
        return (32 & e) > 0
    }

    function isComposite(e) {
        return !isNullOrUndef(e) && 4 === e.vtype
    }

    function isValidElement(e) {
        return !isNullOrUndef(e) && e.vtype
    }

    function noop$1() {
    }

    !function (e) {
        e[e.Text = 1] = "Text", e[e.Node = 2] = "Node", e[e.Composite = 4] = "Composite", e[e.Stateless = 8] = "Stateless", e[e.Void = 16] = "Void", e[e.Portal = 32] = "Portal"
    }(m || (m = {}));
    var g = {
            update: function update(e, t, n) {
                var r = null != e && e.ref, o = null != t && t.ref;
                r !== o && (this.detach(e, r, e.dom), this.attach(t, o, n))
            }, attach: function attach(e, t, n) {
                var r = isComposite(e) ? e.component : n;
                if (isFunction(t)) t(r); else if (isString(t)) {
                    var o = e._owner;
                    o && isFunction(o.render) && (o.refs[t] = r)
                }
            }, detach: function detach(e, t, n) {
                var r = isComposite(e) ? e.component : n;
                if (isFunction(t)) t(null); else if (isString(t)) {
                    var o = e._owner;
                    o.refs[t] === r && isFunction(o.render) && delete o.refs[t]
                }
            }
        }, b = "oninput", P = "onpropertychange",
        O = o && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform), w = new d, E = {
            onmousemove: 1,
            ontouchmove: 1,
            onmouseleave: 1,
            onmouseenter: 1,
            onload: 1,
            onunload: 1,
            onscroll: 1,
            onfocus: 1,
            onblur: 1,
            onrowexit: 1,
            onbeforeunload: 1,
            onstop: 1,
            ondragdrop: 1,
            ondragenter: 1,
            ondragexit: 1,
            ondraggesture: 1,
            ondragover: 1,
            oncontextmenu: 1,
            onerror: 1,
            onabort: 1,
            oncanplay: 1,
            oncanplaythrough: 1,
            ondurationchange: 1,
            onemptied: 1,
            onended: 1,
            onloadeddata: 1,
            onloadedmetadata: 1,
            onloadstart: 1,
            onencrypted: 1,
            onpause: 1,
            onplay: 1,
            onplaying: 1,
            onprogress: 1,
            onratechange: 1,
            onseeking: 1,
            onseeked: 1,
            onstalled: 1,
            onsuspend: 1,
            ontimeupdate: 1,
            onvolumechange: 1,
            onwaiting: 1
        };
    E[P] = 1;
    var C, k, S, j = !1;
    if (o && navigator.userAgent.indexOf("MSIE 9") >= 0) {
        var T = [], I = [];
        i.addEventListener("selectionchange", function () {
            var e = i.activeElement;
            if (detectCanUseOnInputNode(e)) {
                var t = T.indexOf(e), n = T[t] || T.push(e);
                if (n.value !== I[t]) {
                    var r = i.createEvent("CustomEvent");
                    r.initCustomEvent("input", !0, !0, undefined), I[t] = n.value, e.dispatchEvent(r)
                }
            }
        })
    }

    function attachEvent(e, t, n) {
        if ((t = fixEvent(e, t)) !== P) {
            var r = w.get(t);
            if (1 === E[t]) {
                r || (r = new d);
                var o = function attachEventToNode(e, t, n) {
                    var r = function (t) {
                        var r = n.get(e);
                        if (r && r.eventHandler) {
                            var o = {currentTarget: e};
                            Object.defineProperties(t, {
                                currentTarget: {
                                    configurable: !0, get: function get() {
                                        return o.currentTarget
                                    }
                                }
                            }), r.eventHandler(t)
                        }
                    };
                    return e.addEventListener(parseEventName(t), r, !1), r
                }(e, t, r);
                w.set(t, r), isFunction(n) && r.set(e, {eventHandler: n, event: o})
            } else r || ((r = {items: new d}).event = function attachEventToDocument(e, t, n) {
                var r = function (e) {
                    var t = n.items, r = t.size;
                    if (r > 0) {
                        var o = {currentTarget: e.target};
                        try {
                            Object.defineProperties(e, {
                                currentTarget: {
                                    configurable: !0, get: function get() {
                                        return o.currentTarget
                                    }
                                }, stopPropagation: {value: stopPropagation}
                            })
                        } catch (i) {
                        }
                        !function dispatchEvent(e, t, n, r, o) {
                            var i = n.get(t);
                            if (i && (r--, o.currentTarget = t, Object.defineProperties(e, {nativeEvent: {value: e}}), i(e), e.cancelBubble)) return;
                            if (r > 0) {
                                var a = t.parentNode;
                                if (null === a || "click" === e.type && 1 === a.nodeType && a.disabled) return;
                                dispatchEvent(e, a, n, r, o)
                            }
                        }(e, e.target, n.items, r, o)
                    }
                };
                return e.addEventListener(parseEventName(t), r, !1), r
            }(i, t, r), w.set(t, r)), isFunction(n) && (O && (e.onclick = noop$1), r.items.set(e, n))
        } else (function processOnPropertyChangeEvent(e, t) {
            x[e.name] = t, j || (e.addEventListener("focusin", function () {
                unbindOnPropertyChange(), function bindOnPropertyChange(e) {
                    C = e, k = e.value, S = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(C, "value", {
                        get: function get() {
                            return S.get.call(this)
                        }, set: function set(e) {
                            k = e, S.set.call(this, e)
                        }
                    }), C.addEventListener("propertychange", propertyChangeHandler, !1)
                }(e)
            }, !1), e.addEventListener("focusout", unbindOnPropertyChange, !1))
        })(e, n)
    }

    function detachEvent(e, t, n) {
        if ((t = fixEvent(e, t)) !== P) {
            var r = w.get(t);
            if (1 === E[t] && r) {
                var o = r.get(e);
                if (o) {
                    e.removeEventListener(parseEventName(t), o.event, !1);
                    var a = r.size;
                    r["delete"](e) && 0 === a && w["delete"](t)
                }
            } else if (r && r.items) {
                var l = r.items;
                l["delete"](e) && 0 === l.size && (i.removeEventListener(parseEventName(t), r.event, !1), w["delete"](t))
            }
        }
    }

    "undefined" == typeof Event || Event.prototype.persist || (Event.prototype.persist = noop$1);
    var x = {};

    function propertyChangeHandler(e) {
        if ("value" === e.propertyName) {
            var t = e.target || e.srcElement, n = t.value;
            if (n !== k) {
                k = n;
                var r = x[t.name];
                isFunction(r) && r.call(t, e)
            }
        }
    }

    function unbindOnPropertyChange() {
        C && (delete C.value, C.removeEventListener("propertychange", propertyChangeHandler, !1), C = null, k = null, S = null)
    }

    function detectCanUseOnInputNode(e) {
        var t = e.nodeName && e.nodeName.toLowerCase(), n = e.type;
        return "input" === t && /text|password/.test(n) || "textarea" === t
    }

    function fixEvent(e, t) {
        return t = "onDoubleClick" === t ? "ondblclick" : "onTouchTap" === t ? "onclick" : "onChange" === t && detectCanUseOnInputNode(e) ? b in window ? b : P : t.toLowerCase()
    }

    function parseEventName(e) {
        return e.substr(2)
    }

    function stopPropagation() {
        this.cancelBubble = !0, this.stopImmediatePropagation()
    }

    var N = {afterMount: noop$1, afterUpdate: noop$1, beforeUnmount: noop$1, roots: [], debug: !1};

    function unmountChildren(e, t) {
        if (l(e)) for (var n = 0, r = e.length; n < r; n++) unmount(e[n], t); else unmount(e, t)
    }

    function unmount(e, t) {
        if (!isInvalid(e)) {
            var n = e.vtype, r = e.dom;
            if ((12 & n) > 0) N.beforeUnmount(e), e.destroy(); else if ((2 & n) > 0) {
                var o = e.props, i = e.children, a = e.ref;
                for (var l in unmountChildren(i), o) isAttrAnEvent(l) && detachEvent(r, l, o[l]);
                null !== a && g.detach(e, a, r)
            } else 32 & n && unmountChildren(e.children, e.type);
            isNullOrUndef(t) || isNullOrUndef(r) || t.removeChild(r)
        }
    }

    var R = "http://www.w3.org/1999/xlink", A = "http://www.w3.org/XML/1998/namespace", D = {
        accentHeight: "accent-height",
        accumulate: 0,
        additive: 0,
        alignmentBaseline: "alignment-baseline",
        allowReorder: "allowReorder",
        alphabetic: 0,
        amplitude: 0,
        arabicForm: "arabic-form",
        ascent: 0,
        attributeName: "attributeName",
        attributeType: "attributeType",
        autoReverse: "autoReverse",
        azimuth: 0,
        baseFrequency: "baseFrequency",
        baseProfile: "baseProfile",
        baselineShift: "baseline-shift",
        bbox: 0,
        begin: 0,
        bias: 0,
        by: 0,
        calcMode: "calcMode",
        capHeight: "cap-height",
        clip: 0,
        clipPath: "clip-path",
        clipRule: "clip-rule",
        clipPathUnits: "clipPathUnits",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        contentScriptType: "contentScriptType",
        contentStyleType: "contentStyleType",
        cursor: 0,
        cx: 0,
        cy: 0,
        d: 0,
        decelerate: 0,
        descent: 0,
        diffuseConstant: "diffuseConstant",
        direction: 0,
        display: 0,
        divisor: 0,
        dominantBaseline: "dominant-baseline",
        dur: 0,
        dx: 0,
        dy: 0,
        edgeMode: "edgeMode",
        elevation: 0,
        enableBackground: "enable-background",
        end: 0,
        evEvent: "ev:event",
        exponent: 0,
        externalResourcesRequired: "externalResourcesRequired",
        fill: 0,
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        filter: 0,
        filterRes: "filterRes",
        filterUnits: "filterUnits",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        focusable: 0,
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        format: 0,
        from: 0,
        fx: 0,
        fy: 0,
        g1: 0,
        g2: 0,
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        glyphRef: "glyphRef",
        gradientTransform: "gradientTransform",
        gradientUnits: "gradientUnits",
        hanging: 0,
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        ideographic: 0,
        imageRendering: "image-rendering",
        "in": 0,
        in2: 0,
        intercept: 0,
        k: 0,
        k1: 0,
        k2: 0,
        k3: 0,
        k4: 0,
        kernelMatrix: "kernelMatrix",
        kernelUnitLength: "kernelUnitLength",
        kerning: 0,
        keyPoints: "keyPoints",
        keySplines: "keySplines",
        keyTimes: "keyTimes",
        lengthAdjust: "lengthAdjust",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        limitingConeAngle: "limitingConeAngle",
        local: 0,
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        markerHeight: "markerHeight",
        markerUnits: "markerUnits",
        markerWidth: "markerWidth",
        mask: 0,
        maskContentUnits: "maskContentUnits",
        maskUnits: "maskUnits",
        mathematical: 0,
        mode: 0,
        numOctaves: "numOctaves",
        offset: 0,
        opacity: 0,
        operator: 0,
        order: 0,
        orient: 0,
        orientation: 0,
        origin: 0,
        overflow: 0,
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pathLength: "pathLength",
        patternContentUnits: "patternContentUnits",
        patternTransform: "patternTransform",
        patternUnits: "patternUnits",
        pointerEvents: "pointer-events",
        points: 0,
        pointsAtX: "pointsAtX",
        pointsAtY: "pointsAtY",
        pointsAtZ: "pointsAtZ",
        preserveAlpha: "preserveAlpha",
        preserveAspectRatio: "preserveAspectRatio",
        primitiveUnits: "primitiveUnits",
        r: 0,
        radius: 0,
        refX: "refX",
        refY: "refY",
        renderingIntent: "rendering-intent",
        repeatCount: "repeatCount",
        repeatDur: "repeatDur",
        requiredExtensions: "requiredExtensions",
        requiredFeatures: "requiredFeatures",
        restart: 0,
        result: 0,
        rotate: 0,
        rx: 0,
        ry: 0,
        scale: 0,
        seed: 0,
        shapeRendering: "shape-rendering",
        slope: 0,
        spacing: 0,
        specularConstant: "specularConstant",
        specularExponent: "specularExponent",
        speed: 0,
        spreadMethod: "spreadMethod",
        startOffset: "startOffset",
        stdDeviation: "stdDeviation",
        stemh: 0,
        stemv: 0,
        stitchTiles: "stitchTiles",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        string: 0,
        stroke: 0,
        strokeDasharray: "stroke-dasharray",
        strokeDashoffset: "stroke-dashoffset",
        strokeLinecap: "stroke-linecap",
        strokeLinejoin: "stroke-linejoin",
        strokeMiterlimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        surfaceScale: "surfaceScale",
        systemLanguage: "systemLanguage",
        tableValues: "tableValues",
        targetX: "targetX",
        targetY: "targetY",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        textLength: "textLength",
        to: 0,
        transform: 0,
        u1: 0,
        u2: 0,
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicode: 0,
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        values: 0,
        vectorEffect: "vector-effect",
        version: 0,
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        viewBox: "viewBox",
        viewTarget: "viewTarget",
        visibility: 0,
        widths: 0,
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        x: 0,
        xHeight: "x-height",
        x1: 0,
        x2: 0,
        xChannelSelector: "xChannelSelector",
        xlinkActuate: "xlink:actuate",
        xlinkArcrole: "xlink:arcrole",
        xlinkHref: "xlink:href",
        xlinkRole: "xlink:role",
        xlinkShow: "xlink:show",
        xlinkTitle: "xlink:title",
        xlinkType: "xlink:type",
        xmlBase: "xml:base",
        xmlId: "xml:id",
        xmlns: 0,
        xmlnsXlink: "xmlns:xlink",
        xmlLang: "xml:lang",
        xmlSpace: "xml:space",
        y: 0,
        y1: 0,
        y2: 0,
        yChannelSelector: "yChannelSelector",
        z: 0,
        zoomAndPan: "zoomAndPan"
    }, L = {
        Properties: {},
        DOMAttributeNamespaces: {
            "ev:event": "http://www.w3.org/2001/xml-events",
            "xlink:actuate": R,
            "xlink:arcrole": R,
            "xlink:href": R,
            "xlink:role": R,
            "xlink:show": R,
            "xlink:title": R,
            "xlink:type": R,
            "xml:base": A,
            "xml:id": A,
            "xml:lang": A,
            "xml:space": A
        },
        DOMAttributeNames: {}
    };

    function patch(e, t, n, r, o) {
        var i, a = e.dom;
        if (function isSameVNode(e, t) {
            if (isInvalid(e) || isInvalid(t) || l(e) || l(t)) return !1;
            return e.type === t.type && e.vtype === t.vtype && e.key === t.key
        }(e, t)) {
            var c = t.vtype;
            if (2 & c) (o = isNullOrUndef(o) ? e.isSvg : o) && (t.isSvg = o), function patchProps(e, t, n, r, o) {
                for (var i in n) {
                    var a = n[i];
                    isNullOrUndef(t[i]) && !isNullOrUndef(a) && (isAttrAnEvent(i) ? detachEvent(e, i) : "dangerouslySetInnerHTML" === i ? e.textContent = "" : "className" === i ? e.removeAttribute("class") : e.removeAttribute(i))
                }
                for (var l in t) patchProp(e, l, n[l], t[l], r, o)
            }(a, t.props, e.props, e, o), patchChildren(a, e.children, t.children, r, o), null !== t.ref && g.update(e, t, a), i = a; else if ((12 & c) > 0) i = t.update(e, t, r), N.afterUpdate(t); else {
                if (1 & c) return function patchVText(e, t) {
                    var n = e.dom;
                    if (null === n) return;
                    var r = t.text;
                    t.dom = n, e.text !== r && (n.nodeValue = r);
                    return n
                }(e, t);
                32 & c && patchChildren(e.type, e.children, t.children, r, o)
            }
            t.dom = i || a
        } else l(e) && l(t) ? patchArrayChildren(a, e, t, r, !1) : (unmount(e), i = createElement(t, o, r), null !== t && (t.dom = i), null !== n && n.replaceChild(i, a));
        return i
    }

    function patchArrayChildren(e, t, n, r, o) {
        var i = t.length, a = n.length;
        if (0 === i) {
            if (a > 0) for (var l = 0; l < a; l++) mountChild(n[l], e, r, o)
        } else 0 === a ? (unmountChildren(t), e.textContent = "") : !function isKeyed(e, t) {
            return t.length > 0 && !isNullOrUndef(t[0]) && !isNullOrUndef(t[0].key) && e.length > 0 && !isNullOrUndef(e[0]) && !isNullOrUndef(e[0].key)
        }(t, n) ? function patchNonKeyedChildren(e, t, n, r, o, i, a) {
            var l = Math.min(i, a), c = 0;
            for (; c < l;) patch(t[c], n[c], e, r, o), c++;
            if (i < a) for (c = l; c < a; c++) null !== e && e.appendChild(createElement(n[c], o, r)); else if (i > a) for (c = l; c < i; c++) unmount(t[c], e)
        }(e, t, n, r, o, i, a) : function patchKeyedChildren(e, t, n, r, o, i, a) {
            var l, c, s, u, f, p, m, h = i - 1, _ = a - 1, y = 0, v = 0, g = e[y], b = t[v], P = e[h], O = t[_];
            e:{
                for (; g.key === b.key;) {
                    if (patch(g, b, n, r, o), v++, ++y > h || v > _) break e;
                    g = e[y], b = t[v]
                }
                for (; P.key === O.key;) {
                    if (patch(P, O, n, r, o), _--, y > --h || v > _) break e;
                    P = e[h], O = t[_]
                }
            }
            if (y > h) {
                if (v <= _) for (f = (p = _ + 1) < a ? t[p].dom : null; v <= _;) m = t[v], v++, attachNewNode(n, createElement(m, o, r), f)
            } else if (v > _) for (; y <= h;) unmount(e[y++], n); else {
                var w = h - y + 1, E = _ - v + 1, C = new Array(E);
                for (l = 0; l < E; l++) C[l] = -1;
                var k = !1, S = 0, j = 0;
                if (E <= 4 || w * E <= 16) {
                    for (l = y; l <= h; l++) if (s = e[l], j < E) for (c = v; c <= _; c++) if (u = t[c], s.key === u.key) {
                        C[c - v] = l, S > c ? k = !0 : S = c, patch(s, u, n, r, o), j++, e[l] = null;
                        break
                    }
                } else {
                    var T = new d;
                    for (l = v; l <= _; l++) T.set(t[l].key, l);
                    for (l = y; l <= h; l++) s = e[l], j < E && (c = T.get(s.key)) !== undefined && (u = t[c], C[c - v] = l, S > c ? k = !0 : S = c, patch(s, u, n, r, o), j++, e[l] = null)
                }
                if (w === i && 0 === j) for (unmountChildren(e), n.textContent = ""; v < E;) m = t[v], v++, attachNewNode(n, createElement(m, o, r), null); else {
                    for (l = w - j; l > 0;) null !== (s = e[y++]) && (unmount(s, n), l--);
                    if (k) {
                        var I = function lis(e) {
                            var t, n, r = e.slice(), o = [];
                            o.push(0);
                            for (var i = 0, a = e.length; i < a; ++i) if (-1 !== e[i]) {
                                var l = o[o.length - 1];
                                if (e[l] < e[i]) r[i] = l, o.push(i); else {
                                    for (t = 0, n = o.length - 1; t < n;) {
                                        var c = (t + n) / 2 | 0;
                                        e[o[c]] < e[i] ? t = c + 1 : n = c
                                    }
                                    e[i] < e[o[t]] && (t > 0 && (r[i] = o[t - 1]), o[t] = i)
                                }
                            }
                            t = o.length, n = o[t - 1];
                            for (; t-- > 0;) o[t] = n, n = r[n];
                            return o
                        }(C);
                        for (c = I.length - 1, l = E - 1; l >= 0; l--) -1 === C[l] ? (m = t[S = l + v], p = S + 1, attachNewNode(n, createElement(m, o, r), p < a ? t[p].dom : null)) : c < 0 || l !== I[c] ? (m = t[S = l + v], p = S + 1, attachNewNode(n, m.dom, p < a ? t[p].dom : null)) : c--
                    } else if (j !== E) for (l = E - 1; l >= 0; l--) -1 === C[l] && (m = t[S = l + v], p = S + 1, attachNewNode(n, createElement(m, o, r), p < a ? t[p].dom : null))
                }
            }
        }(t, n, e, r, o, i, a)
    }

    function patchChildren(e, t, n, r, o) {
        var i = l(t), a = l(n);
        i && a ? patchArrayChildren(e, t, n, r, o) : i || a ? i && !a ? patchArrayChildren(e, t, [n], r, o) : !i && a && patchArrayChildren(e, [t], n, r, o) : patch(t, n, e, r, o)
    }

    function attachNewNode(e, t, n) {
        isNullOrUndef(n) ? e.appendChild(t) : e.insertBefore(t, n)
    }

    Object.keys(D).forEach(function (e) {
        L.Properties[e] = 0, D[e] && (L.DOMAttributeNames[e] = D[e])
    });
    var M = {children: 1, key: 1, ref: 1, owner: 1}, z = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

    function setStyle(e, t, n) {
        if (!(isNullOrUndef(n) || isNumber(n) && isNaN(n))) return "float" === t ? (e.cssFloat = n, void (e.styleFloat = n)) : void (e[t] = !isNumber(n) || z.test(t) ? n : n + "px");
        e[t] = ""
    }

    function patchProp(e, t, n, r, o, i) {
        if (n !== r || "value" === t) {
            if ("className" === t && (t = "class"), 1 === M[t]) return;
            if ("class" !== t || i) if ("dangerouslySetInnerHTML" === t) {
                var a = n && n.__html, l = r && r.__html;
                a !== l && (isNullOrUndef(l) || (isValidElement(o) && o.children !== y && (unmountChildren(o.children), o.children = []), e.innerHTML = l))
            } else if (isAttrAnEvent(t)) !function patchEvent(e, t, n, r) {
                t !== n && (isFunction(t) && detachEvent(r, e), attachEvent(r, e, n))
            }(t, n, r, e); else if ("style" === t) !function patchStyle(e, t, n) {
                var r, o, i = n.style;
                if (isString(t)) i.cssText = t; else if (isNullOrUndef(e) || isString(e)) for (r in t) setStyle(i, r, o = t[r]); else {
                    for (r in t) (o = t[r]) !== e[r] && setStyle(i, r, o);
                    for (r in e) isNullOrUndef(t[r]) && (i[r] = "")
                }
            }(n, r, e); else if ("list" !== t && "type" !== t && !i && t in e) !function setProperty(e, t, n) {
                try {
                    e[t] = n
                } catch (r) {
                }
            }(e, t, null == r ? "" : r), null != r && !1 !== r || e.removeAttribute(t); else if (isNullOrUndef(r) || !1 === r) e.removeAttribute(t); else {
                var c = L.DOMAttributeNamespaces[t];
                if (i && c) if (r) e.setAttributeNS(c, t, r); else {
                    var s = t.indexOf(":"), u = s > -1 ? t.substr(s + 1) : t;
                    e.removeAttributeNS(c, u)
                } else isFunction(r) || e.setAttribute(t, r)
            } else e.className = r
        }
    }

    var U = "http://www.w3.org/2000/svg";

    function createElement(e, t, n, r) {
        var o;
        if (isValidElement(e)) {
            var c = e.vtype;
            12 & c ? (o = e.init(n, r), N.afterMount(e)) : 1 & c ? (o = i.createTextNode(e.text), e.dom = o) : 2 & c ? o = function mountVNode$1(e, t, n, r) {
                e.isSvg ? t = !0 : "svg" === e.type ? t = !0 : a || (t = !1);
                t && (e.namespace = U, e.isSvg = t);
                var o = t ? i.createElementNS(e.namespace, e.type) : i.createElement(e.type);
                (function setProps(e, t, n) {
                    var r = t.props;
                    for (var o in r) patchProp(e, o, null, r[o], null, n)
                })(o, e, t), "foreignObject" === e.type && (t = !1);
                var c = e.children;
                if (l(c)) for (var s = 0, u = c.length; s < u; s++) mountChild(c[s], o, n, t, r); else mountChild(c, o, n, t, r);
                e.dom = o, null !== e.ref && g.attach(e, e.ref, o);
                return o
            }(e, t, n, r) : 16 & c ? o = e.dom = i.createTextNode("") : isPortal(c) && (e.type.appendChild(createElement(e.children, t, n, r)), o = i.createTextNode(""))
        } else if (isString(e) || isNumber(e)) o = i.createTextNode(e); else if (isNullOrUndef(e) || function isBoolean(e) {
            return !0 === e || !1 === e
        }(e)) o = i.createTextNode(""); else {
            if (!l(e)) throw new Error("Unsupported VNode.");
            o = i.createDocumentFragment(), e.forEach(function (e) {
                if (!isInvalid(e)) {
                    var i = createElement(e, t, n, r);
                    i && o.appendChild(i)
                }
            })
        }
        return o
    }

    function mountChild(e, t, n, r, o) {
        e.parentContext = n || v;
        var i = createElement(e, r, n, o);
        null !== i && t.appendChild(i)
    }

    function createVText(e) {
        return {text: e, vtype: 1, dom: null}
    }

    var q = [];

    function errorCatcher(e, t) {
        try {
            return e()
        } catch (n) {
            !function errorHandler(e, t) {
                var n;
                for (; ;) {
                    if (isFunction(e.componentDidCatch)) {
                        n = e;
                        break
                    }
                    if (!e._parentComponent) break;
                    e = e._parentComponent
                }
                if (!n) throw t;
                var r = n._disable;
                n._disable = !1, n.componentDidCatch(t), n._disable = r
            }(t, n)
        }
    }

    function ensureVirtualNode(e) {
        return isNumber(e) || isString(e) ? createVText(e) : isInvalid(e) ? {dom: null, vtype: 16} : e
    }

    function mountVNode(e, t, n) {
        return createElement(e, !1, t, n)
    }

    function getChildContext(e, t) {
        return void 0 === t && (t = v), e.getChildContext ? p(clone(t), e.getChildContext()) : clone(t)
    }

    function renderComponent(e) {
        var t;
        return _.current = e, errorCatcher(function () {
            t = e.render()
        }, e), t = ensureVirtualNode(t), _.current = null, t
    }

    function flushMount() {
        if (q.length) {
            var e = q.slice(0);
            q.length = 0, e.forEach(function (e) {
                isFunction(e) ? e() : e.componentDidMount && errorCatcher(function () {
                    e.componentDidMount()
                }, e)
            })
        }
    }

    function updateComponent(e, t) {
        void 0 === t && (t = !1);
        var n = e.vnode, r = n.dom, o = e.props, i = e.getState(), a = e.context, l = e.prevProps || o,
            c = e.prevState || e.state, s = e.prevContext || a;
        e.props = l, e.context = s;
        var u = !1;
        if (!t && isFunction(e.shouldComponentUpdate) && !1 === e.shouldComponentUpdate(o, i, a) ? u = !0 : isFunction(e.componentWillUpdate) && errorCatcher(function () {
            e.componentWillUpdate(o, i, a)
        }, e), e.props = o, e.state = i, e.context = a, e._dirty = !1, !u) {
            var f = e._rendered, d = renderComponent(e);
            d.parentVNode = n;
            var p = getChildContext(e, a), m = f.dom && f.dom.parentNode;
            for (r = n.dom = patch(f, d, m || null, p), e._rendered = d, isFunction(e.componentDidUpdate) && errorCatcher(function () {
                e.componentDidUpdate(l, c, a)
            }, e); n = n.parentVNode;) (12 & n.vtype) > 0 && (n.dom = r)
        }
        return e.prevProps = e.props, e.prevState = e.state, e.prevContext = e.context, e.clearCallBacks(), flushMount(), r
    }

    var B = [];

    function rerender() {
        var e, t = B;
        for (B = []; e = t.pop();) e._dirty && updateComponent(e)
    }

    var F = function Component(e, t) {
        this._dirty = !0, this._disable = !0, this._pendingStates = [], this.state || (this.state = {}), this.props = e || {}, this.context = t || v, this.refs = {}
    };
    F.prototype.setState = function setState(e, t) {
        e && (this._pendingStates = this._pendingStates || []).push(e), isFunction(t) && (this._pendingCallbacks = this._pendingCallbacks || []).push(t), this._disable || function enqueueRender(e) {
            !e._dirty && (e._dirty = !0) && 1 === B.push(e) && u(rerender)
        }(this)
    }, F.prototype.getState = function getState() {
        var e = this, t = this._pendingStates, n = this.state, r = this.props;
        if (!t.length) return n;
        var o = clone(n), i = t.concat();
        return this._pendingStates.length = 0, i.forEach(function (t) {
            p(o, t), isFunction(t) && (t = t.call(e, n, r))
        }), o
    }, F.prototype.clearCallBacks = function clearCallBacks() {
        if (l(this._pendingCallbacks)) for (; this._pendingCallbacks.length;) this._pendingCallbacks.pop().call(this)
    }, F.prototype.forceUpdate = function forceUpdate(e) {
        isFunction(e) && (this._pendingCallbacks = this._pendingCallbacks || []).push(e), updateComponent(this, !0)
    }, F.prototype.render = function render(e, t, n) {
    }, F.prototype.isReactComponent = v;
    var H = function (e) {
        function PureComponent() {
            e.apply(this, arguments), this.isPureComponent = !0
        }

        return e && (PureComponent.__proto__ = e), PureComponent.prototype = Object.create(e && e.prototype), PureComponent.prototype.constructor = PureComponent, PureComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(e, t) {
            return !shallowEqual(this.props, e) || !shallowEqual(this.state, t)
        }, PureComponent
    }(F);

    function render(e, t, n) {
        if (!t) throw new Error(t + " should be a DOM Element");
        var r, o = t._component;
        return N.roots.push(e), o !== undefined ? (N.roots = N.roots.filter(function (e) {
            return e !== o
        }), r = patch(o, e, t, {})) : (r = mountVNode(e, {}), t.appendChild(r)), t && (t._component = e), flushMount(), n && n(), isComposite(e) ? e.component : r
    }

    function h(e, t, n) {
        var r;
        return t.children && (n || (n = t.children)), l(n) ? function addChildren(e, t, n) {
            if (isString(t) || isNumber(t)) e.push(createVText(String(t))); else if (isValidElement(t)) e.push(t); else if (l(t)) for (var r = 0; r < t.length; r++) addChildren(e, t[r], n); else e.push({
                dom: null,
                vtype: 16
            })
        }(r = [], n, e) : isString(n) || isNumber(n) ? n = createVText(String(n)) : isValidElement(n) || (n = y), t.children = r !== undefined ? r : n, function createVNode(e, t, n, r, o, i, a) {
            return {
                type: e,
                key: r || null,
                vtype: 2,
                props: t || v,
                children: n,
                namespace: o || null,
                _owner: i,
                dom: null,
                ref: a || null
            }
        }(e, t, t.children, t.key, t.namespace, t.owner, t.ref)
    }

    var $ = function ComponentWrapper(e, t) {
        this.vtype = 4, this.type = e, this.name = e.name || e.toString().match(/^function\s*([^\s(]+)/)[1], e.displayName = this.name, this._owner = t.owner, delete t.owner, (this.ref = t.ref) && delete t.ref, this.props = t, this.key = t.key || null, this.dom = null
    };
    $.prototype.init = function init(e, t) {
        return function mountComponent(e, t, n) {
            var r = e.ref;
            e.component = new e.type(e.props, t);
            var o = e.component;
            o.vnode = e, isComponent(n) && (o._parentComponent = n), isFunction(o.componentWillMount) && (errorCatcher(function () {
                o.componentWillMount()
            }, o), o.state = o.getState(), o.clearCallBacks()), o._dirty = !1;
            var i = renderComponent(o);
            i.parentVNode = e, o._rendered = i, isFunction(o.componentDidMount) && q.push(o), isNullOrUndef(r) || g.attach(e, r, e.dom);
            var a = e.dom = mountVNode(i, getChildContext(o, t), o);
            return o._disable = !1, a
        }(this, e, t)
    }, $.prototype.update = function update(e, t, n, r) {
        return this.context = n, function reRenderComponent(e, t) {
            var n = t.component = e.component, r = t.props, o = t.context;
            return n._disable = !0, isFunction(n.componentWillReceiveProps) && errorCatcher(function () {
                n.componentWillReceiveProps(r, o)
            }, n), n._disable = !1, n.prevProps = n.props, n.prevState = n.state, n.prevContext = n.context, n.props = r, n.context = o, isNullOrUndef(t.ref) || g.update(e, t), updateComponent(n)
        }(e, this)
    }, $.prototype.destroy = function destroy() {
        !function unmountComponent(e) {
            var t = e.component;
            isFunction(t.componentWillUnmount) && errorCatcher(function () {
                t.componentWillUnmount()
            }, t), t._disable = !0, unmount(t._rendered), isNullOrUndef(e.ref) || g.detach(e, e.ref, e.dom)
        }(this)
    };
    var W = function StateLessComponent(e, t) {
        this.vtype = 8, this.type = e, this._owner = t.owner, delete t.owner, this.props = t, this.key = t.key
    };

    function createElement$2(e, t) {
        for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
        var o, i = n;
        return n && (1 === n.length ? i = n[0] : 0 === n.length && (i = undefined)), isString(e) ? ((o = function transformPropsForRealTag(e, t) {
            var n = {};
            for (var r in t) {
                var o = t[r];
                if ("defaultValue" !== r) {
                    var i = L.DOMAttributeNames[r];
                    i && i !== r ? n[i] = o : n[r] = o
                } else n.value = t.value || t.defaultValue
            }
            return n
        }(0, t)).owner = _.current, h(e, o, i)) : isFunction(e) ? ((o = function transformPropsForComponent(e, t) {
            var n = {};
            for (var r in e) {
                var o = e[r];
                n[r] = o
            }
            if (t) for (var i in t) isUndefined(n[i]) && (n[i] = t[i]);
            return n
        }(t, e.defaultProps)).children && o.children !== y || (o.children = i || 0 === i ? i : y), o.owner = _.current, e.prototype && e.prototype.render ? new $(e, o) : new W(e, o)) : e
    }

    function cloneElement(e, t) {
        for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
        if (function isVText(e) {
            return !isNullOrUndef(e) && 1 === e.vtype
        }(e)) return createVText(e.text);
        if (isString(e) && isNumber(e)) return createVText(e);
        if (isInvalid(e) || !isInvalid(e) && isPortal(e.vtype) || e && 16 & e.vtype) return {dom: null, vtype: 16};
        var o = clone(p(clone(e.props), t));
        e.namespace && (o.namespace = e.namespace), 4 & e.vtype && !isNullOrUndef(e.ref) && (o.ref = e.ref);
        var i = (arguments.length > 2 ? [].slice.call(arguments, 2) : e.children || o.children) || [];
        if (i.length && 1 === i.length && (i = n[0]), l(e)) return e.map(function (e) {
            return cloneElement(e)
        });
        var a = createElement$2(e.type, o);
        if (l(i)) {
            var c = i.map(function (e) {
                return cloneElement(e, e.props)
            });
            0 === c.length && (c = y), isVNode(a) && (a.children = c), a.props.children = c
        } else i && (isVNode(a) && (a.children = cloneElement(i)), a.props.children = cloneElement(i, i.props));
        return a
    }

    W.prototype.init = function init(e) {
        return function mountStatelessComponent(e, t) {
            var n = e.type(e.props, t);
            return e._rendered = ensureVirtualNode(n), e._rendered.parentVNode = e, e.dom = mountVNode(e._rendered, t)
        }(this, e)
    }, W.prototype.update = function update(e, t, n) {
        var r = t.props, o = t.context, i = r.onShouldComponentUpdate;
        return isFunction(i) && !i(e.props, r, o) ? (t._rendered = e._rendered, e.dom) : function reRenderStatelessComponent(e, t, n, r) {
            var o = e._rendered, i = t.type(t.props, n);
            return i.parentVNode = t, t._rendered = i, t.dom = patch(o, i, o && o.dom || r, n)
        }(e, this, n, e.dom)
    }, W.prototype.destroy = function destroy() {
        !function unmountStatelessComponent(e) {
            unmount(e._rendered)
        }(this)
    };
    var G = {
        map: function map(e, t, n) {
            return isNullOrUndef(e) ? e : (e = G.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
        }, forEach: function forEach(e, t, n) {
            if (!isNullOrUndef(e)) {
                e = G.toArray(e), n && n !== e && (t = t.bind(n));
                for (var r = 0, o = e.length; r < o; r++) {
                    t(isInvalid(e[r]) ? null : e[r], r, e)
                }
            }
        }, count: function count(e) {
            return (e = G.toArray(e)).length
        }, only: function only(e) {
            if (1 !== (e = G.toArray(e)).length) throw new Error("Children.only() expects only one child.");
            return e[0]
        }, toArray: function toArray(e) {
            if (isNullOrUndef(e)) return [];
            if (l(e)) {
                var t = [];
                return function flatten(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) {
                        var o = e[n];
                        l(o) ? flatten(o, t) : t.push(o)
                    }
                    return t
                }(e, t), t
            }
            return y.concat(e)
        }
    };

    function hydrate(e, t, n) {
        if (null !== t) {
            for (var r = t.lastChild; r;) {
                var o = r.previousSibling;
                t.removeChild(r), r = o
            }
            return render(e, t, n)
        }
    }

    function createPortal(e, t) {
        return {type: t, vtype: 32, children: e, dom: null}
    }

    var K = "15.4.2";

    function unmountComponentAtNode(e) {
        var t = e._component;
        return !!isValidElement(t) && (unmount(t, e), delete e._component, !0)
    }

    function findDOMNode(e) {
        return isInvalid(e) ? null : isComponent(e) ? e.vnode.dom : isValidElement(e) ? e.dom : e
    }

    function createFactory(e) {
        return createElement$2.bind(null, e)
    }

    var V = function (e) {
        function WrapperComponent() {
            e.apply(this, arguments)
        }

        return e && (WrapperComponent.__proto__ = e), WrapperComponent.prototype = Object.create(e && e.prototype), WrapperComponent.prototype.constructor = WrapperComponent, WrapperComponent.prototype.getChildContext = function getChildContext$$1() {
            return this.props.context
        }, WrapperComponent.prototype.render = function render$$1() {
            return this.props.children
        }, WrapperComponent
    }(F);

    function unstable_renderSubtreeIntoContainer(e, t, n, r) {
        var o = render(createElement$2(V, {context: getChildContext(e, e.context)}, t), n);
        return r && r.call(o), o
    }

    function isValidElement$1(e) {
        return isValidElement(e) && (6 & e.vtype) > 0
    }

    var J = u, Y = noop$1;

    function getShim() {
        return Y
    }

    Y.isRequired = noop$1;
    var X = {
        array: Y,
        bool: Y,
        func: Y,
        number: Y,
        object: Y,
        string: Y,
        any: Y,
        arrayOf: getShim,
        element: Y,
        instanceOf: getShim,
        node: Y,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        PropTypes: {},
        checkPropTypes: noop$1
    };
    X.PropTypes = X;
    var Q = {
        Children: G,
        Component: F,
        PureComponent: H,
        createElement: createElement$2,
        cloneElement: cloneElement,
        render: render,
        nextTick: u,
        options: N,
        findDOMNode: findDOMNode,
        isValidElement: isValidElement$1,
        unmountComponentAtNode: unmountComponentAtNode,
        createPortal: createPortal,
        unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
        hydrate: hydrate,
        createFactory: createFactory,
        unstable_batchedUpdates: J,
        version: K,
        PropTypes: X
    };
    t["default"] = Q
}, function (e, t, n) {
    n(90)("asyncIterator")
}, function (e, t, n) {
    "use strict";
    var r = n(13), o = n(37), i = n(19), a = n(28), l = n(30), c = n(147).KEY, s = n(20), u = n(79), f = n(67),
        d = n(55), p = n(9), m = n(91), h = n(90), _ = n(148), y = n(95), v = n(23), g = n(24), b = n(48), P = n(65),
        O = n(60), w = n(85), E = n(152), C = n(86), k = n(22), S = n(47), j = C.f, T = k.f, I = E.f, x = r.Symbol,
        N = r.JSON, R = N && N.stringify, A = p("_hidden"), D = p("toPrimitive"), L = {}.propertyIsEnumerable,
        M = u("symbol-registry"), z = u("symbols"), U = u("op-symbols"), q = Object.prototype,
        B = "function" == typeof x, F = r.QObject, H = !F || !F.prototype || !F.prototype.findChild,
        $ = i && s(function () {
            return 7 != w(T({}, "a", {
                get: function () {
                    return T(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (e, t, n) {
            var r = j(q, t);
            r && delete q[t], T(e, t, n), r && e !== q && T(q, t, r)
        } : T, W = function (e) {
            var t = z[e] = w(x.prototype);
            return t._k = e, t
        }, G = B && "symbol" == typeof x.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof x
        }, K = function defineProperty(e, t, n) {
            return e === q && K(U, t, n), v(e), t = P(t, !0), v(n), o(z, t) ? (n.enumerable ? (o(e, A) && e[A][t] && (e[A][t] = !1), n = w(n, {enumerable: O(0, !1)})) : (o(e, A) || T(e, A, O(1, {})), e[A][t] = !0), $(e, t, n)) : T(e, t, n)
        }, V = function defineProperties(e, t) {
            v(e);
            for (var n, r = _(t = b(t)), o = 0, i = r.length; i > o;) K(e, n = r[o++], t[n]);
            return e
        }, J = function propertyIsEnumerable(e) {
            var t = L.call(this, e = P(e, !0));
            return !(this === q && o(z, e) && !o(U, e)) && (!(t || !o(this, e) || !o(z, e) || o(this, A) && this[A][e]) || t)
        }, Y = function getOwnPropertyDescriptor(e, t) {
            if (e = b(e), t = P(t, !0), e !== q || !o(z, t) || o(U, t)) {
                var n = j(e, t);
                return !n || !o(z, t) || o(e, A) && e[A][t] || (n.enumerable = !0), n
            }
        }, X = function getOwnPropertyNames(e) {
            for (var t, n = I(b(e)), r = [], i = 0; n.length > i;) o(z, t = n[i++]) || t == A || t == c || r.push(t);
            return r
        }, Q = function getOwnPropertySymbols(e) {
            for (var t, n = e === q, r = I(n ? U : b(e)), i = [], a = 0; r.length > a;) !o(z, t = r[a++]) || n && !o(q, t) || i.push(z[t]);
            return i
        };
    B || (l((x = function Symbol() {
        if (this instanceof x) throw TypeError("Symbol is not a constructor!");
        var e = d(arguments.length > 0 ? arguments[0] : undefined), t = function (n) {
            this === q && t.call(U, n), o(this, A) && o(this[A], e) && (this[A][e] = !1), $(this, e, O(1, n))
        };
        return i && H && $(q, e, {configurable: !0, set: t}), W(e)
    }).prototype, "toString", function toString() {
        return this._k
    }), C.f = Y, k.f = K, n(69).f = E.f = X, n(68).f = J, n(84).f = Q, i && !n(54) && l(q, "propertyIsEnumerable", J, !0), m.f = function (e) {
        return W(p(e))
    }), a(a.G + a.W + a.F * !B, {Symbol: x});
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;) p(Z[ee++]);
    for (var te = S(p.store), ne = 0; te.length > ne;) h(te[ne++]);
    a(a.S + a.F * !B, "Symbol", {
        "for": function (e) {
            return o(M, e += "") ? M[e] : M[e] = x(e)
        }, keyFor: function keyFor(e) {
            if (!G(e)) throw TypeError(e + " is not a symbol!");
            for (var t in M) if (M[t] === e) return t
        }, useSetter: function () {
            H = !0
        }, useSimple: function () {
            H = !1
        }
    }), a(a.S + a.F * !B, "Object", {
        create: function create(e, t) {
            return t === undefined ? w(e) : V(w(e), t)
        },
        defineProperty: K,
        defineProperties: V,
        getOwnPropertyDescriptor: Y,
        getOwnPropertyNames: X,
        getOwnPropertySymbols: Q
    }), N && a(a.S + a.F * (!B || s(function () {
        var e = x();
        return "[null]" != R([e]) || "{}" != R({a: e}) || "{}" != R(Object(e))
    })), "JSON", {
        stringify: function stringify(e) {
            for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = t = r[1], (g(t) || e !== undefined) && !G(e)) return y(t) || (t = function (e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !G(t)) return t
            }), r[1] = t, R.apply(N, r)
        }
    }), x.prototype[D] || n(38)(x.prototype, D, x.prototype.valueOf), f(x, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
}, function (e, t, n) {
    var r = n(28);
    r(r.S, "Object", {setPrototypeOf: n(97).set})
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.checkWebp = function checkWebp() {
        return !!r["default"].getCookie("webp")
    }, t.checkIsRetain = function checkIsRetain() {
        if (window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx)").matches) return !0;
        return !1
    }, t.checkTime = function checkTime(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
        /^\d{10}$/.test(e + "") && (e *= 1e3);
        /^\d{10}$/.test(t + "") && (t *= 1e3);
        return n >= e ? n < t ? 0 : 1 : -1
    }, t.getRandomData = function getRandomData(e) {
        var t = 0, n = e.map(function (e) {
            var n = e.weight || 1;
            n = (0, o.isString)(n) ? parseInt(n) : n || 1;
            var r = t, i = t + n;
            return t = i, [r, i]
        }), r = n[n.length - 1][1], i = Math.ceil(r * Math.random());
        return e.find(function (e, t) {
            var r = function _slicedToArray(e, t) {
                return function _arrayWithHoles(e) {
                    if (Array.isArray(e)) return e
                }(e) || function _iterableToArrayLimit(e, t) {
                    var n = [], r = !0, o = !1, i = undefined;
                    try {
                        for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                    } catch (c) {
                        o = !0, i = c
                    } finally {
                        try {
                            r || null == l["return"] || l["return"]()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t) || function _nonIterableRest() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }(n[t], 2), o = r[0], a = r[1];
            return i > o && i <= a
        })
    }, t.padding = padding, t.dropIndex = function dropIndex(e, t) {
        return e.slice(0, t).concat(e.slice(t + 1))
    }, t.shuffle = function shuffle(e, t) {
        var n = e.length, r = [];
        for (; n--;) {
            var i = e.splice((0, o.random)(0, n), 1)[0];
            if (r.push(i), r.length === t) return r
        }
        return r
    }, t.throttle = function throttle(e, t) {
        var n, r, o, i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, a = null, l = 0;
        i || (i = {});
        var c = function later() {
            l = !1 === i.leading ? 0 : (new Date).getTime(), a = null, o = e.apply(n, r), a || (n = r = null)
        };
        return function () {
            var s = (new Date).getTime();
            l || !1 !== i.leading || (l = s);
            var u = t - (s - l);
            return n = this, r = arguments, u <= 0 || u > t ? (a && clearTimeout(a), a = null, l = s, o = e.apply(n, r), a || (n = r = null)) : a || !1 === i.trailing || (a = setTimeout(c, u)), o
        }
    }, t.debounce = function debounce(e, t) {
        var n, r, o, i, a, l = arguments.length > 2 && arguments[2] !== undefined && arguments[2],
            c = function later() {
                var c = (new Date).getTime() - i;
                c < t && c > 0 ? n = setTimeout(later, t - c) : (n = null, l || (a = e.apply(o, r), n || (o = r = null)))
            };
        return function () {
            o = this, r = arguments, i = (new Date).getTime();
            var s = l && !n;
            return n || (n = setTimeout(c, t)), s && (a = e.apply(o, r), o = r = null), a
        }
    }, t.formatDate = function formatDate(e, t) {
        var n = new Date(e), r = {
            "M+": n.getMonth() + 1,
            "d+": n.getDate(),
            "h+": n.getHours(),
            "m+": n.getMinutes(),
            "s+": n.getSeconds(),
            "q+": Math.floor((n.getMonth() + 3) / 3),
            "S+": n.getMilliseconds()
        };
        /(y+)/i.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var o in r) new RegExp("(" + o + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[o] : ("00" + r[o]).substr(("" + r[o]).length)));
        return t
    }, t.generateClstag = function generateClstag(e, t) {
        if ((0, o.isNil)(t)) return pageConfig.clstagPrefix + e;
        return pageConfig.clstagPrefix + e + padding(t + 1, 2)
    }, t.delay = function delay(e, t) {
        return new Promise(function (n) {
            setTimeout(function () {
                n(t)
            }, e)
        })
    }, t.easeOut = function easeOut(e, t, n, r) {
        return -n * (e /= r) * (e - 2) + t
    }, t.merge = function merge() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = t.shift() || {};
        var o;
        for (; t.length;) if (o = t.shift(), Array.isArray(r) && Array.isArray(o)) o.forEach(function (e) {
            r.push(e)
        }); else for (var i in o) {
            var a = o[i];
            "object" === _typeof(a) && "object" === _typeof(r[i]) || Array.isArray(a) && Array.isArray(r[i]) ? merge(r[i], a) : r[i] = a
        }
        return r
    }, t.times = function times(e, t) {
        for (var n = [], r = 0; r < e; r++) n.push(t(r));
        return n
    }, t.getHash = function getHash(e, t) {
        return Math.abs(function hashCode() {
            for (var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "", t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
            return t
        }(e)) % t
    }, t.getParameterByName = function getParameterByName(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
        e = e.replace(/[[\]]/g, "\\$&");
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
    }, t.isDebug = function isDebug(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined && arguments[2], o = r["default"].get("debugInfo"),
            i = o[e];
        if (t && Array.isArray(i)) {
            var a = t.filter(function (e) {
                return e
            });
            return n ? a.every(function (e) {
                return i.findIndex(function (t) {
                    return e === t
                }) >= 0
            }) : a.some(function (e) {
                return i.findIndex(function (t) {
                    return e === t
                }) >= 0
            })
        }
        return !!o[e]
    }, n(1), n(2), n(104), n(5), n(18), n(62), n(10), n(29);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(40)), o = n(26);

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function padding(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0,
            n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0", r = t - (e = String(e)).length,
            o = r > 0 ? Array(1 + r).join(n) : "";
        return "".concat(o).concat(e)
    }
}, function (e, t, n) {
    for (var r = n(7), o = n(47), i = n(30), a = n(13), l = n(38), c = n(56), s = n(9), u = s("iterator"), f = s("toStringTag"), d = c.Array, p = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, m = o(p), h = 0; h < m.length; h++) {
        var _, y = m[h], v = p[y], g = a[y], b = g && g.prototype;
        if (b && (b[u] || l(b, u, d), b[f] || l(b, f, y), c[y] = d, v)) for (_ in r) b[_] || i(b, _, r[_], !0)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.reportExpose = function reportExpose(e) {
        var t = d(_objectSpread({}, e, {rept: "impr"})), n = new o["default"](function (e, t) {
            (0, l.isDebug)("log", ["expose"]) && r["default"].info("曝光上报", e), window.expLogJSON(s.LOG_CATEGORY, s.LOG_TYPE, JSON.stringify(e)), t()
        }, t, c.PRIORITY_REPORT);
        a.queue.push(n)
    }, t.reportClick = function reportClick(e) {
        var t = d(_objectSpread({}, e, {rept: "clk"})), n = new o["default"](function (e, t) {
            var n = e.rept, o = e.poi, i = e.text, a = e.url, c = e.desc, u = e.mcinfo, f = void 0 === u ? "null" : u,
                d = e.biclk, p = void 0 === d ? "null" : d;
            (0, l.isDebug)("log", ["click"]) && r["default"].info("点击上报", e), window.log(s.LOG_CATEGORY, s.LOG_TYPE, n, o, i, a, c, f, p), t()
        }, t, c.PRIORITY_REPORT);
        a.queue.push(n)
    }, t.reportUrlExpose = t.processUrl = void 0, n(5), n(7), n(8), n(10), n(35);
    var r = _interopRequireDefault(n(21)), o = _interopRequireDefault(n(72)), i = n(26), a = n(73), l = n(4), c = n(57),
        s = n(58);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (t) {
                _defineProperty(e, t, n[t])
            })
        }
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var u = function processUrl(e) {
        if (!e) return "null";
        var t = e.match(/c-nfa\.jd\.com[\s\S]+url=([\s\S]+)$/);
        return t && t[1] ? t[1] : e
    };
    t.processUrl = u;
    var f = function processText(e) {
        return (0, i.isString)(e) ? e.replace(/[\r\n]/g, "") : "null"
    }, d = function getReportInfo(e) {
        var t = e.poi, n = e.text, r = e.desc, o = e.url;
        return $.extend({}, e, {url: u(o), text: f(n), desc: f(r), poi: t.replace(/_/g, "|")})
    };
    var p = function () {
        var e = s.STANDARD_EXPOSE_DOMAIN, t = s.STANDARD_EXPOSE_VERSION;
        return function (n) {
            var i = new o["default"](function (n, o) {
                var i, a = n.clog;
                i = /[a-zA-Z]/.test(a) ? a : "".concat(e).concat(a, "&v=").concat(t), (0, l.isDebug)("log", ["expose"]) && r["default"].info("真实曝光上报", i), (new Image).src = i, o()
            }, n, c.PRIORITY_REPORT);
            a.queue.push(i)
        }
    }();
    t.reportUrlExpose = p
}, function (e, t, n) {
    "use strict";
    var r = n(87), o = n(154), i = n(56), a = n(48);
    e.exports = n(155)(Array, "Array", function (e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t, t = this._k, n = this._i++;
        return !e || n >= e.length ? (this._t = undefined, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function (e, t, n) {
    var r = n(61), o = n(47);
    n(173)("keys", function () {
        return function keys(e) {
            return o(r(e))
        }
    })
}, function (e, t, n) {
    var r = n(79)("wks"), o = n(55), i = n(13).Symbol, a = "function" == typeof i;
    (e.exports = function (e) {
        return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
    }).store = r
}, function (e, t, n) {
    n(70)("replace", 2, function (e, t, n) {
        return [function replace(r, o) {
            "use strict";
            var i = e(this), a = r == undefined ? undefined : r[t];
            return a !== undefined ? a.call(r, i, o) : n.call(String(i), r, o)
        }, n]
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(5), n(7), n(8), n(12), n(18), n(49);
    var r = _interopRequireDefault(n(174)), o = _interopRequireDefault(n(71)), i = _interopRequireDefault(n(21)),
        a = _interopRequireDefault(n(72)), l = _interopRequireDefault(n(50)), c = n(73), s = n(4), u = n(57);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (t) {
                _defineProperty(e, t, n[t])
            })
        }
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var f = 1, d = 0;

    function reportUMP(e, t) {
        t && l["default"].umpBiz({result: e, operation: t})
    }

    function request(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, n = t.name,
            l = _objectSpread({url: e, retryTimes: 2, timeout: 2e3, jsonp: "callback"}, t);
        return (0, s.isDebug)("api", ["500", "all"], !0) && (l.url = "//loadAsyncError.jd.com", l.timeout = 1500), (0, s.isDebug)("api", ["500", n], !0) && (l.url = "//loadAsyncError.jd.com", l.timeout = 1500), (0, s.isDebug)("api", ["500", "all", "backup"], !0) && (l.url = "//loadAsyncError.jd.com", l.retryTimes = 0, l.timeout = 1500, l.backup = []), (0, s.isDebug)("api", ["500", n, "backup"], !0) && (l.url = "//loadAsyncError.jd.com", l.retryTimes = 0, l.timeout = 1500, l.backup = []), (0, s.isDebug)("api", ["pending", n], !0) && (l.url = "//loadAsyncError.jd.com", l.timeout = 999999999), new Promise(function (t, p) {
            var m = new a["default"](function (a, l) {
                var c = a.startTime, u = a.speedID, m = a.umpID;
                (0, r["default"])(a).then(function (r) {
                    r && r.__$$backupCall ? (reportUMP(f, m), (0, s.isDebug)("log", ["backup"]) && i["default"].log("".concat(n, " 触发兜底"), {
                        url: e,
                        res: r
                    })) : (reportUMP(d, m), function reportSpeed(e, t) {
                        t && o["default"].report("s".concat(t), Date.now() - e)
                    }(c, u)), l(), t(r)
                })["catch"](function (t) {
                    reportUMP(f, m), (0, s.isDebug)("log", ["api"]) && i["default"].error("接口请求失败", {
                        name: n,
                        url: e
                    }), l(), p(t)
                })
            }, _objectSpread({}, l, {startTime: Date.now()}), u.PRIORITY_REQUEST);
            c.queue.push(m)
        })
    }

    request.sendReport = function (e, t) {
        var n = new Image, r = $.param(t);
        if (n.src = "".concat(e, "?").concat(r, "&v=").concat(Date.now()), (0, s.isDebug)("log", ["unbizReport"])) {
            var o = n.src.split("?")[1].split("&").map(function (e) {
                return decodeURIComponent(e)
            });
            i["default"].log("普通上报请求:", n.src, o)
        }
    };
    var p = request;
    t["default"] = p
}, function (e, t, n) {
    n(70)("split", 2, function (e, t, r) {
        "use strict";
        var o = n(98), i = r, a = [].push;
        if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
            var l = /()??/.exec("")[1] === undefined;
            r = function (e, t) {
                var n = String(this);
                if (e === undefined && 0 === t) return [];
                if (!o(e)) return i.call(n, e, t);
                var r, c, s, u, f, d = [],
                    p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                    m = 0, h = t === undefined ? 4294967295 : t >>> 0, _ = new RegExp(e.source, p + "g");
                for (l || (r = new RegExp("^" + _.source + "$(?!\\s)", p)); (c = _.exec(n)) && !((s = c.index + c[0].length) > m && (d.push(n.slice(m, c.index)), !l && c.length > 1 && c[0].replace(r, function () {
                    for (f = 1; f < arguments.length - 2; f++) arguments[f] === undefined && (c[f] = undefined)
                }), c.length > 1 && c.index < n.length && a.apply(d, c.slice(1)), u = c[0].length, m = s, d.length >= h));) _.lastIndex === c.index && _.lastIndex++;
                return m === n.length ? !u && _.test("") || d.push("") : d.push(n.slice(m)), d.length > h ? d.slice(0, h) : d
            }
        } else "0".split(undefined, 0).length && (r = function (e, t) {
            return e === undefined && 0 === t ? [] : i.call(this, e, t)
        });
        return [function split(n, o) {
            var i = e(this), a = n == undefined ? undefined : n[t];
            return a !== undefined ? a.call(n, i, o) : r.call(String(i), n, o)
        }, r]
    })
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t, n) {
    var r = n(28);
    r(r.S + r.F, "Object", {assign: n(179)})
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.FEEDBACK = t.TIMI = t.LIVE = t.PLUS_USER = t.VIP_USER = t.COMPANY_BVIP = t.COMPANY_B = t.PLUSSALE = t.PLUS_USERINFO_N = t.PLUS_USERINFO_Y = t.PLUS_TOPBAR = t.PLUS = t.NEW_ARRIVAL = t.TOP = t.SHOP_SUFIX = t.SHOP_PREFIX = t.GOODREC_PREFIX = t.DAILY = t.MIAOSHA = t.VIP = t.COUPON_ITEM = t.COUPON = t.LIGHTNING_BUY = t.NICE_SHOP = t.NICE_GOODS = t.NEWS = t.XINREN = t.REGIST = t.LOGOUT = t.LOGIN = t.HOME = t.HEAD_MOBILE = t.VIDEO = t.JOY = t.MASSHOP = t.SHOPPINGCART = t.MIME_PREFIX = t.JINGZAO = t.TOP_PREFIX = t.SECKILL_PREFIX = t.SECKILL_TYPE = t.SECKILL_BRAND = t.SECKILL = t.LOGO = t.BLANK_AVATAR = t.BLANK_IMG = void 0;
    var r = n(4);
    t.BLANK_IMG = "http://misc.360buyimg.com/mtd/pc/common/img/blank.png";
    t.BLANK_AVATAR = "http://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg";
    var o = (0, r.checkIsRetain)() ? "//img10.360buyimg.com/da/jfs/t17371/157/2401374190/7797/d908e60/5af2ba86Nb72d2cf3.jpg" : "//img30.360buyimg.com/da/jfs/t16705/67/2414698135/3404/b8a6860/5af2ba84N24f6a11b.jpg";
    t.LOGO = o;
    t.SECKILL = "//miaosha.jd.com";
    t.SECKILL_BRAND = "//miaosha.jd.com/pinpailist.html";
    t.SECKILL_TYPE = "//miaosha.jd.com/brandlist.html";
    t.SECKILL_PREFIX = "//miaosha.jd.com/#";
    t.TOP_PREFIX = "//top.jd.com/";
    t.JINGZAO = "//jdjz.jd.com/";
    t.MIME_PREFIX = "//jdiscover.jd.com";
    t.SHOPPINGCART = "//cart.jd.com/";
    t.MASSHOP = "//huiguang.jd.com";
    t.JOY = "//hellojoy.jd.com/";
    t.VIDEO = "//article.jd.com/";
    t.HEAD_MOBILE = "//nfa.jd.com/loadFa.action?aid=0_0_8762";
    t.HOME = "//home.jd.com";
    t.LOGIN = "//passport.jd.com";
    t.LOGOUT = "//passport.jd.com/uc/login?ltype=logout";
    t.REGIST = "//reg.jd.com";
    t.XINREN = "//xinren.jd.com/?channel=99";
    t.NEWS = "//kuaibao.jd.com/";
    t.NICE_GOODS = "//fxhh.jd.com";
    t.NICE_SHOP = "//haodian.jd.com";
    t.LIGHTNING_BUY = "//red.jd.com";
    t.COUPON = "//a.jd.com/";
    t.COUPON_ITEM = "//a.jd.com/?cateId=0";
    t.VIP = "//vip.jd.com";
    t.MIAOSHA = "//miaosha.jd.com";
    t.DAILY = "//ypzj.jd.com";
    t.GOODREC_PREFIX = "//fxhh.jd.com/?linkIds=";
    t.SHOP_PREFIX = "http://mall.jd.com/index-";
    t.SHOP_SUFIX = ".html";
    t.TOP = "//top.jd.com";
    t.NEW_ARRIVAL = "http://pro.jd.com/mall/active/2wzwK8McFT97vUgCXKwuV9Pr133m/index.html";
    t.PLUS = "//plus.jd.com";
    t.PLUS_TOPBAR = "//plus.jd.com/index?flow_system=appicon&flow_entrance=appicon1&flow_channel=pc";
    t.PLUS_USERINFO_Y = "//plus.jd.com/index?flow_system=appicon&flow_entrance=appicon2&flow_channel=pc";
    t.PLUS_USERINFO_N = "//plus.jd.com/index?flow_system=appicon&flow_entrance=appicon3&flow_channel=pc";
    t.PLUSSALE = "//sale.jd.com/act/Xno3MQRklCIm.html";
    t.COMPANY_B = "//b.jd.com";
    t.COMPANY_BVIP = "//bvip.jd.com";
    t.VIP_USER = "//vip.jd.com/";
    t.PLUS_USER = "//plus.jd.com/index";
    t.LIVE = "//jdlive.jd.com/home.html";
    t.TIMI = "//jdcs.jd.com/chat/index.action?venderId=1&entry=jd_web_jimi_jdhome";
    t.FEEDBACK = "//surveys.jd.com/index.php?r=survey/index/sid/889711/newtest/Y/lang/zh-Hans"
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.SHOWNTHEMES = t.LAZYIMPROPTS = t.LAZYIMGOPTS = t.PLUSARRAY = t.showCompany2 = t.CLSTAGPREFIX = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));
    var o = pageConfig.clstagPrefix;
    t.CLSTAGPREFIX = o;
    t.showCompany2 = !1;
    var i = "开通PLUS 平均省1210元/年", a = [i, i, i, "现在续费PLUS享特惠价", "续费PLUS 平均省1210元/年", "只差一步 激活PLUS享特权"];
    t.PLUSARRAY = a;
    var l = {once: !0, offset: [300, 300], placeholder: r["default"].createElement("div", {className: "mod_loading"})};
    t.LAZYIMGOPTS = l;
    t.LAZYIMPROPTS = {once: !0, offset: [0, 0]};
    t.SHOWNTHEMES = []
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.USER_SPOINT_AND_LEVEL = t.USER_SPOINT = t.MORE_FIND = t.MORE_TAB_GOODS_BACKUP2 = t.MORE_TAB_GOODS_BACKUP4 = t.MORE_TAB_GOODS_BACKUP3 = t.MORE_TAB_GOODS_BACKUP1 = t.MORE_TAB_GOODS_BACKUP = t.MORE_TAB_GOODS = t.MORE2_OTHERS_BACKUP1 = t.MORE2_OTHERS_BACKUP = t.MORE2_OTHERS = t.MORE_YUYUE_YUSHOU = t.MORE_YUYUE = t.MORE_CHOSEN = t.MORE_PRESELLPRICE = t.MORE_PRESELL = t.MORE_GOODS_STOBACKUP2 = t.MORE_GOODS2 = t.MORE_GOODS_STOBACKUP = t.MORE_GOODS = t.GOOD_COUPON = t.PROMOTE_PRICE = t.PRICE = t.MARKET_STOBACKUP = t.MARKET_BACKUP = t.MARKET = t.NEW_ARRIVAL_STOBACKUP = t.NEW_ARRIVAL_BACKUP = t.NEW_ARRIVAL = t.COUPON_STOBACKUP = t.COUPON_BACKUP = t.COUPON = t.DISCOVER_STOBACKUP = t.DISCOVER_BACKUP = t.DISCOVER = t.TOPRANK_BACKUP = t.TOPRANK = t.TOPCATE_STOBACKUP = t.TOPCATE_BACKUP = t.TOPCATE = t.GATEWAY = t.ACTIVITY_STORE_BACKUP = t.ACTIVITY_BACKUP = t.ACTIVITY = t.NEW_USER_STORE_BACKUP = t.NEW_USER_BACKUP = t.NEW_USER = t.MYJD_QUERYBT = t.MYJD_MSGCENTER = t.MYJD_GETCOUPONCOUNT = t.MYJD_REDUCEPRODUCTCOUNT = t.MYJD_GETMYJDANSWERCOUNT = t.MYJD_GETHOMECOUNT = t.HOTWORDS_STOBACKUP = t.HOTWORDS_BACKUP = t.HOTWORDS_TEST = t.HOTWORDS = t.HEAD_SITENAV_BACKUP = t.HEAD_SITENAV = t.HEAD_SERVICE_BACKUP = t.HEAD_SERVICE = t.MORE_OTHERS2_NOTIFY = t.ACTIVITY_TOP_BACKUP = t.ACTIVITY_TOP = t.NICE_SHOP_STORE_BACKUP = t.NICE_SHOP_BACKUP = t.NICE_SHOP = t.LIGHTNING_BUY_STORE_BACKUP = t.LIGHTNING_BUY_BACKUP = t.LIGHTNING_BUY = t.NICE_GOODS_STORE_BACKUP = t.NICE_GOODS_BACKUP = t.NICE_GOODS = t.SECKILL_STORE_BACKUP = t.SECKILL_BACKUP = t.SECKILL = t.RECOMMEND = t.FOCUS_BACKUP = t.FOCUS_OLD = t.FOCUS = t.CATEB_STOBACKUP = t.CATEB_BACKUP = t.CATEB = t.CATEA_STOBACKUP = t.CATEA = t.NEWS_STOBAK = t.NEWS_BAK = t.NEWS = t.LOGO_BAK = t.LOGO = t.USER_ISNEW = t.USER_LEVEL = t.USER_NAME = t.GET_USERINFO = t.USERINFO = t.IP_LOCATE = t.PROMOTIONAL_TOP_DOMESTIC = t.PROMOTIONAL_TOP_OVERSEAS = t.IS_LOGIN = void 0;
    t.IS_LOGIN = "http://passport.jd.com/loginservice.aspx?method=Login";
    t.PROMOTIONAL_TOP_OVERSEAS = "//nfa.jd.com/target_toJson?aid=0_0_13823";
    t.PROMOTIONAL_TOP_DOMESTIC = "//nfa.jd.com/target_toJson?aid=0_0_13822";
    t.IP_LOCATE = "http://lapi.jd.com/locate?source=pchome";
    t.USERINFO = "//passport.jd.com/user/petName/getUserInfoForMiniJd.action";
    t.GET_USERINFO = "//passport.jd.com/user/petName/getUserInfoForMiniJd.action";
    t.USER_NAME = "http://passport.jd.com/new/helloService.ashx";
    t.USER_LEVEL = "//dy.jd.com/jsf_user_level";
    t.USER_ISNEW = "http://ai.jd.com/index_new.php?app=Newuser&action=isNewuser";
    t.LOGO = "http://floor.jd.com/recommend-v20/joy_logo/get?source=pc-home";
    t.LOGO_BAK = "//www.3.cn/index/recommend-v20-bak/joy_logo/get?source=pc-home";
    t.NEWS = "http://floor.jd.com/recommend-v20/news/get?source=pc-home";
    t.NEWS_BAK = "http://www.3.cn/index/recommend-v20-bak/news/get?source=pc-home";
    t.NEWS_STOBAK = "//storage.jd.com/79c9c3dc3b6ef2b8/34bf697c72.js";
    t.CATEA = "http://dc.3.cn/category/get";
    t.CATEA_STOBACKUP = "//storage.jd.com/7ff749b346d2f947/98f0d0ea3a.js";
    t.CATEB = "http://ai.jd.com/index_new.php?app=ABdata&action=ABData&key=BtestData";
    t.CATEB_BACKUP = "http://www.3.cn/bup/index_new.php?app=ABdata&action=ABData&key=BtestData";
    t.CATEB_STOBACKUP = "//storage.jd.com/7ff749b346d2f947/7cb47c9ae4.js";
    t.FOCUS = "http://floor.jd.com/recommend-v20/focus_monetize/get?source=pc-home";
    t.FOCUS_OLD = "//floor.jd.com/recommend-v20/focus/get?source=pc-home";
    t.FOCUS_BACKUP = "//www.3.cn/index/recommend-v20-bak/focus/get?source=pc-home";
    t.RECOMMEND = "http://floor.jd.com/recommend-v20/today/get?source=pc-home";
    t.SECKILL = "http://lapi.jd.com/pchome/pcIndexMiaoShaArea?source=pc_seckill";
    t.SECKILL_BACKUP = "http://www.3.cn/bup/index_new.php?app=Seckill&action=pcIndexMiaoShaArea";
    t.SECKILL_STORE_BACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/1e27f95eec.js";
    t.NICE_GOODS = "http://ai.jd.com/index_new?app=Discovergoods&action=getDiscZdmGoodsListForIndex&tag=3";
    t.NICE_GOODS_BACKUP = "http://www.3.cn/bup/index_new.php?app=Discovergoods&action=getDiscZdmGoodsListForIndex&tag=3";
    t.NICE_GOODS_STORE_BACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/1e27f95eec.js";
    t.LIGHTNING_BUY = "http://floor.jd.com/recommend-v20/red/get?source=pc-home";
    t.LIGHTNING_BUY_BACKUP = "//www.3.cn/index/recommend-v20-bak/red/get?source=pc-home";
    t.LIGHTNING_BUY_STORE_BACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/9cdb2e6ed1.js";
    t.NICE_SHOP = "http://floor.jd.com/recommend-v20/haodian/get?source=pc-home";
    t.NICE_SHOP_BACKUP = "//www.3.cn/index/recommend-v20-bak/haodian/get?source=pc-home";
    t.NICE_SHOP_STORE_BACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/95791939ec.js";
    t.ACTIVITY_TOP = "//floor.jd.com/recommend-v20/mtop/get?source=pc-home";
    t.ACTIVITY_TOP_BACKUP = "//www.3.cn/index/recommend-v20-bak/mtop/get?source=pc-home";
    t.MORE_OTHERS2_NOTIFY = "//papi-service.jd.com/feed/content/async/?format=jsonp";
    t.HEAD_SERVICE = "//dc.3.cn/client/get";
    t.HEAD_SERVICE_BACKUP = "//d.jd.com/client/get";
    t.HEAD_SITENAV = "//dc.3.cn/navigation/get";
    t.HEAD_SITENAV_BACKUP = "//d.jd.com/navigation/get";
    t.HOTWORDS = "http://floor.jd.com/user-v20/hotwords/get?source=pc-home";
    t.HOTWORDS_TEST = "//api.mockon.jd.com/mock/bW9ja29uX2Jhc2U2NF9zYWx0OTcx";
    t.HOTWORDS_BACKUP = "//www.3.cn/index/recommend-v20-bak/hotwords/get?source=pc-home";
    t.HOTWORDS_STOBACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/bc5037a602.js";
    t.MYJD_GETHOMECOUNT = "//order.jd.com/lazy/getOrderListCountJson.action";
    t.MYJD_GETMYJDANSWERCOUNT = "//question.jd.com/myjd/getMyJdAnswerCount.action";
    t.MYJD_REDUCEPRODUCTCOUNT = "//pjapi.jd.com/followCommodity/queryForCountByReduceProductAndPin?source=pc_home&sysName=misc";
    t.MYJD_GETCOUPONCOUNT = "//quan.jd.com/getcouponcount.action";
    t.MYJD_MSGCENTER = "//joycenter.jd.com/msgCenter/init.action";
    t.MYJD_QUERYBT = "//btshow.jd.com/ious/queryBT.do?sourceType=137";
    t.NEW_USER = "//floor.jd.com/recommend-v20/npeople/get?source=pc-home";
    t.NEW_USER_BACKUP = "//www.3.cn/index/recommend-v20-bak/npeople/get?source=pc-home";
    t.NEW_USER_STORE_BACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/645716e1c1.js";
    t.ACTIVITY = "//floor.jd.com/recommend-v20/enjoy/get?source=pc-home";
    t.ACTIVITY_BACKUP = "//www.3.cn/index/recommend-v20-bak/enjoy/get?source=pc-home";
    t.ACTIVITY_STORE_BACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/e0c52a299e.js";
    t.GATEWAY = "//api.m.jd.com";
    t.TOPCATE = "http://ch.jd.com/homecate2?source=pc";
    t.TOPCATE_BACKUP = "//www.3.cn/bup/homecate2";
    t.TOPCATE_STOBACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/4701459cf4.js";
    t.TOPRANK = "//ch.jd.com/homepro?source=pc";
    t.TOPRANK_BACKUP = "//www.3.cn/bup/homepro";
    t.DISCOVER = "http://lapi.jd.com/pchome/me?source=pc-home";
    t.DISCOVER_BACKUP = "//www.3.cn/bup/pchome/me?source=pchome";
    t.DISCOVER_STOBACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/8ca3342f7e.js";
    t.COUPON = "http://floor.jd.com/recommend-v20/coupon/get?source=pc-home";
    t.COUPON_BACKUP = "//www.3.cn/index/recommend-v20-bak/coupon/get?source=pc-home";
    t.COUPON_STOBACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/a6728a52b1.js";
    t.NEW_ARRIVAL = "http://floor.jd.com/recommend-v20/new/get?source=pc-home";
    t.NEW_ARRIVAL_BACKUP = "http://www.3.cn/index/recommend-v20-bak/new/get?source=pc-home";
    t.NEW_ARRIVAL_STOBACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/28ce0f84de.js";
    t.MARKET = "//floor.jd.com/recommend-v20/market/get?source=pc-home";
    t.MARKET_BACKUP = "http://www.3.cn/index/recommend-v20-bak/market/get?source=pc-home";
    t.MARKET_STOBACKUP = "//storage.jd.com/79c9c3dc3b6ef2b8/e7464969a8.js";
    t.PRICE = "//p.3.cn/prices/mgets?source=pc_home";
    t.PROMOTE_PRICE = "//dy.jd.com/promotePrice?priceInfos=tag";
    t.GOOD_COUPON = "//pjapi.jd.com/coupon/batchGetSkuExistCoupon";
    t.MORE_GOODS = "//diviner.jd.com/diviner?p=610009&lid=1";
    t.MORE_GOODS_STOBACKUP = "//storage.jd.com/7ff749b346d2f947/7a55efa35e.js";
    t.MORE_GOODS2 = "http://floor.jd.com/user-v20/feed/get";
    t.MORE_GOODS_STOBACKUP2 = "//storage.jd.com/79c9c3dc3b6ef2b8/8a967b849a.js";
    t.MORE_PRESELL = "//f.3.cn/recommend/pre_sale/get";
    t.MORE_PRESELLPRICE = "//yuding.jd.com/presaleInfo/getPresaleInfo.action";
    t.MORE_CHOSEN = "//dy.jd.com/jsf_selection_online";
    t.MORE_YUYUE = "//dy.jd.com/jsf_yy_hide_price";
    t.MORE_YUYUE_YUSHOU = "//pjapi.jd.com/filterSku/preSaleReservation?source=pc_home";
    t.MORE2_OTHERS = "//floor.jd.com/recommend-v20/feed_content/get";
    t.MORE2_OTHERS_BACKUP = "http://www.3.cn/index/recommend-v20-bak/feed_content/get";
    t.MORE2_OTHERS_BACKUP1 = "//storage.jd.com/79c9c3dc3b6ef2b8/708d371d1a.js";
    t.MORE_TAB_GOODS = "//floor.jd.com/recommend-v20/feed_tab/get";
    t.MORE_TAB_GOODS_BACKUP = "//www.3.cn/index/recommend-v20-bak/feed_tab/get";
    t.MORE_TAB_GOODS_BACKUP1 = "//storage.jd.com/79c9c3dc3b6ef2b8/46b44bb372.js";
    t.MORE_TAB_GOODS_BACKUP3 = "//storage.jd.com/79c9c3dc3b6ef2b8/24473a1d11.js";
    t.MORE_TAB_GOODS_BACKUP4 = "//storage.jd.com/79c9c3dc3b6ef2b8/34bf6899cc.js";
    t.MORE_TAB_GOODS_BACKUP2 = "//storage.jd.com/79c9c3dc3b6ef2b8/b8f33f93db.js";
    t.MORE_FIND = "//diviner.jd.com/diviner?p=619028&&lid=1&ec=utf-8";
    t.USER_SPOINT = "//pjapi.jd.com/user/scoreAndLevel?source=pc_home";
    t.USER_SPOINT_AND_LEVEL = "//pjapi.jd.com/user/scoreAndLevel?source=pc_home"
}, function (e, t, n) {
    "use strict";
    var r, o, i, a, l = n(54), c = n(13), s = n(45), u = n(99), f = n(28), d = n(24), p = n(66), m = n(158), h = n(159),
        _ = n(160), y = n(100).set, v = n(162)(), g = n(101), b = n(163), P = n(164), O = n(165), w = c.TypeError,
        E = c.process, C = E && E.versions, k = C && C.v8 || "", S = c.Promise, j = "process" == u(E), T = function () {
        }, I = o = g.f, x = !!function () {
            try {
                var e = S.resolve(1), t = (e.constructor = {})[n(9)("species")] = function (e) {
                    e(T, T)
                };
                return (j || "function" == typeof PromiseRejectionEvent) && e.then(T) instanceof t && 0 !== k.indexOf("6.6") && -1 === P.indexOf("Chrome/66")
            } catch (r) {
            }
        }(), N = function (e) {
            var t;
            return !(!d(e) || "function" != typeof (t = e.then)) && t
        }, R = function (e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                v(function () {
                    for (var r = e._v, o = 1 == e._s, i = 0, a = function (t) {
                        var n, i, a, l = o ? t.ok : t.fail, c = t.resolve, s = t.reject, u = t.domain;
                        try {
                            l ? (o || (2 == e._h && L(e), e._h = 1), !0 === l ? n = r : (u && u.enter(), n = l(r), u && (u.exit(), a = !0)), n === t.promise ? s(w("Promise-chain cycle")) : (i = N(n)) ? i.call(n, c, s) : c(n)) : s(r)
                        } catch (f) {
                            u && !a && u.exit(), s(f)
                        }
                    }; n.length > i;) a(n[i++]);
                    e._c = [], e._n = !1, t && !e._h && A(e)
                })
            }
        }, A = function (e) {
            y.call(c, function () {
                var t, n, r, o = e._v, i = D(e);
                if (i && (t = b(function () {
                    j ? E.emit("unhandledRejection", o, e) : (n = c.onunhandledrejection) ? n({
                        promise: e,
                        reason: o
                    }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
                }), e._h = j || D(e) ? 2 : 1), e._a = undefined, i && t.e) throw t.v
            })
        }, D = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        }, L = function (e) {
            y.call(c, function () {
                var t;
                j ? E.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({promise: e, reason: e._v})
            })
        }, M = function (e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), R(t, !0))
        }, z = function (e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw w("Promise can't be resolved itself");
                    (t = N(e)) ? v(function () {
                        var r = {_w: n, _d: !1};
                        try {
                            t.call(e, s(z, r, 1), s(M, r, 1))
                        } catch (o) {
                            M.call(r, o)
                        }
                    }) : (n._v = e, n._s = 1, R(n, !1))
                } catch (r) {
                    M.call({_w: n, _d: !1}, r)
                }
            }
        };
    x || (S = function Promise(e) {
        m(this, S, "Promise", "_h"), p(e), r.call(this);
        try {
            e(s(z, this, 1), s(M, this, 1))
        } catch (t) {
            M.call(this, t)
        }
    }, (r = function Promise(e) {
        this._c = [], this._a = undefined, this._s = 0, this._d = !1, this._v = undefined, this._h = 0, this._n = !1
    }).prototype = n(166)(S.prototype, {
        then: function then(e, t) {
            var n = I(_(this, S));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = j ? E.domain : undefined, this._c.push(n), this._a && this._a.push(n), this._s && R(this, !1), n.promise
        }, "catch": function (e) {
            return this.then(undefined, e)
        }
    }), i = function () {
        var e = new r;
        this.promise = e, this.resolve = s(z, e, 1), this.reject = s(M, e, 1)
    }, g.f = I = function (e) {
        return e === S || e === a ? new i(e) : o(e)
    }), f(f.G + f.W + f.F * !x, {Promise: S}), n(67)(S, "Promise"), n(102)("Promise"), a = n(42).Promise, f(f.S + f.F * !x, "Promise", {
        reject: function reject(e) {
            var t = I(this);
            return (0, t.reject)(e), t.promise
        }
    }), f(f.S + f.F * (l || !x), "Promise", {
        resolve: function resolve(e) {
            return O(l && this === a ? S : this, e)
        }
    }), f(f.S + f.F * !(x && n(117)(function (e) {
        S.all(e)["catch"](T)
    })), "Promise", {
        all: function all(e) {
            var t = this, n = I(t), r = n.resolve, o = n.reject, i = b(function () {
                var n = [], i = 0, a = 1;
                h(e, !1, function (e) {
                    var l = i++, c = !1;
                    n.push(undefined), a++, t.resolve(e).then(function (e) {
                        c || (c = !0, n[l] = e, --a || r(n))
                    }, o)
                }), --a || r(n)
            });
            return i.e && o(i.v), n.promise
        }, race: function race(e) {
            var t = this, n = I(t), r = n.reject, o = b(function () {
                h(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, r)
                })
            });
            return o.e && r(o.v), n.promise
        }
    })
}, function (e, t, n) {
    e.exports = !n(20)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (t) {
            return !0
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(12), n(5);
    var r = n(4);

    function _slicedToArray(e, t) {
        return function _arrayWithHoles(e) {
            if (Array.isArray(e)) return e
        }(e) || function _iterableToArrayLimit(e, t) {
            var n = [], r = !0, o = !1, i = undefined;
            try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (c) {
                o = !0, i = c
            } finally {
                try {
                    r || null == l["return"] || l["return"]()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    var o = {};
    if (function getDebugInfo() {
        var e = (0, r.getParameterByName)("debug"), t = {};
        return e && e.split("|").forEach(function (e) {
            var n = _slicedToArray(e.split("_"), 2), r = n[0], o = n[1];
            t[r] = o ? o.split("-") : []
        }), t
    }().log) o = console; else {
        var i = function fn() {
        };
        ["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "group", "groupCollapsed", "groupEnd", "clear", "count", "assert", "markTimeline", "profile", "profileEnd", "timeline", "timelineEnd", "time", "timeEnd", "timeStamp", "memory"].forEach(function (e) {
            o[e] = i
        })
    }
    var a = o;
    t["default"] = a
}, function (e, t, n) {
    var r = n(23), o = n(92), i = n(65), a = Object.defineProperty;
    t.f = n(19) ? Object.defineProperty : function defineProperty(e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return a(e, t, n)
        } catch (l) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var r = n(24);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(13), o = n(37), i = n(43), a = n(103), l = n(65), c = n(20), s = n(69).f, u = n(86).f, f = n(22).f,
        d = n(167).trim, p = r.Number, m = p, h = p.prototype, _ = "Number" == i(n(85)(h)),
        y = "trim" in String.prototype, v = function (e) {
            var t = l(e, !1);
            if ("string" == typeof t && t.length > 2) {
                var n, r, o, i = (t = y ? t.trim() : d(t, 3)).charCodeAt(0);
                if (43 === i || 45 === i) {
                    if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === i) {
                    switch (t.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, o = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, o = 55;
                            break;
                        default:
                            return +t
                    }
                    for (var a, c = t.slice(2), s = 0, u = c.length; s < u; s++) if ((a = c.charCodeAt(s)) < 48 || a > o) return NaN;
                    return parseInt(c, r)
                }
            }
            return +t
        };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function Number(e) {
            var t = arguments.length < 1 ? 0 : e, n = this;
            return n instanceof p && (_ ? c(function () {
                h.valueOf.call(n)
            }) : "Number" != i(n)) ? a(new m(v(t)), n, p) : v(t)
        };
        for (var g, b = n(19) ? s(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), P = 0; b.length > P; P++) o(m, g = b[P]) && !o(p, g) && f(p, g, u(m, g));
        p.prototype = h, h.constructor = p, n(30)(r, "Number", p)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.isNil = function isNil(e) {
        return isNull(e) || o(e)
    }, t.isArguments = isArguments, t.isEmpty = function isEmpty(e) {
        if (isObject(e)) {
            var t = Object.getOwnPropertyNames(e).length;
            return (0, r.isIE)(8) && Array.isArray(e) && t++, !!(0 === t || 1 === t && Array.isArray(e) || 2 === t && isArguments(e))
        }
        return "" === e
    }, t.isFunction = function isFunction(e) {
        return "[object Function]" === Object.prototype.toString.call(e) || "function" == typeof e
    }, t.isNull = isNull, t.isBoolean = function isBoolean(e) {
        return !0 === e || !1 === e || "[object Boolean]" === Object.prototype.toString.call(e)
    }, t.isString = isString, t.isDate = function isDate(e) {
        return "[object Date]" === Object.prototype.toString.call(e)
    }, t.isNaN = isNaN, t.isObject = isObject, t.isNumber = function isNumber(e) {
        return !isNaN(e) && "[object Number]" === Object.prototype.toString.call(e)
    }, t.random = function random(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e)
    }, t.pick = function pick(e, t) {
        var n = {};
        if (isString(t)) return e[t];
        return t.forEach(function (t) {
            n[t] = e[t]
        }), n
    }, t.isUndefined = void 0, n(1), n(2), n(5), n(7), n(25), n(169), n(51), n(52);
    var r = n(27);

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    var o = function isUndefined(e) {
        return e === undefined
    };

    function isArguments(e) {
        return "[object Arguments]" === Object.prototype.toString.call(e) || null != e && "object" === _typeof(e) && "callee" in e
    }

    function isNull(e) {
        return null === e
    }

    function isString(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }

    function isNaN(e) {
        return Number.isNaN(e)
    }

    function isObject(e) {
        return Object(e) === e
    }

    t.isUndefined = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.isMac = function isMac() {
        return /mac/.test(o)
    }, t.isWindows = function isWindows() {
        return /win/.test(o)
    }, t.isIE = function isIE(e) {
        var t = i.match(/(?:msie |trident.+?; rv:)(\d+)/);
        return null !== t && compareVersion(t[1], e)
    }, t.isOpera = isOpera, t.isSafari = function isSafari(e) {
        var t = i.match(/version\/(\d+).+?safari/);
        return null !== t && compareVersion(t[1], e)
    }, t.isIPad = function isIPad(e) {
        var t = i.match(/ipad.+?os (\d+)/);
        return null !== t && compareVersion(t[1], e)
    }, t.isChrome = function isChrome(e) {
        var t = /google inc/.test(r) ? i.match(/(?:chrome|crios)\/(\d+)/) : null;
        return null !== t && !isOpera() && compareVersion(t[1], e)
    }, t.isFirefox = function isFirefox(e) {
        var t = i.match(/(?:firefox|fxios)\/(\d+)/);
        return null !== t && compareVersion(t[1], e)
    }, t.isEdge = function isEdge(e) {
        var t = i.match(/edge\/(\d+)/);
        return null !== t && compareVersion(t[1], e)
    }, n(35);
    var r = (navigator && navigator.vendor || "").toLowerCase(),
        o = (navigator && navigator.platform || "").toLowerCase(),
        i = (navigator && navigator.userAgent || "").toLowerCase(), a = {
            "<": function _(e, t) {
                return e < t
            }, "<=": function _(e, t) {
                return e <= t
            }, ">": function _(e, t) {
                return e > t
            }, ">=": function _(e, t) {
                return e >= t
            }
        };

    function compareVersion(e, t) {
        var n = t + "", r = +(n.match(/\d+/) || NaN), o = n.match(/^[<>]=?|/), i = o ? o[0] : "";
        return a[i] ? a[i](e, r) : e == r || r != r
    }

    function isOpera(e) {
        var t = i.match(/(?:^opera.+?version|opr)\/(\d+)/);
        return null !== t && compareVersion(t[1], e)
    }
}, function (e, t, n) {
    var r = n(13), o = n(42), i = n(38), a = n(30), l = n(45), c = function (e, t, n) {
        var s, u, f, d, p = e & c.F, m = e & c.G, h = e & c.S, _ = e & c.P, y = e & c.B,
            v = m ? r : h ? r[t] || (r[t] = {}) : (r[t] || {}).prototype, g = m ? o : o[t] || (o[t] = {}),
            b = g.prototype || (g.prototype = {});
        for (s in m && (n = t), n) f = ((u = !p && v && v[s] !== undefined) ? v : n)[s], d = y && u ? l(f, r) : _ && "function" == typeof f ? l(Function.call, f) : f, v && a(v, s, f, e & c.U), g[s] != f && i(g, s, d), _ && b[s] != f && (b[s] = f)
    };
    r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
}, function (e, t, n) {
    "use strict";
    var r = n(28), o = n(105)(5), i = !0;
    "find" in [] && Array(1).find(function () {
        i = !1
    }), r(r.P + r.F * i, "Array", {
        find: function find(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : undefined)
        }
    }), n(87)("find")
}, function (e, t, n) {
    var r = n(13), o = n(38), i = n(37), a = n(55)("src"), l = Function.toString, c = ("" + l).split("toString");
    n(42).inspectSource = function (e) {
        return l.call(e)
    }, (e.exports = function (e, t, n, l) {
        var s = "function" == typeof n;
        s && (i(n, "name") || o(n, "name", t)), e[t] !== n && (s && (i(n, a) || o(n, a, e[t] ? "" + e[t] : c.join(String(t)))), e === r ? e[t] = n : l ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)))
    })(Function.prototype, "toString", function toString() {
        return "function" == typeof this && this[a] || l.call(this)
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(3), n(1), n(2), n(14), n(18), n(7), n(8), n(5);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(0));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _createClass(e, t, n) {
        return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && _setPrototypeOf(e, t)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    var i = [], a = [];

    function load(e) {
        var t = e(), n = {loading: !0, loaded: null, error: null, promise: null};
        return n.promise = t.then(function (e) {
            return n.loading = !1, n.loaded = e, e
        })["catch"](function (e) {
            throw n.loading = !1, n.error = e, e
        }), n
    }

    function loadMap(e) {
        var t = {loading: !1, loaded: {}, error: null, promise: null}, n = [];
        try {
            Object.keys(e).forEach(function (r) {
                var o = load(e[r]);
                o.loading ? t.loading = !0 : (t.loaded[r] = o.loaded, t.error = o.error), n.push(o.promise), o.promise.then(function (e) {
                    t.loaded[r] = e
                })["catch"](function (e) {
                    t.error = e
                })
            })
        } catch (r) {
            t.error = r
        }
        return t.promise = Promise.all(n).then(function (e) {
            return t.loading = !1, e
        })["catch"](function (e) {
            throw t.loading = !1, e
        }), t
    }

    function render(e, t) {
        return r["default"].createElement(function resolve(e) {
            return e && e.__esModule ? e["default"] : e
        }(e), t)
    }

    function createLoadableComponent(e, t) {
        if (!t.loading) throw new Error("Nerv-loadable requires a `loading` component");
        var l, c = Object.assign({
            loader: null,
            loading: null,
            delay: 200,
            timeout: null,
            render: render,
            webpack: null,
            modules: null
        }, t);

        function init() {
            return l || (l = e(c.loader)), l.promise
        }

        return i.push(init), "function" == typeof c.webpack && a.push(function () {
            if (function isWebpackReady(e) {
                return "object" === _typeof(n.m) && e().every(function (e) {
                    return void 0 !== e && "undefined" != typeof n.m[e]
                })
            }(c.webpack)) return init()
        }), function (e) {
            function LoadableComponent(e) {
                var t;
                return _classCallCheck(this, LoadableComponent), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = _possibleConstructorReturn(this, _getPrototypeOf(LoadableComponent).call(this, e)))), "_mounted", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "_delay", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "_timeout", void 0), init(), t.state = {
                    error: l.error,
                    pastDelay: !1,
                    timedOut: !1,
                    loading: l.loading,
                    loaded: l.loaded
                }, t
            }

            return _inherits(LoadableComponent, r["default"].Component), _createClass(LoadableComponent, [{
                key: "componentWillMount",
                value: function componentWillMount() {
                    var e = this;
                    if (this._mounted = !0, this.context.loadable && Array.isArray(c.modules) && c.modules.forEach(function (t) {
                        e.context.loadable.report(t)
                    }), l.loading) {
                        "number" == typeof c.delay && (0 === c.delay ? this.setState({pastDelay: !0}) : this._delay = setTimeout(function () {
                            e.setState({pastDelay: !0})
                        }, c.delay)), "number" == typeof c.timeout && (this._timeout = setTimeout(function () {
                            e.setState({timedOut: !0})
                        }, c.timeout));
                        var t = function update() {
                            e._mounted && (e.setState({
                                error: l.error,
                                loaded: l.loaded,
                                loading: l.loading
                            }), e._clearTimeouts())
                        };
                        l.promise.then(function () {
                            if (e.props.test) {
                                var n = o["default"].findDOMNode(e);
                                n && n.addEventListener("click", function onClick(e) {
                                    e.stopPropagation(), e.preventDefault(), n && n.removeEventListener("click", onClick), t()
                                })
                            } else t()
                        })["catch"](function (e) {
                            throw t(), e
                        })
                    }
                }
            }, {
                key: "componentWillUnmount", value: function componentWillUnmount() {
                    this._mounted = !1, this._clearTimeouts()
                }
            }, {
                key: "_clearTimeouts", value: function _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
            }, {
                key: "render", value: function render() {
                    return this.state.loaded ? c.render(this.state.loaded, this.props) : r["default"].createElement(c.loading, {
                        isLoading: this.state.loading,
                        pastDelay: this.state.pastDelay,
                        timedOut: this.state.timedOut,
                        error: this.state.error
                    })
                }
            }], [{
                key: "preload", value: function preload() {
                    return init()
                }
            }]), LoadableComponent
        }()
    }

    function Loadable(e) {
        return createLoadableComponent(load, e)
    }

    Loadable.Map = function LoadableMap(e) {
        if ("function" != typeof e.render) throw new Error("LoadableMap requires a `render(loaded, props)` function");
        return createLoadableComponent(loadMap, e)
    };
    var l = function (e) {
        function Capture() {
            return _classCallCheck(this, Capture), _possibleConstructorReturn(this, _getPrototypeOf(Capture).apply(this, arguments))
        }

        return _inherits(Capture, r["default"].Component), _createClass(Capture, [{
            key: "getChildContext",
            value: function getChildContext() {
                return {loadable: {report: this.props.report}}
            }
        }, {
            key: "render", value: function render() {
                return this.props.children[0]
            }
        }]), Capture
    }();

    function flushInitializers(e) {
        for (var t = []; e.length;) {
            var n = e.pop();
            t.push(n())
        }
        return Promise.all(t).then(function () {
            if (e.length) return flushInitializers(e)
        })
    }

    Loadable.Capture = l, Loadable.preloadAll = function () {
        return new Promise(function (e, t) {
            return flushInitializers(i).then(e, t)
        })
    }, Loadable.preloadReady = function () {
        return new Promise(function (e, t) {
            return flushInitializers(a).then(e, e)
        })
    };
    var c = Loadable;
    t["default"] = c
}, function (e, t, n) {
    "use strict";

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function classnames() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = [];
        for (var o = 0; o < arguments.length; o++) {
            var i = arguments[o];
            if (i) {
                var a = _typeof(i);
                if ("string" === a || "number" === a) r.push(i); else if (Array.isArray(i) && i.length) {
                    var l = classnames.apply(null, i);
                    l && r.push(l)
                } else if ("object" === a) for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && i[c] && r.push(c)
            }
        }
        return r.join(" ")
    }, n(1), n(2)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function withIsWide(e) {
        return function (t) {
            function _class2() {
                var e, t, n;
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, _class2);
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                return _possibleConstructorReturn(n, (t = n = _possibleConstructorReturn(this, (e = _getPrototypeOf(_class2)).call.apply(e, [this].concat(o))), function _defineProperty(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                }(_assertThisInitialized(_assertThisInitialized(n)), "state", {isWide: pageConfig.isWide}), t))
            }

            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _setPrototypeOf(e, t)
            }(_class2, t), function _createClass(e, t, n) {
                t && _defineProperties(e.prototype, t);
                n && _defineProperties(e, n);
                return e
            }(_class2, [{
                key: "componentDidMount", value: function componentDidMount() {
                    var e = this;
                    o.eventCenter.on("isWideChange", function (t) {
                        e.setState({isWide: t.isWide})
                    })
                }
            }, {
                key: "render", value: function render() {
                    var t = this.state.isWide;
                    return r["default"].createElement(e, _extends({}, this.props, {isWide: t}))
                }
            }]), _class2
        }(r["default"].Component)
    }, n(1), n(2), n(14), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    var o = window._
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.checkVisible = checkVisible, t.checkNormalVisible = checkNormalVisible, t["default"] = void 0, n(51), n(52), n(1), n(2), n(5), n(7), n(8), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(0));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (t) {
                _defineProperty(e, t, n[t])
            })
        }
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var i = "data-lazyload-listened", a = [], l = [], c = null, s = null, u = "throttle",
        f = {top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0};
    var d = {
        throttle: function throttle(e, t, n) {
            var r, o;
            return t = t || 250, function () {
                var i = n || this, a = +new Date, l = arguments;
                r && a < r + t ? (clearTimeout(o), o = setTimeout(function () {
                    r = a, e.apply(i, l)
                }, t)) : (r = a, e.apply(i, l))
            }
        }, debounce: function debounce(e, t, n) {
            var r, o, i, a, l, c = function later() {
                var c = +new Date - a;
                c < t && c >= 0 ? r = setTimeout(later, t - c) : (r = null, n || (l = e.apply(i, o), r || (i = null, o = null)))
            };
            return function debounced() {
                i = this, o = arguments, a = +new Date;
                var s = n && !r;
                return r || (r = setTimeout(c, t)), s && (l = e.apply(i, o), i = null, o = null), l
            }
        }
    };
    var p = function (e) {
        function LazyLoad() {
            var e;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, LazyLoad), (e = _possibleConstructorReturn(this, _getPrototypeOf(LazyLoad).apply(this, arguments))).visible = !1, e
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(LazyLoad, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(LazyLoad, [{
            key: "componentDidMount", value: function componentDidMount() {
                var e, t = window, n = this.props, r = n.throttle, l = n.debounce, f = n.overflow, p = n.scroll,
                    m = n.resize, h = !1, _ = 300;
                if (void 0 !== r && "throttle" !== u ? (h = !0, u = "throttle", _ = r >>> 0) : void 0 !== l && "debounce" !== u && (h = !0, u = "debounce", _ = l >>> 0), h && (t.removeEventListener("scroll", c), t.removeEventListener("resize", s), c = null, s = null), c || (c = d[u](lazyLoadHandler, _)), f && (e = getScrollParent(o["default"].findDOMNode(this))), e && e !== window) {
                    if (e.getAttribute) {
                        var y = 1 + e.getAttribute(i) | 0;
                        1 === y && e.addEventListener("scroll", c), e.setAttribute(i, y)
                    }
                } else if ((0 === a.length || h) && (p && t.addEventListener("scroll", c), m)) {
                    var v = getWinSize(), g = v.width, b = v.height, P = null;
                    s = function resizeLazyHandler() {
                        var e = getWinSize(), t = e.width, n = e.height;
                        g === t && b === n || (P && clearTimeout(P), P = setTimeout(c, 0)), g = t, b = n
                    }, t.addEventListener("resize", s)
                }
                a.push(this), checkVisible(this)
            }
        }, {
            key: "shouldComponentUpdate", value: function shouldComponentUpdate() {
                return this.visible
            }
        }, {
            key: "componentDidUpdate", value: function componentDidUpdate() {
                var e = o["default"].findDOMNode(this);
                (!e || 3 === e.nodeType && "" === e.textContent) && c && c()
            }
        }, {
            key: "componentWillUnmount", value: function componentWillUnmount() {
                var e = window;
                if (this.props.overflow) {
                    var t = getScrollParent(o["default"].findDOMNode(this));
                    if (t && t.getAttribute) {
                        var n = -1 | t.getAttribute(i);
                        0 === n ? (t.removeEventListener("scroll", c), t.removeAttribute(i)) : t.setAttribute(i, n)
                    }
                }
                var r = a.indexOf(this);
                r >= 0 && a.splice(r, 1), 0 === a.length && (e.removeEventListener("scroll", c), e.removeEventListener("resize", c))
            }
        }, {
            key: "render", value: function render() {
                var e = this.props, t = e.children, n = e.placeholder, o = e.placeholderClassName, i = e.height,
                    a = e.style, l = e.title;
                return this.visible ? 1 === t.length ? t[0] : t : n ? r["default"].cloneElement(n, {
                    className: o,
                    style: _objectSpread({height: i}, a),
                    title: l
                }) : r["default"].createElement("div", {className: o, style: _objectSpread({height: i}, a), title: l})
            }
        }]), LazyLoad
    }();

    function getWinSize() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight
        }
    }

    function lazyLoadHandler() {
        a.forEach(function (e) {
            return checkVisible(e)
        }), function clearOnce() {
            l.forEach(function (e) {
                var t = a.indexOf(e);
                t >= 0 && a.splice(t, 1)
            }), l = []
        }()
    }

    function checkVisible(e) {
        var t, n = o["default"].findDOMNode(e);
        if (n) if (e.props.overflow && (t = getScrollParent(n)), t && t !== window ? function checkOverflowVisible(e, t) {
            var n, r, i = o["default"].findDOMNode(e);
            try {
                var a = t.getBoundingClientRect();
                n = a.top, r = a.height
            } catch (_) {
                n = f.top, r = f.height
            }
            var l, c, s = getWinSize().height, u = Math.max(n, 0), d = Math.min(s, n + r) - u;
            try {
                var p = i.getBoundingClientRect();
                l = p.top, c = p.height
            } catch (_) {
                l = f.top, c = f.height
            }
            var m = l - u,
                h = Array.isArray(e.props.offset) ? e.props.offset : [0 | e.props.offset, 0 | e.props.offset];
            return m - h[0] <= d && m + c + h[1] >= 0
        }(e, t) : checkNormalVisible(e)) {
            if (!e.visible) {
                e.props.once && l.push(e);
                var r = function setLoad() {
                    e.visible = !0, e.props.onLoad && e.props.onLoad(), e.forceUpdate()
                };
                if (e.props.test) {
                    n.addEventListener("click", function onClick(e) {
                        e.stopPropagation(), e.preventDefault(), n.removeEventListener("click", onClick), r()
                    })
                } else r()
            }
        } else e.props.once && e.visible || (e.visible = !1, e.props.unmountIfInvisible && e.forceUpdate())
    }

    function checkNormalVisible(e) {
        var t, n, r = o["default"].findDOMNode(e);
        if (!(r.offsetWidth || r.offsetHeight || r.getClientRects && r.getClientRects().length)) return !1;
        try {
            var i = r.getBoundingClientRect();
            t = i.top, n = i.height
        } catch (c) {
            t = f.top, n = f.height
        }
        var a = getWinSize().height,
            l = Array.isArray(e.props.offset) ? e.props.offset : [0 | e.props.offset, 0 | e.props.offset];
        return t - l[0] <= a && t + n + l[1] >= 0
    }

    function getScrollParent(e) {
        if (!e || 1 !== e.nodeType || !e.nodeName) return window;
        for (var t = e, n = /(scroll|auto)/; t;) {
            if (!e.parentNode) return window;
            var r = getStyle(t), o = r.overflow, i = r["overflow-x"], a = r["overflow-y"];
            if (n.test(o) && n.test(i) && n.test(a)) return t;
            t = t.parentNode
        }
        return window
    }

    function getStyle(e) {
        return function isNative(e) {
            return "function" == typeof e && /native code/.test(e.toString())
        }(window.getComputedStyle) ? window.getComputedStyle(e, null) : e.currentStyle
    }

    p.defaultProps = {
        once: !1,
        throttle: 300,
        offset: 0,
        scroll: !0,
        resize: !0,
        unmountIfInvisible: !1,
        placeholderClassName: "mod_lazyload_placeholder"
    };
    var m = p;
    t["default"] = m
}, function (e, t, n) {
    n(70)("match", 1, function (e, t, n) {
        return [function match(n) {
            "use strict";
            var r = e(this), o = n == undefined ? undefined : n[t];
            return o !== undefined ? o.call(n, r) : new RegExp(n)[t](String(r))
        }, n]
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.sendRawImageLog = sendRawImageLog, t.sendImageLog = function sendImageLog(e) {
        var t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
        if (!e || e.length < 10) return;
        var n = t ? "m=UA-J2011-1&ref=".concat(encodeURIComponent(document.referrer), "&random=").concat(Math.random()) : "";
        sendRawImageLog(e + (n ? (-1 === e.indexOf("?") ? "?" : "&") + n : ""))
    }, t["default"] = t.DelayExpose = void 0, n(5), n(7), n(8);
    var r = n(6), o = n(46);

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function sendRawImageLog(e) {
        (new Image).setAttribute("src", e)
    }

    var i = function () {
        function DelayExpose(e) {
            var t = this;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, DelayExpose), _defineProperty(this, "hoverTimer", void 0), _defineProperty(this, "isReportExpose", void 0), _defineProperty(this, "delayTime", void 0), _defineProperty(this, "stopSendExpose", function () {
                !t.isReportExpose && t.hoverTimer && (clearTimeout(t.hoverTimer), t.hoverTimer = 0)
            }), this.delayTime = e.delayTime
        }

        return function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(DelayExpose, [{
            key: "sendExpose", value: function sendExpose(e) {
                var t = this;
                try {
                    if (this.isReportExpose || this.hoverTimer) return;
                    this.hoverTimer = setTimeout(function () {
                        t.isReportExpose = !0, t.hoverTimer = 0, (0, r.reportExpose)(function _objectSpread(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function (t) {
                                    _defineProperty(e, t, n[t])
                                })
                            }
                            return e
                        }({}, e))
                    }, this.delayTime)
                } catch (n) {
                    o.dconsole.log(n)
                }
            }
        }]), DelayExpose
    }();
    t.DelayExpose = i;
    var a = i;
    t["default"] = a
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    var r = n(22), o = n(60);
    e.exports = n(19) ? function (e, t, n) {
        return r.f(e, t, o(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function _default(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!e) return "";
        if (0 === e.indexOf("data:image") && -1 !== e.indexOf("base64")) return e;
        if (e = e.replace(/\s+/g, ""), /\.gif/i.test(e)) return e;
        /^(https?:)?\/\//.test(e) || /(m|img\d{1,2})\.360buyimg\.com/.test(e) || (e = "//img10.360buyimg.com/img/" + e);
        if (!/(m|img\d{1,2})\.360buyimg\.com/.test(e) || !/\.(jpg|jpeg|png|webp)/.test(e)) return e;
        var n = t.clip, a = t.resize, u = t.quality, f = t.webp, d = void 0 === f || f;
        if (e = l(e), a && Array.isArray(a)) {
            var p = _slicedToArray(a, 2), m = p[0], h = p[1], _ = void 0 === h ? m : h;
            e = c(e, m, _)
        }
        n && (e = o(e, n));
        u && (e = i(e, u));
        (0, r.checkWebp)() && d && (e = s(e));
        return e
    }, t.getOptions = function getOptions(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {retina: !0, clip: !0},
            n = t.retina, r = t.clip, o = _slicedToArray(e, 2), i = o[0], a = o[1], l = [];
        n && l.push([2 * i, 2 * a].join("x"));
        var c = [i, a].join("x");
        return l.push(c), {resize: l, clip: r ? c : ""}
    }, n(1), n(2), n(5), n(12), n(10);
    var r = n(4);

    function _slicedToArray(e, t) {
        return function _arrayWithHoles(e) {
            if (Array.isArray(e)) return e
        }(e) || function _iterableToArrayLimit(e, t) {
            var n = [], r = !0, o = !1, i = undefined;
            try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (c) {
                o = !0, i = c
            } finally {
                try {
                    r || null == l["return"] || l["return"]()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    var o = function clipImage(e, t) {
        var n = "", r = e.replace(/!cc_\d+x\d+/, "").replace(/(!q\d{0,2}.(jpg|jpeg|png|bmp|webp))/, function (e, t) {
            return n = t, ""
        });
        return "".concat(r, "!cc_").concat(t).concat(n)
    }, i = function setImageQuality(e, t) {
        var n = String(Math.max(+t, 0) % 100 + 100).substr(1), r = "",
            o = e.replace(/!q[^!]+/, "").replace(/!c[cr][^!]+/, function (e) {
                return r = e, ""
            });
        return "".concat(o, "!q").concat(n).concat(r)
    }, a = [10, 11, 12, 13, 14, 20, 30], l = function replaceImageDomain(e) {
        var t = e && e.split("/").reverse()[0], n = parseInt(t, 36) % a.length;
        return e.replace(/(\/\/)(m|img\d{1,2})(\.360buyimg\.com)/, "$1img" + a[n] + "$3")
    }, c = function resizeImage(e, t, n) {
        return e.replace(/^https?:/, "").replace(/(360buyimg\.com\/[^/]+)\/([^/]+)/, function (e, o, i) {
            var a = i.replace(/s\d+x\d+_([\s\S]+)/, function (e, t) {
                return t
            }), l = (0, r.checkIsRetain)() ? t : n || t;
            return "".concat(o, "/s").concat(l, "_").concat(a)
        })
    }, s = function getWebpImage(e) {
        return "".concat(e.replace(/\.webp/g, ""), ".webp")
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(53)), o = n(26), i = n(4);

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var a = "o2State", l = new (function () {
        function Controller() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Controller), _defineProperty(this, "naem", a), _defineProperty(this, "state", void 0);
            var e = r.getJSON(a);
            (0, o.isUndefined)(e) && r.set(a, {}), this.state = {
                cookie: e || {},
                memory: {debugInfo: {}, isActivityTime: 0 === (0, i.checkTime)(pageConfig.actStart, pageConfig.actEnd)}
            }
        }

        return function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Controller, [{
            key: "get", value: function get(e) {
                return this.state.memory[e]
            }
        }, {
            key: "set", value: function set(e, t) {
                return this.state.memory[e] = t, t
            }
        }, {
            key: "getCookie", value: function getCookie(e) {
                return this.state.cookie[e]
            }
        }, {
            key: "setCookie", value: function setCookie(e, t) {
                return this.state.cookie[e] = t, r.set(a, this.state.cookie, {expires: 365}), t
            }
        }, {
            key: "all", value: function all() {
                return this.state
            }
        }]), Controller
    }());
    t["default"] = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.getNewuserinfo = function getNewuserinfo() {
        a.newuserinfo || (a.newuserinfo = new Promise(function (e, t) {
            l().then(function (t) {
                var n = t.isLogin;
                n ? (0, r["default"])(o.USER_ISNEW, {
                    name: "jsonpNewuserinfo",
                    charset: "gb2312",
                    dataCheck: function dataCheck(e) {
                        return e && "10000" === e.STATE
                    }
                }).then(function (t) {
                    e({isNew: t.isNew})
                })["catch"](function () {
                    e({isNew: !1})
                }) : e({isNew: !1})
            })
        }));
        return a.newuserinfo
    }, t.getSpointAndLevel = t.getCompanyinfo = t.getUserinfo = t.getLoginstatus = void 0, n(5), n(7), n(8), n(25), n(18);
    var r = _interopRequireDefault(n(11)), o = n(17), i = _interopRequireDefault(n(77));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var a = {}, l = function getLoginstatus() {
        return a.loginstatus || (a.loginstatus = new Promise(function (e) {
            (0, r["default"])(o.IS_LOGIN, {
                name: "jsonpLogin", dataCheck: function dataCheck(e) {
                    return !!(e && e.Identity && e.Identity.IsAuthenticated)
                }
            }).then(function (t) {
                var n = t.Identity;
                e({isLogin: !0, nick: n.Unick, name: n.Name})
            })["catch"](function () {
                e({nick: "", name: "", isLogin: !1})
            })
        })), a.loginstatus
    };
    t.getLoginstatus = l;
    var c = function () {
        var e = {
            imgUrl: "",
            isCompany: !1,
            lastLoginTime: "",
            nickName: "",
            plusStatus: 0,
            realName: "",
            userLevel: 1,
            isLogin: !1
        };
        return function () {
            return a.userinfo || (a.userinfo = new Promise(function (t) {
                l().then(function (n) {
                    if (n.isLogin) return (0, r["default"])(o.GET_USERINFO, {
                        timeout: 1e3,
                        name: "jsonpUserinfo",
                        charset: "gb2312"
                    }).then(function (e) {
                        var n = e.userLevel, r = e.plusStatus, o = Number(n) || 1;
                        t(function _objectSpread(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function (t) {
                                    _defineProperty(e, t, n[t])
                                })
                            }
                            return e
                        }({}, e, {isLogin: !0, userLevel: o, isCompany: 7 === o, plusStatus: Number(r) || 0}))
                    })["catch"](function () {
                        t(e)
                    });
                    t(e)
                })
            })), a.userinfo
        }
    }();
    t.getUserinfo = c;
    t.getCompanyinfo = function getCompanyinfo() {
        return a.usercompany || (a.usercompany = new Promise(function (e, t) {
            (function getUserLevel() {
                return a.userlevel || (a.userlevel = new Promise(function (e) {
                    var t = i["default"].pin;
                    null != t && "" !== t ? (0, r["default"])(o.USER_LEVEL, {
                        timeout: 1e3,
                        name: "jsonpUserLevel",
                        params: {param1: decodeURIComponent(t)},
                        dataCheck: function dataCheck(e) {
                            return 0 === Number(e.code)
                        }
                    }).then(function (t) {
                        e(t.data)
                    })["catch"](function () {
                        e(null)
                    }) : e(null)
                })), a.userlevel
            })().then(function (t) {
                e(90 === t ? {isCompany: !0} : {isCompany: !1})
            })["catch"](t)
        })), a.usercompany
    };
    var s = function () {
        var e = {
            NO: [0, ""],
            Regist: [1, "注册会员"],
            Copper: [2, "铜牌会员"],
            Silver: [3, "银牌会员"],
            Gold: [4, "金牌会员"],
            Diamonds: [5, "钻石会员"]
        };
        return function () {
            return a.spoint || (a.spoint = new Promise(function (t) {
                l().then(function (n) {
                    if (n.isLogin) return (0, r["default"])(o.USER_SPOINT_AND_LEVEL, {
                        params: {},
                        name: "jsonpSpointAndLevel",
                        dataCheck: function dataCheck(e) {
                            return e && 0 === e.code
                        }
                    }).then(function (n) {
                        var r = n.data, o = r.score, i = r.level, a = e[i || "NO"];
                        t({spoint: Number(o), levelPair: a})
                    });
                    t({spoint: 0, levelPair: []})
                })["catch"](function () {
                    t({spoint: 0, levelPair: []})
                })
            })), a.spoint
        }
    }();
    t.getSpointAndLevel = s
}, function (e, t) {
    var n = e.exports = {version: "2.5.7"};
    "number" == typeof __e && (__e = n)
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    "use strict";
    n(7), n(8), n(5), Object.defineProperty(t, "__esModule", {value: !0});
    var r = {};
    t["default"] = void 0;
    var o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(77));
    Object.keys(o).forEach(function (e) {
        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: function get() {
                return o[e]
            }
        }))
    });
    var i = n(41);
    Object.keys(i).forEach(function (e) {
        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: function get() {
                return i[e]
            }
        }))
    });
    var a = o["default"];
    t["default"] = a
}, function (e, t, n) {
    var r = n(66);
    e.exports = function (e, t, n) {
        if (r(e), t === undefined) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.isSkuSelf = function isSkuSelf(e) {
        if (!e) return !1;
        var t = parseInt(e);
        if (t >= 100001 && t <= 9999999 || t >= 100000000001 && t <= 109999999999) return !0;
        return !1
    }, Object.defineProperty(t, "dconsole", {
        enumerable: !0, get: function get() {
            return r["default"]
        }
    }), t.isCharacterKey = t.loadLegacy = t.bindHotkey = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(21)), o = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(15));
    t.bindHotkey = function bindHotkey() {
        document.body.addEventListener("keyup", function (e) {
            var t = document.activeElement && document.activeElement.tagName.toLowerCase();
            if ("input" !== t && "textarea" !== t) {
                var n = e || window.event, r = n.keyCode || n.which, o = document.getElementById("key");
                switch (r) {
                    case 68:
                        window.pageConfig.clientViewTop || (window.pageConfig.clientViewTop = 0), window.pageConfig.clientViewTop += document.documentElement.clientHeight, window.scrollTo(0, pageConfig.clientViewTop);
                        break;
                    case 83:
                        window.scrollTo(0, 0), window.pageConfig.clientViewTop = 0, o && o.focus();
                        break;
                    case 84:
                        window.scrollTo(0, 0), window.pageConfig.clientViewTop = 0
                }
            }
        })
    };
    var i = function () {
        var e = null;
        return function () {
            return e || (e = n.e(8).then(n.t.bind(null, 265, 7)).then(function () {
                seajs.config({alias: {"home/widget/mobile_pop": o.HEAD_MOBILE}})
            }))
        }
    }();
    t.loadLegacy = i;
    var a = 48, l = 57, c = 63, s = 65, u = 90, f = 96, d = 106, p = 107, m = 109, h = 110, _ = 111, y = 186, v = 189,
        g = 187, b = 188, P = 190, O = 191, w = 192, E = 222, C = 219, k = 220, S = 221, j = 229;
    t.isCharacterKey = function isCharacterKey(e) {
        if (e >= a && e <= l) return !0;
        if (e >= f && e <= d) return !0;
        if (e >= s && e <= u) return !0;
        if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) return !0;
        switch (e) {
            case j:
            case c:
            case p:
            case m:
            case h:
            case _:
            case y:
            case v:
            case g:
            case b:
            case P:
            case O:
            case w:
            case E:
            case C:
            case k:
            case S:
                return !0;
            default:
                return !1
        }
    }
}, function (e, t, n) {
    var r = n(93), o = n(83);
    e.exports = Object.keys || function keys(e) {
        return r(e, o)
    }
}, function (e, t, n) {
    var r = n(81), o = n(59);
    e.exports = function (e) {
        return r(o(e))
    }
}, function (e, t, n) {
    var r = n(22).f, o = Function.prototype, i = /^\s*function ([^ (]*)/;
    "name" in o || n(19) && r(o, "name", {
        configurable: !0, get: function () {
            try {
                return ("" + this).match(i)[1]
            } catch (e) {
                return ""
            }
        }
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = t.BIZ_HIDDEN = t.BIZ = void 0, n(35);
    var r = _interopRequireDefault(n(11)), o = _interopRequireDefault(n(72)), i = n(73), a = n(26), l = n(4), c = n(57);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    t.BIZ = 1234;
    t.BIZ_HIDDEN = 1235;
    var s = {}, u = {}, f = [], d = function () {
        function UMP() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, UMP)
        }

        return function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(UMP, null, [{
            key: "_reset", value: function _reset(e) {
                var t = s[e];
                return !!t && (clearTimeout(t), delete s[e], !0)
            }
        }, {
            key: "report", value: function report(e, t, n) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1234,
                    o = !(arguments.length > 4 && arguments[4] !== undefined) || arguments[4],
                    i = arguments.length > 5 ? arguments[5] : undefined;
                if (o && !UMP._reset(e)) return;
                if (n = String(n || ""), e = parseInt(e), !(0, a.isNaN)(e)) {
                    if (t = parseInt(t), (0, a.isNaN)(t) && (t = 1), 1 === t && n) {
                        var l = n.match(/[(（](\d+)[)）]/);
                        l && (t = ~~l[1] || 1)
                    }
                    var c = [r, e, t, 0, n];
                    i && c.push(i), f.push(c.join("|")), UMP.sendInfo()
                }
            }
        }, {
            key: "umpBiz", value: function umpBiz(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10,
                    n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
                if (void 0 !== t && Math.floor(10 * Math.random()) > t) return !1;
                UMP.report(e.operation, e.result, e.message, e.bizid, n, e.traceid)
            }
        }, {
            key: "prepare", value: function prepare(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15e3;
                UMP._reset(e), s[e] = setTimeout(function () {
                    UMP.report(e, 408, "REQUEST_TIMEOUT")
                }, t)
            }
        }, {
            key: "start", value: function start(e, t, n) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8e3;
                if (!e || !t || !n) throw new Error("参数不合法");
                return u[e] = {
                    bizid: t, operation: n, rid: setTimeout(function () {
                        u[e] && (delete u[e], UMP.report(n, 408, "REQUEST_TIMEOUT", t))
                    }, r)
                }, function (r, o, i) {
                    u[e] && (clearTimeout(u[e].rid), delete u[e], UMP.umpBiz({
                        operation: n,
                        result: r,
                        message: o,
                        bizid: t
                    }, i))
                }
            }
        }, {
            key: "umpReport", value: function umpReport(e, t, n, r) {
                if (!e) throw new Error("参数不合法");
                var o = u[e];
                o && (clearTimeout(o.rid), delete u[e], o.result = t, o.message = n, UMP.umpBiz(o, r))
            }
        }]), UMP
    }();
    t["default"] = d, function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(d, "sendInfo", (0, l.debounce)(function () {
        var e = {contents: f.join(","), t: Math.random()};
        f = [];
        var t = new o["default"](function (e, t) {
            r["default"].sendReport("http://wq.jd.com/webmonitor/collect/biz.json", e), t()
        }, e, c.PRIORITY_REQUEST);
        i.queue.push(t)
    }, 1e3))
}, function (e, t, n) {
    "use strict";
    n(170);
    var r = n(23), o = n(88), i = n(19), a = /./.toString, l = function (e) {
        n(30)(RegExp.prototype, "toString", e, !0)
    };
    n(20)(function () {
        return "/a/b" != a.call({source: "a", flags: "b"})
    }) ? l(function toString() {
        var e = r(this);
        return "/".concat(e.source, "/", "flags" in e ? e.flags : !i && e instanceof RegExp ? o.call(e) : undefined)
    }) : "toString" != a.name && l(function toString() {
        return a.call(this)
    })
}, function (e, t, n) {
    var r = Date.prototype, o = r.toString, i = r.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(30)(r, "toString", function toString() {
        var e = i.call(this);
        return e == e ? o.call(this) : "Invalid Date"
    })
}, function (e, t, n) {
    var r, o;
    !function (i) {
        if ((o = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) === undefined || (e.exports = o), !0, e.exports = i(), !!0) {
            var a = window.Cookies, l = window.Cookies = i();
            l.noConflict = function () {
                return window.Cookies = a, l
            }
        }
    }(function () {
        function extend() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r]
            }
            return t
        }

        return function init(e) {
            function api(t, n, r) {
                var o;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if ("number" == typeof (r = extend({path: "/"}, api.defaults, r)).expires) {
                            var i = new Date;
                            i.setMilliseconds(i.getMilliseconds() + 864e5 * r.expires), r.expires = i
                        }
                        r.expires = r.expires ? r.expires.toUTCString() : "";
                        try {
                            o = JSON.stringify(n), /^[\{\[]/.test(o) && (n = o)
                        } catch (m) {
                        }
                        n = e.write ? e.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var a = "";
                        for (var l in r) r[l] && (a += "; " + l, !0 !== r[l] && (a += "=" + r[l]));
                        return document.cookie = t + "=" + n + a
                    }
                    t || (o = {});
                    for (var c = document.cookie ? document.cookie.split("; ") : [], s = /(%[0-9A-Z]{2})+/g, u = 0; u < c.length; u++) {
                        var f = c[u].split("="), d = f.slice(1).join("=");
                        this.json || '"' !== d.charAt(0) || (d = d.slice(1, -1));
                        try {
                            var p = f[0].replace(s, decodeURIComponent);
                            if (d = e.read ? e.read(d, p) : e(d, p) || d.replace(s, decodeURIComponent), this.json) try {
                                d = JSON.parse(d)
                            } catch (m) {
                            }
                            if (t === p) {
                                o = d;
                                break
                            }
                            t || (o[p] = d)
                        } catch (m) {
                        }
                    }
                    return o
                }
            }

            return api.set = api, api.get = function (e) {
                return api.call(api, e)
            }, api.getJSON = function () {
                return api.apply({json: !0}, [].slice.call(arguments))
            }, api.defaults = {}, api.remove = function (e, t) {
                api(e, "", extend(t, {expires: -1}))
            }, api.withConverter = init, api
        }(function () {
        })
    })
}, function (e, t) {
    e.exports = !1
}, function (e, t) {
    var n = 0, r = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(e === undefined ? "" : e, ")_", (++n + r).toString(36))
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.PRIORITY_NORMAL = t.PRIORITY_REPORT = t.PRIORITY_REQUEST = void 0;
    t.PRIORITY_REQUEST = 3;
    t.PRIORITY_REPORT = 4;
    t.PRIORITY_NORMAL = 5
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.FOCUS = t.SPEED_PID_BASE = t.SPEED_PID_API = t.SPEED_URL = t.STANDARD_EXPOSE_VERSION = t.STANDARD_EXPOSE_DOMAIN = t.LOG_TYPE = t.LOG_CATEGORY = void 0;
    t.LOG_CATEGORY = "pc_homepage";
    t.LOG_TYPE = "basic";
    t.STANDARD_EXPOSE_DOMAIN = "//s-nfa.jd.com/bd?info=";
    t.STANDARD_EXPOSE_VERSION = "1.0";
    t.SPEED_URL = "http://fd.3.cn/cesu/r";
    t.SPEED_PID_API = 1697;
    t.SPEED_PID_BASE = 1705;
    t.FOCUS = 1
}, function (e, t) {
    e.exports = function (e) {
        if (e == undefined) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t, n) {
    var r = n(59);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e, t, n) {
    var r = n(13), o = n(103), i = n(22).f, a = n(69).f, l = n(98), c = n(88), s = r.RegExp, u = s, f = s.prototype,
        d = /a/g, p = /a/g, m = new s(d) !== d;
    if (n(19) && (!m || n(20)(function () {
        return p[n(9)("match")] = !1, s(d) != d || s(p) == p || "/a/i" != s(d, "i")
    }))) {
        s = function RegExp(e, t) {
            var n = this instanceof s, r = l(e), i = t === undefined;
            return !n && r && e.constructor === s && i ? e : o(m ? new u(r && !i ? e.source : e, t) : u((r = e instanceof s) ? e.source : e, r && i ? c.call(e) : t), n ? this : f, s)
        };
        for (var h = function (e) {
            e in s || i(s, e, {
                configurable: !0, get: function () {
                    return u[e]
                }, set: function (t) {
                    u[e] = t
                }
            })
        }, _ = a(u), y = 0; _.length > y;) h(_[y++]);
        f.constructor = s, s.prototype = f, n(30)(r, "RegExp", s)
    }
    n(102)("RegExp")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.getNewUserPromotionalData = t.getLocation = t.loadedPromise = void 0, n(18);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(11)), o = n(46), i = n(17);
    var a = function () {
        var e;
        return function () {
            return e || (e = new Promise(function (e) {
                var t = function onload() {
                    window.removeEventListener("load", onload), e()
                };
                "complete" === document.readyState ? t() : window.addEventListener("load", t)
            })), e
        }
    }();
    t.loadedPromise = a;
    var l = function () {
        var e = null, t = {action: "gis", type: "std", appid: "9ac75736119512c531a264b59a7ce24b", isdefaultipaddr: "1"};
        return function () {
            return e || (e = (0, r["default"])(i.GATEWAY, {
                name: "jsonpGetLocation",
                params: {
                    appid: "O2_channel",
                    body: JSON.stringify(t),
                    clientVersion: "1.0.0",
                    jsonp: "jsonpGetLocation",
                    client: "wh5",
                    functionId: "lbsapi"
                }
            }))
        }
    }();
    t.getLocation = l;
    var c = function () {
        var e = null;
        return function () {
            return e || (e = new Promise(function (e) {
                (0, o.loadLegacy)().then(function () {
                    seajs.config({alias: {ad_noob: "//nfa.jd.com/loadFa.action?aid=0_0_8857"}}), seajs.use("ad_noob", function (t) {
                        e(t)
                    })
                })["catch"](function (t) {
                    e([])
                })
            }))
        }
    }();
    t.getNewUserPromotionalData = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.setImage = function setImage(e, t) {
        var n = e.data("time") || 1;
        if (n > 3) return;
        var r = new Image;
        r.onload = function () {
            e.attr("src", t)
        };
        r.onerror = function () {
            e.data("time", n + 1), setImage(e, t)
        };
        r.src = t
    }, t.getElementPosByParent = t.isInViewport = t.getElementPos = void 0;
    t.getElementPos = function getElementPos(e) {
        if (!e.getBoundingClientRect) return null;
        var t = e.getBoundingClientRect(), n = t.height, r = t.width, o = window.pageXOffset + t.left, i = o + r,
            a = window.pageYOffset + t.top;
        return {top: a, left: o, right: i, bottom: a + n, width: r, height: n}
    };
    t.isInViewport = function isInViewport(e) {
        var t = e.top, n = e.bottom, r = window.innerWidth, o = window.pageYOffset;
        return o < n && o + r > t
    };
    t.getElementPosByParent = function getElementPosByParent(e) {
        if (!e) return null;
        var t = $(e), n = t.offset();
        if (!n) return null;
        var r = n.left, o = n.top, i = t.width() || 0, a = t.height() || 0;
        return {left: r, top: o, width: i, height: a, right: r + i, bottom: o + a}
    }
}, function (e, t, n) {
    var r = n(24);
    e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    var r = n(22).f, o = n(37), i = n(9)("toStringTag");
    e.exports = function (e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {configurable: !0, value: t})
    }
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
    var r = n(93), o = n(83).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function getOwnPropertyNames(e) {
        return r(e, o)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(38), o = n(30), i = n(20), a = n(59), l = n(9);
    e.exports = function (e, t, n) {
        var c = l(e), s = n(a, c, ""[e]), u = s[0], f = s[1];
        i(function () {
            var t = {};
            return t[c] = function () {
                return 7
            }, 7 != ""[e](t)
        }) && (o(String.prototype, e, u), r(RegExp.prototype, c, 2 == t ? function (e, t) {
            return f.call(e, this, t)
        } : function (e) {
            return f.call(e, this)
        }))
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(5), n(7), n(8);
    var r = _interopRequireDefault(n(11)), o = _interopRequireDefault(n(72)), i = n(73), a = n(4), l = n(57), c = n(58);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var s = {}, u = function () {
        function Speed() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Speed)
        }

        return function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Speed, null, [{
            key: "reportAlone", value: function reportAlone(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : c.SPEED_PID_API,
                    n = new o["default"](function (e, n) {
                        r["default"].sendReport(c.SPEED_URL, function _objectSpread(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function (t) {
                                    _defineProperty(e, t, n[t])
                                })
                            }
                            return e
                        }({pid: t}, e)), n()
                    }, e, l.PRIORITY_REPORT);
                i.queue.push(n)
            }
        }, {
            key: "report", value: function report(e, t) {
                s[e] = t, Speed.reportCollection()
            }
        }]), Speed
    }();
    t["default"] = u, _defineProperty(u, "reportCollection", (0, a.debounce)(function () {
        this.reportAlone(s), s = {}
    }, 1e3))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = n(26), o = n(57);

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var i = function () {
        function Task(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : o.PRIORITY_NORMAL;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Task), _defineProperty(this, "id", void 0), _defineProperty(this, "context", void 0), _defineProperty(this, "timeout", void 0), _defineProperty(this, "priority", void 0), _defineProperty(this, "action", void 0), this.context = t, this.action = e, this.priority = n, this.id = String(Date.now()) + String((0, r.random)(0, 1e3))
        }

        return function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Task, [{
            key: "run", value: function run(e) {
                var t = this.id, n = e.bind(null, t);
                this.action(this.context, n)
            }
        }]), Task
    }();
    t["default"] = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.queue = t["default"] = void 0, n(104);
    var r = n(27);

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var o = function () {
        function Queue() {
            var e = this, t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Queue), _defineProperty(this, "tasks", []), _defineProperty(this, "pendingTasks", []), _defineProperty(this, "maxCount", void 0), _defineProperty(this, "next", function (t) {
                var n = e.pendingTasks, r = e.tasks, o = n.filter(function (e) {
                    return e.id !== t
                }), i = r.shift();
                i && (e.runTask(i), o.push(i)), e.pendingTasks = o
            }), this.maxCount = (0, r.isIE)(8) ? 9999 : t
        }

        return function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Queue, [{
            key: "runTask", value: function runTask(e) {
                return e.run(this.next)
            }
        }, {
            key: "push", value: function push(e) {
                var t = this.tasks, n = this.pendingTasks, r = this.maxCount;
                if (n.length < r) return n.push(e), void this.runTask(e);
                var o = t.findIndex(function (t) {
                    return t.priority > e.priority
                });
                o < 0 ? this.tasks.push(e) : this.tasks.splice(o, 0, e)
            }
        }]), Queue
    }();
    t["default"] = o;
    var i = new o(10);
    t.queue = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(7), n(8), n(3), n(29), n(12), n(14), n(5);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(0)), i = _interopRequireDefault(n(208)),
        a = _interopRequireDefault(n(209)), l = n(27), c = n(89);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (t) {
                _defineProperty(e, t, n[t])
            })
        }
        return e
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var s = function (e) {
        function Slider() {
            var e;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Slider), _defineProperty(_assertThisInitialized(_assertThisInitialized(e = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(Slider).apply(this, arguments)))), "sliderItems", []), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "sliderWrapperRef", function (t) {
                e.sliderWrapper = t
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "sliderItemsRef", function (t) {
                var n = o["default"].findDOMNode(t);
                e.sliderItems.indexOf(n) < 0 && null !== n && (e.sliderItems[n.getAttribute("data-index")] = n)
            }), e.state = {currentSlide: e.props.currentSlide, lazyLoadedList: []}, e.pauseState = !1, e
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(Slider, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Slider, [{
            key: "componentWillReceiveProps", value: function componentWillReceiveProps(e) {
                this.sliderItems.splice(this.props.children.length), this.pause(), this.initSlider(e)
            }
        }, {
            key: "componentWillMount", value: function componentWillMount() {
                var e = [], t = this.props, n = this.state, r = t.children, o = t.slidesToShow, i = t.lazyLoad,
                    a = n.currentSlide;
                r.forEach(function (t, n) {
                    n >= a && n < a + o && e.push(n)
                }), i && 0 === n.lazyLoadedList.length && this.setState({lazyLoadedList: e})
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                this.initSlider()
            }
        }, {
            key: "initSlider", value: function initSlider(e) {
                var t = this, n = e || this.props, o = n.slidesToShow, i = n.children, a = n.fade, l = n.vertical,
                    s = n.verticalMargin, u = n.noChangeSelf, f = i.length;
                if (!(f <= 0)) {
                    var d;
                    d = l ? (0, c.getWidth)(r["default"].findDOMNode(this)) : (0, c.getWidth)(r["default"].findDOMNode(this)) / o;
                    var p = this.state.currentSlide,
                        m = (0, c.getHeight)(r["default"].findDOMNode(this).querySelector('[data-index="0"]')),
                        h = m * o;
                    l && (h += (f - 1) * s);
                    var _ = {};
                    if (l ? _.height = (f + 2 * o) * m : _.width = (f + 2 * o) * d, !u) {
                        var y = this.getSliderLeftOffset({
                            currentSlide: p,
                            slideCount: f,
                            slideWidth: d,
                            slideHeight: m
                        }, n);
                        _ = Object.assign(this.getSliderWrapperStyle(y), _)
                    }
                    var v = this.state.lazyLoadedList.concat();
                    i.forEach(function (e, t) {
                        t >= p && t < p + o && v.indexOf(t) < 0 && v.push(t)
                    }), this.setState({
                        mounted: !0,
                        slideWidth: d,
                        slideHeight: m,
                        listHeight: h,
                        slideCount: f,
                        lazyLoadedList: v,
                        wrapperStyle: _
                    }, function () {
                        a && t.sliderItems.forEach(function (e, n) {
                            n === t.state.currentSlide ? (e.style.opacity = 1, e.style.filter = "alpha(opacity=100)", e.style.zIndex = 1) : (e.style.opacity = 0, e.style.filter = "alpha(opacity=0)", e.style.zIndex = 0)
                        }), n.autoPlay && (t.pauseState = !1), t.autoPlay(n)
                    })
                }
            }
        }, {
            key: "autoPlay", value: function autoPlay(e) {
                var t = e || this.props;
                this.autoPlayTimer && clearTimeout(this.autoPlayTimer), t.autoPlay && !this.pauseState && (this.autoPlayTimer = setTimeout(this.play.bind(this), t.autoPlayInterval))
            }
        }, {
            key: "play", value: function play() {
                if (!this.state.mounted) return !1;
                if (!this.canGoNext()) return !1;
                var e = this.state.currentSlide + this.props.slidesToScroll;
                this.slideTo(e)
            }
        }, {
            key: "pause", value: function pause() {
                this.autoPlayTimer && clearTimeout(this.autoPlayTimer), this.pauseState = !0
            }
        }, {
            key: "slideTo", value: function slideTo(e) {
                var t, n, r = this, o = this.props, i = o.fade, a = o.infinite, l = o.afterChange, s = o.beforeChange,
                    u = o.speed, f = o.slidesToScroll, d = o.slidesToShow, p = o.easeType, m = o.noChangeSelf,
                    h = this.state, _ = h.slideCount, y = h.lazyLoadedList;
                if (!this.animating) {
                    if (t = this.state.currentSlide, i) {
                        if (!1 === a && (e < 0 || e >= _)) return;
                        return n = e < 0 ? e + _ : e >= _ ? e - _ : e, this.props.lazyLoad && y.indexOf(n) < 0 && this.setState({lazyLoadedList: y.concat(n)}), s && s.call(this, t, n), this.animating = !0, m || this.sliderItems.forEach(function (e, r) {
                            r === n ? (e.style.zIndex = 1, (0, c.fadeIn)(e, u, p)) : r === t && (e.style.zIndex = 0, (0, c.fadeOut)(e, u))
                        }), this.setState({currentSlide: n}, function () {
                            var e = this;
                            this.animationEndCallback = setTimeout(function () {
                                e.animating = !1, l && l.call(e, n), delete e.animationEndCallback
                            }, u)
                        }), void this.autoPlay()
                    }
                    var v = this.getSliderLeftOffset(_objectSpread({}, this.state, {currentSlide: t}));
                    t = (n = e) < 0 ? !1 === a ? 0 : _ % f != 0 ? _ - _ % f : _ + n : n >= _ ? !1 === a ? _ - d : _ % f != 0 ? 0 : n - _ : n;
                    var g = this.getSliderLeftOffset(_objectSpread({}, this.state, {currentSlide: n})),
                        b = this.getSliderLeftOffset(_objectSpread({}, this.state, {currentSlide: t}));
                    if (!1 === a && (g = b), this.props.beforeChange && this.props.beforeChange(this.state.currentSlide, t), this.props.lazyLoad) {
                        for (var P = !0, O = [], w = n; w < n + d; w++) (P = P && this.state.lazyLoadedList.indexOf(w) >= 0) || (w < 0 ? O.push(w + _) : O.push(w));
                        P ? this.slideCore(t, v, g, b) : this.setState({lazyLoadedList: this.state.lazyLoadedList.concat(O)}, function () {
                            r.slideCore(t, v, g, b)
                        })
                    } else this.slideCore(t, v, g, b)
                }
            }
        }, {
            key: "slideCore", value: function slideCore(e, t, n, r) {
                var o = this.props, i = o.vertical, a = o.afterChange, s = o.speed, u = o.easeType, f = o.noChangeSelf;
                this.animating = !0, f || (0, l.isIE)(8) || (0, c.slideAnimate)(this.sliderWrapper, s, u, i, t, n), this.setState({currentSlide: e}, function () {
                    var t = this;
                    this.animationEndCallback = setTimeout(function () {
                        if (t.animating = !1, !f) {
                            var n = t.getSliderWrapperStyle(r);
                            for (var o in n) t.sliderWrapper.style[o] = n[o]
                        }
                        a && a.call(t, e), delete t.animationEndCallback
                    }, s)
                }), this.autoPlay()
            }
        }, {
            key: "changeSlide", value: function changeSlide(e, t) {
                var n, r = this.props, o = r.slidesToScroll, i = r.slidesToShow, a = this.state, l = a.slideCount,
                    c = a.currentSlide, s = l % o != 0 ? 0 : (l - c) % o;
                "previous" === e ? n = c - (0 === s ? o : i - s) : "next" === e ? n = c + (0 === s ? o : s) : "indicate" === e && (this.animating = !1, clearTimeout(this.animationEndCallback), n = t.index * o), this.slideTo(n)
            }
        }, {
            key: "slideToPrev", value: function slideToPrev() {
                this.changeSlide("previous")
            }
        }, {
            key: "slideToNext", value: function slideToNext() {
                this.canGoNext() && this.changeSlide("next")
            }
        }, {
            key: "slideToTarget", value: function slideToTarget(e) {
                this.changeSlide("indicate", {index: e})
            }
        }, {
            key: "onSliderOver", value: function onSliderOver(e) {
                this.props.pauseOnHover && this.pause()
            }
        }, {
            key: "onSliderOut", value: function onSliderOut(e) {
                this.props.pauseOnHover && (this.pauseState = !1, this.autoPlay())
            }
        }, {
            key: "canGoNext", value: function canGoNext() {
                if (!this.props.infinite) {
                    var e = this.state.slideCount, t = this.props.slidesToShow, n = this.state.currentSlide;
                    if (e <= t || n >= e - t) return !1
                }
                return !0
            }
        }, {
            key: "canGoPrev", value: function canGoPrev() {
                if (!this.props.infinite) {
                    var e = this.state.slideCount, t = this.props.slidesToShow;
                    if (0 === this.state.currentSlide || e <= t) return !1
                }
                return !0
            }
        }, {
            key: "checkChildren", value: function checkChildren(e) {
                var t = this, n = e.children;
                if (n && n.length) {
                    var o = n.concat().map(function (e) {
                        return "function" == typeof e.tagName ? r["default"].cloneElement(e) : t.checkChildren(e)
                    });
                    e.children = o
                }
                return e
            }
        }, {
            key: "renderSlides", value: function renderSlides() {
                var e, t = this, n = this.props, o = this.state, i = n.children, a = [], l = [], s = [], u = i.length,
                    f = n.fade, d = n.infinite, p = n.lazyLoad, m = n.slidesToShow, h = n.slidesToScroll,
                    _ = o.currentSlide, y = o.lazyLoadedList, v = o.slideCount;
                return i.forEach(function (n, o) {
                    var i = n;
                    p && y.indexOf(o) < 0 && (i = r["default"].createElement("div", null));
                    var g = t.getSlideStyle(o), b = ["slider_item"];
                    i.props.className && (b = b.concat(i.props.className.split(" ")));
                    var P = b.slice(0);
                    _ <= o && o < _ + m ? P.push("slider_active") : o >= _ + m && o < _ + m + h || _ >= v - 1 && 0 === o ? P.push("slider_next") : (o < _ && o >= _ - m - h || 0 === _ && o === v - 1) && P.push("slider_prev"), g = (0, c.extend)(i.props.style || {}, g), a.push(r["default"].cloneElement(i, {
                        key: "slider_original".concat(i.key ? i.key : o),
                        "data-index": o,
                        className: P.join(" "),
                        style: g,
                        ref: t.sliderItemsRef
                    })), d && !f && (o >= u - m && (e = -(u - o), l.push(r["default"].cloneElement(i, {
                        key: "slider_pre_clone".concat(i.key ? i.key : e),
                        "data-index": e,
                        className: b.join(" "),
                        style: g,
                        ref: t.sliderItemsRef
                    }))), o < m && (e = u + o, s.push(r["default"].cloneElement(i, {
                        key: "slider_last_clone".concat(i.key ? i.key : e),
                        "data-index": e,
                        className: b.join(" "),
                        style: g,
                        ref: t.sliderItemsRef
                    }))))
                }), l.concat(a, s)
            }
        }, {
            key: "getSlideStyle", value: function getSlideStyle(e) {
                var t = this.props, n = this.state, r = {};
                return r.width = n.slideWidth, t.vertical || (r.float = "left"), t.fade && (r.position = "relative", r.left = -e * n.slideWidth, c.supportTransition && (r.transition = "opacity ".concat(t.speed, "ms ").concat(t.easeType), r.WebkitTransition = "opacity ".concat(t.speed, "ms ").concat(t.easeType))), r
            }
        }, {
            key: "getSliderWrapperStyle", value: function getSliderWrapperStyle(e, t) {
                var n = t || this.props, r = this.state, o = r.slideCount, i = r.slideWidth, a = r.slideHeight,
                    l = n.slidesToShow, s = n.vertical, u = {opacity: 1};
                if (s ? u.height = (o + 2 * l) * a : u.width = (o + 2 * l) * i, c.supportTransition) {
                    var f = s ? "translate3d(0px, " + e + "px, 0px)" : "translate3d(" + e + "px, 0px, 0px)";
                    (0, c.extend)(u, {
                        WebkitTransform: f,
                        transform: f,
                        transition: "none",
                        WebkitTransition: "none",
                        msTransform: s ? "translateY(".concat(e, "px)") : "translateX(".concat(e, "px)")
                    })
                } else (0, c.extend)(u, {position: "relative"}), s ? (0, c.extend)(u, {marginTop: e + "px"}) : (0, c.extend)(u, {marginLeft: e + "px"});
                return u
            }
        }, {
            key: "getSliderLeftOffset", value: function getSliderLeftOffset(e, t) {
                var n = e.currentSlide, r = e.slideCount, o = e.slideWidth, i = e.slideHeight, a = t || this.props,
                    l = a.vertical, c = a.fade, s = a.infinite, u = a.slidesToShow, f = a.slidesToScroll, d = 0, p = 0;
                if (c) return 0;
                s ? (r >= u && (d = o * u * -1, p = i * u * -1), r % f != 0 && n + f > r && r > u && (n > r ? (d = (u - (n - r)) * o * -1, p = (u - (n - r)) * i * -1) : (d = r % f * o * -1, p = r % f * i * -1))) : r % f != 0 && n + f > r && r > u && (d = (u - r % f) * o);
                return d = l ? n * i * -1 + p : n * o * -1 + d
            }
        }, {
            key: "componentDidUpdate", value: function componentDidUpdate() {
                this.setTabindex(this.sliderItems)
            }
        }, {
            key: "setTabindex", value: function setTabindex(e) {
                ["-1", "".concat(e.length - 1)].forEach(function (t) {
                    var n = $(e[t]).find("a"), r = n.length;
                    if (r) for (var o = 0; o < r; o++) {
                        var i = $(n[o]);
                        -1 !== i.attr("tabindex") && i.attr("tabindex", -1)
                    }
                })
            }
        }, {
            key: "render", value: function render() {
                var e, t, n, o = this.props, l = {overflow: "hidden"};
                o.vertical && (l.height = this.state.listHeight);
                var s = this.canGoNext(), u = this.canGoPrev(),
                    f = (0, c.addClassName)("slider_control slider_control_prev", o.prevArrowClassName),
                    d = (0, c.addClassName)("slider_control slider_control_next", o.nextArrowClassName), p = {
                        clickHandler: this.slideToPrev.bind(this),
                        arrow: o.prevArrow,
                        className: f,
                        text: o.prevArrowText || "<",
                        canGo: u
                    }, m = {
                        clickHandler: this.slideToNext.bind(this),
                        arrow: o.nextArrow,
                        className: d,
                        text: o.nextArrowText || ">",
                        canGo: s
                    };
                o.arrows && (e = r["default"].createElement(i["default"], p), t = r["default"].createElement(i["default"], m));
                var h = {
                    count: Math.ceil(o.children.length / this.props.slidesToScroll),
                    currentIndex: Math.ceil(this.state.currentSlide / this.props.slidesToScroll),
                    itemHandler: this.slideToTarget.bind(this),
                    indicatorHoverToSlide: o.indicatorHoverToSlide,
                    customIndicator: o.customIndicator
                };
                o.indicators && (n = r["default"].createElement(a["default"], h));
                var _ = (0, c.addClassName)("slider", o.className), y = this.renderSlides();
                return r["default"].createElement("div", {className: _}, y.length > 1 && e, y.length > 0 && r["default"].createElement("div", {
                    className: "slider_list",
                    onMouseEnter: this.onSliderOver.bind(this),
                    onMouseLeave: this.onSliderOut.bind(this),
                    style: l
                }, r["default"].createElement("div", {
                    className: "slider_wrapper",
                    ref: this.sliderWrapperRef,
                    style: this.state.wrapperStyle
                }, y)), y.length > 1 && t, y.length > 1 && n)
            }
        }]), Slider
    }();
    s.defaultProps = {
        autoPlay: !1,
        autoPlayInterval: 3e3,
        currentSlide: 0,
        customIndicator: function customIndicator() {
            return r["default"].createElement("i", null)
        },
        easeType: "ease-in-out",
        fade: !1,
        indicators: !0,
        infinite: !0,
        lazyLoad: !1,
        noChangeSelf: !1,
        pauseOnHover: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        vertical: !1
    };
    var u = s;
    t["default"] = u
}, function (e, t, n) {
    var r = n(94), o = Math.min;
    e.exports = function (e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.handleKeydown = function handleKeydown(e, t) {
        var n = t.downCallback, o = t.upCallback, i = t.escCallback, a = t.leftCallback, l = t.rightCallback,
            c = t.tabCallback;
        switch (e.keyCode) {
            case r["default"].SPACE:
            case r["default"].RETURN:
            case r["default"].DOWN:
                n && n();
                break;
            case r["default"].UP:
                o && o();
                break;
            case r["default"].ESC:
                i && i();
                break;
            case r["default"].LEFT:
                a && a();
                break;
            case r["default"].RIGHT:
                l && l();
                break;
            case r["default"].TAB:
                c && c()
        }
    };
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(182))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.getAreaLv4 = getAreaLv4, t.getAreaId = getAreaId, t["default"] = t.getJda = t.getUuid = t.getPin = void 0, n(12), n(10);
    var r = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(53)), o = n(26), i = n(4);

    function getAreaLv4() {
        var e = r.get("ipLoc-djd") || "";
        return /\d+-\d+-\d+-\d+/.test(e) ? e.replace(/-/g, "_") : ""
    }

    function getAreaId() {
        return r.get("areaId") || ""
    }

    var a = function getPin() {
        return r.get("pin") || ""
    };
    t.getPin = a;
    var l = function getUuid() {
        return (r.get("__jda") || "").split(".")[1]
    };
    t.getUuid = l;
    var c = function getJda() {
        return r.get("__jda")
    };
    t.getJda = c;
    var s = {
        jda: c(),
        pin: a(),
        uuid: l(),
        area: getAreaLv4(),
        areaId: getAreaId(),
        hash: (0, i.getHash)(l(), 1e4),
        unifiedHash: function getUnifiedHash() {
            var e = (0, i.isDebug)("unifiedHash") && (0, i.getParameterByName)("unifiedHash"), t = l();
            return (0, o.isString)(e) ? parseInt(e) : (0, i.getHash)(t, 1e4)
        }()
    };
    t["default"] = s
}, function (e, t, n) {
    n(70)("search", 1, function (e, t, n) {
        return [function search(n) {
            "use strict";
            var r = e(this), o = n == undefined ? undefined : n[t];
            return o !== undefined ? o.call(n, r) : new RegExp(n)[t](String(r))
        }, n]
    })
}, function (e, t, n) {
    var r = n(42), o = n(13), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
        return i[e] || (i[e] = t !== undefined ? t : {})
    })("versions", []).push({
        version: r.version,
        mode: n(54) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t, n) {
    var r = n(24), o = n(13).document, i = r(o) && r(o.createElement);
    e.exports = function (e) {
        return i ? o.createElement(e) : {}
    }
}, function (e, t, n) {
    var r = n(43);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function (e, t, n) {
    var r = n(79)("keys"), o = n(55);
    e.exports = function (e) {
        return r[e] || (r[e] = o(e))
    }
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    var r = n(23), o = n(151), i = n(83), a = n(82)("IE_PROTO"), l = function () {
    }, c = function () {
        var e, t = n(80)("iframe"), r = i.length;
        for (t.style.display = "none", n(96).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; r--;) delete c.prototype[i[r]];
        return c()
    };
    e.exports = Object.create || function create(e, t) {
        var n;
        return null !== e ? (l.prototype = r(e), n = new l, l.prototype = null, n[a] = e) : n = c(), t === undefined ? n : o(n, t)
    }
}, function (e, t, n) {
    var r = n(68), o = n(60), i = n(48), a = n(65), l = n(37), c = n(92), s = Object.getOwnPropertyDescriptor;
    t.f = n(19) ? s : function getOwnPropertyDescriptor(e, t) {
        if (e = i(e), t = a(t, !0), c) try {
            return s(e, t)
        } catch (n) {
        }
        if (l(e, t)) return o(!r.f.call(e, t), e[t])
    }
}, function (e, t, n) {
    var r = n(9)("unscopables"), o = Array.prototype;
    o[r] == undefined && n(38)(o, r, {}), e.exports = function (e) {
        o[r][e] = !0
    }
}, function (e, t, n) {
    "use strict";
    var r = n(23);
    e.exports = function () {
        var e = r(this), t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function (e, t, n) {
    "use strict";
    var r, o;
    Object.defineProperty(t, "__esModule", {value: !0}), t.addClassName = function addClassName(e, t) {
        var n = e;
        if (null === t || t === undefined || !1 === t) return n;
        return (n = (n = n || "").split(" ")).push(t), n = n.join(" ")
    }, t.extend = function extend(e, t) {
        if (!t) return e;
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }, t.getWidth = function getWidth(e) {
        if (!e) return 0;
        var t = e.getBoundingClientRect().width || e.offsetWidth;
        if (t > 0) return t;
        ((t = i(e, "width")) < 0 || null == t) && (t = e.style.width || 0);
        return t = parseFloat(t) || 0
    }, t.getHeight = function getHeight(e) {
        if (!e) return 0;
        var t = e.getBoundingClientRect().height || e.offsetHeight;
        if (t > 0) return t;
        ((t = i(e, "height")) < 0 || null == t) && (t = e.style.height || 0);
        return t = parseFloat(t) || 0
    }, t.slideAnimate = t.fadeOut = t.fadeIn = t.supportTransition = void 0, n(12), n(49), n(10), document.defaultView && document.defaultView.getComputedStyle && (r = function getComputedStyle(e, t) {
        var n, r, o, i = t.replace(/([A-Z]|^ms)/g, "-$1").toLowerCase();
        return (r = e.ownerDocument.defaultView) ? ((o = r.getComputedStyle(e, null)) && ("" !== (n = o.getPropertyValue(i)) || jQuery.contains(e.ownerDocument.documentElement, e) || (n = jQuery.style(e, i))), n) : undefined
    }), document.documentElement.currentStyle && (o = function currentStyle(e, t) {
        var n, r = e.currentStyle && e.currentStyle[t], o = e.runtimeStyle && e.runtimeStyle[t], i = e.style;
        return !/^-?\d+(?:px)?$/i.test(r) && /^-?\d/.test(r) && (n = i.left, o && (e.runtimeStyle.left = e.currentStyle.left), i.left = "fontSize" === t ? "1em" : r || 0, r = i.pixelLeft + "px", i.left = n, o && (e.runtimeStyle.left = o)), "" === r ? "auto" : r
    });
    var i = r || o,
        a = "transition" in document.documentElement.style || "WebkitTransition" in document.documentElement.style;
    t.supportTransition = a;
    t.fadeIn = function fadeIn(e, t, n, r) {
        if (e) {
            if (a) return e.style.opacity = 1, void (e.style.transition = "opacity ".concat(t, "ms ").concat(n));
            if (e.style.opacity = 0, e.style.filter = "alpha(opacity=0)", t) {
                var o = 0, i = null;
                i = setTimeout(function done() {
                    (o += 16 / t) >= 1 ? (i && clearTimeout(i), o = 1, e.style.opacity = o, e.style.filter = "alpha(opacity=".concat(100 * o, ")"), r && r()) : (e.style.opacity = o, e.style.filter = "alpha(opacity=".concat(100 * o, ")"), i && clearTimeout(i), i = setTimeout(done, 16))
                }, 16)
            } else e.style.opacity = 1, e.style.filter = "alpha(opacity=100)"
        }
    };
    t.fadeOut = function fadeOut(e, t, n, r) {
        if (e) {
            if (a) return e.style.opacity = 0, void (e.style.transition = "opacity ".concat(t, "ms ").concat(n));
            if (e.style.opacity = 1, e.style.filter = "alpha(opacity=100)", t) {
                var o = 1, i = null;
                i = setTimeout(function done() {
                    (o -= 16 / t) <= 0 ? (i && clearTimeout(i), o = 0, e.style.opacity = o, e.style.filter = "alpha(opacity=".concat(100 * o, ")"), r && r()) : (e.style.opacity = o, e.style.filter = "alpha(opacity=".concat(100 * o, ")"), i && clearTimeout(i), i = setTimeout(done, 16))
                }, 16)
            } else e.style.opacity = 0, e.style.filter = "alpha(opacity=0)"
        }
    };
    t.slideAnimate = function slideAnimate(e, t, n, r, o, i) {
        if (a) return e.style.msTransition = "msTransform ".concat(t, "ms ").concat(n), e.style.webkitTransition = "webkitTransform ".concat(t, "ms ").concat(n), e.style.transition = "transform ".concat(t, "ms ").concat(n), void (r ? (e.style.webkitTransform = "translate3d(0px, ".concat(i, "px, 0px)"), e.style.msTransform = "translateY(".concat(i, "px)"), e.style.transform = "translate3d(0px, ".concat(i, "px, 0px)")) : (e.style.webkitTransform = "translate3d(".concat(i, "px, 0px, 0px)"), e.style.msTransform = "translateX(".concat(i, "px)"), e.style.transform = "translate3d(".concat(i, "px, 0px, 0px)")));
        if (r ? e.top = "".concat(o, "px") : e.left = "".concat(o, "px"), t && i !== o) {
            var l = null, c = i - o, s = o;
            l = setTimeout(function done() {
                c > 0 ? (s += 30 * Math.abs(c / t)) >= i ? (l && clearTimeout(l), s = i, r ? e.style.marginTop = "".concat(s, "px") : e.style.marginLeft = "".concat(s, "px")) : (r ? e.style.marginTop = "".concat(s, "px") : e.style.marginLeft = "".concat(s, "px"), l && clearTimeout(l), l = setTimeout(done, 30)) : (s -= 30 * Math.abs(c / t)) <= i ? (l && clearTimeout(l), s = i, r ? e.style.marginTop = "".concat(s, "px") : e.style.marginLeft = "".concat(s, "px")) : (r ? e.style.marginTop = "".concat(s, "px") : e.style.marginLeft = "".concat(s, "px"), l && clearTimeout(l), l = setTimeout(done, 30))
            }, 16)
        } else r ? e.top = "".concat(i, "px") : e.left = "".concat(i, "px")
    }
}, function (e, t, n) {
    var r = n(13), o = n(42), i = n(54), a = n(91), l = n(22).f;
    e.exports = function (e) {
        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || l(t, e, {value: a.f(e)})
    }
}, function (e, t, n) {
    t.f = n(9)
}, function (e, t, n) {
    e.exports = !n(19) && !n(20)(function () {
        return 7 != Object.defineProperty(n(80)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    var r = n(37), o = n(48), i = n(149)(!1), a = n(82)("IE_PROTO");
    e.exports = function (e, t) {
        var n, l = o(e), c = 0, s = [];
        for (n in l) n != a && r(l, n) && s.push(n);
        for (; t.length > c;) r(l, n = t[c++]) && (~i(s, n) || s.push(n));
        return s
    }
}, function (e, t) {
    var n = Math.ceil, r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function (e, t, n) {
    var r = n(43);
    e.exports = Array.isArray || function isArray(e) {
        return "Array" == r(e)
    }
}, function (e, t, n) {
    var r = n(13).document;
    e.exports = r && r.documentElement
}, function (e, t, n) {
    var r = n(24), o = n(23), i = function (e, t) {
        if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
    };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, r) {
            try {
                (r = n(45)(Function.call, n(86).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
            } catch (o) {
                t = !0
            }
            return function setPrototypeOf(e, n) {
                return i(e, n), t ? e.__proto__ = n : r(e, n), e
            }
        }({}, !1) : undefined), check: i
    }
}, function (e, t, n) {
    var r = n(24), o = n(43), i = n(9)("match");
    e.exports = function (e) {
        var t;
        return r(e) && ((t = e[i]) !== undefined ? !!t : "RegExp" == o(e))
    }
}, function (e, t, n) {
    var r = n(43), o = n(9)("toStringTag"), i = "Arguments" == r(function () {
        return arguments
    }());
    e.exports = function (e) {
        var t, n, a;
        return e === undefined ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
                return e[t]
            } catch (n) {
            }
        }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}, function (e, t, n) {
    var r, o, i, a = n(45), l = n(161), c = n(96), s = n(80), u = n(13), f = u.process, d = u.setImmediate,
        p = u.clearImmediate, m = u.MessageChannel, h = u.Dispatch, _ = 0, y = {}, v = function () {
            var e = +this;
            if (y.hasOwnProperty(e)) {
                var t = y[e];
                delete y[e], t()
            }
        }, g = function (e) {
            v.call(e.data)
        };
    d && p || (d = function setImmediate(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return y[++_] = function () {
            l("function" == typeof e ? e : Function(e), t)
        }, r(_), _
    }, p = function clearImmediate(e) {
        delete y[e]
    }, "process" == n(43)(f) ? r = function (e) {
        f.nextTick(a(v, e, 1))
    } : h && h.now ? r = function (e) {
        h.now(a(v, e, 1))
    } : m ? (i = (o = new m).port2, o.port1.onmessage = g, r = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (r = function (e) {
        u.postMessage(e + "", "*")
    }, u.addEventListener("message", g, !1)) : r = "onreadystatechange" in s("script") ? function (e) {
        c.appendChild(s("script")).onreadystatechange = function () {
            c.removeChild(this), v.call(e)
        }
    } : function (e) {
        setTimeout(a(v, e, 1), 0)
    }), e.exports = {set: d, clear: p}
}, function (e, t, n) {
    "use strict";
    var r = n(66);
    e.exports.f = function (e) {
        return new function PromiseCapability(e) {
            var t, n;
            this.promise = new e(function (e, r) {
                if (t !== undefined || n !== undefined) throw TypeError("Bad Promise constructor");
                t = e, n = r
            }), this.resolve = r(t), this.reject = r(n)
        }(e)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(13), o = n(22), i = n(19), a = n(9)("species");
    e.exports = function (e) {
        var t = r[e];
        i && t && !t[a] && o.f(t, a, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (e, t, n) {
    var r = n(24), o = n(97).set;
    e.exports = function (e, t, n) {
        var i, a = t.constructor;
        return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && r(i) && o && o(e, i), e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(28), o = n(105)(6), i = "findIndex", a = !0;
    i in [] && Array(1)[i](function () {
        a = !1
    }), r(r.P + r.F * a, "Array", {
        findIndex: function findIndex(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : undefined)
        }
    }), n(87)(i)
}, function (e, t, n) {
    var r = n(45), o = n(81), i = n(61), a = n(75), l = n(171);
    e.exports = function (e, t) {
        var n = 1 == e, c = 2 == e, s = 3 == e, u = 4 == e, f = 6 == e, d = 5 == e || f, p = t || l;
        return function (t, l, m) {
            for (var h, _, y = i(t), v = o(y), g = r(l, m, 3), b = a(v.length), P = 0, O = n ? p(t, b) : c ? p(t, 0) : undefined; b > P; P++) if ((d || P in v) && (_ = g(h = v[P], P, y), e)) if (n) O[P] = _; else if (_) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return h;
                case 6:
                    return P;
                case 2:
                    O.push(h)
            } else if (u) return !1;
            return f ? -1 : s || u ? u : O
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.sendImprPlainLogo = function sendImprPlainLogo() {
        (0, f.reportExpose)({url: $("#logo a").attr("href"), poi: "head|logo|01"})
    }, t["default"] = void 0, n(1), n(2), n(12), n(5), n(25), n(78);
    var r = _interopRequireWildcard(n(17)), o = _interopRequireWildcard(n(16)), i = _interopRequireDefault(n(44)),
        a = _interopRequireDefault(n(21)), l = n(46), c = n(4), s = _interopRequireDefault(n(11)), u = n(185), f = n(6),
        d = n(186), p = _interopRequireDefault(n(187));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    n(189), n(190);
    var m = window.search, h = $(document.body);
    var _ = function init() {
        !function bindPhotoSearch() {
            $("#search").delegate(".photo-search-btn", "click", function () {
                (0, u.handlePhotoSearchBtnClick)()
            })
        }(), function initHotwords() {
            var e = $('<div id="J_searchbg" class="search_bg" />'), t = "".concat(o.CLSTAGPREFIX, "head|search"),
                n = [], f = 0;
            (0, s["default"])((0, c.isDebug)("search", ["noredword"]) ? r.HOTWORDS_TEST : r.HOTWORDS, {
                params: {
                    pin: i["default"].pin,
                    uuid: i["default"].uuid
                },
                backup: [r.HOTWORDS_BACKUP, r.HOTWORDS_STOBACKUP],
                name: "jsonpHotWords",
                dataCheck: function dataCheck(e) {
                    return e && 0 === Number(e.code) && Array.isArray(e.data) && e.data.length >= 8
                }
            }).then(function (r) {
                if (r && "object" === _typeof(r) && Array.isArray(r.data)) {
                    var o = r.data, i = "", c = [], s = [], p = 0, h = [], _ = [], y = 0, v = [], g = [], b = 0,
                        P = $("#key").css("background", "transparent").before(e), O = $("#search .button");
                    h = Array.isArray(o[0]) ? o[0].filter(function (e) {
                        return 1 === e.c
                    }) : [], o.slice(1).forEach(function (e, t) {
                        e.n && (2 === e.c ? c.push(e) : "" === e.c && v.push(e))
                    });
                    var w = function () {
                        var e = {};
                        return function (t) {
                            var n = t.n;
                            return !(n in e) && (e[n] = !0)
                        }
                    }();
                    if (h.forEach(function (e, t) {
                        y >= 4 || w(e) && (_.push(e), y++)
                    }), _.length) {
                        var E = _[0];
                        i += '<a href="'.concat(E.u, '" id="specHotWord" class="style-red" target="_blank" data-idx="').concat(f, '">\n        ').concat(E.n, "\n      </a>"), f += 1, n.push(E.ext_columns)
                    }
                    c.forEach(function (e, t) {
                        p >= 10 || w(e) && (s.push(e), p++)
                    }), v.forEach(function (e, t) {
                        b >= 9 || w(e) && (g.push(e), b++, i += '<a href="'.concat(e.u, '" target="_blank" data-idx="').concat(f, '">').concat(e.n, "</a>"), f += 1, n.push(e.ext_columns))
                    }), $("#hotwords").html(i).attr("aria-label", "热搜词"), $.each($("#hotwords a"), function (e, n) {
                        $(n).attr("clstag", "".concat(t, "_d0").concat(e + 1));
                        var r = (0, d.getJqReportParams)(n);
                        (0, u.searchHotwordsExpose)(r)
                    }), function initAutoSpecHotWords() {
                        var e = _.length;
                        if (e && 1 !== e) {
                            var t, r, o = 0, i = $("#specHotWord"), a = function setAutoSpecHotWords(n) {
                                clearTimeout(t), n && (r = _[o], i.html(r.n).attr("href", r.u), t = setTimeout(function () {
                                    o = (o + 1) % e, setAutoSpecHotWords(!0)
                                }, 3e3))
                            };
                            i.bind("mouseenter", function () {
                                a(!1)
                            }).bind("mouseleave", function () {
                                a(!0)
                            }), a(!0), $("#hotwords").delegate("a", "click", function () {
                                var e = $(this), t = e.data("idx"), r = n[t], o = e.text() ? e.text().trim() : "",
                                    i = e.attr("clstag") ? e.attr("clstag").split("_")[1] : "", a = e.attr("href");
                                (0, u.handleSearchHotwordsClick)(r, i, o, a)
                            })
                        }
                    }(), function initAutoSearchWords() {
                        if (s.length) {
                            var t, n, r = 0, o = s.length, i = !1, a = function hasChar() {
                                return /[^ ]/.test(P.val())
                            }, c = function setAutoSearchWords(a) {
                                clearTimeout(t), i = a, a && (n = s[r], e.html(n.n), t = setTimeout(function () {
                                    r = (r + 1) % o, setAutoSearchWords(!0)
                                }, 6e3))
                            };
                            P.bind("focus", function () {
                                c(!1), e.css("color", "#c8c8c8")
                            }).bind("blur", function () {
                                a() || (e.css("color", ""), c(!0))
                            }).bind("keydown", function (t) {
                                if (13 === t.keyCode) return a() ? m("key") : searchAlterWord(n), c(!1), !1;
                                (0, l.isCharacterKey)(t.keyCode) && e.html("")
                            }).bind("keyup", function () {
                                a() ? e.html("") : e.html(n.n)
                            }).removeAttr("onkeydown"), P.bind("click", function () {
                                (0, u.handleInputClick)()
                            }), O.bind("click", function (e) {
                                return i ? (0, u.handleSearchBtnClick)(n.ext_columns, n.u) : (0, u.handleSearchBtnClick)({text: P.val()}, ""), i ? searchAlterWord(n) : m("key"), c(!1), !1
                            }).removeAttr("onclick"), P.is(":focus") || c(!0), n && (0, u.searchAlterwordExpose)("c", n.n)
                        }
                    }()
                }

                function searchAlterWord(e) {
                    if (e.u) return a["default"].log("直达暗文：".concat(e.u)), void (location.href = e.u);
                    a["default"].log("搜索暗文：".concat(e.d || e.n)), m("key", e.d || e.n)
                }
            }), h.delegate("#shelper li", "click", function () {
                e.html("")
            })
        }(), function initSearchFix() {
            var e = $(window), t = $("#search"), n = !1, r = function judge() {
                e.scrollTop() > 660 && !1 === n ? (n = !0, t.addClass("search-fix")) : e.scrollTop() <= 660 && !0 === n && (n = !1, t.removeClass("search-fix"))
            };
            e.bind("scroll.searchFix", (0, c.throttle)(function () {
                r()
            }, 100)), r()
        }(), function initShoppingcart() {
            (0, p["default"])()
        }(), function initNavi() {
            $("#navitems").delegate(".navitems-lk", "click", function () {
                try {
                    var e = $(this), t = e.text().trim(), n = e.attr("href"),
                        r = (e.parent().attr("clstag") || "").split("_")[1];
                    (0, u.handleNaviClick)(r, t, n)
                } catch (o) {
                    a["default"].log(o)
                }
            })
        }()
    };
    t["default"] = _
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = t.TYPE_AD = void 0, n(1), n(2), n(3), n(25);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(21)), i = _interopRequireDefault(n(11)),
        a = _interopRequireDefault(n(39)), l = _interopRequireDefault(n(207)), c = _interopRequireDefault(n(212)),
        s = n(26), u = n(17), f = n(4);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    t.TYPE_AD = "ad";
    var d = function (e) {
        function Focus() {
            var e, t, n;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Focus);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return _possibleConstructorReturn(n, (t = n = _possibleConstructorReturn(this, (e = _getPrototypeOf(Focus)).call.apply(e, [this].concat(o))), function _defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }(_assertThisInitialized(_assertThisInitialized(n)), "state", {
                list: [],
                focusList: [],
                recommendList: []
            }), t))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(Focus, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Focus, [{
            key: "handleFocusRequest", value: function handleFocusRequest(e) {
                var t = this.props.onLoad, n = e.map(function (e) {
                    var t = e, n = (0, f.getRandomData)(t);
                    return n.src = (0, a["default"])(n.src, {resize: ["1180x940", "590x470"]}), n
                });
                this.setState({focusList: n}, function () {
                    t && t()
                })
            }
        }, {
            key: "handleRecommendRequest", value: function handleRecommendRequest(e) {
                for (var t = this.props.onLoad, n = e.map(function (e) {
                    return e.src = (0, a["default"])(e.src, {resize: ["380x300", "380x300"]}), e
                }), r = [], o = 0, i = n.length; o < i; o += 3) r.push(n.slice(o, o + 3));
                this.setState({recommendList: r}, function () {
                    t && t()
                })
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                var e = this;
                (0, i["default"])(u.FOCUS, {
                    speedID: 1, umpID: 1, name: "jsonpFocus", dataCheck: function dataCheck(e) {
                        var t = e.data, n = Number(e.code);
                        if (0 !== n) return !1;
                        var r = Array.isArray(t) && 8 === t.length && t.every(function (e) {
                            var t = e;
                            return !!Array.isArray(t) && (!t.some(function (e) {
                                return !e.href || !e.src
                            }) && !t.some(function (e) {
                                return !e.href || !e.src
                            }))
                        });
                        return !!r && !(0 !== n || !r)
                    }
                }).then(function (t) {
                    var n = t.data;
                    e.handleFocusRequest(n)
                })["catch"](function (t) {
                    o["default"].error("直出异常", t);
                    var n = e.handleBackupFocus(window.backup.focusbak);
                    e.handleFocusRequest(n)
                }), (0, i["default"])(u.RECOMMEND, {
                    speedID: 1,
                    umpID: 1,
                    name: "jsonpRecommend",
                    dataCheck: function dataCheck(e) {
                        var t = e.data, n = Number(e.code);
                        if (0 !== n) return !1;
                        var r = Array.isArray(t) && 9 === t.length;
                        return !!r && !(0 !== n || !r)
                    }
                }).then(function (t) {
                    var n = t.data;
                    e.handleRecommendRequest(n)
                })["catch"](function (t) {
                    o["default"].error("直出异常", t), e.handleRecommendRequest(window.backup.today)
                })
            }
        }, {
            key: "handleBackupFocus", value: function handleBackupFocus(e) {
                return e.map(function (e) {
                    var t = [];
                    return t.push(e), t
                })
            }
        }, {
            key: "render", value: function render() {
                var e = this.state, t = e.focusList, n = e.recommendList;
                return r["default"].createElement("div", {className: "focus__main"}, !(0, s.isEmpty)(t) && !(0, s.isEmpty)(n) && r["default"].createElement("div", {className: "focus-slider clearfix"}, r["default"].createElement(l["default"], {list: t}), " ", r["default"].createElement(c["default"], {list: n})))
            }
        }]), Focus
    }();
    t["default"] = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.handleClickFocusItem = function handleClickFocusItem(e, t) {
        var n = e.href, i = (0, o.padding)(t + 1, 2), a = $.extend({}, e.ext_columns);
        a.desc = "".concat(a.desc, "#"), a && a.ap && 0 === t && (a.desc = "".concat(a.desc).concat(a.ap));
        if (a && a.focustype) {
            var l = a.focustype || -1;
            a.desc = "".concat(a.desc, "#").concat(l)
        }
        r.reportClick(_objectSpread({poi: "head|focus|".concat(i), url: n}, a))
    }, t.handleClickRecommendItem = function handleClickRecommendItem(e, t, n) {
        var a = e.href, l = (0, o.padding)(t + 1, 2) + i[n], c = $.extend({}, e.ext_columns);
        c.desc || (c.desc = "");
        c.desc = "".concat(c.desc, "#"), c && c.ap && (c.desc = "".concat(c.desc).concat(c.ap));
        if (c && c.focustype) {
            var s = c.focustype || -1;
            c.desc = "".concat(c.desc, "#").concat(s)
        }
        r.reportClick(_objectSpread({poi: "head|rmd|".concat(l), url: a}, c))
    }, t.handleClickPreSlider = function handleClickPreSlider() {
        r.reportClick({poi: "head|focus|sl"})
    }, t.handleClickPreRecommendSlider = function handleClickPreRecommendSlider() {
        r.reportClick({poi: "head|rmd|sl"})
    }, t.handleClickNextSlider = function handleClickNextSlider() {
        r.reportClick({poi: "head|focus|sr"})
    }, t.handleClickNextRecommendSlider = function handleClickNextRecommendSlider() {
        r.reportClick({poi: "head|rmd|sr"})
    }, t.handleClickIndicator = function handleClickIndicator(e) {
        var t = (0, o.padding)(e + 1, 2);
        r.reportClick({poi: "head|focus|s".concat(t)})
    }, t.exposeFocusItem = function exposeFocusItem(e, t) {
        var n = e.href, i = (0, o.padding)(t + 1, 2), a = $.extend({}, e.ext_columns);
        a && a.ap && 0 === t && (a.desc = "".concat(a.desc, "#").concat(a.ap));
        r.reportExpose(_objectSpread({poi: "head|focus|".concat(i)}, a, {url: n}))
    }, t.exposeRecommendItem = function exposeRecommendItem(e, t, n) {
        var a = e.href, l = (0, o.padding)(t + 1, 2) + i[n], c = $.extend({}, e.ext_columns);
        c.desc || (c.desc = "");
        c && c.ap && (c.desc = "".concat(c.desc, "#").concat(c.ap));
        r.reportExpose(_objectSpread({poi: "head|rmd|".concat(l), url: a}, c))
    }, t.exposeAd = function exposeAd(e) {
        r.reportUrlExpose({clog: e})
    }, n(5), n(7), n(8);
    var r = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(6)), o = n(4);

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (t) {
                _defineProperty(e, t, n[t])
            })
        }
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var i = ["a", "b", "c"]
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = t.TYPE_AD = void 0, n(1), n(2), n(3), n(25);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(21)), i = _interopRequireDefault(n(11)),
        a = _interopRequireDefault(n(39)), l = _interopRequireDefault(n(215)), c = n(26), s = n(17), u = n(4);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    t.TYPE_AD = "ad";
    var f = function (e) {
        function FocusOld() {
            var e, t, n;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, FocusOld);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return _possibleConstructorReturn(n, (t = n = _possibleConstructorReturn(this, (e = _getPrototypeOf(FocusOld)).call.apply(e, [this].concat(o))), function _defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }(_assertThisInitialized(_assertThisInitialized(n)), "state", {list: []}), t))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(FocusOld, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(FocusOld, [{
            key: "handleRequest", value: function handleRequest(e) {
                var t = this.props.onLoad, n = e.map(function (e) {
                    var t = e.recommend, n = e.banner, r = (0, u.getRandomData)(n);
                    return r.src = (0, a["default"])(r.src, {resize: ["1180x940", "590x470"]}), {
                        banner: r,
                        recommend: t.slice(0, 3).map(function (e) {
                            return e.src = (0, a["default"])(e.src, {resize: ["380x300", "380x300"]}), e
                        })
                    }
                });
                this.setState({list: n}, function () {
                    t && t()
                })
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                var e = this;
                (0, i["default"])(s.FOCUS_OLD, {
                    speedID: 1,
                    umpID: 1,
                    name: "jsonpFocus",
                    dataCheck: function dataCheck(e) {
                        var t = e.data, n = Number(e.code);
                        if (0 !== n) return !1;
                        var r = Array.isArray(t) && 8 === t.length && t.every(function (e) {
                            var t = e.banner, n = e.recommend;
                            return !(!Array.isArray(t) || !Array.isArray(n)) && (!t.some(function (e) {
                                return !e.href || !e.src
                            }) && !t.some(function (e) {
                                return !e.href || !e.src
                            }))
                        });
                        return !!r && !(0 !== n || !r)
                    }
                }).then(function (t) {
                    var n = t.data;
                    e.handleRequest(n)
                })["catch"](function (t) {
                    o["default"].error("直出异常", t), e.handleRequest(window.backup.focus)
                })
            }
        }, {
            key: "render", value: function render() {
                var e = this.state.list;
                return r["default"].createElement("div", {className: "focus__main"}, !(0, c.isEmpty)(e) && r["default"].createElement(l["default"], {list: e}))
            }
        }]), FocusOld
    }();
    t["default"] = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.handleClickFocusItem = function handleClickFocusItem(e, t) {
        var n = e.href, i = (0, o.padding)(t + 1, 2), a = $.extend({}, e.ext_columns);
        a && a.ap && 0 === t && (a.desc = "".concat(a.desc, "#").concat(a.ap));
        if (a && a.focustype) {
            var l = a.focustype || -1;
            a.desc = "".concat(a.desc, "#").concat(l)
        }
        r.reportClick(_objectSpread({poi: "head|focus|".concat(i), url: n}, a))
    }, t.handleClickRecommendItem = function handleClickRecommendItem(e, t, n) {
        var a = e.href, l = (0, o.padding)(t + 1, 2) + i[n], c = $.extend({}, e.ext_columns);
        c && c.ap && [1, 4, 6, 7, 8].indexOf(t + 1) >= 0 && (c.desc = "".concat(c.desc, "#").concat(c.ap));
        if (c && c.focustype) {
            var s = c.focustype || -1;
            c.desc = "".concat(c.desc, "#").concat(s)
        }
        r.reportClick(_objectSpread({poi: "head|recom|".concat(l), url: a}, c))
    }, t.handleClickPreSlider = function handleClickPreSlider() {
        r.reportClick({poi: "head|focus|sl"})
    }, t.handleClickNextSlider = function handleClickNextSlider() {
        r.reportClick({poi: "head|focus|sr"})
    }, t.handleClickIndicator = function handleClickIndicator(e) {
        var t = (0, o.padding)(e + 1, 2);
        r.reportClick({poi: "head|focus|s".concat(t)})
    }, t.exposeFocusItem = function exposeFocusItem(e, t) {
        var n = e.ext_columns, i = e.href, a = (0, o.padding)(t + 1, 2);
        r.reportExpose(_objectSpread({poi: "head|focus|".concat(a)}, n, {url: i}))
    }, t.exposeRecommendItem = function exposeRecommendItem(e, t, n) {
        var a = e.ext_columns, l = e.href, c = (0, o.padding)(t + 1, 2) + i[n];
        r.reportExpose(_objectSpread({poi: "head|recom|".concat(c), url: l}, a))
    }, t.exposeAd = function exposeAd(e) {
        r.reportUrlExpose({clog: e})
    }, n(5), n(7), n(8);
    var r = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(6)), o = n(4);

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (t) {
                _defineProperty(e, t, n[t])
            })
        }
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var i = ["a", "b", "c"]
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(39)), i = _interopRequireDefault(n(33)),
        a = n(6), l = n(16);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    n(229);
    var c = "head|adbtn|", s = "".concat(l.CLSTAGPREFIX).concat("head|adbtn_"), u = function (e) {
        function Through(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Through), function _defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(Through).call(this, e)))), "onClick", function () {
                var e = t.props, n = e.isNew, r = e.href, o = e.src;
                (0, a.reportClick)({poi: "".concat(c).concat(t.getLogSuffix(n)), url: r, text: o})
            }), t.toogleQrcode(e), t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(Through, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Through, [{
            key: "toogleQrcode", value: function toogleQrcode(e) {
                var t = e.src, n = e.href, r = !e.isWide || !(t && n);
                $(".mobile_static").toggle(r)
            }
        }, {
            key: "componentWillReceiveProps", value: function componentWillReceiveProps(e) {
                var t = e.isNew, n = e.href, r = e.src;
                this.toogleQrcode(e), t !== this.props.isNew && (0, a.reportExpose)({
                    poi: "".concat(c).concat(this.getLogSuffix(t)),
                    url: n,
                    text: r
                })
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                var e = this.props, t = e.isNew, n = e.href, r = e.src, o = e.onLoad;
                (0, a.reportExpose)({poi: "".concat(c).concat(this.getLogSuffix(t)), url: n, text: r}), o && o()
            }
        }, {
            key: "getLogSuffix", value: function getLogSuffix(e) {
                return e ? "02" : "01"
            }
        }, {
            key: "render", value: function render() {
                var e = this.props, t = e.isNew, n = e.src, i = e.href,
                    a = {backgroundImage: "url(".concat((0, o["default"])(n), ")")};
                return r["default"].createElement("a", {
                    id: "J_promo_lk",
                    className: "promo_lk",
                    style: a,
                    href: i,
                    target: "_blank",
                    clstag: "".concat(s).concat(this.getLogSuffix(t)),
                    onClick: this.onClick,
                    "aria-label": "推广位"
                })
            }
        }]), Through
    }(), f = (0, i["default"])(u);
    t["default"] = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(32)), i = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(230)), a = _interopRequireDefault(n(33)), l = _interopRequireDefault(n(39)), c = n(26), s = n(4);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    n(231);
    var u = function (e) {
        function BackGround(e) {
            var t;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, BackGround), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(BackGround).call(this, e)))), "openAccordion", function () {
                t.isNewUser() && i.exposeNewUserExpand(), t.setState({isOpened: !0})
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "hideAccordion", function () {
                t.setState({isOpened: !1})
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "handleClickExpand", function (e) {
                t.isNewUser() ? i.handleClickNewUserExpand() : i.handleClickNormal("expand", {url: e})
            });
            var n = t.syncPropsToState(e);
            return t.state = n, t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(BackGround, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(BackGround, [{
            key: "isNewUser", value: function isNewUser() {
                return "new-user" === (arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props).type
            }
        }, {
            key: "componentWillReceiveProps", value: function componentWillReceiveProps(e) {
                var t = this.syncPropsToState(e);
                this.setState(t)
            }
        }, {
            key: "syncPropsToState", value: function syncPropsToState(e) {
                var t, n = this.props.onLoad;
                return this.isNewUser(e) ? (i.exposeNewUser(), n && n(), t = this.getNewUserData(e)) : t = this.getSimpleData(), t.isOpened = !1, t
            }
        }, {
            key: "getSimpleData", value: function getSimpleData() {
                var e = this.props.onLoad;
                if ((0, c.isEmpty)(pageConfig.background)) return e && e(), {};
                var t = pageConfig.background, n = t.leftBgPic, r = t.leftBgPicExpand, o = t.bothBgPic,
                    a = t.bothSBgPic, s = t.href, u = {href: s};
                return n && r ? (u.img = n, u.type = "accordion", u.expandImg = (0, l["default"])(r)) : a ? (u.type = "super-goalpost", u.img = a) : (u.type = "goalpost", u.img = o), u.img = (0, l["default"])(u.img), i.exposeNormal({url: s}), e && e(), u
            }
        }, {
            key: "getNewUserData", value: function getNewUserData(e) {
                var t = e.img, n = e.href, r = e.expandImg;
                return {href: n, type: "accordion", img: (0, l["default"])(t), expandImg: (0, l["default"])(r)}
            }
        }, {
            key: "render", value: function render() {
                var e = this.state, t = e.href, n = e.type, a = e.isOpened, l = e.img, c = e.expandImg,
                    u = "accordion" === n, f = "super-goalpost" === n, d = this.isNewUser(), p = u ? {
                        position: "absolute",
                        width: 1190,
                        height: 480,
                        left: "50%",
                        margin: "0 0 0 -595px"
                    } : {position: "absolute", height: f ? 710 : 480, left: "0", top: "0", margin: "0 0 0 0"},
                    m = (0, o["default"])("fs_act_wp", {fs_brand: u, fs_brand_active: a}),
                    h = {display: "block", background: "url(".concat(l, ") no-repeat 50% 0"), height: f ? 710 : 480};
                return u ? r["default"].createElement("div", {
                    clstag: (0, s.generateClstag)(d ? "head|adbacknew_02" : "head|adback_02"),
                    style: p,
                    className: m,
                    onMouseLeave: this.hideAccordion
                }, r["default"].createElement("a", {
                    id: "J_fs_act_lk",
                    href: "javascript:;",
                    className: "fs_act_lk J_fsbtn",
                    onMouseEnter: this.openAccordion
                }, r["default"].createElement("img", {
                    className: "fs_act_lk_img",
                    src: l
                })), r["default"].createElement("div", {className: "fs_act_banner J_fsbanner"}, r["default"].createElement("a", {
                    href: t,
                    className: "fs_act_banner_lk J_fs_act_banner_lk",
                    target: "_blank",
                    onClick: this.handleClickExpand.bind(this, t)
                }, r["default"].createElement("img", {src: c})), r["default"].createElement("span", {
                    className: "fs_act_banner_close iconfont J_fsbanner_close",
                    onClick: this.hideAccordion
                }, ""))) : t ? r["default"].createElement("div", {
                    clstag: "h|keycount|head|adback_01",
                    className: m,
                    style: p
                }, r["default"].createElement("a", {
                    id: "J_fs_act_lk",
                    className: "fs_act_lk",
                    target: "_blank",
                    href: t,
                    style: h,
                    onClick: i.handleClickNormal.bind(this, "goalpost", {url: t})
                })) : null
            }
        }]), BackGround
    }(), f = (0, a["default"])(u);
    t["default"] = f
}, function (e, t, n) {
    "use strict";
    var r;

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.LAYOUT_MAP = t.TYPES = void 0;
    var o = .832;

    function getRects(e, t) {
        return [{width: Math.round(e * o), height: Math.round(t * o)}, {width: e, height: t}]
    }

    var i = {A1: "A1", A2: "A2", S1: "S1", S2: "S2", S3: "S3"};
    t.TYPES = i;
    var a = (_defineProperty(r = {}, i.A1, {
        sku: {resize: ["380x480", "190x240"], clip: "190x240"},
        shop: {resize: ["380x230", "190x115"], clip: "190x115"},
        background: getRects(1350, 335)
    }), _defineProperty(r, i.A2, {
        sku: {resize: ["380x480", "190x240"], clip: "190x240"},
        background: getRects(1350, 335)
    }), _defineProperty(r, i.S1, {
        sku: {resize: ["380x420", "190x210"], clip: "190x210"},
        shop: {resize: ["380x200", "190x100"], clip: "190x100"},
        background: getRects(1340, 470)
    }), _defineProperty(r, i.S2, {
        sku: {resize: ["380x420", "190x210"], clip: "190x210"},
        shop: {resize: ["380x200", "190x100"], clip: "190x100"},
        background: getRects(1270, 590)
    }), _defineProperty(r, i.S3, {
        sku: {resize: ["380x400", "190x200"], clip: "190x200"},
        shop: {resize: ["380x200", "190x100"], clip: "190x100"},
        background: getRects(1340, 560)
    }), r);
    t.LAYOUT_MAP = a
}, function (e, t, n) {
    var r = n(23);
    e.exports = function (e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (a) {
            var i = e["return"];
            throw i !== undefined && r(i.call(e)), a
        }
    }
}, function (e, t, n) {
    var r = n(56), o = n(9)("iterator"), i = Array.prototype;
    e.exports = function (e) {
        return e !== undefined && (r.Array === e || i[o] === e)
    }
}, function (e, t, n) {
    var r = n(99), o = n(9)("iterator"), i = n(56);
    e.exports = n(42).getIteratorMethod = function (e) {
        if (e != undefined) return e[o] || e["@@iterator"] || i[r(e)]
    }
}, function (e, t, n) {
    var r = n(9)("iterator"), o = !1;
    try {
        var i = [7][r]();
        i["return"] = function () {
            o = !0
        }, Array.from(i, function () {
            throw 2
        })
    } catch (a) {
    }
    e.exports = function (e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var i = [7], l = i[r]();
            l.next = function () {
                return {done: n = !0}
            }, i[r] = function () {
                return l
            }, e(i)
        } catch (a) {
        }
        return n
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(245)), i = _interopRequireDefault(n(120));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(121);
    var a = function (e) {
        function FeedPlaceholder() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, FeedPlaceholder), _possibleConstructorReturn(this, _getPrototypeOf(FeedPlaceholder).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(FeedPlaceholder, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(FeedPlaceholder, [{
            key: "render", value: function render() {
                return r["default"].createElement("div", {className: "jd_container recommend__loading more2"}, r["default"].createElement("div", {className: "skeleton-headerBig skeleton-elementDark"}), r["default"].createElement(o["default"], null), r["default"].createElement(i["default"], null))
            }
        }]), FeedPlaceholder
    }();
    t["default"] = a
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var o = function (e) {
        function FeedGoodsPlaceholder() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, FeedGoodsPlaceholder), _possibleConstructorReturn(this, _getPrototypeOf(FeedGoodsPlaceholder).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(FeedGoodsPlaceholder, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(FeedGoodsPlaceholder, [{
            key: "render", value: function render() {
                for (var e = [], t = 0; t < 15; t++) e.push(r["default"].createElement("div", {className: "more2_item more2_item_good skeleton-block"}, r["default"].createElement("div", {className: "more2_img skeleton-element"}), r["default"].createElement("div", {className: "more2_info skeleton-element"})));
                return r["default"].createElement("div", {className: "more2_list more2__loading clearfix skeleton-wrapper"}, e)
            }
        }]), FeedGoodsPlaceholder
    }();
    t["default"] = o
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(247)), i = _interopRequireDefault(n(248));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    n(125);
    t["default"] = function _default() {
        return r["default"].createElement("div", {
            className: "seckill seckill__loading mod_lazyload",
            "aria-label": "京东秒杀",
            tabIndex: 0
        }, r["default"].createElement("div", {className: "jd_container seckill__inner skeleton-block skeleton-wrapper"}, r["default"].createElement("div", {className: "seckill-countdown skeleton-elementDark"}), r["default"].createElement(o["default"], null), r["default"].createElement(i["default"], null)))
    }
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(127);
    var o = function (e) {
        function ChannelsPlaceholder() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ChannelsPlaceholder), _possibleConstructorReturn(this, _getPrototypeOf(ChannelsPlaceholder).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ChannelsPlaceholder, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ChannelsPlaceholder, [{
            key: "render", value: function render() {
                for (var e = [], t = 0; t < 14; t++) e.push(r["default"].createElement("div", {className: "channels_item channels_item_".concat(t + 1, " skeleton-elementDark")}));
                return r["default"].createElement("div", {className: "channels channels__loading skeleton-wrapper"}, r["default"].createElement("div", {className: "skeleton-headerBig skeleton-elementDark"}), r["default"].createElement("div", {className: "slider slider_list"}, r["default"].createElement("div", {className: "channels_block channels_block_1"}, r["default"].createElement("div", {className: "channels_block_wrapper"}, e))))
            }
        }]), ChannelsPlaceholder
    }();
    t["default"] = o
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(129), n(130);
    var o = function (e) {
        function NiceGoodsPlaceholder() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, NiceGoodsPlaceholder), _possibleConstructorReturn(this, _getPrototypeOf(NiceGoodsPlaceholder).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(NiceGoodsPlaceholder, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(NiceGoodsPlaceholder, [{
            key: "render", value: function render() {
                for (var e = [], t = 0; t < 5; t++) e.push(r["default"].createElement("div", {className: "goods goods--".concat(t % 2 == 0 ? "bottom" : "top", " skeleton-element")}, r["default"].createElement("div", {className: "goods__image"})));
                return r["default"].createElement("div", {
                    className: "jd_container nice-goods nice-goods__loading skeleton-wrapper skeleton-block",
                    "aria-label": "发现好货",
                    tabIndex: 0
                }, r["default"].createElement("div", {className: "nice-goods__logo skeleton-elementDark"}), r["default"].createElement("div", {className: "nice-goods__recommends"}, r["default"].createElement("div", {className: "goods-list"}, e)))
            }
        }]), NiceGoodsPlaceholder
    }();
    t["default"] = o
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(132));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(134);
    var i = function (e) {
        function TopPlaceholder() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, TopPlaceholder), _possibleConstructorReturn(this, _getPrototypeOf(TopPlaceholder).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(TopPlaceholder, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(TopPlaceholder, [{
            key: "render", value: function render() {
                return r["default"].createElement("div", {className: "top grid_c2 skeleton-box skeleton-block"}, r["default"].createElement("div", {className: "skeleton-header skeleton-element"}), r["default"].createElement(o["default"], null))
            }
        }]), TopPlaceholder
    }();
    t["default"] = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));
    n(133);
    t["default"] = function _default() {
        for (var e = [], t = [], n = 0; n < 4; n++) e.push(r["default"].createElement("div", {className: "top_item top_item_".concat(n, " skeleton-element")}));
        for (var o = 0; o < 4; o++) t.push(r["default"].createElement("div", {className: "top_list_boards_lk skeleton-element"}));
        return r["default"].createElement("div", {className: "top_list skeleton-wrapper"}, e, r["default"].createElement("div", {className: "top_list_boards"}, t))
    }
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(136);
    var o = function (e) {
        function LightningBuyPlaceholder() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, LightningBuyPlaceholder), _possibleConstructorReturn(this, _getPrototypeOf(LightningBuyPlaceholder).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(LightningBuyPlaceholder, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(LightningBuyPlaceholder, [{
            key: "render", value: function render() {
                for (var e = [], t = 0; t < 6; t++) e.push(r["default"].createElement("div", {className: "other-item skeleton-element"}));
                return r["default"].createElement("div", {className: "lightning-buy__loading lightning-buy grid_c2 skeleton-box skeleton-block skeleton-wrapper"}, r["default"].createElement("div", {className: "skeleton-header skeleton-element"}), r["default"].createElement("div", {className: "lightning-buy__container"}, r["default"].createElement("div", {className: "goods-core skeleton-element"}), r["default"].createElement("div", {className: "goods-others"}, e)))
            }
        }]), LightningBuyPlaceholder
    }();
    t["default"] = o
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(138);
    var o = function (e) {
        function CouponPlaceholder() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, CouponPlaceholder), _possibleConstructorReturn(this, _getPrototypeOf(CouponPlaceholder).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(CouponPlaceholder, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(CouponPlaceholder, [{
            key: "render", value: function render() {
                for (var e = [], t = 0; t < 3; t++) e.push(r["default"].createElement("div", {className: "coupon_item skeleton-element"}, r["default"].createElement("div", {className: "coupon_lk"})));
                return r["default"].createElement("div", {className: "box coupon skeleton-box skeleton-block"}, r["default"].createElement("div", {className: "skeleton-header skeleton-element"}), r["default"].createElement("div", {className: "coupon_inner skeleton-wrapper"}, r["default"].createElement("div", {className: "coupon_list"}, e)))
            }
        }]), CouponPlaceholder
    }();
    t["default"] = o
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(140);
    var o = function (e) {
        function CouponPlaceholder() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, CouponPlaceholder), _possibleConstructorReturn(this, _getPrototypeOf(CouponPlaceholder).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(CouponPlaceholder, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(CouponPlaceholder, [{
            key: "render", value: function render() {
                for (var e = [], t = 0; t < 2; t++) e.push(r["default"].createElement("div", {className: "shop-item skeleton-element"}));
                return r["default"].createElement("div", {className: "box nice-shop skeleton-box skeleton-block"}, r["default"].createElement("div", {className: "skeleton-header skeleton-element"}), r["default"].createElement("div", {className: "nice-shop__container skeleton-wrapper"}, e))
            }
        }]), CouponPlaceholder
    }();
    t["default"] = o
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(142);
    var o = function (e) {
        function CouponPlaceholder() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, CouponPlaceholder), _possibleConstructorReturn(this, _getPrototypeOf(CouponPlaceholder).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(CouponPlaceholder, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(CouponPlaceholder, [{
            key: "render", value: function render() {
                return r["default"].createElement("div", {className: "box discover__loading discover skeleton-box skeleton-block"}, r["default"].createElement("div", {className: "skeleton-header skeleton-element"}), r["default"].createElement("div", {className: "discover_slider skeleton-wrapper"}, r["default"].createElement("div", {className: "slider_list"}, r["default"].createElement("div", {className: "discover_item_img skeleton-element"}), r["default"].createElement("div", {className: "discover_item_name skeleton-element"}), r["default"].createElement("div", {className: "discover_item_author skeleton-element"}))))
            }
        }]), CouponPlaceholder
    }();
    t["default"] = o
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(144);
    var o = function (e) {
        function CouponPlaceholder() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, CouponPlaceholder), _possibleConstructorReturn(this, _getPrototypeOf(CouponPlaceholder).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(CouponPlaceholder, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(CouponPlaceholder, [{
            key: "render", value: function render() {
                for (var e = [], t = 0; t < 3; t++) e.push(r["default"].createElement("div", {className: "new_arrival_item skeleton-element"}, r["default"].createElement("div", {className: "new_arrival_item_img"})));
                return r["default"].createElement("div", {className: "box new_arrival__loading new_arrival skeleton-box skeleton-block skeleton-last"}, r["default"].createElement("div", {className: "skeleton-header skeleton-element"}), r["default"].createElement("div", {className: "new_arrival_wrapper skeleton-wrapper"}, r["default"].createElement("div", {className: "new_arrival_item_main skeleton-element"}), e))
            }
        }]), CouponPlaceholder
    }();
    t["default"] = o
}, function (e, t, n) {
}, , function (e, t, n) {
    "use strict";
    n(1), n(2), n(3), n(153), n(176), n(177);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(0)), i = _interopRequireDefault(n(40)),
        a = _interopRequireDefault(n(178)), l = _interopRequireDefault(n(235)), c = _interopRequireDefault(n(238)),
        s = _interopRequireDefault(n(242)), u = _interopRequireDefault(n(244)), f = _interopRequireDefault(n(246)),
        d = _interopRequireDefault(n(249)), p = _interopRequireDefault(n(250)), m = _interopRequireDefault(n(251)),
        h = _interopRequireDefault(n(252)), _ = _interopRequireDefault(n(253)), y = _interopRequireDefault(n(261)),
        v = _interopRequireDefault(n(262)), g = n(4), b = n(27), P = n(63), O = n(46), w = n(106);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(263);
    var E = i["default"].get("isActivityTime"), C = function (e) {
        function App() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, App), _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(App, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(App, [{
            key: "componentDidMount", value: function componentDidMount() {
                var e = this;
                (0, O.bindHotkey)(), (0, P.loadedPromise)().then(function () {
                    return e.checkCookie(), (0, O.loadLegacy)()
                }).then(function () {
                    return (0, c["default"])(), (0, g.delay)(3e3)
                }).then(function () {
                    E && function loadToolbar() {
                        n.e(17).then(n.t.bind(null, 264, 7)).then(function (e) {
                            e["default"]()
                        })
                    }()
                })
            }
        }, {
            key: "checkCookie", value: function checkCookie() {
                (new Image).src = "http://lapi.jd.com/cookie/check?source=pc-home"
            }
        }, {
            key: "render", value: function render() {
                return r["default"].createElement("div", {id: "J_app"}, r["default"].createElement(f["default"], null), r["default"].createElement(y["default"], null), r["default"].createElement(v["default"], null), r["default"].createElement("div", {id: "J_spec"}, r["default"].createElement(m["default"], null), r["default"].createElement(p["default"], null), r["default"].createElement(h["default"], null)), r["default"].createElement(d["default"], null), r["default"].createElement(u["default"], null), r["default"].createElement(l["default"], null), (0, b.isIE)(8) ? null : r["default"].createElement(_["default"], null))
            }
        }]), App
    }();
    (0, a["default"])(), (0, b.isIE)(8) ? (0, w.sendImprPlainLogo)() : (0, s["default"])(), o["default"].render(r["default"].createElement(C, null), document.querySelector("#app"))
}, function (e, t, n) {
    var r = n(55)("meta"), o = n(24), i = n(37), a = n(22).f, l = 0, c = Object.isExtensible || function () {
        return !0
    }, s = !n(20)(function () {
        return c(Object.preventExtensions({}))
    }), u = function (e) {
        a(e, r, {value: {i: "O" + ++l, w: {}}})
    }, f = e.exports = {
        KEY: r, NEED: !1, fastKey: function (e, t) {
            if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!i(e, r)) {
                if (!c(e)) return "F";
                if (!t) return "E";
                u(e)
            }
            return e[r].i
        }, getWeak: function (e, t) {
            if (!i(e, r)) {
                if (!c(e)) return !0;
                if (!t) return !1;
                u(e)
            }
            return e[r].w
        }, onFreeze: function (e) {
            return s && f.NEED && c(e) && !i(e, r) && u(e), e
        }
    }
}, function (e, t, n) {
    var r = n(47), o = n(84), i = n(68);
    e.exports = function (e) {
        var t = r(e), n = o.f;
        if (n) for (var a, l = n(e), c = i.f, s = 0; l.length > s;) c.call(e, a = l[s++]) && t.push(a);
        return t
    }
}, function (e, t, n) {
    var r = n(48), o = n(75), i = n(150);
    e.exports = function (e) {
        return function (t, n, a) {
            var l, c = r(t), s = o(c.length), u = i(a, s);
            if (e && n != n) {
                for (; s > u;) if ((l = c[u++]) != l) return !0
            } else for (; s > u; u++) if ((e || u in c) && c[u] === n) return e || u || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var r = n(94), o = Math.max, i = Math.min;
    e.exports = function (e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
}, function (e, t, n) {
    var r = n(22), o = n(23), i = n(47);
    e.exports = n(19) ? Object.defineProperties : function defineProperties(e, t) {
        o(e);
        for (var n, a = i(t), l = a.length, c = 0; l > c;) r.f(e, n = a[c++], t[n]);
        return e
    }
}, function (e, t, n) {
    var r = n(48), o = n(69).f, i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function getOwnPropertyNames(e) {
        return a && "[object Window]" == i.call(e) ? function (e) {
            try {
                return o(e)
            } catch (t) {
                return a.slice()
            }
        }(e) : o(r(e))
    }
}, function (e, t, n) {
    "use strict";
    n(1), n(2), n(12), n(5), n(18);
    var r = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(53)), o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(40)), i = n(26), a = n(63), l = n(4), c = n(27);

    function _slicedToArray(e, t) {
        return function _arrayWithHoles(e) {
            if (Array.isArray(e)) return e
        }(e) || function _iterableToArrayLimit(e, t) {
            var n = [], r = !0, o = !1, i = undefined;
            try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (c) {
                o = !0, i = c
            } finally {
                try {
                    r || null == l["return"] || l["return"]()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    var s = window._, u = window.pageConfig, f = function () {
        var e = null;
        return function () {
            return e || (e = new Promise(function (e) {
                var t = o["default"].getCookie("webp");
                if ((0, i.isBoolean)(t)) return e(t);
                var n = new Image;
                n.onload = function () {
                    var t = n.width > 0 && n.height > 0;
                    o["default"].setCookie("webp", t), e(t)
                }, n.onerror = function () {
                    o["default"].setCookie("webp", !1), e(!1)
                }, n.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA"
            }))
        }
    }(), d = function () {
        var e = $("html"), t = function fn() {
            var t = window.innerWidth >= 1350;
            u.isWide !== t && (u.isWide = t, e.toggleClass("o2_mini", !t), e.toggleClass("o2_wide root61", t), s.eventCenter.trigger("isWideChange", {isWide: t}))
        };
        return t(), (0, l.throttle)(t, 500, {leading: !1})
    }();
    f(), function exportGlobal() {
        window.cookiesController = r
    }(), function getDebugInfo() {
        var e = (0, l.getParameterByName)("debug"), t = {};
        e && e.split("|").forEach(function (e) {
            var n = _slicedToArray(e.split("_"), 2), r = n[0], o = n[1];
            t[r] = o ? o.split("-") : []
        }), o["default"].set("debugInfo", t)
    }(), function fillRootClass() {
        $(window.document.body).toggleClass("o2_mac", (0, c.isMac)()), $(window.document.body).toggleClass("o2_window", (0, c.isWindows)())
    }(), function watchFloorLoaded() {
        s.eventCenter.on("floorLoaded", function (e) {
            "fs" !== e && $("#J_".concat(e)).removeAttr("data-loading")
        })
    }(), function requestAnimationFramePolyfill() {
        for (var e = 0, t = ["webkit", "moz"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (t) {
            var n = (new Date).getTime(), r = Math.max(0, 16 - (n - e)), o = window.setTimeout(function () {
                t(n + r)
            }, r);
            return e = n + r, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        })
    }(), (0, a.loadedPromise)().then(function () {
        !function handleIPad() {
            if ((0, c.isIPad)()) {
                var e = document.createElement("script");
                e.src = "//nfa.jd.com/loadFa.js?aid=2_955_8766", document.body.appendChild(e)
            }
        }(), function insertSafelyCode() {
            var e = document.createElement("script");
            e.src = "http://h5.360buyimg.com/ws_js/jdwebm.js?v=pcHome", document.body.appendChild(e)
        }()
    }), window.addEventListener("resize", d)
}, function (e, t) {
    e.exports = function (e, t) {
        return {value: t, done: !!e}
    }
}, function (e, t, n) {
    "use strict";
    var r = n(54), o = n(28), i = n(30), a = n(38), l = n(56), c = n(156), s = n(67), u = n(157), f = n(9)("iterator"),
        d = !([].keys && "next" in [].keys()), p = function () {
            return this
        };
    e.exports = function (e, t, n, m, h, _, y) {
        c(n, t, m);
        var v, g, b, P = function (e) {
                if (!d && e in C) return C[e];
                switch (e) {
                    case"keys":
                        return function keys() {
                            return new n(this, e)
                        };
                    case"values":
                        return function values() {
                            return new n(this, e)
                        }
                }
                return function entries() {
                    return new n(this, e)
                }
            }, O = t + " Iterator", w = "values" == h, E = !1, C = e.prototype, k = C[f] || C["@@iterator"] || h && C[h],
            S = k || P(h), j = h ? w ? P("entries") : S : undefined, T = "Array" == t && C.entries || k;
        if (T && (b = u(T.call(new e))) !== Object.prototype && b.next && (s(b, O, !0), r || "function" == typeof b[f] || a(b, f, p)), w && k && "values" !== k.name && (E = !0, S = function values() {
            return k.call(this)
        }), r && !y || !d && !E && C[f] || a(C, f, S), l[t] = S, l[O] = p, h) if (v = {
            values: w ? S : P("values"),
            keys: _ ? S : P("keys"),
            entries: j
        }, y) for (g in v) g in C || i(C, g, v[g]); else o(o.P + o.F * (d || E), t, v);
        return v
    }
}, function (e, t, n) {
    "use strict";
    var r = n(85), o = n(60), i = n(67), a = {};
    n(38)(a, n(9)("iterator"), function () {
        return this
    }), e.exports = function (e, t, n) {
        e.prototype = r(a, {next: o(1, n)}), i(e, t + " Iterator")
    }
}, function (e, t, n) {
    var r = n(37), o = n(61), i = n(82)("IE_PROTO"), a = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function (e, t) {
    e.exports = function (e, t, n, r) {
        if (!(e instanceof t) || r !== undefined && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function (e, t, n) {
    var r = n(45), o = n(114), i = n(115), a = n(23), l = n(75), c = n(116), s = {}, u = {};
    (t = e.exports = function (e, t, n, f, d) {
        var p, m, h, _, y = d ? function () {
            return e
        } : c(e), v = r(n, f, t ? 2 : 1), g = 0;
        if ("function" != typeof y) throw TypeError(e + " is not iterable!");
        if (i(y)) {
            for (p = l(e.length); p > g; g++) if ((_ = t ? v(a(m = e[g])[0], m[1]) : v(e[g])) === s || _ === u) return _
        } else for (h = y.call(e); !(m = h.next()).done;) if ((_ = o(h, v, m.value, t)) === s || _ === u) return _
    }).BREAK = s, t.RETURN = u
}, function (e, t, n) {
    var r = n(23), o = n(66), i = n(9)("species");
    e.exports = function (e, t) {
        var n, a = r(e).constructor;
        return a === undefined || (n = r(a)[i]) == undefined ? t : o(n)
    }
}, function (e, t) {
    e.exports = function (e, t, n) {
        var r = n === undefined;
        switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function (e, t, n) {
    var r = n(13), o = n(100).set, i = r.MutationObserver || r.WebKitMutationObserver, a = r.process, l = r.Promise,
        c = "process" == n(43)(a);
    e.exports = function () {
        var e, t, n, s = function () {
            var r, o;
            for (c && (r = a.domain) && r.exit(); e;) {
                o = e.fn, e = e.next;
                try {
                    o()
                } catch (i) {
                    throw e ? n() : t = undefined, i
                }
            }
            t = undefined, r && r.enter()
        };
        if (c) n = function () {
            a.nextTick(s)
        }; else if (!i || r.navigator && r.navigator.standalone) if (l && l.resolve) {
            var u = l.resolve(undefined);
            n = function () {
                u.then(s)
            }
        } else n = function () {
            o.call(r, s)
        }; else {
            var f = !0, d = document.createTextNode("");
            new i(s).observe(d, {characterData: !0}), n = function () {
                d.data = f = !f
            }
        }
        return function (r) {
            var o = {fn: r, next: undefined};
            t && (t.next = o), e || (e = o, n()), t = o
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return {e: !1, v: e()}
        } catch (t) {
            return {e: !0, v: t}
        }
    }
}, function (e, t, n) {
    var r = n(13).navigator;
    e.exports = r && r.userAgent || ""
}, function (e, t, n) {
    var r = n(23), o = n(24), i = n(101);
    e.exports = function (e, t) {
        if (r(e), o(t) && t.constructor === e) return t;
        var n = i.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function (e, t, n) {
    var r = n(30);
    e.exports = function (e, t, n) {
        for (var o in t) r(e, o, t[o], n);
        return e
    }
}, function (e, t, n) {
    var r = n(28), o = n(59), i = n(20), a = n(168), l = "[" + a + "]", c = RegExp("^" + l + l + "*"),
        s = RegExp(l + l + "*$"), u = function (e, t, n) {
            var o = {}, l = i(function () {
                return !!a[e]() || "​" != "​"[e]()
            }), c = o[e] = l ? t(f) : a[e];
            n && (o[n] = c), r(r.P + r.F * l, "String", o)
        }, f = u.trim = function (e, t) {
            return e = String(o(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(s, "")), e
        };
    e.exports = u
}, function (e, t) {
    e.exports = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"
}, function (e, t, n) {
    var r = n(28);
    r(r.S, "Number", {
        isNaN: function isNaN(e) {
            return e != e
        }
    })
}, function (e, t, n) {
    n(19) && "g" != /./g.flags && n(22).f(RegExp.prototype, "flags", {configurable: !0, get: n(88)})
}, function (e, t, n) {
    var r = n(172);
    e.exports = function (e, t) {
        return new (r(e))(t)
    }
}, function (e, t, n) {
    var r = n(24), o = n(95), i = n(9)("species");
    e.exports = function (e) {
        var t;
        return o(e) && ("function" != typeof (t = e.constructor) || t !== Array && !o(t.prototype) || (t = undefined), r(t) && null === (t = t[i]) && (t = undefined)), t === undefined ? Array : t
    }
}, function (e, t, n) {
    var r = n(28), o = n(42), i = n(20);
    e.exports = function (e, t) {
        var n = (o.Object || {})[e] || Object[e], a = {};
        a[e] = t(n), r(r.S + r.F * i(function () {
            n(1)
        }), "Object", a)
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), function (e) {
        var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;
        var i = function shouldUseNative() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e]
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                    r[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (o) {
                return !1
            }
        }() ? Object.assign : function (e, t) {
            for (var i, a, l = function toObject(e) {
                if (null === e || e === undefined) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), c = 1; c < arguments.length; c++) {
                for (var s in i = Object(arguments[c])) r.call(i, s) && (l[s] = i[s]);
                if (n) {
                    a = n(i);
                    for (var u = 0; u < a.length; u++) o.call(i, a[u]) && (l[a[u]] = i[a[u]])
                }
            }
            return l
        }, a = encodeURIComponent;

        function isFunction(e) {
            return "function" == typeof e
        }

        var l = ("undefined" != typeof window ? window : e).localStorage, c = {
            disabled: !1, set: function set(e, t) {
                return void 0 === t ? c.remove(e) : (l.setItem(e, c.serialize(t)), t)
            }, get: function get(e, t) {
                var n = c.deserialize(l.getItem(e));
                return n === undefined ? t : n
            }, remove: function remove(e) {
                l.removeItem(e)
            }, clear: function clear() {
                l.clear()
            }, has: function has(e) {
                return void 0 !== c.get(e)
            }, forEach: function forEach(e) {
                for (var t = 0; t < l.length; t++) {
                    var n = l.key(t);
                    e(n, c.get(n))
                }
            }, getAll: function getAll() {
                var e = {};
                return c.forEach(function (t, n) {
                    e[t] = n
                }), e
            }, serialize: function serialize(e) {
                return JSON.stringify(e)
            }, deserialize: function deserialize(e) {
                if ("string" == typeof e) try {
                    return JSON.parse(e)
                } catch (t) {
                    return e || void 0
                }
            }
        };
        try {
            c.set("__store__", "__store__"), "__store__" !== c.get("__store__") && (c.disabled = !0), c.remove("__store__")
        } catch (g) {
            c.disabled = !0
        }
        c.enabled = !c.disabled;
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, u = "undefined" != typeof window ? window : e, f = "Promise" in u && s(isFunction(Promise)),
            d = function noop() {
            }, p = encodeURIComponent, m = u.document, h = m ? m.head || m.getElementsByTagName("head")[0] : null,
            _ = 2e3, y = {
                timeout: _,
                retryTimes: 2,
                backup: null,
                params: {},
                jsonp: "callback",
                name: null,
                cache: !1,
                useStore: !1,
                storeCheck: null,
                storeSign: null,
                storeCheckKey: null,
                dataCheck: null,
                charset: "UTF-8"
            }, v = (new Date).getTime();

        function generateJsonpUrlWithParams(e, t) {
            return t = "string" == typeof t ? t : function serializeParams(e) {
                return e ? Object.keys(e).map(function (t) {
                    return t + "=" + a(e[t])
                }).join("&") : ""
            }(t), e = (e += (~e.indexOf("?") ? "&" : "?") + t).replace("?&", "?")
        }

        function fetchData(e, t, n) {
            var r = t.originalUrl, o = t.charset, i = function getUrlQueryParamByName(e, t) {
                e || (e = window.location.href), t = t.replace(/[[]]/g, "\\$&");
                var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
            }(e, t.jsonp), a = "?" !== i && i || t.name || "__jsonp" + v++, l = arguments[3] || null;
            i ? "?" === i && (e = function updateQueryStringParamByName(e, t, n) {
                var r = new RegExp("([?&])" + t + "=.*?(&|$)", "i"), o = -1 !== e.indexOf("?") ? "&" : "?";
                return e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : e + o + t + "=" + n
            }(e, t.jsonp, p(a))) : e += ("&" === e.split("").pop() ? "" : "&") + t.jsonp + "=" + p(a), t.cache || (e += ("&" === e.split("").pop() ? "" : "&") + "_=" + (new Date).getTime()), clearTimeout(u["timer_" + a]);
            var c = u[a];
            u[a] = function (e) {
                if (c && c(e), cleanup(a), l && (e.__$$backupCall = l), t.dataCheck) {
                    if (!1 !== t.dataCheck(e)) return setDataToStore({
                        useStore: t.useStore,
                        storeKey: r,
                        data: e
                    }), n(null, e);
                    !1 === fallback(r, t, n) && n(new Error("Data check error, and no fallback"))
                } else setDataToStore({useStore: t.useStore, storeKey: r, data: e}), n(null, e)
            };
            var s = function appendScriptTagToHead(e) {
                var t = e.url, n = e.charset;
                if (!m) return;
                var r = m.createElement("script");
                r.type = "text/javascript", n && (r.charset = n);
                return r.src = t, h.appendChild(r), r
            }({url: e, charset: o}), f = null != t.timeout ? t.timeout : _;

            function cleanup(e) {
                s.parentNode && s.parentNode.removeChild(s), u[e] = d, clearTimeout(u["timer_" + e])
            }

            u["timer_" + a] = setTimeout(function () {
                return cleanup(a), "number" == typeof t.retryTimes && t.retryTimes > 0 ? (t.retryTimes--, fetchData(r, t, n)) : !1 === fallback(r, t, n) ? n(new Error("Timeout and no data return")) : void 0
            }, f)
        }

        function storeCheckFn(e, t, n) {
            return !!(e && t && n) && (e[t] && e[t] === n)
        }

        function setDataToStore(e) {
            var t = e.useStore, n = e.storeKey, r = e.data;
            (t = !!t && c.enabled) && c.set(n, r)
        }

        function fallback(e, t, n) {
            var r = t.backup;
            if (r) {
                if ("string" == typeof r) return delete t.backup, fetchData(generateJsonpUrlWithParams(r, t.params), t, n, {backup: r});
                if (Array.isArray(r) && r.length) {
                    var o = r.shift();
                    return fetchData(generateJsonpUrlWithParams(o, t.params), t, n, {backup: o})
                }
            }
            var i = function getDataFromStoreWithoutCheck(e) {
                var t = e.useStore, n = e.storeKey, r = e.dataCheck;
                if (t = !!t && c.enabled) {
                    var o = c.get(n);
                    if (!r || o && r && !1 !== r(o)) return o
                }
                return null
            }({useStore: t.useStore, storeKey: e, dataCheck: t.dataCheck});
            return !!i && (n(null, i), !0)
        }

        t["default"] = function jsonp$1(e, t, n) {
            if (isFunction(e) ? (n = e, t = {}) : e && "object" === (void 0 === e ? "undefined" : s(e)) && (n = t, e = (t = e || {}).url), isFunction(t) && (n = t, t = {}), t || (t = {}), t = i({}, y, t), e = e || t.url, n = n || d, !e || "string" != typeof e) return n(new Error("Param url is needed!")), !jsonp$1.promiseClose && f ? new Promise(function (e, t) {
                return t(new Error("Param url is needed!"))
            }) : void 0;
            var r = generateJsonpUrlWithParams(e, t.params), o = function getDataFromStore(e) {
                var t = e.useStore, n = e.storeKey, r = e.storeCheck, o = e.storeCheckKey, i = e.storeSign,
                    a = e.dataCheck;
                if (t = !!t && c.enabled) {
                    var l = c.get(n);
                    if ((r = r || storeCheckFn)(l, o, i) && (!a || l && a && !1 !== a(l))) return l
                }
                return null
            }({
                useStore: t.useStore,
                storeKey: r,
                storeCheck: t.storeCheck,
                storeCheckKey: t.storeCheckKey,
                storeSign: t.storeSign,
                dataCheck: t.dataCheck
            });
            return o ? (n(null, o), !jsonp$1.promiseClose && f ? new Promise(function (e) {
                return e(o)
            }) : void 0) : (t.originalUrl = r, !jsonp$1.promiseClose && f ? new Promise(function (e, o) {
                fetchData(r, t, function (t, r) {
                    if (t) return n(t), o(t);
                    n(null, r), e(r)
                })
            }) : void fetchData(r, t, n))
        }
    }.call(this, n(175))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (r) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";
    n(10), n(35);
    var r = "%c本页面由%c 凹凸实验室（JDC-多终端研发部） %c负责开发，你可以通过 https://aotu.io 了解我们。\n\n如果你对我们在做的事情也有兴趣，欢迎加入 %caotu@jd.com%c（注明来自console）\n\n",
        o = "%c本项目骄傲的使用了 凹凸实验室 出品的Nerv框架，相关内容及生态你可以通过官网了解更多。\nhttps://nerv.aotu.io/%c\n\n", i = "%c%c";
    !function o2Console() {
        if (window.console && console.log && navigator.userAgent.toLowerCase().match(/chrome\/([\d.]+)/)) {
            var e = r + o + i;
            e = "%c" + (e = e.replace(/%c/g, "")), console.log(e, "color: #6190e8;")
        }
    }()
}, function (e, t, n) {
    "use strict";
    n(51), n(52), n(10), n(12);
    var r = _interopRequireDefault(n(71)), o = _interopRequireDefault(n(11)), i = n(58), a = n(27);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var l = window.point || {start: 0, css: 0, fs: 0, dom: 0, js: 0};
    var c = function () {
        function BadJS() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, BadJS)
        }

        return function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(BadJS, null, [{
            key: "processStackMsg", value: function processStackMsg(e) {
                var t = e.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@"), n = e.toString();
                return t.indexOf(n) < 0 && (t = n + "@" + t), t
            }
        }, {
            key: "isOBJByType", value: function isOBJByType(e, t) {
                return Object.prototype.toString.call(e) === "[object " + (t || "Object") + "]"
            }
        }, {
            key: "handleError", value: function handleError(e, t, n, r, i) {
                var a = e;
                i && i.stack && (a = BadJS.processStackMsg(i)), BadJS.isOBJByType(a, "Event") && (a += a.type ? "--" + a.type + "--" + (a.target ? a.target.tagName + "::" + a.target.src : "") : ""), o["default"].sendReport("http://wq.jd.com/webmonitor/collect/badjs.json", {
                    v: Date.now(),
                    Content: "2019_PC首页 - ".concat(a)
                }), BadJS.originalError && BadJS.originalError.apply(window, arguments)
            }
        }]), BadJS
    }();
    _defineProperty(c, "originalError", window.onerror), function main() {
        setTimeout(function () {
            var e, t = l.start, n = l.css, o = l.fs, c = l.dom, s = l.js, u = function getBrowserPoint() {
                return (0, a.isChrome)() ? 7 : (0, a.isSafari)() ? 8 : (0, a.isEdge)() ? 9 : (0, a.isFirefox)() ? 10 : (0, a.isIE)(11) ? 11 : (0, a.isIE)(10) ? 12 : (0, a.isIE)(9) ? 13 : (0, a.isIE)(8) ? 14 : 15
            }(), f = function getPlatformPoint() {
                return (0, a.isWindows)() ? 16 : (0, a.isMac)() ? 17 : 18
            }();
            r["default"].reportAlone((_defineProperty(e = {
                s1: o - t,
                s3: n - t,
                s4: c - t,
                s5: s - t
            }, "s".concat(u), 1), _defineProperty(e, "s".concat(f), 1), e), i.SPEED_PID_BASE)
        }, 1e3)
    }(), window.onerror = c.handleError, $(window).bind("load", function initialize() {
        var e = Date.now(), t = l.start;
        r["default"].reportAlone({s6: e - t}, i.SPEED_PID_BASE)
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(14), n(1), n(2), n(18), n(5), n(7);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(0)), i = _interopRequireDefault(n(40)),
        a = _interopRequireDefault(n(180)), l = _interopRequireDefault(n(183)), c = _interopRequireDefault(n(106)),
        s = _interopRequireDefault(n(191)), u = _interopRequireDefault(n(107)), f = _interopRequireDefault(n(109)),
        d = _interopRequireDefault(n(221)), p = _interopRequireDefault(n(222)), m = _interopRequireDefault(n(226)),
        h = _interopRequireDefault(n(227)), _ = _interopRequireDefault(n(111)), y = _interopRequireDefault(n(112)),
        v = _interopRequireDefault(n(232)), g = _interopRequireDefault(n(33)), b = _interopRequireDefault(n(233)),
        P = n(41);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function _slicedToArray(e, t) {
        return function _arrayWithHoles(e) {
            if (Array.isArray(e)) return e
        }(e) || function _iterableToArrayLimit(e, t) {
            var n = [], r = !0, o = !1, i = undefined;
            try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (c) {
                o = !0, i = c
            } finally {
                try {
                    r || null == l["return"] || l["return"]()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    n(234);
    t["default"] = function _default() {
        new l["default"]({$el: $(".J_cate"), $wrapper: $(".fs")}).init(), (0, c["default"])(), (0, s["default"])();
        var e = document.getElementById("J_focus"),
            t = (0, g["default"])((0, b["default"])([u["default"], f["default"]], [{start: 0, end: 5e3}, {
                start: 5e3,
                end: 1e4
            }]));
        o["default"].render(r["default"].createElement(t, {onLoad: v["default"].onLoad}), e);
        var O = $(".logo_extend");
        o["default"].render(r["default"].createElement(d["default"], {onLoad: v["default"].onLoad}), O[0]);
        var w = document.getElementById("J_fs_act");
        o["default"].render(r["default"].createElement(y["default"], {onLoad: v["default"].onLoad}), w);
        var E = document.getElementById("J_user");
        o["default"].render(r["default"].createElement(p["default"], {onLoad: v["default"].onLoad}), E);
        var C = document.getElementById("treasure");
        o["default"].render(r["default"].createElement(_["default"], _extends({}, pageConfig.treasure, {onLoad: v["default"].onLoad})), C);
        var k = document.getElementById("J_news");
        o["default"].render(r["default"].createElement(m["default"], {onLoad: v["default"].onLoad}), k), function renderPromotionalTop() {
            var e = i["default"].get("isActivityTime"), t = document.getElementById("J_promotional-top");
            e ? n.e(11).then(n.t.bind(null, 266, 7)).then(function (e) {
                var n = e["default"];
                o["default"].render(r["default"].createElement(n, null), t)
            }) : Promise.all([(0, P.getNewuserinfo)(), (0, P.getCompanyinfo)()]).then(function (e) {
                var i = _slicedToArray(e, 2), a = i[0], l = i[1];
                a.isNew && !l.isCompany || n.e(12).then(n.t.bind(null, 267, 7)).then(function (e) {
                    var n = e["default"];
                    o["default"].render(r["default"].createElement(n, null), t)
                })
            })
        }(), new h["default"]({container: $("#J_service")}).init();
        var S = document.getElementById("J_accessibility");
        o["default"].render(r["default"].createElement(a["default"], null), S)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(47), o = n(84), i = n(68), a = n(61), l = n(81), c = Object.assign;
    e.exports = !c || n(20)(function () {
        var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function (e) {
            t[e] = e
        }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
    }) ? function assign(e, t) {
        for (var n = a(e), c = arguments.length, s = 1, u = o.f, f = i.f; c > s;) for (var d, p = l(arguments[s++]), m = u ? r(p).concat(u(p)) : r(p), h = m.length, _ = 0; h > _;) f.call(p, d = m[_++]) && (n[d] = p[d]);
        return n
    } : c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(71)), i = _interopRequireDefault(n(32)),
        a = n(181), l = n(76);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var c = {search: 20, sort: 21}, s = {search: "search", sort: "sort"}, u = function (e) {
        function Accessibility(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Accessibility), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(Accessibility).call(this, e)))), "handleFocus", function () {
                t.state.isFocused || (o["default"].reportAlone({s2: 1}, a.SPEED_PID_BASE), t.setState({isFocused: !0}))
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "handleClick", function (e) {
                var t = c[e];
                switch (t && o["default"].reportAlone(_defineProperty({}, "s".concat(t), 1), a.SPEED_PID_BASE), e) {
                    case s.search:
                        $("#search .form .text").focus();
                        break;
                    case s.sort:
                        $(".cate_menu_lk")[0].focus()
                }
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "handleKeyDown", function (e, n) {
                (0, l.handleKeydown)(n, {downCallback: t.handleClick.bind(_assertThisInitialized(_assertThisInitialized(t)), e)})
            }), t.state = {isFocused: !1}, t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(Accessibility, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Accessibility, [{
            key: "render", value: function render() {
                var e = this.state.isFocused;
                return r["default"].createElement("div", {className: (0, i["default"])("accessibility", {accessibility_focus: e})}, r["default"].createElement("a", {
                    role: "link",
                    tabIndex: 0,
                    onClick: this.handleClick.bind(this, s.search),
                    onKeyDown: this.handleKeyDown.bind(this, s.search),
                    onFocus: this.handleFocus
                }, "跳至搜索框"), r["default"].createElement("a", {
                    role: "link",
                    tabIndex: 0,
                    onClick: this.handleClick.bind(this, s.sort),
                    onKeyDown: this.handleKeyDown.bind(this, s.sort),
                    onFocus: this.handleFocus
                }, "跳至商品分类"))
            }
        }]), Accessibility
    }();
    t["default"] = u
}, function (e, t, n) {
    "use strict";
    n(7), n(8), n(5), Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(6);
    Object.keys(r).forEach(function (e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0, get: function get() {
                return r[e]
            }
        })
    });
    var o = n(58);
    Object.keys(o).forEach(function (e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0, get: function get() {
                return o[e]
            }
        })
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    t["default"] = {
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        SPACE: 32,
        PAGEUP: 33,
        PAGEDOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(5), n(7), n(8), n(10), n(12), n(29);
    var r = _interopRequireDefault(n(44)), o = _interopRequireDefault(n(21)), i = _interopRequireDefault(n(11)),
        a = _interopRequireDefault(n(39)), l = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(17)), c = n(4), s = n(184);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var u = function () {
        function Cate(e) {
            var t = this;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Cate), _defineProperty(this, "initEvent", function () {
                var e = t, n = t.conf.$el, r = t.conf.$wrapper, o = null, i = null, a = null, l = !1;
                n.addClass("cate".concat($(".cate_menu_item").length)), n.bind("mouseenter", function () {
                    i && clearTimeout(i), i = setTimeout(function () {
                        l || (l = !0, t.initSubCate())
                    }, 200), r.css("zIndex", 13)
                }).one("mousemove", function () {
                    a && clearTimeout(a), a = setTimeout(function () {
                        l || (l = !0, t.initSubCate())
                    }, 200)
                }).bind("mouseleave", function () {
                    n.find(".cate_menu_item").removeClass("hover"), r.css("zIndex", 9)
                }).delegate(".cate_menu_item", "mouseenter", function (e) {
                    o && clearTimeout(o), o = setTimeout(function () {
                        t.conf.isPopMenuBinded || (t._hoverel = $(e.currentTarget), t.$popCtn.show())
                    }, 200)
                }).bind("mouseleave", function () {
                    o && clearTimeout(o), i && clearTimeout(i), t.conf.isPopMenuBinded || t.$popCtn.hide()
                }).delegate(".cate_menu_lk", "click", function () {
                    var t = $(this), n = t.parent().attr("clstag");
                    e.postClickLog(t, n)
                }).delegate(".cate_channel_lk", "click", function () {
                    e.postClickLog($(this), $(this).attr("clstag"))
                }).delegate(".cate_detail_tit_lk", "click", function () {
                    var t = $(this), n = t.parent().attr("clstag");
                    e.postClickLog(t, n)
                }).delegate(".cate_detail_con_lk", "click", function () {
                    var t = $(this), n = t.parent().attr("clstag");
                    e.postClickLog(t, n)
                }).delegate(".cate_brand_lk", "click", function () {
                    e.postClickLog($(this), $(this).attr("clstag"))
                }).delegate(".cate_promotion_lk", "click", function () {
                    e.postClickLog($(this), $(this).attr("clstag"))
                })
            }), _defineProperty(this, "postSendImpl", function (e) {
                try {
                    t._sideImplTimer && clearTimeout(t._sideImplTimer), t._sideImplTimer = setTimeout(function () {
                        if (e.hasClass("cate_menu_item_on")) {
                            var t = e.data("index"), n = e.find(".cate_menu_lk").map(function (e, t) {
                                return (t.innerText || "").trim()
                            }).get().join("/");
                            (0, s.expose)("".concat((0, c.padding)(t, 2), "a"), n)
                        }
                    }, 1e3)
                } catch (n) {
                    o["default"].log(n)
                }
            }), _defineProperty(this, "postClickLog", function (e, t) {
                try {
                    var n = e, r = t.split("_")[1], i = n.attr("href"), a = n.text().trim();
                    (0, s.postClick)(r, i, a)
                } catch (l) {
                    o["default"].log(l)
                }
            }), _defineProperty(this, "initSubCate", function () {
                var e = t.conf.$el;
                t.conf.isSubDataLoaded || t.getSubCateData(t.conf.type, function () {
                    var r = $("#J_popCtn");
                    n.e(16).then(n.t.bind(null, 268, 7)).then(function (n) {
                        new (0, n["default"])({
                            $container: e,
                            navItemHook: ".cate_menu_item",
                            navItemOn: "cate_menu_item_on",
                            popItemHook: ".cate_part",
                            itemEnterCallBack: function itemEnterCallBack(n) {
                                var o = $(window).scrollTop(), i = e.offset().top, a = 0;
                                o > i && (a = o - i), r.css({top: a}), $("img", n.$displayEl).each(function (e, n) {
                                    t.loadImg(n)
                                }), t.postSendImpl(n.$item)
                            }
                        }).checkRun(), t.$popCtn.is(":hidden") || t._hoverel.trigger("mouseenter.itemEnter"), t.conf.isPopMenuBinded = !0
                    })
                })
            }), _defineProperty(this, "getSubCateData", function (e, n) {
                var r = t.conf;
                (0, i["default"])(r.dataUrl, {
                    charset: r.scriptCharset,
                    cache: !0,
                    name: "getCategoryCallback",
                    backup: r.dataBackupUrl,
                    dataCheck: function dataCheck(e) {
                        return !!(e && e.data && e.data.length)
                    }
                }).then($.proxy(function (e) {
                    this.render(e), this.conf.isSubDataLoaded = !0, n && n()
                }, t))
            }), _defineProperty(this, "render", function (e) {
                var n, r, o, i, a, l, c, s, u, f, d, p, m, h, _, y, v, g, b, P = e.data, O = t.padding, w = "",
                    E = function clstagPrefix(e, t, n, r) {
                        return "h|keycount|head|category_" + Array.prototype.slice.call(arguments).join("")
                    }, C = P.length;
                for (n = 0; n < C; n++) {
                    for (v = '<div class="cate_part_col1">', g = '<div class="cate_part_col2">', _ = "", i = (r = P[n]).t.length, o = 0; o < i; o++) _ += t.getLinkHtml({
                        str: r.t[o],
                        linkClass: "cate_channel_lk",
                        imagesWidth: null,
                        imagesHeight: 24,
                        level: null,
                        textPrefix: null,
                        textSuffix: '<i class="iconfont cate_channel_arrow">&#xe601;</i>',
                        clstag: E(O(n), "b", O(o))
                    });
                    for (v += _ = '<div class="cate_channel">' + _ + "</div>", h = "", i = r.s.length, o = 0; o < i; o++) for (c = (a = r.s[o]).s.length, l = 0; l < c; l++) {
                        if (s = a.s[l].s, d = t.getLinkHtml({
                            str: a.s[l].n,
                            linkClass: "cate_detail_tit_lk",
                            imagesWidth: null,
                            imagesHeight: null,
                            level: 2,
                            textPrefix: null,
                            textSuffix: '<i class="iconfont cate_detail_tit_arrow">&#xe601;</i>'
                        }), m = '<dt class="cate_detail_tit" clstag="' + E(O(n), "c", O(l)) + '">' + d + "</dt>", p = "", 0 !== s) for (f = s.length, u = 0; u < f; u++) p += t.getLinkHtml({
                            str: s[u].n,
                            linkClass: "cate_detail_con_lk",
                            imagesWidth: null,
                            imagesHeight: 16,
                            level: 3,
                            textPrefix: null,
                            textSuffix: null,
                            index: u
                        });
                        h += '<dl class="cate_detail_item cate_detail_item' + (l + 1) + '">' + m + (p = '<dd class="cate_detail_con" clstag="' + E(O(n), "d", O(l)) + '">' + p + "</dd>") + "</dl>"
                    }
                    for (v += (h = '<div class="cate_detail">' + h + "</div>") + "</div>", y = "", i = r.b.length, o = 0; o < i; o++) o < 8 && (y += t.getLinkHtml({
                        str: r.b[o],
                        linkClass: "cate_brand_lk",
                        imagesWidth: 83,
                        imagesHeight: 35,
                        clstag: E(O(n), "e", O(o))
                    }));
                    for (g += y = '<div class="cate_brand">' + y + "</div>", b = "", i = r.p.length, o = 0; o < i; o++) o < 2 && (b += t.getLinkHtml({
                        str: r.p[o],
                        linkClass: "cate_promotion_lk",
                        imagesWidth: 168,
                        imagesHeight: 134,
                        clstag: E(O(n), "f", O(o))
                    }));
                    g += (b = '<div class="cate_promotion">' + b + "</div>") + "</div>", w += '<div class="cate_part clearfix" id="cate_item' + (n + 1) + '" data-id="' + r.id + '">' + v + g + "</div>"
                }
                t.$popCtn.html(w).removeClass("mod_loading")
            }), this.conf = function _objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function (t) {
                        _defineProperty(e, t, n[t])
                    })
                }
                return e
            }({$el: null, $wrapper: null}, e)
        }

        return function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Cate, [{
            key: "init", value: function init() {
                var e = this.conf, t = e.$el.attr("data-type"), n = pageConfig.leftCateABtestSwitch;
                e.type = t || "home", e.isSubDataLoaded = !1, e.isPopMenuBinded = !1, e.dataUrl = l.CATEA, e.dataBackupUrl = l.CATEA_STOBACKUP, e.scriptCharset = "gb2312";
                var o = r["default"].jda, i = !0;
                if (n && "string" == typeof o) {
                    var a = pageConfig.leftCateABtestSection || {start: 1e3, end: 2e3}, c = r["default"].unifiedHash;
                    c > a.start && c <= a.end && (i = !1)
                }
                "boolean" == typeof pageConfig.isCateUseA ? pageConfig.isCateUseA || (e.dataUrl = l.CATEB, e.dataBackupUrl = l.CATEB_BACKUP, e.scriptCharset = "utf-8") : i || (e.dataUrl = l.CATEB, e.dataBackupUrl = l.CATEB_BACKUP, e.scriptCharset = "utf-8"), pageConfig.leftCateABtestUseA = i, e.imgIndex = 0, this.$popCtn = $(".JS_popCtn", this.conf.$el), this.loaded = !1, this.initEvent()
            }
        }, {
            key: "loadImg", value: function loadImg(e) {
                var t = e.getAttribute("data-lazy-img"), n = new Image, r = !1;
                if (n.onload = function () {
                    r ? n.onload = null : (e.src = t, r = !0, n.onload = null)
                }, n.src = t, n.complete) {
                    if (r) return void (n.onload = null);
                    e.src = t, r = !0, n.onload = null
                }
            }
        }, {
            key: "padding", value: function padding(e) {
                return (e < 9 ? "0" : "") + (1 + e)
            }
        }, {
            key: "getLinkHtml", value: function getLinkHtml(e) {
                var t = e.str, n = e.linkClass, r = e.imagesWidth, o = e.imagesHeight, i = e.level, l = e.textPrefix,
                    c = e.textSuffix, s = e.index, u = e.clstag ? ' clstag="' + e.clstag + '"' : "",
                    f = ["".concat(2 * r, "x").concat(2 * o), "".concat(r, "x").concat(o)], d = t.split("|"), p = [],
                    m = "";
                d[0] = d[0].replace(/ /g, "");
                var h = /^\d.*\d$/.test(d[0]) ? d[0] : d[0].replace(/^(http:\/\/|\/\/)/, "");
                void 0 !== i && /^\d.*\d$/.test(d[0]) && (2 === i ? h = "channel.jd.com/" + d[0] + ".html" : 3 === i && (2 === d[0].split("-").length ? h = "channel.jd.com/" + d[0] + ".html" : 3 === d[0].split("-").length && (h = "list.jd.com/list.html?cat=" + d[0].replace(/-/g, ",")))), h = "//" + h, "https:" === location.protocol && Cate.NO_HTTPS_DOMAIN_REG.test(h) && (h = "http:" + h), d[2], n && p.push(n), p.length > 0 && (m = 'class="' + p.join(" ") + '"');
                var _ = "";
                (_ = d[0] ? '<a href="' + h + '" ' + m + u + ' target="_blank">' : "<span " + m.replace(/lk/, "txt") + ">", d[2]) ? (this.conf.imgIndex > 4 && (this.conf.imgIndex = 0), r = r ? ' width="' + r + '"' : "", o = o ? ' height="' + o + '"' : "", _ += '<img data-lazy-img="' + (0, a["default"])("//img1".concat(this.conf.imgIndex, ".360buyimg.com/").concat(d[2]), {resize: f}) + '"  ' + r + o + ' src="http://misc.360buyimg.com/mtd/pc/common/img/blank.png" data-webp="no"/>', this.conf.imgIndex += 1) : _ += (l || "") + d[1] + (c || "");
                return d[0] ? _ += "</a>" : _ += "</span>", 3 === i && 0 === s && 1 === parseInt(d[3], 10) && d[0] && (p.push(n + "_hot"), _ = '<a href="' + h + '" ' + (m = 'class="' + p.join(" ") + '"') + ' target="_blank"><i class="cate_con_hot_l"></i>' + (l || "") + d[1] + (c || "") + '<i class="cate_con_hot_r"></i></a>'), _
            }
        }]), Cate
    }();
    _defineProperty(u, "NO_HTTPS_DOMAIN_REG", /^\/\/(car\.jd\.com|group\.jd\.com|huishou\.jd\.com|dujia\.jd\.com)/);
    var f = u;
    t["default"] = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.expose = function expose(e, t) {
        r.reportExpose({poi: "".concat(o).concat(e), text: t})
    }, t.postClick = function postClick(e, t, n) {
        r.reportClick({poi: "".concat(o).concat(e), url: t, text: n})
    };
    var r = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(6));
    var o = "head|category|"
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.searchHotwordsExpose = function searchHotwordsExpose(e) {
        r.reportExpose(e)
    }, t.searchAlterwordExpose = function searchAlterwordExpose(e, t) {
        r.reportExpose({poi: "".concat(o).concat(e), text: t})
    }, t.handlePhotoSearchBtnClick = function handlePhotoSearchBtnClick() {
        r.reportClick({poi: "".concat(o, "b")})
    }, t.handleSearchHotwordsClick = function handleSearchHotwordsClick(e, t, n, i) {
        r.reportClick(_objectSpread({}, e, {poi: "".concat(o).concat(t), text: n, url: i}))
    }, t.handleInputClick = function handleInputClick() {
        r.reportClick({poi: a})
    }, t.handleSearchBtnClick = function handleSearchBtnClick(e, t) {
        r.reportClick(_objectSpread({}, e, {poi: i, url: t}))
    }, t.handleNaviClick = function handleNaviClick(e, t, n) {
        r.reportClick({poi: "".concat(l).concat(e), text: t, url: n})
    }, n(5), n(7), n(8);
    var r = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(6));

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (t) {
                _defineProperty(e, t, n[t])
            })
        }
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var o = "head|search|", i = "head|search|a", a = "head|search|c", l = "head|navi|"
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.getJqReportParams = function getJqReportParams(e) {
        var t, n;
        e.target && e.currentTarget ? (t = $(e.target), n = $(e.currentTarget)) : (t = $(e), n = t);
        var o = t.text() || null, i = t.closest("a").eq(0).attr("href") || null;
        i = /javascript/.test(i) ? null : i;
        var a = (n.attr("clstag") || "").match(/h\|keycount\|([\s\S]+)$/), l = a ? a[1] : null,
            c = {text: o, url: i, poi: l}, s = t.closest("[data-log]").eq(0).attr("data-log") || "{}",
            u = JSON.parse(decodeURIComponent(s));
        return r.forEach(function (e) {
            u[e] && (c[e] = u[e])
        }), c
    }, n(35);
    var r = ["text", "url", "desc", "mcinfo", "biclk"]
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(12), n(35), n(29);
    var r = _interopRequireWildcard(n(53)), o = _interopRequireDefault(n(188)), i = _interopRequireDefault(n(11)),
        a = _interopRequireWildcard(n(15)), l = n(6);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }

    $("#settleup").removeClass("dropdown").addClass("dropdown").find(".dropdown-layer").removeClass("dropdown-layer").addClass("dropdown-layer");
    var c = [10, 11, 12, 13, 14, 20, 30], s = function getImageDomain(e) {
        var t = String(e).match(/(\d)/);
        return t = t && t[1] ? t[1] : String(10 * Math.random()).substring(0, 1), "//img".concat(c[t % 7], ".360buyimg.com/")
    }, u = {
        el: null,
        init: function init() {
            var e = this;
            e.el = $("#settleup"), e.el.find(".ci-right").html("&gt;"), e.el.find(".dropdown-layer").html('<div id="J_cart_pop"><span class="loading"></span></div>'), e.el.find(".cw-icon .ci-right").after('<i class="ci-count" id="shopping-amount"></i>'), null != e.DATA_Amount && $("#shopping-amount").text(e.DATA_Amount), null != this.el && (this.el.bind("mouseenter", function () {
                e.FN_Refresh()
            }), this.el.bind("click", function () {
                (0, l.reportClick)({poi: "head|cart|null", url: "//cart.jd.com/cart.action"})
            }))
        },
        DATA_Cookie: "cn",
        DATA_Amount: r.get("cn") || "0",
        URL_Serv: "http://cart.jd.com/cart/miniCartServiceNew.action",
        TPL_NoGoods: '\n    <div class="cart_pop">\n      <div class="cart_empty">\n        <i class="cart_empty_img"></i>\n        购物车中还没有商品，赶紧选购吧！\n      </div>\n    </div>',
        TPL_List: {
            wrap: '\n      <div id="J_cart_pop" class="cart_pop">\n        <div class="cart_hd">\n          <h4 class="cart_hd_title">最新加入的商品</h4>\n        </div>\n        <div class="cart_bd J_cart_bd"></div>\n        <div class="cart_ft">\n          <div class="cart_ft_info">\n            共<span class="cart_num">{%= o.Num %}</span>件商品 共计<span class="cart_num">&yen; {%= o.TotalPromotionPrice.toFixed(2) %}</span>\n          </div>\n          <a class="cart_ft_lk" href="{%= o.URLS.SHOPPINGCART %}" title="去购物车">去购物车</a>\n        </div>\n      </div>',
            single: '\n      <ul class="cart_singlelist">\n        {% $.each(o.TheSkus, function (k, list) { %}\n          <li class="cart_item">\n            <div class="cart_item_inner">\n              <div class="cart_img">\n                <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                  <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                </a>\n              </div>\n              <div class="cart_name">\n                <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n              </div>\n              <div class="cart_info">\n                <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                {% if (parseInt(list.FanPrice) > 0) { %}\n                  <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                {% } %}\n                {% if (parseInt(list.Score) > 0) { %}\n                  <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                {% } %}\n                <a class="cart_delete J_delete" data-id="{%= list.Id %}" data-method="RemoveProduct" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n              </div>\n              {% $.each(list.CouponAD, function (k, jq) { %}\n                <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}京券 {%= jq.LimitAd %}\n              </div>\n              {% }); %}\n            </div>\n          </li>\n        {% }); %}\n      </ul>',
            gift: '\n      <ul class="cart_giftlist">\n        {% $.each(o.TheGifts, function (k, list) { %}\n          <li class="cart_item">\n            <div class="cart_item_inner">\n              <div class="cart_img">\n                <a class="cart_img_lk" href="//item.jd.com/{%= list.MainSKU.Id %}.html" target="_blank">\n                  <img src="{%= o.getImageDomain(list.MainSKU.Id) %}n5/{%= list.MainSKU.ImgUrl %}" width="50" height="50" alt="">\n                </a>\n              </div>\n              <div class="cart_name">\n                <a class="cart_name_lk" href="//item.jd.com/{%= list.MainSKU.Id %}.html" title="{%= list.MainSKU.Name %}" target="_blank">{%= list.MainSKU.Name %}</a>\n              </div>\n              <div class="cart_info">\n                <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                {% if (parseInt(list.FanPrice) > 0) { %}\n                  <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                {% } %}\n                {% if (parseInt(list.Score) > 0) { %}\n                  <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                {% } %}\n                <a class="cart_delete J_delete" data-id="{%= list.MainSKU.Id %}" data-method="RemoveProduct" data-type="{%= list.MainSKU.ItemType %}" href="javascript:;">删除</a>\n              </div>\n              {% $.each(list.Skus, function (k, gift) { %}\n                <div class="cart_gift">\n                  <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                </div>\n              {% }); %}\n              {% $.each(list.CouponAD, function (k, jq) { %}\n                <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n              </div>\n              {% }); %}\n            </div>\n          </li>\n        {% }); %}\n      </ul>',
            suit: '\n      <ul class="cart_suitlist">\n        {% $.each(o.TheSuit, function (k, suit) { %}\n          {% var isVirtual = !!suit.VskuId; %}\n          <li class="cart_item cart_suit{%= isVirtual ? " cart_suit_virtual" : "" %}">\n            <div class="cart_item_hd">\n              <div class="cart_item_hd_info">\n                {% if (isVirtual) { %}\n                  <a href="//item.jd.com/{%= suit.VskuId %}.html" target="_blank">\n                    <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                  </a>\n                {% } else { %}\n                  <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                {% } %}\n              </div>\n              {% if (isVirtual) { %}\n                <a class="cart_delete J_delete" data-id="{%= suit.VskuId %}" data-method="RemoveSuit" data-type="{%= suit.SuitType %}" href="javascript:;">删除</a>\n              {% } %}\n              <div class="cart_item_hd_price">小计：<span class="cart_num">&yen;{%= (suit.PromotionPrice*suit.Num).toFixed(2) %}</span></div>\n            </div>\n            <ul class="cart_item_bd">\n              {% $.each(suit.Skus, function (k, list) { %}\n                <li class="cart_item">\n                  <div class="cart_item_inner">\n                    <div class="cart_img">\n                      <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                        <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                      </a>\n                    </div>\n                    <div class="cart_name">\n                      <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                    </div>\n                    <div class="cart_info">\n                      <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                      {% if (parseInt(list.FanPrice) > 0) { %}\n                        <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                      {% } %}\n                      {% if (parseInt(list.Score) > 0) { %}\n                        <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                      {% } %}\n                      {% if (!isVirtual) { %}\n                        <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= suit.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                      {% } %}\n                    </div>\n                    {% $.each(list.Gifts, function (k, gift) { %}\n                      <div class="cart_gift">\n                        <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                      </div>\n                    {% }); %}\n                    {% $.each(list.CouponAD, function (k, jq) { %}\n                      <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                    </div>\n                    {% }); %}\n                  </div>\n                </li>\n              {% }); %}\n            </ul>\n          </li>\n        {% }); %}\n      </ul>',
            mj: '\n      <ul class="cart_manjianlist">\n        {% $.each(o.ManJian, function (k, mj) { %}\n          <li class="cart_item">\n            <div class="cart_item_hd">\n              <div class="cart_item_hd_info">\n                <span class="cart_tag cart_tag_green">满减</span>\n                {% if (mj.ManFlag) { %}已购满{% if (mj.ManNum > 0) { %}{%= mj.ManNum %}件{% } else { %}{%= mj.ManPrice %}元{% } %}，已减{%= mj.JianPrice %}元\n                {% } else { %}购满{% if (mj.ManNum > 0) { %}{%= mj.ManNum %}件{% } else { %}{%= mj.ManPrice %}元{% } %}，即可享受满减优惠{% } %}\n                </div>\n              <div class="cart_item_hd_price">小计：&yen;{%= (mj.PromotionPrice*mj.Num).toFixed(2) %}</div>\n            </div>\n            {% if ($.isArray(mj.Skus) && mj.Skus.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mj.Skus, function (k, list) { %}\n                  <li class="cart_item">\n                    <div class="cart_item_inner">\n                      <div class="cart_img">\n                        <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                          <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                        </a>\n                      </div>\n                      <div class="cart_name">\n                        <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                      </div>\n                      <div class="cart_info">\n                        <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                        {% if (parseInt(list.FanPrice) > 0) { %}\n                          <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                        {% } %}\n                        {% if (parseInt(list.Score) > 0) { %}\n                          <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                        {% } %}\n                        <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= mj.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                      </div>\n                      {% $.each(list.Gifts, function (k, gift) { %}\n                        <div class="cart_gift">\n                          <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                        </div>\n                      {% }); %}\n                      {% $.each(list.CouponAD, function (k, jq) { %}\n                        <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                      </div>\n                      {% }); %}\n                    </div>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n            {% if ($.isArray(mj.Suits) && mj.Suits.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mj.Suits, function (k, suit) { %}\n                  {% var isVirtual = !!suit.VskuId; %}\n                  <li class="cart_item cart_suit{%= isVirtual ? " cart_suit_virtual" : "" %}">\n                    <div class="cart_item_hd">\n                      <div class="cart_item_hd_info">\n                        {% if (isVirtual) { %}\n                          <a href="//item.jd.com/{%= suit.VskuId %}.html" target="_blank">\n                            <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                          </a>\n                        {% } else { %}\n                          <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                        {% } %}\n                      </div>\n                      {% if (isVirtual) { %}\n                        <a class="cart_delete J_delete" data-id="{%= suit.VskuId %}|{%= mj.Id %}" data-method="RemoveSuit" data-type="{%= suit.SuitType %}" href="javascript:;">删除</a>\n                      {% } %}\n                      <div class="cart_item_hd_price">小计：<span class="cart_num">&yen;{%= (suit.PromotionPrice*suit.Num).toFixed(2) %}</span></div>\n                    </div>\n                    <ul class="cart_item_bd">\n                      {% $.each(suit.Skus, function (k, list) { %}\n                        <li class="cart_item">\n                          <div class="cart_item_inner">\n                            <div class="cart_img">\n                              <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                                <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                              </a>\n                            </div>\n                            <div class="cart_name">\n                              <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                            </div>\n                            <div class="cart_info">\n                              <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                              {% if (parseInt(list.FanPrice) > 0) { %}\n                                <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                              {% } %}\n                              {% if (parseInt(list.Score) > 0) { %}\n                                <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                              {% } %}\n                              {% if (!isVirtual) { %}\n                                <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= suit.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                              {% } %}\n                            </div>\n                            {% $.each(list.Gifts, function (k, gift) { %}\n                              <div class="cart_gift">\n                                <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                              </div>\n                            {% }); %}\n                            {% $.each(list.CouponAD, function (k, jq) { %}\n                              <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                            </div>\n                            {% }); %}\n                          </div>\n                        </li>\n                      {% }); %}\n                    </ul>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n          </li>\n        {% }); %}\n      </ul>',
            mz: '\n      <ul class="cart_manzenglist">\n        {% $.each(o.ManZeng, function (k, mz) { %}\n          <li class="cart_item">\n            <div class="cart_item_hd">\n              <div class="cart_item_hd_info">\n                <span class="cart_tag cart_tag_orange">{% if(mz.FullRefundType == 24) { %}换购{% } else if (mz.AddMoney > 0) { %}加价购{% } else { %}满赠{% } %}</span>\n                {% if(mz.AddMoney > 0 || mz.FullRefundType == 24) { %}\n                  {% if(mz.ManFlag) { %}\n                    已购满{% if (mz.FullRefundType == 24) { %}{%= mz.ManNum %}件{% } else { %}{%= mz.ManPrice %}元{% } %}，您{% if(mz.ManGifts.length > 0) { %}已{% } else { %}可{% } %}加价换购商品\n                  {% } else { %}\n                    购满{% if (mz.FullRefundType == 24) { %}{%= mz.ManNum %}件{% } else { %}{%= mz.ManPrice %}元{% } %}，即可加价换购商品\n                  {% } %}\n                {% } else { %}\n                  {% if(mz.ManFlag) { %}\n                    已购满{%= mz.ManPrice %}元，您{% if(mz.ManGifts.length > 0) { %}已{% } else { %}可{% } %}领赠品\n                  {% } else { %}\n                    购满{%= mz.ManPrice %}元，即可领取赠品\n                  {% } %}\n                {% } %}\n              </div>\n              <div class="cart_item_hd_price">小计：&yen;{%= (mz.PromotionPrice*mz.Num).toFixed(2) %}</div>\n            </div>\n            {% if ($.isArray(mz.ManGifts) && mz.ManGifts.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mz.ManGifts, function (k, gift) { %}\n                  <li class="cart_item cart_item_mz">\n                    <div class="cart_item_inner">\n                      <div class="cart_gift">\n                        <a class="cart_gift_lk" href="{%= gift.Id %}" target="_blank">[{% if(mz.AddMoney > 0 || mz.FullRefundType == 24) { %}换购品{% } else { %}赠品{% } %}]{%= gift.Name %}</a>×{%= gift.Num %}\n                      </div>\n                    </div>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n            {% if ($.isArray(mz.Skus) && mz.Skus.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mz.Skus, function (k, list) { %}\n                  <li class="cart_item">\n                    <div class="cart_item_inner">\n                      <div class="cart_img">\n                        <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                          <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                        </a>\n                      </div>\n                      <div class="cart_name">\n                        <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                      </div>\n                      <div class="cart_info">\n                        <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                        {% if (parseInt(list.FanPrice) > 0) { %}\n                          <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                        {% } %}\n                        {% if (parseInt(list.Score) > 0) { %}\n                          <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                        {% } %}\n                        <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= mz.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                      </div>\n                      {% $.each(list.Gifts, function (k, gift) { %}\n                        <div class="cart_gift">\n                          <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                        </div>\n                      {% }); %}\n                      {% $.each(list.CouponAD, function (k, jq) { %}\n                        <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                      </div>\n                      {% }); %}\n                    </div>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n            {% if ($.isArray(mz.Suits) && mz.Suits.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mz.Suits, function (k, suit) { %}\n                  {% var isVirtual = !!suit.VskuId; %}\n                  <li class="cart_item cart_suit{%= isVirtual ? " cart_suit_virtual" : "" %}">\n                    <div class="cart_item_hd">\n                      <div class="cart_item_hd_info">\n                        {% if (isVirtual) { %}\n                          <a href="//item.jd.com/{%= suit.VskuId %}.html" target="_blank">\n                            <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                          </a>\n                        {% } else { %}\n                          <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                        {% } %}\n                      </div>\n                      {% if (isVirtual) { %}\n                        <a class="cart_delete J_delete" data-id="{%= suit.VskuId %}|{%= mz.Id %}" data-method="RemoveSuit" data-type="{%= suit.SuitType %}" href="javascript:;">删除</a>\n                      {% } %}\n                      <div class="cart_item_hd_price">小计：<span class="cart_num">&yen;{%= (suit.PromotionPrice*suit.Num).toFixed(2) %}</span></div>\n                    </div>\n                    <ul class="cart_item_bd">\n                      {% $.each(suit.Skus, function (k, list) { %}\n                        <li class="cart_item">\n                          <div class="cart_item_inner">\n                            <div class="cart_img">\n                              <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                                <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                              </a>\n                            </div>\n                            <div class="cart_name">\n                              <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                            </div>\n                            <div class="cart_info">\n                              <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                              {% if (parseInt(list.FanPrice) > 0) { %}\n                                <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                              {% } %}\n                              {% if (parseInt(list.Score) > 0) { %}\n                                <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                              {% } %}\n                              {% if (!isVirtual) { %}\n                                <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= suit.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                              {% } %}\n                            </div>\n                            {% $.each(list.Gifts, function (k, gift) { %}\n                              <div class="cart_gift">\n                                <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                              </div>\n                            {% }); %}\n                            {% $.each(list.CouponAD, function (k, jq) { %}\n                              <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                            </div>\n                            {% }); %}\n                          </div>\n                        </li>\n                      {% }); %}\n                    </ul>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n          </li>\n        {% }); %}\n      </ul>'
        },
        FN_BindEvents: function FN_BindEvents() {
            var e = this;
            $("#J_cart_pop .J_delete").bind("click", function () {
                var t = $(this).attr("data-id").split("|"),
                    n = {method: $(this).attr("data-method"), type: $(this).attr("data-type"), cartId: t[0]};
                t && (t.length > 1 && t[1] && (n.targetId = t[1]), (0, i["default"])(e.URL_Serv, {
                    params: n,
                    dataType: "jsonp"
                }).then(function (t) {
                    t.Result && e.FN_Refresh()
                }))
            })
        },
        FN_Refresh: function FN_Refresh() {
            var e = this, t = this.el.find(".dropdown-layer").eq(0);
            (0, i["default"])(e.URL_Serv, {params: {method: "GetCart"}, dataType: "jsonp"}).then(function (n) {
                var i = n.Cart,
                    l = i.TheSkus.length + i.TheSuit.length + i.TheGifts.length + i.ManJian.length + i.ManZeng.length;
                n.Cart.getImageDomain = s, n.Cart.URLS = a;
                var c = (0, o["default"])(e.TPL_List.single, n.Cart), u = (0, o["default"])(e.TPL_List.gift, n.Cart),
                    f = (0, o["default"])(e.TPL_List.suit, n.Cart), d = (0, o["default"])(e.TPL_List.mz, n.Cart),
                    p = (0, o["default"])(e.TPL_List.mj, n.Cart);
                l > 0 ? (t.html((0, o["default"])(e.TPL_List.wrap, n.Cart)), t.find(".J_cart_bd").html(c + u + f + p + d)) : t.html(e.TPL_NoGoods), e.FN_BindEvents(), e.DATA_Amount = r.get(e.DATA_Cookie), null != e.DATA_Amount && $("#shopping-amount").text(e.DATA_Amount).parent().show()
            })
        }
    };
    var f = function init() {
        u.init()
    };
    t["default"] = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(10);
    var r = function tmpl(e, t) {
        var n = /[^\w\-.:]/.test(e) ? new Function(tmpl.arg + ",tmpl", "var _e=tmpl.encode" + tmpl.helper + ",_s='" + e.replace(tmpl.regexp, tmpl.func) + "';return _s;") : tmpl.cache[e] = tmpl.cache[e] || tmpl(tmpl.load(e));
        return t ? n(t, tmpl) : function (e) {
            return n(e, tmpl)
        }
    };
    r.cache = {}, r.load = function (e) {
        return document.getElementById(e).innerHTML
    }, r.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g, r.func = function (e, t, n, r, o, i) {
        return t ? {
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            " ": " "
        }[t] || "\\" + t : n ? "=" === n ? "'+_e(" + r + ")+'" : "'+(" + r + "==null?'':" + r + ")+'" : o ? "';" : i ? "_s+='" : void 0
    }, r.encReg = /[<>&"'\x00]/g, r.encMap = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#39;"
    }, r.encode = function (e) {
        return (null == e ? "" : "" + e).replace(r.encReg, function (e) {
            return r.encMap[e] || ""
        })
    }, r.arg = "o", r.helper = ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}";
    var o = r;
    t["default"] = o
}, function (e, t, n) {
    "use strict";

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    n(1), n(2), n(29), n(12), n(35), n(78), n(51), n(52), n(62), n(10), window.search = function (e, t) {
        var n, r = "http://search.jd.com/Search?keyword={keyword}&enc={enc}{additional}", o = search.additional || "";
        if ("string" == typeof t && "" != t ? o += "&spm=a.0.0" : t = document.getElementById(e).value, (t = t.replace(/^\s*(.*?)\s*$/, "$1")).length > 100 && (t = t.substring(0, 100)), "" != t) {
            var i = 0;
            "undefined" != typeof window.pageConfig && "undefined" != typeof window.pageConfig.searchType && (i = window.pageConfig.searchType);
            var a = "&cid{level}={cid}", l = "string" == typeof search.cid ? search.cid : "",
                c = "string" == typeof search.cLevel ? search.cLevel : "",
                s = "string" == typeof search.ev_val ? search.ev_val : "";
            switch (i) {
                case 0:
                    break;
                case 1:
                    c = "-1", o += "&book=y";
                    break;
                case 2:
                    c = "-1", o += "&mvd=music";
                    break;
                case 3:
                    c = "-1", o += "&mvd=movie";
                    break;
                case 4:
                    c = "-1", o += "&mvd=education";
                    break;
                case 5:
                    var u = "&other_filters=%3Bcid1%2CL{cid1}M{cid1}[cid2]";
                    switch (c) {
                        case"51":
                            a = (a = u.replace(/\[cid2]/, "")).replace(/\{cid1}/g, "5272");
                            break;
                        case"52":
                            a = (a = u.replace(/\{cid1}/g, "5272")).replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                            break;
                        case"61":
                            a = (a = u.replace(/\[cid2]/, "")).replace(/\{cid1}/g, "5273");
                            break;
                        case"62":
                            a = (a = u.replace(/\{cid1}/g, "5273")).replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                            break;
                        case"71":
                            a = (a = u.replace(/\[cid2]/, "")).replace(/\{cid1}/g, "5274");
                            break;
                        case"72":
                            a = (a = u.replace(/\{cid1}/g, "5274")).replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                            break;
                        case"81":
                            a = (a = u.replace(/\[cid2]/, "")).replace(/\{cid1}/g, "5275");
                            break;
                        case"82":
                            a = (a = u.replace(/\{cid1}/g, "5275")).replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}")
                    }
                    r = "//search-e.jd.com/searchDigitalBook?ajaxSearch=0&enc=utf-8&key={keyword}&page=1{additional}";
                    break;
                case 6:
                    c = "-1", r = "//music.jd.com/8_0_desc_0_0_1_15.html?key={keyword}";
                    break;
                case 7:
                    r = "//s-e.jd.com/Search?key={keyword}&enc=utf-8";
                    break;
                case 8:
                    r = "//search.jd.hk/Search?keyword={keyword}&enc=utf-8";
                    break;
                case 9:
                    o += "&market=1";
                    break;
                case 10:
                    o += "&gp=2"
            }
            if ("string" == typeof l && "" != l && "string" == typeof c) {
                c = "-1" == c ? "" : /^(?:[1-8])?([1-3])$/.test(c) ? RegExp.$1 : "";
                var f = a.replace(/\{level}/, c);
                o += f = f.replace(/\{cid}/g, l)
            }
            if ("string" == typeof s && "" != s && (o += "&ev=" + s), t = encodeURIComponent(t), n = (n = (n = r.replace(/\{keyword}/, t)).replace(/\{enc}/, "utf-8")).replace(/\{additional}/, o), "object" === ("undefined" == typeof $o ? "undefined" : _typeof($o)) && ("string" == typeof $o.lastKeyword && (n += "&wq=" + encodeURIComponent($o.lastKeyword)), "string" == typeof $o.pvid && (n += "&pvid=" + $o.pvid)), n.indexOf("/search.jd.com/") > 0) try {
                JA.tracker.ngloader("search.000009", {key: t, posid: e, target: n})
            } catch (d) {
            }
            "undefined" != typeof search.isSubmitted && 0 != search.isSubmitted || (setTimeout(function () {
                window.location.href = n
            }, 50), search.isSubmitted = !0)
        } else window.location.href = window.location.href
    }, window.$o = function (e) {
        var t = $("#key");
        if (!(t.length < 1)) {
            var n = {
                replace: function (e, t) {
                    return e.replace(/#{(.*?)}/g, function () {
                        var e = arguments[1];
                        return "undefined" != typeof t[e] ? t[e] : arguments[0]
                    })
                }, genPvid: function () {
                    var e = (new Date).getTime();
                    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                        var n = (e + 16 * Math.random()) % 16 | 0;
                        return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16)
                    })
                }, getQueryString: function (t, n) {
                    var r = new RegExp("(^|\\?|&)" + t + "=([^&]*)(\\s|&|$)", "i"), o = n || e.location.search;
                    return r.test(o) ? RegExp.$2 : ""
                }, htmlspecialchars: function (e) {
                    return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : ""
                }, htmlspecialcharsDecode: function (e) {
                    return "string" == typeof e ? e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"') : ""
                }
            };
            String.prototype.isEmpty = function () {
                return 0 == this.length
            }, n.textSelect = function (e, t, n) {
                if ("string" == typeof e && (e = document.getElementById(e)), e) {
                    var r = 1 * t, o = 1 * n, i = e.value.length;
                    if (i) if (r || (r = 0), o || (o = i), r > i && (r = i), r < 0 && (r = i + r), o < 0 && (o = i + o), e.createTextRange) {
                        var a = e.createTextRange();
                        a.moveStart("character", -i), a.moveEnd("character", -i), a.moveStart("character", r), a.moveEnd("character", o), a.select()
                    } else e.setSelectionRange(r, o), e.focus()
                }
            }, n.getSelectText = function (e) {
                return document.selection ? document.selection.createRange().text : e ? e.value.substring(e.selectionStart, e.selectionEnd) : ""
            };
            var r = '<a style="color:#005AA0" onclick="$o.del(event)">删除</a>',
                o = '<li id="d_#{id}" suggest-pos="#{suggest_pos}" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></li>',
                i = '<li class="brand-search"><div id="d_#{id}" class="info J_shop_box" style="cursor:default;">#{guide}</div>#{categorys}</li>',
                a = '<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" act="#{act_value}" onclick="$o.clickItem(this)"><div class="search-item">在#{act_name}</div><div class="search-count">约#{amount}个商品</div></div>',
                l = '<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" act="#{act_value}" onclick="$o.clickItem(this)"><div class="search-item">#{act_name}</div><div class="search-count">约#{amount}个商品</div></div>',
                c = '<div id="d_#{id}" class="bs-item J_shop_box"><a class="logo" href="//mall.jd.com/index-#{shop_id}.html"><img width="90" height="30" src="#{shop_logo}"/></a><a class="name" href="//mall.jd.com/index-#{shop_id}.html">#{shop_name}</a></div>',
                s = '<div id="d_#{id}" class="#{className}"><a href="#{link}" style="float:left;width:100%;">#{prom_name}</a></div>',
                u = $("#shelper"), f = null != navigator.userAgent.toLowerCase().match(/chrome/), d = n.genPvid(),
                p = "//hiswd.jd.com/?pvid=" + d, m = function (t) {
                    var n = !1;
                    switch (e.location.host) {
                        case"cn.jd.com":
                        case"global.jd.com":
                            n = !0
                    }
                    return n
                }(), h = function (e) {
                    var t = "", r = "";
                    switch (e.location.host) {
                        case"cn.jd.com":
                        case"global.jd.com":
                            t += "//suggest-squanqiu.jd.com/?terminal=shouquanqiu";
                            break;
                        default:
                            t += "//dd-search.jd.com/?terminal=pc&newjson=1"
                    }
                    if (t += "&ver=2&zip=1&key=#{keyword}&pvid=" + d + "&t=#{time}&curr_url=" + encodeURIComponent(e.location.host + e.location.pathname), e.QUERY_KEYWORD && (t += "&search_key=" + encodeURIComponent(e.QUERY_KEYWORD)), e.pageConfig && e.pageConfig.product && e.pageConfig.product.cat) r = "&cid1=" + (e.pageConfig.product.cat[0] || ""), r += "&cid2=" + (e.pageConfig.product.cat[1] || ""), r += "&cid3=" + (e.pageConfig.product.cat[2] || ""); else if ("list.jd.com" == e.location.host) if (e.pageConfig && e.pageConfig.queryParam) r = "&cid1=" + (e.pageConfig.queryParam.c1 || ""), r += "&cid2=" + (e.pageConfig.queryParam.c2 || ""), r += "&cid3=" + (e.pageConfig.queryParam.c3 || ""); else {
                        var o = decodeURIComponent(n.getQueryString("cat")).split(",");
                        r = "&cid1=" + (o[0] || ""), r += "&cid2=" + (o[1] || ""), r += "&cid3=" + (o[2] || "")
                    }
                    return t + r
                }(e);
            SearchBox.prototype.init = function () {
                this.length = 0, this.index = -1, this.version = 0, search.additional = ""
            }, SearchBox.prototype.hideTip = function () {
                this.init(), this.lastKeyword = !1;
                var e = n.getSelectText(t[0]);
                this.keep_keyword && e && this.keep_keyword + e == t.val() && t.val(this.keep_keyword), u.html("").hide()
            }, SearchBox.prototype.clickItem = function (e) {
                var r = e.getAttribute("cid"), o = "&suggest=" + e.getAttribute("suggest-pos") + "." + this.version;
                search.cid = null != r && "" != r ? r : null;
                var i = e.getAttribute("cLevel");
                search.cLevel = null != i && "" != i ? i : null;
                var a = e.getAttribute("title");
                null == a || $.trim(a).isEmpty() || t.val(n.htmlspecialcharsDecode(a)), null !== e.getAttribute("act") && (o += e.getAttribute("act")), search.additional = o, search("key")
            }, SearchBox.prototype.mouseenter = function (e) {
                (e = $(e)).attr("history") && e.find(".search-count").html(r), e.hasClass("J_shop_box") ? e.find(".name").css("text-decoration", "underline") : e.css("background", "#FFDFC6");
                var t = e.attr("id").split("_"), n = parseInt(t[1], 10);
                if (n != this.index) {
                    if (this.index > -1) {
                        var o = $("#d_" + this.index);
                        o.css("background", "#FFF"), o.attr("history") && o.find(".search-count").html("搜索历史"), o.hasClass("J_shop_box") && o.find(".name").css("text-decoration", "none")
                    }
                    this.index = n
                }
            }, SearchBox.prototype.mouseleave = function (e) {
                e.css("background", "#FFF"), e.attr("history") && e.find(".search-count").html("搜索历史")
            }, SearchBox.prototype.selectItemNode = function (e) {
                var o = $("#d_" + this.index);
                o.css("background-color", "#FFF"), o.attr("history") && o.find(".search-count").html("搜索历史"), o.hasClass("J_shop_box") && o.find(".name").css("text-decoration", "none"), -1 == this.index && -1 == e && (e = 0), this.index = (this.length + this.index + e) % this.length;
                var i = $("#d_" + this.index), a = "&suggest=" + i.attr("suggest-pos") + "." + this.version;
                if (i.length > 0) {
                    i.attr("history") && i.find(".search-count").html(r), i.hasClass("J_shop_box") ? i.find(".name").css("text-decoration", "underline") : i.css("background-color", "#FFDFC6");
                    var l = i.attr("title");
                    null == l || $.trim(l).isEmpty() || t.val(n.htmlspecialcharsDecode(l));
                    var c = i.attr("cid");
                    search.cid = null != c && "" != c ? c : null;
                    var s = i.attr("cLevel");
                    search.cLevel = null != s && "" != s ? s : null, void 0 !== i.attr("act") && (a += i.attr("act")), search.additional = a
                }
            }, SearchBox.prototype.input = function () {
                var e = this;
                e.timeoutId && clearTimeout(e.timeoutId), e.timeoutId = setTimeout(function () {
                    var r = $.trim(t.val());
                    if (r === e.lastKeyword) return !1;
                    e.lastKeyword = r, $.ajax({
                        url: r ? n.replace(h, {
                            keyword: encodeURIComponent(r),
                            time: (new Date).getTime()
                        }) : p,
                        dataType: "jsonp",
                        scriptCharset: "utf-8",
                        jsonp: "callback",
                        cache: !0,
                        success: function (t) {
                            return function (n) {
                                e.iLastModified > t || (e.iLastModified = t, m ? e.onloadGLOBALItems(n) : e.onloadItems(n))
                            }
                        }((new Date).getTime())
                    })
                }, 150)
            }, SearchBox.prototype.keydown_up = function (n) {
                var r = n || e.event;
                0 == t.length && (t = $("#key")), 0 == u.length && (u = $("tie"));
                var o = r.keyCode;
                switch (o) {
                    case 38:
                        this.selectItemNode(-1);
                        break;
                    case 40:
                        this.selectItemNode(1);
                        break;
                    case 27:
                        this.hideTip();
                        break;
                    case 37:
                    case 39:
                        break;
                    default:
                        this.IME = 229 == o, 8 == o || 46 == o ? this.disableRemind() : this.enable_remind = !0, $.browser.mozilla || this.input()
                }
            }, SearchBox.prototype.onloadGLOBALItems = function (r) {
                if (!r || !r.length) return this.hideTip(), !1;
                this.init();
                var l = this, f = e.pageConfig && e.pageConfig.searchType ? e.pageConfig.searchType : 0, d = 1, p = "",
                    m = "", h = 0, _ = 0, y = 0, v = r.length, g = 0, b = n.htmlspecialchars(t.val());
                for (r[v - 1] && r[v - 1].version && (l.version = r[v - 1].version); h < v; h++) {
                    var P = r[h];
                    if (P && (P.key || P.pcif) && (!P.pcif || 0 == y)) if (P.rem && l.remindKey(P.rem.rei, P.rem.req), P.pcif) {
                        if (0 == f) {
                            for (var O = 0, w = P.pcif.length; O < w; O++) switch (P.pcif[O].iftp) {
                                case"0":
                                    break;
                                case"1":
                                    p += n.replace(a, {
                                        id: ++_,
                                        title: n.htmlspecialchars(P.pcif[O].shq),
                                        className: "item1",
                                        act_name: "<strong> 全球购 </strong>",
                                        act_value: "&gp=1",
                                        amount: P.pcif[O].wds,
                                        suggest_pos: d + ".wor.0"
                                    });
                                    break;
                                case"2":
                                    p += n.replace(a, {
                                        id: ++_,
                                        title: n.htmlspecialchars(P.pcif[O].shq),
                                        className: "item1",
                                        act_name: P.pcif[O].acp ? ' <img src="//img11.360buyimg.com/img/' + P.pcif[O].acp + '"> ' : "<strong> " + P.pcif[O].acq + " </strong>",
                                        act_value: P.pcif[O].acu,
                                        amount: P.pcif[O].acc,
                                        suggest_pos: d + ".acq.0"
                                    });
                                    break;
                                case"3":
                                    p += n.replace(s, {
                                        id: ++_,
                                        className: "item1",
                                        link: P.pcif[O].pru + (P.pcif[O].pru.indexOf("?") > 0 ? "&" : "?") + "suggest=1.prom.0." + l.version + "&wq=" + encodeURIComponent(t.val()),
                                        prom_name: P.pcif[O].prt.replace("&", ' <img src="' + P.pcif[O].prp + '"> ')
                                    });
                                    break;
                                case"4":
                                    p += n.replace(a, {
                                        id: ++_,
                                        title: n.htmlspecialchars(P.pcif[O].shq),
                                        className: "item1",
                                        act_name: P.pcif[O].icu ? ' <img src="' + P.pcif[O].icu + '"> ' : "<strong> " + P.pcif[O].act + " </strong>",
                                        act_value: P.pcif[O].ftt,
                                        amount: P.pcif[O].acc,
                                        suggest_pos: d + ".acq.0"
                                    });
                                    break;
                                case"5":
                                    m += n.replace(i, {
                                        id: 0,
                                        guide: P.pcif[O].ssq,
                                        categorys: n.replace(c, {
                                            id: 1,
                                            shop_id: P.pcif[O].shid,
                                            shop_name: P.pcif[O].shn,
                                            shop_logo: "//img30.360buyimg.com/n1/s90x30_" + P.pcif[O].shp
                                        })
                                    }), y++, g = 1
                            }
                            g && (_ = 1)
                        }
                    } else {
                        var E = n.htmlspecialchars(P.key),
                            C = P.his ? "搜索历史" : n.replace("约#{amount}个商品", {amount: P.qre}),
                            k = P.his ? 'history="1"' : "", S = P.his ? 'style="color:#005AA0"' : "", j = E.indexOf(b),
                            T = b.length && 0 == j && !P.his ? b + "<strong>" + E.substring(j + b.length) + "</strong>" : E;
                        0 == y && 0 == _ && (_ = -1), m += 0 == y && _ > 0 ? n.replace('<li class="fore1"><div id="d_#{id}" suggest-pos="#{suggest_pos}" class="fore1" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></div>#{categorys}</li>', {
                            id: 0,
                            title: E,
                            keyword: T,
                            suggest_pos: d++ + (P.his ? ".his.0" : ".def.0"),
                            categorys: p,
                            search_count: C,
                            history_mark: k,
                            history_style: S
                        }) : n.replace(o, {
                            id: ++_,
                            title: E,
                            keyword: T,
                            suggest_pos: d++ + (P.his ? ".his.0" : ".def.0"),
                            search_count: C,
                            history_mark: k,
                            history_style: S
                        }), y++
                    }
                }
                l.length = ++_, "" != m ? (m += "object" === _typeof(P) && P.his ? '<li class="close" onclick="$o.del(event)">全部删除</li>' : '<li class="close" onclick="$o.hideTip()">关闭</li>', u.html(m).show().find('[id^="d_"]').bind("mouseleave", function () {
                    l.mouseleave($(this))
                }).bind("mouseenter", function () {
                    l.mouseenter($(this))
                })) : u.html("").hide()
            }, SearchBox.prototype.onloadItems = function (r) {
                if (!r || !r.length) return this.hideTip(), !1;
                this.init();
                var a = this, f = e.pageConfig && e.pageConfig.searchType ? e.pageConfig.searchType : 0, d = 1, p = "",
                    m = "", h = 0, _ = 0, y = 0, v = r.length, g = 0, b = n.htmlspecialchars(t.val());
                for (r[v - 1] && r[v - 1].version && (a.version = r[v - 1].version); y < v; y++) {
                    var P = r[y];
                    if (P && (P.key || P.pcif) && (!P.pcif || 0 == _)) if (P.rem && a.remindKey(P.rem.rei, P.rem.req), P.pcif) {
                        if (0 == f) {
                            for (var O = 0, w = P.pcif.length; O < w; O++) switch (P.pcif[O].iftp) {
                                case"0":
                                    break;
                                case"1":
                                    p += n.replace(l, {
                                        id: ++h,
                                        title: n.htmlspecialchars(P.pcif[O].shq),
                                        className: "item1",
                                        act_name: ' <img class="dropdown-simg" src="https://img30.360buyimg.com/uba/jfs/t23851/25/1308766769/1435/39f22c3b/5b5983e7N8824e17c.png">在海囤全球下搜索' + P.pcif[O].shq,
                                        act_value: "&gp=1",
                                        amount: P.pcif[O].wds,
                                        suggest_pos: d + ".wor.0"
                                    });
                                    break;
                                case"2":
                                    p += n.replace(l, {
                                        id: ++h,
                                        title: n.htmlspecialchars(P.pcif[O].shq),
                                        className: "item1",
                                        act_name: P.pcif[O].acp ? ' <img src="//img11.360buyimg.com/img/' + P.pcif[O].acp + '"> 在' + P.pcif[O].acq + "下搜索" + P.pcif[O].shq : "<strong> " + P.pcif[O].acq + " </strong>",
                                        act_value: P.pcif[O].acu,
                                        amount: P.pcif[O].acc,
                                        suggest_pos: d + ".acq.0"
                                    });
                                    break;
                                case"3":
                                    p += n.replace(s, {
                                        id: ++h,
                                        className: "item1",
                                        link: P.pcif[O].pru + (P.pcif[O].pru.indexOf("?") > 0 ? "&" : "?") + "suggest=1.prom.0." + a.version + "&wq=" + encodeURIComponent(t.val()),
                                        prom_name: P.pcif[O].prt.replace("&", ' <img src="' + P.pcif[O].prp + '"> ')
                                    });
                                    break;
                                case"4":
                                    p += n.replace(l, {
                                        id: ++h,
                                        title: n.htmlspecialchars(P.pcif[O].shq),
                                        className: "item1",
                                        act_name: ' <img class="dropdown-simg" src="https://img12.360buyimg.com/uba/jfs/t24568/321/1310443574/1688/ed91c737/5b5983e7Nf3dcb3b5.png">在艺术品下搜索' + P.pcif[O].shq,
                                        act_value: P.pcif[O].ftt,
                                        amount: P.pcif[O].acc,
                                        suggest_pos: d + ".acq.0"
                                    });
                                    break;
                                case"5":
                                    m += n.replace(i, {
                                        id: 0,
                                        guide: P.pcif[O].ssq,
                                        categorys: n.replace(c, {
                                            id: 1,
                                            shop_id: P.pcif[O].shid,
                                            shop_name: P.pcif[O].shn,
                                            shop_logo: "//img30.360buyimg.com/n1/s90x30_" + P.pcif[O].shp
                                        })
                                    }), _++, g = 1
                            }
                            g && (h = 1), m += n.replace('<li class="fore1">#{categorys}</li>', {
                                id: 0,
                                title: E,
                                keyword: T,
                                suggest_pos: d++ + (P.his ? ".his.0" : ".def.0"),
                                categorys: p,
                                search_count: C,
                                history_mark: k,
                                history_style: S
                            })
                        }
                    } else {
                        var E = n.htmlspecialchars(P.key),
                            C = P.his ? "搜索历史" : n.replace("约#{amount}个商品", {amount: P.qre}),
                            k = P.his ? 'history="1"' : "", S = P.his ? 'style="color:#005AA0"' : "", j = E.indexOf(b),
                            T = b.length && 0 == j && !P.his ? b + "<strong>" + E.substring(j + b.length) + "</strong>" : E;
                        0 == _ && 0 == h && (h = -1), m += n.replace(o, {
                            id: ++h,
                            title: E,
                            keyword: T,
                            suggest_pos: d++ + (P.his ? ".his.0" : ".def.0"),
                            search_count: C,
                            history_mark: k,
                            history_style: S
                        }), _++
                    }
                }
                a.length = ++h, "" != m ? (m += "object" === _typeof(P) && P.his ? '<li class="close" onclick="$o.del(event)">全部删除</li>' : '<li class="close" onclick="$o.hideTip()">关闭</li>', u.html(m).show().find('[id^="d_"]').bind("mouseleave", function () {
                    a.mouseleave($(this))
                }).bind("mouseenter", function () {
                    a.mouseenter($(this))
                })) : u.html("").hide()
            }, SearchBox.prototype.disableRemind = function () {
                search.additional = "&suggest=1.rem.0." + this.version, this.enable_remind = !1
            }, SearchBox.prototype.remindKey = function (e, r) {
                t.val() == e && this.enable_remind && (f && this.IME && /\w/.test(e.substr(-1)) || (t.val(r), this.keep_keyword = e, search.additional = "&suggest=1.rem.1." + this.version, n.textSelect("key", e.length)))
            }, SearchBox.prototype.bind_input = function () {
                $.browser.mozilla ? (t.bind("keydown", function (e) {
                    _.keydown_up(e)
                }), t.bind("input", function (e) {
                    _.input(e)
                })) : t.bind("keydown", function (e) {
                    _.keydown_up(e)
                }), t.focus(function () {
                    setTimeout(function () {
                        _.input()
                    }, 10)
                }), u.parent().bind("mouseenter", function () {
                    _.e_position = !0, _.timeoutId && clearTimeout(_.timeoutId)
                }).bind("mouseleave", function () {
                    _.e_position = !1, _.timeoutId = setTimeout(function () {
                        _.hideTip()
                    }, 500)
                }), $(document).click(function () {
                    _.e_position || (_.hideTip(), _.uploader.clear())
                })
            }, SearchBox.prototype.del = function (t) {
                var n = this;
                t = t || e.event, e.event ? (t.cancelBubble = !0, t.returnValue = !1) : (t.stopPropagation(), t.preventDefault());
                var r = $(t.srcElement ? t.srcElement : t.target).parent().parent().attr("title");
                $.ajax({
                    url: p + (r == undefined ? "&delall=1" : "&del=" + encodeURIComponent(r)),
                    dataType: "jsonp",
                    scriptCharset: "utf-8",
                    success: function success(e) {
                        n.onloadItems(e)
                    }
                })
            }, SearchBox.prototype.uploader = {
                init: function init() {
                    var n = this;
                    switch (e.location.host) {
                        case"search.jd.com":
                        case"www.jd.com":
                            break;
                        default:
                            return !1
                    }
                    t.bind("click", function () {
                        n.clear()
                    }).after('<span class="photo-search-btn"><form id="search-img-upload" clstag="h|keycount|head_b" method="post" action="http://search.jd.com/image?op=upload" enctype="multipart/form-data" target="search_upload"><span class="upload-bg">&#xe60e;</span><input type="file" name="file" class="upload-trigger" accept="image/png,image/jpeg,image/jpg" tabindex="-1"></form></span>'), $("#search-img-upload").find("input").click(function () {
                        _.hideTip(), n.clear()
                    }).change(function () {
                        n.msg("图片上传中，大批相似商品正在赶来，请稍等......"), n.old_domain = document.domain, document.domain = "jd.com", $("body").append('<iframe id="J_image_upload" name="search_upload" style="display:none;"></iframe>'), $("#J_image_upload").load(function () {
                            !n.is_callback && n.msg("抱歉，图片上传失败", "网络状况不好，请重新上传试试~")
                        });
                        try {
                            JA.tracker.ngloader("search.000013", {url: e.location.href})
                        } catch (t) {
                        }
                        $("#search-img-upload").submit()
                    })
                }, msg: function msg(e, t) {
                    var n = $("#photo-search-dropdown"),
                        r = (n = n.length ? n : $('<div id="photo-search-dropdown"><div class="photo-search-tip"><div class="tip-inner tip-error"><i class="tip-icon"></i><div class="tip-main"><h5 class="tip-title"></h5><div class="tip-hint"></div></div></div></div></div>').insertAfter("#shelper")).find(".tip-inner");
                    t ? r.addClass("tip-error").find(".tip-title").show().html(e).next().html(t) : r.removeClass("tip-error").find(".tip-title").hide().next().html(e)
                }, callback: function callback(t) {
                    if (this.is_callback = 1, "ERROR" == t.split(".")[0]) switch (t.split(".")[1]) {
                        case"UPLOAD_RETRY":
                            this.msg("抱歉，图片上传失败", "网络状况不好，请重新上传试试~");
                            break;
                        case"UPLOAD_SIZE":
                            this.msg("抱歉，图片上传失败", "图片不能大于4M，请换一张图试试~");
                            break;
                        case"UPLOAD_MIN_WH":
                            this.msg("抱歉，图片上传失败", "图片尺寸不能小于201x201 px");
                            break;
                        case"UPLOAD_FORMAT":
                            this.msg("抱歉，图片上传失败", "只支持jpg或png格式的图片");
                            break;
                        case"UPLOAD_JSF":
                            this.msg("抱歉，图片上传失败", "网络状况不好，请重新上传试试~");
                            break;
                        default:
                            this.clear()
                    } else e.location.href = "http://search.jd.com/image?path=" + encodeURIComponent(t) + "&op=search"
                }, clear: function clear() {
                    this.old_domain && (document.domain = this.old_domain), this.is_callback = 0, $("#J_image_upload").remove(), $("#photo-search-dropdown").remove()
                }
            };
            var _ = new SearchBox;
            return _.bind_input(), _.uploader.init(), _
        }

        function SearchBox() {
            this.length = 0, this.index = -1, this.iLastModified = 0, this.lastKeyword = !1, this.keep_keyword = "", this.pvid = d, this.enable_remind = !0, this.IME = !1
        }
    }(window)
}, function (e, t, n) {
    "use strict";
    n(49), n(78), n(35), n(12), n(62), n(10), function () {
        if (!window.uba_lab_tag) {
            window.uba_lab_tag = !0;
            var e = {"www.jd.com": ['/div[id="cate_item1"]', '/div[id="cate_item2"]', '/div[id="cate_item3"]', '/div[id="cate_item4"]', '/div[id="cate_item5"]', '/div[id="cate_item6"]', '/div[id="cate_item7"]', '/div[id="cate_item8"]', '/div[id="cate_item9"]', '/div[id="cate_item10"]', '/div[id="cate_item11"]', '/div[id="cate_item12"]', '/div[id="cate_item13"]', '/div[id="cate_item14"]', '/div[id="cate_item15"]', '/li[id="ttbar-myjd"]/div[1]', '/li[id="ttbar-serv"]/div[1]', '/li[id="ttbar-navs"]/div[1]', '/div[id="settleup-content"]']},
                t = {
                    universal: ['/li[id="d_0"]', '/li[id="d_1"]', '/li[id="d_2"]', '/li[id="d_3"]', '/li[id="d_4"]', '/li[id="d_5"]', '/li[id="d_6"]', '/li[id="d_7"]', '/li[id="d_8"]', '/li[id="d_9"]', '/li[id="nav-licai"]/ul[1]', '/li[id="nav-zhongchou"]/ul[1]', '/li[id="nav-baoxian"]/ul[1]', '/li[id="nav-baitiao"]/ul[2]', '/li[id="nav-loan"]/ul[1]', '/li[id="nav-caimi"]/ul[1]', '/li[id="nav-dongjia"]/ul[1]', '/div[id="J_searchRecommend"]', '/div[id="J_searchKeyWords"]', '/div[id="J_userCenterBoard"]', '/div[id="ceilinglamp"]'],
                    urls: {
                        "www.jd.com": ['/li[id="ttbar-myjd"]/div[1]', '/div[id="ttbar-apps-main"]', '/div[id="ttbar-atte-main"]', '/li[id="ttbar-serv"]/div[1]', '/li[id="ttbar-navs"]/div[1]', '/div[id="cate_item', '/div[id="lift"]/ul[0]', '/div[id="settleup-content"]', '/ul[id="mcart-sigle"]', '/div[id="settleup-content"]', '/div[id="category-item', '/div[id="J-global-toolbar'],
                        "shouji.jd.com": ['/div[id="phoneCategorys"]/div[0]/div[1]'],
                        "channel.jd.com/fashion.html": ['/div[id="p-categroy"]/div[1]'],
                        "jr.jd.com": ['/div[id="container"]/div[0]/div[0]/div[0]/div[1]'],
                        "tuan.jd.com/quanguo-index.html": ['/div[id="categorys-2015"]/div[1]/div[7]/div[1]', '/div[id="categorys-2015"]/div[1]/div[8]/div[1]', '/div[id="categorys-2015"]/div[1]/div[9]/div[1]', '/div[id="categorys-2015"]/div[1]/div[10]/div[1]', '/ul[id="shelperTuan"]'],
                        "chaoshi.jd.com": [],
                        "book.jd.com": ['/div[id="p-category"]/div[0]/div[1]'],
                        "diannao.jd.com": ['/div[id="oaCategorys"]/div[0]/div[1]'],
                        "channel.jd.com/electronic.html": ['/div[id="comCategorys"]/div[1]/div[1]/div[0]/div[1]'],
                        "www.jd.hk": [],
                        "channel.jd.com/sports.html": ['/div[id="sortlist"]/div[0]'],
                        "auction.jd.com/home.html": ['/div[id="focus"]/div[0]/div[0]'],
                        "channel.jd.com/food.html": ['/div[id="p-category"]/div[0]/div[1]'],
                        "e.jd.com/ebook.html": ['/div[id="p-category"]/div[0]/div[1]'],
                        "channel.jd.com/beauty.html": ['/div[id="beauty"]/div[0]/div[0]/div[0]/div[0]/div[1]'],
                        "channel.jd.com/luxury.html": ['/div[id="p-categroy"]/div[1]'],
                        "channel.jd.com/furniture.html": ['/div[id="sortlist"]/div[0]'],
                        "shuma.jd.com": ['/div[id="oaCategorys"]/div[0]/div[1]'],
                        "baby.jd.com": ['/div[id="p-category"]/div[0]/div[1]'],
                        "channel.jd.com/home.html": ['/div[id="sortlist"]/div[0]'],
                        "channel.jd.com/health.html": ['/div[id="p-category"]/div[0]/div[1]'],
                        "channel.jd.com/1620-1625.html": ['/div[id="p-category"]/div[1]'],
                        "channel.jd.com/watch.html": ['/div[id="p-category"]/div[0]/div[2]'],
                        "channel.jd.com/wine.html": ['/div[id="p-category"]/div[0]/div[1]'],
                        "fresh.jd.com": ["/html[0]/body[1]/div[5]/div[0]/div[0]/ul[1]"],
                        "china.jd.com": ['/div[id="p-category"]/div[0]/div[1]'],
                        "mvd.jd.com": ['/div[id="p-category"]/div[0]/div[1]']
                    }
                }, n = {
                    addHandler: function addHandler(e, t, n) {
                        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
                    }, removeHandler: function removeHandler(e, t, n) {
                        e.addEventListener ? e.removeEventListener(t, n, !1) : e.attachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
                    }, getEvent: function getEvent(e) {
                        return e || window.event
                    }, getTarget: function getTarget(e) {
                        return e.target || e.srcElement
                    }, preventDefault: function preventDefault(e) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1
                    }, stopPropagation: function stopPropagation(e) {
                        e.stopPropagaiton ? e.stopPropagaiton() : e.cancelBubble = !0
                    }
                }, r = function readCookie(e) {
                    for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                        for (var o = n[r]; " " === o.charAt(0);) o = o.substring(1, o.length);
                        if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
                    }
                    return null
                }, o = function setLog(e) {
                    var t = "uas_log_" + (new Date).getTime(), n = window[t] = new Image;
                    n.onload = n.onerror = function () {
                        window[t] = null
                    }, n.src = e, n = null
                }, i = r("pin") ? r("pin") : "", a = r("__jda") ? r("__jda").split(".")[1] : "",
                l = r("__jdb") ? r("__jdb").split(".")[2] : "", c = r("__jda") ? r("__jda").split(".")[5] : "",
                s = function sendDeepthInfo(e) {
                    var t = "d=" + e + "$zb=" + c + "$labt=2";
                    t = encodeURIComponent(t);
                    var n = encodeURIComponent(document.referrer),
                        r = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + i + "&uid=" + a + "&sid=" + l + "&v=" + t + "&ref=" + n + "&rm=" + (new Date).getTime();
                    o(r)
                }, u = function sendSubModuleInfo(e, t) {
                    if (e.clientX > 1 && e.clientY > 1) {
                        var n = function getDomByTreeStr(e) {
                                var t = e.substr(1).split("/"), n = t.shift(), r = [];
                                if (n.indexOf("id") > -1) {
                                    n = n.match(/".*?"/gi)[0].replace(/"/gi, function () {
                                        return ""
                                    });
                                    for (var o = 0; o < t.length; o++) {
                                        var i = t[o];
                                        i = i.match(/\d+/)[0], r.push(parseInt(i))
                                    }
                                    for (var a = document.getElementById(n), l = 0; l < r.length; l++) {
                                        var c = r[l];
                                        a = a.children[c]
                                    }
                                    return a
                                }
                            }(t), r = $(n).offset(), s = e.clientX, u = e.clientY + getScrollTop(), f = window.screen.width,
                            d = "cw=" + (s - r.left) + "$ch=" + (u - r.top) + "$sw=" + f + "$zb=" + c + "$labt=3$smid=" + t;
                        d = encodeURIComponent(d);
                        var p = encodeURIComponent(document.referrer),
                            m = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + i + "&uid=" + a + "&sid=" + l + "&v=" + d + "&ref=" + p + "&rm=" + (new Date).getTime();
                        o(m)
                    }
                };
            /isdebug=(-\d)*-30/.test(location.search) && n.addHandler(document, "click", function (e) {
                n.getEvent(e), function getDomTreeBind(e) {
                    var t = n.getTarget(e), r = getDomTree(t);
                    if (!document.getElementById("tracelessLogDebug")) {
                        var o = document.createElement("textarea");
                        o.id = "tracelessLogDebug", o.style.border = "1px #C81623 solid", o.style.padding = "5px 10px", o.style.width = "900px", o.style.height = "20px", o.style.background = "#C81623", o.style.color = "#fff", o.style.zIndex = 100, o.style.opacity = .7, o.style.position = "fixed", o.style.left = "50%", o.style.top = "0px", o.style.marginLeft = "-450px", document.getElementsByTagName("body")[0].appendChild(o)
                    }
                    "tracelessLogDebug" !== t.getAttribute("id") && (document.getElementById("tracelessLogDebug").innerHTML = r), n.preventDefault(e)
                }(e)
            });
            var f = function () {
                var e = [];
                return function (t, n) {
                    if (n = n || !1, e = e.concat(t || []), n) {
                        var r = e.join("$");
                        e = [], r = encodeURIComponent(r);
                        var c = encodeURIComponent(document.referrer),
                            s = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + i + "&uid=" + a + "&sid=" + l + "&v=" + r + "&ref=" + c + "&rm=" + (new Date).getTime();
                        o(s)
                    }
                }
            }();
            n.addHandler(window, "load", function (r) {
                a && $.ajax({
                    url: "//d.jd.com/lab/get",
                    dataType: "jsonp",
                    jsonpCallback: "lab",
                    cache: !0,
                    success: function success(r) {
                        r && $.each(r, function (f) {
                            var d = r[f], p = d.url.toLowerCase(), m = (new Date).getTime();
                            if (d.url && d.startOn && d.endOn && d.percent && function checkUrlMatch(e) {
                                var t = e.url.toLowerCase(), n = location.href.toLowerCase();
                                if ((n = n.replace(/http.*?\/\//gi, function (e) {
                                    return ""
                                })).indexOf(t) > -1) return !0;
                                if (e.skus && n.indexOf("item.jd.com") > -1) for (var r in e.skus) {
                                    var o = e.skus[r] + ".html";
                                    if (n.indexOf(o) > -1) return !0
                                }
                                return !1
                            }(d) && m >= d.startOn && m <= d.endOn + 864e5 && function getHashProbability(e, t) {
                                return Math.abs(function hashCode(e) {
                                    for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
                                    return t
                                }(e)) % t
                            }(a, 1e4) <= 100 * parseInt(d.percent)) return n.addHandler(document, "click", function (e) {
                                s('[{"t":0,"b":0,"d":0}]'), n.removeHandler(document, "click", arguments.callee)
                            }), n.addHandler(document, "click", function (r) {
                                var s = n.getEvent(r), f = n.getTarget(r);
                                if (f.parentNode) {
                                    var d = getDomTree(f);
                                    if (inArray(t.universal, d) || t.urls[p] && inArray(t.urls[p], d) || function setLogBind(e) {
                                        if (e.clientX > 1 && e.clientY > 1) {
                                            var t = "cw=" + (e.clientX - window.screen.width / 2) + "$ch=" + (e.clientY + getScrollTop()) + "$sw=" + window.screen.width + "$zb=" + c + "$labt=1";
                                            t = encodeURIComponent(t);
                                            var n = encodeURIComponent(document.referrer),
                                                r = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + i + "&uid=" + a + "&sid=" + l + "&v=" + t + "&ref=" + n + "&rm=" + (new Date).getTime();
                                            o(r)
                                        }
                                    }(s), e[p]) {
                                        var m = inArray(e[p], d);
                                        m && u(s, m)
                                    }
                                }
                            }), initDeepGather(), !1
                        })
                    }
                })
            });
            var d = null;
            switch (location.href) {
                case"http://train.jd.com/":
                    d = "train";
                    break;
                case"http://menpiao.jd.com/":
                    d = "menpiao";
                    break;
                case"http://what.jd.com/what/index":
                case"http://what.jd.com/index":
                    d = "what";
                    break;
                case"http://faner.jd.com/":
                    d = "faner";
                    break;
                case"http://chaoshi.jd.com/":
                    d = "chaoshi"
            }
            a && null != d && (f([d + "_pv=1"], !0), function performance() {
                function onload(t) {
                    var a = e.timing, l = a.navigationStart;
                    window.setTimeout(function delayLoad() {
                        var e = a.domContentLoadedEventEnd - l, t = a.loadEventEnd - l;
                        if (!(t < 0 && "msie" === o.name && 9 === o.versionNumber)) {
                            var s = a.domInteractive - l;
                            if (window.chrome && window.chrome.loadTimes) {
                                var u = window.chrome.loadTimes();
                                n = parseInt(1e3 * (u.firstPaintTime - u.startLoadTime), 10)
                            } else "number" == typeof a.msFirstPaint && (n = a.msFirstPaint - l);
                            n = Math.max(0, n), t = Math.max(0, t), i = !0, f(obj2Array({
                                dr: e,
                                lp: t,
                                fp: n,
                                di: s,
                                labt: 100,
                                zb: void 0 !== c ? c : 0,
                                ecr: r
                            }), !0)
                        }
                    }, 0)
                }

                function obj2Array(e) {
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
                    return t
                }

                function contentLoad(e) {
                    for (var n = t.body.querySelectorAll("*"), o = 0, i = 0; i < n.length; ++i) {
                        var a = n[i].tagName.toLowerCase();
                        "script" !== a && "link" !== a && "noscript" !== a && o++
                    }
                    r = o
                }

                var e = window.performance || window.webkitPerformance || window.mozPerformance || window.msPerformance,
                    t = window.document, n = -1, r = -1, o = function getBrowserInfo(e) {
                        return function uaMatch(e) {
                            e === undefined && (e = window.navigator.userAgent), e = e.toLowerCase();
                            var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[/]([\w.]+)/.exec(e) || /(chrome)[ /]([\w.]+)/.exec(e) || /(version)(applewebkit)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(e) || /(webkit)[ /]([\w.]+).*(version)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(e) || /(webkit)[ /]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                                n = /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || [],
                                r = {}, o = {
                                    browser: t[5] || t[3] || t[1] || "",
                                    version: t[2] || t[4] || "0",
                                    versionNumber: t[4] || t[2] || "0",
                                    platform: n[0] || ""
                                };
                            o.browser && (r[o.browser] = !0, r.version = o.version, r.versionNumber = parseInt(o.versionNumber, 10)), o.platform && (r[o.platform] = !0), (r.cros || r.mac || r.linux || r.win) && (r.desktop = !0), (r.chrome || r.opr || r.safari) && (r.webkit = !0), (r.rv || r.iemobile) && (o.browser = "msie", r.msie = !0), r.edge && (delete r.edge, o.browser = "msedge", r.msedge = !0), r.opr && (o.browser = "opera", r.opera = !0), r.name = o.browser, r.platform = o.platform;
                            var i = !1;
                            return (t = /liebaofast\/([\w.]+)/.exec(e) || /liebao\/([\w.]+)/.exec(e) || /lbbrowser/.exec(e)) && (r.name = "liebao", r.version = t[1] || "0", i = !0), /metasr/.test(e) && (r.name = "sougou", r.version = "0", r.versionNumber = 0), (t = /maxthon\/([\w.]+)/.exec(e) || /maxthon/.exec(e)) && (r.name = "maxthon", r.version = t[1] || "0", i = !0), /360[se]e/.test(e) && (r.name = "360", r.version = "0", r.versionNumber = "0"), (t = /qqbrowser\/([\w.]+)/.exec(e) || /tencenttraveler ([\w.]+)/.exec(e)) && (r.name = "qq", r.version = t[1] || "0", i = !0), i && (r.versionNumber = parseInt(r.version, 10)), r
                        }(e || window.navigator.userAgent)
                    }(), i = !1, a = null, l = 0;
                f(["br=" + [o.platform, o.name, o.versionNumber].join(".")]), e && window.addEventListener ? ("complete" === t.readyState || "interactive" === t.readyState ? contentLoad() : t.addEventListener("DOMContentLoaded", contentLoad), "msie" === o.name && 9 === o.versionNumber && (a = setInterval(function makesureLoad() {
                    i || 3 === l ? clearInterval(a) : (l++, onload())
                }, 1e3)), window.addEventListener("load", onload)) : f(obj2Array({
                    dr: 0,
                    lp: 0,
                    fp: 0,
                    di: 0,
                    labt: 100,
                    zb: void 0 !== c ? c : 0,
                    ecr: 0
                }), !0)
            }())
        }

        function inArray(e, t) {
            for (var n = !1, r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                if (i = (i = i.replace(/\[/gm, "\\[")).replace(/\]/gm, "\\]"), new RegExp(i).test(t)) {
                    n = e[r];
                    break
                }
            }
            return n
        }

        function siblingIndex(e) {
            for (var t = 0, n = e.parentNode.firstChild; n; n = n.nextSibling) if (1 === n.nodeType) {
                if (n === e) break;
                t += 1
            }
            return t
        }

        function getDomTree(e) {
            if ("html" === e.nodeName.toLowerCase() || "body" === e.nodeName.toLowerCase()) return null;
            return (e.getAttribute("id") ? e.nodeName.toLowerCase() + '[id="' + e.getAttribute("id") + '"]/' : e.nodeName.toLowerCase() + "[" + siblingIndex(e) + "]/" + function getDomTreeParent(e) {
                var t = e.parentNode, n = "";
                if (t) try {
                    var r = t.getAttribute("id");
                    r && !/^ad\d+/gi.test(r) ? n += t.nodeName.toLowerCase() + '[id="' + t.getAttribute("id") + '"]/' : (n += t.nodeName.toLowerCase() + "[" + siblingIndex(t) + "]/", n += getDomTreeParent(t))
                } catch (o) {
                }
                return n
            }(e)).split("/").reverse().join("/")
        }

        function getScrollTop() {
            var e = 0;
            return document.documentElement && document.documentElement.scrollTop ? e = document.documentElement.scrollTop : document.body && (e = document.body.scrollTop), e
        }

        function initDeepGather() {
            var e = "boolean" == typeof document.hidden;
            if (e) {
                var t, n, r, o = $(window), i = [];
                setInterval(function () {
                    e && !1 === document.hidden && (sendData(), i = [])
                }, 5e3);
                var a = !1;
                o.bind("scroll", function (e) {
                    timeOutTrigger()
                }), timeOutTrigger()
            }

            function sendData() {
                if (i.length > 0) {
                    for (var e = 0; e < i.length; e++) i[e].d = parseFloat(i[e].d.toFixed(2));
                    var t = JSON.stringify(i);
                    s(t)
                }
            }

            function timeOutTrigger() {
                window.clearTimeout(n), window.clearInterval(t), n = window.setTimeout(function () {
                    (r = function getRange() {
                        var e = o.scrollTop(), t = o.height() + e;
                        return {t: e, b: t = t < 3e4 ? t : 3e4}
                    }()).d = .5, i.push(r), t = window.setInterval(function () {
                        e && (!1 === document.hidden ? (a = !1, 0 === i.length ? (r.d = 0, i.push(r)) : r.d += .01) : !1 === a && (sendData(), i = [], a = !0))
                    }, 10)
                }, 500)
            }
        }
    }()
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(192)), i = _interopRequireDefault(n(195)),
        a = _interopRequireDefault(n(197)), l = _interopRequireDefault(n(198)), c = _interopRequireDefault(n(201)),
        s = _interopRequireDefault(n(203)), u = _interopRequireDefault(n(204)), f = _interopRequireDefault(n(205)),
        d = n(6);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var p = function (e) {
        function Shortcut() {
            var e;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Shortcut), _defineProperty(_assertThisInitialized(_assertThisInitialized(e = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(Shortcut).apply(this, arguments)))), "myOrderTabName", "我的订单"), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "myOrderJumpLink", "//order.jd.com/center/list.action"), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onClickMyOrder", function () {
                (0, d.reportClick)({poi: "head|topbar|03", text: e.myOrderTabName, url: e.myOrderJumpLink})
            }), e.props.ctn.innerHTML = "", e
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(Shortcut, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Shortcut, [{
            key: "render", value: function render() {
                return r["default"].createElement("div", {
                    className: "w",
                    role: "navigation",
                    "aria-label": "顶部导航",
                    tabIndex: 0
                }, r["default"].createElement("ul", {
                    className: "fl",
                    clstag: "h|keycount|head|topbar_01"
                }, r["default"].createElement(o["default"], null)), r["default"].createElement("ul", {className: "fr"}, r["default"].createElement(f["default"], null), r["default"].createElement("li", {className: "spacer"}), r["default"].createElement("li", {
                    className: "shortcut_btn fore2",
                    clstag: "h|keycount|head|topbar_03"
                }, r["default"].createElement("div", {className: "dt"}, r["default"].createElement("a", {
                    target: "_blank",
                    href: this.myOrderJumpLink,
                    rel: "noopener noreferrer",
                    onClick: this.onClickMyOrder,
                    "aria-label": this.myOrderTabName
                }, this.myOrderTabName))), r["default"].createElement("li", {className: "spacer"}), r["default"].createElement(c["default"], null), r["default"].createElement("li", {className: "spacer"}), r["default"].createElement(a["default"], null), r["default"].createElement("li", {className: "spacer"}), r["default"].createElement(i["default"], null), r["default"].createElement("li", {className: "spacer"}), r["default"].createElement(s["default"], null), r["default"].createElement("li", {className: "spacer"}), r["default"].createElement(u["default"], null), r["default"].createElement("li", {className: "spacer"}), r["default"].createElement(l["default"], null)))
            }
        }]), Shortcut
    }(), m = function init() {
        var e = document.getElementById("shortcut");
        r["default"].render(r["default"].createElement(p, {ctn: e}), e)
    };
    t["default"] = m
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3), n(51), n(52), n(29), n(49), n(12), n(10);
    var r = _interopRequireDefault(n(0)), o = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(53)), i = _interopRequireDefault(n(11)), a = _interopRequireDefault(n(21)), l = _interopRequireDefault(n(193)),
        c = n(36), s = n(17), u = n(4), f = n(16), d = n(6);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    n(194), $.tpl = function (e, t) {
        var n = function fn(t) {
            var n = e;
            for (var r in t) n = n.replace("<%=".concat(r, "%>"), t[r]);
            return n
        };
        return t ? n(t) : n
    };
    var p = window, m = [1, 72, 0, 0], h = m.join("-"), _ = new c.DelayExpose({delayTime: 1e3}), y = "head|topbar|",
        v = -1, g = {
            province: {
                "北京": 1,
                "上海": 2,
                "天津": 3,
                "重庆": 4,
                "河北": 5,
                "山西": 6,
                "河南": 7,
                "辽宁": 8,
                "吉林": 9,
                "黑龙江": 10,
                "内蒙古": 11,
                "江苏": 12,
                "山东": 13,
                "安徽": 14,
                "浙江": 15,
                "福建": 16,
                "湖北": 17,
                "湖南": 18,
                "广东": 19,
                "广西": 20,
                "江西": 21,
                "四川": 22,
                "海南": 23,
                "贵州": 24,
                "云南": 25,
                "西藏": 26,
                "陕西": 27,
                "甘肃": 28,
                "青海": 29,
                "宁夏": 30,
                "新疆": 31,
                "港澳": 52993,
                "台湾": 32,
                "钓鱼岛": 84,
                "海外": 53283
            },
            city: {
                1: "1-72-2799",
                2: "2-2813-51976",
                3: "3-51035-39620",
                4: "4-113-9775",
                5: "5-142-143",
                6: "6-303-304",
                7: "7-412-415",
                8: "8-560-567",
                9: "9-639-640",
                10: "10-727-728",
                11: "11-799-801",
                12: "12-904-905",
                13: "13-2900-2908",
                14: "14-1151-1153",
                15: "15-1158-1224",
                16: "16-1303-1305",
                17: "17-1432-1435",
                18: "18-1482-1485",
                19: "19-1601-3633",
                20: "20-3168-3169",
                21: "21-1827-1828",
                22: "22-2103-2105",
                23: "23-3690-3693",
                24: "24-2144-2145",
                25: "25-4108-6823",
                26: "26-3970-3972",
                27: "27-2428-2429",
                28: "28-2525-2526",
                29: "29-2580-2581",
                30: "30-2628-2629",
                31: "31-4110-4122",
                52993: "52993-52994-52996",
                32: "32-2768-2769",
                84: "84-1310-0",
                53283: "53283-53284-0"
            },
            area: {},
            serverLocal: null,
            provinceList: null
        };
    g.province = function () {
        var e = {};
        return $.each(g.province, function (t, n) {
            e["_" + n] = t
        }), e
    }();
    var b = {
        getUrl: "//uprofile.jd.com/u/getadds?callback=?",
        setUrl: "//uprofile.jd.com/u/setadds",
        sync: function sync(e, t) {
            var n = function updateCookie(e, t) {
                var n = {domain: ".jd.com", path: "/", expires: 10};
                o.set("areaId", t, n), o.set("ipLoc-djd", e, n)
            };
            if ($.isFunction(e)) {
                var r = o.get("ipLoc-djd");
                r ? e(getAreaFromSeq(r)) : function fetchLocaleByIp() {
                    return (0, i["default"])(s.IP_LOCATE, {
                        name: "jsonpAreaLocate",
                        speedID: 10,
                        umpID: 12,
                        dataCheck: function dataCheck(e) {
                            if (!e || 0 !== e.code || !e.data) return !1
                        }
                    }).then(function (e) {
                        var t = e.data, n = t.provinceid, r = t.cityid, o = t.districtid, i = t.townid,
                            a = void 0 === i ? 0 : i;
                        return [n, r, o, a]
                    })["catch"](function (e) {
                        return a["default"].error(e), h
                    })
                }().then(function (t) {
                    e(t[0]), n(t.join("-"), t[0])
                })
            } else n(e, t)
        }
    };

    function isBlank(e) {
        var t = arguments;
        if (t.length > 1) {
            for (var n = 0, r = t.length; n < r; n++) if (isBlank(t[n])) return !0;
            return !1
        }
        return "undefined" === String(e) || "null" === String(e) || "string" == typeof e && "" === function trim(e) {
            return (e || "").replace(/(^\s*)|(\s*$)/g, "")
        }(e)
    }

    function getAreaFromSeq(e) {
        return e && e.split("-")[0]
    }

    function changeAreaByIdSeq(e, t) {
        var n = {
            provinceId: 0,
            provinceName: "",
            cityId: 0,
            cityName: "",
            districtId: 0,
            districtName: "",
            townId: 0,
            townName: ""
        };
        "0" === e && (e = m[0]);
        var r = function getProvince(e) {
            var t = {id: e, name: ""}, n = 0, r = g.province["_" + e];
            r || (r = g.province["_" + m[0]], n = 1, t.id = m[0]);
            return t.name = r, {value: t, isDefault: n}
        }(e).value;
        n.provinceId = r.id, n.provinceName = r.name, t(n)
    }

    function getProvinceList() {
        var e = [];
        return g.provinceList && g.provinceList.length > 0 ? e = g.provinceList : ($.each(g.province, function (t, n) {
            e.push({id: t.replace("_", ""), name: n})
        }), g.provinceList = e), e
    }

    function renderProvinceList(e, t, n, r) {
        var o = this, i = o.options.provinceList, a = [], l = [];
        return l = i || getProvinceList(), $.each(l, function (e, n) {
            a.push(function longAreaNameProcess(e, t, n, r) {
                var o = "";
                if (t.name.length >= n.longerAreaSize ? o = "longer-area" : t.name.length >= n.longAreaSize && (o = "long-area"), r && n.className.selected || o) {
                    var i = $(e);
                    r && n.className.selected && i.find("a:first").addClass(n.className.selected), o && i.addClass(o), e = (e = $("<div/>").html(i).html()).replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                }
                return t.tpl ? $.tpl(t.tpl, t) : $.tpl(e, t)
            }(t, n, o.options, n.id.toString() === r.provinceId.toString()))
        }), $.tpl(e, {list: a.join(""), index: n})
    }

    function bindAreaVerSelectEvent() {
        var e = this;
        e.el.delegate("[data-ver-href]", "click", function () {
            var t = $(this), n = t.data("ver-id"), r = String(t.data("ver-href") || "");
            if (r) {
                r += (-1 === r.indexOf("?") ? "?" : "&") + "a=" + Date.now(), function selectAreaVer(e) {
                    o.set("PCSYHWHR", e, {domain: ".jd.com", path: "/", expires: 10})
                }(n);
                var i = t.attr("clstag") ? t.attr("clstag").split("_")[1] : "";
                (0, d.reportClick)({poi: "".concat(y).concat(i), text: t.text().trim(), url: r});
                var a = t.data("area");
                if (a) {
                    var l = g.province["_" + a];
                    if (l) return void selectArea.call(e, {id: a, name: l}, function () {
                        location.href = r
                    })
                }
                location.href = r
            }
        })
    }

    function selectArea(e, t) {
        var n = this.el, r = this.options, i = saveSelectedLocal(n, e.id, 0);
        changeAreaByIdSeq(getAreaFromSeq(i), function (e) {
            t && t(e), r.writeCookie && function writeCookie(e, t, n) {
                o.set(e.cookieMapping.areaId, t, e.cookieOpts), o.set(e.cookieMapping.allLocal, n, e.cookieOpts)
            }(r, e.provinceId, i), r.syncServer && r.writeServer && function writeServer(e, t) {
                b.sync(e, t)
            }(i, e.provinceId)
        })
    }

    function showAreaContent(e, t) {
        var n = this, r = n.options.className, o = r.hover, i = r.click;
        e ? (v > -1 && (clearTimeout(v), v = -1), function offsetBoxLeft() {
            var e = this.el, t = $(this.css.content), n = $(this.css.text).width(), r = t.width(), o = $(p).width(),
                i = e.offset().left, a = $(this.css.text).offset().left;
            t.data("left") ? t.css("left", t.data("left")) : t.data("left", t.css("left"));
            if (i + r > o) {
                var l = r - n - 10;
                l > a && (l -= l - a + n - 20), t.css({left: "-" + l + "px"})
            } else i < -1 * parseInt(t.css("left")) && t.css({left: "0px"})
        }.call(n), n.el.addClass(o), t && (n.el.addClass(i), n.el.find(".dropdown-layer")[0].focus()), $(n.css.text).attr("aria-expanded", !0), v = setTimeout(function () {
            n.el.addClass(o)
        }, 1)) : (v > -1 && (clearTimeout(v), v = -1), n.el.removeClass("".concat(o, " ").concat(i)), $(n.css.text).removeAttr("aria-expanded"))
    }

    function saveSelectedLocal(e, t, n) {
        var r = e.data("select-local");
        return r = r && r.split("-") || [0, 0, 0, 0], "object" === _typeof(t) ? r = function convertAreaIdList(e) {
            return e ? [e.provinceId, e.cityId, e.districtId, e.townId] : [0, 0, 0, 0]
        }(t) : (r = g.city[t]) && (r = (r + "-0").split("-")), r = r.join("-"), e.data("select-local", r), r
    }

    function drawSelectAreaContent(e, t) {
        var n = this.el, r = this.options, o = r.tplContentWrap, i = r.tplContentItem;
        $(this.css.content_content).html(renderProvinceList.call(this, o, i, 0, e)), -1 === t && saveSelectedLocal(n, e), function bindAreaSelectEvent() {
            var e = this, t = e.el, n = e.options, r = n.className;
            $("." + r.content_content, t).undelegate("a[data-id]", "click").delegate("a[data-id]", "click", function (o) {
                o.preventDefault();
                var i = $(this), a = {id: i.data("id"), name: i.html()};
                n.className.selected && $("." + r.content_content + " a." + n.className.selected, t).removeClass(n.className.selected), selectArea.call(e, a, function (t) {
                    n.className.selected && i.addClass(n.className.selected), n.selectedClose && showAreaContent.call(e, !1), drawSelectAreaText.call(e, t), $.isFunction(n.onChange) && n.onChange.call(e, i, a, t)
                })
            }), $("." + r.content_content, t).undelegate("a[data-onchange=1]", "click").delegate("a[data-onchange=1]", "click", function () {
                var o = $(this);
                n.className.selected && ($("." + r.content_content + " a." + n.className.selected, t).removeClass(n.className.selected), o.addClass(n.className.selected)), n.selectedClose && showAreaContent.call(e, !1), $.isFunction(n.onChange) && n.onChange.call(e, o)
            })
        }.call(this, r)
    }

    function drawSelectAreaText(e) {
        var t = [], n = [];
        !function localObjectToArray(e, t, n) {
            $.each(function localObjectToList(e) {
                return e && [{id: e.provinceId, name: e.provinceName}, {
                    id: e.cityId,
                    name: e.cityName
                }, {id: e.districtId, name: e.districtName}, {id: e.townId, name: e.townName}] || []
            }(e), function (e, r) {
                isBlank(r.id) || 0 === r.id || (t.push(r.id), n.push(r.name))
            })
        }(e, n, t), n = n.join("-"), t = t.join(""), $(this.css.text_text).html(t).attr("data-id", n).attr("title", t)
    }

    var P = function (e) {
        function HeadAreamini() {
            var e, t, n;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, HeadAreamini);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return _possibleConstructorReturn(n, (t = n = _possibleConstructorReturn(this, (e = _getPrototypeOf(HeadAreamini)).call.apply(e, [this].concat(o))), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "defaultOptions", {
                hasCssLink: !0,
                baseVersion: "1.0.0",
                cssLinkVersion: "1.0.0",
                syncServer: !1,
                initArea: null,
                defaultArea: null,
                provinceList: null,
                provinceExtend: !0,
                longAreaSize: 4,
                longerAreaSize: 12,
                cookieMapping: {areaId: "areaId", allLocal: "ipLoc-djd"},
                writeCookie: !0,
                cookieOpts: {expires: null, path: null, domain: null, secure: null},
                writeServer: !0,
                className: {
                    hover: "ui-areamini-hover",
                    text: "ui-areamini-text-wrap",
                    text_text: "ui-areamini-text",
                    content: "ui-areamini-content-wrap",
                    close: "ui-areamini-close",
                    content_tab: "ui-areamini-tab",
                    content_content: "ui-areamini-content",
                    content_content_list: "ui-areamini-content-list",
                    selected: ""
                },
                tplContentWrap: '<ul class="ui-areamini-content-list"><%=list%></ul>',
                tplContentItem: '<li><a data-id="<%=id%>" href="javascript:void(0)" role="menuitem" tabindex="-1"><%=name%></a></li>',
                event: "hover",
                onReady: null,
                onChange: null,
                selectedClose: !0
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "css", {}), t))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(HeadAreamini, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(HeadAreamini, [{
            key: "shouldComponentUpdate", value: function shouldComponentUpdate() {
                return !1
            }
        }, {
            key: "init", value: function init(e, t) {
                var n = this;
                n.el = e, n.options = (0, u.merge)({}, this.defaultOptions, t);
                var r = n.options, i = n.el;
                r.scopeLevel = 1, n.css = function transformClassName(e, t) {
                    var n = {};
                    return $.each(t, function (r, o) {
                        var i = r.split("_"), a = [], l = i.length;
                        $.each(i, function (e, n) {
                            if (a.push("." + t[n]), l > 1 && 2 + e === l) return a.push("." + o), !1
                        }), n[r] = e + " " + a.join(" ")
                    }), n
                }("#" + i[0].id, r.className), r.provinceList && r.provinceExtend && (r.provinceList = $.extend(!0, [], getProvinceList().concat(r.provinceList))), function bindAreaEvent() {
                    var e = function postClick(e) {
                        var t = e.text().trim();
                        (0, d.reportClick)({poi: "".concat(y, "01"), text: t})
                    };
                    this.el.delegate(".ui-areamini-text-wrap", "click", function () {
                        e($(this))
                    }), this.el.delegate(".ui-areamini-content-list .item", "click", function () {
                        e($(this))
                    })
                }.call(n), bindAreaVerSelectEvent.call(n), function bindAreaInterSelectEvent() {
                    this.el.delegate(".areamini_inter_lk", "click", function () {
                        var e = $(this);
                        if (!e.data("ver-href")) {
                            var t = e.attr("href"), n = e.text().trim(),
                                r = e.attr("clstag") ? e.attr("clstag").split("_")[1] : "";
                            (0, d.reportClick)({poi: "".concat(y).concat(r), url: t, text: n})
                        }
                    })
                }.call(n), function loadLocal(e, t) {
                    var n = e.initArea || o.get(e.cookieMapping.allLocal) || e.defaultArea || h;
                    isBlank(e.initArea) && e.syncServer ? b.sync(function (e) {
                        changeAreaByIdSeq(e || getAreaFromSeq(n), t)
                    }) : changeAreaByIdSeq(getAreaFromSeq(n), t)
                }(r, function (e) {
                    drawSelectAreaText.call(n, e), drawSelectAreaContent.call(n, e, -1);
                    r.event;
                    $(n.css.text).bind("mouseenter click", function (e) {
                        return _.sendExpose({poi: "head|topbar|loct"}), showAreaContent.call(n, !0, "click" === e.type), !1
                    }), $(i).bind("mouseleave", function () {
                        _.stopSendExpose(), showAreaContent.call(n, !1)
                    }), $(n.css.close).bind("click", function () {
                        showAreaContent.call(n, !1)
                    }), $.isFunction(r.onReady) && r.onReady.call(n, e)
                })
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                this.init($("#ttbar-mycity"), {
                    hasCssLink: !1,
                    className: {hover: "hover", selected: "selected", click: "clickHover"},
                    provinceList: [],
                    tplContentWrap: '<div class="ui-areamini-content-list"><%=list%></div>',
                    tplContentItem: '<div class="item"><a data-id="<%=id%>" href="javascript:void(0)" role="menuitem" tabindex="-1"><%=name%></a></div>',
                    syncServer: !0,
                    writeCookie: !1,
                    threeWordDeal: function threeWordDeal(e) {
                        var t = e.find(".ui-areamini-text").html(), n = e.find(".dd-spacer");
                        3 === t.length ? n.addClass("dd-spacer-extend") : n.removeClass("dd-spacer-extend")
                    },
                    onReady: function onReady(e) {
                        this.el.find(".ui-areamini-text-wrap").show();
                        var t = o.get("areaId");
                        if (l["default"].check() && t) {
                            var n = "areaId";
                            l["default"].get(n) ? l["default"].get(n) !== t && (l["default"].set(n, t), l["default"].clearByReg("^jd_home_2015_")) : l["default"].set(n, t)
                        }
                        this.options.threeWordDeal(this.el);
                        var r = this.el.find(".dropdown-layer"), i = f.CLSTAGPREFIX, a = "head|topbar",
                            c = '<div class="areamini_inter">\n            <div class="areamini_inter_split" />\n            <p class="areamini_inter_desc">地区专享版本</p>\n            <ul class="areamini_inter_list">\n              <li class="areamini_inter_item">\n                <a class="areamini_inter_lk" href="javascript: void(0)" data-ver-id="2" data-area="52993" data-ver-href="//hk.jd.com" clstag="'.concat(i).concat(a, '_01hk" role="menuitem" tabindex="-1">\n                  <div class="areamini_inter_name">中國港澳</div>\n                </a>\n              </li>\n            </ul>\n            </div>'),
                            s = '\n          <div class="areamini_inter">\n            <div class="areamini_inter_split" />\n            <p class="areamini_inter_desc">Available Sites</p>\n            <ul class="areamini_inter_list">\n              <li class="areamini_inter_item">\n                <a class="areamini_inter_lk" href="//www.joybuy.com/?source=1&visitor_from=2" target=\'_blank\'\n                  clstag="'.concat(i).concat(a, '_0101" role="menuitem" tabindex="-1">\n                  <div class="areamini_inter_ico areamini_inter_ico_global" />\n                  <div class="areamini_inter_name">Global Site</div>\n                </a>\n              </li>\n              <li class="areamini_inter_item">\n                <a class="areamini_inter_lk" href="//www.jd.ru/?source=1&visitor_from=2" target=\'_blank\'\n                  clstag="').concat(i).concat(a, '_0102" role="menuitem" tabindex="-1">\n                  <div class="areamini_inter_ico areamini_inter_ico_russia" />\n                  <div class="areamini_inter_name">Сайт России</div>\n                </a>\n              </li>\n              <li class="areamini_inter_item">\n                <a class="areamini_inter_lk" href="//www.jd.id/?source=1&visitor_from=2" target=\'_blank\'\n                  clstag="').concat(i).concat(a, '_0103" role="menuitem" tabindex="-1">\n                  <div class="areamini_inter_ico areamini_inter_ico_indonesia" />\n                  <div class="areamini_inter_name">Situs Indonesia</div>\n                </a>\n              </li>\n              <li class="areamini_inter_item">\n                <a class="areamini_inter_lk" href="//www.joybuy.es/?source=1&visitor_from=2" target=\'_blank\'\n                  clstag="').concat(i).concat(a, '_0104" role="menuitem" tabindex="-1">\n                  <div class="areamini_inter_ico areamini_inter_ico_spain" />\n                  <div class="areamini_inter_name">Sitio de España</div>\n                </a>\n              </li>\n              <li class="areamini_inter_item">\n                <a class="areamini_inter_lk" href="//www.jd.co.th/?source=1&visitor_from=2" target=\'_blank\'\n                  clstag="').concat(i).concat(a, '_0105" role="menuitem" tabindex="-1">\n                  <div class="areamini_inter_ico areamini_inter_ico_thailand" />\n                  <div class="areamini_inter_name">เว็บไซต์ประเทศไทย</div>\n                </a>\n              </li>\n            </ul>\n          </div>');
                        r.append(c + s)
                    },
                    onChange: function onChange(e, t, n) {
                        this.options.threeWordDeal(this.el), void 0 !== t && window.location.reload()
                    }
                })
            }
        }, {
            key: "render", value: function render() {
                return r["default"].createElement("li", {
                    className: "shortcut_btn dropdown",
                    id: "ttbar-mycity"
                }, r["default"].createElement("a", {
                    href: "javascript:void(0);",
                    id: "areamini",
                    className: "dt cw-icon ui-areamini-text-wrap",
                    style: "display:none",
                    "aria-haspopup": "true",
                    "aria-label": "地区",
                    role: "button"
                }, r["default"].createElement("i", {className: "iconfont iconfont-location"}, ""), r["default"].createElement("span", {className: "ui-areamini-text"})), r["default"].createElement("div", {
                    className: "dd dropdown-layer",
                    tabIndex: -1,
                    "area-labelledby": "areamini",
                    role: "menu"
                }, r["default"].createElement("div", {className: "dd-spacer"}), r["default"].createElement("div", {className: "ui-areamini-content-wrap"}, r["default"].createElement("div", {className: "ui-areamini-content"}))))
            }
        }]), HeadAreamini
    }();
    t["default"] = P
}, function (e, t, n) {
    "use strict";

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(62);
    var r = {
        check: function check() {
            return "object" === _typeof(window.localStorage)
        }, has: function has(e) {
            return !!localStorage.getItem(e)
        }, set: function set(e, t) {
            try {
                localStorage.setItem(e, JSON.stringify(t))
            } catch (n) {
            }
        }, get: function get(e) {
            try {
                return JSON.parse(localStorage.getItem(e))
            } catch (t) {
            }
        }, remove: function remove(e) {
            localStorage.removeItem(e)
        }, clearByReg: function clearByReg(e) {
            var t = new RegExp(e), n = window.localStorage;
            for (var r in n) t.test(r) && this.remove(r)
        }, clear: function clear() {
            localStorage.clear()
        }
    };
    t["default"] = r
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(32)), i = n(6), a = n(36),
        l = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(16));
    n(196);
    var c = n(4);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var s = "head|topbar|", u = "company", f = "06", d = new a.DelayExpose({delayTime: 1e3}), p = function (e) {
        function ShortcutCompany() {
            var e, t, n;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ShortcutCompany);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
            return _possibleConstructorReturn(n, (t = n = _possibleConstructorReturn(this, (e = _getPrototypeOf(ShortcutCompany)).call.apply(e, [this].concat(o))), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "tabName", "企业采购"), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "tabLink", "//b.jd.com/"), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "onMouseenter", function () {
                d.sendExpose({desc: l.showCompany2 ? "highlight" : "normal", poi: "".concat(s).concat(u)})
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "onMouseleave", function () {
                d.stopSendExpose()
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "onClick", function () {
                (0, i.reportClick)({poi: "".concat(s).concat(f), text: n.tabName, url: n.tabLink})
            }), t))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ShortcutCompany, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ShortcutCompany, [{
            key: "getDropdown", value: function getDropdown() {
                return r["default"].createElement("div", {className: "dd dropdown-layer"}, r["default"].createElement("div", {className: "dd-inner"}, r["default"].createElement("div", {className: "item"}, r["default"].createElement("a", {
                    href: "//b.jd.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "企业购")), r["default"].createElement("div", {className: "item"}, r["default"].createElement("a", {
                    href: "//shang.jd.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "商用场景馆")), r["default"].createElement("div", {className: "item"}, r["default"].createElement("a", {
                    href: "//imall.jd.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "工业品")), r["default"].createElement("div", {className: "item"}, r["default"].createElement("a", {
                    href: "//o.jd.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "礼品卡"))))
            }
        }, {
            key: "render", value: function render() {
                var e = (0, o["default"])("shortcut_btn fore5 dropdown className shortcut_btn_company", l.showCompany2 ? "shortcut_btn_company2" : "");
                return r["default"].createElement("li", {
                    className: e,
                    clstag: (0, c.generateClstag)("".concat("head|topbar_").concat(f)),
                    onMouseenter: this.onMouseenter,
                    onMouseleave: this.onMouseleave,
                    onClick: this.onClick
                }, r["default"].createElement("div", {className: "dt cw-icon"}, r["default"].createElement("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: this.tabLink,
                    "aria-label": this.tabName
                }, this.tabName), r["default"].createElement("i", {className: "iconfont"}, "")), this.getDropdown())
            }
        }]), ShortcutCompany
    }();
    t["default"] = p
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0)), o = n(41), i = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(15)), a = n(16), l = n(6);

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var c = "head|topbar|05", s = function (e) {
        function ShortcutMember() {
            var e, t, n;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ShortcutMember);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
            return _possibleConstructorReturn(n, (t = n = _possibleConstructorReturn(this, (e = _getPrototypeOf(ShortcutMember)).call.apply(e, [this].concat(o))), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "state", {isCompany: !1}), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "tabName", "京东会员"), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "getJumpUrl", function () {
                return n.state.isCompany ? i.COMPANY_BVIP : i.VIP_USER
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "onClick", function () {
                (0, l.reportClick)({poi: c, text: n.tabName, url: n.getJumpUrl()})
            }), t))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ShortcutMember, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ShortcutMember, [{
            key: "componentDidMount", value: function componentDidMount() {
                var e = this;
                (0, o.getCompanyinfo)().then(function (t) {
                    var n = t.isCompany;
                    e.setState({isCompany: n})
                })
            }
        }, {
            key: "render", value: function render() {
                return r["default"].createElement("li", {
                    className: "shortcut_btn fore4",
                    clstag: "".concat(a.CLSTAGPREFIX, "head|topbar_05")
                }, r["default"].createElement("div", {className: "dt"}, r["default"].createElement("a", {
                    target: "_blank",
                    href: this.getJumpUrl(),
                    onClick: this.onClick,
                    "aria-label": this.tabName
                }, this.tabName)))
            }
        }]), ShortcutMember
    }();
    t["default"] = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = _interopRequireDefault(n(0)), o = n(36), i = n(16), a = n(6), l = _interopRequireDefault(n(199));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var c = new o.DelayExpose({delayTime: 1e3}), s = function ShortcutMobile() {
        var e = this, t = !1;
        return r["default"].createElement("li", {
            id: "J_mobile",
            className: "shortcut_btn fore10 mobile",
            clstag: "".concat(i.CLSTAGPREFIX, "head|topbar_09"),
            ref: function ref(t) {
                e.$mobile = $(t)
            },
            onMouseEnter: function onMouseenter() {
                c.sendExpose({poi: "head|topbar|qrcode"}), e.$mobile.addClass("mobile_on"), t || (t = !0, (0, l["default"])(e.$mobilePop[0]))
            },
            onMouseLeave: function onMouseleave() {
                c.stopSendExpose(), e.$mobile.removeClass("mobile_on")
            },
            onClick: function onClick() {
                (0, a.reportClick)({poi: "head|topbar|09", text: "手机京东"})
            }
        }, r["default"].createElement("div", {className: "dt mobile_txt"}, "手机京东"), r["default"].createElement("div", {className: "mobile_static"}, r["default"].createElement("div", {className: "mobile_static_qrcode"})), r["default"].createElement("div", {
            id: "J_mobile_pop",
            className: "mod_loading mobile_pop",
            ref: function ref(t) {
                e.$mobilePop = $(t)
            }
        }))
    };
    t["default"] = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function _default(e) {
        e.setAttribute("class", e.getAttribute("class").replace("mod_loading", "").trim()), o["default"].render(r["default"].createElement(c, {data: pageConfig.shortcutMobileData}), e)
    }, n(10), n(1), n(2), n(3), n(25);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(0)), i = _interopRequireDefault(n(32)),
        a = _interopRequireDefault(n(39)), l = n(6);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    n(200);
    var c = function (e) {
        function ShortcutMobileDropdown(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ShortcutMobileDropdown), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(ShortcutMobileDropdown).call(this, e)))), "deviceData", {
                iphone: {
                    classNameSuffix: "ios",
                    text: "APP Store"
                }, android: {classNameSuffix: "and", text: "安卓市场"}, ipad: {classNameSuffix: "pad", text: "APP Store"}
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "timestamp", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "recordTime", function () {
                t.timestamp = (new Date).getTime()
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "onMouseLeave", function () {
                Number((((new Date).getTime() - t.timestamp) / 1e3).toFixed(2)) < 1 || (0, l.reportExpose)({poi: "head|topbar|qrcode"})
            }), t.state = {data: e.data}, t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ShortcutMobileDropdown, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ShortcutMobileDropdown, [{
            key: "renderDevices", value: function renderDevices(e) {
                var t = this;
                return e && e.length ? e.map(function (e, n) {
                    var o = t.deviceData[e.type];
                    return r["default"].createElement("a", {
                        className: (0, i["default"])("mobile_pop_device_lk", "mobile_pop_device_".concat(o ? o.classNameSuffix : "")),
                        href: e.src,
                        target: "_blank"
                    }, o ? o.text : "")
                }) : ""
            }
        }, {
            key: "renderDropdown", value: function renderDropdown(e) {
                var t = this;
                return e.map(function (e, n) {
                    return r["default"].createElement("div", {className: "mobile_pop_item"}, r["default"].createElement("div", {className: (0, i["default"])("mobile_pop_qrcode", "mobile_pop_qrcode_".concat(n + 1))}, r["default"].createElement("img", {src: (0, a["default"])(e.img)})), r["default"].createElement("div", {className: "mobile_pop_info"}, r["default"].createElement("h5", {className: "mobile_pop_tit"}, e.url && r["default"].createElement("a", {
                        href: e.url,
                        target: "_blank"
                    }, e.title), !e.url && e.title), r["default"].createElement("p", {className: "mobile_pop_value"}, e.desc), e.devices && e.devices.length > 0 && r["default"].createElement("p", {className: "mobile_pop_device"}, t.renderDevices(e.devices))))
                })
            }
        }, {
            key: "render", value: function render() {
                return this.state.data.length ? r["default"].createElement("div", {
                    onMouseEnter: this.recordTime,
                    onMouseLeave: this.onMouseLeave
                }, this.renderDropdown(this.state.data)) : ""
            }
        }]), ShortcutMobileDropdown
    }()
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(31)), i = n(36), a = n(6), l = n(16);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    n(202);
    var c = new i.DelayExpose({delayTime: 1e3}), s = "head|topbar|04", u = (0, o["default"])({
        loader: function loader() {
            return n.e(14).then(n.t.bind(null, 269, 7))
        }, loading: function loading(e) {
            return e.pastDelay ? r["default"].createElement("div", null) : (e.err, r["default"].createElement("div", null))
        }, render: function render(e, t) {
            return r["default"].createElement(e["default"], t)
        }, delay: 0
    }), f = function (e) {
        function ShortcutNerv() {
            var e;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ShortcutNerv), _defineProperty(_assertThisInitialized(_assertThisInitialized(e = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(ShortcutNerv).apply(this, arguments)))), "tabName", "我的京东"), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "jumpLink", "//home.jd.com/"), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onMouseenter", function () {
                e.enterStamp = Date.now();
                var t = e.state.renderDropdown;
                c.sendExpose({poi: "head|topbar|myJD"}), t || e.setState({renderDropdown: !0})
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onMouseleave", function () {
                c.stopSendExpose(), !e.enterStamp || Date.now() - e.enterStamp < 1e3 || (e.enterStamp = null)
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onClick", function () {
                (0, a.reportClick)({poi: s, text: e.tabName, url: e.jumpLink})
            }), e.state = {}, e
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ShortcutNerv, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ShortcutNerv, [{
            key: "getDropdown", value: function getDropdown() {
                return this.state.renderDropdown ? r["default"].createElement(u, null) : ""
            }
        }, {
            key: "render", value: function render() {
                return r["default"].createElement("li", {
                    id: "ttbar-myjd",
                    className: "shortcut_btn fore3 dropdown",
                    clstag: "".concat(l.CLSTAGPREFIX, "head|topbar_04"),
                    onMouseenter: this.onMouseenter,
                    onMouseleave: this.onMouseleave,
                    onClick: this.onClick
                }, r["default"].createElement("div", {className: "dt cw-icon"}, r["default"].createElement("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: this.jumpLink,
                    "aria-label": this.tabName
                }, this.tabName), r["default"].createElement("i", {className: "iconfont"}, "")), this.getDropdown())
            }
        }]), ShortcutNerv
    }();
    t["default"] = f
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3), n(5);
    var r = _interopRequireDefault(n(0)), o = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(17)), i = _interopRequireDefault(n(11)), a = n(16), l = n(76), c = n(6);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var s = "head|topbar|client", u = "head|topbar|07", f = new (n(36).DelayExpose)({delayTime: 1e3}),
        d = function (e) {
            function ShortService() {
                var e;
                return function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, ShortService), _defineProperty(_assertThisInitialized(_assertThisInitialized(e = function _possibleConstructorReturn(e, t) {
                    return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
                }(this, _getPrototypeOf(ShortService).apply(this, arguments)))), "tabName", "客户服务"), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "dropDownRef", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "buttonRef", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onMouseenter", function () {
                    f.sendExpose({poi: s}), e.loaded || (e.loaded = !0, e.requestData())
                }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onMouseleave", function () {
                    var t = e.state.isClick;
                    f.stopSendExpose(), t && e.setState({isClick: !1})
                }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onClick", function () {
                    (0, c.reportClick)({poi: u, text: e.tabName})
                }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onClickButton", function () {
                    var t = e.state.isClick;
                    e.onMouseenter(), t || e.setState({isClick: !0})
                }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onKeyDown", function (t) {
                    (0, l.handleKeydown)(t, {escCallback: e.exitDropdown})
                }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "exitDropdown", function () {
                    e.setState({isClick: !1}, function () {
                        e.buttonRef.focus()
                    })
                }), e.state = {cus: [], bus: [], isClick: !1}, e
            }

            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _setPrototypeOf(e, t)
            }(ShortService, r["default"].Component), function _createClass(e, t, n) {
                return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
            }(ShortService, [{
                key: "processData", value: function processData(e) {
                    var t = [], n = [];
                    return e.forEach(function (e) {
                        (0 === e.c ? t : n).push(e)
                    }), {cus: t, bus: n}
                }
            }, {
                key: "requestData", value: function requestData() {
                    var e = this;
                    (0, i["default"])(o.HEAD_SERVICE, {
                        backup: o.HEAD_SERVICE_BACKUP,
                        charset: "gb2312",
                        cache: !0,
                        name: "jsonpshortService",
                        speedID: 12,
                        umpID: 14
                    }).then(function (t) {
                        var n = e.processData(t.data), r = n.cus, o = n.bus;
                        e.setState({cus: r, bus: o})
                    })
                }
            }, {
                key: "getItem", value: function getItem(e) {
                    return r["default"].createElement("div", {className: "item"}, r["default"].createElement("a", {
                        href: e.u,
                        target: "_blank",
                        className: e.c || !1,
                        tabIndex: -1,
                        role: "menuitem"
                    }, e.n))
                }
            }, {
                key: "getContent", value: function getContent() {
                    var e = this, t = this.state, n = t.cus, o = t.bus, i = t.isClick;
                    if (n.length || o.length) {
                        var a = [];
                        return a.push(r["default"].createElement("div", {className: "item-client"}, "客户")), n.forEach(function (t) {
                            a.push(e.getItem(t))
                        }), a.push(r["default"].createElement("div", {className: "item-business"}, "商户")), o.forEach(function (t) {
                            a.push(e.getItem(t))
                        }), r["default"].createElement("div", {
                            className: "dd dropdown-layer",
                            tabIndex: -1,
                            "aria-labelledby": "shortcutServiceButton",
                            role: "menu",
                            ref: function ref(t) {
                                e.dropDownRef = t, i && e.dropDownRef && e.dropDownRef.focus()
                            }
                        }, a)
                    }
                    return r["default"].createElement("div", {className: "dd dropdown-layer"}, r["default"].createElement("div", {className: "dd-inner"}, r["default"].createElement("span", {className: "loading"})))
                }
            }, {
                key: "render", value: function render() {
                    var e = this, t = this.state.isClick;
                    return r["default"].createElement("li", {
                        id: "ttbar-serv",
                        className: "shortcut_btn fore8 dropdown".concat(t ? " clickHover" : ""),
                        clstag: "".concat(a.CLSTAGPREFIX, "head|topbar_07"),
                        onMouseenter: this.onMouseenter,
                        onMouseleave: this.onMouseleave,
                        onClick: this.onClick,
                        onKeyDown: this.onKeyDown
                    }, r["default"].createElement("div", {
                        id: "shortcutServiceButton",
                        className: "dt cw-icon",
                        onClick: this.onClickButton,
                        ref: function ref(t) {
                            e.buttonRef = t
                        },
                        tabIndex: 0,
                        role: "button",
                        "aria-label": this.tabName,
                        "aria-haspopup": "true",
                        "aria-expanded": t
                    }, this.tabName, r["default"].createElement("i", {className: "iconfont"}, "")), this.getContent())
                }
            }]), ShortService
        }();
    t["default"] = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(17)), i = _interopRequireDefault(n(11)), a = n(76), l = n(36), c = n(6), s = n(4);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var u = "head|topbar|website", f = "head|topbar|08", d = new l.DelayExpose({delayTime: 1e3}), p = function (e) {
        function ShortcutSitenav() {
            var e;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ShortcutSitenav), _defineProperty(_assertThisInitialized(_assertThisInitialized(e = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(ShortcutSitenav).apply(this, arguments)))), "tabName", "网站导航"), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "buttonId", "shortcutSitenavButton"), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onMouseenter", function () {
                d.sendExpose({poi: u}), e.loaded || (e.loaded = !0, e.requestData())
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onMouseleave", function () {
                e.state.isClick && e.setState({isClick: !1}), d.stopSendExpose()
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onClick", function (t, n) {
                var r = e.state.isClick;
                e.onMouseenter(), (0, c.reportClick)({poi: f, text: t, url: n}), r || e.setState({isClick: !0})
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onKeyDown", function (t) {
                (0, a.handleKeydown)(t, {escCallback: e.exitDropdown})
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "exitDropdown", function () {
                e.setState({isClick: !1}, function () {
                    e.buttonRef.focus()
                })
            }), e.state = {list: [], isClick: !1}, e
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ShortcutSitenav, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ShortcutSitenav, [{
            key: "requestData", value: function requestData() {
                var e = this;
                (0, i["default"])(o.HEAD_SITENAV, {
                    backup: o.HEAD_SITENAV_BACKUP,
                    charset: "gb2312",
                    cache: !0,
                    name: "jsonpshortcutSitenav",
                    speedID: 13,
                    umpID: 15,
                    dataCheck: function dataCheck(e) {
                        if (!e || "object" !== _typeof(e)) return !1
                    }
                }).then(function (t) {
                    e.setState({list: t.data})
                })
            }
        }, {
            key: "getContent", value: function getContent() {
                var e = this, t = this.state, n = t.list, o = t.isClick;
                if (n.length) {
                    var i = n.map(function (t, n) {
                        var o = t.u ? r["default"].createElement("a", {
                            href: t.u,
                            target: "_blank",
                            className: t.c || "",
                            onClick: e.onClick.bind(e, t.n, t.u),
                            tabIndex: -1,
                            role: "menuitem"
                        }, t.n) : t.n, i = t.s.map(function (t) {
                            return r["default"].createElement("div", {className: "item"}, r["default"].createElement("a", {
                                href: t.u,
                                target: "_blank",
                                className: t.c || "",
                                onClick: e.onClick.bind(e, t.n, t.u),
                                tabIndex: -1,
                                role: "menuitem"
                            }, t.n))
                        });
                        return r["default"].createElement("dl", {className: "fore".concat(n + 1)}, r["default"].createElement("dt", null, o), r["default"].createElement("dd", null, i))
                    });
                    return r["default"].createElement("div", {
                        className: "dd dropdown-layer",
                        tabIndex: -1,
                        "aria-labelledby": this.buttonId,
                        role: "menu",
                        ref: function ref(t) {
                            e.dropDownRef = t, o && e.dropDownRef && e.dropDownRef.focus()
                        }
                    }, i)
                }
                return r["default"].createElement("div", {className: "dd dropdown-layer"}, r["default"].createElement("div", {className: "dd-inner"}, r["default"].createElement("span", {className: "loading"})))
            }
        }, {
            key: "render", value: function render() {
                var e = this, t = this.state.isClick;
                return r["default"].createElement("li", {
                    id: "ttbar-navs",
                    className: "shortcut_btn fore9 dropdown".concat(t ? " clickHover" : ""),
                    clstag: (0, s.generateClstag)("head|topbar_08"),
                    onMouseenter: this.onMouseenter,
                    onMouseleave: this.onMouseleave,
                    onKeyDown: this.onKeyDown
                }, r["default"].createElement("div", {
                    className: "dt cw-icon",
                    id: this.buttonId,
                    onClick: this.onClick.bind(this, this.tabName, ""),
                    ref: function ref(t) {
                        e.buttonRef = t
                    },
                    tabIndex: 0,
                    role: "button",
                    "aria-label": this.tabName,
                    "aria-haspopup": "true",
                    "aria-expanded": t
                }, this.tabName, r["default"].createElement("i", {className: "iconfont"}, "")), this.getContent())
            }
        }]), ShortcutSitenav
    }();
    t["default"] = p
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3), n(18), n(7), n(5);
    var r = _interopRequireDefault(n(0)), o = n(41), i = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(17)), a = _interopRequireDefault(n(44)), l = _interopRequireDefault(n(32)), c = n(63), s = n(16), u = n(6),
        f = n(36), d = _interopRequireDefault(n(11)), p = _interopRequireDefault(n(31));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _slicedToArray(e, t) {
        return function _arrayWithHoles(e) {
            if (Array.isArray(e)) return e
        }(e) || function _iterableToArrayLimit(e, t) {
            var n = [], r = !0, o = !1, i = undefined;
            try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (c) {
                o = !0, i = c
            } finally {
                try {
                    r || null == l["return"] || l["return"]()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    n(206);
    var m = new f.DelayExpose({delayTime: 1e3}), h = "head|topbar|02", _ = (0, p["default"])({
        loader: function loader() {
            return n.e(15).then(n.t.bind(null, 270, 7))
        }, loading: function loading(e) {
            return e.pastDelay ? r["default"].createElement("div", null) : (e.err, r["default"].createElement("div", null))
        }, render: function render(e, t) {
            return r["default"].createElement(e["default"], t)
        }, delay: 0
    }), y = function (e) {
        function ShortcutUserinfo() {
            var e;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ShortcutUserinfo), _defineProperty(_assertThisInitialized(_assertThisInitialized(e = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(ShortcutUserinfo).apply(this, arguments)))), "clstag", "".concat(s.CLSTAGPREFIX, "head|topbar_02")), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "jumpLink", "//home.jd.com/"), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onMouseenter", function () {
                var t = e.state.renderDropdown;
                e.enterStamp = Date.now(), m.sendExpose({poi: "head|topbar|login"}), t || e.setState({renderDropdown: !0})
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onMouseleave", function () {
                m.stopSendExpose(), !e.enterStamp || Date.now() - e.enterStamp < 1e3 || (e.enterStamp = null)
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "onClick", function () {
                (0, u.reportClick)({poi: h, text: e.state.nick, url: e.jumpLink})
            }), e.state = {
                isCompany: !1,
                userLevel: 1,
                plusStatus: 1,
                imgUrl: "http://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg",
                spoint: "",
                dangerHTML: '<a target="_blank" href="javascript:login()" class="link-login">你好，请登录</a>&nbsp&nbsp<a href="javascript:regist()" class="link-regist style-red">免费注册</a>'
            }, e
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ShortcutUserinfo, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ShortcutUserinfo, [{
            key: "requestUsername", value: function requestUsername() {
                return (0, d["default"])(i.USER_NAME, {
                    timeout: 1e3,
                    params: {pin: a["default"].pin, uuid: a["default"].uuid},
                    charset: "gb2312",
                    name: "jsonpHelloService",
                    speedID: 14,
                    umpID: 16,
                    dataCheck: function dataCheck(e) {
                        return !!e
                    }
                })
            }
        }, {
            key: "requestUserinfo", value: function requestUserinfo() {
                return (0, o.getUserinfo)()
            }
        }, {
            key: "runDelayedWorks", value: function runDelayedWorks() {
                Array.isArray(this.ssoList) && this.ssoList.forEach(function (e) {
                    document.createElement("img").src = e
                })
            }
        }, {
            key: "getPop", value: function getPop() {
                var e = this.state, t = e.renderDropdown, n = e.userLevel, o = e.plusStatus, i = e.imgUrl, a = e.spoint;
                return t ? r["default"].createElement(_, {userLevel: n, plusStatus: o, imgUrl: i, spoint: a}) : ""
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                var e = this;
                Promise.all([this.requestUsername(), this.requestUserinfo(), (0, o.getCompanyinfo)()]).then(function (t) {
                    var n = _slicedToArray(t, 3), r = n[0], o = n[1], i = n[2].isCompany;
                    r.nick ? (e.ssoList = r.sso, e.setState({
                        nick: r.nick,
                        userLevel: o.userLevel,
                        plusStatus: o.plusStatus,
                        isCompany: i
                    }), (0, c.loadedPromise)().then(function () {
                        e.setState({imgUrl: o.imgUrl})
                    })) : e.setState({dangerHTML: r.info})
                }), (0, o.getSpointAndLevel)().then(function (t) {
                    e.setState({spoint: t.spoint})
                }), (0, c.loadedPromise)().then(function () {
                    e.runDelayedWorks()
                })
            }
        }, {
            key: "render", value: function render() {
                var e = this.state, t = e.nick, n = e.plusStatus, o = e.isCompany;
                return t ? r["default"].createElement("li", {
                    id: "ttbar-login",
                    className: (0, l["default"])("shortcut_btn", "fore1", "dropdown", "shortcut_userico".concat(n), {shortcut_userico_company: o}),
                    clstag: this.clstag,
                    onMouseenter: this.onMouseenter,
                    onMouseleave: this.onMouseleave,
                    onClick: this.onClick
                }, r["default"].createElement("div", {className: "dt cw-icon"}, r["default"].createElement("i", {className: "shortcut_userico_ico"}), r["default"].createElement("a", {
                    className: "nickname",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: this.jumpLink
                }, t), r["default"].createElement("i", {className: "iconfont"}, "")), this.getPop()) : r["default"].createElement("li", {
                    id: "ttbar-login",
                    className: "shortcut_btn fore1 dropdown",
                    clstag: this.clstag,
                    onClick: this.onClick,
                    dangerouslySetInnerHTML: {__html: this.state.dangerHTML}
                })
            }
        }]), ShortcutUserinfo
    }();
    t["default"] = y
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(14), n(3), n(25), n(29);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(33)), i = _interopRequireDefault(n(74)),
        a = n(107), l = n(64), c = n(15), s = n(4), u = n(27), f = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(108));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    n(210), n(211);
    var d = {
        fade: !(0, u.isIE)(8),
        arrows: !0,
        autoPlay: !0,
        indicators: !0,
        pauseOnHover: !0,
        className: "sliderBanner",
        speed: (0, u.isIE)(8) ? 400 : 300,
        autoPlayInterval: 3e3,
        easeType: "ease-in-out",
        indicatorHoverToSlide: !0
    }, p = function (e) {
        function FocusSlider() {
            var e, t, n;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, FocusSlider);
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
            return _possibleConstructorReturn(n, (t = n = _possibleConstructorReturn(this, (e = _getPrototypeOf(FocusSlider)).call.apply(e, [this].concat(i))), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "rootContainer", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "loadedSlideItem", {}), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "prevArrowText", r["default"].createElement("i", {
                onClick: f.handleClickPreSlider,
                className: "iconfont",
                clstag: (0, s.generateClstag)("head|focus_sl")
            }, "")), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "nextArrowText", r["default"].createElement("i", {
                onClick: f.handleClickNextSlider,
                className: "iconfont",
                clstag: (0, s.generateClstag)("head|focus_sr")
            }, "")), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "handleBeforeChange", function (e, t) {
                n.loadImageByIndex(t)
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "handleAfterChange", function (e) {
                n.reportAd(e), n.reportExpose(e), n.preloadImage(e), n.loadedSlideItem[e] = !0
            }), t))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(FocusSlider, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(FocusSlider, [{
            key: "customIndicator", value: function customIndicator(e) {
                return r["default"].createElement("i", {
                    onClick: f.handleClickIndicator.bind(this, e),
                    clstag: (0, s.generateClstag)("head|focus_s", e)
                })
            }
        }, {
            key: "reportExpose", value: function reportExpose(e) {
                var t = this.props.list[e];
                this.loadedSlideItem[e] || f.exposeFocusItem(t, e)
            }
        }, {
            key: "reportAd", value: function reportAd(e) {
                var t = this.props.list[e];
                if (t.type === a.TYPE_AD && !this.loadedSlideItem[e]) {
                    var n = (d.fade ? this.rootContainer.eq(e) : this.rootContainer.eq(e + 1)).find(".focus-item-img").get(0);
                    (0, l.isInViewport)((0, l.getElementPos)(n)) && t.clog && f.exposeAd(t.clog)
                }
            }
        }, {
            key: "loadImageByIndex", value: function loadImageByIndex(e) {
                var t = this.props.list[e],
                    n = (d.fade ? this.rootContainer.eq(e) : this.rootContainer.eq(e + 1)).find(".focus-item-img");
                n.attr("src") === c.BLANK_IMG && (0, l.setImage)(n, t.src)
            }
        }, {
            key: "preloadImage", value: function preloadImage(e) {
                var t = (e - 1 + 8) % 8, n = (e + 1 + 8) % 8;
                this.loadImageByIndex(t), this.loadImageByIndex(n)
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                var e = this;
                this.rootContainer = $("#J_focus .focus-slider .sliderBannerWrapper .focus-slider__item"), this.reportExpose(0), this.reportAd(0), this.loadedSlideItem[0] = !0, setTimeout(function () {
                    e.preloadImage(0)
                })
            }
        }, {
            key: "render", value: function render() {
                var e = this, t = this.props, n = t.list, o = t.isWide;
                return r["default"].createElement("div", {className: "sliderBannerWrapper"}, r["default"].createElement(i["default"], _extends({}, d, {
                    isWide: o,
                    prevArrowText: this.prevArrowText,
                    nextArrowText: this.nextArrowText,
                    customIndicator: this.customIndicator,
                    beforeChange: this.handleBeforeChange,
                    afterChange: this.handleAfterChange
                }), n.map(function (t, n) {
                    var o = t, i = o.src, a = o.alt, l = o.href, u = o.sourceTag, d = !1;
                    -1 !== [2, 3, 5].indexOf(n + 1) && (d = 1 === Number(u));
                    var p = 0 === n;
                    return r["default"].createElement("li", {className: "focus-slider__item focus-item"}, r["default"].createElement("a", {
                        href: l,
                        className: "focus-item__core",
                        target: "_blank",
                        clstag: (0, s.generateClstag)("head|focus_", n),
                        onClick: f.handleClickFocusItem.bind(e, o, n),
                        "aria-label": a || "推广轮播第".concat(n + 1, "帧")
                    }, r["default"].createElement("img", {
                        className: "focus-item-img",
                        src: p ? i : c.BLANK_IMG,
                        alt: a
                    }), d && r["default"].createElement("i", {className: "focus-item-tag focus-item-tag--ad"})))
                })))
            }
        }]), FocusSlider
    }(), m = (0, o["default"])(p);
    t["default"] = m
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(14), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0)), o = n(89);

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var i = function (e) {
        function Arrow() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Arrow), _possibleConstructorReturn(this, _getPrototypeOf(Arrow).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(Arrow, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Arrow, [{
            key: "onClick", value: function onClick(e) {
                e && e.preventDefault(), this.props.clickHandler()
            }
        }, {
            key: "render", value: function render() {
                var e = this.props, t = e.canGo, n = e.className, i = this.onClick.bind(this);
                t || (n = (0, o.addClassName)(n, "slider_control_disabled"), i = null);
                var a = {className: n, onClick: i};
                return e.arrow ? e.arrow : r["default"].createElement("button", _extends({}, a, {
                    "aria-hidden": "true",
                    tabIndex: "-1"
                }), this.props.text)
            }
        }]), Arrow
    }();
    t["default"] = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0)), o = n(89);

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var i = function (e) {
        function Indicators() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Indicators), _possibleConstructorReturn(this, _getPrototypeOf(Indicators).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(Indicators, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Indicators, [{
            key: "onItemHandler", value: function onItemHandler(e, t) {
                t && t.preventDefault(), this.props.itemHandler(e)
            }
        }, {
            key: "renderIndicatorItems", value: function renderIndicatorItems() {
                var e = this, t = this.props, n = t.count, i = t.currentIndex, a = t.indicatorHoverToSlide,
                    l = t.customIndicator;
                return function () {
                    for (var t = [], c = 0; c < n; c++) {
                        var s = "slider_indicators_btn", u = e.onItemHandler.bind(e, c), f = e.onItemHandler.bind(e, c);
                        c === n - 1 && (s = (0, o.addClassName)(s, "slider_indicators_btn_last")), c === i && (s = (0, o.addClassName)(s, "slider_indicators_btn_active"));
                        var d = l(c);
                        a ? t.push(r["default"].cloneElement(d, {
                            className: s,
                            onMouseEnter: u
                        }, d.children)) : t.push(r["default"].cloneElement(d, {className: s, onClick: f}, d.children))
                    }
                    return t
                }()
            }
        }, {
            key: "setStyle", value: function setStyle() {
                var e = r["default"].findDOMNode(this), t = (0, o.getWidth)(e);
                e.style.marginLeft = -t / 2 + "px"
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                this.setStyle()
            }
        }, {
            key: "componentWillUpdate", value: function componentWillUpdate(e) {
                e.count !== this.props.count && this.setStyle()
            }
        }, {
            key: "shouldComponentUpdate", value: function shouldComponentUpdate(e, t) {
                return e.currentIndex !== this.props.currentIndex || e.count !== this.props.count
            }
        }, {
            key: "render", value: function render() {
                var e = this.renderIndicatorItems();
                return r["default"].createElement("div", {className: "slider_indicators"}, e)
            }
        }]), Indicators
    }();
    t["default"] = i
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(14), n(3), n(29), n(5);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(33)), i = _interopRequireDefault(n(74)),
        a = n(64), l = n(15), c = n(4), s = n(27), u = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(108));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    n(213), n(214);
    var f = {
        fade: !(0, s.isIE)(8),
        arrows: !0,
        autoPlay: !0,
        indicators: !1,
        pauseOnHover: !0,
        autoPlayInterval: 9e3,
        className: "sliderRecommend",
        easeType: "ease-in-out",
        indicatorHoverToSlide: !0
    }, d = function (e) {
        function RecommendSlider() {
            var e, t, n;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, RecommendSlider);
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
            return _possibleConstructorReturn(n, (t = n = _possibleConstructorReturn(this, (e = _getPrototypeOf(RecommendSlider)).call.apply(e, [this].concat(i))), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "rootContainer", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "loadedSlideItem", {}), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "prevArrowText", r["default"].createElement("i", {
                onClick: u.handleClickPreRecommendSlider,
                className: "iconfont",
                clstag: (0, c.generateClstag)("head|rmd_sl")
            }, "")), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "nextArrowText", r["default"].createElement("i", {
                onClick: u.handleClickNextRecommendSlider,
                className: "iconfont",
                clstag: (0, c.generateClstag)("head|rmd_sr")
            }, "")), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "handleBeforeChange", function (e, t) {
                n.loadImageByIndex(t)
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "handleAfterChange", function (e) {
                n.reportAd(e), n.reportExpose(e), n.preloadImage(e), n.loadedSlideItem[e] = !0
            }), t))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(RecommendSlider, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(RecommendSlider, [{
            key: "reportExpose", value: function reportExpose(e) {
                var t = this.props.list[e];
                this.loadedSlideItem[e] || t.forEach(function (t, n) {
                    u.exposeRecommendItem(t, e, n)
                })
            }
        }, {
            key: "reportAd", value: function reportAd(e) {
                var t = this.props.list[e];
                if (!this.loadedSlideItem[e]) {
                    var n = (f.fade ? this.rootContainer.eq(e) : this.rootContainer.eq(e + 1)).find(".focus-item__recommend").get(0);
                    (0, a.isInViewport)((0, a.getElementPos)(n)) && t.forEach(function (e) {
                        var t = e.clog;
                        t && u.exposeAd(t)
                    })
                }
            }
        }, {
            key: "loadImageByIndex", value: function loadImageByIndex(e) {
                var t = this.props.list[e],
                    n = (f.fade ? this.rootContainer.eq(e) : this.rootContainer.eq(e + 1)).find(".focus-item__recommend .recommend-item__image");
                n.eq(0).attr("src") === l.BLANK_IMG && n.each(function (e, n) {
                    var r = t[e].src;
                    (0, a.setImage)($(n), r)
                })
            }
        }, {
            key: "preloadImage", value: function preloadImage(e) {
                var t = (e - 1 + 3) % 3, n = (e + 1 + 3) % 3;
                this.loadImageByIndex(t), this.loadImageByIndex(n)
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                var e = this;
                this.rootContainer = $("#J_focus .focus-slider .sliderRecommendWrapper .focus-slider__item"), this.reportExpose(0), this.reportAd(0), this.loadedSlideItem[0] = !0, setTimeout(function () {
                    e.preloadImage(0)
                })
            }
        }, {
            key: "render", value: function render() {
                var e = this, t = this.props, n = t.list, o = t.isWide;
                return r["default"].createElement("div", {className: "sliderRecommendWrapper"}, r["default"].createElement(i["default"], _extends({}, f, {
                    isWide: o,
                    prevArrowText: this.prevArrowText,
                    nextArrowText: this.nextArrowText,
                    beforeChange: this.handleBeforeChange,
                    afterChange: this.handleAfterChange
                }), n.map(function (t, n) {
                    var o = t;
                    return r["default"].createElement("li", {className: "focus-slider__item focus-item"}, r["default"].createElement("div", {className: "focus-item__recommend "}, o.map(function (t, o) {
                        return r["default"].createElement("a", {
                            key: t.src,
                            href: t.href,
                            target: "_blank",
                            className: "recommend-item fade-in",
                            clstag: (0, c.generateClstag)("head|rmd_", n) + ["a", "b", "c"][o],
                            onClick: u.handleClickRecommendItem.bind(e, t, n, o),
                            "aria-label": "今日推荐 ".concat(t.alt || "第".concat(0, "帧第", o)) || !1
                        }, r["default"].createElement("img", {
                            alt: t.alt,
                            className: "recommend-item__image",
                            src: t.src
                        }))
                    })))
                })))
            }
        }]), RecommendSlider
    }(), p = (0, o["default"])(d);
    t["default"] = p
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(14), n(3), n(25), n(29), n(5);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(216)), i = _interopRequireDefault(n(33)),
        a = _interopRequireDefault(n(74)), l = n(109), c = n(64), s = n(15), u = n(4), f = n(27),
        d = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(110));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    n(219), n(220);
    var p = {
        fade: !(0, f.isIE)(8),
        arrows: !0,
        autoPlay: !0,
        indicators: !0,
        pauseOnHover: !0,
        speed: (0, f.isIE)(8) ? 400 : 300,
        autoPlayInterval: 4e3,
        easeType: "ease-in-out",
        indicatorHoverToSlide: !0
    }, m = function (e) {
        function FocusSlider() {
            var e, t, n;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, FocusSlider);
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
            return _possibleConstructorReturn(n, (t = n = _possibleConstructorReturn(this, (e = _getPrototypeOf(FocusSlider)).call.apply(e, [this].concat(i))), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "rootContainer", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "loadedSlideItem", {}), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "prevArrowText", r["default"].createElement("i", {
                onClick: d.handleClickPreSlider,
                className: "iconfont",
                clstag: (0, u.generateClstag)("head|focus_sl")
            }, "")), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "nextArrowText", r["default"].createElement("i", {
                onClick: d.handleClickNextSlider,
                className: "iconfont",
                clstag: (0, u.generateClstag)("head|focus_sr")
            }, "")), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "handleBeforeChange", function (e, t) {
                n.loadImageByIndex(t)
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "handleAfterChange", function (e) {
                n.reportAd(e), n.reportExpose(e), n.preloadImage(e), n.loadedSlideItem[e] = !0
            }), t))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(FocusSlider, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(FocusSlider, [{
            key: "customIndicator", value: function customIndicator(e) {
                return r["default"].createElement("i", {
                    onClick: d.handleClickIndicator.bind(this, e),
                    clstag: (0, u.generateClstag)("head|focus_s", e)
                })
            }
        }, {
            key: "reportExpose", value: function reportExpose(e) {
                var t = this.props.list[e], n = t.banner, r = t.recommend;
                this.loadedSlideItem[e] || (d.exposeFocusItem(n, e), r.forEach(function (t, n) {
                    d.exposeRecommendItem(t, e, n)
                }))
            }
        }, {
            key: "reportAd", value: function reportAd(e) {
                var t = this.props.list[e], n = t.banner, r = t.recommend;
                n.type !== l.TYPE_AD || this.loadedSlideItem[e] || (n.clog && d.exposeAd(n.clog), r.forEach(function (e) {
                    var t = e.clog;
                    t && d.exposeAd(t)
                }))
            }
        }, {
            key: "loadImageByIndex", value: function loadImageByIndex(e) {
                var t, n = this.props.list[e], r = n.recommend, o = n.banner,
                    i = (t = p.fade ? this.rootContainer.eq(e) : this.rootContainer.eq(e + 1)).find(".focus-item-img"),
                    a = i.attr("src"), l = t.find(".focus-item__recommend .recommend-item__image"),
                    u = l.eq(0).attr("src");
                a === s.BLANK_IMG && (0, c.setImage)(i, o.src), u === s.BLANK_IMG && l.each(function (e, t) {
                    var n = r[e].src;
                    (0, c.setImage)($(t), n)
                })
            }
        }, {
            key: "preloadImage", value: function preloadImage(e) {
                var t = (e - 1 + 8) % 8, n = (e + 1 + 8) % 8;
                this.loadImageByIndex(t), this.loadImageByIndex(n)
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                var e = this;
                this.rootContainer = $("#J_focus .focus-slider-old .focus-slider__item"), this.reportExpose(0), this.reportAd(0), this.loadedSlideItem[0] = !0, setTimeout(function () {
                    e.preloadImage(0)
                })
            }
        }, {
            key: "render", value: function render() {
                var e = this, t = this.props, n = t.list, i = t.isWide;
                return r["default"].createElement("div", {className: "focus-slider-old"}, r["default"].createElement(a["default"], _extends({}, p, {
                    isWide: i,
                    prevArrowText: this.prevArrowText,
                    nextArrowText: this.nextArrowText,
                    customIndicator: this.customIndicator,
                    beforeChange: this.handleBeforeChange,
                    afterChange: this.handleAfterChange
                }), n.map(function (t, n) {
                    var i = t.banner, a = t.recommend, l = i.src, c = i.alt, f = i.href, p = i.sourceTag, m = !1;
                    -1 !== [2, 3, 5].indexOf(n + 1) && (m = 1 === Number(p));
                    var h = 0 === n;
                    return r["default"].createElement("li", {className: "focus-slider__item focus-item"}, r["default"].createElement("a", {
                        href: f,
                        className: "focus-item__core",
                        target: "_blank",
                        clstag: (0, u.generateClstag)("head|focus_", n),
                        onClick: d.handleClickFocusItem.bind(e, i, n),
                        "aria-label": c || "推广轮播第".concat(n + 1, "帧")
                    }, r["default"].createElement("img", {
                        className: "focus-item-img",
                        src: h ? l : s.BLANK_IMG,
                        alt: c
                    }), m && r["default"].createElement("i", {className: "focus-item-tag focus-item-tag--ad"})), r["default"].createElement(o["default"], {
                        focusKey: n,
                        recommend: a
                    }))
                })))
            }
        }]), FocusSlider
    }(), h = (0, i["default"])(m);
    t["default"] = h
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0)), o = n(15), i = n(4), a = n(110);

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(217), n(218);
    var l = function (e) {
        function FoucusItem() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, FoucusItem), _possibleConstructorReturn(this, _getPrototypeOf(FoucusItem).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(FoucusItem, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(FoucusItem, [{
            key: "render", value: function render() {
                var e = this, t = this.props, n = t.recommend, l = t.focusKey;
                return r["default"].createElement("div", {className: "focus-item__recommend "}, n.map(function (t, n) {
                    return r["default"].createElement("a", {
                        key: t.src,
                        href: t.href,
                        target: "_blank",
                        className: "recommend-item fade-in",
                        clstag: (0, i.generateClstag)("head|focus_", l) + ["a", "b", "c"][n],
                        onClick: a.handleClickRecommendItem.bind(e, t, l, n),
                        "aria-label": "今日推荐 ".concat(t.alt || "第".concat(l, "帧第").concat(n)) || !1
                    }, r["default"].createElement("img", {
                        alt: t.alt,
                        className: "recommend-item__image",
                        src: 0 === l ? t.src : o.BLANK_IMG
                    }))
                }))
            }
        }]), FoucusItem
    }();
    t["default"] = l
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0)), o = n(46), i = n(6);

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var a = function (e) {
        function FsLogo(e) {
            var t;
            if (function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, FsLogo), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(FsLogo).call(this, e)))), "isReportExpo", !1), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "logObj", {
                poi: "head|logo|02",
                url: "null"
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "onClick", function () {
                (0, i.reportClick)(t.logObj)
            }), pageConfig.logo && pageConfig.logo.href) try {
                var n = pageConfig.logo;
                t.state = {
                    src: t.fixImageUrl(n.wide_pic) || t.fixImageUrl(n.narrow_pic),
                    href: n.href
                }, t.logObj.url = n.href || "null"
            } catch (r) {
                o.dconsole.error(r)
            }
            return t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(FsLogo, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(FsLogo, [{
            key: "componentDidMount", value: function componentDidMount() {
                var e = this.props.onLoad;
                e && e()
            }
        }, {
            key: "fixImageUrl", value: function fixImageUrl(e) {
                return e ? "//img10.360buyimg.com/img/".concat(e) : ""
            }
        }, {
            key: "render", value: function render() {
                if (!this.state.href || !this.state.src) return "";
                var e = this.state, t = e.href, n = e.src;
                return this.isReportExpo || (this.isReportExpo = !0, (0, i.reportExpose)(this.logObj)), r["default"].createElement("a", {
                    id: "J_logo_extend",
                    href: t,
                    style: {display: "block", width: "190px", height: "120px"},
                    target: "_blank",
                    onClick: this.onClick,
                    "aria-label": "大促LOGO位推广"
                }, r["default"].createElement("img", {
                    src: n,
                    style: {display: "block", height: "120px", margin: "0 auto"}
                }))
            }
        }]), FsLogo
    }();
    t["default"] = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3), n(18), n(5), n(7), n(25), n(10);
    var r = _interopRequireDefault(n(0)), o = _interopRequireWildcard(n(15)), i = _interopRequireWildcard(n(16)),
        a = _interopRequireDefault(n(44)), l = _interopRequireDefault(n(223)), c = _interopRequireDefault(n(224)),
        s = _interopRequireDefault(n(32)), u = n(4), f = n(6), d = n(41), p = _interopRequireDefault(n(225));

    function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var m = function (e) {
        function User(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, User), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(User).call(this, e)))), "sendImpr", function () {
                var e = t.props.onLoad;
                (0, f.reportExpose)({poi: "head|login|null"}), e && e()
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "onClick", function (e) {
                (0, f.reportClick)({poi: "head|login|".concat(e)})
            }), t.state = {
                spoint: 0,
                plusStatus: 0,
                vipPromo: "",
                nickName: "",
                isNew: !1,
                isLogin: !1,
                isCompany: !1,
                levelPair: [],
                imgUrl: "",
                isLoading: !0
            }, t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(User, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(User, [{
            key: "getBaseInfo", value: function getBaseInfo() {
                return (0, d.getUserinfo)().then(function (e) {
                    var t = e.isCompany, n = e.isLogin, r = e.plusStatus, o = e.imgUrl, l = e.nickName,
                        c = void 0 === l ? a["default"].pin : l, s = i.PLUSARRAY[r] || i.PLUSARRAY[0];
                    return {
                        isLogin: n,
                        nickName: c,
                        isCompany: t,
                        plusStatus: r,
                        imgUrl: o || p["default"],
                        vipPromo: s.replace(/<span[\s\S]+span>/g, "").replace(/>/g, "")
                    }
                })
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                var e = this;
                this.getBaseInfo().then(function (t) {
                    var n = t.isCompany;
                    $(".user__loading").remove(), e.setState(t);
                    var r = {isLoading: !1}, o = [];
                    o.push((0, d.getNewuserinfo)().then(function (e) {
                        r.isNew = e.isNew
                    })), n || o.push((0, d.getSpointAndLevel)().then(function (e) {
                        r.levelPair = e.levelPair, r.spoint = e.spoint ? Number(e.spoint) : 0
                    })), Promise.all(o).then(function () {
                        e.setState(r, e.sendImpr)
                    })["catch"](function () {
                        e.setState(r, e.sendImpr)
                    })
                })
            }
        }, {
            key: "render", value: function render() {
                var e = this.state, t = e.plusStatus, n = e.imgUrl, i = e.isLogin, a = e.nickName, f = e.isCompany,
                    d = e.spoint, p = e.levelPair, m = e.isNew, h = e.vipPromo, _ = e.isLoading;
                return r["default"].createElement("div", {className: (0, s["default"])("user_inner", "user_plus".concat(t))}, r["default"].createElement("div", {onClick: this.onClick.bind(this, "01")}, r["default"].createElement("div", {className: "J_user_avatar user_avatar"}, n && r["default"].createElement("a", {
                    className: "user_avatar_lk",
                    href: o.HOME,
                    target: "_blank",
                    clstag: (0, u.generateClstag)("login_01"),
                    "aria-label": "个人头像"
                }, r["default"].createElement("img", {src: n}))), r["default"].createElement(l["default"], {
                    isLogin: i,
                    isCompany: f,
                    nickName: a,
                    spoint: d,
                    levelPair: p
                })), !_ && r["default"].createElement(c["default"], {
                    isNew: m,
                    isCompany: f,
                    isLogin: i,
                    vipPromo: h,
                    onClick: this.onClick
                }))
            }
        }]), User
    }();
    t["default"] = m
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0)), o = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(15)), i = n(4);
    var a = function UserInfo(e) {
        var t, n, a = e.isLogin, l = e.nickName, c = e.isCompany, s = e.spoint, u = e.levelPair;
        return a ? (t = r["default"].createElement("p", null, r["default"].createElement("i", {className: "user_plusico"}), "Hi，", r["default"].createElement("a", {
            href: o.HOME,
            target: "_blank"
        }, l)), n = c ? r["default"].createElement("p", {className: "user_sl"}, r["default"].createElement("a", {
            className: "user_company",
            href: o.COMPANY_BVIP,
            target: "_blank",
            title: "企业会员"
        }, r["default"].createElement("i", {className: "user_company_ico"}), "企业会员"), r["default"].createElement("a", {
            className: "user_logout",
            href: o.LOGOUT
        }, "退出")) : r["default"].createElement("p", {className: "user_sl"}, r["default"].createElement("a", {
            className: "user_spoint",
            href: "//vip.jd.com/",
            target: "_blank",
            title: "京享值".concat(s),
            rel: "noopener noreferrer"
        }, r["default"].createElement("i", {className: "user_spoint_ico"})), u && u[0] > 0 && r["default"].createElement("a", {
            className: "user_lv user_lv_".concat(u[0] - 1),
            href: "//vip.jd.com",
            target: "_blank",
            title: u[1],
            rel: "noopener noreferrer"
        }, r["default"].createElement("i", {className: "user_lvico"})), r["default"].createElement("a", {
            className: "user_logout",
            href: o.LOGOUT
        }, "退出"))) : (t = l && l.length ? r["default"].createElement("p", null, "Hi,", " ", r["default"].createElement("a", {
            href: o.HOME,
            target: "_blank"
        }, l)) : r["default"].createElement("a", {
            href: "javascript:login(true);",
            className: "user_tip"
        }, "Hi~欢迎逛京东！"), n = r["default"].createElement("p", null, r["default"].createElement("a", {
            href: "javascript:login()",
            className: "user_login"
        }, "登录"), " | ", r["default"].createElement("a", {
            href: "javascript:regist()",
            className: "user_reg"
        }, "注册"))), r["default"].createElement("div", {
            className: "user_show",
            clstag: (0, i.generateClstag)("login_01")
        }, t, n)
    };
    t["default"] = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0)), o = n(4), i = n(15);
    var a = "02", l = "03", c = "04", s = "05", u = function UserBtn(e) {
        var t, n = e.isNew, u = e.isLogin, f = e.isCompany, d = e.vipPromo, p = e.onClick;
        if (f) {
            var m = s;
            t = r["default"].createElement("a", {
                className: "user_profit_lk user_profit_lk_long user_profit_lk_company",
                href: i.COMPANY_B,
                target: "_blank",
                clstag: (0, o.generateClstag)("login_05"),
                onClick: p.bind(void 0, m)
            }, "企业专享价格多采多惠")
        } else if (n || !u) {
            var h = a, _ = u ? c : l;
            t = [r["default"].createElement("a", {
                className: "user_profit_lk",
                href: i.XINREN,
                target: "_blank",
                clstag: (0, o.generateClstag)("login_04"),
                onClick: p.bind(void 0, h)
            }, "新人福利"), r["default"].createElement("a", {
                className: "user_profit_lk user_profit_lk_plus",
                href: i.PLUS_USERINFO_N,
                target: "_blank",
                onClick: p.bind(void 0, _),
                clstag: (0, o.generateClstag)("login_".concat(_))
            }, "PLUS会员")]
        } else {
            var y = c;
            t = r["default"].createElement("a", {
                className: "user_profit_lk user_profit_lk_long",
                href: i.PLUS_USERINFO_Y,
                target: "_blank",
                clstag: (0, o.generateClstag)("login_".concat(y)),
                onClick: p.bind(void 0, y)
            }, d)
        }
        return r["default"].createElement("div", {className: "user_profit"}, t)
    };
    t["default"] = u
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAEB5JREFUeNrtnGmMVVUSgN/v8cdARGEUZAmKyNrohGjcEo0a97jEGDXqD43RUfYRjDExrtFonIxOxhhBTYxGorgByr41yNY7TdMLNA29AE3T3SC4/Kg535lbL9XHe9973dDQ4PtR6XffO3c5362qU6dOnU51dHZKXnouqTyEPMA8wDzAPMC85AHmAeYB5gHmJQ8wDzAPMA8wL3mAeYB5gHmAeTlDALZ3dPxf2tvlkJF2Ff3dyZ8aIAAOHTokbW1t0nrwoLS2tsbKQfebCm2tcL6XAO4ZC5COAuLAgQOyf//+tHCMxIGLBWak3WpnoKkdvQAzdbym1ZPzAAGoffv2peV44MUB61BgRjp5huMEGfa72wAPuofXDmqn0KRctI1zgNXS0tJr8OKgZZOcrMXdq0t/I4jdArjPdbKpqSnd6S4ddRdOemP83hIDLhvA7sDrDrjDhw//QTozaBzPwnPxLPa+3CcngJ3uBlxgz5490tjY6CECw3ZaP1ttbHM3sxoXmq2FlwvAXOB1Bxpy5MgRL3Eg6Ys+m8IL753KVX2BZwWQzc3NXbSqxR0D9wAA3A35DVGft2vXrkR4PQWYDV4SOIXHffn7yy+/pL/jLxZF/3hOniVp0MoJIFB2794tDQ0N/m99fb3/azUS4fPevXvTGopwk+LiYnnkkUdkzpw5/jgOXjaA2bSvu/CQ3377Td555x156qmnZPv27f5YNZJrq5XFPQPHfJ/KxXQVGIIW1dTUSHV1tf8MVEACDlGtVHhr166Va665RkaOHCkLFizw36kpJwEMIfKwdEihaCdVegKP83799Vf/fJMnT5Zbb71VNm3a1AUi1+kyWEbg1C3xzKlsIyeAAIgovLKyMtm8ebNs3LhRahxIhWg1DwhAvummm2TEiBHy5JNP+oexwDJB5KHpwM8//+w1jBfDvSsqKqS0tNTLtm3bpK6uzl+Hdr///ruHkg2efQmY7osvviiXXnqp3H333V5Jjh071gWiwuP5YaDKQ38zAtzrTJKGyM6dO6W2ttarOib5008/yYoVK2T58uX+uzjte/3112X48OFy3XXX+c6qL8wEEFEzX7RokTz//PNy7733ypVXXinjxo2TUaNGyYUXXigXXXSRjB49WiZMmCBXXXWV3HffffLCCy/Ijz/+6M8HQi4AaYfruf/++2XSpEny9ttvd9FChBfIS+UFVlZW+v7yGdipJNOlAyG8HTt2SEV5uRQVFXmAa9askaVLl3qIXAyAdmC5/fbb5bLLLvNtMMGkkdgOKkDm+rfddpsMGjRIzj77bBk4cKCcd955MnjwYBkyZIiXCy64IC0cn3/++b49n7kvGnr06NGsABGAoRS33HKLB6mab7UQTa+qqvICQLQQLqk4eIygCo4TgccJ0OfBtm7d6s23sLBQVq1cKRs2bEiPyhbgF1984duoRuUivO2ZM2fKWWed5aEgSeCQoUOHehk2bFha+vfvL1OmTPFgcglh1B/Sv8WLF//BxyK4KRggQESZ0MJUXMiCNoXwoF7utK/EvaktW7Z4gOvXr/dayI11JLZmrCNVrvAQ2qOxmGu/fv1kwIABaQ20QC1Uq4G051yugQZ2JxbEH4bmi6CN6tMR4AGRz6kw6oZ0HDx8GNqHeVmA69at821tOGMhJs0+4sTGjdzrpZdekhtuuEEuvvjitDmjXYBF+Aww4OIPb7zxRnn55Zf9s+rgExfiZNPGOMEFKQ8AwgSIXQAyEADDwqNRpXsgr30lJd58GYHxgZgnEBmhOdfOUnhjFmImkGE7PV9jMTScAeurr76STz/9VD7++GP55JNP5LPPPpNvv/3WhyKYExqvAfHxxIkMLOoD7QwFxVImAETSAOk8DwE4jfM8PPfwwIvTPh6cvxpUaxDNNfieQSHUxmwS157rxMWCdFKlI8ondne6F8LD7AHDfUOAjAsKDy5IikGj2TUGGOAQtXEaaNzFKIX2EWwyaGC6q1at8n/RQAUIAEA//PDD/jgJShy4TGK1OJy1JCVZuzNzsaY8ffp0D0lHcW2DZSo83ARsUsz5rFNU+1azzQRv2bJlstKNwqi2nZHQ0ccee0zmzZvnO5INjhU7LbQ+NRzhLchsGeuk+XMIkZGY2HPq1Klp7UunvFx7DeQR2DChSDW6B+RAbVq1jh/xeXHwVq9e7X0SQeuSJUvSQaVCpJOAvfnmm/2b2h+lwXIBp/BCiRugwlRYpjxiNm3EDXDtBx980PcTP2jhci59gQuCYsHHA+SDkg3Bqc+z8AicCROImRYuXOjPswkGhA69+uqr8sADD6ShhhAttBCczq1VLMhM2hgHMhtE1bRp06bJW2+95TWxS/baCdeHiRVcVao1ivztlwoOrWO01QEDswUeWvfDDz94eN98841vh4MFomqhQnj00Ufl8ccf98d0NIQWwgvB2URFHMhwhM+mjSFENVWmjMzX+Y1jBaeQUQ4UCS7w8eI+pzrdBfB7aBggFBrHhCloHcEyJonPA55qHvAWOp+BCeMHQ4h0EsfL9Oihhx7y96FDCiA0UwstSXIBmZQaCzWRQYJz0DxeNNfSmC+UJncPtUTltMkd+1GYzDGxHeaJpiFA4xhwarJoHfC+//57D2+584MkHHgJOx08YAHR+kM6B1wekKQCL4DO8H02eFwjTkKQcWYd+karhQDBx9Hne+65R5544gl/bggvnftz4vMD7nponoZvwEyl837uJqin17JocEAYKFTjvvvuOx+4ApOBhwsfZrLtzseX6gRb/aHVRDrLLIGMB+bCgKUgk+BpDlLTaTYvmQlkkkkDg8GC8/B1V199tbzxxhseqg4UoajGKidSfDUuzkUbUbKUTSJoCovRBhVVv4cmYs7FbnABEKHPEfcgeo6uf5AbJIiOg0gn6QhhAjnCyy+/3HeCe+mshTYhOM0IWbEw9frqd0OQmh7Dr3HOBx984KeHd9xxh1cWzNhqmwWnc/lw+Ral0WWO2GwMcGik82M/1JvvLTh7XoO7IH7Om3IAUTuqabJ3333XawDZ4BkzZniwmhyl87RVgLwQFdroZ4VpQQIQcKpxvBSUgFzhtddeK9dff728//77aZMNqxssOF0LScqXwuKEViaghQDElLWjYScROoVm0A6NQBvGjh3rU//PPPOMfPTRR948CO45z5p46AutxvGZ+zIIMk+eNWuW17aCggK56667ZO7cuf56Cs4G3aHoUma24oETCtD7QtcJzdj+AaLxYRozoi3AIDB/5ZVXfEfp8CWXXCJXXHGF3HnnnfL000/739DaDz/8MJ1MAMh7770nr732mp89MCCg1ePHj/eJXI7JiuOKuE+HWeNNqr1R8cndDNrXq7UxtdGcUZMTFqT1YdbHAbHJwQcsIx0LUG+++aYfIYFISn/ixIkyZswYn7pC0Fq+4zfa0JZziBCYDPAygaVuIW6EjhP97ZQUF6GFmICuHVRHA4umyaw/s35NU2jaVsMhXchi1Gdg03m4JjL4jt84T7XaLr/aQSwcpePWYzS9lku5Sq9pIBAp5WCKB0T1i6qRoWgWqCbI+Nq0EaN1JtEXpql2jQb0RSjEpOBbP/NbLqbb6+VtQCQkYm5NB3UdQdPiVvheocWB0zm6TuCt8B2/0Ya2mim2mh8G940xAbjGqsTDfaY+UCHSScxMtUQ7aYHFaZtNGyk8na+rcMz3tKGtamMI0camXhuDObYmQDpiQrRTWmAJROaRCqAi6qR2tDIwxTDfFgdOJ/NxEDNpojXpdKlKBJWRt7Ob8E5ahapfKnUPuM0Bo+OlRmNC0XxbWVR9kATPikK05mx9YggxLe4YiH4q1wN4J7XElwckKEUDPAg372aJtDTyY1bSPk5zb2qyMfASAaKFkSmHg5iPUd1fLENnWadNjTSZGxw1HQMiUqxmGEmYuCw2Pq/Imq+BFw4oleoL0cIIooLEZA8eh9ad8iJzHlxDHTpY5CBu2bzZAyk2yd04kOHvHhwugYHK+EA14apIqh08/J2OsicC3imv0leQjH74o3LWnR1IxMNheQEJTLw08pP4TD/oMAAxIDGaazjkjnc4qXPmSthCcN8R3e+M2ydCp8hs4COpct1VWycly5bJxvnzZeuiRVK0dIkUr1guJatXS2nhOilbv17KN2zwUrG+UCrcXHcbJSYrV0jl4sVSU1goTS4saXUzi/bIx51ocH12p9Lho0elra5WSidPkKJhA6Vk1AgpGTNaisaNlS0TxsvmiRNkU4H762RrwQQpcXPh8oIC2T6pQGpcm7qRw6Xh7+OkvaJcOo8d+/Nt9ep0AA+WlUjV4P5Sc85fpObcflJ97rmyY+BAqXJ/qwYMkB0D+ku1k1r3eeegQVI/ZIjsGTpUGgcPluaB50jL3/4qhzYUSsefDaAPdSirpUbn3/+Ssin/kIppU6R82lQpmz5dyp1UzJghlbNmSuU/Z0nVs89K9exnpWb2bKl77jmpf26O7J4zW1r++x9pczOgjl4y2z7pA9X/1RPwVm6XXbsbpH5vo+x2IBqammWPm+g3skDvRtFm6pSptW5vlwPk+IDOJiAyQQh7WkhlRSV2Hb24Xy7VF+ARk/nUFWktlkjd33qmXOQJyUizMEWqnm0HZn9KK7XUumQZyAFSU649bdpi1jXOCICaOwQWwjoKM4Rd0TFx2x431dLqV9JOgGm1W81idm0qRA872udxsJcgpk4lPDrrM9NRltrn8KL0U73VPt0ZBcCExfI48at9DrxW/fcGxFMDMFpf1ZQ+msZE328fCCoc7MadsGwjad+waiG/6bnp9iysn0CIpwSgLSXWtL2uodh1EwXYHEHYF2lgHEQL0h5zDrk+a8pt3cg4971kAvnBqGZG1y2YepFE8Pm6DBqYqe4lk+AacAUHom0UunHwtAOoeUGbHQYki0NkWPguLFLaG7OxMdP+4lAAhXbzgrqYMv4wx4WjPgOQILk+2kLhtc+BIhnAfhJSTTbZmU6/Gy2MrXvJAlL9IDU9vBDd56z+8LQBqOkrNE7XhPm8Zu1amT9/vu9cUtlG3LJkCDJpnRdYBNJU+JM71B0AVkNPC4CajVbt0k17LKBTNqfmHK4fh2u7mYorkzYvApCKMirMOM/utvdprr4OUGvrajVIjrSPpCclGtTBaBxoJVxN00ElqS4wCeihqP7x888/TxfBd9HC4/CFJw0gnVeAWm1AcnTe3Lm+ukA3NOqaRa1ZhE+qxAorVeOA6vYxBhIAcj7tT5QWpk6W+dZFJRzejNG+qAYRDST77Es7tEIh2uijYmtswjgxrtDSaqfGjpz/5Zdf+mtxbnM0Q1HpacLhpAD0xZem3AIouk2MEdgDNDukbGmHru+GK2txBUuhdtptZ5zz9ddfpysltFZRfWV7Xwe4I+o8HWctg7prOkN4QWlxuJHPlnXoQpGtOrCrbCHUMAgHEOcwiLC+gj8Eug2L+jRAnLTdDUU4URhtUmQAYVUtLChKqofRpcv0glJQiaAvSUvmdNDge+oEAa3/KkBNHpA9Bfg/xTf44yGrdiQAAAAASUVORK5CYII="
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(7), n(8), n(3), n(5);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(32)), i = _interopRequireDefault(n(21)),
        a = _interopRequireWildcard(n(17)), l = _interopRequireWildcard(n(16)), c = _interopRequireWildcard(n(15)),
        s = _interopRequireDefault(n(44)), u = n(6), f = n(4), d = _interopRequireDefault(n(11));

    function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var p = ["热门", "推荐", "最新", "热评", "热议", "HOT"], m = function (e) {
        function News(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, News), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(News).call(this, e)))), "clstagPrefix", l.CLSTAGPREFIX), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "poi", "head|news"), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "moreLink", void 0), t.state = {list: []}, t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(News, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(News, [{
            key: "hidePlaceholder", value: function hidePlaceholder() {
                $(".news__loading").remove()
            }
        }, {
            key: "processData", value: function processData(e) {
                var t = this, n = e.data, r = [{}, {}, {}, {}], o = this.props.onLoad;
                n.forEach(function (e) {
                    var t = e.source, n = e.id, o = e.title, i = void 0 === o ? "" : o, a = e.url;
                    if ("cms" === t) e.tag = "公告", e.styleName = "cms", e.linkUrl = a || c.NEWS + "notice?id=" + n, e.linkType = "01", r[0] = e; else if ("ad" === t) e.tag = "活动", e.styleName = "ad", e.linkUrl = a, e.linkType = "02", r[1] = e; else {
                        e.styleName = "recommend";
                        var l = (0, f.getHash)(i + n || "", 6);
                        e.tag = p[l], e.linkUrl = c.NEWS + "article?id=" + n, e.linkType = "03";
                        for (var s = 0, u = 0; u < r.length; u++) if (!r[u].title) {
                            s = u;
                            break
                        }
                        r[s] = e
                    }
                }), this.moreLink = this.getMoreLink(r), this.hidePlaceholder(), this.setState({list: r}, function () {
                    (0, u.reportExpose)({poi: "".concat(t.poi, "|null")}), o && o(), n.forEach(function (e, n) {
                        (0, u.reportExpose)({
                            poi: "".concat(t.poi, "|b").concat((0, f.padding)(n + 1, 2)),
                            url: e.linkUrl,
                            text: e.title,
                            desc: "".concat(e.id || "", "-").concat(e.linkType)
                        })
                    })
                })
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                this.requestData().then(this.processData.bind(this))
            }
        }, {
            key: "requestData", value: function requestData() {
                var e = {pin: s["default"].pin, uuid: s["default"].uuid, jda: s["default"].jda};
                return (0, d["default"])(a.NEWS, {
                    name: "jsonpNews",
                    params: e,
                    backup: [a.NEWS_BAK, a.NEWS_STOBAK],
                    speedID: 9,
                    umpID: 11,
                    dataCheck: function dataCheck(e) {
                        var t = e.data;
                        return !(!t || t.length < 4) || (i["default"].error("jsonpNews 数据错误1", e), !1)
                    }
                })
            }
        }, {
            key: "getMoreLink", value: function getMoreLink(e) {
                var t = e.filter(function (e) {
                    return "cms" !== e.type && e.id
                }).map(function (e) {
                    return e.id
                }).join(",");
                return c.NEWS + "?ids=" + t
            }
        }, {
            key: "render", value: function render() {
                var e = this, t = this.state.list;
                return 0 === t.length ? "" : r["default"].createElement("div", {className: "news2"}, r["default"].createElement("div", {
                    className: "news_hd",
                    "aria-label": "京东快报"
                }, r["default"].createElement("h5", {className: "news_tit"}, "京东快报"), r["default"].createElement("a", {
                    href: this.moreLink,
                    target: "_blank",
                    className: "news_more",
                    clstag: "".concat(this.clstagPrefix, "|").concat(this.poi, "_a"),
                    onClick: function onClick() {
                        (0, u.reportClick)({poi: "".concat(e.poi, "|a"), text: "更多", url: e.moreLink})
                    }
                }, "更多 ", r["default"].createElement("i", {className: "iconfont"}, ""))), r["default"].createElement("ul", {className: "news_list"}, t.map(function (t, n) {
                    var i = "b".concat((0, f.padding)(n + 1, 2));
                    return r["default"].createElement("li", {className: (0, o["default"])("news_item", "news_item__".concat(t.styleName))}, r["default"].createElement("a", {
                        href: t.linkUrl,
                        target: "_blank",
                        className: "news_link",
                        clstag: "".concat(e.clstagPrefix, "|").concat(e.poi, "_").concat(i),
                        onClick: function onClick() {
                            (0, u.reportClick)(function _objectSpread(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))), r.forEach(function (t) {
                                        _defineProperty(e, t, n[t])
                                    })
                                }
                                return e
                            }({}, t.ext_columns, {
                                text: t.title,
                                url: t.linkUrl,
                                desc: "".concat(t.id, "-").concat(t.linkType),
                                poi: "".concat(e.poi, "|").concat(i)
                            }))
                        }
                    }, r["default"].createElement("span", {className: "news_tag"}, t.tag), t.title))
                })))
            }
        }]), News
    }();
    t["default"] = m
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(5), n(7), n(8), n(12), n(29);
    var r = _interopRequireDefault(n(228)), o = _interopRequireDefault(n(21)), i = n(4), a = n(46), l = n(6);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var c = !0, s = "head|shortcut|", u = function () {
        function Service(e) {
            var t = this;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Service), _defineProperty(this, "opts", void 0), _defineProperty(this, "tab", void 0), _defineProperty(this, "isHoverOpen", !1), _defineProperty(this, "_menuTabTimer", void 0), _defineProperty(this, "postSendImpl", function (e) {
                try {
                    t._menuTabTimer && clearTimeout(t._menuTabTimer), t._menuTabTimer = setTimeout(function () {
                        if (e.hasClass("service_frame_on")) {
                            var t = e.index(), n = {poi: "".concat(s).concat((0, i.padding)(t + 1, 2))};
                            (0, l.reportExpose)(n)
                        }
                    }, 1e3)
                } catch (n) {
                    o["default"].log(n)
                }
            }), _defineProperty(this, "postIconSendImpl", function () {
                try {
                    for (var e = t.opts.container.find(".service_item"), n = e.length, r = 0; r < n; r++) if (r >= 9) {
                        var a = $(e[r]).find(".service_txt").text();
                        (0, l.reportExpose)({poi: "".concat(s).concat((0, i.padding)(r + 1, 2)), text: a})
                    }
                } catch (c) {
                    o["default"].log(c)
                }
            });
            var n = e.container;
            this.opts = function _objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function (t) {
                        _defineProperty(e, t, n[t])
                    })
                }
                return e
            }({
                container: n,
                head: $(".J_tab_head", n),
                content: $(".J_tab_content", n),
                close: $(".J_service_pop_close", n),
                expandClass: "service_expand",
                expandClass2: "service_expand2",
                activeClass: "service_frame_on",
                hoverToSwitch: !0,
                afterSwitch: null,
                data: [{
                    isIframe: !0,
                    url: "http://chongzhi.jd.com/jdhome-czindex-2017.html"
                }, {url: "http://misc.360buyimg.com/virtuals/squares/2.0/js/jipiao.js"}, {url: "http://misc.360buyimg.com/virtuals/squares/2.0/js/hotel.js"}, {url: "http://misc.360buyimg.com/virtuals/squares/2.0/js/game.js"}],
                onAfterSwitch: function onAfterSwitch(e, n) {
                    var r = n.$contentItems.eq(e), o = t.opts.data[e];
                    r[0].loaded || (o.isIframe ? (r.removeClass("mod_loading"), r.html($('<iframe width="160" height="180" frameborder="0" scrolling="no" src="' + o.url + '">'))) : (0, a.loadLegacy)().then(function () {
                        seajs.use(o.url, function (e) {
                            r.removeClass("mod_loading"), e.init({el: r})
                        })
                    }), r[0].loaded = !0)
                }
            }, e)
        }

        return function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Service, [{
            key: "init", value: function init() {
                var e, t = this, n = !1, i = !1;
                this.opts.head.delegate(".mod_tab_head_item", "mouseenter", function (o) {
                    var a = $(o.currentTarget);
                    c && (c = !1, t.opts.startAt = a.index(), t.tab = new r["default"](t.opts)), t.postSendImpl(a), clearTimeout(e), e = setTimeout(function () {
                        n || i || (t.opts.container.addClass(t.opts.expandClass), "2" === a.attr("data-row") && t.opts.container.addClass(t.opts.expandClass2), n = !0)
                    }, 200), t.isHoverOpen = !0
                }), this.opts.container.delegate(".mod_tab_head_item, .J_tab_head", "mouseleave", function () {
                    i = !1, clearTimeout(e)
                }), this.opts.container.delegate(".service_lk", "click", function () {
                    try {
                        var e = $(this), t = e.attr("href"), n = e.find(".service_txt").text().trim(),
                            r = (e.attr("clstag") || "").split("_")[1];
                        (0, l.reportClick)({poi: "".concat(s).concat(r), url: t, text: n})
                    } catch (i) {
                        o["default"].log(i)
                    }
                });
                var a = function closeFrame() {
                    clearTimeout(e), n = !1, t.opts.container.removeClass(t.opts.expandClass), t.opts.container.removeClass(t.opts.expandClass2), t.isHoverOpen = !1
                };
                this.opts.close.bind("click", a), $(".mod_container, #app").bind("click", function (e) {
                    t.isHoverOpen && !e.target.closest("#J_service") && a()
                }), this.postIconSendImpl()
            }
        }]), Service
    }();
    t["default"] = u
}, function (e, t, n) {
    "use strict";

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(10);
    var r = function () {
        function Tab(e) {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Tab), this.conf = $.extend({
                container: null,
                head: null,
                headItems: null,
                content: null,
                contentItems: null,
                startAt: 0,
                activeClass: "active",
                hash: !1,
                hoverToSwitch: !1,
                onBeforeSwitch: function onBeforeSwitch() {
                },
                onAfterSwitch: function onAfterSwitch() {
                },
                onFirstShow: function onFirstShow() {
                }
            }, e), this.index = undefined;
            var t = this.conf;
            this.$el = $(t.container), this.$head = t.head ? $(t.head) : this.$el.children(".mod_tab_head, .J_tab_head"), this.$headItems = t.headItems ? "string" == typeof t.headItems ? this.$head.children(t.headItems) : $(t.headItems) : this.$head.children(".mod_tab_head_item, .J_tab_head_item"), this.$content = t.content ? $(t.content) : this.$el.children(".mod_tab_content, .J_tab_content"), this.$contentItems = t.contentItems ? "string" == typeof t.contentItems ? this.$content.children(t.contentItems) : $(t.contentItems) : this.$content.children(".mod_tab_content_item, .J_tab_content_item"), this.tabLength = this.$headItems.length;
            for (var n = 0, r = this.$headItems.length; n < r; n++) this.$headItems[n].hasShown = !1;
            this.init()
        }

        return function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Tab, [{
            key: "init", value: function init() {
                var e = this.conf, t = -1, n = window.location.hash;
                e.hash && n.length > 1 ? this.switchTo(n) : ("string" == typeof e.startAt ? (this.$active = this.$headItems.filter(e.startAt), t = this.$active.length ? this.$active.index() : 0) : t = "number" == typeof e.startAt ? e.startAt : 0, this.switchTo(t)), this.initEvent()
            }
        }, {
            key: "initEvent", value: function initEvent() {
                var e = this, t = "click";
                e.conf.hoverToSwitch && (t = "mouseenter"), this.$head.delegate(".mod_tab_head_item, .J_tab_head_item", t, function (t) {
                    t && t.preventDefault();
                    var n = $(this).index();
                    e.switchTo(n)
                })
            }
        }, {
            key: "switchTo", value: function switchTo(e) {
                var t = e, n = this.conf;
                if (n.hash) {
                    var r;
                    if ("string" == typeof t && (r = t.replace("#", ""), this.$active = this.$headItems.filter("[data-hash$=" + r + "]"), t = this.$active.index()), "number" == typeof t && (r = this.$headItems.eq(t).attr("data-hash")), -1 === t) return -1;
                    window.location.hash = r
                }
                if ((t = parseInt(t, 10)) !== this.index) return this.index = t, "function" == typeof n.onBeforeSwitch && n.onBeforeSwitch.call(this, t, this), this.$headItems.removeClass(n.activeClass).eq(t).addClass(n.activeClass), this.$contentItems.hide().eq(t).show(), "function" == typeof n.onAfterSwitch && n.onAfterSwitch.call(this, t, this), this.$headItems[t].hasShown || "function" != typeof n.onFirstShow || (n.onFirstShow.call(this, t, this), this.$headItems[t].hasShown = !0), this
            }
        }, {
            key: "switchToNext", value: function switchToNext() {
                var e = this.index + 1;
                return e >= this.tabLength && (e = 0), this.switchTo(e), this
            }
        }, {
            key: "switchToPrev", value: function switchToPrev() {
                var e = this.index - 1;
                return e < 0 && (e = this.tabLength - 1), this.switchTo(e), this
            }
        }, {
            key: "destroy", value: function destroy() {
                this.unbind(), this.$el.remove()
            }
        }, {
            key: "unbind", value: function unbind() {
                return this.$head.undelegate(), this
            }
        }, {
            key: "setOptions", value: function setOptions(e) {
                return $.extend(this.conf, e), this
            }
        }]), Tab
    }();
    t["default"] = r
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.exposeNewUser = function exposeNewUser() {
        r.reportExpose({poi: "head|adbacknew|01"})
    }, t.exposeNewUserExpand = function exposeNewUserExpand() {
        if (i) return;
        i = !0, r.reportExpose({poi: "head|adbacknew|02"})
    }, t.exposeNormal = function exposeNormal(e) {
        var t = e.url;
        r.reportExpose({url: t, poi: "head|adback|null"})
    }, t.handleClickNormal = function handleClickNormal(e, t) {
        var n = t.url, i = (0, o.padding)(a[e], 2);
        r.reportClick({poi: "head|adback|".concat(i), url: n})
    }, t.handleClickNewUserExpand = function handleClickNewUserExpand() {
        r.reportClick({poi: "head|adbacknew|02"})
    };
    var r = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(6)), o = n(4);
    var i = !1;
    var a = {goalpost: 1, expand: 2}
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(71)), o = n(58), i = n(6);

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var a = function () {
        function FsReporter() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, FsReporter)
        }

        return function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(FsReporter, null, [{
            key: "onLoad", value: function onLoad() {
                FsReporter.loadedCount += 1, FsReporter.loadedCount < FsReporter.maxLoaded || (r["default"].reportAlone({s19: Date.now() - window.point.start}, o.SPEED_PID_BASE), window._.eventCenter.trigger("floorLoaded", "fs"), (0, i.reportExpose)({poi: "head|null|null"}))
            }
        }]), FsReporter
    }();
    _defineProperty(a, "loadedCount", 0), _defineProperty(a, "maxLoaded", 6);
    var l = a;
    t["default"] = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function GrayRelease(e, t) {
        return function (n) {
            function _class2() {
                var e, t, n;
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, _class2);
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                return _possibleConstructorReturn(n, (t = n = _possibleConstructorReturn(this, (e = _getPrototypeOf(_class2)).call.apply(e, [this].concat(o))), function _defineProperty(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                }(_assertThisInitialized(_assertThisInitialized(n)), "state", {componentKey: -1}), t))
            }

            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _setPrototypeOf(e, t)
            }(_class2, n), function _createClass(e, t, n) {
                t && _defineProperties(e.prototype, t);
                n && _defineProperties(e, n);
                return e
            }(_class2, [{
                key: "componentDidMount", value: function componentDidMount() {
                    var e = this, n = o["default"].unifiedHash;
                    t.forEach(function (t, r) {
                        t.start <= n && t.end > n && e.setState({componentKey: r})
                    })
                }
            }, {
                key: "render", value: function render() {
                    var t = this.state.componentKey;
                    if (-1 !== t) {
                        var n = e[t];
                        return r["default"].createElement(n, this.props)
                    }
                }
            }]), _class2
        }(r["default"].Component)
    }, n(1), n(2), n(3), n(5);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(77));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function (e, t, n) {
    "use strict";
    n(10), window.login = function (e) {
        var t = "https://passport.jd.com/new/login.aspx?ReturnUrl=".concat(escape(location.href).replace(/\//g, "%2F"));
        e ? window.open(t) : location.href = t
    }, window.regist = function () {
        return location.href = "https://reg.jd.com/reg/person?ReturnUrl=".concat(escape(location.href)), !1
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    _interopRequireDefault(n(0)), _interopRequireDefault(n(0));
    var r = _interopRequireDefault(n(236));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t["default"] = function _default() {
        return (0, r["default"])()
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0)), o = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(16)), i = n(6);
    n(237);
    var a = function Footer() {
        var e = o.CLSTAGPREFIX, t = "btm|btmnavi_null", n = "btm|btmnavi|null";
        (0, i.reportExpose)({poi: "btm|null|null"});
        var a = function getOnClick(e) {
            return function (t) {
                var n = t.target;
                "A" !== n.tagName && "a" !== n.tagName || (0, i.reportClick)({
                    poi: e,
                    url: n.getAttribute("href"),
                    text: n.innerText,
                    comment: "尾部"
                })
            }
        };
        return r["default"].createElement("div", {
            id: "J_footer",
            className: "footer"
        }, r["default"].createElement("div", {
            className: "mod_service",
            clstag: "".concat(e).concat(t, "01"),
            onClick: a("".concat(n, "01"))
        }, r["default"].createElement("div", {className: "grid_c1 mod_service_inner"}, r["default"].createElement("ul", {className: "mod_service_list"}, r["default"].createElement("li", {className: "mod_service_item"}, r["default"].createElement("div", {className: "mod_service_unit"}, r["default"].createElement("h5", {className: "mod_service_tit mod_service_duo"}, "多"), r["default"].createElement("p", {className: "mod_service_txt"}, "品类齐全，轻松购物"))), r["default"].createElement("li", {className: "mod_service_item"}, r["default"].createElement("div", {className: "mod_service_unit"}, r["default"].createElement("h5", {className: "mod_service_tit mod_service_kuai"}, "快"), r["default"].createElement("p", {className: "mod_service_txt"}, "多仓直发，极速配送"))), r["default"].createElement("li", {className: "mod_service_item"}, r["default"].createElement("div", {className: "mod_service_unit"}, r["default"].createElement("h5", {className: "mod_service_tit mod_service_hao"}, "好"), r["default"].createElement("p", {className: "mod_service_txt"}, "正品行货，精致服务"))), r["default"].createElement("li", {className: "mod_service_item"}, r["default"].createElement("div", {className: "mod_service_unit"}, r["default"].createElement("h5", {className: "mod_service_tit mod_service_sheng"}, "省"), r["default"].createElement("p", {className: "mod_service_txt"}, "天天低价，畅选无忧")))))), r["default"].createElement("div", {
            className: "mod_help",
            clstag: "".concat(e).concat(t, "02"),
            onClick: a("".concat(n, "02"))
        }, r["default"].createElement("div", {className: "grid_c1 mod_help_inner"}, r["default"].createElement("div", {className: "mod_help_list"}, r["default"].createElement("div", {className: "mod_help_nav"}, r["default"].createElement("h5", {className: "mod_help_nav_tit"}, "购物指南"), r["default"].createElement("ul", {className: "mod_help_nav_con"}, r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-29.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "购物流程")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-151.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "会员介绍")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-297.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "生活旅行")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "常见问题")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-136.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "大家电")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/custom.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "联系客服")))), r["default"].createElement("div", {className: "mod_help_nav"}, r["default"].createElement("h5", {className: "mod_help_nav_tit"}, "配送方式"), r["default"].createElement("ul", {className: "mod_help_nav_con"}, r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-81-100.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "上门自提")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-81.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "211限时达")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/103-983.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "配送服务查询")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/109-188.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "配送费收取标准")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.joybuy.com/help/question-list-201.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "海外配送")))), r["default"].createElement("div", {className: "mod_help_nav"}, r["default"].createElement("h5", {className: "mod_help_nav_tit"}, "支付方式"), r["default"].createElement("ul", {className: "mod_help_nav_con"}, r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-172.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "货到付款")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-173.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "在线支付")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-176.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "分期付款")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-174.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "邮局汇款")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-175.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "公司转账")))), r["default"].createElement("div", {className: "mod_help_nav"}, r["default"].createElement("h5", {className: "mod_help_nav_tit"}, "售后服务"), r["default"].createElement("ul", {className: "mod_help_nav_con"}, r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/321-981.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "售后政策")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-132.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "价格保护")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/130-978.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "退款说明")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//myjd.jd.com/repair/repairs.action",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "返修/退换货")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-50.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "取消订单")))), r["default"].createElement("div", {className: "mod_help_nav"}, r["default"].createElement("h5", {className: "mod_help_nav_tit"}, "特色服务"), r["default"].createElement("ul", {className: "mod_help_nav_con"}, r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//1paipai.jd.com/",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "夺宝岛")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/list-134.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "DIY装机")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//fuwu.jd.com/",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "延保服务")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//o.jd.com/market/index.action",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "京东E卡")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//mobile.jd.com/",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "京东通信")), r["default"].createElement("li", null, r["default"].createElement("a", {
            href: "//smart.jd.com/",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "京鱼座智能")))), r["default"].createElement("div", {className: "mod_help_cover"}, r["default"].createElement("h5", {className: "mod_help_cover_tit"}, "京东自营覆盖区县"), r["default"].createElement("div", {className: "mod_help_cover_con"}, r["default"].createElement("p", {className: "mod_help_cover_info"}, "京东已向全国2661个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。"), r["default"].createElement("p", {className: "mod_help_cover_more"}, r["default"].createElement("a", {
            href: "//help.jd.com/user/issue/103-983.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "查看详情", r["default"].createElement("i", {className: "iconfont"}, "")))))))), r["default"].createElement("div", {className: "mod_copyright"}, r["default"].createElement("div", {className: "grid_c1 mod_copyright_inner"}, r["default"].createElement("p", {
            className: "mod_copyright_links",
            clstag: "".concat(e).concat(t, "03"),
            onClick: a("".concat(n, "03"))
        }, r["default"].createElement("a", {
            href: "//about.jd.com",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "关于我们"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//about.jd.com/contact",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "联系我们"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//help.jd.com/user/custom.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "联系客服"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//lai.jd.com",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "合作招商"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//helpcenter.jd.com/venderportal/index.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "商家帮助"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//jzt.jd.com",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "营销中心"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//app.jd.com/",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "手机京东"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//club.jd.com/links.aspx",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "友情链接"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//media.jd.com/",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "销售联盟"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "http://pro.jd.com/mall/active/3WA2zN8wkwc9fL9TxAJXHh5Nj79u/index.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "京东社区"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "http://pro.jd.com/mall/active/3TF25tMdrnURET8Ez1cW9hzfg3Jt/index.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "风险监测"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//about.jd.com/privacy/",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "隐私政策"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//gongyi.jd.com",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "京东公益"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//en.jd.com/",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "English Site"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//corporate.jd.com",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "Media & IR")), r["default"].createElement("div", {className: "mod_copyright_info"}, r["default"].createElement("div", {
            className: "mod_copyright_cert",
            clstag: "".concat(e).concat(t, "04"),
            onClick: a("".concat(n, "04"))
        }, r["default"].createElement("p", null, r["default"].createElement("a", {
            href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000088",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "京公网安备 11000002000088号"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("span", null, "京ICP证070359号"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//img14.360buyimg.com/da/jfs/t256/349/769670066/270505/3b03e0bb/53f16c24N7c04d9e9.jpg",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "互联网药品信息服务资格证编号(京)-经营性-2014-0008"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("span", null, "新出发京零&nbsp字第大120007号")), r["default"].createElement("p", null, r["default"].createElement("span", null, "互联网出版许可证编号新出网证(京)字150号"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "http://pro.jd.com/mall/active/3bVDLXHdwVmdQksGF8TtS7ocq1NY/index.html",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "出版物经营许可证"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "http://misc.360buyimg.com/wz/wlwhjyxkz.jpg",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "网络文化经营许可证京网文[2014]2148-348号"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("span", null, "违法和不良信息举报电话：4006561155")), r["default"].createElement("p", null, r["default"].createElement("span", null, "Copyright © 2004 - ", (new Date).getFullYear(), "  京东JD.com 版权所有"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("span", null, "消费者维权热线：4006067733"), r["default"].createElement("a", {
            href: "http://pro.jd.com/mall/active/38PitHBfR7ZopNHRSHnuuWR5AMDL/index.html",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mod_copyright_license"
        }, "经营证照"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("span", null, "(京)网械平台备字(2018)第00003号"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "//storage.jd.com/imgtools/cbdaa22553-dccaf290-d1af-11e8-a840-89f99f5f0056.jpeg",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mod_business_license"
        }, "营业执照"))), r["default"].createElement("div", {className: "mod_copyright_inter"}, r["default"].createElement("p", null, r["default"].createElement("a", {
            className: "mod_copyright_inter_lk",
            href: "//www.joybuy.com/?source=1&visitor_from=3",
            target: "_blank",
            rel: "noopener noreferrer",
            clstag: "".concat(e).concat(t, "0501"),
            onClick: a("".concat(n, "0501"))
        }, r["default"].createElement("i", {className: "mod_copyright_inter_ico mod_copyright_inter_ico_global"}), "Global Site"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            className: "mod_copyright_inter_lk",
            href: "//www.jd.ru/?source=1&visitor_from=3",
            target: "_blank",
            rel: "noopener noreferrer",
            clstag: "".concat(e).concat(t, "0502"),
            onClick: a("".concat(n, "0502"))
        }, r["default"].createElement("i", {className: "mod_copyright_inter_ico mod_copyright_inter_ico_rissia"}), "Сайт России"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            className: "mod_copyright_inter_lk",
            href: "//www.jd.id/?source=1&visitor_from=3",
            target: "_blank",
            rel: "noopener noreferrer",
            clstag: "".concat(e).concat(t, "0503"),
            onClick: a("".concat(n, "0503"))
        }, r["default"].createElement("i", {className: "mod_copyright_inter_ico mod_copyright_inter_ico_indonesia"}), "Situs Indonesia"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            className: "mod_copyright_inter_lk",
            href: "//www.joybuy.es/?source=1&visitor_from=3",
            target: "_blank",
            rel: "noopener noreferrer",
            clstag: "".concat(e).concat(t, "0504"),
            onClick: a("".concat(n, "0504"))
        }, r["default"].createElement("i", {className: "mod_copyright_inter_ico mod_copyright_inter_ico_spain"}), "Sitio de España"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            className: "mod_copyright_inter_lk",
            href: "//www.jd.co.th/?source=1&visitor_from=3",
            target: "_blank",
            rel: "noopener noreferrer",
            clstag: "".concat(e).concat(t, "0505"),
            onClick: a("".concat(n, "0505"))
        }, r["default"].createElement("i", {className: "mod_copyright_inter_ico mod_copyright_inter_ico_thailand"}), "เว็บไซต์ประเทศไทย"))), r["default"].createElement("div", {
            className: "mod_copyright_subsites",
            clstag: "".concat(e).concat(t, "06"),
            onClick: a("".concat(n, "06"))
        }, r["default"].createElement("p", null, r["default"].createElement("span", null, "京东旗下网站："), r["default"].createElement("a", {
            href: "https://www.jdpay.com/",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "京东钱包"), r["default"].createElement("span", {className: "mod_copyright_split"}, "|"), r["default"].createElement("a", {
            href: "http://www.jcloud.com",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "京东云")))), r["default"].createElement("p", {
            className: "mod_copyright_auth",
            clstag: "".concat(e).concat(t, "07"),
            onClick: a("".concat(n, "07"))
        }, r["default"].createElement("a", {
            className: "mod_copyright_auth_ico mod_copyright_auth_ico_2",
            href: "https://ss.knet.cn/verifyseal.dll?sn=2008070300100000031&ampct=df&amppa=294005",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "可信网站信用评估"), r["default"].createElement("a", {
            className: "mod_copyright_auth_ico mod_copyright_auth_ico_3",
            href: "http://www.cyberpolice.cn",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "网络警察提醒你"), r["default"].createElement("a", {
            className: "mod_copyright_auth_ico mod_copyright_auth_ico_4",
            href: "https://search.szfw.org/cert/l/CX20120111001803001836",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "诚信网站"), r["default"].createElement("a", {
            className: "mod_copyright_auth_ico mod_copyright_auth_ico_5",
            href: "http://www.12377.cn/",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "中国互联网举报中心"), r["default"].createElement("a", {
            className: "mod_copyright_auth_ico mod_copyright_auth_ico_6",
            href: "http://www.12377.cn/node_548446.htm",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "网络举报APP下载")))))
    };
    t["default"] = a
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function render() {
        if (i["default"].get("isActivityTime")) return;
        Promise.all([(0, u.getNewuserinfo)(), (0, u.getCompanyinfo)()]).then(function (e) {
            var t = function _slicedToArray(e, t) {
                return function _arrayWithHoles(e) {
                    if (Array.isArray(e)) return e
                }(e) || function _iterableToArrayLimit(e, t) {
                    var n = [], r = !0, o = !1, i = undefined;
                    try {
                        for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                    } catch (c) {
                        o = !0, i = c
                    } finally {
                        try {
                            r || null == l["return"] || l["return"]()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t) || function _nonIterableRest() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }(e, 2), n = t[0], i = t[1];
            n.isNew && !i.isCompany && (0, s.getNewUserPromotionalData)().then(function (e) {
                e.forEach(function (e) {
                    switch (e.id) {
                        case"fsbg":
                            !function renderFsbg(e) {
                                var t = e.href, n = e.bigImageUrl, i = e.imageUrl,
                                    a = {href: t, type: "new-user", img: n, expandImg: i};
                                o["default"].render(r["default"].createElement(l["default"], a), document.getElementById("J_fs_act"))
                            }(e);
                            break;
                        case"top":
                            !function renderTop(e) {
                                var t = e.href, n = e.bigImageUrl, i = e.ext1,
                                    l = {href: t, bgColor: i, img: n, wideImg: n};
                                o["default"].render(r["default"].createElement(a["default"], l), document.getElementById("J_promotional-top"))
                            }(e);
                            break;
                        case"promo":
                            !function renderTreasure(e) {
                                var t = e.href, n = e.bigImageUrl, i = e.clog, a = {href: t, clog: i, src: n};
                                o["default"].render(r["default"].createElement(c["default"], _extends({}, a, {isNew: !0})), document.getElementById("treasure"))
                            }(e)
                    }
                })
            })
        })
    }, n(1), n(2), n(14), n(18), n(5), n(7);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(0)), i = _interopRequireDefault(n(40)),
        a = _interopRequireDefault(n(239)), l = _interopRequireDefault(n(112)), c = _interopRequireDefault(n(111)),
        s = n(63), u = n(41);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(240)), i = _interopRequireDefault(n(33)), a = _interopRequireDefault(n(39)), l = n(4);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(241);
    var c = function (e) {
        function PromotionalNewUserTop() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, PromotionalNewUserTop), _possibleConstructorReturn(this, _getPrototypeOf(PromotionalNewUserTop).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(PromotionalNewUserTop, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(PromotionalNewUserTop, [{
            key: "componentDidMount", value: function componentDidMount() {
                o.exposeNewUser()
            }
        }, {
            key: "render", value: function render() {
                var e = this.props, t = e.isWide, n = e.href, i = e.bgColor, c = e.img, s = e.wideImg,
                    u = t ? (0, a["default"])(s) : (0, a["default"])(c), f = {backgroundColor: i},
                    d = {backgroundImage: "url(".concat(u, ")")};
                return r["default"].createElement("a", {
                    target: "_blank",
                    className: "promotional-top",
                    href: n,
                    style: f,
                    onClick: o.clickNewUser,
                    clstag: (0, l.generateClstag)("head|adtop_03"),
                    "aria-label": "顶部推广"
                }, r["default"].createElement("div", {className: "jd_container", style: d}))
            }
        }]), PromotionalNewUserTop
    }(), s = (0, i["default"])(c);
    t["default"] = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.exposeNewUser = function exposeNewUser() {
        r.reportExpose({poi: "head|adtop|03"})
    }, t.clickNewUser = function clickNewUser() {
        r.reportClick({poi: "head|adtop|03"})
    };
    var r = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(6))
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(7), n(8), n(1), n(2), n(5), n(3), n(10), n(18), n(12);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(0)), i = _interopRequireDefault(n(21)),
        a = n(64), l = _interopRequireDefault(n(11)), c = n(36), s = n(4), u = n(6), f = _interopRequireWildcard(n(17)),
        d = _interopRequireWildcard(n(15)), p = _interopRequireWildcard(n(16)), m = _interopRequireDefault(n(44));

    function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (t) {
                _defineProperty(e, t, n[t])
            })
        }
        return e
    }

    function _slicedToArray(e, t) {
        return function _arrayWithHoles(e) {
            if (Array.isArray(e)) return e
        }(e) || function _iterableToArrayLimit(e, t) {
            var n = [], r = !0, o = !1, i = undefined;
            try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (c) {
                o = !0, i = c
            } finally {
                try {
                    r || null == l["return"] || l["return"]()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    n(243);
    var h = 0, _ = 0, y = 1518455, v = "head|logo|", g = new c.DelayExpose({delayTime: 1e3});
    window.addEventListener("resize", function () {
        var e = function onResize() {
            h = $(window).height() || 0
        };
        return e(), e
    }()), window.addEventListener("scroll", function () {
        _ = window.pageYOffset
    });
    var b = function (e) {
        function Logo() {
            var e, t, n;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Logo);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return _possibleConstructorReturn(n, (t = n = _possibleConstructorReturn(this, (e = _getPrototypeOf(Logo)).call.apply(e, [this].concat(i))), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "poiPrefix", "head|logo"), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "domInfo", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "showState", !1), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "showLimit", 2), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "isAnimating", !1), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "animationDuration", 5200), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "playTimer", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "replayTimer", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "hideTimer", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "showTextTimer", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "showTextStamp", 2600), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "shouldStopCycling", !0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "showCount", 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "isInterruptable", !1), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "imageDom", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "enterStamp", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "logObj", {
                desc: "null",
                biclk: "null",
                url: "null",
                mcinfo: "null",
                text: "null",
                poi: ""
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "clstag", "".concat(p.CLSTAGPREFIX, "head|logo_01")), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "lastImage", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "isHovered", !1), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "isHover", !1), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "isOld", !1), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "sceneDom", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "state", {
                url: "//www.jd.com",
                text: null,
                imprUrl: null,
                clkUrl: null,
                color: "",
                btnColor: "",
                btnBgColor: ""
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "getImageRef", function (e) {
                var t = o["default"].findDOMNode(e);
                t instanceof HTMLElement && (n.imageDom = t)
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "getSceneDom", function (e) {
                var t = o["default"].findDOMNode(e);
                t instanceof HTMLElement && (n.sceneDom = t)
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "processData", function (e) {
                var t = e.data;
                p.SHOWNTHEMES.push(t.theme_id);
                var r = _slicedToArray(t.joy_word.split("$"), 4), o = r[0], i = r[1], a = void 0 === i ? "#555" : i,
                    l = r[2], c = void 0 === l ? "#fff" : l, s = r[3], u = void 0 === s ? "#555" : s, f = {
                        url: "".concat(d.JOY, "?babelChannel=").concat(y, "&activityId=").concat(t.theme_id, "&source=01"),
                        imgUrl: "".concat(t.joy_image_url, "?v=").concat(Math.random()),
                        text: o,
                        color: a,
                        btnColor: u,
                        btnBgColor: c,
                        imprUrl: t.exposal_url,
                        clkUrl: t.click_url,
                        extColumns: t.ext_columns || {}
                    };
                return -1 === t.joy_word.indexOf("$") && (n.isOld = !0, n.animationDuration = 4200), Promise.resolve(f)
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "shouldFadeout", !1), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "onScroll", (0, s.throttle)(function () {
                var e = _ <= n.domInfo.top + n.domInfo.height && _ + h >= n.domInfo.top;
                e !== n.showState && (n.showState = e, n.showState && (n.showCount >= n.showLimit || n.ensureIdle(function () {
                    n.isInterruptable = !1, n.isHover = !1, n.startAnimateLogo()
                })))
            }, 0)), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "onLogoMouseenter", function () {
                n.shouldStopCycling = !1, n.isHover = !0, n.enterStamp = Date.now(), n.isAnimating || (n.isHovered = !0), n.ensureIdle(function () {
                    n.startAnimateLogo(!0)
                })
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "onLogoMouseleave", function () {
                n.shouldStopCycling = !0, n.shouldFadeout && (n.shouldFadeout = !1, n.fadeOut()), n.isOld && n.isInterruptable && (n.replayTimer && clearTimeout(n.replayTimer), n.showTextTimer && clearTimeout(n.showTextTimer), n.shouldStopCycling = !0, n.fadeOut()), n.enterStamp && (0, u.reportExpose)(n.getRealLogObj()), n.enterStamp = 0
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "onLogoClick", function (e) {
                var t = n.state.clkUrl;
                n.sendLog(t), (0, u.reportClick)(_objectSpread({}, n.logObj, {poi: "".concat(v, "01")}))
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(n)), "sendImpl", function () {
                g.sendExpose({poi: "".concat(v, "01"), url: (0, u.processUrl)(n.state.url)})
            }), t))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(Logo, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Logo, [{
            key: "requestData", value: function requestData() {
                var e = {pin: m["default"].pin, uuid: m["default"].uuid};
                return (0, l["default"])(f.LOGO, {
                    name: "jsonpLogo",
                    params: e,
                    backup: f.LOGO_BAK,
                    speedID: 7,
                    umpID: 9
                })
            }
        }, {
            key: "verifyData", value: function verifyData(e) {
                var t = new Error("Logo dataCheck failed");
                if (!e) return Promise.reject(t);
                if (!e.data) return Promise.reject(t);
                var n = e.data;
                return n.joy_image_url && n.joy_word && n.theme_id ? Promise.resolve(e) : Promise.reject(t)
            }
        }, {
            key: "loadImage", value: function loadImage(e) {
                return new Promise(function (t, n) {
                    var r = e.imgUrl, o = new Image, i = !1;
                    if (o.onload = function () {
                        i ? o.onload = null : (t(e), i = !0, o.onload = null)
                    }, o.src = r, o.complete) {
                        if (i) return void (o.onload = null);
                        t(e), i = !0, o.onload = null
                    }
                    o.onerror = function () {
                        n(e)
                    }
                })
            }
        }, {
            key: "getRealLogObj", value: function getRealLogObj() {
                var e = _objectSpread({}, this.logObj), t = e.desc;
                return e.desc = this.isHover ? "".concat(t, "#hover-").concat(Date.now() - this.enterStamp) : "".concat(t, "#exposal"), e
            }
        }, {
            key: "startAnimateLogo", value: function startAnimateLogo() {
                var e, t = this, n = arguments.length > 0 && arguments[0] !== undefined && arguments[0],
                    r = 8 === document.documentMode || 9 === document.documentMode, o = n ? "logo_scene_withBg" : "",
                    a = r ? "logo_scene_legacy" : "";
                this.isHover && this.lastImage ? e = this.lastImage : (e = this.requestData().then(this.verifyData), this.lastImage = e);
                !function requestAnimation() {
                    t.isAnimating && e.then(t.processData).then(t.loadImage).then(function (e) {
                        var n = e.imgUrl, i = e.url, l = e.text, c = e.color, s = e.btnColor, u = e.btnBgColor,
                            f = e.imprUrl, d = e.clkUrl, p = e.extColumns;
                        t.isAnimating && (t.hideTimer && clearTimeout(t.hideTimer), t.logObj = _objectSpread({}, p, {
                            desc: p.desc.replace(/\$#[0-9a-f]{6}\$#[0-9a-f]{6}\$#[0-9a-f]{6}/, ""),
                            poi: "".concat(v, "03"),
                            url: i
                        }), t.sceneDom.className = "logo_scene ".concat(o), t.sceneDom.offsetWidth, t.sceneDom.className = "logo_scene ".concat("logo_scene_animateend", " ").concat(o, " ").concat(a), t.isHover || t.showCount++, t.imageDom.style.backgroundImage = "url(".concat(n, ")"), t.showTextTimer && clearTimeout(t.showTextTimer), t.showTextTimer = setTimeout(function () {
                            r && (t.sceneDom.className = "logo_scene ".concat("logo_scene_animateend", " ").concat(o))
                        }, t.showTextStamp), t.replayTimer && clearTimeout(t.replayTimer), t.replayTimer = setTimeout(function () {
                            t.isInterruptable = !0, t.shouldStopCycling ? t.fadeOut() : (t.shouldFadeout = !0, t.isOld && requestAnimation())
                        }, t.animationDuration), t.sendLog(f), t.sendImpl(), t.setState({
                            url: i,
                            text: l,
                            color: c,
                            btnColor: s,
                            btnBgColor: u,
                            imprUrl: f,
                            clkUrl: d
                        }))
                    })["catch"](function (e) {
                        t.isAnimating = !1, t.replayTimer && clearTimeout(t.replayTimer), t.showTextTimer && clearTimeout(t.showTextTimer), t.hideTimer && clearTimeout(t.hideTimer), i["default"].log(e)
                    })
                }()
            }
        }, {
            key: "ensureIdle", value: function ensureIdle(e) {
                if (this.isAnimating) return !1;
                this.isAnimating = !0, e()
            }
        }, {
            key: "sendLog", value: function sendLog(e) {
                (new Image).src = e
            }
        }, {
            key: "fadeOut", value: function fadeOut() {
                var e = this;
                this.isAnimating = !1, this.sceneDom.className = "logo_scene logo_scene_fade", this.sceneDom.offsetWidth, this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = setTimeout(function () {
                    e.isHovered = !1, e.sceneDom.className = "logo_scene logo_scene_hide", e.sceneDom.offsetWidth
                }, 800)
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                var e = o["default"].findDOMNode(this);
                e instanceof Element && (this.domInfo = (0, a.getElementPosByParent)(e) || {}), window.addEventListener("scroll", this.onScroll), this.onScroll()
            }
        }, {
            key: "componentWillUnmount", value: function componentWillUnmount() {
                window.removeEventListener("scroll", this.onScroll)
            }
        }, {
            key: "render", value: function render() {
                var e = this.state, t = e.url, n = e.text, o = e.color, i = e.btnColor, a = e.btnBgColor;
                return r["default"].createElement("a", {
                    href: t,
                    className: "logo_scene",
                    target: "_blank",
                    onClick: this.onLogoClick,
                    ref: this.getSceneDom,
                    clstag: this.clstag,
                    "aria-label": "JOY寻宝 ".concat(n)
                }, r["default"].createElement("div", {
                    className: "logo_scene_img",
                    ref: this.getImageRef
                }), r["default"].createElement("span", {
                    className: "logo_scene_text",
                    style: {color: o},
                    dangerouslySetInnerHTML: {__html: n || ""}
                }), this.isOld || r["default"].createElement("span", {
                    className: "logo_scene_btn",
                    style: {color: i, backgroundColor: a}
                }, "去看看>"))
            }
        }]), Logo
    }();
    t["default"] = function _default() {
        if (!$("#J_logo_extend").length) {
            var e = document.getElementById("logo"), t = r["default"].createElement(b, null);
            o["default"].render(t, e), e && e.addEventListener("mouseenter", function () {
                t.component.onLogoMouseenter()
            }), e && e.addEventListener("mouseleave", function () {
                t.component.onLogoMouseleave()
            })
        }
    }
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(34)), i = _interopRequireDefault(n(31)),
        a = _interopRequireDefault(n(118));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var l = function (e) {
        function FeedsLoader(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, FeedsLoader), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(FeedsLoader).call(this, e)))), "height", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "Loader", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "getPlaceholder", function () {
                return r["default"].createElement(a["default"], null)
            }), t.height = 795, t.Loader = (0, i["default"])({
                loader: function loader() {
                    return n.e(5).then(n.t.bind(null, 271, 7))
                }, loading: t.getPlaceholder, delay: 0, render: function render(e, t) {
                    window._.eventCenter.trigger("floorLoaded", "feeds");
                    var n = e["default"];
                    return r["default"].createElement(n, t)
                }
            }), t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(FeedsLoader, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(FeedsLoader, [{
            key: "render", value: function render() {
                var e = this.Loader, t = this.height;
                return r["default"].createElement("div", {
                    id: "J_feeds",
                    "aria-label": "为你推荐",
                    tabIndex: 0,
                    "data-loading": !0
                }, r["default"].createElement(o["default"], {
                    height: t,
                    once: !0,
                    placeholder: this.getPlaceholder()
                }, r["default"].createElement(e, null)))
            }
        }]), FeedsLoader
    }();
    t["default"] = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    n(119);
    var o = function (e) {
        function FeedTabsPlaceholder() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, FeedTabsPlaceholder), _possibleConstructorReturn(this, _getPrototypeOf(FeedTabsPlaceholder).apply(this, arguments))
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(FeedTabsPlaceholder, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(FeedTabsPlaceholder, [{
            key: "render", value: function render() {
                for (var e = [], t = 0; t < 5; t++) e.push(r["default"].createElement("div", {className: "feed-tab__item skeleton-element"}));
                return r["default"].createElement("div", {className: "feed-tab-wrapper skeleton-block"}, r["default"].createElement("div", {className: "feed-tab"}, e))
            }
        }]), FeedTabsPlaceholder
    }();
    t["default"] = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(14), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(34)), i = _interopRequireDefault(n(31)),
        a = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(50)), l = _interopRequireDefault(n(122));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var c = function (e) {
        function SeckillLoader(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, SeckillLoader), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(SeckillLoader).call(this, e)))), "height", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "Loader", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "handleError", function () {
                $("#J_seckill").fadeOut(), a["default"].umpBiz({bizid: a.BIZ_HIDDEN, operation: 1, result: 0})
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "getPlaceholder", function () {
                return r["default"].createElement(l["default"], null)
            }), t.height = 260, t.Loader = (0, i["default"])({
                loader: function loader() {
                    return n.e(13).then(n.t.bind(null, 272, 7))
                }, loading: t.getPlaceholder, render: function render(e, n) {
                    window._.eventCenter.trigger("floorLoaded", "seckill");
                    var o = e["default"];
                    return r["default"].createElement(o, _extends({}, n, {onError: t.handleError}))
                }, delay: 0
            }), t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(SeckillLoader, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(SeckillLoader, [{
            key: "render", value: function render() {
                var e = this.Loader, t = this.height;
                return r["default"].createElement("div", {
                    id: "J_seckill",
                    tabIndex: 0,
                    "data-loading": !0
                }, r["default"].createElement(o["default"], {
                    height: t,
                    once: !0,
                    placeholder: this.getPlaceholder()
                }, r["default"].createElement(e, null)))
            }
        }]), SeckillLoader
    }();
    t["default"] = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));
    n(123);
    t["default"] = function _default() {
        for (var e = [], t = 0; t < 4; t++) e.push(r["default"].createElement("div", {className: "seckill-item"}, r["default"].createElement("div", {className: "seckill-item__image skeleton-element"}), r["default"].createElement("div", {className: "seckill-item__name skeleton-element"}), r["default"].createElement("div", {className: "seckill-item__price skeleton-element"})));
        return r["default"].createElement("div", {className: "seckill-list"}, e)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));
    n(124);
    t["default"] = function _default() {
        return r["default"].createElement("div", {className: "seckill-brand"}, r["default"].createElement("div", {className: "brand-item"}, r["default"].createElement("div", {className: "item-image skeleton-element"}), r["default"].createElement("div", {className: "item-info skeleton-element"})))
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(14), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(34)), i = _interopRequireDefault(n(31)),
        a = _interopRequireDefault(n(126)), l = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(50));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var c = function (e) {
        function ChannelsLoader(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ChannelsLoader), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(ChannelsLoader).call(this, e)))), "height", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "Loader", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "getPlaceholder", function () {
                return r["default"].createElement(a["default"], null)
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "handleError", function () {
                $("#J_channels").fadeOut(), l["default"].umpBiz({bizid: l.BIZ_HIDDEN, operation: 6, result: 0})
            }), t.height = 815, t.Loader = (0, i["default"])({
                loader: function loader() {
                    return n.e(2).then(n.t.bind(null, 273, 7))
                }, loading: t.getPlaceholder, delay: 0, render: function render(e, n) {
                    window._.eventCenter.trigger("floorLoaded", "channels");
                    var o = e["default"];
                    return r["default"].createElement(o, _extends({}, n, {onError: t.handleError}))
                }
            }), t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ChannelsLoader, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ChannelsLoader, [{
            key: "render", value: function render() {
                var e = this.Loader, t = this.height;
                return r["default"].createElement("div", {
                    id: "J_channels",
                    className: "jd_container",
                    "aria-label": "频道广场",
                    tabIndex: 0,
                    "data-loading": !0
                }, r["default"].createElement(o["default"], {
                    height: t,
                    once: !0,
                    placeholder: this.getPlaceholder()
                }, r["default"].createElement(e, null)))
            }
        }]), ChannelsLoader
    }();
    t["default"] = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(14), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(34)), i = _interopRequireDefault(n(31)),
        a = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(50)), l = _interopRequireDefault(n(128));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var c = function (e) {
        function ActivityLoader(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ActivityLoader), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(ActivityLoader).call(this, e)))), "height", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "Loader", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "getPlaceholder", function () {
                return r["default"].createElement(l["default"], null)
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "handleError", function () {
                $(".nice-goods").fadeOut(), a["default"].umpBiz({bizid: a.BIZ_HIDDEN, operation: 4, result: 0})
            }), t.height = 260, t.Loader = (0, i["default"])({
                loader: function loader() {
                    return n.e(10).then(n.t.bind(null, 274, 7))
                }, loading: t.getPlaceholder, delay: 0, render: function render(e, n) {
                    window._.eventCenter.trigger("floorLoaded", "niceGoods");
                    var o = e["default"];
                    return r["default"].createElement(o, _extends({}, n, {onError: t.handleError}))
                }
            }), t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ActivityLoader, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ActivityLoader, [{
            key: "render", value: function render() {
                var e = this.Loader, t = this.height;
                return r["default"].createElement("div", {
                    id: "J_niceGoods",
                    tabIndex: 0,
                    "data-loading": !0
                }, r["default"].createElement(o["default"], {
                    height: t,
                    once: !0,
                    placeholder: this.getPlaceholder()
                }, r["default"].createElement(e, null)))
            }
        }]), ActivityLoader
    }();
    t["default"] = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(34)), i = _interopRequireDefault(n(31)),
        a = _interopRequireDefault(n(131)), l = _interopRequireDefault(n(135));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var c = function (e) {
        function ActivityLoader(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ActivityLoader), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(ActivityLoader).call(this, e)))), "height", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "Loader", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "getPlaceholder", function () {
                return r["default"].createElement("div", null, r["default"].createElement(a["default"], null), r["default"].createElement(l["default"], null))
            }), t.height = 340, t.Loader = (0, i["default"])({
                loader: function loader() {
                    return n.e(3).then(n.t.bind(null, 275, 7))
                }, loading: t.getPlaceholder, delay: 0, render: function render(e, t) {
                    window._.eventCenter.trigger("floorLoaded", "core1");
                    var n = e["default"];
                    return r["default"].createElement(n, t)
                }
            }), t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ActivityLoader, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ActivityLoader, [{
            key: "render", value: function render() {
                var e = this.Loader, t = this.height;
                return r["default"].createElement("div", {
                    id: "J_core1",
                    className: "core1 jd_container floor",
                    "aria-label": "特色优选一区",
                    tabIndex: 0,
                    "data-loading": !0
                }, r["default"].createElement(o["default"], {
                    height: t,
                    once: !0,
                    offset: 0,
                    placeholder: this.getPlaceholder()
                }, r["default"].createElement(e, null)))
            }
        }]), ActivityLoader
    }();
    t["default"] = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(34)), i = _interopRequireDefault(n(31)),
        a = _interopRequireDefault(n(137)), l = _interopRequireDefault(n(139)), c = _interopRequireDefault(n(141)),
        s = _interopRequireDefault(n(143));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var u = function (e) {
        function ActivityLoader(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ActivityLoader), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(ActivityLoader).call(this, e)))), "height", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "Loader", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "getPlaceholder", function () {
                return r["default"].createElement("div", null, r["default"].createElement(a["default"], null), r["default"].createElement(l["default"], null), r["default"].createElement(c["default"], null), r["default"].createElement(s["default"], null))
            }), t.height = 340, t.Loader = (0, i["default"])({
                loader: function loader() {
                    return n.e(4).then(n.t.bind(null, 276, 7))
                }, loading: t.getPlaceholder, delay: 0, render: function render(e, t) {
                    window._.eventCenter.trigger("floorLoaded", "core2");
                    var n = e["default"];
                    return r["default"].createElement(n, t)
                }
            }), t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ActivityLoader, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ActivityLoader, [{
            key: "render", value: function render() {
                var e = this.Loader, t = this.height;
                return r["default"].createElement("div", {
                    id: "J_core2",
                    className: "core2 jd_container floor",
                    "aria-label": "特色优选二区",
                    tabIndex: 0,
                    "data-loading": !0
                }, r["default"].createElement(o["default"], {
                    height: t,
                    once: !0,
                    placeholder: this.getPlaceholder()
                }, r["default"].createElement(e, null)))
            }
        }]), ActivityLoader
    }();
    t["default"] = u
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(3), n(49), n(7), n(8), n(5);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(32)), i = _interopRequireDefault(n(254)),
        a = _interopRequireDefault(n(257)), l = _interopRequireDefault(n(258)), c = _interopRequireDefault(n(33)),
        s = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(15)), u = n(27), f = n(4), d = n(259);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    n(260);
    var p = function (e) {
        function Elevator(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, Elevator), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(Elevator).call(this, e)))), "sto", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "floorData", [{
                id: "#J_seckill",
                name: "京东秒杀",
                scrollY: 0,
                scrollEnd: 0,
                gapY: 0,
                poiSuffix: "01"
            }, {id: "#J_spec", name: "特色优选", scrollY: 0, scrollEnd: 0, gapY: 0, poiSuffix: "02"}, {
                id: "#J_channels",
                name: "频道广场",
                scrollY: 0,
                scrollEnd: 0,
                gapY: 0,
                poiSuffix: "03"
            }, {
                id: "#J_feeds",
                name: "为你推荐",
                scrollY: 0,
                scrollEnd: 0,
                gapY: -200,
                poiSuffix: "04"
            }]), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "linkData", [{
                name: "客服",
                url: s.TIMI,
                poiSuffix: "05",
                icon: r["default"].createElement(a["default"], null)
            }, {
                name: "反馈",
                url: s.FEEDBACK,
                poiSuffix: "06",
                icon: r["default"].createElement(l["default"], null)
            }]), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "toTopSuffix", "07"), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "scrollStartTime", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "scrollStartPos", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "scrollEndPos", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "scrollRange", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "scrollDuration", 300), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "$window", $(window)), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "doc", document.documentElement && !(0, u.isSafari)() ? document.documentElement : document.body), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "onScroll", function () {
                var e, n = window.pageYOffset, r = {};
                n >= t.floorData[0].scrollY && !t.state.isOutFs ? r.isOutFs = !0 : n < t.floorData[0].scrollY && t.state.isOutFs && (r.isOutFs = !1), n >= t.floorData[3].scrollY && !t.state.isReachRecommend ? r.isReachRecommend = !0 : n < t.floorData[3].scrollY && t.state.isReachRecommend && (r.isReachRecommend = !1), t.floorData.forEach(function (t, r) {
                    n >= t.scrollY + t.gapY - 5 && n < t.scrollEnd && (e = r)
                }), void 0 === e ? -1 !== t.state.curFloorIdx && (r.curFloorIdx = -1) : t.state.curFloorIdx !== e && (r.curFloorIdx = e), Object.keys(r).length && t.setState(function _objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function (t) {
                            _defineProperty(e, t, n[t])
                        })
                    }
                    return e
                }({}, r))
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "requestScroll", function (e) {
                !t.scrollStartTime && e && (t.scrollStartTime = e);
                var n = e ? e - t.scrollStartTime : 0,
                    r = (0, f.easeOut)(n, t.scrollStartPos, t.scrollRange, t.scrollDuration);
                t.doc.scrollTop = r, n >= t.scrollDuration ? t.doc.scrollTop = t.scrollStartPos + t.scrollRange : window.requestAnimationFrame(t.requestScroll)
            }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "onClickFloor", function (e) {
                var n = e.scrollY + e.gapY;
                t.scrollingPage(n, e), (0, d.handleClick)(e.poiSuffix, e.name)
            }), t.state = {isOutFs: !1, isReachRecommend: !1, curFloorIdx: -1}, t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(Elevator, r["default"].Component), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(Elevator, [{
            key: "updateFloorData", value: function updateFloorData() {
                this.floorData.forEach(function (e, t) {
                    var n = $(e.id);
                    if (n && n.length) {
                        var r = n.offset(), o = r ? r.top : 0, i = n.height() || 0, a = 3 === t ? 125 : -75;
                        e.scrollY = o + a, e.scrollEnd = o + i + a
                    }
                })
            }
        }, {
            key: "componentDidMount", value: function componentDidMount() {
                this.updateFloorData(), this.$window.bind("scroll.elevator", (0, f.throttle)(this.onScroll, 100)), (0, d.expose)()
            }
        }, {
            key: "componentDidUpdate", value: function componentDidUpdate() {
                this.updateFloorData()
            }
        }, {
            key: "scrollingPage", value: function scrollingPage(e, t) {
                this.scrollStartPos = window.pageYOffset, this.scrollEndPos = e, this.scrollRange = this.scrollEndPos - this.scrollStartPos, this.scrollStartTime = 0, this.requestScroll()
            }
        }, {
            key: "render", value: function render() {
                var e = this, t = this.state, n = t.isOutFs, a = t.isReachRecommend, l = t.curFloorIdx,
                    c = (0, o["default"])("elevator", {elevator_fix: n, elevator_recommend: a});
                return r["default"].createElement("div", {className: c}, r["default"].createElement(i["default"], null), r["default"].createElement("ul", {className: "elevator_list"}, this.floorData.map(function (t, n) {
                    return r["default"].createElement("li", {className: "elevator_item"}, r["default"].createElement("a", {
                        className: "elevator_lk".concat(l === n ? " elevator_lk_cur" : ""),
                        href: "javascript:void(0);",
                        clstag: (0, f.generateClstag)("".concat("core|elvt_").concat(t.poiSuffix)),
                        onClick: e.onClickFloor.bind(e, t),
                        tabIndex: -1,
                        "aria-hidden": !0
                    }, r["default"].createElement("span", {className: "elevator_lk_bg"}), r["default"].createElement("span", {className: "elevator_lk_txt"}, t.name)))
                }), this.linkData.map(function (t) {
                    return r["default"].createElement("li", {className: "elevator_item"}, r["default"].createElement("a", {
                        className: "elevator_lk elevator_lk2",
                        href: t.url,
                        target: "_blank",
                        clstag: (0, f.generateClstag)("".concat("core|elvt_").concat(t.poiSuffix)),
                        onClick: d.handleClick.bind(e, t.poiSuffix, t.name, t.url)
                    }, r["default"].createElement("span", {className: "elevator_lk_bg"}), t.icon, r["default"].createElement("span", {className: "elevator_lk_txt"}, t.name)))
                })), r["default"].createElement("a", {
                    className: "elevator_totop",
                    href: "javascript: void(0);",
                    clstag: (0, f.generateClstag)("".concat("core|elvt_").concat(this.toTopSuffix)),
                    onClick: this.onClickFloor.bind(this, {scrollY: 0, gapY: 0, poiSuffix: this.toTopSuffix}),
                    tabIndex: -1,
                    "aria-hidden": !0
                }, r["default"].createElement("span", {className: "elevator_totop_icon"}, ""), r["default"].createElement("span", {className: "elevator_totop_txt"}, "顶部")))
            }
        }]), Elevator
    }(), m = (0, c["default"])(p);
    t["default"] = m
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(255)), i = _interopRequireDefault(n(256));

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var a = function ElevatorSprite() {
        return r["default"].createElement("svg", {
            className: "svgcont",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            style: {display: "none"}
        }, r["default"].createElement("defs", null, r["default"].createElement("style", null, "\n          path {\n            fill: inherit\n          }\n        ")), r["default"].createElement("defs", null, r["default"].createElement(o["default"], null), r["default"].createElement(i["default"], null)))
    };
    t["default"] = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));
    var o = r["default"].createElement("symbol", {
        id: "icon_timline",
        viewBox: "0 0 16 16"
    }, r["default"].createElement("path", {d: "M12.986 5.582a.505.505 0 0 0 .25-.063c.34-.188.364-.738.056-1.252-.235-.391-.59-.643-.905-.643a.511.511 0 0 0-.251.063c-.338.188-.363.738-.055 1.252.234.391.59.643.905.643m-9.975 0c.317 0 .674-.252.91-.643.31-.514.286-1.064-.056-1.253a.52.52 0 0 0-.252-.062c-.317 0-.674.252-.91.643-.31.514-.285 1.064.056 1.252.076.042.16.063.252.063m10.779.956a.372.372 0 0 0-.295-.024.387.387 0 0 0-.225.201c-.013.025-.315.609-1.062 1.191-.738.573-2.062 1.26-4.185 1.279h-.075c-2.076 0-3.384-.653-4.116-1.2-.779-.581-1.094-1.177-1.097-1.182a.395.395 0 0 0-.23-.199.371.371 0 0 0-.293.031.42.42 0 0 0-.161.549c.039.077.413.772 1.316 1.45.826.622 2.29 1.363 4.573 1.363l.089-.001c2.331-.019 3.81-.793 4.641-1.439.862-.672 1.225-1.345 1.292-1.475a.419.419 0 0 0-.172-.544m-5.848-.124c1.092 0 2.268-.218 2.268-.697S9.034 5.02 7.942 5.02c-1.071 0-2.152.216-2.152.697s1.081.697 2.152.697m4.086 4.647c-1.004.574-1.052 1.597-1.015 2.223a.098.098 0 0 1-.113.104c-.693-.096-1.161-.407-1.757-.943a1.343 1.343 0 0 0-.933-.351l-.21.003c-3.809 0-6.897-2.458-6.897-5.489 0-3.032 3.088-5.489 6.897-5.489 3.808 0 6.896 2.457 6.896 5.489 0 1.834-1.129 3.461-2.868 4.453M8 0C3.589 0 0 2.931 0 6.533c0 3.603 3.589 6.533 8 6.533l.224-.002c.102 0 .204.033.272.099 1.239 1.205 2.568 1.323 3.303 1.336a.3.3 0 0 0 .303-.342c-.087-.613-.318-1.813.477-2.263C14.722 10.684 16 8.677 16 6.533 16 2.931 12.411 0 8 0"}));
    t["default"] = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));
    var o = r["default"].createElement("symbol", {
        id: "icon_feedback",
        viewBox: "0 0 16 16"
    }, r["default"].createElement("path", {d: "M1.4,15l0-1l14,0v1H1.4z M2.5,13H2l0-0.5c0-0.1,0-0.2,0-0.3c0-0.3,0.1-0.8,0.2-1.3c0.1-0.7,0.4-1.7,0.4-2 C2.7,8.7,2.8,8.4,3,8.3l8-8c0.3-0.3,0.8-0.3,1.1,0l2.7,2.7c0.3,0.3,0.3,0.8,0,1.1l0,0l-8,8c-0.1,0.1-0.4,0.3-0.6,0.4 c-0.7,0.2-1.4,0.3-2.1,0.4c-0.5,0.1-1,0.2-1.3,0.2C2.7,13,2.6,13,2.5,13z M11.6,1.1L3.7,9c0,0.1-0.1,0.1-0.1,0.2 c-0.1,0.2-0.3,1.1-0.4,1.9c-0.1,0.3-0.1,0.6-0.1,0.9c0.3,0,0.6-0.1,0.9-0.1c0.7-0.1,1.3-0.2,2-0.4c0,0,0.1-0.1,0.2-0.1L14,3.5 L11.6,1.1z M14.1,3.3C14.1,3.3,14.1,3.3,14.1,3.3L14.1,3.3z M11.4,0.9C11.4,0.9,11.4,0.9,11.4,0.9L11.4,0.9z"}));
    t["default"] = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));
    t["default"] = function _default(e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {xlinkHref: "#icon_timline"}))
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var r = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }(n(0));
    t["default"] = function _default(e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {xlinkHref: "#icon_feedback"}))
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.expose = function expose() {
        r.reportExpose({poi: o})
    }, t.handleClick = function handleClick(e, t, n) {
        r.reportClick({poi: "".concat(i).concat(e), text: t, url: n})
    };
    var r = function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
        }
        return t["default"] = e, t
    }(n(6));
    var o = "core|elvt|null", i = "core|elvt|"
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(14), n(3), n(18), n(5), n(7);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(34)), i = _interopRequireDefault(n(31)),
        a = _interopRequireDefault(n(40)), l = n(41);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _slicedToArray(e, t) {
        return function _arrayWithHoles(e) {
            if (Array.isArray(e)) return e
        }(e) || function _iterableToArrayLimit(e, t) {
            var n = [], r = !0, o = !1, i = undefined;
            try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (c) {
                o = !0, i = c
            } finally {
                try {
                    r || null == l["return"] || l["return"]()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var c = function (e) {
        function NewUserLoader(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, NewUserLoader), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }(this, _getPrototypeOf(NewUserLoader).call(this, e)))), "height", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "Loader", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "state", {
                isNewUser: !1,
                isCompany: !1
            }), t.height = pageConfig.isWide ? 150 : 125, t.Loader = (0, i["default"])({
                loader: function loader() {
                    return n.e(9).then(n.t.bind(null, 277, 7))
                }, loading: function loading() {
                    return r["default"].createElement("div", {className: "mod_lazyload", style: {height: t.height}})
                }, render: function render(e, n) {
                    var o = e["default"];
                    return r["default"].createElement(o, _extends({}, n, {height: t.height}))
                }, delay: 0
            }), t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(NewUserLoader, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(NewUserLoader, [{
            key: "componentDidMount", value: function componentDidMount() {
                var e = this;
                a["default"].get("isActivityTime") || Promise.all([(0, l.getNewuserinfo)(), (0, l.getCompanyinfo)()]).then(function (t) {
                    var n = _slicedToArray(t, 2), r = n[0], o = n[1];
                    e.setState({isNewUser: r.isNew, isCompany: o.isCompany})
                })
            }
        }, {
            key: "render", value: function render() {
                var e = this.state, t = e.isNewUser, n = e.isCompany, i = this.Loader, a = this.height;
                return t && !n ? r["default"].createElement(o["default"], {
                    once: !0,
                    height: a
                }, r["default"].createElement(i, null)) : null
            }
        }]), NewUserLoader
    }();
    t["default"] = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0, n(1), n(2), n(14), n(3), n(25);
    var r = _interopRequireDefault(n(0)), o = _interopRequireDefault(n(34)), i = _interopRequireDefault(n(31)),
        a = _interopRequireDefault(n(40)), l = function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
            return t["default"] = e, t
        }(n(50)), c = n(113);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
            return typeof e
        } : function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _extends() {
        return (_extends = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var s = pageConfig.enjoyType, u = c.LAYOUT_MAP[s], f = a["default"].get("isActivityTime"), d = function (e) {
        function ActivityLoader(e) {
            var t;
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, ActivityLoader), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = _possibleConstructorReturn(this, _getPrototypeOf(ActivityLoader).call(this, e)))), "height", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "Loader", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "handleError", function () {
                $("#JD_activity-main").fadeOut(), l["default"].umpBiz({bizid: l.BIZ_HIDDEN, operation: 8, result: 0})
            }), f && u ? (t.height = u.background[Number(pageConfig.isWide)].height, t.Loader = (0, i["default"])({
                loader: function loader() {
                    return n.e(1).then(n.t.bind(null, 278, 7))
                }, loading: function loading() {
                    return r["default"].createElement("div", {className: "mod_lazyload", style: {height: t.height}})
                }, render: function render(e, n) {
                    var o = e["default"];
                    return r["default"].createElement(o, _extends({}, n, {onError: t.handleError}))
                }, delay: 0
            }), t) : _possibleConstructorReturn(t)
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _setPrototypeOf(e, t)
        }(ActivityLoader, r["default"].PureComponent), function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
        }(ActivityLoader, [{
            key: "render", value: function render() {
                var e = this.Loader, t = this.height;
                return f && u ? r["default"].createElement(o["default"], {
                    height: t,
                    once: !0
                }, r["default"].createElement(e, null)) : null
            }
        }]), ActivityLoader
    }();
    t["default"] = d
}, function (e, t, n) {
}], [[146, 0]]]);
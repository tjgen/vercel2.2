(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4376], {
        43267: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    html: t,
                    height: n = null,
                    width: a = null,
                    children: o,
                    dataNtpc: s = ""
                } = e;
                return (0, r.useEffect)(() => {
                    s && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-".concat(s)
                        }
                    })
                }, [s]), (0, i.jsxs)(i.Fragment, {
                    children: [o, t ? (0, i.jsx)("div", {
                        style: {
                            height: null != n ? "".concat(n, "px") : "auto",
                            width: null != a ? "".concat(a, "px") : "auto"
                        },
                        "data-ntpc": s,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            };
            let i = n(3404),
                r = n(11390)
        },
        53482: function(e, t, n) {
            "use strict";
            var i;
            let r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    debugMode: n,
                    dataLayerName: i = "dataLayer",
                    nonce: c
                } = e;
                return void 0 === r && (r = i), (0, o.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n          window['".concat(i, "'] = window['").concat(i, "'] || [];\n          function gtag(){window['").concat(i, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t, "' ").concat(n ? ",{ 'debug_mode': true }" : "", ");")
                        },
                        nonce: c
                    }), (0, a.jsx)(s.default, {
                        id: "_next-ga",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
                        nonce: c
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (void 0 === r) {
                    console.warn("@next/third-parties: GA has not been initialized");
                    return
                }
                window[r] ? window[r].push(arguments) : console.warn("@next/third-parties: GA dataLayer ".concat(r, " does not exist"))
            };
            let a = n(3404),
                o = n(11390),
                s = (i = n(45610)) && i.__esModule ? i : {
                    default: i
                }
        },
        18161: function(e, t, n) {
            "use strict";
            var i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = void 0, t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    gtmScriptUrl: n = "https://www.googletagmanager.com/gtm.js",
                    dataLayerName: i = "dataLayer",
                    auth: c,
                    preview: l,
                    dataLayer: u,
                    nonce: d
                } = e;
                s = i;
                let h = "dataLayer" !== i ? "&l=".concat(i) : "";
                return (0, a.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(u ? "w[l].push(".concat(JSON.stringify(u), ")") : "", "\n      })(window,'").concat(i, "');")
                        },
                        nonce: d
                    }), (0, r.jsx)(o.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: "".concat(n, "?id=").concat(t).concat(h).concat(c ? "&gtm_auth=".concat(c) : "").concat(l ? "&gtm_preview=".concat(l, "&gtm_cookies_win=x") : "")
                    })]
                })
            };
            let r = n(3404),
                a = n(11390),
                o = (i = n(45610)) && i.__esModule ? i : {
                    default: i
                },
                s = "dataLayer";
            t.sendGTMEvent = (e, t) => {
                let n = t || s;
                window[n] = window[n] || [], window[n].push(e)
            }
        },
        7835: function(e) {
            "use strict";
            e.exports = function(e) {
                if (e.length >= 255) throw TypeError("Alphabet too long");
                for (var t = new Uint8Array(256), n = 0; n < t.length; n++) t[n] = 255;
                for (var i = 0; i < e.length; i++) {
                    var r = e.charAt(i),
                        a = r.charCodeAt(0);
                    if (255 !== t[a]) throw TypeError(r + " is ambiguous");
                    t[a] = i
                }
                var o = e.length,
                    s = e.charAt(0),
                    c = Math.log(o) / Math.log(256),
                    l = Math.log(256) / Math.log(o);

                function u(e) {
                    if ("string" != typeof e) throw TypeError("Expected String");
                    if (0 === e.length) return new Uint8Array;
                    for (var n = 0, i = 0, r = 0; e[n] === s;) i++, n++;
                    for (var a = (e.length - n) * c + 1 >>> 0, l = new Uint8Array(a); e[n];) {
                        var u = t[e.charCodeAt(n)];
                        if (255 === u) return;
                        for (var d = 0, h = a - 1;
                            (0 !== u || d < r) && -1 !== h; h--, d++) u += o * l[h] >>> 0, l[h] = u % 256 >>> 0, u = u / 256 >>> 0;
                        if (0 !== u) throw Error("Non-zero carry");
                        r = d, n++
                    }
                    for (var f = a - r; f !== a && 0 === l[f];) f++;
                    for (var p = new Uint8Array(i + (a - f)), m = i; f !== a;) p[m++] = l[f++];
                    return p
                }
                return {
                    encode: function(t) {
                        if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === t.length) return "";
                        for (var n = 0, i = 0, r = 0, a = t.length; r !== a && 0 === t[r];) r++, n++;
                        for (var c = (a - r) * l + 1 >>> 0, u = new Uint8Array(c); r !== a;) {
                            for (var d = t[r], h = 0, f = c - 1;
                                (0 !== d || h < i) && -1 !== f; f--, h++) d += 256 * u[f] >>> 0, u[f] = d % o >>> 0, d = d / o >>> 0;
                            if (0 !== d) throw Error("Non-zero carry");
                            i = h, r++
                        }
                        for (var p = c - i; p !== c && 0 === u[p];) p++;
                        for (var m = s.repeat(n); p < c; ++p) m += e.charAt(u[p]);
                        return m
                    },
                    decodeUnsafe: u,
                    decode: function(e) {
                        var t = u(e);
                        if (t) return t;
                        throw Error("Non-base" + o + " character")
                    }
                }
            }
        },
        80749: function(e, t, n) {
            let i = n(7835);
            e.exports = i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        },
        98703: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = "~";

            function i() {}

            function r(e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1
            }

            function a(e, t, i, a, o) {
                if ("function" != typeof i) throw TypeError("The listener must be a function");
                var s = new r(i, a || e, o),
                    c = n ? n + t : t;
                return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e
            }

            function o(e, t) {
                0 == --e._eventsCount ? e._events = new i : delete e._events[t]
            }

            function s() {
                this._events = new i, this._eventsCount = 0
            }
            Object.create && (i.prototype = Object.create(null), new i().__proto__ || (n = !1)), s.prototype.eventNames = function() {
                var e, i, r = [];
                if (0 === this._eventsCount) return r;
                for (i in e = this._events) t.call(e, i) && r.push(n ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
            }, s.prototype.listeners = function(e) {
                var t = n ? n + e : e,
                    i = this._events[t];
                if (!i) return [];
                if (i.fn) return [i.fn];
                for (var r = 0, a = i.length, o = Array(a); r < a; r++) o[r] = i[r].fn;
                return o
            }, s.prototype.listenerCount = function(e) {
                var t = n ? n + e : e,
                    i = this._events[t];
                return i ? i.fn ? 1 : i.length : 0
            }, s.prototype.emit = function(e, t, i, r, a, o) {
                var s = n ? n + e : e;
                if (!this._events[s]) return !1;
                var c, l, u = this._events[s],
                    d = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(e, u.fn, void 0, !0), d) {
                        case 1:
                            return u.fn.call(u.context), !0;
                        case 2:
                            return u.fn.call(u.context, t), !0;
                        case 3:
                            return u.fn.call(u.context, t, i), !0;
                        case 4:
                            return u.fn.call(u.context, t, i, r), !0;
                        case 5:
                            return u.fn.call(u.context, t, i, r, a), !0;
                        case 6:
                            return u.fn.call(u.context, t, i, r, a, o), !0
                    }
                    for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
                    u.fn.apply(u.context, c)
                } else {
                    var h, f = u.length;
                    for (l = 0; l < f; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d) {
                        case 1:
                            u[l].fn.call(u[l].context);
                            break;
                        case 2:
                            u[l].fn.call(u[l].context, t);
                            break;
                        case 3:
                            u[l].fn.call(u[l].context, t, i);
                            break;
                        case 4:
                            u[l].fn.call(u[l].context, t, i, r);
                            break;
                        default:
                            if (!c)
                                for (h = 1, c = Array(d - 1); h < d; h++) c[h - 1] = arguments[h];
                            u[l].fn.apply(u[l].context, c)
                    }
                }
                return !0
            }, s.prototype.on = function(e, t, n) {
                return a(this, e, t, n, !1)
            }, s.prototype.once = function(e, t, n) {
                return a(this, e, t, n, !0)
            }, s.prototype.removeListener = function(e, t, i, r) {
                var a = n ? n + e : e;
                if (!this._events[a]) return this;
                if (!t) return o(this, a), this;
                var s = this._events[a];
                if (s.fn) s.fn !== t || r && !s.once || i && s.context !== i || o(this, a);
                else {
                    for (var c = 0, l = [], u = s.length; c < u; c++)(s[c].fn !== t || r && !s[c].once || i && s[c].context !== i) && l.push(s[c]);
                    l.length ? this._events[a] = 1 === l.length ? l[0] : l : o(this, a)
                }
                return this
            }, s.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = n ? n + e : e, this._events[t] && o(this, t)) : (this._events = new i, this._eventsCount = 0), this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, e.exports = s
        },
        27097: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return r.a
                }
            });
            var i = n(18466),
                r = n.n(i)
        },
        45610: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r.a
                }
            });
            var i = n(96656),
                r = n.n(i),
                a = {};
            for (var o in i) "default" !== o && (a[o] = (function(e) {
                return i[e]
            }).bind(0, o));
            n.d(t, a)
        },
        44369: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "$", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let i = n(15764);

            function r(e) {
                let {
                    createServerReference: t
                } = n(47647);
                return t(e, i.callServer)
            }
        },
        94996: function(e, t) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    DOMAttributeNames: function() {
                        return i
                    },
                    default: function() {
                        return o
                    },
                    isEqualNode: function() {
                        return a
                    }
                });
            let i = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function r(e) {
                let {
                    type: t,
                    props: n
                } = e, r = document.createElement(t);
                for (let e in n) {
                    if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e]) continue;
                    let a = i[e] || e.toLowerCase();
                    "script" === t && ("async" === a || "defer" === a || "noModule" === a) ? r[a] = !!n[e] : r.setAttribute(a, n[e])
                }
                let {
                    children: a,
                    dangerouslySetInnerHTML: o
                } = n;
                return o ? r.innerHTML = o.__html || "" : a && (r.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""), r
            }

            function a(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let n = t.getAttribute("nonce");
                    if (n && !e.getAttribute("nonce")) {
                        let i = t.cloneNode(!0);
                        return i.setAttribute("nonce", ""), i.nonce = n, n === e.nonce && e.isEqualNode(i)
                    }
                }
                return e.isEqualNode(t)
            }

            function o() {
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        let t = {};
                        e.forEach(e => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
                            }
                            let n = t[e.type] || [];
                            n.push(e), t[e.type] = n
                        });
                        let i = t.title ? t.title[0] : null,
                            r = "";
                        if (i) {
                            let {
                                children: e
                            } = i.props;
                            r = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                        }
                        r !== document.title && (document.title = r), ["meta", "base", "link", "style", "script"].forEach(e => {
                            n(e, t[e] || [])
                        })
                    }
                }
            }
            n = (e, t) => {
                let n = document.getElementsByTagName("head")[0],
                    i = n.querySelector("meta[name=next-head-count]"),
                    o = Number(i.content),
                    s = [];
                for (let t = 0, n = i.previousElementSibling; t < o; t++, n = (null == n ? void 0 : n.previousElementSibling) || null) {
                    var c;
                    (null == n ? void 0 : null == (c = n.tagName) ? void 0 : c.toLowerCase()) === e && s.push(n)
                }
                let l = t.map(r).filter(e => {
                    for (let t = 0, n = s.length; t < n; t++)
                        if (a(s[t], e)) return s.splice(t, 1), !1;
                    return !0
                });
                s.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }), l.forEach(e => n.insertBefore(e, i)), i.content = (o - s.length + l.length).toString()
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        14030: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    cancelIdleCallback: function() {
                        return i
                    },
                    requestIdleCallback: function() {
                        return n
                    }
                });
            let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                i = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        96656: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return M
                    },
                    handleClientScriptLoad: function() {
                        return w
                    },
                    initScriptLoader: function() {
                        return y
                    }
                });
            let i = n(47850),
                r = n(76222),
                a = n(3404),
                o = i._(n(58741)),
                s = r._(n(11390)),
                c = n(81442),
                l = n(94996),
                u = n(14030),
                d = new Map,
                h = new Set,
                f = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                p = e => {
                    if (o.default.preinit) {
                        e.forEach(e => {
                            o.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    }
                    if ("undefined" != typeof window) {
                        let t = document.head;
                        e.forEach(e => {
                            let n = document.createElement("link");
                            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                        })
                    }
                },
                m = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: i = () => {},
                        onReady: r = null,
                        dangerouslySetInnerHTML: a,
                        children: o = "",
                        strategy: s = "afterInteractive",
                        onError: c,
                        stylesheets: u
                    } = e, m = n || t;
                    if (m && h.has(m)) return;
                    if (d.has(t)) {
                        h.add(m), d.get(t).then(i, c);
                        return
                    }
                    let w = () => {
                            r && r(), h.add(m)
                        },
                        y = document.createElement("script"),
                        g = new Promise((e, t) => {
                            y.addEventListener("load", function(t) {
                                e(), i && i.call(this, t), w()
                            }), y.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            c && c(e)
                        });
                    for (let [n, i] of (a ? (y.innerHTML = a.__html || "", w()) : o ? (y.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "", w()) : t && (y.src = t, d.set(t, g)), Object.entries(e))) {
                        if (void 0 === i || f.includes(n)) continue;
                        let e = l.DOMAttributeNames[n] || n.toLowerCase();
                        y.setAttribute(e, i)
                    }
                    "worker" === s && y.setAttribute("type", "text/partytown"), y.setAttribute("data-nscript", s), u && p(u), document.body.appendChild(y)
                };

            function w(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, u.requestIdleCallback)(() => m(e))
                }) : m(e)
            }

            function y(e) {
                e.forEach(w), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    h.add(t)
                })
            }

            function g(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: i = () => {},
                    onReady: r = null,
                    strategy: l = "afterInteractive",
                    onError: d,
                    stylesheets: f,
                    ...p
                } = e, {
                    updateScripts: w,
                    scripts: y,
                    getIsSsr: g,
                    appDir: M,
                    nonce: N
                } = (0, s.useContext)(c.HeadManagerContext), b = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    let e = t || n;
                    b.current || (r && e && h.has(e) && r(), b.current = !0)
                }, [r, t, n]);
                let v = (0, s.useRef)(!1);
                if ((0, s.useEffect)(() => {
                        !v.current && ("afterInteractive" === l ? m(e) : "lazyOnload" === l && ("complete" === document.readyState ? (0, u.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                            (0, u.requestIdleCallback)(() => m(e))
                        })), v.current = !0)
                    }, [e, l]), ("beforeInteractive" === l || "worker" === l) && (w ? (y[l] = (y[l] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: i,
                        onReady: r,
                        onError: d,
                        ...p
                    }]), w(y)) : g && g() ? h.add(t || n) : g && !g() && m(e)), M) {
                    if (f && f.forEach(e => {
                            o.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === l) return n ? (o.default.preload(n, p.integrity ? {
                        as: "script",
                        integrity: p.integrity,
                        nonce: N,
                        crossOrigin: p.crossOrigin
                    } : {
                        as: "script",
                        nonce: N,
                        crossOrigin: p.crossOrigin
                    }), (0, a.jsx)("script", {
                        nonce: N,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, { ...p,
                                id: t
                            }]) + ")"
                        }
                    })) : (p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html, delete p.dangerouslySetInnerHTML), (0, a.jsx)("script", {
                        nonce: N,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...p,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === l && n && o.default.preload(n, p.integrity ? {
                        as: "script",
                        integrity: p.integrity,
                        nonce: N,
                        crossOrigin: p.crossOrigin
                    } : {
                        as: "script",
                        nonce: N,
                        crossOrigin: p.crossOrigin
                    })
                }
                return null
            }
            Object.defineProperty(g, "__nextScript", {
                value: !0
            });
            let M = g;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        18466: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return c
                    },
                    getImageProps: function() {
                        return s
                    }
                });
            let i = n(47850),
                r = n(42933),
                a = n(36805),
                o = i._(n(65042));

            function s(e) {
                let {
                    props: t
                } = (0, r.getImgProps)(e, {
                    defaultLoader: o.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0
                    }
                });
                for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
                return {
                    props: t
                }
            }
            let c = a.Image
        },
        53528: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let i = n(47850)._(n(11390)).default.createContext(null)
        },
        88660: function(e, t, n) {
            "use strict";
            var i = Object.create,
                r = Object.defineProperty,
                a = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                s = Object.getPrototypeOf,
                c = Object.prototype.hasOwnProperty,
                l = (e, t) => r(e, "name", {
                    value: t,
                    configurable: !0
                }),
                u = (e, t, n, i) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let s of o(t)) c.call(e, s) || s === n || r(e, s, {
                            get: () => t[s],
                            enumerable: !(i = a(t, s)) || i.enumerable
                        });
                    return e
                },
                d = (e, t, n) => (n = null != e ? i(s(e)) : {}, u(!t && e && e.__esModule ? n : r(n, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                h = {};
            ((e, t) => {
                for (var n in t) r(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(h, {
                default: () => y
            }), e.exports = u(r({}, "__esModule", {
                value: !0
            }), h);
            var f = d(n(73946)),
                p = d(n(11390)),
                m = d(n(63798)),
                w = l(e => {
                    let {
                        color: t,
                        height: n,
                        showSpinner: i,
                        crawl: r,
                        crawlSpeed: a,
                        initialPosition: o,
                        easing: s,
                        speed: c,
                        shadow: u,
                        template: d,
                        zIndex: h = 1600,
                        showAtBottom: f = !1
                    } = e, w = null != t ? t : "#29d", y = u || void 0 === u ? u ? "box-shadow:".concat(u) : "box-shadow:0 0 10px ".concat(w, ",0 0 5px ").concat(w) : "", g = p.createElement("style", null, "#nprogress{pointer-events:none}#nprogress .bar{background:".concat(w, ";position:fixed;z-index:").concat(h, ";").concat(f ? "bottom: 0;" : "top: 0;", "left:0;width:100%;height:").concat(null != n ? n : 3, "px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;").concat(y, ";opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:").concat(h, ";").concat(f ? "bottom: 15px;" : "top: 15px;", "right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:").concat(w, ";border-left-color:").concat(w, ";border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")), M = l(e => new URL(e, window.location.href).href, "toAbsoluteURL"), N = l((e, t) => {
                        let n = new URL(M(e)),
                            i = new URL(M(t));
                        return n.href.split("#")[0] === i.href.split("#")[0]
                    }, "isHashAnchor"), b = l((e, t) => {
                        let n = new URL(M(e)),
                            i = new URL(M(t));
                        return n.hostname.replace(/^www\./, "") === i.hostname.replace(/^www\./, "")
                    }, "isSameHostName");
                    return p.useEffect(() => {
                        let e, t;

                        function n(e, t) {
                            let n = new URL(e),
                                i = new URL(t);
                            if (n.hostname === i.hostname && n.pathname === i.pathname && n.search === i.search) {
                                let e = n.hash,
                                    t = i.hash;
                                return e !== t && n.href.replace(e, "") === i.href.replace(t, "")
                            }
                            return !1
                        }
                        m.configure({
                            showSpinner: null == i || i,
                            trickle: null == r || r,
                            trickleSpeed: null != a ? a : 200,
                            minimum: null != o ? o : .08,
                            easing: null != s ? s : "ease",
                            speed: null != c ? c : 200,
                            template: null != d ? d : '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                        }), l(n, "isAnchorOfCurrentUrl");
                        var u, h, f = document.querySelectorAll("html");
                        let p = l(() => f.forEach(e => e.classList.remove("nprogress-busy")), "removeNProgressClass");

                        function w(e) {
                            for (; e && "a" !== e.tagName.toLowerCase();) e = e.parentElement;
                            return e
                        }

                        function y(e) {
                            try {
                                let t = e.target,
                                    i = w(t),
                                    r = null == i ? void 0 : i.href;
                                if (r) {
                                    let t = window.location.href,
                                        a = "_blank" === i.target,
                                        o = ["tel:", "mailto:", "sms:", "blob:", "download:"].some(e => r.startsWith(e)),
                                        s = n(t, r);
                                    if (!b(window.location.href, i.href)) return;
                                    r === t || s || a || o || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || N(window.location.href, i.href) || !M(i.href).startsWith("http") ? (m.start(), m.done(), p()) : m.start()
                                }
                            } catch (e) {
                                m.start(), m.done()
                            }
                        }

                        function g() {
                            m.done(), p()
                        }

                        function v() {
                            m.done()
                        }
                        return l(w, "findClosestAnchor"), l(y, "handleClick"), e = (u = window.history).pushState, u.pushState = function() {
                            for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                            return m.done(), p(), e.apply(u, n)
                        }, t = (h = window.history).replaceState, h.replaceState = function() {
                            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                            return m.done(), p(), t.apply(h, n)
                        }, l(g, "handlePageHide"), l(v, "handleBackAndForth"), window.addEventListener("popstate", v), document.addEventListener("click", y), window.addEventListener("pagehide", g), () => {
                            document.removeEventListener("click", y), window.removeEventListener("pagehide", g), window.removeEventListener("popstate", v)
                        }
                    }, []), g
                }, "NextTopLoader"),
                y = w;
            w.propTypes = {
                color: f.string,
                height: f.number,
                showSpinner: f.bool,
                crawl: f.bool,
                crawlSpeed: f.number,
                initialPosition: f.number,
                easing: f.string,
                speed: f.number,
                template: f.string,
                shadow: f.oneOfType([f.string, f.bool]),
                zIndex: f.number,
                showAtBottom: f.bool
            }
        },
        63798: function(e, t, n) {
            var i, r;
            void 0 !== (r = "function" == typeof(i = function() {
                var e, t, n, i = {};
                i.version = "0.2.0";
                var r = i.settings = {
                    minimum: .08,
                    easing: "ease",
                    positionUsing: "",
                    speed: 200,
                    trickle: !0,
                    trickleRate: .02,
                    trickleSpeed: 800,
                    showSpinner: !0,
                    barSelector: '[role="bar"]',
                    spinnerSelector: '[role="spinner"]',
                    parent: "body",
                    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                };

                function a(e, t, n) {
                    return e < t ? t : e > n ? n : e
                }
                i.configure = function(e) {
                    var t, n;
                    for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
                    return this
                }, i.status = null, i.set = function(e) {
                    var t = i.isStarted();
                    e = a(e, r.minimum, 1), i.status = 1 === e ? null : e;
                    var n = i.render(!t),
                        c = n.querySelector(r.barSelector),
                        l = r.speed,
                        u = r.easing;
                    return n.offsetWidth, o(function(t) {
                        var a, o;
                        "" === r.positionUsing && (r.positionUsing = i.getPositioningCSS()), s(c, (a = e, (o = "translate3d" === r.positionUsing ? {
                            transform: "translate3d(" + (-1 + a) * 100 + "%,0,0)"
                        } : "translate" === r.positionUsing ? {
                            transform: "translate(" + (-1 + a) * 100 + "%,0)"
                        } : {
                            "margin-left": (-1 + a) * 100 + "%"
                        }).transition = "all " + l + "ms " + u, o)), 1 === e ? (s(n, {
                            transition: "none",
                            opacity: 1
                        }), n.offsetWidth, setTimeout(function() {
                            s(n, {
                                transition: "all " + l + "ms linear",
                                opacity: 0
                            }), setTimeout(function() {
                                i.remove(), t()
                            }, l)
                        }, l)) : setTimeout(t, l)
                    }), this
                }, i.isStarted = function() {
                    return "number" == typeof i.status
                }, i.start = function() {
                    i.status || i.set(0);
                    var e = function() {
                        setTimeout(function() {
                            i.status && (i.trickle(), e())
                        }, r.trickleSpeed)
                    };
                    return r.trickle && e(), this
                }, i.done = function(e) {
                    return e || i.status ? i.inc(.3 + .5 * Math.random()).set(1) : this
                }, i.inc = function(e) {
                    var t = i.status;
                    return t ? ("number" != typeof e && (e = (1 - t) * a(Math.random() * t, .1, .95)), t = a(t + e, 0, .994), i.set(t)) : i.start()
                }, i.trickle = function() {
                    return i.inc(Math.random() * r.trickleRate)
                }, e = 0, t = 0, i.promise = function(n) {
                    return n && "resolved" !== n.state() && (0 === t && i.start(), e++, t++, n.always(function() {
                        0 == --t ? (e = 0, i.done()) : i.set((e - t) / e)
                    })), this
                }, i.render = function(e) {
                    if (i.isRendered()) return document.getElementById("nprogress");
                    l(document.documentElement, "nprogress-busy");
                    var t = document.createElement("div");
                    t.id = "nprogress", t.innerHTML = r.template;
                    var n, a = t.querySelector(r.barSelector),
                        o = e ? "-100" : (-1 + (i.status || 0)) * 100,
                        c = document.querySelector(r.parent);
                    return s(a, {
                        transition: "all 0 linear",
                        transform: "translate3d(" + o + "%,0,0)"
                    }), !r.showSpinner && (n = t.querySelector(r.spinnerSelector)) && h(n), c != document.body && l(c, "nprogress-custom-parent"), c.appendChild(t), t
                }, i.remove = function() {
                    u(document.documentElement, "nprogress-busy"), u(document.querySelector(r.parent), "nprogress-custom-parent");
                    var e = document.getElementById("nprogress");
                    e && h(e)
                }, i.isRendered = function() {
                    return !!document.getElementById("nprogress")
                }, i.getPositioningCSS = function() {
                    var e = document.body.style,
                        t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
                    return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
                };
                var o = (n = [], function(e) {
                        n.push(e), 1 == n.length && function e() {
                            var t = n.shift();
                            t && t(e)
                        }()
                    }),
                    s = function() {
                        var e = ["Webkit", "O", "Moz", "ms"],
                            t = {};

                        function n(n, i, r) {
                            var a;
                            i = t[a = (a = i).replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                                return t.toUpperCase()
                            })] || (t[a] = function(t) {
                                var n = document.body.style;
                                if (t in n) return t;
                                for (var i, r = e.length, a = t.charAt(0).toUpperCase() + t.slice(1); r--;)
                                    if ((i = e[r] + a) in n) return i;
                                return t
                            }(a)), n.style[i] = r
                        }
                        return function(e, t) {
                            var i, r, a = arguments;
                            if (2 == a.length)
                                for (i in t) void 0 !== (r = t[i]) && t.hasOwnProperty(i) && n(e, i, r);
                            else n(e, a[1], a[2])
                        }
                    }();

                function c(e, t) {
                    return ("string" == typeof e ? e : d(e)).indexOf(" " + t + " ") >= 0
                }

                function l(e, t) {
                    var n = d(e),
                        i = n + t;
                    c(n, t) || (e.className = i.substring(1))
                }

                function u(e, t) {
                    var n, i = d(e);
                    c(e, t) && (n = i.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
                }

                function d(e) {
                    return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
                }

                function h(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }
                return i
            }) ? i.call(t, n, t, e) : i) && (e.exports = r)
        },
        26453: function(e, t, n) {
            "use strict";
            var i = n(39497);

            function r() {}

            function a() {}
            a.resetWarningCache = r, e.exports = function() {
                function e(e, t, n, r, a, o) {
                    if (o !== i) {
                        var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: r
                };
                return n.PropTypes = n, n
            }
        },
        73946: function(e, t, n) {
            e.exports = n(26453)()
        },
        39497: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        60304: function(e) {
            var t = "undefined" != typeof Element,
                n = "function" == typeof Map,
                i = "function" == typeof Set,
                r = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            e.exports = function(e, a) {
                try {
                    return function e(a, o) {
                        if (a === o) return !0;
                        if (a && o && "object" == typeof a && "object" == typeof o) {
                            var s, c, l, u;
                            if (a.constructor !== o.constructor) return !1;
                            if (Array.isArray(a)) {
                                if ((s = a.length) != o.length) return !1;
                                for (c = s; 0 != c--;)
                                    if (!e(a[c], o[c])) return !1;
                                return !0
                            }
                            if (n && a instanceof Map && o instanceof Map) {
                                if (a.size !== o.size) return !1;
                                for (u = a.entries(); !(c = u.next()).done;)
                                    if (!o.has(c.value[0])) return !1;
                                for (u = a.entries(); !(c = u.next()).done;)
                                    if (!e(c.value[1], o.get(c.value[0]))) return !1;
                                return !0
                            }
                            if (i && a instanceof Set && o instanceof Set) {
                                if (a.size !== o.size) return !1;
                                for (u = a.entries(); !(c = u.next()).done;)
                                    if (!o.has(c.value[0])) return !1;
                                return !0
                            }
                            if (r && ArrayBuffer.isView(a) && ArrayBuffer.isView(o)) {
                                if ((s = a.length) != o.length) return !1;
                                for (c = s; 0 != c--;)
                                    if (a[c] !== o[c]) return !1;
                                return !0
                            }
                            if (a.constructor === RegExp) return a.source === o.source && a.flags === o.flags;
                            if (a.valueOf !== Object.prototype.valueOf && "function" == typeof a.valueOf && "function" == typeof o.valueOf) return a.valueOf() === o.valueOf();
                            if (a.toString !== Object.prototype.toString && "function" == typeof a.toString && "function" == typeof o.toString) return a.toString() === o.toString();
                            if ((s = (l = Object.keys(a)).length) !== Object.keys(o).length) return !1;
                            for (c = s; 0 != c--;)
                                if (!Object.prototype.hasOwnProperty.call(o, l[c])) return !1;
                            if (t && a instanceof Element) return !1;
                            for (c = s; 0 != c--;)
                                if (("_owner" !== l[c] && "__v" !== l[c] && "__o" !== l[c] || !a.$$typeof) && !e(a[l[c]], o[l[c]])) return !1;
                            return !0
                        }
                        return a != a && o != o
                    }(e, a)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        },
        34078: function(e, t, n) {
            var i;
            ! function(r, a) {
                "use strict";
                var o = "function",
                    s = "undefined",
                    c = "object",
                    l = "string",
                    u = "major",
                    d = "model",
                    h = "name",
                    f = "type",
                    p = "vendor",
                    m = "version",
                    w = "architecture",
                    y = "console",
                    g = "mobile",
                    M = "tablet",
                    N = "smarttv",
                    b = "wearable",
                    v = "embedded",
                    T = "Amazon",
                    I = "Apple",
                    S = "ASUS",
                    j = "BlackBerry",
                    U = "Browser",
                    E = "Chrome",
                    x = "Firefox",
                    D = "Google",
                    L = "Huawei",
                    O = "Microsoft",
                    A = "Motorola",
                    R = "Opera",
                    z = "Samsung",
                    C = "Sharp",
                    k = "Sony",
                    F = "Xiaomi",
                    V = "Zebra",
                    Q = "Facebook",
                    W = "Chromium OS",
                    Z = "Mac OS",
                    B = " Browser",
                    _ = function(e, t) {
                        var n = {};
                        for (var i in e) t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                        return n
                    },
                    P = function(e) {
                        for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                        return t
                    },
                    Y = function(e, t) {
                        return typeof e === l && -1 !== G(t).indexOf(G(e))
                    },
                    G = function(e) {
                        return e.toLowerCase()
                    },
                    H = function(e, t) {
                        if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
                    },
                    J = function(e, t) {
                        for (var n, i, r, s, l, u, d = 0; d < t.length && !l;) {
                            var h = t[d],
                                f = t[d + 1];
                            for (n = i = 0; n < h.length && !l && h[n];)
                                if (l = h[n++].exec(e))
                                    for (r = 0; r < f.length; r++) u = l[++i], typeof(s = f[r]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == o ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== o || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : void 0 : this[s[0]] = u ? s[1].call(this, u, s[2]) : void 0 : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : void 0) : this[s] = u || a;
                            d += 2
                        }
                    },
                    X = function(e, t) {
                        for (var n in t)
                            if (typeof t[n] === c && t[n].length > 0) {
                                for (var i = 0; i < t[n].length; i++)
                                    if (Y(t[n][i], e)) return "?" === n ? a : n
                            } else if (Y(t[n], e)) return "?" === n ? a : n;
                        return t.hasOwnProperty("*") ? t["*"] : e
                    },
                    K = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        "8.1": "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    q = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [m, [h, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [m, [h, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [h, m],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [m, [h, R + " Mini"]],
                            [/\bop(?:rg)?x\/([\w\.]+)/i],
                            [m, [h, R + " GX"]],
                            [/\bopr\/([\w\.]+)/i],
                            [m, [h, R]],
                            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                            [m, [h, "Baidu"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [h, m],
                            [/quark(?:pc)?\/([-\w\.]+)/i],
                            [m, [h, "Quark"]],
                            [/\bddg\/([\w\.]+)/i],
                            [m, [h, "DuckDuckGo"]],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [m, [h, "UC" + U]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                            [m, [h, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [m, [h, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [m, [h, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [m, [h, "Yandex"]],
                            [/slbrowser\/([\w\.]+)/i],
                            [m, [h, "Smart Lenovo " + U]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [h, /(.+)/, "$1 Secure " + U], m
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [m, [h, x + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [m, [h, R + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [m, [h, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [m, [h, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [m, [h, R + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [m, [h, "MIUI " + U]],
                            [/fxios\/([-\w\.]+)/i],
                            [m, [h, x]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [h, "360" + B]
                            ],
                            [/\b(qq)\/([\w\.]+)/i],
                            [
                                [h, /(.+)/, "$1Browser"], m
                            ],
                            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                            [
                                [h, /(.+)/, "$1" + B], m
                            ],
                            [/samsungbrowser\/([\w\.]+)/i],
                            [m, [h, z + " Internet"]],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [h, /_/g, " "], m
                            ],
                            [/metasr[\/ ]?([\d\.]+)/i],
                            [m, [h, "Sogou Explorer"]],
                            [/(sogou)mo\w+\/([\d\.]+)/i],
                            [
                                [h, "Sogou Mobile"], m
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [h, m],
                            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                            [h],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [h, Q], m
                            ],
                            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                            [h, m],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [m, [h, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [m, [h, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [m, [h, E + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [h, E + " WebView"], m
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [m, [h, "Android " + U]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [h, m],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [m, [h, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [m, h],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [h, [m, X, {
                                "1.0": "/8",
                                "1.2": "/1",
                                "1.3": "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [h, m],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [h, "Netscape"], m
                            ],
                            [/(wolvic)\/([\w\.]+)/i],
                            [h, m],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [m, [h, x + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                            [h, [m, /_/g, "."]],
                            [/(cobalt)\/([\w\.]+)/i],
                            [h, [m, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [w, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [w, G]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [w, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [w, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [w, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [w, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [w, /ower/, "", G]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [w, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [w, G]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [d, [p, z],
                                [f, M]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
                            [d, [p, z],
                                [f, g]
                            ],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [d, [p, I],
                                [f, g]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [d, [p, I],
                                [f, M]
                            ],
                            [/(macintosh);/i],
                            [d, [p, I]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [d, [p, C],
                                [f, g]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [d, [p, L],
                                [f, M]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [d, [p, L],
                                [f, g]
                            ],
                            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [p, F],
                                [f, g]
                            ],
                            [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [p, F],
                                [f, M]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [d, [p, "OPPO"],
                                [f, g]
                            ],
                            [/\b(opd2\d{3}a?) bui/i],
                            [d, [p, "OPPO"],
                                [f, M]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [d, [p, "Vivo"],
                                [f, g]
                            ],
                            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                            [d, [p, "Realme"],
                                [f, g]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [d, [p, A],
                                [f, g]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [d, [p, A],
                                [f, M]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [d, [p, "LG"],
                                [f, M]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [d, [p, "LG"],
                                [f, g]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [d, [p, "Lenovo"],
                                [f, M]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [d, /_/g, " "],
                                [p, "Nokia"],
                                [f, g]
                            ],
                            [/(pixel c)\b/i],
                            [d, [p, D],
                                [f, M]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [d, [p, D],
                                [f, g]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [d, [p, k],
                                [f, g]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [d, "Xperia Tablet"],
                                [p, k],
                                [f, M]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [d, [p, "OnePlus"],
                                [f, g]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [d, [p, T],
                                [f, M]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [d, /(.+)/g, "Fire Phone $1"],
                                [p, T],
                                [f, g]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [d, p, [f, M]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [d, [p, j],
                                [f, g]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [d, [p, S],
                                [f, M]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [d, [p, S],
                                [f, g]
                            ],
                            [/(nexus 9)/i],
                            [d, [p, "HTC"],
                                [f, M]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [p, [d, /_/g, " "],
                                [f, g]
                            ],
                            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
                            [d, [p, "TCL"],
                                [f, M]
                            ],
                            [/(itel) ((\w+))/i],
                            [
                                [p, G], d, [f, X, {
                                    tablet: ["p10001l", "w7001"],
                                    "*": "mobile"
                                }]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [d, [p, "Acer"],
                                [f, M]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [d, [p, "Meizu"],
                                [f, g]
                            ],
                            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                            [d, [p, "Ulefone"],
                                [f, g]
                            ],
                            [/droid.+; (a(?:015|06[35]|142p?))/i],
                            [d, [p, "Nothing"],
                                [f, g]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [p, d, [f, g]],
                            [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [p, d, [f, M]],
                            [/(surface duo)/i],
                            [d, [p, O],
                                [f, M]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [d, [p, "Fairphone"],
                                [f, g]
                            ],
                            [/(u304aa)/i],
                            [d, [p, "AT&T"],
                                [f, g]
                            ],
                            [/\bsie-(\w*)/i],
                            [d, [p, "Siemens"],
                                [f, g]
                            ],
                            [/\b(rct\w+) b/i],
                            [d, [p, "RCA"],
                                [f, M]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [d, [p, "Dell"],
                                [f, M]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [d, [p, "Verizon"],
                                [f, M]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [d, [p, "Barnes & Noble"],
                                [f, M]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [d, [p, "NuVision"],
                                [f, M]
                            ],
                            [/\b(k88) b/i],
                            [d, [p, "ZTE"],
                                [f, M]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [d, [p, "ZTE"],
                                [f, g]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [d, [p, "Swiss"],
                                [f, g]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [d, [p, "Swiss"],
                                [f, M]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [d, [p, "Zeki"],
                                [f, M]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [p, "Dragon Touch"], d, [f, M]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [d, [p, "Insignia"],
                                [f, M]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [d, [p, "NextBook"],
                                [f, M]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [p, "Voice"], d, [f, g]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [p, "LvTel"], d, [f, g]
                            ],
                            [/\b(ph-1) /i],
                            [d, [p, "Essential"],
                                [f, g]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [d, [p, "Envizen"],
                                [f, M]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [d, [p, "MachSpeed"],
                                [f, M]
                            ],
                            [/\btu_(1491) b/i],
                            [d, [p, "Rotor"],
                                [f, M]
                            ],
                            [/(shield[\w ]+) b/i],
                            [d, [p, "Nvidia"],
                                [f, M]
                            ],
                            [/(sprint) (\w+)/i],
                            [p, d, [f, g]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [d, /\./g, " "],
                                [p, O],
                                [f, g]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [d, [p, V],
                                [f, M]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [d, [p, V],
                                [f, g]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [p, [f, N]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [d, /^/, "SmartTV"],
                                [p, z],
                                [f, N]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [p, "LG"],
                                [f, N]
                            ],
                            [/(apple) ?tv/i],
                            [p, [d, I + " TV"],
                                [f, N]
                            ],
                            [/crkey/i],
                            [
                                [d, E + "cast"],
                                [p, D],
                                [f, N]
                            ],
                            [/droid.+aft(\w+)( bui|\))/i],
                            [d, [p, T],
                                [f, N]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [d, [p, C],
                                [f, N]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [d, [p, k],
                                [f, N]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [d, [p, F],
                                [f, N]
                            ],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [p, d, [f, N]],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                            [
                                [p, H],
                                [d, H],
                                [f, N]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [f, N]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [p, d, [f, y]],
                            [/droid.+; (shield) bui/i],
                            [d, [p, "Nvidia"],
                                [f, y]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [d, [p, k],
                                [f, y]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [d, [p, O],
                                [f, y]
                            ],
                            [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
                            [d, [p, z],
                                [f, b]
                            ],
                            [/((pebble))app/i],
                            [p, d, [f, b]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [d, [p, I],
                                [f, b]
                            ],
                            [/droid.+; (glass) \d/i],
                            [d, [p, D],
                                [f, b]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [d, [p, V],
                                [f, b]
                            ],
                            [/(quest( \d| pro)?)/i],
                            [d, [p, Q],
                                [f, b]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [p, [f, v]],
                            [/(aeobc)\b/i],
                            [d, [p, T],
                                [f, v]
                            ],
                            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                            [d, [f, g]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [d, [f, M]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [f, M]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [f, g]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [d, [p, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [m, [h, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [m, [h, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                            [h, m],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [m, h]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [h, m],
                            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                            [h, [m, X, K]],
                            [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [m, X, K],
                                [h, "Windows"]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                            [
                                [m, /_/g, "."],
                                [h, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [h, Z],
                                [m, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [m, h],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [h, m],
                            [/\(bb(10);/i],
                            [m, [h, j]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [m, [h, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [m, [h, x + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [m, [h, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [m, [h, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [m, [h, E + "cast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [
                                [h, W], m
                            ],
                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [h, m],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [h, "Solaris"], m
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                            [h, m]
                        ]
                    },
                    $ = function(e, t) {
                        if (typeof e === c && (t = e, e = a), !(this instanceof $)) return new $(e, t).getResult();
                        var n = typeof r !== s && r.navigator ? r.navigator : a,
                            i = e || (n && n.userAgent ? n.userAgent : ""),
                            y = n && n.userAgentData ? n.userAgentData : a,
                            N = t ? _(q, t) : q,
                            b = n && n.userAgent == i;
                        return this.getBrowser = function() {
                            var e, t = {};
                            return t[h] = a, t[m] = a, J.call(t, i, N.browser), t[u] = typeof(e = t[m]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : a, b && n && n.brave && typeof n.brave.isBrave == o && (t[h] = "Brave"), t
                        }, this.getCPU = function() {
                            var e = {};
                            return e[w] = a, J.call(e, i, N.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e[p] = a, e[d] = a, e[f] = a, J.call(e, i, N.device), b && !e[f] && y && y.mobile && (e[f] = g), b && "Macintosh" == e[d] && n && typeof n.standalone !== s && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[d] = "iPad", e[f] = M), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e[h] = a, e[m] = a, J.call(e, i, N.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e[h] = a, e[m] = a, J.call(e, i, N.os), b && !e[h] && y && y.platform && "Unknown" != y.platform && (e[h] = y.platform.replace(/chrome os/i, W).replace(/macos/i, Z)), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return i
                        }, this.setUA = function(e) {
                            return i = typeof e === l && e.length > 500 ? H(e, 500) : e, this
                        }, this.setUA(i), this
                    };
                $.VERSION = "1.0.39", $.BROWSER = P([h, m, u]), $.CPU = P([w]), $.DEVICE = P([d, p, f, y, g, N, M, b, v]), $.ENGINE = $.OS = P([h, m]), typeof t !== s ? (e.exports && (t = e.exports = $), t.UAParser = $) : n.amdO ? a !== (i = (function() {
                    return $
                }).call(t, n, t, e)) && (e.exports = i) : typeof r !== s && (r.UAParser = $);
                var ee = typeof r !== s && (r.jQuery || r.Zepto);
                if (ee && !ee.ua) {
                    var et = new $;
                    ee.ua = et.getResult(), ee.ua.get = function() {
                        return et.getUA()
                    }, ee.ua.set = function(e) {
                        et.setUA(e);
                        var t = et.getResult();
                        for (var n in t) ee.ua[n] = t[n]
                    }
                }
            }("object" == typeof window ? window : this)
        },
        31165: function() {},
        25487: function() {},
        92232: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Roboto_f911a0', '__Roboto_Fallback_f911a0', system-ui, arial",
                    fontStyle: "normal"
                },
                className: "__className_f911a0",
                variable: "__variable_f911a0"
            }
        },
        33336: function(e, t, n) {
            "use strict";

            function i(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(i) {
                    if (e ? .(i), !1 === n || !i.defaultPrevented) return t ? .(i)
                }
            }
            n.d(t, {
                M: function() {
                    return i
                }
            })
        },
        69918: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return c
                }
            });
            var i = n(11390),
                r = n(91880),
                a = n(87817),
                o = n(42400),
                s = n(3404);

            function c(e) {
                let t = e + "CollectionProvider",
                    [n, c] = (0, r.b)(t),
                    [l, u] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e => {
                        let {
                            scope: t,
                            children: n
                        } = e, r = i.useRef(null), a = i.useRef(new Map).current;
                        return (0, s.jsx)(l, {
                            scope: t,
                            itemMap: a,
                            collectionRef: r,
                            children: n
                        })
                    };
                d.displayName = t;
                let h = e + "CollectionSlot",
                    f = i.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: i
                        } = e, r = u(h, n), c = (0, a.e)(t, r.collectionRef);
                        return (0, s.jsx)(o.g7, {
                            ref: c,
                            children: i
                        })
                    });
                f.displayName = h;
                let p = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    w = i.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: r,
                            ...c
                        } = e, l = i.useRef(null), d = (0, a.e)(t, l), h = u(p, n);
                        return i.useEffect(() => (h.itemMap.set(l, {
                            ref: l,
                            ...c
                        }), () => void h.itemMap.delete(l))), (0, s.jsx)(o.g7, {
                            [m]: "",
                            ref: d,
                            children: r
                        })
                    });
                return w.displayName = p, [{
                    Provider: d,
                    Slot: f,
                    ItemSlot: w
                }, function(t) {
                    let n = u(e + "CollectionConsumer", t);
                    return i.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                        return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                    }, [n.collectionRef, n.itemMap])
                }, c]
            }
        },
        87817: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return r
                },
                e: function() {
                    return a
                }
            });
            var i = n(11390);

            function r(...e) {
                return t => e.forEach(e => {
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
            }

            function a(...e) {
                return i.useCallback(r(...e), e)
            }
        },
        91880: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return a
                }
            });
            var i = n(11390),
                r = n(3404);

            function a(e, t = []) {
                let n = [],
                    a = () => {
                        let t = n.map(e => i.createContext(e));
                        return function(n) {
                            let r = n ? .[e] || t;
                            return i.useMemo(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: r
                                }
                            }), [n, r])
                        }
                    };
                return a.scopeName = e, [function(t, a) {
                    let o = i.createContext(a),
                        s = n.length;

                    function c(t) {
                        let {
                            scope: n,
                            children: a,
                            ...c
                        } = t, l = n ? .[e][s] || o, u = i.useMemo(() => c, Object.values(c));
                        return (0, r.jsx)(l.Provider, {
                            value: u,
                            children: a
                        })
                    }
                    return n = [...n, a], c.displayName = t + "Provider", [c, function(n, r) {
                        let c = r ? .[e][s] || o,
                            l = i.useContext(c);
                        if (l) return l;
                        if (void 0 !== a) return a;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let r = n.reduce((t, {
                                useScope: n,
                                scopeName: i
                            }) => {
                                let r = n(e)[`__scope${i}`];
                                return { ...t,
                                    ...r
                                }
                            }, {});
                            return i.useMemo(() => ({
                                [`__scope${t.scopeName}`]: r
                            }), [r])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(a, ...t)]
            }
        },
        58577: function(e, t, n) {
            "use strict";
            n.d(t, {
                I0: function() {
                    return g
                },
                XB: function() {
                    return f
                },
                fC: function() {
                    return y
                }
            });
            var i, r = n(11390),
                a = n(33336),
                o = n(79087),
                s = n(87817),
                c = n(37619),
                l = n(19357),
                u = n(3404),
                d = "dismissableLayer.update",
                h = r.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                f = r.forwardRef((e, t) => {
                    var n, f;
                    let {
                        disableOutsidePointerEvents: p = !1,
                        onEscapeKeyDown: y,
                        onPointerDownOutside: g,
                        onFocusOutside: M,
                        onInteractOutside: N,
                        onDismiss: b,
                        ...v
                    } = e, T = r.useContext(h), [I, S] = r.useState(null), j = null !== (f = null == I ? void 0 : I.ownerDocument) && void 0 !== f ? f : null === (n = globalThis) || void 0 === n ? void 0 : n.document, [, U] = r.useState({}), E = (0, s.e)(t, e => S(e)), x = Array.from(T.layers), [D] = [...T.layersWithOutsidePointerEventsDisabled].slice(-1), L = x.indexOf(D), O = I ? x.indexOf(I) : -1, A = T.layersWithOutsidePointerEventsDisabled.size > 0, R = O >= L, z = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            i = (0, c.W)(e),
                            a = r.useRef(!1),
                            o = r.useRef(() => {});
                        return r.useEffect(() => {
                            let e = e => {
                                    if (e.target && !a.current) {
                                        let t = function() {
                                                w("dismissableLayer.pointerDownOutside", i, r, {
                                                    discrete: !0
                                                })
                                            },
                                            r = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", o.current), o.current = t, n.addEventListener("click", o.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", o.current);
                                    a.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", o.current)
                            }
                        }, [n, i]), {
                            onPointerDownCapture: () => a.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...T.branches].some(e => e.contains(t));
                        !R || n || (null == g || g(e), null == N || N(e), e.defaultPrevented || null == b || b())
                    }, j), C = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            i = (0, c.W)(e),
                            a = r.useRef(!1);
                        return r.useEffect(() => {
                            let e = e => {
                                e.target && !a.current && w("dismissableLayer.focusOutside", i, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, i]), {
                            onFocusCapture: () => a.current = !0,
                            onBlurCapture: () => a.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...T.branches].some(e => e.contains(t)) || (null == M || M(e), null == N || N(e), e.defaultPrevented || null == b || b())
                    }, j);
                    return (0, l.e)(e => {
                        O !== T.layers.size - 1 || (null == y || y(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
                    }, j), r.useEffect(() => {
                        if (I) return p && (0 === T.layersWithOutsidePointerEventsDisabled.size && (i = j.body.style.pointerEvents, j.body.style.pointerEvents = "none"), T.layersWithOutsidePointerEventsDisabled.add(I)), T.layers.add(I), m(), () => {
                            p && 1 === T.layersWithOutsidePointerEventsDisabled.size && (j.body.style.pointerEvents = i)
                        }
                    }, [I, j, p, T]), r.useEffect(() => () => {
                        I && (T.layers.delete(I), T.layersWithOutsidePointerEventsDisabled.delete(I), m())
                    }, [I, T]), r.useEffect(() => {
                        let e = () => U({});
                        return document.addEventListener(d, e), () => document.removeEventListener(d, e)
                    }, []), (0, u.jsx)(o.WV.div, { ...v,
                        ref: E,
                        style: {
                            pointerEvents: A ? R ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, a.M)(e.onFocusCapture, C.onFocusCapture),
                        onBlurCapture: (0, a.M)(e.onBlurCapture, C.onBlurCapture),
                        onPointerDownCapture: (0, a.M)(e.onPointerDownCapture, z.onPointerDownCapture)
                    })
                });
            f.displayName = "DismissableLayer";
            var p = r.forwardRef((e, t) => {
                let n = r.useContext(h),
                    i = r.useRef(null),
                    a = (0, s.e)(t, i);
                return r.useEffect(() => {
                    let e = i.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, u.jsx)(o.WV.div, { ...e,
                    ref: a
                })
            });

            function m() {
                let e = new CustomEvent(d);
                document.dispatchEvent(e)
            }

            function w(e, t, n, i) {
                let {
                    discrete: r
                } = i, a = n.originalEvent.target, s = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                t && a.addEventListener(e, t, {
                    once: !0
                }), r ? (0, o.jH)(a, s) : a.dispatchEvent(s)
            }
            p.displayName = "DismissableLayerBranch";
            var y = f,
                g = p
        },
        83541: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return c
                }
            });
            var i = n(11390),
                r = n(58741),
                a = n(79087),
                o = n(76104),
                s = n(3404),
                c = i.forwardRef((e, t) => {
                    var n, c;
                    let {
                        container: l,
                        ...u
                    } = e, [d, h] = i.useState(!1);
                    (0, o.b)(() => h(!0), []);
                    let f = l || d && (null === (c = globalThis) || void 0 === c ? void 0 : null === (n = c.document) || void 0 === n ? void 0 : n.body);
                    return f ? r.createPortal((0, s.jsx)(a.WV.div, { ...u,
                        ref: t
                    }), f) : null
                });
            c.displayName = "Portal"
        },
        79055: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return s
                }
            });
            var i = n(11390),
                r = n(58741),
                a = n(87817),
                o = n(76104),
                s = e => {
                    var t, n;
                    let s, l;
                    let {
                        present: u,
                        children: d
                    } = e, h = function(e) {
                        var t, n;
                        let [a, s] = i.useState(), l = i.useRef({}), u = i.useRef(e), d = i.useRef("none"), [h, f] = (t = e ? "mounted" : "unmounted", n = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, i.useReducer((e, t) => {
                            let i = n[e][t];
                            return null != i ? i : e
                        }, t));
                        return i.useEffect(() => {
                            let e = c(l.current);
                            d.current = "mounted" === h ? e : "none"
                        }, [h]), (0, o.b)(() => {
                            let t = l.current,
                                n = u.current;
                            if (n !== e) {
                                let i = d.current,
                                    r = c(t);
                                e ? f("MOUNT") : "none" === r || (null == t ? void 0 : t.display) === "none" ? f("UNMOUNT") : n && i !== r ? f("ANIMATION_OUT") : f("UNMOUNT"), u.current = e
                            }
                        }, [e, f]), (0, o.b)(() => {
                            if (a) {
                                let e = e => {
                                        let t = c(l.current).includes(e.animationName);
                                        e.target === a && t && r.flushSync(() => f("ANIMATION_END"))
                                    },
                                    t = e => {
                                        e.target === a && (d.current = c(l.current))
                                    };
                                return a.addEventListener("animationstart", t), a.addEventListener("animationcancel", e), a.addEventListener("animationend", e), () => {
                                    a.removeEventListener("animationstart", t), a.removeEventListener("animationcancel", e), a.removeEventListener("animationend", e)
                                }
                            }
                            f("ANIMATION_END")
                        }, [a, f]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(h),
                            ref: i.useCallback(e => {
                                e && (l.current = getComputedStyle(e)), s(e)
                            }, [])
                        }
                    }(u), f = "function" == typeof d ? d({
                        present: h.isPresent
                    }) : i.Children.only(d), p = (0, a.e)(h.ref, (s = null === (t = Object.getOwnPropertyDescriptor(f.props, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning" in s && s.isReactWarning ? f.ref : (s = null === (n = Object.getOwnPropertyDescriptor(f, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in s && s.isReactWarning ? f.props.ref : f.props.ref || f.ref);
                    return "function" == typeof d || h.isPresent ? i.cloneElement(f, {
                        ref: p
                    }) : null
                };

            function c(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            s.displayName = "Presence"
        },
        79087: function(e, t, n) {
            "use strict";
            n.d(t, {
                WV: function() {
                    return s
                },
                jH: function() {
                    return c
                }
            });
            var i = n(11390),
                r = n(58741),
                a = n(42400),
                o = n(3404),
                s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let n = i.forwardRef((e, n) => {
                        let {
                            asChild: i,
                            ...r
                        } = e, s = i ? a.g7 : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, o.jsx)(s, { ...r,
                            ref: n
                        })
                    });
                    return n.displayName = `Primitive.${t}`, { ...e,
                        [t]: n
                    }
                }, {});

            function c(e, t) {
                e && r.flushSync(() => e.dispatchEvent(t))
            }
        },
        42400: function(e, t, n) {
            "use strict";
            n.d(t, {
                g7: function() {
                    return o
                }
            });
            var i = n(11390),
                r = n(87817),
                a = n(3404),
                o = i.forwardRef((e, t) => {
                    let {
                        children: n,
                        ...r
                    } = e, o = i.Children.toArray(n), c = o.find(l);
                    if (c) {
                        let e = c.props.children,
                            n = o.map(t => t !== c ? t : i.Children.count(e) > 1 ? i.Children.only(null) : i.isValidElement(e) ? e.props.children : null);
                        return (0, a.jsx)(s, { ...r,
                            ref: t,
                            children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null
                        })
                    }
                    return (0, a.jsx)(s, { ...r,
                        ref: t,
                        children: n
                    })
                });
            o.displayName = "Slot";
            var s = i.forwardRef((e, t) => {
                let {
                    children: n,
                    ...a
                } = e;
                if (i.isValidElement(n)) {
                    let e, o;
                    let s = (e = Object.getOwnPropertyDescriptor(n.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref;
                    return i.cloneElement(n, { ... function(e, t) {
                            let n = { ...t
                            };
                            for (let i in t) {
                                let r = e[i],
                                    a = t[i];
                                /^on[A-Z]/.test(i) ? r && a ? n[i] = (...e) => {
                                    a(...e), r(...e)
                                } : r && (n[i] = r) : "style" === i ? n[i] = { ...r,
                                    ...a
                                } : "className" === i && (n[i] = [r, a].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...n
                            }
                        }(a, n.props),
                        ref: t ? (0, r.F)(t, s) : s
                    })
                }
                return i.Children.count(n) > 1 ? i.Children.only(null) : null
            });
            s.displayName = "SlotClone";
            var c = ({
                children: e
            }) => (0, a.jsx)(a.Fragment, {
                children: e
            });

            function l(e) {
                return i.isValidElement(e) && e.type === c
            }
        },
        41992: function(e, t, n) {
            "use strict";
            n.d(t, {
                Dx: function() {
                    return $
                },
                aU: function() {
                    return et
                },
                dk: function() {
                    return ee
                },
                fC: function() {
                    return q
                },
                l_: function() {
                    return K
                },
                x8: function() {
                    return en
                },
                zt: function() {
                    return X
                }
            });
            var i = n(11390),
                r = n(58741),
                a = n(33336),
                o = n(87817),
                s = n(69918),
                c = n(91880),
                l = n(58577),
                u = n(83541),
                d = n(79055),
                h = n(79087),
                f = n(37619),
                p = n(41531),
                m = n(76104),
                w = n(16108),
                y = n(3404),
                g = "ToastProvider",
                [M, N, b] = (0, s.B)("Toast"),
                [v, T] = (0, c.b)("Toast", [b]),
                [I, S] = v(g),
                j = e => {
                    let {
                        __scopeToast: t,
                        label: n = "Notification",
                        duration: r = 5e3,
                        swipeDirection: a = "right",
                        swipeThreshold: o = 50,
                        children: s
                    } = e, [c, l] = i.useState(null), [u, d] = i.useState(0), h = i.useRef(!1), f = i.useRef(!1);
                    return n.trim() || console.error("Invalid prop `label` supplied to `".concat(g, "`. Expected non-empty `string`.")), (0, y.jsx)(M.Provider, {
                        scope: t,
                        children: (0, y.jsx)(I, {
                            scope: t,
                            label: n,
                            duration: r,
                            swipeDirection: a,
                            swipeThreshold: o,
                            toastCount: u,
                            viewport: c,
                            onViewportChange: l,
                            onToastAdd: i.useCallback(() => d(e => e + 1), []),
                            onToastRemove: i.useCallback(() => d(e => e - 1), []),
                            isFocusedToastEscapeKeyDownRef: h,
                            isClosePausedRef: f,
                            children: s
                        })
                    })
                };
            j.displayName = g;
            var U = "ToastViewport",
                E = ["F8"],
                x = "toast.viewportPause",
                D = "toast.viewportResume",
                L = i.forwardRef((e, t) => {
                    let {
                        __scopeToast: n,
                        hotkey: r = E,
                        label: a = "Notifications ({hotkey})",
                        ...s
                    } = e, c = S(U, n), u = N(n), d = i.useRef(null), f = i.useRef(null), p = i.useRef(null), m = i.useRef(null), w = (0, o.e)(t, m, c.onViewportChange), g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), b = c.toastCount > 0;
                    i.useEffect(() => {
                        let e = e => {
                            var t;
                            r.every(t => e[t] || e.code === t) && (null === (t = m.current) || void 0 === t || t.focus())
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }, [r]), i.useEffect(() => {
                        let e = d.current,
                            t = m.current;
                        if (b && e && t) {
                            let n = () => {
                                    if (!c.isClosePausedRef.current) {
                                        let e = new CustomEvent(x);
                                        t.dispatchEvent(e), c.isClosePausedRef.current = !0
                                    }
                                },
                                i = () => {
                                    if (c.isClosePausedRef.current) {
                                        let e = new CustomEvent(D);
                                        t.dispatchEvent(e), c.isClosePausedRef.current = !1
                                    }
                                },
                                r = t => {
                                    e.contains(t.relatedTarget) || i()
                                },
                                a = () => {
                                    e.contains(document.activeElement) || i()
                                };
                            return e.addEventListener("focusin", n), e.addEventListener("focusout", r), e.addEventListener("pointermove", n), e.addEventListener("pointerleave", a), window.addEventListener("blur", n), window.addEventListener("focus", i), () => {
                                e.removeEventListener("focusin", n), e.removeEventListener("focusout", r), e.removeEventListener("pointermove", n), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", n), window.removeEventListener("focus", i)
                            }
                        }
                    }, [b, c.isClosePausedRef]);
                    let v = i.useCallback(e => {
                        let {
                            tabbingDirection: t
                        } = e, n = u().map(e => {
                            let n = e.ref.current,
                                i = [n, ... function(e) {
                                    let t = [],
                                        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                            acceptNode: e => {
                                                let t = "INPUT" === e.tagName && "hidden" === e.type;
                                                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                                            }
                                        });
                                    for (; n.nextNode();) t.push(n.currentNode);
                                    return t
                                }(n)];
                            return "forwards" === t ? i : i.reverse()
                        });
                        return ("forwards" === t ? n.reverse() : n).flat()
                    }, [u]);
                    return i.useEffect(() => {
                        let e = m.current;
                        if (e) {
                            let t = t => {
                                let n = t.altKey || t.ctrlKey || t.metaKey;
                                if ("Tab" === t.key && !n) {
                                    var i, r, a;
                                    let n = document.activeElement,
                                        o = t.shiftKey;
                                    if (t.target === e && o) {
                                        null === (i = f.current) || void 0 === i || i.focus();
                                        return
                                    }
                                    let s = v({
                                            tabbingDirection: o ? "backwards" : "forwards"
                                        }),
                                        c = s.findIndex(e => e === n);
                                    J(s.slice(c + 1)) ? t.preventDefault() : o ? null === (r = f.current) || void 0 === r || r.focus() : null === (a = p.current) || void 0 === a || a.focus()
                                }
                            };
                            return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
                        }
                    }, [u, v]), (0, y.jsxs)(l.I0, {
                        ref: d,
                        role: "region",
                        "aria-label": a.replace("{hotkey}", g),
                        tabIndex: -1,
                        style: {
                            pointerEvents: b ? void 0 : "none"
                        },
                        children: [b && (0, y.jsx)(A, {
                            ref: f,
                            onFocusFromOutsideViewport: () => {
                                J(v({
                                    tabbingDirection: "forwards"
                                }))
                            }
                        }), (0, y.jsx)(M.Slot, {
                            scope: n,
                            children: (0, y.jsx)(h.WV.ol, {
                                tabIndex: -1,
                                ...s,
                                ref: w
                            })
                        }), b && (0, y.jsx)(A, {
                            ref: p,
                            onFocusFromOutsideViewport: () => {
                                J(v({
                                    tabbingDirection: "backwards"
                                }))
                            }
                        })]
                    })
                });
            L.displayName = U;
            var O = "ToastFocusProxy",
                A = i.forwardRef((e, t) => {
                    let {
                        __scopeToast: n,
                        onFocusFromOutsideViewport: i,
                        ...r
                    } = e, a = S(O, n);
                    return (0, y.jsx)(w.T, {
                        "aria-hidden": !0,
                        tabIndex: 0,
                        ...r,
                        ref: t,
                        style: {
                            position: "fixed"
                        },
                        onFocus: e => {
                            var t;
                            let n = e.relatedTarget;
                            (null === (t = a.viewport) || void 0 === t ? void 0 : t.contains(n)) || i()
                        }
                    })
                });
            A.displayName = O;
            var R = "Toast",
                z = i.forwardRef((e, t) => {
                    let {
                        forceMount: n,
                        open: i,
                        defaultOpen: r,
                        onOpenChange: o,
                        ...s
                    } = e, [c = !0, l] = (0, p.T)({
                        prop: i,
                        defaultProp: r,
                        onChange: o
                    });
                    return (0, y.jsx)(d.z, {
                        present: n || c,
                        children: (0, y.jsx)(F, {
                            open: c,
                            ...s,
                            ref: t,
                            onClose: () => l(!1),
                            onPause: (0, f.W)(e.onPause),
                            onResume: (0, f.W)(e.onResume),
                            onSwipeStart: (0, a.M)(e.onSwipeStart, e => {
                                e.currentTarget.setAttribute("data-swipe", "start")
                            }),
                            onSwipeMove: (0, a.M)(e.onSwipeMove, e => {
                                let {
                                    x: t,
                                    y: n
                                } = e.detail.delta;
                                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", "".concat(t, "px")), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", "".concat(n, "px"))
                            }),
                            onSwipeCancel: (0, a.M)(e.onSwipeCancel, e => {
                                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                            }),
                            onSwipeEnd: (0, a.M)(e.onSwipeEnd, e => {
                                let {
                                    x: t,
                                    y: n
                                } = e.detail.delta;
                                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", "".concat(t, "px")), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", "".concat(n, "px")), l(!1)
                            })
                        })
                    })
                });
            z.displayName = R;
            var [C, k] = v(R, {
                onClose() {}
            }), F = i.forwardRef((e, t) => {
                let {
                    __scopeToast: n,
                    type: s = "foreground",
                    duration: c,
                    open: u,
                    onClose: d,
                    onEscapeKeyDown: p,
                    onPause: m,
                    onResume: w,
                    onSwipeStart: g,
                    onSwipeMove: N,
                    onSwipeCancel: b,
                    onSwipeEnd: v,
                    ...T
                } = e, I = S(R, n), [j, U] = i.useState(null), E = (0, o.e)(t, e => U(e)), L = i.useRef(null), O = i.useRef(null), A = c || I.duration, z = i.useRef(0), k = i.useRef(A), F = i.useRef(0), {
                    onToastAdd: Q,
                    onToastRemove: W
                } = I, Z = (0, f.W)(() => {
                    var e;
                    (null == j ? void 0 : j.contains(document.activeElement)) && (null === (e = I.viewport) || void 0 === e || e.focus()), d()
                }), B = i.useCallback(e => {
                    e && e !== 1 / 0 && (window.clearTimeout(F.current), z.current = new Date().getTime(), F.current = window.setTimeout(Z, e))
                }, [Z]);
                i.useEffect(() => {
                    let e = I.viewport;
                    if (e) {
                        let t = () => {
                                B(k.current), null == w || w()
                            },
                            n = () => {
                                let e = new Date().getTime() - z.current;
                                k.current = k.current - e, window.clearTimeout(F.current), null == m || m()
                            };
                        return e.addEventListener(x, n), e.addEventListener(D, t), () => {
                            e.removeEventListener(x, n), e.removeEventListener(D, t)
                        }
                    }
                }, [I.viewport, A, m, w, B]), i.useEffect(() => {
                    u && !I.isClosePausedRef.current && B(A)
                }, [u, A, I.isClosePausedRef, B]), i.useEffect(() => (Q(), () => W()), [Q, W]);
                let _ = i.useMemo(() => j ? function e(t) {
                    let n = [];
                    return Array.from(t.childNodes).forEach(t => {
                        if (t.nodeType === t.TEXT_NODE && t.textContent && n.push(t.textContent), t.nodeType === t.ELEMENT_NODE) {
                            let i = t.ariaHidden || t.hidden || "none" === t.style.display,
                                r = "" === t.dataset.radixToastAnnounceExclude;
                            if (!i) {
                                if (r) {
                                    let e = t.dataset.radixToastAnnounceAlt;
                                    e && n.push(e)
                                } else n.push(...e(t))
                            }
                        }
                    }), n
                }(j) : null, [j]);
                return I.viewport ? (0, y.jsxs)(y.Fragment, {
                    children: [_ && (0, y.jsx)(V, {
                        __scopeToast: n,
                        role: "status",
                        "aria-live": "foreground" === s ? "assertive" : "polite",
                        "aria-atomic": !0,
                        children: _
                    }), (0, y.jsx)(C, {
                        scope: n,
                        onClose: Z,
                        children: r.createPortal((0, y.jsx)(M.ItemSlot, {
                            scope: n,
                            children: (0, y.jsx)(l.fC, {
                                asChild: !0,
                                onEscapeKeyDown: (0, a.M)(p, () => {
                                    I.isFocusedToastEscapeKeyDownRef.current || Z(), I.isFocusedToastEscapeKeyDownRef.current = !1
                                }),
                                children: (0, y.jsx)(h.WV.li, {
                                    role: "status",
                                    "aria-live": "off",
                                    "aria-atomic": !0,
                                    tabIndex: 0,
                                    "data-state": u ? "open" : "closed",
                                    "data-swipe-direction": I.swipeDirection,
                                    ...T,
                                    ref: E,
                                    style: {
                                        userSelect: "none",
                                        touchAction: "none",
                                        ...e.style
                                    },
                                    onKeyDown: (0, a.M)(e.onKeyDown, e => {
                                        "Escape" !== e.key || (null == p || p(e.nativeEvent), e.nativeEvent.defaultPrevented || (I.isFocusedToastEscapeKeyDownRef.current = !0, Z()))
                                    }),
                                    onPointerDown: (0, a.M)(e.onPointerDown, e => {
                                        0 === e.button && (L.current = {
                                            x: e.clientX,
                                            y: e.clientY
                                        })
                                    }),
                                    onPointerMove: (0, a.M)(e.onPointerMove, e => {
                                        if (!L.current) return;
                                        let t = e.clientX - L.current.x,
                                            n = e.clientY - L.current.y,
                                            i = !!O.current,
                                            r = ["left", "right"].includes(I.swipeDirection),
                                            a = ["left", "up"].includes(I.swipeDirection) ? Math.min : Math.max,
                                            o = r ? a(0, t) : 0,
                                            s = r ? 0 : a(0, n),
                                            c = "touch" === e.pointerType ? 10 : 2,
                                            l = {
                                                x: o,
                                                y: s
                                            },
                                            u = {
                                                originalEvent: e,
                                                delta: l
                                            };
                                        i ? (O.current = l, G("toast.swipeMove", N, u, {
                                            discrete: !1
                                        })) : H(l, I.swipeDirection, c) ? (O.current = l, G("toast.swipeStart", g, u, {
                                            discrete: !1
                                        }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > c || Math.abs(n) > c) && (L.current = null)
                                    }),
                                    onPointerUp: (0, a.M)(e.onPointerUp, e => {
                                        let t = O.current,
                                            n = e.target;
                                        if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), O.current = null, L.current = null, t) {
                                            let n = e.currentTarget,
                                                i = {
                                                    originalEvent: e,
                                                    delta: t
                                                };
                                            H(t, I.swipeDirection, I.swipeThreshold) ? G("toast.swipeEnd", v, i, {
                                                discrete: !0
                                            }) : G("toast.swipeCancel", b, i, {
                                                discrete: !0
                                            }), n.addEventListener("click", e => e.preventDefault(), {
                                                once: !0
                                            })
                                        }
                                    })
                                })
                            })
                        }), I.viewport)
                    })]
                }) : null
            }), V = e => {
                let {
                    __scopeToast: t,
                    children: n,
                    ...r
                } = e, a = S(R, t), [o, s] = i.useState(!1), [c, l] = i.useState(!1);
                return function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {},
                        t = (0, f.W)(e);
                    (0, m.b)(() => {
                        let e = 0,
                            n = 0;
                        return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
                            window.cancelAnimationFrame(e), window.cancelAnimationFrame(n)
                        }
                    }, [t])
                }(() => s(!0)), i.useEffect(() => {
                    let e = window.setTimeout(() => l(!0), 1e3);
                    return () => window.clearTimeout(e)
                }, []), c ? null : (0, y.jsx)(u.h, {
                    asChild: !0,
                    children: (0, y.jsx)(w.T, { ...r,
                        children: o && (0, y.jsxs)(y.Fragment, {
                            children: [a.label, " ", n]
                        })
                    })
                })
            }, Q = i.forwardRef((e, t) => {
                let {
                    __scopeToast: n,
                    ...i
                } = e;
                return (0, y.jsx)(h.WV.div, { ...i,
                    ref: t
                })
            });
            Q.displayName = "ToastTitle";
            var W = i.forwardRef((e, t) => {
                let {
                    __scopeToast: n,
                    ...i
                } = e;
                return (0, y.jsx)(h.WV.div, { ...i,
                    ref: t
                })
            });
            W.displayName = "ToastDescription";
            var Z = "ToastAction",
                B = i.forwardRef((e, t) => {
                    let {
                        altText: n,
                        ...i
                    } = e;
                    return n.trim() ? (0, y.jsx)(Y, {
                        altText: n,
                        asChild: !0,
                        children: (0, y.jsx)(P, { ...i,
                            ref: t
                        })
                    }) : (console.error("Invalid prop `altText` supplied to `".concat(Z, "`. Expected non-empty `string`.")), null)
                });
            B.displayName = Z;
            var _ = "ToastClose",
                P = i.forwardRef((e, t) => {
                    let {
                        __scopeToast: n,
                        ...i
                    } = e, r = k(_, n);
                    return (0, y.jsx)(Y, {
                        asChild: !0,
                        children: (0, y.jsx)(h.WV.button, {
                            type: "button",
                            ...i,
                            ref: t,
                            onClick: (0, a.M)(e.onClick, r.onClose)
                        })
                    })
                });
            P.displayName = _;
            var Y = i.forwardRef((e, t) => {
                let {
                    __scopeToast: n,
                    altText: i,
                    ...r
                } = e;
                return (0, y.jsx)(h.WV.div, {
                    "data-radix-toast-announce-exclude": "",
                    "data-radix-toast-announce-alt": i || void 0,
                    ...r,
                    ref: t
                })
            });

            function G(e, t, n, i) {
                let {
                    discrete: r
                } = i, a = n.originalEvent.currentTarget, o = new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                });
                t && a.addEventListener(e, t, {
                    once: !0
                }), r ? (0, h.jH)(a, o) : a.dispatchEvent(o)
            }
            var H = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = Math.abs(e.x),
                    r = Math.abs(e.y),
                    a = i > r;
                return "left" === t || "right" === t ? a && i > n : !a && r > n
            };

            function J(e) {
                let t = document.activeElement;
                return e.some(e => e === t || (e.focus(), document.activeElement !== t))
            }
            var X = j,
                K = L,
                q = z,
                $ = Q,
                ee = W,
                et = B,
                en = P
        },
        37619: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return r
                }
            });
            var i = n(11390);

            function r(e) {
                let t = i.useRef(e);
                return i.useEffect(() => {
                    t.current = e
                }), i.useMemo(() => (...e) => t.current ? .(...e), [])
            }
        },
        41531: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return a
                }
            });
            var i = n(11390),
                r = n(37619);

            function a({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [a, o] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = i.useState(e),
                        [a] = n,
                        o = i.useRef(a),
                        s = (0, r.W)(t);
                    return i.useEffect(() => {
                        o.current !== a && (s(a), o.current = a)
                    }, [a, o, s]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), s = void 0 !== e, c = s ? e : a, l = (0, r.W)(n);
                return [c, i.useCallback(t => {
                    if (s) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && l(n)
                    } else o(t)
                }, [s, e, o, l])]
            }
        },
        19357: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return a
                }
            });
            var i = n(11390),
                r = n(37619);

            function a(e, t = globalThis ? .document) {
                let n = (0, r.W)(e);
                i.useEffect(() => {
                    let e = e => {
                        "Escape" === e.key && n(e)
                    };
                    return t.addEventListener("keydown", e, {
                        capture: !0
                    }), () => t.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }, [n, t])
            }
        },
        76104: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return r
                }
            });
            var i = n(11390),
                r = globalThis ? .document ? i.useLayoutEffect : () => {}
        },
        16108: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return o
                }
            });
            var i = n(11390),
                r = n(79087),
                a = n(3404),
                o = i.forwardRef((e, t) => (0, a.jsx)(r.WV.span, { ...e,
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }));
            o.displayName = "VisuallyHidden"
        },
        64198: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return l
                },
                i1: function() {
                    return r
                },
                mI: function() {
                    return s
                },
                su: function() {
                    return c
                }
            });
            var i, r, a = n(98703),
                o = n(44631);
            (i = r || (r = {})).Installed = "Installed", i.NotDetected = "NotDetected", i.Loadable = "Loadable", i.Unsupported = "Unsupported";
            class s extends a {
                get connected() {
                    return !!this.publicKey
                }
                async autoConnect() {
                    await this.connect()
                }
                async prepareTransaction(e, t, n = {}) {
                    let i = this.publicKey;
                    if (!i) throw new o.oS;
                    return e.feePayer = e.feePayer || i, e.recentBlockhash = e.recentBlockhash || (await t.getLatestBlockhash({
                        commitment: n.preflightCommitment,
                        minContextSlot: n.minContextSlot
                    })).blockhash, e
                }
            }

            function c(e) {
                if ("undefined" == typeof window || "undefined" == typeof document) return;
                let t = [];

                function n() {
                    if (e())
                        for (let e of t) e()
                }
                let i = setInterval(n, 1e3);
                t.push(() => clearInterval(i)), "loading" === document.readyState && (document.addEventListener("DOMContentLoaded", n, {
                    once: !0
                }), t.push(() => document.removeEventListener("DOMContentLoaded", n))), "complete" !== document.readyState && (window.addEventListener("load", n, {
                    once: !0
                }), t.push(() => window.removeEventListener("load", n))), n()
            }

            function l() {
                if (!navigator) return !1;
                let e = navigator.userAgent.toLowerCase(),
                    t = e.includes("iphone") || e.includes("ipad"),
                    n = e.includes("safari");
                return t && n
            }
        },
        44631: function(e, t, n) {
            "use strict";
            n.d(t, {
                $w: function() {
                    return s
                },
                IW: function() {
                    return f
                },
                Nx: function() {
                    return d
                },
                OZ: function() {
                    return r
                },
                PY: function() {
                    return p
                },
                UG: function() {
                    return l
                },
                W8: function() {
                    return a
                },
                at: function() {
                    return c
                },
                bD: function() {
                    return w
                },
                cO: function() {
                    return u
                },
                fk: function() {
                    return m
                },
                lj: function() {
                    return i
                },
                oS: function() {
                    return h
                },
                p6: function() {
                    return o
                }
            });
            class i extends Error {
                constructor(e, t) {
                    super(e), this.error = t
                }
            }
            class r extends i {
                constructor() {
                    super(...arguments), this.name = "WalletNotReadyError"
                }
            }
            class a extends i {
                constructor() {
                    super(...arguments), this.name = "WalletLoadError"
                }
            }
            class o extends i {
                constructor() {
                    super(...arguments), this.name = "WalletConfigError"
                }
            }
            class s extends i {
                constructor() {
                    super(...arguments), this.name = "WalletConnectionError"
                }
            }
            class c extends i {
                constructor() {
                    super(...arguments), this.name = "WalletDisconnectedError"
                }
            }
            class l extends i {
                constructor() {
                    super(...arguments), this.name = "WalletDisconnectionError"
                }
            }
            class u extends i {
                constructor() {
                    super(...arguments), this.name = "WalletAccountError"
                }
            }
            class d extends i {
                constructor() {
                    super(...arguments), this.name = "WalletPublicKeyError"
                }
            }
            class h extends i {
                constructor() {
                    super(...arguments), this.name = "WalletNotConnectedError"
                }
            }
            class f extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSendTransactionError"
                }
            }
            class p extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSignTransactionError"
                }
            }
            class m extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSignMessageError"
                }
            }
            class w extends i {
                constructor() {
                    super(...arguments), this.name = "WalletSignInError"
                }
            }
        },
        20832: function(e, t, n) {
            "use strict";
            n.d(t, {
                eC: function() {
                    return s
                },
                qz: function() {
                    return c
                }
            });
            var i = n(64198),
                r = n(44631),
                a = n(55409);
            class o extends i.mI {
                async sendTransaction(e, t, n = {}) {
                    let i = !0;
                    try {
                        if ((0, a.W)(e)) {
                            if (!this.supportedTransactionVersions) throw new r.IW("Sending versioned transactions isn't supported by this wallet");
                            if (!this.supportedTransactionVersions.has(e.version)) throw new r.IW(`Sending transaction version ${e.version} isn't supported by this wallet`);
                            try {
                                let i = (e = await this.signTransaction(e)).serialize();
                                return await t.sendRawTransaction(i, n)
                            } catch (e) {
                                if (e instanceof r.PY) throw i = !1, e;
                                throw new r.IW(e ? .message, e)
                            }
                        } else try {
                            let {
                                signers: i,
                                ...r
                            } = n;
                            e = await this.prepareTransaction(e, t, r), i ? .length && e.partialSign(...i);
                            let a = (e = await this.signTransaction(e)).serialize();
                            return await t.sendRawTransaction(a, r)
                        } catch (e) {
                            if (e instanceof r.PY) throw i = !1, e;
                            throw new r.IW(e ? .message, e)
                        }
                    } catch (e) {
                        throw i && this.emit("error", e), e
                    }
                }
                async signAllTransactions(e) {
                    for (let t of e)
                        if ((0, a.W)(t)) {
                            if (!this.supportedTransactionVersions) throw new r.PY("Signing versioned transactions isn't supported by this wallet");
                            if (!this.supportedTransactionVersions.has(t.version)) throw new r.PY(`Signing transaction version ${t.version} isn't supported by this wallet`)
                        }
                    let t = [];
                    for (let n of e) t.push(await this.signTransaction(n));
                    return t
                }
            }
            class s extends o {}
            class c extends s {}
        },
        55409: function(e, t, n) {
            "use strict";

            function i(e) {
                return "version" in e
            }
            n.d(t, {
                W: function() {
                    return i
                }
            })
        },
        80581: function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, {
                Q: function() {
                    return i
                }
            }), (r = i || (i = {})).Mainnet = "mainnet-beta", r.Testnet = "testnet", r.Devnet = "devnet"
        },
        5835: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return c
                }
            });
            var i = n(20832),
                r = n(64198),
                a = n(44631),
                o = n(67730),
                s = n(57840);
            class c extends i.eC {
                constructor(e = {}) {
                    super(), this.name = "Coin98", this.url = "https://coin98.com", this.icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NiA3NSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMDEuNjgxJSIgeDI9Ii0xLjU1NyUiIHkxPSIxNS4yNjglIiB5Mj0iODQuOTE3JSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGMUQ5NjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQ0RBMTQ2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9Ijc1IiBoZWlnaHQ9Ijc1IiBmaWxsPSIjMDAwIiByeD0iMTYiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYxLjQ0IDBhMTMuNzE0IDEzLjcxNCAwIDAgMSA5LjY4IDQuMDEgMTMuNjYxIDEzLjY2MSAwIDAgMSA0LjAwOCA5LjY2OHY0Ny42NDZhMTMuNjYgMTMuNjYgMCAwIDEtNC4wMDcgOS42NjZBMTMuNzEzIDEzLjcxMyAwIDAgMSA2MS40NCA3NUgxMy42ODZhMTMuNzEzIDEzLjcxMyAwIDAgMS05LjY4LTQuMDFBMTMuNjYgMTMuNjYgMCAwIDEgMCA2MS4zMjRWMTMuNjc4YzAtMy42MjUgMS40NC03LjEwMiA0LjAwNy05LjY2N0ExMy43MTQgMTMuNzE0IDAgMCAxIDEzLjY4NyAwWk0yMC4wNjMgNDYuMjMxaC00LjgyNWExMC4wMzIgMTAuMDMyIDAgMCAwIDIuOTQ2IDcuMDg2IDEwLjA3IDEwLjA3IDAgMCAwIDcuMSAyLjk0MiAxMC4wNjUgMTAuMDY1IDAgMCAwIDcuMTA4LTIuOTM1IDEwLjAzIDEwLjAzIDAgMCAwIDIuOTQ2LTcuMDkzaC00LjgyNGE1LjIwNyA1LjIwNyAwIDAgMS0xLjUzIDMuNjg4IDUuMjI1IDUuMjI1IDAgMCAxLTMuNjk2IDEuNTI4IDUuMjM0IDUuMjM0IDAgMCAxLTMuNjk1LTEuNTI4IDUuMjEzIDUuMjEzIDAgMCAxLTEuNTMtMy42ODhaTTU0LjMzIDMzLjcxNmExMS43NjMgMTEuNzYzIDAgMCAwLTEyLjc5OSAyLjUzOEExMS42OTcgMTEuNjk3IDAgMCAwIDM4Ljk5IDQ5LjAzYTExLjcyMyAxMS43MjMgMCAwIDAgNC4zMjggNS4yNTkgMTEuNzU3IDExLjc1NyAwIDAgMCA2LjUyNiAxLjk3IDExLjc2NiAxMS43NjYgMCAwIDAgOC4yOS0zLjQzNSAxMS43MiAxMS43MiAwIDAgMCAzLjQ0Mi04LjI3NCAxMS43MDIgMTEuNzAyIDAgMCAwLTEuOTc1LTYuNTE0IDExLjczNiAxMS43MzYgMCAwIDAtNS4yNjktNC4zMlptLTQuNDg4IDMuOTJhNi45MzcgNi45MzcgMCAwIDEgNC45IDIuMDI1IDYuOTEgNi45MSAwIDAgMSAyLjAyOCA0Ljg5MiA2Ljg5NyA2Ljg5NyAwIDAgMS0xLjE3IDMuODM0IDYuOTMyIDYuOTMyIDAgMCAxLTEwLjY0MyAxLjA0MiA2LjkwMiA2LjkwMiAwIDAgMS0xLjUtNy41MjIgNi45MDkgNi45MDkgMCAwIDEgMi41NDQtMy4xIDYuOTI4IDYuOTI4IDAgMCAxIDMuODQxLTEuMTY3Wm0uMTcgNC41NTJhMi40MzEgMi40MzEgMCAwIDAtMi4yNDEgMS4xNTQgMi40MTggMi40MTggMCAwIDAtLjM1NiAxLjI1NyAyLjM5NSAyLjM5NSAwIDAgMCAxLjYxOSAyLjI5djEuNzUzaDEuNjE4di0xLjc1NGEyLjQyNyAyLjQyNyAwIDAgMCAxLjU5NC0xLjk1IDIuNDE4IDIuNDE4IDAgMCAwLTEtMi4zMSAyLjQzMSAyLjQzMSAwIDAgMC0xLjIzNC0uNDRabS0yMC4yMi0yMi41NTJhMTEuNzYyIDExLjc2MiAwIDAgMC0xMi43OTYgMi41MzEgMTEuNjk3IDExLjY5NyAwIDAgMC0yLjU1NCAxMi43NjkgMTEuNzIzIDExLjcyMyAwIDAgMCA0LjMyIDUuMjYyIDExLjc1NyAxMS43NTcgMCAwIDAgMTQuODI1LTEuNDQ2IDExLjcxNyAxMS43MTcgMCAwIDAgMy40NDUtOC4yODQgMTEuNzAzIDExLjcwMyAwIDAgMC0xLjk3NC02LjUxMiAxMS43MzYgMTEuNzM2IDAgMCAwLTUuMjY2LTQuMzJabS00LjUxIDMuOTE3YTYuOTQ1IDYuOTQ1IDAgMCAxIDQuODk3IDIuMDI5IDYuOTE4IDYuOTE4IDAgMCAxIDIuMDMyIDQuODg2IDYuOTA2IDYuOTA2IDAgMCAxLTEuMTY4IDMuODQyIDYuOTQgNi45NCAwIDAgMS0xMC42NiAxLjA0OCA2LjkxMSA2LjkxMSAwIDAgMS0xLjUtNy41MzYgNi45MTggNi45MTggMCAwIDEgMi41NS0zLjEwMyA2LjkzNyA2LjkzNyAwIDAgMSAzLjg1LTEuMTY2Wm0yNC41Ni00LjgxYTEwLjA1OSAxMC4wNTkgMCAwIDAtNy4xMDMgMi45NCAxMC4wMiAxMC4wMiAwIDAgMC0yLjk0IDcuMDkgOS45IDkuOSAwIDAgMCAxLjIzIDQuNzk1IDEzLjU3NSAxMy41NzUgMCAwIDEgNC4yMTQtMi4zMjIgNS4wODIgNS4wODIgMCAwIDEtLjYyNS0yLjQ3NyA1LjIwNiA1LjIwNiAwIDAgMSAxLjUwMy0zLjczNiA1LjIyMyA1LjIyMyAwIDAgMSAzLjcyMi0xLjU1NCA1LjIzNCA1LjIzNCAwIDAgMSAzLjcyIDEuNTU0IDUuMjEzIDUuMjEzIDAgMCAxIDEuNTA1IDMuNzM2IDUuMjc5IDUuMjc5IDAgMCAxLS42MjMgMi40NzMgMTMuNTc0IDEzLjU3NCAwIDAgMSA0LjIxMyAyLjMyMiA5LjkwMyA5LjkwMyAwIDAgMCAxLjIzLTQuNzk1IDEwLjAzMiAxMC4wMzIgMCAwIDAtMi45NDYtNy4wODYgMTAuMDcgMTAuMDcgMCAwIDAtNy4xLTIuOTRabS0yMy43NSA3Ljk5aC0xLjYxN3YxLjc1YTIuNDE5IDIuNDE5IDAgMCAwLTEuNTgyIDIuNjg3IDIuNDE0IDIuNDE0IDAgMCAwIDIuMzkgMi4wMDYgMi40NSAyLjQ1IDAgMCAwIDEuNTU1LS41NzQgMi40MTQgMi40MTQgMCAwIDAtLjc0Ni00LjExOXYtMS43NVoiLz4KICA8L2c+Cjwvc3ZnPgo=", this.supportedTransactionVersions = null, this._readyState = "undefined" == typeof window || "undefined" == typeof document ? r.i1.Unsupported : r.i1.NotDetected, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== r.i1.Unsupported && (0, r.su)(() => !!window.coin98 ? .sol && (this._readyState = r.i1.Installed, this.emit("readyStateChange", this._readyState), !0))
                }
                get publicKey() {
                    return this._publicKey
                }
                get connecting() {
                    return this._connecting
                }
                get connected() {
                    return !!this._wallet ? .isConnected()
                }
                get readyState() {
                    return this._readyState
                }
                async connect() {
                    try {
                        let e, t;
                        if (this.connected || this.connecting) return;
                        if (this._readyState !== r.i1.Installed) throw new a.OZ;
                        this._connecting = !0;
                        let n = window.coin98.sol;
                        try {
                            e = (await n.connect())[0]
                        } catch (e) {
                            throw new a.cO(e ? .message, e)
                        }
                        try {
                            t = new o.nh(e)
                        } catch (e) {
                            throw new a.Nx(e ? .message, e)
                        }
                        this._wallet = n, this._publicKey = t, this.emit("connect", t)
                    } catch (e) {
                        throw this.emit("error", e), e
                    } finally {
                        this._connecting = !1
                    }
                }
                async disconnect() {
                    let e = this._wallet;
                    if (e) {
                        this._wallet = null, this._publicKey = null;
                        try {
                            await e.disconnect()
                        } catch (e) {
                            this.emit("error", new a.UG(e ? .message, e))
                        }
                    }
                    this.emit("disconnect")
                }
                async signTransaction(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            let n = await t.request({
                                    method: "sol_sign",
                                    params: [e]
                                }),
                                i = new o.nh(n.publicKey),
                                r = s.decode(n.signature);
                            return e.addSignature(i, r), e
                        } catch (e) {
                            throw new a.PY(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signAllTransactions(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            let n = await t.request({
                                    method: "sol_signAllTransactions",
                                    params: [e]
                                }),
                                i = new o.nh(n.publicKey),
                                r = n.signatures;
                            return e.map((e, t) => {
                                let n = s.decode(r[t]);
                                return e.addSignature(i, n), e
                            })
                        } catch (e) {
                            throw new a.PY(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signMessage(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            let n = await t.request({
                                method: "sol_signMessage",
                                params: [e]
                            });
                            return s.decode(n.signature)
                        } catch (e) {
                            throw new a.fk(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
            }
        },
        20738: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return c
                }
            });
            var i = n(20832),
                r = n(64198),
                a = n(44631),
                o = n(55409),
                s = n(67730);
            class c extends i.eC {
                constructor(e = {}) {
                    super(), this.name = "Coinbase Wallet", this.url = "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad", this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjUxMiIgZmlsbD0iIzAwNTJGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MiA1MTJDMTUyIDcxMC44MjMgMzEzLjE3NyA4NzIgNTEyIDg3MkM3MTAuODIzIDg3MiA4NzIgNzEwLjgyMyA4NzIgNTEyQzg3MiAzMTMuMTc3IDcxMC44MjMgMTUyIDUxMiAxNTJDMzEzLjE3NyAxNTIgMTUyIDMxMy4xNzcgMTUyIDUxMlpNNDIwIDM5NkM0MDYuNzQ1IDM5NiAzOTYgNDA2Ljc0NSAzOTYgNDIwVjYwNEMzOTYgNjE3LjI1NSA0MDYuNzQ1IDYyOCA0MjAgNjI4SDYwNEM2MTcuMjU1IDYyOCA2MjggNjE3LjI1NSA2MjggNjA0VjQyMEM2MjggNDA2Ljc0NSA2MTcuMjU1IDM5NiA2MDQgMzk2SDQyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=", this.supportedTransactionVersions = new Set(["legacy", 0]), this._readyState = "undefined" == typeof window || "undefined" == typeof document ? r.i1.Unsupported : r.i1.NotDetected, this._disconnected = () => {
                        let e = this._wallet;
                        e && (e.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new a.at), this.emit("disconnect"))
                    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== r.i1.Unsupported && (0, r.su)(() => !!window ? .coinbaseSolana && (this._readyState = r.i1.Installed, this.emit("readyStateChange", this._readyState), !0))
                }
                get publicKey() {
                    return this._publicKey
                }
                get connecting() {
                    return this._connecting
                }
                get readyState() {
                    return this._readyState
                }
                async connect() {
                    try {
                        let e;
                        if (this.connected || this.connecting) return;
                        if (this._readyState !== r.i1.Installed) throw new a.OZ;
                        this._connecting = !0;
                        let t = window.coinbaseSolana;
                        try {
                            await t.connect()
                        } catch (e) {
                            throw new a.$w(e ? .message, e)
                        }
                        if (!t.publicKey) throw new a.cO;
                        try {
                            e = new s.nh(t.publicKey.toBytes())
                        } catch (e) {
                            throw new a.Nx(e ? .message, e)
                        }
                        t.on("disconnect", this._disconnected), this._wallet = t, this._publicKey = e, this.emit("connect", e)
                    } catch (e) {
                        throw this.emit("error", e), e
                    } finally {
                        this._connecting = !1
                    }
                }
                async disconnect() {
                    let e = this._wallet;
                    if (e) {
                        e.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null;
                        try {
                            await e.disconnect()
                        } catch (e) {
                            this.emit("error", new a.UG(e ? .message, e))
                        }
                    }
                    this.emit("disconnect")
                }
                async sendTransaction(e, t, n = {}) {
                    try {
                        let i = this._wallet;
                        if (!i) throw new a.oS;
                        try {
                            let {
                                signers: r,
                                ...a
                            } = n;
                            (0, o.W)(e) ? r ? .length && e.sign(r) : (e = await this.prepareTransaction(e, t, a), r ? .length && e.partialSign(...r)), a.preflightCommitment = a.preflightCommitment || t.commitment;
                            let {
                                signature: s
                            } = await i.signAndSendTransaction(e, a);
                            return s
                        } catch (e) {
                            if (e instanceof a.lj) throw e;
                            throw new a.IW(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signTransaction(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            return await t.signTransaction(e) || e
                        } catch (e) {
                            throw new a.PY(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signAllTransactions(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            return await t.signAllTransactions(e) || e
                        } catch (e) {
                            throw new a.PY(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signMessage(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            let {
                                signature: n
                            } = await t.signMessage(e);
                            return n
                        } catch (e) {
                            throw new a.PY(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
            }
        },
        28250: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return c
                }
            });
            var i = n(20832),
                r = n(64198),
                a = n(44631),
                o = n(55409),
                s = n(67730);
            class c extends i.eC {
                constructor(e = {}) {
                    super(), this.name = "Phantom", this.url = "https://phantom.app", this.icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg==", this.supportedTransactionVersions = new Set(["legacy", 0]), this._readyState = "undefined" == typeof window || "undefined" == typeof document ? r.i1.Unsupported : r.i1.NotDetected, this._disconnected = () => {
                        let e = this._wallet;
                        e && (e.off("disconnect", this._disconnected), e.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null, this.emit("error", new a.at), this.emit("disconnect"))
                    }, this._accountChanged = e => {
                        let t = this._publicKey;
                        if (t) {
                            try {
                                e = new s.nh(e.toBytes())
                            } catch (e) {
                                this.emit("error", new a.Nx(e ? .message, e));
                                return
                            }
                            t.equals(e) || (this._publicKey = e, this.emit("connect", e))
                        }
                    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== r.i1.Unsupported && ((0, r.H)() ? (this._readyState = r.i1.Loadable, this.emit("readyStateChange", this._readyState)) : (0, r.su)(() => !!(window.phantom ? .solana ? .isPhantom || window.solana ? .isPhantom) && (this._readyState = r.i1.Installed, this.emit("readyStateChange", this._readyState), !0)))
                }
                get publicKey() {
                    return this._publicKey
                }
                get connecting() {
                    return this._connecting
                }
                get readyState() {
                    return this._readyState
                }
                async autoConnect() {
                    this.readyState === r.i1.Installed && await this.connect()
                }
                async connect() {
                    try {
                        let e;
                        if (this.connected || this.connecting) return;
                        if (this.readyState === r.i1.Loadable) {
                            let e = encodeURIComponent(window.location.href),
                                t = encodeURIComponent(window.location.origin);
                            window.location.href = `https://phantom.app/ul/browse/${e}?ref=${t}`;
                            return
                        }
                        if (this.readyState !== r.i1.Installed) throw new a.OZ;
                        this._connecting = !0;
                        let t = window.phantom ? .solana || window.solana;
                        if (!t.isConnected) try {
                            await t.connect()
                        } catch (e) {
                            throw new a.$w(e ? .message, e)
                        }
                        if (!t.publicKey) throw new a.cO;
                        try {
                            e = new s.nh(t.publicKey.toBytes())
                        } catch (e) {
                            throw new a.Nx(e ? .message, e)
                        }
                        t.on("disconnect", this._disconnected), t.on("accountChanged", this._accountChanged), this._wallet = t, this._publicKey = e, this.emit("connect", e)
                    } catch (e) {
                        throw this.emit("error", e), e
                    } finally {
                        this._connecting = !1
                    }
                }
                async disconnect() {
                    let e = this._wallet;
                    if (e) {
                        e.off("disconnect", this._disconnected), e.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null;
                        try {
                            await e.disconnect()
                        } catch (e) {
                            this.emit("error", new a.UG(e ? .message, e))
                        }
                    }
                    this.emit("disconnect")
                }
                async sendTransaction(e, t, n = {}) {
                    try {
                        let i = this._wallet;
                        if (!i) throw new a.oS;
                        try {
                            let {
                                signers: r,
                                ...a
                            } = n;
                            (0, o.W)(e) ? r ? .length && e.sign(r) : (e = await this.prepareTransaction(e, t, a), r ? .length && e.partialSign(...r)), a.preflightCommitment = a.preflightCommitment || t.commitment;
                            let {
                                signature: s
                            } = await i.signAndSendTransaction(e, a);
                            return s
                        } catch (e) {
                            if (e instanceof a.lj) throw e;
                            throw new a.IW(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signTransaction(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            return await t.signTransaction(e) || e
                        } catch (e) {
                            throw new a.PY(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signAllTransactions(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            return await t.signAllTransactions(e) || e
                        } catch (e) {
                            throw new a.PY(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signMessage(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            let {
                                signature: n
                            } = await t.signMessage(e);
                            return n
                        } catch (e) {
                            throw new a.fk(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
            }
        },
        38224: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return o
                }
            });
            var i = n(67730),
                r = n(11390),
                a = n(65728);
            let o = ({
                children: e,
                endpoint: t,
                config: n = {
                    commitment: "confirmed"
                }
            }) => {
                let o = (0, r.useMemo)(() => new i.ew(t, n), [t, n]);
                return r.createElement(a.h.Provider, {
                    value: {
                        connection: o
                    }
                }, e)
            }
        },
        57280: function(e, t, n) {
            "use strict";
            let i, r;
            n.d(t, {
                n: function() {
                    return eE
                }
            });
            var a, o, s, c, l, u, d, h, f, p, m, w, y, g, M, N, b, v, T, I, S = n(20832),
                j = n(64198),
                U = n(44631),
                E = n(67730);
            let x = `(?:\\nURI: (?<uri>[^\\n]+))?(?:\\nVersion: (?<version>[^\\n]+))?(?:\\nChain ID: (?<chainId>[^\\n]+))?(?:\\nNonce: (?<nonce>[^\\n]+))?(?:\\nIssued At: (?<issuedAt>[^\\n]+))?(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?(?:\\nNot Before: (?<notBefore>[^\\n]+))?(?:\\nRequest ID: (?<requestId>[^\\n]+))?(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?`;
            RegExp(`^(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n(?<address>[^\\n]+)(?:\\n|$)(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??${x}\\n*$`);
            let D = {
                ERROR_ASSOCIATION_PORT_OUT_OF_RANGE: "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
                ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
                ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
                ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
                ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
                ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
                ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION"
            };
            class L extends Error {
                constructor(...e) {
                    let [t, n, i] = e;
                    super(n), this.code = t, this.data = i, this.name = "SolanaMobileWalletAdapterError"
                }
            }
            class O extends Error {
                constructor(...e) {
                    let [t, n, i, r] = e;
                    super(i), this.code = n, this.data = r, this.jsonRpcMessageId = t, this.name = "SolanaMobileWalletAdapterProtocolError"
                }
            }

            function A(e, t, n, i) {
                return new(n || (n = Promise))(function(r, a) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(o, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }
            let R = "solana:cloneAuthorization";

            function z(e, t) {
                return A(this, void 0, void 0, function*() {
                    let n = e.slice(0, 4),
                        r = e.slice(4, 16),
                        a = e.slice(16),
                        o = yield crypto.subtle.decrypt(C(n, r), t, a);
                    return (void 0 === i && (i = new TextDecoder("utf-8")), i).decode(o)
                })
            }

            function C(e, t) {
                return {
                    additionalData: e,
                    iv: t,
                    name: "AES-GCM",
                    tagLength: 128
                }
            }

            function k(e) {
                if (e < 49152 || e > 65535) throw new L(D.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE, `Association port number must be between 49152 and 65535. ${e} given.`, {
                    port: e
                });
                return e
            }

            function F(e) {
                return e.replace(/(^\/+|\/+$)/g, "").split("/")
            }
            let V = {
                    Firefox: 0,
                    Other: 1
                },
                Q = null,
                W = [150, 150, 200, 500, 500, 750, 750, 1e3];

            function Z(e) {
                return new DataView(e).getUint32(0, !1)
            }
            var B = n(80749);

            function _(e, t) {
                var n = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
                return n
            }

            function P(e, t, n, i) {
                return new(n || (n = Promise))(function(r, a) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(o, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function Y(e) {
                return window.btoa(String.fromCharCode.call(null, ...e))
            }

            function G(e) {
                return new Uint8Array(window.atob(e).split("").map(e => e.charCodeAt(0)))
            }

            function H(e) {
                return Y("version" in e ? e.serialize() : e.serialize({
                    requireAllSignatures: !1,
                    verifySignatures: !1
                }))
            }

            function J(e) {
                let t = e[0] * E.eT + 1;
                return "legacy" === E.EC.deserializeMessageVersion(e.slice(t, e.length)) ? E.YW.from(e) : E.GS.deserialize(e)
            }

            function X(e, t, n, i) {
                return new(n || (n = Promise))(function(r, a) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(o, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function K(e) {
                return new Uint8Array(window.atob(e).split("").map(e => e.charCodeAt(0)))
            }
            let q = "Mobile Wallet Adapter";

            function $(e) {
                return "version" in e
            }
            class ee extends S.qz {
                constructor(e) {
                    var t;
                    super(), this.supportedTransactionVersions = new Set(["legacy", 0]), this.name = q, this.url = "https://solanamobile.com/wallets", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI4IiB3aWR0aD0iMjgiIHZpZXdCb3g9Ii0zIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0RDQjhGRiI+PHBhdGggZD0iTTE3LjQgMTcuNEgxNXYyLjRoMi40di0yLjRabTEuMi05LjZoLTIuNHYyLjRoMi40VjcuOFoiLz48cGF0aCBkPSJNMjEuNiAzVjBoLTIuNHYzaC0zLjZWMGgtMi40djNoLTIuNHY2LjZINC41YTIuMSAyLjEgMCAxIDEgMC00LjJoMi43VjNINC41QTQuNSA0LjUgMCAwIDAgMCA3LjVWMjRoMjEuNnYtNi42aC0yLjR2NC4ySDIuNFYxMS41Yy41LjMgMS4yLjQgMS44LjVoNy41QTYuNiA2LjYgMCAwIDAgMjQgOVYzaC0yLjRabTAgNS43YTQuMiA0LjIgMCAxIDEtOC40IDBWNS40aDguNHYzLjNaIi8+PC9nPjwvc3ZnPg==", this._connecting = !1, this._connectionGeneration = 0, this._readyState = "undefined" != typeof window && window.isSecureContext && "undefined" != typeof document && /android/i.test(navigator.userAgent) ? j.i1.Loadable : j.i1.Unsupported, this._authorizationResultCache = e.authorizationResultCache, this._addressSelector = e.addressSelector, this._appIdentity = e.appIdentity, this._chain = null !== (t = e.chain) && void 0 !== t ? t : e.cluster, this._onWalletNotFound = e.onWalletNotFound, this._readyState !== j.i1.Unsupported && this._authorizationResultCache.get().then(e => {
                        e && this.declareWalletAsInstalled()
                    })
                }
                get publicKey() {
                    if (null == this._publicKey && null != this._selectedAddress) try {
                        this._publicKey = function(e) {
                            let t = K(e);
                            return new E.nh(t)
                        }(this._selectedAddress)
                    } catch (e) {
                        throw new U.Nx(e instanceof Error && (null == e ? void 0 : e.message) || "Unknown error", e)
                    }
                    return this._publicKey ? this._publicKey : null
                }
                get connected() {
                    return !!this._authorizationResult
                }
                get connecting() {
                    return this._connecting
                }
                get readyState() {
                    return this._readyState
                }
                declareWalletAsInstalled() {
                    this._readyState !== j.i1.Installed && this.emit("readyStateChange", this._readyState = j.i1.Installed)
                }
                runWithGuard(e) {
                    return X(this, void 0, void 0, function*() {
                        try {
                            return yield e()
                        } catch (e) {
                            throw this.emit("error", e), e
                        }
                    })
                }
                autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
                    return X(this, void 0, void 0, function*() {
                        return yield this.autoConnect()
                    })
                }
                autoConnect() {
                    return X(this, void 0, void 0, function*() {
                        if (!this.connecting && !this.connected) return yield this.runWithGuard(() => X(this, void 0, void 0, function*() {
                            if (this._readyState !== j.i1.Installed && this._readyState !== j.i1.Loadable) throw new U.OZ;
                            this._connecting = !0;
                            try {
                                let e = yield this._authorizationResultCache.get();
                                e && this.handleAuthorizationResult(e)
                            } catch (e) {
                                throw new U.$w(e instanceof Error && e.message || "Unknown error", e)
                            } finally {
                                this._connecting = !1
                            }
                        }))
                    })
                }
                connect() {
                    return X(this, void 0, void 0, function*() {
                        if (!this.connecting && !this.connected) return yield this.runWithGuard(() => X(this, void 0, void 0, function*() {
                            if (this._readyState !== j.i1.Installed && this._readyState !== j.i1.Loadable) throw new U.OZ;
                            this._connecting = !0;
                            try {
                                yield this.performAuthorization()
                            } catch (e) {
                                throw new U.$w(e instanceof Error && e.message || "Unknown error", e)
                            } finally {
                                this._connecting = !1
                            }
                        }))
                    })
                }
                performAuthorization(e) {
                    return X(this, void 0, void 0, function*() {
                        try {
                            let t = yield this._authorizationResultCache.get();
                            if (t) return this.handleAuthorizationResult(t), t;
                            return yield this.transact(t => X(this, void 0, void 0, function*() {
                                let n = yield t.authorize({
                                    chain: this._chain,
                                    identity: this._appIdentity,
                                    sign_in_payload: e
                                });
                                return Promise.all([this._authorizationResultCache.set(n), this.handleAuthorizationResult(n)]), n
                            }))
                        } catch (e) {
                            throw new U.$w(e instanceof Error && e.message || "Unknown error", e)
                        }
                    })
                }
                handleAuthorizationResult(e) {
                    var t;
                    return X(this, void 0, void 0, function*() {
                        let n = null == this._authorizationResult || (null === (t = this._authorizationResult) || void 0 === t ? void 0 : t.accounts.length) !== e.accounts.length || this._authorizationResult.accounts.some((t, n) => t.address !== e.accounts[n].address);
                        if (this._authorizationResult = e, this.declareWalletAsInstalled(), n) {
                            let t = yield this._addressSelector.select(e.accounts.map(({
                                address: e
                            }) => e));
                            t !== this._selectedAddress && (this._selectedAddress = t, delete this._publicKey, this.emit("connect", this.publicKey))
                        }
                    })
                }
                performReauthorization(e, t) {
                    return X(this, void 0, void 0, function*() {
                        try {
                            let n = yield e.authorize({
                                auth_token: t,
                                identity: this._appIdentity
                            });
                            Promise.all([this._authorizationResultCache.set(n), this.handleAuthorizationResult(n)])
                        } catch (e) {
                            throw this.disconnect(), new U.at(e instanceof Error && (null == e ? void 0 : e.message) || "Unknown error", e)
                        }
                    })
                }
                disconnect() {
                    return X(this, void 0, void 0, function*() {
                        this._authorizationResultCache.clear(), this._connecting = !1, this._connectionGeneration++, delete this._authorizationResult, delete this._publicKey, delete this._selectedAddress, this.emit("disconnect")
                    })
                }
                transact(e) {
                    var t;
                    return X(this, void 0, void 0, function*() {
                        let n = null === (t = this._authorizationResult) || void 0 === t ? void 0 : t.wallet_uri_base,
                            i = this._connectionGeneration;
                        try {
                            return yield function(e, t) {
                                return P(this, void 0, void 0, function*() {
                                    return yield function(e, t) {
                                        return A(this, void 0, void 0, function*() {
                                            let n;
                                            ! function() {
                                                if ("undefined" == typeof window || !0 !== window.isSecureContext) throw new L(D.ERROR_SECURE_CONTEXT_REQUIRED, "The mobile wallet adapter protocol must be used in a secure context (`https`).")
                                            }();
                                            let i = yield function() {
                                                return A(this, void 0, void 0, function*() {
                                                    return yield crypto.subtle.generateKey({
                                                        name: "ECDSA",
                                                        namedCurve: "P-256"
                                                    }, !1, ["sign"])
                                                })
                                            }(), r = yield function(e, t) {
                                                return A(this, void 0, void 0, function*() {
                                                    let n = k(49152 + Math.floor(16384 * Math.random())),
                                                        i = yield function(e, t, n, i = ["v1"]) {
                                                            return A(this, void 0, void 0, function*() {
                                                                let r = k(t),
                                                                    a = function(e) {
                                                                        let t = "",
                                                                            n = new Uint8Array(e),
                                                                            i = n.byteLength;
                                                                        for (let e = 0; e < i; e++) t += String.fromCharCode(n[e]);
                                                                        return window.btoa(t)
                                                                    }((yield crypto.subtle.exportKey("raw", e))),
                                                                    o = function(e, t) {
                                                                        let n = null;
                                                                        if (t) {
                                                                            try {
                                                                                n = new URL(t)
                                                                            } catch (e) {}
                                                                            if ((null == n ? void 0 : n.protocol) !== "https:") throw new L(D.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs")
                                                                        }
                                                                        return n || (n = new URL("solana-wallet:/")), new URL(e.startsWith("/") ? e : [...F(n.pathname), ...F(e)].join("/"), n)
                                                                    }("v1/associate/local", n);
                                                                return o.searchParams.set("association", a.replace(/[/+=]/g, e => ({
                                                                    "/": "_",
                                                                    "+": "-",
                                                                    "=": "."
                                                                })[e])), o.searchParams.set("port", `${r}`), i.forEach(e => {
                                                                    o.searchParams.set("v", e)
                                                                }), o
                                                            })
                                                        }(e, n, t);
                                                    if ("https:" === i.protocol) window.location.assign(i);
                                                    else try {
                                                        switch (-1 !== navigator.userAgent.indexOf("Firefox/") ? V.Firefox : V.Other) {
                                                            case V.Firefox:
                                                                null == Q && ((Q = document.createElement("iframe")).style.display = "none", document.body.appendChild(Q)), Q.contentWindow.location.href = i.toString();
                                                                break;
                                                            case V.Other:
                                                                {
                                                                    let e = new Promise((e, t) => {
                                                                        function n() {
                                                                            clearTimeout(r), window.removeEventListener("blur", i)
                                                                        }

                                                                        function i() {
                                                                            n(), e()
                                                                        }
                                                                        window.addEventListener("blur", i);
                                                                        let r = setTimeout(() => {
                                                                            n(), t()
                                                                        }, 2e3)
                                                                    });window.location.assign(i),
                                                                    yield e
                                                                }
                                                        }
                                                    } catch (e) {
                                                        throw new L(D.ERROR_WALLET_NOT_FOUND, "Found no installed wallet that supports the mobile wallet protocol.")
                                                    }
                                                    return n
                                                })
                                            }(i.publicKey, null == t ? void 0 : t.baseUri), a = `ws://localhost:${r}/solana-wallet`, o = (() => {
                                                let e = [...W];
                                                return () => e.length > 1 ? e.shift() : e[0]
                                            })(), s = 1, c = 0, l = {
                                                __type: "disconnected"
                                            };
                                            return new Promise((t, u) => {
                                                let d, h, f;
                                                let p = {},
                                                    m = () => A(this, void 0, void 0, function*() {
                                                        if ("connecting" !== l.__type) {
                                                            console.warn(`Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${l.__type}\`.`);
                                                            return
                                                        }
                                                        let {
                                                            associationKeypair: e
                                                        } = l;
                                                        d.removeEventListener("open", m);
                                                        let t = yield function() {
                                                            return A(this, void 0, void 0, function*() {
                                                                return yield crypto.subtle.generateKey({
                                                                    name: "ECDH",
                                                                    namedCurve: "P-256"
                                                                }, !1, ["deriveKey", "deriveBits"])
                                                            })
                                                        }();
                                                        d.send((yield function(e, t) {
                                                            return A(this, void 0, void 0, function*() {
                                                                let n = yield crypto.subtle.exportKey("raw", e), i = yield crypto.subtle.sign({
                                                                    hash: "SHA-256",
                                                                    name: "ECDSA"
                                                                }, t, n), r = new Uint8Array(n.byteLength + i.byteLength);
                                                                return r.set(new Uint8Array(n), 0), r.set(new Uint8Array(i), n.byteLength), r
                                                            })
                                                        }(t.publicKey, e.privateKey))), l = {
                                                            __type: "hello_req_sent",
                                                            associationPublicKey: e.publicKey,
                                                            ecdhPrivateKey: t.privateKey
                                                        }
                                                    }),
                                                    w = e => {
                                                        e.wasClean ? l = {
                                                            __type: "disconnected"
                                                        } : u(new L(D.ERROR_SESSION_CLOSED, `The wallet session dropped unexpectedly (${e.code}: ${e.reason}).`, {
                                                            closeEvent: e
                                                        })), h()
                                                    },
                                                    y = e => A(this, void 0, void 0, function*() {
                                                        h(), Date.now() - n >= 3e4 ? u(new L(D.ERROR_SESSION_TIMEOUT, `Failed to connect to the wallet websocket on port ${r}.`)) : (yield new Promise(e => {
                                                            let t = o();
                                                            f = window.setTimeout(e, t)
                                                        }), M())
                                                    }),
                                                    g = n => A(this, void 0, void 0, function*() {
                                                        let i = yield n.data.arrayBuffer();
                                                        switch (l.__type) {
                                                            case "connected":
                                                                try {
                                                                    let e = i.slice(0, 4),
                                                                        t = Z(e);
                                                                    if (t !== c + 1) throw Error("Encrypted message has invalid sequence number");
                                                                    c = t;
                                                                    let n = yield function(e, t) {
                                                                        return A(this, void 0, void 0, function*() {
                                                                            let n = JSON.parse((yield z(e, t)));
                                                                            if (Object.hasOwnProperty.call(n, "error")) throw new O(n.id, n.error.code, n.error.message);
                                                                            return n
                                                                        })
                                                                    }(i, l.sharedSecret), r = p[n.id];
                                                                    delete p[n.id], r.resolve(n.result)
                                                                } catch (e) {
                                                                    if (e instanceof O) {
                                                                        let t = p[e.jsonRpcMessageId];
                                                                        delete p[e.jsonRpcMessageId], t.reject(e)
                                                                    } else throw e
                                                                }
                                                                break;
                                                            case "hello_req_sent":
                                                                {
                                                                    var r, a;
                                                                    let n = yield function(e, t, n) {
                                                                        return A(this, void 0, void 0, function*() {
                                                                            let [i, r] = yield Promise.all([crypto.subtle.exportKey("raw", t), crypto.subtle.importKey("raw", e.slice(0, 65), {
                                                                                name: "ECDH",
                                                                                namedCurve: "P-256"
                                                                            }, !1, [])]), a = yield crypto.subtle.deriveBits({
                                                                                name: "ECDH",
                                                                                public: r
                                                                            }, n, 256), o = yield crypto.subtle.importKey("raw", a, "HKDF", !1, ["deriveKey"]);
                                                                            return yield crypto.subtle.deriveKey({
                                                                                name: "HKDF",
                                                                                hash: "SHA-256",
                                                                                salt: new Uint8Array(i),
                                                                                info: new Uint8Array
                                                                            }, o, {
                                                                                name: "AES-GCM",
                                                                                length: 128
                                                                            }, !1, ["encrypt", "decrypt"])
                                                                        })
                                                                    }(i, l.associationPublicKey, l.ecdhPrivateKey), o = i.slice(65), f = 0 !== o.byteLength ? yield A(this, void 0, void 0, function*() {
                                                                        let e = Z(o.slice(0, 4));
                                                                        if (e !== c + 1) throw Error("Encrypted message has invalid sequence number");
                                                                        return c = e,
                                                                            function(e, t) {
                                                                                return A(this, void 0, void 0, function*() {
                                                                                    let n = JSON.parse((yield z(e, t))),
                                                                                        i = "legacy";
                                                                                    if (Object.hasOwnProperty.call(n, "v")) switch (n.v) {
                                                                                        case 1:
                                                                                        case "1":
                                                                                        case "v1":
                                                                                            i = "v1";
                                                                                            break;
                                                                                        case "legacy":
                                                                                            i = "legacy";
                                                                                            break;
                                                                                        default:
                                                                                            throw new L(D.ERROR_INVALID_PROTOCOL_VERSION, `Unknown/unsupported protocol version: ${n.v}`)
                                                                                    }
                                                                                    return {
                                                                                        protocol_version: i
                                                                                    }
                                                                                })
                                                                            }(o, n)
                                                                    }): {
                                                                        protocol_version: "legacy"
                                                                    };l = {
                                                                        __type: "connected",
                                                                        sharedSecret: n,
                                                                        sessionProperties: f
                                                                    };
                                                                    let m = (r = f.protocol_version, a = (e, t) => A(this, void 0, void 0, function*() {
                                                                        let i = s++;
                                                                        return d.send((yield function(e, t) {
                                                                            return A(this, void 0, void 0, function*() {
                                                                                let n = JSON.stringify(e);
                                                                                return function(e, t, n) {
                                                                                    return A(this, void 0, void 0, function*() {
                                                                                        let i = function(e) {
                                                                                                if (e >= 4294967296) throw Error("Outbound sequence number overflow. The maximum sequence number is 32-bytes.");
                                                                                                let t = new ArrayBuffer(4);
                                                                                                return new DataView(t).setUint32(0, e, !1), new Uint8Array(t)
                                                                                            }(t),
                                                                                            r = new Uint8Array(12);
                                                                                        crypto.getRandomValues(r);
                                                                                        let a = yield crypto.subtle.encrypt(C(i, r), n, new TextEncoder().encode(e)), o = new Uint8Array(i.byteLength + r.byteLength + a.byteLength);
                                                                                        return o.set(new Uint8Array(i), 0), o.set(new Uint8Array(r), i.byteLength), o.set(new Uint8Array(a), i.byteLength + r.byteLength), o
                                                                                    })
                                                                                }(n, e.id, t)
                                                                            })
                                                                        }({
                                                                            id: i,
                                                                            jsonrpc: "2.0",
                                                                            method: e,
                                                                            params: null != t ? t : {}
                                                                        }, n))), new Promise((t, n) => {
                                                                            p[i] = {
                                                                                resolve(i) {
                                                                                    switch (e) {
                                                                                        case "authorize":
                                                                                        case "reauthorize":
                                                                                            {
                                                                                                let {
                                                                                                    wallet_uri_base: e
                                                                                                } = i;
                                                                                                if (null != e) try {
                                                                                                    ! function(e) {
                                                                                                        let t;
                                                                                                        try {
                                                                                                            t = new URL(e)
                                                                                                        } catch (e) {
                                                                                                            throw new L(D.ERROR_FORBIDDEN_WALLET_BASE_URL, "Invalid base URL supplied by wallet")
                                                                                                        }
                                                                                                        if ("https:" !== t.protocol) throw new L(D.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs")
                                                                                                    }(e)
                                                                                                } catch (e) {
                                                                                                    n(e);
                                                                                                    return
                                                                                                }
                                                                                            }
                                                                                    }
                                                                                    t(i)
                                                                                },
                                                                                reject: n
                                                                            }
                                                                        })
                                                                    }), new Proxy({}, {
                                                                        get: (e, t) => (null == e[t] && (e[t] = function(e) {
                                                                            return A(this, void 0, void 0, function*() {
                                                                                let {
                                                                                    method: n,
                                                                                    params: i
                                                                                } = function(e, t, n) {
                                                                                    let i = t,
                                                                                        r = e.toString().replace(/[A-Z]/g, e => `_${e.toLowerCase()}`).toLowerCase();
                                                                                    switch (e) {
                                                                                        case "authorize":
                                                                                            {
                                                                                                let {
                                                                                                    chain: e
                                                                                                } = i;
                                                                                                if ("legacy" === n) {
                                                                                                    switch (e) {
                                                                                                        case "solana:testnet":
                                                                                                            e = "testnet";
                                                                                                            break;
                                                                                                        case "solana:devnet":
                                                                                                            e = "devnet";
                                                                                                            break;
                                                                                                        case "solana:mainnet":
                                                                                                            e = "mainnet-beta";
                                                                                                            break;
                                                                                                        default:
                                                                                                            e = i.cluster
                                                                                                    }
                                                                                                    i.cluster = e
                                                                                                } else {
                                                                                                    switch (e) {
                                                                                                        case "testnet":
                                                                                                        case "devnet":
                                                                                                            e = `solana:${e}`;
                                                                                                            break;
                                                                                                        case "mainnet-beta":
                                                                                                            e = "solana:mainnet"
                                                                                                    }
                                                                                                    i.chain = e
                                                                                                }
                                                                                            }
                                                                                        case "reauthorize":
                                                                                            {
                                                                                                let {
                                                                                                    auth_token: e,
                                                                                                    identity: t
                                                                                                } = i;e && ("legacy" === n ? (r = "reauthorize", i = {
                                                                                                    auth_token: e,
                                                                                                    identity: t
                                                                                                }) : r = "authorize")
                                                                                            }
                                                                                    }
                                                                                    return {
                                                                                        method: r,
                                                                                        params: i
                                                                                    }
                                                                                }(t, e, r), o = yield a(n, i);
                                                                                return "authorize" === n && i.sign_in_payload && !o.sign_in_result && (o.sign_in_result = yield function(e, t, n) {
                                                                                        var i;
                                                                                        return A(this, void 0, void 0, function*() {
                                                                                            var r, a;
                                                                                            let o = null !== (i = e.domain) && void 0 !== i ? i : window.location.host,
                                                                                                s = t.accounts[0].address,
                                                                                                c = (r = Object.assign(Object.assign({}, e), {
                                                                                                    domain: o,
                                                                                                    address: s
                                                                                                }), a = function(e) {
                                                                                                    let t = `${e.domain} wants you to sign in with your Solana account:
`;
                                                                                                    t += `${e.address}`, e.statement && (t += `

${e.statement}`);
                                                                                                    let n = [];
                                                                                                    if (e.uri && n.push(`URI: ${e.uri}`), e.version && n.push(`Version: ${e.version}`), e.chainId && n.push(`Chain ID: ${e.chainId}`), e.nonce && n.push(`Nonce: ${e.nonce}`), e.issuedAt && n.push(`Issued At: ${e.issuedAt}`), e.expirationTime && n.push(`Expiration Time: ${e.expirationTime}`), e.notBefore && n.push(`Not Before: ${e.notBefore}`), e.requestId && n.push(`Request ID: ${e.requestId}`), e.resources)
                                                                                                        for (let t of (n.push("Resources:"), e.resources)) n.push(`- ${t}`);
                                                                                                    return n.length && (t += `

${n.join("\n")}`), t
                                                                                                }(r), window.btoa(a)),
                                                                                                l = yield n("sign_messages", {
                                                                                                    addresses: [s],
                                                                                                    payloads: [c]
                                                                                                });
                                                                                            return {
                                                                                                address: s,
                                                                                                signed_message: c,
                                                                                                signature: l.signed_payloads[0].slice(c.length)
                                                                                            }
                                                                                        })
                                                                                    }(i.sign_in_payload, o, a)),
                                                                                    function(e, t, n) {
                                                                                        if ("getCapabilities" === e) switch (n) {
                                                                                            case "legacy":
                                                                                                {
                                                                                                    let e = ["solana:signTransactions"];
                                                                                                    return !0 === t.supports_clone_authorization && e.push(R),
                                                                                                    Object.assign(Object.assign({}, t), {
                                                                                                        features: e
                                                                                                    })
                                                                                                }
                                                                                            case "v1":
                                                                                                return Object.assign(Object.assign({}, t), {
                                                                                                    supports_sign_and_send_transactions: !0,
                                                                                                    supports_clone_authorization: t.features.includes(R)
                                                                                                })
                                                                                        }
                                                                                        return t
                                                                                    }(t, o, r)
                                                                            })
                                                                        }), e[t]),
                                                                        defineProperty: () => !1,
                                                                        deleteProperty: () => !1
                                                                    }));
                                                                    try {
                                                                        t((yield e(m)))
                                                                    } catch (e) {
                                                                        u(e)
                                                                    } finally {
                                                                        h(), d.close()
                                                                    }
                                                                }
                                                        }
                                                    }),
                                                    M = () => {
                                                        h && h(), l = {
                                                            __type: "connecting",
                                                            associationKeypair: i
                                                        }, void 0 === n && (n = Date.now()), (d = new WebSocket(a, ["com.solana.mobilewalletadapter.v1"])).addEventListener("open", m), d.addEventListener("close", w), d.addEventListener("error", y), d.addEventListener("message", g), h = () => {
                                                            window.clearTimeout(f), d.removeEventListener("open", m), d.removeEventListener("close", w), d.removeEventListener("error", y), d.removeEventListener("message", g)
                                                        }
                                                    };
                                                M()
                                            })
                                        })
                                    }(t => e(new Proxy({}, {
                                        get(e, n) {
                                            if (null == e[n]) switch (n) {
                                                case "signAndSendTransactions":
                                                    e[n] = function(e) {
                                                        var {
                                                            minContextSlot: n,
                                                            commitment: i,
                                                            skipPreflight: r,
                                                            maxRetries: a,
                                                            waitForCommitmentToSendNextTransaction: o,
                                                            transactions: s
                                                        } = e, c = _(e, ["minContextSlot", "commitment", "skipPreflight", "maxRetries", "waitForCommitmentToSendNextTransaction", "transactions"]);
                                                        return P(this, void 0, void 0, function*() {
                                                            let e = s.map(H),
                                                                l = {
                                                                    min_context_slot: n,
                                                                    commitment: i,
                                                                    skip_preflight: r,
                                                                    max_retries: a,
                                                                    wait_for_commitment_to_send_next_transaction: o
                                                                },
                                                                {
                                                                    signatures: u
                                                                } = yield t.signAndSendTransactions(Object.assign(Object.assign(Object.assign({}, c), Object.values(l).some(e => null != e) ? {
                                                                    options: l
                                                                } : null), {
                                                                    payloads: e
                                                                }));
                                                            return u.map(G).map(B.encode)
                                                        })
                                                    };
                                                    break;
                                                case "signMessages":
                                                    e[n] = function(e) {
                                                        var {
                                                            payloads: n
                                                        } = e, i = _(e, ["payloads"]);
                                                        return P(this, void 0, void 0, function*() {
                                                            let e = n.map(Y),
                                                                {
                                                                    signed_payloads: r
                                                                } = yield t.signMessages(Object.assign(Object.assign({}, i), {
                                                                    payloads: e
                                                                }));
                                                            return r.map(G)
                                                        })
                                                    };
                                                    break;
                                                case "signTransactions":
                                                    e[n] = function(e) {
                                                        var {
                                                            transactions: n
                                                        } = e, i = _(e, ["transactions"]);
                                                        return P(this, void 0, void 0, function*() {
                                                            let e = n.map(H),
                                                                {
                                                                    signed_payloads: r
                                                                } = yield t.signTransactions(Object.assign(Object.assign({}, i), {
                                                                    payloads: e
                                                                }));
                                                            return r.map(G).map(J)
                                                        })
                                                    };
                                                    break;
                                                default:
                                                    e[n] = t[n]
                                            }
                                            return e[n]
                                        },
                                        defineProperty: () => !1,
                                        deleteProperty: () => !1
                                    })), t)
                                })
                            }(e, n ? {
                                baseUri: n
                            } : void 0)
                        } catch (e) {
                            throw this._connectionGeneration !== i && (yield new Promise(() => {})), e instanceof Error && "SolanaMobileWalletAdapterError" === e.name && "ERROR_WALLET_NOT_FOUND" === e.code && (yield this._onWalletNotFound(this)), e
                        }
                    })
                }
                assertIsAuthorized() {
                    if (!this._authorizationResult || !this._selectedAddress) throw new U.oS;
                    return {
                        authToken: this._authorizationResult.auth_token,
                        selectedAddress: this._selectedAddress
                    }
                }
                performSignTransactions(e) {
                    return X(this, void 0, void 0, function*() {
                        let {
                            authToken: t
                        } = this.assertIsAuthorized();
                        try {
                            return yield this.transact(n => X(this, void 0, void 0, function*() {
                                return yield this.performReauthorization(n, t), yield n.signTransactions({
                                    transactions: e
                                })
                            }))
                        } catch (e) {
                            throw new U.PY(null == e ? void 0 : e.message, e)
                        }
                    })
                }
                sendTransaction(e, t, n) {
                    return X(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => X(this, void 0, void 0, function*() {
                            let {
                                authToken: i
                            } = this.assertIsAuthorized(), r = null == n ? void 0 : n.minContextSlot;
                            try {
                                return yield this.transact(a => X(this, void 0, void 0, function*() {
                                    function o() {
                                        let e, i;
                                        switch (t.commitment) {
                                            case "confirmed":
                                            case "finalized":
                                            case "processed":
                                                e = t.commitment;
                                                break;
                                            default:
                                                e = "finalized"
                                        }
                                        switch (null == n ? void 0 : n.preflightCommitment) {
                                            case "confirmed":
                                            case "finalized":
                                            case "processed":
                                                i = n.preflightCommitment;
                                                break;
                                            case void 0:
                                                i = e;
                                                break;
                                            default:
                                                i = "finalized"
                                        }
                                        let r = "finalized" === i ? 2 : "confirmed" === i ? 1 : 0,
                                            a = "finalized" === e ? 2 : "confirmed" === e ? 1 : 0;
                                        return r < a ? i : e
                                    }
                                    let [s, c, l] = yield Promise.all([a.getCapabilities(), this.performReauthorization(a, i), $(e) ? null : X(this, void 0, void 0, function*() {
                                        var n;
                                        if (e.feePayer || (e.feePayer = null !== (n = this.publicKey) && void 0 !== n ? n : void 0), null == e.recentBlockhash) {
                                            let {
                                                blockhash: n
                                            } = yield t.getLatestBlockhash({
                                                commitment: o()
                                            });
                                            e.recentBlockhash = n
                                        }
                                    })]);
                                    if (s.supports_sign_and_send_transactions) return (yield a.signAndSendTransactions({
                                        minContextSlot: r,
                                        transactions: [e]
                                    }))[0]; {
                                        let [i] = yield a.signTransactions({
                                            transactions: [e]
                                        });
                                        if ($(i)) return yield t.sendTransaction(i); {
                                            let e = i.serialize();
                                            return yield t.sendRawTransaction(e, Object.assign(Object.assign({}, n), {
                                                preflightCommitment: o()
                                            }))
                                        }
                                    }
                                }))
                            } catch (e) {
                                throw new U.IW(null == e ? void 0 : e.message, e)
                            }
                        }))
                    })
                }
                signTransaction(e) {
                    return X(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => X(this, void 0, void 0, function*() {
                            let [t] = yield this.performSignTransactions([e]);
                            return t
                        }))
                    })
                }
                signAllTransactions(e) {
                    return X(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => X(this, void 0, void 0, function*() {
                            return yield this.performSignTransactions(e)
                        }))
                    })
                }
                signMessage(e) {
                    return X(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => X(this, void 0, void 0, function*() {
                            let {
                                authToken: t,
                                selectedAddress: n
                            } = this.assertIsAuthorized();
                            try {
                                return yield this.transact(i => X(this, void 0, void 0, function*() {
                                    yield this.performReauthorization(i, t);
                                    let [r] = yield i.signMessages({
                                        addresses: [n],
                                        payloads: [e]
                                    });
                                    return r.slice(-64)
                                }))
                            } catch (e) {
                                throw new U.fk(null == e ? void 0 : e.message, e)
                            }
                        }))
                    })
                }
                signIn(e) {
                    return X(this, void 0, void 0, function*() {
                        return yield this.runWithGuard(() => X(this, void 0, void 0, function*() {
                            var t, n;
                            if (this._readyState !== j.i1.Installed && this._readyState !== j.i1.Loadable) throw new U.OZ;
                            this._connecting = !0;
                            try {
                                let i = yield this.performAuthorization(Object.assign(Object.assign({}, e), {
                                    domain: null !== (t = null == e ? void 0 : e.domain) && void 0 !== t ? t : window.location.host
                                }));
                                if (!i.sign_in_result) throw Error("Sign in failed, no sign in result returned by wallet");
                                let r = i.sign_in_result.address;
                                return {
                                    account: Object.assign(Object.assign({}, null !== (n = i.accounts.find(e => e.address == r)) && void 0 !== n ? n : {
                                        address: r
                                    }), {
                                        publicKey: K(r)
                                    }),
                                    signedMessage: K(i.sign_in_result.signed_message),
                                    signature: K(i.sign_in_result.signature)
                                }
                            } catch (e) {
                                throw new U.$w(e instanceof Error && e.message || "Unknown error", e)
                            } finally {
                                this._connecting = !1
                            }
                        }))
                    })
                }
            }
            let et = "SolanaMobileWalletAdapterDefaultAuthorizationCache";

            function en(e) {
                return X(this, void 0, void 0, function*() {
                    "undefined" != typeof window && window.location.assign(e.url)
                })
            }
            var ei = n(12658),
                er = n(91684),
                ea = n(27496),
                eo = n(55034);
            let es = function(e) {
                return ea.V in e.features && eo.k in e.features && (ei.G in e.features || er.R in e.features)
            };
            var ec = n(55409),
                el = n(56773);
            let eu = "solana:signIn";
            var ed = n(97287);

            function eh(e) {
                switch (e) {
                    case "processed":
                    case "confirmed":
                    case "finalized":
                    case void 0:
                        return e;
                    case "recent":
                        return "processed";
                    case "single":
                    case "singleGossip":
                        return "confirmed";
                    case "max":
                    case "root":
                        return "finalized";
                    default:
                        return
                }
            }
            var ef = n(86893),
                ep = n(49984),
                em = n(80206),
                ew = function(e, t, n, i, r) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                },
                ey = function(e, t, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                };
            class eg extends j.mI {
                constructor({
                    wallet: e
                }) {
                    super(), o.add(this), s.set(this, void 0), c.set(this, void 0), l.set(this, void 0), u.set(this, void 0), d.set(this, void 0), h.set(this, void 0), f.set(this, void 0), p.set(this, "undefined" == typeof window || "undefined" == typeof document ? j.i1.Unsupported : j.i1.Installed), M.set(this, e => {
                        if ("accounts" in e) {
                            let e = ey(this, f, "f").accounts[0];
                            ey(this, s, "f") && !ey(this, u, "f") && e !== ey(this, s, "f") && (e ? ey(this, o, "m", w).call(this, e) : (this.emit("error", new U.at), ey(this, o, "m", y).call(this)))
                        }
                        "features" in e && ey(this, o, "m", g).call(this)
                    }), ew(this, f, e, "f"), ew(this, s, null, "f"), ew(this, c, null, "f"), ew(this, l, !1, "f"), ew(this, u, !1, "f"), ew(this, d, ey(this, f, "f").features[eo.k].on("change", ey(this, M, "f")), "f"), ey(this, o, "m", g).call(this)
                }
                get name() {
                    return ey(this, f, "f").name
                }
                get url() {
                    return "https://github.com/solana-labs/wallet-standard"
                }
                get icon() {
                    return ey(this, f, "f").icon
                }
                get readyState() {
                    return ey(this, p, "f")
                }
                get publicKey() {
                    return ey(this, c, "f")
                }
                get connecting() {
                    return ey(this, l, "f")
                }
                get supportedTransactionVersions() {
                    return ey(this, h, "f")
                }
                get wallet() {
                    return ey(this, f, "f")
                }
                get standard() {
                    return !0
                }
                destroy() {
                    ew(this, s, null, "f"), ew(this, c, null, "f"), ew(this, l, !1, "f"), ew(this, u, !1, "f");
                    let e = ey(this, d, "f");
                    e && (ew(this, d, null, "f"), e())
                }
                async autoConnect() {
                    return ey(this, o, "m", m).call(this, {
                        silent: !0
                    })
                }
                async connect() {
                    return ey(this, o, "m", m).call(this)
                }
                async disconnect() {
                    if (ef.R in ey(this, f, "f").features) try {
                        ew(this, u, !0, "f"), await ey(this, f, "f").features[ef.R].disconnect()
                    } catch (e) {
                        this.emit("error", new U.UG(e ? .message, e))
                    } finally {
                        ew(this, u, !1, "f")
                    }
                    ey(this, o, "m", y).call(this)
                }
                async sendTransaction(e, t, n = {}) {
                    try {
                        var i;
                        let r;
                        let a = ey(this, s, "f");
                        if (!a) throw new U.oS;
                        if (ei.G in ey(this, f, "f").features) {
                            if (a.features.includes(ei.G)) r = ei.G;
                            else if (er.R in ey(this, f, "f").features && a.features.includes(er.R)) r = er.R;
                            else throw new U.cO
                        } else if (er.R in ey(this, f, "f").features) {
                            if (!a.features.includes(er.R)) throw new U.cO;
                            r = er.R
                        } else throw new U.p6;
                        let o = (i = t.rpcEndpoint).includes("https://api.mainnet-beta.solana.com") ? ed.aI : /\bdevnet\b/i.test(i) ? ed.BR : /\btestnet\b/i.test(i) ? ed.gv : /\blocalhost\b/i.test(i) || /\b127\.0\.0\.1\b/.test(i) ? ed.l1 : ed.aI;
                        if (!a.chains.includes(o)) throw new U.IW;
                        try {
                            let i;
                            let {
                                signers: s,
                                ...c
                            } = n;
                            if ((0, ec.W)(e) ? (s ? .length && e.sign(s), i = e.serialize()) : (e = await this.prepareTransaction(e, t, c), s ? .length && e.partialSign(...s), i = new Uint8Array(e.serialize({
                                    requireAllSignatures: !1,
                                    verifySignatures: !1
                                }))), r === ei.G) {
                                let [e] = await ey(this, f, "f").features[ei.G].signAndSendTransaction({
                                    account: a,
                                    chain: o,
                                    transaction: i,
                                    options: {
                                        preflightCommitment: eh(c.preflightCommitment || t.commitment),
                                        skipPreflight: c.skipPreflight,
                                        maxRetries: c.maxRetries,
                                        minContextSlot: c.minContextSlot
                                    }
                                });
                                return em.Z.encode(e.signature)
                            } {
                                let [e] = await ey(this, f, "f").features[er.R].signTransaction({
                                    account: a,
                                    chain: o,
                                    transaction: i,
                                    options: {
                                        preflightCommitment: eh(c.preflightCommitment || t.commitment),
                                        minContextSlot: c.minContextSlot
                                    }
                                });
                                return await t.sendRawTransaction(e.signedTransaction, { ...c,
                                    preflightCommitment: eh(c.preflightCommitment || t.commitment)
                                })
                            }
                        } catch (e) {
                            if (e instanceof U.lj) throw e;
                            throw new U.IW(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
            }
            s = new WeakMap, c = new WeakMap, l = new WeakMap, u = new WeakMap, d = new WeakMap, h = new WeakMap, f = new WeakMap, p = new WeakMap, M = new WeakMap, o = new WeakSet, m = async function(e) {
                try {
                    if (this.connected || this.connecting) return;
                    if (ey(this, p, "f") !== j.i1.Installed) throw new U.OZ;
                    if (ew(this, l, !0, "f"), !ey(this, f, "f").accounts.length) try {
                        await ey(this, f, "f").features[ea.V].connect(e)
                    } catch (e) {
                        throw new U.$w(e ? .message, e)
                    }
                    let t = ey(this, f, "f").accounts[0];
                    if (!t) throw new U.cO;
                    ey(this, o, "m", w).call(this, t)
                } catch (e) {
                    throw this.emit("error", e), e
                } finally {
                    ew(this, l, !1, "f")
                }
            }, w = function(e) {
                let t;
                try {
                    t = new E.nh(e.address)
                } catch (e) {
                    throw new U.Nx(e ? .message, e)
                }
                ew(this, s, e, "f"), ew(this, c, t, "f"), ey(this, o, "m", g).call(this), this.emit("connect", t)
            }, y = function() {
                ew(this, s, null, "f"), ew(this, c, null, "f"), ey(this, o, "m", g).call(this), this.emit("disconnect")
            }, g = function() {
                let e = ei.G in ey(this, f, "f").features ? ey(this, f, "f").features[ei.G].supportedTransactionVersions : ey(this, f, "f").features[er.R].supportedTransactionVersions;
                ew(this, h, (0, ep.cO)(e, ["legacy"]) ? null : new Set(e), "f"), er.R in ey(this, f, "f").features && ey(this, s, "f") ? .features.includes(er.R) ? (this.signTransaction = ey(this, o, "m", N), this.signAllTransactions = ey(this, o, "m", b)) : (delete this.signTransaction, delete this.signAllTransactions), el.g in ey(this, f, "f").features && ey(this, s, "f") ? .features.includes(el.g) ? this.signMessage = ey(this, o, "m", v) : delete this.signMessage, eu in ey(this, f, "f").features ? this.signIn = ey(this, o, "m", T) : delete this.signIn
            }, N = async function(e) {
                try {
                    let t = ey(this, s, "f");
                    if (!t) throw new U.oS;
                    if (!(er.R in ey(this, f, "f").features)) throw new U.p6;
                    if (!t.features.includes(er.R)) throw new U.cO;
                    try {
                        let n = (await ey(this, f, "f").features[er.R].signTransaction({
                            account: t,
                            transaction: (0, ec.W)(e) ? e.serialize() : new Uint8Array(e.serialize({
                                requireAllSignatures: !1,
                                verifySignatures: !1
                            }))
                        }))[0].signedTransaction;
                        return (0, ec.W)(e) ? E.GS.deserialize(n) : E.YW.from(n)
                    } catch (e) {
                        if (e instanceof U.lj) throw e;
                        throw new U.PY(e ? .message, e)
                    }
                } catch (e) {
                    throw this.emit("error", e), e
                }
            }, b = async function(e) {
                try {
                    let t = ey(this, s, "f");
                    if (!t) throw new U.oS;
                    if (!(er.R in ey(this, f, "f").features)) throw new U.p6;
                    if (!t.features.includes(er.R)) throw new U.cO;
                    try {
                        let n = await ey(this, f, "f").features[er.R].signTransaction(...e.map(e => ({
                            account: t,
                            transaction: (0, ec.W)(e) ? e.serialize() : new Uint8Array(e.serialize({
                                requireAllSignatures: !1,
                                verifySignatures: !1
                            }))
                        })));
                        return e.map((e, t) => {
                            let i = n[t].signedTransaction;
                            return (0, ec.W)(e) ? E.GS.deserialize(i) : E.YW.from(i)
                        })
                    } catch (e) {
                        throw new U.PY(e ? .message, e)
                    }
                } catch (e) {
                    throw this.emit("error", e), e
                }
            }, v = async function(e) {
                try {
                    let t = ey(this, s, "f");
                    if (!t) throw new U.oS;
                    if (!(el.g in ey(this, f, "f").features)) throw new U.p6;
                    if (!t.features.includes(el.g)) throw new U.cO;
                    try {
                        return (await ey(this, f, "f").features[el.g].signMessage({
                            account: t,
                            message: e
                        }))[0].signature
                    } catch (e) {
                        throw new U.fk(e ? .message, e)
                    }
                } catch (e) {
                    throw this.emit("error", e), e
                }
            }, T = async function(e = {}) {
                try {
                    let t;
                    if (!(eu in ey(this, f, "f").features)) throw new U.p6;
                    try {
                        [t] = await ey(this, f, "f").features[eu].signIn(e)
                    } catch (e) {
                        throw new U.bD(e ? .message, e)
                    }
                    if (!t) throw new U.bD;
                    return ey(this, o, "m", w).call(this, t.account), t
                } catch (e) {
                    throw this.emit("error", e), e
                }
            };
            var eM = n(81275),
                eN = n(11390);

            function eb(e) {
                let t = (0, eN.useRef)();
                return t.current || (t.current = {
                    value: e()
                }), t.current.value
            }

            function ev(e) {
                return e.filter(es).map(e => new eg({
                    wallet: e
                }))
            }(a = I || (I = {}))[a.DESKTOP_WEB = 0] = "DESKTOP_WEB", a[a.MOBILE_WEB = 1] = "MOBILE_WEB";
            var eT = n(65728);
            class eI extends U.lj {
                constructor() {
                    super(...arguments), this.name = "WalletNotSelectedError"
                }
            }
            var eS = n(21206);

            function ej({
                children: e,
                wallets: t,
                adapter: n,
                isUnloadingRef: i,
                onAutoConnectRequest: r,
                onConnectError: a,
                onError: o,
                onSelectWallet: s
            }) {
                let c = (0, eN.useRef)(!1),
                    [l, u] = (0, eN.useState)(!1),
                    d = (0, eN.useRef)(!1),
                    [h, f] = (0, eN.useState)(!1),
                    [p, m] = (0, eN.useState)(() => n ? .publicKey ? ? null),
                    [w, y] = (0, eN.useState)(() => n ? .connected ? ? !1),
                    g = (0, eN.useRef)(o);
                (0, eN.useEffect)(() => (g.current = o, () => {
                    g.current = void 0
                }), [o]);
                let M = (0, eN.useRef)((e, t) => (!i.current && (g.current ? g.current(e, t) : (console.error(e, t), e instanceof U.OZ && "undefined" != typeof window && t && window.open(t.url, "_blank"))), e)),
                    [N, b] = (0, eN.useState)(() => t.map(e => ({
                        adapter: e,
                        readyState: e.readyState
                    })).filter(({
                        readyState: e
                    }) => e !== j.i1.Unsupported));
                (0, eN.useEffect)(() => {
                    function e(e) {
                        b(t => {
                            let n = t.findIndex(({
                                adapter: e
                            }) => e === this);
                            if (-1 === n) return t;
                            let {
                                adapter: i
                            } = t[n];
                            return [...t.slice(0, n), {
                                adapter: i,
                                readyState: e
                            }, ...t.slice(n + 1)].filter(({
                                readyState: e
                            }) => e !== j.i1.Unsupported)
                        })
                    }
                    return b(e => t.map((t, n) => {
                        let i = e[n];
                        return i && i.adapter === t && i.readyState === t.readyState ? i : {
                            adapter: t,
                            readyState: t.readyState
                        }
                    }).filter(({
                        readyState: e
                    }) => e !== j.i1.Unsupported)), t.forEach(t => t.on("readyStateChange", e, t)), () => {
                        t.forEach(t => t.off("readyStateChange", e, t))
                    }
                }, [n, t]);
                let v = (0, eN.useMemo)(() => N.find(e => e.adapter === n) ? ? null, [n, N]);
                (0, eN.useEffect)(() => {
                    if (!n) return;
                    let e = e => {
                            m(e), c.current = !1, u(!1), y(!0), d.current = !1, f(!1)
                        },
                        t = () => {
                            i.current || (m(null), c.current = !1, u(!1), y(!1), d.current = !1, f(!1))
                        },
                        r = e => {
                            M.current(e, n)
                        };
                    return n.on("connect", e), n.on("disconnect", t), n.on("error", r), () => {
                        n.off("connect", e), n.off("disconnect", t), n.off("error", r), t()
                    }
                }, [n, i]);
                let T = (0, eN.useRef)(!1);
                (0, eN.useEffect)(() => () => {
                    T.current = !1
                }, [n]), (0, eN.useEffect)(() => {
                    T.current || c.current || w || !r || v ? .readyState !== j.i1.Installed && v ? .readyState !== j.i1.Loadable || (c.current = !0, u(!0), T.current = !0, async function() {
                        try {
                            await r()
                        } catch {
                            a()
                        } finally {
                            u(!1), c.current = !1
                        }
                    }())
                }, [w, r, a, v]);
                let I = (0, eN.useCallback)(async (e, t, i) => {
                        if (!n) throw M.current(new eI);
                        if (!w) throw M.current(new U.oS, n);
                        return await n.sendTransaction(e, t, i)
                    }, [n, w]),
                    S = (0, eN.useMemo)(() => n && "signTransaction" in n ? async e => {
                        if (!w) throw M.current(new U.oS, n);
                        return await n.signTransaction(e)
                    } : void 0, [n, w]),
                    E = (0, eN.useMemo)(() => n && "signAllTransactions" in n ? async e => {
                        if (!w) throw M.current(new U.oS, n);
                        return await n.signAllTransactions(e)
                    } : void 0, [n, w]),
                    x = (0, eN.useMemo)(() => n && "signMessage" in n ? async e => {
                        if (!w) throw M.current(new U.oS, n);
                        return await n.signMessage(e)
                    } : void 0, [n, w]),
                    D = (0, eN.useMemo)(() => n && "signIn" in n ? async e => await n.signIn(e) : void 0, [n]),
                    L = (0, eN.useCallback)(async () => {
                        if (c.current || d.current || v ? .adapter.connected) return;
                        if (!v) throw M.current(new eI);
                        let {
                            adapter: e,
                            readyState: t
                        } = v;
                        if (!(t === j.i1.Installed || t === j.i1.Loadable)) throw M.current(new U.OZ, e);
                        c.current = !0, u(!0);
                        try {
                            await e.connect()
                        } catch (e) {
                            throw a(), e
                        } finally {
                            u(!1), c.current = !1
                        }
                    }, [a, v]),
                    O = (0, eN.useCallback)(async () => {
                        if (!d.current && n) {
                            d.current = !0, f(!0);
                            try {
                                await n.disconnect()
                            } finally {
                                f(!1), d.current = !1
                            }
                        }
                    }, [n]);
                return eN.createElement(eS.z.Provider, {
                    value: {
                        autoConnect: !!r,
                        wallets: N,
                        wallet: v,
                        publicKey: p,
                        connected: w,
                        connecting: l,
                        disconnecting: h,
                        select: s,
                        connect: L,
                        disconnect: O,
                        sendTransaction: I,
                        signTransaction: S,
                        signAllTransactions: E,
                        signMessage: x,
                        signIn: D
                    }
                }, e)
            }

            function eU(e) {
                return function({
                    adapters: e,
                    userAgentString: t
                }) {
                    return e.some(e => e.name !== q && e.readyState === j.i1.Installed) ? I.DESKTOP_WEB : t && /android/i.test(t) && !/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(t) ? I.MOBILE_WEB : I.DESKTOP_WEB
                }({
                    adapters: e,
                    userAgentString: (void 0 === r && (r = globalThis.navigator ? .userAgent ? ? null), r)
                }) === I.MOBILE_WEB
            }

            function eE({
                children: e,
                wallets: t,
                autoConnect: n,
                localStorageKey: i = "walletName",
                onError: r
            }) {
                let {
                    connection: a
                } = (0, eT.R)(), o = function(e) {
                    let t = eb(() => new Set),
                        {
                            get: n,
                            on: i
                        } = eb(() => (0, eM.y)()),
                        [r, a] = (0, eN.useState)(() => ev(n()));
                    (0, eN.useEffect)(() => {
                        let e = [i("register", (...e) => a(t => [...t, ...ev(e)])), i("unregister", (...e) => a(t => t.filter(t => e.some(e => e === t.wallet))))];
                        return () => e.forEach(e => e())
                    }, [i]);
                    let o = function(e) {
                        let t = (0, eN.useRef)();
                        return (0, eN.useEffect)(() => {
                            t.current = e
                        }), t.current
                    }(r);
                    return (0, eN.useEffect)(() => {
                        if (!o) return;
                        let e = new Set(r);
                        new Set(o.filter(t => !e.has(t))).forEach(e => e.destroy())
                    }, [o, r]), (0, eN.useEffect)(() => () => r.forEach(e => e.destroy()), []), (0, eN.useMemo)(() => [...r, ...e.filter(({
                        name: e
                    }) => !r.some(t => t.name === e) || (t.has(e) || (t.add(e), console.warn(`${e} was registered as a Standard Wallet. The Wallet Adapter for ${e} can be removed from your app.`)), !1))], [r, e, t])
                }(t), s = (0, eN.useMemo)(() => {
                    var e;
                    if (!eU(o)) return null;
                    let t = o.find(e => e.name === q);
                    return t || new ee({
                        addressSelector: {
                            select(e) {
                                return X(this, void 0, void 0, function*() {
                                    return e[0]
                                })
                            }
                        },
                        appIdentity: {
                            uri: function() {
                                let e = globalThis.location;
                                if (e) return `${e.protocol}//${e.host}`
                            }()
                        },
                        authorizationResultCache: function() {
                            let e;
                            try {
                                e = window.localStorage
                            } catch (e) {}
                            return {
                                clear() {
                                    return X(this, void 0, void 0, function*() {
                                        if (e) try {
                                            e.removeItem(et)
                                        } catch (e) {}
                                    })
                                },
                                get() {
                                    return X(this, void 0, void 0, function*() {
                                        if (e) try {
                                            return JSON.parse(e.getItem(et)) || void 0
                                        } catch (e) {}
                                    })
                                },
                                set(t) {
                                    return X(this, void 0, void 0, function*() {
                                        if (e) try {
                                            e.setItem(et, JSON.stringify(t))
                                        } catch (e) {}
                                    })
                                }
                            }
                        }(),
                        cluster: (e = a ? .rpcEndpoint) ? /devnet/i.test(e) ? "devnet" : /testnet/i.test(e) ? "testnet" : "mainnet-beta" : "mainnet-beta",
                        onWalletNotFound: en
                    })
                }, [o, a ? .rpcEndpoint]), c = (0, eN.useMemo)(() => null == s || -1 !== o.indexOf(s) ? o : [s, ...o], [o, s]), [l, u] = function(e, t) {
                    let n = (0, eN.useState)(() => {
                            try {
                                let t = localStorage.getItem(e);
                                if (t) return JSON.parse(t)
                            } catch (e) {
                                "undefined" != typeof window && console.error(e)
                            }
                            return t
                        }),
                        i = n[0],
                        r = (0, eN.useRef)(!0);
                    return (0, eN.useEffect)(() => {
                        if (r.current) {
                            r.current = !1;
                            return
                        }
                        try {
                            null === i ? localStorage.removeItem(e) : localStorage.setItem(e, JSON.stringify(i))
                        } catch (e) {
                            "undefined" != typeof window && console.error(e)
                        }
                    }, [i, e]), n
                }(i, eU(o) ? q : null), d = (0, eN.useMemo)(() => c.find(e => e.name === l) ? ? null, [c, l]), h = (0, eN.useCallback)(e => {
                    l !== e && (d && d.name !== q && d.disconnect(), u(e))
                }, [d, u, l]);
                (0, eN.useEffect)(() => {
                    if (d) return d.on("disconnect", e), () => {
                        d.off("disconnect", e)
                    };

                    function e() {
                        !m.current && (l === q && eU(o) || u(null))
                    }
                }, [d, o, u, l]);
                let f = (0, eN.useRef)(!1),
                    p = (0, eN.useMemo)(() => {
                        if (n && d) return async () => {
                            (!0 === n || await n(d)) && (f.current ? await d.connect() : await d.autoConnect())
                        }
                    }, [n, d]),
                    m = (0, eN.useRef)(!1);
                (0, eN.useEffect)(() => {
                    if (l === q && eU(o)) {
                        m.current = !1;
                        return
                    }

                    function e() {
                        m.current = !0
                    }
                    return window.addEventListener("beforeunload", e), () => {
                        window.removeEventListener("beforeunload", e)
                    }
                }, [o, l]);
                let w = (0, eN.useCallback)(() => {
                        d && d.name !== q && h(null)
                    }, [d, h]),
                    y = (0, eN.useCallback)(e => {
                        f.current = !0, h(e)
                    }, [h]);
                return eN.createElement(ej, {
                    wallets: c,
                    adapter: d,
                    isUnloadingRef: m,
                    onAutoConnectRequest: p,
                    onConnectError: w,
                    onError: r,
                    onSelectWallet: y
                }, e)
            }
        },
        43101: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return F
                }
            });
            var i, r, a, o, s, c, l, u, d, h, f, p, m, w, y, g = n(20832),
                M = n(64198),
                N = n(44631),
                b = n(55409),
                v = n(67730),
                T = function(e, t, n, i, r) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                },
                I = function(e, t, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                };
            class S extends Event {
                constructor(e) {
                    super("wallet-standard:register-wallet", {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !1
                    }), i.set(this, void 0), T(this, i, e, "f")
                }
                get detail() {
                    return I(this, i, "f")
                }
                get type() {
                    return "wallet-standard:register-wallet"
                }
                preventDefault() {
                    throw Error("preventDefault cannot be called")
                }
                stopImmediatePropagation() {
                    throw Error("stopImmediatePropagation cannot be called")
                }
                stopPropagation() {
                    throw Error("stopPropagation cannot be called")
                }
            }
            i = new WeakMap;
            var j = n(97287),
                U = n(12658),
                E = n(91684),
                x = n(56773),
                D = n(27496),
                L = n(86893),
                O = n(55034),
                A = function(e, t, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                },
                R = function(e, t, n, i, r) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                };
            class z {
                constructor() {
                    r.add(this), a.set(this, {}), o.set(this, "1.0.0"), s.set(this, "MetaMask"), c.set(this, "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzEgMzEiIHdpZHRoPSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwLjI1IiB4Mj0iMjYuNTcxIiB5MT0iMjcuMTczIiB5Mj0iMTkuODU4Ij48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iIzk5NDVmZiIvPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM4NzUyZjMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNTQ5N2Q1Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iIzQzYjRjYSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjMjhlMGI5Ii8+PHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMxOWZiOWIiLz48L2xpbmVhckdyYWRpZW50PjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjA5NCI+PHBhdGggZD0ibTI2LjEwOSAzLjY0My05LjM2OSA2Ljk1OSAxLjczMy00LjEwNSA3LjYzNy0yLjg1M3oiIGZpbGw9IiNlMjc2MWIiIHN0cm9rZT0iI2UyNzYxYiIvPjxnIGZpbGw9IiNlNDc2MWIiIHN0cm9rZT0iI2U0NzYxYiI+PHBhdGggZD0ibTQuNDgxIDMuNjQzIDkuMjk0IDcuMDI0LTEuNjQ4LTQuMTcxem0xOC4yNTggMTYuMTMtMi40OTUgMy44MjMgNS4zMzkgMS40NjkgMS41MzUtNS4yMDctNC4zNzgtLjA4NXptLTE5LjI0Ny4wODUgMS41MjUgNS4yMDcgNS4zMzktMS40NjktMi40OTUtMy44MjN6Ii8+PHBhdGggZD0ibTEwLjA1NSAxMy4zMTMtMS40ODggMi4yNTEgNS4zMDEuMjM1LS4xODgtNS42OTd6bTEwLjQ4IDAtMy42NzItMy4yNzctLjEyMiA1Ljc2MyA1LjI5Mi0uMjM1LTEuNDk3LTIuMjUxem0tMTAuMTc4IDEwLjI4MyAzLjE4My0xLjU1NC0yLjc0OS0yLjE0Ny0uNDMzIDMuNzAxem02LjY5NS0xLjU1NCAzLjE5MiAxLjU1NC0uNDQzLTMuNzAxeiIvPjwvZz48cGF0aCBkPSJtMjAuMjQ0IDIzLjU5Ni0zLjE5Mi0xLjU1NC4yNTQgMi4wODEtLjAyOC44NzZ6bS05Ljg4NyAwIDIuOTY2IDEuNDAzLS4wMTktLjg3Ni4yMzUtMi4wODEtMy4xODMgMS41NTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTMuMzY5IDE4LjUyMS0yLjY1NS0uNzgxIDEuODc0LS44NTd6bTMuODUxIDAgLjc4MS0xLjYzOCAxLjg4My44NTctMi42NjUuNzgxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTEwLjM1NyAyMy41OTYuNDUyLTMuODIzLTIuOTQ3LjA4NXptOS40MzUtMy44MjMuNDUyIDMuODIzIDIuNDk1LTMuNzM4em0yLjI0MS00LjIwOS01LjI5Mi4yMzUuNDkgMi43MjEuNzgyLTEuNjM4IDEuODgzLjg1N3ptLTExLjMxOCAyLjE3NSAxLjg4My0uODU3Ljc3MiAxLjYzOC40OTktMi43MjEtNS4zMDEtLjIzNXoiIGZpbGw9IiNjZDYxMTYiIHN0cm9rZT0iI2NkNjExNiIvPjxwYXRoIGQ9Im04LjU2NyAxNS41NjQgMi4yMjIgNC4zMzEtLjA3NS0yLjE1NnptMTEuMzI4IDIuMTc1LS4wOTQgMi4xNTYgMi4yMzItNC4zMzEtMi4xMzcgMi4xNzV6bS02LjAyNi0xLjk0LS40OTkgMi43MjEuNjIxIDMuMjExLjE0MS00LjIyOC0uMjY0LTEuNzA0em0yLjg3MiAwLS4yNTQgMS42OTUuMTEzIDQuMjM3LjYzMS0zLjIxMXoiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNy4yMyAxOC41Mi0uNjMxIDMuMjExLjQ1Mi4zMTEgMi43NS0yLjE0Ny4wOTQtMi4xNTZ6bS02LjUxNi0uNzgxLjA3NSAyLjE1NiAyLjc1IDIuMTQ3LjQ1Mi0uMzExLS42MjItMy4yMTF6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtMTcuMjc3IDI0Ljk5OS4wMjgtLjg3Ni0uMjM1LS4yMDdoLTMuNTVsLS4yMTcuMjA3LjAxOS44NzYtMi45NjYtMS40MDMgMS4wMzYuODQ4IDIuMSAxLjQ1OWgzLjYwNmwyLjEwOS0xLjQ1OSAxLjAzNi0uODQ4eiIgZmlsbD0iI2MwYWQ5ZSIgc3Ryb2tlPSIjYzBhZDllIi8+PHBhdGggZD0ibTE3LjA1MSAyMi4wNDItLjQ1Mi0uMzExaC0yLjYwOGwtLjQ1Mi4zMTEtLjIzNSAyLjA4MS4yMTctLjIwN2gzLjU1bC4yMzUuMjA3LS4yNTQtMi4wODF6IiBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiLz48cGF0aCBkPSJtMjYuNTA1IDExLjA1My44LTMuODQyLTEuMTk2LTMuNTY5LTkuMDU4IDYuNzIzIDMuNDg0IDIuOTQ3IDQuOTI1IDEuNDQxIDEuMDkyLTEuMjcxLS40NzEtLjMzOS43NTMtLjY4Ny0uNTg0LS40NTIuNzUzLS41NzQtLjQ5OS0uMzc3em0tMjMuMjExLTMuODQxLjggMy44NDItLjUwOC4zNzcuNzUzLjU3NC0uNTc0LjQ1Mi43NTMuNjg3LS40NzEuMzM5IDEuMDgzIDEuMjcxIDQuOTI1LTEuNDQxIDMuNDg0LTIuOTQ3LTkuMDU5LTYuNzIzeiIgZmlsbD0iIzc2M2QxNiIgc3Ryb2tlPSIjNzYzZDE2Ii8+PHBhdGggZD0ibTI1LjQ2IDE0Ljc1NC00LjkyNS0xLjQ0MSAxLjQ5NyAyLjI1MS0yLjIzMiA0LjMzMSAyLjkzOC0uMDM4aDQuMzc4bC0xLjY1Ny01LjEwNHptLTE1LjQwNS0xLjQ0MS00LjkyNSAxLjQ0MS0xLjYzOCA1LjEwNGg0LjM2OWwyLjkyOC4wMzgtMi4yMjItNC4zMzEgMS40ODgtMi4yNTF6bTYuNjg1IDIuNDg2LjMxMS01LjQzMyAxLjQzMS0zLjg3aC02LjM1NmwxLjQxMyAzLjg3LjMyOSA1LjQzMy4xMTMgMS43MTQuMDA5IDQuMjE5aDIuNjFsLjAxOS00LjIxOS4xMjItMS43MTR6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48L2c+PGNpcmNsZSBjeD0iMjMuNSIgY3k9IjIzLjUiIGZpbGw9IiMwMDAiIHI9IjYuNSIvPjxwYXRoIGQ9Im0yNy40NzMgMjUuNTQ1LTEuMzEgMS4zNjhjLS4wMjkuMDMtLjA2My4wNTMtLjEwMS4wN2EuMzEuMzEgMCAwIDEgLS4xMjEuMDI0aC02LjIwOWMtLjAzIDAtLjA1OS0uMDA4LS4wODMtLjAyNGEuMTUuMTUgMCAwIDEgLS4wNTYtLjA2NWMtLjAxMi0uMDI2LS4wMTUtLjA1Ni0uMDEtLjA4NHMuMDE4LS4wNTUuMDM5LS4wNzZsMS4zMTEtMS4zNjhjLjAyOC0uMDMuMDYzLS4wNTMuMTAxLS4wNjlhLjMxLjMxIDAgMCAxIC4xMjEtLjAyNWg2LjIwOGMuMDMgMCAuMDU5LjAwOC4wODMuMDI0YS4xNS4xNSAwIDAgMSAuMDU2LjA2NWMuMDEyLjAyNi4wMTUuMDU2LjAxLjA4NHMtLjAxOC4wNTUtLjAzOS4wNzZ6bS0xLjMxLTIuNzU2Yy0uMDI5LS4wMy0uMDYzLS4wNTMtLjEwMS0uMDdhLjMxLjMxIDAgMCAwIC0uMTIxLS4wMjRoLTYuMjA5Yy0uMDMgMC0uMDU5LjAwOC0uMDgzLjAyNHMtLjA0NC4wMzgtLjA1Ni4wNjUtLjAxNS4wNTYtLjAxLjA4NC4wMTguMDU1LjAzOS4wNzZsMS4zMTEgMS4zNjhjLjAyOC4wMy4wNjMuMDUzLjEwMS4wNjlhLjMxLjMxIDAgMCAwIC4xMjEuMDI1aDYuMjA4Yy4wMyAwIC4wNTktLjAwOC4wODMtLjAyNGEuMTUuMTUgMCAwIDAgLjA1Ni0uMDY1Yy4wMTItLjAyNi4wMTUtLjA1Ni4wMS0uMDg0cy0uMDE4LS4wNTUtLjAzOS0uMDc2em0tNi40MzEtLjk4M2g2LjIwOWEuMzEuMzEgMCAwIDAgLjEyMS0uMDI0Yy4wMzgtLjAxNi4wNzMtLjA0LjEwMS0uMDdsMS4zMS0xLjM2OGMuMDItLjAyMS4wMzQtLjA0Ny4wMzktLjA3NnMuMDAxLS4wNTgtLjAxLS4wODRhLjE1LjE1IDAgMCAwIC0uMDU2LS4wNjVjLS4wMjUtLjAxNi0uMDU0LS4wMjQtLjA4My0uMDI0aC02LjIwOGEuMzEuMzEgMCAwIDAgLS4xMjEuMDI1Yy0uMDM4LjAxNi0uMDcyLjA0LS4xMDEuMDY5bC0xLjMxIDEuMzY4Yy0uMDIuMDIxLS4wMzQuMDQ3LS4wMzkuMDc2cy0uMDAxLjA1OC4wMS4wODQuMDMxLjA0OS4wNTYuMDY1LjA1NC4wMjQuMDgzLjAyNHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="), l.set(this, null), u.set(this, (e, t) => (A(this, a, "f")[e] ? .push(t) || (A(this, a, "f")[e] = [t]), () => A(this, r, "m", h).call(this, e, t))), f.set(this, async () => {
                        if (!A(this, l, "f")) {
                            let e;
                            try {
                                e = (await n.e(5065).then(n.bind(n, 75065))).default
                            } catch (e) {
                                throw Error("Unable to load Solflare MetaMask SDK")
                            }
                            R(this, l, new e, "f"), A(this, l, "f").on("standard_change", e => A(this, r, "m", d).call(this, "change", e))
                        }
                        return this.accounts.length || await A(this, l, "f").connect(), {
                            accounts: this.accounts
                        }
                    }), p.set(this, async () => {
                        A(this, l, "f") && await A(this, l, "f").disconnect()
                    }), m.set(this, async (...e) => {
                        if (!A(this, l, "f")) throw new N.oS;
                        return await A(this, l, "f").standardSignAndSendTransaction(...e)
                    }), w.set(this, async (...e) => {
                        if (!A(this, l, "f")) throw new N.oS;
                        return await A(this, l, "f").standardSignTransaction(...e)
                    }), y.set(this, async (...e) => {
                        if (!A(this, l, "f")) throw new N.oS;
                        return await A(this, l, "f").standardSignMessage(...e)
                    })
                }
                get version() {
                    return A(this, o, "f")
                }
                get name() {
                    return A(this, s, "f")
                }
                get icon() {
                    return A(this, c, "f")
                }
                get chains() {
                    return [j.aI, j.BR, j.gv]
                }
                get features() {
                    return {
                        [D.V]: {
                            version: "1.0.0",
                            connect: A(this, f, "f")
                        },
                        [L.R]: {
                            version: "1.0.0",
                            disconnect: A(this, p, "f")
                        },
                        [O.k]: {
                            version: "1.0.0",
                            on: A(this, u, "f")
                        },
                        [U.G]: {
                            version: "1.0.0",
                            supportedTransactionVersions: ["legacy", 0],
                            signAndSendTransaction: A(this, m, "f")
                        },
                        [E.R]: {
                            version: "1.0.0",
                            supportedTransactionVersions: ["legacy", 0],
                            signTransaction: A(this, w, "f")
                        },
                        [x.g]: {
                            version: "1.0.0",
                            signMessage: A(this, y, "f")
                        }
                    }
                }
                get accounts() {
                    return A(this, l, "f") ? A(this, l, "f").standardAccounts : []
                }
            }
            a = new WeakMap, o = new WeakMap, s = new WeakMap, c = new WeakMap, l = new WeakMap, u = new WeakMap, f = new WeakMap, p = new WeakMap, m = new WeakMap, w = new WeakMap, y = new WeakMap, r = new WeakSet, d = function(e, ...t) {
                A(this, a, "f")[e] ? .forEach(e => e.apply(null, t))
            }, h = function(e, t) {
                A(this, a, "f")[e] = A(this, a, "f")[e] ? .filter(e => t !== e)
            };
            let C = !1;
            async function k() {
                let e = "solflare-detect-metamask";

                function t() {
                    window.postMessage({
                        target: "metamask-contentscript",
                        data: {
                            name: "metamask-provider",
                            data: {
                                id: e,
                                jsonrpc: "2.0",
                                method: "wallet_getSnaps"
                            }
                        }
                    }, window.location.origin)
                }

                function n(i) {
                    let r = i.data;
                    r ? .target === "metamask-inpage" && r.data ? .name === "metamask-provider" && (r.data.data ? .id === e ? (window.removeEventListener("message", n), !r.data.data.error && (C || (function(e) {
                        let t = ({
                            register: t
                        }) => t(e);
                        try {
                            window.dispatchEvent(new S(t))
                        } catch (e) {
                            console.error("wallet-standard:register-wallet event could not be dispatched\n", e)
                        }
                        try {
                            window.addEventListener("wallet-standard:app-ready", ({
                                detail: e
                            }) => t(e))
                        } catch (e) {
                            console.error("wallet-standard:app-ready event listener could not be added\n", e)
                        }
                    }(new z), C = !0))) : t())
                }
                window.addEventListener("message", n), window.setTimeout(() => window.removeEventListener("message", n), 5e3), t()
            }
            class F extends g.eC {
                constructor(e = {}) {
                    super(), this.name = "Solflare", this.url = "https://solflare.com", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+", this.supportedTransactionVersions = new Set(["legacy", 0]), this._readyState = "undefined" == typeof window || "undefined" == typeof document ? M.i1.Unsupported : M.i1.Loadable, this._disconnected = () => {
                        let e = this._wallet;
                        e && (e.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new N.at), this.emit("disconnect"))
                    }, this._accountChanged = e => {
                        if (!e) return;
                        let t = this._publicKey;
                        if (t) {
                            try {
                                e = new v.nh(e.toBytes())
                            } catch (e) {
                                this.emit("error", new N.Nx(e ? .message, e));
                                return
                            }
                            t.equals(e) || (this._publicKey = e, this.emit("connect", e))
                        }
                    }, this._connecting = !1, this._publicKey = null, this._wallet = null, this._config = e, this._readyState !== M.i1.Unsupported && ((0, M.su)(() => (!!window.solflare ? .isSolflare || !!window.SolflareApp) && (this._readyState = M.i1.Installed, this.emit("readyStateChange", this._readyState), !0)), k())
                }
                get publicKey() {
                    return this._publicKey
                }
                get connecting() {
                    return this._connecting
                }
                get connected() {
                    return !!this._wallet ? .connected
                }
                get readyState() {
                    return this._readyState
                }
                async autoConnect() {
                    this.readyState === M.i1.Loadable && (0, M.H)() || await this.connect()
                }
                async connect() {
                    try {
                        let e, t, i;
                        if (this.connected || this.connecting) return;
                        if (this._readyState !== M.i1.Loadable && this._readyState !== M.i1.Installed) throw new N.OZ;
                        if (this.readyState === M.i1.Loadable && (0, M.H)()) {
                            let e = encodeURIComponent(window.location.href),
                                t = encodeURIComponent(window.location.origin);
                            window.location.href = `https://solflare.com/ul/v1/browse/${e}?ref=${t}`;
                            return
                        }
                        try {
                            e = (await n.e(1679).then(n.bind(n, 31679))).default
                        } catch (e) {
                            throw new N.W8(e ? .message, e)
                        }
                        try {
                            t = new e({
                                network: this._config.network
                            })
                        } catch (e) {
                            throw new N.p6(e ? .message, e)
                        }
                        if (this._connecting = !0, !t.connected) try {
                            await t.connect()
                        } catch (e) {
                            throw new N.$w(e ? .message, e)
                        }
                        if (!t.publicKey) throw new N.$w;
                        try {
                            i = new v.nh(t.publicKey.toBytes())
                        } catch (e) {
                            throw new N.Nx(e ? .message, e)
                        }
                        t.on("disconnect", this._disconnected), t.on("accountChanged", this._accountChanged), this._wallet = t, this._publicKey = i, this.emit("connect", i)
                    } catch (e) {
                        throw this.emit("error", e), e
                    } finally {
                        this._connecting = !1
                    }
                }
                async disconnect() {
                    let e = this._wallet;
                    if (e) {
                        e.off("disconnect", this._disconnected), e.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null;
                        try {
                            await e.disconnect()
                        } catch (e) {
                            this.emit("error", new N.UG(e ? .message, e))
                        }
                    }
                    this.emit("disconnect")
                }
                async sendTransaction(e, t, n = {}) {
                    try {
                        let i = this._wallet;
                        if (!i) throw new N.oS;
                        try {
                            let {
                                signers: r,
                                ...a
                            } = n;
                            return (0, b.W)(e) ? r ? .length && e.sign(r) : (e = await this.prepareTransaction(e, t, a), r ? .length && e.partialSign(...r)), a.preflightCommitment = a.preflightCommitment || t.commitment, await i.signAndSendTransaction(e, a)
                        } catch (e) {
                            if (e instanceof N.lj) throw e;
                            throw new N.IW(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signTransaction(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new N.oS;
                        try {
                            return await t.signTransaction(e) || e
                        } catch (e) {
                            throw new N.PY(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signAllTransactions(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new N.oS;
                        try {
                            return await t.signAllTransactions(e) || e
                        } catch (e) {
                            throw new N.PY(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signMessage(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new N.oS;
                        try {
                            return await t.signMessage(e, "utf8")
                        } catch (e) {
                            throw new N.fk(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
            }
        },
        72174: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return s
                }
            });
            var i = n(20832),
                r = n(64198),
                a = n(44631),
                o = n(67730);
            class s extends i.eC {
                constructor(e = {}) {
                    super(), this.name = "Trust", this.url = "https://trustwallet.com", this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAyIiBoZWlnaHQ9IjQwMiIgdmlld0JveD0iMCAwIDQwMiA0MDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cmVjdCB3aWR0aD0iNDAyIiBoZWlnaHQ9IjQwMiIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMTY5NF8xODk2NyIgdHJhbnNmb3JtPSJzY2FsZSgwLjAwMjQ4NzU2KSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwXzE2OTRfMTg5NjciIHdpZHRoPSI0MDIiIGhlaWdodD0iNDAyIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFjRkJRWUZCQWNHQmdZSUJ3Y0lDeElMQ3dvS0N4WVBFQTBTR2hZYkdoa1dHUmdjSUNnaUhCNG1IaGdaSXpBa0ppb3JMUzR0R3lJeU5URXNOU2dzTFN6LzJ3QkRBUWNJQ0FzSkN4VUxDeFVzSFJrZExDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3ovd2dBUkNBR1NBWklEQVNJQUFoRUJBeEVCLzhRQUd3QUJBQUlEQVFFQUFBQUFBQUFBQUFBQUFBRUdCQVVIQXdML3hBQVpBUUVBQXdFQkFBQUFBQUFBQUFBQUFBQUFBUU1FQlFMLzJnQU1Bd0VBQWhBREVBQUFBZWtBQUFFRXhJaEloSWhJaEloSWhJaEloSWhJaEloSWhJaEloSWhJaElJRWdBQUFBQVFrQUFBQUFBQUFBQUFBQUFBQUFBQWlVRWdBQUFRa0FBQUFBQUFBQUFBQUFBQUFBQUFBQWlVRWdBRUVnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWlZa0FJa0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUk1FZ2lZa0FBQUFBQUFBQUFQT29XVjduWFZWdXg5TXllWTNYTG8zSXo2QUFBQUFBQUFBRVNENUV6RWdBQUFBQUFCR0xNWmJSNmUydTVWK3BlT25QazR4cXpCTUFicTE4NlVYOVZjNzNlVFRhV3J6NmJmVWVmUUFBQUFBQUdPSmozbUppUUFBQUFOTlVQckE2Zk95Zm53WFZ6Qk1BZ0EyOXFvdXJtNjNyRnI1cGk5U3JlbWlvc2pIMVpnbUFQdjF4MFRrN0RUUFBycUhyWGJGeStpSGoyQUFBQmppWTk1aVlrQUFBQURtMkhuWVBZNVFzTVRYbCt5cUx1YzdMb0UxV1ZiZTVpaTRLN0FBSTArNWV2TksxWFNtaWpsVHArSGJYenhlNlpkVmppMnE0V1d1V1BsZElLclFBQUFNY1RIdk1URWdBQUFBYzYxK3kxdlg1YTMxQzIxMldnY3pvQUFBQUFBQUFPYTlLNW5yeTR3MzRycFlkRHZ1VjB3cXNBQUFBeHhNZTh4TVNBQUFBQnovVmJuVGRibUxWVmJONTlXOGN2b2dBQUFBQUFBT1lkUDVac3lmSTNZNzF1OVB1T1Qwd3JzQUFBQXh4TWU4eE1TQUFBQUJSOUZZcTcxZWFzVmQzaGVSeXVrQUFBQUFBQUI4OHM2ZHpIZGpEWms2RnM4SE80L1ZEejZBQUFBeHhNZTh4TVNBQUFBQlVxdmNLZjArYzIycHo3UEhSaHlPb0FBQUFBQUFCaGMzNkJ6L29ZUTFaK201RVR4dXFFU0FBQUJqaVk5NWlZa0FBQUFEUlVmb1hQZWpnZTNpMDBkVmVYcnhlcUNRQUFBQUFBTkRTTFpVK2x6M3Y0Ykc2cm9nNC9WQUFBQUF4eE1lOHhNU0FBQUFCNDh3NnJ6TGJreHh0eDlDMmRic25KNllWMkFBQUFBQUFValE1bUgxK1czMmh0dmoxYUJ5K2tBQUFBQmppWTk1aVlrQUFBQUJSYjFYYjZhWU9uenQzZXVXZE53YmZZWk5RQUFBQUFERnlxdlpYVWgxdVk2QlErbjQ5WDBNTzBBQUFBREhFeDd6RXhJQUFBQUR3OXlPV2ZOaHIzWDVpeTFvZFZWeXg4cm9oNTlnQUFBRHhRNXZtNnZwWUEwVWIrN1lHZnl1a0ZWb0FBQUFHT0pqM21KaVFBQUFBQU1mbkhUOVhvbzU4Ky9qcFlHOTBUelBUTW5sdG13N0xZOC9UTG9CSUJyYWpkVFphZGpOK01MYWxrd2I3azFmUXdiUUFBQUFBTWNUSHZNVEVnQUFBQUFBYTZqZEs4NzZlWExQV3VoaCtSNzhlOXRwYXF6cXJudTZ4Yk4vVWRMNTZzNGFNNHpZbkNzTzgzR0xYOC9SajFnQUFBQUFBWTRtUGVZbUpBQUFBQUFBQVl1VW1LUm9lcTYzWGw1NDJXdDI1UW55UHBQemtiKzFaZEdoc01zT3NQUHNBQUFBQUFBUWZEMElpWWxJQUFBQUFBQUFBRVZ1eXZmamxuejB2QjJaYWxkczM2elhoVGNBQUFBQUFBQUFpWUpBaVlKQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFSSUFCRW9KQUFBQUFBQUFBQUFBQUFBQUFBQUFBaVlKQUFBQkVvSkFBQUFBQUFBQUFBQUFBQUFBQUFRRWdBQUFBQkNRUUpSSUFBQUFBQUFBQUFBQUFJSlFKaVFBQUFBQUFBQUErUkhpSkFBQUFBQUFBQUFBQWVub1FCSUFBQUFILzhRQUx4QUFBQVVFQWdFQ0JBVUZBQUFBQUFBQUFBRUNBd1FGRVRBeEVFQVNJRFFURkNGQklpUXpOV0FqTWxCd2dQL2FBQWdCQVFBQkJRTEhZV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVc1di9OTi81TGYrbC92L0FDVDcvd0FLazFOcGhTYTE5V0pEY2h2ckhvRjFsdUpiUk1xaW5PV1hsc09SS2kzSTY5d1d1bXBTVUprVmR0QWVrT3lGZW1OVTNXQXhPWWtkVTlsclBld1ZLWVFIS3RIU0hhdzZvT1BPUEhoWm55R1EzV2lDS2xGV0V1dHI2SjdMV09mUCtWSmN5UXMvbVh3YnpwZ3pNOEVXbHVQQitsTXVOdnhuWTZ2V1Mxa1BtSGg4eStJOVRmYVUyNGwxdkdleTFqbktOYzdDeFRYM2hHZ014dVZJU3RNaWpwTU94M1dEdzBaUm5HeG5zdFk1ZnZmU2xLbEczVHBMZ2FveEJtSXd4NnpJbEU5UzQ3Z2NvN3lRdUsrMTY2TCtqalBaYXh6ZmZjVTZFMUpiS2x4U0NZY2RBSWlJc3FtVzNBcW54VkE2VEZNU0VFMUk0bzN0OFo3TFdPZjcvaWkvcGRPWDd6aWplMHhuc3RZNmorNGNVWCszcHlQZGNVZjJXTTlsckhVLzNIaWlkUjM2dmNVbjJPTTlsckhWZmY4QUZGL1Y2YXZxcmlsL3QrTTlsckhWeS9POFVZL3pQU1VkazgwNHJVL0dleTFqckpmbWVLUWRwdlNmTzBmbUVWb09NOWxySFdpL0Z4VER0VU9sTk8wTG1PVm8yTTlsckhXaS9wY1FUOFozU3FSMnAvSkZaT005bHJIVnl2QzRhVjR2ZEtzS3RENFlUNVNNaDdMV09vcDhvSExTdk5ubzFwWDA0cDZmS2ZrUFpheHZKODJPYWN2emdkR3JyOHBuRklUZVprUFpheVNFZkRrOFVaeTdIUmxyK0pNNG9xUHdaRDJXc2xXYjhKdkZLZCtITTZFbDM0TWJtbXQvRGdaRDJXc2xZYThtT0VxTkMyWENlWnoxaC84QUR3MmczSEVwSktjaDdMV1I1c25tRkpOS3VLVEs4RlpublVzTlBPcWZlNHBEUG5KeW5zdFphdEg4SHVZRlNKd3NqcnFHVVRacXBhK1lVZjVhTmxQWmF5dnNwZlplYVV3N3pGcWJqSVprTnlFNFpWVGFZRDhoeVF2bWxSUE5lWTlsck5OaEpsTnJRcHRmS0ZxYlZHcTRRNGgxUHBrem1Zd2sxQjZSNllNRlVwYVVraE9ZOWxyUExoTnlreUl6a1pmb2FmY1lWRnF5SE9YcERjZEVtcU9PK3FIVEZPaEtTUW5PZXkxMEZvUzRpVlNESUtTYUZlaUxPZGpCK3NGNExjVTZ2MFI0ajBrNHRPYWo5STlscnBQeG1wQlNhVTYxaFpZY2ZWR3BLRUFpSWk2VnV0SmdzeVJKZ3V4dlNTVFVjV2tHWVEybHRQVCt3Ky9WTXJsTHBSS0NrcVFvUllUc280ME5xS25ybjJIb3pNZ0pwY1ZKa1JKTHJmZi9BSnd2M2I5Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN3bkwvQVAvRUFDY1JBQUlCQWdVRkFBSURBQUFBQUFBQUFBRUNBd0FSQkJBd01USVNJQ0ZBUVJSd0lsRlMvOW9BQ0FFREFRRS9BZjBhN2hONk03VkhNRzhIMWIyb3lxS2FjbmF0ODFtWmFXZFRRWUhiMEpKQ1RWejJKQ3pVSWxBdFR3RWNhMnp2UVlpa1BVTDZyYjBxbGpZVitPMUREajdTeHF1M1lWQjNvNGRmbEhEbis2ZU1wdmxGd0dxL0kxRHowc1JzTW8rQTFYNUdvZVkwc1I4eWo0alZsNW1vK1kwc1I4eVhpTldiblNjaHBZamxrTlhFY3RPZm5TK1RyWWdiSEtNM1VhTG03RTFFTHVOYVlYWExEdDR0b08zU3Q4c09QTjlkbDZUYWxicE42Vmd3dU8rV1RxOERLSmVsZGVXUHE4akpXSzdVazRQTHNlVlZwNUMrVU1kLzVIMFpJZzlNaFhmSkpDbTFDZFNQTlBNVzJ5QXZ0U1FmVzlNaTlQQi9taUNOODBnSjNwVkM3ZXN5aHQ2T0hQeWtpQ2ZvL3dEL3hBQWtFUUFDQVFNRUFnTUJBUUFBQUFBQUFBQUJBZ01BQkJFUU1ERXlFaUVnUUVFaWNQL2FBQWdCQWdFQlB3SC9BQTFJeS9GQzNURlNRRmZZK3FBVFN3dWFTMkE3VUJqVjRGYW10M0hGRlNPZm9SUmhWckErRHpxdE5NNU9hUzRCN1VEblhBb29wNUZPdmkyTjFlQlRNRUdUUnVWbzNSL0JUU00zSitDc1Y0b1hMRG1oZEQ5RkpLSDQwbTduZFRxS242YlZyeWRKZTUzWStncWZvZHExL2RKTzUzWXVncVhvZHExL2RIN0hkZzZDbjZuYXR1dWgzYlkveHQyNC9pbU9CbmV0VHlOSlJoenN4akNnVk1jSWQ2QnNQcGNyNzh0aU5mSnNhWFRlZ043aWtieUdhZGZNWU5NaFE0UHpoaThCazZTdjV0bmZobDhEZzhhTW9iMGFlM0k2L0JJV2VraVZOSjVjZnlQb3h6RlBWSTRmalI0bGZtbXQyQndLamdDODZFZ2MxSmNmaWZUQnh4U1hQNDFBZyt4ckpjQWVscG5MYy9XVnluc1VMbGNlNmttTC93Q0gvd0QveEFBM0VBQUJBUVFHQndZR0FnTUFBQUFBQUFBQkFnQURFUklRSUNFaVFGRXhRVkpoY1hLQkV5TXdVR0toQkRJemtaS3hRb0tBa1BELzJnQUlBUUVBQmo4Qy93QkMwcVIyaXR6WG5ObTR0TTdNZkw1bHFDUXhRNXVvejFtbWQyWUZwVlhIbVdmbGtWRUFiMmc1RTV6MU5GNHFOYVZmZUkzNld1cmdySStUM255UHUxMlpmQU4zYVFqM2FMeFpWeDhLeGNSa3ExdTlkZFV0OVNYaTExYVZjRGpwVTJ2RDdORXZsOURCdnJQUHlhMTR2N3RhZkFtZTkyajNMQU8rN1VHZzhURGZxUGdXS0k2dDlWZjVOOVo1K1RYMWRvbmV3V2d4QnhMMG5haDRVU096VG1wb3dtWHRHbVZRQkJ6YUxoVXZwTFFlSUtmQ1duSldKZmN4clFTQ2VEZlRsNXJHNzE1MFMxeDJBYzY4Q0lockIyWjlMWEZKWDdOZmRLSFN1ODVzUzk1cVZLZVJzT3B2a2oxYXh5ajdOWUllTmZkcFZ4RGZSSFJ0Q2gxWjRoT2hKaFN2bXhMM2pTOTQ0Ujl6bWxmUGlYdEwzcGhIdk1hVHo0bDUwL1ZMN3BoRjh4cC9zY1NyZ0tYdkRDRTBvNjRrY3RLeDZjR1RVZGY5cnhLRDZhZUtjRzhQcE5SMXk0bHllTktOOGYxZzMzTFVkREpJeExzNzZYWE5nM25UOTFBTXNUSEpWS0ZaS0J3WUdhcVhhYzFERlBmdlVRck1Sd1RwUEUwdWh2amlscHpTUlVkN3JNRkxzcHBKMlU0dDRqSlZLMFpHT0NlcTMwdlY5TVhOdGlOTXVwWWhnVnZNaFVSNnJjV2w1c0drS0drV3NsNG5Rb1lCTGtjVFNsQTBxTUdDUm9GbUxXN1A4Z3hTZElwN0Jac1Y4dmpsNHMyQmxQRmFUU1hoMEkvZU43WWZLdlR4cUIwK01GNmpuNHBXdFVBMlRzYUJVU2orV2s0MVR0V2dzWGE5SXFCTHkrajNEVE8xUjhLVkhlTDltbWVLalU3ZFl1ajVjZms4R2dzVUxFQ0treUZGSjNNRS9FRCt3YVpDZ29icTBDWmxiSWFFWkVaQ3JFMk9ocExCS1JBRHlDMnhlcFRRZUo2MVpuYWlscFgxeFdlcW1aNHFEU3V1N1Q3MWd0OWRSbHJMQktSQUR5S1ZhUW9NVmZEMmpaTFFVQ0R2cXdqTWpaTGR5bThkclUweTFGUnEzRTJablEweHZyelBrMEhpWTcybWRkNG4zOEdWMmtxYVo4WnpscWFBRUI1VEVpQzlvTkVpS05vVllKRVMwM3hGbnBEU29TRWpkNVpBdFA4QUQzVHN0S29RSW91aUNkb3RkRVZiUjh3N3hFZDdSbEo0bG9KRUIvbkovOFFBS2hBQUFRSUVCQVlEQVFFQkFBQUFBQUFBQVFBUklURmhjUkF3UVZFZ1FJR1JvYkZRNGZEQjhkSC8yZ0FJQVFFQUFUOGh5Q1FFNTI3cGp1bUtnRlFDb0JVQXFBVkFLZ0ZRQ29CVUFxQVZBS2dGUUNvQlVBcUFWQUtnRlFDb0JVQXFBVkFLZ0ZRQ1ltcVZHNlpia0NXVVRPQ0FiNEpta24zaG11OHBib0J2aG9pb1U4cncrSmJVSUY4ancrTEkxRTBJOFJpVzcvR21CZnZ3a3NnR0h4d2hEZ203YjQ4K3NTV0NBWWZJQ0RqQXlmSW1Zd0V6ekI4WUdZSmdPcSsvbFFGV28xRitaSk9XTmhEcVZHWElQNk5pSE1ieW1kamNTczVjQUFGSjVRb0hjeVRCT0Zab2ZaUEg3Um9PbkVPRmlLQ3hUUUJFcG5sWmlrMjVBZ0RrZ0NxbDRwR1U3eE5nZVU1Z2Z1WWs4UjFaVE9Eam9FWkFncVA0SzBtV3drTHduQjVHYmRTYlpnQkRBcnhrRzY4UFFlRi9wRk5GYzBSY2h2a05EMngrR1FnV0xBemU2Y2MyQjREa2VGNUFHUStwZjZSQVFKcWlNOUNtbmpjWmsyNmsyek5FUXV5R1RNcHY3a095WmcvWmh0aVp6YkFFOHZuUjdxOFdhSHJsRkJLRjFHWk51cE5zeUg4VWVKMUYyQjFxME4wQk1YNkg5SzZqQkU5K001Q0pNRUozSnV5N0o2SW51VW9MZUlkK01JOUhyTW0zVW0yWURYV01ieTJITXAwZDVyMzJkN1RLRUd3R2Q0b2txYkJ1STlLUVdpdTFQUWZIOTlNeWJkU2JaZ05peWhVK3VVSi8weHhDSlY2R1pOdXBOc3dHdUQwTVRoMS9ybERjbS91eEJxcGVobVRicVRiTUJxdjhNU2lQN1BsRGQ3K3pFV0d1WVRicVRiTUZxM294S0J1SEtGVkRpTFZEN1prMjZrMnpHaWJpZkp4dlova2NuUVFQd05LaFBsbVRicVRiTXZKdms0d0hjSHJrNkhFOGNEUm9PWk51cE5zeThRSHJHMHdlWEp1YXNjRkRWNHpKdDFKdG1PN2N4NCtzWFRRTzhPVHZ4bmhpQTVZS2xCc3liZFNiWmpmc2o3R1A2NkR5ZEJNZURqUWdlYzJiZFNiWmpHMkE3RHdVWi9Ea3V2eWVNYUVlQVBtemJxVGJNL053T0J5Nmg0bHVTYWRnUDdqWDBQOEFNMmJkU2Jac0FHZUFzK01ZNCtkL25KYThnbUJZUXhZM0pBL3V1Yk51cE5zMXgwQi9qK1l0SkdLNjVqa2Q3b1Y5T0NNSnVQcjlObXpicVRiTmFlYkJzY1Rqc2NBYXJWMEZ1UWFMeFAxNHlDUUNsT0lETm0zVW0yYkxRWXNnSXNSaU1RbGFFY2pvZHM5bVFQdlJUd0Y3WXN5Z3d1L0hPbTNVbTJjY1lmU3hTSzBNUVdYM3pRRWg2bFFDL3dEdHppQVNXRVNuRW03dWROdXBOczZRaXoyTzZEWXhlOWVBYTZHaHFzZFJxTGpLY0dOZ0dDNVZqQU5CYmdza1IxTytmTnVwTnM5NUJoZnFLT2hoaUR3QW9CMUprVVJFZnR3aGtvNmx4T25kcjEyVHZHUDJUcndnSXlSY29FT2dFd0EwejV0MUp0eUdnOUkwVUdRYUJJOEwxWlNSVEdJZDUvNGdRUTRMZzROUmpvTlRaUDdubGY4QUZNOEo0TXpoK2pJZEFaZ0JweUUyNmsyNUUrTU13VTRyVWVqMEtMQlhNQXg0UzREOFNHeVp3ZGlKL0RvME9PcDRlcXJDQk05bklDdzVLYmZsQm5zdEpDT3FlYkNKZW1xSUlMR0J5SE96WFlKbm92Si8xQVFBSkFjbkhIZENaNVVTZTZqN1J1aXBIMXdpNWhwQUJ5VXdtWjF1cFF1QWRBNVF6S1FYdHl3Q0FCQjBLZjJOWFNiYkk3TG5nY0pCT2NqN1U0Uk9ZZVdPZ3drNWdaQ01Ta0k2cDBxV0NoOFFVZ0F3SExpSkhFUWg4ZVN3UURERTc3Zkh6TnVHUnA4YWRoTlNIRE5EWS9Ga3NnTy9HUTZCME0vaVNXUUdwbmtrT25hZmY0ZDlCTkFkOHhtbDJUN3crRGRsRTBVczl0aW5PbzdKbS9PczNUN0JNVE05a0EzS0FBSktvVlVLcUZWQ3FoVlFxb1ZVS3FGVkNxaFZRcW9WVUtxRlZDcWhWUXFvVlVLcUZWQ3FoVlFxb1ZVS2luSE4vOW9BREFNQkFBSUFBd0FBQUJEenp6UlR6enp6enp6enp6enp6enp6VHp6enp6eVJ6enp6enp6enp6enp6enp6enp3elR6enlUenp6enp6enp6enp6enp6enp6enp5anp5aHp6enp6enp6enp6enp6enp6enp6enp4end6enp6enp6enp6enp6enp6enp6enp6enl6enp6enp6enp6enp6OVBmenp6enp6enp6enpEenp6enp6enp6UW9NTU9EN0h6enp6enp6ekx6enp6enl1QUFNTTkrNHNNUE9MM3p6enp3THp6enp6eUVJV1kzenp3MjAwd1A4QTg4ODg4Qzg4ODg4OEtRODg4ODg4ODg4NkQwODg4ODhDODg4ODg4cUU4ODg4ODg4ODhyRGQ4ODg4OEM4ODg4ODhxRzg4ODg4ODg4OGdEVzg4ODg4Qzg4ODg4OGpTODg4ODg4ODg4SkdWODg4ODhDODg4ODg4cEEvODg4ODg4ODhDSDg4ODg4OEM4ODg4ODhNRDE4ODg4ODg4OEpIODg4ODg4Qzg4ODg4OG9EYjg4ODg4ODg1REQ4ODg4ODhDODg4ODg4L0NDLzhBUFBQUFB3UjkvUFBQUFBBdlBQUFBQUE9DQWZ0L1BPOEF5dlBQUFBQUEF2UFBQUFBQUERqUTQwcUF4VDNQUFBQUFBQQXZQUFBQUFBQUExmUUF3RGovQUR6enp6enp6elB6enp6enp6enp6eTJLL3dBODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODhFODhVODg4ODg4ODg4ODg4ODg4ODg4ODg4MGM4OHN3ODg4ODg4ODg4ODg4ODg4ODg4OHM4ODg4ODhjODg4ODg4ODg4ODg4ODg4ODhFODg4ODg4ODg4akJCQkJCQkJCQkJCQkIvOEFQUFBQUFAvRUFDWVJBUUFDQVFNRUFnSURBUUFBQUFBQUFBRUFFU0VRTURGQVFXRnhJS0ZSY0lHUnNmRC8yZ0FJQVFNQkFUOFEvUm8xd2xzYW5ZQjZWSEpuZjc5VEdHb3FyZGNRNUp5V0p5UytnYmw0SjV2aGtPQ1k0dVpUSWlLcDFFY01Xc1pTL251OHZ2U1FkeElMbE9BZkF1aGNaeXFkbkExNzZmWVp4ZFRKajdtZjhQVzF4L2xwOUxkRlFkYlE4ajNvYUR3YnBwUlVuazJuZ2VOQlFHNktMNGcwM0JzdlpWcnhCU2VlZ2l4YlB1amZoZjhBak9saS9IWXVORjYzcUNVeGxVY3g4OUNnV3k3MkRTbUhuZnI5d2lWaGlGcVlUQitvSTVOY0x5emx1UHhvNjdIUTVRd3h1aG9sbGlYREJtT3dORVZDVmY0empvZ0ZNRnovQUVqdEN0Y2ppZmNIbzdWYmg5Q1djc1ROY3Y2UC84UUFKaEVCQUFJQUJRUURBQU1CQUFBQUFBQUFBUUFSRUNFd01WRkJZWEdoSUVDeFlIQ0I4UC9hQUFnQkFnRUJQeEQralg2MmN3bEV1ZFpUNnV3RnpvdGVabVN1QUtESE16Sm5LcHM1UG9ER3JXZHI0WkdOc3BScVpabGZVQVdPS201Q2FoZGNkWDFpZE1VSHNNYjB2aTR0YnFiVUdkU1I5TmZ2V0p2L0FPZnVsNldIdmFydndrRi85ZGRJNXJ4Zzc4anF1L0ZEZmkwaGt2R0N0TzdxdS84QWI5aHN1enBITTk4RmF1cmNqaGlXVkVwclJvTHpMbmdmUUNtZDlIdzVyeXF1K1dGWUhYUXI4RkhKMWhWWkJNOVlLeXFEOGdWb25NRGhjamJwcjh3SU41a0hwdVovbVBjUkduSFBOam1iVHZ6Z1o2N3Y5SFAyWkJyZUJPVFBtYmtEbVp2bmNBYlZFdjhBMG0vMGtWcW1NZnJEYkxNZXJqNmpkdTlLOVJxMk95RzVrZXh4L09qV2ZuLy94QUFxRUFFQUFRSUNDUVVCQVFFQUFBQUFBQUFCRVFBaE1hRVFNRUZSWVhHQmtmRWdRTEhCOEZEUjRmL2FBQWdCQVFBQlB4RFVXUmI3akdwY0ljMVNZdm9SVzhsNXJYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4Vlc0STVNVk13NjE2azRoeVdva2hsYm4yQXFNWGNWR0lodVA5b0JZaitDZ2tKSlU4V09EY292Z1N5ZGJMZGZpMUJnUDRxQ1FralVZTTdqYVVJSkdUVXFCS3dGUTNOdHpmei9rcUhBZHB2b0JicWJ0UVhTNE1PUEgrV2srUlNCSjZ1U0g0ZnpjRndmeDlNUzJMWXF3ZnpyeTlsemw2QzVzV0gzL0FEemFURzRvUkJMam9tVXgyYzZnRGQvUXZibTV5MFhCdXY4QTBiRzMyZEZ6OVAzZjNDUERpWWU1dXZ5R2tTUU51ekE1SmZ1VUV2MkVJWGNObnQ4UjJsKzJqYTcxYy9iWTJvM2c1Y1hoUXEzWE5nNGJtZkxEU2tXeWRvTnliU2pIcXRKZTR2cHZ6OXVSTGNJcktudE1KS2lCMWFMZkd3YUw4NU9kVHFSd2VXTEhxa2dDeFlQNHN6MG9NQlByelk5RjlyTEQydFpWN0JxTllxZ281a1RFRHNGNkhFWmg4aEJ5bzVXNFd2dkJrMWNsTWtxSEl3T21xSi94d2k5em9sRkN2YkRaSHpRUkRPNXZXSXpvc3VtSDBqN0hPcXlyV1JXNkRxVGZ3T0hkS1V1eFE2UUsvYi9kRHdMeFgzVW9EdlUrc0ZZTHRQRmJjUkJjQndjWHRRVVlReU9YdDU0MHpPTEY5eFBveDFHelgzeDhWa3JIOTErMys2ZHgwblFtL0VubkpWMll6OVBFYmF6T3F5cldNVEtUd0xHUnFRUUFWYkFWZkNkZ2lPR042d2NhTWhyWVNqd1lmTGpwTGUwU2cxdkhHUlh5eEhXZVpVMkU0SW5rQ3ozMVN0ek80UUpPNVBYV1oxV1Zhd29IZjV2VURXOXBYWXBzUlBhRU9qZktuRmQrRWZqaFJBbE5sUDFYN2VzSW13TWljUnBGZWJWaTVyZG9wM1laRmw2TnM2ZVlWak4yRW5yNWtEV002ckt0WVFUZjU2UmZaQ2hSQTdxL08zNEpTUXlEQk5uV1ZGaVhBUVphNmF1TzFqTXFSbUg4S0tZZXJuM05PUXBKU3dPM1NTZmF3eTZ6T3F5cldRQ0l2ZTRhWnQwWDg2ZTBCWnVzK21MZkEvZlBXWjFXVmF5RzhidTJtYmQzN24rUGFZM1hkK2ZUTU41eWZyV1oxV1ZheTJON3B1YlJlMDdkWkdNN1dtVWJ4OEgxck02ckt0WktONitIMXBqM3Q5bC8zMmwwcGxjOU1vakhaejYxbWRWbFdzL1djSDFwZzN4N1A5dlo3S3ArdzlIR0R1ays5Wm5WWlZySWZISCsybWQ4bVgxN1B4ano5SEZydkwvZXN6cXNxMWtjVDZaWDNwanV4RHVmWHM3cVJQZEVmZm90NUdUSFdaMVdWYXkwKzJlY3RLNjhUK0p6OW54M0Y2L1JPbERDVllDakp3QWREV1oxV1ZhenlnNTltbTlrWERrSDJkeTd3WEFUNk5OaUp0dk1HdHpxc3Exa0tsek9nL0I2TGd6ZnQ4aCsvWlFCY1F1VUQ1ZE5ucGw3ajZhM09xeXJXUitTa2RVZWlWMlVyaElNZzlsRVRaZzRxL0JOTStscGJpcDhGMXVkVmxXdGUzQVRtUmxHa0c3RVRnSStWMzlrWmpJamZZWkJwbkV4NXlGZmhyYzZyS3RiQVJFejJTWGZCNjZUaHJnQ0grQ2RmWWhKUW5yMnpKU3F5M2RMUVVkOUxaTmF6cXNxMXJuWit6dmNPK25oWXJJTWxZSlFKdmJUb3lkUFlIYzFpTmdXSGVYb2FjMVlCWW9HNENOd0VHdHpxc3ExcmhRc3U5c2VqRDBwTGJ6c1JHRTAzOENCYmE5V3pqejE5eTFFYlZzSEZwRDlqVFlZQWNBZzAzVU1lMnlCMkpkdGRuVlpWcnRpMW9iRSt3bm1Pa1VFVVM0bEFaSFlYQVhaOHVldHhlejRpN2cydkNqb0VMbUw5bnhtNkFRS01BWFZvekppNXY0blFnNmE3T3F5clhCMWdBRjlrT0kxWkVwT3diQndmUWFka0ZiWEJjVGc5eW9LTkd3ZmRpR3FscU8yS2Z4WXlwUzVtSFk5dzJmUG9jcnZzTVA0SHp5MStkVmxXdkpZb0hCUGkrTzhwWU9HdWZ0L293UWdzUjJwelloQmM0N1RtZHF3c3VURGs3bmg2aDRaTFhPcGgxWDRVWTJCVFluYytIRDA3cUZybVptOTJVR2RRMEFOZm5WWlY3QzBrV0RTOENiVGgycVRSSGJ1Vy9XUHBCYlNSZEJNSHJTRFJzSE1tL1ZialFNQUpFWkUwVFlEaXZ1R0xVZmxrS052aS9BNzBxaXFyZFgwOEZCUVAweithZ3ppZUFld3pxc3E5amdxamNsU1EzbFlPRzA1TitMVFRsaFFPWStsMnhOMnNjMjFsd3JFZXdWbnVBeFpjNnhwaHZMeTRIRDB4RjRNWm9iWGdTMDRBSzVlT1J6dSt5MzNhcXdHNjNzNENjUUhaaS9UQ3BTSlhnc2NmbzdVaUJCaEVoSFVRd25FRWN4YkZObURmQWJqdHlIQ2piREFZQTRIc3drNTFXanVaOXJaUjFyZlZzSFB1VS9GTkYzMUdLNTkzMHNkdUZrY0FvcGw3aVhmQnlMOFNzRE9FUS82OGZhT0VNWXRRUUJnV3BzWGNqOW43WU1MUWhJbERHdVZHT2UydUdIS2xHWkE0UjBTT1pRYXpnYjNBNnhVTWpVRW5oRzQ0R2Z0cjNlTTl2eG9HSXhMME1rbUQ3Y1dERUJQSkMvU2pjSFpGUFlSUFdqTzNBd09BZTM0QUxIMys0YWJ6dTRjdjU5NEx1QnpxQU5KYkRITVVJZ2x4L25HUHNzT2ZwTUxhdzRPNythM0V1eU45QUFHQjZVQkRoU1IybXgzL3dBdUJoSzRHK29MdDFpK3NCR0c1M1VrNEh5L2toeExnYjZTY1JaYWtCRFV0K2ZsL3dDTzN3VGtLZ3VzcmJySjduaXcvd0NVR1lFdHp0L2hvc2NkMjJveGJOeGpRQWdJTmNna0pKVXpFT0RjcURhOFZXOWh6dDcxRmhFN3FtNHJ6dFc0QnUvMVFZQ1BhS1VBN3dwdmZOWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxVjQrYWdHUjFYb0FJQURXZi9aIi8+CjwvZGVmcz4KPC9zdmc+Cg==", this.supportedTransactionVersions = null, this._readyState = "undefined" == typeof window || "undefined" == typeof document ? r.i1.Unsupported : r.i1.NotDetected, this._disconnected = () => {
                        let e = this._wallet;
                        e && (e.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new a.at), this.emit("disconnect"))
                    }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== r.i1.Unsupported && (0, r.su)(() => !!window.trustwallet ? .solana ? .isTrust && (this._readyState = r.i1.Installed, this.emit("readyStateChange", this._readyState), !0))
                }
                get publicKey() {
                    return this._publicKey
                }
                get connecting() {
                    return this._connecting
                }
                get connected() {
                    return !!this._wallet ? .isConnected
                }
                get readyState() {
                    return this._readyState
                }
                async connect() {
                    try {
                        let e;
                        if (this.connected || this.connecting) return;
                        if (this._readyState !== r.i1.Installed) throw new a.OZ;
                        this._connecting = !0;
                        let t = window.trustwallet.solana;
                        if (!t.isConnected) try {
                            await t.connect()
                        } catch (e) {
                            throw new a.$w(e ? .message, e)
                        }
                        if (!t.publicKey) throw new a.cO;
                        try {
                            e = new o.nh(t.publicKey.toBytes())
                        } catch (e) {
                            throw new a.Nx(e ? .message, e)
                        }
                        t.on("disconnect", this._disconnected), this._wallet = t, this._publicKey = e, this.emit("connect", e)
                    } catch (e) {
                        throw this.emit("error", e), e
                    } finally {
                        this._connecting = !1
                    }
                }
                async disconnect() {
                    let e = this._wallet;
                    if (e) {
                        e.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null;
                        try {
                            await e.disconnect()
                        } catch (e) {
                            this.emit("error", new a.UG(e ? .message, e))
                        }
                    }
                    this.emit("disconnect")
                }
                async sendTransaction(e, t, n = {}) {
                    try {
                        let i = this._wallet;
                        if (!i) throw new a.oS;
                        try {
                            let {
                                signers: r,
                                ...a
                            } = n;
                            e = await this.prepareTransaction(e, t, a), r ? .length && e.partialSign(...r), a.preflightCommitment = a.preflightCommitment || t.commitment;
                            let {
                                signature: o
                            } = await i.signAndSendTransaction(e, a);
                            return o
                        } catch (e) {
                            if (e instanceof a.lj) throw e;
                            throw new a.IW(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signTransaction(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            return await t.signTransaction(e) || e
                        } catch (e) {
                            throw new a.PY(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signAllTransactions(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            return await t.signAllTransactions(e) || e
                        } catch (e) {
                            throw new a.PY(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
                async signMessage(e) {
                    try {
                        let t = this._wallet;
                        if (!t) throw new a.oS;
                        try {
                            let {
                                signature: n
                            } = await t.signMessage(e);
                            return n
                        } catch (e) {
                            throw new a.fk(e ? .message, e)
                        }
                    } catch (e) {
                        throw this.emit("error", e), e
                    }
                }
            }
        },
        97287: function(e, t, n) {
            "use strict";
            n.d(t, {
                BR: function() {
                    return r
                },
                aI: function() {
                    return i
                },
                gv: function() {
                    return a
                },
                l1: function() {
                    return o
                }
            });
            let i = "solana:mainnet",
                r = "solana:devnet",
                a = "solana:testnet",
                o = "solana:localnet"
        },
        12658: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return i
                }
            });
            let i = "solana:signAndSendTransaction"
        },
        56773: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return i
                }
            });
            let i = "solana:signMessage"
        },
        91684: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return i
                }
            });
            let i = "solana:signTransaction"
        },
        11109: function(e, t, n) {
            "use strict";
            n.d(t, {
                Gm: function() {
                    return r
                },
                Qy: function() {
                    return s
                },
                ZF: function() {
                    return c
                }
            });
            var i = n(69485);

            function r(e) {
                return {
                    onFetch: (t, n) => {
                        let r = async () => {
                            let n;
                            let r = t.options,
                                s = t.fetchOptions ? .meta ? .fetchMore ? .direction,
                                c = t.state.data ? .pages || [],
                                l = t.state.data ? .pageParams || [],
                                u = !1,
                                d = e => {
                                    Object.defineProperty(e, "signal", {
                                        enumerable: !0,
                                        get: () => (t.signal.aborted ? u = !0 : t.signal.addEventListener("abort", () => {
                                            u = !0
                                        }), t.signal)
                                    })
                                },
                                h = t.options.queryFn && t.options.queryFn !== i.CN ? t.options.queryFn : () => Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`)),
                                f = async (e, n, r) => {
                                    if (u) return Promise.reject();
                                    if (null == n && e.pages.length) return Promise.resolve(e);
                                    let a = {
                                        queryKey: t.queryKey,
                                        pageParam: n,
                                        direction: r ? "backward" : "forward",
                                        meta: t.options.meta
                                    };
                                    d(a);
                                    let o = await h(a),
                                        {
                                            maxPages: s
                                        } = t.options,
                                        c = r ? i.Ht : i.VX;
                                    return {
                                        pages: c(e.pages, o, s),
                                        pageParams: c(e.pageParams, n, s)
                                    }
                                };
                            if (s && c.length) {
                                let e = "backward" === s,
                                    t = {
                                        pages: c,
                                        pageParams: l
                                    },
                                    i = (e ? o : a)(r, t);
                                n = await f(t, i, e)
                            } else {
                                n = await f({
                                    pages: [],
                                    pageParams: []
                                }, l[0] ? ? r.initialPageParam);
                                let t = e ? ? c.length;
                                for (let e = 1; e < t; e++) {
                                    let e = a(r, n);
                                    n = await f(n, e)
                                }
                            }
                            return n
                        };
                        t.options.persister ? t.fetchFn = () => t.options.persister ? .(r, {
                            queryKey: t.queryKey,
                            meta: t.options.meta,
                            signal: t.signal
                        }, n) : t.fetchFn = r
                    }
                }
            }

            function a(e, {
                pages: t,
                pageParams: n
            }) {
                let i = t.length - 1;
                return e.getNextPageParam(t[i], t, n[i], n)
            }

            function o(e, {
                pages: t,
                pageParams: n
            }) {
                return e.getPreviousPageParam ? .(t[0], t, n[0], n)
            }

            function s(e, t) {
                return !!t && null != a(e, t)
            }

            function c(e, t) {
                return !!t && !!e.getPreviousPageParam && null != o(e, t)
            }
        },
        21705: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return p
                }
            });
            var i = n(69485),
                r = n(53275),
                a = n(46773),
                o = n(95070),
                s = class extends o.l {
                    constructor(e = {}) {
                        super(), this.config = e, this.#e = new Map
                    }#
                    e;
                    build(e, t, n) {
                        let a = t.queryKey,
                            o = t.queryHash ? ? (0, i.Rm)(a, t),
                            s = this.get(o);
                        return s || (s = new r.A({
                            cache: this,
                            queryKey: a,
                            queryHash: o,
                            options: e.defaultQueryOptions(t),
                            state: n,
                            defaultOptions: e.getQueryDefaults(a)
                        }), this.add(s)), s
                    }
                    add(e) {
                        this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                            type: "added",
                            query: e
                        }))
                    }
                    remove(e) {
                        let t = this.#e.get(e.queryHash);
                        t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
                            type: "removed",
                            query: e
                        }))
                    }
                    clear() {
                        a.V.batch(() => {
                            this.getAll().forEach(e => {
                                this.remove(e)
                            })
                        })
                    }
                    get(e) {
                        return this.#e.get(e)
                    }
                    getAll() {
                        return [...this.#e.values()]
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return this.getAll().find(e => (0, i._x)(t, e))
                    }
                    findAll(e = {}) {
                        let t = this.getAll();
                        return Object.keys(e).length > 0 ? t.filter(t => (0, i._x)(e, t)) : t
                    }
                    notify(e) {
                        a.V.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    onFocus() {
                        a.V.batch(() => {
                            this.getAll().forEach(e => {
                                e.onFocus()
                            })
                        })
                    }
                    onOnline() {
                        a.V.batch(() => {
                            this.getAll().forEach(e => {
                                e.onOnline()
                            })
                        })
                    }
                },
                c = n(29068),
                l = class extends o.l {
                    constructor(e = {}) {
                        super(), this.config = e, this.#t = new Map, this.#n = Date.now()
                    }#
                    t;#
                    n;
                    build(e, t, n) {
                        let i = new c.m({
                            mutationCache: this,
                            mutationId: ++this.#n,
                            options: e.defaultMutationOptions(t),
                            state: n
                        });
                        return this.add(i), i
                    }
                    add(e) {
                        let t = u(e),
                            n = this.#t.get(t) ? ? [];
                        n.push(e), this.#t.set(t, n), this.notify({
                            type: "added",
                            mutation: e
                        })
                    }
                    remove(e) {
                        let t = u(e);
                        if (this.#t.has(t)) {
                            let n = this.#t.get(t) ? .filter(t => t !== e);
                            n && (0 === n.length ? this.#t.delete(t) : this.#t.set(t, n))
                        }
                        this.notify({
                            type: "removed",
                            mutation: e
                        })
                    }
                    canRun(e) {
                        let t = this.#t.get(u(e)) ? .find(e => "pending" === e.state.status);
                        return !t || t === e
                    }
                    runNext(e) {
                        let t = this.#t.get(u(e)) ? .find(t => t !== e && t.state.isPaused);
                        return t ? .continue() ? ? Promise.resolve()
                    }
                    clear() {
                        a.V.batch(() => {
                            this.getAll().forEach(e => {
                                this.remove(e)
                            })
                        })
                    }
                    getAll() {
                        return [...this.#t.values()].flat()
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return this.getAll().find(e => (0, i.X7)(t, e))
                    }
                    findAll(e = {}) {
                        return this.getAll().filter(t => (0, i.X7)(e, t))
                    }
                    notify(e) {
                        a.V.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    resumePausedMutations() {
                        let e = this.getAll().filter(e => e.state.isPaused);
                        return a.V.batch(() => Promise.all(e.map(e => e.continue().catch(i.ZT))))
                    }
                };

            function u(e) {
                return e.options.scope ? .id ? ? String(e.mutationId)
            }
            var d = n(9022),
                h = n(99835),
                f = n(11109),
                p = class {#
                    i;#
                    r;#
                    a;#
                    o;#
                    s;#
                    c;#
                    l;#
                    u;
                    constructor(e = {}) {
                        this.#i = e.queryCache || new s, this.#r = e.mutationCache || new l, this.#a = e.defaultOptions || {}, this.#o = new Map, this.#s = new Map, this.#c = 0
                    }
                    mount() {
                        this.#c++, 1 === this.#c && (this.#l = d.j.subscribe(async e => {
                            e && (await this.resumePausedMutations(), this.#i.onFocus())
                        }), this.#u = h.N.subscribe(async e => {
                            e && (await this.resumePausedMutations(), this.#i.onOnline())
                        }))
                    }
                    unmount() {
                        this.#c--, 0 === this.#c && (this.#l ? .(), this.#l = void 0, this.#u ? .(), this.#u = void 0)
                    }
                    isFetching(e) {
                        return this.#i.findAll({ ...e,
                            fetchStatus: "fetching"
                        }).length
                    }
                    isMutating(e) {
                        return this.#r.findAll({ ...e,
                            status: "pending"
                        }).length
                    }
                    getQueryData(e) {
                        let t = this.defaultQueryOptions({
                            queryKey: e
                        });
                        return this.#i.get(t.queryHash) ? .state.data
                    }
                    ensureQueryData(e) {
                        let t = this.getQueryData(e.queryKey);
                        if (void 0 === t) return this.fetchQuery(e); {
                            let n = this.defaultQueryOptions(e),
                                i = this.#i.build(this, n);
                            return e.revalidateIfStale && i.isStaleByTime(n.staleTime) && this.prefetchQuery(n), Promise.resolve(t)
                        }
                    }
                    getQueriesData(e) {
                        return this.#i.findAll(e).map(({
                            queryKey: e,
                            state: t
                        }) => [e, t.data])
                    }
                    setQueryData(e, t, n) {
                        let r = this.defaultQueryOptions({
                                queryKey: e
                            }),
                            a = this.#i.get(r.queryHash),
                            o = a ? .state.data,
                            s = (0, i.SE)(t, o);
                        if (void 0 !== s) return this.#i.build(this, r).setData(s, { ...n,
                            manual: !0
                        })
                    }
                    setQueriesData(e, t, n) {
                        return a.V.batch(() => this.#i.findAll(e).map(({
                            queryKey: e
                        }) => [e, this.setQueryData(e, t, n)]))
                    }
                    getQueryState(e) {
                        let t = this.defaultQueryOptions({
                            queryKey: e
                        });
                        return this.#i.get(t.queryHash) ? .state
                    }
                    removeQueries(e) {
                        let t = this.#i;
                        a.V.batch(() => {
                            t.findAll(e).forEach(e => {
                                t.remove(e)
                            })
                        })
                    }
                    resetQueries(e, t) {
                        let n = this.#i,
                            i = {
                                type: "active",
                                ...e
                            };
                        return a.V.batch(() => (n.findAll(e).forEach(e => {
                            e.reset()
                        }), this.refetchQueries(i, t)))
                    }
                    cancelQueries(e = {}, t = {}) {
                        let n = {
                            revert: !0,
                            ...t
                        };
                        return Promise.all(a.V.batch(() => this.#i.findAll(e).map(e => e.cancel(n)))).then(i.ZT).catch(i.ZT)
                    }
                    invalidateQueries(e = {}, t = {}) {
                        return a.V.batch(() => {
                            if (this.#i.findAll(e).forEach(e => {
                                    e.invalidate()
                                }), "none" === e.refetchType) return Promise.resolve();
                            let n = { ...e,
                                type: e.refetchType ? ? e.type ? ? "active"
                            };
                            return this.refetchQueries(n, t)
                        })
                    }
                    refetchQueries(e = {}, t) {
                        let n = { ...t,
                            cancelRefetch: t ? .cancelRefetch ? ? !0
                        };
                        return Promise.all(a.V.batch(() => this.#i.findAll(e).filter(e => !e.isDisabled()).map(e => {
                            let t = e.fetch(void 0, n);
                            return n.throwOnError || (t = t.catch(i.ZT)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                        }))).then(i.ZT)
                    }
                    fetchQuery(e) {
                        let t = this.defaultQueryOptions(e);
                        void 0 === t.retry && (t.retry = !1);
                        let n = this.#i.build(this, t);
                        return n.isStaleByTime(t.staleTime) ? n.fetch(t) : Promise.resolve(n.state.data)
                    }
                    prefetchQuery(e) {
                        return this.fetchQuery(e).then(i.ZT).catch(i.ZT)
                    }
                    fetchInfiniteQuery(e) {
                        return e.behavior = (0, f.Gm)(e.pages), this.fetchQuery(e)
                    }
                    prefetchInfiniteQuery(e) {
                        return this.fetchInfiniteQuery(e).then(i.ZT).catch(i.ZT)
                    }
                    resumePausedMutations() {
                        return h.N.isOnline() ? this.#r.resumePausedMutations() : Promise.resolve()
                    }
                    getQueryCache() {
                        return this.#i
                    }
                    getMutationCache() {
                        return this.#r
                    }
                    getDefaultOptions() {
                        return this.#a
                    }
                    setDefaultOptions(e) {
                        this.#a = e
                    }
                    setQueryDefaults(e, t) {
                        this.#o.set((0, i.Ym)(e), {
                            queryKey: e,
                            defaultOptions: t
                        })
                    }
                    getQueryDefaults(e) {
                        let t = [...this.#o.values()],
                            n = {};
                        return t.forEach(t => {
                            (0, i.to)(e, t.queryKey) && (n = { ...n,
                                ...t.defaultOptions
                            })
                        }), n
                    }
                    setMutationDefaults(e, t) {
                        this.#s.set((0, i.Ym)(e), {
                            mutationKey: e,
                            defaultOptions: t
                        })
                    }
                    getMutationDefaults(e) {
                        let t = [...this.#s.values()],
                            n = {};
                        return t.forEach(t => {
                            (0, i.to)(e, t.mutationKey) && (n = { ...n,
                                ...t.defaultOptions
                            })
                        }), n
                    }
                    defaultQueryOptions(e) {
                        if (e._defaulted) return e;
                        let t = { ...this.#a.queries,
                            ...this.getQueryDefaults(e.queryKey),
                            ...e,
                            _defaulted: !0
                        };
                        return t.queryHash || (t.queryHash = (0, i.Rm)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), !0 !== t.enabled && t.queryFn === i.CN && (t.enabled = !1), t
                    }
                    defaultMutationOptions(e) {
                        return e ? ._defaulted ? e : { ...this.#a.mutations,
                            ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                            ...e,
                            _defaulted : !0
                        }
                    }
                    clear() {
                        this.#i.clear(), this.#r.clear()
                    }
                }
        },
        69269: function(e, t, n) {
            "use strict";
            let i;
            n.d(t, {
                _: function() {
                    return D
                }
            });
            var r = n(6688);
            let a = e => (t, n, i) => {
                    let r = i.subscribe;
                    return i.subscribe = (e, t, n) => {
                        let a = e;
                        if (t) {
                            let r = (null == n ? void 0 : n.equalityFn) || Object.is,
                                o = e(i.getState());
                            a = n => {
                                let i = e(n);
                                if (!r(o, i)) {
                                    let e = o;
                                    t(o = i, e)
                                }
                            }, (null == n ? void 0 : n.fireImmediately) && t(o, o)
                        }
                        return r(a)
                    }, e(t, n, i)
                },
                o = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => o(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => o(t)(e)
                        }
                    }
                },
                s = (e, t) => (n, i, r) => {
                    let a, s = {
                            storage: function(e, t) {
                                let n;
                                try {
                                    n = e()
                                } catch (e) {
                                    return
                                }
                                return {
                                    getItem: e => {
                                        var t;
                                        let i = e => null === e ? null : JSON.parse(e, void 0),
                                            r = null != (t = n.getItem(e)) ? t : null;
                                        return r instanceof Promise ? r.then(i) : i(r)
                                    },
                                    setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
                                    removeItem: e => n.removeItem(e)
                                }
                            }(() => localStorage),
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        c = !1,
                        l = new Set,
                        u = new Set,
                        d = s.storage;
                    if (!d) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), n(...e)
                    }, i, r);
                    let h = () => {
                            let e = s.partialize({ ...i()
                            });
                            return d.setItem(s.name, {
                                state: e,
                                version: s.version
                            })
                        },
                        f = r.setState;
                    r.setState = (e, t) => {
                        f(e, t), h()
                    };
                    let p = e((...e) => {
                        n(...e), h()
                    }, i, r);
                    r.getInitialState = () => p;
                    let m = () => {
                        var e, t;
                        if (!d) return;
                        c = !1, l.forEach(e => {
                            var t;
                            return e(null != (t = i()) ? t : p)
                        });
                        let r = (null == (t = s.onRehydrateStorage) ? void 0 : t.call(s, null != (e = i()) ? e : p)) || void 0;
                        return o(d.getItem.bind(d))(s.name).then(e => {
                            if (e) {
                                if ("number" != typeof e.version || e.version === s.version) return [!1, e.state];
                                if (s.migrate) return [!0, s.migrate(e.state, e.version)];
                                console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                            }
                            return [!1, void 0]
                        }).then(e => {
                            var t;
                            let [r, o] = e;
                            if (n(a = s.merge(o, null != (t = i()) ? t : p), !0), r) return h()
                        }).then(() => {
                            null == r || r(a, void 0), a = i(), c = !0, u.forEach(e => e(a))
                        }).catch(e => {
                            null == r || r(void 0, e)
                        })
                    };
                    return r.persist = {
                        setOptions: e => {
                            s = { ...s,
                                ...e
                            }, e.storage && (d = e.storage)
                        },
                        clearStorage: () => {
                            null == d || d.removeItem(s.name)
                        },
                        getOptions: () => s,
                        rehydrate: () => m(),
                        hasHydrated: () => c,
                        onHydrate: e => (l.add(e), () => {
                            l.delete(e)
                        }),
                        onFinishHydration: e => (u.add(e), () => {
                            u.delete(e)
                        })
                    }, s.skipHydration || m(), a || p
                },
                c = e => {
                    let t;
                    let n = new Set,
                        i = (e, i) => {
                            let r = "function" == typeof e ? e(t) : e;
                            if (!Object.is(r, t)) {
                                let e = t;
                                t = (null != i ? i : "object" != typeof r || null === r) ? r : Object.assign({}, t, r), n.forEach(n => n(t, e))
                            }
                        },
                        r = () => t,
                        a = {
                            setState: i,
                            getState: r,
                            getInitialState: () => o,
                            subscribe: e => (n.add(e), () => n.delete(e))
                        },
                        o = t = e(i, r, a);
                    return a
                },
                l = e => e ? c(e) : c;
            var u = n(52204),
                d = n(53865),
                h = n(43382),
                f = n(10619),
                p = n(20040),
                m = n(67559),
                w = n(42027);
            let y = /(rabby|trustwallet)/;

            function g(e = {}) {
                let t, n, i, r;
                let {
                    shimDisconnect: a = !0,
                    unstable_shimAsyncInject: o
                } = e;

                function s() {
                    let t = e.target;
                    if ("function" == typeof t) {
                        let e = t();
                        if (e) return e
                    }
                    return "object" == typeof t ? t : "string" == typeof t ? { ...M[t] ? ? {
                            id: t,
                            name: `${t[0].toUpperCase()}${t.slice(1)}`,
                            provider: `is${t[0].toUpperCase()}${t.slice(1)}`
                        }
                    } : {
                        id: "injected",
                        name: "Injected",
                        provider: e => e ? .ethereum
                    }
                }
                return c => ({
                    get icon() {
                        return s().icon
                    },
                    get id() {
                        return s().id
                    },
                    get name() {
                        return s().name
                    },
                    get supportsSimulation() {
                        return y.test(this.id.toLowerCase())
                    },
                    type: g.type,
                    async setup() {
                        let n = await this.getProvider();
                        n ? .on && e.target && (i || (i = this.onConnect.bind(this), n.on("connect", i)), t || (t = this.onAccountsChanged.bind(this), n.on("accountsChanged", t)))
                    },
                    async connect({
                        chainId: o,
                        isReconnecting: s
                    } = {}) {
                        let l = await this.getProvider();
                        if (!l) throw new w.M;
                        let h = [];
                        if (s) h = await this.getAccounts().catch(() => []);
                        else if (a) try {
                            let e = await l.request({
                                method: "wallet_requestPermissions",
                                params: [{
                                    eth_accounts: {}
                                }]
                            });
                            (h = e[0] ? .caveats ? .[0] ? .value ? .map(e => u.K(e))).length > 0 && (h = await this.getAccounts())
                        } catch (e) {
                            if (e.code === d.ab.code) throw new d.ab(e);
                            if (e.code === d.pT.code) throw e
                        }
                        try {
                            h ? .length || s || (h = (await l.request({
                                method: "eth_requestAccounts"
                            })).map(e => (0, u.K)(e))), i && (l.removeListener("connect", i), i = void 0), t || (t = this.onAccountsChanged.bind(this), l.on("accountsChanged", t)), n || (n = this.onChainChanged.bind(this), l.on("chainChanged", n)), r || (r = this.onDisconnect.bind(this), l.on("disconnect", r));
                            let f = await this.getChainId();
                            if (o && f !== o) {
                                let e = await this.switchChain({
                                    chainId: o
                                }).catch(e => {
                                    if (e.code === d.ab.code) throw e;
                                    return {
                                        id: f
                                    }
                                });
                                f = e ? .id ? ? f
                            }
                            return a && await c.storage ? .removeItem(`${this.id}.disconnected`), e.target || await c.storage ? .setItem("injected.connected", !0), {
                                accounts: h,
                                chainId: f
                            }
                        } catch (e) {
                            if (e.code === d.ab.code) throw new d.ab(e);
                            if (e.code === d.pT.code) throw new d.pT(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let t = await this.getProvider();
                        if (!t) throw new w.M;
                        n && (t.removeListener("chainChanged", n), n = void 0), r && (t.removeListener("disconnect", r), r = void 0), i || (i = this.onConnect.bind(this), t.on("connect", i));
                        try {
                            await (0, h.F)(() => t.request({
                                method: "wallet_revokePermissions",
                                params: [{
                                    eth_accounts: {}
                                }]
                            }), {
                                timeout: 100
                            })
                        } catch {}
                        a && await c.storage ? .setItem(`${this.id}.disconnected`, !0), e.target || await c.storage ? .removeItem("injected.connected")
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        if (!e) throw new w.M;
                        return (await e.request({
                            method: "eth_accounts"
                        })).map(e => (0, u.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider();
                        if (!e) throw new w.M;
                        return Number(await e.request({
                            method: "eth_chainId"
                        }))
                    },
                    async getProvider() {
                        let e;
                        if ("undefined" == typeof window) return;
                        let t = s();
                        return (e = "function" == typeof t.provider ? t.provider(window) : "string" == typeof t.provider ? N(window, t.provider) : t.provider) && !e.removeListener && ("off" in e && "function" == typeof e.off ? e.removeListener = e.off : e.removeListener = () => {}), e
                    },
                    async isAuthorized() {
                        try {
                            if (a && await c.storage ? .getItem(`${this.id}.disconnected`) || !e.target && !await c.storage ? .getItem("injected.connected")) return !1;
                            if (!await this.getProvider()) {
                                if (void 0 !== o && !1 !== o) {
                                    let e = async () => ("undefined" != typeof window && window.removeEventListener("ethereum#initialized", e), !!await this.getProvider()),
                                        t = "number" == typeof o ? o : 1e3;
                                    if (await Promise.race([..."undefined" != typeof window ? [new Promise(t => window.addEventListener("ethereum#initialized", () => t(e()), {
                                            once: !0
                                        }))] : [], new Promise(n => setTimeout(() => n(e()), t))])) return !0
                                }
                                throw new w.M
                            }
                            return !!(await (0, f.J)(() => this.getAccounts())).length
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: t
                    }) {
                        let n = await this.getProvider();
                        if (!n) throw new w.M;
                        let i = c.chains.find(e => e.id === t);
                        if (!i) throw new d.x3(new m.X4);
                        try {
                            return await Promise.all([n.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, p.eC)(t)
                                }]
                            }).then(async () => {
                                await this.getChainId() === t && c.emitter.emit("change", {
                                    chainId: t
                                })
                            }), new Promise(e => {
                                let n = i => {
                                    "chainId" in i && i.chainId === t && (c.emitter.off("change", n), e())
                                };
                                c.emitter.on("change", n)
                            })]), i
                        } catch (r) {
                            if (4902 === r.code || r ? .data ? .originalError ? .code === 4902) try {
                                let r, a;
                                let {
                                    default: o,
                                    ...s
                                } = i.blockExplorers ? ? {};
                                e ? .blockExplorerUrls ? r = e.blockExplorerUrls : o && (r = [o.url, ...Object.values(s).map(e => e.url)]), a = e ? .rpcUrls ? .length ? e.rpcUrls : [i.rpcUrls.default ? .http[0] ? ? ""];
                                let c = {
                                    blockExplorerUrls: r,
                                    chainId: (0, p.eC)(t),
                                    chainName: e ? .chainName ? ? i.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? i.nativeCurrency,
                                    rpcUrls: a
                                };
                                if (await n.request({
                                        method: "wallet_addEthereumChain",
                                        params: [c]
                                    }), await this.getChainId() !== t) throw new d.ab(Error("User rejected switch after adding network."));
                                return i
                            } catch (e) {
                                throw new d.ab(e)
                            }
                            if (r.code === d.ab.code) throw new d.ab(r);
                            throw new d.x3(r)
                        }
                    },
                    async onAccountsChanged(e) {
                        if (0 === e.length) this.onDisconnect();
                        else if (c.emitter.listenerCount("connect")) {
                            let e = (await this.getChainId()).toString();
                            this.onConnect({
                                chainId: e
                            }), a && await c.storage ? .removeItem(`${this.id}.disconnected`)
                        } else c.emitter.emit("change", {
                            accounts: e.map(e => (0, u.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = Number(e);
                        c.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onConnect(e) {
                        let a = await this.getAccounts();
                        if (0 === a.length) return;
                        let o = Number(e.chainId);
                        c.emitter.emit("connect", {
                            accounts: a,
                            chainId: o
                        });
                        let s = await this.getProvider();
                        s && (i && (s.removeListener("connect", i), i = void 0), t || (t = this.onAccountsChanged.bind(this), s.on("accountsChanged", t)), n || (n = this.onChainChanged.bind(this), s.on("chainChanged", n)), r || (r = this.onDisconnect.bind(this), s.on("disconnect", r)))
                    },
                    async onDisconnect(e) {
                        let t = await this.getProvider();
                        e && 1013 === e.code && t && (await this.getAccounts()).length || (c.emitter.emit("disconnect"), t && (n && (t.removeListener("chainChanged", n), n = void 0), r && (t.removeListener("disconnect", r), r = void 0), i || (i = this.onConnect.bind(this), t.on("connect", i))))
                    }
                })
            }
            g.type = "injected";
            let M = {
                coinbaseWallet: {
                    id: "coinbaseWallet",
                    name: "Coinbase Wallet",
                    provider: e => e ? .coinbaseWalletExtension ? e.coinbaseWalletExtension : N(e, "isCoinbaseWallet")
                },
                metaMask: {
                    id: "metaMask",
                    name: "MetaMask",
                    provider: e => N(e, e => {
                        if (!e.isMetaMask || e.isBraveWallet && !e._events && !e._state) return !1;
                        for (let t of ["isApexWallet", "isAvalanche", "isBitKeep", "isBlockWallet", "isKuCoinWallet", "isMathWallet", "isOkxWallet", "isOKExWallet", "isOneInchIOSWallet", "isOneInchAndroidWallet", "isOpera", "isPortal", "isRabby", "isTokenPocket", "isTokenary", "isUniswapWallet", "isZerion"])
                            if (e[t]) return !1;
                        return !0
                    })
                },
                phantom: {
                    id: "phantom",
                    name: "Phantom",
                    provider: e => e ? .phantom ? .ethereum ? e.phantom ? .ethereum : N(e, "isPhantom")
                }
            };

            function N(e, t) {
                function n(e) {
                    return "function" == typeof t ? t(e) : "string" != typeof t || e[t]
                }
                let i = e.ethereum;
                return i ? .providers ? i.providers.find(e => n(e)) : i && n(i) ? i : void 0
            }
            var b = n(37109);
            class v {
                constructor(e) {
                    Object.defineProperty(this, "uid", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    }), Object.defineProperty(this, "_emitter", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: new b.v
                    })
                }
                on(e, t) {
                    this._emitter.on(e, t)
                }
                once(e, t) {
                    this._emitter.once(e, t)
                }
                off(e, t) {
                    this._emitter.off(e, t)
                }
                emit(e, ...t) {
                    let n = t[0];
                    this._emitter.emit(e, {
                        uid: this.uid,
                        ...n
                    })
                }
                listenerCount(e) {
                    return this._emitter.listenerCount(e)
                }
            }

            function T(e, t) {
                return JSON.parse(e, (e, n) => {
                    let i = n;
                    return i ? .__type === "bigint" && (i = BigInt(i.value)), i ? .__type === "Map" && (i = new Map(i.value)), t ? .(e, i) ? ? i
                })
            }

            function I(e, t) {
                return e.slice(0, t).join(".") || "."
            }

            function S(e, t) {
                let {
                    length: n
                } = e;
                for (let i = 0; i < n; ++i)
                    if (e[i] === t) return i + 1;
                return 0
            }

            function j(e, t, n, i) {
                return JSON.stringify(e, function(e, t) {
                    let n = "function" == typeof e,
                        i = "function" == typeof t,
                        r = [],
                        a = [];
                    return function(o, s) {
                        if ("object" == typeof s) {
                            if (r.length) {
                                let e = S(r, this);
                                0 === e ? r[r.length] = this : (r.splice(e), a.splice(e)), a[a.length] = o;
                                let n = S(r, s);
                                if (0 !== n) return i ? t.call(this, o, s, I(a, n)) : `[ref=${I(a,n)}]`
                            } else r[0] = s, a[0] = o
                        }
                        return n ? e.call(this, o, s) : s
                    }
                }((e, n) => {
                    let i = n;
                    return "bigint" == typeof i && (i = {
                        __type: "bigint",
                        value: n.toString()
                    }), i instanceof Map && (i = {
                        __type: "Map",
                        value: Array.from(n.entries())
                    }), t ? .(e, i) ? ? i
                }, i), n ? ? void 0)
            }
            let U = {
                    getItem: () => null,
                    setItem: () => {},
                    removeItem: () => {}
                },
                E = 256;
            var x = n(50338);

            function D(e) {
                let t;
                let {
                    multiInjectedProviderDiscovery: n = !0,
                    storage: o = function(e) {
                        let {
                            deserialize: t = T,
                            key: n = "wagmi",
                            serialize: i = j,
                            storage: r = U
                        } = e;

                        function a(e) {
                            return e instanceof Promise ? e.then(e => e).catch(() => null) : e
                        }
                        return { ...r,
                            key: n,
                            async getItem(e, i) {
                                let o = r.getItem(`${n}.${e}`),
                                    s = await a(o);
                                return s ? t(s) ? ? null : i ? ? null
                            },
                            async setItem(e, t) {
                                let o = `${n}.${e}`;
                                null === t ? await a(r.removeItem(o)) : await a(r.setItem(o, i(t)))
                            },
                            async removeItem(e) {
                                await a(r.removeItem(`${n}.${e}`))
                            }
                        }
                    }({
                        storage: "undefined" != typeof window && window.localStorage ? window.localStorage : U
                    }),
                    syncConnectedChain: c = !0,
                    ssr: u = !1,
                    ...d
                } = e, h = "undefined" != typeof window && n ? function() {
                    let e = new Set,
                        t = [],
                        n = () => (function(e) {
                            if ("undefined" == typeof window) return;
                            let t = t => e(t.detail);
                            return window.addEventListener("eip6963:announceProvider", t), window.dispatchEvent(new CustomEvent("eip6963:requestProvider")), () => window.removeEventListener("eip6963:announceProvider", t)
                        })(n => {
                            t.some(({
                                info: e
                            }) => e.uuid === n.info.uuid) || (t = [...t, n], e.forEach(e => e(t, {
                                added: [n]
                            })))
                        }),
                        i = n();
                    return {
                        _listeners: () => e,
                        clear() {
                            e.forEach(e => e([], {
                                removed: [...t]
                            })), t = []
                        },
                        destroy() {
                            this.clear(), e.clear(), i ? .()
                        },
                        findProvider: ({
                            rdns: e
                        }) => t.find(t => t.info.rdns === e),
                        getProviders: () => t,
                        reset() {
                            this.clear(), i ? .(), i = n()
                        },
                        subscribe: (n, {
                            emitImmediately: i
                        } = {}) => (e.add(n), i && n(t, {
                            added: t
                        }), () => e.delete(n))
                    }
                }() : void 0, f = l(() => d.chains), p = l(() => {
                    let e = [],
                        t = new Set;
                    for (let n of d.connectors ? ? []) {
                        let i = w(n);
                        e.push(i), !u && i.rdns && t.add(i.rdns)
                    }
                    if (!u && h)
                        for (let n of h.getProviders()) t.has(n.info.rdns) || e.push(w(y(n)));
                    return e
                });

                function w(e) {
                    let t = new v(function(e = 11) {
                            if (!i || E + e > 512) {
                                i = "", E = 0;
                                for (let e = 0; e < 256; e++) i += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                            }
                            return i.substring(E, E++ + e)
                        }()),
                        n = { ...e({
                                emitter: t,
                                chains: f.getState(),
                                storage: o,
                                transports: d.transports
                            }),
                            emitter: t,
                            uid: t.uid
                        };
                    return t.on("connect", L), n.setup ? .(), n
                }

                function y(e) {
                    let {
                        info: t
                    } = e, n = e.provider;
                    return g({
                        target: { ...t,
                            id: t.rdns,
                            provider: n
                        }
                    })
                }
                let M = new Map;

                function N() {
                    return {
                        chainId: f.getState()[0].id,
                        connections: new Map,
                        current: null,
                        status: "disconnected"
                    }
                }
                let b = "0.0.0-canary-";
                t = x.i.startsWith(b) ? Number.parseInt(x.i.replace(b, "")) : Number.parseInt(x.i.split(".")[0] ? ? "0");
                let I = l(a(o ? s(N, {
                    migrate(e, n) {
                        if (n === t) return e;
                        let i = N(),
                            r = S(e, i.chainId);
                        return { ...i,
                            chainId: r
                        }
                    },
                    name: "store",
                    partialize: e => ({
                        connections: {
                            __type: "Map",
                            value: Array.from(e.connections.entries()).map(([e, t]) => {
                                let {
                                    id: n,
                                    name: i,
                                    type: r,
                                    uid: a
                                } = t.connector;
                                return [e, { ...t,
                                    connector: {
                                        id: n,
                                        name: i,
                                        type: r,
                                        uid: a
                                    }
                                }]
                            })
                        },
                        chainId: e.chainId,
                        current: e.current
                    }),
                    merge(e, t) {
                        "object" == typeof e && e && "status" in e && delete e.status;
                        let n = S(e, t.chainId);
                        return { ...t,
                            ...e,
                            chainId: n
                        }
                    },
                    skipHydration: u,
                    storage: o,
                    version: t
                }) : N));

                function S(e, t) {
                    return e && "object" == typeof e && "chainId" in e && "number" == typeof e.chainId && f.getState().some(t => t.id === e.chainId) ? e.chainId : t
                }

                function D(e) {
                    I.setState(t => {
                        let n = t.connections.get(e.uid);
                        return n ? { ...t,
                            connections: new Map(t.connections).set(e.uid, {
                                accounts: e.accounts ? ? n.accounts,
                                chainId: e.chainId ? ? n.chainId,
                                connector: n.connector
                            })
                        } : t
                    })
                }

                function L(e) {
                    "connecting" !== I.getState().status && "reconnecting" !== I.getState().status && I.setState(t => {
                        let n = p.getState().find(t => t.uid === e.uid);
                        return n ? (n.emitter.listenerCount("connect") && n.emitter.off("connect", D), n.emitter.listenerCount("change") || n.emitter.on("change", D), n.emitter.listenerCount("disconnect") || n.emitter.on("disconnect", O), { ...t,
                            connections: new Map(t.connections).set(e.uid, {
                                accounts: e.accounts,
                                chainId: e.chainId,
                                connector: n
                            }),
                            current: e.uid,
                            status: "connected"
                        }) : t
                    })
                }

                function O(e) {
                    I.setState(t => {
                        let n = t.connections.get(e.uid);
                        if (n) {
                            let e = n.connector;
                            e.emitter.listenerCount("change") && n.connector.emitter.off("change", D), e.emitter.listenerCount("disconnect") && n.connector.emitter.off("disconnect", O), e.emitter.listenerCount("connect") || n.connector.emitter.on("connect", L)
                        }
                        if (t.connections.delete(e.uid), 0 === t.connections.size) return { ...t,
                            connections: new Map,
                            current: null,
                            status: "disconnected"
                        };
                        let i = t.connections.values().next().value;
                        return { ...t,
                            connections: new Map(t.connections),
                            current: i.connector.uid
                        }
                    })
                }
                return I.setState(N()), c && I.subscribe(({
                    connections: e,
                    current: t
                }) => t ? e.get(t) ? .chainId : void 0, e => {
                    if (f.getState().some(t => t.id === e)) return I.setState(t => ({ ...t,
                        chainId: e ? ? t.chainId
                    }))
                }), h ? .subscribe(e => {
                    let t = new Set,
                        n = new Set;
                    for (let e of p.getState()) t.add(e.id), e.rdns && n.add(e.rdns);
                    let i = [];
                    for (let r of e) {
                        if (n.has(r.info.rdns)) continue;
                        let e = w(y(r));
                        t.has(e.id) || i.push(e)
                    }(!o || I.persist.hasHydrated()) && p.setState(e => [...e, ...i], !0)
                }), {
                    get chains() {
                        return f.getState()
                    },
                    get connectors() {
                        return p.getState()
                    },
                    storage: o,
                    getClient: function(e = {}) {
                        let t;
                        let n = e.chainId ? ? I.getState().chainId,
                            i = f.getState().find(e => e.id === n);
                        if (e.chainId && !i) throw new m.X4; {
                            let e = M.get(I.getState().chainId);
                            if (e && !i) return e;
                            if (!i) throw new m.X4
                        } {
                            let e = M.get(n);
                            if (e) return e
                        }
                        if (d.client) t = d.client({
                            chain: i
                        });
                        else {
                            let e = i.id,
                                n = f.getState().map(e => e.id),
                                a = {};
                            for (let [t, i] of Object.entries(d))
                                if ("chains" !== t && "client" !== t && "connectors" !== t && "transports" !== t) {
                                    if ("object" == typeof i) {
                                        if (e in i) a[t] = i[e];
                                        else {
                                            if (n.some(e => e in i)) continue;
                                            a[t] = i
                                        }
                                    } else a[t] = i
                                }
                            t = (0, r.e)({ ...a,
                                chain: i,
                                batch: a.batch ? ? {
                                    multicall: !0
                                },
                                transport: t => d.transports[e]({ ...t,
                                    connectors: p
                                })
                            })
                        }
                        return M.set(n, t), t
                    },
                    get state() {
                        return I.getState()
                    },
                    setState(e) {
                        let t;
                        t = "function" == typeof e ? e(I.getState()) : e;
                        let n = N();
                        "object" != typeof t && (t = n), Object.keys(n).some(e => !(e in t)) && (t = n), I.setState(t, !0)
                    },
                    subscribe: (e, t, n) => I.subscribe(e, t, n ? { ...n,
                        fireImmediately: n.emitImmediately
                    } : void 0),
                    _internal: {
                        mipd: h,
                        store: I,
                        ssr: !!u,
                        syncConnectedChain: c,
                        transports: d.transports,
                        chains: {
                            setState(e) {
                                let t = "function" == typeof e ? e(f.getState()) : e;
                                if (0 !== t.length) return f.setState(t, !0)
                            },
                            subscribe: e => f.subscribe(e)
                        },
                        connectors: {
                            providerDetailToConnector: y,
                            setup: w,
                            setState: e => p.setState("function" == typeof e ? e(p.getState()) : e, !0),
                            subscribe: e => p.subscribe(e)
                        },
                        events: {
                            change: D,
                            connect: L,
                            disconnect: O
                        }
                    }
                }
            }
        },
        42027: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return r
                },
                O: function() {
                    return a
                }
            });
            var i = n(65716);
            class r extends i.G {
                constructor() {
                    super("Provider not found."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ProviderNotFoundError"
                    })
                }
            }
            class a extends i.G {
                constructor({
                    connector: e
                }) {
                    super(`"${e.name}" does not support programmatic chain switching.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SwitchChainNotSupportedError"
                    })
                }
            }
        },
        27496: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return i
                }
            });
            let i = "standard:connect"
        },
        86893: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return i
                }
            });
            let i = "standard:disconnect"
        },
        55034: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return i
                }
            });
            let i = "standard:events"
        },
        99277: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return a
                }
            });
            let i = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                r = function() {
                    for (var e, t, n = 0, i = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
                        var n, i, r = "";
                        if ("string" == typeof t || "number" == typeof t) r += t;
                        else if ("object" == typeof t) {
                            if (Array.isArray(t))
                                for (n = 0; n < t.length; n++) t[n] && (i = e(t[n])) && (r && (r += " "), r += i);
                            else
                                for (n in t) t[n] && (r && (r += " "), r += n)
                        }
                        return r
                    }(e)) && (i && (i += " "), i += t);
                    return i
                },
                a = (e, t) => n => {
                    var a;
                    if ((null == t ? void 0 : t.variants) == null) return r(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    let {
                        variants: o,
                        defaultVariants: s
                    } = t, c = Object.keys(o).map(e => {
                        let t = null == n ? void 0 : n[e],
                            r = null == s ? void 0 : s[e];
                        if (null === t) return null;
                        let a = i(t) || i(r);
                        return o[e][a]
                    }), l = n && Object.entries(n).reduce((e, t) => {
                        let [n, i] = t;
                        return void 0 === i || (e[n] = i), e
                    }, {});
                    return r(e, c, null == t ? void 0 : null === (a = t.compoundVariants) || void 0 === a ? void 0 : a.reduce((e, t) => {
                        let {
                            class: n,
                            className: i,
                            ...r
                        } = t;
                        return Object.entries(r).every(e => {
                            let [t, n] = e;
                            return Array.isArray(n) ? n.includes({ ...s,
                                ...l
                            }[t]) : ({ ...s,
                                ...l
                            })[t] === n
                        }) ? [...e, n, i] : e
                    }, []), null == n ? void 0 : n.class, null == n ? void 0 : n.className)
                }
        },
        38330: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return u
                },
                useTheme: function() {
                    return l
                }
            });
            var i = n(11390),
                r = ["light", "dark"],
                a = "(prefers-color-scheme: dark)",
                o = "undefined" == typeof window,
                s = i.createContext(void 0),
                c = {
                    setTheme: e => {},
                    themes: []
                },
                l = () => {
                    var e;
                    return null != (e = i.useContext(s)) ? e : c
                },
                u = e => i.useContext(s) ? e.children : i.createElement(h, { ...e
                }),
                d = ["light", "dark"],
                h = e => {
                    let {
                        forcedTheme: t,
                        disableTransitionOnChange: n = !1,
                        enableSystem: o = !0,
                        enableColorScheme: c = !0,
                        storageKey: l = "theme",
                        themes: u = d,
                        defaultTheme: h = o ? "system" : "light",
                        attribute: y = "data-theme",
                        value: g,
                        children: M,
                        nonce: N
                    } = e, [b, v] = i.useState(() => p(l, h)), [T, I] = i.useState(() => p(l)), S = g ? Object.values(g) : u, j = i.useCallback(e => {
                        let t = e;
                        if (!t) return;
                        "system" === e && o && (t = w());
                        let i = g ? g[t] : t,
                            a = n ? m() : null,
                            s = document.documentElement;
                        if ("class" === y ? (s.classList.remove(...S), i && s.classList.add(i)) : i ? s.setAttribute(y, i) : s.removeAttribute(y), c) {
                            let e = r.includes(h) ? h : null,
                                n = r.includes(t) ? t : e;
                            s.style.colorScheme = n
                        }
                        null == a || a()
                    }, []), U = i.useCallback(e => {
                        let t = "function" == typeof e ? e(e) : e;
                        v(t);
                        try {
                            localStorage.setItem(l, t)
                        } catch (e) {}
                    }, [t]), E = i.useCallback(e => {
                        I(w(e)), "system" === b && o && !t && j("system")
                    }, [b, t]);
                    i.useEffect(() => {
                        let e = window.matchMedia(a);
                        return e.addListener(E), E(e), () => e.removeListener(E)
                    }, [E]), i.useEffect(() => {
                        let e = e => {
                            e.key === l && U(e.newValue || h)
                        };
                        return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                    }, [U]), i.useEffect(() => {
                        j(null != t ? t : b)
                    }, [t, b]);
                    let x = i.useMemo(() => ({
                        theme: b,
                        setTheme: U,
                        forcedTheme: t,
                        resolvedTheme: "system" === b ? T : b,
                        themes: o ? [...u, "system"] : u,
                        systemTheme: o ? T : void 0
                    }), [b, U, t, T, o, u]);
                    return i.createElement(s.Provider, {
                        value: x
                    }, i.createElement(f, {
                        forcedTheme: t,
                        disableTransitionOnChange: n,
                        enableSystem: o,
                        enableColorScheme: c,
                        storageKey: l,
                        themes: u,
                        defaultTheme: h,
                        attribute: y,
                        value: g,
                        children: M,
                        attrs: S,
                        nonce: N
                    }), M)
                },
                f = i.memo(e => {
                    let {
                        forcedTheme: t,
                        storageKey: n,
                        attribute: o,
                        enableSystem: s,
                        enableColorScheme: c,
                        defaultTheme: l,
                        value: u,
                        attrs: d,
                        nonce: h
                    } = e, f = "system" === l, p = "class" === o ? "var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e => "'".concat(e, "'")).join(","), ")"), ";") : "var d=document.documentElement,n='".concat(o, "',s='setAttribute';"), m = c ? (r.includes(l) ? l : null) ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(l, "'") : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", w = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            i = u ? u[e] : e,
                            a = t ? e + "|| ''" : "'".concat(i, "'"),
                            s = "";
                        return c && n && !t && r.includes(e) && (s += "d.style.colorScheme = '".concat(e, "';")), "class" === o ? t || i ? s += "c.add(".concat(a, ")") : s += "null" : i && (s += "d[s](n,".concat(a, ")")), s
                    }, y = t ? "!function(){".concat(p).concat(w(t), "}()") : s ? "!function(){try{".concat(p, "var e=localStorage.getItem('").concat(n, "');if('system'===e||(!e&&").concat(f, ")){var t='").concat(a, "',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(w("dark"), "}else{").concat(w("light"), "}}else if(e){").concat(u ? "var x=".concat(JSON.stringify(u), ";") : "").concat(w(u ? "x[e]" : "e", !0), "}").concat(f ? "" : "else{" + w(l, !1, !1) + "}").concat(m, "}catch(e){}}()") : "!function(){try{".concat(p, "var e=localStorage.getItem('").concat(n, "');if(e){").concat(u ? "var x=".concat(JSON.stringify(u), ";") : "").concat(w(u ? "x[e]" : "e", !0), "}else{").concat(w(l, !1, !1), ";}").concat(m, "}catch(t){}}();");
                    return i.createElement("script", {
                        nonce: h,
                        dangerouslySetInnerHTML: {
                            __html: y
                        }
                    })
                }),
                p = (e, t) => {
                    let n;
                    if (!o) {
                        try {
                            n = localStorage.getItem(e) || void 0
                        } catch (e) {}
                        return n || t
                    }
                },
                m = () => {
                    let e = document.createElement("style");
                    return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
                        window.getComputedStyle(document.body), setTimeout(() => {
                            document.head.removeChild(e)
                        }, 1)
                    }
                },
                w = e => (e || (e = window.matchMedia(a)), e.matches ? "dark" : "light")
        },
        78457: function(e, t, n) {
            "use strict";
            n.d(t, {
                y: function() {
                    return i
                }
            });
            let i = (0, n(33774).a)({
                id: 42161,
                name: "Arbitrum One",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://arb1.arbitrum.io/rpc"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Arbiscan",
                        url: "https://arbiscan.io",
                        apiUrl: "https://api.arbiscan.io/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 7654707
                    }
                }
            })
        },
        42750: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return i
                }
            });
            let i = (0, n(33774).a)({
                id: 43114,
                name: "Avalanche",
                nativeCurrency: {
                    decimals: 18,
                    name: "Avalanche",
                    symbol: "AVAX"
                },
                rpcUrls: {
                    default: {
                        http: ["https://api.avax.network/ext/bc/C/rpc"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "SnowTrace",
                        url: "https://snowtrace.io",
                        apiUrl: "https://api.snowtrace.io"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 11907934
                    }
                }
            })
        },
        92455: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return r
                }
            });
            var i = n(45419);
            let r = (0, n(33774).a)({ ...i.i,
                id: 8453,
                name: "Base",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://mainnet.base.org"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Basescan",
                        url: "https://basescan.org",
                        apiUrl: "https://api.basescan.org/api"
                    }
                },
                contracts: { ...i.i.contracts,
                    disputeGameFactory: {
                        1: {
                            address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e"
                        }
                    },
                    l2OutputOracle: {
                        1: {
                            address: "0x56315b90c40730925ec5485cf004d835058518A0"
                        }
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 5022
                    },
                    portal: {
                        1: {
                            address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                            blockCreated: 17482143
                        }
                    },
                    l1StandardBridge: {
                        1: {
                            address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                            blockCreated: 17482143
                        }
                    }
                },
                sourceId: 1
            })
        },
        43793: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return i
                }
            });
            let i = (0, n(33774).a)({
                id: 56,
                name: "BNB Smart Chain",
                nativeCurrency: {
                    decimals: 18,
                    name: "BNB",
                    symbol: "BNB"
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.ankr.com/bsc"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "BscScan",
                        url: "https://bscscan.com",
                        apiUrl: "https://api.bscscan.com/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 15921452
                    }
                }
            })
        },
        39157: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return i
                }
            });
            let i = (0, n(33774).a)({
                id: 1,
                name: "Ethereum",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://cloudflare-eth.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://etherscan.io",
                        apiUrl: "https://api.etherscan.io/api"
                    }
                },
                contracts: {
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
                        blockCreated: 19258213
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 14353601
                    }
                }
            })
        },
        37156: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return r
                }
            });
            var i = n(45419);
            let r = (0, n(33774).a)({ ...i.i,
                id: 10,
                name: "OP Mainnet",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://mainnet.optimism.io"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Optimism Explorer",
                        url: "https://optimistic.etherscan.io",
                        apiUrl: "https://api-optimistic.etherscan.io/api"
                    }
                },
                contracts: { ...i.i.contracts,
                    disputeGameFactory: {
                        1: {
                            address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9"
                        }
                    },
                    l2OutputOracle: {
                        1: {
                            address: "0xdfe97868233d1aa22e815a266982f2cf17685a27"
                        }
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 4286263
                    },
                    portal: {
                        1: {
                            address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"
                        }
                    },
                    l1StandardBridge: {
                        1: {
                            address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
                        }
                    }
                },
                sourceId: 1
            })
        },
        52273: function(e, t, n) {
            "use strict";
            n.d(t, {
                y: function() {
                    return i
                }
            });
            let i = (0, n(33774).a)({
                id: 137,
                name: "Polygon",
                nativeCurrency: {
                    name: "POL",
                    symbol: "POL",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://polygon-rpc.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "PolygonScan",
                        url: "https://polygonscan.com",
                        apiUrl: "https://api.polygonscan.com/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 25770160
                    }
                }
            })
        },
        68041: function(e, t, n) {
            "use strict";
            n.d(t, {
                l: function() {
                    return x
                }
            });
            var i = n(33774),
                r = n(14218),
                a = n(38205),
                o = n(20040),
                s = n(48316),
                c = n(6233),
                l = n(83101),
                u = n(66989),
                d = n(83451);
            let h = 32 n * n(29658).rU,
                f = {
                    block: (0, s.G)({
                        format(e) {
                            let t = e.transactions ? .map(e => {
                                if ("string" == typeof e) return e;
                                let t = f.transaction ? .format(e);
                                return "0x71" === t.typeHex ? t.type = "eip712" : "0xff" === t.typeHex && (t.type = "priority"), t
                            });
                            return {
                                l1BatchNumber: e.l1BatchNumber ? (0, r.y_)(e.l1BatchNumber) : null,
                                l1BatchTimestamp: e.l1BatchTimestamp ? (0, r.y_)(e.l1BatchTimestamp) : null,
                                transactions: t
                            }
                        }
                    }),
                    transaction: (0, l.y_)({
                        format(e) {
                            let t = {};
                            return "0x71" === e.type ? t.type = "eip712" : "0xff" === e.type && (t.type = "priority"), { ...t,
                                l1BatchNumber: e.l1BatchNumber ? (0, r.y_)(e.l1BatchNumber) : null,
                                l1BatchTxIndex: e.l1BatchTxIndex ? (0, r.y_)(e.l1BatchTxIndex) : null
                            }
                        }
                    }),
                    transactionReceipt: (0, u.dI)({
                        format: e => ({
                            l1BatchNumber: e.l1BatchNumber ? (0, r.y_)(e.l1BatchNumber) : null,
                            l1BatchTxIndex: e.l1BatchTxIndex ? (0, r.y_)(e.l1BatchTxIndex) : null,
                            logs: e.logs.map(e => ({ ...(0, c.U)(e),
                                l1BatchNumber: e.l1BatchNumber ? (0, r.y_)(e.l1BatchNumber) : null,
                                transactionLogIndex: (0, r.ly)(e.transactionLogIndex),
                                logType: e.logType
                            })),
                            l2ToL1Logs: e.l2ToL1Logs.map(e => ({
                                blockNumber: (0, r.y_)(e.blockHash),
                                blockHash: e.blockHash,
                                l1BatchNumber: (0, r.y_)(e.l1BatchNumber),
                                transactionIndex: (0, r.y_)(e.transactionIndex),
                                shardId: (0, r.y_)(e.shardId),
                                isService: e.isService,
                                sender: e.sender,
                                key: e.key,
                                value: e.value,
                                transactionHash: e.transactionHash,
                                logIndex: (0, r.y_)(e.logIndex)
                            }))
                        })
                    }),
                    transactionRequest: (0, d.iy)({
                        exclude: ["customSignature", "factoryDeps", "gasPerPubdata", "paymaster", "paymasterInput"],
                        format: e => e.gasPerPubdata || e.paymaster && e.paymasterInput || e.factoryDeps || e.customSignature ? {
                            eip712Meta: { ...e.gasPerPubdata ? {
                                    gasPerPubdata: (0, o.NC)(e.gasPerPubdata)
                                } : {
                                    gasPerPubdata: (0, o.NC)(50000 n)
                                },
                                ...e.paymaster && e.paymasterInput ? {
                                    paymasterParams: {
                                        paymaster: e.paymaster,
                                        paymasterInput: Array.from((0, a.nr)(e.paymasterInput))
                                    }
                                } : {},
                                ...e.factoryDeps ? {
                                    factoryDeps: e.factoryDeps.map(e => Array.from((0, a.nr)(e)))
                                } : {},
                                ...e.customSignature ? {
                                    customSignature: Array.from((0, a.nr)(e.customSignature))
                                } : {}
                            },
                            type: "0x71"
                        } : {}
                    })
                };
            var p = n(98718),
                m = n(24853),
                w = n(6571),
                y = n(10085),
                g = n(1091),
                M = n(62059),
                N = n(50451);
            class b extends g.G {
                constructor() {
                    super('Transaction is not an EIP712 transaction.\n\nTransaction must:\n  - include `type: "eip712"`\n  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`', {
                        name: "InvalidEip712TransactionError"
                    })
                }
            }

            function v(e) {
                return "eip712" === e.type || "customSignature" in e && !!e.customSignature || "paymaster" in e && !!e.paymaster || "paymasterInput" in e && !!e.paymasterInput || "gasPerPubdata" in e && "bigint" == typeof e.gasPerPubdata || "factoryDeps" in e && !!e.factoryDeps
            }

            function T(e) {
                let {
                    chainId: t,
                    to: n,
                    from: i,
                    paymaster: r,
                    paymasterInput: a
                } = e;
                if (!v(e)) throw new b;
                if (!t || t <= 0) throw new M.hJ({
                    chainId: t
                });
                if (n && !(0, N.U)(n)) throw new y.b({
                    address: n
                });
                if (i && !(0, N.U)(i)) throw new y.b({
                    address: i
                });
                if (r && !(0, N.U)(r)) throw new y.b({
                    address: r
                });
                if (r && !a) throw new g.G("`paymasterInput` must be provided when `paymaster` is defined");
                if (!r && a) throw new g.G("`paymaster` must be provided when `paymasterInput` is defined")
            }
            var I = n(40484),
                S = n(62572);
            class j extends g.G {
                constructor({
                    givenLength: e,
                    maxBytecodeSize: t
                }) {
                    super(`Bytecode cannot be longer than ${t} bytes. Given length: ${e}`, {
                        name: "BytecodeLengthExceedsMaxSizeError"
                    })
                }
            }
            class U extends g.G {
                constructor({
                    givenLengthInWords: e
                }) {
                    super(`Bytecode length in 32-byte words must be odd. Given length in words: ${e}`, {
                        name: "BytecodeLengthInWordsMustBeOddError"
                    })
                }
            }
            class E extends g.G {
                constructor({
                    givenLength: e
                }) {
                    super(`The bytecode length in bytes must be divisible by 32. Given length: ${e}`, {
                        name: "BytecodeLengthMustBeDivisibleBy32Error"
                    })
                }
            }
            let x = (0, i.a)({
                formatters: f,
                serializers: {
                    transaction: function(e, t) {
                        return v(e) ? function(e) {
                            let {
                                chainId: t,
                                gas: n,
                                nonce: i,
                                to: r,
                                from: a,
                                value: s,
                                maxFeePerGas: c,
                                maxPriorityFeePerGas: l,
                                customSignature: u,
                                factoryDeps: d,
                                paymaster: h,
                                paymasterInput: f,
                                gasPerPubdata: w,
                                data: y
                            } = e;
                            T(e);
                            let g = [i ? (0, o.NC)(i) : "0x", l ? (0, o.NC)(l) : "0x", c ? (0, o.NC)(c) : "0x", n ? (0, o.NC)(n) : "0x", r ? ? "0x", s ? (0, o.NC)(s) : "0x", y ? ? "0x0", (0, o.NC)(t), (0, o.NC)(""), (0, o.NC)(""), (0, o.NC)(t), a ? ? "0x", w ? (0, o.NC)(w) : (0, o.NC)(50000 n), d ? ? [], u ? ? "0x", h && f ? [h, f] : []];
                            return (0, p.SM)(["0x71", (0, m.LV)(g)])
                        }(e) : (0, w.D)(e, t)
                    }
                },
                custom: {
                    getEip712Domain: e => {
                        T(e);
                        let t = function(e) {
                            let {
                                gas: t,
                                nonce: n,
                                to: i,
                                from: r,
                                value: s,
                                maxFeePerGas: c,
                                maxPriorityFeePerGas: l,
                                factoryDeps: u,
                                paymaster: d,
                                paymasterInput: f,
                                gasPerPubdata: p,
                                data: m
                            } = e;
                            return {
                                txType: 113 n,
                                from: BigInt(r),
                                to: i ? BigInt(i) : 0 n,
                                gasLimit: t ? ? 0 n,
                                gasPerPubdataByteLimit: p ? ? 50000 n,
                                maxFeePerGas: c ? ? 0 n,
                                maxPriorityFeePerGas: l ? ? 0 n,
                                paymaster: d ? BigInt(d) : 0 n,
                                nonce: n ? BigInt(n) : 0 n,
                                value: s ? ? 0 n,
                                data: m || "0x0",
                                factoryDeps: u ? .map(e => o.NC(function(e) {
                                    let t = (0, a.O0)(e);
                                    if (t.length % 32 != 0) throw new E({
                                        givenLength: t.length
                                    });
                                    if (t.length > h) throw new j({
                                        givenLength: t.length,
                                        maxBytecodeSize: h
                                    });
                                    let n = (0, S.J)(t),
                                        i = (0, a.O0)(n),
                                        r = t.length / 32;
                                    if (r % 2 == 0) throw new U({
                                        givenLengthInWords: r
                                    });
                                    let o = (0, a.O0)(r),
                                        s = (0, I.vk)(o, {
                                            size: 2
                                        }),
                                        c = new Uint8Array([1, 0]);
                                    return i.set(c, 0), i.set(s, 2), i
                                }(e))) ? ? [],
                                paymasterInput: f || "0x"
                            }
                        }(e);
                        return {
                            domain: {
                                name: "zkSync",
                                version: "2",
                                chainId: e.chainId
                            },
                            types: {
                                Transaction: [{
                                    name: "txType",
                                    type: "uint256"
                                }, {
                                    name: "from",
                                    type: "uint256"
                                }, {
                                    name: "to",
                                    type: "uint256"
                                }, {
                                    name: "gasLimit",
                                    type: "uint256"
                                }, {
                                    name: "gasPerPubdataByteLimit",
                                    type: "uint256"
                                }, {
                                    name: "maxFeePerGas",
                                    type: "uint256"
                                }, {
                                    name: "maxPriorityFeePerGas",
                                    type: "uint256"
                                }, {
                                    name: "paymaster",
                                    type: "uint256"
                                }, {
                                    name: "nonce",
                                    type: "uint256"
                                }, {
                                    name: "value",
                                    type: "uint256"
                                }, {
                                    name: "data",
                                    type: "bytes"
                                }, {
                                    name: "factoryDeps",
                                    type: "bytes32[]"
                                }, {
                                    name: "paymasterInput",
                                    type: "bytes"
                                }]
                            },
                            primaryType: "Transaction",
                            message: t
                        }
                    }
                },
                id: 324,
                name: "ZKsync Era",
                network: "zksync-era",
                nativeCurrency: {
                    decimals: 18,
                    name: "Ether",
                    symbol: "ETH"
                },
                rpcUrls: {
                    default: {
                        http: ["https://mainnet.era.zksync.io"],
                        webSocket: ["wss://mainnet.era.zksync.io/ws"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://era.zksync.network/",
                        apiUrl: "https://api-era.zksync.network/api"
                    },
                    native: {
                        name: "ZKsync Explorer",
                        url: "https://explorer.zksync.io/",
                        apiUrl: "https://block-explorer-api.mainnet.zksync.io/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
                    },
                    universalSignatureVerifier: {
                        address: "0xfB688330379976DA81eB64Fe4BF50d7401763B9C",
                        blockCreated: 45659388
                    }
                }
            })
        },
        17219: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return d
                }
            });
            var i = n(66168),
                r = n(1091);
            class a extends r.G {
                constructor() {
                    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
                        docsPath: "/docs/clients/intro",
                        name: "UrlRequiredError"
                    })
                }
            }
            var o = n(59593),
                s = n(43382),
                c = n(46320);
            let l = {
                current: 0,
                take() {
                    return this.current++
                },
                reset() {
                    this.current = 0
                }
            };
            var u = n(80340);

            function d(e, t = {}) {
                let {
                    batch: n,
                    fetchOptions: r,
                    key: d = "http",
                    name: h = "HTTP JSON-RPC",
                    onFetchRequest: f,
                    onFetchResponse: p,
                    retryDelay: m
                } = t;
                return ({
                    chain: w,
                    retryCount: y,
                    timeout: g
                }) => {
                    let {
                        batchSize: M = 1e3,
                        wait: N = 0
                    } = "object" == typeof n ? n : {}, b = t.retryCount ? ? y, v = g ? ? t.timeout ? ? 1e4, T = e || w ? .rpcUrls.default.http[0];
                    if (!T) throw new a;
                    let I = function(e, t = {}) {
                        return {
                            async request(n) {
                                let {
                                    body: r,
                                    onRequest: a = t.onRequest,
                                    onResponse: o = t.onResponse,
                                    timeout: u = t.timeout ? ? 1e4
                                } = n, d = { ...t.fetchOptions ? ? {},
                                    ...n.fetchOptions ? ? {}
                                }, {
                                    headers: h,
                                    method: f,
                                    signal: p
                                } = d;
                                try {
                                    let t;
                                    let n = await (0, s.F)(async ({
                                        signal: t
                                    }) => {
                                        let n = { ...d,
                                                body: Array.isArray(r) ? (0, c.P)(r.map(e => ({
                                                    jsonrpc: "2.0",
                                                    id: e.id ? ? l.take(),
                                                    ...e
                                                }))) : (0, c.P)({
                                                    jsonrpc: "2.0",
                                                    id: r.id ? ? l.take(),
                                                    ...r
                                                }),
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    ...h
                                                },
                                                method: f || "POST",
                                                signal: p || (u > 0 ? t : null)
                                            },
                                            i = new Request(e, n),
                                            o = await a ? .(i, n) ? ? { ...n,
                                                url: e
                                            };
                                        return await fetch(o.url ? ? e, o)
                                    }, {
                                        errorInstance: new i.W5({
                                            body: r,
                                            url: e
                                        }),
                                        timeout: u,
                                        signal: !0
                                    });
                                    if (o && await o(n), n.headers.get("Content-Type") ? .startsWith("application/json")) t = await n.json();
                                    else {
                                        t = await n.text();
                                        try {
                                            t = JSON.parse(t || "{}")
                                        } catch (e) {
                                            if (n.ok) throw e;
                                            t = {
                                                error: t
                                            }
                                        }
                                    }
                                    if (!n.ok) throw new i.Gg({
                                        body: r,
                                        details: (0, c.P)(t.error) || n.statusText,
                                        headers: n.headers,
                                        status: n.status,
                                        url: e
                                    });
                                    return t
                                } catch (t) {
                                    if (t instanceof i.Gg || t instanceof i.W5) throw t;
                                    throw new i.Gg({
                                        body: r,
                                        cause: t,
                                        url: e
                                    })
                                }
                            }
                        }
                    }(T, {
                        fetchOptions: r,
                        onRequest: f,
                        onResponse: p,
                        timeout: v
                    });
                    return (0, u.q)({
                        key: d,
                        name: h,
                        async request({
                            method: e,
                            params: t
                        }) {
                            let r = {
                                    method: e,
                                    params: t
                                },
                                {
                                    schedule: a
                                } = (0, o.S)({
                                    id: T,
                                    wait: N,
                                    shouldSplitBatch: e => e.length > M,
                                    fn: e => I.request({
                                        body: e
                                    }),
                                    sort: (e, t) => e.id - t.id
                                }),
                                s = async e => n ? a(e) : [await I.request({
                                    body: e
                                })],
                                [{
                                    error: c,
                                    result: l
                                }] = await s(r);
                            if (c) throw new i.bs({
                                body: r,
                                error: c,
                                url: T
                            });
                            return l
                        },
                        retryCount: b,
                        retryDelay: m,
                        timeout: v,
                        type: "http"
                    }, {
                        fetchOptions: r,
                        url: T
                    })
                }
            }
        },
        45419: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return p
                }
            });
            var i = n(14218),
                r = n(48316),
                a = n(83101),
                o = n(66989);
            let s = {
                block: (0, r.G)({
                    format: e => ({
                        transactions: e.transactions ? .map(e => {
                            if ("string" == typeof e) return e;
                            let t = a.Tr(e);
                            return "0x7e" === t.typeHex && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? i.y_(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t
                        }),
                        stateRoot: e.stateRoot
                    })
                }),
                transaction: (0, a.y_)({
                    format(e) {
                        let t = {};
                        return "0x7e" === e.type && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? (0, i.y_)(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t
                    }
                }),
                transactionReceipt: (0, o.dI)({
                    format: e => ({
                        l1GasPrice: e.l1GasPrice ? (0, i.y_)(e.l1GasPrice) : null,
                        l1GasUsed: e.l1GasUsed ? (0, i.y_)(e.l1GasUsed) : null,
                        l1Fee: e.l1Fee ? (0, i.y_)(e.l1Fee) : null,
                        l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null
                    })
                })
            };
            var c = n(10085),
                l = n(50451),
                u = n(98718),
                d = n(20040),
                h = n(24853),
                f = n(6571);
            let p = {
                contracts: {
                    gasPriceOracle: {
                        address: "0x420000000000000000000000000000000000000F"
                    },
                    l1Block: {
                        address: "0x4200000000000000000000000000000000000015"
                    },
                    l2CrossDomainMessenger: {
                        address: "0x4200000000000000000000000000000000000007"
                    },
                    l2Erc721Bridge: {
                        address: "0x4200000000000000000000000000000000000014"
                    },
                    l2StandardBridge: {
                        address: "0x4200000000000000000000000000000000000010"
                    },
                    l2ToL1MessagePasser: {
                        address: "0x4200000000000000000000000000000000000016"
                    }
                },
                formatters: s,
                serializers: {
                    transaction: function(e, t) {
                        return "deposit" === e.type || void 0 !== e.sourceHash ? function(e) {
                            ! function(e) {
                                let {
                                    from: t,
                                    to: n
                                } = e;
                                if (t && !(0, l.U)(t)) throw new c.b({
                                    address: t
                                });
                                if (n && !(0, l.U)(n)) throw new c.b({
                                    address: n
                                })
                            }(e);
                            let {
                                sourceHash: t,
                                data: n,
                                from: i,
                                gas: r,
                                isSystemTx: a,
                                mint: o,
                                to: s,
                                value: f
                            } = e, p = [t, i, s ? ? "0x", o ? (0, d.NC)(o) : "0x", f ? (0, d.NC)(f) : "0x", r ? (0, d.NC)(r) : "0x", a ? "0x1" : "0x", n ? ? "0x"];
                            return (0, u.SM)(["0x7e", (0, h.LV)(p)])
                        }(e) : (0, f.D)(e, t)
                    }
                }
            }
        },
        33774: function(e, t, n) {
            "use strict";

            function i(e) {
                return {
                    formatters: void 0,
                    fees: void 0,
                    serializers: void 0,
                    ...e
                }
            }
            n.d(t, {
                a: function() {
                    return i
                }
            })
        },
        43382: function(e, t, n) {
            "use strict";

            function i(e, {
                errorInstance: t = Error("timed out"),
                timeout: n,
                signal: i
            }) {
                return new Promise((r, a) => {
                    (async () => {
                        let o;
                        try {
                            let s = new AbortController;
                            n > 0 && (o = setTimeout(() => {
                                i ? s.abort() : a(t)
                            }, n)), r(await e({
                                signal: s ? .signal || null
                            }))
                        } catch (e) {
                            e ? .name === "AbortError" && a(t), a(e)
                        } finally {
                            clearTimeout(o)
                        }
                    })()
                })
            }
            n.d(t, {
                F: function() {
                    return i
                }
            })
        },
        6571: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return j
                },
                d: function() {
                    return U
                }
            });
            var i = n(42652),
                r = n(74053),
                a = n(76935),
                o = n(60375),
                s = n(57474),
                c = n(98718),
                l = n(17305),
                u = n(20040),
                d = n(24853),
                h = n(14875),
                f = n(29658),
                p = n(10085),
                m = n(1091),
                w = n(36524),
                y = n(62059),
                g = n(43482),
                M = n(50451),
                N = n(58697),
                b = n(57532),
                v = n(14218);

            function T(e) {
                let {
                    chainId: t,
                    maxPriorityFeePerGas: n,
                    maxFeePerGas: i,
                    to: r
                } = e;
                if (t <= 0) throw new y.hJ({
                    chainId: t
                });
                if (r && !(0, M.U)(r)) throw new p.b({
                    address: r
                });
                if (i && i > f.zL) throw new g.Hh({
                    maxFeePerGas: i
                });
                if (n && i && n > i) throw new g.cs({
                    maxFeePerGas: i,
                    maxPriorityFeePerGas: n
                })
            }
            var I = n(38378);

            function S(e) {
                if (!e || 0 === e.length) return [];
                let t = [];
                for (let n = 0; n < e.length; n++) {
                    let {
                        address: r,
                        storageKeys: a
                    } = e[n];
                    for (let e = 0; e < a.length; e++)
                        if (a[e].length - 2 != 64) throw new i.JC({
                            storageKey: a[e]
                        });
                    if (!(0, M.U)(r, {
                            strict: !1
                        })) throw new p.b({
                        address: r
                    });
                    t.push([r, a])
                }
                return t
            }

            function j(e, t) {
                let n = (0, I.l)(e);
                return "eip1559" === n ? function(e, t) {
                    let {
                        chainId: n,
                        gas: i,
                        nonce: r,
                        to: a,
                        value: o,
                        maxFeePerGas: s,
                        maxPriorityFeePerGas: l,
                        accessList: h,
                        data: f
                    } = e;
                    T(e);
                    let p = S(h),
                        m = [(0, u.NC)(n), r ? (0, u.NC)(r) : "0x", l ? (0, u.NC)(l) : "0x", s ? (0, u.NC)(s) : "0x", i ? (0, u.NC)(i) : "0x", a ? ? "0x", o ? (0, u.NC)(o) : "0x", f ? ? "0x", p, ...U(e, t)];
                    return (0, c.SM)(["0x02", (0, d.LV)(m)])
                }(e, t) : "eip2930" === n ? function(e, t) {
                    let {
                        chainId: n,
                        gas: i,
                        data: r,
                        nonce: a,
                        to: o,
                        value: s,
                        accessList: l,
                        gasPrice: h
                    } = e;
                    ! function(e) {
                        let {
                            chainId: t,
                            maxPriorityFeePerGas: n,
                            gasPrice: i,
                            maxFeePerGas: r,
                            to: a
                        } = e;
                        if (t <= 0) throw new y.hJ({
                            chainId: t
                        });
                        if (a && !(0, M.U)(a)) throw new p.b({
                            address: a
                        });
                        if (n || r) throw new m.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
                        if (i && i > f.zL) throw new g.Hh({
                            maxFeePerGas: i
                        })
                    }(e);
                    let w = S(l),
                        N = [(0, u.NC)(n), a ? (0, u.NC)(a) : "0x", h ? (0, u.NC)(h) : "0x", i ? (0, u.NC)(i) : "0x", o ? ? "0x", s ? (0, u.NC)(s) : "0x", r ? ? "0x", w, ...U(e, t)];
                    return (0, c.SM)(["0x01", (0, d.LV)(N)])
                }(e, t) : "eip4844" === n ? function(e, t) {
                    let {
                        chainId: n,
                        gas: i,
                        nonce: l,
                        to: f,
                        value: p,
                        maxFeePerBlobGas: m,
                        maxFeePerGas: y,
                        maxPriorityFeePerGas: g,
                        accessList: M,
                        data: I
                    } = e;
                    ! function(e) {
                        let {
                            blobVersionedHashes: t
                        } = e;
                        if (t) {
                            if (0 === t.length) throw new w.RX;
                            for (let e of t) {
                                let t = (0, N.d)(e),
                                    n = (0, v.ly)((0, b.tP)(e, 0, 1));
                                if (32 !== t) throw new w.xd({
                                    hash: e,
                                    size: t
                                });
                                if (n !== h.l) throw new w.cJ({
                                    hash: e,
                                    version: n
                                })
                            }
                        }
                        T(e)
                    }(e);
                    let j = e.blobVersionedHashes,
                        E = e.sidecars;
                    if (e.blobs && (void 0 === j || void 0 === E)) {
                        let t = "string" == typeof e.blobs[0] ? e.blobs : e.blobs.map(e => (0, u.ci)(e)),
                            n = e.kzg,
                            i = (0, r.P)({
                                blobs: t,
                                kzg: n
                            });
                        if (void 0 === j && (j = (0, o.C)({
                                commitments: i
                            })), void 0 === E) {
                            let e = (0, a.y)({
                                blobs: t,
                                commitments: i,
                                kzg: n
                            });
                            E = (0, s.j)({
                                blobs: t,
                                commitments: i,
                                proofs: e
                            })
                        }
                    }
                    let x = S(M),
                        D = [(0, u.NC)(n), l ? (0, u.NC)(l) : "0x", g ? (0, u.NC)(g) : "0x", y ? (0, u.NC)(y) : "0x", i ? (0, u.NC)(i) : "0x", f ? ? "0x", p ? (0, u.NC)(p) : "0x", I ? ? "0x", x, m ? (0, u.NC)(m) : "0x", j ? ? [], ...U(e, t)],
                        L = [],
                        O = [],
                        A = [];
                    if (E)
                        for (let e = 0; e < E.length; e++) {
                            let {
                                blob: t,
                                commitment: n,
                                proof: i
                            } = E[e];
                            L.push(t), O.push(n), A.push(i)
                        }
                    return (0, c.SM)(["0x03", E ? (0, d.LV)([D, L, O, A]) : (0, d.LV)(D)])
                }(e, t) : "eip7702" === n ? function(e, t) {
                    let {
                        authorizationList: n,
                        chainId: i,
                        gas: r,
                        nonce: a,
                        to: o,
                        value: s,
                        maxFeePerGas: l,
                        maxPriorityFeePerGas: h,
                        accessList: f,
                        data: m
                    } = e;
                    ! function(e) {
                        let {
                            authorizationList: t
                        } = e;
                        if (t)
                            for (let e of t) {
                                let {
                                    contractAddress: t,
                                    chainId: n
                                } = e;
                                if (!(0, M.U)(t)) throw new p.b({
                                    address: t
                                });
                                if (n < 0) throw new y.hJ({
                                    chainId: n
                                })
                            }
                        T(e)
                    }(e);
                    let w = S(f),
                        g = function(e) {
                            if (!e || 0 === e.length) return [];
                            let t = [];
                            for (let n of e) {
                                let {
                                    contractAddress: e,
                                    chainId: i,
                                    nonce: r,
                                    ...a
                                } = n;
                                t.push([i ? (0, u.NC)(i) : "0x", e, r ? (0, u.NC)(r) : "0x", ...U({}, a)])
                            }
                            return t
                        }(n);
                    return (0, c.SM)(["0x04", (0, d.LV)([(0, u.NC)(i), a ? (0, u.NC)(a) : "0x", h ? (0, u.NC)(h) : "0x", l ? (0, u.NC)(l) : "0x", r ? (0, u.NC)(r) : "0x", o ? ? "0x", s ? (0, u.NC)(s) : "0x", m ? ? "0x", w, g, ...U(e, t)])])
                }(e, t) : function(e, t) {
                    let {
                        chainId: n = 0,
                        gas: r,
                        data: a,
                        nonce: o,
                        to: s,
                        value: c,
                        gasPrice: h
                    } = e;
                    ! function(e) {
                        let {
                            chainId: t,
                            maxPriorityFeePerGas: n,
                            gasPrice: i,
                            maxFeePerGas: r,
                            to: a
                        } = e;
                        if (a && !(0, M.U)(a)) throw new p.b({
                            address: a
                        });
                        if (void 0 !== t && t <= 0) throw new y.hJ({
                            chainId: t
                        });
                        if (n || r) throw new m.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
                        if (i && i > f.zL) throw new g.Hh({
                            maxFeePerGas: i
                        })
                    }(e);
                    let w = [o ? (0, u.NC)(o) : "0x", h ? (0, u.NC)(h) : "0x", r ? (0, u.NC)(r) : "0x", s ? ? "0x", c ? (0, u.NC)(c) : "0x", a ? ? "0x"];
                    if (t) {
                        let e = (() => {
                                if (t.v >= 35 n) return (t.v - 35 n) / 2 n > 0 ? t.v : 27 n + (35 n === t.v ? 0 n : 1 n);
                                if (n > 0) return BigInt(2 * n) + BigInt(35 n + t.v - 27 n);
                                let e = 27 n + (27 n === t.v ? 0 n : 1 n);
                                if (t.v !== e) throw new i.vl({
                                    v: t.v
                                });
                                return e
                            })(),
                            r = (0, l.f)(t.r),
                            a = (0, l.f)(t.s);
                        w = [...w, (0, u.NC)(e), "0x00" === r ? "0x" : r, "0x00" === a ? "0x" : a]
                    } else n > 0 && (w = [...w, (0, u.NC)(n), "0x", "0x"]);
                    return (0, d.LV)(w)
                }(e, t)
            }

            function U(e, t) {
                let n = t ? ? e,
                    {
                        v: i,
                        yParity: r
                    } = n;
                if (void 0 === n.r || void 0 === n.s || void 0 === i && void 0 === r) return [];
                let a = (0, l.f)(n.r),
                    o = (0, l.f)(n.s);
                return ["number" == typeof r ? r ? (0, u.NC)(1) : "0x" : 0 n === i ? "0x" : 1 n === i ? (0, u.NC)(1) : 27 n === i ? "0x" : (0, u.NC)(1), "0x00" === a ? "0x" : a, "0x00" === o ? "0x" : o]
            }
        }
    }
]);
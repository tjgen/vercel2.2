(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7781], {
        18187: function(e, n, t) {
            var r = 0 / 0,
                i = /^\s+|\s+$/g,
                o = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                a = /^0o[0-7]+$/i,
                c = parseInt,
                s = "object" == typeof t.g && t.g && t.g.Object === Object && t.g,
                l = "object" == typeof self && self && self.Object === Object && self,
                f = s || l || Function("return this")(),
                d = Object.prototype.toString,
                w = Math.max,
                v = Math.min,
                g = function() {
                    return f.Date.now()
                };

            function h(e) {
                var n = typeof e;
                return !!e && ("object" == n || "function" == n)
            }

            function y(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == typeof(n = e) || n && "object" == typeof n && "[object Symbol]" == d.call(n)) return r;
                if (h(e)) {
                    var n, t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = h(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(i, "");
                var s = u.test(e);
                return s || a.test(e) ? c(e.slice(2), s ? 2 : 8) : o.test(e) ? r : +e
            }
            e.exports = function(e, n, t) {
                var r, i, o, u, a, c, s = 0,
                    l = !1,
                    f = !1,
                    d = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function p(n) {
                    var t = r,
                        o = i;
                    return r = i = void 0, s = n, u = e.apply(o, t)
                }

                function m(e) {
                    var t = e - c,
                        r = e - s;
                    return void 0 === c || t >= n || t < 0 || f && r >= o
                }

                function b() {
                    var e, t, r, i = g();
                    if (m(i)) return E(i);
                    a = setTimeout(b, (e = i - c, t = i - s, r = n - e, f ? v(r, o - t) : r))
                }

                function E(e) {
                    return (a = void 0, d && r) ? p(e) : (r = i = void 0, u)
                }

                function S() {
                    var e, t = g(),
                        o = m(t);
                    if (r = arguments, i = this, c = t, o) {
                        if (void 0 === a) return s = e = c, a = setTimeout(b, n), l ? p(e) : u;
                        if (f) return a = setTimeout(b, n), p(c)
                    }
                    return void 0 === a && (a = setTimeout(b, n)), u
                }
                return n = y(n) || 0, h(t) && (l = !!t.leading, o = (f = "maxWait" in t) ? w(y(t.maxWait) || 0, n) : o, d = "trailing" in t ? !!t.trailing : d), S.cancel = function() {
                    void 0 !== a && clearTimeout(a), s = 0, r = c = i = a = void 0
                }, S.flush = function() {
                    return void 0 === a ? u : E(g())
                }, S
            }
        },
        87781: function(e, n, t) {
            "use strict";
            t.d(n, {
                Xs: function() {
                    return g
                },
                _: function() {
                    return l
                },
                ac: function() {
                    return d
                },
                iP: function() {
                    return y
                },
                m9: function() {
                    return a
                },
                t$: function() {
                    return w
                }
            });
            var r = t(11390),
                i = t(18187),
                o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;

            function u(e, n, t, i) {
                let u = (0, r.useRef)(n);
                o(() => {
                    u.current = n
                }, [n]), (0, r.useEffect)(() => {
                    let n = (null == t ? void 0 : t.current) ? ? window;
                    if (!(n && n.addEventListener)) return;
                    let r = e => {
                        u.current(e)
                    };
                    return n.addEventListener(e, r, i), () => {
                        n.removeEventListener(e, r, i)
                    }
                }, [e, t, i])
            }

            function a() {
                let [e, n] = (0, r.useState)(null);
                return [e, (0, r.useCallback)(async e => {
                    if (!(null == navigator ? void 0 : navigator.clipboard)) return console.warn("Clipboard not supported"), !1;
                    try {
                        return await navigator.clipboard.writeText(e), n(e), !0
                    } catch (e) {
                        return console.warn("Copy failed", e), n(null), !1
                    }
                }, [])]
            }

            function c(e) {
                let n = (0, r.useRef)(() => {
                    throw Error("Cannot call an event handler while rendering.")
                });
                return o(() => {
                    n.current = e
                }, [e]), (0, r.useCallback)((...e) => {
                    var t;
                    return null == (t = n.current) ? void 0 : t.call(n, ...e)
                }, [n])
            }
            var s = "undefined" == typeof window;

            function l(e, n, t = {}) {
                let {
                    initializeWithValue: i = !0
                } = t, o = (0, r.useCallback)(e => t.serializer ? t.serializer(e) : JSON.stringify(e), [t]), a = (0, r.useCallback)(e => {
                    let r;
                    if (t.deserializer) return t.deserializer(e);
                    if ("undefined" === e) return;
                    let i = n instanceof Function ? n() : n;
                    try {
                        r = JSON.parse(e)
                    } catch (e) {
                        return console.error("Error parsing JSON:", e), i
                    }
                    return r
                }, [t, n]), l = (0, r.useCallback)(() => {
                    let t = n instanceof Function ? n() : n;
                    if (s) return t;
                    try {
                        let n = window.localStorage.getItem(e);
                        return n ? a(n) : t
                    } catch (n) {
                        return console.warn(`Error reading localStorage key \u201C${e}\u201D:`, n), t
                    }
                }, [n, e, a]), [f, d] = (0, r.useState)(() => i ? l() : n instanceof Function ? n() : n), w = c(n => {
                    s && console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);
                    try {
                        let t = n instanceof Function ? n(l()) : n;
                        window.localStorage.setItem(e, o(t)), d(t), window.dispatchEvent(new StorageEvent("local-storage", {
                            key: e
                        }))
                    } catch (n) {
                        console.warn(`Error setting localStorage key \u201C${e}\u201D:`, n)
                    }
                }), v = c(() => {
                    s && console.warn(`Tried removing localStorage key \u201C${e}\u201D even though environment is not a client`);
                    let t = n instanceof Function ? n() : n;
                    window.localStorage.removeItem(e), d(t), window.dispatchEvent(new StorageEvent("local-storage", {
                        key: e
                    }))
                });
                (0, r.useEffect)(() => {
                    d(l())
                }, [e]);
                let g = (0, r.useCallback)(n => {
                    n.key && n.key !== e || d(l())
                }, [e, l]);
                return u("storage", g), u("local-storage", g), [f, w, v]
            }
            var f = "undefined" == typeof window;

            function d(e, {
                defaultValue: n = !1,
                initializeWithValue: t = !0
            } = {}) {
                let i = e => f ? n : window.matchMedia(e).matches,
                    [u, a] = (0, r.useState)(() => t ? i(e) : n);

                function c() {
                    a(i(e))
                }
                return o(() => {
                    let n = window.matchMedia(e);
                    return c(), n.addListener ? n.addListener(c) : n.addEventListener("change", c), () => {
                        n.removeListener ? n.removeListener(c) : n.removeEventListener("change", c)
                    }
                }, [e]), u
            }

            function w(e, n, t = "mousedown", r = {}) {
                u(t, t => {
                    let r = t.target;
                    r && r.isConnected && (Array.isArray(e) ? e.filter(e => !!e.current).every(e => e.current && !e.current.contains(r)) : e.current && !e.current.contains(r)) && n(t)
                }, void 0, r)
            }
            var v = "undefined" == typeof window;

            function g(e, n, t = {}) {
                let {
                    initializeWithValue: i = !0
                } = t, o = (0, r.useCallback)(e => t.serializer ? t.serializer(e) : JSON.stringify(e), [t]), a = (0, r.useCallback)(e => {
                    let r;
                    if (t.deserializer) return t.deserializer(e);
                    if ("undefined" === e) return;
                    let i = n instanceof Function ? n() : n;
                    try {
                        r = JSON.parse(e)
                    } catch (e) {
                        return console.error("Error parsing JSON:", e), i
                    }
                    return r
                }, [t, n]), s = (0, r.useCallback)(() => {
                    let t = n instanceof Function ? n() : n;
                    if (v) return t;
                    try {
                        let n = window.sessionStorage.getItem(e);
                        return n ? a(n) : t
                    } catch (n) {
                        return console.warn(`Error reading sessionStorage key \u201C${e}\u201D:`, n), t
                    }
                }, [n, e, a]), [l, f] = (0, r.useState)(() => i ? s() : n instanceof Function ? n() : n), d = c(n => {
                    v && console.warn(`Tried setting sessionStorage key \u201C${e}\u201D even though environment is not a client`);
                    try {
                        let t = n instanceof Function ? n(s()) : n;
                        window.sessionStorage.setItem(e, o(t)), f(t), window.dispatchEvent(new StorageEvent("session-storage", {
                            key: e
                        }))
                    } catch (n) {
                        console.warn(`Error setting sessionStorage key \u201C${e}\u201D:`, n)
                    }
                }), w = c(() => {
                    v && console.warn(`Tried removing sessionStorage key \u201C${e}\u201D even though environment is not a client`);
                    let t = n instanceof Function ? n() : n;
                    window.sessionStorage.removeItem(e), f(t), window.dispatchEvent(new StorageEvent("session-storage", {
                        key: e
                    }))
                });
                (0, r.useEffect)(() => {
                    f(s())
                }, [e]);
                let g = (0, r.useCallback)(n => {
                    n.key && n.key !== e || f(s())
                }, [e, s]);
                return u("storage", g), u("session-storage", g), [l, d, w]
            }
            var h = "undefined" == typeof window;

            function y(e = {}) {
                let {
                    initializeWithValue: n = !0
                } = e;
                h && (n = !1);
                let [t, a] = (0, r.useState)(() => n ? {
                    width: window.innerWidth,
                    height: window.innerHeight
                } : {
                    width: void 0,
                    height: void 0
                }), c = function(e, n = 500, t) {
                    let o = (0, r.useRef)();
                    ! function(e) {
                        let n = (0, r.useRef)(e);
                        n.current = e, (0, r.useEffect)(() => () => {
                            n.current()
                        }, [])
                    }(() => {
                        o.current && o.current.cancel()
                    });
                    let u = (0, r.useMemo)(() => {
                        let t = i(e, n, void 0),
                            r = (...e) => t(...e);
                        return r.cancel = () => {
                            t.cancel()
                        }, r.isPending = () => !!o.current, r.flush = () => t.flush(), r
                    }, [e, n, void 0]);
                    return (0, r.useEffect)(() => {
                        o.current = i(e, n, void 0)
                    }, [e, n, t]), u
                }(a, e.debounceDelay);

                function s() {
                    (e.debounceDelay ? c : a)({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
                return u("resize", s), o(() => {
                    s()
                }, []), t
            }
        }
    }
]);
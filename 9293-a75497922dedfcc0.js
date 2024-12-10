"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9293], {
        77141: function(e, t, n) {
            n.d(t, {
                G9: function() {
                    return a
                },
                R1: function() {
                    return u
                }
            }), n(15764);
            var r = n(44369),
                a = (0, r.$)("6ebbf4fd740a22fa6c636653bbc8c67593b78e71");
            (0, r.$)("02a6ceb0d6e803bde02e0c6dc9a3a1cb994c1e70");
            var u = (0, r.$)("aafa2555a19b1c2b5fa24ff3ee5cd9399b7e593e")
        },
        86017: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return r
                }
            });
            let r = {
                token: [{
                    label: "12H",
                    value: "12H"
                }, {
                    label: "1D",
                    value: "1D"
                }, {
                    label: "7D",
                    value: "7D"
                }, {
                    label: "1M",
                    value: "1M"
                }, {
                    label: "3M",
                    value: "3M"
                }, {
                    label: "All time",
                    value: "all"
                }],
                wallet: [{
                    label: "Today",
                    value: "Today"
                }, {
                    label: "Yesterday",
                    value: "Yesterday"
                }, {
                    label: "7D",
                    value: "7D"
                }, {
                    label: "1M",
                    value: "1M"
                }, {
                    label: "2M",
                    value: "2M"
                }, {
                    label: "3M",
                    value: "3M"
                }]
            }
        },
        13666: function(e, t, n) {
            n.d(t, {
                EO: function() {
                    return i
                },
                Ez: function() {
                    return u
                },
                KV: function() {
                    return s
                }
            });
            var r = n(78154),
                a = n(32156);
            let u = async () => {
                    let e = r.qt.getItem("userInfo");
                    return a.Z.get("user/payment/subscription", {
                        searchParams: {
                            token: e.token
                        }
                    }).json()
                },
                s = async () => a.Z.get("user/subscription/links").json(),
                i = async () => {
                    let e = r.qt.getItem("userInfo");
                    return await a.Z.get("user/payment/unsubscribe", {
                        searchParams: {
                            token: e.token
                        }
                    }).json()
                }
        },
        11245: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return s
                }
            });
            var r = n(11390),
                a = n(2682),
                u = n(71858);
            let s = e => {
                let {
                    data: t
                } = (0, a.useQuery)({
                    queryKey: ["useAmmList", e],
                    queryFn: () => (0, u.dJ)(e)
                });
                return (0, r.useMemo)(() => {
                    var e;
                    return (null == t ? void 0 : t.data) ? null == t ? void 0 : null === (e = t.data) || void 0 === e ? void 0 : e.reduce((e, t) => (e[t.source.toLowerCase()] = t, e), {}) : {}
                }, [null == t ? void 0 : t.data])
            }
        },
        48397: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return i
                }
            });
            var r = n(36810),
                a = n(63798),
                u = n.n(a),
                s = n(82269);
            let i = e => {
                let t = (0, r.useSearchParams)(),
                    n = (0, r.usePathname)(),
                    {
                        replace: a
                    } = (0, r.useRouter)(),
                    i = e || t.get("chain") || "all";
                return s.p5[i] || (i = "all"), {
                    chain: s.p5[i],
                    setSearchParams: e => {
                        let r = new URLSearchParams(t);
                        r.set("chain", e), u().start(), a("".concat(n, "?").concat(r.toString()))
                    },
                    getChainById: e => Object.values(s.p5).find(t => t.id === e)
                }
            }
        },
        20544: function(e, t, n) {
            n.d(t, {
                as: function() {
                    return b.as
                },
                aC: function() {
                    return f
                },
                Gc: function() {
                    return S.Gc
                },
                Ab: function() {
                    return v.A
                },
                HG: function() {
                    return S.HG
                },
                Co: function() {
                    return b.Co
                },
                a5: function() {
                    return r.a
                },
                Df: function() {
                    return p
                },
                TH: function() {
                    return S.TH
                },
                ND: function() {
                    return m
                },
                P4: function() {
                    return b.P4
                },
                $u: function() {
                    return S.$u
                },
                By: function() {
                    return w
                },
                Mt: function() {
                    return b.Mt
                },
                K8: function() {
                    return S.K8
                },
                QH: function() {
                    return b.QH
                },
                NU: function() {
                    return b.NU
                },
                LR: function() {
                    return b.LR
                },
                je: function() {
                    return b.je
                },
                t3: function() {
                    return b.t3
                },
                uO: function() {
                    return b.uO
                },
                iP: function() {
                    return S.iP
                }
            });
            var r = n(11245),
                a = n(11390),
                u = n(36810),
                s = n(77141),
                i = n(90649),
                l = n(71858),
                o = n(79293);
            let c = new BroadcastChannel("logout"),
                d = new BroadcastChannel("login"),
                f = () => {
                    let e = (0, u.useRouter)(),
                        t = (0, u.usePathname)(),
                        {
                            addUserInfo: n
                        } = (0, o.m)(),
                        [r, f] = (0, a.useState)(!1),
                        {
                            toast: v
                        } = (0, i.pm)();
                    return {
                        login: async e => {
                            f(!0);
                            try {
                                let t = await (0, l.ii)(e);
                                if ((null == t ? void 0 : t.success) && (null == t ? void 0 : t.token)) {
                                    (0, s.R1)(t.token);
                                    let {
                                        data: e
                                    } = await (0, l.bG)(t.token);
                                    n({ ...e,
                                        token: t.token
                                    }), d.postMessage(JSON.stringify({ ...e,
                                        token: t.token
                                    }))
                                }
                                return t
                            } catch (e) {
                                return {
                                    success: !1,
                                    message: (null == e ? void 0 : e.message) || "Something went wrong",
                                    error: e
                                }
                            } finally {
                                f(!1)
                            }
                        },
                        logout: () => {
                            (0, s.G9)(), n(null), e.push("/"), c.postMessage("logout")
                        },
                        addChannelListener: () => {
                            c.onmessage = () => {
                                n(null), e.push("/")
                            }, d.onmessage = r => {
                                n(JSON.parse(r.data)), t.includes("user") && "user/profile" !== t && e.push("/")
                            }
                        },
                        fetchUserInfo: async function(e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                r = await (0, l.bG)(e);
                            if (r.success) {
                                n({ ...r.data,
                                    token: e
                                });
                                return
                            }
                            401 === r.statusCode && t && (n(null), v({
                                variant: "destructive",
                                title: "Session expired!",
                                description: "Your login session has expired. Please log in again to fully enjoy user privileges."
                            }))
                        },
                        loginChannel: d,
                        isLoading: r
                    }
                };
            var v = n(48397),
                y = n(2682),
                h = n(87781);
            let p = e => {
                    let t = (0, h.iP)().width,
                        n = (0, a.useMemo)(() => t >= 1800 ? 4 : t >= 1280 ? 3 : 1, [t]),
                        [r, u] = (0, a.useState)(50);
                    return (0, a.useEffect)(() => {
                        if (!e) return;
                        let t = () => {
                            u(e.clientWidth / 24 - n)
                        };
                        return t(), window.addEventListener("resize", t), () => {
                            window.removeEventListener("resize", t)
                        }
                    }, [n, e]), {
                        defaultProps: {
                            cols: t >= 768 ? 24 : 1,
                            rowHeight: r,
                            containerPadding: [0, 0],
                            margin: [n, n]
                        }
                    }
                },
                m = () => {
                    let {
                        id: e
                    } = (0, u.useParams)();
                    return (0, y.useQuery)({
                        queryKey: ["panelInfo", e],
                        queryFn: () => (0, l.Sd)(e)
                    })
                };
            var g = n(13666);
            let w = () => {
                let {
                    data: e,
                    isFetching: t,
                    refetch: n,
                    isError: r,
                    isPending: a
                } = (0, y.useQuery)({
                    queryKey: ["useStripeSubscriptionStatus"],
                    queryFn: () => (0, g.Ez)(),
                    retry: !1
                });
                return {
                    status: !r && !!(null == e ? void 0 : e.data) && (null == e ? void 0 : e.success) === !0,
                    data: e && (null == e ? void 0 : e.data),
                    isFetching: t,
                    isPending: a,
                    refetch: n
                }
            };
            var S = n(31628),
                b = n(27628)
        },
        31628: function(e, t, n) {
            n.d(t, {
                $u: function() {
                    return h
                },
                Gc: function() {
                    return y
                },
                HG: function() {
                    return o
                },
                K8: function() {
                    return f
                },
                TH: function() {
                    return v
                },
                iP: function() {
                    return c
                }
            });
            var r = n(11390),
                a = n(36810),
                u = n(60304),
                s = n.n(u),
                i = n(87781),
                l = n(82269);
            let o = e => {
                    let t = (0, a.useSearchParams)().get("chain") || e || "all";
                    return l.p5[t]
                },
                c = () => {
                    let [e, t] = (0, r.useState)([0, 0]);
                    return (0, r.useLayoutEffect)(() => {
                        let e = () => {
                            t([window.innerWidth, window.innerHeight])
                        };
                        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, []), e
                },
                d = e => {
                    let t = (0, r.useRef)();
                    return (0, r.useEffect)(() => {
                        t.current = e
                    }, [e]), t.current
                },
                f = (e, t) => {
                    let n = d(e);
                    (0, r.useEffect)(() => {
                        n && !s()(e, n) && t(e, n)
                    }, [e, n, t])
                },
                v = () => {
                    let e = (0, a.usePathname)(),
                        t = (0, a.useParams)(),
                        n = (0, a.useSearchParams)(),
                        {
                            replace: u
                        } = (0, a.useRouter)(),
                        [s, i] = (0, r.useState)(""),
                        [l, o] = (0, r.useState)(""),
                        [c, d] = (0, r.useState)(n ? "?".concat(n.toString()) : "");
                    return (0, r.useEffect)(() => {
                        i(window.location.href)
                    }, []), (0, r.useEffect)(() => {
                        o(window.location.hash.replace("#", ""))
                    }, [t]), (0, r.useEffect)(() => {
                        d("?".concat(n.toString()))
                    }, [n]), {
                        href: s,
                        fullPath: e + c + l,
                        pathname: e,
                        hash: l,
                        search: c,
                        setSearchParams: (t, r) => {
                            let a = new URLSearchParams(n);
                            a.set(t, r), u("".concat(e, "?").concat(a.toString()), {
                                scroll: !1
                            })
                        }
                    }
                },
                y = () => {
                    let e = (0, i.ac)("(min-width: 640px)"),
                        t = (0, i.ac)("(min-width: 768px)");
                    return {
                        isSm: e,
                        isMd: t,
                        isLg: (0, i.ac)("(min-width: 1024px)"),
                        isXl: (0, i.ac)("(min-width: 1280px)"),
                        is2xl: (0, i.ac)("(min-width: 1536px)")
                    }
                },
                h = (e, t) => {
                    let [n, a, u] = (0, i._)(e, t, {
                        initializeWithValue: !1
                    });
                    return (0, r.useEffect)(() => {
                        let t = localStorage.getItem(e);
                        if (t) {
                            try {
                                t = JSON.parse(t)
                            } catch (e) {}
                            a(t)
                        }
                    }, []), [n, a, u]
                }
        },
        27628: function(e, t, n) {
            n.d(t, {
                Co: function() {
                    return S
                },
                LR: function() {
                    return w
                },
                Mt: function() {
                    return b
                },
                NU: function() {
                    return p
                },
                P4: function() {
                    return P
                },
                QH: function() {
                    return h
                },
                as: function() {
                    return k
                },
                je: function() {
                    return g
                },
                t3: function() {
                    return m
                },
                uO: function() {
                    return y
                }
            });
            var r = n(11390),
                a = n(2682),
                u = n(33419),
                s = n(99001),
                i = n(90649),
                l = n(93165),
                o = n(86017),
                c = n(5333),
                d = n(79293),
                f = n(34685),
                v = n(31628);
            let y = () => {
                    let {
                        userInfo: e
                    } = (0, d.m)(), [t] = (0, v.$u)(l.F.WATCHLIST_ID, ""), {
                        data: n
                    } = (0, a.useQuery)({
                        queryKey: ["watchlists", null == e ? void 0 : e.token],
                        queryFn: () => (0, c.iJ)(),
                        enabled: !!(null == e ? void 0 : e.token)
                    }), {
                        tokens: u,
                        wallets: s
                    } = (0, r.useMemo)(() => {
                        var e, t;
                        return (null == n ? void 0 : null === (t = n.data) || void 0 === t ? void 0 : null === (e = t.items) || void 0 === e ? void 0 : e.reduce((e, t) => ("token" === t.type ? t.isDefault ? e.tokens.unshift(t) : e.tokens.push(t) : t.isDefault ? e.wallets.unshift(t) : e.wallets.push(t), e), {
                            tokens: [],
                            wallets: []
                        })) || {
                            tokens: [],
                            wallets: []
                        }
                    }, [n]), i = (0, r.useCallback)(e => {
                        if (e) return [...u, ...s].find(t => t.groupId === e)
                    }, [u, s]), o = i(t);
                    return {
                        tokens: u,
                        wallets: s,
                        getWatchlistById: i,
                        selectedWatchlist: o
                    }
                },
                h = () => {
                    let [e] = (0, v.$u)(l.F.WATCHLIST_ID, "");
                    return (0, a.useQuery)({
                        queryKey: ["watchlistDetails", e],
                        queryFn: () => (0, c.md)(e),
                        enabled: !!e,
                        placeholderData: e => e
                    })
                },
                p = (e, t) => {
                    let n = !!e && o.D.token.map(e => e.value).includes(e);
                    return (0, a.useQuery)({
                        queryKey: ["useWatchlistTokenChartStats", t.map(e => e.address).join("-"), e],
                        queryFn: () => (0, c.ji)({
                            time: e,
                            list_address: t
                        }),
                        placeholderData: e => e,
                        enabled: !!t.length && n
                    })
                },
                m = (e, t, n) => {
                    let r = !!e && o.D.wallet.map(e => e.value).includes(e);
                    return (0, a.useQuery)({
                        queryKey: ["useWatchlistTokenChartStats", t, e, n],
                        queryFn: () => (0, c.Ht)({
                            time: e,
                            list_address: t,
                            chart_type: n
                        }),
                        placeholderData: e => e,
                        enabled: !!t.length && r
                    })
                },
                g = (e, t) => {
                    let n = !!e && o.D.wallet.map(e => e.value).includes(e);
                    return (0, a.useQuery)({
                        queryKey: ["useWatchlistTradeProfileTokenStats", t, e],
                        queryFn: () => (0, c.IC)({
                            time: e,
                            list_address: t
                        }),
                        placeholderData: e => e,
                        enabled: !!t.length && n
                    })
                },
                w = (e, t) => {
                    let n = !!e && o.D.wallet.map(e => e.value).includes(e);
                    return (0, a.useQuery)({
                        queryKey: ["useWatchlistTradeProfileLargestTrades", t, e],
                        queryFn: () => (0, c.wE)({
                            time: e,
                            list_address: t
                        }),
                        placeholderData: e => e,
                        enabled: !!t.length && n
                    })
                },
                S = () => {
                    let e = (0, u.useQueryClient)(),
                        {
                            userInfo: t
                        } = (0, d.m)(),
                        {
                            toast: n
                        } = (0, i.pm)();
                    return (0, s.useMutation)({
                        mutationFn: c.LY,
                        onSuccess: r => {
                            r.success ? (e.setQueryData(["watchlists", null == t ? void 0 : t.token], e => {
                                var t;
                                let n = JSON.parse(JSON.stringify(e));
                                return n.data ? (n.data.items.push(r.data), n.data.total = ((null === (t = n.data) || void 0 === t ? void 0 : t.total) || 0) + 1, n) : e
                            }), n({
                                variant: "success",
                                title: "Create watchlist successfully!"
                            })) : n({
                                variant: "destructive",
                                title: r.message || "Failed to create watchlist. Please try again later"
                            })
                        }
                    })
                },
                b = () => {
                    let e = (0, u.useQueryClient)(),
                        {
                            userInfo: t
                        } = (0, d.m)(),
                        {
                            toast: n
                        } = (0, i.pm)();
                    return (0, s.useMutation)({
                        mutationFn: c.KE,
                        onSuccess: (r, a) => {
                            let {
                                groupId: u,
                                data: s
                            } = a;
                            r.success ? (e.invalidateQueries({
                                queryKey: ["watchlistDetails", u]
                            }), e.setQueryData(["watchlists", null == t ? void 0 : t.token], e => {
                                var t;
                                let n = JSON.parse(JSON.stringify(e)),
                                    r = null === (t = n.data) || void 0 === t ? void 0 : t.items.find(e => e.groupId === u);
                                return r && (r.address = s.list_address, r.groupColor = s.group_color, r.groupName = s.group_name), n
                            }), n({
                                variant: "success",
                                title: "Update watchlist successfully!"
                            })) : n({
                                variant: "destructive",
                                title: r.message || "Failed to update watchlist. Please try again later"
                            })
                        }
                    })
                },
                k = () => {
                    let e = (0, u.useQueryClient)(),
                        {
                            userInfo: t
                        } = (0, d.m)(),
                        {
                            toast: n
                        } = (0, i.pm)();
                    return (0, s.useMutation)({
                        mutationFn: c.uF,
                        onSuccess: (r, a) => {
                            let {
                                groupId: u,
                                data: s
                            } = a;
                            r.success ? (e.setQueryData(["watchlists", null == t ? void 0 : t.token], e => {
                                var t;
                                let n = JSON.parse(JSON.stringify(e)),
                                    r = null === (t = n.data) || void 0 === t ? void 0 : t.items.find(e => e.groupId === u);
                                return r && (r.type === f.SZ.TOKEN ? r.address.push(s) : r.address.push(s.address)), n
                            }), e.invalidateQueries({
                                queryKey: ["watchlistDetails", u]
                            }), n({
                                variant: "success",
                                title: r.message
                            })) : n({
                                variant: "destructive",
                                title: r.message
                            })
                        }
                    })
                },
                P = () => {
                    let e = (0, u.useQueryClient)(),
                        {
                            userInfo: t
                        } = (0, d.m)(),
                        {
                            toast: n
                        } = (0, i.pm)();
                    return (0, s.useMutation)({
                        mutationFn: c.fy,
                        onSuccess: (r, a) => {
                            let {
                                groupId: u,
                                data: s
                            } = a;
                            r.success ? (e.setQueryData(["watchlists", null == t ? void 0 : t.token], e => {
                                var t;
                                let n = JSON.parse(JSON.stringify(e)),
                                    r = null === (t = n.data) || void 0 === t ? void 0 : t.items.find(e => e.groupId === u);
                                return r && (r.type === f.SZ.TOKEN ? r.address = r.address.filter(e => e.address !== s.address) : r.address = r.address.filter(e => e !== s.address)), n
                            }), e.setQueryData(["watchlistDetails", u], e => {
                                if (!e) return e;
                                let t = JSON.parse(JSON.stringify(e));
                                return t.data.address = t.data.address.filter(e => e.address !== s.address), t
                            }), n({
                                variant: "success",
                                title: r.message
                            })) : n({
                                variant: "destructive",
                                title: r.message
                            })
                        }
                    })
                }
        },
        79293: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return v
                },
                m: function() {
                    return f
                }
            });
            var r = n(3404),
                a = n(11390),
                u = n(77141),
                s = n(90649),
                i = n(4643),
                l = n(71858),
                o = n(20544),
                c = n(25932);
            let d = (0, a.createContext)({
                    userInfo: null,
                    addUserInfo: () => {},
                    isLogin: !1,
                    openNavTerminal: !0,
                    setOpenNavTerminal: () => {},
                    fetchUserInfo: async () => {}
                }),
                f = () => (0, a.useContext)(d);

            function v(e) {
                let {
                    children: t
                } = e, [n, f] = (0, o.$u)(i.Fe.USER_INFO, null), [v, y] = (0, a.useState)(!1), {
                    toast: h
                } = (0, s.pm)(), [p] = (0, o.iP)();
                (0, a.useEffect)(() => {
                    p < 768 && y(!1)
                }, [y]);
                let m = (0, a.useCallback)(e => {
                        if (e) {
                            let {
                                subscription: t,
                                isConfirm: n,
                                package: r
                            } = e;
                            e = { ...e,
                                isFreeUser: !t,
                                isFreeUserVerified: !t && n,
                                isUserVerified: n,
                                isUnActiveProUser: t && !n,
                                isActiveProUser: t && n && "pro" === r,
                                isProUser: t
                            }
                        }
                        f(e), e ? c.q.setItem("userInfo", e) : c.q.removeItem("userInfo")
                    }, [f]),
                    g = async function(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = await (0, l.bG)(e);
                        if (n.success) return m({ ...n.data,
                            token: e
                        }), n;
                        401 === n.statusCode && t && ((0, u.G9)(), m(null), t && h({
                            variant: "destructive",
                            title: "Session expired!",
                            description: "Your login session has expired. Please log in again to fully enjoy user privileges."
                        }))
                    };
                return (0, a.useEffect)(() => {
                    if (localStorage.getItem(i.Fe.USER_INFO) || (0, u.G9)(), !(null == n ? void 0 : n.token)) return;
                    g(n.token).then(e => {
                        (null == e ? void 0 : e.success) && (0, u.R1)(n.token)
                    });
                    let e = setInterval(async () => {
                        g(n.token)
                    }, 3e5);
                    return () => {
                        clearInterval(e)
                    }
                }, [null == n ? void 0 : n.token]), (0, r.jsx)(d.Provider, {
                    value: {
                        userInfo: n,
                        addUserInfo: m,
                        isLogin: !!n,
                        openNavTerminal: v,
                        setOpenNavTerminal: y,
                        fetchUserInfo: g
                    },
                    children: t
                })
            }
        }
    }
]);
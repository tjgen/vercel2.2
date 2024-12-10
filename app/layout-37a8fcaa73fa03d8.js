(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        80170: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 7989)), Promise.resolve().then(r.bind(r, 53482)), Promise.resolve().then(r.bind(r, 18161)), Promise.resolve().then(r.bind(r, 43267)), Promise.resolve().then(r.t.bind(r, 96656, 23)), Promise.resolve().then(r.t.bind(r, 92232, 23)), Promise.resolve().then(r.t.bind(r, 88660, 23)), Promise.resolve().then(r.bind(r, 85040)), Promise.resolve().then(r.bind(r, 29762)), Promise.resolve().then(r.bind(r, 44492)), Promise.resolve().then(r.bind(r, 26681)), Promise.resolve().then(r.bind(r, 58022)), Promise.resolve().then(r.t.bind(r, 23549, 23))
        },
        7989: function(e, t, r) {
            "use strict";
            var n = r(3404),
                s = r(11390),
                a = r(27097),
                i = r(36810),
                l = r(34078),
                d = r.n(l),
                o = r(50753);
            t.default = () => {
                let [e, t] = (0, s.useState)(!1), [r, l] = (0, s.useState)({
                    name: "",
                    version: ""
                }), u = (0, i.usePathname)(), c = ["/tv-widget"].some(e => u.startsWith(e));
                return (0, s.useEffect)(() => {
                    let e = new(d()),
                        r = e.getDevice(),
                        n = e.getOS(),
                        s = "mobile" === r.type,
                        a = "tablet" === r.type;
                    n && l(n), (s || a) && !localStorage.getItem("birdeyeAppHide") && t(!0)
                }, []), e && !c ? (0, n.jsx)("div", {
                    className: "fixed bottom-[12px] left-4 right-4 z-50 rounded bg-card p-4 ",
                    children: (0, n.jsxs)("div", {
                        className: "relative flex flex-1 items-center gap-2",
                        children: [(0, n.jsx)("button", {
                            onClick: () => {
                                localStorage.setItem("birdeyeAppHide", "true"), t(!1)
                            },
                            className: "absolute -right-[12px] -top-[16px] text-neutral-400",
                            children: (0, n.jsx)(o.uC5, {
                                size: 14
                            })
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-1 flex-wrap items-center justify-between gap-2",
                            children: [(0, n.jsxs)("div", {
                                className: "flex items-center gap-[12px]",
                                children: [(0, n.jsx)("div", {
                                    className: "h-[40px] w-[40px] rounded-[8px] bg-neutral p-[8px]",
                                    children: (0, n.jsx)(a.default, {
                                        src: "/be/m-light-logo.png",
                                        width: 24,
                                        height: 24,
                                        alt: "Birdeye logo"
                                    })
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("h4", {
                                        className: "text-caption-bold-12 uppercase",
                                        children: "Birdeye App"
                                    }), (0, n.jsx)("p", {
                                        className: "text-neutral-500",
                                        children: "Accurate, fast, and convenient"
                                    })]
                                })]
                            }), (0, n.jsx)("button", {
                                className: "inline-block rounded bg-primary px-[8px] py-[4px] text-caption-bold-12 uppercase text-neutral",
                                onClick: () => {
                                    window.location.href = (null == r ? void 0 : r.name) === "iOS" ? "https://apps.apple.com/us/app/birdeye-crypto-data/id6557061634" : (null == r ? void 0 : r.name) === "Android" ? "https://play.google.com/store/apps/details?id=so.birdeye.mobile" : "#"
                                },
                                children: "Download"
                            })]
                        })]
                    })
                }) : null
            }
        },
        85040: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                default: function() {
                    return ea
                }
            });
            var s = r(3404),
                a = r(11390),
                i = r(20544),
                l = () => {
                    let {
                        addChannelListener: e
                    } = (0, i.aC)();
                    return (0, a.useEffect)(() => {
                        e()
                    }, []), (0, s.jsx)(s.Fragment, {})
                },
                d = r(41992),
                o = r(99277),
                u = r(50753),
                c = r(49175);
            let p = d.zt,
                m = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...n
                    } = e;
                    return (0, s.jsx)(d.l_, {
                        ref: t,
                        className: (0, c.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:right-0 sm:flex-col md:max-w-[420px]", r),
                        ...n
                    })
                });
            m.displayName = d.l_.displayName;
            let x = (0, o.j)("group pointer-events-auto relative flex w-full items-start gap-2 overflow-hidden rounded border p-3 text-neutral data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
                    variants: {
                        variant: {
                            default: "border bg-background text-foreground",
                            info: "border-blue-400 bg-blue-400",
                            success: "success border-green-400 bg-green-400",
                            warning: "border-yellow-400 bg-yellow-400",
                            destructive: "destructive border-red-400 bg-red-400",
                            error: "destructive border-red-400 bg-red-400"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                f = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        variant: n,
                        ...a
                    } = e;
                    return (0, s.jsx)(d.fC, {
                        ref: t,
                        className: (0, c.cn)(x({
                            variant: n
                        }), r),
                        ...a
                    })
                });
            f.displayName = d.fC.displayName, a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)(d.aU, {
                    ref: t,
                    className: (0, c.cn)("ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground", r),
                    ...n
                })
            }).displayName = d.aU.displayName;
            let h = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)(d.x8, {
                    ref: t,
                    className: (0, c.cn)("text-neutral-400 outline-none", r),
                    "toast-close": "",
                    ...n,
                    children: (0, s.jsx)(u.Two, {
                        color: "currentColor"
                    })
                })
            });
            h.displayName = d.x8.displayName;
            let v = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)(d.Dx, {
                    ref: t,
                    className: (0, c.cn)("text-subtitle-bold-14", r),
                    ...n
                })
            });
            v.displayName = d.Dx.displayName;
            let b = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, s.jsx)(d.dk, {
                    ref: t,
                    className: (0, c.cn)("", r),
                    ...n
                })
            });
            b.displayName = d.dk.displayName;
            let g = a.forwardRef((e, t) => {
                let {
                    variant: r = "default"
                } = e;
                return (0, s.jsxs)("div", {
                    ref: t,
                    children: ["success" === r && (0, s.jsx)(u.qE0, {}), "info" === r && (0, s.jsx)(u.lbr, {}), "warning" === r && (0, s.jsx)(u.Hbz, {}), ("destructive" === r || "error" === r) && (0, s.jsx)(u.MhL, {
                        subColor: "#F6583C",
                        className: "text-neutral"
                    }), "default" === r && (0, s.jsx)(u.lbr, {})]
                })
            });
            g.displayName = "ToastIcon";
            var j = r(90649);

            function w() {
                let {
                    toasts: e
                } = (0, j.pm)();
                return (0, s.jsxs)(p, {
                    children: [e.map(function(e) {
                        let {
                            id: t,
                            title: r,
                            description: n,
                            action: a,
                            ...i
                        } = e;
                        return (0, s.jsxs)(f, { ...i,
                            children: [(0, s.jsxs)("div", {
                                className: "flex-1 space-y-1",
                                children: [r && (0, s.jsxs)("div", {
                                    className: "flex gap-1",
                                    children: [(0, s.jsx)(g, {
                                        variant: i.variant
                                    }), (0, s.jsx)(v, {
                                        children: r
                                    })]
                                }), n && (0, s.jsx)(b, {
                                    className: "mb-[4px]",
                                    children: n
                                }), a]
                            }), (0, s.jsx)(h, {})]
                        }, t)
                    }), (0, s.jsx)(m, {})]
                })
            }
            var y = r(79293),
                N = r(21705),
                k = r(69485),
                C = r(33419);

            function P() {
                return new N.S({
                    defaultOptions: {
                        queries: {
                            staleTime: 6e4,
                            retry: 1,
                            retryDelay: 1e3,
                            refetchOnWindowFocus: !1
                        }
                    }
                })
            }

            function q(e) {
                let {
                    children: t
                } = e, r = k.sk ? P() : (n || (n = P()), n);
                return (0, s.jsx)(C.QueryClientProvider, {
                    client: r,
                    children: t
                })
            }
            var S = r(80581),
                R = r(38224),
                _ = r(57280),
                O = r(28250),
                z = r(43101),
                A = r(20738),
                D = r(72174),
                E = r(5835),
                F = r(2682),
                T = r(71858);
            r(25487);
            let I = {
                    url: "https://rpc-solana.birdeye.so/"
                },
                M = e => {
                    let {
                        children: t
                    } = e, {
                        data: r
                    } = (0, F.useQuery)({
                        queryKey: ["rpcs"],
                        queryFn: () => (0, T.gD)()
                    }), n = S.Q.Mainnet, i = (0, a.useMemo)(() => {
                        var e;
                        if (!(null == r ? void 0 : r.data) || (null == r ? void 0 : null === (e = r.data) || void 0 === e ? void 0 : e.length) === 0) return I.url;
                        let t = r.data.find(e => e.force);
                        return (null == t ? void 0 : t.url) || r.data[0].url
                    }, [null == r ? void 0 : r.data]), l = (0, a.useMemo)(() => [new O.O, new z.e({
                        network: n
                    }), new A.A, new D.H, new E.T], [n]);
                    return (0, s.jsx)(R.U, {
                        endpoint: i,
                        children: (0, s.jsx)(_.n, {
                            wallets: l,
                            autoConnect: !0,
                            children: t
                        })
                    })
                };
            var H = r(38330),
                B = e => {
                    let {
                        children: t,
                        ...r
                    } = e;
                    return (0, s.jsx)(H.f, { ...r,
                        children: t
                    })
                },
                Q = r(69269),
                U = r(17219),
                W = r(20518),
                K = r(39157),
                L = r(43793),
                V = r(78457),
                Z = r(42750),
                G = r(37156),
                J = r(52273),
                X = r(92455),
                Y = r(68041);
            let $ = (0, Q._)({
                    chains: [K.R, L.e, V.y, Z.p, G.v, J.y, X.u, Y.l],
                    ssr: !0,
                    transports: {
                        [K.R.id]: (0, U.d)("https://cosmopolitan-snowy-liquid.quiknode.pro"),
                        [L.e.id]: (0, U.d)("https://floral-evocative-isle.bsc.quiknode.pro"),
                        [V.y.id]: (0, U.d)("https://wandering-smart-forest.arbitrum-mainnet.quiknode.pro"),
                        [Z.p.id]: (0, U.d)("https://flashy-quaint-resonance.avalanche-mainnet.quiknode.pro/ext/bc/C/rpc"),
                        [G.v.id]: (0, U.d)("https://bitter-wild-silence.optimism.quiknode.pro"),
                        [J.y.id]: (0, U.d)("https://wandering-side-hexagon.matic.quiknode.pro"),
                        [X.u.id]: (0, U.d)("https://purple-wider-crater.base-mainnet.quiknode.pro"),
                        [Y.l.id]: (0, U.d)("https://cosmopolitan-indulgent-pond.zksync-mainnet.quiknode.pro")
                    }
                }),
                ee = e => {
                    let {
                        children: t
                    } = e;
                    return (0, s.jsx)(W.F, {
                        config: $,
                        children: t
                    })
                };
            var et = r(67494),
                er = r(30678);
            r(31165);
            let {
                networkConfig: en
            } = (0, et.mB)({
                localnet: {
                    url: (0, er.I)("localnet")
                },
                mainnet: {
                    url: (0, er.I)("mainnet")
                }
            }), es = e => {
                let {
                    children: t
                } = e;
                return (0, s.jsx)(et.MS, {
                    networks: en,
                    defaultNetwork: "mainnet",
                    children: (0, s.jsx)(et.nS, {
                        children: t
                    })
                })
            };

            function ea(e) {
                let {
                    children: t
                } = e;
                return (0, s.jsx)(B, {
                    attribute: "class",
                    defaultTheme: "dark",
                    enableSystem: !0,
                    disableTransitionOnChange: !0,
                    children: (0, s.jsxs)(q, {
                        children: [(0, s.jsx)(y.Z, {
                            children: (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(l, {}), (0, s.jsx)(M, {
                                    children: (0, s.jsx)(ee, {
                                        children: (0, s.jsx)(es, {
                                            children: t
                                        })
                                    })
                                })]
                            })
                        }), (0, s.jsx)(w, {})]
                    })
                })
            }
        },
        23549: function() {}
    },
    function(e) {
        e.O(0, [6072, 5369, 5585, 3412, 6427, 5974, 4084, 7781, 6805, 3762, 9909, 7639, 4376, 544, 753, 7684, 9293, 4254, 2636, 1744], function() {
            return e(e.s = 80170)
        }), _N_E = e.O()
    }
]);
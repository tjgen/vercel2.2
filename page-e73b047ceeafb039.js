(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9467], {
        42915: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 84161)), Promise.resolve().then(a.t.bind(a, 36805, 23)), Promise.resolve().then(a.t.bind(a, 99213, 23)), Promise.resolve().then(a.bind(a, 21142))
        },
        46744: function(e, t, a) {
            "use strict";
            var s = a(3404),
                r = a(27097),
                n = a(41654),
                l = a(38330),
                i = a(20544),
                d = a(20178),
                o = a(99104),
                c = a(53971),
                u = a(7370),
                x = a(50753);
            t.Z = e => {
                let {
                    trigger: t,
                    triggerClassName: a,
                    open: m,
                    setOpen: p
                } = e, {
                    theme: h
                } = (0, l.useTheme)(), {
                    fullPath: f
                } = (0, i.TH)(), b = () => {
                    p && p(!1)
                };
                return (0, s.jsxs)(u.Vq, {
                    open: m,
                    onOpenChange: p,
                    children: [t && (0, s.jsx)(u.hg, {
                        className: a,
                        asChild: !0,
                        children: (0, s.jsx)("div", {
                            className: "inline-block",
                            children: t
                        })
                    }), (0, s.jsx)(u.cZ, {
                        className: "max-w-[880px] px-16 py-12 max-lg:max-w-[calc(100vw-32px)] max-md:px-6",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col justify-between gap-6 border-y-2 border-neutral-500 py-14 md:flex-row max-md:py-6",
                            children: [(0, s.jsx)(r.default, {
                                src: "dark" === h ? o.Z : d.Z,
                                alt: "bds-logo",
                                className: "max-md:w-[130px] max-md:self-center"
                            }), (0, s.jsxs)("div", {
                                className: "space-y-4",
                                children: [(0, s.jsxs)("div", {
                                    children: [(0, s.jsx)(u.$N, {
                                        className: "max-md:text-title-bold-18",
                                        children: "LOG IN REQUIRED"
                                    }), (0, s.jsx)(u.Be, {
                                        className: "mt-2",
                                        children: "Perfect your browsing experience with Birdeye Account"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    children: [(0, s.jsxs)("div", {
                                        className: "space-x-1",
                                        children: [(0, s.jsx)(x.qE0, {
                                            className: "text-success"
                                        }), (0, s.jsx)("span", {
                                            className: "text-subtitle-bold-14",
                                            children: "Cross-Device Syncing"
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "mt-1 text-neutral-500",
                                        children: "Your settings are synced and remains updated across various devices."
                                    })]
                                }), (0, s.jsxs)("div", {
                                    children: [(0, s.jsxs)("div", {
                                        className: "space-x-1",
                                        children: [(0, s.jsx)(x.qE0, {
                                            className: "text-success"
                                        }), (0, s.jsx)("span", {
                                            className: "text-subtitle-bold-14",
                                            children: "Lighter Loading"
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "mt-1 text-neutral-500",
                                        children: "Conserve device space as your settings resides securely on our servers"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex gap-6",
                                    children: [(0, s.jsx)(n.default, {
                                        href: "/user/sign-in?prev=".concat(f),
                                        className: "flex-1",
                                        onClick: b,
                                        onTouchStart: b,
                                        children: (0, s.jsx)(c.z, {
                                            variant: "secondary",
                                            size: "lg",
                                            className: "w-full",
                                            children: "LOG IN"
                                        })
                                    }), (0, s.jsx)(n.default, {
                                        href: "/user/sign-up?prev=".concat(f),
                                        className: "flex-1",
                                        onClick: b,
                                        onTouchStart: b,
                                        children: (0, s.jsx)(c.z, {
                                            size: "lg",
                                            className: "w-full",
                                            children: "SIGN UP"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        53971: function(e, t, a) {
            "use strict";
            a.d(t, {
                d: function() {
                    return c
                },
                z: function() {
                    return u
                }
            });
            var s = a(3404),
                r = a(11390),
                n = a(62250),
                l = a(99277),
                i = a(53322),
                d = a(71618),
                o = a(49175);
            let c = (0, l.j)("inline-flex items-center justify-center gap-1 whitespace-nowrap rounded border border-transparent px-4 uppercase outline-none transition-colors disabled:pointer-events-none disabled:opacity-30", {
                    variants: {
                        variant: {
                            primary: "bg-primary text-primary-foreground hover:bg-primary-400",
                            secondary: "border-primary text-primary hover:bg-primary-100",
                            subtle: "bg-neutral-200 text-neutral-600 hover:bg-neutral-300",
                            outline: "border-neutral-500 text-neutral-500 hover:bg-neutral-200",
                            ghost: "text-neutral-400 hover:bg-neutral-300 hover:text-neutral-500",
                            link: "border-0 p-0 normal-case text-blue-400 hover:underline",
                            text: "border-0 p-0 normal-case"
                        },
                        size: {
                            default: "h-10 text-body-bold-14",
                            sm: "h-8 text-caption-bold-12",
                            lg: "h-12 text-subtitle-bold-15",
                            icon: "size-8 p-0"
                        }
                    },
                    compoundVariants: [{
                        variant: "link",
                        size: "default",
                        className: "h-auto text-subtitle-medium-14"
                    }, {
                        variant: "link",
                        size: "sm",
                        className: "h-auto text-caption-medium-10"
                    }, {
                        variant: "text",
                        size: "default",
                        className: "h-auto"
                    }],
                    defaultVariants: {
                        variant: "primary",
                        size: "default"
                    }
                }),
                u = r.forwardRef((e, t) => {
                    let {
                        type: a = "button",
                        className: r,
                        variant: l,
                        size: u,
                        asChild: x,
                        loading: m,
                        disabled: p,
                        icon: h,
                        children: f,
                        ...b
                    } = e, g = x ? n.g7 : "button";
                    return (0, s.jsxs)(g, {
                        type: a,
                        className: (0, o.cn)(c({
                            variant: l,
                            size: u,
                            className: r
                        })),
                        ref: t,
                        disabled: p || m,
                        ...b,
                        children: [(0, s.jsx)(n.g7, {
                            className: (0, i.Z)("sm" === u || "icon" === u ? "size-4" : "size-6"),
                            children: m ? (0, s.jsx)(d.Z, {
                                className: "shrink-0 animate-spin"
                            }) : h
                        }), f]
                    })
                });
            u.displayName = "Button"
        },
        7370: function(e, t, a) {
            "use strict";
            a.d(t, {
                $N: function() {
                    return h
                },
                Be: function() {
                    return f
                },
                GG: function() {
                    return u
                },
                Vq: function() {
                    return d
                },
                cZ: function() {
                    return m
                },
                fK: function() {
                    return p
                },
                hg: function() {
                    return o
                }
            });
            var s = a(3404),
                r = a(11390),
                n = a(81366),
                l = a(97348),
                i = a(49175);
            let d = n.fC,
                o = n.xz,
                c = n.h_,
                u = n.x8,
                x = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...r
                    } = e;
                    return (0, s.jsx)(n.aV, {
                        ref: t,
                        className: (0, i.cn)("fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
                        ...r
                    })
                });
            x.displayName = n.aV.displayName;
            let m = r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    showClose: d = !0,
                    closeClassName: o,
                    ...u
                } = e;
                return (0, s.jsxs)(c, {
                    children: [(0, s.jsx)(x, {}), (0, s.jsxs)(n.VY, {
                        ref: t,
                        className: (0, i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background px-14 py-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]", a),
                        ...u,
                        children: [r, d && (0, s.jsx)(n.x8, {
                            className: (0, i.cn)("absolute right-6 top-6 cursor-pointer text-neutral-400 hover:text-neutral-600", o),
                            children: (0, s.jsx)(l.Z, {
                                className: "size-6"
                            })
                        })]
                    })]
                })
            });
            m.displayName = n.VY.displayName;
            let p = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, i.cn)("dialog-header flex flex-col space-y-1.5 border-b pb-4 text-center sm:text-left", t),
                    ...a
                })
            };
            p.displayName = "DialogHeader";
            let h = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.Dx, {
                    ref: t,
                    className: (0, i.cn)("dialog-title text-heading-bold-28 lg:uppercase", a),
                    ...r
                })
            });
            h.displayName = n.Dx.displayName;
            let f = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.dk, {
                    ref: t,
                    className: (0, i.cn)("text-subtitle-regular-14 text-neutral-500", a),
                    ...r
                })
            });
            f.displayName = n.dk.displayName
        },
        20178: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/vector-light-logo.af795d85.svg",
                height: 281,
                width: 228,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        99104: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/vector-logo.7d02eb8f.svg",
                height: 281,
                width: 228,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    },
    function(e) {
        e.O(0, [5585, 3412, 6427, 5974, 5793, 4084, 7781, 6805, 6400, 3762, 3271, 544, 753, 7684, 9293, 3881, 4254, 2636, 1744], function() {
            return e(e.s = 42915)
        }), _N_E = e.O()
    }
]);
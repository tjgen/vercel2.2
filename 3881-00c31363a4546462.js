"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3881], {
        80247: function(e, t, i) {
            i.d(t, {
                Gf: function() {
                    return d
                },
                Hj: function() {
                    return p
                },
                ZJ: function() {
                    return n
                },
                bo: function() {
                    return l
                },
                h4: function() {
                    return g
                },
                iE: function() {
                    return h
                }
            });
            var r = i(78154),
                o = i(82075),
                a = i(6984);
            let n = "tv_chart_container",
                s = ["study_templates", "determine_first_data_request_size_using_visible_range", "items_favoriting"],
                l = ["use_localstorage_for_settings", "popup_hints", "header_symbol_search", "symbol_search_hot_key", "header_compare"],
                c = [{
                    text: "1M",
                    resolution: o.zk.HOURS_4,
                    description: "1 Month"
                }, {
                    text: "7D",
                    resolution: o.zk.HOUR,
                    description: "7 Days"
                }, {
                    text: "3D",
                    resolution: o.zk.MINUTES_30,
                    description: "3 Days"
                }, {
                    text: "1h",
                    resolution: o.zk.MINUTE,
                    description: "1 Hour"
                }];

            function h() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        symbol: t,
                        datafeed: i,
                        interval: h,
                        theme: d,
                        userToken: u,
                        disabledFeatures: g,
                        isEmbed: p,
                        chartStyle: C,
                        chartTimezone: m
                    } = e,
                    S = m || (0, r.Ng)(),
                    y = !p && u ? {
                        charts_storage_url: o.yq,
                        charts_storage_api_version: o.oF,
                        client_id: o.iT,
                        load_last_chart: !0,
                        user_id: u,
                        auto_save_delay: 5
                    } : {};
                return {
                    debug: !1,
                    symbol: t,
                    datafeed: i,
                    interval: h,
                    timezone: S,
                    container: n,
                    fullscreen: !1,
                    autosize: !0,
                    theme: d,
                    library_path: "".concat((0, o.T2)()),
                    locale: "en",
                    custom_formatters: {
                        priceFormatterFactory: () => ({
                            format: e => (0, r.T4)(e)
                        })
                    },
                    overrides: (0, a.b)(C),
                    studies_overrides: {},
                    drawings_access: {
                        type: "black",
                        tools: [{
                            name: "Regression Trend"
                        }]
                    },
                    enabled_features: s,
                    disabled_features: g || (u ? l : [...l, "header_indicators"]),
                    time_frames: c,
                    favorites: {
                        intervals: ["1", "5", "15", "120", "240", "1D"]
                    },
                    ...y
                }
            }
            let d = {
                    [o.zk.MINUTE]: "1m",
                    [o.zk.MINUTES_3]: "3m",
                    [o.zk.MINUTES_5]: "5m",
                    [o.zk.MINUTES_15]: "15m",
                    [o.zk.MINUTES_30]: "30m",
                    [o.zk.HOUR]: "1H",
                    [o.zk.HOURS_2]: "2H",
                    [o.zk.HOURS_4]: "4H",
                    [o.zk.DAY]: "1D",
                    [o.zk.WEEK]: "1W",
                    [o.zk.MONTH]: "1M"
                },
                u = Array.from(new Set(Object.keys(d))).map(o.pj),
                g = {
                    timezone: "Etc/UTC",
                    minmov: 1,
                    session: "24x7",
                    has_intraday: !0,
                    supported_resolutions: u,
                    pricescale: 1e16,
                    visible_plots_set: "ohlcv",
                    has_weekly_and_monthly: !0,
                    volume_precision: 4,
                    data_status: "streaming"
                },
                p = {
                    exchanges: [],
                    symbols_types: [],
                    supported_resolutions: u,
                    supports_search: !1,
                    supports_group_request: !1,
                    supports_marks: !0,
                    supports_timescale_marks: !0
                }
        },
        82075: function(e, t, i) {
            i.d(t, {
                BR: function() {
                    return r
                },
                PM: function() {
                    return l
                },
                Rx: function() {
                    return a
                },
                T2: function() {
                    return c
                },
                iT: function() {
                    return d
                },
                oF: function() {
                    return u
                },
                pj: function() {
                    return n
                },
                wL: function() {
                    return o
                },
                yq: function() {
                    return h
                },
                zk: function() {
                    return s
                }
            });
            let r = 300,
                o = 3,
                a = 5e3;

            function n(e) {
                return e
            }
            let s = {
                    MINUTE: "1",
                    MINUTES_3: "3",
                    MINUTES_5: "5",
                    MINUTES_15: "15",
                    MINUTES_30: "30",
                    HOUR: "60",
                    HOURS_2: "120",
                    HOURS_4: "240",
                    DAY: "1D",
                    WEEK: "1W",
                    MONTH: "1M"
                },
                l = {
                    [s.MINUTE]: 6e4,
                    [s.MINUTES_5]: 3e5,
                    [s.MINUTES_15]: 9e5,
                    [s.MINUTES_30]: 18e5,
                    [s.HOUR]: 36e5,
                    [s.HOURS_2]: 72e5,
                    [s.HOURS_4]: 144e5,
                    [s.DAY]: 864e5,
                    [s.WEEK]: 6048e5,
                    [s.MONTH]: 24192e5
                },
                c = () => "/static/charting_library/".replace(/^http\:\/\//, "").replace(/\/+/g, "/"),
                h = "https://chart-storage.birdeye.so",
                d = "https://birdeye.so/",
                u = "1.1"
        },
        84161: function(e, t, i) {
            i.d(t, {
                default: function() {
                    return B
                }
            });
            var r = i(3404),
                o = i(11390),
                a = i(38330),
                n = i(67494),
                s = i(21206),
                l = i(12818),
                c = i(48397);
            let h = () => {
                var e, t, i, r;
                let {
                    chain: o
                } = (0, c.A)(), a = o.tags.includes("solana"), h = o.tags.includes("sui"), d = o.tags.includes("evm"), u = null === (t = (0, s.O)()) || void 0 === t ? void 0 : null === (e = t.publicKey) || void 0 === e ? void 0 : e.toBase58(), g = null === (i = (0, n.t)()) || void 0 === i ? void 0 : i.address, p = null === (r = (0, l.m)()) || void 0 === r ? void 0 : r.address;
                return {
                    address: a ? u : h ? g : d ? p : void 0
                }
            };
            var d = i(71602),
                u = i(71858),
                g = i(20544),
                p = i(78154),
                C = i(79293),
                m = i(47550),
                S = i(82075),
                y = i(21039),
                b = i(80247);
            let _ = e => S.PM["".concat(e)];

            function T(e) {
                return Array.isArray(e) && 0 !== e.length ? e[0].time : Number.NaN
            }
            let w = function(e, t, i, r, o) {
                let a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    n = new URLSearchParams({
                        addr: e,
                        cur: i,
                        res: b.Gf[t] || b.Gf[S.zk.MINUTES_15],
                        outliers: "".concat(o),
                        cb: "".concat(S.BR),
                        mc: "".concat(a)
                    });
                return r && n.set("to", "".concat(r)), "amm/ohlcv_v2?".concat(n.toString())
            };

            function v(e) {
                return new Promise(t => setTimeout(t, e))
            }
            async function f(e, t, i, r, o, a, n, s, l) {
                let c = w(t, r, o, e, a, n),
                    h = S.wL,
                    d = "";
                for (; h > 0;) {
                    try {
                        let {
                            data: e,
                            statusCode: t
                        } = await (0, u.iI)(c, i);
                        if (!e) return s([], !1);
                        if (200 === t) {
                            let t = [];
                            for (let i = 0; i < e.t.length; i++) {
                                let r = e.o[i],
                                    o = e.c[i],
                                    a = e.h[i],
                                    n = e.l[i],
                                    s = e.v[i],
                                    l = e.t[i];
                                t.push({
                                    time: 1e3 * l,
                                    low: n,
                                    high: a,
                                    open: r,
                                    close: o,
                                    volume: s
                                })
                            }
                            return s(t, e.t.length > 0)
                        }
                        d = "Failed to load charts."
                    } catch (e) {
                        d = e
                    }(h -= 1) > 0 && await v(S.Rx)
                }
                console.error("[chart.utils] errors:", d), l(d)
            }
            async function P(e, t, i, r, o, a, n) {
                let s = i.split("/")[0],
                    l = i.split("/")[1],
                    c = S.wL,
                    h = "";
                for (; c > 0;) {
                    try {
                        let {
                            data: i,
                            statusCode: n
                        } = await (0, u.XV)({
                            baseAddress: s,
                            quoteAddress: l,
                            chain: r,
                            interval: o,
                            startTime: e / 1e3,
                            endTime: t / 1e3
                        });
                        if (!i) return a([], !1);
                        if (200 === n) {
                            let e = [];
                            for (let t = 0; t < i.items.length; t++) {
                                let r = i.items[t];
                                e.push({
                                    time: 1e3 * r.unixTime,
                                    low: r.l,
                                    high: r.h,
                                    open: r.o,
                                    close: r.c,
                                    volume: r.v
                                })
                            }
                            return a(e, e.length > 0)
                        }
                        h = "Failed to load charts."
                    } catch (e) {
                        h = e
                    }(c -= 1) > 0 && await v(S.Rx)
                }
                console.error("[chart.utils] errors:", h), n(h)
            }

            function L(e) {
                for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
                setTimeout(e.bind(null, ...i), 0)
            }

            function A(e) {
                let t = {
                        type: "SUBSCRIBE_PRICE",
                        data: {
                            chartType: b.Gf[e.resolution],
                            address: e.address,
                            currency: e.currency,
                            mc: e.supply
                        }
                    },
                    i = () => {
                        var e, o;
                        (null === (e = window.ws) || void 0 === e ? void 0 : e.readyState) === 1 ? null === (o = window.ws) || void 0 === o || o.send(JSON.stringify(t)) : r < 15 && (setTimeout(i, 1e3), r++)
                    },
                    r = 0;
                i()
            }

            function I(e) {
                var t, i;
                let r = {
                    type: "UNSUBSCRIBE_PRICE",
                    data: {
                        chartType: b.Gf[e.resolution],
                        address: e.address,
                        currency: e.currency,
                        mc: e.supply
                    }
                };
                (null === (t = window.ws) || void 0 === t ? void 0 : t.readyState) === 1 && (null === (i = window.ws) || void 0 === i || i.send(JSON.stringify(r)))
            }
            var O = i(52786),
                R = i(46744),
                k = i(44996),
                D = i(6984);
            let E = () => {},
                M = (e, t, i) => "<span ".concat(t ? 'style="font-weight:bold; color: #365ae7"' : "", ">").concat(i || e, "</span>");
            class F extends o.PureComponent {
                componentDidMount() {
                    this.widget = null, this.chartReady = !1, this.waitingForSnapshot = !0, this.noMoreHistoricalCandles = !1, this.chartResetRequested = !1, this.resetCacheNeededCallbacks = {}, this.subscribeCacheParams = {}, this.onRealtimeCallback = E, this.onHistoryCallback = E, this.onErrorCallback = E, this.candles = null, this.getBarsRequest = {
                        startTime: null,
                        endTime: null,
                        firstDataRequest: !0
                    }, this.numberOfHistoricalCandlesRequests = 0, this.initializeChartIfNecessary(), k.T.on("ws:message:bar", this.updateLastCandleFromWS)
                }
                setScheduler(e, t) {
                    e < 9e5 && (e = 9e5), e > 39e5 && (e = 39e5), this.clearScheduler(), this.scheduler = setTimeout(() => {
                        this.resetChartData(), t && this.setScheduler(e)
                    }, e)
                }
                clearScheduler() {
                    this.scheduler && (clearTimeout(this.scheduler), this.scheduler = void 0)
                }
                componentWillUnmount() {
                    for (let e in this.clearScheduler(), this.onRealtimeCallback = E, this.subscribeCacheParams) this.subscribeCacheParams.hasOwnProperty(e) && I(this.subscribeCacheParams[e]);
                    k.T.off("ws:message:bar", this.updateLastCandleFromWS);
                    try {
                        this.widget.remove()
                    } catch (e) {} finally {
                        this.widget = null
                    }
                }
                initializeChartIfNecessary() {
                    let {
                        symbolOrPair: e,
                        interval: t,
                        userToken: i,
                        theme: r,
                        disabledFeatures: o,
                        isEmbed: a,
                        chartStyle: n,
                        chartTimezone: s
                    } = this.props;
                    if (null === this.widget) {
                        var l;
                        let c;
                        this.widget = (l = {
                            isEmbed: a,
                            datafeed: this,
                            symbol: e,
                            userToken: i,
                            theme: r,
                            interval: t,
                            disabledFeatures: o,
                            chartStyle: n,
                            chartTimezone: s
                        }, c = (0, b.iE)(l), new y.Zg(c)), this.widget.onChartReady(this.onChartReady)
                    }
                }
                resubscribeChartWs() {
                    if (console.log("resubscribeChartWs", this.props.wsConnected), this.props.wsConnected)
                        for (let e in this.subscribeCacheParams) this.subscribeCacheParams.hasOwnProperty(e) && A(this.subscribeCacheParams[e])
                }
                componentDidUpdate(e) {
                    var t, i, r, o, a, n, s, l;
                    this.initializeChartIfNecessary();
                    let {
                        viewMode: c,
                        symbolOrPair: h,
                        interval: d,
                        wsConnected: u,
                        chartType: g,
                        chartQuote: p,
                        candles: C,
                        includeOutliers: m,
                        chartStyle: S,
                        chartTimezone: y,
                        disabledFeatures: b,
                        theme: _,
                        chartOverrides: T,
                        cssCustomProperties: w,
                        address: v
                    } = this.props;
                    if (null !== e.symbolOrPair && e.symbolOrPair !== h ? this.changePair() : null !== e.interval && e.interval !== d || e.address, e.interval !== d) {
                        let e = this.getChart();
                        e && e.setResolution(d)
                    }
                    if (u && !e.wsConnected) this.resubscribeChartWs();
                    else if (e.disabledFeatures !== b || e.viewMode !== c) this.resetChart();
                    else if (g !== e.chartType || p !== e.chartQuote || m !== e.includeOutliers) this.resetChart();
                    else if (e.theme !== _) this.isChartReady() && (null === (t = this.widget) || void 0 === t || t.changeTheme(_).then(() => {
                        if (T) {
                            var e;
                            null === (e = this.widget) || void 0 === e || e.applyOverrides(T)
                        }
                    }));
                    else if (this.props.filteredAddress !== e.filteredAddress || this.props.isHideMarks !== e.isHideMarks) this.isChartReady() && ((this.props.isHideMarks || !this.props.filteredAddress) && (null === (r = this.getChart()) || void 0 === r || r.clearMarks()), null === (i = this.getChart()) || void 0 === i || i.refreshMarks());
                    else if (e.chartStyle !== S) null === (o = this.widget) || void 0 === o || o.chart().setChartType(S);
                    else if (e.chartTimezone !== y) null === (a = this.widget) || void 0 === a || a.chart().getTimezoneApi().setTimezone(y);
                    else if (e.cssCustomProperties != w) {
                        if (!w || !this.isChartReady()) return;
                        if (!Object.keys(w).length) {
                            this.resetChart();
                            return
                        }
                        for (let [e, t] of Object.entries(w))(null === (n = this.widget) || void 0 === n ? void 0 : n.getCSSCustomPropertyValue(e)) !== t && (null === (s = this.widget) || void 0 === s || s.setCSSCustomProperty(e, t))
                    } else if (e.chartOverrides !== T) {
                        if (!T || !this.isChartReady()) return;
                        if (!Object.keys(T).length) {
                            this.resetChart();
                            return
                        }
                        null === (l = this.widget) || void 0 === l || l.applyOverrides(T)
                    }
                }
                setLoginDialogOpen(e) {
                    this.setState({
                        isDialogOpened: e
                    })
                }
                render() {
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            id: b.ZJ,
                            className: "h-full w-full"
                        }), (0, r.jsx)(R.Z, {
                            open: this.state.isDialogOpened,
                            setOpen: this.setLoginDialogOpen
                        })]
                    })
                }
                renderIndicatorBtn() {
                    let e = this.widget.createButton();
                    e.style.cursor = "pointer", e.setAttribute("title", "Indicators"), e.addEventListener("click", () => {
                        this.setLoginDialogOpen(!0)
                    }), e.innerHTML = '\n      <div style="display: flex; align-items: center; cursor: pointer; border-radius: 4px; height: 34px; padding: 0 5px; margin: 0 -8px" onmouseover="this.style.backgroundColor=\'#2a2e39\';" onmouseout="this.style.backgroundColor=\'unset\';">\n        <span class="icon-GwQQdU8S"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"></path></svg></span>\n        <span>Indicators</span>\n      <div>\n    '
                }
                renderSwitchOutliers() {
                    let {
                        includeOutliers: e,
                        updateIncludeOutliers: t
                    } = this.props, i = (e, t) => {
                        e.setAttribute("next-value", "".concat(!t)), e.setAttribute("title", "Turn ".concat(t ? "Off" : "On", " Outliers")), e.innerHTML = '\n      <div style="display: flex; gap: 7px; align-items: center; cursor: pointer; border-radius: 4px; height: 34px; padding: 0 5px; margin: 0 -8px" onmouseover="this.style.backgroundColor=\'#2a2e39\';" onmouseout="this.style.backgroundColor=\'unset\';">\n        '.concat(t ? '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.692 3.012l-12 12.277.715.699 12-12.277-.715-.699zM9.05 15.627a7.042 7.042 0 0 1-3.144-.741l.742-.76c.72.311 1.52.5 2.402.5 2.297 0 4.047-1.29 5.25-2.645a12.168 12.168 0 0 0 1.687-2.466l.007-.015-.007-.015A12.166 12.166 0 0 0 14.3 7.019c-.11-.124-.225-.247-.344-.37l.699-.715c.137.14.268.28.392.42a13.16 13.16 0 0 1 1.83 2.678 8.117 8.117 0 0 1 .119.243l.006.015.003.005v.001l-.456.204.456.203v.002l-.003.005-.006.015-.025.052a11.762 11.762 0 0 1-.461.857 13.158 13.158 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982zm7.5-6.127l.456-.203.09.203-.09.203-.456-.203zm-7.5 3.07c-.27 0-.53-.037-.778-.105l.879-.899c.999-.052 1.833-.872 1.895-1.938l.902-.923c.066.253.102.52.102.795 0 1.695-1.344 3.07-3 3.07zM6.15 10.294l.902-.923c.063-1.066.896-1.886 1.895-1.938l.879-.9a2.94 2.94 0 0 0-.777-.103c-1.657 0-3 1.374-3 3.069 0 .275.035.541.101.795zM9.05 4.373c.88 0 1.68.19 2.4.5l.743-.759a7.043 7.043 0 0 0-3.143-.74c-2.703 0-4.703 1.521-6 2.98a13.159 13.159 0 0 0-1.83 2.678 7.886 7.886 0 0 0-.118.243l-.007.015-.002.005v.001l.456.204-.457-.203-.09.203.09.203.457-.203-.456.203v.002l.002.005.007.015a4.5 4.5 0 0 0 .119.243 13.152 13.152 0 0 0 1.83 2.677c.124.14.255.28.392.42l.7-.715c-.12-.122-.235-.245-.345-.369a12.156 12.156 0 0 1-1.686-2.466L2.105 9.5l.007-.015a12.158 12.158 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373z"></path></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.448 10.124a10.82 10.82 0 0 1-.336-.609L2.105 9.5l.007-.015a12.159 12.159 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373c2.297 0 4.047 1.292 5.25 2.646a12.166 12.166 0 0 1 1.687 2.466l.007.015-.007.015a12.163 12.163 0 0 1-1.686 2.466c-1.204 1.354-2.954 2.646-5.251 2.646-2.298 0-4.048-1.292-5.252-2.646a12.16 12.16 0 0 1-1.35-1.857zm14.558-.827l-.456.203.456.203v.002l-.003.005-.006.015-.025.052a11.813 11.813 0 0 1-.461.857 13.163 13.163 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982-2.703 0-4.703-1.522-6-2.982a13.162 13.162 0 0 1-1.83-2.677 7.883 7.883 0 0 1-.118-.243l-.007-.015-.002-.005v-.001l.456-.204-.456-.203v-.002l.002-.005.007-.015a4.66 4.66 0 0 1 .119-.243 13.158 13.158 0 0 1 1.83-2.677c1.296-1.46 3.296-2.982 5.999-2.982 2.702 0 4.702 1.522 5.998 2.981a13.158 13.158 0 0 1 1.83 2.678 8.097 8.097 0 0 1 .119.243l.006.015.003.005v.001zm-.456.203l.456-.203.09.203-.09.203-.456-.203zM1.092 9.297l.457.203-.457.203-.09-.203.09-.203zm9.958.203c0 1.164-.917 2.07-2 2.07-1.084 0-2-.906-2-2.07 0-1.164.916-2.07 2-2.07 1.083 0 2 .906 2 2.07zm1 0c0 1.695-1.344 3.07-3 3.07-1.657 0-3-1.375-3-3.07 0-1.695 1.343-3.07 3-3.07 1.656 0 3 1.375 3 3.07z"></path></svg>', "<span>Outliers</span>\n      <div>\n    ")
                    }, r = this.widget.createButton();
                    r.style.cursor = "pointer", i(r, e), r.addEventListener("click", function(e) {
                        e.preventDefault(), e.stopPropagation();
                        let o = e.currentTarget.getAttribute("next-value");
                        t("true" === o), i(r, "true" === o)
                    })
                }
                renderSwitchChartQuote() {
                    let {
                        chartQuote: e,
                        updateChartQuote: t,
                        chainSymbol: i
                    } = this.props, r = (e, t) => {
                        let r = "fiat" === t ? "USD" : i.toUpperCase();
                        e.setAttribute("title", "Switch to price in ".concat(r)), e.setAttribute("next-type", "fiat" === t ? "crypto" : "fiat"), e.innerHTML = "\n      ".concat(M("fiat", "fiat" === t, "USD"), " / ").concat(M("crypto", "crypto" === t, i.toUpperCase()), "\n    ")
                    }, o = this.widget.createButton();
                    o.style.cursor = "pointer", r(o, e), o.addEventListener("click", function(e) {
                        e.preventDefault(), e.stopPropagation();
                        let i = e.currentTarget.getAttribute("next-type");
                        i && (t(i), r(o, i))
                    })
                }
                renderSwitchChartType() {
                    let {
                        chartType: e,
                        updateChartType: t
                    } = this.props, i = (e, t) => {
                        e.setAttribute("title", "Switch to ".concat("price" === t ? "market cap" : "price", " chart")), e.setAttribute("next-type", "price" === t ? "mcap" : "price"), e.innerHTML = "\n        ".concat(M("price", "price" === t, "Price"), " / ").concat(M("mcap", "mcap" === t, "MCap"), "\n      ")
                    }, r = this.widget.createButton();
                    r.style.cursor = "pointer", i(r, e), r.addEventListener("click", function(e) {
                        e.preventDefault(), e.stopPropagation();
                        let o = e.currentTarget.getAttribute("next-type");
                        o && (t(o), i(r, o))
                    })
                }
                renderSwitchBaseQuote() {
                    let {
                        switchBaseQuote: e
                    } = this.props;
                    this.switchBaseQuoteBtn = this.widget.createButton(), this.switchBaseQuoteBtn.style.cursor = "pointer", this.switchBaseQuoteBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75122 8.10859C4.33701 8.10926 4.00068 7.77403 4 7.35981C3.99933 6.9456 4.33456 6.60927 4.74878 6.60859L16.642 6.58919L14.2694 4.28843C13.972 4.00007 13.9647 3.52526 14.2531 3.22789C14.5414 2.93053 15.0162 2.92322 15.3136 3.21158L19.0118 6.79775C19.0739 6.85793 19.1244 6.92773 19.162 7.00372C19.1844 7.0489 19.2024 7.09666 19.2153 7.14643C19.2314 7.20785 19.2397 7.27158 19.2397 7.33618C19.2397 7.40036 19.2315 7.46367 19.2156 7.52472C19.2031 7.573 19.186 7.6194 19.1646 7.6634C19.1268 7.74142 19.0753 7.81305 19.0118 7.8746L15.3136 11.4608C15.0162 11.7491 14.5414 11.7418 14.2531 11.4445C13.9647 11.1471 13.972 10.6723 14.2694 10.3839L16.6358 8.0892L4.75122 8.10859Z" fill="currentColor"/><path d="M19.9343 16.6365C19.9336 16.2223 19.5973 15.887 19.183 15.8877L7.29845 15.9071L9.66489 13.6124C9.96226 13.324 9.96956 12.8492 9.68121 12.5518C9.39286 12.2545 8.91804 12.2472 8.62068 12.5355L4.92243 16.1217C4.85895 16.1833 4.80752 16.2549 4.76969 16.3329C4.74832 16.3769 4.73113 16.4233 4.71862 16.4716C4.70277 16.5326 4.69454 16.596 4.69454 16.6601C4.69454 16.7247 4.70287 16.7885 4.71894 16.8499C4.73191 16.8997 4.74987 16.9474 4.77225 16.9926C4.80983 17.0686 4.86037 17.1384 4.92243 17.1986L8.62068 20.7847C8.91804 21.0731 9.39286 21.0658 9.68121 20.7684C9.96956 20.4711 9.96226 19.9962 9.66489 19.7079L7.29223 17.4071L19.1855 17.3877C19.5997 17.387 19.9349 17.0507 19.9343 16.6365Z" fill="currentColor"/></svg>', this.updateSwitchBaseQuoteBtnAttribute(), this.switchBaseQuoteBtn.addEventListener("click", function(t) {
                        t.preventDefault(), t.stopPropagation();
                        let i = JSON.parse(t.currentTarget.getAttribute("next-type"));
                        i && (null == e || e(i))
                    })
                }
                renderSwitchs() {
                    if (this.isChartReady()) {
                        let {
                            showBtnOutlier: e,
                            showSwitchChartTypeBtn: t,
                            showSwitchChartQuoteBtn: i,
                            userToken: r
                        } = this.props;
                        t && this.renderSwitchChartType(), i && this.renderSwitchChartQuote(), e && this.renderSwitchOutliers(), r || this.props.isEmbed || this.renderIndicatorBtn(), "base/quote" === this.props.viewMode && this.renderSwitchBaseQuote()
                    }
                }
                onChartReady() {
                    let {
                        userToken: e,
                        cssCustomProperties: t,
                        chartStyle: i,
                        chartOverrides: r
                    } = this.props;
                    if (this.chartReady = !0, this.widget.applyOverrides((0, D.b)(i, r)), t)
                        for (let [e, i] of Object.entries(t)) this.widget.setCSSCustomProperty(e, i);
                    this.widget.headerReady().then(this.renderSwitchs).catch(e => console.log("[er]", e)), !this.props.isEmbed && (this.saveChartSettings({
                        persistImmediately: !0
                    }), this.widget.subscribe("onAutoSaveNeeded", () => {
                        this.widget.saveChartToServer()
                    }), this.widget.subscribe("chart_load_requested", () => {
                        this.widget.saveChartToServer()
                    }), e && this.initDefaultLayout())
                }
                async initDefaultLayout() {
                    let {
                        userToken: e,
                        address: t,
                        interval: i = S.zk.MINUTES_15
                    } = this.props;
                    if (e) try {
                        var r, o;
                        let a = await O.Z.get("".concat(S.yq, "/").concat(S.oF, "/charts/default?client=").concat(S.iT, "&user=").concat(e));
                        (null === (o = a.data) || void 0 === o ? void 0 : null === (r = o.data) || void 0 === r ? void 0 : r.exist) || this.widget.save(async r => {
                            let o = p.qt.getItem("chart_layout_" + t);
                            console.log("Save tradingview default layout is start", null == o ? void 0 : o.state);
                            let a = (null == o ? void 0 : o.state) || r;
                            try {
                                await O.Z.post("".concat(S.yq, "/").concat(S.oF, "/charts?client=").concat(S.iT, "&user=").concat(e, "&default=true"), {
                                    name: "Layout",
                                    content: JSON.stringify({
                                        symbol: t,
                                        symbol_type: "",
                                        resolution: i,
                                        name: "Layout",
                                        content: JSON.stringify(a),
                                        exchange: S.iT
                                    }),
                                    symbol: "Layout",
                                    resolution: i
                                }), console.log("Save tradingview default layout is success")
                            } catch (e) {
                                console.error(e)
                            }
                        })
                    } catch (e) {
                        console.error(e)
                    }
                }
                shouldResetChart() {
                    return this.numberOfHistoricalCandlesRequests > 1
                }
                updateLastChartCandle(e) {
                    let {
                        time: t
                    } = e, i = this.candles || [];
                    if (!i || 0 === i.length) {
                        i.push(e);
                        return
                    }
                    let r = i[i.length - 1].time;
                    if (!(t < r)) {
                        if (t > r) {
                            let {
                                interval: r
                            } = this.props, o = _(r);
                            e.time = Math.floor(t / o) * o, i.push(e)
                        } else i[i.length - 1] = e;
                        k.T.emit("tradingview:last:bar", { ...e,
                            chartType: this.props.chartType,
                            chartQuote: this.props.chartQuote,
                            ccy: "fiat" === this.props.chartQuote ? "USD" : this.props.chainSymbol.toUpperCase()
                        }), this.onRealtimeCallback(e)
                    }
                }
                updateLastCandleFromWS(e) {
                    let t;
                    let {
                        time: i
                    } = e, {
                        candles: r
                    } = this;
                    if (!r || !r.length) return;
                    let o = r[r.length - 1],
                        a = o.time;
                    if (i < a) return;
                    let {
                        interval: n
                    } = this.props, s = _(n), l = Math.floor(i / s) * s;
                    t = l > a ? { ...e
                    } : { ...o,
                        ...e,
                        time: l
                    }, this.updateLastChartCandle(t)
                }
                changePair() {
                    var e;
                    let {
                        symbolOrPair: t,
                        viewMode: i
                    } = this.props;
                    this.resetChartData(), null === (e = this.getChart()) || void 0 === e || e.setSymbol(t), "base/quote" === i && this.updateSwitchBaseQuoteBtnAttribute()
                }
                getChart() {
                    return this.isChartReady() ? this.widget.chart() : null
                }
                waitForSnapshot() {
                    this.candles = null, this.waitingForSnapshot = !0, this.noMoreHistoricalCandles = !1, this.numberOfHistoricalCandlesRequests = 0, this.forceUpdate()
                }
                onChartLoadRequested() {
                    console.log(">onChartLoadRequested")
                }
                saveChartSettings() {
                    let {
                        data: e,
                        persistImmediately: t = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        updateChartSettings: i,
                        userToken: r,
                        interval: o,
                        address: a
                    } = this.props;
                    if (r) {
                        if (void 0 !== e) i(e, a, o, void 0);
                        else if (this.isChartReady() && this.widget) {
                            let e = this.widget.activeChart().createStudyTemplate({
                                saveInterval: !0
                            });
                            this.widget.save(t => {
                                i(t, a, o, e)
                            })
                        }
                    }
                }
                resubscribe() {
                    this.chartResetRequested = !0, this.earliestTimeFlag = void 0
                }
                isChartReady() {
                    return null !== this.widget && this.chartReady
                }
                resetChart() {
                    this.earliestTimeFlag = void 0, this.candles = null, this.chartResetRequested = !1, this.chartReady = !1;
                    try {
                        this.widget.remove()
                    } catch (e) {}
                    this.widget = null, this.resetCacheNeededCallbacks = {}, this.subscribeCacheParams = {}, this.forceUpdate()
                }
                resetCache() {
                    for (let e in this.resetCacheNeededCallbacks) this.resetCacheNeededCallbacks.hasOwnProperty(e) && this.resetCacheNeededCallbacks[e]()
                }
                resetChartData() {
                    this.chartReady && this.widget && this.widget.activeChart() && (this.earliestTimeFlag = void 0, this.candles = [], this.resetCache(), this.widget.activeChart().resetData())
                }
                fulfillGetBarsRequest(e) {
                    let t, {
                            onHistoryCallback: i
                        } = e,
                        {
                            startTime: r,
                            endTime: o
                        } = this.getBarsRequest,
                        a = (this.candles || []).filter(e => e.time < o).sort((e, t) => e.time - t.time);
                    T(this.candles || []), this.noMoreHistoricalCandles && (t = {
                        noData: !0
                    }), i(a, t)
                }
                requestCandlesFetch(e, t) {
                    let {
                        onHistoryCallback: i,
                        onErrorCallback: r
                    } = t, {
                        startTime: o,
                        endTime: a
                    } = this.getBarsRequest, {
                        chartType: n,
                        chartQuote: s,
                        currency: l,
                        address: c,
                        chain: h,
                        includeOutliers: d,
                        viewMode: u
                    } = this.props, g = (e, t) => {
                        this.onFetchCandlesSuccess(e, t, i)
                    };
                    "pair" === u ? f(T(this.candles) / 1e3, c, h, e, "pair" === l ? "pair" : "fiat" === s ? "usd" : "native", d, "mcap" === n, g, r) : "base/quote" === u && P(o, a, c, h, e, g, r)
                }
                onFetchCandlesSuccess(e, t, i) {
                    var r;
                    let {
                        firstDataRequest: o
                    } = this.getBarsRequest;
                    this.noMoreHistoricalCandles = !t;
                    let a = this.candles || [],
                        n = [...e];
                    a.length > 0 && n.length > 0 && n[n.length - 1].time === (null === (r = a[0]) || void 0 === r ? void 0 : r.time) && (n.pop(), 0 === n.length && (this.noMoreHistoricalCandles = !0)), this.candles = [...n, ...a], this.numberOfHistoricalCandlesRequests += 1, this.fulfillGetBarsRequest({
                        onHistoryCallback: i
                    }), o && this.candles[this.candles.length - 1] && k.T.emit("tradingview:last:bar", { ...this.candles[this.candles.length - 1],
                        chartType: this.props.chartType,
                        chartQuote: this.props.chartQuote,
                        ccy: "fiat" === this.props.chartQuote ? "USD" : this.props.chainSymbol.toUpperCase()
                    })
                }
                changeInterval(e) {
                    let {
                        updateInterval: t
                    } = this.props;
                    t(e);
                    let i = this.shouldResetChart();
                    this.earliestTimeFlag = void 0, this.saveChartSettings(), i && this.resubscribe()
                }
                subscribeBars(e, t, i, r, o) {
                    this.onRealtimeCallback = i, this.resetCacheNeededCallbacks[r] = o;
                    let a = isNaN(+t) ? 39e5 : 18e4 * +t;
                    this.setScheduler(a), console.info("[subscribeBars]: Method call with subscribe", r);
                    let n = "pair" === this.props.currency ? "pair" : "fiat" === this.props.chartQuote ? "usd" : "native",
                        s = {
                            address: this.props.address,
                            currency: n,
                            supply: "mcap" === this.props.chartType,
                            resolution: t
                        };
                    this.subscribeCacheParams[r] = s, A(s)
                }
                unsubscribeBars(e) {
                    delete this.resetCacheNeededCallbacks[e], this.clearScheduler(), console.info("[unsubscribeBars]: Method call with unsubscribe", e, this.subscribeCacheParams[e], this.props.currency), this.subscribeCacheParams[e] && (I(this.subscribeCacheParams[e]), delete this.subscribeCacheParams[e])
                }
                onReady(e) {
                    L(e, b.Hj)
                }
                resolveSymbol(e, t) {
                    console.log(">resolveSymbol", e), L(() => {
                        let {
                            symbolOrPair: e,
                            currency: i,
                            address: r,
                            chartQuote: o,
                            chartType: a,
                            chainSymbol: n
                        } = this.props;
                        try {
                            let s;
                            t((s = e, "usd" === i && (s = "".concat(e, "/").concat("fiat" === o ? "USD" : n), "mcap" === a && (s += " (Market cap)")), { ...b.h4,
                                type: "crypto",
                                name: e,
                                currency_code: e,
                                ticker: r,
                                description: s,
                                exchange: "birdeye.so"
                            }))
                        } catch (e) {}
                    })
                }
                getBars(e, t, i, r, o) {
                    let {
                        firstDataRequest: a,
                        from: n,
                        to: s
                    } = i;
                    this.onHistoryCallback = r, this.onErrorCallback = o;
                    let l = T(this.candles),
                        c = 1e3 * n,
                        h = 1e3 * s;
                    if (this.getBarsRequest = {
                            startTime: c,
                            endTime: l || h,
                            firstDataRequest: a
                        }, a) {
                        this.earliestTimeFlag = void 0;
                        let {
                            interval: e
                        } = this.props;
                        e !== t && (this.getBarsRequest.endTime = h, this.changeInterval(t)), this.waitForSnapshot(), this.requestCandlesFetch(t, {
                            onHistoryCallback: r,
                            onErrorCallback: o
                        })
                    } else c < l && !this.noMoreHistoricalCandles && (!this.earliestTimeFlag || this.earliestTimeFlag && this.earliestTimeFlag !== l) ? (this.earliestTimeFlag = l, this.requestCandlesFetch(t, {
                        onHistoryCallback: r,
                        onErrorCallback: o
                    })) : this.fulfillGetBarsRequest({
                        onHistoryCallback: r
                    })
                }
                async getMarks(e, t, i, r) {
                    let {
                        isHideMarks: o,
                        filteredAddress: a,
                        isEmbed: n
                    } = this.props;
                    if (console.info("[getMarks]: Method call", e), !a || o || n) return;
                    let {
                        address: s,
                        symbolOrPair: l,
                        chain: c
                    } = this.props, h = l.split("/")[0] || "Unknown";
                    try {
                        var d, g, C, m;
                        let e = await (0, u.MY)(s, a, t, i, c);
                        if (a.toLowerCase() !== (null == e ? void 0 : null === (g = e.data) || void 0 === g ? void 0 : null === (d = g.walletAddress) || void 0 === d ? void 0 : d.toLowerCase())) {
                            L(() => {
                                r([])
                            });
                            return
                        }
                        let o = "#00c38c",
                            n = "#f94d5c";
                        if ((null == e ? void 0 : null === (m = e.data) || void 0 === m ? void 0 : null === (C = m.items) || void 0 === C ? void 0 : C.length) > 0) {
                            let a = e.data.items.filter(e => {
                                let r = e.blockTime,
                                    o = r >= t && r <= i;
                                return 0 !== e.changeAmount && o
                            }).map((e, t) => {
                                let i = "\n                  ".concat((0, p.dm)(Math.abs((0, p.aO)(e.changeAmount, e.decimals))), " ").concat(h, " ($").concat((0, p.T4)(e.price), ")\n                  ");
                                return {
                                    id: t,
                                    time: e.blockTime,
                                    borderWidth: 0,
                                    minSize: 15,
                                    labelFontColor: "#fff",
                                    color: e.changeAmount > 0 ? {
                                        background: o,
                                        border: o
                                    } : {
                                        background: n,
                                        border: n
                                    },
                                    label: e.changeAmount > 0 ? "B" : "S",
                                    text: e.changeAmount > 0 ? "+".concat(i) : "-".concat(i)
                                }
                            });
                            L(() => {
                                r(a)
                            })
                        }
                    } catch (e) {
                        console.info(e)
                    }
                }
                searchSymbols(e, t, i) {
                    console.warn("searchSymbols ===>", e, t, i)
                }
                constructor(e) {
                    super(e), this.widget = null, this.chartReady = !1, this.waitingForSnapshot = !1, this.noMoreHistoricalCandles = !1, this.chartResetRequested = !1, this.resetCacheNeededCallbacks = {}, this.subscribeCacheParams = {}, this.onRealtimeCallback = E, this.onHistoryCallback = E, this.onErrorCallback = E, this.candles = null, this.getBarsRequest = {
                        startTime: null,
                        endTime: null,
                        firstDataRequest: !0
                    }, this.numberOfHistoricalCandlesRequests = 0, this.earliestTimeFlag = void 0, this.switchBaseQuoteBtn = null, this.state = {
                        isDialogOpened: !1
                    }, this.updateSwitchBaseQuoteBtnAttribute = () => {
                        if (!this.switchBaseQuoteBtn) return;
                        let {
                            address: e,
                            chain: t,
                            symbolOrPair: i
                        } = this.props;
                        this.switchBaseQuoteBtn.setAttribute("title", "Switch to ".concat(i.split("/").reverse().join("/"))), this.switchBaseQuoteBtn.setAttribute("next-type", JSON.stringify({
                            chain: t,
                            address: e.split("/").reverse().join("/"),
                            symbolOrPair: i.split("/").reverse().join("/")
                        }))
                    }, this.onChartReady = this.onChartReady.bind(this), this.resolveSymbol = this.resolveSymbol.bind(this), this.saveChartSettings = this.saveChartSettings.bind(this), this.onFetchCandlesSuccess = this.onFetchCandlesSuccess.bind(this), this.changeInterval = this.changeInterval.bind(this), this.updateLastCandleFromWS = this.updateLastCandleFromWS.bind(this), this.renderSwitchs = this.renderSwitchs.bind(this), this.setLoginDialogOpen = this.setLoginDialogOpen.bind(this), this.widget = null, this.chartReady = !1, this.resetCacheNeededCallbacks = {}, this.subscribeCacheParams = {}, this.scheduler = void 0
                }
            }

            function W(e, t, i, r) {}
            F.defaultProps = {
                candles: [],
                interval: S.zk.MINUTES_15
            };
            var B = e => {
                var t, i, n;
                let {
                    tokenAddress: s,
                    pairAddress: l,
                    baseAddress: c,
                    quoteAddress: y,
                    isEmbed: b,
                    viewMode: _ = "pair",
                    theme: T,
                    chartInterval: w = S.zk.MINUTES_15,
                    chartStyle: v,
                    chartTimezone: f,
                    cssCustomProperties: P,
                    chartOverrides: L,
                    disabledFeatures: A
                } = e, [I, O] = (0, o.useState)(!0), [R, k] = (0, o.useState)(!1), [D, E] = (0, o.useState)("price"), [M, B] = (0, o.useState)("fiat"), {
                    chain: N
                } = (0, g.Ab)(), {
                    userInfo: V
                } = (0, C.m)(), [U, x] = (0, o.useState)(!1), {
                    filters: H,
                    showTrades: z
                } = (0, m.w)(e => e), {
                    address: j
                } = h(), q = (null === (t = H.owner) || void 0 === t ? void 0 : t.value) || j || "", {
                    theme: G
                } = (0, a.useTheme)(), [Q, J] = (0, o.useState)(w);
                (0, o.useEffect)(() => J(w), [w]), (0, o.useEffect)(() => {
                    let e = () => k(!0),
                        t = () => k(!1);
                    return p.TB.on("ws:open", e), p.TB.on("ws:close", t), () => {
                        p.TB.off("ws:open", e), p.TB.off("ws:close", t)
                    }
                }, []);
                let Z = "polygon" === N.network ? { ...N,
                        wrapNativeCurrency: {
                            name: "Wrapped Ether",
                            symbol: "WETH",
                            decimals: 18,
                            address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
                            logoURI: "https://assets.coingecko.com/coins/images/2518/small/weth.png?1628852295"
                        }
                    } : N,
                    K = decodeURIComponent((l ? l || (null == Z ? void 0 : null === (i = Z.wrapNativeCurrency) || void 0 === i ? void 0 : i.address) : s) || ""),
                    Y = l ? "pair" : "usd",
                    $ = "usd" === Y && "pair" === _,
                    X = $ && !!s && (null == Z ? void 0 : null === (n = Z.wrapNativeCurrency) || void 0 === n ? void 0 : n.address.toLowerCase()) !== s.toLowerCase(),
                    ee = Z.network,
                    [et, ei] = (0, o.useState)({
                        chain: void 0,
                        address: "",
                        currency: void 0,
                        symbolOrPair: "UNKNOWN"
                    });
                (0, o.useEffect)(() => {
                    K && Y && (async () => {
                        if ("pair" === _) {
                            let e;
                            if (O(!0), (e = "pair" === Y ? await (0, u.ss)(K, ee) : await (0, u.dU)(K, ee)).data) {
                                let t = e.data;
                                ei({
                                    address: K,
                                    chain: ee,
                                    currency: Y,
                                    symbolOrPair: ("pair" === Y ? t.name : t.symbol) || "UNKNOWN"
                                })
                            }
                        } else if ("base/quote" === _ && c && y) {
                            O(!0);
                            let [e, t] = await Promise.all([(0, u.dU)(c, ee), (0, u.dU)(y, ee)]);
                            e.data && t.data && ei({
                                address: "".concat(c, "/").concat(y),
                                chain: ee,
                                symbolOrPair: "".concat(e.data.symbol, "/").concat(t.data.symbol)
                            })
                        }
                        O(!1)
                    })()
                }, [ee, K, Y, c, y, _, ei, O]), (0, o.useEffect)(() => {
                    if (et.address && !b) try {
                        let e = [],
                            t = p.qt.getItem("saved_chart_layouts") || [];
                        t.length > 0 && (t.forEach(t => {
                            let i = p.qt.getItem("chart_layout_" + t);
                            i && Date.now() - i.createdAt > 2592e6 ? localStorage.removeItem("chart_layout_" + t) : e.push(t)
                        }), p.qt.setItem("saved_chart_layouts", e)), p.qt.getItem("chart_layout_" + et.address)
                    } catch (e) {
                        console.error(e)
                    }
                }, [et.address]);
                let er = !I && !!et.chain && !!et.address;
                return (0, r.jsx)(d.Z, {
                    onlyRenderChildrenOnLoaded: !0,
                    spinning: !er,
                    className: "h-full w-full",
                    iconClassName: "size-[70px] text-[#365ae7]",
                    children: (0, r.jsx)(F, {
                        isEmbed: b,
                        viewMode: _,
                        symbolOrPair: et.symbolOrPair,
                        address: et.address,
                        chain: et.chain,
                        chainSymbol: (null == Z ? void 0 : Z.wrapNativeCurrency.symbol) || "UNKNOWN",
                        currency: et.currency,
                        showBtnOutlier: "pair" === _,
                        showSwitchChartTypeBtn: $,
                        showSwitchChartQuoteBtn: X,
                        includeOutliers: U,
                        updateIncludeOutliers: e => {
                            p.qt.setItem("includeOutliers", e), x(!!e)
                        },
                        theme: T || G,
                        updateInterval: J,
                        updateChartSettings: W,
                        interval: Q,
                        userToken: (null == V ? void 0 : V.token) || "",
                        wsConnected: R,
                        chartType: D,
                        chartQuote: M,
                        updateChartType: E,
                        updateChartQuote: B,
                        isHideMarks: !z,
                        filteredAddress: q,
                        chartStyle: v,
                        chartTimezone: f,
                        cssCustomProperties: P,
                        chartOverrides: L,
                        disabledFeatures: A,
                        switchBaseQuote: e => {
                            ei(e)
                        }
                    })
                })
            }
        },
        6984: function(e, t, i) {
            i.d(t, {
                b: function() {
                    return o
                }
            });
            var r = i(21039);

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.rB.Candle,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return {
                    "mainSeriesProperties.style": e,
                    "mainSeriesProperties.visible": !0,
                    "mainSeriesProperties.showPriceLine": !0,
                    "mainSeriesProperties.candleStyle.upColor": "#00c38c",
                    "mainSeriesProperties.candleStyle.downColor": "#f94d5c",
                    "mainSeriesProperties.candleStyle.drawWick": !0,
                    "mainSeriesProperties.candleStyle.wickUpColor": "#00c38c",
                    "mainSeriesProperties.candleStyle.wickDownColor": "#f94d5c",
                    "mainSeriesProperties.candleStyle.drawBorder": !0,
                    "mainSeriesProperties.candleStyle.borderUpColor": "#00c38c",
                    "mainSeriesProperties.candleStyle.borderDownColor": "#f94d5c",
                    "paneProperties.legendProperties.showSeriesOHLC": !0,
                    "paneProperties.legendProperties.showLegend": !1,
                    "paneProperties.legendProperties.showBarChange": !0,
                    "paneProperties.legendProperties.showSeriesTitle": !0,
                    "scalesProperties.fontSize": 12,
                    "timeScale.rightOffset": 5,
                    volumePaneSize: "medium",
                    ...t
                }
            }
        },
        71602: function(e, t, i) {
            var r = i(3404);
            i(11390);
            var o = i(71618),
                a = i(78154);
            t.Z = e => {
                let {
                    spinning: t = !1,
                    className: i,
                    children: n,
                    iconClassName: s,
                    overlayClassName: l,
                    onlyRenderChildrenOnLoaded: c = !1
                } = e;
                return (0, r.jsxs)("div", {
                    className: (0, a.cn)("relative", i),
                    children: [t && (0, r.jsx)("div", {
                        className: (0, a.cn)("absolute inset-0 z-50 flex items-center justify-center bg-background/50", l),
                        children: (0, r.jsx)(o.Z, {
                            className: (0, a.cn)("animate-spin", s)
                        })
                    }), c && t ? null : n]
                })
            }
        },
        21142: function(e, t, i) {
            i.d(t, {
                D: function() {
                    return u
                },
                WebSocketProvider: function() {
                    return g
                }
            });
            var r = i(3404),
                o = i(11390),
                a = i(36810),
                n = i(16176),
                s = i(94850);
            i(32156);
            let l = (e, t) => {
                let i;
                if (!window.subscriptionItem || "PRICE_DATA" !== e.type || !e.data) return;
                let r = 1e3 * e.data.unixTime,
                    {
                        latestBar: o,
                        resolution: a
                    } = window.subscriptionItem,
                    n = function(e) {
                        let t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "1D";
                        if (!e) return;
                        let r = i.slice(-1);
                        switch (!0) {
                            case "W" === r:
                                t = 6048e5 + e.time;
                                break;
                            case "D" === r:
                                t = 864e5 + e.time;
                                break;
                            default:
                                t = 6e4 * +i + e.time
                        }
                        return t
                    }(o, a) || r;
                if (!((null == o ? void 0 : o.time) > r) && (r >= n ? console.log("[socket] Generate new bar", i = {
                        time: n,
                        open: e.data.o,
                        high: e.data.h,
                        low: e.data.l,
                        close: e.data.c,
                        volume: e.data.v
                    }) : (i = { ...o,
                        high: Math.max(o.high, e.data.h),
                        low: Math.min(o.low, e.data.l),
                        close: e.data.c,
                        volume: e.data.v
                    }, console.log("[socket] Update the latest bar by price")), (null == t ? void 0 : t.current) && (t.current = i), window.subscriptionItem)) {
                    var s, l;
                    null === (s = (l = window.subscriptionItem).callback) || void 0 === s || s.call(l, i), window.subscriptionItem.latestBar = i
                }
            };
            var c = i(71858),
                h = i(48397),
                d = i(44996);
            let u = (0, n.kr)({
                    ws: null,
                    txsRef: null,
                    ohlcvRef: null
                }),
                g = e => {
                    var t;
                    let {
                        children: i
                    } = e, [n, g] = (0, o.useState)(null), [p, C] = (0, o.useState)(!1), m = (0, o.useRef)([]), S = (0, o.useRef)(null), {
                        chain: y
                    } = (0, h.A)(), {
                        slug: b
                    } = (0, a.useParams)(), _ = decodeURIComponent((null == b ? void 0 : b[0]) || (null == y ? void 0 : null === (t = y.wrapNativeCurrency) || void 0 === t ? void 0 : t.address) || "");
                    return (0, o.useEffect)(() => {
                        if (p || !window) return;
                        let e = (0, c.d9)(y.network),
                            t = new s.w3cwebsocket("".concat("wss://multichain-socket.birdeye.so/").concat(e, "/socket"), "echo-protocol");
                        return t.onopen = () => {
                            console.log("[Ws Open]:=============================="), window.ws = t, d.T.emit("ws:open"), g(t)
                        }, t.onclose = e => {
                            console.log("[Ws Close]:=============================="), console.log("[Ws Close] - [Event]:", e), d.T.emit("ws:close"), p || (C(!0), setTimeout(() => {
                                C(!1)
                            }, 5e3))
                        }, () => {
                            (t.readyState === s.w3cwebsocket.CONNECTING || t.readyState === s.w3cwebsocket.OPEN) && t.close(), g(null)
                        }
                    }, [p, y.network]), (0, o.useEffect)(() => {
                        if (n && _) return n.onmessage = e => {
                            try {
                                let t = JSON.parse(e.data);
                                switch (null == t ? void 0 : t.type) {
                                    case "PRICE_DATA":
                                        d.T.emit("ws:message:bar", {
                                            open: t.data.o,
                                            high: t.data.h,
                                            low: t.data.l,
                                            close: t.data.c,
                                            volume: t.data.v,
                                            time: 1e3 * t.data.unixTime
                                        }), l(t, S);
                                        break;
                                    case "TXS_DATA":
                                        m.current.unshift(t.data), m.current.length > 10 && m.current.pop();
                                        break;
                                    default:
                                        console.log("[Ws Message]:==============================", e)
                                }
                            } catch (e) {
                                console.log("[Ws Error]:==============================", e)
                            }
                        }, () => {
                            n.onmessage = null
                        }
                    }, [n, _]), (0, r.jsx)(u.Provider, {
                        value: {
                            ws: n,
                            txsRef: m,
                            ohlcvRef: S
                        },
                        children: i
                    })
                }
        },
        47550: function(e, t, i) {
            i.d(t, {
                w: function() {
                    return n
                }
            });
            var r = i(39778);
            let o = e => ({
                    quickFilters: null,
                    setQuickFilters: t => e(() => ({
                        quickFilters: t
                    }))
                }),
                a = (0, i(58560).tJ)(e => ({
                    filters: {},
                    setFilters: t => e(() => ({
                        filters: t
                    })),
                    showTrades: !0,
                    toggleTrades: () => e(e => ({
                        showTrades: !e.showTrades
                    })),
                    layout: {
                        left: !0,
                        right: !0
                    },
                    setLayout: t => e(e => ({
                        layout: { ...e.layout,
                            ...t
                        }
                    }))
                }), {
                    name: "layout-storage",
                    partialize: e => ({
                        layout: e.layout
                    })
                }),
                n = (0, r.U)()(function() {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    return { ...a(...t),
                        ...o(...t)
                    }
                })
        },
        21039: function(e, t, i) {
            var r, o, a, n, s, l, c, h, d, u, g, p, C, m, S, y, b, _, T, w, v, f, P, L, A, I, O, R, k, D, E, M, F, W, B, N, V, U, x, H, z, j, q, G, Q, J, Z, K, Y, $, X, ee, et, ei, er, eo, ea, en, es, el, ec, eh, ed, eu, eg, ep, eC, em, eS, ey, eb, e_, eT, ew, ev, ef, eP, eL, eA, eI, eO, eR, ek, eD, eE, eM, eF, eW, eB, eN, eV, eU, ex, eH, ez, ej, eq, eG, eQ, eJ, eZ, eK, eY, e$, eX, e0, e1, e2, e3, e5, e4, e6, e9, e7, e8, te, tt, ti, tr, to, ta, tn, ts, tl, tc, th, td, tu, tg, tp, tC, tm, tS, ty, tb, t_, tT, tw, tv, tf, tP, tL, tA, tI, tO, tR, tk, tD, tE, tM, tF, tW, tB, tN, tV, tU;

            function tx(e, t) {
                let i = { ...e
                };
                for (let r in t) "object" != typeof e[r] || null === e[r] || Array.isArray(e[r]) ? void 0 !== t[r] && (i[r] = t[r]) : i[r] = tx(e[r], t[r]);
                return i
            }
            i.d(t, {
                Zg: function() {
                    return tq
                },
                rB: function() {
                    return ec
                }
            }), (eO = r || (r = {})).UnknownAction = "UnknownAction", eO.Spinner = "Spinner", eO.Loading = "Loading", eO.AlertAdd = "Alert.Add", eO.AlertEdit = "Alert.Edit", eO.AlertsClone = "Alerts.Clone", eO.AlertsRemove = "Alerts.Remove", eO.AlertsRemoveAll = "Alerts.RemoveAll", eO.AlertsRemoveFiltered = "Alerts.RemoveFiltered", eO.AlertsRemoveAllInactive = "Alerts.RemoveAllInactive", eO.AlertsRemoveFires = "Alerts.RemoveFires", eO.AlertsRestart = "Alerts.Restart", eO.AlertsRestartAllInactive = "Alerts.RestartAllInactive", eO.AlertsRestartFilteredInactive = "Alerts.RestartFilteredInactive", eO.AlertsStop = "Alerts.Stop", eO.AlertsStopAll = "Alerts.StopAll", eO.AlertsStopFilteredActive = "Alerts.StopFilteredActive", eO.AlertsExportFiresToCSV = "Alerts.ExportFiresToCSV", eO.AlertsLogClear = "AlertsLog.Clear", eO.ChartAddIndicatorToAllCharts = "Chart.AddIndicatorToAllCharts", eO.ChartAddSymbolToWatchList = "Chart.AddSymbolToWatchList", eO.ChartAlertLabelToggleExtendLines = "Chart.AlertLabel.ToggleExtendLines", eO.ChartApplyIndicatorsToAllCharts = "Chart.ApplyIndicatorsToAllCharts", eO.ChartIndicatorApplyChildIndicator = "Chart.Indicator.ApplyChildIndicator", eO.ChartIndicatorApplyFinancials = "Chart.Indicator.ApplyFinancials", eO.ChartIndicatorAbout = "Chart.Indicator.About", eO.ChartIndicatorPineLogs = "Chart.Indicator.PineLogs", eO.ChartIndicatorPineSource = "Chart.Indicator.PineSource", eO.ChartIndicatorAddFavorites = "Chart.Indicator.AddFavorites", eO.ChartChangeTimeZone = "Chart.ChangeTimeZone", eO.ChartClipboardCopyPrice = "Chart.Clipboard.CopyPrice", eO.ChartClipboardCopyLineTools = "Chart.Clipboard.CopyLineTools", eO.ChartClipboardCopySource = "Chart.Clipboard.CopySource", eO.ChartClipboardPasteSource = "Chart.Clipboard.PasteSource", eO.ChartCrosshairLockVerticalCursor = "Chart.Crosshair.LockVerticalCursor", eO.ChartCrosshairPlusButtonDrawHorizontalLine = "Chart.Crosshair.PlusButton.DrawHorizontalLine", eO.ChartCustomActionId = "Chart.CustomActionId", eO.ChartDialogsShowChangeInterval = "Chart.Dialogs.ShowChangeInterval", eO.ChartDialogsShowChangeSymbol = "Chart.Dialogs.ShowChangeSymbol", eO.ChartDialogsShowCompareOrAddSymbol = "Chart.Dialogs.ShowCompareOrAddSymbol", eO.ChartDialogsShowGeneralSettings = "Chart.Dialogs.ShowGeneralSettings", eO.ChartDialogsShowGeneralSettingsLegendTab = "Chart.Dialogs.ShowGeneralSettings.LegendTab", eO.ChartDialogsShowGeneralSettingsSymbolTab = "Chart.Dialogs.ShowGeneralSettings.SymbolTab", eO.ChartDialogsShowGeneralScalesTab = "Chart.Dialogs.ShowGeneralSettings.ScalesTab", eO.ChartDialogsShowGeneralSettingsEventsAndAlertsTab = "Chart.Dialogs.ShowGeneralSettings.EventsAndAlertsTab", eO.ChartDialogsShowGoToDate = "Chart.Dialogs.ShowGoToDate", eO.ChartDialogsShowInsertIndicators = "Chart.Dialogs.ShowInsertIndicators", eO.ChartDialogsShowInsertFinancials = "Chart.Dialogs.ShowInsertFinancials", eO.ChartDialogsShowSymbolInfo = "Chart.Dialogs.ShowSymbolInfo", eO.ChartDrawingToolbarToggleVisibility = "Chart.DrawingToolbar.ToggleVisibility", eO.ChartExternalActionId = "Chart.ExternalActionId", eO.ChartFavoriteDrawingToolsToolbarHide = "Chart.FavoriteDrawingToolsToolbar.Hide", eO.ChartIndicatorShowSettingsDialog = "Chart.Indicator.ShowSettingsDialog", eO.ChartLegendToggleLastDayChangeValuesVisibility = "Chart.Legend.ToggleLastDayChangeValuesVisibility", eO.ChartLinkingGroupSync = "Chart.LinkingGroupSync", eO.ChartLinkingGroupSyncChangeGroup = "Chart.LinkingGroupSync.ChangeGroup", eO.ChartLegendToggleBarChangeValuesVisibility = "Chart.Legend.ToggleBarChangeValuesVisibility", eO.ChartLegendTogglePriceSourceVisibility = "Chart.Legend.TogglePriceSourceVisibility", eO.ChartLegendToggleIndicatorArgumentsVisibility = "Chart.Legend.ToggleIndicatorArgumentsVisibility", eO.ChartLegendToggleIndicatorTitlesVisibility = "Chart.Legend.ToggleIndicatorTitlesVisibility", eO.ChartLegendToggleIndicatorValuesVisibility = "Chart.Legend.ToggleIndicatorValuesVisibility", eO.ChartLegendToggleOhlcValuesVisibility = "Chart.Legend.ToggleOhlcValuesVisibility", eO.ChartLegendToggleOpenMarketStatusVisibility = "Chart.Legend.ToggleOpenMarketStatusVisibility", eO.ChartLegendToggleSymbolVisibility = "Chart.Legend.ToggleSymbolVisibility", eO.ChartLegendToggleVolumeVisibility = "Chart.Legend.ToggleVolumeVisibility", eO.ChartLines = "Chart.Lines", eO.ChartLinesToggleBidAskLinesVisibility = "Chart.Lines.ToggleBidAskLinesVisibility", eO.ChartLinesToggleHighLowLinesVisibility = "Chart.Lines.ToggleHighLowLinesVisibility", eO.ChartLinesToggleAverageLineVisibility = "Chart.Lines.ToggleAverageLineVisibility", eO.ChartLinesTogglePrePostMarketLineVisibility = "Chart.Lines.TogglePrePostMarketLineVisibility", eO.ChartLinesTogglePrePostMarketPriceLineVisibility = "Chart.Lines.TogglePrePostMarketPriceLineVisibility", eO.ChartLinesToggleSeriesPrevCloseLineVisibility = "Chart.Lines.ToggleSeriesPrevCloseLineVisibility", eO.ChartLinesToggleSeriesPriceLineVisibility = "Chart.Lines.ToggleSeriesPriceLineVisibility", eO.ChartLineToolBarsPatternToggleFlipped = "Chart.LineTool.BarsPattern.ToggleFlipped", eO.ChartLineToolBarsPatternToggleMirrored = "Chart.LineTool.BarsPattern.ToggleMirrored", eO.ChartLineToolClone = "Chart.LineTool.Clone", eO.ChartLineToolCreateLimitOrderFromState = "Chart.LineTool.CreateLimitOrderFromState", eO.ChartLineToolElliotChangeDegreeProperty = "Chart.LineTool.Elliot.ChangeDegreeProperty", eO.ChartLineToolNoSync = "Chart.LineTool.NoSync", eO.ChartLineToolPitchforkChangeTypeToInside = "Chart.LineTool.Pitchfork.ChangeTypeToInside", eO.ChartLineToolPitchforkChangeTypeToModifiedSchiff = "Chart.LineTool.Pitchfork.ChangeTypeToModifiedSchiff", eO.ChartLineToolPitchforkChangeTypeToOriginal = "Chart.LineTool.Pitchfork.ChangeTypeToOriginal", eO.ChartLineToolPitchforkChangeTypeToSchiff = "Chart.LineTool.Pitchfork.ChangeTypeToSchiff", eO.ChartLineToolSyncInLayout = "Chart.LineTool.SyncInLayout", eO.ChartLineToolSyncGlobally = "Chart.LineTool.SyncGlobally", eO.ChartLineToolTemplates = "Chart.LineTool.Templates", eO.ChartLineToolTemplatesApply = "Chart.LineTool.Templates.Apply", eO.ChartLineToolTemplatesApplyDefaults = "Chart.LineTool.Templates.ApplyDefaults", eO.ChartLineToolTemplatesSaveAs = "Chart.LineTool.Templates.SaveAs", eO.ChartLineToolToolbarChangeFontSizeProperty = "Chart.LineTool.Toolbar.ChangeFontSizeProperty", eO.ChartLineToolToolbarChangeLineStyleToDashed = "Chart.LineTool.Toolbar.ChangeLineStyleToDashed", eO.ChartLineToolToolbarChangeLineStyleToDotted = "Chart.LineTool.Toolbar.ChangeLineStyleToDotted", eO.ChartLineToolToolbarChangeLineStyleToSolid = "Chart.LineTool.Toolbar.ChangeLineStyleToSolid", eO.ChartMarksToggleVisibility = "Chart.Marks.ToggleVisibility", eO.ChartMoveChartInLayout = "Chart.MoveChartInLayout", eO.ChartMoveChartInLayoutBack = "Chart.MoveChartInLayout.Back", eO.ChartMoveChartInLayoutForward = "Chart.MoveChartInLayout.Forward", eO.ChartTpoResetAllMergesAndSplits = "Chart.TPO.ResetAllMergesAndSplits", eO.ChartTpoSplitBlock = "Chart.TPO.SplitBlock", eO.ChartTpoMergeBlock = "Chart.TPO.MergeBlock", eO.ChartObjectTreeShow = "Chart.ObjectTree.Show", eO.ChartDataWindowShow = "Chart.DataWindow.Show", eO.ChartPaneControlsDeletePane = "Chart.PaneControls.DeletePane", eO.ChartPaneControlsMaximizePane = "Chart.PaneControls.MaximizePane", eO.ChartPaneControlsMinimizePane = "Chart.PaneControls.MinimizePane", eO.ChartPaneControlsMovePaneDown = "Chart.PaneControls.MovePaneDown", eO.ChartPaneControlsMovePaneUp = "Chart.PaneControls.MovePaneUp", eO.ChartPaneControlsCollapsePane = "Chart.PaneControls.CollapsePane", eO.ChartPaneControlsRestorePane = "Chart.PaneControls.RestorePane", eO.ChartPriceScaleLabels = "Chart.PriceScale.Labels", eO.ChartPriceScaleLabelsToggleBidAskLabelsVisibility = "Chart.PriceScale.Labels.ToggleBidAskLabelsVisibility", eO.ChartPriceScaleLabelsToggleHighLowPriceLabelsVisibility = "Chart.PriceScale.Labels.ToggleHighLowPriceLabelsVisibility", eO.ChartPriceScaleLabelsToggleAveragePriceLabelVisibility = "Chart.PriceScale.Labels.ToggleAveragePriceLabelVisibility", eO.ChartPriceScaleLabelsToggleIndicatorsNameLabelsVisibility = "Chart.PriceScale.Labels.ToggleIndicatorsNameLabelsVisibility", eO.ChartPriceScaleLabelsToggleIndicatorsValueLabelsVisibility = "Chart.PriceScale.Labels.ToggleIndicatorsValueLabelsVisibility", eO.ChartPriceScaleLabelsTogglePrePostMarketLabelsVisibility = "Chart.PriceScale.Labels.TogglePrePostMarketLabelsVisibility", eO.ChartPriceScaleLabelsToggleNoOverlappingLabelsVisibility = "Chart.PriceScale.Labels.ToggleNoOverlappingLabelsVisibility", eO.ChartPriceScaleLabelsToggleSeriesLastValueVisibility = "Chart.PriceScale.Labels.ToggleSeriesLastValueVisibility", eO.ChartPriceScaleLabelsToggleSymbolNameLabelsVisibility = "Chart.PriceScale.Labels.ToggleSymbolNameLabelsVisibility", eO.ChartPriceScaleLabelsToggleSymbolPrevCloseValueVisibility = "Chart.PriceScale.Labels.ToggleSymbolPrevCloseValueVisibility", eO.ChartPriceScaleMergeAllScales = "Chart.PriceScale.MergeAllScales", eO.ChartPriceScaleMergeAllScalesToLeft = "Chart.PriceScale.MergeAllScalesToLeft", eO.ChartPriceScaleMergeAllScalesToRight = "Chart.PriceScale.MergeAllScalesToRight", eO.ChartPriceScaleMoveToLeft = "Chart.PriceScale.MoveToLeft", eO.ChartPriceScaleMoveToRight = "Chart.PriceScale.MoveToRight", eO.ChartPriceScaleReset = "Chart.PriceScale.Reset", eO.ChartPriceScaleToggleAddOrderPlusButtonVisibility = "Chart.PriceScale.ToggleAddOrderPlusButtonVisibility", eO.ChartPriceScaleToggleAutoScale = "Chart.PriceScale.ToggleAutoScale", eO.ChartPriceScaleToggleAutoScaleSeriesOnly = "Chart.PriceScale.ToggleAutoScaleSeriesOnly", eO.ChartPriceScaleToggleCountdownToBarCloseVisibility = "Chart.PriceScale.ToggleCountdownToBarCloseVisibility", eO.ChartPriceScaleToggleIndexedTo100 = "Chart.PriceScale.ToggleIndexedTo100", eO.ChartPriceScaleToggleInvertScale = "Chart.PriceScale.ToggleInvertScale", eO.ChartPriceScaleToggleLogarithmic = "Chart.PriceScale.ToggleLogarithmic", eO.ChartPriceScaleTogglePercentage = "Chart.PriceScale.TogglePercentage", eO.ChartPriceScaleToggleRegular = "Chart.PriceScale.ToggleRegular", eO.ChartRedo = "Chart.Redo", eO.ChartRemoveAllIndicators = "Chart.RemoveAllIndicators", eO.ChartRemoveAllIndicatorsAndLineTools = "Chart.RemoveAllIndicatorsAndLineTools", eO.ChartRemoveAllLineTools = "Chart.RemoveAllLineTools", eO.ChartScalesReset = "Chart.Scales.Reset", eO.ChartScalesToggleLockPriceToBarRatio = "Chart.Scales.ToggleLockPriceToBarRatio", eO.ChartScrollToLineTool = "Chart.ScrollToLineTool", eO.ChartSelectedObjectHide = "Chart.SelectedObject.Hide", eO.ChartSelectedObjectRemove = "Chart.SelectedObject.Remove", eO.ChartSelectedObjectShow = "Chart.SelectedObject.Show", eO.ChartSelectedObjectShowSettingsDialog = "Chart.SelectedObject.ShowSettingsDialog", eO.ChartSelectedObjectToggleLocked = "Chart.SelectedObject.ToggleLocked", eO.ChartSeriesPriceScaleToggleAutoScale = "Chart.Series.PriceScale.ToggleAutoScale", eO.ChartSeriesPriceScaleToggleIndexedTo100 = "Chart.Series.PriceScale.ToggleIndexedTo100", eO.ChartSeriesPriceScaleToggleInvertPriceScale = "Chart.Series.PriceScale.ToggleInvertPriceScale", eO.ChartSeriesPriceScaleToggleLogarithmic = "Chart.Series.PriceScale.ToggleLogarithmic", eO.ChartSeriesPriceScaleTogglePercentage = "Chart.Series.PriceScale.TogglePercentage", eO.ChartSeriesPriceScaleToggleRegular = "Chart.Series.PriceScale.ToggleRegular", eO.ChartSessionBreaksToggleVisibility = "Chart.SessionBreaks.ToggleVisibility", eO.ChartSetSession = "Chart.SetSession", eO.ChartSourceChangePriceScale = "Chart.Source.ChangePriceScale", eO.ChartSourceMergeDown = "Chart.Source.MergeDown", eO.ChartSourceMergeUp = "Chart.Source.MergeUp", eO.ChartSourceMoveToNoScale = "Chart.Source.MoveToNoScale", eO.ChartSourceMoveToOtherScale = "Chart.Source.MoveToOtherScale", eO.ChartSourceMoveToPane = "Chart.Source.MoveToPane", eO.ChartSourceUnmergeDown = "Chart.Source.UnmergeDown", eO.ChartSourceUnmergeUp = "Chart.Source.UnmergeUp", eO.ChartSourceVisualOrder = "Chart.Source.VisualOrder", eO.ChartSourceVisualOrderBringForward = "Chart.Source.VisualOrder.BringForward", eO.ChartSourceVisualOrderBringToFront = "Chart.Source.VisualOrder.BringToFront", eO.ChartSourceVisualOrderSendBackward = "Chart.Source.VisualOrder.SendBackward", eO.ChartSourceVisualOrderSendToBack = "Chart.Source.VisualOrder.SendToBack", eO.ChartSourceResetInputPoints = "Chart.Source.ResetInputPoints", eO.ChartThemeApply = "Chart.Theme.Apply", eO.ChartThemeApplyCustom = "Chart.Theme.Apply.Custom", eO.ChartThemeSaveAs = "Chart.Theme.SaveAs", eO.ChartTimeScaleReset = "Chart.TimeScale.Reset", eO.ChartUndo = "Chart.Undo", eO.ChartShowAllIdeas = "Chart.ShowAllIdeas", eO.ChartShowIdeasOfFollowedUsers = "Chart.ShowIdeasOfFollowedUsers", eO.ChartShowMyIdeasOnly = "Chart.ShowMyIdeasOnly", eO.ChartToggleVisibilityAllLineTools = "Chart.ToggleVisibility.AllLineTools", eO.ChartToggleVisibilityContinuousContractSwitch = "Chart.ToggleVisibility.ContinuousContractSwitch", eO.ChartToggleVisibilityContractExpiration = "Chart.ToggleVisibility.ContractExpiration", eO.ChartToggleVisibilityDividends = "Chart.ToggleVisibility.Dividends", eO.ChartToggleVisibilityEarnings = "Chart.ToggleVisibility.Earnings", eO.ChartToggleVisibilityEconomicEvents = "Chart.ToggleVisibility.EconomicEvents", eO.ChartToggleVisibilitySplits = "Chart.ToggleVisibility.Splits", eO.ChartToggleVisibilityLatestNewsAndMinds = "Chart.ToggleVisibility.LatestNewsAndMinds", eO.ChartSourceIntervalsVisibility = "Chart.Source.IntervalsVisibility", eO.ChartSourceIntervalsVisibilityCurrentAndAbove = "Chart.Source.IntervalsVisibility.CurrentAndAbove", eO.ChartSourceIntervalsVisibilityCurrentAndBelow = "Chart.Source.IntervalsVisibility.CurrentAndBelow", eO.ChartSourceIntervalsVisibilityOnlyCurrent = "Chart.Source.IntervalsVisibility.Current", eO.ChartSourceIntervalsVisibilityAll = "Chart.Source.IntervalsVisibility.All", eO.NoteCreate = "Note.Create", eO.NoteEdit = "Note.Edit", eO.NoteRemove = "Note.Remove", eO.ObjectsTreeCreateGroup = "ObjectsTree.CreateGroup", eO.ObjectsTreeRemoveItem = "ObjectsTree.RemoveItem", eO.ObjectsTreeRenameItem = "ObjectsTree.RenameItem", eO.ObjectsTreeToggleItemLocked = "ObjectsTree.ToggleItemLocked", eO.ObjectsTreeToggleItemVisibility = "ObjectsTree.ToggleItemVisibility", eO.PineEditorConsoleCopyMessage = "PineEditor.Console.CopyMessage", eO.PineEditorConsoleToggleVisibility = "PineEditor.Console.ToggleVisibility", eO.PineEditorConsoleClear = "PineEditor.Console.Clear", eO.ScreenerAddSymbolToCompare = "Screener.AddSymbolToCompare", eO.ScreenerColumnRemove = "Screener.Column.Remove", eO.ScreenerFilterChange = "Screener.Filter.Change", eO.ScreenerFilterReset = "Screener.Filter.Reset", eO.ScreenerOpenSymbolChart = "Screener.OpenSymbolChart", eO.ScreenerOpenSymbolOverview = "Screener.OpenSymbolOverview", eO.ScreenerToggleVisibilityCurrency = "Screener.ToggleVisibility.Currency", eO.ScreenerToggleVisibilityDescription = "Screener.ToggleVisibility.Description", eO.ScreenerToggleVisibilityRating = "Screener.ToggleVisibility.Rating", eO.ScreenerToggleVisibilitySymbolType = "Screener.ToggleVisibility.SymbolType", eO.TradingCancelOrder = "Trading.CancelOrder", eO.TradingClosePosition = "Trading.ClosePosition", eO.TradingCustomActionId = "Trading.CustomActionId", eO.TradingDOMPlaceLimitOrder = "Trading.DOMPlaceLimitOrder", eO.TradingDOMPlaceMarketOrder = "Trading.DOMPlaceMarketOrder", eO.TradingDOMPlaceStopLimitOrder = "Trading.DOMPlaceStopLimitOrder", eO.TradingDOMPlaceStopOrder = "Trading.DOMPlaceStopOrder", eO.TradingEditOrder = "Trading.EditOrder", eO.TradingModifyPosition = "Trading.ModifyPosition", eO.TradingReversePosition = "Trading.ReversePosition", eO.TradingSellBuyButtonsToggleVisibility = "Trading.SellBuyButtonsToggleVisibility", eO.TradingTradeFromChart = "Trading.TradeFromChart", eO.TradingNoOverlapMode = "Trading.NoOverlapMode", eO.TradingShowSelectBrokerPanel = "Trading.ShowSelectBrokerPanel", eO.TradingOrderTitle = "Trading.OrderTitle", eO.TradingPositionTitle = "Trading.PositionTitle", eO.WatchlistActions = "Watchlist.Actions", eO.WatchlistAddSelectedSymbolsToCompare = "Watchlist.AddSelectedSymbolsToCompare ", eO.WatchlistAddSymbolToCompare = "Watchlist.AddSymbolToCompare", eO.WatchlistAddSymbolToSection = "Watchlist.AddSymbolToSection", eO.WatchlistChangeFlaggedGroupColor = "Watchlist.ChangeFlaggedGroupColor", eO.WatchlistAddSymbol = "Watchlist.AddSymbol", eO.WatchlistCreate = "Watchlist.Create", eO.WatchlistAddSelectedSymbols = "Watchlist.AddSelectedSymbols", eO.WatchlistAddSelectedSymbolsLists = "Watchlist.AddSelectedSymbols.Lists", eO.WatchlistGetDisplayedTickerDescription = "Watchlist.GetDisplayedTickerDescription", eO.WatchlistCreateSection = "Watchlist.CreateSection", eO.WatchlistFlagSelectedSymbols = "Watchlist.FlagSelectedSymbols", eO.WatchlistFlagSymbol = "Watchlist.FlagSymbol", eO.WatchlistOpenSymbolChart = "Watchlist.OpenSymbolChart", eO.WatchlistOpenSymbolOverview = "Watchlist.OpenSymbolOverview", eO.WatchlistRemoveSection = "Watchlist.RemoveSection", eO.WatchlistRemoveSymbol = "Watchlist.RemoveSymbol", eO.WatchlistRenameSection = "Watchlist.RenameSection", eO.WatchlistUnflagAllSymbols = "Watchlist.UnflagAllSymbols", eO.WatchlistUnflagSelectedSymbols = "Watchlist.UnflagSelectedSymbols", eO.WatchlistUnflagSymbol = "Watchlist.UnflagSymbol", (o || (o = {})).extractErrorReason = function(e) {
                return e.params[1]
            }, (eR = a || (a = {})).Default = "default", eR.FullSingleSession = "full_single_session", (ek = n || (n = {})).PeriodBack = "period-back", ek.TimeRange = "time-range", (eD = s || (s = {})).PeriodBack = "period-back", eD.TimeRange = "time-range", (eE = l || (l = {})).Open = "market", eE.Pre = "pre_market", eE.Post = "post_market", eE.Close = "out_of_session", eE.Holiday = "holiday", (eM = c || (c = {})).Separator = "separator", eM.Action = "action", (eF = h || (h = {}))[eF.All = 0] = "All", eF[eF.BarMarks = 1] = "BarMarks", eF[eF.TimeScaleMarks = 2] = "TimeScaleMarks", (eW = d || (d = {}))[eW.Line = 0] = "Line", eW[eW.Histogram = 1] = "Histogram", eW[eW.Cross = 3] = "Cross", eW[eW.Area = 4] = "Area", eW[eW.Columns = 5] = "Columns", eW[eW.Circles = 6] = "Circles", eW[eW.LineWithBreaks = 7] = "LineWithBreaks", eW[eW.AreaWithBreaks = 8] = "AreaWithBreaks", eW[eW.StepLine = 9] = "StepLine", eW[eW.StepLineWithDiamonds = 10] = "StepLineWithDiamonds", eW[eW.StepLineWithBreaks = 11] = "StepLineWithBreaks", (eB = u || (u = {})).Line = "line", eB.Colorer = "colorer", eB.BarColorer = "bar_colorer", eB.BgColorer = "bg_colorer", eB.TextColorer = "text_colorer", eB.OhlcColorer = "ohlc_colorer", eB.CandleWickColorer = "wick_colorer", eB.CandleBorderColorer = "border_colorer", eB.UpColorer = "up_colorer", eB.DownColorer = "down_colorer", eB.Shapes = "shapes", eB.Chars = "chars", eB.Arrows = "arrows", eB.Data = "data", eB.DataOffset = "dataoffset", eB.OhlcOpen = "ohlc_open", eB.OhlcHigh = "ohlc_high", eB.OhlcLow = "ohlc_low", eB.OhlcClose = "ohlc_close", (g || (g = {})).AlertCondition = "alertcondition", (eN = p || (p = {}))[eN.None = 0] = "None", eN[eN.Pane = 1] = "Pane", eN[eN.DataWindow = 2] = "DataWindow", eN[eN.PriceScale = 4] = "PriceScale", eN[eN.StatusLine = 8] = "StatusLine", eN[eN.All = 15] = "All", (eV = C || (C = {}))[eV.None = 0] = "None", eV[eV.Pane = 1] = "Pane", eV[eV.DataWindow = 2] = "DataWindow", eV[eV.PriceScale = 4] = "PriceScale", eV[eV.StatusLine = 8] = "StatusLine", eV[eV.All = 15] = "All", (eU = m || (m = {})).OhlcBars = "ohlc_bars", eU.OhlcCandles = "ohlc_candles", (ex = S || (S = {})).Auto = "auto", ex.Tiny = "tiny", ex.Small = "small", ex.Normal = "normal", ex.Large = "large", ex.Huge = "huge", (eH = y || (y = {})).Integer = "integer", eH.Float = "float", eH.Price = "price", eH.Bool = "bool", eH.Text = "text", eH.Symbol = "symbol", eH.Session = "session", eH.Source = "source", eH.Resolution = "resolution", eH.Time = "time", eH.BarTime = "bar_time", eH.Color = "color", eH.Textarea = "text_area", (ez = b || (b = {}))[ez.None = 0] = "None", ez[ez.DataWindow = 2] = "DataWindow", ez[ez.StatusLine = 8] = "StatusLine", ez[ez.All = 15] = "All", (ej = _ || (_ = {})).InitialCapital = "initial_capital", ej.Currency = "currency", ej.DefaultQTYValue = "default_qty_value", ej.DefaultQTYType = "default_qty_type", ej.Pyramiding = "pyramiding", ej.ComissionValue = "commission_value", ej.ComissionType = "commission_type", ej.BacktestFillLimitsAssumtion = "backtest_fill_limits_assumption", ej.Slippage = "slippage", ej.CalcOnOrderFills = "calc_on_order_fills", ej.CalcOnEveryTick = "calc_on_every_tick", ej.MarginLong = "margin_long", ej.MarginShort = "margin_short", ej.UseBarMagnifier = "use_bar_magnifier", ej.ProcessOrdersOnClose = "process_orders_on_close", ej.FillOrdersOnStandardOHLC = "fill_orders_on_standard_ohlc", (eq = T || (T = {})).Fixed = "fixed", eq.CashPerOrder = "cash_per_order", eq.PercentOfEquity = "percent_of_equity", (eG = w || (w = {})).Percent = "percent", eG.CashPerContract = "cash_per_contract", eG.CashPerOrder = "cash_per_order", (eQ = v || (v = {})).FirstBar = "first_visible_bar_time", eQ.LastBar = "last_visible_bar_time", eQ.Realtime = "subscribeRealtime", (eJ = f || (f = {})).FgColor = "__chart_fgcolor", eJ.BgColor = "__chart_bgcolor", (eZ = P || (P = {}))[eZ.Right = 0] = "Right", eZ[eZ.Left = 1] = "Left", eZ[eZ.NoScale = 2] = "NoScale", (eK = L || (L = {}))[eK.Right = 0] = "Right", eK[eK.Left = 1] = "Left", eK[eK.None = 2] = "None", (eY = A || (A = {})).TypePlots = "plot_plot", eY.TypeHlines = "hline_hline", (e$ = I || (I = {}))[e$.StopLoss = 0] = "StopLoss", e$[e$.TrailingStop = 1] = "TrailingStop", e$[e$.GuaranteedStop = 2] = "GuaranteedStop", (O || (O = {})).Symbol = "symbol", (eX = R || (R = {}))[eX.PopUp = 0] = "PopUp", eX[eX.Notification = 1] = "Notification", (e0 = k || (k = {}))[e0.CONNECTED = 1] = "CONNECTED", e0[e0.CONNECTING = 2] = "CONNECTING", e0[e0.DISCONNECTED = 3] = "DISCONNECTED", e0[e0.ERROR = 4] = "ERROR", (e1 = D || (D = {}))[e1.Connected = 1] = "Connected", e1[e1.Connecting = 2] = "Connecting", e1[e1.Disconnected = 3] = "Disconnected", e1[e1.Error = 4] = "Error", (e2 = E || (E = {}))[e2.LIMIT = 1] = "LIMIT", e2[e2.MARKET = 2] = "MARKET", e2[e2.STOP = 3] = "STOP", e2[e2.STOPLIMIT = 4] = "STOPLIMIT", (e3 = M || (M = {}))[e3.Limit = 1] = "Limit", e3[e3.Market = 2] = "Market", e3[e3.Stop = 3] = "Stop", e3[e3.StopLimit = 4] = "StopLimit", (e5 = F || (F = {}))[e5.BUY = 1] = "BUY", e5[e5.SELL = -1] = "SELL", (e4 = W || (W = {}))[e4.Buy = 1] = "Buy", e4[e4.Sell = -1] = "Sell", (e6 = B || (B = {}))[e6.CANCELED = 1] = "CANCELED", e6[e6.FILLED = 2] = "FILLED", e6[e6.INACTIVE = 3] = "INACTIVE", e6[e6.PLACING = 4] = "PLACING", e6[e6.REJECTED = 5] = "REJECTED", e6[e6.WORKING = 6] = "WORKING", (e9 = N || (N = {}))[e9.ALL = 0] = "ALL", e9[e9.CANCELED = 1] = "CANCELED", e9[e9.FILLED = 2] = "FILLED", e9[e9.INACTIVE = 3] = "INACTIVE", e9[e9.REJECTED = 5] = "REJECTED", e9[e9.WORKING = 6] = "WORKING", (e7 = V || (V = {}))[e7.Canceled = 1] = "Canceled", e7[e7.Filled = 2] = "Filled", e7[e7.Inactive = 3] = "Inactive", e7[e7.Placing = 4] = "Placing", e7[e7.Rejected = 5] = "Rejected", e7[e7.Working = 6] = "Working", (e8 = U || (U = {}))[e8.All = 0] = "All", e8[e8.Canceled = 1] = "Canceled", e8[e8.Filled = 2] = "Filled", e8[e8.Inactive = 3] = "Inactive", e8[e8.Rejected = 5] = "Rejected", e8[e8.Working = 6] = "Working", (te = x || (x = {}))[te.Order = 1] = "Order", te[te.Position = 2] = "Position", (tt = H || (H = {}))[tt.ORDER = 1] = "ORDER", tt[tt.POSITION = 2] = "POSITION", (ti = z || (z = {}))[ti.Order = 1] = "Order", ti[ti.Position = 2] = "Position", ti[ti.IndividualPosition = 3] = "IndividualPosition", (tr = j || (j = {}))[tr.StopLoss = 0] = "StopLoss", tr[tr.TakeProfit = 1] = "TakeProfit", tr[tr.TrailingStop = 2] = "TrailingStop", tr[tr.GuaranteedStop = 3] = "GuaranteedStop", (to = q || (q = {}))[to.LIMITPRICE = 1] = "LIMITPRICE", to[to.STOPPRICE = 2] = "STOPPRICE", to[to.TAKEPROFIT = 3] = "TAKEPROFIT", to[to.STOPLOSS = 4] = "STOPLOSS", (ta = G || (G = {}))[ta.LimitPrice = 1] = "LimitPrice", ta[ta.StopPrice = 2] = "StopPrice", ta[ta.TakeProfit = 3] = "TakeProfit", ta[ta.StopLoss = 4] = "StopLoss", ta[ta.Quantity = 5] = "Quantity", (tn = Q || (Q = {}))[tn.ERROR = 0] = "ERROR", tn[tn.SUCCESS = 1] = "SUCCESS", (ts = J || (J = {}))[ts.Error = 0] = "Error", ts[ts.Success = 1] = "Success", (tl = Z || (Z = {}))[tl.Demo = 1] = "Demo", tl[tl.Real = 0] = "Real", (tc = K || (K = {})).Information = "information", tc.Warning = "warning", tc.Error = "error", (th = Y || (Y = {})).Demo = "demo", th.Live = "live", (td = $ || ($ = {}))[td.LogOut = 0] = "LogOut", td[td.FailedRestoring = 1] = "FailedRestoring", td[td.Offline = 2] = "Offline", td[td.APIError = 3] = "APIError", td[td.TwoFactorRequired = 4] = "TwoFactorRequired", td[td.CancelAuthorization = 5] = "CancelAuthorization", td[td.TimeOutForAuthorization = 6] = "TimeOutForAuthorization", td[td.OauthError = 7] = "OauthError", td[td.BrokenConnection = 8] = "BrokenConnection", td[td.FailedSignIn = 9] = "FailedSignIn", (tu = X || (X = {}))[tu.None = 0] = "None", tu[tu.Pips = 1] = "Pips", tu[tu.Ticks = 2] = "Ticks", (tg = ee || (ee = {})).Halted = "HALTED", tg.NotShortable = "NOT-SHORTABLE", tg.HardToBorrow = "HARD-TO-BORROW", (tp = et || (et = {}))[tp.Limit = 1] = "Limit", tp[tp.Stop = 2] = "Stop", (tC = ei || (ei = {})).Disallowed = "disallowed", tC.Allowed = "allowed", tC.AllowedWithWarning = "allowed_with_warning", (tm = er || (er = {})).PlaceOrder = "place_order", tm.ModifyOrder = "modify_order", tm.CancelOrder = "cancel_order", tm.ModifyPosition = "modify_position", tm.ClosePosition = "close_position", tm.ModifyIndividualPosition = "modify_individual_position", tm.CloseIndividualPosition = "close_individual_position", tm.CloseNetPosition = "close_net_position", (tS = eo || (eo = {})).Date = "date", tS.DateOrDateTime = "dateOrDateTime", tS.Default = "default", tS.Fixed = "fixed", tS.FixedInCurrency = "fixedInCurrency", tS.VariablePrecision = "variablePrecision", tS.FormatQuantity = "formatQuantity", tS.FormatPrice = "formatPrice", tS.FormatPriceForexSup = "formatPriceForexSup", tS.FormatPriceInCurrency = "formatPriceInCurrency", tS.IntegerSeparated = "integerSeparated", tS.LocalDate = "localDate", tS.LocalDateOrDateTime = "localDateOrDateTime", tS.Percentage = "percentage", tS.Pips = "pips", tS.Profit = "profit", tS.ProfitInInstrumentCurrency = "profitInInstrumentCurrency", tS.Side = "side", tS.PositionSide = "positionSide", tS.Status = "status", tS.Symbol = "symbol", tS.Text = "text", tS.Type = "type", tS.MarginPercent = "marginPercent", tS.Empty = "empty", (ty = ea || (ea = {}))[ty.LastPriceAndPercentageValue = 0] = "LastPriceAndPercentageValue", ty[ty.LastValueAccordingToScale = 1] = "LastValueAccordingToScale", (tb = en || (en = {}))[tb.Solid = 0] = "Solid", tb[tb.Dotted = 1] = "Dotted", tb[tb.Dashed = 2] = "Dashed", (t_ = es || (es = {}))[t_.Offline = 0] = "Offline", t_[t_.Resolving = 1] = "Resolving", t_[t_.Loading = 2] = "Loading", t_[t_.Ready = 3] = "Ready", t_[t_.InvalidSymbol = 4] = "InvalidSymbol", t_[t_.Snapshot = 5] = "Snapshot", t_[t_.EOD = 6] = "EOD", t_[t_.Pulse = 7] = "Pulse", t_[t_.Delayed = 8] = "Delayed", t_[t_.DelayedSteaming = 9] = "DelayedSteaming", t_[t_.NoBars = 10] = "NoBars", t_[t_.Replay = 11] = "Replay", t_[t_.Error = 12] = "Error", t_[t_.CalculationError = 13] = "CalculationError", t_[t_.UnsupportedResolution = 14] = "UnsupportedResolution", (tT = el || (el = {}))[tT.Markers = 0] = "Markers", tT[tT.Stepline = 1] = "Stepline", tT[tT.Simple = 2] = "Simple", (tw = ec || (ec = {}))[tw.Bar = 0] = "Bar", tw[tw.Candle = 1] = "Candle", tw[tw.Line = 2] = "Line", tw[tw.Area = 3] = "Area", tw[tw.Renko = 4] = "Renko", tw[tw.Kagi = 5] = "Kagi", tw[tw.PnF = 6] = "PnF", tw[tw.LineBreak = 7] = "LineBreak", tw[tw.HeikinAshi = 8] = "HeikinAshi", tw[tw.HollowCandle = 9] = "HollowCandle", tw[tw.Baseline = 10] = "Baseline", tw[tw.Range = 11] = "Range", tw[tw.HiLo = 12] = "HiLo", tw[tw.Column = 13] = "Column", tw[tw.LineWithMarkers = 14] = "LineWithMarkers", tw[tw.Stepline = 15] = "Stepline", tw[tw.HLCArea = 16] = "HLCArea", tw[tw.VolFootprint = 17] = "VolFootprint", tw[tw.TPO = 18] = "TPO", tw[tw.VolCandle = 19] = "VolCandle", tw[tw.SVP = 20] = "SVP", (tv = eh || (eh = {})).TwentyFourHours = "24-hours", tv.TwelveHours = "12-hours", (tf = ed || (ed = {}))[tf.Initial = 2] = "Initial", tf[tf.SeriesZOrderIsAlwaysZero = 3] = "SeriesZOrderIsAlwaysZero", tf[tf.Current = 3] = "Current", (tP = eu || (eu = {}))[tP.Money = 0] = "Money", tP[tP.Pips = 1] = "Pips", tP[tP.Percentage = 2] = "Percentage", (tL = eg || (eg = {}))[tL.Left = 0] = "Left", tL[tL.Center = 1] = "Center", tL[tL.Right = 2] = "Right", eu.Money, eu.Money, eg.Right, (tA = ep || (ep = {}))[tA.Background = 0] = "Background", tA[tA.Foreground = 1] = "Foreground", tA[tA.Topmost = 2] = "Topmost", (tI = eC || (eC = {}))[tI.Unavailable = 0] = "Unavailable", tI[tI.AvailableReadonlyAlwaysDisabled = 1] = "AvailableReadonlyAlwaysDisabled", tI[tI.AvailableReadonlyAlwaysEnabled = 2] = "AvailableReadonlyAlwaysEnabled", tI[tI.Available = 3] = "Available", (tO = em || (em = {}))[tO.ViewportChangeUserAction = 0] = "ViewportChangeUserAction", tO[tO.DataUpdate = 1] = "DataUpdate", tO[tO.SeriesRestart = 2] = "SeriesRestart", tO[tO.SeriesCompleted = 3] = "SeriesCompleted", tO[tO.StudyCreation = 4] = "StudyCreation", (tR = eS || (eS = {}))[tR.Chart = 0] = "Chart", (tk = ey || (ey = {})).AlwaysOn = "alwaysOn", tk.VisibleOnMouseOver = "visibleOnMouseOver", tk.AlwaysOff = "alwaysOff", (tD = eb || (eb = {}))[tD.Normal = 0] = "Normal", tD[tD.Log = 1] = "Log", tD[tD.Percentage = 2] = "Percentage", tD[tD.IndexedTo100 = 3] = "IndexedTo100", (tE = e_ || (e_ = {}))[tE.Bars = 0] = "Bars", tE[tE.Candles = 1] = "Candles", tE[tE.Line = 2] = "Line", tE[tE.Area = 3] = "Area", tE[tE.HeikenAshi = 8] = "HeikenAshi", tE[tE.HollowCandles = 9] = "HollowCandles", tE[tE.Baseline = 10] = "Baseline", tE[tE.HiLo = 12] = "HiLo", tE[tE.Column = 13] = "Column", tE[tE.LineWithMarkers = 14] = "LineWithMarkers", tE[tE.Stepline = 15] = "Stepline", tE[tE.HLCArea = 16] = "HLCArea", tE[tE.VolCandle = 19] = "VolCandle", tE[tE.Renko = 4] = "Renko", tE[tE.Kagi = 5] = "Kagi", tE[tE.PointAndFigure = 6] = "PointAndFigure", tE[tE.LineBreak = 7] = "LineBreak", (eT || (eT = {})).Value = "_seriesId", (tM = ew || (ew = {})).LeftToRight = "left_to_right", tM.RightToLeft = "right_to_left", (tF = ev || (ev = {})).Relative = "relative", tF.Absolute = "absolute", (tW = ef || (ef = {})).UpDown = "Up/Down", tW.Total = "Total", tW.Delta = "Delta", (tB = eP || (eP = {})).AboveBar = "AboveBar", tB.BelowBar = "BelowBar", tB.Top = "Top", tB.Bottom = "Bottom", tB.Right = "Right", tB.Left = "Left", tB.Absolute = "Absolute", tB.AbsoluteUp = "AbsoluteUp", tB.AbsoluteDown = "AbsoluteDown", (tN = eL || (eL = {})).Left = "left", tN.Center = "center", tN.Right = "right", (tV = eA || (eA = {})).Top = "top", tV.Middle = "middle", tV.Bottom = "bottom", (tU = eI || (eI = {}))[tU.Solid = 0] = "Solid", tU[tU.Dotted = 1] = "Dotted", tU[tU.Dashed = 2] = "Dashed";
            let tH = {
                    width: 800,
                    height: 500,
                    interval: "1D",
                    timezone: "Etc/UTC",
                    container: "",
                    library_path: "",
                    locale: "en",
                    widgetbar: {
                        details: !1,
                        watchlist: !1,
                        news: !1,
                        datawindow: !1,
                        watchlist_settings: {
                            default_symbols: []
                        }
                    },
                    overrides: {
                        "mainSeriesProperties.showCountdown": !1
                    },
                    studies_overrides: {},
                    trading_customization: {
                        position: {},
                        order: {}
                    },
                    brokerConfig: {
                        configFlags: {}
                    },
                    fullscreen: !1,
                    autosize: !1,
                    disabled_features: [],
                    enabled_features: [],
                    debug: !1,
                    logo: {},
                    time_frames: [{
                        text: "5y",
                        resolution: "1W"
                    }, {
                        text: "1y",
                        resolution: "1W"
                    }, {
                        text: "6m",
                        resolution: "120"
                    }, {
                        text: "3m",
                        resolution: "60"
                    }, {
                        text: "1m",
                        resolution: "30"
                    }, {
                        text: "5d",
                        resolution: "5"
                    }, {
                        text: "1d",
                        resolution: "1"
                    }],
                    client_id: "0",
                    user_id: "0",
                    charts_storage_api_version: "1.0",
                    favorites: {
                        intervals: [],
                        chartTypes: [],
                        indicators: [],
                        drawingTools: []
                    }
                },
                tz = JSON.parse('[{"iso":"ar","dir":"rtl","language":"ar"},{"iso":"pt","dir":"ltr","language":"pt"},{"iso":"ca","dir":"ltr","language":"ca_ES"},{"iso":"cs","dir":"ltr","language":"cs"},{"iso":"de","dir":"ltr","language":"de"},{"iso":"en","dir":"ltr","language":"en"},{"iso":"es","dir":"ltr","language":"es"},{"iso":"fa","dir":"rtl","language":"fa"},{"iso":"fr","dir":"ltr","language":"fr"},{"iso":"he","dir":"rtl","language":"he_IL"},{"iso":"hu","dir":"ltr","language":"hu_HU"},{"iso":"id","dir":"ltr","language":"id_ID"},{"iso":"en","dir":"ltr","language":"en"},{"iso":"it","dir":"ltr","language":"it"},{"iso":"ja","dir":"ltr","language":"ja"},{"iso":"ko","dir":"ltr","language":"ko"},{"iso":"ms","dir":"ltr","language":"ms_MY"},{"iso":"pl","dir":"ltr","language":"pl"},{"iso":"ru","dir":"ltr","language":"ru"},{"iso":"sv","dir":"ltr","language":"sv"},{"iso":"th","dir":"ltr","language":"th"},{"iso":"tr","dir":"ltr","language":"tr"},{"iso":"vi","dir":"ltr","language":"vi"},{"iso":"zh-Hans","dir":"ltr","language":"zh"},{"iso":"zh-Hant","dir":"ltr","language":"zh_TW"},{"iso":"el","dir":"ltr","language":"el"},{"iso":"nl","dir":"ltr","language":"nl_NL"},{"iso":"ro","dir":"ltr","language":"ro"}]'),
                tj = !1,
                tq = class {
                    setDebugMode(e) {
                        this._innerAPI().setDebugMode(e)
                    }
                    onChartReady(e) {
                        this._ready ? e.call(this) : this._readyHandlers.push(e)
                    }
                    headerReady() {
                        return this._innerWindowLoaded.then(() => this._innerWindow().headerReady())
                    }
                    onGrayedObjectClicked(e) {
                        this._doWhenInnerApiLoaded(t => {
                            t.onGrayedObjectClicked(e)
                        })
                    }
                    onShortcut(e, t) {
                        this._doWhenInnerWindowLoaded(i => {
                            i.createShortcutAction(e, t)
                        })
                    }
                    subscribe(e, t) {
                        this._doWhenInnerApiLoaded(i => {
                            i.subscribe(e, t)
                        })
                    }
                    unsubscribe(e, t) {
                        this._doWhenInnerApiLoaded(i => {
                            i.unsubscribe(e, t)
                        })
                    }
                    chart(e) {
                        return this._innerAPI().chart(e)
                    }
                    getLanguage() {
                        return this._options.locale
                    }
                    setSymbol(e, t, i) {
                        this._innerAPI().changeSymbol(e, t, i)
                    }
                    remove() {
                        window.removeEventListener("resize", this._onWindowResize), this._readyHandlers.splice(0, this._readyHandlers.length), delete window[this._id], this._iFrame.parentNode && this._iFrame.parentNode.removeChild(this._iFrame)
                    }
                    closePopupsAndDialogs() {
                        this._doWhenInnerApiLoaded(e => {
                            e.closePopupsAndDialogs()
                        })
                    }
                    selectLineTool(e, t) {
                        this._innerAPI().selectLineTool(e, t)
                    }
                    selectedLineTool() {
                        return this._innerAPI().selectedLineTool()
                    }
                    save(e, t) {
                        this._innerAPI().saveChart(e, t)
                    }
                    load(e, t) {
                        this._innerAPI().loadChart({
                            json: e,
                            extendedData: t
                        })
                    }
                    getSavedCharts(e) {
                        this._innerAPI().getSavedCharts(e)
                    }
                    loadChartFromServer(e) {
                        this._innerAPI().loadChartFromServer(e)
                    }
                    saveChartToServer(e, t, i) {
                        this._innerAPI().saveChartToServer(e, t, i)
                    }
                    removeChartFromServer(e, t) {
                        this._innerAPI().removeChartFromServer(e, t)
                    }
                    onContextMenu(e) {
                        this._doWhenInnerApiLoaded(t => {
                            t.onContextMenu(e)
                        })
                    }
                    createButton(e) {
                        return this._innerWindow().createButton(e)
                    }
                    createDropdown(e) {
                        return this._innerWindow().createDropdown(e)
                    }
                    showNoticeDialog(e) {
                        this._doWhenInnerApiLoaded(t => {
                            t.showNoticeDialog(e)
                        })
                    }
                    showConfirmDialog(e) {
                        this._doWhenInnerApiLoaded(t => {
                            t.showConfirmDialog(e)
                        })
                    }
                    showLoadChartDialog() {
                        this._innerAPI().showLoadChartDialog()
                    }
                    showSaveAsChartDialog() {
                        this._innerAPI().showSaveAsChartDialog()
                    }
                    symbolInterval() {
                        return this._innerAPI().getSymbolInterval()
                    }
                    mainSeriesPriceFormatter() {
                        return this._innerAPI().mainSeriesPriceFormatter()
                    }
                    getIntervals() {
                        return this._innerAPI().getIntervals()
                    }
                    getStudiesList() {
                        return this._innerAPI().getStudiesList()
                    }
                    getStudyInputs(e) {
                        return this._innerAPI().getStudyInputs(e)
                    }
                    getStudyStyles(e) {
                        return this._innerAPI().getStudyStyles(e)
                    }
                    addCustomCSSFile(e) {
                        this._innerWindow().addCustomCSSFile(e)
                    }
                    applyOverrides(e) {
                        this._options = tx(this._options, {
                            overrides: e
                        }), this._doWhenInnerWindowLoaded(t => {
                            t.applyOverrides(e)
                        })
                    }
                    applyStudiesOverrides(e) {
                        this._doWhenInnerWindowLoaded(t => {
                            t.applyStudiesOverrides(e)
                        })
                    }
                    watchList() {
                        return this._innerAPI().watchlist()
                    }
                    news() {
                        return this._innerAPI().news()
                    }
                    widgetbar() {
                        return this._innerAPI().widgetbar()
                    }
                    activeChart() {
                        return this._innerAPI().activeChart()
                    }
                    activeChartIndex() {
                        return this._innerAPI().activeChartIndex()
                    }
                    setActiveChart(e) {
                        return this._innerAPI().setActiveChart(e)
                    }
                    chartsCount() {
                        return this._innerAPI().chartsCount()
                    }
                    layout() {
                        return this._innerAPI().layout()
                    }
                    setLayout(e) {
                        this._innerAPI().setLayout(e)
                    }
                    layoutName() {
                        return this._innerAPI().layoutName()
                    }
                    resetLayoutSizes(e) {
                        this._innerAPI().resetLayoutSizes(e)
                    }
                    changeTheme(e, t) {
                        return this._innerWindow().changeTheme(e, t)
                    }
                    getTheme() {
                        return this._innerWindow().getTheme()
                    }
                    takeScreenshot() {
                        this._doWhenInnerApiLoaded(e => {
                            e.takeScreenshot()
                        })
                    }
                    lockAllDrawingTools() {
                        return this._innerAPI().lockAllDrawingTools()
                    }
                    hideAllDrawingTools() {
                        return this._innerAPI().hideAllDrawingTools()
                    }
                    drawOnAllChartsEnabled() {
                        return this._innerAPI().drawOnAllChartsEnabled()
                    }
                    drawOnAllCharts(e) {
                        this._innerAPI().drawOnAllCharts(e)
                    }
                    magnetEnabled() {
                        return this._innerAPI().magnetEnabled()
                    }
                    magnetMode() {
                        return this._innerAPI().magnetMode()
                    }
                    undoRedoState() {
                        return this._innerAPI().undoRedoState()
                    }
                    setIntervalLinkingEnabled(e) {
                        this._innerAPI().setIntervalLinkingEnabled(e)
                    }
                    setDateRangeLinkingEnabled(e) {
                        this._innerAPI().setDateRangeLinkingEnabled(e)
                    }
                    setTimeFrame(e) {
                        this._innerAPI().setTimeFrame(e)
                    }
                    symbolSync() {
                        return this._innerAPI().symbolSync()
                    }
                    intervalSync() {
                        return this._innerAPI().intervalSync()
                    }
                    crosshairSync() {
                        return this._innerAPI().crosshairSync()
                    }
                    timeSync() {
                        return this._innerAPI().timeSync()
                    }
                    dateRangeSync() {
                        return this._innerAPI().dateRangeSync()
                    }
                    setFeatureEnabled(e, t) {
                        this._innerAPI().setFeatureEnabled(e, t)
                    }
                    getAllFeatures() {
                        return this._innerWindow().getAllFeatures()
                    }
                    clearUndoHistory() {
                        return this._innerAPI().clearUndoHistory()
                    }
                    undo() {
                        return this._innerAPI().undo()
                    }
                    redo() {
                        return this._innerAPI().redo()
                    }
                    startFullscreen() {
                        this._innerAPI().startFullscreen()
                    }
                    exitFullscreen() {
                        this._innerAPI().exitFullscreen()
                    }
                    takeClientScreenshot(e) {
                        return this._innerAPI().takeClientScreenshot(e)
                    }
                    navigationButtonsVisibility() {
                        return this._innerWindow().getNavigationButtonsVisibility()
                    }
                    paneButtonsVisibility() {
                        return this._innerWindow().getPaneButtonsVisibility()
                    }
                    dateFormat() {
                        return this._innerWindow().getDateFormat()
                    }
                    timeHoursFormat() {
                        return this._innerWindow().getTimeHoursFormat()
                    }
                    currencyAndUnitVisibility() {
                        return this._innerWindow().getCurrencyAndUnitVisibility()
                    }
                    supportedChartTypes() {
                        return this._innerAPI().supportedChartTypes()
                    }
                    watermark() {
                        return this._innerAPI().watermark()
                    }
                    customSymbolStatus() {
                        return this._innerWindow().customSymbolStatus()
                    }
                    setCSSCustomProperty(e, t) {
                        if (!1 === e.startsWith("--")) throw Error("customPropertyName should begin with a double hyphen");
                        this._innerWindow().document.body.style.setProperty(e, t)
                    }
                    getCSSCustomPropertyValue(e) {
                        if (!1 === e.startsWith("--")) throw Error("customPropertyName should begin with a double hyphen");
                        let t = this._innerWindow().document.body;
                        return t.style.getPropertyValue(e) || getComputedStyle(t).getPropertyValue(e)
                    }
                    unloadUnusedCharts() {
                        this._innerAPI().unloadUnusedCharts()
                    }
                    async customThemes() {
                        return this._innerWindow().customThemes()
                    }
                    linking() {
                        return this._innerAPI().linking
                    }
                    _innerAPI() {
                        return this._innerWindow().tradingViewApi
                    }
                    _innerWindow() {
                        return this._iFrame.contentWindow
                    }
                    _doWhenInnerWindowLoaded(e) {
                        this._ready ? e(this._innerWindow()) : this._innerWindowLoaded.then(() => {
                            e(this._innerWindow())
                        })
                    }
                    _doWhenInnerApiLoaded(e) {
                        this._doWhenInnerWindowLoaded(t => {
                            t.doWhenApiIsReady(() => e(this._innerAPI()))
                        })
                    }
                    _autoResizeChart() {
                        this._options.fullscreen && (this._iFrame.style.height = window.innerHeight + "px", tG && setTimeout(() => {
                            this._iFrame.style.height = window.innerHeight + "px"
                        }, 30))
                    }
                    async _create() {
                        var e, t, i, r;
                        let o = null !== (t = null === (e = this._options.enabled_features) || void 0 === e ? void 0 : e.includes("iframe_loading_same_origin")) && void 0 !== t && t,
                            a = o || null !== (r = null === (i = this._options.enabled_features) || void 0 === i ? void 0 : i.includes("iframe_loading_compatibility_mode")) && void 0 !== r && r,
                            [n, s] = this._render(!a, o),
                            l = this._options.container,
                            c = "string" == typeof l ? document.getElementById(l) : l;
                        if (null === c) throw Error("There is no such element - #".concat(this._options.container));
                        c.innerHTML = n, this._iFrame = c.querySelector("#".concat(this._id));
                        let h = this._iFrame;
                        o && await this._innerWindowEvent("sameOriginLoad"), a && (h.contentWindow ? (h.contentWindow.document.open(), h.contentWindow.document.write(s), h.contentWindow.document.close()) : console.warn("Unable to locate contentWindow for the created iframe. Please try disabling the `iframe_loading_compatibility_mode` featureset.")), this._innerWindow().addEventListener("innerWindowLoad", function(e, t) {
                            if (void 0 === e) throw Error("".concat(t, " is undefined"));
                            return e
                        }(this._innerWindowResolver, "_innerWindowResolver"), {
                            once: !0
                        }), (this._options.autosize || this._options.fullscreen) && (h.style.width = "100%", this._options.fullscreen || (h.style.height = "100%")), window.addEventListener("resize", this._onWindowResize), this._onWindowResize(), this._innerWindowLoaded.then(() => {
                            try {
                                this._innerWindow().widgetReady(() => {
                                    for (let e of (this._ready = !0, this._readyHandlers)) try {
                                        e.call(this)
                                    } catch (e) {
                                        console.error(e)
                                    }
                                    this._innerWindow().initializationFinished()
                                })
                            } catch (e) {
                                if (e instanceof Error && /widgetReady is not a function/.test(e.message)) throw Error("There was an error when loading the library. Usually this error means the library failed to load its static files. Check that the library files are available at ".concat(window.location.host, "/").concat(this._options.library_path || "", " or correct the library_path option."))
                            }
                        })
                    }
                    _innerWindowEvent(e) {
                        return new Promise(t => {
                            this._innerWindow().addEventListener(e, t, {
                                once: !0
                            })
                        })
                    }
                    _render(e, t) {
                        var i;
                        let r = window;
                        if (r[this._id] = {
                                datafeed: this._options.datafeed,
                                customFormatters: this._options.custom_formatters,
                                brokerFactory: this._options.broker_factory,
                                overrides: this._options.overrides,
                                studiesOverrides: this._options.studies_overrides,
                                tradingCustomization: this._options.trading_customization,
                                disabledFeatures: this._options.disabled_features,
                                enabledFeatures: this._options.enabled_features,
                                brokerConfig: this._options.broker_config || this._options.brokerConfig,
                                restConfig: this._options.restConfig,
                                favorites: this._options.favorites,
                                logo: this._options.logo,
                                numeric_formatting: this._options.numeric_formatting,
                                rss_news_feed: this._options.rss_news_feed,
                                rss_news_title: this._options.rss_news_title,
                                newsProvider: this._options.news_provider,
                                loadLastChart: this._options.load_last_chart,
                                saveLoadAdapter: this._options.save_load_adapter,
                                loading_screen: this._options.loading_screen,
                                settingsAdapter: this._options.settings_adapter,
                                getCustomIndicators: this._options.custom_indicators_getter,
                                additionalSymbolInfoFields: this._options.additional_symbol_info_fields,
                                headerWidgetButtonsMode: this._options.header_widget_buttons_mode,
                                customTranslateFunction: this._options.custom_translate_function,
                                symbolSearchComplete: this._options.symbol_search_complete,
                                contextMenu: this._options.context_menu,
                                settingsOverrides: this._options.settings_overrides,
                                timeframe: this._options.timeframe,
                                customTimezones: this._options.custom_timezones,
                                customChartDescriptionFunction: this._options.custom_chart_description_function,
                                customThemes: this._options.custom_themes
                            }, this._options.saved_data) r[this._id].chartContent = {
                            json: this._options.saved_data
                        }, this._options.saved_data_meta_info && (r[this._id].chartContentExtendedData = this._options.saved_data_meta_info);
                        else if (!this._options.load_last_chart && !this._options.symbol) throw Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");
                        if (this._options.library_path && !this._options.library_path.endsWith("/") && console.warn("library_path option should contain a trailing forward slash"), this._options.locale) {
                            let e = encodeURIComponent(this._options.locale);
                            tz.findIndex(t => t.language === e) >= 0 || (console.warn("locale isn't supported. Using default of `en`."), this._options.locale = "en")
                        }
                        let o = function(e, t) {
                                var i, r;
                                let o = new URL("".concat(e || ""), location.href).href,
                                    a = JSON.parse('["bundles/runtime.4d986d07cb97d8edacba.js","bundles/__LANG__.4026.6f886b4ecb915f046a50.js","bundles/9662.03109f673cda5962c847.css","bundles/7346.a2efeed47130dd4e832c.js","bundles/library.f5eaeb6901219f861981.js"]'),
                                    n = encodeURIComponent(t),
                                    s = null !== (r = tz.find(e => e.language === n)) && void 0 !== r ? r : {
                                        iso: "en",
                                        dir: "ltr"
                                    },
                                    l = 'lang="'.concat(s.iso, '" dir="').concat(s.dir, '"'),
                                    c = "\n".concat(function(e, t, i) {
                                        if (void 0 === e) return "";
                                        let r = [],
                                            o = [];
                                        for (let a of e) a.endsWith(".js") ? r.push('<script defer crossorigin="anonymous" src="'.concat(a.replace("__LANG__", i), '"></script>')) : a.endsWith(".css") && o.push('<link type="text/css" href="'.concat(t ? a.replace(/\.css$/i, ".rtl.css") : a, '" rel="stylesheet"/>'));
                                        return [...r, ...o].join("\n")
                                    }(a, "rtl" === s.dir, n), "\n");
                                return "<!DOCTYPE html><html ".concat((i = {
                                    bundles: c,
                                    localeLanguage: n,
                                    htmlAttrs: l,
                                    libraryPath: o
                                }).htmlAttrs, '><head><base href="').concat(i.libraryPath, '"><meta charset="utf-8"><script>window===window.parent&&(location.href="about:blank")</script> ').concat(i.bundles, ' </head><body class="chart-page unselectable on-widget"><div class="loading-indicator" id="loading-indicator"></div><script>var JSServer={},__initialEnabledFeaturesets=["charting_library"]</script><script>(function() {\n		window.urlParams = (function () {\n			var match,\n				pl	 = /\\+/g,  // Regex for replacing addition symbol with a space\n				search = /([^&=]+)=?([^&]*)/g,\n				decode = function (s) { return decodeURIComponent(s.replace(pl, \' \')).replace(/<\\/?[^>]+(>|$)/g, \'\'); },\n				query = function() {\n					// We don\'t use hash on the url because: safari 13 throws an error if you attempt this\n					// on a blob, and safari 14 will strip hash from blob urls.\n					if (frameElement && frameElement.dataset.widgetOptions) {\n						return frameElement.dataset.widgetOptions;\n					} else {\n						throw "Unexpected use of this page";\n					}\n				}(),\n				result = {};\n\n			while (match = search.exec(query)) {\n				result[decode(match[1])] = decode(match[2]);\n			}\n\n			var additionalSettingsObject = window.parent[result.uid];\n\n			var customObjectNames = [\'datafeed\', \'customFormatters\', \'brokerFactory\', \'save_load_adapter\', \'customTranslateFunction\', \'contextMenu\'];\n\n			for (var p in additionalSettingsObject) {\n				if (customObjectNames.indexOf(p) === -1) {\n					result[p] = JSON.stringify(additionalSettingsObject[p]);\n				}\n			}\n\n			return result;\n		})();\n\n		window.locale = urlParams.locale;\n		window.language = urlParams.locale; // a very big attention needed here\n		window.customTranslateFunction = window.parent[urlParams.uid].customTranslateFunction;\n		window.customChartDescriptionFunction = window.parent[urlParams.uid].customChartDescriptionFunction;\n\n		window.addCustomCSSFile = function(href) {\n			var link = document.createElement(\'link\');\n			link.setAttribute(\'type\', \'text/css\');\n			link.setAttribute(\'rel\', \'stylesheet\');\n			link.setAttribute(\'href\', href);\n			link.setAttribute(\'cross-origin\', \'anonymous\');\n\n			window.loadedCustomCss = new Promise((resolve) => {\n				link.onload = resolve;\n				link.onerror = resolve;\n			});\n			document.body.appendChild(link);\n		};\n\n		window.loadedCustomCss = Promise.resolve();\n		if (!!urlParams.customCSS) {\n			window.addCustomCSSFile(urlParams.customCSS);\n		}\n\n		var loadingScreenParams = {};\n\n		if (typeof urlParams.loading_screen === \'string\') {\n			try {\n				loadingScreenParams = JSON.parse(urlParams.loading_screen);\n			} catch(e) {}\n		}\n\n		var loadingIndicatorElement = document.getElementById(\'loading-indicator\');\n\n		if (loadingScreenParams.backgroundColor) {\n			loadingIndicatorElement.style = \'background-color: \' + loadingScreenParams.backgroundColor;\n		}\n\n		!function(){"use strict";var t,e=new WeakMap;!function(t){t[t.Element=1]="Element",t[t.Document=9]="Document"}(t||(t={}));var n={mini:"xsmall",xxsmall:"xxsmall",xsmall:"xsmall",small:"small",medium:"medium",large:"large"};var s,i,o,r,l,c=(void 0===l&&(l=""),s=\'<div class="tv-spinner \'.concat(l,\'" role="progressbar"></div>\'),o=function(n,s){var i,o;return i=null==s?document.documentElement:s.nodeType===t.Document?s.documentElement:s,e&&(o=e.get(i)),o||((o=i.ownerDocument.createRange()).selectNodeContents(i),e&&e.set(i,o)),o.createContextualFragment(n)}(s,i),null!==(r=o.firstElementChild)&&o.removeChild(r),r),a=function(){function t(t){this._shown=!1,this._el=c.cloneNode(!0),this.setSize(n[t||"large"])}return t.prototype.spin=function(t){return this._el.classList.add("tv-spinner--shown"),void 0===this._container&&(this._container=t,void 0!==t&&t.appendChild(this._el)),this._shown=!0,this},t.prototype.stop=function(t){return t&&void 0!==this._container&&this._container.removeChild(this._el),this._el&&this._el.classList.remove("tv-spinner--shown"),this._shown=!1,this},t.prototype.setStyle=function(t){var e=this;return Object.keys(t).forEach((function(n){var s=t[n];void 0!==s&&e._el.style.setProperty(n,s)})),this},t.prototype.style=function(){return this._el.style},t.prototype.setSize=function(t){var e=void 0!==t?"tv-spinner--size_".concat(t):"";return this._el.className="tv-spinner ".concat(e," ").concat(this._shown?"tv-spinner--shown":""),this},t.prototype.getEl=function(){return this._el},t.prototype.destroy=function(){this.stop(),delete this._el,delete this._container},t}();window.Spinner=a}();\n\n\n		var spinnerColor = (loadingScreenParams.foregroundColor) ? loadingScreenParams.foregroundColor : undefined;\n\n		var loadingSpinner = new Spinner(\'large\').setStyle({\n			\'--tv-spinner-color\': spinnerColor,\n			zIndex: String(2e9),\n		});\n		loadingSpinner.getEl().classList.add(\'spinner\');\n		loadingSpinner.spin(loadingIndicatorElement);\n	})();</script></body></html>')
                            }(this._options.library_path || "", this._options.locale),
                            a = new URL("about:blank");
                        if (e) {
                            let e = new Blob([o], {
                                    type: "text/html"
                                }),
                                t = URL.createObjectURL(e);
                            a = new URL(t)
                        } else t && (a = new URL((null !== (i = this._options.library_path) && void 0 !== i ? i : "/") + "sameorigin.html", location.origin));
                        let n = "symbol=" + encodeURIComponent(this._options.symbol || "") + "&interval=" + encodeURIComponent(this._options.interval) + (this._options.toolbar_bg ? "&toolbarbg=" + encodeURIComponent(this._options.toolbar_bg.replace("#", "")) : "") + (this._options.studies_access ? "&studiesAccess=" + encodeURIComponent(JSON.stringify(this._options.studies_access)) : "") + "&widgetbar=" + encodeURIComponent(JSON.stringify(this._options.widgetbar)) + (this._options.drawings_access ? "&drawingsAccess=" + encodeURIComponent(JSON.stringify(this._options.drawings_access)) : "") + "&timeFrames=" + encodeURIComponent(JSON.stringify(this._options.time_frames)) + "&locale=" + encodeURIComponent(this._options.locale) + "&uid=" + encodeURIComponent(this._id) + "&clientId=" + encodeURIComponent(String(this._options.client_id)) + "&userId=" + encodeURIComponent(String(this._options.user_id)) + (this._options.charts_storage_url ? "&chartsStorageUrl=" + encodeURIComponent(this._options.charts_storage_url) : "") + (this._options.charts_storage_api_version ? "&chartsStorageVer=" + encodeURIComponent(this._options.charts_storage_api_version) : "") + (this._options.custom_css_url ? "&customCSS=" + encodeURIComponent(this._options.custom_css_url) : "") + (this._options.custom_font_family ? "&customFontFamily=" + encodeURIComponent(this._options.custom_font_family) : "") + (this._options.auto_save_delay ? "&autoSaveDelay=" + encodeURIComponent(String(this._options.auto_save_delay)) : "") + "&debug=" + encodeURIComponent(String(this._options.debug)) + (this._options.debug_broker ? "&debugBroker=" + encodeURIComponent(String(this._options.debug_broker)) : "") + (this._options.snapshot_url ? "&snapshotUrl=" + encodeURIComponent(this._options.snapshot_url) : "") + (this._options.timezone ? "&timezone=" + encodeURIComponent(this._options.timezone) : "") + (this._options.study_count_limit ? "&studyCountLimit=" + encodeURIComponent(String(this._options.study_count_limit)) : "") + (this._options.symbol_search_request_delay ? "&ssreqdelay=" + encodeURIComponent(String(this._options.symbol_search_request_delay)) : "") + (this._options.compare_symbols ? "&compareSymbols=" + encodeURIComponent(JSON.stringify(this._options.compare_symbols)) : "") + (this._options.theme ? "&theme=" + encodeURIComponent(String(this._options.theme)) : "") + (this._options.header_widget_buttons_mode ? "&header_widget_buttons_mode=" + encodeURIComponent(String(this._options.header_widget_buttons_mode)) : "") + (this._options.time_scale ? "&time_scale=" + encodeURIComponent(JSON.stringify(this._options.time_scale)) : "");
                        return ['<iframe\n		id="'.concat(this._id, '" name="').concat(this._id, '" src="').concat(a.href, '" data-widget-options="').concat(n, '"\n		').concat(this._options.autosize || this._options.fullscreen ? "" : 'width="'.concat(this._options.width, '" height="').concat(this._options.height, '"'), ' title="Financial Chart" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;">\n	</iframe>'), o]
                    }
                    constructor(e) {
                        var t, i;
                        if (this._id = "tradingview_".concat((1048576 * (1 + Math.random()) | 0).toString(16).substring(1)), this._ready = !1, this._readyHandlers = [], this._onWindowResize = this._autoResizeChart.bind(this), !e.datafeed) throw Error("Datafeed is not defined");
                        (null === (t = e.overrides) || void 0 === t ? void 0 : t["mainSeriesProperties.priceAxisProperties.lockScale"]) && (console.warn("mainSeriesProperties.priceAxisProperties.lockScale can not be set to true within the widget constructor"), delete e.overrides["mainSeriesProperties.priceAxisProperties.lockScale"]), this._options = tx(tH, e), "dark" === (null !== (i = this._options.theme) && void 0 !== i ? i : "light").toLowerCase() && void 0 === this._options.loading_screen && (this._options.loading_screen = {
                            backgroundColor: "#131722"
                        }), (this._options.debug || this._options.debug_broker) && (tj || (tj = !0, console.log("Using CL v28.3.0 (internal id b985f2be @ 2024-10-24T17:11:08.681Z)"))), this._innerWindowLoaded = new Promise(e => {
                            this._innerWindowResolver = e
                        }), this._create()
                    }
                };
            window.TradingView = window.TradingView || {}, window.TradingView.version = function() {
                return "CL v28.3.0 (internal id b985f2be @ 2024-10-24T17:11:08.681Z)"
            };
            let tG = !(!window.navigator || !window.navigator.userAgent) && window.navigator.userAgent.includes("CriOS")
        }
    }
]);
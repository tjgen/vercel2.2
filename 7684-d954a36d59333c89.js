"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7684], {
        90649: function(e, t, a) {
            a.d(t, {
                Am: function() {
                    return u
                },
                pm: function() {
                    return m
                }
            });
            var o = a(11390);
            let n = 0,
                s = new Map,
                i = e => {
                    if (s.has(e)) return;
                    let t = setTimeout(() => {
                        s.delete(e), d({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    s.set(e, t)
                },
                r = (e, t) => {
                    switch (t.type) {
                        case "ADD_TOAST":
                            return { ...e,
                                toasts: [t.toast, ...e.toasts].slice(0, 1)
                            };
                        case "UPDATE_TOAST":
                            return { ...e,
                                toasts: e.toasts.map(e => e.id === t.toast.id ? { ...e,
                                    ...t.toast
                                } : e)
                            };
                        case "DISMISS_TOAST":
                            {
                                let {
                                    toastId: a
                                } = t;
                                return a ? i(a) : e.toasts.forEach(e => {
                                    i(e.id)
                                }),
                                { ...e,
                                    toasts: e.toasts.map(e => e.id === a || void 0 === a ? { ...e,
                                        open: !1
                                    } : e)
                                }
                            }
                        case "REMOVE_TOAST":
                            if (void 0 === t.toastId) return { ...e,
                                toasts: []
                            };
                            return { ...e,
                                toasts: e.toasts.filter(e => e.id !== t.toastId)
                            }
                    }
                },
                l = [],
                c = {
                    toasts: []
                };

            function d(e) {
                c = r(c, e), l.forEach(e => {
                    e(c)
                })
            }

            function u(e) {
                let { ...t
                } = e, a = (n = (n + 1) % Number.MAX_SAFE_INTEGER).toString(), o = () => d({
                    type: "DISMISS_TOAST",
                    toastId: a
                });
                return d({
                    type: "ADD_TOAST",
                    toast: { ...t,
                        id: a,
                        open: !0,
                        onOpenChange: e => {
                            e || o()
                        }
                    }
                }), {
                    id: a,
                    dismiss: o,
                    update: e => d({
                        type: "UPDATE_TOAST",
                        toast: { ...e,
                            id: a
                        }
                    })
                }
            }

            function m() {
                let [e, t] = o.useState(c);
                return o.useEffect(() => (l.push(t), () => {
                    let e = l.indexOf(t);
                    e > -1 && l.splice(e, 1)
                }), [e]), { ...e,
                    toast: u,
                    dismiss: e => d({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }
        },
        86653: function(e, t, a) {
            a.d(t, {
                AC: function() {
                    return c
                },
                ZM: function() {
                    return s
                },
                bn: function() {
                    return r
                },
                dW: function() {
                    return i
                },
                u8: function() {
                    return l
                },
                yw: function() {
                    return o
                },
                zn: function() {
                    return n
                }
            });
            let o = [{
                    type: "",
                    name: "All"
                }, {
                    type: "indicator",
                    name: "Indicator"
                }, {
                    type: "stats",
                    name: "Stats"
                }, {
                    type: "swap",
                    name: "Swap"
                }, {
                    type: "market",
                    name: "Market"
                }],
                n = [{
                    key: "priceChange",
                    title: "Price change (%)",
                    unit: "%"
                }, {
                    key: "volume",
                    title: "Volume ($)",
                    unit: "$"
                }, {
                    key: "volumeChange",
                    title: "Volume change (%)",
                    unit: "%"
                }, {
                    key: "buyingVolume",
                    title: "Buying volume ($)",
                    unit: "$"
                }, {
                    key: "buyingVolumeChange",
                    title: "Buying volume change (%)",
                    unit: "%"
                }, {
                    key: "sellingVolume",
                    title: "Selling volume ($)",
                    unit: "$"
                }, {
                    key: "sellingVolumeChange",
                    title: "Selling volume change (%)",
                    unit: "%"
                }, {
                    key: "trades",
                    title: "Trades",
                    unit: ""
                }, {
                    key: "tradesChange",
                    title: "Trades change (%)",
                    unit: "%"
                }, {
                    key: "liquidity",
                    title: "Liquidity($)",
                    unit: "$"
                }, {
                    key: "views",
                    title: "Views",
                    unit: ""
                }, {
                    key: "viewsChange",
                    title: "Views change (% )",
                    unit: "%"
                }],
                s = [{
                    name: "Value",
                    value: "value"
                }, {
                    name: "Price",
                    value: "price"
                }, {
                    name: "Volume",
                    value: "volume"
                }, {
                    name: "SMA",
                    value: "sma"
                }, {
                    name: "WMA",
                    value: "wma"
                }, {
                    name: "EMA",
                    value: "ema"
                }, {
                    name: "WEMA",
                    value: "wema"
                }, {
                    name: "RSI",
                    value: "rsi"
                }, {
                    name: "MACD",
                    value: "macd"
                }, {
                    name: "BB",
                    value: "bb"
                }, {
                    name: "Ichimoku",
                    value: "ichimoku"
                }, {
                    name: "Stochastic",
                    value: "stochastic"
                }],
                i = [{
                    name: "1m",
                    value: "1m"
                }, {
                    name: "3m",
                    value: "3m"
                }, {
                    name: "5m",
                    value: "5m"
                }, {
                    name: "15m",
                    value: "15m"
                }, {
                    name: "30m",
                    value: "30m"
                }, {
                    name: "1h",
                    value: "1H"
                }, {
                    name: "2h",
                    value: "2H"
                }, {
                    name: "4h",
                    value: "4H"
                }, {
                    name: "1D",
                    value: "1D"
                }, {
                    name: "1W",
                    value: "1W"
                }],
                r = [{
                    name: "crossing",
                    value: "crossing"
                }, {
                    name: "crossing up",
                    value: "crossingUp"
                }, {
                    name: "crossing down",
                    value: "crossingDown"
                }, {
                    name: "greater than",
                    value: "greater"
                }, {
                    name: "less than",
                    value: "less"
                }, {
                    name: "moving up",
                    value: "moveUp"
                }, {
                    name: "moving down",
                    value: "moveDown"
                }, {
                    name: "moving up (%)",
                    value: "movingUpPercent"
                }, {
                    name: "moving down (%)",
                    value: "movingDownPercent"
                }],
                l = {
                    price: {
                        title: "Price",
                        input: [],
                        options: []
                    },
                    volume: {
                        title: "Volume",
                        input: [],
                        options: [{
                            name: "Volume",
                            value: "volume"
                        }]
                    },
                    value: {
                        title: "Value",
                        input: [{
                            name: "Value",
                            value: "value",
                            type: "input",
                            dataType: "number"
                        }],
                        options: []
                    },
                    wma: {
                        title: "Weighted Moving Average",
                        input: [{
                            name: "Length",
                            value: "period",
                            type: "input",
                            dataType: "number"
                        }, {
                            name: "Source",
                            value: "source",
                            type: "input",
                            dataType: "text",
                            disabled: !0
                        }, {
                            name: "Offset",
                            value: "offset",
                            type: "input",
                            dataType: "number",
                            disabled: !0
                        }],
                        options: [{
                            name: "WMA",
                            value: "wma"
                        }]
                    },
                    sma: {
                        title: "Simple Moving Average",
                        input: [{
                            name: "Length",
                            value: "period",
                            type: "input",
                            dataType: "number"
                        }, {
                            name: "Source",
                            value: "source",
                            type: "input",
                            dataType: "text",
                            disabled: !0
                        }, {
                            name: "Offset",
                            value: "offset",
                            type: "input",
                            dataType: "number",
                            disabled: !0
                        }],
                        options: [{
                            name: "SMA",
                            value: "sma"
                        }]
                    },
                    ema: {
                        title: "Exponential Moving Average",
                        input: [{
                            name: "Length",
                            value: "period",
                            type: "input",
                            dataType: "number"
                        }, {
                            name: "Source",
                            value: "source",
                            type: "input",
                            dataType: "text",
                            disabled: !0
                        }, {
                            name: "Offset",
                            value: "offset",
                            type: "input",
                            dataType: "number",
                            disabled: !0
                        }],
                        options: [{
                            name: "EMA",
                            value: "ema"
                        }]
                    },
                    wema: {
                        title: "Weighted Exponential Moving Average",
                        input: [{
                            name: "Length",
                            value: "period",
                            type: "input",
                            dataType: "number"
                        }, {
                            name: "Source",
                            value: "source",
                            type: "input",
                            dataType: "text",
                            disabled: !0
                        }, {
                            name: "Offset",
                            value: "offset",
                            type: "input",
                            dataType: "number",
                            disabled: !0
                        }],
                        options: [{
                            name: "WEMA",
                            value: "wema"
                        }]
                    },
                    rsi: {
                        title: "Relative Strength Index",
                        input: [{
                            name: "Length",
                            value: "period",
                            type: "input",
                            dataType: "number"
                        }],
                        options: [{
                            name: "RSI",
                            value: "rsi"
                        }]
                    },
                    macd: {
                        title: "Moving Average Convergence Divergence",
                        input: [{
                            name: "FastLength",
                            value: "fastPeriod",
                            type: "input",
                            dataType: "number"
                        }, {
                            name: "SlowLength",
                            value: "slowPeriod",
                            type: "input",
                            dataType: "number"
                        }, {
                            name: "Source",
                            value: "source",
                            type: "input",
                            dataType: "text",
                            disabled: !0
                        }, {
                            name: "SignalLength",
                            value: "signalPeriod",
                            type: "input",
                            dataType: "number"
                        }],
                        options: [{
                            name: "MACD",
                            value: "macd"
                        }, {
                            name: "Signal",
                            value: "signal"
                        }, {
                            name: "Histogram",
                            value: "histogram"
                        }]
                    },
                    stochastic: {
                        title: "Stochastic",
                        input: [{
                            name: "Length",
                            value: "period",
                            type: "input",
                            dataType: "number"
                        }, {
                            name: "SignalLength",
                            value: "signalPeriod",
                            type: "input",
                            dataType: "number"
                        }],
                        options: [{
                            name: "K",
                            value: "k"
                        }, {
                            name: "D",
                            value: "d"
                        }]
                    },
                    bb: {
                        title: "Bollinger Bands",
                        input: [{
                            name: "Length",
                            value: "period",
                            type: "input",
                            dataType: "number"
                        }, {
                            name: "Mult",
                            value: "stdDev",
                            type: "input",
                            dataType: "number"
                        }],
                        options: [{
                            name: "Middle",
                            value: "middle"
                        }, {
                            name: "Upper",
                            value: "upper"
                        }, {
                            name: "Lower",
                            value: "lower"
                        }]
                    },
                    ichimoku: {
                        title: "Ichimoku",
                        input: [{
                            name: "Conversion Line Periods",
                            value: "conversionPeriod",
                            type: "input",
                            dataType: "number"
                        }, {
                            name: "Base Line Periods",
                            value: "basePeriod",
                            type: "input",
                            dataType: "number"
                        }, {
                            name: "Leading Span B",
                            value: "spanPeriod",
                            type: "input",
                            dataType: "number"
                        }, {
                            name: "Lagging Span",
                            value: "displacement",
                            type: "input",
                            dataType: "number"
                        }],
                        options: [{
                            name: "Conversion",
                            value: "conversion"
                        }, {
                            name: "Base",
                            value: "base"
                        }, {
                            name: "SpanA",
                            value: "spanA"
                        }, {
                            name: "SpanB",
                            value: "spanB"
                        }]
                    }
                },
                c = {
                    index1: "price",
                    ma_period1: 9,
                    ema_period1: 9,
                    wema_period1: 24,
                    sma_period1: 9,
                    wma_period1: 9,
                    bb_period1: 20,
                    rsi_period1: 14,
                    stochastic_period1: 14,
                    stochastic_signalPeriod1: 3,
                    bb_stdDev1: 2,
                    ma_source1: "close",
                    sma_source1: "close",
                    wma_source1: "close",
                    ema_source1: "close",
                    wema_source1: "close",
                    macd_source1: "close",
                    ma_offset1: 0,
                    sma_offset1: 0,
                    wma_offset1: 0,
                    ema_offset1: 0,
                    wema_offset1: 0,
                    option1: "",
                    macd_fastPeriod1: 12,
                    macd_slowPeriod1: 26,
                    macd_signalPeriod1: 9,
                    ichimoku_conversionPeriod1: 9,
                    ichimoku_basePeriod1: 26,
                    ichimoku_spanPeriod1: 52,
                    ichimoku_displacement1: 26,
                    price_period1: 10,
                    macd_fastPeriod2: 12,
                    macd_slowPeriod2: 26,
                    macd_signalPeriod2: 9,
                    ichimoku_conversionPeriod2: 9,
                    ichimoku_basePeriod2: 26,
                    ichimoku_spanPeriod2: 52,
                    ichimoku_displacement2: 26,
                    operator: "crossingUp",
                    index2: "value",
                    ma_period2: 24,
                    sma_period2: 24,
                    ema_period2: 24,
                    wema_period2: 24,
                    wma_period2: 24,
                    rsi_period2: 24,
                    bb_period2: 20,
                    stochastic_period2: 20,
                    stochastic_signalPeriod2: 3,
                    bb_stdDev2: 1,
                    option2: "",
                    ma_source2: "close",
                    sma_source2: "close",
                    wma_source2: "close",
                    ema_source2: "close",
                    wema_source2: "close",
                    macd_source2: "close",
                    ma_offset2: 0,
                    sma_offset2: 0,
                    wma_offset2: 0,
                    ema_offset2: 0,
                    wema_offset2: 0,
                    price_period2: 10,
                    bar: 2
                }
        },
        82269: function(e, t, a) {
            a.d(t, {
                eG: function() {
                    return o
                },
                p5: function() {
                    return r
                },
                tH: function() {
                    return n
                },
                Zj: function() {
                    return s.Zj
                },
                yH: function() {
                    return i.y
                }
            });
            let o = {
                    id: 56,
                    name: "BNB Chain",
                    network: "bsc",
                    tags: ["evm"],
                    logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/bsc.png",
                    nativeCurrency: {
                        decimals: 18,
                        name: "BNB",
                        symbol: "BNB",
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/bsc.png"
                    },
                    wrapNativeCurrency: {
                        decimals: 18,
                        name: "Wrapped BNB",
                        symbol: "WBNB",
                        address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                        logoURI: "https://assets.coingecko.com/coins/images/12591/small/binance-coin-logo.png?1600947313"
                    },
                    networkFeeCurrency: {
                        decimals: 18,
                        name: "BNB",
                        symbol: "BNB",
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/bsc.png"
                    },
                    stableCurrency: {
                        "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3": {
                            name: "Binance-Peg Dai Token",
                            symbol: "DAI",
                            decimals: 18,
                            address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3"
                        },
                        "0x55d398326f99059fF775485246999027B3197955": {
                            name: "Binance-Peg BSC-USD",
                            symbol: "USDT",
                            decimals: 18,
                            address: "0x55d398326f99059fF775485246999027B3197955",
                            logoURI: "https://assets.coingecko.com/coins/images/325/small/Tether.png?1668148663"
                        },
                        "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d": {
                            name: "Binance-Peg USD Coin",
                            symbol: "USDC",
                            decimals: 18,
                            address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
                        }
                    },
                    rpcUrls: {
                        default: {
                            http: ["https://rpc.ankr.com/bsc"]
                        },
                        public: {
                            http: ["https://rpc.ankr.com/bsc"]
                        }
                    },
                    blockExplorers: {
                        bscscan: {
                            name: "BscScan",
                            url: "https://bscscan.com",
                            icon: "/scan/bscscan.png"
                        },
                        default: {
                            name: "BscScan",
                            url: "https://bscscan.com",
                            icon: "/scan/bscscan.png"
                        }
                    },
                    contracts: {
                        multicall3: {
                            address: "0xca11bde05977b3631167028862be2a173976ca11",
                            blockCreated: 15921452
                        }
                    },
                    blockConfirmationNum: 15,
                    tokenStandard: "BEP20"
                },
                n = {
                    id: 1,
                    network: "ethereum",
                    name: "Ethereum",
                    tags: ["evm"],
                    logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/ethereum.png",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18,
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "/images/eth.webp"
                    },
                    wrapNativeCurrency: {
                        name: "Wrapped Ether",
                        symbol: "WETH",
                        decimals: 18,
                        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                        logoURI: "https://assets.coingecko.com/coins/images/2518/small/weth.png?1628852295"
                    },
                    networkFeeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18,
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "/images/eth.webp"
                    },
                    stableCurrency: {
                        "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
                            name: "Dai Stablecoin",
                            symbol: "DAI",
                            decimals: 18,
                            address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                            logoURI: "/images/dai.webp"
                        },
                        "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
                            name: "Tether USD",
                            symbol: "USDT",
                            decimals: 6,
                            address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                            logoURI: "/images/usdt.webp"
                        },
                        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
                            name: "USD Coin",
                            symbol: "USDC",
                            decimals: 6,
                            address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                            logoURI: "/images/usdc.webp"
                        }
                    },
                    rpcUrls: {
                        alchemy: {
                            http: ["https://eth-mainnet.g.alchemy.com/v2"],
                            webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"]
                        },
                        infura: {
                            http: ["https://mainnet.infura.io/v3"],
                            webSocket: ["wss://mainnet.infura.io/ws/v3"]
                        },
                        default: {
                            http: ["https://cloudflare-eth.com"]
                        },
                        public: {
                            http: ["https://cloudflare-eth.com"]
                        }
                    },
                    blockExplorers: {
                        etherscan: {
                            name: "Etherscan",
                            url: "https://etherscan.io",
                            icon: "/scan/etherscan.png"
                        },
                        default: {
                            name: "Etherscan",
                            url: "https://etherscan.io",
                            icon: "/scan/etherscan.png"
                        }
                    },
                    contracts: {
                        ensRegistry: {
                            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                        },
                        ensUniversalResolver: {
                            address: "0x74E20Bd2A1fE0cdbe45b9A1d89cb7e0a45b36376",
                            blockCreated: 16172161
                        },
                        multicall3: {
                            address: "0xca11bde05977b3631167028862be2a173976ca11",
                            blockCreated: 14353601
                        }
                    },
                    blockConfirmationNum: 6,
                    tokenStandard: "ERC20"
                };
            var s = a(39070),
                i = a(47383);
            let r = {
                all: {
                    id: 0,
                    name: "All Chains",
                    network: "all",
                    tags: ["all"],
                    logoURI: "/images/global-icon.svg",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18,
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
                    },
                    wrapNativeCurrency: {
                        name: "Wrapped Ether",
                        symbol: "WETH",
                        decimals: 18,
                        address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"
                    },
                    networkFeeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18,
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
                    },
                    stableCurrency: {
                        "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
                            name: "Dai Stablecoin",
                            symbol: "DAI",
                            decimals: 18,
                            address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
                        },
                        "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
                            name: "Tether USD",
                            symbol: "USDT",
                            decimals: 6,
                            address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
                        },
                        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
                            name: "USD Coin",
                            symbol: "USDC",
                            decimals: 6,
                            address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                        }
                    },
                    rpcUrls: {
                        alchemy: {
                            http: [],
                            webSocket: []
                        },
                        infura: {
                            http: [""],
                            webSocket: [""]
                        },
                        default: {
                            http: [""]
                        },
                        public: {
                            http: [""]
                        }
                    },
                    blockExplorers: {
                        etherscan: {
                            name: "",
                            url: ""
                        },
                        default: {
                            name: "",
                            url: ""
                        }
                    },
                    contracts: {
                        multicall3: {
                            address: "0xca11bde05977b3631167028862be2a173976ca11",
                            blockCreated: 7654707
                        }
                    }
                },
                arbitrum: {
                    id: 42161,
                    name: "Arbitrum",
                    network: "arbitrum",
                    tags: ["evm"],
                    logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/arbitrum.png",
                    nativeCurrency: {
                        name: "Arbitrum",
                        symbol: "ARB",
                        decimals: 18,
                        address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
                        logoURI: "https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg?1680097630"
                    },
                    networkFeeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18,
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "/images/eth.webp"
                    },
                    wrapNativeCurrency: {
                        name: "Wrapped Ether",
                        symbol: "WETH",
                        decimals: 18,
                        address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
                        logoURI: "https://assets.coingecko.com/coins/images/2518/small/weth.png?1628852295"
                    },
                    stableCurrency: {
                        "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1": {
                            name: "Dai Stablecoin",
                            symbol: "DAI",
                            decimals: 18,
                            address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
                            logoURI: "/images/dai.webp"
                        },
                        "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9": {
                            name: " Tether USD",
                            symbol: "USDT",
                            decimals: 6,
                            address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
                            logoURI: "/images/usdt.webp"
                        }
                    },
                    rpcUrls: {
                        alchemy: {
                            http: ["https://arb-mainnet.g.alchemy.com/v2"],
                            webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"]
                        },
                        infura: {
                            http: ["https://arbitrum-mainnet.infura.io/v3"],
                            webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"]
                        },
                        default: {
                            http: ["https://arb1.arbitrum.io/rpc"]
                        },
                        public: {
                            http: ["https://arb1.arbitrum.io/rpc"]
                        }
                    },
                    blockExplorers: {
                        arbiscan: {
                            name: "Arbiscan",
                            url: "https://arbiscan.io",
                            icon: "/scan/arbiscan.png"
                        },
                        default: {
                            name: "Arbiscan",
                            url: "https://arbiscan.io",
                            icon: "/scan/arbiscan.png"
                        }
                    },
                    contracts: {
                        multicall3: {
                            address: "0xca11bde05977b3631167028862be2a173976ca11",
                            blockCreated: 7654707
                        }
                    }
                },
                avalanche: {
                    id: 43114,
                    name: "Avalanche",
                    network: "avalanche",
                    tags: ["evm"],
                    logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/avalanche.png",
                    nativeCurrency: {
                        decimals: 18,
                        name: "Avalanche",
                        symbol: "AVAX",
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "https://assets.coingecko.com/coins/images/15075/small/wrapped-avax.png?1629873618"
                    },
                    wrapNativeCurrency: {
                        decimals: 18,
                        name: "Wrapped AVAX",
                        symbol: "WAVAX",
                        address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
                        logoURI: "https://assets.coingecko.com/coins/images/15075/small/wrapped-avax.png?1629873618"
                    },
                    networkFeeCurrency: {
                        decimals: 18,
                        name: "Avalanche",
                        symbol: "AVAX",
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "https://assets.coingecko.com/coins/images/15075/small/wrapped-avax.png?1629873618"
                    },
                    stableCurrency: {
                        "0xc7198437980c041c805A1EDcbA50c1Ce5db95118": {
                            name: " Tether USD",
                            symbol: "USDT.e",
                            decimals: 6,
                            address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118"
                        },
                        "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664": {
                            name: " USD Coin",
                            symbol: "USDC.e",
                            decimals: 6,
                            address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664"
                        }
                    },
                    rpcUrls: {
                        public: {
                            http: ["https://api.avax.network/ext/bc/C/rpc"]
                        },
                        default: {
                            http: ["https://api.avax.network/ext/bc/C/rpc"]
                        }
                    },
                    blockExplorers: {
                        avascan: {
                            name: "Avascan",
                            url: "https://avascan.info/blockchain/c",
                            icon: "/scan/avascan.svg"
                        },
                        default: {
                            name: "Avascan",
                            url: "https://avascan.info/blockchain/c",
                            icon: "/scan/avascan.svg"
                        }
                    },
                    contracts: {
                        multicall3: {
                            address: "0xca11bde05977b3631167028862be2a173976ca11",
                            blockCreated: 11907934
                        }
                    }
                },
                base: {
                    id: 8453,
                    network: "base",
                    name: "Base",
                    tags: ["evm"],
                    logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/base.jpeg",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18,
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "/images/eth.webp"
                    },
                    wrapNativeCurrency: {
                        name: "Wrapped Ether",
                        symbol: "WETH",
                        decimals: 18,
                        address: "0x4200000000000000000000000000000000000006",
                        logoURI: "https://assets.coingecko.com/coins/images/2518/small/weth.png?1628852295"
                    },
                    networkFeeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18,
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "/images/eth.webp"
                    },
                    stableCurrency: {
                        "0x50c5725949a6f0c72e6c4a641f24049a917db0cb": {
                            name: "(PoS) Dai Stablecoin",
                            symbol: "DAI",
                            decimals: 18,
                            address: "0x50c5725949a6f0c72e6c4a641f24049a917db0cb"
                        },
                        "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": {
                            name: "USD Coin",
                            symbol: "USDC",
                            decimals: 6,
                            address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
                        }
                    },
                    rpcUrls: {
                        default: {
                            http: ["https://developer-access-mainnet.base.org"]
                        },
                        public: {
                            http: ["https://developer-access-mainnet.base.org"]
                        }
                    },
                    blockExplorers: {
                        basescan: {
                            name: "BaseScan",
                            url: "https://basescan.org",
                            icon: "/scan/etherscan.png"
                        },
                        blockscout: {
                            name: "Blockscout",
                            url: "https://base.blockscout.com",
                            icon: "/scan/blockscout.svg"
                        },
                        default: {
                            name: "BaseScan",
                            url: "https://basescan.org",
                            icon: "/scan/etherscan.png"
                        }
                    },
                    contracts: {
                        multicall3: {
                            address: "0xca11bde05977b3631167028862be2a173976ca11",
                            blockCreated: 5022
                        }
                    }
                },
                bsc: o,
                ethereum: n,
                optimism: {
                    id: 10,
                    name: "Optimism",
                    network: "optimism",
                    tags: ["evm"],
                    logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/optimism.png",
                    nativeCurrency: {
                        name: "Optimism",
                        symbol: "OP",
                        decimals: 18,
                        address: "0x4200000000000000000000000000000000000042"
                    },
                    networkFeeCurrency: {
                        name: "Ethereum",
                        symbol: "ETH",
                        decimals: 18,
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "/images/eth.webp"
                    },
                    wrapNativeCurrency: {
                        name: "Wrapped Ether",
                        symbol: "WETH",
                        decimals: 18,
                        address: "0x4200000000000000000000000000000000000006",
                        logoURI: "https://assets.coingecko.com/coins/images/2518/small/weth.png?1628852295"
                    },
                    stableCurrency: {
                        "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1": {
                            name: "Dai Stablecoin",
                            symbol: "DAI",
                            decimals: 18,
                            address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
                        },
                        "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58": {
                            name: "Tether USD",
                            symbol: "USDT",
                            decimals: 6,
                            address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"
                        }
                    },
                    rpcUrls: {
                        alchemy: {
                            http: ["https://opt-mainnet.g.alchemy.com/v2"],
                            webSocket: ["wss://opt-mainnet.g.alchemy.com/v2"]
                        },
                        infura: {
                            http: ["https://optimism-mainnet.infura.io/v3"],
                            webSocket: ["wss://optimism-mainnet.infura.io/ws/v3"]
                        },
                        default: {
                            http: ["https://mainnet.optimism.io"]
                        },
                        public: {
                            http: ["https://mainnet.optimism.io"]
                        }
                    },
                    blockExplorers: {
                        etherscan: {
                            name: "Optimism Etherscan",
                            url: "https://optimistic.etherscan.io",
                            icon: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/optimism.png"
                        },
                        default: {
                            name: "Optimism Etherscan",
                            url: "https://optimistic.etherscan.io",
                            icon: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/optimism.png"
                        }
                    },
                    contracts: {
                        multicall3: {
                            address: "0xca11bde05977b3631167028862be2a173976ca11",
                            blockCreated: 4286263
                        }
                    }
                },
                polygon: {
                    id: 137,
                    name: "Polygon",
                    network: "polygon",
                    tags: ["evm"],
                    logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/polygon.png",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18,
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/polygon.png"
                    },
                    wrapNativeCurrency: {
                        name: "Wrapped Matic",
                        symbol: "WMATIC",
                        decimals: 18,
                        address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
                        logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/polygon.png"
                    },
                    networkFeeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18,
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/polygon.png"
                    },
                    stableCurrency: {
                        "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
                            name: "(PoS) Dai Stablecoin",
                            symbol: "DAI",
                            decimals: 18,
                            address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
                        },
                        "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
                            name: "(PoS) Tether USD",
                            symbol: "USDT",
                            decimals: 6,
                            address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
                        },
                        "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
                            name: "USD Coin (PoS)",
                            symbol: "USDC",
                            decimals: 6,
                            address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
                        }
                    },
                    rpcUrls: {
                        alchemy: {
                            http: ["https://polygon-mainnet.g.alchemy.com/v2"],
                            webSocket: ["wss://polygon-mainnet.g.alchemy.com/v2"]
                        },
                        infura: {
                            http: ["https://polygon-mainnet.infura.io/v3"],
                            webSocket: ["wss://polygon-mainnet.infura.io/ws/v3"]
                        },
                        default: {
                            http: ["https://polygon-rpc.com"]
                        },
                        public: {
                            http: ["https://polygon-rpc.com"]
                        }
                    },
                    blockExplorers: {
                        polygonscan: {
                            name: "PolygonScan",
                            url: "https://polygonscan.com",
                            icon: "/scan/polygonscan.svg"
                        },
                        default: {
                            name: "PolygonScan",
                            url: "https://polygonscan.com",
                            icon: "/scan/polygonscan.svg"
                        }
                    },
                    contracts: {
                        multicall3: {
                            address: "0xca11bde05977b3631167028862be2a173976ca11",
                            blockCreated: 25770160
                        }
                    }
                },
                solana: s.Zj,
                sui: i.y,
                zksync: {
                    id: 324,
                    name: "zkSync Era",
                    network: "zksync",
                    tags: ["evm"],
                    logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/zksync.jpeg",
                    nativeCurrency: {
                        decimals: 18,
                        name: "zkSync",
                        symbol: "ZK",
                        address: "0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E"
                    },
                    wrapNativeCurrency: {
                        name: "Wrapped Ether",
                        symbol: "WETH",
                        decimals: 18,
                        address: "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91"
                    },
                    networkFeeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18,
                        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        logoURI: "/images/eth.webp"
                    },
                    stableCurrency: {
                        "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4": {
                            name: "USD Coin",
                            symbol: "USDC",
                            decimals: 6,
                            address: "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4"
                        }
                    },
                    rpcUrls: {
                        default: {
                            http: ["https://mainnet.era.zksync.io"],
                            webSocket: ["wss://mainnet.era.zksync.io/ws"]
                        },
                        public: {
                            http: ["https://mainnet.era.zksync.io"],
                            webSocket: ["wss://mainnet.era.zksync.io/ws"]
                        }
                    },
                    blockExplorers: {
                        default: {
                            name: "zkSync Era Block Explorer",
                            url: "https://explorer.zksync.io",
                            icon: "/scan/zkSyncEra.png"
                        },
                        zkexplorer: {
                            name: "zkSync Era Block Explorer",
                            url: "https://explorer.zksync.io",
                            icon: "/scan/zkSyncEra.png"
                        }
                    },
                    contracts: {
                        multicall3: {
                            address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
                        }
                    }
                }
            }
        },
        47383: function(e, t, a) {
            a.d(t, {
                y: function() {
                    return o
                }
            });
            let o = {
                id: 7565165,
                name: "Sui",
                network: "sui",
                tags: ["sui"],
                logoURI: "https://raw.githubusercontent.com/birdeye-so/birdeye-ads/main/network/sui.png",
                nativeCurrency: {
                    decimals: 9,
                    name: "Sui",
                    symbol: "SUI",
                    address: "0x2::sui::SUI",
                    logoURI: "https://assets.coingecko.com/coins/images/26375/small/sui_asset.jpeg?1696525453"
                },
                wrapNativeCurrency: {
                    decimals: 9,
                    name: "Sui",
                    symbol: "SUI",
                    address: "0x2::sui::SUI",
                    logoURI: "https://assets.coingecko.com/coins/images/26375/small/sui_asset.jpeg?1696525453"
                },
                networkFeeCurrency: {
                    decimals: 9,
                    name: "Sui",
                    symbol: "SUI",
                    address: "0x2::sui::SUI",
                    logoURI: "https://assets.coingecko.com/coins/images/26375/small/sui_asset.jpeg?1696525453"
                },
                stableCurrency: {
                    "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC": {
                        name: "USDC",
                        symbol: "USDC",
                        decimals: 6,
                        address: "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC",
                        logoURI: "/images/usdc.webp"
                    }
                },
                rpcUrls: {
                    default: {
                        http: [],
                        webSocket: []
                    },
                    public: {
                        http: [],
                        webSocket: []
                    }
                },
                blockExplorers: {
                    default: {
                        name: "SuiVision",
                        url: "https://suivision.xyz",
                        icon: "/scan/suivision.svg"
                    },
                    suivision: {
                        name: "SuiVision",
                        url: "https://suivision.xyz",
                        icon: "/scan/suivision.svg"
                    },
                    suiscan: {
                        name: "Suiscan",
                        url: "https://suiscan.xyz/mainnet",
                        icon: "/scan/suiscan.svg"
                    }
                },
                contracts: {}
            }
        },
        5628: function(e, t, a) {
            a.d(t, {
                Nc: function() {
                    return o
                },
                V5: function() {
                    return i
                },
                ot: function() {
                    return r
                },
                td: function() {
                    return s
                },
                vC: function() {
                    return n
                }
            });
            let o = {
                    "24h": {
                        label: "24H",
                        value: "24h"
                    },
                    "8h": {
                        label: "8H",
                        value: "8h"
                    },
                    "4h": {
                        label: "4H",
                        value: "4h"
                    },
                    "2h": {
                        label: "2H",
                        value: "2h"
                    },
                    "1h": {
                        label: "1H",
                        value: "1h"
                    },
                    "30m": {
                        label: "30m",
                        value: "30m"
                    }
                },
                n = {
                    views: {
                        label: "Top Views",
                        filter: "views",
                        value: "vies",
                        operator: "sort",
                        dir: "desc"
                    },
                    watch: {
                        label: "Top Watchers",
                        filter: "watch",
                        value: "watch",
                        operator: "sort",
                        dir: "desc"
                    },
                    txns: {
                        label: "Tops Txns",
                        filter: "txns",
                        value: "txns",
                        operator: "sort",
                        dir: "desc"
                    },
                    mc: {
                        label: "Nano Cap",
                        filter: "mc",
                        value: "mc",
                        operator: "strictCmp",
                        max: "10000000",
                        tooltip: "FDMC < $10M"
                    }
                },
                s = {
                    sort_by: "trendNo24h",
                    sort_type: "asc",
                    page: "find-gems",
                    limit: 15,
                    offset: 0,
                    query: [],
                    export: !1
                },
                i = {
                    sort_by: "v24hUSD",
                    sort_type: "desc",
                    page: "home",
                    limit: 10,
                    offset: 0,
                    query: [],
                    export: !1
                },
                r = {
                    address: "Token",
                    trendNo24h: "Trending",
                    price: "Price",
                    priceChange: "Price Chg",
                    volume: "Volume",
                    volumeChange: "Volume Chg",
                    txns: "Txns",
                    txnsChange: "Txns Chg",
                    traders: "Traders",
                    views: "Views",
                    viewsChange: "Views Chg",
                    watch: "Watchers",
                    holder: "Holders",
                    liquidity: "Liquidity",
                    numberMarkers: "Markets",
                    supply: "Total Supply",
                    mc: "FDMC"
                }
        },
        20560: function(e, t, a) {
            a.d(t, {
                D: function() {
                    return l
                },
                U: function() {
                    return r
                }
            });
            var o = a(29762),
                n = a(44492),
                s = a(26681),
                i = a(58022);
            let r = ["find-gems", "trader-board", "new-listings"],
                l = {
                    jupiter: {
                        name: "Jupiter",
                        value: "jupiter",
                        logoURI: i.default
                    },
                    oneInch: {
                        name: "1inch",
                        value: "1inch",
                        logoURI: o.default.src
                    },
                    flowX: {
                        name: "FlowX",
                        value: "flowX",
                        logoURI: s.default.src
                    },
                    aftermath: {
                        name: "Aftermath",
                        value: "aftermath",
                        logoURI: n.default.src
                    }
                }
        },
        4643: function(e, t, a) {
            a.d(t, {
                bm: function() {
                    return p
                },
                HO: function() {
                    return b
                },
                jJ: function() {
                    return w.jJ
                },
                dc: function() {
                    return y
                },
                V5: function() {
                    return l.V5
                },
                Ri: function() {
                    return g
                },
                DA: function() {
                    return h
                },
                iB: function() {
                    return i
                },
                Fe: function() {
                    return d.F
                },
                kQ: function() {
                    return f
                },
                D7: function() {
                    return w.D7
                },
                jQ: function() {
                    return s
                },
                vC: function() {
                    return l.vC
                },
                DW: function() {
                    return c.D
                },
                a3: function() {
                    return v.a3
                },
                Gh: function() {
                    return w.Gh
                },
                eG: function() {
                    return r.eG
                },
                p5: function() {
                    return r.p5
                },
                tH: function() {
                    return r.tH
                },
                Zj: function() {
                    return r.Zj
                },
                sui: function() {
                    return r.yH
                }
            });
            var o, n, s, i, r = a(82269),
                l = a(5628),
                c = a(20560),
                d = a(93165);
            (o = s || (s = {})).TOKEN = "token", o.WALLET = "wallet", o.COMPLEX = "complex", (n = i || (i = {})).TOKEN_INFO = "token-info", n.TOKEN_OVERVIEW = "token-overview";
            let u = {
                    primaryColor: "#242322",
                    secondaryColor: "#353231"
                },
                m = {
                    primaryColor: "#EEEDED",
                    secondaryColor: "#D6D4D4"
                },
                p = {
                    "#FAB558": u,
                    "#844E15": m,
                    "#FF6D00": u,
                    "#CB3713": m,
                    "#EB5872": u,
                    "#86B672": m,
                    "#0A87D9": u,
                    "#006B8B": m,
                    "#064379": m,
                    "#7DC5DE": u,
                    "#9970BF": u,
                    "#99A1E2": u,
                    "#E7A0E6": u,
                    "#4344BA": m,
                    "#D6D4D4": u,
                    "#858281": u,
                    "#514D4B": m,
                    "#353231": m
                },
                b = Object.keys(p),
                h = {
                    "token-info": {
                        headerTitle: "Token Info",
                        headerDescription: "",
                        headerColor: b[0]
                    },
                    "token-overview": {
                        headerTitle: "Token Overview",
                        headerDescription: "View the latest information about your token.",
                        headerColor: b[2]
                    }
                },
                g = {
                    "token-info": {
                        x: 0,
                        y: 0,
                        w: 4,
                        h: 3
                    },
                    "token-overview": {
                        w: 6,
                        h: 3
                    }
                },
                f = ["#42AAFF", "#F94A29", "#BFDB38", "#569DAA", "#FF8585", "#F96D28", "#2ba7ae", "#8a54f3", "#7FDBFF", "#0A425A", "#218A71", "#FEF5C0", "#FBB202", "#FFDC00", "#FF4136", "#2ECC40", "#F012BE", "#01FF70", "#FF851B", "#39CCCC", "#85144b", "#3D9970", "#B10DC9", "#2E3192", "#01A2A6", "#F012BE", "#DDDDDD", "#FFDC00", "#AAAAAA", "#F012BE", "#DDDDDD", "#FFDC00"],
                y = {
                    binance: "/exchange/binance-logo.webp",
                    binanceus: "/exchange/binance-logo.webp",
                    okx: "/exchange/okex-logo.webp",
                    bybit: "/exchange/bybit-logo.webp",
                    coinbase: "/exchange/coinbase-logo.webp",
                    "gate.io": "/exchange/gate-logo.webp",
                    mexc: "/exchange/mexc-logo.webp",
                    kraken: "/exchange/kraken-logo.webp",
                    bitmart: "/exchange/bitmart-logo.webp",
                    bitget: "/exchange/bitget-logo.webp",
                    bingx: "/exchange/bingx-logo.webp",
                    htx: "/exchange/htx-logo.webp",
                    toobit: "/exchange/toobit-logo.webp"
                };
            var v = a(95934),
                w = a(25262)
        },
        93165: function(e, t, a) {
            var o, n;
            a.d(t, {
                F: function() {
                    return o
                }
            }), (n = o || (o = {})).USER_INFO = "userInfo", n.WATCHLIST_ID = "watchlistId"
        },
        95934: function(e, t, a) {
            var o, n;
            a.d(t, {
                Uf: function() {
                    return r
                },
                XZ: function() {
                    return i
                },
                a3: function() {
                    return s
                },
                d1: function() {
                    return l
                },
                oq: function() {
                    return o
                }
            });
            let s = {
                is_open_source: {
                    label: "Open Source",
                    tooltip: "Unverified contracts may hide various unknown mechanisms and are extremely risky."
                },
                is_honeypot: {
                    label: "Honeypot",
                    tooltip: "If a token is Honeypot, very high chance it is a scam. Buyers may not be able to sell this token, or the token contains malicious code. "
                },
                buy_tax: {
                    label: "Buy Tax",
                    tooltip: "Buy tax will cause the actual value received when buying a token to be less than expected, and too much buy tax may lead to heavy losses."
                },
                sell_tax: {
                    label: "Sell Tax",
                    tooltip: "Sell tax will cause the actual value received when selling a token to be less than expected, and too much buy tax may lead to large losses."
                },
                is_proxy: {
                    label: "Proxy Contract",
                    tooltip: "Proxy contracts can be accompanied by modifiable implementation contracts, which may cause significant potential risk."
                },
                is_mintable: {
                    label: "Mint Function",
                    tooltip: "Mint function enables contract owner to issue more tokens and cause the coin price to plummet. It is extremely risky. However if ownership is renounced, or is changed to a burn address, this function will be disabled."
                },
                can_take_back_ownership: {
                    label: "Take Back Ownership",
                    tooltip: "It describes whether this contract has the function to take back ownership."
                },
                owner_change_balance: {
                    label: "Change Holder Balance",
                    tooltip: "It describes the owner can modify anyone's balance, resulting in an asset straight to zero or a massive minting and sell-off."
                },
                hidden_owner: {
                    label: "Hidden Owner",
                    tooltip: "Hidden owner is often used by developers to hide ownership and is often accompanied by malicious functionality. When the hidden owner exists, it is assumed that ownership has not been abandoned."
                },
                selfdestruct: {
                    label: "Self-destruct",
                    tooltip: "When the self-destruct function is triggered, this contract will be destroyed, all functions will be unavailable, and all related assets will be erased."
                },
                external_call: {
                    label: "External Call",
                    tooltip: "External call would cause the implementation of this contract to be highly dependent on other external contracts, which may be a potential risk."
                },
                cannot_buy: {
                    label: "Cannot Be Bought"
                },
                cannot_sell_all: {
                    label: "Cannot Sell All",
                    tooltip: "Holders will not be able to sell all of their tokens in a single sale. Sometimes you need to leave a certain percentage of the token, e.g. 10%, sometimes you need to leave a fixed number of token, such as 10 token."
                },
                slippage_modifiable: {
                    label: "Modifiable Tax",
                    tooltip: "The contract owner can modify the buy tax or sell tax of the token. Some contracts have unlimited modifiable tax rates, which would make the token untradeable. "
                },
                transfer_pausable: {
                    label: "Pausable Transfer",
                    tooltip: "If yes, this means that the contract owner is able to suspend trading at any time, after that no one is able to sell, except those with special authority."
                },
                is_blacklisted: {
                    label: "Blacklist",
                    tooltip: "The contract owner may add any address into the blacklist, and the token holder in blacklist will not be able to trade."
                },
                is_whitelisted: {
                    label: "Whitelist",
                    tooltip: "The contract owner can allow specific addresses to make early transactions, tax-free, and not affected by transaction suspension."
                },
                is_anti_whale: {
                    label: "Anti Whale",
                    tooltip: "If YES, the contract owner can limit the maximum amount of transactions or the maximum token position of a single address."
                },
                anti_whale_modifiable: {
                    label: "Modifiable Anti Whale",
                    tooltip: "If YES, the contract owner can modify the maximum amount of transactions or the maximum token position of a single address."
                },
                trading_cooldown: {
                    label: "Cooldown Time",
                    tooltip: "If YES, the contract owner can limit the minimum time between two transactions."
                },
                personal_slippage_modifiable: {
                    label: "Modifiable Slippage",
                    tooltip: "If YES, the contract owner can set a different tax rate for every assigned address."
                },
                is_true_token: {
                    label: "True/Fake Token",
                    tooltip: "Whether the token is true or fake."
                },
                is_airdrop_scam: {
                    label: "Airdrop Scam",
                    tooltip: "If YES, this is an airdrop scam."
                }
            };
            (n = o || (o = {})).honeypot = "Honeypot detected! Buyers of this token may not be able to sell.", n.fake_token = "ALERT! This token imitates another similar token. Trading or holding this asset are NOT RECOMMENDED!", n.airdrop_scam = "This token seems to be an airdrop scam. Please be cautious and verify the security details carefully!", n.owner_change_balance = "The contract owner of this token can change balance of the holders at their will. Please be cautious and verify the security details carefully!", n.high_sell_tax = "This token applies significantly HIGH SELL TAX. Please be cautious and verify the security details carefully!", n.high_buy_tax = "This token applies significantly HIGH BUY TAX. Please be cautious and verify the security details carefully!", n.not_open_source = "This token contract has not been verified! It may have hidden malicious functions which are extremely risky. Please be cautious and verify the security details carefully!", n.no_data = "Security details not found at the moment. Please use other parameters to verify token's reliability.", n.owner_percent = "The Owner of this token is holding a large portion of total supply. Please be cautious and verify the security details carefully!", n.creator_percent = "The Creator of this token is holding a large portion of total supply. Please be cautious and verify the security details carefully!", n.metaplex_update_authority_percent = "The Update Authority of this token is holding a large portion of total supply. Please be cautious and verify the security details carefully!", n.mint_time = "New token! This token is minted less than 24h ago. Please be cautious and verify the security details carefully!", n.transfer_fee_enable = "The authority of this token can charge a fee when this token is transferred. Please be cautious and verify the security details carefully!", n.transfer_fee_basis_points = "This token applies significantly HIGH TRANSFER FEE! Please be cautious and verify the security details carefully!", n.freeze_able = "The authority of this token can FREEZE every token from being transferred. Please be cautious and verify the security details carefully!";
            let i = {
                    mintable: {
                        label: "Mintable",
                        tooltip: "Mint function enables contract owner to issue more tokens and cause the coin price to plummet. It is extremely risky. However if ownership is renounced, or is changed to a burn address, this function will be disabled."
                    },
                    mutable_metadata: {
                        label: "Mutable Info",
                        tooltip: "The token information such as name, logo, website address can be changed by the owner."
                    },
                    transfer_fee_enable: {
                        label: "Transfer Fees",
                        tooltip: "Token 2022 element - the authority can charge a percentage fee when this token is transferred among wallets."
                    },
                    freeze_able: {
                        label: "Freezable",
                        tooltip: "Token 2022 element - the authority can freeze every token from transferring among wallets."
                    },
                    is_true_token: {
                        label: "True/Fake Token",
                        tooltip: "Whether the token is true or fake."
                    },
                    mint_tx: {
                        label: "First Mint Tx",
                        tooltip: "The token is first minted at this transaction. There can be several other mint events after this."
                    },
                    mint_time: {
                        label: "First Mint Time",
                        tooltip: "The token is first minted at this time. There can be several other mint events after this."
                    },
                    creation_tx: {
                        label: "Creation Tx",
                        tooltip: "The token is first created at this transaction. There can be several other mint events after this."
                    },
                    creation_time: {
                        label: "Creation Time",
                        tooltip: "The token is first created at this time. There can be several other mint events after this."
                    },
                    renounce: {
                        label: "Ownership Renounced",
                        tooltip: "If token ownership is renounced, no one can execute functions such as mint more tokens."
                    },
                    owner_address: {
                        label: "Owner Address",
                        tooltip: "Ownership is mostly used to adjust the parameters and status of the contract, such as minting, modification of slippage, suspension of trading, setting blacklist, etc. "
                    },
                    owner_balance: {
                        label: "Owner Balance",
                        tooltip: "The token balance of the contract owner."
                    },
                    owner_percent: {
                        label: "Token Percentage of Owner",
                        tooltip: "The percentage of tokens held by the contract owner."
                    },
                    creator_address: {
                        label: "Creator Address",
                        tooltip: "The contract creator's address."
                    },
                    creator_balance: {
                        label: "Creator Balance",
                        tooltip: "The token balance of contract creator."
                    },
                    creator_percent: {
                        label: "Token Percentage of Creator",
                        tooltip: "The percentage of tokens held by the contract creator."
                    },
                    metaplex_update_authority: {
                        label: "Update Authority (UA)",
                        tooltip: "The token's update authority address."
                    },
                    metaplex_update_authority_balance: {
                        label: "UA Balance",
                        tooltip: "The token balance of token Update Authority."
                    },
                    metaplex_update_authority_percent: {
                        label: "UA Percentage",
                        tooltip: "The percentage of tokens held by the token Update Authority."
                    }
                },
                r = {
                    transfer_fee_enable: {
                        transfer_fee_basis_points: {
                            label: "Transfer Fee",
                            tooltip: "Transfer fee will cause the actual value received when transfer a token to be less than expected, and high transfer fee may lead to large losses."
                        },
                        maximum_fee: {
                            label: "Max Fee",
                            tooltip: "The maximum fee that the authority can charge on each transfer."
                        },
                        withdraw_withheld_authority: {
                            label: "Withdrawer",
                            tooltip: "Withdrawer is who can withraw all the transfer fees to a wallet of their choice."
                        },
                        transfer_fee_config_authority: {
                            label: "Config Authority",
                            tooltip: "Config Authority is who can change the transfer fee anywhere from 0 to Max fee."
                        }
                    },
                    freeze_able: {
                        freeze_authority: {
                            label: "Freeze Authority",
                            tooltip: "Freeze Authority is who can freeze every token from transferring among wallets."
                        }
                    }
                },
                l = 1e15
        },
        25262: function(e, t, a) {
            var o, n;
            a.d(t, {
                D7: function() {
                    return i
                },
                Dx: function() {
                    return o
                },
                Gh: function() {
                    return s
                },
                jJ: function() {
                    return r
                }
            }), (n = o || (o = {})).Airdrop = "airdrop", n.Whale = "whale", n.Star = "degen", n.Hacker = "hacker";
            let s = {
                    yesterday: "YESTERDAY",
                    today: "TODAY",
                    "7D": "Last 7D",
                    "30D": "Last 1M",
                    "60D": "Last 2M",
                    "90D": "Last 3M"
                },
                i = {
                    arbitrum: 1680368400,
                    avalanche: 1680454800,
                    base: 1694624400,
                    bsc: 1680454800,
                    optimism: 1682269200,
                    polygon: 1680714e3,
                    zksync: 1692550800,
                    sui: 1710522e3,
                    solana: 1651597200,
                    ethereum: 1684947600
                },
                r = {
                    yesterday: {
                        label: "Yesterday",
                        pnl: "pnlYesterday",
                        volume: "volumeYesterday",
                        trades: "tradeCountYesterday",
                        tokenChange: "tokenChangeYesterday"
                    },
                    today: {
                        label: "Today",
                        pnl: "pnlToday",
                        volume: "volumeToday",
                        trades: "tradeCountToday",
                        tokenChange: "tokenChangeToday"
                    },
                    "7D": {
                        label: "7D",
                        pnl: "pnl7D",
                        volume: "volume7D",
                        trades: "tradeCount7D",
                        tokenChange: "tokenChange7D"
                    },
                    "30D": {
                        label: "1M",
                        pnl: "pnl30D",
                        volume: "volume30D",
                        trades: "tradeCount30D",
                        tokenChange: "tokenChange30D"
                    },
                    "60D": {
                        label: "2M",
                        pnl: "pnl60D",
                        volume: "volume60D",
                        trades: "tradeCount60D",
                        tokenChange: "tokenChange60D"
                    },
                    "90D": {
                        label: "3M",
                        pnl: "pnl90D",
                        volume: "volume90D",
                        trades: "tradeCount90D",
                        tokenChange: "tokenChange90D"
                    }
                }
        },
        34685: function(e, t, a) {
            a.d(t, {
                aq: function() {
                    return i
                },
                Ym: function() {
                    return h
                },
                SZ: function() {
                    return y.S
                },
                R4: function() {
                    return p
                },
                u9: function() {
                    return u
                },
                Fs: function() {
                    return g
                },
                PT: function() {
                    return r
                },
                Od: function() {
                    return d
                },
                pC: function() {
                    return f
                },
                GP: function() {
                    return l
                },
                oN: function() {
                    return y.o
                }
            });
            var o = a(95974),
                n = a(86653),
                s = a(78154);
            let i = o.z.object({
                    email: o.z.boolean().default(!0),
                    emailID: o.z.string().optional(),
                    telegram: o.z.boolean().default(!1),
                    telegramID: o.z.string().optional(),
                    discord: o.z.boolean().default(!1),
                    discordID: o.z.string().optional()
                }),
                r = o.z.object({
                    network: o.z.string(),
                    condition: o.z.enum(["new_trending", "new_listing_pair"]),
                    top: o.z.string().optional(),
                    tvl: o.z.coerce.number({
                        required_error: "TVL must be a number"
                    }).min(1, "TVL must be greater than 0").optional(),
                    trigger: o.z.enum(["Once", "Always"]),
                    expire: o.z.number(),
                    use_default: o.z.boolean(),
                    email: o.z.boolean(),
                    emailID: o.z.string().email(),
                    telegram: o.z.boolean(),
                    telegramID: o.z.string(),
                    discord: o.z.boolean(),
                    discordID: o.z.string(),
                    name: o.z.string({
                        required_error: "Required field"
                    }),
                    message: o.z.string().optional()
                }).superRefine((e, t) => {
                    "new_trending" !== e.condition || e.top || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["top"],
                        message: "Please select a value."
                    }), "new_listing_pair" !== e.condition || e.tvl || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["tvl"],
                        message: "Please input a value."
                    }), e.telegram && !e.telegramID && t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["telegramID"],
                        message: "Please input Telegram ID."
                    }), e.discord && !e.discordID && t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["discordID"],
                        message: "Please input Discord Guild ID."
                    }), e.email || e.telegram || e.discord || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["email"],
                        message: "At least one checkbox must be selected."
                    })
                });
            o.z.object({
                new_trending: o.z.object({
                    top: o.z.string().optional()
                }).optional(),
                new_listing_pair: o.z.object({
                    tvl: o.z.number().optional()
                }).optional()
            });
            let l = o.z.object({
                    target: o.z.string(),
                    network: o.z.string().optional(),
                    watchlist: o.z.string().optional(),
                    token: o.z.string().optional(),
                    trader: o.z.string(),
                    type: o.z.string(),
                    from: o.z.coerce.number(),
                    to: o.z.coerce.number().optional(),
                    trigger: o.z.enum(["Once", "Always"]),
                    expire: o.z.number(),
                    use_default: o.z.boolean(),
                    email: o.z.boolean(),
                    emailID: o.z.string().email(),
                    telegram: o.z.boolean(),
                    telegramID: o.z.string(),
                    discord: o.z.boolean(),
                    discordID: o.z.string(),
                    name: o.z.string({
                        required_error: "Required field"
                    }),
                    message: o.z.string().optional()
                }).superRefine((e, t) => {
                    (0, s.At)(e.trader) || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["trader"],
                        message: "Invalid address."
                    }), e.from || e.to || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["from"],
                        message: "At least one field must be inputed."
                    }), e.telegram && !e.telegramID && t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["telegramID"],
                        message: "Please input Telegram ID."
                    }), e.discord && !e.discordID && t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["discordID"],
                        message: "Please input Discord Guild ID."
                    }), e.email || e.telegram || e.discord || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["email"],
                        message: "At least one checkbox must be selected."
                    })
                }),
                c = o.z.object({
                    gain: o.z.string(),
                    time: o.z.string(),
                    from: o.z.coerce.number().optional(),
                    to: o.z.coerce.number().optional()
                }),
                d = o.z.object({
                    target: o.z.string(),
                    network: o.z.string().optional(),
                    watchlist: o.z.string().optional(),
                    token: o.z.string().optional(),
                    items: o.z.array(c),
                    trigger: o.z.enum(["Once", "Always"]),
                    expire: o.z.number(),
                    use_default: o.z.boolean(),
                    email: o.z.boolean(),
                    emailID: o.z.string().email(),
                    telegram: o.z.boolean(),
                    telegramID: o.z.string(),
                    discord: o.z.boolean(),
                    discordID: o.z.string(),
                    name: o.z.string({
                        required_error: "Required field"
                    }),
                    message: o.z.string().optional()
                }).superRefine((e, t) => {
                    "watchlist" !== e.target || e.watchlist || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["watchlist"],
                        message: "Please select a watchlist."
                    }), e.items.length < 1 && t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["items"],
                        message: "Please add trigger condition."
                    }), e.telegram && !e.telegramID && t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["telegramID"],
                        message: "Please input Telegram ID."
                    }), e.discord && !e.discordID && t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["discordID"],
                        message: "Please input Discord Guild ID."
                    }), e.email || e.telegram || e.discord || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["email"],
                        message: "At least one checkbox must be selected."
                    })
                }),
                u = o.z.object({
                    target: o.z.string(),
                    network: o.z.string().optional(),
                    watchlist: o.z.string().optional(),
                    token: o.z.string().optional(),
                    time: o.z.string().optional(),
                    index1: o.z.string(),
                    price_period1: o.z.coerce.number().optional(),
                    ma_period1: o.z.coerce.number().optional(),
                    ema_period1: o.z.coerce.number().optional(),
                    wema_period1: o.z.coerce.number().optional(),
                    sma_period1: o.z.coerce.number().optional(),
                    wma_period1: o.z.coerce.number().optional(),
                    bb_period1: o.z.coerce.number().optional(),
                    rsi_period1: o.z.coerce.number().optional(),
                    stochastic_period1: o.z.coerce.number().optional(),
                    stochastic_signalPeriod1: o.z.coerce.number().optional(),
                    bb_stdDev1: o.z.coerce.number().optional(),
                    ma_source1: o.z.string().optional(),
                    sma_source1: o.z.string().optional(),
                    wma_source1: o.z.string().optional(),
                    ema_source1: o.z.string().optional(),
                    wema_source1: o.z.string().optional(),
                    macd_source1: o.z.string().optional(),
                    ma_offset1: o.z.coerce.number().optional(),
                    sma_offset1: o.z.coerce.number().optional(),
                    wma_offset1: o.z.coerce.number().optional(),
                    ema_offset1: o.z.coerce.number().optional(),
                    wema_offset1: o.z.coerce.number().optional(),
                    option1: o.z.string(),
                    macd_fastPeriod1: o.z.coerce.number().default(12).optional(),
                    macd_slowPeriod1: o.z.coerce.number().optional(),
                    macd_signalPeriod1: o.z.coerce.number().optional(),
                    ichimoku_conversionPeriod1: o.z.coerce.number().optional(),
                    ichimoku_basePeriod1: o.z.coerce.number().optional(),
                    ichimoku_spanPeriod1: o.z.coerce.number().optional(),
                    ichimoku_displacement1: o.z.coerce.number().optional(),
                    operator: o.z.string().default("crossingUp"),
                    index2: o.z.string().default("value"),
                    option2: o.z.string(),
                    price_period2: o.z.coerce.number().optional(),
                    ma_period2: o.z.coerce.number().optional(),
                    sma_period2: o.z.coerce.number().optional(),
                    ema_period2: o.z.coerce.number().optional(),
                    wema_period2: o.z.coerce.number().optional(),
                    wma_period2: o.z.coerce.number().optional(),
                    rsi_period2: o.z.coerce.number().optional(),
                    bb_period2: o.z.coerce.number().optional(),
                    stochastic_period2: o.z.coerce.number().optional(),
                    stochastic_signalPeriod2: o.z.coerce.number().optional(),
                    macd_fastPeriod2: o.z.coerce.number().optional(),
                    macd_slowPeriod2: o.z.coerce.number().optional(),
                    macd_signalPeriod2: o.z.coerce.number().optional(),
                    ichimoku_conversionPeriod2: o.z.coerce.number().optional(),
                    ichimoku_basePeriod2: o.z.coerce.number().optional(),
                    ichimoku_spanPeriod2: o.z.coerce.number().optional(),
                    ichimoku_displacement2: o.z.coerce.number().optional(),
                    bb_stdDev2: o.z.coerce.number().optional(),
                    ma_source2: o.z.string(),
                    sma_source2: o.z.string(),
                    wma_source2: o.z.string(),
                    ema_source2: o.z.string(),
                    wema_source2: o.z.string(),
                    macd_source2: o.z.string(),
                    ma_offset2: o.z.coerce.number().optional(),
                    sma_offset2: o.z.coerce.number().optional(),
                    wma_offset2: o.z.coerce.number().optional(),
                    ema_offset2: o.z.coerce.number().optional(),
                    wema_offset2: o.z.coerce.number().optional(),
                    value_value2: o.z.coerce.number().optional(),
                    bar: o.z.number().optional(),
                    trigger: o.z.enum(["Once", "Always"]),
                    expire: o.z.number(),
                    use_default: o.z.boolean(),
                    email: o.z.boolean(),
                    emailID: o.z.string().email(),
                    telegram: o.z.boolean(),
                    telegramID: o.z.string(),
                    discord: o.z.boolean(),
                    discordID: o.z.string(),
                    name: o.z.string({
                        required_error: "Required field"
                    }),
                    message: o.z.string().optional()
                }).superRefine((e, t) => {
                    if (e.index1 === e.index2 && e.option1 === e.option2 || "price" === e.index1 && "price" === e.index2) {
                        var a, s, i, r;
                        let l = (null === (s = n.u8[e.index1]) || void 0 === s ? void 0 : null === (a = s.input) || void 0 === a ? void 0 : a.length) > 0 && n.u8[e.index1].input.map(t => e["".concat(e.index1, "_").concat(t.value, "1")]),
                            c = (null === n.u8 || void 0 === n.u8 ? void 0 : null === (r = n.u8[e.index2]) || void 0 === r ? void 0 : null === (i = r.input) || void 0 === i ? void 0 : i.length) > 0 && n.u8[e.index2].input.map(t => e["".concat(e.index2, "_").concat(t.value, "2")]);
                        JSON.stringify(l) === JSON.stringify(c) && t.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            path: ["index1"],
                            message: "You are using 2 identical indicators. Please change at least one input parameter so that they can function correctly."
                        })
                    }
                    "price" === e.index1 || e.option1 || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["option1"],
                        message: "Please select a value."
                    }), "price" === e.index2 || "value" === e.index2 || e.option2 || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["option2"],
                        message: "Please select a value."
                    }), "price" === e.index2 || "value" === e.index2 || e.option2 || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["option2"],
                        message: "Please select a value."
                    }), "watchlist" !== e.target || e.watchlist || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["watchlist"],
                        message: "Please select a watchlist."
                    }), "moveUp" !== e.operator && "moveDown" !== e.operator && "movingUpPercent" !== e.operator && "movingDownPercent" !== e.operator && "value" !== e.index2 || e.value_value2 || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["value_value2"],
                        message: "Please input a value."
                    }), e.telegram && !e.telegramID && t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["telegramID"],
                        message: "Please input Telegram ID."
                    }), e.discord && !e.discordID && t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["discordID"],
                        message: "Please input Discord Guild ID."
                    }), e.email || e.telegram || e.discord || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        path: ["email"],
                        message: "At least one checkbox must be selected."
                    })
                });
            o.z.object({
                value: o.z.coerce.number().optional(),
                period: o.z.coerce.number().optional(),
                source: o.z.string().optional(),
                offset: o.z.coerce.number().optional(),
                fastPeriod: o.z.coerce.number().optional(),
                slowPeriod: o.z.coerce.number().optional(),
                signalPeriod: o.z.coerce.number().optional(),
                stdDev: o.z.coerce.number().optional(),
                conversionPeriod: o.z.coerce.number().optional(),
                basePeriod: o.z.coerce.number().optional(),
                spanPeriod: o.z.coerce.number().optional(),
                displacement: o.z.coerce.number().optional(),
                bar: o.z.coerce.number().optional()
            });
            let m = o.z.object({
                    value: o.z.string(),
                    min: o.z.number().min(0).optional(),
                    max: o.z.number().optional()
                }).refine(e => !("custom" === e.value && e.min && e.max && e.min >= e.max), {
                    path: ["max"],
                    message: "Max must be greater than Min"
                }),
                p = o.z.object({
                    createdAt: o.z.object({
                        value: o.z.string()
                    }),
                    liquidity: m,
                    v24hUSD: m,
                    mc: m,
                    holder: m
                });
            var b = a(4643);
            let h = o.z.object({
                    name: o.z.string().min(1, "Please enter Panel name.").max(100, "Panel name is too long."),
                    type: o.z.nativeEnum(b.jQ),
                    token: o.z.object({
                        address: o.z.string(),
                        network: o.z.string()
                    }).optional(),
                    wallet: o.z.object({
                        address: o.z.string(),
                        network: o.z.string()
                    }).optional()
                }).superRefine((e, t) => {
                    "token" !== e.type || e.token || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        message: "Please select a token.",
                        path: ["token"]
                    }), "wallet" !== e.type || e.wallet || t.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        message: "Please select a wallet.",
                        path: ["wallet"]
                    })
                }),
                g = o.z.object({
                    headerTitle: o.z.string().optional(),
                    headerDescription: o.z.string().optional(),
                    headerColor: o.z.string()
                }),
                f = o.z.object({
                    address: o.z.string(),
                    type: o.z.enum(["", "buy", "sell"]),
                    tradeValue: o.z.string()
                });
            var y = a(18406)
        },
        18406: function(e, t, a) {
            a.d(t, {
                S: function() {
                    return n
                },
                o: function() {
                    return i
                }
            });
            var o, n, s = a(95974);
            (o = n || (n = {})).TOKEN = "token", o.WALLET = "wallet";
            let i = s.z.object({
                group_name: s.z.string().min(1, "Please input list name!"),
                group_color: s.z.string(),
                address: s.z.record(s.z.string(), s.z.object({
                    address: s.z.string(),
                    network: s.z.string()
                }).passthrough(), {
                    required_error: "Please input at least one item"
                })
            })
        },
        29762: function(e, t, a) {
            a.r(t), t.default = {
                src: "/_next/static/media/1inch.f2b4a58b.webp",
                height: 47,
                width: 50,
                blurDataURL: "data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAD2nY1uGdEgCD/v////6pClP9//////+DBOz//////+EP+f+ey///ykz/8iZf//99CVIgAI/+2BYAAB5uz3EQAABWUDggUAAAALABAJ0BKggACAACQDglAE6AHpWGRVgA/q3pkhLeumobRXUMIUtNbPNf9Y2c/KA6/PmJk/Jb8p8Rdwu79lcZ9V6xevh39w3yWW1KxNZnyAAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        44492: function(e, t, a) {
            a.r(t), t.default = {
                src: "/_next/static/media/aftermath-icon.ca5705ef.webp",
                height: 512,
                width: 512,
                blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAgAAkA4JZwAAp14GryQAAD++KEG5pxHyTgLZi66uhfWBD3T8o5BAc0CvT1fAn8Qd6iFBwlnihJBoSQcAxQAAAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        26681: function(e, t, a) {
            a.r(t), t.default = {
                src: "/_next/static/media/flowX-icon.2bb3e9de.png",
                height: 28,
                width: 28,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEUdHR3s7e0XMkofHyIJCQkAAAAdHh4cHBwYFRNMaXEeHBscHB9DQ0McTnocFxI6NzVbW1tQUVKzrKVmZmZvb2+AgoPKxb/CwsFFwfDXAAAAEHRSTlP++/0pryqv9fwA7yzv/rH+9gt4JwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwFwQcCgCAMALEDWkoBleH4/09N8HSaiTqtxnjtruQSjxW2YLxrTAxjPuHDkDuMUshoH0BtuIpZTv4DTykCGL2PxwQAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        58022: function(e, t, a) {
            a.r(t), t.default = {
                src: "/_next/static/media/jupiter-logo.cb74aa6e.svg",
                height: 256,
                width: 256,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    }
]);
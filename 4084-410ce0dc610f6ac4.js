"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4084], {
        36810: function(t, e, s) {
            var i = s(15863);
            s.o(i, "useParams") && s.d(e, {
                useParams: function() {
                    return i.useParams
                }
            }), s.o(i, "usePathname") && s.d(e, {
                usePathname: function() {
                    return i.usePathname
                }
            }), s.o(i, "useRouter") && s.d(e, {
                useRouter: function() {
                    return i.useRouter
                }
            }), s.o(i, "useSearchParams") && s.d(e, {
                useSearchParams: function() {
                    return i.useSearchParams
                }
            })
        },
        9022: function(t, e, s) {
            s.d(e, {
                j: function() {
                    return n
                }
            });
            var i = s(95070),
                r = s(69485),
                n = new class extends i.l {#
                    t;#
                    e;#
                    s;
                    constructor() {
                        super(), this.#s = t => {
                            if (!r.sk && window.addEventListener) {
                                let e = () => t();
                                return window.addEventListener("visibilitychange", e, !1), () => {
                                    window.removeEventListener("visibilitychange", e)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#s)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#e ? .(), this.#e = void 0)
                    }
                    setEventListener(t) {
                        this.#s = t, this.#e ? .(), this.#e = t(t => {
                            "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
                        })
                    }
                    setFocused(t) {
                        this.#t !== t && (this.#t = t, this.onFocus())
                    }
                    onFocus() {
                        let t = this.isFocused();
                        this.listeners.forEach(e => {
                            e(t)
                        })
                    }
                    isFocused() {
                        return "boolean" == typeof this.#t ? this.#t : globalThis.document ? .visibilityState !== "hidden"
                    }
                }
        },
        29068: function(t, e, s) {
            s.d(e, {
                R: function() {
                    return u
                },
                m: function() {
                    return o
                }
            });
            var i = s(46773),
                r = s(35129),
                n = s(22108),
                o = class extends r.F {#
                    i;#
                    r;#
                    n;
                    constructor(t) {
                        super(), this.mutationId = t.mutationId, this.#r = t.mutationCache, this.#i = [], this.state = t.state || u(), this.setOptions(t.options), this.scheduleGc()
                    }
                    setOptions(t) {
                        this.options = t, this.updateGcTime(this.options.gcTime)
                    }
                    get meta() {
                        return this.options.meta
                    }
                    addObserver(t) {
                        this.#i.includes(t) || (this.#i.push(t), this.clearGcTimeout(), this.#r.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        this.#i = this.#i.filter(e => e !== t), this.scheduleGc(), this.#r.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: t
                        })
                    }
                    optionalRemove() {
                        this.#i.length || ("pending" === this.state.status ? this.scheduleGc() : this.#r.remove(this))
                    }
                    continue () {
                        return this.#n ? .continue() ? ? this.execute(this.state.variables)
                    }
                    async execute(t) {
                        this.#n = (0, n.Mz)({
                            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(Error("No mutationFn found")),
                            onFail: (t, e) => {
                                this.#o({
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: () => {
                                this.#o({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#o({
                                    type: "continue"
                                })
                            },
                            retry: this.options.retry ? ? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#r.canRun(this)
                        });
                        let e = "pending" === this.state.status,
                            s = !this.#n.canStart();
                        try {
                            if (!e) {
                                this.#o({
                                    type: "pending",
                                    variables: t,
                                    isPaused: s
                                }), await this.#r.config.onMutate ? .(t, this);
                                let e = await this.options.onMutate ? .(t);
                                e !== this.state.context && this.#o({
                                    type: "pending",
                                    context: e,
                                    variables: t,
                                    isPaused: s
                                })
                            }
                            let i = await this.#n.start();
                            return await this.#r.config.onSuccess ? .(i, t, this.state.context, this), await this.options.onSuccess ? .(i, t, this.state.context), await this.#r.config.onSettled ? .(i, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(i, null, t, this.state.context), this.#o({
                                type: "success",
                                data: i
                            }), i
                        } catch (e) {
                            try {
                                throw await this.#r.config.onError ? .(e, t, this.state.context, this), await this.options.onError ? .(e, t, this.state.context), await this.#r.config.onSettled ? .(void 0, e, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, e, t, this.state.context), e
                            } finally {
                                this.#o({
                                    type: "error",
                                    error: e
                                })
                            }
                        } finally {
                            this.#r.runNext(this)
                        }
                    }#
                    o(t) {
                        this.state = (e => {
                            switch (t.type) {
                                case "failed":
                                    return { ...e,
                                        failureCount: t.failureCount,
                                        failureReason: t.error
                                    };
                                case "pause":
                                    return { ...e,
                                        isPaused: !0
                                    };
                                case "continue":
                                    return { ...e,
                                        isPaused: !1
                                    };
                                case "pending":
                                    return { ...e,
                                        context: t.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: t.isPaused,
                                        status: "pending",
                                        variables: t.variables,
                                        submittedAt: Date.now()
                                    };
                                case "success":
                                    return { ...e,
                                        data: t.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    };
                                case "error":
                                    return { ...e,
                                        data: void 0,
                                        error: t.error,
                                        failureCount: e.failureCount + 1,
                                        failureReason: t.error,
                                        isPaused: !1,
                                        status: "error"
                                    }
                            }
                        })(this.state), i.V.batch(() => {
                            this.#i.forEach(e => {
                                e.onMutationUpdate(t)
                            }), this.#r.notify({
                                mutation: this,
                                type: "updated",
                                action: t
                            })
                        })
                    }
                };

            function u() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0,
                    submittedAt: 0
                }
            }
        },
        46773: function(t, e, s) {
            s.d(e, {
                V: function() {
                    return i
                }
            });
            var i = function() {
                let t = [],
                    e = 0,
                    s = t => {
                        t()
                    },
                    i = t => {
                        t()
                    },
                    r = t => setTimeout(t, 0),
                    n = i => {
                        e ? t.push(i) : r(() => {
                            s(i)
                        })
                    },
                    o = () => {
                        let e = t;
                        t = [], e.length && r(() => {
                            i(() => {
                                e.forEach(t => {
                                    s(t)
                                })
                            })
                        })
                    };
                return {
                    batch: t => {
                        let s;
                        e++;
                        try {
                            s = t()
                        } finally {
                            --e || o()
                        }
                        return s
                    },
                    batchCalls: t => (...e) => {
                        n(() => {
                            t(...e)
                        })
                    },
                    schedule: n,
                    setNotifyFunction: t => {
                        s = t
                    },
                    setBatchNotifyFunction: t => {
                        i = t
                    },
                    setScheduler: t => {
                        r = t
                    }
                }
            }()
        },
        99835: function(t, e, s) {
            s.d(e, {
                N: function() {
                    return n
                }
            });
            var i = s(95070),
                r = s(69485),
                n = new class extends i.l {#
                    u = !0;#
                    e;#
                    s;
                    constructor() {
                        super(), this.#s = t => {
                            if (!r.sk && window.addEventListener) {
                                let e = () => t(!0),
                                    s = () => t(!1);
                                return window.addEventListener("online", e, !1), window.addEventListener("offline", s, !1), () => {
                                    window.removeEventListener("online", e), window.removeEventListener("offline", s)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#s)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#e ? .(), this.#e = void 0)
                    }
                    setEventListener(t) {
                        this.#s = t, this.#e ? .(), this.#e = t(this.setOnline.bind(this))
                    }
                    setOnline(t) {
                        this.#u !== t && (this.#u = t, this.listeners.forEach(e => {
                            e(t)
                        }))
                    }
                    isOnline() {
                        return this.#u
                    }
                }
        },
        53275: function(t, e, s) {
            s.d(e, {
                A: function() {
                    return u
                },
                z: function() {
                    return a
                }
            });
            var i = s(69485),
                r = s(46773),
                n = s(22108),
                o = s(35129),
                u = class extends o.F {#
                    a;#
                    h;#
                    c;#
                    n;#
                    l;#
                    d;
                    constructor(t) {
                        super(), this.#d = !1, this.#l = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.#c = t.cache, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.#a = t.state || function(t) {
                            let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                                s = void 0 !== e,
                                i = s ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                            return {
                                data: e,
                                dataUpdateCount: 0,
                                dataUpdatedAt: s ? i ? ? Date.now() : 0,
                                error: null,
                                errorUpdateCount: 0,
                                errorUpdatedAt: 0,
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                                fetchMeta: null,
                                isInvalidated: !1,
                                status: s ? "success" : "pending",
                                fetchStatus: "idle"
                            }
                        }(this.options), this.state = this.#a, this.scheduleGc()
                    }
                    get meta() {
                        return this.options.meta
                    }
                    setOptions(t) {
                        this.options = { ...this.#l,
                            ...t
                        }, this.updateGcTime(this.options.gcTime)
                    }
                    optionalRemove() {
                        this.observers.length || "idle" !== this.state.fetchStatus || this.#c.remove(this)
                    }
                    setData(t, e) {
                        let s = (0, i.oE)(this.state.data, t, this.options);
                        return this.#o({
                            data: s,
                            type: "success",
                            dataUpdatedAt: e ? .updatedAt,
                            manual: e ? .manual
                        }), s
                    }
                    setState(t, e) {
                        this.#o({
                            type: "setState",
                            state: t,
                            setStateOptions: e
                        })
                    }
                    cancel(t) {
                        let e = this.#n ? .promise;
                        return this.#n ? .cancel(t), e ? e.then(i.ZT).catch(i.ZT) : Promise.resolve()
                    }
                    destroy() {
                        super.destroy(), this.cancel({
                            silent: !0
                        })
                    }
                    reset() {
                        this.destroy(), this.setState(this.#a)
                    }
                    isActive() {
                        return this.observers.some(t => !1 !== t.options.enabled)
                    }
                    isDisabled() {
                        return this.getObserversCount() > 0 && !this.isActive()
                    }
                    isStale() {
                        return !!this.state.isInvalidated || (this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : void 0 === this.state.data)
                    }
                    isStaleByTime(t = 0) {
                        return this.state.isInvalidated || void 0 === this.state.data || !(0, i.Kp)(this.state.dataUpdatedAt, t)
                    }
                    onFocus() {
                        let t = this.observers.find(t => t.shouldFetchOnWindowFocus());
                        t ? .refetch({
                            cancelRefetch: !1
                        }), this.#n ? .continue()
                    }
                    onOnline() {
                        let t = this.observers.find(t => t.shouldFetchOnReconnect());
                        t ? .refetch({
                            cancelRefetch: !1
                        }), this.#n ? .continue()
                    }
                    addObserver(t) {
                        this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.#c.notify({
                            type: "observerAdded",
                            query: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || (this.#n && (this.#d ? this.#n.cancel({
                            revert: !0
                        }) : this.#n.cancelRetry()), this.scheduleGc()), this.#c.notify({
                            type: "observerRemoved",
                            query: this,
                            observer: t
                        }))
                    }
                    getObserversCount() {
                        return this.observers.length
                    }
                    invalidate() {
                        this.state.isInvalidated || this.#o({
                            type: "invalidate"
                        })
                    }
                    fetch(t, e) {
                        if ("idle" !== this.state.fetchStatus) {
                            if (void 0 !== this.state.data && e ? .cancelRefetch) this.cancel({
                                silent: !0
                            });
                            else if (this.#n) return this.#n.continueRetry(), this.#n.promise
                        }
                        if (t && this.setOptions(t), !this.options.queryFn) {
                            let t = this.observers.find(t => t.options.queryFn);
                            t && this.setOptions(t.options)
                        }
                        let s = new AbortController,
                            r = {
                                queryKey: this.queryKey,
                                meta: this.meta
                            },
                            o = t => {
                                Object.defineProperty(t, "signal", {
                                    enumerable: !0,
                                    get: () => (this.#d = !0, s.signal)
                                })
                            };
                        o(r);
                        let u = {
                            fetchOptions: e,
                            options: this.options,
                            queryKey: this.queryKey,
                            state: this.state,
                            fetchFn: () => this.options.queryFn && this.options.queryFn !== i.CN ? (this.#d = !1, this.options.persister) ? this.options.persister(this.options.queryFn, r, this) : this.options.queryFn(r) : Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))
                        };
                        o(u), this.options.behavior ? .onFetch(u, this), this.#h = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== u.fetchOptions ? .meta) && this.#o({
                            type: "fetch",
                            meta: u.fetchOptions ? .meta
                        });
                        let a = t => {
                            (0, n.DV)(t) && t.silent || this.#o({
                                type: "error",
                                error: t
                            }), (0, n.DV)(t) || (this.#c.config.onError ? .(t, this), this.#c.config.onSettled ? .(this.state.data, t, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        };
                        return this.#n = (0, n.Mz)({
                            fn: u.fetchFn,
                            abort: s.abort.bind(s),
                            onSuccess: t => {
                                if (void 0 === t) {
                                    a(Error(`${this.queryHash} data is undefined`));
                                    return
                                }
                                this.setData(t), this.#c.config.onSuccess ? .(t, this), this.#c.config.onSettled ? .(t, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                            },
                            onError: a,
                            onFail: (t, e) => {
                                this.#o({
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: () => {
                                this.#o({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#o({
                                    type: "continue"
                                })
                            },
                            retry: u.options.retry,
                            retryDelay: u.options.retryDelay,
                            networkMode: u.options.networkMode,
                            canRun: () => !0
                        }), this.#n.start()
                    }#
                    o(t) {
                        this.state = (e => {
                            switch (t.type) {
                                case "failed":
                                    return { ...e,
                                        fetchFailureCount: t.failureCount,
                                        fetchFailureReason: t.error
                                    };
                                case "pause":
                                    return { ...e,
                                        fetchStatus: "paused"
                                    };
                                case "continue":
                                    return { ...e,
                                        fetchStatus: "fetching"
                                    };
                                case "fetch":
                                    return { ...e,
                                        ...a(e.data, this.options),
                                        fetchMeta: t.meta ? ? null
                                    };
                                case "success":
                                    return { ...e,
                                        data: t.data,
                                        dataUpdateCount: e.dataUpdateCount + 1,
                                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                                        error: null,
                                        isInvalidated: !1,
                                        status: "success",
                                        ...!t.manual && {
                                            fetchStatus: "idle",
                                            fetchFailureCount: 0,
                                            fetchFailureReason: null
                                        }
                                    };
                                case "error":
                                    let s = t.error;
                                    if ((0, n.DV)(s) && s.revert && this.#h) return { ...this.#h,
                                        fetchStatus: "idle"
                                    };
                                    return { ...e,
                                        error: s,
                                        errorUpdateCount: e.errorUpdateCount + 1,
                                        errorUpdatedAt: Date.now(),
                                        fetchFailureCount: e.fetchFailureCount + 1,
                                        fetchFailureReason: s,
                                        fetchStatus: "idle",
                                        status: "error"
                                    };
                                case "invalidate":
                                    return { ...e,
                                        isInvalidated: !0
                                    };
                                case "setState":
                                    return { ...e,
                                        ...t.state
                                    }
                            }
                        })(this.state), r.V.batch(() => {
                            this.observers.forEach(t => {
                                t.onQueryUpdate()
                            }), this.#c.notify({
                                query: this,
                                type: "updated",
                                action: t
                            })
                        })
                    }
                };

            function a(t, e) {
                return {
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchStatus: (0, n.Kw)(e.networkMode) ? "fetching" : "paused",
                    ...void 0 === t && {
                        error: null,
                        status: "pending"
                    }
                }
            }
        },
        83452: function(t, e, s) {
            s.d(e, {
                z: function() {
                    return a
                }
            });
            var i = s(69485),
                r = s(46773),
                n = s(9022),
                o = s(95070),
                u = s(53275),
                a = class extends o.l {
                    constructor(t, e) {
                        super(), this.options = e, this.#f = t, this.#p = null, this.bindMethods(), this.setOptions(e)
                    }#
                    f;#
                    y = void 0;#
                    v = void 0;#
                    m = void 0;#
                    b;#
                    R;#
                    p;#
                    g;#
                    S;#
                    O;#
                    C;#
                    w;#
                    F;#
                    E = new Set;
                    bindMethods() {
                        this.refetch = this.refetch.bind(this)
                    }
                    onSubscribe() {
                        1 === this.listeners.size && (this.#y.addObserver(this), h(this.#y, this.options) ? this.#Q() : this.updateResult(), this.#P())
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.destroy()
                    }
                    shouldFetchOnReconnect() {
                        return c(this.#y, this.options, this.options.refetchOnReconnect)
                    }
                    shouldFetchOnWindowFocus() {
                        return c(this.#y, this.options, this.options.refetchOnWindowFocus)
                    }
                    destroy() {
                        this.listeners = new Set, this.#T(), this.#I(), this.#y.removeObserver(this)
                    }
                    setOptions(t, e) {
                        let s = this.options,
                            r = this.#y;
                        if (this.options = this.#f.defaultQueryOptions(t), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                        this.#M(), this.#y.setOptions(this.options), s._defaulted && !(0, i.VS)(this.options, s) && this.#f.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.#y,
                            observer: this
                        });
                        let n = this.hasListeners();
                        n && l(this.#y, r, this.options, s) && this.#Q(), this.updateResult(e), n && (this.#y !== r || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && this.#x();
                        let o = this.#U();
                        n && (this.#y !== r || this.options.enabled !== s.enabled || o !== this.#F) && this.#k(o)
                    }
                    getOptimisticResult(t) {
                        let e = this.#f.getQueryCache().build(this.#f, t),
                            s = this.createResult(e, t);
                        return (0, i.VS)(this.getCurrentResult(), s) || (this.#m = s, this.#R = this.options, this.#b = this.#y.state), s
                    }
                    getCurrentResult() {
                        return this.#m
                    }
                    trackResult(t, e) {
                        let s = {};
                        return Object.keys(t).forEach(i => {
                            Object.defineProperty(s, i, {
                                configurable: !1,
                                enumerable: !0,
                                get: () => (this.trackProp(i), e ? .(i), t[i])
                            })
                        }), s
                    }
                    trackProp(t) {
                        this.#E.add(t)
                    }
                    getCurrentQuery() {
                        return this.#y
                    }
                    refetch({ ...t
                    } = {}) {
                        return this.fetch({ ...t
                        })
                    }
                    fetchOptimistic(t) {
                        let e = this.#f.defaultQueryOptions(t),
                            s = this.#f.getQueryCache().build(this.#f, e);
                        return s.isFetchingOptimistic = !0, s.fetch().then(() => this.createResult(s, e))
                    }
                    fetch(t) {
                        return this.#Q({ ...t,
                            cancelRefetch: t.cancelRefetch ? ? !0
                        }).then(() => (this.updateResult(), this.#m))
                    }#
                    Q(t) {
                        this.#M();
                        let e = this.#y.fetch(this.options, t);
                        return t ? .throwOnError || (e = e.catch(i.ZT)), e
                    }#
                    x() {
                        if (this.#T(), i.sk || this.#m.isStale || !(0, i.PN)(this.options.staleTime)) return;
                        let t = (0, i.Kp)(this.#m.dataUpdatedAt, this.options.staleTime);
                        this.#C = setTimeout(() => {
                            this.#m.isStale || this.updateResult()
                        }, t + 1)
                    }#
                    U() {
                        return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#y) : this.options.refetchInterval) ? ? !1
                    }#
                    k(t) {
                        this.#I(), this.#F = t, !i.sk && !1 !== this.options.enabled && (0, i.PN)(this.#F) && 0 !== this.#F && (this.#w = setInterval(() => {
                            (this.options.refetchIntervalInBackground || n.j.isFocused()) && this.#Q()
                        }, this.#F))
                    }#
                    P() {
                        this.#x(), this.#k(this.#U())
                    }#
                    T() {
                        this.#C && (clearTimeout(this.#C), this.#C = void 0)
                    }#
                    I() {
                        this.#w && (clearInterval(this.#w), this.#w = void 0)
                    }
                    createResult(t, e) {
                        let s;
                        let r = this.#y,
                            n = this.options,
                            o = this.#m,
                            a = this.#b,
                            c = this.#R,
                            f = t !== r ? t.state : this.#v,
                            {
                                state: p
                            } = t,
                            y = { ...p
                            },
                            v = !1;
                        if (e._optimisticResults) {
                            let s = this.hasListeners(),
                                i = !s && h(t, e),
                                o = s && l(t, r, e, n);
                            (i || o) && (y = { ...y,
                                ...(0, u.z)(p.data, t.options)
                            }), "isRestoring" === e._optimisticResults && (y.fetchStatus = "idle")
                        }
                        let {
                            error: m,
                            errorUpdatedAt: b,
                            status: R
                        } = y;
                        if (e.select && void 0 !== y.data) {
                            if (o && y.data === a ? .data && e.select === this.#g) s = this.#S;
                            else try {
                                this.#g = e.select, s = e.select(y.data), s = (0, i.oE)(o ? .data, s, e), this.#S = s, this.#p = null
                            } catch (t) {
                                this.#p = t
                            }
                        } else s = y.data;
                        if (void 0 !== e.placeholderData && void 0 === s && "pending" === R) {
                            let t;
                            if (o ? .isPlaceholderData && e.placeholderData === c ? .placeholderData) t = o.data;
                            else if (t = "function" == typeof e.placeholderData ? e.placeholderData(this.#O ? .state.data, this.#O) : e.placeholderData, e.select && void 0 !== t) try {
                                t = e.select(t), this.#p = null
                            } catch (t) {
                                this.#p = t
                            }
                            void 0 !== t && (R = "success", s = (0, i.oE)(o ? .data, t, e), v = !0)
                        }
                        this.#p && (m = this.#p, s = this.#S, b = Date.now(), R = "error");
                        let g = "fetching" === y.fetchStatus,
                            S = "pending" === R,
                            O = "error" === R,
                            C = S && g,
                            w = void 0 !== s;
                        return {
                            status: R,
                            fetchStatus: y.fetchStatus,
                            isPending: S,
                            isSuccess: "success" === R,
                            isError: O,
                            isInitialLoading: C,
                            isLoading: C,
                            data: s,
                            dataUpdatedAt: y.dataUpdatedAt,
                            error: m,
                            errorUpdatedAt: b,
                            failureCount: y.fetchFailureCount,
                            failureReason: y.fetchFailureReason,
                            errorUpdateCount: y.errorUpdateCount,
                            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                            isFetchedAfterMount: y.dataUpdateCount > f.dataUpdateCount || y.errorUpdateCount > f.errorUpdateCount,
                            isFetching: g,
                            isRefetching: g && !S,
                            isLoadingError: O && !w,
                            isPaused: "paused" === y.fetchStatus,
                            isPlaceholderData: v,
                            isRefetchError: O && w,
                            isStale: d(t, e),
                            refetch: this.refetch
                        }
                    }
                    updateResult(t) {
                        let e = this.#m,
                            s = this.createResult(this.#y, this.options);
                        if (this.#b = this.#y.state, this.#R = this.options, void 0 !== this.#b.data && (this.#O = this.#y), (0, i.VS)(s, e)) return;
                        this.#m = s;
                        let r = {};
                        t ? .listeners !== !1 && (() => {
                            if (!e) return !0;
                            let {
                                notifyOnChangeProps: t
                            } = this.options, s = "function" == typeof t ? t() : t;
                            if ("all" === s || !s && !this.#E.size) return !0;
                            let i = new Set(s ? ? this.#E);
                            return this.options.throwOnError && i.add("error"), Object.keys(this.#m).some(t => this.#m[t] !== e[t] && i.has(t))
                        })() && (r.listeners = !0), this.#D({ ...r,
                            ...t
                        })
                    }#
                    M() {
                        let t = this.#f.getQueryCache().build(this.#f, this.options);
                        if (t === this.#y) return;
                        let e = this.#y;
                        this.#y = t, this.#v = t.state, this.hasListeners() && (e ? .removeObserver(this), t.addObserver(this))
                    }
                    onQueryUpdate() {
                        this.updateResult(), this.hasListeners() && this.#P()
                    }#
                    D(t) {
                        r.V.batch(() => {
                            t.listeners && this.listeners.forEach(t => {
                                t(this.#m)
                            }), this.#f.getQueryCache().notify({
                                query: this.#y,
                                type: "observerResultsUpdated"
                            })
                        })
                    }
                };

            function h(t, e) {
                return !1 !== e.enabled && void 0 === t.state.data && !("error" === t.state.status && !1 === e.retryOnMount) || void 0 !== t.state.data && c(t, e, e.refetchOnMount)
            }

            function c(t, e, s) {
                if (!1 !== e.enabled) {
                    let i = "function" == typeof s ? s(t) : s;
                    return "always" === i || !1 !== i && d(t, e)
                }
                return !1
            }

            function l(t, e, s, i) {
                return (t !== e || !1 === i.enabled) && (!s.suspense || "error" !== t.state.status) && d(t, s)
            }

            function d(t, e) {
                return !1 !== e.enabled && t.isStaleByTime(e.staleTime)
            }
        },
        35129: function(t, e, s) {
            s.d(e, {
                F: function() {
                    return r
                }
            });
            var i = s(69485),
                r = class {#
                    j;
                    destroy() {
                        this.clearGcTimeout()
                    }
                    scheduleGc() {
                        this.clearGcTimeout(), (0, i.PN)(this.gcTime) && (this.#j = setTimeout(() => {
                            this.optionalRemove()
                        }, this.gcTime))
                    }
                    updateGcTime(t) {
                        this.gcTime = Math.max(this.gcTime || 0, t ? ? (i.sk ? 1 / 0 : 3e5))
                    }
                    clearGcTimeout() {
                        this.#j && (clearTimeout(this.#j), this.#j = void 0)
                    }
                }
        },
        22108: function(t, e, s) {
            s.d(e, {
                DV: function() {
                    return h
                },
                Kw: function() {
                    return u
                },
                Mz: function() {
                    return c
                }
            });
            var i = s(9022),
                r = s(99835),
                n = s(69485);

            function o(t) {
                return Math.min(1e3 * 2 ** t, 3e4)
            }

            function u(t) {
                return (t ? ? "online") !== "online" || r.N.isOnline()
            }
            var a = class {
                constructor(t) {
                    this.revert = t ? .revert, this.silent = t ? .silent
                }
            };

            function h(t) {
                return t instanceof a
            }

            function c(t) {
                let e, s, h, c = !1,
                    l = 0,
                    d = !1,
                    f = new Promise((t, e) => {
                        s = t, h = e
                    }),
                    p = () => i.j.isFocused() && ("always" === t.networkMode || r.N.isOnline()) && t.canRun(),
                    y = () => u(t.networkMode) && t.canRun(),
                    v = i => {
                        d || (d = !0, t.onSuccess ? .(i), e ? .(), s(i))
                    },
                    m = s => {
                        d || (d = !0, t.onError ? .(s), e ? .(), h(s))
                    },
                    b = () => new Promise(s => {
                        e = t => {
                            (d || p()) && s(t)
                        }, t.onPause ? .()
                    }).then(() => {
                        e = void 0, d || t.onContinue ? .()
                    }),
                    R = () => {
                        let e;
                        if (!d) {
                            try {
                                e = t.fn()
                            } catch (t) {
                                e = Promise.reject(t)
                            }
                            Promise.resolve(e).then(v).catch(e => {
                                if (d) return;
                                let s = t.retry ? ? (n.sk ? 0 : 3),
                                    i = t.retryDelay ? ? o,
                                    r = "function" == typeof i ? i(l, e) : i,
                                    u = !0 === s || "number" == typeof s && l < s || "function" == typeof s && s(l, e);
                                if (c || !u) {
                                    m(e);
                                    return
                                }
                                l++, t.onFail ? .(l, e), (0, n._v)(r).then(() => p() ? void 0 : b()).then(() => {
                                    c ? m(e) : R()
                                })
                            })
                        }
                    };
                return {
                    promise: f,
                    cancel: e => {
                        d || (m(new a(e)), t.abort ? .())
                    },
                    continue: () => (e ? .(), f),
                    cancelRetry: () => {
                        c = !0
                    },
                    continueRetry: () => {
                        c = !1
                    },
                    canStart: y,
                    start: () => (y() ? R() : b().then(R), f)
                }
            }
        },
        95070: function(t, e, s) {
            s.d(e, {
                l: function() {
                    return i
                }
            });
            var i = class {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(t) {
                    return this.listeners.add(t), this.onSubscribe(), () => {
                        this.listeners.delete(t), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        69485: function(t, e, s) {
            s.d(e, {
                CN: function() {
                    return O
                },
                Ht: function() {
                    return S
                },
                Kp: function() {
                    return u
                },
                PN: function() {
                    return o
                },
                Q$: function() {
                    return f
                },
                Rm: function() {
                    return c
                },
                SE: function() {
                    return n
                },
                VS: function() {
                    return p
                },
                VX: function() {
                    return g
                },
                X7: function() {
                    return h
                },
                Ym: function() {
                    return l
                },
                ZT: function() {
                    return r
                },
                _v: function() {
                    return b
                },
                _x: function() {
                    return a
                },
                oE: function() {
                    return R
                },
                sk: function() {
                    return i
                },
                to: function() {
                    return d
                }
            });
            var i = "undefined" == typeof window || "Deno" in globalThis;

            function r() {}

            function n(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function o(t) {
                return "number" == typeof t && t >= 0 && t !== 1 / 0
            }

            function u(t, e) {
                return Math.max(t + (e || 0) - Date.now(), 0)
            }

            function a(t, e) {
                let {
                    type: s = "all",
                    exact: i,
                    fetchStatus: r,
                    predicate: n,
                    queryKey: o,
                    stale: u
                } = t;
                if (o) {
                    if (i) {
                        if (e.queryHash !== c(o, e.options)) return !1
                    } else if (!d(e.queryKey, o)) return !1
                }
                if ("all" !== s) {
                    let t = e.isActive();
                    if ("active" === s && !t || "inactive" === s && t) return !1
                }
                return ("boolean" != typeof u || e.isStale() === u) && (!r || r === e.state.fetchStatus) && (!n || !!n(e))
            }

            function h(t, e) {
                let {
                    exact: s,
                    status: i,
                    predicate: r,
                    mutationKey: n
                } = t;
                if (n) {
                    if (!e.options.mutationKey) return !1;
                    if (s) {
                        if (l(e.options.mutationKey) !== l(n)) return !1
                    } else if (!d(e.options.mutationKey, n)) return !1
                }
                return (!i || e.state.status === i) && (!r || !!r(e))
            }

            function c(t, e) {
                return (e ? .queryKeyHashFn || l)(t)
            }

            function l(t) {
                return JSON.stringify(t, (t, e) => v(e) ? Object.keys(e).sort().reduce((t, s) => (t[s] = e[s], t), {}) : e)
            }

            function d(t, e) {
                return t === e || typeof t == typeof e && !!t && !!e && "object" == typeof t && "object" == typeof e && !Object.keys(e).some(s => !d(t[s], e[s]))
            }

            function f(t, e) {
                if (t === e) return t;
                let s = y(t) && y(e);
                if (s || v(t) && v(e)) {
                    let i = s ? t : Object.keys(t),
                        r = i.length,
                        n = s ? e : Object.keys(e),
                        o = n.length,
                        u = s ? [] : {},
                        a = 0;
                    for (let r = 0; r < o; r++) {
                        let o = s ? r : n[r];
                        (!s && i.includes(o) || s) && void 0 === t[o] && void 0 === e[o] ? (u[o] = void 0, a++) : (u[o] = f(t[o], e[o]), u[o] === t[o] && void 0 !== t[o] && a++)
                    }
                    return r === o && a === r ? t : u
                }
                return e
            }

            function p(t, e) {
                if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
                for (let s in t)
                    if (t[s] !== e[s]) return !1;
                return !0
            }

            function y(t) {
                return Array.isArray(t) && t.length === Object.keys(t).length
            }

            function v(t) {
                if (!m(t)) return !1;
                let e = t.constructor;
                if (void 0 === e) return !0;
                let s = e.prototype;
                return !!(m(s) && s.hasOwnProperty("isPrototypeOf")) && Object.getPrototypeOf(t) === Object.prototype
            }

            function m(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function b(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }

            function R(t, e, s) {
                return "function" == typeof s.structuralSharing ? s.structuralSharing(t, e) : !1 !== s.structuralSharing ? f(t, e) : e
            }

            function g(t, e, s = 0) {
                let i = [...t, e];
                return s && i.length > s ? i.slice(1) : i
            }

            function S(t, e, s = 0) {
                let i = [e, ...t];
                return s && i.length > s ? i.slice(0, -1) : i
            }
            var O = Symbol()
        },
        33419: function(t, e, s) {
            s.d(e, {
                QueryClientContext: function() {
                    return n
                },
                QueryClientProvider: function() {
                    return u
                },
                useQueryClient: function() {
                    return o
                }
            });
            var i = s(11390),
                r = s(3404),
                n = i.createContext(void 0),
                o = t => {
                    let e = i.useContext(n);
                    if (t) return t;
                    if (!e) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return e
                },
                u = t => {
                    let {
                        client: e,
                        children: s
                    } = t;
                    return i.useEffect(() => (e.mount(), () => {
                        e.unmount()
                    }), [e]), (0, r.jsx)(n.Provider, {
                        value: e,
                        children: s
                    })
                }
        },
        57927: function(t, e, s) {
            s.d(e, {
                QueryErrorResetBoundary: function() {
                    return a
                },
                useQueryErrorResetBoundary: function() {
                    return u
                }
            });
            var i = s(11390),
                r = s(3404);

            function n() {
                let t = !1;
                return {
                    clearReset: () => {
                        t = !1
                    },
                    reset: () => {
                        t = !0
                    },
                    isReset: () => t
                }
            }
            var o = i.createContext(n()),
                u = () => i.useContext(o),
                a = t => {
                    let {
                        children: e
                    } = t, [s] = i.useState(() => n());
                    return (0, r.jsx)(o.Provider, {
                        value: s,
                        children: "function" == typeof e ? e(s) : e
                    })
                }
        },
        88663: function(t, e, s) {
            s.d(e, {
                JN: function() {
                    return o
                },
                KJ: function() {
                    return u
                },
                pf: function() {
                    return n
                }
            });
            var i = s(11390),
                r = s(29607),
                n = (t, e) => {
                    (t.suspense || t.throwOnError) && !e.isReset() && (t.retryOnMount = !1)
                },
                o = t => {
                    i.useEffect(() => {
                        t.clearReset()
                    }, [t])
                },
                u = t => {
                    let {
                        result: e,
                        errorResetBoundary: s,
                        throwOnError: i,
                        query: n
                    } = t;
                    return e.isError && !s.isReset() && !e.isFetching && n && (0, r.L)(i, [e.error, n])
                }
        },
        95847: function(t, e, s) {
            s.d(e, {
                IsRestoringProvider: function() {
                    return o
                },
                useIsRestoring: function() {
                    return n
                }
            });
            var i = s(11390),
                r = i.createContext(!1),
                n = () => i.useContext(r),
                o = r.Provider
        },
        18366: function(t, e, s) {
            s.d(e, {
                Ct: function() {
                    return i
                },
                Fb: function() {
                    return r
                },
                SB: function() {
                    return o
                },
                Z$: function() {
                    return n
                },
                j8: function() {
                    return u
                }
            });
            var i = (t, e) => void 0 === e.state.data,
                r = t => {
                    t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3)
                },
                n = (t, e) => t.isLoading && t.isFetching && !e,
                o = (t, e) => t ? .suspense && e.isPending,
                u = (t, e, s) => e.fetchOptimistic(t).catch(() => {
                    s.clearReset()
                })
        },
        13185: function(t, e, s) {
            s.d(e, {
                r: function() {
                    return c
                }
            });
            var i = s(11390),
                r = s(46773),
                n = s(57927),
                o = s(33419),
                u = s(95847),
                a = s(88663),
                h = s(18366);

            function c(t, e, s) {
                let c = (0, o.useQueryClient)(s),
                    l = (0, u.useIsRestoring)(),
                    d = (0, n.useQueryErrorResetBoundary)(),
                    f = c.defaultQueryOptions(t);
                f._optimisticResults = l ? "isRestoring" : "optimistic", (0, h.Fb)(f), (0, a.pf)(f, d), (0, a.JN)(d);
                let [p] = i.useState(() => new e(c, f)), y = p.getOptimisticResult(f);
                if (i.useSyncExternalStore(i.useCallback(t => {
                        let e = l ? () => void 0 : p.subscribe(r.V.batchCalls(t));
                        return p.updateResult(), e
                    }, [p, l]), () => p.getCurrentResult(), () => p.getCurrentResult()), i.useEffect(() => {
                        p.setOptions(f, {
                            listeners: !1
                        })
                    }, [f, p]), (0, h.SB)(f, y)) throw (0, h.j8)(f, p, d);
                if ((0, a.KJ)({
                        result: y,
                        errorResetBoundary: d,
                        throwOnError: f.throwOnError,
                        query: c.getQueryCache().get(f.queryHash)
                    })) throw y.error;
                return f.notifyOnChangeProps ? y : p.trackResult(y)
            }
        },
        99001: function(t, e, s) {
            s.d(e, {
                useMutation: function() {
                    return l
                }
            });
            var i = s(11390),
                r = s(29068),
                n = s(46773),
                o = s(95070),
                u = s(69485),
                a = class extends o.l {#
                    f;#
                    m = void 0;#
                    L;#
                    q;
                    constructor(t, e) {
                        super(), this.#f = t, this.setOptions(e), this.bindMethods(), this.#A()
                    }
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(t) {
                        let e = this.options;
                        this.options = this.#f.defaultMutationOptions(t), (0, u.VS)(this.options, e) || this.#f.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#L,
                            observer: this
                        }), e ? .mutationKey && this.options.mutationKey && (0, u.Ym)(e.mutationKey) !== (0, u.Ym)(this.options.mutationKey) ? this.reset() : this.#L ? .state.status === "pending" && this.#L.setOptions(this.options)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#L ? .removeObserver(this)
                    }
                    onMutationUpdate(t) {
                        this.#A(), this.#D(t)
                    }
                    getCurrentResult() {
                        return this.#m
                    }
                    reset() {
                        this.#L ? .removeObserver(this), this.#L = void 0, this.#A(), this.#D()
                    }
                    mutate(t, e) {
                        return this.#q = e, this.#L ? .removeObserver(this), this.#L = this.#f.getMutationCache().build(this.#f, this.options), this.#L.addObserver(this), this.#L.execute(t)
                    }#
                    A() {
                        let t = this.#L ? .state ? ? (0, r.R)();
                        this.#m = { ...t,
                            isPending: "pending" === t.status,
                            isSuccess: "success" === t.status,
                            isError: "error" === t.status,
                            isIdle: "idle" === t.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    D(t) {
                        n.V.batch(() => {
                            if (this.#q && this.hasListeners()) {
                                let e = this.#m.variables,
                                    s = this.#m.context;
                                t ? .type === "success" ? (this.#q.onSuccess ? .(t.data, e, s), this.#q.onSettled ? .(t.data, null, e, s)) : t ? .type === "error" && (this.#q.onError ? .(t.error, e, s), this.#q.onSettled ? .(void 0, t.error, e, s))
                            }
                            this.listeners.forEach(t => {
                                t(this.#m)
                            })
                        })
                    }
                },
                h = s(33419),
                c = s(29607);

            function l(t, e) {
                let s = (0, h.useQueryClient)(e),
                    [r] = i.useState(() => new a(s, t));
                i.useEffect(() => {
                    r.setOptions(t)
                }, [r, t]);
                let o = i.useSyncExternalStore(i.useCallback(t => r.subscribe(n.V.batchCalls(t)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()),
                    u = i.useCallback((t, e) => {
                        r.mutate(t, e).catch(c.Z)
                    }, [r]);
                if (o.error && (0, c.L)(r.options.throwOnError, [o.error])) throw o.error;
                return { ...o,
                    mutate: u,
                    mutateAsync: o.mutate
                }
            }
        },
        2682: function(t, e, s) {
            s.d(e, {
                useQuery: function() {
                    return n
                }
            });
            var i = s(83452),
                r = s(13185);

            function n(t, e) {
                return (0, r.r)(t, i.z, e)
            }
        },
        29607: function(t, e, s) {
            function i(t, e) {
                return "function" == typeof t ? t(...e) : !!t
            }

            function r() {}
            s.d(e, {
                L: function() {
                    return i
                },
                Z: function() {
                    return r
                }
            })
        }
    }
]);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3412], {
        56755: function(t, e, r) {
            "use strict";
            e._O = e.Jq = e.KB = e.u8 = e.cv = void 0, e.Ik = e.A9 = e.n_ = e.gM = void 0;
            let n = r(21920);

            function i(t) {
                if (!(t instanceof Uint8Array)) throw TypeError("b must be a Uint8Array")
            }

            function o(t) {
                return i(t), n.Buffer.from(t.buffer, t.byteOffset, t.length)
            }
            class s {
                constructor(t, e) {
                    if (!Number.isInteger(t)) throw TypeError("span must be an integer");
                    this.span = t, this.property = e
                }
                makeDestinationObject() {
                    return {}
                }
                getSpan(t, e) {
                    if (0 > this.span) throw RangeError("indeterminate span");
                    return this.span
                }
                replicate(t) {
                    let e = Object.create(this.constructor.prototype);
                    return Object.assign(e, this), e.property = t, e
                }
                fromArray(t) {}
            }

            function a(t, e) {
                return e.property ? t + "[" + e.property + "]" : t
            }
            class u extends s {
                isCount() {
                    throw Error("ExternalLayout is abstract")
                }
            }
            class h extends u {
                constructor(t, e = 0, r) {
                    if (!(t instanceof s)) throw TypeError("layout must be a Layout");
                    if (!Number.isInteger(e)) throw TypeError("offset must be integer or undefined");
                    super(t.span, r || t.property), this.layout = t, this.offset = e
                }
                isCount() {
                    return this.layout instanceof l || this.layout instanceof f
                }
                decode(t, e = 0) {
                    return this.layout.decode(t, e + this.offset)
                }
                encode(t, e, r = 0) {
                    return this.layout.encode(t, e, r + this.offset)
                }
            }
            class l extends s {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e = 0) {
                    return o(t).readUIntLE(e, this.span)
                }
                encode(t, e, r = 0) {
                    return o(e).writeUIntLE(t, r, this.span), this.span
                }
            }
            class f extends s {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e = 0) {
                    return o(t).readUIntBE(e, this.span)
                }
                encode(t, e, r = 0) {
                    return o(e).writeUIntBE(t, r, this.span), this.span
                }
            }

            function c(t) {
                let e = Math.floor(t / 4294967296);
                return {
                    hi32: e,
                    lo32: t - 4294967296 * e
                }
            }

            function d(t, e) {
                return 4294967296 * t + e
            }
            class p extends s {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e = 0) {
                    let r = o(t),
                        n = r.readUInt32LE(e);
                    return d(r.readUInt32LE(e + 4), n)
                }
                encode(t, e, r = 0) {
                    let n = c(t),
                        i = o(e);
                    return i.writeUInt32LE(n.lo32, r), i.writeUInt32LE(n.hi32, r + 4), 8
                }
            }
            class y extends s {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e = 0) {
                    let r = o(t),
                        n = r.readUInt32LE(e);
                    return d(r.readInt32LE(e + 4), n)
                }
                encode(t, e, r = 0) {
                    let n = c(t),
                        i = o(e);
                    return i.writeUInt32LE(n.lo32, r), i.writeInt32LE(n.hi32, r + 4), 8
                }
            }
            class g extends s {
                constructor(t, e, r) {
                    if (!(t instanceof s)) throw TypeError("elementLayout must be a Layout");
                    if (!(e instanceof u && e.isCount() || Number.isInteger(e) && 0 <= e)) throw TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                    let n = -1;
                    e instanceof u || !(0 < t.span) || (n = e * t.span), super(n, r), this.elementLayout = t, this.count = e
                }
                getSpan(t, e = 0) {
                    if (0 <= this.span) return this.span;
                    let r = 0,
                        n = this.count;
                    if (n instanceof u && (n = n.decode(t, e)), 0 < this.elementLayout.span) r = n * this.elementLayout.span;
                    else {
                        let i = 0;
                        for (; i < n;) r += this.elementLayout.getSpan(t, e + r), ++i
                    }
                    return r
                }
                decode(t, e = 0) {
                    let r = [],
                        n = 0,
                        i = this.count;
                    for (i instanceof u && (i = i.decode(t, e)); n < i;) r.push(this.elementLayout.decode(t, e)), e += this.elementLayout.getSpan(t, e), n += 1;
                    return r
                }
                encode(t, e, r = 0) {
                    let n = this.elementLayout,
                        i = t.reduce((t, i) => t + n.encode(i, e, r + t), 0);
                    return this.count instanceof u && this.count.encode(t.length, e, r), i
                }
            }
            class m extends s {
                constructor(t, e, r) {
                    if (!(Array.isArray(t) && t.reduce((t, e) => t && e instanceof s, !0))) throw TypeError("fields must be array of Layout instances");
                    for (let n of ("boolean" == typeof e && void 0 === r && (r = e, e = void 0), t))
                        if (0 > n.span && void 0 === n.property) throw Error("fields cannot contain unnamed variable-length layout");
                    let n = -1;
                    try {
                        n = t.reduce((t, e) => t + e.getSpan(), 0)
                    } catch (t) {}
                    super(n, e), this.fields = t, this.decodePrefixes = !!r
                }
                getSpan(t, e = 0) {
                    if (0 <= this.span) return this.span;
                    let r = 0;
                    try {
                        r = this.fields.reduce((r, n) => {
                            let i = n.getSpan(t, e);
                            return e += i, r + i
                        }, 0)
                    } catch (t) {
                        throw RangeError("indeterminate span")
                    }
                    return r
                }
                decode(t, e = 0) {
                    i(t);
                    let r = this.makeDestinationObject();
                    for (let n of this.fields)
                        if (void 0 !== n.property && (r[n.property] = n.decode(t, e)), e += n.getSpan(t, e), this.decodePrefixes && t.length === e) break;
                    return r
                }
                encode(t, e, r = 0) {
                    let n = r,
                        i = 0,
                        o = 0;
                    for (let n of this.fields) {
                        let s = n.span;
                        if (o = 0 < s ? s : 0, void 0 !== n.property) {
                            let i = t[n.property];
                            void 0 !== i && (o = n.encode(i, e, r), 0 > s && (s = n.getSpan(e, r)))
                        }
                        i = r, r += s
                    }
                    return i + o - n
                }
                fromArray(t) {
                    let e = this.makeDestinationObject();
                    for (let r of this.fields) void 0 !== r.property && 0 < t.length && (e[r.property] = t.shift());
                    return e
                }
                layoutFor(t) {
                    if ("string" != typeof t) throw TypeError("property must be string");
                    for (let e of this.fields)
                        if (e.property === t) return e
                }
                offsetOf(t) {
                    if ("string" != typeof t) throw TypeError("property must be string");
                    let e = 0;
                    for (let r of this.fields) {
                        if (r.property === t) return e;
                        0 > r.span ? e = -1 : 0 <= e && (e += r.span)
                    }
                }
            }
            class b {
                constructor(t) {
                    this.property = t
                }
                decode(t, e) {
                    throw Error("UnionDiscriminator is abstract")
                }
                encode(t, e, r) {
                    throw Error("UnionDiscriminator is abstract")
                }
            }
            class w extends b {
                constructor(t, e) {
                    if (!(t instanceof u && t.isCount())) throw TypeError("layout must be an unsigned integer ExternalLayout");
                    super(e || t.property || "variant"), this.layout = t
                }
                decode(t, e) {
                    return this.layout.decode(t, e)
                }
                encode(t, e, r) {
                    return this.layout.encode(t, e, r)
                }
            }
            class v extends s {
                constructor(t, e, r) {
                    let n;
                    if (t instanceof l || t instanceof f) n = new w(new h(t));
                    else if (t instanceof u && t.isCount()) n = new w(t);
                    else if (t instanceof b) n = t;
                    else throw TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                    if (void 0 === e && (e = null), !(null === e || e instanceof s)) throw TypeError("defaultLayout must be null or a Layout");
                    if (null !== e) {
                        if (0 > e.span) throw Error("defaultLayout must have constant span");
                        void 0 === e.property && (e = e.replicate("content"))
                    }
                    let i = -1;
                    e && 0 <= (i = e.span) && (t instanceof l || t instanceof f) && (i += n.layout.span), super(i, r), this.discriminator = n, this.usesPrefixDiscriminator = t instanceof l || t instanceof f, this.defaultLayout = e, this.registry = {};
                    let o = this.defaultGetSourceVariant.bind(this);
                    this.getSourceVariant = function(t) {
                        return o(t)
                    }, this.configGetSourceVariant = function(t) {
                        o = t.bind(this)
                    }
                }
                getSpan(t, e = 0) {
                    if (0 <= this.span) return this.span;
                    let r = this.getVariant(t, e);
                    if (!r) throw Error("unable to determine span for unrecognized variant");
                    return r.getSpan(t, e)
                }
                defaultGetSourceVariant(t) {
                    if (Object.prototype.hasOwnProperty.call(t, this.discriminator.property)) {
                        if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(t, this.defaultLayout.property)) return;
                        let e = this.registry[t[this.discriminator.property]];
                        if (e && (!e.layout || e.property && Object.prototype.hasOwnProperty.call(t, e.property))) return e
                    } else
                        for (let e in this.registry) {
                            let r = this.registry[e];
                            if (r.property && Object.prototype.hasOwnProperty.call(t, r.property)) return r
                        }
                    throw Error("unable to infer src variant")
                }
                decode(t, e = 0) {
                    let r;
                    let n = this.discriminator,
                        i = n.decode(t, e),
                        o = this.registry[i];
                    if (void 0 === o) {
                        let o = this.defaultLayout,
                            s = 0;
                        this.usesPrefixDiscriminator && (s = n.layout.span), (r = this.makeDestinationObject())[n.property] = i, r[o.property] = o.decode(t, e + s)
                    } else r = o.decode(t, e);
                    return r
                }
                encode(t, e, r = 0) {
                    let n = this.getSourceVariant(t);
                    if (void 0 === n) {
                        let n = this.discriminator,
                            i = this.defaultLayout,
                            o = 0;
                        return this.usesPrefixDiscriminator && (o = n.layout.span), n.encode(t[n.property], e, r), o + i.encode(t[i.property], e, r + o)
                    }
                    return n.encode(t, e, r)
                }
                addVariant(t, e, r) {
                    let n = new x(this, t, e, r);
                    return this.registry[t] = n, n
                }
                getVariant(t, e = 0) {
                    let r;
                    return t instanceof Uint8Array ? r = this.discriminator.decode(t, e) : r = t, this.registry[r]
                }
            }
            class x extends s {
                constructor(t, e, r, n) {
                    if (!(t instanceof v)) throw TypeError("union must be a Union");
                    if (!Number.isInteger(e) || 0 > e) throw TypeError("variant must be a (non-negative) integer");
                    if ("string" == typeof r && void 0 === n && (n = r, r = null), r) {
                        if (!(r instanceof s)) throw TypeError("layout must be a Layout");
                        if (null !== t.defaultLayout && 0 <= r.span && r.span > t.defaultLayout.span) throw Error("variant span exceeds span of containing union");
                        if ("string" != typeof n) throw TypeError("variant must have a String property")
                    }
                    let i = t.span;
                    0 > t.span && 0 <= (i = r ? r.span : 0) && t.usesPrefixDiscriminator && (i += t.discriminator.layout.span), super(i, n), this.union = t, this.variant = e, this.layout = r || null
                }
                getSpan(t, e = 0) {
                    if (0 <= this.span) return this.span;
                    let r = 0;
                    this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span);
                    let n = 0;
                    return this.layout && (n = this.layout.getSpan(t, e + r)), r + n
                }
                decode(t, e = 0) {
                    let r = this.makeDestinationObject();
                    if (this !== this.union.getVariant(t, e)) throw Error("variant mismatch");
                    let n = 0;
                    return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(t, e + n) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r
                }
                encode(t, e, r = 0) {
                    let n = 0;
                    if (this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(t, this.property)) throw TypeError("variant lacks property " + this.property);
                    this.union.discriminator.encode(this.variant, e, r);
                    let i = n;
                    if (this.layout && (this.layout.encode(t[this.property], e, r + n), i += this.layout.getSpan(e, r + n), 0 <= this.union.span && i > this.union.span)) throw Error("encoded variant overruns containing union");
                    return i
                }
                fromArray(t) {
                    if (this.layout) return this.layout.fromArray(t)
                }
            }

            function E(t) {
                return 0 > t && (t += 4294967296), t
            }
            class M extends s {
                constructor(t, e, r) {
                    if (!(t instanceof l || t instanceof f)) throw TypeError("word must be a UInt or UIntBE layout");
                    if ("string" == typeof e && void 0 === r && (r = e, e = !1), 4 < t.span) throw RangeError("word cannot exceed 32 bits");
                    super(t.span, r), this.word = t, this.msb = !!e, this.fields = [];
                    let n = 0;
                    this._packedSetValue = function(t) {
                        return n = E(t), this
                    }, this._packedGetValue = function() {
                        return n
                    }
                }
                decode(t, e = 0) {
                    let r = this.makeDestinationObject(),
                        n = this.word.decode(t, e);
                    for (let e of (this._packedSetValue(n), this.fields)) void 0 !== e.property && (r[e.property] = e.decode(t));
                    return r
                }
                encode(t, e, r = 0) {
                    let n = this.word.decode(e, r);
                    for (let e of (this._packedSetValue(n), this.fields))
                        if (void 0 !== e.property) {
                            let r = t[e.property];
                            void 0 !== r && e.encode(r)
                        }
                    return this.word.encode(this._packedGetValue(), e, r)
                }
                addField(t, e) {
                    let r = new A(this, t, e);
                    return this.fields.push(r), r
                }
                addBoolean(t) {
                    let e = new B(this, t);
                    return this.fields.push(e), e
                }
                fieldFor(t) {
                    if ("string" != typeof t) throw TypeError("property must be string");
                    for (let e of this.fields)
                        if (e.property === t) return e
                }
            }
            class A {
                constructor(t, e, r) {
                    if (!(t instanceof M)) throw TypeError("container must be a BitStructure");
                    if (!Number.isInteger(e) || 0 >= e) throw TypeError("bits must be positive integer");
                    let n = 8 * t.span,
                        i = t.fields.reduce((t, e) => t + e.bits, 0);
                    if (e + i > n) throw Error("bits too long for span remainder (" + (n - i) + " of " + n + " remain)");
                    this.container = t, this.bits = e, this.valueMask = (1 << e) - 1, 32 === e && (this.valueMask = 4294967295), this.start = i, this.container.msb && (this.start = n - i - e), this.wordMask = E(this.valueMask << this.start), this.property = r
                }
                decode(t, e) {
                    return E(this.container._packedGetValue() & this.wordMask) >>> this.start
                }
                encode(t) {
                    if ("number" != typeof t || !Number.isInteger(t) || t !== E(t & this.valueMask)) throw TypeError(a("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                    let e = this.container._packedGetValue(),
                        r = E(t << this.start);
                    this.container._packedSetValue(E(e & ~this.wordMask) | r)
                }
            }
            class B extends A {
                constructor(t, e) {
                    super(t, 1, e)
                }
                decode(t, e) {
                    return !!super.decode(t, e)
                }
                encode(t) {
                    "boolean" == typeof t && (t = +t), super.encode(t)
                }
            }
            class _ extends s {
                constructor(t, e) {
                    if (!(t instanceof u && t.isCount() || Number.isInteger(t) && 0 <= t)) throw TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                    let r = -1;
                    t instanceof u || (r = t), super(r, e), this.length = t
                }
                getSpan(t, e) {
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(t, e)), r
                }
                decode(t, e = 0) {
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(t, e)), o(t).slice(e, e + r)
                }
                encode(t, e, r) {
                    let n = this.length;
                    if (this.length instanceof u && (n = t.length), !(t instanceof Uint8Array && n === t.length)) throw TypeError(a("Blob.encode", this) + " requires (length " + n + ") Uint8Array as src");
                    if (r + n > e.length) throw RangeError("encoding overruns Uint8Array");
                    let i = o(t);
                    return o(e).write(i.toString("hex"), r, n, "hex"), this.length instanceof u && this.length.encode(n, e, r), n
                }
            }
            e.cv = (t, e, r) => new h(t, e, r), e.u8 = t => new l(1, t), e.KB = t => new l(2, t), e.Jq = t => new l(4, t), e._O = t => new p(t), e.gM = t => new y(t), e.n_ = (t, e, r) => new m(t, e, r), e.A9 = (t, e, r) => new g(t, e, r), e.Ik = (t, e) => new _(t, e)
        },
        68485: function(t, e, r) {
            "use strict";
            var n = r(31760).Buffer;
            t.exports = function(t) {
                if (t.length >= 255) throw TypeError("Alphabet too long");
                for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
                for (var i = 0; i < t.length; i++) {
                    var o = t.charAt(i),
                        s = o.charCodeAt(0);
                    if (255 !== e[s]) throw TypeError(o + " is ambiguous");
                    e[s] = i
                }
                var a = t.length,
                    u = t.charAt(0),
                    h = Math.log(a) / Math.log(256),
                    l = Math.log(256) / Math.log(a);

                function f(t) {
                    if ("string" != typeof t) throw TypeError("Expected String");
                    if (0 === t.length) return n.alloc(0);
                    for (var r = 0, i = 0, o = 0; t[r] === u;) i++, r++;
                    for (var s = (t.length - r) * h + 1 >>> 0, l = new Uint8Array(s); r < t.length;) {
                        var f = e[t.charCodeAt(r)];
                        if (255 === f) return;
                        for (var c = 0, d = s - 1;
                            (0 !== f || c < o) && -1 !== d; d--, c++) f += a * l[d] >>> 0, l[d] = f % 256 >>> 0, f = f / 256 >>> 0;
                        if (0 !== f) throw Error("Non-zero carry");
                        o = c, r++
                    }
                    for (var p = s - o; p !== s && 0 === l[p];) p++;
                    var y = n.allocUnsafe(i + (s - p));
                    y.fill(0, 0, i);
                    for (var g = i; p !== s;) y[g++] = l[p++];
                    return y
                }
                return {
                    encode: function(e) {
                        if ((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)), !n.isBuffer(e)) throw TypeError("Expected Buffer");
                        if (0 === e.length) return "";
                        for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o];) o++, r++;
                        for (var h = (s - o) * l + 1 >>> 0, f = new Uint8Array(h); o !== s;) {
                            for (var c = e[o], d = 0, p = h - 1;
                                (0 !== c || d < i) && -1 !== p; p--, d++) c += 256 * f[p] >>> 0, f[p] = c % a >>> 0, c = c / a >>> 0;
                            if (0 !== c) throw Error("Non-zero carry");
                            i = d, o++
                        }
                        for (var y = h - i; y !== h && 0 === f[y];) y++;
                        for (var g = u.repeat(r); y < h; ++y) g += t.charAt(f[y]);
                        return g
                    },
                    decodeUnsafe: f,
                    decode: function(t) {
                        var e = f(t);
                        if (e) return e;
                        throw Error("Non-base" + a + " character")
                    }
                }
            }
        },
        81209: function(t, e) {
            "use strict";
            e.byteLength = function(t) {
                var e = u(t),
                    r = e[0],
                    n = e[1];
                return (r + n) * 3 / 4 - n
            }, e.toByteArray = function(t) {
                var e, r, o = u(t),
                    s = o[0],
                    a = o[1],
                    h = new i((s + a) * 3 / 4 - a),
                    l = 0,
                    f = a > 0 ? s - 4 : s;
                for (r = 0; r < f; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], h[l++] = e >> 16 & 255, h[l++] = e >> 8 & 255, h[l++] = 255 & e;
                return 2 === a && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, h[l++] = 255 & e), 1 === a && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, h[l++] = e >> 8 & 255, h[l++] = 255 & e), h
            }, e.fromByteArray = function(t) {
                for (var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383) o.push(function(t, e, n) {
                    for (var i, o = [], s = e; s < n; s += 3) o.push(r[(i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2])) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                    return o.join("")
                }(t, s, s + 16383 > a ? a : s + 16383));
                return 1 === i ? o.push(r[(e = t[n - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === i && o.push(r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), o.join("")
            };
            for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) r[s] = o[s], n[o.charCodeAt(s)] = s;

            function u(t) {
                var e = t.length;
                if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("="); - 1 === r && (r = e);
                var n = r === e ? 0 : 4 - r % 4;
                return [r, n]
            }
            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
        },
        12380: function(t, e, r) {
            "use strict";
            var n = r(21920).Buffer;
            e.oU = function(t) {
                {
                    let e = n.from(t);
                    e.reverse();
                    let r = e.toString("hex");
                    return 0 === r.length ? BigInt(0) : BigInt(`0x${r}`)
                }
            }, e.k$ = function(t, e) {
                {
                    let r = t.toString(16),
                        i = n.from(r.padStart(2 * e, "0").slice(0, 2 * e), "hex");
                    return i.reverse(), i
                }
            }
        },
        19113: function(t, e, r) {
            ! function(t, e) {
                "use strict";

                function n(t, e) {
                    if (!t) throw Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    f = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(79391).Buffer
                } catch (t) {}

                function s(t, e) {
                    var r = t.charCodeAt(e);
                    return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + t)
                }

                function a(t, e, r) {
                    var n = s(t, r);
                    return r - 1 >= e && (n |= s(t, r - 1) << 4), n
                }

                function u(t, e, r, i) {
                    for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
                        var h = t.charCodeAt(u) - 48;
                        o *= i, s = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h, n(h >= 0 && s < i, "Invalid character"), o += s
                    }
                    return o
                }

                function h(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, o.min = function(t, e) {
                        return 0 > t.cmp(e) ? t : e
                    }, o.prototype._init = function(t, e, r) {
                        if ("number" == typeof t) return this._initNumber(t, e, r);
                        if ("object" == typeof t) return this._initArray(t, e, r);
                        "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                        var i = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)))
                    }, o.prototype._initNumber = function(t, e, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                    }, o.prototype._initArray = function(t, e, r) {
                        if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                        for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
                        var a = 0;
                        if ("be" === r)
                            for (s = t.length - 1, i = 0; s >= 0; s -= 3) o = t[s] | t[s - 1] << 8 | t[s - 2] << 16, this.words[i] |= o << a & 67108863, this.words[i + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, i++);
                        else if ("le" === r)
                            for (s = 0, i = 0; s < t.length; s += 3) o = t[s] | t[s + 1] << 8 | t[s + 2] << 16, this.words[i] |= o << a & 67108863, this.words[i + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, i++);
                        return this._strip()
                    }, o.prototype._parseHex = function(t, e, r) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                        for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
                        var o = 0,
                            s = 0;
                        if ("be" === r)
                            for (i = t.length - 1; i >= e; i -= 2) n = a(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        else
                            for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) n = a(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        this._strip()
                    }, o.prototype._parseBase = function(t, e, r) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                        n--, i = i / e | 0;
                        for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, h = 0, l = r; l < a; l += n) h = u(t, l, l + n, e), this.imuln(i), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                        if (0 !== s) {
                            var f = 1;
                            for (h = u(t, l, t.length, e), l = 0; l < s; l++) f *= e;
                            this.imuln(f), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
                        }
                        this._strip()
                    }, o.prototype.copy = function(t) {
                        t.words = Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype._move = function(t) {
                        h(t, this)
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                    o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l
                } catch (t) {
                    o.prototype.inspect = l
                } else o.prototype.inspect = l;

                function l() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var f, c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function y(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var n = t.length + e.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | t.words[0],
                        o = 0 | e.words[0],
                        s = i * o,
                        a = 67108863 & s,
                        u = s / 67108864 | 0;
                    r.words[0] = a;
                    for (var h = 1; h < n; h++) {
                        for (var l = u >>> 26, f = 67108863 & u, c = Math.min(h, e.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
                            var p = h - d | 0;
                            l += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + f) / 67108864 | 0, f = 67108863 & s
                        }
                        r.words[h] = 0 | f, u = 0 | l
                    }
                    return 0 !== u ? r.words[h] = 0 | u : r.length--, r._strip()
                }
                o.prototype.toString = function(t, e) {
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var r, i = 0, o = 0, s = 0; s < this.length; s++) {
                            var a = this.words[s],
                                u = ((a << i | o) & 16777215).toString(16);
                            o = a >>> 24 - i & 16777215, (i += 2) >= 26 && (i -= 26, s--), r = 0 !== o || s !== this.length - 1 ? c[6 - u.length] + u + r : u + r
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var h = d[t],
                            l = p[t];
                        r = "";
                        var f = this.clone();
                        for (f.negative = 0; !f.isZero();) {
                            var y = f.modrn(l).toString(t);
                            r = (f = f.idivn(l)).isZero() ? y + r : c[h - y.length] + y + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, f && (o.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(f, t, e)
                }), o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function(t, e, r) {
                    this._strip();
                    var i = this.byteLength(),
                        o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0");
                    var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s
                }, o.prototype._toArrayLikeLE = function(t, e) {
                    for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                        var s = this.words[i] << o | n;
                        t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
                    }
                    if (r < t.length)
                        for (t[r++] = n; r < t.length;) t[r++] = 0
                }, o.prototype._toArrayLikeBE = function(t, e) {
                    for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                        var s = this.words[i] << o | n;
                        t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
                    }
                    if (r >= 0)
                        for (t[r--] = n; r >= 0;) t[r--] = 0
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return (8191 & e) == 0 && (r += 13, e >>>= 13), (127 & e) == 0 && (r += 7, e >>>= 7), (15 & e) == 0 && (r += 4, e >>>= 4), (3 & e) == 0 && (r += 2, e >>>= 2), (1 & e) == 0 && r++, r
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return (this.length - 1) * 26 + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, o.prototype.ior = function(t) {
                    return n((this.negative | t.negative) == 0), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this._strip()
                }, o.prototype.iand = function(t) {
                    return n((this.negative | t.negative) == 0), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var e, r, n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                    if (this !== e)
                        for (; n < e.length; n++) this.words[n] = e.words[n];
                    return this.length = e.length, this._strip()
                }, o.prototype.ixor = function(t) {
                    return n((this.negative | t.negative) == 0), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this._strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    n("number" == typeof t && t >= 0);
                    var r = t / 26 | 0,
                        i = t % 26;
                    return this._expand(r + 1), e ? this.words[r] = this.words[r] | 1 << i : this.words[r] = this.words[r] & ~(1 << i), this._strip()
                }, o.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                    for (var e, r, n, i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e, r, n = this.iadd(t);
                        return t.negative = 1, n._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (e = this, r = t) : (e = t, r = this);
                    for (var o = 0, s = 0; s < r.length; s++) o = (n = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & n;
                    for (; 0 !== o && s < e.length; s++) o = (n = (0 | e.words[s]) + o) >> 26, this.words[s] = 67108863 & n;
                    if (0 === o && s < e.length && e !== this)
                        for (; s < e.length; s++) this.words[s] = e.words[s];
                    return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this._strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var g = function(t, e, r) {
                    var n, i, o, s = t.words,
                        a = e.words,
                        u = r.words,
                        h = 0,
                        l = 0 | s[0],
                        f = 8191 & l,
                        c = l >>> 13,
                        d = 0 | s[1],
                        p = 8191 & d,
                        y = d >>> 13,
                        g = 0 | s[2],
                        m = 8191 & g,
                        b = g >>> 13,
                        w = 0 | s[3],
                        v = 8191 & w,
                        x = w >>> 13,
                        E = 0 | s[4],
                        M = 8191 & E,
                        A = E >>> 13,
                        B = 0 | s[5],
                        _ = 8191 & B,
                        U = B >>> 13,
                        S = 0 | s[6],
                        I = 8191 & S,
                        k = S >>> 13,
                        O = 0 | s[7],
                        L = 8191 & O,
                        R = O >>> 13,
                        T = 0 | s[8],
                        P = 8191 & T,
                        N = T >>> 13,
                        z = 0 | s[9],
                        C = 8191 & z,
                        q = z >>> 13,
                        j = 0 | a[0],
                        $ = 8191 & j,
                        F = j >>> 13,
                        Z = 0 | a[1],
                        H = 8191 & Z,
                        V = Z >>> 13,
                        D = 0 | a[2],
                        G = 8191 & D,
                        K = D >>> 13,
                        Y = 0 | a[3],
                        W = 8191 & Y,
                        Q = Y >>> 13,
                        J = 0 | a[4],
                        X = 8191 & J,
                        tt = J >>> 13,
                        te = 0 | a[5],
                        tr = 8191 & te,
                        tn = te >>> 13,
                        ti = 0 | a[6],
                        to = 8191 & ti,
                        ts = ti >>> 13,
                        ta = 0 | a[7],
                        tu = 8191 & ta,
                        th = ta >>> 13,
                        tl = 0 | a[8],
                        tf = 8191 & tl,
                        tc = tl >>> 13,
                        td = 0 | a[9],
                        tp = 8191 & td,
                        ty = td >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var tg = (h + (n = Math.imul(f, $)) | 0) + ((8191 & (i = (i = Math.imul(f, F)) + Math.imul(c, $) | 0)) << 13) | 0;
                    h = ((o = Math.imul(c, F)) + (i >>> 13) | 0) + (tg >>> 26) | 0, tg &= 67108863, n = Math.imul(p, $), i = (i = Math.imul(p, F)) + Math.imul(y, $) | 0, o = Math.imul(y, F);
                    var tm = (h + (n = n + Math.imul(f, H) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, V) | 0) + Math.imul(c, H) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(c, V) | 0) + (i >>> 13) | 0) + (tm >>> 26) | 0, tm &= 67108863, n = Math.imul(m, $), i = (i = Math.imul(m, F)) + Math.imul(b, $) | 0, o = Math.imul(b, F), n = n + Math.imul(p, H) | 0, i = (i = i + Math.imul(p, V) | 0) + Math.imul(y, H) | 0, o = o + Math.imul(y, V) | 0;
                    var tb = (h + (n = n + Math.imul(f, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, K) | 0) + Math.imul(c, G) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(c, K) | 0) + (i >>> 13) | 0) + (tb >>> 26) | 0, tb &= 67108863, n = Math.imul(v, $), i = (i = Math.imul(v, F)) + Math.imul(x, $) | 0, o = Math.imul(x, F), n = n + Math.imul(m, H) | 0, i = (i = i + Math.imul(m, V) | 0) + Math.imul(b, H) | 0, o = o + Math.imul(b, V) | 0, n = n + Math.imul(p, G) | 0, i = (i = i + Math.imul(p, K) | 0) + Math.imul(y, G) | 0, o = o + Math.imul(y, K) | 0;
                    var tw = (h + (n = n + Math.imul(f, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, Q) | 0) + Math.imul(c, W) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(c, Q) | 0) + (i >>> 13) | 0) + (tw >>> 26) | 0, tw &= 67108863, n = Math.imul(M, $), i = (i = Math.imul(M, F)) + Math.imul(A, $) | 0, o = Math.imul(A, F), n = n + Math.imul(v, H) | 0, i = (i = i + Math.imul(v, V) | 0) + Math.imul(x, H) | 0, o = o + Math.imul(x, V) | 0, n = n + Math.imul(m, G) | 0, i = (i = i + Math.imul(m, K) | 0) + Math.imul(b, G) | 0, o = o + Math.imul(b, K) | 0, n = n + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, Q) | 0) + Math.imul(y, W) | 0, o = o + Math.imul(y, Q) | 0;
                    var tv = (h + (n = n + Math.imul(f, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, tt) | 0) + Math.imul(c, X) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(c, tt) | 0) + (i >>> 13) | 0) + (tv >>> 26) | 0, tv &= 67108863, n = Math.imul(_, $), i = (i = Math.imul(_, F)) + Math.imul(U, $) | 0, o = Math.imul(U, F), n = n + Math.imul(M, H) | 0, i = (i = i + Math.imul(M, V) | 0) + Math.imul(A, H) | 0, o = o + Math.imul(A, V) | 0, n = n + Math.imul(v, G) | 0, i = (i = i + Math.imul(v, K) | 0) + Math.imul(x, G) | 0, o = o + Math.imul(x, K) | 0, n = n + Math.imul(m, W) | 0, i = (i = i + Math.imul(m, Q) | 0) + Math.imul(b, W) | 0, o = o + Math.imul(b, Q) | 0, n = n + Math.imul(p, X) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(y, X) | 0, o = o + Math.imul(y, tt) | 0;
                    var tx = (h + (n = n + Math.imul(f, tr) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, tn) | 0) + Math.imul(c, tr) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(c, tn) | 0) + (i >>> 13) | 0) + (tx >>> 26) | 0, tx &= 67108863, n = Math.imul(I, $), i = (i = Math.imul(I, F)) + Math.imul(k, $) | 0, o = Math.imul(k, F), n = n + Math.imul(_, H) | 0, i = (i = i + Math.imul(_, V) | 0) + Math.imul(U, H) | 0, o = o + Math.imul(U, V) | 0, n = n + Math.imul(M, G) | 0, i = (i = i + Math.imul(M, K) | 0) + Math.imul(A, G) | 0, o = o + Math.imul(A, K) | 0, n = n + Math.imul(v, W) | 0, i = (i = i + Math.imul(v, Q) | 0) + Math.imul(x, W) | 0, o = o + Math.imul(x, Q) | 0, n = n + Math.imul(m, X) | 0, i = (i = i + Math.imul(m, tt) | 0) + Math.imul(b, X) | 0, o = o + Math.imul(b, tt) | 0, n = n + Math.imul(p, tr) | 0, i = (i = i + Math.imul(p, tn) | 0) + Math.imul(y, tr) | 0, o = o + Math.imul(y, tn) | 0;
                    var tE = (h + (n = n + Math.imul(f, to) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ts) | 0) + Math.imul(c, to) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(c, ts) | 0) + (i >>> 13) | 0) + (tE >>> 26) | 0, tE &= 67108863, n = Math.imul(L, $), i = (i = Math.imul(L, F)) + Math.imul(R, $) | 0, o = Math.imul(R, F), n = n + Math.imul(I, H) | 0, i = (i = i + Math.imul(I, V) | 0) + Math.imul(k, H) | 0, o = o + Math.imul(k, V) | 0, n = n + Math.imul(_, G) | 0, i = (i = i + Math.imul(_, K) | 0) + Math.imul(U, G) | 0, o = o + Math.imul(U, K) | 0, n = n + Math.imul(M, W) | 0, i = (i = i + Math.imul(M, Q) | 0) + Math.imul(A, W) | 0, o = o + Math.imul(A, Q) | 0, n = n + Math.imul(v, X) | 0, i = (i = i + Math.imul(v, tt) | 0) + Math.imul(x, X) | 0, o = o + Math.imul(x, tt) | 0, n = n + Math.imul(m, tr) | 0, i = (i = i + Math.imul(m, tn) | 0) + Math.imul(b, tr) | 0, o = o + Math.imul(b, tn) | 0, n = n + Math.imul(p, to) | 0, i = (i = i + Math.imul(p, ts) | 0) + Math.imul(y, to) | 0, o = o + Math.imul(y, ts) | 0;
                    var tM = (h + (n = n + Math.imul(f, tu) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, th) | 0) + Math.imul(c, tu) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(c, th) | 0) + (i >>> 13) | 0) + (tM >>> 26) | 0, tM &= 67108863, n = Math.imul(P, $), i = (i = Math.imul(P, F)) + Math.imul(N, $) | 0, o = Math.imul(N, F), n = n + Math.imul(L, H) | 0, i = (i = i + Math.imul(L, V) | 0) + Math.imul(R, H) | 0, o = o + Math.imul(R, V) | 0, n = n + Math.imul(I, G) | 0, i = (i = i + Math.imul(I, K) | 0) + Math.imul(k, G) | 0, o = o + Math.imul(k, K) | 0, n = n + Math.imul(_, W) | 0, i = (i = i + Math.imul(_, Q) | 0) + Math.imul(U, W) | 0, o = o + Math.imul(U, Q) | 0, n = n + Math.imul(M, X) | 0, i = (i = i + Math.imul(M, tt) | 0) + Math.imul(A, X) | 0, o = o + Math.imul(A, tt) | 0, n = n + Math.imul(v, tr) | 0, i = (i = i + Math.imul(v, tn) | 0) + Math.imul(x, tr) | 0, o = o + Math.imul(x, tn) | 0, n = n + Math.imul(m, to) | 0, i = (i = i + Math.imul(m, ts) | 0) + Math.imul(b, to) | 0, o = o + Math.imul(b, ts) | 0, n = n + Math.imul(p, tu) | 0, i = (i = i + Math.imul(p, th) | 0) + Math.imul(y, tu) | 0, o = o + Math.imul(y, th) | 0;
                    var tA = (h + (n = n + Math.imul(f, tf) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, tc) | 0) + Math.imul(c, tf) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(c, tc) | 0) + (i >>> 13) | 0) + (tA >>> 26) | 0, tA &= 67108863, n = Math.imul(C, $), i = (i = Math.imul(C, F)) + Math.imul(q, $) | 0, o = Math.imul(q, F), n = n + Math.imul(P, H) | 0, i = (i = i + Math.imul(P, V) | 0) + Math.imul(N, H) | 0, o = o + Math.imul(N, V) | 0, n = n + Math.imul(L, G) | 0, i = (i = i + Math.imul(L, K) | 0) + Math.imul(R, G) | 0, o = o + Math.imul(R, K) | 0, n = n + Math.imul(I, W) | 0, i = (i = i + Math.imul(I, Q) | 0) + Math.imul(k, W) | 0, o = o + Math.imul(k, Q) | 0, n = n + Math.imul(_, X) | 0, i = (i = i + Math.imul(_, tt) | 0) + Math.imul(U, X) | 0, o = o + Math.imul(U, tt) | 0, n = n + Math.imul(M, tr) | 0, i = (i = i + Math.imul(M, tn) | 0) + Math.imul(A, tr) | 0, o = o + Math.imul(A, tn) | 0, n = n + Math.imul(v, to) | 0, i = (i = i + Math.imul(v, ts) | 0) + Math.imul(x, to) | 0, o = o + Math.imul(x, ts) | 0, n = n + Math.imul(m, tu) | 0, i = (i = i + Math.imul(m, th) | 0) + Math.imul(b, tu) | 0, o = o + Math.imul(b, th) | 0, n = n + Math.imul(p, tf) | 0, i = (i = i + Math.imul(p, tc) | 0) + Math.imul(y, tf) | 0, o = o + Math.imul(y, tc) | 0;
                    var tB = (h + (n = n + Math.imul(f, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ty) | 0) + Math.imul(c, tp) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(c, ty) | 0) + (i >>> 13) | 0) + (tB >>> 26) | 0, tB &= 67108863, n = Math.imul(C, H), i = (i = Math.imul(C, V)) + Math.imul(q, H) | 0, o = Math.imul(q, V), n = n + Math.imul(P, G) | 0, i = (i = i + Math.imul(P, K) | 0) + Math.imul(N, G) | 0, o = o + Math.imul(N, K) | 0, n = n + Math.imul(L, W) | 0, i = (i = i + Math.imul(L, Q) | 0) + Math.imul(R, W) | 0, o = o + Math.imul(R, Q) | 0, n = n + Math.imul(I, X) | 0, i = (i = i + Math.imul(I, tt) | 0) + Math.imul(k, X) | 0, o = o + Math.imul(k, tt) | 0, n = n + Math.imul(_, tr) | 0, i = (i = i + Math.imul(_, tn) | 0) + Math.imul(U, tr) | 0, o = o + Math.imul(U, tn) | 0, n = n + Math.imul(M, to) | 0, i = (i = i + Math.imul(M, ts) | 0) + Math.imul(A, to) | 0, o = o + Math.imul(A, ts) | 0, n = n + Math.imul(v, tu) | 0, i = (i = i + Math.imul(v, th) | 0) + Math.imul(x, tu) | 0, o = o + Math.imul(x, th) | 0, n = n + Math.imul(m, tf) | 0, i = (i = i + Math.imul(m, tc) | 0) + Math.imul(b, tf) | 0, o = o + Math.imul(b, tc) | 0;
                    var t_ = (h + (n = n + Math.imul(p, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, ty) | 0) + Math.imul(y, tp) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(y, ty) | 0) + (i >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 67108863, n = Math.imul(C, G), i = (i = Math.imul(C, K)) + Math.imul(q, G) | 0, o = Math.imul(q, K), n = n + Math.imul(P, W) | 0, i = (i = i + Math.imul(P, Q) | 0) + Math.imul(N, W) | 0, o = o + Math.imul(N, Q) | 0, n = n + Math.imul(L, X) | 0, i = (i = i + Math.imul(L, tt) | 0) + Math.imul(R, X) | 0, o = o + Math.imul(R, tt) | 0, n = n + Math.imul(I, tr) | 0, i = (i = i + Math.imul(I, tn) | 0) + Math.imul(k, tr) | 0, o = o + Math.imul(k, tn) | 0, n = n + Math.imul(_, to) | 0, i = (i = i + Math.imul(_, ts) | 0) + Math.imul(U, to) | 0, o = o + Math.imul(U, ts) | 0, n = n + Math.imul(M, tu) | 0, i = (i = i + Math.imul(M, th) | 0) + Math.imul(A, tu) | 0, o = o + Math.imul(A, th) | 0, n = n + Math.imul(v, tf) | 0, i = (i = i + Math.imul(v, tc) | 0) + Math.imul(x, tf) | 0, o = o + Math.imul(x, tc) | 0;
                    var tU = (h + (n = n + Math.imul(m, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(m, ty) | 0) + Math.imul(b, tp) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(b, ty) | 0) + (i >>> 13) | 0) + (tU >>> 26) | 0, tU &= 67108863, n = Math.imul(C, W), i = (i = Math.imul(C, Q)) + Math.imul(q, W) | 0, o = Math.imul(q, Q), n = n + Math.imul(P, X) | 0, i = (i = i + Math.imul(P, tt) | 0) + Math.imul(N, X) | 0, o = o + Math.imul(N, tt) | 0, n = n + Math.imul(L, tr) | 0, i = (i = i + Math.imul(L, tn) | 0) + Math.imul(R, tr) | 0, o = o + Math.imul(R, tn) | 0, n = n + Math.imul(I, to) | 0, i = (i = i + Math.imul(I, ts) | 0) + Math.imul(k, to) | 0, o = o + Math.imul(k, ts) | 0, n = n + Math.imul(_, tu) | 0, i = (i = i + Math.imul(_, th) | 0) + Math.imul(U, tu) | 0, o = o + Math.imul(U, th) | 0, n = n + Math.imul(M, tf) | 0, i = (i = i + Math.imul(M, tc) | 0) + Math.imul(A, tf) | 0, o = o + Math.imul(A, tc) | 0;
                    var tS = (h + (n = n + Math.imul(v, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, ty) | 0) + Math.imul(x, tp) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(x, ty) | 0) + (i >>> 13) | 0) + (tS >>> 26) | 0, tS &= 67108863, n = Math.imul(C, X), i = (i = Math.imul(C, tt)) + Math.imul(q, X) | 0, o = Math.imul(q, tt), n = n + Math.imul(P, tr) | 0, i = (i = i + Math.imul(P, tn) | 0) + Math.imul(N, tr) | 0, o = o + Math.imul(N, tn) | 0, n = n + Math.imul(L, to) | 0, i = (i = i + Math.imul(L, ts) | 0) + Math.imul(R, to) | 0, o = o + Math.imul(R, ts) | 0, n = n + Math.imul(I, tu) | 0, i = (i = i + Math.imul(I, th) | 0) + Math.imul(k, tu) | 0, o = o + Math.imul(k, th) | 0, n = n + Math.imul(_, tf) | 0, i = (i = i + Math.imul(_, tc) | 0) + Math.imul(U, tf) | 0, o = o + Math.imul(U, tc) | 0;
                    var tI = (h + (n = n + Math.imul(M, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(M, ty) | 0) + Math.imul(A, tp) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(A, ty) | 0) + (i >>> 13) | 0) + (tI >>> 26) | 0, tI &= 67108863, n = Math.imul(C, tr), i = (i = Math.imul(C, tn)) + Math.imul(q, tr) | 0, o = Math.imul(q, tn), n = n + Math.imul(P, to) | 0, i = (i = i + Math.imul(P, ts) | 0) + Math.imul(N, to) | 0, o = o + Math.imul(N, ts) | 0, n = n + Math.imul(L, tu) | 0, i = (i = i + Math.imul(L, th) | 0) + Math.imul(R, tu) | 0, o = o + Math.imul(R, th) | 0, n = n + Math.imul(I, tf) | 0, i = (i = i + Math.imul(I, tc) | 0) + Math.imul(k, tf) | 0, o = o + Math.imul(k, tc) | 0;
                    var tk = (h + (n = n + Math.imul(_, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, ty) | 0) + Math.imul(U, tp) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(U, ty) | 0) + (i >>> 13) | 0) + (tk >>> 26) | 0, tk &= 67108863, n = Math.imul(C, to), i = (i = Math.imul(C, ts)) + Math.imul(q, to) | 0, o = Math.imul(q, ts), n = n + Math.imul(P, tu) | 0, i = (i = i + Math.imul(P, th) | 0) + Math.imul(N, tu) | 0, o = o + Math.imul(N, th) | 0, n = n + Math.imul(L, tf) | 0, i = (i = i + Math.imul(L, tc) | 0) + Math.imul(R, tf) | 0, o = o + Math.imul(R, tc) | 0;
                    var tO = (h + (n = n + Math.imul(I, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, ty) | 0) + Math.imul(k, tp) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(k, ty) | 0) + (i >>> 13) | 0) + (tO >>> 26) | 0, tO &= 67108863, n = Math.imul(C, tu), i = (i = Math.imul(C, th)) + Math.imul(q, tu) | 0, o = Math.imul(q, th), n = n + Math.imul(P, tf) | 0, i = (i = i + Math.imul(P, tc) | 0) + Math.imul(N, tf) | 0, o = o + Math.imul(N, tc) | 0;
                    var tL = (h + (n = n + Math.imul(L, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, ty) | 0) + Math.imul(R, tp) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(R, ty) | 0) + (i >>> 13) | 0) + (tL >>> 26) | 0, tL &= 67108863, n = Math.imul(C, tf), i = (i = Math.imul(C, tc)) + Math.imul(q, tf) | 0, o = Math.imul(q, tc);
                    var tR = (h + (n = n + Math.imul(P, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, ty) | 0) + Math.imul(N, tp) | 0)) << 13) | 0;
                    h = ((o = o + Math.imul(N, ty) | 0) + (i >>> 13) | 0) + (tR >>> 26) | 0, tR &= 67108863;
                    var tT = (h + (n = Math.imul(C, tp)) | 0) + ((8191 & (i = (i = Math.imul(C, ty)) + Math.imul(q, tp) | 0)) << 13) | 0;
                    return h = ((o = Math.imul(q, ty)) + (i >>> 13) | 0) + (tT >>> 26) | 0, tT &= 67108863, u[0] = tg, u[1] = tm, u[2] = tb, u[3] = tw, u[4] = tv, u[5] = tx, u[6] = tE, u[7] = tM, u[8] = tA, u[9] = tB, u[10] = t_, u[11] = tU, u[12] = tS, u[13] = tI, u[14] = tk, u[15] = tO, u[16] = tL, u[17] = tR, u[18] = tT, 0 !== h && (u[19] = h, r.length++), r
                };

                function m(t, e, r) {
                    r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                    for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                        var s = i;
                        i = 0;
                        for (var a = 67108863 & n, u = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= u; h++) {
                            var l = o - h,
                                f = (0 | t.words[l]) * (0 | e.words[h]),
                                c = 67108863 & f;
                            s = s + (f / 67108864 | 0) | 0, a = 67108863 & (c = c + a | 0), i += (s = s + (c >>> 26) | 0) >>> 26, s &= 67108863
                        }
                        r.words[o] = a, n = s, s = i
                    }
                    return 0 !== n ? r.words[o] = n : r.length--, r._strip()
                }

                function b(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (g = y), o.prototype.mulTo = function(t, e) {
                    var r, n = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? g(this, t, e) : n < 63 ? y(this, t, e) : m(this, t, e)
                }, b.prototype.makeRBT = function(t) {
                    for (var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                    return e
                }, b.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                    return n
                }, b.prototype.permute = function(t, e, r, n, i, o) {
                    for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]]
                }, b.prototype.transform = function(t, e, r, n, i, o) {
                    this.permute(o, t, e, r, n, i);
                    for (var s = 1; s < i; s <<= 1)
                        for (var a = s << 1, u = Math.cos(2 * Math.PI / a), h = Math.sin(2 * Math.PI / a), l = 0; l < i; l += a)
                            for (var f = u, c = h, d = 0; d < s; d++) {
                                var p = r[l + d],
                                    y = n[l + d],
                                    g = r[l + d + s],
                                    m = n[l + d + s],
                                    b = f * g - c * m;
                                m = f * m + c * g, g = b, r[l + d] = p + g, n[l + d] = y + m, r[l + d + s] = p - g, n[l + d + s] = y - m, d !== a && (b = u * f - h * c, c = u * c + h * f, f = b)
                            }
                }, b.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, b.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = t[n];
                            t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                        }
                }, b.prototype.normalize13b = function(t, e) {
                    for (var r = 0, n = 0; n < e / 2; n++) {
                        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, b.prototype.convert13b = function(t, e, r, i) {
                    for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
                    for (s = 2 * e; s < i; ++s) r[s] = 0;
                    n(0 === o), n((-8192 & o) == 0)
                }, b.prototype.stub = function(t) {
                    for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, b.prototype.mulp = function(t, e, r) {
                    var n = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        s = Array(n),
                        a = Array(n),
                        u = Array(n),
                        h = Array(n),
                        l = Array(n),
                        f = Array(n),
                        c = r.words;
                    c.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, h, n), this.transform(s, o, a, u, n, i), this.transform(h, o, l, f, n, i);
                    for (var d = 0; d < n; d++) {
                        var p = a[d] * l[d] - u[d] * f[d];
                        u[d] = a[d] * f[d] + u[d] * l[d], a[d] = p
                    }
                    return this.conjugate(a, u, n), this.transform(a, u, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = Array(this.length + t.length), m(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), n("number" == typeof t), n(t < 67108864);
                    for (var r = 0, i = 0; i < this.length; i++) {
                        var o = (0 | this.words[i]) * t,
                            s = (67108863 & o) + (67108863 & r);
                        r >>= 26, r += (o / 67108864 | 0) + (s >>> 26), this.words[i] = 67108863 & s
                    }
                    return 0 !== r && (this.words[i] = r, this.length++), e ? this.ineg() : this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            e[r] = t.words[n] >>> i & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                    if (++n < e.length)
                        for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e, r = t % 26,
                        i = (t - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var s = 0;
                        for (e = 0; e < this.length; e++) {
                            var a = this.words[e] & o,
                                u = (0 | this.words[e]) - a << r;
                            this.words[e] = u | s, s = a >>> 26 - r
                        }
                        s && (this.words[e] = s, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this._strip()
                }, o.prototype.ishln = function(t) {
                    return n(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, r) {
                    n("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var i, o = t % 26,
                        s = Math.min((t - o) / 26, this.length),
                        a = 67108863 ^ 67108863 >>> o << o;
                    if (i -= s, i = Math.max(0, i), r) {
                        for (var u = 0; u < s; u++) r.words[u] = this.words[u];
                        r.length = s
                    }
                    if (0 === s);
                    else if (this.length > s)
                        for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
                    else this.words[0] = 0, this.length = 1;
                    var h = 0;
                    for (u = this.length - 1; u >= 0 && (0 !== h || u >= i); u--) {
                        var l = 0 | this.words[u];
                        this.words[u] = h << 26 - o | l >>> o, h = l & a
                    }
                    return r && 0 !== h && (r.words[r.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, o.prototype.ishrn = function(t, e, r) {
                    return n(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    return !(this.length <= r) && !!(this.words[r] & 1 << e)
                }, o.prototype.imaskn = function(t) {
                    n("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    return (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e), this._strip())
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return (n("number" == typeof t), n(t < 67108864), t < 0) ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(t), this.negative = 1), this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, o.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(t, e, r) {
                    var i, o, s = t.length + r;
                    this._expand(s);
                    var a = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + r]) + a;
                        var u = (0 | t.words[i]) * e;
                        o -= 67108863 & u, a = (o >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) a = (o = (0 | this.words[i + r]) + a) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === a) return this._strip();
                    for (n(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this._strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var r, n = this.length - t.length,
                        i = this.clone(),
                        s = t,
                        a = 0 | s.words[s.length - 1];
                    0 != (n = 26 - this._countBits(a)) && (s = s.ushln(n), i.iushln(n), a = 0 | s.words[s.length - 1]);
                    var u = i.length - s.length;
                    if ("mod" !== e) {
                        (r = new o(null)).length = u + 1, r.words = Array(r.length);
                        for (var h = 0; h < r.length; h++) r.words[h] = 0
                    }
                    var l = i.clone()._ishlnsubmul(s, 1, u);
                    0 === l.negative && (i = l, r && (r.words[u] = 1));
                    for (var f = u - 1; f >= 0; f--) {
                        var c = (0 | i.words[s.length + f]) * 67108864 + (0 | i.words[s.length + f - 1]);
                        for (c = Math.min(c / a | 0, 67108863), i._ishlnsubmul(s, c, f); 0 !== i.negative;) c--, i.negative = 0, i._ishlnsubmul(s, 1, f), i.isZero() || (i.negative ^= 1);
                        r && (r.words[f] = c)
                    }
                    return r && r._strip(), i._strip(), "div" !== e && 0 !== n && i.iushrn(n), {
                        div: r || null,
                        mod: i
                    }
                }, o.prototype.divmod = function(t, e, r) {
                    var i, s, a;
                    return (n(!t.isZero()), this.isZero()) ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (i = a.div.neg()), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                        div: i,
                        mod: s
                    }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (i = a.div.neg()), {
                        div: i,
                        mod: a.mod
                    }) : (this.negative & t.negative) != 0 ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                        div: a.div,
                        mod: s
                    }) : t.length > this.length || 0 > this.cmp(t) ? {
                        div: new o(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new o(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modrn(t.words[0]))
                    } : this._wordDiv(t, e)
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        n = t.ushrn(1),
                        i = t.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), n(t <= 67108863);
                    for (var r = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--) i = (r * i + (0 | this.words[o])) % t;
                    return e ? -i : i
                }, o.prototype.modn = function(t) {
                    return this.modrn(t)
                }, o.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), n(t <= 67108863);
                    for (var r = 0, i = this.length - 1; i >= 0; i--) {
                        var o = (0 | this.words[i]) + 67108864 * r;
                        this.words[i] = o / t | 0, r = o % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), h = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++h;
                    for (var l = r.clone(), f = e.clone(); !e.isZero();) {
                        for (var c = 0, d = 1;
                            (e.words[0] & d) == 0 && c < 26; ++c, d <<= 1);
                        if (c > 0)
                            for (e.iushrn(c); c-- > 0;)(i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(f)), i.iushrn(1), s.iushrn(1);
                        for (var p = 0, y = 1;
                            (r.words[0] & y) == 0 && p < 26; ++p, y <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(f)), a.iushrn(1), u.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), i.isub(a), s.isub(u)) : (r.isub(e), a.isub(i), u.isub(s))
                    }
                    return {
                        a: a,
                        b: u,
                        gcd: r.iushln(h)
                    }
                }, o.prototype._invmp = function(t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e, r = this,
                        i = t.clone();
                    r = 0 !== r.negative ? r.umod(t) : r.clone();
                    for (var s = new o(1), a = new o(0), u = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                        for (var h = 0, l = 1;
                            (r.words[0] & l) == 0 && h < 26; ++h, l <<= 1);
                        if (h > 0)
                            for (r.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        for (var f = 0, c = 1;
                            (i.words[0] & c) == 0 && f < 26; ++f, c <<= 1);
                        if (f > 0)
                            for (i.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        r.cmp(i) >= 0 ? (r.isub(i), s.isub(a)) : (i.isub(r), a.isub(s))
                    }
                    return 0 > (e = 0 === r.cmpn(1) ? s : a).cmpn(0) && e.iadd(t), e
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = e.cmp(r);
                        if (i < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, o.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    n("number" == typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        i = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                        var a = 0 | this.words[s];
                        a += o, o = a >>> 26, a &= 67108863, this.words[s] = a
                    }
                    return 0 !== o && (this.words[s] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this._strip(), this.length > 1) e = 1;
                    else {
                        r && (t = -t), n(t <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        e = i === t ? 0 : i < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | t.words[r];
                        if (n !== i) {
                            n < i ? e = -1 : n > i && (e = 1);
                            break
                        }
                    }
                    return e
                }, o.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, o.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, o.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, o.red = function(t) {
                    return new B(t)
                }, o.prototype.toRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var w = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function v(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function x() {
                    v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function E() {
                    v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function M() {
                    v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function A() {
                    v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function B(t) {
                    if ("string" == typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function _(t) {
                    B.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                v.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = Array(Math.ceil(this.n / 13)), t
                }, v.prototype.ireduce = function(t) {
                    var e, r = t;
                    do this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (e > this.n);
                    var n = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, v.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, v.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(x, v), x.prototype.split = function(t, e) {
                    for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n];
                    if (e.length = r, t.length <= 9) {
                        t.words[0] = 0, t.length = 1;
                        return
                    }
                    var i = t.words[9];
                    for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
                        var o = 0 | t.words[n];
                        t.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                    }
                    i >>>= 22, t.words[n - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, x.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 0 | t.words[r];
                        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(E, v), i(M, v), i(A, v), A.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = (0 | t.words[r]) * 19 + e,
                            i = 67108863 & n;
                        n >>>= 26, t.words[r] = i, e = n
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    var e;
                    if (w[t]) return w[t];
                    if ("k256" === t) e = new x;
                    else if ("p224" === t) e = new E;
                    else if ("p192" === t) e = new M;
                    else if ("p25519" === t) e = new A;
                    else throw Error("Unknown prime " + t);
                    return w[t] = e, e
                }, B.prototype._verify1 = function(t) {
                    n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                }, B.prototype._verify2 = function(t, e) {
                    n((t.negative | e.negative) == 0, "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                }, B.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (h(t, t.umod(this.m)._forceRed(this)), t)
                }, B.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, B.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, B.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, B.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                }, B.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                }, B.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, B.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, B.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, B.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, B.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, B.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (n(e % 2 == 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                    n(!i.isZero());
                    var a = new o(1).toRed(this),
                        u = a.redNeg(),
                        h = this.m.subn(1).iushrn(1),
                        l = this.m.bitLength();
                    for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, h).cmp(u);) l.redIAdd(u);
                    for (var f = this.pow(l, i), c = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = s; 0 !== d.cmp(a);) {
                        for (var y = d, g = 0; 0 !== y.cmp(a); g++) y = y.redSqr();
                        n(g < p);
                        var m = this.pow(f, new o(1).iushln(p - g - 1));
                        c = c.redMul(m), f = m.redSqr(), d = d.redMul(f), p = g
                    }
                    return c
                }, B.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, B.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                    var i = r[0],
                        s = 0,
                        a = 0,
                        u = e.bitLength() % 26;
                    for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                        for (var h = e.words[n], l = u - 1; l >= 0; l--) {
                            var f = h >> l & 1;
                            if (i !== r[0] && (i = this.sqr(i)), 0 === f && 0 === s) {
                                a = 0;
                                continue
                            }
                            s <<= 1, s |= f, (4 == ++a || 0 === n && 0 === l) && (i = this.mul(i, r[s]), a = 0, s = 0)
                        }
                        u = 26
                    }
                    return i
                }, B.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, B.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new _(t)
                }, i(_, B), _.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, _.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, _.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this)
                }, _.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        s = i;
                    return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : 0 > i.cmpn(0) && (s = i.iadd(this.m)), s._forceRed(this)
                }, _.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        },
        73415: function(t, e, r) {
            "use strict";
            var n = r(21920).Buffer,
                i = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    })
                } : function(t, e, r, n) {
                    void 0 === n && (n = r), t[n] = e[r]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                s = this && this.__decorate || function(t, e, r, n) {
                    var i, o = arguments.length,
                        s = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, n);
                    else
                        for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
                    return o > 3 && s && Object.defineProperty(e, r, s), s
                },
                a = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var r in t) "default" !== r && Object.hasOwnProperty.call(t, r) && i(e, t, r);
                    return o(e, t), e
                },
                u = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.deserializeUnchecked = e.deserialize = e.serialize = e.BinaryReader = e.BinaryWriter = e.BorshError = e.baseDecode = e.baseEncode = void 0;
            let h = u(r(19113)),
                l = u(r(57840)),
                f = a(r(99030)),
                c = new("function" != typeof TextDecoder ? f.TextDecoder : TextDecoder)("utf-8", {
                    fatal: !0
                });
            e.baseEncode = function(t) {
                return "string" == typeof t && (t = n.from(t, "utf8")), l.default.encode(n.from(t))
            }, e.baseDecode = function(t) {
                return n.from(l.default.decode(t))
            };
            class d extends Error {
                constructor(t) {
                    super(t), this.fieldPath = [], this.originalMessage = t
                }
                addToFieldPath(t) {
                    this.fieldPath.splice(0, 0, t), this.message = this.originalMessage + ": " + this.fieldPath.join(".")
                }
            }
            e.BorshError = d;
            class p {
                constructor() {
                    this.buf = n.alloc(1024), this.length = 0
                }
                maybeResize() {
                    this.buf.length < 16 + this.length && (this.buf = n.concat([this.buf, n.alloc(1024)]))
                }
                writeU8(t) {
                    this.maybeResize(), this.buf.writeUInt8(t, this.length), this.length += 1
                }
                writeU16(t) {
                    this.maybeResize(), this.buf.writeUInt16LE(t, this.length), this.length += 2
                }
                writeU32(t) {
                    this.maybeResize(), this.buf.writeUInt32LE(t, this.length), this.length += 4
                }
                writeU64(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new h.default(t).toArray("le", 8)))
                }
                writeU128(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new h.default(t).toArray("le", 16)))
                }
                writeU256(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new h.default(t).toArray("le", 32)))
                }
                writeU512(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new h.default(t).toArray("le", 64)))
                }
                writeBuffer(t) {
                    this.buf = n.concat([n.from(this.buf.subarray(0, this.length)), t, n.alloc(1024)]), this.length += t.length
                }
                writeString(t) {
                    this.maybeResize();
                    let e = n.from(t, "utf8");
                    this.writeU32(e.length), this.writeBuffer(e)
                }
                writeFixedArray(t) {
                    this.writeBuffer(n.from(t))
                }
                writeArray(t, e) {
                    for (let r of (this.maybeResize(), this.writeU32(t.length), t)) this.maybeResize(), e(r)
                }
                toArray() {
                    return this.buf.subarray(0, this.length)
                }
            }

            function y(t, e, r) {
                let n = r.value;
                r.value = function(...t) {
                    try {
                        return n.apply(this, t)
                    } catch (t) {
                        if (t instanceof RangeError && ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(t.code) >= 0) throw new d("Reached the end of buffer when deserializing");
                        throw t
                    }
                }
            }
            e.BinaryWriter = p;
            class g {
                constructor(t) {
                    this.buf = t, this.offset = 0
                }
                readU8() {
                    let t = this.buf.readUInt8(this.offset);
                    return this.offset += 1, t
                }
                readU16() {
                    let t = this.buf.readUInt16LE(this.offset);
                    return this.offset += 2, t
                }
                readU32() {
                    let t = this.buf.readUInt32LE(this.offset);
                    return this.offset += 4, t
                }
                readU64() {
                    let t = this.readBuffer(8);
                    return new h.default(t, "le")
                }
                readU128() {
                    let t = this.readBuffer(16);
                    return new h.default(t, "le")
                }
                readU256() {
                    let t = this.readBuffer(32);
                    return new h.default(t, "le")
                }
                readU512() {
                    let t = this.readBuffer(64);
                    return new h.default(t, "le")
                }
                readBuffer(t) {
                    if (this.offset + t > this.buf.length) throw new d(`Expected buffer length ${t} isn't within bounds`);
                    let e = this.buf.slice(this.offset, this.offset + t);
                    return this.offset += t, e
                }
                readString() {
                    let t = this.readU32(),
                        e = this.readBuffer(t);
                    try {
                        return c.decode(e)
                    } catch (t) {
                        throw new d(`Error decoding UTF-8 string: ${t}`)
                    }
                }
                readFixedArray(t) {
                    return new Uint8Array(this.readBuffer(t))
                }
                readArray(t) {
                    let e = this.readU32(),
                        r = [];
                    for (let n = 0; n < e; ++n) r.push(t());
                    return r
                }
            }

            function m(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }

            function b(t, e, r, n, i) {
                try {
                    if ("string" == typeof n) i[`write${m(n)}`](r);
                    else if (n instanceof Array) {
                        if ("number" == typeof n[0]) {
                            if (r.length !== n[0]) throw new d(`Expecting byte array of length ${n[0]}, but got ${r.length} bytes`);
                            i.writeFixedArray(r)
                        } else if (2 === n.length && "number" == typeof n[1]) {
                            if (r.length !== n[1]) throw new d(`Expecting byte array of length ${n[1]}, but got ${r.length} bytes`);
                            for (let e = 0; e < n[1]; e++) b(t, null, r[e], n[0], i)
                        } else i.writeArray(r, r => {
                            b(t, e, r, n[0], i)
                        })
                    } else if (void 0 !== n.kind) switch (n.kind) {
                        case "option":
                            null == r ? i.writeU8(0) : (i.writeU8(1), b(t, e, r, n.type, i));
                            break;
                        case "map":
                            i.writeU32(r.size), r.forEach((r, o) => {
                                b(t, e, o, n.key, i), b(t, e, r, n.value, i)
                            });
                            break;
                        default:
                            throw new d(`FieldType ${n} unrecognized`)
                    } else w(t, r, i)
                } catch (t) {
                    throw t instanceof d && t.addToFieldPath(e), t
                }
            }

            function w(t, e, r) {
                if ("function" == typeof e.borshSerialize) {
                    e.borshSerialize(r);
                    return
                }
                let n = t.get(e.constructor);
                if (!n) throw new d(`Class ${e.constructor.name} is missing in schema`);
                if ("struct" === n.kind) n.fields.map(([n, i]) => {
                    b(t, n, e[n], i, r)
                });
                else if ("enum" === n.kind) {
                    let i = e[n.field];
                    for (let o = 0; o < n.values.length; ++o) {
                        let [s, a] = n.values[o];
                        if (s === i) {
                            r.writeU8(o), b(t, s, e[s], a, r);
                            break
                        }
                    }
                } else throw new d(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)
            }

            function v(t, e, r, n) {
                try {
                    if ("string" == typeof r) return n[`read${m(r)}`]();
                    if (r instanceof Array) {
                        if ("number" == typeof r[0]) return n.readFixedArray(r[0]);
                        if ("number" != typeof r[1]) return n.readArray(() => v(t, e, r[0], n)); {
                            let e = [];
                            for (let i = 0; i < r[1]; i++) e.push(v(t, null, r[0], n));
                            return e
                        }
                    }
                    if ("option" === r.kind) {
                        if (n.readU8()) return v(t, e, r.type, n);
                        return
                    }
                    if ("map" === r.kind) {
                        let i = new Map,
                            o = n.readU32();
                        for (let s = 0; s < o; s++) {
                            let o = v(t, e, r.key, n),
                                s = v(t, e, r.value, n);
                            i.set(o, s)
                        }
                        return i
                    }
                    return x(t, r, n)
                } catch (t) {
                    throw t instanceof d && t.addToFieldPath(e), t
                }
            }

            function x(t, e, r) {
                if ("function" == typeof e.borshDeserialize) return e.borshDeserialize(r);
                let n = t.get(e);
                if (!n) throw new d(`Class ${e.name} is missing in schema`);
                if ("struct" === n.kind) {
                    let n = {};
                    for (let [i, o] of t.get(e).fields) n[i] = v(t, i, o, r);
                    return new e(n)
                }
                if ("enum" === n.kind) {
                    let i = r.readU8();
                    if (i >= n.values.length) throw new d(`Enum index: ${i} is out of range`);
                    let [o, s] = n.values[i], a = v(t, o, s, r);
                    return new e({
                        [o]: a
                    })
                }
                throw new d(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)
            }
            s([y], g.prototype, "readU8", null), s([y], g.prototype, "readU16", null), s([y], g.prototype, "readU32", null), s([y], g.prototype, "readU64", null), s([y], g.prototype, "readU128", null), s([y], g.prototype, "readU256", null), s([y], g.prototype, "readU512", null), s([y], g.prototype, "readString", null), s([y], g.prototype, "readFixedArray", null), s([y], g.prototype, "readArray", null), e.BinaryReader = g, e.serialize = function(t, e, r = p) {
                let n = new r;
                return w(t, e, n), n.toArray()
            }, e.deserialize = function(t, e, r, n = g) {
                let i = new n(r),
                    o = x(t, e, i);
                if (i.offset < r.length) throw new d(`Unexpected ${r.length-i.offset} bytes after deserialized data`);
                return o
            }, e.deserializeUnchecked = function(t, e, r, n = g) {
                return x(t, e, new n(r))
            }
        },
        57840: function(t, e, r) {
            var n = r(68485);
            t.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        },
        21920: function(t, e, r) {
            "use strict";
            let n = r(81209),
                i = r(98654),
                o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

            function s(t) {
                if (t > 2147483647) throw RangeError('The value "' + t + '" is invalid for option "size"');
                let e = new Uint8Array(t);
                return Object.setPrototypeOf(e, a.prototype), e
            }

            function a(t, e, r) {
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                    return l(t)
                }
                return u(t, e, r)
            }

            function u(t, e, r) {
                if ("string" == typeof t) return function(t, e) {
                    if (("string" != typeof e || "" === e) && (e = "utf8"), !a.isEncoding(e)) throw TypeError("Unknown encoding: " + e);
                    let r = 0 | p(t, e),
                        n = s(r),
                        i = n.write(t, e);
                    return i !== r && (n = n.slice(0, i)), n
                }(t, e);
                if (ArrayBuffer.isView(t)) return function(t) {
                    if (z(t, Uint8Array)) {
                        let e = new Uint8Array(t);
                        return c(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return f(t)
                }(t);
                if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (z(t, ArrayBuffer) || t && z(t.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (z(t, SharedArrayBuffer) || t && z(t.buffer, SharedArrayBuffer))) return c(t, e, r);
                if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                let n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return a.from(n, e, r);
                let i = function(t) {
                    var e;
                    if (a.isBuffer(t)) {
                        let e = 0 | d(t.length),
                            r = s(e);
                        return 0 === r.length || t.copy(r, 0, 0, e), r
                    }
                    return void 0 !== t.length ? "number" != typeof t.length || (e = t.length) != e ? s(0) : f(t) : "Buffer" === t.type && Array.isArray(t.data) ? f(t.data) : void 0
                }(t);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return a.from(t[Symbol.toPrimitive]("string"), e, r);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }

            function h(t) {
                if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function l(t) {
                return h(t), s(t < 0 ? 0 : 0 | d(t))
            }

            function f(t) {
                let e = t.length < 0 ? 0 : 0 | d(t.length),
                    r = s(e);
                for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                return r
            }

            function c(t, e, r) {
                let n;
                if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                return Object.setPrototypeOf(n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), a.prototype), n
            }

            function d(t) {
                if (t >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | t
            }

            function p(t, e) {
                if (a.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || z(t, ArrayBuffer)) return t.byteLength;
                if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                let r = t.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let i = !1;
                for (;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return T(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return P(t).length;
                    default:
                        if (i) return n ? -1 : T(t).length;
                        e = ("" + e).toLowerCase(), i = !0
                }
            }

            function y(t, e, r) {
                let i = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0))) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return function(t, e, r) {
                            let n = t.length;
                            (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                            let i = "";
                            for (let n = e; n < r; ++n) i += C[t[n]];
                            return i
                        }(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return w(this, e, r);
                    case "ascii":
                        return function(t, e, r) {
                            let n = "";
                            r = Math.min(t.length, r);
                            for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                            return n
                        }(this, e, r);
                    case "latin1":
                    case "binary":
                        return function(t, e, r) {
                            let n = "";
                            r = Math.min(t.length, r);
                            for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                            return n
                        }(this, e, r);
                    case "base64":
                        var o, s;
                        return o = e, s = r, 0 === o && s === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(o, s));
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return function(t, e, r) {
                            let n = t.slice(e, r),
                                i = "";
                            for (let t = 0; t < n.length - 1; t += 2) i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                            return i
                        }(this, e, r);
                    default:
                        if (i) throw TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), i = !0
                }
            }

            function g(t, e, r) {
                let n = t[e];
                t[e] = t[r], t[r] = n
            }

            function m(t, e, r, n, i) {
                var o;
                if (0 === t.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), (o = r = +r) != o && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (i) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof e && (e = a.from(e, n)), a.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, r, n, i);
                if ("number" == typeof e) return (e &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : b(t, [e], r, n, i);
                throw TypeError("val must be string, number or Buffer")
            }

            function b(t, e, r, n, i) {
                let o, s = 1,
                    a = t.length,
                    u = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, r /= 2
                }

                function h(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (i) {
                    let n = -1;
                    for (o = r; o < a; o++)
                        if (h(t, o) === h(e, -1 === n ? 0 : o - n)) {
                            if (-1 === n && (n = o), o - n + 1 === u) return n * s
                        } else -1 !== n && (o -= o - n), n = -1
                } else
                    for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                        let r = !0;
                        for (let n = 0; n < u; n++)
                            if (h(t, o + n) !== h(e, n)) {
                                r = !1;
                                break
                            }
                        if (r) return o
                    }
                return -1
            }

            function w(t, e, r) {
                r = Math.min(t.length, r);
                let n = [],
                    i = e;
                for (; i < r;) {
                    let e = t[i],
                        o = null,
                        s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                    if (i + s <= r) {
                        let r, n, a, u;
                        switch (s) {
                            case 1:
                                e < 128 && (o = e);
                                break;
                            case 2:
                                (192 & (r = t[i + 1])) == 128 && (u = (31 & e) << 6 | 63 & r) > 127 && (o = u);
                                break;
                            case 3:
                                r = t[i + 1], n = t[i + 2], (192 & r) == 128 && (192 & n) == 128 && (u = (15 & e) << 12 | (63 & r) << 6 | 63 & n) > 2047 && (u < 55296 || u > 57343) && (o = u);
                                break;
                            case 4:
                                r = t[i + 1], n = t[i + 2], a = t[i + 3], (192 & r) == 128 && (192 & n) == 128 && (192 & a) == 128 && (u = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a) > 65535 && u < 1114112 && (o = u)
                        }
                    }
                    null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), i += s
                }
                return function(t) {
                    let e = t.length;
                    if (e <= 4096) return String.fromCharCode.apply(String, t);
                    let r = "",
                        n = 0;
                    for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += 4096));
                    return r
                }(n)
            }

            function v(t, e, r) {
                if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                if (t + e > r) throw RangeError("Trying to access beyond buffer length")
            }

            function x(t, e, r, n, i, o) {
                if (!a.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < o) throw RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw RangeError("Index out of range")
            }

            function E(t, e, r, n, i) {
                k(e, n, i, t, r, 7);
                let o = Number(e & BigInt(4294967295));
                t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r
            }

            function M(t, e, r, n, i) {
                k(e, n, i, t, r, 7);
                let o = Number(e & BigInt(4294967295));
                t[r + 7] = o, o >>= 8, t[r + 6] = o, o >>= 8, t[r + 5] = o, o >>= 8, t[r + 4] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8
            }

            function A(t, e, r, n, i, o) {
                if (r + n > t.length || r < 0) throw RangeError("Index out of range")
            }

            function B(t, e, r, n, o) {
                return e = +e, r >>>= 0, o || A(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), i.write(t, e, r, n, 23, 4), r + 4
            }

            function _(t, e, r, n, o) {
                return e = +e, r >>>= 0, o || A(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), i.write(t, e, r, n, 52, 8), r + 8
            }
            e.Buffer = a, e.SlowBuffer = function(t) {
                return +t != t && (t = 0), a.alloc(+t)
            }, e.INSPECT_MAX_BYTES = 50, e.kMaxLength = 2147483647, a.TYPED_ARRAY_SUPPORT = function() {
                try {
                    let t = new Uint8Array(1),
                        e = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                } catch (t) {
                    return !1
                }
            }(), a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (a.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(a.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (a.isBuffer(this)) return this.byteOffset
                }
            }), a.poolSize = 8192, a.from = function(t, e, r) {
                return u(t, e, r)
            }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(t, e, r) {
                return (h(t), t <= 0) ? s(t) : void 0 !== e ? "string" == typeof r ? s(t).fill(e, r) : s(t).fill(e) : s(t)
            }, a.allocUnsafe = function(t) {
                return l(t)
            }, a.allocUnsafeSlow = function(t) {
                return l(t)
            }, a.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== a.prototype
            }, a.compare = function(t, e) {
                if (z(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), z(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(t) || !a.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                let r = t.length,
                    n = e.length;
                for (let i = 0, o = Math.min(r, n); i < o; ++i)
                    if (t[i] !== e[i]) {
                        r = t[i], n = e[i];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, a.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, a.concat = function(t, e) {
                let r;
                if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return a.alloc(0);
                if (void 0 === e)
                    for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                let n = a.allocUnsafe(e),
                    i = 0;
                for (r = 0; r < t.length; ++r) {
                    let e = t[r];
                    if (z(e, Uint8Array)) i + e.length > n.length ? (a.isBuffer(e) || (e = a.from(e)), e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i);
                    else if (a.isBuffer(e)) e.copy(n, i);
                    else throw TypeError('"list" argument must be an Array of Buffers');
                    i += e.length
                }
                return n
            }, a.byteLength = p, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                let t = this.length;
                if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2) g(this, e, e + 1);
                return this
            }, a.prototype.swap32 = function() {
                let t = this.length;
                if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
                return this
            }, a.prototype.swap64 = function() {
                let t = this.length;
                if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
                return this
            }, a.prototype.toString = function() {
                let t = this.length;
                return 0 === t ? "" : 0 == arguments.length ? w(this, 0, t) : y.apply(this, arguments)
            }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(t) {
                if (!a.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                return this === t || 0 === a.compare(this, t)
            }, a.prototype.inspect = function() {
                let t = "",
                    r = e.INSPECT_MAX_BYTES;
                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
            }, o && (a.prototype[o] = a.prototype.inspect), a.prototype.compare = function(t, e, r, n, i) {
                if (z(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw RangeError("out of range index");
                if (n >= i && e >= r) return 0;
                if (n >= i) return -1;
                if (e >= r) return 1;
                if (e >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === t) return 0;
                let o = i - n,
                    s = r - e,
                    u = Math.min(o, s),
                    h = this.slice(n, i),
                    l = t.slice(e, r);
                for (let t = 0; t < u; ++t)
                    if (h[t] !== l[t]) {
                        o = h[t], s = l[t];
                        break
                    }
                return o < s ? -1 : s < o ? 1 : 0
            }, a.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, a.prototype.indexOf = function(t, e, r) {
                return m(this, t, e, r, !0)
            }, a.prototype.lastIndexOf = function(t, e, r) {
                return m(this, t, e, r, !1)
            }, a.prototype.write = function(t, e, r, n) {
                var i, o, s, a, u, h, l, f;
                if (void 0 === e) n = "utf8", r = this.length, e = 0;
                else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                else if (isFinite(e)) e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                let c = this.length - e;
                if ((void 0 === r || r > c) && (r = c), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                let d = !1;
                for (;;) switch (n) {
                    case "hex":
                        return function(t, e, r, n) {
                            let i;
                            r = Number(r) || 0;
                            let o = t.length - r;
                            n ? (n = Number(n)) > o && (n = o) : n = o;
                            let s = e.length;
                            for (n > s / 2 && (n = s / 2), i = 0; i < n; ++i) {
                                let n = parseInt(e.substr(2 * i, 2), 16);
                                if (n != n) break;
                                t[r + i] = n
                            }
                            return i
                        }(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return i = e, o = r, N(T(t, this.length - i), this, i, o);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return s = e, a = r, N(function(t) {
                            let e = [];
                            for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                            return e
                        }(t), this, s, a);
                    case "base64":
                        return u = e, h = r, N(P(t), this, u, h);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return l = e, f = r, N(function(t, e) {
                            let r, n;
                            let i = [];
                            for (let o = 0; o < t.length && !((e -= 2) < 0); ++o) n = (r = t.charCodeAt(o)) >> 8, i.push(r % 256), i.push(n);
                            return i
                        }(t, this.length - l), this, l, f);
                    default:
                        if (d) throw TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), d = !0
                }
            }, a.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, a.prototype.slice = function(t, e) {
                let r = this.length;
                t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                let n = this.subarray(t, e);
                return Object.setPrototypeOf(n, a.prototype), n
            }, a.prototype.readUintLE = a.prototype.readUIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || v(t, e, this.length);
                let n = this[t],
                    i = 1,
                    o = 0;
                for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n
            }, a.prototype.readUintBE = a.prototype.readUIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || v(t, e, this.length);
                let n = this[t + --e],
                    i = 1;
                for (; e > 0 && (i *= 256);) n += this[t + --e] * i;
                return n
            }, a.prototype.readUint8 = a.prototype.readUInt8 = function(t, e) {
                return t >>>= 0, e || v(t, 1, this.length), this[t]
            }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0, e || v(t, 2, this.length), this[t] | this[t + 1] << 8
            }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0, e || v(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0, e || v(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0, e || v(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, a.prototype.readBigUInt64LE = q(function(t) {
                O(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                (void 0 === e || void 0 === r) && L(t, this.length - 8);
                let n = e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t],
                    i = this[++t] + 256 * this[++t] + 65536 * this[++t] + 16777216 * r;
                return BigInt(n) + (BigInt(i) << BigInt(32))
            }), a.prototype.readBigUInt64BE = q(function(t) {
                O(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                (void 0 === e || void 0 === r) && L(t, this.length - 8);
                let n = 16777216 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
                    i = 16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
                return (BigInt(n) << BigInt(32)) + BigInt(i)
            }), a.prototype.readIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || v(t, e, this.length);
                let n = this[t],
                    i = 1,
                    o = 0;
                for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
            }, a.prototype.readIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || v(t, e, this.length);
                let n = e,
                    i = 1,
                    o = this[t + --n];
                for (; n > 0 && (i *= 256);) o += this[t + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
            }, a.prototype.readInt8 = function(t, e) {
                return (t >>>= 0, e || v(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
            }, a.prototype.readInt16LE = function(t, e) {
                t >>>= 0, e || v(t, 2, this.length);
                let r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, a.prototype.readInt16BE = function(t, e) {
                t >>>= 0, e || v(t, 2, this.length);
                let r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, a.prototype.readInt32LE = function(t, e) {
                return t >>>= 0, e || v(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, a.prototype.readInt32BE = function(t, e) {
                return t >>>= 0, e || v(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, a.prototype.readBigInt64LE = q(function(t) {
                O(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                return (void 0 === e || void 0 === r) && L(t, this.length - 8), (BigInt(this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t])
            }), a.prototype.readBigInt64BE = q(function(t) {
                O(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                return (void 0 === e || void 0 === r) && L(t, this.length - 8), (BigInt((e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]) << BigInt(32)) + BigInt(16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r)
            }), a.prototype.readFloatLE = function(t, e) {
                return t >>>= 0, e || v(t, 4, this.length), i.read(this, t, !0, 23, 4)
            }, a.prototype.readFloatBE = function(t, e) {
                return t >>>= 0, e || v(t, 4, this.length), i.read(this, t, !1, 23, 4)
            }, a.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0, e || v(t, 8, this.length), i.read(this, t, !0, 52, 8)
            }, a.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0, e || v(t, 8, this.length), i.read(this, t, !1, 52, 8)
            }, a.prototype.writeUintLE = a.prototype.writeUIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r) - 1;
                    x(this, t, e, r, n, 0)
                }
                let i = 1,
                    o = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
                return e + r
            }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r) - 1;
                    x(this, t, e, r, n, 0)
                }
                let i = r - 1,
                    o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                return e + r
            }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, a.prototype.writeBigUInt64LE = q(function(t, e = 0) {
                return E(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }), a.prototype.writeBigUInt64BE = q(function(t, e = 0) {
                return M(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }), a.prototype.writeIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r - 1);
                    x(this, t, e, r, n - 1, -n)
                }
                let i = 0,
                    o = 1,
                    s = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                return e + r
            }, a.prototype.writeIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    let n = Math.pow(2, 8 * r - 1);
                    x(this, t, e, r, n - 1, -n)
                }
                let i = r - 1,
                    o = 1,
                    s = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                return e + r
            }, a.prototype.writeInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, a.prototype.writeInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, a.prototype.writeInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, a.prototype.writeInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, a.prototype.writeInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, a.prototype.writeBigInt64LE = q(function(t, e = 0) {
                return E(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), a.prototype.writeBigInt64BE = q(function(t, e = 0) {
                return M(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), a.prototype.writeFloatLE = function(t, e, r) {
                return B(this, t, e, !0, r)
            }, a.prototype.writeFloatBE = function(t, e, r) {
                return B(this, t, e, !1, r)
            }, a.prototype.writeDoubleLE = function(t, e, r) {
                return _(this, t, e, !0, r)
            }, a.prototype.writeDoubleBE = function(t, e, r) {
                return _(this, t, e, !1, r)
            }, a.prototype.copy = function(t, e, r, n) {
                if (!a.isBuffer(t)) throw TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r || 0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                if (n < 0) throw RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                let i = n - r;
                return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), i
            }, a.prototype.fill = function(t, e, r, n) {
                let i;
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !a.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                        let e = t.charCodeAt(0);
                        ("utf8" === n && e < 128 || "latin1" === n) && (t = e)
                    }
                } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                if (r <= e) return this;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                    for (i = e; i < r; ++i) this[i] = t;
                else {
                    let o = a.isBuffer(t) ? t : a.from(t, n),
                        s = o.length;
                    if (0 === s) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (i = 0; i < r - e; ++i) this[i + e] = o[i % s]
                }
                return this
            };
            let U = {};

            function S(t, e, r) {
                U[t] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: e.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${t}]`, this.stack, delete this.name
                    }
                    get code() {
                        return t
                    }
                    set code(t) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: t,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${t}]: ${this.message}`
                    }
                }
            }

            function I(t) {
                let e = "",
                    r = t.length,
                    n = "-" === t[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3) e = `_${t.slice(r-3,r)}${e}`;
                return `${t.slice(0,r)}${e}`
            }

            function k(t, e, r, n, i, o) {
                if (t > r || t < e) {
                    let n;
                    let i = "bigint" == typeof e ? "n" : "";
                    throw n = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${i} and < 2${i} ** ${(o+1)*8}${i}` : `>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}` : `>= ${e}${i} and <= ${r}${i}`, new U.ERR_OUT_OF_RANGE("value", n, t)
                }
                O(i, "offset"), (void 0 === n[i] || void 0 === n[i + o]) && L(i, n.length - (o + 1))
            }

            function O(t, e) {
                if ("number" != typeof t) throw new U.ERR_INVALID_ARG_TYPE(e, "number", t)
            }

            function L(t, e, r) {
                if (Math.floor(t) !== t) throw O(t, r), new U.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
                if (e < 0) throw new U.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new U.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${e}`, t)
            }
            S("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
                return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }, RangeError), S("ERR_INVALID_ARG_TYPE", function(t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`
            }, TypeError), S("ERR_OUT_OF_RANGE", function(t, e, r) {
                let n = `The value of "${t}" is out of range.`,
                    i = r;
                return Number.isInteger(r) && Math.abs(r) > 4294967296 ? i = I(String(r)) : "bigint" == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = I(i)), i += "n"), n += ` It must be ${e}. Received ${i}`
            }, RangeError);
            let R = /[^+/0-9A-Za-z-_]/g;

            function T(t, e) {
                let r;
                e = e || 1 / 0;
                let n = t.length,
                    i = null,
                    o = [];
                for (let s = 0; s < n; ++s) {
                    if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319 || s + 1 === n) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = (i - 55296 << 10 | r - 56320) + 65536
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else if (r < 1114112) {
                        if ((e -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    } else throw Error("Invalid code point")
                }
                return o
            }

            function P(t) {
                return n.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(R, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function N(t, e, r, n) {
                let i;
                for (i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i) e[i + r] = t[i];
                return i
            }

            function z(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }
            let C = function() {
                let t = "0123456789abcdef",
                    e = Array(256);
                for (let r = 0; r < 16; ++r) {
                    let n = 16 * r;
                    for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i]
                }
                return e
            }();

            function q(t) {
                return "undefined" == typeof BigInt ? j : t
            }

            function j() {
                throw Error("BigInt not supported")
            }
        },
        51596: function(t) {
            "use strict";
            var e = Object.prototype.hasOwnProperty,
                r = "~";

            function n() {}

            function i(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1
            }

            function o(t, e, n, o, s) {
                if ("function" != typeof n) throw TypeError("The listener must be a function");
                var a = new i(n, o || t, s),
                    u = r ? r + e : e;
                return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], a] : t._events[u].push(a) : (t._events[u] = a, t._eventsCount++), t
            }

            function s(t, e) {
                0 == --t._eventsCount ? t._events = new n : delete t._events[e]
            }

            function a() {
                this._events = new n, this._eventsCount = 0
            }
            Object.create && (n.prototype = Object.create(null), new n().__proto__ || (r = !1)), a.prototype.eventNames = function() {
                var t, n, i = [];
                if (0 === this._eventsCount) return i;
                for (n in t = this._events) e.call(t, n) && i.push(r ? n.slice(1) : n);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
            }, a.prototype.listeners = function(t) {
                var e = r ? r + t : t,
                    n = this._events[e];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var i = 0, o = n.length, s = Array(o); i < o; i++) s[i] = n[i].fn;
                return s
            }, a.prototype.listenerCount = function(t) {
                var e = r ? r + t : t,
                    n = this._events[e];
                return n ? n.fn ? 1 : n.length : 0
            }, a.prototype.emit = function(t, e, n, i, o, s) {
                var a = r ? r + t : t;
                if (!this._events[a]) return !1;
                var u, h, l = this._events[a],
                    f = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(t, l.fn, void 0, !0), f) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, e), !0;
                        case 3:
                            return l.fn.call(l.context, e, n), !0;
                        case 4:
                            return l.fn.call(l.context, e, n, i), !0;
                        case 5:
                            return l.fn.call(l.context, e, n, i, o), !0;
                        case 6:
                            return l.fn.call(l.context, e, n, i, o, s), !0
                    }
                    for (h = 1, u = Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
                    l.fn.apply(l.context, u)
                } else {
                    var c, d = l.length;
                    for (h = 0; h < d; h++) switch (l[h].once && this.removeListener(t, l[h].fn, void 0, !0), f) {
                        case 1:
                            l[h].fn.call(l[h].context);
                            break;
                        case 2:
                            l[h].fn.call(l[h].context, e);
                            break;
                        case 3:
                            l[h].fn.call(l[h].context, e, n);
                            break;
                        case 4:
                            l[h].fn.call(l[h].context, e, n, i);
                            break;
                        default:
                            if (!u)
                                for (c = 1, u = Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
                            l[h].fn.apply(l[h].context, u)
                    }
                }
                return !0
            }, a.prototype.on = function(t, e, r) {
                return o(this, t, e, r, !1)
            }, a.prototype.once = function(t, e, r) {
                return o(this, t, e, r, !0)
            }, a.prototype.removeListener = function(t, e, n, i) {
                var o = r ? r + t : t;
                if (!this._events[o]) return this;
                if (!e) return s(this, o), this;
                var a = this._events[o];
                if (a.fn) a.fn !== e || i && !a.once || n && a.context !== n || s(this, o);
                else {
                    for (var u = 0, h = [], l = a.length; u < l; u++)(a[u].fn !== e || i && !a[u].once || n && a[u].context !== n) && h.push(a[u]);
                    h.length ? this._events[o] = 1 === h.length ? h[0] : h : s(this, o)
                }
                return this
            }, a.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new n, this._eventsCount = 0), this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a
        },
        98654: function(t, e) {
            e.read = function(t, e, r, n, i) {
                var o, s, a = 8 * i - n - 1,
                    u = (1 << a) - 1,
                    h = u >> 1,
                    l = -7,
                    f = r ? i - 1 : 0,
                    c = r ? -1 : 1,
                    d = t[e + f];
                for (f += c, o = d & (1 << -l) - 1, d >>= -l, l += a; l > 0; o = 256 * o + t[e + f], f += c, l -= 8);
                for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + t[e + f], f += c, l -= 8);
                if (0 === o) o = 1 - h;
                else {
                    if (o === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                    s += Math.pow(2, n), o -= h
                }
                return (d ? -1 : 1) * s * Math.pow(2, o - n)
            }, e.write = function(t, e, r, n, i, o) {
                var s, a, u, h = 8 * o - i - 1,
                    l = (1 << h) - 1,
                    f = l >> 1,
                    c = 23 === i ? 5960464477539062e-23 : 0,
                    d = n ? 0 : o - 1,
                    p = n ? 1 : -1,
                    y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + f >= 1 ? e += c / u : e += c * Math.pow(2, 1 - f), e * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + d] = 255 & a, d += p, a /= 256, i -= 8);
                for (s = s << i | a, h += i; h > 0; t[r + d] = 255 & s, d += p, s /= 256, h -= 8);
                t[r + d - p] |= 128 * y
            }
        },
        15588: function(t, e, r) {
            "use strict";
            let n = r(86977).v4,
                i = r(10150),
                o = function(t, e) {
                    if (!(this instanceof o)) return new o(t, e);
                    e || (e = {}), this.options = {
                        reviver: void 0 !== e.reviver ? e.reviver : null,
                        replacer: void 0 !== e.replacer ? e.replacer : null,
                        generator: void 0 !== e.generator ? e.generator : function() {
                            return n()
                        },
                        version: void 0 !== e.version ? e.version : 2,
                        notificationIdNull: "boolean" == typeof e.notificationIdNull && e.notificationIdNull
                    }, this.callServer = t
                };
            t.exports = o, o.prototype.request = function(t, e, r, n) {
                let o;
                let s = this,
                    a = null,
                    u = Array.isArray(t) && "function" == typeof e;
                if (1 === this.options.version && u) throw TypeError("JSON-RPC 1.0 does not support batching");
                let h = !u && t && "object" == typeof t && "function" == typeof e;
                if (u || h) n = e, a = t;
                else {
                    "function" == typeof r && (n = r, r = void 0);
                    let o = "function" == typeof n;
                    try {
                        a = i(t, e, r, {
                            generator: this.options.generator,
                            version: this.options.version,
                            notificationIdNull: this.options.notificationIdNull
                        })
                    } catch (t) {
                        if (o) return n(t);
                        throw t
                    }
                    if (!o) return a
                }
                try {
                    o = JSON.stringify(a, this.options.replacer)
                } catch (t) {
                    return n(t)
                }
                return this.callServer(o, function(t, e) {
                    s._parseResponse(t, e, n)
                }), a
            }, o.prototype._parseResponse = function(t, e, r) {
                let n;
                if (t) {
                    r(t);
                    return
                }
                if (!e) return r();
                try {
                    n = JSON.parse(e, this.options.reviver)
                } catch (t) {
                    return r(t)
                }
                if (3 === r.length) {
                    if (!Array.isArray(n)) return r(null, n.error, n.result); {
                        let t = function(t) {
                            return void 0 !== t.error
                        };
                        return r(null, n.filter(t), n.filter(function(e) {
                            return !t(e)
                        }))
                    }
                }
                r(null, n)
            }
        },
        10150: function(t, e, r) {
            "use strict";
            let n = r(86977).v4;
            t.exports = function(t, e, r, i) {
                if ("string" != typeof t) throw TypeError(t + " must be a string");
                let o = "number" == typeof(i = i || {}).version ? i.version : 2;
                if (1 !== o && 2 !== o) throw TypeError(o + " must be 1 or 2");
                let s = {
                    method: t
                };
                if (2 === o && (s.jsonrpc = "2.0"), e) {
                    if ("object" != typeof e && !Array.isArray(e)) throw TypeError(e + " must be an object, array or omitted");
                    s.params = e
                }
                if (void 0 === r) {
                    let t = "function" == typeof i.generator ? i.generator : function() {
                        return n()
                    };
                    s.id = t(s, i)
                } else 2 === o && null === r ? i.notificationIdNull && (s.id = null) : s.id = r;
                return s
            }
        },
        31760: function(t, e, r) {
            var n = r(21920),
                i = n.Buffer;

            function o(t, e) {
                for (var r in t) e[r] = t[r]
            }

            function s(t, e, r) {
                return i(t, e, r)
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = s), s.prototype = Object.create(i.prototype), o(i, s), s.from = function(t, e, r) {
                if ("number" == typeof t) throw TypeError("Argument must not be a number");
                return i(t, e, r)
            }, s.alloc = function(t, e, r) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                var n = i(t);
                return void 0 !== e ? "string" == typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), n
            }, s.allocUnsafe = function(t) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                return i(t)
            }, s.allocUnsafeSlow = function(t) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                return n.SlowBuffer(t)
            }
        },
        99030: function(t, e) {
            "use strict";

            function r(t, e, r) {
                return e <= t && t <= r
            }

            function n(t) {
                if (void 0 === t) return {};
                if (t === Object(t)) return t;
                throw TypeError("Could not convert argument to dictionary")
            }

            function i(t) {
                this.tokens = [].slice.call(t)
            }

            function o(t, e) {
                if (t) throw TypeError("Decoder error");
                return e || 65533
            }
            i.prototype = {
                endOfStream: function() {
                    return !this.tokens.length
                },
                read: function() {
                    return this.tokens.length ? this.tokens.shift() : -1
                },
                prepend: function(t) {
                    if (Array.isArray(t))
                        for (; t.length;) this.tokens.unshift(t.pop());
                    else this.tokens.unshift(t)
                },
                push: function(t) {
                    if (Array.isArray(t))
                        for (; t.length;) this.tokens.push(t.shift());
                    else this.tokens.push(t)
                }
            };
            var s = "utf-8";

            function a(t, e) {
                if (!(this instanceof a)) return new a(t, e);
                if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s) throw Error("Encoding not supported. Only utf-8 is supported");
                e = n(e), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = !!e.fatal, this._ignoreBOM = !!e.ignoreBOM, Object.defineProperty(this, "encoding", {
                    value: "utf-8"
                }), Object.defineProperty(this, "fatal", {
                    value: this._fatal
                }), Object.defineProperty(this, "ignoreBOM", {
                    value: this._ignoreBOM
                })
            }

            function u(t, e) {
                if (!(this instanceof u)) return new u(t, e);
                if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s) throw Error("Encoding not supported. Only utf-8 is supported");
                e = n(e), this._streaming = !1, this._encoder = null, this._options = {
                    fatal: !!e.fatal
                }, Object.defineProperty(this, "encoding", {
                    value: "utf-8"
                })
            }

            function h(t) {
                var e = t.fatal,
                    n = 0,
                    i = 0,
                    s = 0,
                    a = 128,
                    u = 191;
                this.handler = function(t, h) {
                    if (-1 === h && 0 !== s) return s = 0, o(e);
                    if (-1 === h) return -1;
                    if (0 === s) {
                        if (r(h, 0, 127)) return h;
                        if (r(h, 194, 223)) s = 1, n = h - 192;
                        else if (r(h, 224, 239)) 224 === h && (a = 160), 237 === h && (u = 159), s = 2, n = h - 224;
                        else {
                            if (!r(h, 240, 244)) return o(e);
                            240 === h && (a = 144), 244 === h && (u = 143), s = 3, n = h - 240
                        }
                        return n <<= 6 * s, null
                    }
                    if (!r(h, a, u)) return n = s = i = 0, a = 128, u = 191, t.prepend(h), o(e);
                    if (a = 128, u = 191, i += 1, n += h - 128 << 6 * (s - i), i !== s) return null;
                    var l = n;
                    return n = s = i = 0, l
                }
            }

            function l(t) {
                t.fatal, this.handler = function(t, e) {
                    if (-1 === e) return -1;
                    if (r(e, 0, 127)) return e;
                    r(e, 128, 2047) ? (n = 1, i = 192) : r(e, 2048, 65535) ? (n = 2, i = 224) : r(e, 65536, 1114111) && (n = 3, i = 240);
                    for (var n, i, o = [(e >> 6 * n) + i]; n > 0;) {
                        var s = e >> 6 * (n - 1);
                        o.push(128 | 63 & s), n -= 1
                    }
                    return o
                }
            }
            a.prototype = {
                decode: function(t, e) {
                    r = "object" == typeof t && t instanceof ArrayBuffer ? new Uint8Array(t) : "object" == typeof t && "buffer" in t && t.buffer instanceof ArrayBuffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(0), e = n(e), this._streaming || (this._decoder = new h({
                        fatal: this._fatal
                    }), this._BOMseen = !1), this._streaming = !!e.stream;
                    for (var r, o, s = new i(r), a = []; !s.endOfStream() && -1 !== (o = this._decoder.handler(s, s.read()));) null !== o && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
                    if (!this._streaming) {
                        do {
                            if (-1 === (o = this._decoder.handler(s, s.read()))) break;
                            if (null === o) continue;
                            Array.isArray(o) ? a.push.apply(a, o) : a.push(o)
                        } while (!s.endOfStream());
                        this._decoder = null
                    }
                    return !a.length || -1 === ["utf-8"].indexOf(this.encoding) || this._ignoreBOM || this._BOMseen || (65279 === a[0] ? (this._BOMseen = !0, a.shift()) : this._BOMseen = !0),
                        function(t) {
                            for (var e = "", r = 0; r < t.length; ++r) {
                                var n = t[r];
                                n <= 65535 ? e += String.fromCharCode(n) : (n -= 65536, e += String.fromCharCode((n >> 10) + 55296, (1023 & n) + 56320))
                            }
                            return e
                        }(a)
                }
            }, u.prototype = {
                encode: function(t, e) {
                    t = t ? String(t) : "", e = n(e), this._streaming || (this._encoder = new l(this._options)), this._streaming = !!e.stream;
                    for (var r, o = [], s = new i(function(t) {
                            for (var e = String(t), r = e.length, n = 0, i = []; n < r;) {
                                var o = e.charCodeAt(n);
                                if (o < 55296 || o > 57343) i.push(o);
                                else if (56320 <= o && o <= 57343) i.push(65533);
                                else if (55296 <= o && o <= 56319) {
                                    if (n === r - 1) i.push(65533);
                                    else {
                                        var s = t.charCodeAt(n + 1);
                                        if (56320 <= s && s <= 57343) {
                                            var a = 1023 & o,
                                                u = 1023 & s;
                                            i.push(65536 + (a << 10) + u), n += 1
                                        } else i.push(65533)
                                    }
                                }
                                n += 1
                            }
                            return i
                        }(t)); !s.endOfStream() && -1 !== (r = this._encoder.handler(s, s.read()));) Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
                    if (!this._streaming) {
                        for (; - 1 !== (r = this._encoder.handler(s, s.read()));) Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
                        this._encoder = null
                    }
                    return new Uint8Array(o)
                }
            }, e.TextEncoder = u, e.TextDecoder = a
        },
        41488: function(t, e, r) {
            ! function(t) {
                "use strict";
                var e, n = function(t) {
                        var e, r = new Float64Array(16);
                        if (t)
                            for (e = 0; e < t.length; e++) r[e] = t[e];
                        return r
                    },
                    i = function() {
                        throw Error("no PRNG")
                    },
                    o = new Uint8Array(16),
                    s = new Uint8Array(32);
                s[0] = 9;
                var a = n(),
                    u = n([1]),
                    h = n([56129, 1]),
                    l = n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                    f = n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                    c = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                    d = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                    p = n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                function y(t, e, r, n) {
                    t[e] = r >> 24 & 255, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r, t[e + 4] = n >> 24 & 255, t[e + 5] = n >> 16 & 255, t[e + 6] = n >> 8 & 255, t[e + 7] = 255 & n
                }

                function g(t, e, r, n, i) {
                    var o, s = 0;
                    for (o = 0; o < i; o++) s |= t[e + o] ^ r[n + o];
                    return (1 & s - 1 >>> 8) - 1
                }

                function m(t, e, r, n) {
                    return g(t, e, r, n, 16)
                }

                function b(t, e, r, n) {
                    return g(t, e, r, n, 32)
                }

                function w(t, e, r, n) {
                    ! function(t, e, r, n) {
                        for (var i, o = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, s = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, a = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, u = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, h = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, l = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, f = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, c = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, d = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, p = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, y = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, g = 255 & r[16] | (255 & r[17]) << 8 | (255 & r[18]) << 16 | (255 & r[19]) << 24, m = 255 & r[20] | (255 & r[21]) << 8 | (255 & r[22]) << 16 | (255 & r[23]) << 24, b = 255 & r[24] | (255 & r[25]) << 8 | (255 & r[26]) << 16 | (255 & r[27]) << 24, w = 255 & r[28] | (255 & r[29]) << 8 | (255 & r[30]) << 16 | (255 & r[31]) << 24, v = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, x = o, E = s, M = a, A = u, B = h, _ = l, U = f, S = c, I = d, k = p, O = y, L = g, R = m, T = b, P = w, N = v, z = 0; z < 20; z += 2) B ^= (i = x + R | 0) << 7 | i >>> 25, I ^= (i = B + x | 0) << 9 | i >>> 23, R ^= (i = I + B | 0) << 13 | i >>> 19, x ^= (i = R + I | 0) << 18 | i >>> 14, k ^= (i = _ + E | 0) << 7 | i >>> 25, T ^= (i = k + _ | 0) << 9 | i >>> 23, E ^= (i = T + k | 0) << 13 | i >>> 19, _ ^= (i = E + T | 0) << 18 | i >>> 14, P ^= (i = O + U | 0) << 7 | i >>> 25, M ^= (i = P + O | 0) << 9 | i >>> 23, U ^= (i = M + P | 0) << 13 | i >>> 19, O ^= (i = U + M | 0) << 18 | i >>> 14, A ^= (i = N + L | 0) << 7 | i >>> 25, S ^= (i = A + N | 0) << 9 | i >>> 23, L ^= (i = S + A | 0) << 13 | i >>> 19, N ^= (i = L + S | 0) << 18 | i >>> 14, E ^= (i = x + A | 0) << 7 | i >>> 25, M ^= (i = E + x | 0) << 9 | i >>> 23, A ^= (i = M + E | 0) << 13 | i >>> 19, x ^= (i = A + M | 0) << 18 | i >>> 14, U ^= (i = _ + B | 0) << 7 | i >>> 25, S ^= (i = U + _ | 0) << 9 | i >>> 23, B ^= (i = S + U | 0) << 13 | i >>> 19, _ ^= (i = B + S | 0) << 18 | i >>> 14, L ^= (i = O + k | 0) << 7 | i >>> 25, I ^= (i = L + O | 0) << 9 | i >>> 23, k ^= (i = I + L | 0) << 13 | i >>> 19, O ^= (i = k + I | 0) << 18 | i >>> 14, R ^= (i = N + P | 0) << 7 | i >>> 25, T ^= (i = R + N | 0) << 9 | i >>> 23, P ^= (i = T + R | 0) << 13 | i >>> 19, N ^= (i = P + T | 0) << 18 | i >>> 14;
                        x = x + o | 0, E = E + s | 0, M = M + a | 0, A = A + u | 0, B = B + h | 0, _ = _ + l | 0, U = U + f | 0, S = S + c | 0, I = I + d | 0, k = k + p | 0, O = O + y | 0, L = L + g | 0, R = R + m | 0, T = T + b | 0, P = P + w | 0, N = N + v | 0, t[0] = x >>> 0 & 255, t[1] = x >>> 8 & 255, t[2] = x >>> 16 & 255, t[3] = x >>> 24 & 255, t[4] = E >>> 0 & 255, t[5] = E >>> 8 & 255, t[6] = E >>> 16 & 255, t[7] = E >>> 24 & 255, t[8] = M >>> 0 & 255, t[9] = M >>> 8 & 255, t[10] = M >>> 16 & 255, t[11] = M >>> 24 & 255, t[12] = A >>> 0 & 255, t[13] = A >>> 8 & 255, t[14] = A >>> 16 & 255, t[15] = A >>> 24 & 255, t[16] = B >>> 0 & 255, t[17] = B >>> 8 & 255, t[18] = B >>> 16 & 255, t[19] = B >>> 24 & 255, t[20] = _ >>> 0 & 255, t[21] = _ >>> 8 & 255, t[22] = _ >>> 16 & 255, t[23] = _ >>> 24 & 255, t[24] = U >>> 0 & 255, t[25] = U >>> 8 & 255, t[26] = U >>> 16 & 255, t[27] = U >>> 24 & 255, t[28] = S >>> 0 & 255, t[29] = S >>> 8 & 255, t[30] = S >>> 16 & 255, t[31] = S >>> 24 & 255, t[32] = I >>> 0 & 255, t[33] = I >>> 8 & 255, t[34] = I >>> 16 & 255, t[35] = I >>> 24 & 255, t[36] = k >>> 0 & 255, t[37] = k >>> 8 & 255, t[38] = k >>> 16 & 255, t[39] = k >>> 24 & 255, t[40] = O >>> 0 & 255, t[41] = O >>> 8 & 255, t[42] = O >>> 16 & 255, t[43] = O >>> 24 & 255, t[44] = L >>> 0 & 255, t[45] = L >>> 8 & 255, t[46] = L >>> 16 & 255, t[47] = L >>> 24 & 255, t[48] = R >>> 0 & 255, t[49] = R >>> 8 & 255, t[50] = R >>> 16 & 255, t[51] = R >>> 24 & 255, t[52] = T >>> 0 & 255, t[53] = T >>> 8 & 255, t[54] = T >>> 16 & 255, t[55] = T >>> 24 & 255, t[56] = P >>> 0 & 255, t[57] = P >>> 8 & 255, t[58] = P >>> 16 & 255, t[59] = P >>> 24 & 255, t[60] = N >>> 0 & 255, t[61] = N >>> 8 & 255, t[62] = N >>> 16 & 255, t[63] = N >>> 24 & 255
                    }(t, e, r, n)
                }

                function v(t, e, r, n) {
                    ! function(t, e, r, n) {
                        for (var i, o = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, s = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, a = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, u = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, h = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, l = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, f = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, c = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, d = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, p = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, y = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, g = 255 & r[16] | (255 & r[17]) << 8 | (255 & r[18]) << 16 | (255 & r[19]) << 24, m = 255 & r[20] | (255 & r[21]) << 8 | (255 & r[22]) << 16 | (255 & r[23]) << 24, b = 255 & r[24] | (255 & r[25]) << 8 | (255 & r[26]) << 16 | (255 & r[27]) << 24, w = 255 & r[28] | (255 & r[29]) << 8 | (255 & r[30]) << 16 | (255 & r[31]) << 24, v = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, x = o, E = s, M = a, A = u, B = h, _ = l, U = f, S = c, I = d, k = p, O = y, L = g, R = m, T = b, P = w, N = v, z = 0; z < 20; z += 2) B ^= (i = x + R | 0) << 7 | i >>> 25, I ^= (i = B + x | 0) << 9 | i >>> 23, R ^= (i = I + B | 0) << 13 | i >>> 19, x ^= (i = R + I | 0) << 18 | i >>> 14, k ^= (i = _ + E | 0) << 7 | i >>> 25, T ^= (i = k + _ | 0) << 9 | i >>> 23, E ^= (i = T + k | 0) << 13 | i >>> 19, _ ^= (i = E + T | 0) << 18 | i >>> 14, P ^= (i = O + U | 0) << 7 | i >>> 25, M ^= (i = P + O | 0) << 9 | i >>> 23, U ^= (i = M + P | 0) << 13 | i >>> 19, O ^= (i = U + M | 0) << 18 | i >>> 14, A ^= (i = N + L | 0) << 7 | i >>> 25, S ^= (i = A + N | 0) << 9 | i >>> 23, L ^= (i = S + A | 0) << 13 | i >>> 19, N ^= (i = L + S | 0) << 18 | i >>> 14, E ^= (i = x + A | 0) << 7 | i >>> 25, M ^= (i = E + x | 0) << 9 | i >>> 23, A ^= (i = M + E | 0) << 13 | i >>> 19, x ^= (i = A + M | 0) << 18 | i >>> 14, U ^= (i = _ + B | 0) << 7 | i >>> 25, S ^= (i = U + _ | 0) << 9 | i >>> 23, B ^= (i = S + U | 0) << 13 | i >>> 19, _ ^= (i = B + S | 0) << 18 | i >>> 14, L ^= (i = O + k | 0) << 7 | i >>> 25, I ^= (i = L + O | 0) << 9 | i >>> 23, k ^= (i = I + L | 0) << 13 | i >>> 19, O ^= (i = k + I | 0) << 18 | i >>> 14, R ^= (i = N + P | 0) << 7 | i >>> 25, T ^= (i = R + N | 0) << 9 | i >>> 23, P ^= (i = T + R | 0) << 13 | i >>> 19, N ^= (i = P + T | 0) << 18 | i >>> 14;
                        t[0] = x >>> 0 & 255, t[1] = x >>> 8 & 255, t[2] = x >>> 16 & 255, t[3] = x >>> 24 & 255, t[4] = _ >>> 0 & 255, t[5] = _ >>> 8 & 255, t[6] = _ >>> 16 & 255, t[7] = _ >>> 24 & 255, t[8] = O >>> 0 & 255, t[9] = O >>> 8 & 255, t[10] = O >>> 16 & 255, t[11] = O >>> 24 & 255, t[12] = N >>> 0 & 255, t[13] = N >>> 8 & 255, t[14] = N >>> 16 & 255, t[15] = N >>> 24 & 255, t[16] = U >>> 0 & 255, t[17] = U >>> 8 & 255, t[18] = U >>> 16 & 255, t[19] = U >>> 24 & 255, t[20] = S >>> 0 & 255, t[21] = S >>> 8 & 255, t[22] = S >>> 16 & 255, t[23] = S >>> 24 & 255, t[24] = I >>> 0 & 255, t[25] = I >>> 8 & 255, t[26] = I >>> 16 & 255, t[27] = I >>> 24 & 255, t[28] = k >>> 0 & 255, t[29] = k >>> 8 & 255, t[30] = k >>> 16 & 255, t[31] = k >>> 24 & 255
                    }(t, e, r, n)
                }
                var x = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

                function E(t, e, r, n, i, o, s) {
                    var a, u, h = new Uint8Array(16),
                        l = new Uint8Array(64);
                    for (u = 0; u < 16; u++) h[u] = 0;
                    for (u = 0; u < 8; u++) h[u] = o[u];
                    for (; i >= 64;) {
                        for (w(l, h, s, x), u = 0; u < 64; u++) t[e + u] = r[n + u] ^ l[u];
                        for (u = 8, a = 1; u < 16; u++) a = a + (255 & h[u]) | 0, h[u] = 255 & a, a >>>= 8;
                        i -= 64, e += 64, n += 64
                    }
                    if (i > 0)
                        for (w(l, h, s, x), u = 0; u < i; u++) t[e + u] = r[n + u] ^ l[u];
                    return 0
                }

                function M(t, e, r, n, i) {
                    var o, s, a = new Uint8Array(16),
                        u = new Uint8Array(64);
                    for (s = 0; s < 16; s++) a[s] = 0;
                    for (s = 0; s < 8; s++) a[s] = n[s];
                    for (; r >= 64;) {
                        for (w(u, a, i, x), s = 0; s < 64; s++) t[e + s] = u[s];
                        for (s = 8, o = 1; s < 16; s++) o = o + (255 & a[s]) | 0, a[s] = 255 & o, o >>>= 8;
                        r -= 64, e += 64
                    }
                    if (r > 0)
                        for (w(u, a, i, x), s = 0; s < r; s++) t[e + s] = u[s];
                    return 0
                }

                function A(t, e, r, n, i) {
                    var o = new Uint8Array(32);
                    v(o, n, i, x);
                    for (var s = new Uint8Array(8), a = 0; a < 8; a++) s[a] = n[a + 16];
                    return M(t, e, r, s, o)
                }

                function B(t, e, r, n, i, o, s) {
                    var a = new Uint8Array(32);
                    v(a, o, s, x);
                    for (var u = new Uint8Array(8), h = 0; h < 8; h++) u[h] = o[h + 16];
                    return E(t, e, r, n, i, u, a)
                }
                var _ = function(t) {
                    var e, r, n, i, o, s, a, u;
                    this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, e = 255 & t[0] | (255 & t[1]) << 8, this.r[0] = 8191 & e, r = 255 & t[2] | (255 & t[3]) << 8, this.r[1] = (e >>> 13 | r << 3) & 8191, n = 255 & t[4] | (255 & t[5]) << 8, this.r[2] = (r >>> 10 | n << 6) & 7939, i = 255 & t[6] | (255 & t[7]) << 8, this.r[3] = (n >>> 7 | i << 9) & 8191, o = 255 & t[8] | (255 & t[9]) << 8, this.r[4] = (i >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, s = 255 & t[10] | (255 & t[11]) << 8, this.r[6] = (o >>> 14 | s << 2) & 8191, a = 255 & t[12] | (255 & t[13]) << 8, this.r[7] = (s >>> 11 | a << 5) & 8065, u = 255 & t[14] | (255 & t[15]) << 8, this.r[8] = (a >>> 8 | u << 8) & 8191, this.r[9] = u >>> 5 & 127, this.pad[0] = 255 & t[16] | (255 & t[17]) << 8, this.pad[1] = 255 & t[18] | (255 & t[19]) << 8, this.pad[2] = 255 & t[20] | (255 & t[21]) << 8, this.pad[3] = 255 & t[22] | (255 & t[23]) << 8, this.pad[4] = 255 & t[24] | (255 & t[25]) << 8, this.pad[5] = 255 & t[26] | (255 & t[27]) << 8, this.pad[6] = 255 & t[28] | (255 & t[29]) << 8, this.pad[7] = 255 & t[30] | (255 & t[31]) << 8
                };

                function U(t, e, r, n, i, o) {
                    var s = new _(o);
                    return s.update(r, n, i), s.finish(t, e), 0
                }

                function S(t, e, r, n, i, o) {
                    var s = new Uint8Array(16);
                    return U(s, 0, r, n, i, o), m(t, e, s, 0)
                }

                function I(t, e, r, n, i) {
                    var o;
                    if (r < 32) return -1;
                    for (B(t, 0, e, 0, r, n, i), U(t, 16, t, 32, r - 32, t), o = 0; o < 16; o++) t[o] = 0;
                    return 0
                }

                function k(t, e, r, n, i) {
                    var o, s = new Uint8Array(32);
                    if (r < 32 || (A(s, 0, 32, n, i), 0 !== S(e, 16, e, 32, r - 32, s))) return -1;
                    for (B(t, 0, e, 0, r, n, i), o = 0; o < 32; o++) t[o] = 0;
                    return 0
                }

                function O(t, e) {
                    var r;
                    for (r = 0; r < 16; r++) t[r] = 0 | e[r]
                }

                function L(t) {
                    var e, r, n = 1;
                    for (e = 0; e < 16; e++) n = Math.floor((r = t[e] + n + 65535) / 65536), t[e] = r - 65536 * n;
                    t[0] += n - 1 + 37 * (n - 1)
                }

                function R(t, e, r) {
                    for (var n, i = ~(r - 1), o = 0; o < 16; o++) n = i & (t[o] ^ e[o]), t[o] ^= n, e[o] ^= n
                }

                function T(t, e) {
                    var r, i, o, s = n(),
                        a = n();
                    for (r = 0; r < 16; r++) a[r] = e[r];
                    for (L(a), L(a), L(a), i = 0; i < 2; i++) {
                        for (r = 1, s[0] = a[0] - 65517; r < 15; r++) s[r] = a[r] - 65535 - (s[r - 1] >> 16 & 1), s[r - 1] &= 65535;
                        s[15] = a[15] - 32767 - (s[14] >> 16 & 1), o = s[15] >> 16 & 1, s[14] &= 65535, R(a, s, 1 - o)
                    }
                    for (r = 0; r < 16; r++) t[2 * r] = 255 & a[r], t[2 * r + 1] = a[r] >> 8
                }

                function P(t, e) {
                    var r = new Uint8Array(32),
                        n = new Uint8Array(32);
                    return T(r, t), T(n, e), b(r, 0, n, 0)
                }

                function N(t) {
                    var e = new Uint8Array(32);
                    return T(e, t), 1 & e[0]
                }

                function z(t, e) {
                    var r;
                    for (r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                    t[15] &= 32767
                }

                function C(t, e, r) {
                    for (var n = 0; n < 16; n++) t[n] = e[n] + r[n]
                }

                function q(t, e, r) {
                    for (var n = 0; n < 16; n++) t[n] = e[n] - r[n]
                }

                function j(t, e, r) {
                    var n, i, o = 0,
                        s = 0,
                        a = 0,
                        u = 0,
                        h = 0,
                        l = 0,
                        f = 0,
                        c = 0,
                        d = 0,
                        p = 0,
                        y = 0,
                        g = 0,
                        m = 0,
                        b = 0,
                        w = 0,
                        v = 0,
                        x = 0,
                        E = 0,
                        M = 0,
                        A = 0,
                        B = 0,
                        _ = 0,
                        U = 0,
                        S = 0,
                        I = 0,
                        k = 0,
                        O = 0,
                        L = 0,
                        R = 0,
                        T = 0,
                        P = 0,
                        N = r[0],
                        z = r[1],
                        C = r[2],
                        q = r[3],
                        j = r[4],
                        $ = r[5],
                        F = r[6],
                        Z = r[7],
                        H = r[8],
                        V = r[9],
                        D = r[10],
                        G = r[11],
                        K = r[12],
                        Y = r[13],
                        W = r[14],
                        Q = r[15];
                    o += (n = e[0]) * N, s += n * z, a += n * C, u += n * q, h += n * j, l += n * $, f += n * F, c += n * Z, d += n * H, p += n * V, y += n * D, g += n * G, m += n * K, b += n * Y, w += n * W, v += n * Q, s += (n = e[1]) * N, a += n * z, u += n * C, h += n * q, l += n * j, f += n * $, c += n * F, d += n * Z, p += n * H, y += n * V, g += n * D, m += n * G, b += n * K, w += n * Y, v += n * W, x += n * Q, a += (n = e[2]) * N, u += n * z, h += n * C, l += n * q, f += n * j, c += n * $, d += n * F, p += n * Z, y += n * H, g += n * V, m += n * D, b += n * G, w += n * K, v += n * Y, x += n * W, E += n * Q, u += (n = e[3]) * N, h += n * z, l += n * C, f += n * q, c += n * j, d += n * $, p += n * F, y += n * Z, g += n * H, m += n * V, b += n * D, w += n * G, v += n * K, x += n * Y, E += n * W, M += n * Q, h += (n = e[4]) * N, l += n * z, f += n * C, c += n * q, d += n * j, p += n * $, y += n * F, g += n * Z, m += n * H, b += n * V, w += n * D, v += n * G, x += n * K, E += n * Y, M += n * W, A += n * Q, l += (n = e[5]) * N, f += n * z, c += n * C, d += n * q, p += n * j, y += n * $, g += n * F, m += n * Z, b += n * H, w += n * V, v += n * D, x += n * G, E += n * K, M += n * Y, A += n * W, B += n * Q, f += (n = e[6]) * N, c += n * z, d += n * C, p += n * q, y += n * j, g += n * $, m += n * F, b += n * Z, w += n * H, v += n * V, x += n * D, E += n * G, M += n * K, A += n * Y, B += n * W, _ += n * Q, c += (n = e[7]) * N, d += n * z, p += n * C, y += n * q, g += n * j, m += n * $, b += n * F, w += n * Z, v += n * H, x += n * V, E += n * D, M += n * G, A += n * K, B += n * Y, _ += n * W, U += n * Q, d += (n = e[8]) * N, p += n * z, y += n * C, g += n * q, m += n * j, b += n * $, w += n * F, v += n * Z, x += n * H, E += n * V, M += n * D, A += n * G, B += n * K, _ += n * Y, U += n * W, S += n * Q, p += (n = e[9]) * N, y += n * z, g += n * C, m += n * q, b += n * j, w += n * $, v += n * F, x += n * Z, E += n * H, M += n * V, A += n * D, B += n * G, _ += n * K, U += n * Y, S += n * W, I += n * Q, y += (n = e[10]) * N, g += n * z, m += n * C, b += n * q, w += n * j, v += n * $, x += n * F, E += n * Z, M += n * H, A += n * V, B += n * D, _ += n * G, U += n * K, S += n * Y, I += n * W, k += n * Q, g += (n = e[11]) * N, m += n * z, b += n * C, w += n * q, v += n * j, x += n * $, E += n * F, M += n * Z, A += n * H, B += n * V, _ += n * D, U += n * G, S += n * K, I += n * Y, k += n * W, O += n * Q, m += (n = e[12]) * N, b += n * z, w += n * C, v += n * q, x += n * j, E += n * $, M += n * F, A += n * Z, B += n * H, _ += n * V, U += n * D, S += n * G, I += n * K, k += n * Y, O += n * W, L += n * Q, b += (n = e[13]) * N, w += n * z, v += n * C, x += n * q, E += n * j, M += n * $, A += n * F, B += n * Z, _ += n * H, U += n * V, S += n * D, I += n * G, k += n * K, O += n * Y, L += n * W, R += n * Q, w += (n = e[14]) * N, v += n * z, x += n * C, E += n * q, M += n * j, A += n * $, B += n * F, _ += n * Z, U += n * H, S += n * V, I += n * D, k += n * G, O += n * K, L += n * Y, R += n * W, T += n * Q, v += (n = e[15]) * N, x += n * z, E += n * C, M += n * q, A += n * j, B += n * $, _ += n * F, U += n * Z, S += n * H, I += n * V, k += n * D, O += n * G, L += n * K, R += n * Y, T += n * W, P += n * Q, o += 38 * x, s += 38 * E, a += 38 * M, u += 38 * A, h += 38 * B, l += 38 * _, f += 38 * U, c += 38 * S, d += 38 * I, p += 38 * k, y += 38 * O, g += 38 * L, m += 38 * R, b += 38 * T, w += 38 * P, i = Math.floor((n = o + (i = 1) + 65535) / 65536), o = n - 65536 * i, i = Math.floor((n = s + i + 65535) / 65536), s = n - 65536 * i, i = Math.floor((n = a + i + 65535) / 65536), a = n - 65536 * i, i = Math.floor((n = u + i + 65535) / 65536), u = n - 65536 * i, i = Math.floor((n = h + i + 65535) / 65536), h = n - 65536 * i, i = Math.floor((n = l + i + 65535) / 65536), l = n - 65536 * i, i = Math.floor((n = f + i + 65535) / 65536), f = n - 65536 * i, i = Math.floor((n = c + i + 65535) / 65536), c = n - 65536 * i, i = Math.floor((n = d + i + 65535) / 65536), d = n - 65536 * i, i = Math.floor((n = p + i + 65535) / 65536), p = n - 65536 * i, i = Math.floor((n = y + i + 65535) / 65536), y = n - 65536 * i, i = Math.floor((n = g + i + 65535) / 65536), g = n - 65536 * i, i = Math.floor((n = m + i + 65535) / 65536), m = n - 65536 * i, i = Math.floor((n = b + i + 65535) / 65536), b = n - 65536 * i, i = Math.floor((n = w + i + 65535) / 65536), w = n - 65536 * i, i = Math.floor((n = v + i + 65535) / 65536), v = n - 65536 * i, o += i - 1 + 37 * (i - 1), i = Math.floor((n = o + (i = 1) + 65535) / 65536), o = n - 65536 * i, i = Math.floor((n = s + i + 65535) / 65536), s = n - 65536 * i, i = Math.floor((n = a + i + 65535) / 65536), a = n - 65536 * i, i = Math.floor((n = u + i + 65535) / 65536), u = n - 65536 * i, i = Math.floor((n = h + i + 65535) / 65536), h = n - 65536 * i, i = Math.floor((n = l + i + 65535) / 65536), l = n - 65536 * i, i = Math.floor((n = f + i + 65535) / 65536), f = n - 65536 * i, i = Math.floor((n = c + i + 65535) / 65536), c = n - 65536 * i, i = Math.floor((n = d + i + 65535) / 65536), d = n - 65536 * i, i = Math.floor((n = p + i + 65535) / 65536), p = n - 65536 * i, i = Math.floor((n = y + i + 65535) / 65536), y = n - 65536 * i, i = Math.floor((n = g + i + 65535) / 65536), g = n - 65536 * i, i = Math.floor((n = m + i + 65535) / 65536), m = n - 65536 * i, i = Math.floor((n = b + i + 65535) / 65536), b = n - 65536 * i, i = Math.floor((n = w + i + 65535) / 65536), w = n - 65536 * i, i = Math.floor((n = v + i + 65535) / 65536), v = n - 65536 * i, o += i - 1 + 37 * (i - 1), t[0] = o, t[1] = s, t[2] = a, t[3] = u, t[4] = h, t[5] = l, t[6] = f, t[7] = c, t[8] = d, t[9] = p, t[10] = y, t[11] = g, t[12] = m, t[13] = b, t[14] = w, t[15] = v
                }

                function $(t, e) {
                    j(t, e, e)
                }

                function F(t, e) {
                    var r, i = n();
                    for (r = 0; r < 16; r++) i[r] = e[r];
                    for (r = 253; r >= 0; r--) $(i, i), 2 !== r && 4 !== r && j(i, i, e);
                    for (r = 0; r < 16; r++) t[r] = i[r]
                }

                function Z(t, e) {
                    var r, i = n();
                    for (r = 0; r < 16; r++) i[r] = e[r];
                    for (r = 250; r >= 0; r--) $(i, i), 1 !== r && j(i, i, e);
                    for (r = 0; r < 16; r++) t[r] = i[r]
                }

                function H(t, e, r) {
                    var i, o, s = new Uint8Array(32),
                        a = new Float64Array(80),
                        u = n(),
                        l = n(),
                        f = n(),
                        c = n(),
                        d = n(),
                        p = n();
                    for (o = 0; o < 31; o++) s[o] = e[o];
                    for (s[31] = 127 & e[31] | 64, s[0] &= 248, z(a, r), o = 0; o < 16; o++) l[o] = a[o], c[o] = u[o] = f[o] = 0;
                    for (o = 254, u[0] = c[0] = 1; o >= 0; --o) R(u, l, i = s[o >>> 3] >>> (7 & o) & 1), R(f, c, i), C(d, u, f), q(u, u, f), C(f, l, c), q(l, l, c), $(c, d), $(p, u), j(u, f, u), j(f, l, d), C(d, u, f), q(u, u, f), $(l, u), q(f, c, p), j(u, f, h), C(u, u, c), j(f, f, u), j(u, c, p), j(c, l, a), $(l, d), R(u, l, i), R(f, c, i);
                    for (o = 0; o < 16; o++) a[o + 16] = u[o], a[o + 32] = f[o], a[o + 48] = l[o], a[o + 64] = c[o];
                    var y = a.subarray(32),
                        g = a.subarray(16);
                    return F(y, y), j(g, g, y), T(t, g), 0
                }

                function V(t, e) {
                    return H(t, e, s)
                }

                function D(t, e) {
                    return i(e, 32), V(t, e)
                }

                function G(t, e, r) {
                    var n = new Uint8Array(32);
                    return H(n, r, e), v(t, o, n, x)
                }
                _.prototype.blocks = function(t, e, r) {
                    for (var n, i, o, s, a, u, h, l, f, c, d, p, y, g, m, b, w, v, x, E = this.fin ? 0 : 2048, M = this.h[0], A = this.h[1], B = this.h[2], _ = this.h[3], U = this.h[4], S = this.h[5], I = this.h[6], k = this.h[7], O = this.h[8], L = this.h[9], R = this.r[0], T = this.r[1], P = this.r[2], N = this.r[3], z = this.r[4], C = this.r[5], q = this.r[6], j = this.r[7], $ = this.r[8], F = this.r[9]; r >= 16;) M += 8191 & (n = 255 & t[e + 0] | (255 & t[e + 1]) << 8), A += (n >>> 13 | (i = 255 & t[e + 2] | (255 & t[e + 3]) << 8) << 3) & 8191, B += (i >>> 10 | (o = 255 & t[e + 4] | (255 & t[e + 5]) << 8) << 6) & 8191, _ += (o >>> 7 | (s = 255 & t[e + 6] | (255 & t[e + 7]) << 8) << 9) & 8191, U += (s >>> 4 | (a = 255 & t[e + 8] | (255 & t[e + 9]) << 8) << 12) & 8191, S += a >>> 1 & 8191, I += (a >>> 14 | (u = 255 & t[e + 10] | (255 & t[e + 11]) << 8) << 2) & 8191, k += (u >>> 11 | (h = 255 & t[e + 12] | (255 & t[e + 13]) << 8) << 5) & 8191, O += (h >>> 8 | (l = 255 & t[e + 14] | (255 & t[e + 15]) << 8) << 8) & 8191, L += l >>> 5 | E, f = (c = (f = 0) + M * R + 5 * F * A + 5 * $ * B + 5 * j * _ + 5 * q * U) >>> 13, c &= 8191, c += 5 * C * S + 5 * z * I + 5 * N * k + 5 * P * O + 5 * T * L, f += c >>> 13, c &= 8191, f = (d = f + M * T + A * R + 5 * F * B + 5 * $ * _ + 5 * j * U) >>> 13, d &= 8191, d += 5 * q * S + 5 * C * I + 5 * z * k + 5 * N * O + 5 * P * L, f += d >>> 13, d &= 8191, f = (p = f + M * P + A * T + B * R + 5 * F * _ + 5 * $ * U) >>> 13, p &= 8191, p += 5 * j * S + 5 * q * I + 5 * C * k + 5 * z * O + 5 * N * L, f += p >>> 13, p &= 8191, f = (y = f + M * N + A * P + B * T + _ * R + 5 * F * U) >>> 13, y &= 8191, y += 5 * $ * S + 5 * j * I + 5 * q * k + 5 * C * O + 5 * z * L, f += y >>> 13, y &= 8191, f = (g = f + M * z + A * N + B * P + _ * T + U * R) >>> 13, g &= 8191, g += 5 * F * S + 5 * $ * I + 5 * j * k + 5 * q * O + 5 * C * L, f += g >>> 13, g &= 8191, f = (m = f + M * C + A * z + B * N + _ * P + U * T) >>> 13, m &= 8191, m += S * R + 5 * F * I + 5 * $ * k + 5 * j * O + 5 * q * L, f += m >>> 13, m &= 8191, f = (b = f + M * q + A * C + B * z + _ * N + U * P) >>> 13, b &= 8191, b += S * T + I * R + 5 * F * k + 5 * $ * O + 5 * j * L, f += b >>> 13, b &= 8191, f = (w = f + M * j + A * q + B * C + _ * z + U * N) >>> 13, w &= 8191, w += S * P + I * T + k * R + 5 * F * O + 5 * $ * L, f += w >>> 13, w &= 8191, f = (v = f + M * $ + A * j + B * q + _ * C + U * z) >>> 13, v &= 8191, v += S * N + I * P + k * T + O * R + 5 * F * L, f += v >>> 13, v &= 8191, f = (x = f + M * F + A * $ + B * j + _ * q + U * C) >>> 13, x &= 8191, x += S * z + I * N + k * P + O * T + L * R, f += x >>> 13, x &= 8191, c = 8191 & (f = (f = (f << 2) + f | 0) + c | 0), f >>>= 13, d += f, M = c, A = d, B = p, _ = y, U = g, S = m, I = b, k = w, O = v, L = x, e += 16, r -= 16;
                    this.h[0] = M, this.h[1] = A, this.h[2] = B, this.h[3] = _, this.h[4] = U, this.h[5] = S, this.h[6] = I, this.h[7] = k, this.h[8] = O, this.h[9] = L
                }, _.prototype.finish = function(t, e) {
                    var r, n, i, o, s = new Uint16Array(10);
                    if (this.leftover) {
                        for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++) this.buffer[o] = 0;
                        this.fin = 1, this.blocks(this.buffer, 0, 16)
                    }
                    for (r = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++) this.h[o] += r, r = this.h[o] >>> 13, this.h[o] &= 8191;
                    for (this.h[0] += 5 * r, r = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += r, r = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += r, s[0] = this.h[0] + 5, r = s[0] >>> 13, s[0] &= 8191, o = 1; o < 10; o++) s[o] = this.h[o] + r, r = s[o] >>> 13, s[o] &= 8191;
                    for (s[9] -= 8192, n = (1 ^ r) - 1, o = 0; o < 10; o++) s[o] &= n;
                    for (o = 0, n = ~n; o < 10; o++) this.h[o] = this.h[o] & n | s[o];
                    for (o = 1, this.h[0] = (this.h[0] | this.h[1] << 13) & 65535, this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535, this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535, this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535, this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535, this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535, this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535, this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535, i = this.h[0] + this.pad[0], this.h[0] = 65535 & i; o < 8; o++) i = (this.h[o] + this.pad[o] | 0) + (i >>> 16) | 0, this.h[o] = 65535 & i;
                    t[e + 0] = this.h[0] >>> 0 & 255, t[e + 1] = this.h[0] >>> 8 & 255, t[e + 2] = this.h[1] >>> 0 & 255, t[e + 3] = this.h[1] >>> 8 & 255, t[e + 4] = this.h[2] >>> 0 & 255, t[e + 5] = this.h[2] >>> 8 & 255, t[e + 6] = this.h[3] >>> 0 & 255, t[e + 7] = this.h[3] >>> 8 & 255, t[e + 8] = this.h[4] >>> 0 & 255, t[e + 9] = this.h[4] >>> 8 & 255, t[e + 10] = this.h[5] >>> 0 & 255, t[e + 11] = this.h[5] >>> 8 & 255, t[e + 12] = this.h[6] >>> 0 & 255, t[e + 13] = this.h[6] >>> 8 & 255, t[e + 14] = this.h[7] >>> 0 & 255, t[e + 15] = this.h[7] >>> 8 & 255
                }, _.prototype.update = function(t, e, r) {
                    var n, i;
                    if (this.leftover) {
                        for ((i = 16 - this.leftover) > r && (i = r), n = 0; n < i; n++) this.buffer[this.leftover + n] = t[e + n];
                        if (r -= i, e += i, this.leftover += i, this.leftover < 16) return;
                        this.blocks(this.buffer, 0, 16), this.leftover = 0
                    }
                    if (r >= 16 && (i = r - r % 16, this.blocks(t, e, i), e += i, r -= i), r) {
                        for (n = 0; n < r; n++) this.buffer[this.leftover + n] = t[e + n];
                        this.leftover += r
                    }
                };
                var K = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                function Y(t, e, r, n) {
                    for (var i, o, s, a, u, h, l, f, c, d, p, y, g, m, b, w, v, x, E, M, A, B, _, U, S, I, k = new Int32Array(16), O = new Int32Array(16), L = t[0], R = t[1], T = t[2], P = t[3], N = t[4], z = t[5], C = t[6], q = t[7], j = e[0], $ = e[1], F = e[2], Z = e[3], H = e[4], V = e[5], D = e[6], G = e[7], Y = 0; n >= 128;) {
                        for (E = 0; E < 16; E++) M = 8 * E + Y, k[E] = r[M + 0] << 24 | r[M + 1] << 16 | r[M + 2] << 8 | r[M + 3], O[E] = r[M + 4] << 24 | r[M + 5] << 16 | r[M + 6] << 8 | r[M + 7];
                        for (E = 0; E < 80; E++)
                            if (i = L, o = R, s = T, a = P, u = N, h = z, l = C, f = q, c = j, d = $, p = F, y = Z, g = H, m = V, b = D, w = G, A = q, _ = 65535 & (B = G), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = (N >>> 14 | H << 18) ^ (N >>> 18 | H << 14) ^ (H >>> 9 | N << 23), _ += 65535 & (B = (H >>> 14 | N << 18) ^ (H >>> 18 | N << 14) ^ (N >>> 9 | H << 23)), U += B >>> 16, S += 65535 & A, I += A >>> 16, A = N & z ^ ~N & C, _ += 65535 & (B = H & V ^ ~H & D), U += B >>> 16, S += 65535 & A, I += A >>> 16, A = K[2 * E], _ += 65535 & (B = K[2 * E + 1]), U += B >>> 16, S += 65535 & A, I += A >>> 16, A = k[E % 16], _ += 65535 & (B = O[E % 16]), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, v = 65535 & S | I << 16, x = 65535 & _ | U << 16, A = v, _ = 65535 & (B = x), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = (L >>> 28 | j << 4) ^ (j >>> 2 | L << 30) ^ (j >>> 7 | L << 25), _ += 65535 & (B = (j >>> 28 | L << 4) ^ (L >>> 2 | j << 30) ^ (L >>> 7 | j << 25)), U += B >>> 16, S += 65535 & A, I += A >>> 16, A = L & R ^ L & T ^ R & T, _ += 65535 & (B = j & $ ^ j & F ^ $ & F), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, f = 65535 & S | I << 16, w = 65535 & _ | U << 16, A = a, _ = 65535 & (B = y), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = v, _ += 65535 & (B = x), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, a = 65535 & S | I << 16, y = 65535 & _ | U << 16, R = i, T = o, P = s, N = a, z = u, C = h, q = l, L = f, $ = c, F = d, Z = p, H = y, V = g, D = m, G = b, j = w, E % 16 == 15)
                                for (M = 0; M < 16; M++) A = k[M], _ = 65535 & (B = O[M]), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = k[(M + 9) % 16], _ += 65535 & (B = O[(M + 9) % 16]), U += B >>> 16, S += 65535 & A, I += A >>> 16, A = ((v = k[(M + 1) % 16]) >>> 1 | (x = O[(M + 1) % 16]) << 31) ^ (v >>> 8 | x << 24) ^ v >>> 7, _ += 65535 & (B = (x >>> 1 | v << 31) ^ (x >>> 8 | v << 24) ^ (x >>> 7 | v << 25)), U += B >>> 16, S += 65535 & A, I += A >>> 16, A = ((v = k[(M + 14) % 16]) >>> 19 | (x = O[(M + 14) % 16]) << 13) ^ (x >>> 29 | v << 3) ^ v >>> 6, _ += 65535 & (B = (x >>> 19 | v << 13) ^ (v >>> 29 | x << 3) ^ (x >>> 6 | v << 26)), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, k[M] = 65535 & S | I << 16, O[M] = 65535 & _ | U << 16;
                        A = L, _ = 65535 & (B = j), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = t[0], _ += 65535 & (B = e[0]), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, t[0] = L = 65535 & S | I << 16, e[0] = j = 65535 & _ | U << 16, A = R, _ = 65535 & (B = $), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = t[1], _ += 65535 & (B = e[1]), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, t[1] = R = 65535 & S | I << 16, e[1] = $ = 65535 & _ | U << 16, A = T, _ = 65535 & (B = F), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = t[2], _ += 65535 & (B = e[2]), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, t[2] = T = 65535 & S | I << 16, e[2] = F = 65535 & _ | U << 16, A = P, _ = 65535 & (B = Z), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = t[3], _ += 65535 & (B = e[3]), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, t[3] = P = 65535 & S | I << 16, e[3] = Z = 65535 & _ | U << 16, A = N, _ = 65535 & (B = H), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = t[4], _ += 65535 & (B = e[4]), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, t[4] = N = 65535 & S | I << 16, e[4] = H = 65535 & _ | U << 16, A = z, _ = 65535 & (B = V), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = t[5], _ += 65535 & (B = e[5]), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, t[5] = z = 65535 & S | I << 16, e[5] = V = 65535 & _ | U << 16, A = C, _ = 65535 & (B = D), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = t[6], _ += 65535 & (B = e[6]), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, t[6] = C = 65535 & S | I << 16, e[6] = D = 65535 & _ | U << 16, A = q, _ = 65535 & (B = G), U = B >>> 16, S = 65535 & A, I = A >>> 16, A = t[7], _ += 65535 & (B = e[7]), U += B >>> 16, S += 65535 & A, I += A >>> 16, U += _ >>> 16, S += U >>> 16, I += S >>> 16, t[7] = q = 65535 & S | I << 16, e[7] = G = 65535 & _ | U << 16, Y += 128, n -= 128
                    }
                    return n
                }

                function W(t, e, r) {
                    var n, i = new Int32Array(8),
                        o = new Int32Array(8),
                        s = new Uint8Array(256),
                        a = r;
                    for (i[0] = 1779033703, i[1] = 3144134277, i[2] = 1013904242, i[3] = 2773480762, i[4] = 1359893119, i[5] = 2600822924, i[6] = 528734635, i[7] = 1541459225, o[0] = 4089235720, o[1] = 2227873595, o[2] = 4271175723, o[3] = 1595750129, o[4] = 2917565137, o[5] = 725511199, o[6] = 4215389547, o[7] = 327033209, Y(i, o, e, r), r %= 128, n = 0; n < r; n++) s[n] = e[a - r + n];
                    for (s[r] = 128, s[(r = 256 - 128 * (r < 112 ? 1 : 0)) - 9] = 0, y(s, r - 8, a / 536870912 | 0, a << 3), Y(i, o, s, r), n = 0; n < 8; n++) y(t, 8 * n, i[n], o[n]);
                    return 0
                }

                function Q(t, e) {
                    var r = n(),
                        i = n(),
                        o = n(),
                        s = n(),
                        a = n(),
                        u = n(),
                        h = n(),
                        l = n(),
                        c = n();
                    q(r, t[1], t[0]), q(c, e[1], e[0]), j(r, r, c), C(i, t[0], t[1]), C(c, e[0], e[1]), j(i, i, c), j(o, t[3], e[3]), j(o, o, f), j(s, t[2], e[2]), C(s, s, s), q(a, i, r), q(u, s, o), C(h, s, o), C(l, i, r), j(t[0], a, u), j(t[1], l, h), j(t[2], h, u), j(t[3], a, l)
                }

                function J(t, e, r) {
                    var n;
                    for (n = 0; n < 4; n++) R(t[n], e[n], r)
                }

                function X(t, e) {
                    var r = n(),
                        i = n(),
                        o = n();
                    F(o, e[2]), j(r, e[0], o), j(i, e[1], o), T(t, i), t[31] ^= N(r) << 7
                }

                function tt(t, e, r) {
                    var n, i;
                    for (O(t[0], a), O(t[1], u), O(t[2], u), O(t[3], a), i = 255; i >= 0; --i) J(t, e, n = r[i / 8 | 0] >> (7 & i) & 1), Q(e, t), Q(t, t), J(t, e, n)
                }

                function te(t, e) {
                    var r = [n(), n(), n(), n()];
                    O(r[0], c), O(r[1], d), O(r[2], u), j(r[3], c, d), tt(t, r, e)
                }

                function tr(t, e, r) {
                    var o, s = new Uint8Array(64),
                        a = [n(), n(), n(), n()];
                    for (r || i(e, 32), W(s, e, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, te(a, s), X(t, a), o = 0; o < 32; o++) e[o + 32] = t[o];
                    return 0
                }
                var tn = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

                function ti(t, e) {
                    var r, n, i, o;
                    for (n = 63; n >= 32; --n) {
                        for (r = 0, i = n - 32, o = n - 12; i < o; ++i) e[i] += r - 16 * e[n] * tn[i - (n - 32)], r = Math.floor((e[i] + 128) / 256), e[i] -= 256 * r;
                        e[i] += r, e[n] = 0
                    }
                    for (i = 0, r = 0; i < 32; i++) e[i] += r - (e[31] >> 4) * tn[i], r = e[i] >> 8, e[i] &= 255;
                    for (i = 0; i < 32; i++) e[i] -= r * tn[i];
                    for (n = 0; n < 32; n++) e[n + 1] += e[n] >> 8, t[n] = 255 & e[n]
                }

                function to(t) {
                    var e, r = new Float64Array(64);
                    for (e = 0; e < 64; e++) r[e] = t[e];
                    for (e = 0; e < 64; e++) t[e] = 0;
                    ti(t, r)
                }

                function ts(t, e, r, i) {
                    var o, s, a = new Uint8Array(64),
                        u = new Uint8Array(64),
                        h = new Uint8Array(64),
                        l = new Float64Array(64),
                        f = [n(), n(), n(), n()];
                    for (W(a, i, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64, o = 0; o < r; o++) t[64 + o] = e[o];
                    for (o = 0; o < 32; o++) t[32 + o] = a[32 + o];
                    for (W(h, t.subarray(32), r + 32), to(h), te(f, h), X(t, f), o = 32; o < 64; o++) t[o] = i[o];
                    for (W(u, t, r + 64), to(u), o = 0; o < 64; o++) l[o] = 0;
                    for (o = 0; o < 32; o++) l[o] = h[o];
                    for (o = 0; o < 32; o++)
                        for (s = 0; s < 32; s++) l[o + s] += u[o] * a[s];
                    return ti(t.subarray(32), l), r + 64
                }

                function ta(t, e, r, i) {
                    var o, s, h, f, c, d, y, g, m = new Uint8Array(32),
                        w = new Uint8Array(64),
                        v = [n(), n(), n(), n()],
                        x = [n(), n(), n(), n()];
                    if (r < 64 || (o = n(), s = n(), h = n(), f = n(), c = n(), d = n(), y = n(), (O(x[2], u), z(x[1], i), $(h, x[1]), j(f, h, l), q(h, h, x[2]), C(f, x[2], f), $(c, f), $(d, c), j(y, d, c), j(o, y, h), j(o, o, f), Z(o, o), j(o, o, h), j(o, o, f), j(o, o, f), j(x[0], o, f), $(s, x[0]), j(s, s, f), P(s, h) && j(x[0], x[0], p), $(s, x[0]), j(s, s, f), P(s, h)) ? -1 : (N(x[0]) === i[31] >> 7 && q(x[0], a, x[0]), j(x[3], x[0], x[1]), 0))) return -1;
                    for (g = 0; g < r; g++) t[g] = e[g];
                    for (g = 0; g < 32; g++) t[g + 32] = i[g];
                    if (W(w, t, r), to(w), tt(v, x, w), te(x, e.subarray(32)), Q(v, x), X(m, v), r -= 64, b(e, 0, m, 0)) {
                        for (g = 0; g < r; g++) t[g] = 0;
                        return -1
                    }
                    for (g = 0; g < r; g++) t[g] = e[g + 64];
                    return r
                }

                function tu(t, e) {
                    if (32 !== t.length) throw Error("bad key size");
                    if (24 !== e.length) throw Error("bad nonce size")
                }

                function th() {
                    for (var t = 0; t < arguments.length; t++)
                        if (!(arguments[t] instanceof Uint8Array)) throw TypeError("unexpected type, use Uint8Array")
                }

                function tl(t) {
                    for (var e = 0; e < t.length; e++) t[e] = 0
                }
                t.lowlevel = {
                    crypto_core_hsalsa20: v,
                    crypto_stream_xor: B,
                    crypto_stream: A,
                    crypto_stream_salsa20_xor: E,
                    crypto_stream_salsa20: M,
                    crypto_onetimeauth: U,
                    crypto_onetimeauth_verify: S,
                    crypto_verify_16: m,
                    crypto_verify_32: b,
                    crypto_secretbox: I,
                    crypto_secretbox_open: k,
                    crypto_scalarmult: H,
                    crypto_scalarmult_base: V,
                    crypto_box_beforenm: G,
                    crypto_box_afternm: I,
                    crypto_box: function(t, e, r, n, i, o) {
                        var s = new Uint8Array(32);
                        return G(s, i, o), I(t, e, r, n, s)
                    },
                    crypto_box_open: function(t, e, r, n, i, o) {
                        var s = new Uint8Array(32);
                        return G(s, i, o), k(t, e, r, n, s)
                    },
                    crypto_box_keypair: D,
                    crypto_hash: W,
                    crypto_sign: ts,
                    crypto_sign_keypair: tr,
                    crypto_sign_open: ta,
                    crypto_secretbox_KEYBYTES: 32,
                    crypto_secretbox_NONCEBYTES: 24,
                    crypto_secretbox_ZEROBYTES: 32,
                    crypto_secretbox_BOXZEROBYTES: 16,
                    crypto_scalarmult_BYTES: 32,
                    crypto_scalarmult_SCALARBYTES: 32,
                    crypto_box_PUBLICKEYBYTES: 32,
                    crypto_box_SECRETKEYBYTES: 32,
                    crypto_box_BEFORENMBYTES: 32,
                    crypto_box_NONCEBYTES: 24,
                    crypto_box_ZEROBYTES: 32,
                    crypto_box_BOXZEROBYTES: 16,
                    crypto_sign_BYTES: 64,
                    crypto_sign_PUBLICKEYBYTES: 32,
                    crypto_sign_SECRETKEYBYTES: 64,
                    crypto_sign_SEEDBYTES: 32,
                    crypto_hash_BYTES: 64,
                    gf: n,
                    D: l,
                    L: tn,
                    pack25519: T,
                    unpack25519: z,
                    M: j,
                    A: C,
                    S: $,
                    Z: q,
                    pow2523: Z,
                    add: Q,
                    set25519: O,
                    modL: ti,
                    scalarmult: tt,
                    scalarbase: te
                }, t.randomBytes = function(t) {
                    var e = new Uint8Array(t);
                    return i(e, t), e
                }, t.secretbox = function(t, e, r) {
                    th(t, e, r), tu(r, e);
                    for (var n = new Uint8Array(32 + t.length), i = new Uint8Array(n.length), o = 0; o < t.length; o++) n[o + 32] = t[o];
                    return I(i, n, n.length, e, r), i.subarray(16)
                }, t.secretbox.open = function(t, e, r) {
                    th(t, e, r), tu(r, e);
                    for (var n = new Uint8Array(16 + t.length), i = new Uint8Array(n.length), o = 0; o < t.length; o++) n[o + 16] = t[o];
                    return n.length < 32 || 0 !== k(i, n, n.length, e, r) ? null : i.subarray(32)
                }, t.secretbox.keyLength = 32, t.secretbox.nonceLength = 24, t.secretbox.overheadLength = 16, t.scalarMult = function(t, e) {
                    if (th(t, e), 32 !== t.length) throw Error("bad n size");
                    if (32 !== e.length) throw Error("bad p size");
                    var r = new Uint8Array(32);
                    return H(r, t, e), r
                }, t.scalarMult.base = function(t) {
                    if (th(t), 32 !== t.length) throw Error("bad n size");
                    var e = new Uint8Array(32);
                    return V(e, t), e
                }, t.scalarMult.scalarLength = 32, t.scalarMult.groupElementLength = 32, t.box = function(e, r, n, i) {
                    var o = t.box.before(n, i);
                    return t.secretbox(e, r, o)
                }, t.box.before = function(t, e) {
                    th(t, e),
                        function(t, e) {
                            if (32 !== t.length) throw Error("bad public key size");
                            if (32 !== e.length) throw Error("bad secret key size")
                        }(t, e);
                    var r = new Uint8Array(32);
                    return G(r, t, e), r
                }, t.box.after = t.secretbox, t.box.open = function(e, r, n, i) {
                    var o = t.box.before(n, i);
                    return t.secretbox.open(e, r, o)
                }, t.box.open.after = t.secretbox.open, t.box.keyPair = function() {
                    var t = new Uint8Array(32),
                        e = new Uint8Array(32);
                    return D(t, e), {
                        publicKey: t,
                        secretKey: e
                    }
                }, t.box.keyPair.fromSecretKey = function(t) {
                    if (th(t), 32 !== t.length) throw Error("bad secret key size");
                    var e = new Uint8Array(32);
                    return V(e, t), {
                        publicKey: e,
                        secretKey: new Uint8Array(t)
                    }
                }, t.box.publicKeyLength = 32, t.box.secretKeyLength = 32, t.box.sharedKeyLength = 32, t.box.nonceLength = 24, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function(t, e) {
                    if (th(t, e), 64 !== e.length) throw Error("bad secret key size");
                    var r = new Uint8Array(64 + t.length);
                    return ts(r, t, t.length, e), r
                }, t.sign.open = function(t, e) {
                    if (th(t, e), 32 !== e.length) throw Error("bad public key size");
                    var r = new Uint8Array(t.length),
                        n = ta(r, t, t.length, e);
                    if (n < 0) return null;
                    for (var i = new Uint8Array(n), o = 0; o < i.length; o++) i[o] = r[o];
                    return i
                }, t.sign.detached = function(e, r) {
                    for (var n = t.sign(e, r), i = new Uint8Array(64), o = 0; o < i.length; o++) i[o] = n[o];
                    return i
                }, t.sign.detached.verify = function(t, e, r) {
                    if (th(t, e, r), 64 !== e.length) throw Error("bad signature size");
                    if (32 !== r.length) throw Error("bad public key size");
                    var n, i = new Uint8Array(64 + t.length),
                        o = new Uint8Array(64 + t.length);
                    for (n = 0; n < 64; n++) i[n] = e[n];
                    for (n = 0; n < t.length; n++) i[n + 64] = t[n];
                    return ta(o, i, i.length, r) >= 0
                }, t.sign.keyPair = function() {
                    var t = new Uint8Array(32),
                        e = new Uint8Array(64);
                    return tr(t, e), {
                        publicKey: t,
                        secretKey: e
                    }
                }, t.sign.keyPair.fromSecretKey = function(t) {
                    if (th(t), 64 !== t.length) throw Error("bad secret key size");
                    for (var e = new Uint8Array(32), r = 0; r < e.length; r++) e[r] = t[32 + r];
                    return {
                        publicKey: e,
                        secretKey: new Uint8Array(t)
                    }
                }, t.sign.keyPair.fromSeed = function(t) {
                    if (th(t), 32 !== t.length) throw Error("bad seed size");
                    for (var e = new Uint8Array(32), r = new Uint8Array(64), n = 0; n < 32; n++) r[n] = t[n];
                    return tr(e, r, !0), {
                        publicKey: e,
                        secretKey: r
                    }
                }, t.sign.publicKeyLength = 32, t.sign.secretKeyLength = 64, t.sign.seedLength = 32, t.sign.signatureLength = 64, t.hash = function(t) {
                    th(t);
                    var e = new Uint8Array(64);
                    return W(e, t, t.length), e
                }, t.hash.hashLength = 64, t.verify = function(t, e) {
                    return th(t, e), 0 !== t.length && 0 !== e.length && t.length === e.length && 0 === g(t, 0, e, 0, t.length)
                }, t.setPRNG = function(t) {
                    i = t
                }, (e = "undefined" != typeof self ? self.crypto || self.msCrypto : null) && e.getRandomValues ? t.setPRNG(function(t, r) {
                    var n, i = new Uint8Array(r);
                    for (n = 0; n < r; n += 65536) e.getRandomValues(i.subarray(n, n + Math.min(r - n, 65536)));
                    for (n = 0; n < r; n++) t[n] = i[n];
                    tl(i)
                }) : (e = r(39201)) && e.randomBytes && t.setPRNG(function(t, r) {
                    var n, i = e.randomBytes(r);
                    for (n = 0; n < r; n++) t[n] = i[n];
                    tl(i)
                })
            }(t.exports ? t.exports : self.nacl = self.nacl || {})
        },
        86977: function(t, e, r) {
            "use strict";
            r.d(e, {
                v4: function() {
                    return h
                }
            });
            for (var n, i = new Uint8Array(16), o = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, s = [], a = 0; a < 256; ++a) s.push((a + 256).toString(16).substr(1));
            var u = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = (s[t[e + 0]] + s[t[e + 1]] + s[t[e + 2]] + s[t[e + 3]] + "-" + s[t[e + 4]] + s[t[e + 5]] + "-" + s[t[e + 6]] + s[t[e + 7]] + "-" + s[t[e + 8]] + s[t[e + 9]] + "-" + s[t[e + 10]] + s[t[e + 11]] + s[t[e + 12]] + s[t[e + 13]] + s[t[e + 14]] + s[t[e + 15]]).toLowerCase();
                    if (!("string" == typeof r && o.test(r))) throw TypeError("Stringified UUID is invalid");
                    return r
                },
                h = function(t, e, r) {
                    var o = (t = t || {}).random || (t.rng || function() {
                        if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                        return n(i)
                    })();
                    if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e) {
                        r = r || 0;
                        for (var s = 0; s < 16; ++s) e[r + s] = o[s];
                        return e
                    }
                    return u(o)
                }
        },
        40603: function(t, e, r) {
            "use strict";
            r.d(e, {
                K: function() {
                    return u
                },
                M: function() {
                    return a
                }
            });
            var n = r(47759),
                i = r(47889);
            let o = BigInt(0),
                s = BigInt(1);

            function a(t, e) {
                let r = (t, e) => {
                        let r = e.negate();
                        return t ? r : e
                    },
                    n = t => ({
                        windows: Math.ceil(e / t) + 1,
                        windowSize: 2 ** (t - 1)
                    });
                return {
                    constTimeNegate: r,
                    unsafeLadder(e, r) {
                        let n = t.ZERO,
                            i = e;
                        for (; r > o;) r & s && (n = n.add(i)), i = i.double(), r >>= s;
                        return n
                    },
                    precomputeWindow(t, e) {
                        let {
                            windows: r,
                            windowSize: i
                        } = n(e), o = [], s = t, a = s;
                        for (let t = 0; t < r; t++) {
                            a = s, o.push(a);
                            for (let t = 1; t < i; t++) a = a.add(s), o.push(a);
                            s = a.double()
                        }
                        return o
                    },
                    wNAF(e, i, o) {
                        let {
                            windows: a,
                            windowSize: u
                        } = n(e), h = t.ZERO, l = t.BASE, f = BigInt(2 ** e - 1), c = 2 ** e, d = BigInt(e);
                        for (let t = 0; t < a; t++) {
                            let e = t * u,
                                n = Number(o & f);
                            o >>= d, n > u && (n -= c, o += s);
                            let a = e + Math.abs(n) - 1,
                                p = t % 2 != 0,
                                y = n < 0;
                            0 === n ? l = l.add(r(p, i[e])) : h = h.add(r(y, i[a]))
                        }
                        return {
                            p: h,
                            f: l
                        }
                    },
                    wNAFCached(t, e, r, n) {
                        let i = t._WINDOW_SIZE || 1,
                            o = e.get(t);
                        return o || (o = this.precomputeWindow(t, i), 1 !== i && e.set(t, n(o))), this.wNAF(i, o, r)
                    }
                }
            }

            function u(t) {
                return (0, n.OP)(t.Fp), (0, i.FF)(t, {
                    n: "bigint",
                    h: "bigint",
                    Gx: "field",
                    Gy: "field"
                }, {
                    nBitLength: "isSafeInteger",
                    nByteLength: "isSafeInteger"
                }), Object.freeze({ ...(0, n.kK)(t.n, t.nBitLength),
                    ...t,
                    p: t.Fp.ORDER
                })
            }
        },
        47759: function(t, e, r) {
            "use strict";
            r.d(e, {
                OP: function() {
                    return g
                },
                PS: function() {
                    return v
                },
                Tu: function() {
                    return p
                },
                U_: function() {
                    return d
                },
                Us: function() {
                    return x
                },
                gN: function() {
                    return b
                },
                kK: function() {
                    return m
                },
                oA: function() {
                    return c
                },
                wQ: function() {
                    return f
                }
            });
            var n = r(47889);
            let i = BigInt(0),
                o = BigInt(1),
                s = BigInt(2),
                a = BigInt(3),
                u = BigInt(4),
                h = BigInt(5),
                l = BigInt(8);

            function f(t, e) {
                let r = t % e;
                return r >= i ? r : e + r
            }

            function c(t, e, r) {
                let n = t;
                for (; e-- > i;) n *= n, n %= r;
                return n
            }

            function d(t, e) {
                if (t === i || e <= i) throw Error(`invert: expected positive integers, got n=${t} mod=${e}`);
                let r = f(t, e),
                    n = e,
                    s = i,
                    a = o,
                    u = o,
                    h = i;
                for (; r !== i;) {
                    let t = n / r,
                        e = n % r,
                        i = s - u * t,
                        o = a - h * t;
                    n = r, r = e, s = u, a = h, u = i, h = o
                }
                if (n !== o) throw Error("invert: does not exist");
                return f(s, e)
            }
            BigInt(9), BigInt(16);
            let p = (t, e) => (f(t, e) & o) === o,
                y = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

            function g(t) {
                let e = y.reduce((t, e) => (t[e] = "function", t), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger"
                });
                return (0, n.FF)(t, e)
            }

            function m(t, e) {
                let r = void 0 !== e ? e : t.toString(2).length;
                return {
                    nBitLength: r,
                    nByteLength: Math.ceil(r / 8)
                }
            }

            function b(t, e, r = !1, c = {}) {
                if (t <= i) throw Error(`Expected Field ORDER > 0, got ${t}`);
                let {
                    nBitLength: p,
                    nByteLength: y
                } = m(t, e);
                if (y > 2048) throw Error("Field lengths over 2048 bytes are not supported");
                let g = function(t) {
                        if (t % u === a) {
                            let e = (t + o) / u;
                            return function(t, r) {
                                let n = t.pow(r, e);
                                if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
                                return n
                            }
                        }
                        if (t % l === h) {
                            let e = (t - h) / l;
                            return function(t, r) {
                                let n = t.mul(r, s),
                                    i = t.pow(n, e),
                                    o = t.mul(r, i),
                                    a = t.mul(t.mul(o, s), i),
                                    u = t.mul(o, t.sub(a, t.ONE));
                                if (!t.eql(t.sqr(u), r)) throw Error("Cannot find square root");
                                return u
                            }
                        }
                        return function(t) {
                            let e, r, n;
                            let a = (t - o) / s;
                            for (e = t - o, r = 0; e % s === i; e /= s, r++);
                            for (n = s; n < t && function(t, e, r) {
                                    if (r <= i || e < i) throw Error("Expected power/modulo > 0");
                                    if (r === o) return i;
                                    let n = o;
                                    for (; e > i;) e & o && (n = n * t % r), t = t * t % r, e >>= o;
                                    return n
                                }(n, a, t) !== t - o; n++);
                            if (1 === r) {
                                let e = (t + o) / u;
                                return function(t, r) {
                                    let n = t.pow(r, e);
                                    if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
                                    return n
                                }
                            }
                            let h = (e + o) / s;
                            return function(t, i) {
                                if (t.pow(i, a) === t.neg(t.ONE)) throw Error("Cannot find square root");
                                let s = r,
                                    u = t.pow(t.mul(t.ONE, n), e),
                                    l = t.pow(i, h),
                                    f = t.pow(i, e);
                                for (; !t.eql(f, t.ONE);) {
                                    if (t.eql(f, t.ZERO)) return t.ZERO;
                                    let e = 1;
                                    for (let r = t.sqr(f); e < s && !t.eql(r, t.ONE); e++) r = t.sqr(r);
                                    let r = t.pow(u, o << BigInt(s - e - 1));
                                    u = t.sqr(r), l = t.mul(l, r), f = t.mul(f, u), s = e
                                }
                                return l
                            }
                        }(t)
                    }(t),
                    b = Object.freeze({
                        ORDER: t,
                        BITS: p,
                        BYTES: y,
                        MASK: (0, n.dQ)(p),
                        ZERO: i,
                        ONE: o,
                        create: e => f(e, t),
                        isValid: e => {
                            if ("bigint" != typeof e) throw Error(`Invalid field element: expected bigint, got ${typeof e}`);
                            return i <= e && e < t
                        },
                        is0: t => t === i,
                        isOdd: t => (t & o) === o,
                        neg: e => f(-e, t),
                        eql: (t, e) => t === e,
                        sqr: e => f(e * e, t),
                        add: (e, r) => f(e + r, t),
                        sub: (e, r) => f(e - r, t),
                        mul: (e, r) => f(e * r, t),
                        pow: (t, e) => (function(t, e, r) {
                            if (r < i) throw Error("Expected power > 0");
                            if (r === i) return t.ONE;
                            if (r === o) return e;
                            let n = t.ONE,
                                s = e;
                            for (; r > i;) r & o && (n = t.mul(n, s)), s = t.sqr(s), r >>= o;
                            return n
                        })(b, t, e),
                        div: (e, r) => f(e * d(r, t), t),
                        sqrN: t => t * t,
                        addN: (t, e) => t + e,
                        subN: (t, e) => t - e,
                        mulN: (t, e) => t * e,
                        inv: e => d(e, t),
                        sqrt: c.sqrt || (t => g(b, t)),
                        invertBatch: t => (function(t, e) {
                            let r = Array(e.length),
                                n = e.reduce((e, n, i) => t.is0(n) ? e : (r[i] = e, t.mul(e, n)), t.ONE),
                                i = t.inv(n);
                            return e.reduceRight((e, n, i) => t.is0(n) ? e : (r[i] = t.mul(e, r[i]), t.mul(e, n)), i), r
                        })(b, t),
                        cmov: (t, e, r) => r ? e : t,
                        toBytes: t => r ? (0, n.S5)(t, y) : (0, n.tL)(t, y),
                        fromBytes: t => {
                            if (t.length !== y) throw Error(`Fp.fromBytes: expected ${y}, got ${t.length}`);
                            return r ? (0, n.ty)(t) : (0, n.bytesToNumberBE)(t)
                        }
                    });
                return Object.freeze(b)
            }

            function w(t) {
                if ("bigint" != typeof t) throw Error("field order must be bigint");
                return Math.ceil(t.toString(2).length / 8)
            }

            function v(t) {
                let e = w(t);
                return e + Math.ceil(e / 2)
            }

            function x(t, e, r = !1) {
                let i = t.length,
                    s = w(e),
                    a = v(e);
                if (i < 16 || i < a || i > 1024) throw Error(`expected ${a}-1024 bytes of input, got ${i}`);
                let u = f(r ? (0, n.bytesToNumberBE)(t) : (0, n.ty)(t), e - o) + o;
                return r ? (0, n.S5)(u, s) : (0, n.tL)(u, s)
            }
        },
        47889: function(t, e, r) {
            "use strict";
            r.d(e, {
                FF: function() {
                    return A
                },
                S5: function() {
                    return g
                },
                _t: function() {
                    return o
                },
                bytesToNumberBE: function() {
                    return d
                },
                ci: function() {
                    return u
                },
                dQ: function() {
                    return w
                },
                eV: function() {
                    return b
                },
                gk: function() {
                    return s
                },
                hexToBytes: function() {
                    return c
                },
                n$: function() {
                    return E
                },
                ql: function() {
                    return m
                },
                tL: function() {
                    return y
                },
                ty: function() {
                    return p
                }
            });
            let n = BigInt(1),
                i = BigInt(2);

            function o(t) {
                return t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name
            }

            function s(t) {
                if (!o(t)) throw Error("Uint8Array expected")
            }
            let a = Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));

            function u(t) {
                s(t);
                let e = "";
                for (let r = 0; r < t.length; r++) e += a[t[r]];
                return e
            }

            function h(t) {
                if ("string" != typeof t) throw Error("hex string expected, got " + typeof t);
                return BigInt("" === t ? "0" : `0x${t}`)
            }
            let l = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function f(t) {
                return t >= l._0 && t <= l._9 ? t - l._0 : t >= l._A && t <= l._F ? t - (l._A - 10) : t >= l._a && t <= l._f ? t - (l._a - 10) : void 0
            }

            function c(t) {
                if ("string" != typeof t) throw Error("hex string expected, got " + typeof t);
                let e = t.length,
                    r = e / 2;
                if (e % 2) throw Error("padded hex string expected, got unpadded hex of length " + e);
                let n = new Uint8Array(r);
                for (let e = 0, i = 0; e < r; e++, i += 2) {
                    let r = f(t.charCodeAt(i)),
                        o = f(t.charCodeAt(i + 1));
                    if (void 0 === r || void 0 === o) throw Error('hex string expected, got non-hex character "' + (t[i] + t[i + 1]) + '" at index ' + i);
                    n[e] = 16 * r + o
                }
                return n
            }

            function d(t) {
                return h(u(t))
            }

            function p(t) {
                return s(t), h(u(Uint8Array.from(t).reverse()))
            }

            function y(t, e) {
                return c(t.toString(16).padStart(2 * e, "0"))
            }

            function g(t, e) {
                return y(t, e).reverse()
            }

            function m(t, e, r) {
                let n;
                if ("string" == typeof e) try {
                        n = c(e)
                    } catch (r) {
                        throw Error(`${t} must be valid hex string, got "${e}". Cause: ${r}`)
                    } else if (o(e)) n = Uint8Array.from(e);
                    else throw Error(`${t} must be hex string or Uint8Array`);
                let i = n.length;
                if ("number" == typeof r && i !== r) throw Error(`${t} expected ${r} bytes, got ${i}`);
                return n
            }

            function b(...t) {
                let e = 0;
                for (let r = 0; r < t.length; r++) {
                    let n = t[r];
                    s(n), e += n.length
                }
                let r = new Uint8Array(e);
                for (let e = 0, n = 0; e < t.length; e++) {
                    let i = t[e];
                    r.set(i, n), n += i.length
                }
                return r
            }
            let w = t => (i << BigInt(t - 1)) - n,
                v = t => new Uint8Array(t),
                x = t => Uint8Array.from(t);

            function E(t, e, r) {
                if ("number" != typeof t || t < 2) throw Error("hashLen must be a number");
                if ("number" != typeof e || e < 2) throw Error("qByteLen must be a number");
                if ("function" != typeof r) throw Error("hmacFn must be a function");
                let n = v(t),
                    i = v(t),
                    o = 0,
                    s = () => {
                        n.fill(1), i.fill(0), o = 0
                    },
                    a = (...t) => r(i, n, ...t),
                    u = (t = v()) => {
                        i = a(x([0]), t), n = a(), 0 !== t.length && (i = a(x([1]), t), n = a())
                    },
                    h = () => {
                        if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
                        let t = 0,
                            r = [];
                        for (; t < e;) {
                            let e = (n = a()).slice();
                            r.push(e), t += n.length
                        }
                        return b(...r)
                    };
                return (t, e) => {
                    let r;
                    for (s(), u(t); !(r = e(h()));) u();
                    return s(), r
                }
            }
            let M = {
                bigint: t => "bigint" == typeof t,
                function: t => "function" == typeof t,
                boolean: t => "boolean" == typeof t,
                string: t => "string" == typeof t,
                stringOrUint8Array: t => "string" == typeof t || o(t),
                isSafeInteger: t => Number.isSafeInteger(t),
                array: t => Array.isArray(t),
                field: (t, e) => e.Fp.isValid(t),
                hash: t => "function" == typeof t && Number.isSafeInteger(t.outputLen)
            };

            function A(t, e, r = {}) {
                let n = (e, r, n) => {
                    let i = M[r];
                    if ("function" != typeof i) throw Error(`Invalid validator "${r}", expected function`);
                    let o = t[e];
                    if ((!n || void 0 !== o) && !i(o, t)) throw Error(`Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`)
                };
                for (let [t, r] of Object.entries(e)) n(t, r, !1);
                for (let [t, e] of Object.entries(r)) n(t, e, !0);
                return t
            }
        },
        97345: function(t, e, r) {
            "use strict";
            r.d(e, {
                UN: function() {
                    return E
                }
            });
            var n = r(76865),
                i = r(26188),
                o = r(40603),
                s = r(47759),
                a = r(47889);
            let u = BigInt(0),
                h = BigInt(1),
                l = BigInt(2),
                f = BigInt(8),
                c = {
                    zip215: !0
                },
                d = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
                p = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"),
                y = BigInt(0),
                g = BigInt(1),
                m = BigInt(2);
            BigInt(3);
            let b = BigInt(5),
                w = BigInt(8);

            function v(t, e) {
                let r = (0, s.wQ)(e * e * e, d),
                    n = function(t) {
                        let e = BigInt(10),
                            r = BigInt(20),
                            n = BigInt(40),
                            i = BigInt(80),
                            o = t * t % d * t % d,
                            a = (0, s.oA)(o, m, d) * o % d,
                            u = (0, s.oA)(a, g, d) * t % d,
                            h = (0, s.oA)(u, b, d) * u % d,
                            l = (0, s.oA)(h, e, d) * h % d,
                            f = (0, s.oA)(l, r, d) * l % d,
                            c = (0, s.oA)(f, n, d) * f % d,
                            p = (0, s.oA)(c, i, d) * c % d,
                            y = (0, s.oA)(p, i, d) * c % d,
                            w = (0, s.oA)(y, e, d) * h % d;
                        return {
                            pow_p_5_8: (0, s.oA)(w, m, d) * t % d,
                            b2: o
                        }
                    }(t * (0, s.wQ)(r * r * e, d)).pow_p_5_8,
                    i = (0, s.wQ)(t * r * n, d),
                    o = (0, s.wQ)(e * i * i, d),
                    a = i,
                    u = (0, s.wQ)(i * p, d),
                    h = o === t,
                    l = o === (0, s.wQ)(-t, d),
                    f = o === (0, s.wQ)(-t * p, d);
                return h && (i = a), (l || f) && (i = u), (0, s.Tu)(i, d) && (i = (0, s.wQ)(-i, d)), {
                    isValid: h || l,
                    value: i
                }
            }
            let x = (0, s.gN)(d, void 0, !0),
                E = function(t) {
                    let e = function(t) {
                            let e = (0, o.K)(t);
                            return a.FF(t, {
                                hash: "function",
                                a: "bigint",
                                d: "bigint",
                                randomBytes: "function"
                            }, {
                                adjustScalarBytes: "function",
                                domain: "function",
                                uvRatio: "function",
                                mapToCurve: "function"
                            }), Object.freeze({ ...e
                            })
                        }(t),
                        {
                            Fp: r,
                            n: n,
                            prehash: i,
                            hash: d,
                            randomBytes: p,
                            nByteLength: y,
                            h: g
                        } = e,
                        m = l << BigInt(8 * y) - h,
                        b = r.create,
                        w = e.uvRatio || ((t, e) => {
                            try {
                                return {
                                    isValid: !0,
                                    value: r.sqrt(t * r.inv(e))
                                }
                            } catch (t) {
                                return {
                                    isValid: !1,
                                    value: u
                                }
                            }
                        }),
                        v = e.adjustScalarBytes || (t => t),
                        x = e.domain || ((t, e, r) => {
                            if (e.length || r) throw Error("Contexts/pre-hash are not supported");
                            return t
                        }),
                        E = t => "bigint" == typeof t && u < t,
                        M = (t, e) => E(t) && E(e) && t < e,
                        A = t => t === u || M(t, m);

                    function B(t, e) {
                        if (M(t, e)) return t;
                        throw Error(`Expected valid scalar < ${e}, got ${typeof t} ${t}`)
                    }

                    function _(t) {
                        return t === u ? t : B(t, n)
                    }
                    let U = new Map;

                    function S(t) {
                        if (!(t instanceof I)) throw Error("ExtendedPoint expected")
                    }
                    class I {
                        constructor(t, e, r, n) {
                            if (this.ex = t, this.ey = e, this.ez = r, this.et = n, !A(t)) throw Error("x required");
                            if (!A(e)) throw Error("y required");
                            if (!A(r)) throw Error("z required");
                            if (!A(n)) throw Error("t required")
                        }
                        get x() {
                            return this.toAffine().x
                        }
                        get y() {
                            return this.toAffine().y
                        }
                        static fromAffine(t) {
                            if (t instanceof I) throw Error("extended point not allowed");
                            let {
                                x: e,
                                y: r
                            } = t || {};
                            if (!A(e) || !A(r)) throw Error("invalid affine point");
                            return new I(e, r, h, b(e * r))
                        }
                        static normalizeZ(t) {
                            let e = r.invertBatch(t.map(t => t.ez));
                            return t.map((t, r) => t.toAffine(e[r])).map(I.fromAffine)
                        }
                        _setWindowSize(t) {
                            this._WINDOW_SIZE = t, U.delete(this)
                        }
                        assertValidity() {
                            let {
                                a: t,
                                d: r
                            } = e;
                            if (this.is0()) throw Error("bad point: ZERO");
                            let {
                                ex: n,
                                ey: i,
                                ez: o,
                                et: s
                            } = this, a = b(n * n), u = b(i * i), h = b(o * o), l = b(h * h), f = b(a * t);
                            if (b(h * b(f + u)) !== b(l + b(r * b(a * u)))) throw Error("bad point: equation left != right (1)");
                            if (b(n * i) !== b(o * s)) throw Error("bad point: equation left != right (2)")
                        }
                        equals(t) {
                            S(t);
                            let {
                                ex: e,
                                ey: r,
                                ez: n
                            } = this, {
                                ex: i,
                                ey: o,
                                ez: s
                            } = t, a = b(e * s), u = b(i * n), h = b(r * s), l = b(o * n);
                            return a === u && h === l
                        }
                        is0() {
                            return this.equals(I.ZERO)
                        }
                        negate() {
                            return new I(b(-this.ex), this.ey, this.ez, b(-this.et))
                        }
                        double() {
                            let {
                                a: t
                            } = e, {
                                ex: r,
                                ey: n,
                                ez: i
                            } = this, o = b(r * r), s = b(n * n), a = b(l * b(i * i)), u = b(t * o), h = r + n, f = b(b(h * h) - o - s), c = u + s, d = c - a, p = u - s, y = b(f * d), g = b(c * p), m = b(f * p);
                            return new I(y, g, b(d * c), m)
                        }
                        add(t) {
                            S(t);
                            let {
                                a: r,
                                d: n
                            } = e, {
                                ex: i,
                                ey: o,
                                ez: s,
                                et: a
                            } = this, {
                                ex: h,
                                ey: f,
                                ez: c,
                                et: d
                            } = t;
                            if (r === BigInt(-1)) {
                                let t = b((o - i) * (f + h)),
                                    e = b((o + i) * (f - h)),
                                    r = b(e - t);
                                if (r === u) return this.double();
                                let n = b(s * l * d),
                                    p = b(a * l * c),
                                    y = p + n,
                                    g = e + t,
                                    m = p - n,
                                    w = b(y * r),
                                    v = b(g * m),
                                    x = b(y * m);
                                return new I(w, v, b(r * g), x)
                            }
                            let p = b(i * h),
                                y = b(o * f),
                                g = b(a * n * d),
                                m = b(s * c),
                                w = b((i + o) * (h + f) - p - y),
                                v = m - g,
                                x = m + g,
                                E = b(y - r * p),
                                M = b(w * v),
                                A = b(x * E),
                                B = b(w * E);
                            return new I(M, A, b(v * x), B)
                        }
                        subtract(t) {
                            return this.add(t.negate())
                        }
                        wNAF(t) {
                            return L.wNAFCached(this, U, t, I.normalizeZ)
                        }
                        multiply(t) {
                            let {
                                p: e,
                                f: r
                            } = this.wNAF(B(t, n));
                            return I.normalizeZ([e, r])[0]
                        }
                        multiplyUnsafe(t) {
                            let e = _(t);
                            return e === u ? O : this.equals(O) || e === h ? this : this.equals(k) ? this.wNAF(e).p : L.unsafeLadder(this, e)
                        }
                        isSmallOrder() {
                            return this.multiplyUnsafe(g).is0()
                        }
                        isTorsionFree() {
                            return L.unsafeLadder(this, n).is0()
                        }
                        toAffine(t) {
                            let {
                                ex: e,
                                ey: n,
                                ez: i
                            } = this, o = this.is0();
                            null == t && (t = o ? f : r.inv(i));
                            let s = b(e * t),
                                a = b(n * t),
                                l = b(i * t);
                            if (o) return {
                                x: u,
                                y: h
                            };
                            if (l !== h) throw Error("invZ was invalid");
                            return {
                                x: s,
                                y: a
                            }
                        }
                        clearCofactor() {
                            let {
                                h: t
                            } = e;
                            return t === h ? this : this.multiplyUnsafe(t)
                        }
                        static fromHex(t, n = !1) {
                            let {
                                d: i,
                                a: o
                            } = e, s = r.BYTES, l = (t = (0, a.ql)("pointHex", t, s)).slice(), f = t[s - 1];
                            l[s - 1] = -129 & f;
                            let c = a.ty(l);
                            c === u || (n ? B(c, m) : B(c, r.ORDER));
                            let d = b(c * c),
                                {
                                    isValid: p,
                                    value: y
                                } = w(b(d - h), b(i * d - o));
                            if (!p) throw Error("Point.fromHex: invalid y coordinate");
                            let g = (y & h) === h,
                                v = (128 & f) != 0;
                            if (!n && y === u && v) throw Error("Point.fromHex: x=0 and x_0=1");
                            return v !== g && (y = b(-y)), I.fromAffine({
                                x: y,
                                y: c
                            })
                        }
                        static fromPrivateKey(t) {
                            return T(t).point
                        }
                        toRawBytes() {
                            let {
                                x: t,
                                y: e
                            } = this.toAffine(), n = a.S5(e, r.BYTES);
                            return n[n.length - 1] |= t & h ? 128 : 0, n
                        }
                        toHex() {
                            return a.ci(this.toRawBytes())
                        }
                    }
                    I.BASE = new I(e.Gx, e.Gy, h, b(e.Gx * e.Gy)), I.ZERO = new I(u, h, h, u);
                    let {
                        BASE: k,
                        ZERO: O
                    } = I, L = (0, o.M)(I, 8 * y);

                    function R(t) {
                        var e;
                        return e = a.ty(t), (0, s.wQ)(e, n)
                    }

                    function T(t) {
                        t = (0, a.ql)("private key", t, y);
                        let e = (0, a.ql)("hashed private key", d(t), 2 * y),
                            r = v(e.slice(0, y)),
                            n = e.slice(y, 2 * y),
                            i = R(r),
                            o = k.multiply(i),
                            s = o.toRawBytes();
                        return {
                            head: r,
                            prefix: n,
                            scalar: i,
                            point: o,
                            pointBytes: s
                        }
                    }

                    function P(t = new Uint8Array, ...e) {
                        return R(d(x(a.eV(...e), (0, a.ql)("context", t), !!i)))
                    }
                    return k._setWindowSize(8), {
                        CURVE: e,
                        getPublicKey: function(t) {
                            return T(t).pointBytes
                        },
                        sign: function(t, e, o = {}) {
                            var u;
                            t = (0, a.ql)("message", t), i && (t = i(t));
                            let {
                                prefix: h,
                                scalar: l,
                                pointBytes: f
                            } = T(e), c = P(o.context, h, t), d = k.multiply(c).toRawBytes(), p = (u = c + P(o.context, d, f, t) * l, (0, s.wQ)(u, n));
                            _(p);
                            let g = a.eV(d, a.S5(p, r.BYTES));
                            return (0, a.ql)("result", g, 2 * y)
                        },
                        verify: function(t, e, n, o = c) {
                            let s, u, h;
                            let {
                                context: l,
                                zip215: f
                            } = o, d = r.BYTES;
                            t = (0, a.ql)("signature", t, 2 * d), e = (0, a.ql)("message", e), i && (e = i(e));
                            let p = a.ty(t.slice(d, 2 * d));
                            try {
                                s = I.fromHex(n, f), u = I.fromHex(t.slice(0, d), f), h = k.multiplyUnsafe(p)
                            } catch (t) {
                                return !1
                            }
                            if (!f && s.isSmallOrder()) return !1;
                            let y = P(l, u.toRawBytes(), s.toRawBytes(), e);
                            return u.add(s.multiplyUnsafe(y)).subtract(h).clearCofactor().equals(I.ZERO)
                        },
                        ExtendedPoint: I,
                        utils: {
                            getExtendedPublicKey: T,
                            randomPrivateKey: () => p(r.BYTES),
                            precompute: (t = 8, e = I.BASE) => (e._setWindowSize(t), e.multiply(BigInt(3)), e)
                        }
                    }
                }({
                    a: BigInt(-1),
                    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
                    Fp: x,
                    n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
                    h: w,
                    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
                    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
                    hash: n.o,
                    randomBytes: i.O6,
                    adjustScalarBytes: function(t) {
                        return t[0] &= 248, t[31] &= 127, t[31] |= 64, t
                    },
                    uvRatio: v
                });

            function M(t) {
                if (!(t instanceof U)) throw Error("RistrettoPoint expected")
            }
            let A = t => v(g, t),
                B = t => E.CURVE.Fp.create(null & bytesToNumberLE(t));

            function _(t) {
                let {
                    d: e
                } = E.CURVE, r = E.CURVE.Fp.ORDER, n = E.CURVE.Fp.create, i = n(null * t * t), o = n((i + g) * null), s = BigInt(-1), a = n((s - e * i) * n(i + e)), {
                    isValid: u,
                    value: h
                } = v(o, a), l = n(h * t);
                isNegativeLE(l, r) || (l = n(-l)), u || (h = l), u || (s = i);
                let f = n(s * (i - g) * null - a),
                    c = h * h,
                    d = n((h + h) * a),
                    p = n(null * f),
                    y = n(g - c),
                    m = n(g + c);
                return new E.ExtendedPoint(n(d * m), n(y * p), n(p * m), n(d * y))
            }
            class U {
                constructor(t) {
                    this.ep = t
                }
                static fromAffine(t) {
                    return new U(E.ExtendedPoint.fromAffine(t))
                }
                static hashToCurve(t) {
                    let e = _(B((t = ensureBytes("ristrettoHash", t, 64)).slice(0, 32))),
                        r = _(B(t.slice(32, 64)));
                    return new U(e.add(r))
                }
                static fromHex(t) {
                    t = ensureBytes("ristrettoHex", t, 32);
                    let {
                        a: e,
                        d: r
                    } = E.CURVE, n = E.CURVE.Fp.ORDER, i = E.CURVE.Fp.create, o = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", s = B(t);
                    if (!equalBytes(numberToBytesLE(s, 32), t) || isNegativeLE(s, n)) throw Error(o);
                    let a = i(s * s),
                        u = i(g + e * a),
                        h = i(g - e * a),
                        l = i(u * u),
                        f = i(h * h),
                        c = i(e * r * l - f),
                        {
                            isValid: d,
                            value: p
                        } = A(i(c * f)),
                        m = i(p * h),
                        b = i(p * m * c),
                        w = i((s + s) * m);
                    isNegativeLE(w, n) && (w = i(-w));
                    let v = i(u * b),
                        x = i(w * v);
                    if (!d || isNegativeLE(x, n) || v === y) throw Error(o);
                    return new U(new E.ExtendedPoint(w, v, g, x))
                }
                toRawBytes() {
                    let t, {
                            ex: e,
                            ey: r,
                            ez: n,
                            et: i
                        } = this.ep,
                        o = E.CURVE.Fp.ORDER,
                        s = E.CURVE.Fp.create,
                        a = s(s(n + r) * s(n - r)),
                        u = s(e * r),
                        h = s(u * u),
                        {
                            value: l
                        } = A(s(a * h)),
                        f = s(l * a),
                        c = s(l * u),
                        d = s(f * c * i);
                    if (isNegativeLE(i * d, o)) {
                        let n = s(null * r),
                            i = s(null * e);
                        e = n, r = i, t = s(null * f)
                    } else t = c;
                    isNegativeLE(e * d, o) && (r = s(-r));
                    let p = s((n - r) * t);
                    return isNegativeLE(p, o) && (p = s(-p)), numberToBytesLE(p, 32)
                }
                toHex() {
                    return bytesToHex(this.toRawBytes())
                }
                toString() {
                    return this.toHex()
                }
                equals(t) {
                    M(t);
                    let {
                        ex: e,
                        ey: r
                    } = this.ep, {
                        ex: n,
                        ey: i
                    } = t.ep, o = E.CURVE.Fp.create, s = o(e * i) === o(r * n), a = o(r * i) === o(e * n);
                    return s || a
                }
                add(t) {
                    return M(t), new U(this.ep.add(t.ep))
                }
                subtract(t) {
                    return M(t), new U(this.ep.subtract(t.ep))
                }
                multiply(t) {
                    return new U(this.ep.multiply(t))
                }
                multiplyUnsafe(t) {
                    return new U(this.ep.multiplyUnsafe(t))
                }
                double() {
                    return new U(this.ep.double())
                }
                negate() {
                    return new U(this.ep.negate())
                }
            }
        },
        61942: function(t, e, r) {
            "use strict";
            r.d(e, {
                kA: function() {
                    return x
                }
            });
            var n = r(44760),
                i = r(3253),
                o = r(26188),
                s = r(40603),
                a = r(47759),
                u = r(47889);
            let {
                bytesToNumberBE: h,
                hexToBytes: l
            } = u, f = {
                Err: class extends Error {
                    constructor(t = "") {
                        super(t)
                    }
                },
                _parseInt(t) {
                    let {
                        Err: e
                    } = f;
                    if (t.length < 2 || 2 !== t[0]) throw new e("Invalid signature integer tag");
                    let r = t[1],
                        n = t.subarray(2, r + 2);
                    if (!r || n.length !== r) throw new e("Invalid signature integer: wrong length");
                    if (128 & n[0]) throw new e("Invalid signature integer: negative");
                    if (0 === n[0] && !(128 & n[1])) throw new e("Invalid signature integer: unnecessary leading zero");
                    return {
                        d: h(n),
                        l: t.subarray(r + 2)
                    }
                },
                toSig(t) {
                    let {
                        Err: e
                    } = f, r = "string" == typeof t ? l(t) : t;
                    u.gk(r);
                    let n = r.length;
                    if (n < 2 || 48 != r[0]) throw new e("Invalid signature tag");
                    if (r[1] !== n - 2) throw new e("Invalid signature: incorrect length");
                    let {
                        d: i,
                        l: o
                    } = f._parseInt(r.subarray(2)), {
                        d: s,
                        l: a
                    } = f._parseInt(o);
                    if (a.length) throw new e("Invalid signature: left bytes after parsing");
                    return {
                        r: i,
                        s
                    }
                },
                hexFromSig(t) {
                    let e = t => 8 & Number.parseInt(t[0], 16) ? "00" + t : t,
                        r = t => {
                            let e = t.toString(16);
                            return 1 & e.length ? `0${e}` : e
                        },
                        n = e(r(t.s)),
                        i = e(r(t.r)),
                        o = n.length / 2,
                        s = i.length / 2,
                        a = r(o),
                        u = r(s);
                    return `30${r(s+o+4)}02${u}${i}02${a}${n}`
                }
            }, c = BigInt(0), d = BigInt(1), p = (BigInt(2), BigInt(3));
            BigInt(4);
            let y = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                g = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                m = BigInt(1),
                b = BigInt(2),
                w = (t, e) => (t + e / b) / e,
                v = (0, a.gN)(y, void 0, void 0, {
                    sqrt: function(t) {
                        let e = BigInt(3),
                            r = BigInt(6),
                            n = BigInt(11),
                            i = BigInt(22),
                            o = BigInt(23),
                            s = BigInt(44),
                            u = BigInt(88),
                            h = t * t * t % y,
                            l = h * h * t % y,
                            f = (0, a.oA)(l, e, y) * l % y,
                            c = (0, a.oA)(f, e, y) * l % y,
                            d = (0, a.oA)(c, b, y) * h % y,
                            p = (0, a.oA)(d, n, y) * d % y,
                            g = (0, a.oA)(p, i, y) * p % y,
                            m = (0, a.oA)(g, s, y) * g % y,
                            w = (0, a.oA)(m, u, y) * m % y,
                            x = (0, a.oA)(w, s, y) * g % y,
                            E = (0, a.oA)(x, e, y) * l % y,
                            M = (0, a.oA)(E, o, y) * p % y,
                            A = (0, a.oA)(M, r, y) * h % y,
                            B = (0, a.oA)(A, b, y);
                        if (!v.eql(v.sqr(B), t)) throw Error("Cannot find square root");
                        return B
                    }
                }),
                x = function(t, e) {
                    let r = e => (function(t) {
                        let e = function(t) {
                                let e = (0, s.K)(t);
                                return u.FF(e, {
                                    hash: "hash",
                                    hmac: "function",
                                    randomBytes: "function"
                                }, {
                                    bits2int: "function",
                                    bits2int_modN: "function",
                                    lowS: "boolean"
                                }), Object.freeze({
                                    lowS: !0,
                                    ...e
                                })
                            }(t),
                            {
                                Fp: r,
                                n: n
                            } = e,
                            i = r.BYTES + 1,
                            o = 2 * r.BYTES + 1;

                        function h(t) {
                            return a.wQ(t, n)
                        }

                        function l(t) {
                            return a.U_(t, n)
                        }
                        let {
                            ProjectivePoint: y,
                            normPrivateKeyToScalar: g,
                            weierstrassEquation: m,
                            isWithinCurveOrder: b
                        } = function(t) {
                            let e = function(t) {
                                    let e = (0, s.K)(t);
                                    u.FF(e, {
                                        a: "field",
                                        b: "field"
                                    }, {
                                        allowedPrivateKeyLengths: "array",
                                        wrapPrivateKey: "boolean",
                                        isTorsionFree: "function",
                                        clearCofactor: "function",
                                        allowInfinityPoint: "boolean",
                                        fromBytes: "function",
                                        toBytes: "function"
                                    });
                                    let {
                                        endo: r,
                                        Fp: n,
                                        a: i
                                    } = e;
                                    if (r) {
                                        if (!n.eql(i, n.ZERO)) throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                                        if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar) throw Error("Expected endomorphism with beta: bigint and splitScalar: function")
                                    }
                                    return Object.freeze({ ...e
                                    })
                                }(t),
                                {
                                    Fp: r
                                } = e,
                                n = e.toBytes || ((t, e, n) => {
                                    let i = e.toAffine();
                                    return u.eV(Uint8Array.from([4]), r.toBytes(i.x), r.toBytes(i.y))
                                }),
                                i = e.fromBytes || (t => {
                                    let e = t.subarray(1);
                                    return {
                                        x: r.fromBytes(e.subarray(0, r.BYTES)),
                                        y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES))
                                    }
                                });

                            function o(t) {
                                let {
                                    a: n,
                                    b: i
                                } = e, o = r.sqr(t), s = r.mul(o, t);
                                return r.add(r.add(s, r.mul(t, n)), i)
                            }
                            if (!r.eql(r.sqr(e.Gy), o(e.Gx))) throw Error("bad generator point: equation left != right");

                            function h(t) {
                                return "bigint" == typeof t && c < t && t < e.n
                            }

                            function l(t) {
                                if (!h(t)) throw Error("Expected valid bigint: 0 < bigint < curve.n")
                            }

                            function f(t) {
                                let r;
                                let {
                                    allowedPrivateKeyLengths: n,
                                    nByteLength: i,
                                    wrapPrivateKey: o,
                                    n: s
                                } = e;
                                if (n && "bigint" != typeof t) {
                                    if (u._t(t) && (t = u.ci(t)), "string" != typeof t || !n.includes(t.length)) throw Error("Invalid key");
                                    t = t.padStart(2 * i, "0")
                                }
                                try {
                                    r = "bigint" == typeof t ? t : u.bytesToNumberBE((0, u.ql)("private key", t, i))
                                } catch (e) {
                                    throw Error(`private key must be ${i} bytes, hex or bigint, not ${typeof t}`)
                                }
                                return o && (r = a.wQ(r, s)), l(r), r
                            }
                            let y = new Map;

                            function g(t) {
                                if (!(t instanceof m)) throw Error("ProjectivePoint expected")
                            }
                            class m {
                                constructor(t, e, n) {
                                    if (this.px = t, this.py = e, this.pz = n, null == t || !r.isValid(t)) throw Error("x required");
                                    if (null == e || !r.isValid(e)) throw Error("y required");
                                    if (null == n || !r.isValid(n)) throw Error("z required")
                                }
                                static fromAffine(t) {
                                    let {
                                        x: e,
                                        y: n
                                    } = t || {};
                                    if (!t || !r.isValid(e) || !r.isValid(n)) throw Error("invalid affine point");
                                    if (t instanceof m) throw Error("projective point not allowed");
                                    let i = t => r.eql(t, r.ZERO);
                                    return i(e) && i(n) ? m.ZERO : new m(e, n, r.ONE)
                                }
                                get x() {
                                    return this.toAffine().x
                                }
                                get y() {
                                    return this.toAffine().y
                                }
                                static normalizeZ(t) {
                                    let e = r.invertBatch(t.map(t => t.pz));
                                    return t.map((t, r) => t.toAffine(e[r])).map(m.fromAffine)
                                }
                                static fromHex(t) {
                                    let e = m.fromAffine(i((0, u.ql)("pointHex", t)));
                                    return e.assertValidity(), e
                                }
                                static fromPrivateKey(t) {
                                    return m.BASE.multiply(f(t))
                                }
                                _setWindowSize(t) {
                                    this._WINDOW_SIZE = t, y.delete(this)
                                }
                                assertValidity() {
                                    if (this.is0()) {
                                        if (e.allowInfinityPoint && !r.is0(this.py)) return;
                                        throw Error("bad point: ZERO")
                                    }
                                    let {
                                        x: t,
                                        y: n
                                    } = this.toAffine();
                                    if (!r.isValid(t) || !r.isValid(n)) throw Error("bad point: x or y not FE");
                                    let i = r.sqr(n),
                                        s = o(t);
                                    if (!r.eql(i, s)) throw Error("bad point: equation left != right");
                                    if (!this.isTorsionFree()) throw Error("bad point: not in prime-order subgroup")
                                }
                                hasEvenY() {
                                    let {
                                        y: t
                                    } = this.toAffine();
                                    if (r.isOdd) return !r.isOdd(t);
                                    throw Error("Field doesn't support isOdd")
                                }
                                equals(t) {
                                    g(t);
                                    let {
                                        px: e,
                                        py: n,
                                        pz: i
                                    } = this, {
                                        px: o,
                                        py: s,
                                        pz: a
                                    } = t, u = r.eql(r.mul(e, a), r.mul(o, i)), h = r.eql(r.mul(n, a), r.mul(s, i));
                                    return u && h
                                }
                                negate() {
                                    return new m(this.px, r.neg(this.py), this.pz)
                                }
                                double() {
                                    let {
                                        a: t,
                                        b: n
                                    } = e, i = r.mul(n, p), {
                                        px: o,
                                        py: s,
                                        pz: a
                                    } = this, u = r.ZERO, h = r.ZERO, l = r.ZERO, f = r.mul(o, o), c = r.mul(s, s), d = r.mul(a, a), y = r.mul(o, s);
                                    return y = r.add(y, y), l = r.mul(o, a), l = r.add(l, l), u = r.mul(t, l), h = r.mul(i, d), h = r.add(u, h), u = r.sub(c, h), h = r.add(c, h), h = r.mul(u, h), u = r.mul(y, u), l = r.mul(i, l), d = r.mul(t, d), y = r.sub(f, d), y = r.mul(t, y), y = r.add(y, l), l = r.add(f, f), f = r.add(l, f), f = r.add(f, d), f = r.mul(f, y), h = r.add(h, f), d = r.mul(s, a), d = r.add(d, d), f = r.mul(d, y), u = r.sub(u, f), l = r.mul(d, c), l = r.add(l, l), new m(u, h, l = r.add(l, l))
                                }
                                add(t) {
                                    g(t);
                                    let {
                                        px: n,
                                        py: i,
                                        pz: o
                                    } = this, {
                                        px: s,
                                        py: a,
                                        pz: u
                                    } = t, h = r.ZERO, l = r.ZERO, f = r.ZERO, c = e.a, d = r.mul(e.b, p), y = r.mul(n, s), b = r.mul(i, a), w = r.mul(o, u), v = r.add(n, i), x = r.add(s, a);
                                    v = r.mul(v, x), x = r.add(y, b), v = r.sub(v, x), x = r.add(n, o);
                                    let E = r.add(s, u);
                                    return x = r.mul(x, E), E = r.add(y, w), x = r.sub(x, E), E = r.add(i, o), h = r.add(a, u), E = r.mul(E, h), h = r.add(b, w), E = r.sub(E, h), f = r.mul(c, x), h = r.mul(d, w), f = r.add(h, f), h = r.sub(b, f), f = r.add(b, f), l = r.mul(h, f), b = r.add(y, y), b = r.add(b, y), w = r.mul(c, w), x = r.mul(d, x), b = r.add(b, w), w = r.sub(y, w), w = r.mul(c, w), x = r.add(x, w), y = r.mul(b, x), l = r.add(l, y), y = r.mul(E, x), h = r.mul(v, h), h = r.sub(h, y), y = r.mul(v, b), f = r.mul(E, f), new m(h, l, f = r.add(f, y))
                                }
                                subtract(t) {
                                    return this.add(t.negate())
                                }
                                is0() {
                                    return this.equals(m.ZERO)
                                }
                                wNAF(t) {
                                    return w.wNAFCached(this, y, t, t => {
                                        let e = r.invertBatch(t.map(t => t.pz));
                                        return t.map((t, r) => t.toAffine(e[r])).map(m.fromAffine)
                                    })
                                }
                                multiplyUnsafe(t) {
                                    let n = m.ZERO;
                                    if (t === c) return n;
                                    if (l(t), t === d) return this;
                                    let {
                                        endo: i
                                    } = e;
                                    if (!i) return w.unsafeLadder(this, t);
                                    let {
                                        k1neg: o,
                                        k1: s,
                                        k2neg: a,
                                        k2: u
                                    } = i.splitScalar(t), h = n, f = n, p = this;
                                    for (; s > c || u > c;) s & d && (h = h.add(p)), u & d && (f = f.add(p)), p = p.double(), s >>= d, u >>= d;
                                    return o && (h = h.negate()), a && (f = f.negate()), f = new m(r.mul(f.px, i.beta), f.py, f.pz), h.add(f)
                                }
                                multiply(t) {
                                    let n, i;
                                    l(t);
                                    let {
                                        endo: o
                                    } = e;
                                    if (o) {
                                        let {
                                            k1neg: e,
                                            k1: s,
                                            k2neg: a,
                                            k2: u
                                        } = o.splitScalar(t), {
                                            p: h,
                                            f: l
                                        } = this.wNAF(s), {
                                            p: f,
                                            f: c
                                        } = this.wNAF(u);
                                        h = w.constTimeNegate(e, h), f = w.constTimeNegate(a, f), f = new m(r.mul(f.px, o.beta), f.py, f.pz), n = h.add(f), i = l.add(c)
                                    } else {
                                        let {
                                            p: e,
                                            f: r
                                        } = this.wNAF(t);
                                        n = e, i = r
                                    }
                                    return m.normalizeZ([n, i])[0]
                                }
                                multiplyAndAddUnsafe(t, e, r) {
                                    let n = m.BASE,
                                        i = (t, e) => e !== c && e !== d && t.equals(n) ? t.multiply(e) : t.multiplyUnsafe(e),
                                        o = i(this, e).add(i(t, r));
                                    return o.is0() ? void 0 : o
                                }
                                toAffine(t) {
                                    let {
                                        px: e,
                                        py: n,
                                        pz: i
                                    } = this, o = this.is0();
                                    null == t && (t = o ? r.ONE : r.inv(i));
                                    let s = r.mul(e, t),
                                        a = r.mul(n, t),
                                        u = r.mul(i, t);
                                    if (o) return {
                                        x: r.ZERO,
                                        y: r.ZERO
                                    };
                                    if (!r.eql(u, r.ONE)) throw Error("invZ was invalid");
                                    return {
                                        x: s,
                                        y: a
                                    }
                                }
                                isTorsionFree() {
                                    let {
                                        h: t,
                                        isTorsionFree: r
                                    } = e;
                                    if (t === d) return !0;
                                    if (r) return r(m, this);
                                    throw Error("isTorsionFree() has not been declared for the elliptic curve")
                                }
                                clearCofactor() {
                                    let {
                                        h: t,
                                        clearCofactor: r
                                    } = e;
                                    return t === d ? this : r ? r(m, this) : this.multiplyUnsafe(e.h)
                                }
                                toRawBytes(t = !0) {
                                    return this.assertValidity(), n(m, this, t)
                                }
                                toHex(t = !0) {
                                    return u.ci(this.toRawBytes(t))
                                }
                            }
                            m.BASE = new m(e.Gx, e.Gy, r.ONE), m.ZERO = new m(r.ZERO, r.ONE, r.ZERO);
                            let b = e.nBitLength,
                                w = (0, s.M)(m, e.endo ? Math.ceil(b / 2) : b);
                            return {
                                CURVE: e,
                                ProjectivePoint: m,
                                normPrivateKeyToScalar: f,
                                weierstrassEquation: o,
                                isWithinCurveOrder: h
                            }
                        }({ ...e,
                            toBytes(t, e, n) {
                                let i = e.toAffine(),
                                    o = r.toBytes(i.x),
                                    s = u.eV;
                                return n ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o) : s(Uint8Array.from([4]), o, r.toBytes(i.y))
                            },
                            fromBytes(t) {
                                let e = t.length,
                                    n = t[0],
                                    s = t.subarray(1);
                                if (e === i && (2 === n || 3 === n)) {
                                    let t;
                                    let e = u.bytesToNumberBE(s);
                                    if (!(c < e && e < r.ORDER)) throw Error("Point is not on curve");
                                    let i = m(e);
                                    try {
                                        t = r.sqrt(i)
                                    } catch (t) {
                                        throw Error("Point is not on curve" + (t instanceof Error ? ": " + t.message : ""))
                                    }
                                    return (1 & n) == 1 != ((t & d) === d) && (t = r.neg(t)), {
                                        x: e,
                                        y: t
                                    }
                                }
                                if (e === o && 4 === n) return {
                                    x: r.fromBytes(s.subarray(0, r.BYTES)),
                                    y: r.fromBytes(s.subarray(r.BYTES, 2 * r.BYTES))
                                };
                                throw Error(`Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`)
                            }
                        }), w = t => u.ci(u.tL(t, e.nByteLength)), v = (t, e, r) => u.bytesToNumberBE(t.slice(e, r));
                        class x {
                            constructor(t, e, r) {
                                this.r = t, this.s = e, this.recovery = r, this.assertValidity()
                            }
                            static fromCompact(t) {
                                let r = e.nByteLength;
                                return new x(v(t = (0, u.ql)("compactSignature", t, 2 * r), 0, r), v(t, r, 2 * r))
                            }
                            static fromDER(t) {
                                let {
                                    r: e,
                                    s: r
                                } = f.toSig((0, u.ql)("DER", t));
                                return new x(e, r)
                            }
                            assertValidity() {
                                if (!b(this.r)) throw Error("r must be 0 < r < CURVE.n");
                                if (!b(this.s)) throw Error("s must be 0 < s < CURVE.n")
                            }
                            addRecoveryBit(t) {
                                return new x(this.r, this.s, t)
                            }
                            recoverPublicKey(t) {
                                let {
                                    r: n,
                                    s: i,
                                    recovery: o
                                } = this, s = A((0, u.ql)("msgHash", t));
                                if (null == o || ![0, 1, 2, 3].includes(o)) throw Error("recovery id invalid");
                                let a = 2 === o || 3 === o ? n + e.n : n;
                                if (a >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                                let f = (1 & o) == 0 ? "02" : "03",
                                    c = y.fromHex(f + w(a)),
                                    d = l(a),
                                    p = h(-s * d),
                                    g = h(i * d),
                                    m = y.BASE.multiplyAndAddUnsafe(c, p, g);
                                if (!m) throw Error("point at infinify");
                                return m.assertValidity(), m
                            }
                            hasHighS() {
                                return this.s > n >> d
                            }
                            normalizeS() {
                                return this.hasHighS() ? new x(this.r, h(-this.s), this.recovery) : this
                            }
                            toDERRawBytes() {
                                return u.hexToBytes(this.toDERHex())
                            }
                            toDERHex() {
                                return f.hexFromSig({
                                    r: this.r,
                                    s: this.s
                                })
                            }
                            toCompactRawBytes() {
                                return u.hexToBytes(this.toCompactHex())
                            }
                            toCompactHex() {
                                return w(this.r) + w(this.s)
                            }
                        }

                        function E(t) {
                            let e = u._t(t),
                                r = "string" == typeof t,
                                n = (e || r) && t.length;
                            return e ? n === i || n === o : r ? n === 2 * i || n === 2 * o : t instanceof y
                        }
                        let M = e.bits2int || function(t) {
                                let r = u.bytesToNumberBE(t),
                                    n = 8 * t.length - e.nBitLength;
                                return n > 0 ? r >> BigInt(n) : r
                            },
                            A = e.bits2int_modN || function(t) {
                                return h(M(t))
                            },
                            B = u.dQ(e.nBitLength);

                        function _(t) {
                            if ("bigint" != typeof t) throw Error("bigint expected");
                            if (!(c <= t && t < B)) throw Error(`bigint expected < 2^${e.nBitLength}`);
                            return u.tL(t, e.nByteLength)
                        }
                        let U = {
                                lowS: e.lowS,
                                prehash: !1
                            },
                            S = {
                                lowS: e.lowS,
                                prehash: !1
                            };
                        return y.BASE._setWindowSize(8), {
                            CURVE: e,
                            getPublicKey: function(t, e = !0) {
                                return y.fromPrivateKey(t).toRawBytes(e)
                            },
                            getSharedSecret: function(t, e, r = !0) {
                                if (E(t)) throw Error("first arg must be private key");
                                if (!E(e)) throw Error("second arg must be public key");
                                return y.fromHex(e).multiply(g(t)).toRawBytes(r)
                            },
                            sign: function(t, i, o = U) {
                                let {
                                    seed: s,
                                    k2sig: a
                                } = function(t, i, o = U) {
                                    if (["recovered", "canonical"].some(t => t in o)) throw Error("sign() legacy options not supported");
                                    let {
                                        hash: s,
                                        randomBytes: a
                                    } = e, {
                                        lowS: f,
                                        prehash: p,
                                        extraEntropy: m
                                    } = o;
                                    null == f && (f = !0), t = (0, u.ql)("msgHash", t), p && (t = (0, u.ql)("prehashed msgHash", s(t)));
                                    let w = A(t),
                                        v = g(i),
                                        E = [_(v), _(w)];
                                    if (null != m && !1 !== m) {
                                        let t = !0 === m ? a(r.BYTES) : m;
                                        E.push((0, u.ql)("extraEntropy", t))
                                    }
                                    return {
                                        seed: u.eV(...E),
                                        k2sig: function(t) {
                                            let e = M(t);
                                            if (!b(e)) return;
                                            let r = l(e),
                                                i = y.BASE.multiply(e).toAffine(),
                                                o = h(i.x);
                                            if (o === c) return;
                                            let s = h(r * h(w + o * v));
                                            if (s === c) return;
                                            let a = (i.x === o ? 0 : 2) | Number(i.y & d),
                                                u = s;
                                            if (f && s > n >> d) u = s > n >> d ? h(-s) : s, a ^= 1;
                                            return new x(o, u, a)
                                        }
                                    }
                                }(t, i, o);
                                return u.n$(e.hash.outputLen, e.nByteLength, e.hmac)(s, a)
                            },
                            verify: function(t, r, n, i = S) {
                                let o, s;
                                if (r = (0, u.ql)("msgHash", r), n = (0, u.ql)("publicKey", n), "strict" in i) throw Error("options.strict was renamed to lowS");
                                let {
                                    lowS: a,
                                    prehash: c
                                } = i;
                                try {
                                    if ("string" == typeof t || u._t(t)) try {
                                        s = x.fromDER(t)
                                    } catch (e) {
                                        if (!(e instanceof f.Err)) throw e;
                                        s = x.fromCompact(t)
                                    } else if ("object" == typeof t && "bigint" == typeof t.r && "bigint" == typeof t.s) {
                                        let {
                                            r: e,
                                            s: r
                                        } = t;
                                        s = new x(e, r)
                                    } else throw Error("PARSE");
                                    o = y.fromHex(n)
                                } catch (t) {
                                    if ("PARSE" === t.message) throw Error("signature must be Signature instance, Uint8Array or hex string");
                                    return !1
                                }
                                if (a && s.hasHighS()) return !1;
                                c && (r = e.hash(r));
                                let {
                                    r: d,
                                    s: p
                                } = s, g = A(r), m = l(p), b = h(g * m), w = h(d * m), v = y.BASE.multiplyAndAddUnsafe(o, b, w) ? .toAffine();
                                return !!v && h(v.x) === d
                            },
                            ProjectivePoint: y,
                            Signature: x,
                            utils: {
                                isValidPrivateKey(t) {
                                    try {
                                        return g(t), !0
                                    } catch (t) {
                                        return !1
                                    }
                                },
                                normPrivateKeyToScalar: g,
                                randomPrivateKey: () => {
                                    let t = a.PS(e.n);
                                    return a.Us(e.randomBytes(t), e.n)
                                },
                                precompute: (t = 8, e = y.BASE) => (e._setWindowSize(t), e.multiply(BigInt(3)), e)
                            }
                        }
                    })({ ...t,
                        hash: e,
                        hmac: (t, ...r) => (0, i.b)(e, t, (0, o.eV)(...r)),
                        randomBytes: o.O6
                    });
                    return Object.freeze({ ...r(e),
                        create: r
                    })
                }({
                    a: BigInt(0),
                    b: BigInt(7),
                    Fp: v,
                    n: g,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    h: BigInt(1),
                    lowS: !0,
                    endo: {
                        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                        splitScalar: t => {
                            let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                                r = -m * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                                n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                                i = BigInt("0x100000000000000000000000000000000"),
                                o = w(e * t, g),
                                s = w(-r * t, g),
                                u = (0, a.wQ)(t - o * e - s * n, g),
                                h = (0, a.wQ)(-o * r - s * e, g),
                                l = u > i,
                                f = h > i;
                            if (l && (u = g - u), f && (h = g - h), u > i || h > i) throw Error("splitScalar: Endomorphism failed, k=" + t);
                            return {
                                k1neg: l,
                                k1: u,
                                k2neg: f,
                                k2: h
                            }
                        }
                    }
                }, n.J);
            BigInt(0), x.ProjectivePoint
        },
        36406: function(t, e, r) {
            "use strict";

            function n(t) {
                if (!Number.isSafeInteger(t) || t < 0) throw Error(`positive integer expected, not ${t}`)
            }

            function i(t, ...e) {
                if (!(t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name)) throw Error("Uint8Array expected");
                if (e.length > 0 && !e.includes(t.length)) throw Error(`Uint8Array expected of length ${e}, not of length=${t.length}`)
            }

            function o(t) {
                if ("function" != typeof t || "function" != typeof t.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                n(t.outputLen), n(t.blockLen)
            }

            function s(t, e = !0) {
                if (t.destroyed) throw Error("Hash instance has been destroyed");
                if (e && t.finished) throw Error("Hash#digest() has already been called")
            }

            function a(t, e) {
                i(t);
                let r = e.outputLen;
                if (t.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
            }
            r.d(e, {
                Gg: function() {
                    return s
                },
                J8: function() {
                    return a
                },
                Rx: function() {
                    return n
                },
                aI: function() {
                    return i
                },
                vp: function() {
                    return o
                }
            })
        },
        55702: function(t, e, r) {
            "use strict";
            r.d(e, {
                VR: function() {
                    return a
                },
                bc: function() {
                    return o
                },
                l3: function() {
                    return s
                }
            });
            var n = r(36406),
                i = r(26188);
            let o = (t, e, r) => t & e ^ ~t & r,
                s = (t, e, r) => t & e ^ t & r ^ e & r;
            class a extends i.kb {
                constructor(t, e, r, n) {
                    super(), this.blockLen = t, this.outputLen = e, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, i.GL)(this.buffer)
                }
                update(t) {
                    (0, n.Gg)(this);
                    let {
                        view: e,
                        buffer: r,
                        blockLen: o
                    } = this, s = (t = (0, i.O0)(t)).length;
                    for (let n = 0; n < s;) {
                        let a = Math.min(o - this.pos, s - n);
                        if (a === o) {
                            let e = (0, i.GL)(t);
                            for (; o <= s - n; n += o) this.process(e, n);
                            continue
                        }
                        r.set(t.subarray(n, n + a), this.pos), this.pos += a, n += a, this.pos === o && (this.process(e, 0), this.pos = 0)
                    }
                    return this.length += t.length, this.roundClean(), this
                }
                digestInto(t) {
                    (0, n.Gg)(this), (0, n.J8)(t, this), this.finished = !0;
                    let {
                        buffer: e,
                        view: r,
                        blockLen: o,
                        isLE: s
                    } = this, {
                        pos: a
                    } = this;
                    e[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > o - a && (this.process(r, 0), a = 0);
                    for (let t = a; t < o; t++) e[t] = 0;
                    ! function(t, e, r, n) {
                        if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, r, n);
                        let i = BigInt(32),
                            o = BigInt(4294967295),
                            s = Number(r >> i & o),
                            a = Number(r & o),
                            u = n ? 4 : 0,
                            h = n ? 0 : 4;
                        t.setUint32(e + u, s, n), t.setUint32(e + h, a, n)
                    }(r, o - 8, BigInt(8 * this.length), s), this.process(r, 0);
                    let u = (0, i.GL)(t),
                        h = this.outputLen;
                    if (h % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let l = h / 4,
                        f = this.get();
                    if (l > f.length) throw Error("_sha2: outputLen bigger than state");
                    for (let t = 0; t < l; t++) u.setUint32(4 * t, f[t], s)
                }
                digest() {
                    let {
                        buffer: t,
                        outputLen: e
                    } = this;
                    this.digestInto(t);
                    let r = t.slice(0, e);
                    return this.destroy(), r
                }
                _cloneInto(t) {
                    t || (t = new this.constructor), t.set(...this.get());
                    let {
                        blockLen: e,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: o,
                        pos: s
                    } = this;
                    return t.length = n, t.pos = s, t.finished = i, t.destroyed = o, n % e && t.buffer.set(r), t
                }
            }
        },
        2332: function(t, e, r) {
            "use strict";
            r.d(e, {
                EP: function() {
                    return a
                },
                SD: function() {
                    return h
                },
                Vl: function() {
                    return s
                },
                gm: function() {
                    return u
                },
                mk: function() {
                    return l
                }
            });
            let n = BigInt(4294967296 - 1),
                i = BigInt(32);

            function o(t, e = !1) {
                return e ? {
                    h: Number(t & n),
                    l: Number(t >> i & n)
                } : {
                    h: 0 | Number(t >> i & n),
                    l: 0 | Number(t & n)
                }
            }

            function s(t, e = !1) {
                let r = new Uint32Array(t.length),
                    n = new Uint32Array(t.length);
                for (let i = 0; i < t.length; i++) {
                    let {
                        h: s,
                        l: a
                    } = o(t[i], e);
                    [r[i], n[i]] = [s, a]
                }
                return [r, n]
            }
            let a = (t, e, r) => t << r | e >>> 32 - r,
                u = (t, e, r) => e << r | t >>> 32 - r,
                h = (t, e, r) => e << r - 32 | t >>> 64 - r,
                l = (t, e, r) => t << r - 32 | e >>> 64 - r;
            e.ZP = {
                fromBig: o,
                split: s,
                toBig: (t, e) => BigInt(t >>> 0) << i | BigInt(e >>> 0),
                shrSH: (t, e, r) => t >>> r,
                shrSL: (t, e, r) => t << 32 - r | e >>> r,
                rotrSH: (t, e, r) => t >>> r | e << 32 - r,
                rotrSL: (t, e, r) => t << 32 - r | e >>> r,
                rotrBH: (t, e, r) => t << 64 - r | e >>> r - 32,
                rotrBL: (t, e, r) => t >>> r - 32 | e << 64 - r,
                rotr32H: (t, e) => e,
                rotr32L: (t, e) => t,
                rotlSH: a,
                rotlSL: u,
                rotlBH: h,
                rotlBL: l,
                add: function(t, e, r, n) {
                    let i = (e >>> 0) + (n >>> 0);
                    return {
                        h: t + r + (i / 4294967296 | 0) | 0,
                        l: 0 | i
                    }
                },
                add3L: (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
                add3H: (t, e, r, n) => e + r + n + (t / 4294967296 | 0) | 0,
                add4L: (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
                add4H: (t, e, r, n, i) => e + r + n + i + (t / 4294967296 | 0) | 0,
                add5H: (t, e, r, n, i, o) => e + r + n + i + o + (t / 4294967296 | 0) | 0,
                add5L: (t, e, r, n, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0)
            }
        },
        3253: function(t, e, r) {
            "use strict";
            r.d(e, {
                b: function() {
                    return s
                }
            });
            var n = r(36406),
                i = r(26188);
            class o extends i.kb {
                constructor(t, e) {
                    super(), this.finished = !1, this.destroyed = !1, (0, n.vp)(t);
                    let r = (0, i.O0)(e);
                    if (this.iHash = t.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    let o = this.blockLen,
                        s = new Uint8Array(o);
                    s.set(r.length > o ? t.create().update(r).digest() : r);
                    for (let t = 0; t < s.length; t++) s[t] ^= 54;
                    this.iHash.update(s), this.oHash = t.create();
                    for (let t = 0; t < s.length; t++) s[t] ^= 106;
                    this.oHash.update(s), s.fill(0)
                }
                update(t) {
                    return (0, n.Gg)(this), this.iHash.update(t), this
                }
                digestInto(t) {
                    (0, n.Gg)(this), (0, n.aI)(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
                }
                digest() {
                    let t = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(t), t
                }
                _cloneInto(t) {
                    t || (t = Object.create(Object.getPrototypeOf(this), {}));
                    let {
                        oHash: e,
                        iHash: r,
                        finished: n,
                        destroyed: i,
                        blockLen: o,
                        outputLen: s
                    } = this;
                    return t.finished = n, t.destroyed = i, t.blockLen = o, t.outputLen = s, t.oHash = e._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            let s = (t, e, r) => new o(t, e).update(r).digest();
            s.create = (t, e) => new o(t, e)
        },
        44760: function(t, e, r) {
            "use strict";
            r.d(e, {
                J: function() {
                    return h
                }
            });
            var n = r(55702),
                i = r(26188);
            let o = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                s = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                a = new Uint32Array(64);
            class u extends n.VR {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | s[0], this.B = 0 | s[1], this.C = 0 | s[2], this.D = 0 | s[3], this.E = 0 | s[4], this.F = 0 | s[5], this.G = 0 | s[6], this.H = 0 | s[7]
                }
                get() {
                    let {
                        A: t,
                        B: e,
                        C: r,
                        D: n,
                        E: i,
                        F: o,
                        G: s,
                        H: a
                    } = this;
                    return [t, e, r, n, i, o, s, a]
                }
                set(t, e, r, n, i, o, s, a) {
                    this.A = 0 | t, this.B = 0 | e, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | o, this.G = 0 | s, this.H = 0 | a
                }
                process(t, e) {
                    for (let r = 0; r < 16; r++, e += 4) a[r] = t.getUint32(e, !1);
                    for (let t = 16; t < 64; t++) {
                        let e = a[t - 15],
                            r = a[t - 2],
                            n = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ e >>> 3,
                            o = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ r >>> 10;
                        a[t] = o + a[t - 7] + n + a[t - 16] | 0
                    }
                    let {
                        A: r,
                        B: s,
                        C: u,
                        D: h,
                        E: l,
                        F: f,
                        G: c,
                        H: d
                    } = this;
                    for (let t = 0; t < 64; t++) {
                        let e = d + ((0, i.np)(l, 6) ^ (0, i.np)(l, 11) ^ (0, i.np)(l, 25)) + (0, n.bc)(l, f, c) + o[t] + a[t] | 0,
                            p = ((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) + (0, n.l3)(r, s, u) | 0;
                        d = c, c = f, f = l, l = h + e | 0, h = u, u = s, s = r, r = e + p | 0
                    }
                    r = r + this.A | 0, s = s + this.B | 0, u = u + this.C | 0, h = h + this.D | 0, l = l + this.E | 0, f = f + this.F | 0, c = c + this.G | 0, d = d + this.H | 0, this.set(r, s, u, h, l, f, c, d)
                }
                roundClean() {
                    a.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            let h = (0, i.hE)(() => new u)
        },
        75695: function(t, e, r) {
            "use strict";
            r.d(e, {
                fr: function() {
                    return v
                }
            });
            var n = r(36406),
                i = r(2332),
                o = r(26188);
            let s = [],
                a = [],
                u = [],
                h = BigInt(0),
                l = BigInt(1),
                f = BigInt(2),
                c = BigInt(7),
                d = BigInt(256),
                p = BigInt(113);
            for (let t = 0, e = l, r = 1, n = 0; t < 24; t++) {
                [r, n] = [n, (2 * r + 3 * n) % 5], s.push(2 * (5 * n + r)), a.push((t + 1) * (t + 2) / 2 % 64);
                let i = h;
                for (let t = 0; t < 7; t++)(e = (e << l ^ (e >> c) * p) % d) & f && (i ^= l << (l << BigInt(t)) - l);
                u.push(i)
            }
            let [y, g] = (0, i.Vl)(u, !0), m = (t, e, r) => r > 32 ? (0, i.SD)(t, e, r) : (0, i.EP)(t, e, r), b = (t, e, r) => r > 32 ? (0, i.mk)(t, e, r) : (0, i.gm)(t, e, r);
            class w extends o.kb {
                constructor(t, e, r, i = !1, s = 24) {
                    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = r, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, n.Rx)(r), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = (0, o.Jq)(this.state)
                }
                keccak() {
                    o.iA || (0, o.l1)(this.state32),
                        function(t, e = 24) {
                            let r = new Uint32Array(10);
                            for (let n = 24 - e; n < 24; n++) {
                                for (let e = 0; e < 10; e++) r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                                for (let e = 0; e < 10; e += 2) {
                                    let n = (e + 8) % 10,
                                        i = (e + 2) % 10,
                                        o = r[i],
                                        s = r[i + 1],
                                        a = m(o, s, 1) ^ r[n],
                                        u = b(o, s, 1) ^ r[n + 1];
                                    for (let r = 0; r < 50; r += 10) t[e + r] ^= a, t[e + r + 1] ^= u
                                }
                                let e = t[2],
                                    i = t[3];
                                for (let r = 0; r < 24; r++) {
                                    let n = a[r],
                                        o = m(e, i, n),
                                        u = b(e, i, n),
                                        h = s[r];
                                    e = t[h], i = t[h + 1], t[h] = o, t[h + 1] = u
                                }
                                for (let e = 0; e < 50; e += 10) {
                                    for (let n = 0; n < 10; n++) r[n] = t[e + n];
                                    for (let n = 0; n < 10; n++) t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10]
                                }
                                t[0] ^= y[n], t[1] ^= g[n]
                            }
                            r.fill(0)
                        }(this.state32, this.rounds), o.iA || (0, o.l1)(this.state32), this.posOut = 0, this.pos = 0
                }
                update(t) {
                    (0, n.Gg)(this);
                    let {
                        blockLen: e,
                        state: r
                    } = this, i = (t = (0, o.O0)(t)).length;
                    for (let n = 0; n < i;) {
                        let o = Math.min(e - this.pos, i - n);
                        for (let e = 0; e < o; e++) r[this.pos++] ^= t[n++];
                        this.pos === e && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: t,
                        suffix: e,
                        pos: r,
                        blockLen: n
                    } = this;
                    t[r] ^= e, (128 & e) != 0 && r === n - 1 && this.keccak(), t[n - 1] ^= 128, this.keccak()
                }
                writeInto(t) {
                    (0, n.Gg)(this, !1), (0, n.aI)(t), this.finish();
                    let e = this.state,
                        {
                            blockLen: r
                        } = this;
                    for (let n = 0, i = t.length; n < i;) {
                        this.posOut >= r && this.keccak();
                        let o = Math.min(r - this.posOut, i - n);
                        t.set(e.subarray(this.posOut, this.posOut + o), n), this.posOut += o, n += o
                    }
                    return t
                }
                xofInto(t) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(t)
                }
                xof(t) {
                    return (0, n.Rx)(t), this.xofInto(new Uint8Array(t))
                }
                digestInto(t) {
                    if ((0, n.J8)(t, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(t), this.destroy(), t
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(t) {
                    let {
                        blockLen: e,
                        suffix: r,
                        outputLen: n,
                        rounds: i,
                        enableXOF: o
                    } = this;
                    return t || (t = new w(e, r, n, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = r, t.outputLen = n, t.enableXOF = o, t.destroyed = this.destroyed, t
                }
            }
            let v = (0, o.hE)(() => new w(136, 1, 32))
        },
        76865: function(t, e, r) {
            "use strict";
            r.d(e, {
                o: function() {
                    return f
                }
            });
            var n = r(55702),
                i = r(2332),
                o = r(26188);
            let [s, a] = i.ZP.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t))), u = new Uint32Array(80), h = new Uint32Array(80);
            class l extends n.VR {
                constructor() {
                    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
                }
                get() {
                    let {
                        Ah: t,
                        Al: e,
                        Bh: r,
                        Bl: n,
                        Ch: i,
                        Cl: o,
                        Dh: s,
                        Dl: a,
                        Eh: u,
                        El: h,
                        Fh: l,
                        Fl: f,
                        Gh: c,
                        Gl: d,
                        Hh: p,
                        Hl: y
                    } = this;
                    return [t, e, r, n, i, o, s, a, u, h, l, f, c, d, p, y]
                }
                set(t, e, r, n, i, o, s, a, u, h, l, f, c, d, p, y) {
                    this.Ah = 0 | t, this.Al = 0 | e, this.Bh = 0 | r, this.Bl = 0 | n, this.Ch = 0 | i, this.Cl = 0 | o, this.Dh = 0 | s, this.Dl = 0 | a, this.Eh = 0 | u, this.El = 0 | h, this.Fh = 0 | l, this.Fl = 0 | f, this.Gh = 0 | c, this.Gl = 0 | d, this.Hh = 0 | p, this.Hl = 0 | y
                }
                process(t, e) {
                    for (let r = 0; r < 16; r++, e += 4) u[r] = t.getUint32(e), h[r] = t.getUint32(e += 4);
                    for (let t = 16; t < 80; t++) {
                        let e = 0 | u[t - 15],
                            r = 0 | h[t - 15],
                            n = i.ZP.rotrSH(e, r, 1) ^ i.ZP.rotrSH(e, r, 8) ^ i.ZP.shrSH(e, r, 7),
                            o = i.ZP.rotrSL(e, r, 1) ^ i.ZP.rotrSL(e, r, 8) ^ i.ZP.shrSL(e, r, 7),
                            s = 0 | u[t - 2],
                            a = 0 | h[t - 2],
                            l = i.ZP.rotrSH(s, a, 19) ^ i.ZP.rotrBH(s, a, 61) ^ i.ZP.shrSH(s, a, 6),
                            f = i.ZP.rotrSL(s, a, 19) ^ i.ZP.rotrBL(s, a, 61) ^ i.ZP.shrSL(s, a, 6),
                            c = i.ZP.add4L(o, f, h[t - 7], h[t - 16]),
                            d = i.ZP.add4H(c, n, l, u[t - 7], u[t - 16]);
                        u[t] = 0 | d, h[t] = 0 | c
                    }
                    let {
                        Ah: r,
                        Al: n,
                        Bh: o,
                        Bl: l,
                        Ch: f,
                        Cl: c,
                        Dh: d,
                        Dl: p,
                        Eh: y,
                        El: g,
                        Fh: m,
                        Fl: b,
                        Gh: w,
                        Gl: v,
                        Hh: x,
                        Hl: E
                    } = this;
                    for (let t = 0; t < 80; t++) {
                        let e = i.ZP.rotrSH(y, g, 14) ^ i.ZP.rotrSH(y, g, 18) ^ i.ZP.rotrBH(y, g, 41),
                            M = i.ZP.rotrSL(y, g, 14) ^ i.ZP.rotrSL(y, g, 18) ^ i.ZP.rotrBL(y, g, 41),
                            A = y & m ^ ~y & w,
                            B = g & b ^ ~g & v,
                            _ = i.ZP.add5L(E, M, B, a[t], h[t]),
                            U = i.ZP.add5H(_, x, e, A, s[t], u[t]),
                            S = 0 | _,
                            I = i.ZP.rotrSH(r, n, 28) ^ i.ZP.rotrBH(r, n, 34) ^ i.ZP.rotrBH(r, n, 39),
                            k = i.ZP.rotrSL(r, n, 28) ^ i.ZP.rotrBL(r, n, 34) ^ i.ZP.rotrBL(r, n, 39),
                            O = r & o ^ r & f ^ o & f,
                            L = n & l ^ n & c ^ l & c;
                        x = 0 | w, E = 0 | v, w = 0 | m, v = 0 | b, m = 0 | y, b = 0 | g, ({
                            h: y,
                            l: g
                        } = i.ZP.add(0 | d, 0 | p, 0 | U, 0 | S)), d = 0 | f, p = 0 | c, f = 0 | o, c = 0 | l, o = 0 | r, l = 0 | n;
                        let R = i.ZP.add3L(S, k, L);
                        r = i.ZP.add3H(R, U, I, O), n = 0 | R
                    }({
                        h: r,
                        l: n
                    } = i.ZP.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)), ({
                        h: o,
                        l: l
                    } = i.ZP.add(0 | this.Bh, 0 | this.Bl, 0 | o, 0 | l)), ({
                        h: f,
                        l: c
                    } = i.ZP.add(0 | this.Ch, 0 | this.Cl, 0 | f, 0 | c)), ({
                        h: d,
                        l: p
                    } = i.ZP.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)), ({
                        h: y,
                        l: g
                    } = i.ZP.add(0 | this.Eh, 0 | this.El, 0 | y, 0 | g)), ({
                        h: m,
                        l: b
                    } = i.ZP.add(0 | this.Fh, 0 | this.Fl, 0 | m, 0 | b)), ({
                        h: w,
                        l: v
                    } = i.ZP.add(0 | this.Gh, 0 | this.Gl, 0 | w, 0 | v)), ({
                        h: x,
                        l: E
                    } = i.ZP.add(0 | this.Hh, 0 | this.Hl, 0 | x, 0 | E)), this.set(r, n, o, l, f, c, d, p, y, g, m, b, w, v, x, E)
                }
                roundClean() {
                    u.fill(0), h.fill(0)
                }
                destroy() {
                    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            let f = (0, o.hE)(() => new l)
        },
        26188: function(t, e, r) {
            "use strict";
            r.d(e, {
                kb: function() {
                    return w
                },
                l1: function() {
                    return f
                },
                UM: function() {
                    return l
                },
                ci: function() {
                    return d
                },
                U5: function() {
                    return x
                },
                eV: function() {
                    return b
                },
                GL: function() {
                    return s
                },
                nr: function() {
                    return g
                },
                iA: function() {
                    return u
                },
                O6: function() {
                    return A
                },
                np: function() {
                    return a
                },
                O0: function() {
                    return m
                },
                Jq: function() {
                    return o
                },
                hE: function() {
                    return E
                },
                K$: function() {
                    return M
                }
            });
            let n = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0;
            var i = r(36406);
            let o = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
                s = t => new DataView(t.buffer, t.byteOffset, t.byteLength),
                a = (t, e) => t << 32 - e | t >>> e,
                u = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
                h = t => t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255,
                l = u ? t => t : t => h(t);

            function f(t) {
                for (let e = 0; e < t.length; e++) t[e] = h(t[e])
            }
            let c = Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));

            function d(t) {
                (0, i.aI)(t);
                let e = "";
                for (let r = 0; r < t.length; r++) e += c[t[r]];
                return e
            }
            let p = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function y(t) {
                return t >= p._0 && t <= p._9 ? t - p._0 : t >= p._A && t <= p._F ? t - (p._A - 10) : t >= p._a && t <= p._f ? t - (p._a - 10) : void 0
            }

            function g(t) {
                if ("string" != typeof t) throw Error("hex string expected, got " + typeof t);
                let e = t.length,
                    r = e / 2;
                if (e % 2) throw Error("padded hex string expected, got unpadded hex of length " + e);
                let n = new Uint8Array(r);
                for (let e = 0, i = 0; e < r; e++, i += 2) {
                    let r = y(t.charCodeAt(i)),
                        o = y(t.charCodeAt(i + 1));
                    if (void 0 === r || void 0 === o) throw Error('hex string expected, got non-hex character "' + (t[i] + t[i + 1]) + '" at index ' + i);
                    n[e] = 16 * r + o
                }
                return n
            }

            function m(t) {
                return "string" == typeof t && (t = function(t) {
                    if ("string" != typeof t) throw Error(`utf8ToBytes expected string, got ${typeof t}`);
                    return new Uint8Array(new TextEncoder().encode(t))
                }(t)), (0, i.aI)(t), t
            }

            function b(...t) {
                let e = 0;
                for (let r = 0; r < t.length; r++) {
                    let n = t[r];
                    (0, i.aI)(n), e += n.length
                }
                let r = new Uint8Array(e);
                for (let e = 0, n = 0; e < t.length; e++) {
                    let i = t[e];
                    r.set(i, n), n += i.length
                }
                return r
            }
            class w {
                clone() {
                    return this._cloneInto()
                }
            }
            let v = {}.toString;

            function x(t, e) {
                if (void 0 !== e && "[object Object]" !== v.call(e)) throw Error("Options should be object or undefined");
                return Object.assign(t, e)
            }

            function E(t) {
                let e = e => t().update(m(e)).digest(),
                    r = t();
                return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e
            }

            function M(t) {
                let e = (e, r) => t(r).update(m(e)).digest(),
                    r = t({});
                return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = e => t(e), e
            }

            function A(t = 32) {
                if (n && "function" == typeof n.getRandomValues) return n.getRandomValues(new Uint8Array(t));
                throw Error("crypto.getRandomValues must be defined")
            }
        },
        53322: function(t, e, r) {
            "use strict";

            function n() {
                for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++)(t = arguments[r]) && (e = function t(e) {
                    var r, n, i = "";
                    if ("string" == typeof e || "number" == typeof e) i += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                            var o = e.length;
                            for (r = 0; r < o; r++) e[r] && (n = t(e[r])) && (i && (i += " "), i += n)
                        } else
                            for (n in e) e[n] && (i && (i += " "), i += n)
                    }
                    return i
                }(t)) && (n && (n += " "), n += e);
                return n
            }
            r.d(e, {
                W: function() {
                    return n
                }
            }), e.Z = n
        },
        37109: function(t, e, r) {
            "use strict";
            r.d(e, {
                v: function() {
                    return n
                }
            });
            var n = r(51596);
            e.Z = n
        },
        8916: function(t, e, r) {
            "use strict";
            r.d(e, {
                Ey: function() {
                    return u
                },
                XY: function() {
                    return s
                }
            });
            var n = r(21920),
                i = r(37109),
                o = class extends i.v {
                    socket;
                    constructor(t, e, r) {
                        super(), this.socket = new window.WebSocket(t, r), this.socket.onopen = () => this.emit("open"), this.socket.onmessage = t => this.emit("message", t.data), this.socket.onerror = t => this.emit("error", t), this.socket.onclose = t => {
                            this.emit("close", t.code, t.reason)
                        }
                    }
                    send(t, e, r) {
                        let n = r || e;
                        try {
                            this.socket.send(t), n()
                        } catch (t) {
                            n(t)
                        }
                    }
                    close(t, e) {
                        this.socket.close(t, e)
                    }
                    addEventListener(t, e, r) {
                        this.socket.addEventListener(t, e, r)
                    }
                };

            function s(t, e) {
                return new o(t, e)
            }
            var a = class {
                    encode(t) {
                        return JSON.stringify(t)
                    }
                    decode(t) {
                        return JSON.parse(t)
                    }
                },
                u = class extends i.v {
                    address;
                    rpc_id;
                    queue;
                    options;
                    autoconnect;
                    ready;
                    reconnect;
                    reconnect_timer_id;
                    reconnect_interval;
                    max_reconnects;
                    rest_options;
                    current_reconnects;
                    generate_request_id;
                    socket;
                    webSocketFactory;
                    dataPack;
                    constructor(t, e = "ws://localhost:8080", {
                        autoconnect: r = !0,
                        reconnect: n = !0,
                        reconnect_interval: i = 1e3,
                        max_reconnects: o = 5,
                        ...s
                    } = {}, u, h) {
                        super(), this.webSocketFactory = t, this.queue = {}, this.rpc_id = 0, this.address = e, this.autoconnect = r, this.ready = !1, this.reconnect = n, this.reconnect_timer_id = void 0, this.reconnect_interval = i, this.max_reconnects = o, this.rest_options = s, this.current_reconnects = 0, this.generate_request_id = u || (() => ++this.rpc_id), h ? this.dataPack = h : this.dataPack = new a, this.autoconnect && this._connect(this.address, {
                            autoconnect: this.autoconnect,
                            reconnect: this.reconnect,
                            reconnect_interval: this.reconnect_interval,
                            max_reconnects: this.max_reconnects,
                            ...this.rest_options
                        })
                    }
                    connect() {
                        this.socket || this._connect(this.address, {
                            autoconnect: this.autoconnect,
                            reconnect: this.reconnect,
                            reconnect_interval: this.reconnect_interval,
                            max_reconnects: this.max_reconnects,
                            ...this.rest_options
                        })
                    }
                    call(t, e, r, n) {
                        return n || "object" != typeof r || (n = r, r = null), new Promise((i, o) => {
                            if (!this.ready) return o(Error("socket not ready"));
                            let s = this.generate_request_id(t, e);
                            this.socket.send(this.dataPack.encode({
                                jsonrpc: "2.0",
                                method: t,
                                params: e || void 0,
                                id: s
                            }), n, t => {
                                if (t) return o(t);
                                this.queue[s] = {
                                    promise: [i, o]
                                }, r && (this.queue[s].timeout = setTimeout(() => {
                                    delete this.queue[s], o(Error("reply timeout"))
                                }, r))
                            })
                        })
                    }
                    async login(t) {
                        let e = await this.call("rpc.login", t);
                        if (!e) throw Error("authentication failed");
                        return e
                    }
                    async listMethods() {
                        return await this.call("__listMethods")
                    }
                    notify(t, e) {
                        return new Promise((r, n) => {
                            if (!this.ready) return n(Error("socket not ready"));
                            this.socket.send(this.dataPack.encode({
                                jsonrpc: "2.0",
                                method: t,
                                params: e
                            }), t => {
                                if (t) return n(t);
                                r()
                            })
                        })
                    }
                    async subscribe(t) {
                        "string" == typeof t && (t = [t]);
                        let e = await this.call("rpc.on", t);
                        if ("string" == typeof t && "ok" !== e[t]) throw Error("Failed subscribing to an event '" + t + "' with: " + e[t]);
                        return e
                    }
                    async unsubscribe(t) {
                        "string" == typeof t && (t = [t]);
                        let e = await this.call("rpc.off", t);
                        if ("string" == typeof t && "ok" !== e[t]) throw Error("Failed unsubscribing from an event with: " + e);
                        return e
                    }
                    close(t, e) {
                        this.socket.close(t || 1e3, e)
                    }
                    setAutoReconnect(t) {
                        this.reconnect = t
                    }
                    setReconnectInterval(t) {
                        this.reconnect_interval = t
                    }
                    setMaxReconnects(t) {
                        this.max_reconnects = t
                    }
                    _connect(t, e) {
                        clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(t, e), this.socket.addEventListener("open", () => {
                            this.ready = !0, this.emit("open"), this.current_reconnects = 0
                        }), this.socket.addEventListener("message", ({
                            data: t
                        }) => {
                            t instanceof ArrayBuffer && (t = n.Buffer.from(t).toString());
                            try {
                                t = this.dataPack.decode(t)
                            } catch (t) {
                                return
                            }
                            if (t.notification && this.listeners(t.notification).length) {
                                if (!Object.keys(t.params).length) return this.emit(t.notification);
                                let e = [t.notification];
                                if (t.params.constructor === Object) e.push(t.params);
                                else
                                    for (let r = 0; r < t.params.length; r++) e.push(t.params[r]);
                                return Promise.resolve().then(() => {
                                    this.emit.apply(this, e)
                                })
                            }
                            if (!this.queue[t.id]) return t.method ? Promise.resolve().then(() => {
                                this.emit(t.method, t ? .params)
                            }) : void 0;
                            "error" in t == "result" in t && this.queue[t.id].promise[1](Error('Server response malformed. Response must include either "result" or "error", but not both.')), this.queue[t.id].timeout && clearTimeout(this.queue[t.id].timeout), t.error ? this.queue[t.id].promise[1](t.error) : this.queue[t.id].promise[0](t.result), delete this.queue[t.id]
                        }), this.socket.addEventListener("error", t => this.emit("error", t)), this.socket.addEventListener("close", ({
                            code: r,
                            reason: n
                        }) => {
                            this.ready && setTimeout(() => this.emit("close", r, n), 0), this.ready = !1, this.socket = void 0, 1e3 !== r && (this.current_reconnects++, this.reconnect && (this.max_reconnects > this.current_reconnects || 0 === this.max_reconnects) && (this.reconnect_timer_id = setTimeout(() => this._connect(t, e), this.reconnect_interval)))
                        })
                    }
                }
        },
        21394: function(t, e, r) {
            "use strict";
            r.d(e, {
                AG: function() {
                    return b
                },
                G0: function() {
                    return B
                },
                IM: function() {
                    return x
                },
                IX: function() {
                    return p
                },
                O7: function() {
                    return y
                },
                Rx: function() {
                    return w
                },
                Ue: function() {
                    return l
                },
                Yj: function() {
                    return d
                },
                Z_: function() {
                    return E
                },
                _4: function() {
                    return _
                },
                bc: function() {
                    return M
                },
                dt: function() {
                    return A
                },
                eE: function() {
                    return g
                },
                i0: function() {
                    return m
                },
                jt: function() {
                    return v
                },
                oQ: function() {
                    return U
                }
            });
            class n extends TypeError {
                constructor(t, e) {
                    let r;
                    let {
                        message: n,
                        explanation: i,
                        ...o
                    } = t, {
                        path: s
                    } = t, a = 0 === s.length ? n : `At path: ${s.join(".")} -- ${n}`;
                    super(i ? ? a), null != i && (this.cause = a), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => r ? ? (r = [t, ...e()])
                }
            }

            function i(t) {
                return "object" == typeof t && null != t
            }

            function o(t) {
                return i(t) && !Array.isArray(t)
            }

            function s(t) {
                return "symbol" == typeof t ? t.toString() : "string" == typeof t ? JSON.stringify(t) : `${t}`
            }

            function* a(t, e, r, n) {
                var o;
                for (let a of (i(o = t) && "function" == typeof o[Symbol.iterator] || (t = [t]), t)) {
                    let t = function(t, e, r, n) {
                        if (!0 === t) return;
                        !1 === t ? t = {} : "string" == typeof t && (t = {
                            message: t
                        });
                        let {
                            path: i,
                            branch: o
                        } = e, {
                            type: a
                        } = r, {
                            refinement: u,
                            message: h = `Expected a value of type \`${a}\`${u?` with refinement \`${u}\``:""}, but received: \`${s(n)}\``
                        } = t;
                        return {
                            value: n,
                            type: a,
                            refinement: u,
                            key: i[i.length - 1],
                            path: i,
                            branch: o,
                            ...t,
                            message: h
                        }
                    }(a, e, r, n);
                    t && (yield t)
                }
            }

            function* u(t, e, r = {}) {
                let {
                    path: n = [],
                    branch: o = [t],
                    coerce: s = !1,
                    mask: a = !1
                } = r, h = {
                    path: n,
                    branch: o,
                    mask: a
                };
                s && (t = e.coercer(t, h));
                let l = "valid";
                for (let n of e.validator(t, h)) n.explanation = r.message, l = "not_valid", yield [n, void 0];
                for (let [f, c, d] of e.entries(t, h))
                    for (let e of u(c, d, {
                            path: void 0 === f ? n : [...n, f],
                            branch: void 0 === f ? o : [...o, c],
                            coerce: s,
                            mask: a,
                            message: r.message
                        })) e[0] ? (l = null != e[0].refinement ? "not_refined" : "not_valid", yield [e[0], void 0]) : s && (c = e[1], void 0 === f ? t = c : t instanceof Map ? t.set(f, c) : t instanceof Set ? t.add(c) : i(t) && (void 0 !== c || f in t) && (t[f] = c));
                if ("not_valid" !== l)
                    for (let n of e.refiner(t, h)) n.explanation = r.message, l = "not_refined", yield [n, void 0];
                "valid" === l && (yield [void 0, t])
            }
            class h {
                constructor(t) {
                    let {
                        type: e,
                        schema: r,
                        validator: n,
                        refiner: i,
                        coercer: o = t => t,
                        entries: s = function*() {}
                    } = t;
                    this.type = e, this.schema = r, this.entries = s, this.coercer = o, n ? this.validator = (t, e) => a(n(t, e), e, this, t) : this.validator = () => [], i ? this.refiner = (t, e) => a(i(t, e), e, this, t) : this.refiner = () => []
                }
                assert(t, e) {
                    return function(t, e, r) {
                        let n = f(t, e, {
                            message: r
                        });
                        if (n[0]) throw n[0]
                    }(t, this, e)
                }
                create(t, e) {
                    return l(t, this, e)
                }
                is(t) {
                    return !f(t, this)[0]
                }
                mask(t, e) {
                    return function(t, e, r) {
                        let n = f(t, e, {
                            coerce: !0,
                            mask: !0,
                            message: r
                        });
                        if (!n[0]) return n[1];
                        throw n[0]
                    }(t, this, e)
                }
                validate(t, e = {}) {
                    return f(t, this, e)
                }
            }

            function l(t, e, r) {
                let n = f(t, e, {
                    coerce: !0,
                    message: r
                });
                if (!n[0]) return n[1];
                throw n[0]
            }

            function f(t, e, r = {}) {
                let i = u(t, e, r),
                    o = function(t) {
                        let {
                            done: e,
                            value: r
                        } = t.next();
                        return e ? void 0 : r
                    }(i);
                return o[0] ? [new n(o[0], function*() {
                    for (let t of i) t[0] && (yield t[0])
                }), void 0] : [void 0, o[1]]
            }

            function c(t, e) {
                return new h({
                    type: t,
                    schema: null,
                    validator: e
                })
            }

            function d() {
                return c("any", () => !0)
            }

            function p(t) {
                return new h({
                    type: "array",
                    schema: t,
                    * entries(e) {
                        if (t && Array.isArray(e))
                            for (let [r, n] of e.entries()) yield [r, n, t]
                    },
                    coercer: t => Array.isArray(t) ? t.slice() : t,
                    validator: t => Array.isArray(t) || `Expected an array value, but received: ${s(t)}`
                })
            }

            function y() {
                return c("boolean", t => "boolean" == typeof t)
            }

            function g(t) {
                return c("instance", e => e instanceof t || `Expected a \`${t.name}\` instance, but received: ${s(e)}`)
            }

            function m(t) {
                let e = s(t),
                    r = typeof t;
                return new h({
                    type: "literal",
                    schema: "string" === r || "number" === r || "boolean" === r ? t : null,
                    validator: r => r === t || `Expected the literal \`${e}\`, but received: ${s(r)}`
                })
            }

            function b(t) {
                return new h({ ...t,
                    validator: (e, r) => null === e || t.validator(e, r),
                    refiner: (e, r) => null === e || t.refiner(e, r)
                })
            }

            function w() {
                return c("number", t => "number" == typeof t && !isNaN(t) || `Expected a number, but received: ${s(t)}`)
            }

            function v(t) {
                return new h({ ...t,
                    validator: (e, r) => void 0 === e || t.validator(e, r),
                    refiner: (e, r) => void 0 === e || t.refiner(e, r)
                })
            }

            function x(t, e) {
                return new h({
                    type: "record",
                    schema: null,
                    * entries(r) {
                        if (i(r))
                            for (let n in r) {
                                let i = r[n];
                                yield [n, n, t], yield [n, i, e]
                            }
                    },
                    validator: t => o(t) || `Expected an object, but received: ${s(t)}`,
                    coercer: t => o(t) ? { ...t
                    } : t
                })
            }

            function E() {
                return c("string", t => "string" == typeof t || `Expected a string, but received: ${s(t)}`)
            }

            function M(t) {
                let e = c("never", () => !1);
                return new h({
                    type: "tuple",
                    schema: null,
                    * entries(r) {
                        if (Array.isArray(r)) {
                            let n = Math.max(t.length, r.length);
                            for (let i = 0; i < n; i++) yield [i, r[i], t[i] || e]
                        }
                    },
                    validator: t => Array.isArray(t) || `Expected an array, but received: ${s(t)}`,
                    coercer: t => Array.isArray(t) ? t.slice() : t
                })
            }

            function A(t) {
                let e = Object.keys(t);
                return new h({
                    type: "type",
                    schema: t,
                    * entries(r) {
                        if (i(r))
                            for (let n of e) yield [n, r[n], t[n]]
                    },
                    validator: t => o(t) || `Expected an object, but received: ${s(t)}`,
                    coercer: t => o(t) ? { ...t
                    } : t
                })
            }

            function B(t) {
                let e = t.map(t => t.type).join(" | ");
                return new h({
                    type: "union",
                    schema: null,
                    coercer(e, r) {
                        for (let n of t) {
                            let [t, i] = n.validate(e, {
                                coerce: !0,
                                mask: r.mask
                            });
                            if (!t) return i
                        }
                        return e
                    },
                    validator(r, n) {
                        let i = [];
                        for (let e of t) {
                            let [...t] = u(r, e, n), [o] = t;
                            if (!o[0]) return [];
                            for (let [e] of t) e && i.push(e)
                        }
                        return [`Expected the value to satisfy a union of \`${e}\`, but received: ${s(r)}`, ...i]
                    }
                })
            }

            function _() {
                return c("unknown", () => !0)
            }

            function U(t, e, r) {
                return new h({ ...t,
                    coercer: (n, i) => f(n, e)[0] ? t.coercer(n, i) : t.coercer(r(n, i), i)
                })
            }
        },
        96591: function(t, e, r) {
            "use strict";
            r.d(e, {
                q7: function() {
                    return q
                }
            });
            let n = /^\[(.+)\]$/;

            function i(t, e) {
                let r = t;
                return e.split("-").forEach(t => {
                    r.nextPart.has(t) || r.nextPart.set(t, {
                        nextPart: new Map,
                        validators: []
                    }), r = r.nextPart.get(t)
                }), r
            }
            let o = /\s+/;

            function s() {
                let t, e, r = 0,
                    n = "";
                for (; r < arguments.length;)(t = arguments[r++]) && (e = function t(e) {
                    let r;
                    if ("string" == typeof e) return e;
                    let n = "";
                    for (let i = 0; i < e.length; i++) e[i] && (r = t(e[i])) && (n && (n += " "), n += r);
                    return n
                }(t)) && (n && (n += " "), n += e);
                return n
            }

            function a(t, ...e) {
                let r, u, h;
                let l = function(o) {
                    var s;
                    return u = (r = {
                        cache: function(t) {
                            if (t < 1) return {
                                get: () => void 0,
                                set: () => {}
                            };
                            let e = 0,
                                r = new Map,
                                n = new Map;

                            function i(i, o) {
                                r.set(i, o), ++e > t && (e = 0, n = r, r = new Map)
                            }
                            return {
                                get(t) {
                                    let e = r.get(t);
                                    return void 0 !== e ? e : void 0 !== (e = n.get(t)) ? (i(t, e), e) : void 0
                                },
                                set(t, e) {
                                    r.has(t) ? r.set(t, e) : i(t, e)
                                }
                            }
                        }((s = e.reduce((t, e) => e(t), t())).cacheSize),
                        splitModifiers: function(t) {
                            let e = t.separator,
                                r = 1 === e.length,
                                n = e[0],
                                i = e.length;
                            return function(t) {
                                let o;
                                let s = [],
                                    a = 0,
                                    u = 0;
                                for (let h = 0; h < t.length; h++) {
                                    let l = t[h];
                                    if (0 === a) {
                                        if (l === n && (r || t.slice(h, h + i) === e)) {
                                            s.push(t.slice(u, h)), u = h + i;
                                            continue
                                        }
                                        if ("/" === l) {
                                            o = h;
                                            continue
                                        }
                                    }
                                    "[" === l ? a++ : "]" === l && a--
                                }
                                let h = 0 === s.length ? t : t.substring(u),
                                    l = h.startsWith("!"),
                                    f = l ? h.substring(1) : h;
                                return {
                                    modifiers: s,
                                    hasImportantModifier: l,
                                    baseClassName: f,
                                    maybePostfixModifierPosition: o && o > u ? o - u : void 0
                                }
                            }
                        }(s),
                        ... function(t) {
                            let e = function(t) {
                                    var e;
                                    let {
                                        theme: r,
                                        prefix: n
                                    } = t, o = {
                                        nextPart: new Map,
                                        validators: []
                                    };
                                    return (e = Object.entries(t.classGroups), n ? e.map(([t, e]) => [t, e.map(t => "string" == typeof t ? n + t : "object" == typeof t ? Object.fromEntries(Object.entries(t).map(([t, e]) => [n + t, e])) : t)]) : e).forEach(([t, e]) => {
                                        (function t(e, r, n, o) {
                                            e.forEach(e => {
                                                if ("string" == typeof e) {
                                                    ("" === e ? r : i(r, e)).classGroupId = n;
                                                    return
                                                }
                                                if ("function" == typeof e) {
                                                    if (e.isThemeGetter) {
                                                        t(e(o), r, n, o);
                                                        return
                                                    }
                                                    r.validators.push({
                                                        validator: e,
                                                        classGroupId: n
                                                    });
                                                    return
                                                }
                                                Object.entries(e).forEach(([e, s]) => {
                                                    t(s, i(r, e), n, o)
                                                })
                                            })
                                        })(e, o, t, r)
                                    }), o
                                }(t),
                                {
                                    conflictingClassGroups: r,
                                    conflictingClassGroupModifiers: o
                                } = t;
                            return {
                                getClassGroupId: function(t) {
                                    let r = t.split("-");
                                    return "" === r[0] && 1 !== r.length && r.shift(),
                                        function t(e, r) {
                                            if (0 === e.length) return r.classGroupId;
                                            let n = e[0],
                                                i = r.nextPart.get(n),
                                                o = i ? t(e.slice(1), i) : void 0;
                                            if (o) return o;
                                            if (0 === r.validators.length) return;
                                            let s = e.join("-");
                                            return r.validators.find(({
                                                validator: t
                                            }) => t(s)) ? .classGroupId
                                        }(r, e) || function(t) {
                                            if (n.test(t)) {
                                                let e = n.exec(t)[1],
                                                    r = e ? .substring(0, e.indexOf(":"));
                                                if (r) return "arbitrary.." + r
                                            }
                                        }(t)
                                },
                                getConflictingClassGroupIds: function(t, e) {
                                    let n = r[t] || [];
                                    return e && o[t] ? [...n, ...o[t]] : n
                                }
                            }
                        }(s)
                    }).cache.get, h = r.cache.set, l = f, f(o)
                };

                function f(t) {
                    let e = u(t);
                    if (e) return e;
                    let n = function(t, e) {
                        let {
                            splitModifiers: r,
                            getClassGroupId: n,
                            getConflictingClassGroupIds: i
                        } = e, s = new Set;
                        return t.trim().split(o).map(t => {
                            let {
                                modifiers: e,
                                hasImportantModifier: i,
                                baseClassName: o,
                                maybePostfixModifierPosition: s
                            } = r(t), a = n(s ? o.substring(0, s) : o), u = !!s;
                            if (!a) {
                                if (!s || !(a = n(o))) return {
                                    isTailwindClass: !1,
                                    originalClassName: t
                                };
                                u = !1
                            }
                            let h = (function(t) {
                                if (t.length <= 1) return t;
                                let e = [],
                                    r = [];
                                return t.forEach(t => {
                                    "[" === t[0] ? (e.push(...r.sort(), t), r = []) : r.push(t)
                                }), e.push(...r.sort()), e
                            })(e).join(":");
                            return {
                                isTailwindClass: !0,
                                modifierId: i ? h + "!" : h,
                                classGroupId: a,
                                originalClassName: t,
                                hasPostfixModifier: u
                            }
                        }).reverse().filter(t => {
                            if (!t.isTailwindClass) return !0;
                            let {
                                modifierId: e,
                                classGroupId: r,
                                hasPostfixModifier: n
                            } = t, o = e + r;
                            return !s.has(o) && (s.add(o), i(r, n).forEach(t => s.add(e + t)), !0)
                        }).reverse().map(t => t.originalClassName).join(" ")
                    }(t, r);
                    return h(t, n), n
                }
                return function() {
                    return l(s.apply(null, arguments))
                }
            }

            function u(t) {
                let e = e => e[t] || [];
                return e.isThemeGetter = !0, e
            }
            let h = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                l = /^\d+\/\d+$/,
                f = new Set(["px", "full", "screen"]),
                c = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                d = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                y = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                g = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

            function m(t) {
                return w(t) || f.has(t) || l.test(t)
            }

            function b(t) {
                return L(t, "length", R)
            }

            function w(t) {
                return !!t && !Number.isNaN(Number(t))
            }

            function v(t) {
                return L(t, "number", w)
            }

            function x(t) {
                return !!t && Number.isInteger(Number(t))
            }

            function E(t) {
                return t.endsWith("%") && w(t.slice(0, -1))
            }

            function M(t) {
                return h.test(t)
            }

            function A(t) {
                return c.test(t)
            }
            let B = new Set(["length", "size", "percentage"]);

            function _(t) {
                return L(t, B, T)
            }

            function U(t) {
                return L(t, "position", T)
            }
            let S = new Set(["image", "url"]);

            function I(t) {
                return L(t, S, N)
            }

            function k(t) {
                return L(t, "", P)
            }

            function O() {
                return !0
            }

            function L(t, e, r) {
                let n = h.exec(t);
                return !!n && (n[1] ? "string" == typeof e ? n[1] === e : e.has(n[1]) : r(n[2]))
            }

            function R(t) {
                return d.test(t) && !p.test(t)
            }

            function T() {
                return !1
            }

            function P(t) {
                return y.test(t)
            }

            function N(t) {
                return g.test(t)
            }

            function z() {
                let t = u("colors"),
                    e = u("spacing"),
                    r = u("blur"),
                    n = u("brightness"),
                    i = u("borderColor"),
                    o = u("borderRadius"),
                    s = u("borderSpacing"),
                    a = u("borderWidth"),
                    h = u("contrast"),
                    l = u("grayscale"),
                    f = u("hueRotate"),
                    c = u("invert"),
                    d = u("gap"),
                    p = u("gradientColorStops"),
                    y = u("gradientColorStopPositions"),
                    g = u("inset"),
                    B = u("margin"),
                    S = u("opacity"),
                    L = u("padding"),
                    R = u("saturate"),
                    T = u("scale"),
                    P = u("sepia"),
                    N = u("skew"),
                    z = u("space"),
                    C = u("translate"),
                    q = () => ["auto", "contain", "none"],
                    j = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    $ = () => ["auto", M, e],
                    F = () => [M, e],
                    Z = () => ["", m, b],
                    H = () => ["auto", w, M],
                    V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    D = () => ["solid", "dashed", "dotted", "double", "none"],
                    G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"],
                    K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    Y = () => ["", "0", M],
                    W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    Q = () => [w, v],
                    J = () => [w, M];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [O],
                        spacing: [m, b],
                        blur: ["none", "", A, M],
                        brightness: Q(),
                        borderColor: [t],
                        borderRadius: ["none", "", "full", A, M],
                        borderSpacing: F(),
                        borderWidth: Z(),
                        contrast: Q(),
                        grayscale: Y(),
                        hueRotate: J(),
                        invert: Y(),
                        gap: F(),
                        gradientColorStops: [t],
                        gradientColorStopPositions: [E, b],
                        inset: $(),
                        margin: $(),
                        opacity: Q(),
                        padding: F(),
                        saturate: Q(),
                        scale: Q(),
                        sepia: Y(),
                        skew: J(),
                        space: F(),
                        translate: F()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", M]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [A]
                        }],
                        "break-after": [{
                            "break-after": W()
                        }],
                        "break-before": [{
                            "break-before": W()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...V(), M]
                        }],
                        overflow: [{
                            overflow: j()
                        }],
                        "overflow-x": [{
                            "overflow-x": j()
                        }],
                        "overflow-y": [{
                            "overflow-y": j()
                        }],
                        overscroll: [{
                            overscroll: q()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": q()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": q()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [g]
                        }],
                        "inset-x": [{
                            "inset-x": [g]
                        }],
                        "inset-y": [{
                            "inset-y": [g]
                        }],
                        start: [{
                            start: [g]
                        }],
                        end: [{
                            end: [g]
                        }],
                        top: [{
                            top: [g]
                        }],
                        right: [{
                            right: [g]
                        }],
                        bottom: [{
                            bottom: [g]
                        }],
                        left: [{
                            left: [g]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", x, M]
                        }],
                        basis: [{
                            basis: $()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", M]
                        }],
                        grow: [{
                            grow: Y()
                        }],
                        shrink: [{
                            shrink: Y()
                        }],
                        order: [{
                            order: ["first", "last", "none", x, M]
                        }],
                        "grid-cols": [{
                            "grid-cols": [O]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", x, M]
                            }, M]
                        }],
                        "col-start": [{
                            "col-start": H()
                        }],
                        "col-end": [{
                            "col-end": H()
                        }],
                        "grid-rows": [{
                            "grid-rows": [O]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [x, M]
                            }, M]
                        }],
                        "row-start": [{
                            "row-start": H()
                        }],
                        "row-end": [{
                            "row-end": H()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", M]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", M]
                        }],
                        gap: [{
                            gap: [d]
                        }],
                        "gap-x": [{
                            "gap-x": [d]
                        }],
                        "gap-y": [{
                            "gap-y": [d]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...K()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...K(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...K(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [L]
                        }],
                        px: [{
                            px: [L]
                        }],
                        py: [{
                            py: [L]
                        }],
                        ps: [{
                            ps: [L]
                        }],
                        pe: [{
                            pe: [L]
                        }],
                        pt: [{
                            pt: [L]
                        }],
                        pr: [{
                            pr: [L]
                        }],
                        pb: [{
                            pb: [L]
                        }],
                        pl: [{
                            pl: [L]
                        }],
                        m: [{
                            m: [B]
                        }],
                        mx: [{
                            mx: [B]
                        }],
                        my: [{
                            my: [B]
                        }],
                        ms: [{
                            ms: [B]
                        }],
                        me: [{
                            me: [B]
                        }],
                        mt: [{
                            mt: [B]
                        }],
                        mr: [{
                            mr: [B]
                        }],
                        mb: [{
                            mb: [B]
                        }],
                        ml: [{
                            ml: [B]
                        }],
                        "space-x": [{
                            "space-x": [z]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [z]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, e]
                        }],
                        "min-w": [{
                            "min-w": [M, e, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [M, e, "none", "full", "min", "max", "fit", "prose", {
                                screen: [A]
                            }, A]
                        }],
                        h: [{
                            h: [M, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [M, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [M, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [M, e, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", A, b]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", v]
                        }],
                        "font-family": [{
                            font: [O]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", M]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", w, v]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", m, M]
                        }],
                        "list-image": [{
                            "list-image": ["none", M]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", M]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [t]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [S]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [t]
                        }],
                        "text-opacity": [{
                            "text-opacity": [S]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...D(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", m, b]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", m, M]
                        }],
                        "text-decoration-color": [{
                            decoration: [t]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: F()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", M]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [S]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...V(), U]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", _]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, I]
                        }],
                        "bg-color": [{
                            bg: [t]
                        }],
                        "gradient-from-pos": [{
                            from: [y]
                        }],
                        "gradient-via-pos": [{
                            via: [y]
                        }],
                        "gradient-to-pos": [{
                            to: [y]
                        }],
                        "gradient-from": [{
                            from: [p]
                        }],
                        "gradient-via": [{
                            via: [p]
                        }],
                        "gradient-to": [{
                            to: [p]
                        }],
                        rounded: [{
                            rounded: [o]
                        }],
                        "rounded-s": [{
                            "rounded-s": [o]
                        }],
                        "rounded-e": [{
                            "rounded-e": [o]
                        }],
                        "rounded-t": [{
                            "rounded-t": [o]
                        }],
                        "rounded-r": [{
                            "rounded-r": [o]
                        }],
                        "rounded-b": [{
                            "rounded-b": [o]
                        }],
                        "rounded-l": [{
                            "rounded-l": [o]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [o]
                        }],
                        "rounded-se": [{
                            "rounded-se": [o]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [o]
                        }],
                        "rounded-es": [{
                            "rounded-es": [o]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [o]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [o]
                        }],
                        "rounded-br": [{
                            "rounded-br": [o]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [o]
                        }],
                        "border-w": [{
                            border: [a]
                        }],
                        "border-w-x": [{
                            "border-x": [a]
                        }],
                        "border-w-y": [{
                            "border-y": [a]
                        }],
                        "border-w-s": [{
                            "border-s": [a]
                        }],
                        "border-w-e": [{
                            "border-e": [a]
                        }],
                        "border-w-t": [{
                            "border-t": [a]
                        }],
                        "border-w-r": [{
                            "border-r": [a]
                        }],
                        "border-w-b": [{
                            "border-b": [a]
                        }],
                        "border-w-l": [{
                            "border-l": [a]
                        }],
                        "border-opacity": [{
                            "border-opacity": [S]
                        }],
                        "border-style": [{
                            border: [...D(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [a]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [a]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [S]
                        }],
                        "divide-style": [{
                            divide: D()
                        }],
                        "border-color": [{
                            border: [i]
                        }],
                        "border-color-x": [{
                            "border-x": [i]
                        }],
                        "border-color-y": [{
                            "border-y": [i]
                        }],
                        "border-color-t": [{
                            "border-t": [i]
                        }],
                        "border-color-r": [{
                            "border-r": [i]
                        }],
                        "border-color-b": [{
                            "border-b": [i]
                        }],
                        "border-color-l": [{
                            "border-l": [i]
                        }],
                        "divide-color": [{
                            divide: [i]
                        }],
                        "outline-style": [{
                            outline: ["", ...D()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [m, M]
                        }],
                        "outline-w": [{
                            outline: [m, b]
                        }],
                        "outline-color": [{
                            outline: [t]
                        }],
                        "ring-w": [{
                            ring: Z()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [t]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [S]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [m, b]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [t]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", A, k]
                        }],
                        "shadow-color": [{
                            shadow: [O]
                        }],
                        opacity: [{
                            opacity: [S]
                        }],
                        "mix-blend": [{
                            "mix-blend": G()
                        }],
                        "bg-blend": [{
                            "bg-blend": G()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [r]
                        }],
                        brightness: [{
                            brightness: [n]
                        }],
                        contrast: [{
                            contrast: [h]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", A, M]
                        }],
                        grayscale: [{
                            grayscale: [l]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [f]
                        }],
                        invert: [{
                            invert: [c]
                        }],
                        saturate: [{
                            saturate: [R]
                        }],
                        sepia: [{
                            sepia: [P]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [r]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [n]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [h]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [l]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [f]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [c]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [S]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [R]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [P]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [s]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [s]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [s]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", M]
                        }],
                        duration: [{
                            duration: J()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", M]
                        }],
                        delay: [{
                            delay: J()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", M]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [T]
                        }],
                        "scale-x": [{
                            "scale-x": [T]
                        }],
                        "scale-y": [{
                            "scale-y": [T]
                        }],
                        rotate: [{
                            rotate: [x, M]
                        }],
                        "translate-x": [{
                            "translate-x": [C]
                        }],
                        "translate-y": [{
                            "translate-y": [C]
                        }],
                        "skew-x": [{
                            "skew-x": [N]
                        }],
                        "skew-y": [{
                            "skew-y": [N]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", M]
                        }],
                        accent: [{
                            accent: ["auto", t]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M]
                        }],
                        "caret-color": [{
                            caret: [t]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": F()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": F()
                        }],
                        "scroll-my": [{
                            "scroll-my": F()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": F()
                        }],
                        "scroll-me": [{
                            "scroll-me": F()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": F()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": F()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": F()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": F()
                        }],
                        "scroll-p": [{
                            "scroll-p": F()
                        }],
                        "scroll-px": [{
                            "scroll-px": F()
                        }],
                        "scroll-py": [{
                            "scroll-py": F()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": F()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": F()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": F()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": F()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": F()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": F()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", M]
                        }],
                        fill: [{
                            fill: [t, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [m, b, v]
                        }],
                        stroke: [{
                            stroke: [t, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            }

            function C(t, e, r) {
                void 0 !== r && (t[e] = r)
            }

            function q(t, ...e) {
                return "function" == typeof t ? a(z, t, ...e) : a(() => (function(t, {
                    cacheSize: e,
                    prefix: r,
                    separator: n,
                    extend: i = {},
                    override: o = {}
                }) {
                    for (let i in C(t, "cacheSize", e), C(t, "prefix", r), C(t, "separator", n), o) ! function(t, e) {
                        if (e)
                            for (let r in e) C(t, r, e[r])
                    }(t[i], o[i]);
                    for (let e in i) ! function(t, e) {
                        if (e)
                            for (let r in e) {
                                let n = e[r];
                                void 0 !== n && (t[r] = (t[r] || []).concat(n))
                            }
                    }(t[e], i[e]);
                    return t
                })(z(), t), ...e)
            }
        }
    }
]);
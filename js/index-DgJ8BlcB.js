var Tf = e => {
  throw TypeError(e)
};
var Al = (e, t, n) => t.has(e) || Tf("Cannot " + n);
var k = (e, t, n) => (Al(e, t, "read from private field"), n ? n.call(e) : t
    .get(e)),
  ee = (e, t, n) => t.has(e) ? Tf(
    "Cannot add the same private member more than once") :
  t instanceof WeakSet ? t.add(e) : t.set(e, n),
  W = (e, t, n, r) => (Al(e, t, "write to private field"), r ? r.call(e, n) : t
    .set(e, n), n),
  Ae = (e, t, n) => (Al(e, t, "access private method"), n);
var da = (e, t, n, r) => ({
  set _(o) {
    W(e, t, o, n)
  },
  get _() {
    return k(e, t, r)
  }
});

function zy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s && Object.defineProperty(e, o, s.get ? s : {
            enumerable: !0,
            get: () => r[o]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }))
}(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(
  o);
  new MutationObserver(o => {
    for (const s of o)
      if (s.type === "childList")
        for (const a of s.addedNodes) a.tagName === "LINK" && a.rel ===
          "modulepreload" && r(a)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(o) {
    const s = {};
    return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s
        .referrerPolicy = o.referrerPolicy), o.crossOrigin ===
      "use-credentials" ? s.credentials = "include" : o.crossOrigin ===
      "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
  }

  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s)
  }
})();

function Km(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e,
    "default") ? e.default : e
}
var Xm = {
    exports: {}
  },
  $i = {},
  Ym = {
    exports: {}
  },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ks = Symbol.for("react.element"),
  Uy = Symbol.for("react.portal"),
  Vy = Symbol.for("react.fragment"),
  Hy = Symbol.for("react.strict_mode"),
  Wy = Symbol.for("react.profiler"),
  Qy = Symbol.for("react.provider"),
  Gy = Symbol.for("react.context"),
  qy = Symbol.for("react.forward_ref"),
  Ky = Symbol.for("react.suspense"),
  Xy = Symbol.for("react.memo"),
  Yy = Symbol.for("react.lazy"),
  If = Symbol.iterator;

function Jy(e) {
  return e === null || typeof e != "object" ? null : (e = If && e[If] || e[
    "@@iterator"], typeof e == "function" ? e : null)
}
var Jm = {
    isMounted: function() {
      return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
  },
  Zm = Object.assign,
  eh = {};

function Lo(e, t, n) {
  this.props = e, this.context = t, this.refs = eh, this.updater = n || Jm
}
Lo.prototype.isReactComponent = {};
Lo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
  throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
  this.updater.enqueueSetState(this, e, t, "setState")
};
Lo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function th() {}
th.prototype = Lo.prototype;

function Uu(e, t, n) {
  this.props = e, this.context = t, this.refs = eh, this.updater = n || Jm
}
var Vu = Uu.prototype = new th;
Vu.constructor = Uu;
Zm(Vu, Lo.prototype);
Vu.isPureReactComponent = !0;
var Af = Array.isArray,
  nh = Object.prototype.hasOwnProperty,
  Hu = {
    current: null
  },
  rh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function oh(e, t, n) {
  var r, o = {},
    s = null,
    a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t
        .key), t) nh.call(t, r) && !rh.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    o.children = c
  }
  if (e && e.defaultProps)
    for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Ks,
    type: e,
    key: s,
    ref: a,
    props: o,
    _owner: Hu.current
  }
}

function Zy(e, t) {
  return {
    $$typeof: Ks,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}

function Wu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ks
}

function e1(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n]
  })
}
var _f = /\/+/g;

function _l(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? e1("" + e.key) :
    t.toString(36)
}

function Ba(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (s) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Ks:
        case Uy:
          a = !0
      }
  }
  if (a) return a = e, o = o(a), e = r === "" ? "." + _l(a, 0) : r, Af(o) ? (n =
    "", e != null && (n = e.replace(_f, "$&/") + "/"), Ba(o, t, n, "",
      function(u) {
        return u
      })) : o != null && (Wu(o) && (o = Zy(o, n + (!o.key || a && a.key ===
    o.key ? "" : ("" + o.key).replace(_f, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", Af(e))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var c = r + _l(s, l);
      a += Ba(s, t, n, c, o)
    } else if (c = Jy(e), typeof c == "function")
      for (e = c.call(e), l = 0; !(s = e.next()).done;) s = s.value, c = r + _l(
        s, l++), a += Ba(s, t, n, c, o);
    else if (s === "object") throw t = String(e), Error(
    "Objects are not valid as a React child (found: " + (t ===
      "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") +
      "}" : t) +
    "). If you meant to render a collection of children, use an array instead."
    );
  return a
}

function fa(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return Ba(e, r, "", "", function(s) {
    return t.call(n, s, o++)
  }), r
}

function t1(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result =
        n)
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result =
        n)
    }), e._status === -1 && (e._status = 0, e._result = t)
  }
  if (e._status === 1) return e._result.default;
  throw e._result
}
var Ue = {
    current: null
  },
  za = {
    transition: null
  },
  n1 = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: za,
    ReactCurrentOwner: Hu
  };

function sh() {
  throw Error("act(...) is not supported in production builds of React.")
}
K.Children = {
  map: fa,
  forEach: function(e, t, n) {
    fa(e, function() {
      t.apply(this, arguments)
    }, n)
  },
  count: function(e) {
    var t = 0;
    return fa(e, function() {
      t++
    }), t
  },
  toArray: function(e) {
    return fa(e, function(t) {
      return t
    }) || []
  },
  only: function(e) {
    if (!Wu(e)) throw Error(
      "React.Children.only expected to receive a single React element child."
      );
    return e
  }
};
K.Component = Lo;
K.Fragment = Vy;
K.Profiler = Wy;
K.PureComponent = Uu;
K.StrictMode = Hy;
K.Suspense = Ky;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n1;
K.act = sh;
K.cloneElement = function(e, t, n) {
  if (e == null) throw Error(
    "React.cloneElement(...): The argument must be a React element, but you passed " +
    e + ".");
  var r = Zm({}, e.props),
    o = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = Hu.current), t.key !== void 0 && (
        o = "" + t.key), e.type && e.type.defaultProps) var l = e.type
      .defaultProps;
    for (c in t) nh.call(t, c) && !rh.hasOwnProperty(c) && (r[c] = t[c] ===
      void 0 && l !== void 0 ? l[c] : t[c])
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l
  }
  return {
    $$typeof: Ks,
    type: e.type,
    key: o,
    ref: s,
    props: r,
    _owner: a
  }
};
K.createContext = function(e) {
  return e = {
    $$typeof: Gy,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }, e.Provider = {
    $$typeof: Qy,
    _context: e
  }, e.Consumer = e
};
K.createElement = oh;
K.createFactory = function(e) {
  var t = oh.bind(null, e);
  return t.type = e, t
};
K.createRef = function() {
  return {
    current: null
  }
};
K.forwardRef = function(e) {
  return {
    $$typeof: qy,
    render: e
  }
};
K.isValidElement = Wu;
K.lazy = function(e) {
  return {
    $$typeof: Yy,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: t1
  }
};
K.memo = function(e, t) {
  return {
    $$typeof: Xy,
    type: e,
    compare: t === void 0 ? null : t
  }
};
K.startTransition = function(e) {
  var t = za.transition;
  za.transition = {};
  try {
    e()
  } finally {
    za.transition = t
  }
};
K.unstable_act = sh;
K.useCallback = function(e, t) {
  return Ue.current.useCallback(e, t)
};
K.useContext = function(e) {
  return Ue.current.useContext(e)
};
K.useDebugValue = function() {};
K.useDeferredValue = function(e) {
  return Ue.current.useDeferredValue(e)
};
K.useEffect = function(e, t) {
  return Ue.current.useEffect(e, t)
};
K.useId = function() {
  return Ue.current.useId()
};
K.useImperativeHandle = function(e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n)
};
K.useInsertionEffect = function(e, t) {
  return Ue.current.useInsertionEffect(e, t)
};
K.useLayoutEffect = function(e, t) {
  return Ue.current.useLayoutEffect(e, t)
};
K.useMemo = function(e, t) {
  return Ue.current.useMemo(e, t)
};
K.useReducer = function(e, t, n) {
  return Ue.current.useReducer(e, t, n)
};
K.useRef = function(e) {
  return Ue.current.useRef(e)
};
K.useState = function(e) {
  return Ue.current.useState(e)
};
K.useSyncExternalStore = function(e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n)
};
K.useTransition = function() {
  return Ue.current.useTransition()
};
K.version = "18.3.1";
Ym.exports = K;
var m = Ym.exports;
const _ = Km(m),
  Qu = zy({
    __proto__: null,
    default: _
  }, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r1 = m,
  o1 = Symbol.for("react.element"),
  s1 = Symbol.for("react.fragment"),
  a1 = Object.prototype.hasOwnProperty,
  i1 = r1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  l1 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function ah(e, t, n) {
  var r, o = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !==
    void 0 && (a = t.ref);
  for (r in t) a1.call(t, r) && !l1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: o1,
    type: e,
    key: s,
    ref: a,
    props: o,
    _owner: i1.current
  }
}
$i.Fragment = s1;
$i.jsx = ah;
$i.jsxs = ah;
Xm.exports = $i;
var i = Xm.exports,
  ih = {
    exports: {}
  },
  nt = {},
  lh = {
    exports: {}
  },
  ch = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(R, I) {
    var D = R.length;
    R.push(I);
    e: for (; 0 < D;) {
      var Q = D - 1 >>> 1,
        U = R[Q];
      if (0 < o(U, I)) R[Q] = I, R[D] = U, D = Q;
      else break e
    }
  }

  function n(R) {
    return R.length === 0 ? null : R[0]
  }

  function r(R) {
    if (R.length === 0) return null;
    var I = R[0],
      D = R.pop();
    if (D !== I) {
      R[0] = D;
      e: for (var Q = 0, U = R.length, q = U >>> 1; Q < q;) {
        var X = 2 * (Q + 1) - 1,
          we = R[X],
          Ie = X + 1,
          te = R[Ie];
        if (0 > o(we, D)) Ie < U && 0 > o(te, we) ? (R[Q] = te, R[Ie] = D,
          Q = Ie) : (R[Q] = we, R[X] = D, Q = X);
        else if (Ie < U && 0 > o(te, D)) R[Q] = te, R[Ie] = D, Q = Ie;
        else break e
      }
    }
    return I
  }

  function o(R, I) {
    var D = R.sortIndex - I.sortIndex;
    return D !== 0 ? D : R.id - I.id
  }
  if (typeof performance == "object" && typeof performance.now ==
    "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now()
    }
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function() {
      return a.now() - l
    }
  }
  var c = [],
    u = [],
    d = 1,
    p = null,
    v = 3,
    f = !1,
    b = !1,
    h = !1,
    y = typeof setTimeout == "function" ? setTimeout : null,
    x = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator
    .scheduling.isInputPending !== void 0 && navigator.scheduling
    .isInputPending.bind(navigator.scheduling);

  function w(R) {
    for (var I = n(u); I !== null;) {
      if (I.callback === null) r(u);
      else if (I.startTime <= R) r(u), I.sortIndex = I.expirationTime, t(c,
      I);
      else break;
      I = n(u)
    }
  }

  function N(R) {
    if (h = !1, w(R), !b)
      if (n(c) !== null) b = !0, B(E);
      else {
        var I = n(u);
        I !== null && V(N, I.startTime - R)
      }
  }

  function E(R, I) {
    b = !1, h && (h = !1, x(C), C = -1), f = !0;
    var D = v;
    try {
      for (w(I), p = n(c); p !== null && (!(p.expirationTime > I) || R && !
        O());) {
        var Q = p.callback;
        if (typeof Q == "function") {
          p.callback = null, v = p.priorityLevel;
          var U = Q(p.expirationTime <= I);
          I = e.unstable_now(), typeof U == "function" ? p.callback = U :
            p === n(c) && r(c), w(I)
        } else r(c);
        p = n(c)
      }
      if (p !== null) var q = !0;
      else {
        var X = n(u);
        X !== null && V(N, X.startTime - I), q = !1
      }
      return q
    } finally {
      p = null, v = D, f = !1
    }
  }
  var S = !1,
    j = null,
    C = -1,
    P = 5,
    T = -1;

  function O() {
    return !(e.unstable_now() - T < P)
  }

  function M() {
    if (j !== null) {
      var R = e.unstable_now();
      T = R;
      var I = !0;
      try {
        I = j(!0, R)
      } finally {
        I ? $() : (S = !1, j = null)
      }
    } else S = !1
  }
  var $;
  if (typeof g == "function") $ = function() {
    g(M)
  };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel,
      z = A.port2;
    A.port1.onmessage = M, $ = function() {
      z.postMessage(null)
    }
  } else $ = function() {
    y(M, 0)
  };

  function B(R) {
    j = R, S || (S = !0, $())
  }

  function V(R, I) {
    C = y(function() {
      R(e.unstable_now())
    }, I)
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e
    .unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e
    .unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e
    .unstable_cancelCallback = function(R) {
      R.callback = null
    }, e.unstable_continueExecution = function() {
      b || f || (b = !0, B(E))
    }, e.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : P = 0 < R ? Math.floor(1e3 / R) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
      return v
    }, e.unstable_getFirstCallbackNode = function() {
      return n(c)
    }, e.unstable_next = function(R) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = v
      }
      var D = v;
      v = I;
      try {
        return R()
      } finally {
        v = D
      }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint =
    function() {}, e.unstable_runWithPriority = function(R, I) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3
      }
      var D = v;
      v = R;
      try {
        return I()
      } finally {
        v = D
      }
    }, e.unstable_scheduleCallback = function(R, I, D) {
      var Q = e.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D =
          typeof D == "number" && 0 < D ? Q + D : Q) : D = Q, R) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3
      }
      return U = D + U, R = {
        id: d++,
        callback: I,
        priorityLevel: R,
        startTime: D,
        expirationTime: U,
        sortIndex: -1
      }, D > Q ? (R.sortIndex = D, t(u, R), n(c) === null && R === n(u) && (
        h ? (x(C), C = -1) : h = !0, V(N, D - Q))) : (R.sortIndex = U, t(c,
        R), b || f || (b = !0, B(E))), R
    }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function(R) {
      var I = v;
      return function() {
        var D = v;
        v = I;
        try {
          return R.apply(this, arguments)
        } finally {
          v = D
        }
      }
    }
})(ch);
lh.exports = ch;
var c1 = lh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u1 = m,
  tt = c1;

function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n =
      1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(
    arguments[n]);
  return "Minified React error #" + e + "; visit " + t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var uh = new Set,
  bs = {};

function Rr(e, t) {
  Eo(e, t), Eo(e + "Capture", t)
}

function Eo(e, t) {
  for (bs[e] = t, e = 0; e < t.length; e++) uh.add(t[e])
}
var ln = !(typeof window > "u" || typeof window.document > "u" || typeof window
    .document.createElement > "u"),
  Pc = Object.prototype.hasOwnProperty,
  d1 =
  /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mf = {},
  Of = {};

function f1(e) {
  return Pc.call(Of, e) ? !0 : Pc.call(Mf, e) ? !1 : d1.test(e) ? Of[e] = !0 : (
    Mf[e] = !0, !1)
}

function p1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase()
        .slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1
  }
}

function m1(e, t, n, r) {
  if (t === null || typeof t > "u" || p1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t
  }
  return !1
}

function Ve(e, t, n, r, o, s, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r,
    this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName =
    e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = a
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
.split(" ").forEach(function(e) {
  Te[e] = new Ve(e, 0, !1, e, null, !1, !1)
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(function(e) {
  var t = e[0];
  Te[t] = new Ve(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Te[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"]
.forEach(function(e) {
  Te[e] = new Ve(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
.split(" ").forEach(function(e) {
  Te[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Te[e] = new Ve(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
  Te[e] = new Ve(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Te[e] = new Ve(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
  Te[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Gu = /[\-:]([a-z])/g;

function qu(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
.split(" ").forEach(function(e) {
  var t = e.replace(Gu, qu);
  Te[t] = new Ve(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split
  (" ").forEach(function(e) {
    var t = e.replace(Gu, qu);
    Te[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
  });
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Gu, qu);
  Te[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !
    1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Te[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Te.xlinkHref = new Ve("xlinkHref", 1, !1, "xlink:href",
  "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Te[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ku(e, t, n, r) {
  var o = Te.hasOwnProperty(t) ? Te[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !==
    "O" || t[1] !== "n" && t[1] !== "N") && (m1(t, n, o, r) && (n = null), r ||
    o === null ? f1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t,
      "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type ===
    3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n ===
      null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n ===
        !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))
    )
}
var mn = u1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pa = Symbol.for("react.element"),
  Wr = Symbol.for("react.portal"),
  Qr = Symbol.for("react.fragment"),
  Xu = Symbol.for("react.strict_mode"),
  kc = Symbol.for("react.profiler"),
  dh = Symbol.for("react.provider"),
  fh = Symbol.for("react.context"),
  Yu = Symbol.for("react.forward_ref"),
  Rc = Symbol.for("react.suspense"),
  Tc = Symbol.for("react.suspense_list"),
  Ju = Symbol.for("react.memo"),
  Pn = Symbol.for("react.lazy"),
  ph = Symbol.for("react.offscreen"),
  Lf = Symbol.iterator;

function Ko(e) {
  return e === null || typeof e != "object" ? null : (e = Lf && e[Lf] || e[
    "@@iterator"], typeof e == "function" ? e : null)
}
var he = Object.assign,
  Ml;

function ss(e) {
  if (Ml === void 0) try {
    throw Error()
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ml = t && t[1] || ""
  }
  return `
` + Ml + e
}
var Ol = !1;

function Ll(e, t) {
  if (!e || Ol) return "";
  Ol = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
          throw Error()
        }, Object.defineProperty(t.prototype, "props", {
          set: function() {
            throw Error()
          }
        }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), s = r.stack.split(`
`), a = o.length - 1, l = s.length - 1; 1 <= a && 0 <= l && o[a] !== s[l];)
      l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== s[l]) {
          if (a !== 1 || l !== 1)
            do
              if (a--, l--, 0 > l || o[a] !== s[l]) {
                var c = `
` + o[a].replace(" at new ", " at ");
                return e.displayName && c.includes("<anonymous>") && (c = c
                  .replace("<anonymous>", e.displayName)), c
              } while (1 <= a && 0 <= l);
          break
        }
    }
  } finally {
    Ol = !1, Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? ss(e) : ""
}

function h1(e) {
  switch (e.tag) {
    case 5:
      return ss(e.type);
    case 16:
      return ss("Lazy");
    case 13:
      return ss("Suspense");
    case 19:
      return ss("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ll(e.type, !1), e;
    case 11:
      return e = Ll(e.type.render, !1), e;
    case 1:
      return e = Ll(e.type, !0), e;
    default:
      return ""
  }
}

function Ic(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qr:
      return "Fragment";
    case Wr:
      return "Portal";
    case kc:
      return "Profiler";
    case Xu:
      return "StrictMode";
    case Rc:
      return "Suspense";
    case Tc:
      return "SuspenseList"
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case fh:
      return (e.displayName || "Context") + ".Consumer";
    case dh:
      return (e._context.displayName || "Context") + ".Provider";
    case Yu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e =
        e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ju:
      return t = e.displayName || null, t !== null ? t : Ic(e.type) || "Memo";
    case Pn:
      t = e._payload, e = e._init;
      try {
        return Ic(e(t))
      } catch {}
  }
  return null
}

function g1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (
        e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ic(t);
    case 8:
      return t === Xu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t
  }
  return null
}

function qn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return ""
  }
}

function mh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" ||
    t === "radio")
}

function v1(e) {
  var t = mh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" &&
    typeof n.set == "function") {
    var o = n.get,
      s = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function() {
        return o.call(this)
      },
      set: function(a) {
        r = "" + a, s.call(this, a)
      }
    }), Object.defineProperty(e, t, {
      enumerable: n.enumerable
    }), {
      getValue: function() {
        return r
      },
      setValue: function(a) {
        r = "" + a
      },
      stopTracking: function() {
        e._valueTracker = null, delete e[t]
      }
    }
  }
}

function ma(e) {
  e._valueTracker || (e._valueTracker = v1(e))
}

function hh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = mh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !==
    n ? (t.setValue(e), !0) : !1
}

function ri(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}

function Ac(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}

function Df(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  n = qn(t.value != null ? t.value : n), e._wrapperState = {
    initialChecked: r,
    initialValue: n,
    controlled: t.type === "checkbox" || t.type === "radio" ? t.checked !=
      null : t.value != null
  }
}

function gh(e, t) {
  t = t.checked, t != null && Ku(e, "checked", t, !1)
}

function _c(e, t) {
  gh(e, t);
  var n = qn(t.value),
    r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) &&
    (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return
  }
  t.hasOwnProperty("value") ? Mc(e, t.type, n) : t.hasOwnProperty(
      "defaultValue") && Mc(e, t.type, qn(t.defaultValue)), t.checked == null &&
    t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Ff(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !==
        null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t),
      e.defaultValue = t
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState
    .initialChecked, n !== "" && (e.name = n)
}

function Mc(e, t, n) {
  (t !== "number" || ri(e.ownerDocument) !== e) && (n == null ? e.defaultValue =
    "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e
      .defaultValue = "" + n))
}
var as = Array.isArray;

function oo(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n]
      .selected !== o && (e[n].selected = o), o && r && (e[n]
        .defaultSelected = !0)
  } else {
    for (n = "" + qn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}

function Oc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  })
}

function $f(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(L(92));
      if (as(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), n = t
  }
  e._wrapperState = {
    initialValue: qn(n)
  }
}

function vh(e, t) {
  var n = qn(t.value),
    r = qn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue ==
    null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e
    .defaultValue = "" + r)
}

function Bf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function xh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}

function Lc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xh(t) : e ===
    "http://www.w3.org/2000/svg" && t === "foreignObject" ?
    "http://www.w3.org/1999/xhtml" : e
}
var ha, yh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n,
    r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o)
    })
  } : e
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e
    .innerHTML = t;
  else {
    for (ha = ha || document.createElement("div"), ha.innerHTML = "<svg>" +
      t.valueOf().toString() + "</svg>", t = ha.firstChild; e.firstChild;) e
      .removeChild(e.firstChild);
    for (; t.firstChild;) e.appendChild(t.firstChild)
  }
});

function Ns(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return
    }
  }
  e.textContent = t
}
var cs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  x1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(cs).forEach(function(e) {
  x1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), cs[t] = cs[e]
  })
});

function wh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t !=
    "number" || t === 0 || cs.hasOwnProperty(e) && cs[e] ? ("" + t).trim() : t +
    "px"
}

function bh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = wh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
    }
}
var y1 = he({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});

function Dc(e, t) {
  if (t) {
    if (y1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t
          .dangerouslySetInnerHTML)) throw Error(L(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62))
  }
}

function Fc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0
  }
}
var $c = null;

function Zu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (
    e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Bc = null,
  so = null,
  ao = null;

function zf(e) {
  if (e = Js(e)) {
    if (typeof Bc != "function") throw Error(L(280));
    var t = e.stateNode;
    t && (t = Hi(t), Bc(e.stateNode, e.type, t))
  }
}

function Nh(e) {
  so ? ao ? ao.push(e) : ao = [e] : so = e
}

function Eh() {
  if (so) {
    var e = so,
      t = ao;
    if (ao = so = null, zf(e), t)
      for (e = 0; e < t.length; e++) zf(t[e])
  }
}

function Ch(e, t) {
  return e(t)
}

function Sh() {}
var Dl = !1;

function jh(e, t, n) {
  if (Dl) return e(t, n);
  Dl = !0;
  try {
    return Ch(e, t, n)
  } finally {
    Dl = !1, (so !== null || ao !== null) && (Sh(), Eh())
  }
}

function Es(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Hi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e ===
        "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n
}
var zc = !1;
if (ln) try {
  var Xo = {};
  Object.defineProperty(Xo, "passive", {
    get: function() {
      zc = !0
    }
  }), window.addEventListener("test", Xo, Xo), window.removeEventListener(
    "test", Xo, Xo)
} catch {
  zc = !1
}

function w1(e, t, n, r, o, s, a, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u)
  } catch (d) {
    this.onError(d)
  }
}
var us = !1,
  oi = null,
  si = !1,
  Uc = null,
  b1 = {
    onError: function(e) {
      us = !0, oi = e
    }
  };

function N1(e, t, n, r, o, s, a, l, c) {
  us = !1, oi = null, w1.apply(b1, arguments)
}

function E1(e, t, n, r, o, s, a, l, c) {
  if (N1.apply(this, arguments), us) {
    if (us) {
      var u = oi;
      us = !1, oi = null
    } else throw Error(L(198));
    si || (si = !0, Uc = u)
  }
}

function Tr(e) {
  var t = e,
    n = e;
  if (e.alternate)
    for (; t.return;) t = t.return;
  else {
    e = t;
    do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
  }
  return t.tag === 3 ? n : null
}

function Ph(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)),
      t !== null) return t.dehydrated
  }
  return null
}

function Uf(e) {
  if (Tr(e) !== e) throw Error(L(188))
}

function C1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Tr(e), t === null) throw Error(L(188));
    return t !== e ? null : e
  }
  for (var n = e, r = t;;) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue
      }
      break
    }
    if (o.child === s.child) {
      for (s = o.child; s;) {
        if (s === n) return Uf(o), e;
        if (s === r) return Uf(o), t;
        s = s.sibling
      }
      throw Error(L(188))
    }
    if (n.return !== r.return) n = o, r = s;
    else {
      for (var a = !1, l = o.child; l;) {
        if (l === n) {
          a = !0, n = o, r = s;
          break
        }
        if (l === r) {
          a = !0, r = o, n = s;
          break
        }
        l = l.sibling
      }
      if (!a) {
        for (l = s.child; l;) {
          if (l === n) {
            a = !0, n = s, r = o;
            break
          }
          if (l === r) {
            a = !0, r = s, n = o;
            break
          }
          l = l.sibling
        }
        if (!a) throw Error(L(189))
      }
    }
    if (n.alternate !== r) throw Error(L(190))
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t
}

function kh(e) {
  return e = C1(e), e !== null ? Rh(e) : null
}

function Rh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Rh(e);
    if (t !== null) return t;
    e = e.sibling
  }
  return null
}
var Th = tt.unstable_scheduleCallback,
  Vf = tt.unstable_cancelCallback,
  S1 = tt.unstable_shouldYield,
  j1 = tt.unstable_requestPaint,
  xe = tt.unstable_now,
  P1 = tt.unstable_getCurrentPriorityLevel,
  ed = tt.unstable_ImmediatePriority,
  Ih = tt.unstable_UserBlockingPriority,
  ai = tt.unstable_NormalPriority,
  k1 = tt.unstable_LowPriority,
  Ah = tt.unstable_IdlePriority,
  Bi = null,
  Wt = null;

function R1(e) {
  if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
    Wt.onCommitFiberRoot(Bi, e, void 0, (e.current.flags & 128) === 128)
  } catch {}
}
var Pt = Math.clz32 ? Math.clz32 : A1,
  T1 = Math.log,
  I1 = Math.LN2;

function A1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (T1(e) / I1 | 0) | 0
}
var ga = 64,
  va = 4194304;

function is(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e
  }
}

function ii(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? r = is(l) : (s &= a, s !== 0 && (r = is(s)))
  } else a = n & ~o, a !== 0 ? r = is(a) : s !== 0 && (r = is(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o ===
      16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Pt(t), o = 1 << n, r |=
      e[n], t &= ~o;
  return r
}

function _1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1
  }
}

function M1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e
      .pendingLanes; 0 < s;) {
    var a = 31 - Pt(s),
      l = 1 << a,
      c = o[a];
    c === -1 ? (!(l & n) || l & r) && (o[a] = _1(l, t)) : c <= t && (e
      .expiredLanes |= l), s &= ~l
  }
}

function Vc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ?
    1073741824 : 0
}

function _h() {
  var e = ga;
  return ga <<= 1, !(ga & 4194240) && (ga = 64), e
}

function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t
}

function Xs(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes =
    0), e = e.eventTimes, t = 31 - Pt(t), e[t] = n
}

function O1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &=
    t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - Pt(n),
      s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s
  }
}

function td(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - Pt(n),
      o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o
  }
}
var re = 0;

function Mh(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Oh, nd, Lh, Dh, Fh, Hc = !1,
  xa = [],
  Bn = null,
  zn = null,
  Un = null,
  Cs = new Map,
  Ss = new Map,
  Rn = [],
  L1 =
  "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit"
  .split(" ");

function Hf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Bn = null;
      break;
    case "dragenter":
    case "dragleave":
      zn = null;
      break;
    case "mouseover":
    case "mouseout":
      Un = null;
      break;
    case "pointerover":
    case "pointerout":
      Cs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ss.delete(t.pointerId)
  }
}

function Yo(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: s,
    targetContainers: [o]
  }, t !== null && (t = Js(t), t !== null && nd(t)), e) : (e
    .eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(
    o) === -1 && t.push(o), e)
}

function D1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Bn = Yo(Bn, e, t, n, r, o), !0;
    case "dragenter":
      return zn = Yo(zn, e, t, n, r, o), !0;
    case "mouseover":
      return Un = Yo(Un, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return Cs.set(s, Yo(Cs.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, Ss.set(s, Yo(Ss.get(s) || null, e, t, n, r, o)), !
        0
  }
  return !1
}

function $h(e) {
  var t = cr(e.target);
  if (t !== null) {
    var n = Tr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ph(n), t !== null) {
          e.blockedOn = t, Fh(e.priority, function() {
            Lh(n)
          });
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  e.blockedOn = null
}

function Ua(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = Wc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      $c = r, n.target.dispatchEvent(r), $c = null
    } else return t = Js(n), t !== null && nd(t), e.blockedOn = n, !1;
    t.shift()
  }
  return !0
}

function Wf(e, t, n) {
  Ua(e) && n.delete(t)
}

function F1() {
  Hc = !1, Bn !== null && Ua(Bn) && (Bn = null), zn !== null && Ua(zn) && (zn =
    null), Un !== null && Ua(Un) && (Un = null), Cs.forEach(Wf), Ss.forEach(
    Wf)
}

function Jo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Hc || (Hc = !0, tt
    .unstable_scheduleCallback(tt.unstable_NormalPriority, F1)))
}

function js(e) {
  function t(o) {
    return Jo(o, e)
  }
  if (0 < xa.length) {
    Jo(xa[0], e);
    for (var n = 1; n < xa.length; n++) {
      var r = xa[n];
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (Bn !== null && Jo(Bn, e), zn !== null && Jo(zn, e), Un !== null && Jo(Un,
      e), Cs.forEach(t), Ss.forEach(t), n = 0; n < Rn.length; n++) r = Rn[n], r
    .blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rn.length && (n = Rn[0], n.blockedOn === null);) $h(n), n
    .blockedOn === null && Rn.shift()
}
var io = mn.ReactCurrentBatchConfig,
  li = !0;

function $1(e, t, n, r) {
  var o = re,
    s = io.transition;
  io.transition = null;
  try {
    re = 1, rd(e, t, n, r)
  } finally {
    re = o, io.transition = s
  }
}

function B1(e, t, n, r) {
  var o = re,
    s = io.transition;
  io.transition = null;
  try {
    re = 4, rd(e, t, n, r)
  } finally {
    re = o, io.transition = s
  }
}

function rd(e, t, n, r) {
  if (li) {
    var o = Wc(e, t, n, r);
    if (o === null) ql(e, t, r, ci, n), Hf(e, r);
    else if (D1(o, e, t, n, r)) r.stopPropagation();
    else if (Hf(e, r), t & 4 && -1 < L1.indexOf(e)) {
      for (; o !== null;) {
        var s = Js(o);
        if (s !== null && Oh(s), s = Wc(e, t, n, r), s === null && ql(e, t, r,
            ci, n), s === o) break;
        o = s
      }
      o !== null && r.stopPropagation()
    } else ql(e, t, r, null, n)
  }
}
var ci = null;

function Wc(e, t, n, r) {
  if (ci = null, e = Zu(r), e = cr(e), e !== null)
    if (t = Tr(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
    if (e = Ph(t), e !== null) return e;
    e = null
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t
      .stateNode.containerInfo : null;
    e = null
  } else t !== e && (e = null);
  return ci = e, null
}

function Bh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (P1()) {
        case ed:
          return 1;
        case Ih:
          return 4;
        case ai:
        case k1:
          return 16;
        case Ah:
          return 536870912;
        default:
          return 16
      }
    default:
      return 16
  }
}
var Ln = null,
  od = null,
  Va = null;

function zh() {
  if (Va) return Va;
  var e, t = od,
    n = t.length,
    r, o = "value" in Ln ? Ln.value : Ln.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[s - r]; r++);
  return Va = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Ha(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) :
    e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function ya() {
  return !0
}

function Qf() {
  return !1
}

function rt(e) {
  function t(n, r, o, s, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent =
      s, this.target = a, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[
      l]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s
        .defaultPrevented : s.returnValue === !1) ? ya : Qf, this
      .isPropagationStopped = Qf, this
  }
  return he(t.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n
        .returnValue != "unknown" && (n.returnValue = !1), this
        .isDefaultPrevented = ya)
    },
    stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n
        .cancelBubble != "unknown" && (n.cancelBubble = !0), this
        .isPropagationStopped = ya)
    },
    persist: function() {},
    isPersistent: ya
  }), t
}
var Do = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  sd = rt(Do),
  Ys = he({}, Do, {
    view: 0,
    detail: 0
  }),
  z1 = rt(Ys),
  $l, Bl, Zo, zi = he({}, Ys, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ad,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e
        .toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Zo && (Zo && e.type ===
        "mousemove" ? ($l = e.screenX - Zo.screenX, Bl = e.screenY - Zo
          .screenY) : Bl = $l = 0, Zo = e), $l)
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Bl
    }
  }),
  Gf = rt(zi),
  U1 = he({}, zi, {
    dataTransfer: 0
  }),
  V1 = rt(U1),
  H1 = he({}, Ys, {
    relatedTarget: 0
  }),
  zl = rt(H1),
  W1 = he({}, Do, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Q1 = rt(W1),
  G1 = he({}, Do, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
  }),
  q1 = rt(G1),
  K1 = he({}, Do, {
    data: 0
  }),
  qf = rt(K1),
  X1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  Y1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  J1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };

function Z1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = J1[e]) ? !!t[e] : !1
}

function ad() {
  return Z1
}
var ew = he({}, Ys, {
    key: function(e) {
      if (e.key) {
        var t = X1[e.key] || e.key;
        if (t !== "Unidentified") return t
      }
      return e.type === "keypress" ? (e = Ha(e), e === 13 ? "Enter" : String
          .fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ?
        Y1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ad,
    charCode: function(e) {
      return e.type === "keypress" ? Ha(e) : 0
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
      return e.type === "keypress" ? Ha(e) : e.type === "keydown" || e
        .type === "keyup" ? e.keyCode : 0
    }
  }),
  tw = rt(ew),
  nw = he({}, zi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Kf = rt(nw),
  rw = he({}, Ys, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ad
  }),
  ow = rt(rw),
  sw = he({}, Do, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  aw = rt(sw),
  iw = he({}, zi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e
        .wheelDeltaX : 0
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e
        .wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  lw = rt(iw),
  cw = [9, 13, 27, 32],
  id = ln && "CompositionEvent" in window,
  ds = null;
ln && "documentMode" in document && (ds = document.documentMode);
var uw = ln && "TextEvent" in window && !ds,
  Uh = ln && (!id || ds && 8 < ds && 11 >= ds),
  Xf = " ",
  Yf = !1;

function Vh(e, t) {
  switch (e) {
    case "keyup":
      return cw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}

function Hh(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Gr = !1;

function dw(e, t) {
  switch (e) {
    case "compositionend":
      return Hh(t);
    case "keypress":
      return t.which !== 32 ? null : (Yf = !0, Xf);
    case "textInput":
      return e = t.data, e === Xf && Yf ? null : e;
    default:
      return null
  }
}

function fw(e, t) {
  if (Gr) return e === "compositionend" || !id && Vh(e, t) ? (e = zh(), Va =
    od = Ln = null, Gr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which)
      }
      return null;
    case "compositionend":
      return Uh && t.locale !== "ko" ? null : t.data;
    default:
      return null
  }
}
var pw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function Jf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pw[e.type] : t === "textarea"
}

function Wh(e, t, n, r) {
  Nh(r), t = ui(t, "onChange"), 0 < t.length && (n = new sd("onChange",
    "change", null, n, r), e.push({
    event: n,
    listeners: t
  }))
}
var fs = null,
  Ps = null;

function mw(e) {
  ng(e, 0)
}

function Ui(e) {
  var t = Xr(e);
  if (hh(t)) return e
}

function hw(e, t) {
  if (e === "change") return t
}
var Qh = !1;
if (ln) {
  var Ul;
  if (ln) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var Zf = document.createElement("div");
      Zf.setAttribute("oninput", "return;"), Vl = typeof Zf.oninput ==
        "function"
    }
    Ul = Vl
  } else Ul = !1;
  Qh = Ul && (!document.documentMode || 9 < document.documentMode)
}

function ep() {
  fs && (fs.detachEvent("onpropertychange", Gh), Ps = fs = null)
}

function Gh(e) {
  if (e.propertyName === "value" && Ui(Ps)) {
    var t = [];
    Wh(t, Ps, e, Zu(e)), jh(mw, t)
  }
}

function gw(e, t, n) {
  e === "focusin" ? (ep(), fs = t, Ps = n, fs.attachEvent("onpropertychange",
    Gh)) : e === "focusout" && ep()
}

function vw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ui(Ps)
}

function xw(e, t) {
  if (e === "click") return Ui(t)
}

function yw(e, t) {
  if (e === "input" || e === "change") return Ui(t)
}

function ww(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Rt = typeof Object.is == "function" ? Object.is : ww;

function ks(e, t) {
  if (Rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Pc.call(t, o) || !Rt(e[o], t[o])) return !1
  }
  return !0
}

function tp(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e
}

function np(e, t) {
  var n = tp(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return {
        node: n,
        offset: t - e
      };
      e = r
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = tp(n)
  }
}

function qh(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t
    .nodeType === 3 ? qh(e, t.parentNode) : "contains" in e ? e.contains(t) : e
    .compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Kh() {
  for (var e = window, t = ri(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow;
    else break;
    t = ri(e.document)
  }
  return t
}

function ld(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e
      .type === "tel" || e.type === "url" || e.type === "password") || t ===
    "textarea" || e.contentEditable === "true")
}

function bw(e) {
  var t = Kh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && qh(n.ownerDocument.documentElement,
    n)) {
    if (r !== null && ld(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in
        n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
        e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (
          o = r, r = s, s = o), o = np(n, s);
        var a = np(n, r);
        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e
          .anchorOffset !== o.offset || e.focusNode !== a.node || e
          .focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o
          .node, o.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e
          .extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e
          .addRange(t)))
      }
    }
    for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
      element: e,
      left: e.scrollLeft,
      top: e.scrollTop
    });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
  }
}
var Nw = ln && "documentMode" in document && 11 >= document.documentMode,
  qr = null,
  Qc = null,
  ps = null,
  Gc = !1;

function rp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gc || qr == null || qr !== ri(r) || (r = qr, "selectionStart" in r && ld(r) ?
    r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window)
      .getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
      }), ps && ks(ps, r) || (ps = r, r = ui(Qc, "onSelect"), 0 < r.length &&
      (t = new sd("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
      }), t.target = qr)))
}

function wa(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t, n
}
var Kr = {
    animationend: wa("Animation", "AnimationEnd"),
    animationiteration: wa("Animation", "AnimationIteration"),
    animationstart: wa("Animation", "AnimationStart"),
    transitionend: wa("Transition", "TransitionEnd")
  },
  Hl = {},
  Xh = {};
ln && (Xh = document.createElement("div").style, "AnimationEvent" in window || (
    delete Kr.animationend.animation, delete Kr.animationiteration.animation,
    delete Kr.animationstart.animation), "TransitionEvent" in window ||
  delete Kr.transitionend.transition);

function Vi(e) {
  if (Hl[e]) return Hl[e];
  if (!Kr[e]) return e;
  var t = Kr[e],
    n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Xh) return Hl[e] = t[n];
  return e
}
var Yh = Vi("animationend"),
  Jh = Vi("animationiteration"),
  Zh = Vi("animationstart"),
  eg = Vi("transitionend"),
  tg = new Map,
  op =
  "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel"
  .split(" ");

function Jn(e, t) {
  tg.set(e, t), Rr(t, [e])
}
for (var Wl = 0; Wl < op.length; Wl++) {
  var Ql = op[Wl],
    Ew = Ql.toLowerCase(),
    Cw = Ql[0].toUpperCase() + Ql.slice(1);
  Jn(Ew, "on" + Cw)
}
Jn(Yh, "onAnimationEnd");
Jn(Jh, "onAnimationIteration");
Jn(Zh, "onAnimationStart");
Jn("dblclick", "onDoubleClick");
Jn("focusin", "onFocus");
Jn("focusout", "onBlur");
Jn(eg, "onTransitionEnd");
Eo("onMouseEnter", ["mouseout", "mouseover"]);
Eo("onMouseLeave", ["mouseout", "mouseover"]);
Eo("onPointerEnter", ["pointerout", "pointerover"]);
Eo("onPointerLeave", ["pointerout", "pointerover"]);
Rr("onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " "));
Rr("onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange"
  .split(" "));
Rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rr("onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rr("onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rr("onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ls =
  "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting"
  .split(" "),
  Sw = new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));

function sp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, E1(r, t, void 0, e), e.currentTarget = null
}

function ng(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            c = l.instance,
            u = l.currentTarget;
          if (l = l.listener, c !== s && o.isPropagationStopped()) break e;
          sp(o, l, u), s = c
        } else
          for (a = 0; a < r.length; a++) {
            if (l = r[a], c = l.instance, u = l.currentTarget, l = l.listener,
              c !== s && o.isPropagationStopped()) break e;
            sp(o, l, u), s = c
          }
    }
  }
  if (si) throw e = Uc, si = !1, Uc = null, e
}

function ce(e, t) {
  var n = t[Jc];
  n === void 0 && (n = t[Jc] = new Set);
  var r = e + "__bubble";
  n.has(r) || (rg(t, e, 2, !1), n.add(r))
}

function Gl(e, t, n) {
  var r = 0;
  t && (r |= 4), rg(n, e, r, t)
}
var ba = "_reactListening" + Math.random().toString(36).slice(2);

function Rs(e) {
  if (!e[ba]) {
    e[ba] = !0, uh.forEach(function(n) {
      n !== "selectionchange" && (Sw.has(n) || Gl(n, !1, e), Gl(n, !0, e))
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ba] || (t[ba] = !0, Gl("selectionchange", !1, t))
  }
}

function rg(e, t, n, r) {
  switch (Bh(t)) {
    case 1:
      var o = $1;
      break;
    case 4:
      o = B1;
      break;
    default:
      o = rd
  }
  n = o.bind(null, t, n, e), o = void 0, !zc || t !== "touchstart" && t !==
    "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e
    .addEventListener(t, n, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t,
    n, {
      passive: o
    }) : e.addEventListener(t, n, !1)
}

function ql(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var l = r.stateNode.containerInfo;
      if (l === o || l.nodeType === 8 && l.parentNode === o) break;
      if (a === 4)
        for (a = r.return; a !== null;) {
          var c = a.tag;
          if ((c === 3 || c === 4) && (c = a.stateNode.containerInfo, c ===
              o || c.nodeType === 8 && c.parentNode === o)) return;
          a = a.return
        }
      for (; l !== null;) {
        if (a = cr(l), a === null) return;
        if (c = a.tag, c === 5 || c === 6) {
          r = s = a;
          continue e
        }
        l = l.parentNode
      }
    }
    r = r.return
  }
  jh(function() {
    var u = s,
      d = Zu(n),
      p = [];
    e: {
      var v = tg.get(e);
      if (v !== void 0) {
        var f = sd,
          b = e;
        switch (e) {
          case "keypress":
            if (Ha(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = tw;
            break;
          case "focusin":
            b = "focus", f = zl;
            break;
          case "focusout":
            b = "blur", f = zl;
            break;
          case "beforeblur":
          case "afterblur":
            f = zl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = Gf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = V1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = ow;
            break;
          case Yh:
          case Jh:
          case Zh:
            f = Q1;
            break;
          case eg:
            f = aw;
            break;
          case "scroll":
            f = z1;
            break;
          case "wheel":
            f = lw;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = q1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = Kf
        }
        var h = (t & 4) !== 0,
          y = !h && e === "scroll",
          x = h ? v !== null ? v + "Capture" : null : v;
        h = [];
        for (var g = u, w; g !== null;) {
          w = g;
          var N = w.stateNode;
          if (w.tag === 5 && N !== null && (w = N, x !== null && (N = Es(
              g, x), N != null && h.push(Ts(g, N, w)))), y) break;
          g = g.return
        }
        0 < h.length && (v = new f(v, b, null, n, d), p.push({
          event: v,
          listeners: h
        }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", f = e ===
          "mouseout" || e === "pointerout", v && n !== $c && (b = n
            .relatedTarget || n.fromElement) && (cr(b) || b[cn])) break e;
        if ((f || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v
            .defaultView || v.parentWindow : window, f ? (b = n
              .relatedTarget || n.toElement, f = u, b = b ? cr(b) : null,
              b !== null && (y = Tr(b), b !== y || b.tag !== 5 && b.tag !==
                6) && (b = null)) : (f = null, b = u), f !== b)) {
          if (h = Gf, N = "onMouseLeave", x = "onMouseEnter", g = "mouse", (
              e === "pointerout" || e === "pointerover") && (h = Kf, N =
              "onPointerLeave", x = "onPointerEnter", g = "pointer"), y =
            f == null ? v : Xr(f), w = b == null ? v : Xr(b), v = new h(N,
              g + "leave", f, n, d), v.target = y, v.relatedTarget = w, N =
            null, cr(d) === u && (h = new h(x, g + "enter", b, n, d), h
              .target = w, h.relatedTarget = y, N = h), y = N, f && b) t: {
            for (h = f, x = b, g = 0, w = h; w; w = Fr(w)) g++;
            for (w = 0, N = x; N; N = Fr(N)) w++;
            for (; 0 < g - w;) h = Fr(h),
            g--;
            for (; 0 < w - g;) x = Fr(x),
            w--;
            for (; g--;) {
              if (h === x || x !== null && h === x.alternate) break t;
              h = Fr(h), x = Fr(x)
            }
            h = null
          }
          else h = null;
          f !== null && ap(p, v, f, h, !1), b !== null && y !== null && ap(
            p, y, b, h, !0)
        }
      }
      e: {
        if (v = u ? Xr(u) : window, f = v.nodeName && v.nodeName
          .toLowerCase(), f === "select" || f === "input" && v.type ===
          "file") var E = hw;
        else if (Jf(v))
          if (Qh) E = yw;
          else {
            E = vw;
            var S = gw
          }
        else(f = v.nodeName) && f.toLowerCase() === "input" && (v.type ===
          "checkbox" || v.type === "radio") && (E = xw);
        if (E && (E = E(e, u))) {
          Wh(p, E, n, d);
          break e
        }
        S && S(e, v, u),
        e === "focusout" && (S = v._wrapperState) && S.controlled && v
        .type === "number" && Mc(v, "number", v.value)
      }
      switch (S = u ? Xr(u) : window, e) {
        case "focusin":
          (Jf(S) || S.contentEditable === "true") && (qr = S, Qc = u, ps =
            null);
          break;
        case "focusout":
          ps = Qc = qr = null;
          break;
        case "mousedown":
          Gc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gc = !1, rp(p, n, d);
          break;
        case "selectionchange":
          if (Nw) break;
        case "keydown":
        case "keyup":
          rp(p, n, d)
      }
      var j;
      if (id) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e
        }
        C = void 0
      }
      else Gr ? Vh(e, n) && (C = "onCompositionEnd") : e === "keydown" && n
        .keyCode === 229 && (C = "onCompositionStart");C && (Uh && n
        .locale !== "ko" && (Gr || C !== "onCompositionStart" ? C ===
          "onCompositionEnd" && Gr && (j = zh()) : (Ln = d, od = "value" in
            Ln ? Ln.value : Ln.textContent, Gr = !0)), S = ui(u, C), 0 < S
        .length && (C = new qf(C, e, null, n, d), p.push({
          event: C,
          listeners: S
        }), j ? C.data = j : (j = Hh(n), j !== null && (C.data = j)))),
      (j = uw ? dw(e, n) : fw(e, n)) && (u = ui(u, "onBeforeInput"), 0 < u
        .length && (d = new qf("onBeforeInput", "beforeinput", null, n, d),
          p.push({
            event: d,
            listeners: u
          }), d.data = j))
    }
    ng(p, t)
  })
}

function Ts(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  }
}

function ui(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = Es(e, n), s != null && r.unshift(
        Ts(e, s, o)), s = Es(e, t), s != null && r.push(Ts(e, s, o))), e = e
      .return
  }
  return r
}

function Fr(e) {
  if (e === null) return null;
  do e = e.return; while (e && e.tag !== 5);
  return e || null
}

function ap(e, t, n, r, o) {
  for (var s = t._reactName, a = []; n !== null && n !== r;) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (c = Es(n, s), c != null && a
      .unshift(Ts(n, c, l))) : o || (c = Es(n, s), c != null && a.push(Ts(n,
      c, l)))), n = n.return
  }
  a.length !== 0 && e.push({
    event: t,
    listeners: a
  })
}
var jw = /\r\n?/g,
  Pw = /\u0000|\uFFFD/g;

function ip(e) {
  return (typeof e == "string" ? e : "" + e).replace(jw, `
`).replace(Pw, "")
}

function Na(e, t, n) {
  if (t = ip(t), ip(e) !== t && n) throw Error(L(425))
}

function di() {}
var qc = null,
  Kc = null;

function Xc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children ==
    "string" || typeof t.children == "number" || typeof t
    .dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !==
    null && t.dangerouslySetInnerHTML.__html != null
}
var Yc = typeof setTimeout == "function" ? setTimeout : void 0,
  kw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  lp = typeof Promise == "function" ? Promise : void 0,
  Rw = typeof queueMicrotask == "function" ? queueMicrotask : typeof lp < "u" ?
  function(e) {
    return lp.resolve(null).then(e).catch(Tw)
  } : Yc;

function Tw(e) {
  setTimeout(function() {
    throw e
  })
}

function Kl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), js(t);
          return
        }
        r--
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o
  } while (n);
  js(t)
}

function Vn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null
    }
  }
  return e
}

function cp(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var Fo = Math.random().toString(36).slice(2),
  Ut = "__reactFiber$" + Fo,
  Is = "__reactProps$" + Fo,
  cn = "__reactContainer$" + Fo,
  Jc = "__reactEvents$" + Fo,
  Iw = "__reactListeners$" + Fo,
  Aw = "__reactHandles$" + Fo;

function cr(e) {
  var t = e[Ut];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if (t = n[cn] || n[Ut]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = cp(e); e !== null;) {
          if (n = e[Ut]) return n;
          e = cp(e)
        }
      return t
    }
    e = n, n = e.parentNode
  }
  return null
}

function Js(e) {
  return e = e[Ut] || e[cn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 &&
    e.tag !== 3 ? null : e
}

function Xr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33))
}

function Hi(e) {
  return e[Is] || null
}
var Zc = [],
  Yr = -1;

function Zn(e) {
  return {
    current: e
  }
}

function ue(e) {
  0 > Yr || (e.current = Zc[Yr], Zc[Yr] = null, Yr--)
}

function ae(e, t) {
  Yr++, Zc[Yr] = e.current, e.current = t
}
var Kn = {},
  De = Zn(Kn),
  Ge = Zn(!1),
  Nr = Kn;

function Co(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r
    .__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext =
    t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function qe(e) {
  return e = e.childContextTypes, e != null
}

function fi() {
  ue(Ge), ue(De)
}

function up(e, t, n) {
  if (De.current !== Kn) throw Error(L(168));
  ae(De, t), ae(Ge, n)
}

function og(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t)) throw Error(L(108, g1(e) || "Unknown", o));
  return he({}, n, r)
}

function pi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext ||
    Kn, Nr = De.current, ae(De, e), ae(Ge, Ge.current), !0
}

function dp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n ? (e = og(e, t, Nr), r.__reactInternalMemoizedMergedChildContext = e, ue(
    Ge), ue(De), ae(De, e)) : ue(Ge), ae(Ge, n)
}
var nn = null,
  Wi = !1,
  Xl = !1;

function sg(e) {
  nn === null ? nn = [e] : nn.push(e)
}

function _w(e) {
  Wi = !0, sg(e)
}

function er() {
  if (!Xl && nn !== null) {
    Xl = !0;
    var e = 0,
      t = re;
    try {
      var n = nn;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0); while (r !== null)
      }
      nn = null, Wi = !1
    } catch (o) {
      throw nn !== null && (nn = nn.slice(e + 1)), Th(ed, er), o
    } finally {
      re = t, Xl = !1
    }
  }
  return null
}
var Jr = [],
  Zr = 0,
  mi = null,
  hi = 0,
  ct = [],
  ut = 0,
  Er = null,
  on = 1,
  sn = "";

function ir(e, t) {
  Jr[Zr++] = hi, Jr[Zr++] = mi, mi = e, hi = t
}

function ag(e, t, n) {
  ct[ut++] = on, ct[ut++] = sn, ct[ut++] = Er, Er = e;
  var r = on;
  e = sn;
  var o = 32 - Pt(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - Pt(t) + o;
  if (30 < s) {
    var a = o - o % 5;
    s = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, on = 1 << 32 - Pt(t) +
      o | n << o | r, sn = s + e
  } else on = 1 << s | n << o | r, sn = e
}

function cd(e) {
  e.return !== null && (ir(e, 1), ag(e, 1, 0))
}

function ud(e) {
  for (; e === mi;) mi = Jr[--Zr], Jr[Zr] = null, hi = Jr[--Zr], Jr[Zr] = null;
  for (; e === Er;) Er = ct[--ut], ct[ut] = null, sn = ct[--ut], ct[ut] = null,
    on = ct[--ut], ct[ut] = null
}
var Ze = null,
  Je = null,
  fe = !1,
  jt = null;

function ig(e, t) {
  var n = ft(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions,
    t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function fp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName
      .toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ze = e, Je =
        Vn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !==
        null ? (e.stateNode = t, Ze = e, Je = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Er !== null ? {
          id: on,
          overflow: sn
        } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child =
        n, Ze = e, Je = null, !0) : !1;
    default:
      return !1
  }
}

function eu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function tu(e) {
  if (fe) {
    var t = Je;
    if (t) {
      var n = t;
      if (!fp(e, t)) {
        if (eu(e)) throw Error(L(418));
        t = Vn(n.nextSibling);
        var r = Ze;
        t && fp(e, t) ? ig(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, Ze =
          e)
      }
    } else {
      if (eu(e)) throw Error(L(418));
      e.flags = e.flags & -4097 | 2, fe = !1, Ze = e
    }
  }
}

function pp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  Ze = e
}

function Ea(e) {
  if (e !== Ze) return !1;
  if (!fe) return pp(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !==
      "head" && t !== "body" && !Xc(e.type, e.memoizedProps)), t && (t = Je)) {
    if (eu(e)) throw lg(), Error(L(418));
    for (; t;) ig(e, t), t = Vn(t.nextSibling)
  }
  if (pp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
    throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = Vn(e.nextSibling);
              break e
            }
            t--
          } else n !== "$" && n !== "$!" && n !== "$?" || t++
        }
        e = e.nextSibling
      }
      Je = null
    }
  } else Je = Ze ? Vn(e.stateNode.nextSibling) : null;
  return !0
}

function lg() {
  for (var e = Je; e;) e = Vn(e.nextSibling)
}

function So() {
  Je = Ze = null, fe = !1
}

function dd(e) {
  jt === null ? jt = [e] : jt.push(e)
}
var Mw = mn.ReactCurrentBatchConfig;

function es(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref
        ._stringRef === s ? t.ref : (t = function(a) {
          var l = o.refs;
          a === null ? delete l[s] : l[s] = a
        }, t._stringRef = s, t)
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e))
  }
  return e
}

function Ca(e, t) {
  throw e = Object.prototype.toString.call(t), Error(L(31, e ===
    "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") +
    "}" : e))
}

function mp(e) {
  var t = e._init;
  return t(e._payload)
}

function cg(e) {
  function t(x, g) {
    if (e) {
      var w = x.deletions;
      w === null ? (x.deletions = [g], x.flags |= 16) : w.push(g)
    }
  }

  function n(x, g) {
    if (!e) return null;
    for (; g !== null;) t(x, g), g = g.sibling;
    return null
  }

  function r(x, g) {
    for (x = new Map; g !== null;) g.key !== null ? x.set(g.key, g) : x.set(g
      .index, g), g = g.sibling;
    return x
  }

  function o(x, g) {
    return x = Gn(x, g), x.index = 0, x.sibling = null, x
  }

  function s(x, g, w) {
    return x.index = w, e ? (w = x.alternate, w !== null ? (w = w.index, w < g ?
      (x.flags |= 2, g) : w) : (x.flags |= 2, g)) : (x.flags |= 1048576, g)
  }

  function a(x) {
    return e && x.alternate === null && (x.flags |= 2), x
  }

  function l(x, g, w, N) {
    return g === null || g.tag !== 6 ? (g = rc(w, x.mode, N), g.return = x, g) :
      (g = o(g, w), g.return = x, g)
  }

  function c(x, g, w, N) {
    var E = w.type;
    return E === Qr ? d(x, g, w.props.children, N, w.key) : g !== null && (g
      .elementType === E || typeof E == "object" && E !== null && E
      .$$typeof === Pn && mp(E) === g.type) ? (N = o(g, w.props), N.ref = es(
      x, g, w), N.return = x, N) : (N = Ya(w.type, w.key, w.props, null, x
      .mode, N), N.ref = es(x, g, w), N.return = x, N)
  }

  function u(x, g, w, N) {
    return g === null || g.tag !== 4 || g.stateNode.containerInfo !== w
      .containerInfo || g.stateNode.implementation !== w.implementation ? (g =
        oc(w, x.mode, N), g.return = x, g) : (g = o(g, w.children || []), g
        .return = x, g)
  }

  function d(x, g, w, N, E) {
    return g === null || g.tag !== 7 ? (g = wr(w, x.mode, N, E), g.return = x,
      g) : (g = o(g, w), g.return = x, g)
  }

  function p(x, g, w) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return g = rc(
      "" + g, x.mode, w), g.return = x, g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case pa:
          return w = Ya(g.type, g.key, g.props, null, x.mode, w), w.ref = es(x,
            null, g), w.return = x, w;
        case Wr:
          return g = oc(g, x.mode, w), g.return = x, g;
        case Pn:
          var N = g._init;
          return p(x, N(g._payload), w)
      }
      if (as(g) || Ko(g)) return g = wr(g, x.mode, w, null), g.return = x, g;
      Ca(x, g)
    }
    return null
  }

  function v(x, g, w, N) {
    var E = g !== null ? g.key : null;
    if (typeof w == "string" && w !== "" || typeof w == "number") return E !==
      null ? null : l(x, g, "" + w, N);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case pa:
          return w.key === E ? c(x, g, w, N) : null;
        case Wr:
          return w.key === E ? u(x, g, w, N) : null;
        case Pn:
          return E = w._init, v(x, g, E(w._payload), N)
      }
      if (as(w) || Ko(w)) return E !== null ? null : d(x, g, w, N, null);
      Ca(x, w)
    }
    return null
  }

  function f(x, g, w, N, E) {
    if (typeof N == "string" && N !== "" || typeof N == "number") return x = x
      .get(w) || null, l(g, x, "" + N, E);
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case pa:
          return x = x.get(N.key === null ? w : N.key) || null, c(g, x, N, E);
        case Wr:
          return x = x.get(N.key === null ? w : N.key) || null, u(g, x, N, E);
        case Pn:
          var S = N._init;
          return f(x, g, w, S(N._payload), E)
      }
      if (as(N) || Ko(N)) return x = x.get(w) || null, d(g, x, N, E, null);
      Ca(g, N)
    }
    return null
  }

  function b(x, g, w, N) {
    for (var E = null, S = null, j = g, C = g = 0, P = null; j !== null && C < w
      .length; C++) {
      j.index > C ? (P = j, j = null) : P = j.sibling;
      var T = v(x, j, w[C], N);
      if (T === null) {
        j === null && (j = P);
        break
      }
      e && j && T.alternate === null && t(x, j), g = s(T, g, C), S === null ?
        E = T : S.sibling = T, S = T, j = P
    }
    if (C === w.length) return n(x, j), fe && ir(x, C), E;
    if (j === null) {
      for (; C < w.length; C++) j = p(x, w[C], N), j !== null && (g = s(j, g,
        C), S === null ? E = j : S.sibling = j, S = j);
      return fe && ir(x, C), E
    }
    for (j = r(x, j); C < w.length; C++) P = f(j, x, C, w[C], N), P !== null &&
      (e && P.alternate !== null && j.delete(P.key === null ? C : P.key), g = s(
        P, g, C), S === null ? E = P : S.sibling = P, S = P);
    return e && j.forEach(function(O) {
      return t(x, O)
    }), fe && ir(x, C), E
  }

  function h(x, g, w, N) {
    var E = Ko(w);
    if (typeof E != "function") throw Error(L(150));
    if (w = E.call(w), w == null) throw Error(L(151));
    for (var S = E = null, j = g, C = g = 0, P = null, T = w.next(); j !==
      null && !T.done; C++, T = w.next()) {
      j.index > C ? (P = j, j = null) : P = j.sibling;
      var O = v(x, j, T.value, N);
      if (O === null) {
        j === null && (j = P);
        break
      }
      e && j && O.alternate === null && t(x, j), g = s(O, g, C), S === null ?
        E = O : S.sibling = O, S = O, j = P
    }
    if (T.done) return n(x, j), fe && ir(x, C), E;
    if (j === null) {
      for (; !T.done; C++, T = w.next()) T = p(x, T.value, N), T !== null && (
        g = s(T, g, C), S === null ? E = T : S.sibling = T, S = T);
      return fe && ir(x, C), E
    }
    for (j = r(x, j); !T.done; C++, T = w.next()) T = f(j, x, C, T.value, N),
      T !== null && (e && T.alternate !== null && j.delete(T.key === null ? C :
        T.key), g = s(T, g, C), S === null ? E = T : S.sibling = T, S = T);
    return e && j.forEach(function(M) {
      return t(x, M)
    }), fe && ir(x, C), E
  }

  function y(x, g, w, N) {
    if (typeof w == "object" && w !== null && w.type === Qr && w.key === null &&
      (w = w.props.children), typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case pa:
          e: {
            for (var E = w.key, S = g; S !== null;) {
              if (S.key === E) {
                if (E = w.type, E === Qr) {
                  if (S.tag === 7) {
                    n(x, S.sibling), g = o(S, w.props.children), g.return = x,
                      x = g;
                    break e
                  }
                } else if (S.elementType === E || typeof E == "object" &&
                  E !== null && E.$$typeof === Pn && mp(E) === S.type) {
                  n(x, S.sibling), g = o(S, w.props), g.ref = es(x, S, w), g
                    .return = x, x = g;
                  break e
                }
                n(x, S);
                break
              } else t(x, S);
              S = S.sibling
            }
            w.type === Qr ? (g = wr(w.props.children, x.mode, N, w.key), g
              .return = x, x = g) : (N = Ya(w.type, w.key, w.props, null, x
              .mode, N), N.ref = es(x, g, w), N.return = x, x = N)
          }
          return a(x);
        case Wr:
          e: {
            for (S = w.key; g !== null;) {
              if (g.key === S)
                if (g.tag === 4 && g.stateNode.containerInfo === w
                  .containerInfo && g.stateNode.implementation === w
                  .implementation) {
                  n(x, g.sibling), g = o(g, w.children || []), g.return = x,
                    x = g;
                  break e
                } else {
                  n(x, g);
                  break
                }
              else t(x, g);
              g = g.sibling
            }
            g = oc(w, x.mode, N),
            g.return = x,
            x = g
          }
          return a(x);
        case Pn:
          return S = w._init, y(x, g, S(w._payload), N)
      }
      if (as(w)) return b(x, g, w, N);
      if (Ko(w)) return h(x, g, w, N);
      Ca(x, w)
    }
    return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" +
      w, g !== null && g.tag === 6 ? (n(x, g.sibling), g = o(g, w), g.return =
        x, x = g) : (n(x, g), g = rc(w, x.mode, N), g.return = x, x = g), a(x)
      ) : n(x, g)
  }
  return y
}
var jo = cg(!0),
  ug = cg(!1),
  gi = Zn(null),
  vi = null,
  eo = null,
  fd = null;

function pd() {
  fd = eo = vi = null
}

function md(e) {
  var t = gi.current;
  ue(gi), e._currentValue = t
}

function nu(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r
        .childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r
        .childLanes |= t), e === n) break;
    e = e.return
  }
}

function lo(e, t) {
  vi = e, fd = eo = null, e = e.dependencies, e !== null && e.firstContext !==
    null && (e.lanes & t && (Qe = !0), e.firstContext = null)
}

function mt(e) {
  var t = e._currentValue;
  if (fd !== e)
    if (e = {
        context: e,
        memoizedValue: t,
        next: null
      }, eo === null) {
      if (vi === null) throw Error(L(308));
      eo = e, vi.dependencies = {
        lanes: 0,
        firstContext: e
      }
    } else eo = eo.next = e;
  return t
}
var ur = null;

function hd(e) {
  ur === null ? ur = [e] : ur.push(e)
}

function dg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, hd(t)) : (n.next = o.next, o.next = n), t
    .interleaved = n, un(e, r)
}

function un(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e
    .childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e,
    e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var kn = !1;

function gd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  }
}

function fg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    effects: e.effects
  })
}

function an(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}

function Hn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending =
      t, un(e, n)
  }
  return o = r.interleaved, o === null ? (t.next = t, hd(r)) : (t.next = o.next,
    o.next = t), r.interleaved = t, un(e, n)
}

function Wa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, td(e, n)
  }
}

function hp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null,
      s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        s === null ? o = s = a : s = s.next = a, n = n.next
      } while (n !== null);
      s === null ? o = s = t : s = s.next = t
    } else o = s = t;
    n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects
    }, e.updateQueue = n;
    return
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n
    .lastBaseUpdate = t
}

function xi(e, t, n, r) {
  var o = e.updateQueue;
  kn = !1;
  var s = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var c = l,
      u = c.next;
    c.next = null, a === null ? s = u : a.next = u, a = c;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== a && (l ===
      null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = c))
  }
  if (s !== null) {
    var p = o.baseState;
    a = 0, d = u = c = null, l = s;
    do {
      var v = l.lane,
        f = l.eventTime;
      if ((r & v) === v) {
        d !== null && (d = d.next = {
          eventTime: f,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var b = e,
            h = l;
          switch (v = t, f = n, h.tag) {
            case 1:
              if (b = h.payload, typeof b == "function") {
                p = b.call(f, p, v);
                break e
              }
              p = b;
              break e;
            case 3:
              b.flags = b.flags & -65537 | 128;
            case 0:
              if (b = h.payload, v = typeof b == "function" ? b.call(f, p,
                v) : b, v == null) break e;
              p = he({}, p, v);
              break e;
            case 2:
              kn = !0
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, v = o.effects,
          v === null ? o.effects = [l] : v.push(l))
      } else f = {
        eventTime: f,
        lane: v,
        tag: l.tag,
        payload: l.payload,
        callback: l.callback,
        next: null
      }, d === null ? (u = d = f, c = p) : d = d.next = f, a |= v;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared
          .pending = null
      }
    } while (!0);
    if (d === null && (c = p), o.baseState = c, o.firstBaseUpdate = u, o
      .lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do a |= o.lane, o = o.next; while (o !== t)
    } else s === null && (o.shared.lanes = 0);
    Sr |= a, e.lanes = a, e.memoizedState = p
  }
}

function gp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(L(191,
          o));
        o.call(r)
      }
    }
}
var Zs = {},
  Qt = Zn(Zs),
  As = Zn(Zs),
  _s = Zn(Zs);

function dr(e) {
  if (e === Zs) throw Error(L(174));
  return e
}

function vd(e, t) {
  switch (ae(_s, t), ae(As, e), ae(Qt, Zs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Lc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName,
        t = Lc(t, e)
  }
  ue(Qt), ae(Qt, t)
}

function Po() {
  ue(Qt), ue(As), ue(_s)
}

function pg(e) {
  dr(_s.current);
  var t = dr(Qt.current),
    n = Lc(t, e.type);
  t !== n && (ae(As, e), ae(Qt, n))
}

function xd(e) {
  As.current === e && (ue(Qt), ue(As))
}
var pe = Zn(0);

function yi(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n
          .data === "$!")) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return
    }
    t.sibling.return = t.return, t = t.sibling
  }
  return null
}
var Yl = [];

function yd() {
  for (var e = 0; e < Yl.length; e++) Yl[e]._workInProgressVersionPrimary =
  null;
  Yl.length = 0
}
var Qa = mn.ReactCurrentDispatcher,
  Jl = mn.ReactCurrentBatchConfig,
  Cr = 0,
  me = null,
  Ne = null,
  Se = null,
  wi = !1,
  ms = !1,
  Ms = 0,
  Ow = 0;

function _e() {
  throw Error(L(321))
}

function wd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Rt(e[n], t[n])) return !1;
  return !0
}

function bd(e, t, n, r, o, s) {
  if (Cr = s, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0,
    Qa.current = e === null || e.memoizedState === null ? $w : Bw, e = n(r, o),
    ms) {
    s = 0;
    do {
      if (ms = !1, Ms = 0, 25 <= s) throw Error(L(301));
      s += 1, Se = Ne = null, t.updateQueue = null, Qa.current = zw, e = n(r, o)
    } while (ms)
  }
  if (Qa.current = bi, t = Ne !== null && Ne.next !== null, Cr = 0, Se = Ne =
    me = null, wi = !1, t) throw Error(L(300));
  return e
}

function Nd() {
  var e = Ms !== 0;
  return Ms = 0, e
}

function Ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return Se === null ? me.memoizedState = Se = e : Se = Se.next = e, Se
}

function ht() {
  if (Ne === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null
  } else e = Ne.next;
  var t = Se === null ? me.memoizedState : Se.next;
  if (t !== null) Se = t, Ne = e;
  else {
    if (e === null) throw Error(L(310));
    Ne = e, e = {
      memoizedState: Ne.memoizedState,
      baseState: Ne.baseState,
      baseQueue: Ne.baseQueue,
      queue: Ne.queue,
      next: null
    }, Se === null ? me.memoizedState = Se = e : Se = Se.next = e
  }
  return Se
}

function Os(e, t) {
  return typeof t == "function" ? t(e) : t
}

function Zl(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = Ne,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = s.next, s.next = a
    }
    r.baseQueue = o = s, n.pending = null
  }
  if (o !== null) {
    s = o.next, r = r.baseState;
    var l = a = null,
      c = null,
      u = s;
    do {
      var d = u.lane;
      if ((Cr & d) === d) c !== null && (c = c.next = {
        lane: 0,
        action: u.action,
        hasEagerState: u.hasEagerState,
        eagerState: u.eagerState,
        next: null
      }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        c === null ? (l = c = p, a = r) : c = c.next = p, me.lanes |= d, Sr |= d
      }
      u = u.next
    } while (u !== null && u !== s);
    c === null ? a = r : c.next = l, Rt(r, t.memoizedState) || (Qe = !0), t
      .memoizedState = r, t.baseState = a, t.baseQueue = c, n
      .lastRenderedState = r
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do s = o.lane, me.lanes |= s, Sr |= s, o = o.next; while (o !== e)
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}

function ec(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do s = e(s, a.action), a = a.next; while (a !== o);
    Rt(s, t.memoizedState) || (Qe = !0), t.memoizedState = s, t.baseQueue ===
      null && (t.baseState = s), n.lastRenderedState = s
  }
  return [s, r]
}

function mg() {}

function hg(e, t) {
  var n = me,
    r = ht(),
    o = t(),
    s = !Rt(r.memoizedState, o);
  if (s && (r.memoizedState = o, Qe = !0), r = r.queue, Ed(xg.bind(null, n, r,
      e), [e]), r.getSnapshot !== t || s || Se !== null && Se.memoizedState
    .tag & 1) {
    if (n.flags |= 2048, Ls(9, vg.bind(null, n, r, o, t), void 0, null), je ===
      null) throw Error(L(349));
    Cr & 30 || gg(n, t, o)
  }
  return o
}

function gg(e, t, n) {
  e.flags |= 16384, e = {
    getSnapshot: t,
    value: n
  }, t = me.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t
    .stores = [e] : n.push(e))
}

function vg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, yg(t) && wg(e)
}

function xg(e, t, n) {
  return n(function() {
    yg(t) && wg(e)
  })
}

function yg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rt(e, n)
  } catch {
    return !0
  }
}

function wg(e) {
  var t = un(e, 1);
  t !== null && kt(t, e, 1, -1)
}

function vp(e) {
  var t = Ft();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e,
    e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Os,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Fw.bind(null, me, e), [t.memoizedState, e]
}

function Ls(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  }, t = me.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n ===
    null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t
      .lastEffect = e)), e
}

function bg() {
  return ht().memoizedState
}

function Ga(e, t, n, r) {
  var o = Ft();
  me.flags |= e, o.memoizedState = Ls(1 | t, n, void 0, r === void 0 ? null : r)
}

function Qi(e, t, n, r) {
  var o = ht();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Ne !== null) {
    var a = Ne.memoizedState;
    if (s = a.destroy, r !== null && wd(r, a.deps)) {
      o.memoizedState = Ls(t, n, s, r);
      return
    }
  }
  me.flags |= e, o.memoizedState = Ls(1 | t, n, s, r)
}

function xp(e, t) {
  return Ga(8390656, 8, e, t)
}

function Ed(e, t) {
  return Qi(2048, 8, e, t)
}

function Ng(e, t) {
  return Qi(4, 2, e, t)
}

function Eg(e, t) {
  return Qi(4, 4, e, t)
}

function Cg(e, t) {
  if (typeof t == "function") return e = e(), t(e),
    function() {
      t(null)
    };
  if (t != null) return e = e(), t.current = e,
    function() {
      t.current = null
    }
}

function Sg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Qi(4, 4, Cg.bind(null, t, e), n)
}

function Cd() {}

function jg(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wd(t, r[1]) ? r[0] : (n.memoizedState = [e,
    t
  ], e)
}

function Pg(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wd(t, r[1]) ? r[0] : (e = e(), n
    .memoizedState = [e, t], e)
}

function kg(e, t, n) {
  return Cr & 21 ? (Rt(n, t) || (n = _h(), me.lanes |= n, Sr |= n, e
    .baseState = !0), t) : (e.baseState && (e.baseState = !1, Qe = !0), e
    .memoizedState = n)
}

function Lw(e, t) {
  var n = re;
  re = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Jl.transition;
  Jl.transition = {};
  try {
    e(!1), t()
  } finally {
    re = n, Jl.transition = r
  }
}

function Rg() {
  return ht().memoizedState
}

function Dw(e, t, n) {
  var r = Qn(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Tg(e)) Ig(t, n);
  else if (n = dg(e, t, n, r), n !== null) {
    var o = ze();
    kt(n, e, r, o), Ag(n, t, r)
  }
}

function Fw(e, t, n) {
  var r = Qn(e),
    o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (Tg(e)) Ig(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t
        .lastRenderedReducer, s !== null)) try {
      var a = t.lastRenderedState,
        l = s(a, n);
      if (o.hasEagerState = !0, o.eagerState = l, Rt(l, a)) {
        var c = t.interleaved;
        c === null ? (o.next = o, hd(t)) : (o.next = c.next, c.next = o), t
          .interleaved = o;
        return
      }
    } catch {} finally {}
    n = dg(e, t, o, r), n !== null && (o = ze(), kt(n, e, r, o), Ag(n, t, r))
  }
}

function Tg(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me
}

function Ig(e, t) {
  ms = wi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Ag(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, td(e, n)
  }
}
var bi = {
    readContext: mt,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1
  },
  $w = {
    readContext: mt,
    useCallback: function(e, t) {
      return Ft().memoizedState = [e, t === void 0 ? null : t], e
    },
    useContext: mt,
    useEffect: xp,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null, Ga(4194308, 4, Cg.bind(
        null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
      return Ga(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
      return Ga(4, 2, e, t)
    },
    useMemo: function(e, t) {
      var n = Ft();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    },
    useReducer: function(e, t, n) {
      var r = Ft();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t,
        e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }, r.queue = e, e = e.dispatch = Dw.bind(null, me, e), [r
          .memoizedState, e
        ]
    },
    useRef: function(e) {
      var t = Ft();
      return e = {
        current: e
      }, t.memoizedState = e
    },
    useState: vp,
    useDebugValue: Cd,
    useDeferredValue: function(e) {
      return Ft().memoizedState = e
    },
    useTransition: function() {
      var e = vp(!1),
        t = e[0];
      return e = Lw.bind(null, e[1]), Ft().memoizedState = e, [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
      var r = me,
        o = Ft();
      if (fe) {
        if (n === void 0) throw Error(L(407));
        n = n()
      } else {
        if (n = t(), je === null) throw Error(L(349));
        Cr & 30 || gg(r, t, n)
      }
      o.memoizedState = n;
      var s = {
        value: n,
        getSnapshot: t
      };
      return o.queue = s, xp(xg.bind(null, r, s, e), [e]), r.flags |= 2048,
        Ls(9, vg.bind(null, r, s, n, t), void 0, null), n
    },
    useId: function() {
      var e = Ft(),
        t = je.identifierPrefix;
      if (fe) {
        var n = sn,
          r = on;
        n = (r & ~(1 << 32 - Pt(r) - 1)).toString(32) + n, t = ":" + t + "R" +
          n, n = Ms++, 0 < n && (t += "H" + n.toString(32)), t += ":"
      } else n = Ow++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
  },
  Bw = {
    readContext: mt,
    useCallback: jg,
    useContext: mt,
    useEffect: Ed,
    useImperativeHandle: Sg,
    useInsertionEffect: Ng,
    useLayoutEffect: Eg,
    useMemo: Pg,
    useReducer: Zl,
    useRef: bg,
    useState: function() {
      return Zl(Os)
    },
    useDebugValue: Cd,
    useDeferredValue: function(e) {
      var t = ht();
      return kg(t, Ne.memoizedState, e)
    },
    useTransition: function() {
      var e = Zl(Os)[0],
        t = ht().memoizedState;
      return [e, t]
    },
    useMutableSource: mg,
    useSyncExternalStore: hg,
    useId: Rg,
    unstable_isNewReconciler: !1
  },
  zw = {
    readContext: mt,
    useCallback: jg,
    useContext: mt,
    useEffect: Ed,
    useImperativeHandle: Sg,
    useInsertionEffect: Ng,
    useLayoutEffect: Eg,
    useMemo: Pg,
    useReducer: ec,
    useRef: bg,
    useState: function() {
      return ec(Os)
    },
    useDebugValue: Cd,
    useDeferredValue: function(e) {
      var t = ht();
      return Ne === null ? t.memoizedState = e : kg(t, Ne.memoizedState, e)
    },
    useTransition: function() {
      var e = ec(Os)[0],
        t = ht().memoizedState;
      return [e, t]
    },
    useMutableSource: mg,
    useSyncExternalStore: hg,
    useId: Rg,
    unstable_isNewReconciler: !1
  };

function bt(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}

function ru(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e
    .memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Gi = {
  isMounted: function(e) {
    return (e = e._reactInternals) ? Tr(e) === e : !1
  },
  enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      o = Qn(e),
      s = an(r, o);
    s.payload = t, n != null && (s.callback = n), t = Hn(e, s, o), t !==
      null && (kt(t, e, o, r), Wa(t, e, o))
  },
  enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      o = Qn(e),
      s = an(r, o);
    s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Hn(e, s,
      o), t !== null && (kt(t, e, o, r), Wa(t, e, o))
  },
  enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = Qn(e),
      o = an(n, r);
    o.tag = 2, t != null && (o.callback = t), t = Hn(e, o, r), t !== null &&
      (kt(t, e, r, n), Wa(t, e, r))
  }
};

function yp(e, t, n, r, o, s, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e
    .shouldComponentUpdate(r, s, a) : t.prototype && t.prototype
    .isPureReactComponent ? !ks(n, r) || !ks(o, s) : !0
}

function _g(e, t, n) {
  var r = !1,
    o = Kn,
    s = t.contextType;
  return typeof s == "object" && s !== null ? s = mt(s) : (o = qe(t) ? Nr : De
      .current, r = t.contextTypes, s = (r = r != null) ? Co(e, o) : Kn), t =
    new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t
    .state : null, t.updater = Gi, e.stateNode = t, t._reactInternals = e, r &&
    (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e
      .__reactInternalMemoizedMaskedChildContext = s), t
}

function wp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t
    .componentWillReceiveProps(n, r), typeof t
    .UNSAFE_componentWillReceiveProps == "function" && t
    .UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Gi
    .enqueueReplaceState(t, t.state, null)
}

function ou(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, gd(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = mt(s) : (s = qe(t) ? Nr : De
      .current, o.context = Co(e, s)), o.state = e.memoizedState, s = t
    .getDerivedStateFromProps, typeof s == "function" && (ru(e, t, s, n), o
      .state = e.memoizedState), typeof t.getDerivedStateFromProps ==
    "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o
    .UNSAFE_componentWillMount != "function" && typeof o.componentWillMount !=
    "function" || (t = o.state, typeof o.componentWillMount == "function" && o
      .componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" &&
      o.UNSAFE_componentWillMount(), t !== o.state && Gi.enqueueReplaceState(o,
        o.state, null), xi(e, n, o, r), o.state = e.memoizedState), typeof o
    .componentDidMount == "function" && (e.flags |= 4194308)
}

function ko(e, t) {
  try {
    var n = "",
      r = t;
    do n += h1(r), r = r.return; while (r);
    var o = n
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack
  }
  return {
    value: e,
    source: t,
    stack: o,
    digest: null
  }
}

function tc(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null
  }
}

function su(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function() {
      throw n
    })
  }
}
var Uw = typeof WeakMap == "function" ? WeakMap : Map;

function Mg(e, t, n) {
  n = an(-1, n), n.tag = 3, n.payload = {
    element: null
  };
  var r = t.value;
  return n.callback = function() {
    Ei || (Ei = !0, hu = r), su(e, t)
  }, n
}

function Og(e, t, n) {
  n = an(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o)
    }, n.callback = function() {
      su(e, t)
    }
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback =
    function() {
      su(e, t), typeof r != "function" && (Wn === null ? Wn = new Set([
        this]) : Wn.add(this));
      var a = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: a !== null ? a : ""
      })
    }), n
}

function bp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uw;
    var o = new Set;
    r.set(t, o)
  } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
  o.has(n) || (o.add(n), e = nb.bind(null, e, t, n), t.then(e, e))
}

function Np(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t
        .dehydrated !== null : !0), t) return e;
    e = e.return
  } while (e !== null);
  return null
}

function Ep(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |=
    65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag ===
      1 && (n.alternate === null ? n.tag = 17 : (t = an(-1, 1), t.tag = 2, Hn(
        n, t, 1))), n.lanes |= 1), e)
}
var Vw = mn.ReactCurrentOwner,
  Qe = !1;

function $e(e, t, n, r) {
  t.child = e === null ? ug(t, null, n, r) : jo(t, e.child, n, r)
}

function Cp(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return lo(t, o), r = bd(e, t, n, r, s, o), n = Nd(), e !== null && !Qe ? (t
    .updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, dn(e, t, o)
    ) : (fe && n && cd(t), t.flags |= 1, $e(e, t, r, o), t.child)
}

function Sp(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !Ad(s) && s.defaultProps === void 0 && n
      .compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s,
        Lg(e, t, s, r, o)) : (e = Ya(n.type, null, r, t, t.mode, o), e.ref = t
        .ref, e.return = t, t.child = e)
  }
  if (s = e.child, !(e.lanes & o)) {
    var a = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ks, n(a, r) && e.ref === t.ref)
      return dn(e, t, o)
  }
  return t.flags |= 1, e = Gn(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function Lg(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ks(s, r) && e.ref === t.ref)
      if (Qe = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags &
        131072 && (Qe = !0);
      else return t.lanes = e.lanes, dn(e, t, o)
  }
  return au(e, t, n, r, o)
}

function Dg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, ae(no, Xe), Xe |= n;
    else {
      if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t
        .lanes = t.childLanes = 1073741824, t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }, t.updateQueue = null, ae(no, Xe), Xe |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = s !== null ? s.baseLanes : n, ae(no, Xe), Xe |= r
    }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ae(
    no, Xe), Xe |= r;
  return $e(e, t, o, n), t.child
}

function Fg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t
    .flags |= 2097152)
}

function au(e, t, n, r, o) {
  var s = qe(n) ? Nr : De.current;
  return s = Co(t, s), lo(t, o), n = bd(e, t, n, r, s, o), r = Nd(), e !==
    null && !Qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~
      o, dn(e, t, o)) : (fe && r && cd(t), t.flags |= 1, $e(e, t, n, o), t
      .child)
}

function jp(e, t, n, r, o) {
  if (qe(n)) {
    var s = !0;
    pi(t)
  } else s = !1;
  if (lo(t, o), t.stateNode === null) qa(e, t), _g(t, n, r), ou(t, n, r, o),
    r = !0;
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var c = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? u = mt(u) : (u = qe(n) ? Nr : De
      .current, u = Co(t, u));
    var d = n.getDerivedStateFromProps,
      p = typeof d == "function" || typeof a.getSnapshotBeforeUpdate ==
      "function";
    p || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a
      .componentWillReceiveProps != "function" || (l !== r || c !== u) && wp(t,
        a, r, u), kn = !1;
    var v = t.memoizedState;
    a.state = v, xi(t, r, a, o), c = t.memoizedState, l !== r || v !== c || Ge
      .current || kn ? (typeof d == "function" && (ru(t, n, d, r), c = t
        .memoizedState), (l = kn || yp(t, n, l, r, v, c, u)) ? (p || typeof a
        .UNSAFE_componentWillMount != "function" && typeof a
        .componentWillMount != "function" || (typeof a.componentWillMount ==
          "function" && a.componentWillMount(), typeof a
          .UNSAFE_componentWillMount == "function" && a
          .UNSAFE_componentWillMount()), typeof a.componentDidMount ==
        "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount ==
        "function" && (t.flags |= 4194308), t.memoizedProps = r, t
        .memoizedState = c), a.props = r, a.state = c, a.context = u, r = l) : (
        typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1
        )
  } else {
    a = t.stateNode, fg(e, t), l = t.memoizedProps, u = t.type === t
      .elementType ? l : bt(t.type, l), a.props = u, p = t.pendingProps, v = a
      .context, c = n.contextType, typeof c == "object" && c !== null ? c = mt(
        c) : (c = qe(n) ? Nr : De.current, c = Co(t, c));
    var f = n.getDerivedStateFromProps;
    (d = typeof f == "function" || typeof a.getSnapshotBeforeUpdate ==
      "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" &&
      typeof a.componentWillReceiveProps != "function" || (l !== p || v !==
      c) && wp(t, a, r, c), kn = !1, v = t.memoizedState, a.state = v, xi(t, r,
        a, o);
    var b = t.memoizedState;
    l !== p || v !== b || Ge.current || kn ? (typeof f == "function" && (ru(t,
      n, f, r), b = t.memoizedState), (u = kn || yp(t, n, u, r, v, b, c) ||
      !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" &&
      typeof a.componentWillUpdate != "function" || (typeof a
        .componentWillUpdate == "function" && a.componentWillUpdate(r, b,
        c), typeof a.UNSAFE_componentWillUpdate == "function" && a
        .UNSAFE_componentWillUpdate(r, b, c)), typeof a
      .componentDidUpdate == "function" && (t.flags |= 4), typeof a
      .getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (
      typeof a.componentDidUpdate != "function" || l === e.memoizedProps &&
      v === e.memoizedState || (t.flags |= 4), typeof a
      .getSnapshotBeforeUpdate != "function" || l === e.memoizedProps &&
      v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t
      .memoizedState = b), a.props = r, a.state = b, a.context = c, r = u) : (
      typeof a.componentDidUpdate != "function" || l === e.memoizedProps &&
      v === e.memoizedState || (t.flags |= 4), typeof a
      .getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v ===
      e.memoizedState || (t.flags |= 1024), r = !1)
  }
  return iu(e, t, n, r, s, o)
}

function iu(e, t, n, r, o, s) {
  Fg(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && dp(t, n, !1), dn(e, t, s);
  r = t.stateNode, Vw.current = t;
  var l = a && typeof n.getDerivedStateFromError != "function" ? null : r
    .render();
  return t.flags |= 1, e !== null && a ? (t.child = jo(t, e.child, null, s), t
      .child = jo(t, null, l, s)) : $e(e, t, l, s), t.memoizedState = r.state,
    o && dp(t, n, !0), t.child
}

function $g(e) {
  var t = e.stateNode;
  t.pendingContext ? up(e, t.pendingContext, t.pendingContext !== t.context) : t
    .context && up(e, t.context, !1), vd(e, t.containerInfo)
}

function Pp(e, t, n, r, o) {
  return So(), dd(o), t.flags |= 256, $e(e, t, n, r), t.child
}
var lu = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};

function cu(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  }
}

function Bg(e, t, n) {
  var r = t.pendingProps,
    o = pe.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    l;
  if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !==
      0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !==
      null) && (o |= 1), ae(pe, o & 1), e === null) return tu(t), e = t
    .memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode &
      1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
      null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child,
      a = {
        mode: "hidden",
        children: a
      }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = a) :
      s = Xi(a, r, 0, null), e = wr(e, r, n, null), s.return = t, e.return =
      t, s.sibling = e, t.child = s, t.child.memoizedState = cu(n), t
      .memoizedState = lu, e) : Sd(t, a));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null))
  return Hw(e, t, a, r, l, o, n);
  if (s) {
    s = r.fallback, a = t.mode, o = e.child, l = o.sibling;
    var c = {
      mode: "hidden",
      children: r.children
    };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r
        .pendingProps = c, t.deletions = null) : (r = Gn(o, c), r.subtreeFlags =
        o.subtreeFlags & 14680064), l !== null ? s = Gn(l, s) : (s = wr(s, a, n,
        null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t
      .child = r, r = s, s = t.child, a = e.child.memoizedState, a = a ===
      null ? cu(n) : {
        baseLanes: a.baseLanes | n,
        cachePool: null,
        transitions: a.transitions
      }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t
      .memoizedState = lu, r
  }
  return s = e.child, e = s.sibling, r = Gn(s, {
      mode: "visible",
      children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !==
    null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) :
      n.push(e)), t.child = r, t.memoizedState = null, r
}

function Sd(e, t) {
  return t = Xi({
    mode: "visible",
    children: t
  }, e.mode, 0, null), t.return = e, e.child = t
}

function Sa(e, t, n, r) {
  return r !== null && dd(r), jo(t, e.child, null, n), e = Sd(t, t.pendingProps
    .children), e.flags |= 2, t.memoizedState = null, e
}

function Hw(e, t, n, r, o, s, a) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = tc(Error(L(422))), Sa(e,
    t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |=
    128, null) : (s = r.fallback, o = t.mode, r = Xi({
      mode: "visible",
      children: r.children
    }, o, 0, null), s = wr(s, o, a, null), s.flags |= 2, r.return = t, s
    .return = t, r.sibling = s, t.child = r, t.mode & 1 && jo(t, e.child,
      null, a), t.child.memoizedState = cu(a), t.memoizedState = lu, s);
  if (!(t.mode & 1)) return Sa(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, s = Error(L(419)), r = tc(s, r, void 0), Sa(e, t, a, r)
  }
  if (l = (a & e.childLanes) !== 0, Qe || l) {
    if (r = je, r !== null) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0
      }
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== s.retryLane && (s
        .retryLane = o, un(e, o), kt(r, e, o, -1))
    }
    return Id(), r = tc(Error(L(421))), Sa(e, t, a, r)
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = rb.bind(null,
    e), o._reactRetry = t, null) : (e = s.treeContext, Je = Vn(o.nextSibling),
    Ze = t, fe = !0, jt = null, e !== null && (ct[ut++] = on, ct[ut++] = sn,
      ct[ut++] = Er, on = e.id, sn = e.overflow, Er = t), t = Sd(t, r
      .children), t.flags |= 4096, t)
}

function kp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), nu(e.return, t, n)
}

function nc(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: o
  } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s
    .last = r, s.tail = n, s.tailMode = o)
}

function zg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ($e(e, t, r.children, n), r = pe.current, r & 2) r = r & 1 | 2, t.flags |=
    128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && kp(e, n, t);
      else if (e.tag === 19) kp(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break e;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    r &= 1
  }
  if (ae(pe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null &&
        yi(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n
        .sibling = null), nc(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null;) {
        if (e = o.alternate, e !== null && yi(e) === null) {
          t.child = o;
          break
        }
        e = o.sibling, o.sibling = n, n = o, o = e
      }
      nc(t, !0, n, null, s);
      break;
    case "together":
      nc(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null
  }
  return t.child
}

function qa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t
    .flags |= 2)
}

function dn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Sr |= t.lanes, !(n & t
      .childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (e = t.child, n = Gn(e, e.pendingProps), t.child = n, n.return = t; e
      .sibling !== null;) e = e.sibling, n = n.sibling = Gn(e, e.pendingProps),
      n.return = t;
    n.sibling = null
  }
  return t.child
}

function Ww(e, t, n) {
  switch (t.tag) {
    case 3:
      $g(t), So();
      break;
    case 5:
      pg(t);
      break;
    case 1:
      qe(t.type) && pi(t);
      break;
    case 4:
      vd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ae(gi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ae(
          pe, pe.current & 1), t.flags |= 128, null) : n & t.child
        .childLanes ? Bg(e, t, n) : (ae(pe, pe.current & 1), e = dn(e, t, n),
          e !== null ? e.sibling : null);
      ae(pe, pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return zg(e, t, n);
        t.flags |= 128
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null,
          o.lastEffect = null), ae(pe, pe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dg(e, t, n)
  }
  return dn(e, t, n)
}
var Ug, uu, Vg, Hg;
Ug = function(e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return
    }
    n.sibling.return = n.return, n = n.sibling
  }
};
uu = function() {};
Vg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, dr(Qt.current);
    var s = null;
    switch (n) {
      case "input":
        o = Ac(e, o), r = Ac(e, r), s = [];
        break;
      case "select":
        o = he({}, o, {
          value: void 0
        }), r = he({}, r, {
          value: void 0
        }), s = [];
        break;
      case "textarea":
        o = Oc(e, o), r = Oc(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e
          .onclick = di)
    }
    Dc(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !==
          "suppressContentEditableWarning" && u !==
          "suppressHydrationWarning" && u !== "autoFocus" && (bs
            .hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && c !== l && (
          c != null || l != null))
        if (u === "style")
          if (l) {
            for (a in l) !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (
              n || (n = {}), n[a] = "");
            for (a in c) c.hasOwnProperty(a) && l[a] !== c[a] && (n || (
              n = {}), n[a] = c[a])
          } else n || (s || (s = []), s.push(u, n)), n = c;
      else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, l =
          l ? l.__html : void 0, c != null && l !== c && (s = s || []).push(u,
            c)) : u === "children" ? typeof c != "string" && typeof c !=
        "number" || (s = s || []).push(u, "" + c) : u !==
        "suppressContentEditableWarning" && u !==
        "suppressHydrationWarning" && (bs.hasOwnProperty(u) ? (c != null &&
          u === "onScroll" && ce("scroll", e), s || l === c || (s = [])) : (
          s = s || []).push(u, c))
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4)
  }
};
Hg = function(e, t, n, r) {
  n !== r && (t.flags |= 4)
};

function ts(e, t) {
  if (!fe) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t
        .sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n
        .sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling =
        null : r.sibling = null
  }
}

function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o
      .subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o
      .sibling;
  else
    for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o
      .subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t
}

function Qw(e, t, n) {
  var r = t.pendingProps;
  switch (ud(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Me(t), null;
    case 1:
      return qe(t.type) && fi(), Me(t), null;
    case 3:
      return r = t.stateNode, Po(), ue(Ge), ue(De), yd(), r.pendingContext && (r
        .context = r.pendingContext, r.pendingContext = null), (e === null ||
        e.child === null) && (Ea(t) ? t.flags |= 4 : e === null || e
        .memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
          jt !== null && (xu(jt), jt = null))), uu(e, t), Me(t), null;
    case 5:
      xd(t);
      var o = dr(_s.current);
      if (n = t.type, e !== null && t.stateNode != null) Vg(e, t, n, r, o), e
        .ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Me(t), null
        }
        if (e = dr(Qt.current), Ea(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Ut] = t, r[Is] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ls.length; o++) ce(ls[o], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", r), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              Df(r, s), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!s.multiple
              }, ce("invalid", r);
              break;
            case "textarea":
              $f(r, s), ce("invalid", r)
          }
          Dc(n, s), o = null;
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var l = s[a];
              a === "children" ? typeof l == "string" ? r.textContent !== l && (
                  s.suppressHydrationWarning !== !0 && Na(r.textContent, l, e),
                  o = ["children", l]) : typeof l == "number" && r
                .textContent !== "" + l && (s.suppressHydrationWarning !== !0 &&
                  Na(r.textContent, l, e), o = ["children", "" + l]) : bs
                .hasOwnProperty(a) && l != null && a === "onScroll" && ce(
                  "scroll", r)
            } switch (n) {
            case "input":
              ma(r), Ff(r, s, !0);
              break;
            case "textarea":
              ma(r), Bf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = di)
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e ===
            "http://www.w3.org/1999/xhtml" && (e = xh(n)), e ===
            "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a
              .createElement("div"), e.innerHTML = "<script><\/script>", e = e
              .removeChild(e.firstChild)) : typeof r.is == "string" ? e = a
            .createElement(n, {
              is: r.is
            }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ?
              a.multiple = !0 : r.size && (a.size = r.size))) : e = a
            .createElementNS(e, n), e[Ut] = t, e[Is] = r, Ug(e, t, !1, !1), t
            .stateNode = e;
          e: {
            switch (a = Fc(n, r), n) {
              case "dialog":
                ce("cancel", e), ce("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ls.length; o++) ce(ls[o], e);
                o = r;
                break;
              case "source":
                ce("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), o = r;
                break;
              case "details":
                ce("toggle", e), o = r;
                break;
              case "input":
                Df(e, r), o = Ac(e, r), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                }, o = he({}, r, {
                  value: void 0
                }), ce("invalid", e);
                break;
              case "textarea":
                $f(e, r), o = Oc(e, r), ce("invalid", e);
                break;
              default:
                o = r
            }
            Dc(n, o),
            l = o;
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var c = l[s];
                s === "style" ? bh(e, c) : s === "dangerouslySetInnerHTML" ? (
                    c = c ? c.__html : void 0, c != null && yh(e, c)) : s ===
                  "children" ? typeof c == "string" ? (n !== "textarea" ||
                    c !== "") && Ns(e, c) : typeof c == "number" && Ns(e, "" +
                    c) : s !== "suppressContentEditableWarning" && s !==
                  "suppressHydrationWarning" && s !== "autoFocus" && (bs
                    .hasOwnProperty(s) ? c != null && s === "onScroll" && ce(
                      "scroll", e) : c != null && Ku(e, s, c, a))
              } switch (n) {
              case "input":
                ma(e), Ff(e, r, !1);
                break;
              case "textarea":
                ma(e), Bf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? oo(e, !!r
                  .multiple, s, !1) : r.defaultValue != null && oo(e, !!r
                  .multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = di)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
      }
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) Hg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (n = dr(_s.current), dr(Qt.current), Ea(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ut] = t, (s = r
              .nodeValue !== n) && (e = Ze, e !== null)) switch (e.tag) {
            case 3:
              Na(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Na(r
                .nodeValue, n, (e.mode & 1) !== 0)
          }
          s && (t.flags |= 4)
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
          r[Ut] = t, t.stateNode = r
      }
      return Me(t), null;
    case 13:
      if (ue(pe), r = t.memoizedState, e === null || e.memoizedState !== null &&
        e.memoizedState.dehydrated !== null) {
        if (fe && Je !== null && t.mode & 1 && !(t.flags & 128)) lg(), So(), t
          .flags |= 98560, s = !1;
        else if (s = Ea(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(L(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s)
              throw Error(L(317));
            s[Ut] = t
          } else So(), !(t.flags & 128) && (t.memoizedState = null), t.flags |=
            4;
          Me(t), s = !1
        } else jt !== null && (xu(jt), jt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !==
        null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t
        .mode & 1 && (e === null || pe.current & 1 ? Ee === 0 && (Ee = 3) :
          Id())), t.updateQueue !== null && (t.flags |= 4), Me(t), null);
    case 4:
      return Po(), uu(e, t), e === null && Rs(t.stateNode.containerInfo), Me(t),
        null;
    case 10:
      return md(t.type._context), Me(t), null;
    case 17:
      return qe(t.type) && fi(), Me(t), null;
    case 19:
      if (ue(pe), s = t.memoizedState, s === null) return Me(t), null;
      if (r = (t.flags & 128) !== 0, a = s.rendering, a === null)
        if (r) ts(s, !1);
        else {
          if (Ee !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null;) {
              if (a = yi(e), a !== null) {
                for (t.flags |= 128, ts(s, !1), r = a.updateQueue, r !== null &&
                  (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n,
                  n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066,
                  a = s.alternate, a === null ? (s.childLanes = 0, s.lanes = e,
                    s.child = null, s.subtreeFlags = 0, s.memoizedProps = null,
                    s.memoizedState = null, s.updateQueue = null, s
                    .dependencies = null, s.stateNode = null) : (s.childLanes =
                    a.childLanes, s.lanes = a.lanes, s.child = a.child, s
                    .subtreeFlags = 0, s.deletions = null, s.memoizedProps = a
                    .memoizedProps, s.memoizedState = a.memoizedState, s
                    .updateQueue = a.updateQueue, s.type = a.type, e = a
                    .dependencies, s.dependencies = e === null ? null : {
                      lanes: e.lanes,
                      firstContext: e.firstContext
                    }), n = n.sibling;
                return ae(pe, pe.current & 1 | 2), t.child
              }
              e = e.sibling
            }
          s.tail !== null && xe() > Ro && (t.flags |= 128, r = !0, ts(s, !1), t
            .lanes = 4194304)
        }
      else {
        if (!r)
          if (e = yi(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t
                .updateQueue = n, t.flags |= 4), ts(s, !0), s.tail === null && s
              .tailMode === "hidden" && !a.alternate && !fe) return Me(t), null
          } else 2 * xe() - s.renderingStartTime > Ro && n !== 1073741824 && (t
            .flags |= 128, r = !0, ts(s, !1), t.lanes = 4194304);
        s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !==
          null ? n.sibling = a : t.child = a, s.last = a)
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling,
        s.renderingStartTime = xe(), t.sibling = null, n = pe.current, ae(pe,
          r ? n & 1 | 2 : n & 1), t) : (Me(t), null);
    case 22:
    case 23:
      return Td(), r = t.memoizedState !== null, e !== null && e
        .memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ?
        Xe & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) :
        Me(t), null;
    case 24:
      return null;
    case 25:
      return null
  }
  throw Error(L(156, t.tag))
}

function Gw(e, t) {
  switch (ud(t), t.tag) {
    case 1:
      return qe(t.type) && fi(), e = t.flags, e & 65536 ? (t.flags = e & -
        65537 | 128, t) : null;
    case 3:
      return Po(), ue(Ge), ue(De), yd(), e = t.flags, e & 65536 && !(e & 128) ?
        (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return xd(t), null;
    case 13:
      if (ue(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(L(340));
        So()
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ue(pe), null;
    case 4:
      return Po(), null;
    case 10:
      return md(t.type._context), null;
    case 22:
    case 23:
      return Td(), null;
    case 24:
      return null;
    default:
      return null
  }
}
var ja = !1,
  Le = !1,
  qw = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;

function to(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function") try {
      n(null)
    } catch (r) {
      ve(e, t, r)
    } else n.current = null
}

function du(e, t, n) {
  try {
    n()
  } catch (r) {
    ve(e, t, r)
  }
}
var Rp = !1;

function Kw(e, t) {
  if (qc = li, e = Kh(), ld(e)) {
    if ("selectionStart" in e) var n = {
      start: e.selectionStart,
      end: e.selectionEnd
    };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset,
          s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType
        } catch {
          n = null;
          break e
        }
        var a = 0,
          l = -1,
          c = -1,
          u = 0,
          d = 0,
          p = e,
          v = null;
        t: for (;;) {
          for (var f; p !== n || o !== 0 && p.nodeType !== 3 || (l = a + o),
            p !== s || r !== 0 && p.nodeType !== 3 || (c = a + r), p
            .nodeType === 3 && (a += p.nodeValue.length), (f = p
            .firstChild) !== null;) v = p, p = f;
          for (;;) {
            if (p === e) break t;
            if (v === n && ++u === o && (l = a), v === s && ++d === r && (
                c = a), (f = p.nextSibling) !== null) break;
            p = v, v = p.parentNode
          }
          p = f
        }
        n = l === -1 || c === -1 ? null : {
          start: l,
          end: c
        }
      } else n = null
    }
    n = n || {
      start: 0,
      end: 0
    }
  } else n = null;
  for (Kc = {
      focusedElem: e,
      selectionRange: n
    }, li = !1, F = t; F !== null;)
    if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e
      .return = t, F = e;
    else
      for (; F !== null;) {
        t = F;
        try {
          var b = t.alternate;
          if (t.flags & 1024) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (b !== null) {
                var h = b.memoizedProps,
                  y = b.memoizedState,
                  x = t.stateNode,
                  g = x.getSnapshotBeforeUpdate(t.elementType === t.type ? h :
                    bt(t.type, h), y);
                x.__reactInternalSnapshotBeforeUpdate = g
              }
              break;
            case 3:
              var w = t.stateNode.containerInfo;
              w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w
                .documentElement && w.removeChild(w.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(L(163))
          }
        } catch (N) {
          ve(t, t.return, N)
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, F = e;
          break
        }
        F = t.return
      }
  return b = Rp, Rp = !1, b
}

function hs(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && du(t, n, s)
      }
      o = o.next
    } while (o !== r)
  }
}

function qi(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}

function fu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n
    }
    typeof t == "function" ? t(e) : t.current = e
  }
}

function Wg(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Wg(t)), e.child = null, e.deletions = null,
    e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[
      Ut], delete t[Is], delete t[Jc], delete t[Iw], delete t[Aw])), e
    .stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps =
    null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e
    .updateQueue = null
}

function Qg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Tp(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || Qg(e.return)) return null;
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !==
      6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}

function pu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode
    .insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n
        .parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n
      ._reactRootContainer, n != null || t.onclick !== null || (t.onclick = di)
      );
  else if (r !== 4 && (e = e.child, e !== null))
    for (pu(e, t, n), e = e.sibling; e !== null;) pu(e, t, n), e = e.sibling
}

function mu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n
    .appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (mu(e, t, n), e = e.sibling; e !== null;) mu(e, t, n), e = e.sibling
}
var Pe = null,
  St = !1;

function Nn(e, t, n) {
  for (n = n.child; n !== null;) Gg(e, t, n), n = n.sibling
}

function Gg(e, t, n) {
  if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
    Wt.onCommitFiberUnmount(Bi, n)
  } catch {}
  switch (n.tag) {
    case 5:
      Le || to(n, t);
    case 6:
      var r = Pe,
        o = St;
      Pe = null, Nn(e, t, n), Pe = r, St = o, Pe !== null && (St ? (e = Pe, n =
        n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e
        .removeChild(n)) : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null && (St ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? Kl(e
        .parentNode, n) : e.nodeType === 1 && Kl(e, n), js(e)) : Kl(Pe, n
        .stateNode));
      break;
    case 4:
      r = Pe, o = St, Pe = n.stateNode.containerInfo, St = !0, Nn(e, t, n), Pe =
        r, St = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !==
          null))) {
        o = r = r.next;
        do {
          var s = o,
            a = s.destroy;
          s = s.tag, a !== void 0 && (s & 2 || s & 4) && du(n, t, a), o = o.next
        } while (o !== r)
      }
      Nn(e, t, n);
      break;
    case 1:
      if (!Le && (to(n, t), r = n.stateNode, typeof r.componentWillUnmount ==
          "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r
          .componentWillUnmount()
      } catch (l) {
        ve(n, t, l)
      }
      Nn(e, t, n);
      break;
    case 21:
      Nn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, Nn(e, t, n), Le =
        r) : Nn(e, t, n);
      break;
    default:
      Nn(e, t, n)
  }
}

function Ip(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qw), t.forEach(function(r) {
      var o = ob.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o))
    })
  }
}

function yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          a = t,
          l = a;
        e: for (; l !== null;) {
          switch (l.tag) {
            case 5:
              Pe = l.stateNode, St = !1;
              break e;
            case 3:
              Pe = l.stateNode.containerInfo, St = !0;
              break e;
            case 4:
              Pe = l.stateNode.containerInfo, St = !0;
              break e
          }
          l = l.return
        }
        if (Pe === null) throw Error(L(160));
        Gg(s, a, o), Pe = null, St = !1;
        var c = o.alternate;
        c !== null && (c.return = null), o.return = null
      } catch (u) {
        ve(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) qg(t, e), t = t.sibling
}

function qg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (yt(t, e), Lt(e), r & 4) {
        try {
          hs(3, e, e.return), qi(3, e)
        } catch (h) {
          ve(e, e.return, h)
        }
        try {
          hs(5, e, e.return)
        } catch (h) {
          ve(e, e.return, h)
        }
      }
      break;
    case 1:
      yt(t, e), Lt(e), r & 512 && n !== null && to(n, n.return);
      break;
    case 5:
      if (yt(t, e), Lt(e), r & 512 && n !== null && to(n, n.return), e.flags &
        32) {
        var o = e.stateNode;
        try {
          Ns(o, "")
        } catch (h) {
          ve(e, e.return, h)
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          l = e.type,
          c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          l === "input" && s.type === "radio" && s.name != null && gh(o, s),
            Fc(l, a);
          var u = Fc(l, s);
          for (a = 0; a < c.length; a += 2) {
            var d = c[a],
              p = c[a + 1];
            d === "style" ? bh(o, p) : d === "dangerouslySetInnerHTML" ? yh(o,
              p) : d === "children" ? Ns(o, p) : Ku(o, d, p, u)
          }
          switch (l) {
            case "input":
              _c(o, s);
              break;
            case "textarea":
              vh(o, s);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var f = s.value;
              f != null ? oo(o, !!s.multiple, f, !1) : v !== !!s.multiple && (
                s.defaultValue != null ? oo(o, !!s.multiple, s.defaultValue,
                  !0) : oo(o, !!s.multiple, s.multiple ? [] : "", !1))
          }
          o[Is] = s
        } catch (h) {
          ve(e, e.return, h)
        }
      }
      break;
    case 6:
      if (yt(t, e), Lt(e), r & 4) {
        if (e.stateNode === null) throw Error(L(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s
        } catch (h) {
          ve(e, e.return, h)
        }
      }
      break;
    case 3:
      if (yt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          js(t.containerInfo)
        } catch (h) {
          ve(e, e.return, h)
        }
      break;
    case 4:
      yt(t, e), Lt(e);
      break;
    case 13:
      yt(t, e), Lt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !==
        null, o.stateNode.isHidden = s, !s || o.alternate !== null && o
        .alternate.memoizedState !== null || (kd = xe())), r & 4 && Ip(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (u =
          Le) || d, yt(t, e), Le = u) : yt(t, e), Lt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e
          .mode & 1)
          for (F = e, d = e.child; d !== null;) {
            for (p = F = d; F !== null;) {
              switch (v = F, f = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hs(4, v, v.return);
                  break;
                case 1:
                  to(v, v.return);
                  var b = v.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    r = v, n = v.return;
                    try {
                      t = r, b.props = t.memoizedProps, b.state = t
                        .memoizedState, b.componentWillUnmount()
                    } catch (h) {
                      ve(r, n, h)
                    }
                  }
                  break;
                case 5:
                  to(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    _p(p);
                    continue
                  }
              }
              f !== null ? (f.return = v, F = f) : _p(p)
            }
            d = d.sibling
          }
        e: for (d = null, p = e;;) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                o = p.stateNode, u ? (s = o.style, typeof s.setProperty ==
                  "function" ? s.setProperty("display", "none",
                  "important") : s.display = "none") : (l = p.stateNode, c =
                  p.memoizedProps.style, a = c != null && c.hasOwnProperty(
                    "display") ? c.display : null, l.style.display = wh(
                    "display", a))
              } catch (h) {
                ve(e, e.return, h)
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps
            } catch (h) {
              ve(e, e.return, h)
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState ===
              null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue
          }
          if (p === e) break e;
          for (; p.sibling === null;) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), p = p.return
          }
          d === p && (d = null), p.sibling.return = p.return, p = p.sibling
        }
      }
      break;
    case 19:
      yt(t, e), Lt(e), r & 4 && Ip(e);
      break;
    case 21:
      break;
    default:
      yt(t, e), Lt(e)
  }
}

function Lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (Qg(n)) {
            var r = n;
            break e
          }
          n = n.return
        }
        throw Error(L(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ns(o, ""), r.flags &= -33);
          var s = Tp(e);
          mu(e, s, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = Tp(e);
          pu(e, l, a);
          break;
        default:
          throw Error(L(161))
      }
    }
    catch (c) {
      ve(e, e.return, c)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}

function Xw(e, t, n) {
  F = e, Kg(e)
}

function Kg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null;) {
    var o = F,
      s = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ja;
      if (!a) {
        var l = o.alternate,
          c = l !== null && l.memoizedState !== null || Le;
        l = ja;
        var u = Le;
        if (ja = a, (Le = c) && !u)
          for (F = o; F !== null;) a = F, c = a.child, a.tag === 22 && a
            .memoizedState !== null ? Mp(o) : c !== null ? (c.return = a, F =
            c) : Mp(o);
        for (; s !== null;) F = s, Kg(s), s = s.sibling;
        F = o, ja = l, Le = u
      }
      Ap(e)
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, F = s) : Ap(e)
  }
}

function Ap(e) {
  for (; F !== null;) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Le || qi(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Le)
              if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : bt(t
                  .type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r
                  .__reactInternalSnapshotBeforeUpdate)
              } var s = t.updateQueue;
            s !== null && gp(t, s, r);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode
              }
              gp(t, a, n)
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var c = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c.autoFocus && n.focus();
                  break;
                case "img":
                  c.src && (n.src = c.src)
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var d = u.memoizedState;
                if (d !== null) {
                  var p = d.dehydrated;
                  p !== null && js(p)
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(L(163))
        }
        Le || t.flags & 512 && fu(t)
      } catch (v) {
        ve(t, t.return, v)
      }
    }
    if (t === e) {
      F = null;
      break
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, F = n;
      break
    }
    F = t.return
  }
}

function _p(e) {
  for (; F !== null;) {
    var t = F;
    if (t === e) {
      F = null;
      break
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, F = n;
      break
    }
    F = t.return
  }
}

function Mp(e) {
  for (; F !== null;) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            qi(4, t)
          } catch (c) {
            ve(t, n, c)
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount()
            } catch (c) {
              ve(t, o, c)
            }
          }
          var s = t.return;
          try {
            fu(t)
          } catch (c) {
            ve(t, s, c)
          }
          break;
        case 5:
          var a = t.return;
          try {
            fu(t)
          } catch (c) {
            ve(t, a, c)
          }
      }
    } catch (c) {
      ve(t, t.return, c)
    }
    if (t === e) {
      F = null;
      break
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, F = l;
      break
    }
    F = t.return
  }
}
var Yw = Math.ceil,
  Ni = mn.ReactCurrentDispatcher,
  jd = mn.ReactCurrentOwner,
  pt = mn.ReactCurrentBatchConfig,
  Z = 0,
  je = null,
  be = null,
  ke = 0,
  Xe = 0,
  no = Zn(0),
  Ee = 0,
  Ds = null,
  Sr = 0,
  Ki = 0,
  Pd = 0,
  gs = null,
  We = null,
  kd = 0,
  Ro = 1 / 0,
  tn = null,
  Ei = !1,
  hu = null,
  Wn = null,
  Pa = !1,
  Dn = null,
  Ci = 0,
  vs = 0,
  gu = null,
  Ka = -1,
  Xa = 0;

function ze() {
  return Z & 6 ? xe() : Ka !== -1 ? Ka : Ka = xe()
}

function Qn(e) {
  return e.mode & 1 ? Z & 2 && ke !== 0 ? ke & -ke : Mw.transition !== null ? (
    Xa === 0 && (Xa = _h()), Xa) : (e = re, e !== 0 || (e = window.event, e =
    e === void 0 ? 16 : Bh(e.type)), e) : 1
}

function kt(e, t, n, r) {
  if (50 < vs) throw vs = 0, gu = null, Error(L(185));
  Xs(e, n, r), (!(Z & 2) || e !== je) && (e === je && (!(Z & 2) && (Ki |= n),
      Ee === 4 && Tn(e, ke)), Ke(e, r), n === 1 && Z === 0 && !(t.mode & 1) &&
    (Ro = xe() + 500, Wi && er()))
}

function Ke(e, t) {
  var n = e.callbackNode;
  M1(e, t);
  var r = ii(e, e === je ? ke : 0);
  if (r === 0) n !== null && Vf(n), e.callbackNode = null, e.callbackPriority =
    0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Vf(n), t === 1) e.tag === 0 ? _w(Op.bind(null, e)) : sg(Op
      .bind(null, e)), Rw(function() {
      !(Z & 6) && er()
    }), n = null;
    else {
      switch (Mh(r)) {
        case 1:
          n = ed;
          break;
        case 4:
          n = Ih;
          break;
        case 16:
          n = ai;
          break;
        case 536870912:
          n = Ah;
          break;
        default:
          n = ai
      }
      n = rv(n, Xg.bind(null, e))
    }
    e.callbackPriority = t, e.callbackNode = n
  }
}

function Xg(e, t) {
  if (Ka = -1, Xa = 0, Z & 6) throw Error(L(327));
  var n = e.callbackNode;
  if (co() && e.callbackNode !== n) return null;
  var r = ii(e, e === je ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Si(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var s = Jg();
    (je !== e || ke !== t) && (tn = null, Ro = xe() + 500, yr(e, t));
    do try {
      eb();
      break
    } catch (l) {
      Yg(e, l)
    }
    while (!0);
    pd(), Ni.current = s, Z = o, be !== null ? t = 0 : (je = null, ke = 0, t =
      Ee)
  }
  if (t !== 0) {
    if (t === 2 && (o = Vc(e), o !== 0 && (r = o, t = vu(e, o))), t === 1)
    throw n = Ds, yr(e, 0), Tn(e, r), Ke(e, xe()), n;
    if (t === 6) Tn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Jw(o) && (t = Si(e, r), t ===
          2 && (s = Vc(e), s !== 0 && (r = s, t = vu(e, s))), t === 1))
      throw n = Ds, yr(e, 0), Tn(e, r), Ke(e, xe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          lr(e, We, tn);
          break;
        case 3:
          if (Tn(e, r), (r & 130023424) === r && (t = kd + 500 - xe(), 10 <
            t)) {
            if (ii(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ze(), e.pingedLanes |= e.suspendedLanes & o;
              break
            }
            e.timeoutHandle = Yc(lr.bind(null, e, We, tn), t);
            break
          }
          lr(e, We, tn);
          break;
        case 4:
          if (Tn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r;) {
            var a = 31 - Pt(r);
            s = 1 << a, a = t[a], a > o && (o = a), r &= ~s
          }
          if (r = o, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 >
              r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 :
              1960 * Yw(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Yc(lr.bind(null, e, We, tn), r);
            break
          }
          lr(e, We, tn);
          break;
        case 5:
          lr(e, We, tn);
          break;
        default:
          throw Error(L(329))
      }
    }
  }
  return Ke(e, xe()), e.callbackNode === n ? Xg.bind(null, e) : null
}

function vu(e, t) {
  var n = gs;
  return e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256), e =
    Si(e, t), e !== 2 && (t = We, We = n, t !== null && xu(t)), e
}

function xu(e) {
  We === null ? We = e : We.push.apply(We, e)
}

function Jw(e) {
  for (var t = e;;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Rt(s(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
  }
  return !0
}

function Tn(e, t) {
  for (t &= ~Pd, t &= ~Ki, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e
    .expirationTimes; 0 < t;) {
    var n = 31 - Pt(t),
      r = 1 << n;
    e[n] = -1, t &= ~r
  }
}

function Op(e) {
  if (Z & 6) throw Error(L(327));
  co();
  var t = ii(e, 0);
  if (!(t & 1)) return Ke(e, xe()), null;
  var n = Si(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vc(e);
    r !== 0 && (t = r, n = vu(e, r))
  }
  if (n === 1) throw n = Ds, yr(e, 0), Tn(e, t), Ke(e, xe()), n;
  if (n === 6) throw Error(L(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, lr(e, We,
    tn), Ke(e, xe()), null
}

function Rd(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t)
  } finally {
    Z = n, Z === 0 && (Ro = xe() + 500, Wi && er())
  }
}

function jr(e) {
  Dn !== null && Dn.tag === 0 && !(Z & 6) && co();
  var t = Z;
  Z |= 1;
  var n = pt.transition,
    r = re;
  try {
    if (pt.transition = null, re = 1, e) return e()
  } finally {
    re = r, pt.transition = n, Z = t, !(Z & 6) && er()
  }
}

function Td() {
  Xe = no.current, ue(no)
}

function yr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, kw(n)), be !== null)
    for (n = be.return; n !== null;) {
      var r = n;
      switch (ud(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && fi();
          break;
        case 3:
          Po(), ue(Ge), ue(De), yd();
          break;
        case 5:
          xd(r);
          break;
        case 4:
          Po();
          break;
        case 13:
          ue(pe);
          break;
        case 19:
          ue(pe);
          break;
        case 10:
          md(r.type._context);
          break;
        case 22:
        case 23:
          Td()
      }
      n = n.return
    }
  if (je = e, be = e = Gn(e.current, null), ke = Xe = t, Ee = 0, Ds = null, Pd =
    Ki = Sr = 0, We = gs = null, ur !== null) {
    for (t = 0; t < ur.length; t++)
      if (n = ur[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          s.next = o, r.next = a
        }
        n.pending = r
      } ur = null
  }
  return e
}

function Yg(e, t) {
  do {
    var n = be;
    try {
      if (pd(), Qa.current = bi, wi) {
        for (var r = me.memoizedState; r !== null;) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next
        }
        wi = !1
      }
      if (Cr = 0, Se = Ne = me = null, ms = !1, Ms = 0, jd.current = null, n ===
        null || n.return === null) {
        Ee = 1, Ds = t, be = null;
        break
      }
      e: {
        var s = e,
          a = n.return,
          l = n,
          c = t;
        if (t = ke, l.flags |= 32768, c !== null && typeof c == "object" &&
          typeof c.then == "function") {
          var u = c,
            d = l,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = d.alternate;
            v ? (d.updateQueue = v.updateQueue, d.memoizedState = v
              .memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d
              .memoizedState = null)
          }
          var f = Np(a);
          if (f !== null) {
            f.flags &= -257, Ep(f, a, l, s, t), f.mode & 1 && bp(s, u, t), t =
              f, c = u;
            var b = t.updateQueue;
            if (b === null) {
              var h = new Set;
              h.add(c), t.updateQueue = h
            } else b.add(c);
            break e
          } else {
            if (!(t & 1)) {
              bp(s, u, t), Id();
              break e
            }
            c = Error(L(426))
          }
        } else if (fe && l.mode & 1) {
          var y = Np(a);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256), Ep(y, a, l, s, t), dd(ko(
              c, l));
            break e
          }
        }
        s = c = ko(c, l),
        Ee !== 4 && (Ee = 2),
        gs === null ? gs = [s] : gs.push(s),
        s = a;do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var x = Mg(s, c, t);
              hp(s, x);
              break e;
            case 1:
              l = c;
              var g = s.type,
                w = s.stateNode;
              if (!(s.flags & 128) && (typeof g.getDerivedStateFromError ==
                  "function" || w !== null && typeof w.componentDidCatch ==
                  "function" && (Wn === null || !Wn.has(w)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var N = Og(s, l, t);
                hp(s, N);
                break e
              }
          }
          s = s.return
        } while (s !== null)
      }
      ev(n)
    } catch (E) {
      t = E, be === n && n !== null && (be = n = n.return);
      continue
    }
    break
  } while (!0)
}

function Jg() {
  var e = Ni.current;
  return Ni.current = bi, e === null ? bi : e
}

function Id() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4), je === null || !(Sr &
    268435455) && !(Ki & 268435455) || Tn(je, ke)
}

function Si(e, t) {
  var n = Z;
  Z |= 2;
  var r = Jg();
  (je !== e || ke !== t) && (tn = null, yr(e, t));
  do try {
    Zw();
    break
  } catch (o) {
    Yg(e, o)
  }
  while (!0);
  if (pd(), Z = n, Ni.current = r, be !== null) throw Error(L(261));
  return je = null, ke = 0, Ee
}

function Zw() {
  for (; be !== null;) Zg(be)
}

function eb() {
  for (; be !== null && !S1();) Zg(be)
}

function Zg(e) {
  var t = nv(e.alternate, e, Xe);
  e.memoizedProps = e.pendingProps, t === null ? ev(e) : be = t, jd.current =
    null
}

function ev(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Gw(n, t), n !== null) {
        n.flags &= 32767, be = n;
        return
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ee = 6, be = null;
        return
      }
    } else if (n = Qw(n, t, Xe), n !== null) {
      be = n;
      return
    }
    if (t = t.sibling, t !== null) {
      be = t;
      return
    }
    be = t = e
  } while (t !== null);
  Ee === 0 && (Ee = 5)
}

function lr(e, t, n) {
  var r = re,
    o = pt.transition;
  try {
    pt.transition = null, re = 1, tb(e, t, n, r)
  } finally {
    pt.transition = o, re = r
  }
  return null
}

function tb(e, t, n, r) {
  do co(); while (Dn !== null);
  if (Z & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(
    L(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (O1(e, s), e === je && (be = je = null, ke = 0), !(n.subtreeFlags &
    2064) && !(n.flags & 2064) || Pa || (Pa = !0, rv(ai, function() {
      return co(), null
    })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = pt.transition, pt.transition = null;
    var a = re;
    re = 1;
    var l = Z;
    Z |= 4, jd.current = null, Kw(e, n), qg(n, e), bw(Kc), li = !!qc, Kc = qc =
      null, e.current = n, Xw(n), j1(), Z = l, re = a, pt.transition = s
  } else e.current = n;
  if (Pa && (Pa = !1, Dn = e, Ci = o), s = e.pendingLanes, s === 0 && (Wn =
      null), R1(n.stateNode), Ke(e, xe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o
      .value, {
        componentStack: o.stack,
        digest: o.digest
      });
  if (Ei) throw Ei = !1, e = hu, hu = null, e;
  return Ci & 1 && e.tag !== 0 && co(), s = e.pendingLanes, s & 1 ? e === gu ?
    vs++ : (vs = 0, gu = e) : vs = 0, er(), null
}

function co() {
  if (Dn !== null) {
    var e = Mh(Ci),
      t = pt.transition,
      n = re;
    try {
      if (pt.transition = null, re = 16 > e ? 16 : e, Dn === null) var r = !1;
      else {
        if (e = Dn, Dn = null, Ci = 0, Z & 6) throw Error(L(331));
        var o = Z;
        for (Z |= 4, F = e.current; F !== null;) {
          var s = F,
            a = s.child;
          if (F.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (F = u; F !== null;) {
                  var d = F;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hs(8, d, s)
                  }
                  var p = d.child;
                  if (p !== null) p.return = d, F = p;
                  else
                    for (; F !== null;) {
                      d = F;
                      var v = d.sibling,
                        f = d.return;
                      if (Wg(d), d === u) {
                        F = null;
                        break
                      }
                      if (v !== null) {
                        v.return = f, F = v;
                        break
                      }
                      F = f
                    }
                }
              }
              var b = s.alternate;
              if (b !== null) {
                var h = b.child;
                if (h !== null) {
                  b.child = null;
                  do {
                    var y = h.sibling;
                    h.sibling = null, h = y
                  } while (h !== null)
                }
              }
              F = s
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) a.return = s, F = a;
          else e: for (; F !== null;) {
            if (s = F, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                hs(9, s, s.return)
            }
            var x = s.sibling;
            if (x !== null) {
              x.return = s.return, F = x;
              break e
            }
            F = s.return
          }
        }
        var g = e.current;
        for (F = g; F !== null;) {
          a = F;
          var w = a.child;
          if (a.subtreeFlags & 2064 && w !== null) w.return = a, F = w;
          else e: for (a = g; F !== null;) {
            if (l = F, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  qi(9, l)
              }
            } catch (E) {
              ve(l, l.return, E)
            }
            if (l === a) {
              F = null;
              break e
            }
            var N = l.sibling;
            if (N !== null) {
              N.return = l.return, F = N;
              break e
            }
            F = l.return
          }
        }
        if (Z = o, er(), Wt && typeof Wt.onPostCommitFiberRoot == "function")
          try {
            Wt.onPostCommitFiberRoot(Bi, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      re = n, pt.transition = t
    }
  }
  return !1
}

function Lp(e, t, n) {
  t = ko(n, t), t = Mg(e, t, 1), e = Hn(e, t, 1), t = ze(), e !== null && (Xs(e,
    1, t), Ke(e, t))
}

function ve(e, t, n) {
  if (e.tag === 3) Lp(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Lp(t, e, n);
        break
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r
          .componentDidCatch == "function" && (Wn === null || !Wn.has(r))) {
          e = ko(n, e), e = Og(t, e, 1), t = Hn(t, e, 1), e = ze(), t !==
            null && (Xs(t, 1, e), Ke(t, e));
          break
        }
      }
      t = t.return
    }
}

function nb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ze(), e.pingedLanes |= e.suspendedLanes & n,
    je === e && (ke & n) === n && (Ee === 4 || Ee === 3 && (ke & 130023424) ===
      ke && 500 > xe() - kd ? yr(e, 0) : Pd |= n), Ke(e, t)
}

function tv(e, t) {
  t === 0 && (e.mode & 1 ? (t = va, va <<= 1, !(va & 130023424) && (va =
    4194304)) : t = 1);
  var n = ze();
  e = un(e, t), e !== null && (Xs(e, t, n), Ke(e, n))
}

function rb(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), tv(e, n)
}

function ob(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314))
  }
  r !== null && r.delete(t), tv(e, n)
}
var nv;
nv = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) Qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return Qe = !1, Ww(e, t, n);
      Qe = !!(e.flags & 131072)
    }
  else Qe = !1, fe && t.flags & 1048576 && ag(t, hi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      qa(e, t), e = t.pendingProps;
      var o = Co(t, De.current);
      lo(t, n), o = bd(null, t, r, e, o, n);
      var s = Nd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o
        .render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t
          .memoizedState = null, t.updateQueue = null, qe(r) ? (s = !0, pi(
          t)) : s = !1, t.memoizedState = o.state !== null && o.state !==
          void 0 ? o.state : null, gd(t), o.updater = Gi, t.stateNode = o, o
          ._reactInternals = t, ou(t, r, e, n), t = iu(null, t, r, !0, s, n)
          ) : (t.tag = 0, fe && s && cd(t), $e(null, t, o, n), t = t.child),
        t;
    case 16:
      r = t.elementType;
      e: {
        switch (qa(e, t), e = t.pendingProps, o = r._init, r = o(r
          ._payload), t.type = r, o = t.tag = ab(r), e = bt(r, e), o) {
          case 0:
            t = au(null, t, r, e, n);
            break e;
          case 1:
            t = jp(null, t, r, e, n);
            break e;
          case 11:
            t = Cp(null, t, r, e, n);
            break e;
          case 14:
            t = Sp(null, t, r, bt(r.type, e), n);
            break e
        }
        throw Error(L(306, r, ""))
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bt(
        r, o), au(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bt(
        r, o), jp(e, t, r, o, n);
    case 3:
      e: {
        if ($g(t), e === null) throw Error(L(387));r = t.pendingProps,
        s = t.memoizedState,
        o = s.element,
        fg(e, t),
        xi(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, s.isDehydrated)
          if (s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags &
            256) {
            o = ko(Error(L(423)), t), t = Pp(e, t, r, n, o);
            break e
          } else if (r !== o) {
          o = ko(Error(L(424)), t), t = Pp(e, t, r, n, o);
          break e
        } else
          for (Je = Vn(t.stateNode.containerInfo.firstChild), Ze = t, fe = !
            0, jt = null, n = ug(t, null, r, n), t.child = n; n;) n.flags =
            n.flags & -3 | 4096, n = n.sibling;
        else {
          if (So(), r === o) {
            t = dn(e, t, n);
            break e
          }
          $e(e, t, r, n)
        }
        t = t.child
      }
      return t;
    case 5:
      return pg(t), e === null && tu(t), r = t.type, o = t.pendingProps, s =
        e !== null ? e.memoizedProps : null, a = o.children, Xc(r, o) ? a =
        null : s !== null && Xc(r, s) && (t.flags |= 32), Fg(e, t), $e(e, t,
          a, n), t.child;
    case 6:
      return e === null && tu(t), null;
    case 13:
      return Bg(e, t, n);
    case 4:
      return vd(t, t.stateNode.containerInfo), r = t.pendingProps, e ===
        null ? t.child = jo(t, null, r, n) : $e(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bt(
        r, o), Cp(e, t, r, o, n);
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps,
          a = o.value, ae(gi, r._currentValue), r._currentValue = a, s !==
          null)
          if (Rt(s.value, a)) {
            if (s.children === o.children && !Ge.current) {
              t = dn(e, t, n);
              break e
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null;) {
              var l = s.dependencies;
              if (l !== null) {
                a = s.child;
                for (var c = l.firstContext; c !== null;) {
                  if (c.context === r) {
                    if (s.tag === 1) {
                      c = an(-1, n & -n), c.tag = 2;
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null ? c.next = c : (c.next = d.next, d.next =
                          c), u.pending = c
                      }
                    }
                    s.lanes |= n, c = s.alternate, c !== null && (c.lanes |=
                      n), nu(s.return, n, t), l.lanes |= n;
                    break
                  }
                  c = c.next
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s
                .child;
              else if (s.tag === 18) {
                if (a = s.return, a === null) throw Error(L(341));
                a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n),
                  nu(a, n, t), a = s.sibling
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null;) {
                  if (a === t) {
                    a = null;
                    break
                  }
                  if (s = a.sibling, s !== null) {
                    s.return = a.return, a = s;
                    break
                  }
                  a = a.return
                }
              s = a
            }
        $e(e, t, o.children, n),
        t = t.child
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, lo(t, n), o = mt(o), r =
        r(o), t.flags |= 1, $e(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = bt(r, t.pendingProps), o = bt(r.type, o), Sp(e,
        t, r, o, n);
    case 15:
      return Lg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : bt(
        r, o), qa(e, t), t.tag = 1, qe(r) ? (e = !0, pi(t)) : e = !1, lo(t,
        n), _g(t, r, o), ou(t, r, o, n), iu(null, t, r, !0, e, n);
    case 19:
      return zg(e, t, n);
    case 22:
      return Dg(e, t, n)
  }
  throw Error(L(156, t.tag))
};

function rv(e, t) {
  return Th(e, t)
}

function sb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this
    .stateNode = this.type = this.elementType = null, this.index = 0, this.ref =
    null, this.pendingProps = t, this.dependencies = this.memoizedState = this
    .updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags =
    this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0,
    this.alternate = null
}

function ft(e, t, n, r) {
  return new sb(e, t, n, r)
}

function Ad(e) {
  return e = e.prototype, !(!e || !e.isReactComponent)
}

function ab(e) {
  if (typeof e == "function") return Ad(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Yu) return 11;
    if (e === Ju) return 14
  }
  return 2
}

function Gn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ft(e.tag, t, e.key, e.mode), n.elementType = e
      .elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e,
      e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n
      .subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n
    .childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n
    .memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n
    .updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t ===
    null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ya(e, t, n, r, o, s) {
  var a = 2;
  if (r = e, typeof e == "function") Ad(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case Qr:
      return wr(n.children, o, s, t);
    case Xu:
      a = 8, o |= 8;
      break;
    case kc:
      return e = ft(12, n, t, o | 2), e.elementType = kc, e.lanes = s, e;
    case Rc:
      return e = ft(13, n, t, o), e.elementType = Rc, e.lanes = s, e;
    case Tc:
      return e = ft(19, n, t, o), e.elementType = Tc, e.lanes = s, e;
    case ph:
      return Xi(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case dh:
          a = 10;
          break e;
        case fh:
          a = 9;
          break e;
        case Yu:
          a = 11;
          break e;
        case Ju:
          a = 14;
          break e;
        case Pn:
          a = 16, r = null;
          break e
      }
      throw Error(L(130, e == null ? e : typeof e, ""))
  }
  return t = ft(a, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t
}

function wr(e, t, n, r) {
  return e = ft(7, e, r, t), e.lanes = n, e
}

function Xi(e, t, n, r) {
  return e = ft(22, e, r, t), e.elementType = ph, e.lanes = n, e.stateNode = {
    isHidden: !1
  }, e
}

function rc(e, t, n) {
  return e = ft(6, e, null, t), e.lanes = n, e
}

function oc(e, t, n) {
  return t = ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes =
    n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t
}

function ib(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache =
    this.current = this.pendingChildren = null, this.timeoutHandle = -1, this
    .callbackNode = this.pendingContext = this.context = null, this
    .callbackPriority = 0, this.eventTimes = Fl(0), this.expirationTimes = Fl(-
      1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes =
    this.expiredLanes = this.pingedLanes = this.suspendedLanes = this
    .pendingLanes = 0, this.entanglements = Fl(0), this.identifierPrefix = r,
    this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function _d(e, t, n, r, o, s, a, l, c) {
  return e = new ib(e, t, n, l, c), t === 1 ? (t = 1, s === !0 && (t |= 8)) :
    t = 0, s = ft(3, null, null, t), e.current = s, s.stateNode = e, s
    .memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, gd(s), e
}

function lb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}

function ov(e) {
  if (!e) return Kn;
  e = e._reactInternals;
  e: {
    if (Tr(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e
          }
      }
      t = t.return
    } while (t !== null);
    throw Error(L(171))
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return og(e, n, t)
  }
  return t
}

function sv(e, t, n, r, o, s, a, l, c) {
  return e = _d(n, r, !0, e, o, s, a, l, c), e.context = ov(null), n = e
    .current, r = ze(), o = Qn(n), s = an(r, o), s.callback = t ?? null, Hn(n,
      s, o), e.current.lanes = o, Xs(e, o, r), Ke(e, r), e
}

function Yi(e, t, n, r) {
  var o = t.current,
    s = ze(),
    a = Qn(o);
  return n = ov(n), t.context === null ? t.context = n : t.pendingContext = n,
    t = an(s, a), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Hn(o, t,
      a), e !== null && (kt(e, o, a, s), Wa(e, o, a)), a
}

function ji(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode
  }
}

function Dp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
  }
}

function Md(e, t) {
  Dp(e, t), (e = e.alternate) && Dp(e, t)
}

function cb() {
  return null
}
var av = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
};

function Od(e) {
  this._internalRoot = e
}
Ji.prototype.render = Od.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Yi(e, t, null, null)
};
Ji.prototype.unmount = Od.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jr(function() {
      Yi(null, e, null, null)
    }), t[cn] = null
  }
};

function Ji(e) {
  this._internalRoot = e
}
Ji.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Dh();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < Rn.length && t !== 0 && t < Rn[n].priority; n++);
    Rn.splice(n, 0, e), n === 0 && $h(e)
  }
};

function Ld(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Zi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e
    .nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Fp() {}

function ub(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = ji(a);
        s.call(u)
      }
    }
    var a = sv(t, r, e, 0, null, !1, !1, "", Fp);
    return e._reactRootContainer = a, e[cn] = a.current, Rs(e.nodeType === 8 ? e
      .parentNode : e), jr(), a
  }
  for (; o = e.lastChild;) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = ji(c);
      l.call(u)
    }
  }
  var c = _d(e, 0, !1, null, null, !1, !1, "", Fp);
  return e._reactRootContainer = c, e[cn] = c.current, Rs(e.nodeType === 8 ? e
    .parentNode : e), jr(function() {
    Yi(t, c, n, r)
  }), c
}

function el(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var c = ji(a);
        l.call(c)
      }
    }
    Yi(t, a, e, o)
  } else a = ub(n, t, e, o, r);
  return ji(a)
}
Oh = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = is(t.pendingLanes);
        n !== 0 && (td(t, n | 1), Ke(t, xe()), !(Z & 6) && (Ro = xe() + 500,
          er()))
      }
      break;
    case 13:
      jr(function() {
        var r = un(e, 1);
        if (r !== null) {
          var o = ze();
          kt(r, e, 1, o)
        }
      }), Md(e, 1)
  }
};
nd = function(e) {
  if (e.tag === 13) {
    var t = un(e, 134217728);
    if (t !== null) {
      var n = ze();
      kt(t, e, 134217728, n)
    }
    Md(e, 134217728)
  }
};
Lh = function(e) {
  if (e.tag === 13) {
    var t = Qn(e),
      n = un(e, t);
    if (n !== null) {
      var r = ze();
      kt(n, e, t, r)
    }
    Md(e, t)
  }
};
Dh = function() {
  return re
};
Fh = function(e, t) {
  var n = re;
  try {
    return re = e, t()
  } finally {
    re = n
  }
};
Bc = function(e, t, n) {
  switch (t) {
    case "input":
      if (_c(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) +
            '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Hi(r);
            if (!o) throw Error(L(90));
            hh(r), _c(r, o)
          }
        }
      }
      break;
    case "textarea":
      vh(e, n);
      break;
    case "select":
      t = n.value, t != null && oo(e, !!n.multiple, t, !1)
  }
};
Ch = Rd;
Sh = jr;
var db = {
    usingClientEntryPoint: !1,
    Events: [Js, Xr, Hi, Nh, Eh, Rd]
  },
  ns = {
    findFiberByHostInstance: cr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  },
  fb = {
    bundleType: ns.bundleType,
    version: ns.version,
    rendererPackageName: ns.rendererPackageName,
    rendererConfig: ns.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = kh(e), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ns.findFiberByHostInstance || cb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ka = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ka.isDisabled && ka.supportsFiber) try {
    Bi = ka.inject(fb), Wt = ka
  } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = db;
nt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] :
    null;
  if (!Ld(t)) throw Error(L(200));
  return lb(e, t, null, n)
};
nt.createRoot = function(e, t) {
  if (!Ld(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = av;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t
    .identifierPrefix !== void 0 && (r = t.identifierPrefix), t
    .onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = _d(e,
    1, !1, null, null, n, !1, r, o), e[cn] = t.current, Rs(e.nodeType ===
    8 ? e.parentNode : e), new Od(t)
};
nt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(L(188)) : (e =
    Object.keys(e).join(","), Error(L(268, e)));
  return e = kh(t), e = e === null ? null : e.stateNode, e
};
nt.flushSync = function(e) {
  return jr(e)
};
nt.hydrate = function(e, t, n) {
  if (!Zi(t)) throw Error(L(200));
  return el(null, e, t, !0, n)
};
nt.hydrateRoot = function(e, t, n) {
  if (!Ld(e)) throw Error(L(405));
  var r = n != null && n.hydratedSources || null,
    o = !1,
    s = "",
    a = av;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n
      .identifierPrefix !== void 0 && (s = n.identifierPrefix), n
      .onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = sv(t,
      null, e, 1, n ?? null, o, !1, s, a), e[cn] = t.current, Rs(e), r)
    for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n
        ._source), t.mutableSourceEagerHydrationData == null ? t
      .mutableSourceEagerHydrationData = [n, o] : t
      .mutableSourceEagerHydrationData.push(n, o);
  return new Ji(t)
};
nt.render = function(e, t, n) {
  if (!Zi(t)) throw Error(L(200));
  return el(null, e, t, !1, n)
};
nt.unmountComponentAtNode = function(e) {
  if (!Zi(e)) throw Error(L(40));
  return e._reactRootContainer ? (jr(function() {
    el(null, null, e, !1, function() {
      e._reactRootContainer = null, e[cn] = null
    })
  }), !0) : !1
};
nt.unstable_batchedUpdates = Rd;
nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Zi(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return el(e, t, n, !1, r)
};
nt.version = "18.3.1-next-f1338f8080-20240426";

function iv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iv)
  } catch (e) {
    console.error(e)
  }
}
iv(), ih.exports = nt;
var ea = ih.exports;
const lv = Km(ea);
var cv, $p = ea;
cv = $p.createRoot, $p.hydrateRoot;
const pb = 1,
  mb = 1e6;
let sc = 0;

function hb() {
  return sc = (sc + 1) % Number.MAX_SAFE_INTEGER, sc.toString()
}
const ac = new Map,
  Bp = e => {
    if (ac.has(e)) return;
    const t = setTimeout(() => {
      ac.delete(e), xs({
        type: "REMOVE_TOAST",
        toastId: e
      })
    }, mb);
    ac.set(e, t)
  },
  gb = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return {
          ...e, toasts: [t.toast, ...e.toasts].slice(0, pb)
        };
      case "UPDATE_TOAST":
        return {
          ...e, toasts: e.toasts.map(n => n.id === t.toast.id ? {
            ...n,
            ...t.toast
          } : n)
        };
      case "DISMISS_TOAST": {
        const {
          toastId: n
        } = t;
        return n ? Bp(n) : e.toasts.forEach(r => {
          Bp(r.id)
        }), {
          ...e,
          toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r)
        }
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
          ...e,
          toasts: []
        } : {
          ...e,
          toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
  },
  Ja = [];
let Za = {
  toasts: []
};

function xs(e) {
  Za = gb(Za, e), Ja.forEach(t => {
    t(Za)
  })
}

function vb({
  ...e
}) {
  const t = hb(),
    n = o => xs({
      type: "UPDATE_TOAST",
      toast: {
        ...o,
        id: t
      }
    }),
    r = () => xs({
      type: "DISMISS_TOAST",
      toastId: t
    });
  return xs({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: o => {
        o || r()
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  }
}

function tr() {
  const [e, t] = m.useState(Za);
  return m.useEffect(() => (Ja.push(t), () => {
    const n = Ja.indexOf(t);
    n > -1 && Ja.splice(n, 1)
  }), [e]), {
    ...e,
    toast: vb,
    dismiss: n => xs({
      type: "DISMISS_TOAST",
      toastId: n
    })
  }
}

function Y(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ?
      void 0 : t(o)
  }
}

function zp(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t)
}

function uv(...e) {
  return t => {
    let n = !1;
    const r = e.map(o => {
      const s = zp(o, t);
      return !n && typeof s == "function" && (n = !0), s
    });
    if (n) return () => {
      for (let o = 0; o < r.length; o++) {
        const s = r[o];
        typeof s == "function" ? s() : zp(e[o], null)
      }
    }
  }
}

function ye(...e) {
  return m.useCallback(uv(...e), e)
}

function xb(e, t) {
  const n = m.createContext(t),
    r = s => {
      const {
        children: a,
        ...l
      } = s, c = m.useMemo(() => l, Object.values(l));
      return i.jsx(n.Provider, {
        value: c,
        children: a
      })
    };
  r.displayName = e + "Provider";

  function o(s) {
    const a = m.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``)
  }
  return [r, o]
}

function _t(e, t = []) {
  let n = [];

  function r(s, a) {
    const l = m.createContext(a),
      c = n.length;
    n = [...n, a];
    const u = p => {
      var x;
      const {
        scope: v,
        children: f,
        ...b
      } = p, h = ((x = v == null ? void 0 : v[e]) == null ? void 0 : x[c]) ||
        l, y = m.useMemo(() => b, Object.values(b));
      return i.jsx(h.Provider, {
        value: y,
        children: f
      })
    };
    u.displayName = s + "Provider";

    function d(p, v) {
      var h;
      const f = ((h = v == null ? void 0 : v[e]) == null ? void 0 : h[c]) || l,
        b = m.useContext(f);
      if (b) return b;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${s}\``)
    }
    return [u, d]
  }
  const o = () => {
    const s = n.map(a => m.createContext(a));
    return function(l) {
      const c = (l == null ? void 0 : l[e]) || s;
      return m.useMemo(() => ({
        [`__scope${e}`]: {
          ...l,
          [e]: c
        }
      }), [l, c])
    }
  };
  return o.scopeName = e, [r, yb(o, ...t)]
}

function yb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(o => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = r.reduce((l, {
        useScope: c,
        scopeName: u
      }) => {
        const p = c(s)[`__scope${u}`];
        return {
          ...l,
          ...p
        }
      }, {});
      return m.useMemo(() => ({
        [`__scope${t.scopeName}`]: a
      }), [a])
    }
  };
  return n.scopeName = t.scopeName, n
}

function Fs(e) {
  const t = bb(e),
    n = m.forwardRef((r, o) => {
      const {
        children: s,
        ...a
      } = r, l = m.Children.toArray(s), c = l.find(Eb);
      if (c) {
        const u = c.props.children,
          d = l.map(p => p === c ? m.Children.count(u) > 1 ? m.Children.only(
            null) : m.isValidElement(u) ? u.props.children : null : p);
        return i.jsx(t, {
          ...a,
          ref: o,
          children: m.isValidElement(u) ? m.cloneElement(u, void 0, d) :
            null
        })
      }
      return i.jsx(t, {
        ...a,
        ref: o,
        children: s
      })
    });
  return n.displayName = `${e}.Slot`, n
}
var wb = Fs("Slot");

function bb(e) {
  const t = m.forwardRef((n, r) => {
    const {
      children: o,
      ...s
    } = n;
    if (m.isValidElement(o)) {
      const a = Sb(o),
        l = Cb(s, o.props);
      return o.type !== m.Fragment && (l.ref = r ? uv(r, a) : a), m
        .cloneElement(o, l)
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null
  });
  return t.displayName = `${e}.SlotClone`, t
}
var dv = Symbol("radix.slottable");

function Nb(e) {
  const t = ({
    children: n
  }) => i.jsx(i.Fragment, {
    children: n
  });
  return t.displayName = `${e}.Slottable`, t.__radixId = dv, t
}

function Eb(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e
    .type && e.type.__radixId === dv
}

function Cb(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...l) => {
      const c = s(...l);
      return o(...l), c
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...s
    } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
  }
  return {
    ...e,
    ...n
  }
}

function Sb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ?
    void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) ==
    null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}

function Dd(e) {
  const t = e + "CollectionProvider",
    [n, r] = _t(t),
    [o, s] = n(t, {
      collectionRef: {
        current: null
      },
      itemMap: new Map
    }),
    a = h => {
      const {
        scope: y,
        children: x
      } = h, g = _.useRef(null), w = _.useRef(new Map).current;
      return i.jsx(o, {
        scope: y,
        itemMap: w,
        collectionRef: g,
        children: x
      })
    };
  a.displayName = t;
  const l = e + "CollectionSlot",
    c = Fs(l),
    u = _.forwardRef((h, y) => {
      const {
        scope: x,
        children: g
      } = h, w = s(l, x), N = ye(y, w.collectionRef);
      return i.jsx(c, {
        ref: N,
        children: g
      })
    });
  u.displayName = l;
  const d = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    v = Fs(d),
    f = _.forwardRef((h, y) => {
      const {
        scope: x,
        children: g,
        ...w
      } = h, N = _.useRef(null), E = ye(y, N), S = s(d, x);
      return _.useEffect(() => (S.itemMap.set(N, {
        ref: N,
        ...w
      }), () => void S.itemMap.delete(N))), i.jsx(v, {
        [p]: "",
        ref: E,
        children: g
      })
    });
  f.displayName = d;

  function b(h) {
    const y = s(e + "CollectionConsumer", h);
    return _.useCallback(() => {
      const g = y.collectionRef.current;
      if (!g) return [];
      const w = Array.from(g.querySelectorAll(`[${p}]`));
      return Array.from(y.itemMap.values()).sort((S, j) => w.indexOf(S.ref
        .current) - w.indexOf(j.ref.current))
    }, [y.collectionRef, y.itemMap])
  }
  return [{
    Provider: a,
    Slot: u,
    ItemSlot: f
  }, b, r]
}
var jb = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label",
    "li", "nav", "ol", "p", "select", "span", "svg", "ul"
  ],
  J = jb.reduce((e, t) => {
    const n = Fs(`Primitive.${t}`),
      r = m.forwardRef((o, s) => {
        const {
          asChild: a,
          ...l
        } = o, c = a ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          i.jsx(c, {
            ...l,
            ref: s
          })
      });
    return r.displayName = `Primitive.${t}`, {
      ...e,
      [t]: r
    }
  }, {});

function fv(e, t) {
  e && ea.flushSync(() => e.dispatchEvent(t))
}

function Tt(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n)
  }, [])
}

function Pb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tt(e);
  m.useEffect(() => {
    const r = o => {
      o.key === "Escape" && n(o)
    };
    return t.addEventListener("keydown", r, {
      capture: !0
    }), () => t.removeEventListener("keydown", r, {
      capture: !0
    })
  }, [n, t])
}
var kb = "DismissableLayer",
  yu = "dismissableLayer.update",
  Rb = "dismissableLayer.pointerDownOutside",
  Tb = "dismissableLayer.focusOutside",
  Up, pv = m.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
  }),
  tl = m.forwardRef((e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: l,
      ...c
    } = e, u = m.useContext(pv), [d, p] = m.useState(null), v = (d == null ?
        void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis
        .document), [, f] = m.useState({}), b = ye(t, j => p(j)), h = Array
      .from(u.layers), [y] = [...u.layersWithOutsidePointerEventsDisabled]
      .slice(-1), x = h.indexOf(y), g = d ? h.indexOf(d) : -1, w = u
      .layersWithOutsidePointerEventsDisabled.size > 0, N = g >= x, E = Ab(
        j => {
          const C = j.target,
            P = [...u.branches].some(T => T.contains(C));
          !N || P || (o == null || o(j), a == null || a(j), j
            .defaultPrevented || l == null || l())
        }, v), S = _b(j => {
        const C = j.target;
        [...u.branches].some(T => T.contains(C)) || (s == null || s(j), a ==
          null || a(j), j.defaultPrevented || l == null || l())
      }, v);
    return Pb(j => {
      g === u.layers.size - 1 && (r == null || r(j), !j
        .defaultPrevented && l && (j.preventDefault(), l()))
    }, v), m.useEffect(() => {
      if (d) return n && (u.layersWithOutsidePointerEventsDisabled
        .size === 0 && (Up = v.body.style.pointerEvents, v.body.style
          .pointerEvents = "none"), u
        .layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(
        d), Vp(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v
          .body.style.pointerEvents = Up)
      }
    }, [d, v, n, u]), m.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled
        .delete(d), Vp())
    }, [d, u]), m.useEffect(() => {
      const j = () => f({});
      return document.addEventListener(yu, j), () => document
        .removeEventListener(yu, j)
    }, []), i.jsx(J.div, {
      ...c,
      ref: b,
      style: {
        pointerEvents: w ? N ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: Y(e.onFocusCapture, S.onFocusCapture),
      onBlurCapture: Y(e.onBlurCapture, S.onBlurCapture),
      onPointerDownCapture: Y(e.onPointerDownCapture, E
        .onPointerDownCapture)
    })
  });
tl.displayName = kb;
var Ib = "DismissableLayerBranch",
  mv = m.forwardRef((e, t) => {
    const n = m.useContext(pv),
      r = m.useRef(null),
      o = ye(t, r);
    return m.useEffect(() => {
      const s = r.current;
      if (s) return n.branches.add(s), () => {
        n.branches.delete(s)
      }
    }, [n.branches]), i.jsx(J.div, {
      ...e,
      ref: o
    })
  });
mv.displayName = Ib;

function Ab(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tt(e),
    r = m.useRef(!1),
    o = m.useRef(() => {});
  return m.useEffect(() => {
    const s = l => {
        if (l.target && !r.current) {
          let c = function() {
            hv(Rb, n, u, {
              discrete: !0
            })
          };
          const u = {
            originalEvent: l
          };
          l.pointerType === "touch" ? (t.removeEventListener("click", o
            .current), o.current = c, t.addEventListener("click", o
            .current, {
              once: !0
            })) : c()
        } else t.removeEventListener("click", o.current);
        r.current = !1
      },
      a = window.setTimeout(() => {
        t.addEventListener("pointerdown", s)
      }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t
        .removeEventListener("click", o.current)
    }
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  }
}

function _b(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tt(e),
    r = m.useRef(!1);
  return m.useEffect(() => {
    const o = s => {
      s.target && !r.current && hv(Tb, n, {
        originalEvent: s
      }, {
        discrete: !1
      })
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener(
      "focusin", o)
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}

function Vp() {
  const e = new CustomEvent(yu);
  document.dispatchEvent(e)
}

function hv(e, t, n, {
  discrete: r
}) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? fv(o, s) : o.dispatchEvent(s)
}
var Mb = tl,
  Ob = mv,
  qt = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {},
  Lb = "Portal",
  Fd = m.forwardRef((e, t) => {
    var l;
    const {
      container: n,
      ...r
    } = e, [o, s] = m.useState(!1);
    qt(() => s(!0), []);
    const a = n || o && ((l = globalThis == null ? void 0 : globalThis
      .document) == null ? void 0 : l.body);
    return a ? lv.createPortal(i.jsx(J.div, {
      ...r,
      ref: t
    }), a) : null
  });
Fd.displayName = Lb;

function Db(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e)
}
var nr = e => {
  const {
    present: t,
    children: n
  } = e, r = Fb(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.Children.only(n), s = ye(r.ref, $b(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, {
    ref: s
  }) : null
};
nr.displayName = "Presence";

function Fb(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), s = m
    .useRef("none"), a = e ? "mounted" : "unmounted", [l, c] = Db(a, {
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
    });
  return m.useEffect(() => {
    const u = Ra(r.current);
    s.current = l === "mounted" ? u : "none"
  }, [l]), qt(() => {
    const u = r.current,
      d = o.current;
    if (d !== e) {
      const v = s.current,
        f = Ra(u);
      e ? c("MOUNT") : f === "none" || (u == null ? void 0 : u.display) ===
        "none" ? c("UNMOUNT") : c(d && v !== f ? "ANIMATION_OUT" :
          "UNMOUNT"), o.current = e
    }
  }, [e, c]), qt(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window,
        p = f => {
          const h = Ra(r.current).includes(f.animationName);
          if (f.target === t && h && (c("ANIMATION_END"), !o.current)) {
            const y = t.style.animationFillMode;
            t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
              t.style.animationFillMode === "forwards" && (t.style
                .animationFillMode = y)
            })
          }
        },
        v = f => {
          f.target === t && (s.current = Ra(r.current))
        };
      return t.addEventListener("animationstart", v), t.addEventListener(
          "animationcancel", p), t.addEventListener("animationend", p),
      () => {
          d.clearTimeout(u), t.removeEventListener("animationstart", v), t
            .removeEventListener("animationcancel", p), t
            .removeEventListener("animationend", p)
        }
    } else c("ANIMATION_END")
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: m.useCallback(u => {
      r.current = u ? getComputedStyle(u) : null, n(u)
    }, [])
  }
}

function Ra(e) {
  return (e == null ? void 0 : e.animationName) || "none"
}

function $b(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ?
    void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) ==
    null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var Bb = Qu[" useInsertionEffect ".trim().toString()] || qt;

function Ir({
  prop: e,
  defaultProp: t,
  onChange: n = () => {},
  caller: r
}) {
  const [o, s, a] = zb({
    defaultProp: t,
    onChange: n
  }), l = e !== void 0, c = l ? e : o;
  {
    const d = m.useRef(e !== void 0);
    m.useEffect(() => {
      const p = d.current;
      p !== l && console.warn(
        `${r} is changing from ${p?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ), d.current = l
    }, [l, r])
  }
  const u = m.useCallback(d => {
    var p;
    if (l) {
      const v = Ub(d) ? d(e) : d;
      v !== e && ((p = a.current) == null || p.call(a, v))
    } else s(d)
  }, [l, e, s, a]);
  return [c, u]
}

function zb({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), s = m.useRef(t);
  return Bb(() => {
    s.current = t
  }, [t]), m.useEffect(() => {
    var a;
    o.current !== n && ((a = s.current) == null || a.call(s, n), o.current =
      n)
  }, [n, o]), [n, r, s]
}

function Ub(e) {
  return typeof e == "function"
}
var Vb = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }),
  Hb = "VisuallyHidden",
  nl = m.forwardRef((e, t) => i.jsx(J.span, {
    ...e,
    ref: t,
    style: {
      ...Vb,
      ...e.style
    }
  }));
nl.displayName = Hb;
var Wb = nl,
  $d = "ToastProvider",
  [Bd, Qb, Gb] = Dd("Toast"),
  [gv, $R] = _t("Toast", [Gb]),
  [qb, rl] = gv($d),
  vv = e => {
    const {
      __scopeToast: t,
      label: n = "Notification",
      duration: r = 5e3,
      swipeDirection: o = "right",
      swipeThreshold: s = 50,
      children: a
    } = e, [l, c] = m.useState(null), [u, d] = m.useState(0), p = m.useRef(!1),
      v = m.useRef(!1);
    return n.trim() || console.error(
      `Invalid prop \`label\` supplied to \`${$d}\`. Expected non-empty \`string\`.`
      ), i.jsx(Bd.Provider, {
      scope: t,
      children: i.jsx(qb, {
        scope: t,
        label: n,
        duration: r,
        swipeDirection: o,
        swipeThreshold: s,
        toastCount: u,
        viewport: l,
        onViewportChange: c,
        onToastAdd: m.useCallback(() => d(f => f + 1), []),
        onToastRemove: m.useCallback(() => d(f => f - 1), []),
        isFocusedToastEscapeKeyDownRef: p,
        isClosePausedRef: v,
        children: a
      })
    })
  };
vv.displayName = $d;
var xv = "ToastViewport",
  Kb = ["F8"],
  wu = "toast.viewportPause",
  bu = "toast.viewportResume",
  yv = m.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Kb,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, a = rl(xv, n), l = Qb(n), c = m.useRef(null), u = m.useRef(null),
      d = m.useRef(null), p = m.useRef(null), v = ye(t, p, a
      .onViewportChange), f = r.join("+").replace(/Key/g, "").replace(
        /Digit/g, ""), b = a.toastCount > 0;
    m.useEffect(() => {
      const y = x => {
        var w;
        r.length !== 0 && r.every(N => x[N] || x.code === N) && ((w = p
          .current) == null || w.focus())
      };
      return document.addEventListener("keydown", y), () => document
        .removeEventListener("keydown", y)
    }, [r]), m.useEffect(() => {
      const y = c.current,
        x = p.current;
      if (b && y && x) {
        const g = () => {
            if (!a.isClosePausedRef.current) {
              const S = new CustomEvent(wu);
              x.dispatchEvent(S), a.isClosePausedRef.current = !0
            }
          },
          w = () => {
            if (a.isClosePausedRef.current) {
              const S = new CustomEvent(bu);
              x.dispatchEvent(S), a.isClosePausedRef.current = !1
            }
          },
          N = S => {
            !y.contains(S.relatedTarget) && w()
          },
          E = () => {
            y.contains(document.activeElement) || w()
          };
        return y.addEventListener("focusin", g), y.addEventListener(
            "focusout", N), y.addEventListener("pointermove", g), y
          .addEventListener("pointerleave", E), window.addEventListener(
            "blur", g), window.addEventListener("focus", w), () => {
            y.removeEventListener("focusin", g), y.removeEventListener(
                "focusout", N), y.removeEventListener("pointermove", g), y
              .removeEventListener("pointerleave", E), window
              .removeEventListener("blur", g), window.removeEventListener(
                "focus", w)
          }
      }
    }, [b, a.isClosePausedRef]);
    const h = m.useCallback(({
      tabbingDirection: y
    }) => {
      const g = l().map(w => {
        const N = w.ref.current,
          E = [N, ...l2(N)];
        return y === "forwards" ? E : E.reverse()
      });
      return (y === "forwards" ? g.reverse() : g).flat()
    }, [l]);
    return m.useEffect(() => {
      const y = p.current;
      if (y) {
        const x = g => {
          var E, S, j;
          const w = g.altKey || g.ctrlKey || g.metaKey;
          if (g.key === "Tab" && !w) {
            const C = document.activeElement,
              P = g.shiftKey;
            if (g.target === y && P) {
              (E = u.current) == null || E.focus();
              return
            }
            const M = h({
                tabbingDirection: P ? "backwards" : "forwards"
              }),
              $ = M.findIndex(A => A === C);
            ic(M.slice($ + 1)) ? g.preventDefault() : P ? (S = u
                .current) == null || S.focus() : (j = d.current) ==
              null || j.focus()
          }
        };
        return y.addEventListener("keydown", x), () => y
          .removeEventListener("keydown", x)
      }
    }, [l, h]), i.jsxs(Ob, {
      ref: c,
      role: "region",
      "aria-label": o.replace("{hotkey}", f),
      tabIndex: -1,
      style: {
        pointerEvents: b ? void 0 : "none"
      },
      children: [b && i.jsx(Nu, {
        ref: u,
        onFocusFromOutsideViewport: () => {
          const y = h({
            tabbingDirection: "forwards"
          });
          ic(y)
        }
      }), i.jsx(Bd.Slot, {
        scope: n,
        children: i.jsx(J.ol, {
          tabIndex: -1,
          ...s,
          ref: v
        })
      }), b && i.jsx(Nu, {
        ref: d,
        onFocusFromOutsideViewport: () => {
          const y = h({
            tabbingDirection: "backwards"
          });
          ic(y)
        }
      })]
    })
  });
yv.displayName = xv;
var wv = "ToastFocusProxy",
  Nu = m.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      onFocusFromOutsideViewport: r,
      ...o
    } = e, s = rl(wv, n);
    return i.jsx(nl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: {
        position: "fixed"
      },
      onFocus: a => {
        var u;
        const l = a.relatedTarget;
        !((u = s.viewport) != null && u.contains(l)) && r()
      }
    })
  });
Nu.displayName = wv;
var ta = "Toast",
  Xb = "toast.swipeStart",
  Yb = "toast.swipeMove",
  Jb = "toast.swipeCancel",
  Zb = "toast.swipeEnd",
  bv = m.forwardRef((e, t) => {
    const {
      forceMount: n,
      open: r,
      defaultOpen: o,
      onOpenChange: s,
      ...a
    } = e, [l, c] = Ir({
      prop: r,
      defaultProp: o ?? !0,
      onChange: s,
      caller: ta
    });
    return i.jsx(nr, {
      present: n || l,
      children: i.jsx(n2, {
        open: l,
        ...a,
        ref: t,
        onClose: () => c(!1),
        onPause: Tt(e.onPause),
        onResume: Tt(e.onResume),
        onSwipeStart: Y(e.onSwipeStart, u => {
          u.currentTarget.setAttribute("data-swipe", "start")
        }),
        onSwipeMove: Y(e.onSwipeMove, u => {
          const {
            x: d,
            y: p
          } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u
            .currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x", `${d}px`), u
            .currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y", `${p}px`)
        }),
        onSwipeCancel: Y(e.onSwipeCancel, u => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u
            .currentTarget.style.removeProperty(
              "--radix-toast-swipe-move-x"), u.currentTarget.style
            .removeProperty("--radix-toast-swipe-move-y"), u
            .currentTarget.style.removeProperty(
              "--radix-toast-swipe-end-x"), u.currentTarget.style
            .removeProperty("--radix-toast-swipe-end-y")
        }),
        onSwipeEnd: Y(e.onSwipeEnd, u => {
          const {
            x: d,
            y: p
          } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u
            .currentTarget.style.removeProperty(
              "--radix-toast-swipe-move-x"), u.currentTarget.style
            .removeProperty("--radix-toast-swipe-move-y"), u
            .currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x", `${d}px`), u
            .currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y", `${p}px`), c(!1)
        })
      })
    })
  });
bv.displayName = ta;
var [e2, t2] = gv(ta, {
  onClose() {}
}), n2 = m.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    type: r = "foreground",
    duration: o,
    open: s,
    onClose: a,
    onEscapeKeyDown: l,
    onPause: c,
    onResume: u,
    onSwipeStart: d,
    onSwipeMove: p,
    onSwipeCancel: v,
    onSwipeEnd: f,
    ...b
  } = e, h = rl(ta, n), [y, x] = m.useState(null), g = ye(t, A => x(A)), w =
    m.useRef(null), N = m.useRef(null), E = o || h.duration, S = m.useRef(
    0), j = m.useRef(E), C = m.useRef(0), {
      onToastAdd: P,
      onToastRemove: T
    } = h, O = Tt(() => {
      var z;
      (y == null ? void 0 : y.contains(document.activeElement)) && ((z = h
        .viewport) == null || z.focus()), a()
    }), M = m.useCallback(A => {
      !A || A === 1 / 0 || (window.clearTimeout(C.current), S.current =
        new Date().getTime(), C.current = window.setTimeout(O, A))
    }, [O]);
  m.useEffect(() => {
    const A = h.viewport;
    if (A) {
      const z = () => {
          M(j.current), u == null || u()
        },
        B = () => {
          const V = new Date().getTime() - S.current;
          j.current = j.current - V, window.clearTimeout(C.current),
            c == null || c()
        };
      return A.addEventListener(wu, B), A.addEventListener(bu, z),
    () => {
        A.removeEventListener(wu, B), A.removeEventListener(bu, z)
      }
    }
  }, [h.viewport, E, c, u, M]), m.useEffect(() => {
    s && !h.isClosePausedRef.current && M(E)
  }, [s, E, h.isClosePausedRef, M]), m.useEffect(() => (P(), () => T()), [
    P, T
  ]);
  const $ = m.useMemo(() => y ? kv(y) : null, [y]);
  return h.viewport ? i.jsxs(i.Fragment, {
    children: [$ && i.jsx(r2, {
      __scopeToast: n,
      role: "status",
      "aria-live": r === "foreground" ? "assertive" : "polite",
      "aria-atomic": !0,
      children: $
    }), i.jsx(e2, {
      scope: n,
      onClose: O,
      children: ea.createPortal(i.jsx(Bd.ItemSlot, {
        scope: n,
        children: i.jsx(Mb, {
          asChild: !0,
          onEscapeKeyDown: Y(l, () => {
            h.isFocusedToastEscapeKeyDownRef
              .current || O(), h
              .isFocusedToastEscapeKeyDownRef
              .current = !1
          }),
          children: i.jsx(J.li, {
            role: "status",
            "aria-live": "off",
            "aria-atomic": !0,
            tabIndex: 0,
            "data-state": s ? "open" : "closed",
            "data-swipe-direction": h
              .swipeDirection,
            ...b,
            ref: g,
            style: {
              userSelect: "none",
              touchAction: "none",
              ...e.style
            },
            onKeyDown: Y(e.onKeyDown, A => {
              A.key === "Escape" && (l ==
                null || l(A.nativeEvent), A
                .nativeEvent
                .defaultPrevented || (h
                  .isFocusedToastEscapeKeyDownRef
                  .current = !0, O()))
            }),
            onPointerDown: Y(e.onPointerDown, A => {
              A.button === 0 && (w.current = {
                x: A.clientX,
                y: A.clientY
              })
            }),
            onPointerMove: Y(e.onPointerMove, A => {
              if (!w.current) return;
              const z = A.clientX - w.current.x,
                B = A.clientY - w.current.y,
                V = !!N.current,
                R = ["left", "right"].includes(h
                  .swipeDirection),
                I = ["left", "up"].includes(h
                  .swipeDirection) ? Math.min :
                Math.max,
                D = R ? I(0, z) : 0,
                Q = R ? 0 : I(0, B),
                U = A.pointerType === "touch" ?
                10 : 2,
                q = {
                  x: D,
                  y: Q
                },
                X = {
                  originalEvent: A,
                  delta: q
                };
              V ? (N.current = q, Ta(Yb, p, X, {
                  discrete: !1
                })) : Hp(q, h.swipeDirection,
                U) ? (N.current = q, Ta(Xb, d,
                    X, {
                      discrete: !1
                    }), A.target
                  .setPointerCapture(A
                    .pointerId)) : (Math.abs(
                  z) > U || Math.abs(B) > U) &&
                (w.current = null)
            }),
            onPointerUp: Y(e.onPointerUp, A => {
              const z = N.current,
                B = A.target;
              if (B.hasPointerCapture(A
                  .pointerId) && B
                .releasePointerCapture(A
                  .pointerId), N.current = null,
                w.current = null, z) {
                const V = A.currentTarget,
                  R = {
                    originalEvent: A,
                    delta: z
                  };
                Hp(z, h.swipeDirection, h
                  .swipeThreshold) ? Ta(Zb, f,
                  R, {
                    discrete: !0
                  }) : Ta(Jb, v, R, {
                  discrete: !0
                }), V.addEventListener(
                  "click", I => I
                  .preventDefault(), {
                    once: !0
                  })
              }
            })
          })
        })
      }), h.viewport)
    })]
  }) : null
}), r2 = e => {
  const {
    __scopeToast: t,
    children: n,
    ...r
  } = e, o = rl(ta, t), [s, a] = m.useState(!1), [l, c] = m.useState(!1);
  return a2(() => a(!0)), m.useEffect(() => {
    const u = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(u)
  }, []), l ? null : i.jsx(Fd, {
    asChild: !0,
    children: i.jsx(nl, {
      ...r,
      children: s && i.jsxs(i.Fragment, {
        children: [o.label, " ", n]
      })
    })
  })
}, o2 = "ToastTitle", Nv = m.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    ...r
  } = e;
  return i.jsx(J.div, {
    ...r,
    ref: t
  })
});
Nv.displayName = o2;
var s2 = "ToastDescription",
  Ev = m.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      ...r
    } = e;
    return i.jsx(J.div, {
      ...r,
      ref: t
    })
  });
Ev.displayName = s2;
var Cv = "ToastAction",
  Sv = m.forwardRef((e, t) => {
    const {
      altText: n,
      ...r
    } = e;
    return n.trim() ? i.jsx(Pv, {
      altText: n,
      asChild: !0,
      children: i.jsx(zd, {
        ...r,
        ref: t
      })
    }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Cv}\`. Expected non-empty \`string\`.`
      ), null)
  });
Sv.displayName = Cv;
var jv = "ToastClose",
  zd = m.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      ...r
    } = e, o = t2(jv, n);
    return i.jsx(Pv, {
      asChild: !0,
      children: i.jsx(J.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, o.onClose)
      })
    })
  });
zd.displayName = jv;
var Pv = m.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    altText: r,
    ...o
  } = e;
  return i.jsx(J.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t
  })
});

function kv(e) {
  const t = [];
  return Array.from(e.childNodes).forEach(r => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r
      .textContent), i2(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none",
        s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a)
        } else t.push(...kv(r))
    }
  }), t
}

function Ta(e, t, n, {
  discrete: r
}) {
  const o = n.originalEvent.currentTarget,
    s = new CustomEvent(e, {
      bubbles: !0,
      cancelable: !0,
      detail: n
    });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? fv(o, s) : o.dispatchEvent(s)
}
var Hp = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n
};

function a2(e = () => {}) {
  const t = Tt(e);
  qt(() => {
    let n = 0,
      r = 0;
    return n = window.requestAnimationFrame(() => r = window
      .requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
    }
  }, [t])
}

function i2(e) {
  return e.nodeType === e.ELEMENT_NODE
}

function l2(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r
          .tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t
}

function ic(e) {
  const t = document.activeElement;
  return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var c2 = vv,
  Rv = yv,
  Tv = bv,
  Iv = Nv,
  Av = Ev,
  _v = Sv,
  Mv = zd;

function Ov(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (n = Ov(e[t])) && (r && (r += " "), r +=
        n)
    } else
      for (n in e) e[n] && (r && (r += " "), r += n);
  return r
}

function Lv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[
    n]) && (t = Ov(e)) && (r && (r += " "), r += t);
  return r
}
const Wp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
  Qp = Lv,
  Ud = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null) return Qp(e, n == null ?
      void 0 : n.class, n == null ? void 0 : n.className);
    const {
      variants: o,
      defaultVariants: s
    } = t, a = Object.keys(o).map(u => {
        const d = n == null ? void 0 : n[u],
          p = s == null ? void 0 : s[u];
        if (d === null) return null;
        const v = Wp(d) || Wp(p);
        return o[u][v]
      }), l = n && Object.entries(n).reduce((u, d) => {
        let [p, v] = d;
        return v === void 0 || (u[p] = v), u
      }, {}), c = t == null || (r = t.compoundVariants) === null || r ===
      void 0 ? void 0 : r.reduce((u, d) => {
        let {
          class: p,
          className: v,
          ...f
        } = d;
        return Object.entries(f).every(b => {
          let [h, y] = b;
          return Array.isArray(y) ? y.includes({
            ...s,
            ...l
          } [h]) : {
            ...s,
            ...l
          } [h] === y
        }) ? [...u, p, v] : u
      }, []);
    return Qp(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n
      .className)
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u2 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Dv = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(
    t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var d2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f2 = m.forwardRef(({
  color: e = "currentColor",
  size: t = 24,
  strokeWidth: n = 2,
  absoluteStrokeWidth: r,
  className: o = "",
  children: s,
  iconNode: a,
  ...l
}, c) => m.createElement("svg", {
  ref: c,
  ...d2,
  width: t,
  height: t,
  stroke: e,
  strokeWidth: r ? Number(n) * 24 / Number(t) : n,
  className: Dv("lucide", o),
  ...l
}, [...a.map(([u, d]) => m.createElement(u, d)), ...Array.isArray(s) ? s :
  [s]
]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ne = (e, t) => {
  const n = m.forwardRef(({
    className: r,
    ...o
  }, s) => m.createElement(f2, {
    ref: s,
    iconNode: t,
    className: Dv(`lucide-${u2(e)}`, r),
    ...o
  }));
  return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p2 = ne("ArrowLeft", [
  ["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
  }],
  ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = ne("Building2", [
  ["path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    key: "1b4qmf"
  }],
  ["path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    key: "i71pzd"
  }],
  ["path", {
    d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
    key: "10jefs"
  }],
  ["path", {
    d: "M10 6h4",
    key: "1itunk"
  }],
  ["path", {
    d: "M10 10h4",
    key: "tcdvrf"
  }],
  ["path", {
    d: "M10 14h4",
    key: "kelpxr"
  }],
  ["path", {
    d: "M10 18h4",
    key: "1ulq68"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m2 = ne("ChevronDown", [
  ["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = ne("CircleCheckBig", [
  ["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
  }],
  ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h2 = ne("Circle", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = ne("Clock", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }],
  ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fv = ne("Copy", [
  ["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
  }],
  ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g2 = ne("CreditCard", [
  ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
  }],
  ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $v = ne("Download", [
  ["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
  }],
  ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
  }],
  ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v2 = ne("EllipsisVertical", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "1",
    key: "41hilf"
  }],
  ["circle", {
    cx: "12",
    cy: "5",
    r: "1",
    key: "gxeob9"
  }],
  ["circle", {
    cx: "12",
    cy: "19",
    r: "1",
    key: "lyex9k"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x2 = ne("FileText", [
  ["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
  }],
  ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
  }],
  ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
  }],
  ["path", {
    d: "M16 13H8",
    key: "t4e002"
  }],
  ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y2 = ne("Gift", [
  ["rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1",
    key: "bkv52"
  }],
  ["path", {
    d: "M12 8v13",
    key: "1c76mn"
  }],
  ["path", {
    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
    key: "6wjy6b"
  }],
  ["path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
    key: "1ihvrl"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w2 = ne("House", [
  ["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
  }],
  ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b2 = ne("Info", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }],
  ["path", {
    d: "M12 16v-4",
    key: "1dtifu"
  }],
  ["path", {
    d: "M12 8h.01",
    key: "e9boi3"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N2 = ne("LoaderCircle", [
  ["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E2 = ne("Lock", [
  ["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
  }],
  ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C2 = ne("MapPin", [
  ["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
  }],
  ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S2 = ne("MessageSquare", [
  ["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j2 = ne("Minus", [
  ["path", {
    d: "M5 12h14",
    key: "1ays0h"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = ne("Package", [
  ["path", {
    d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
    key: "1a0edw"
  }],
  ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
  }],
  ["path", {
    d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
    key: "yx3hmr"
  }],
  ["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P2 = ne("Plus", [
  ["path", {
    d: "M5 12h14",
    key: "1ays0h"
  }],
  ["path", {
    d: "M12 5v14",
    key: "s699le"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = ne("RotateCcw", [
  ["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
  }],
  ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k2 = ne("Share2", [
  ["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
  }],
  ["circle", {
    cx: "6",
    cy: "12",
    r: "3",
    key: "w7nqdw"
  }],
  ["circle", {
    cx: "18",
    cy: "19",
    r: "3",
    key: "1xt0gg"
  }],
  ["line", {
    x1: "8.59",
    x2: "15.42",
    y1: "13.51",
    y2: "17.49",
    key: "47mynk"
  }],
  ["line", {
    x1: "15.41",
    x2: "8.59",
    y1: "6.51",
    y2: "10.49",
    key: "1n3mei"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = ne("Shield", [
  ["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R2 = ne("ShoppingCart", [
  ["circle", {
    cx: "8",
    cy: "21",
    r: "1",
    key: "jimo8o"
  }],
  ["circle", {
    cx: "19",
    cy: "21",
    r: "1",
    key: "13723u"
  }],
  ["path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
    key: "9zh506"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eu = ne("Star", [
  ["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = ne("TriangleAlert", [
  ["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
  }],
  ["path", {
    d: "M12 9v4",
    key: "juzpu7"
  }],
  ["path", {
    d: "M12 17h.01",
    key: "p32p05"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bv = ne("Truck", [
  ["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
  }],
  ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
  }],
  ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
  }],
  ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
  }],
  ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = ne("X", [
  ["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
  }],
  ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const al = ne("Zap", [
    ["path", {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }]
  ]),
  Vd = "-",
  T2 = e => {
    const t = A2(e),
      {
        conflictingClassGroups: n,
        conflictingClassGroupModifiers: r
      } = e;
    return {
      getClassGroupId: a => {
        const l = a.split(Vd);
        return l[0] === "" && l.length !== 1 && l.shift(), zv(l, t) || I2(a)
      },
      getConflictingClassGroupIds: (a, l) => {
        const c = n[a] || [];
        return l && r[a] ? [...c, ...r[a]] : c
      }
    }
  },
  zv = (e, t) => {
    var a;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? zv(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(Vd);
    return (a = t.validators.find(({
      validator: l
    }) => l(s))) == null ? void 0 : a.classGroupId
  },
  Kp = /^\[(.+)\]$/,
  I2 = e => {
    if (Kp.test(e)) {
      const t = Kp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n
    }
  },
  A2 = e => {
    const {
      theme: t,
      prefix: n
    } = e, r = {
      nextPart: new Map,
      validators: []
    };
    return M2(Object.entries(e.classGroups), n).forEach(([s, a]) => {
      Cu(a, r, s, t)
    }), r
  },
  Cu = (e, t, n, r) => {
    e.forEach(o => {
      if (typeof o == "string") {
        const s = o === "" ? t : Xp(t, o);
        s.classGroupId = n;
        return
      }
      if (typeof o == "function") {
        if (_2(o)) {
          Cu(o(r), t, n, r);
          return
        }
        t.validators.push({
          validator: o,
          classGroupId: n
        });
        return
      }
      Object.entries(o).forEach(([s, a]) => {
        Cu(a, Xp(t, s), n, r)
      })
    })
  },
  Xp = (e, t) => {
    let n = e;
    return t.split(Vd).forEach(r => {
      n.nextPart.has(r) || n.nextPart.set(r, {
        nextPart: new Map,
        validators: []
      }), n = n.nextPart.get(r)
    }), n
  },
  _2 = e => e.isThemeGetter,
  M2 = (e, t) => t ? e.map(([n, r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ?
      Object.fromEntries(Object.entries(s).map(([a, l]) => [t + a, l])) : s);
    return [n, o]
  }) : e,
  O2 = e => {
    if (e < 1) return {
      get: () => {},
      set: () => {}
    };
    let t = 0,
      n = new Map,
      r = new Map;
    const o = (s, a) => {
      n.set(s, a), t++, t > e && (t = 0, r = n, n = new Map)
    };
    return {
      get(s) {
        let a = n.get(s);
        if (a !== void 0) return a;
        if ((a = r.get(s)) !== void 0) return o(s, a), a
      },
      set(s, a) {
        n.has(s) ? n.set(s, a) : o(s, a)
      }
    }
  },
  Uv = "!",
  L2 = e => {
    const {
      separator: t,
      experimentalParseClassName: n
    } = e, r = t.length === 1, o = t[0], s = t.length, a = l => {
      const c = [];
      let u = 0,
        d = 0,
        p;
      for (let y = 0; y < l.length; y++) {
        let x = l[y];
        if (u === 0) {
          if (x === o && (r || l.slice(y, y + s) === t)) {
            c.push(l.slice(d, y)), d = y + s;
            continue
          }
          if (x === "/") {
            p = y;
            continue
          }
        }
        x === "[" ? u++ : x === "]" && u--
      }
      const v = c.length === 0 ? l : l.substring(d),
        f = v.startsWith(Uv),
        b = f ? v.substring(1) : v,
        h = p && p > d ? p - d : void 0;
      return {
        modifiers: c,
        hasImportantModifier: f,
        baseClassName: b,
        maybePostfixModifierPosition: h
      }
    };
    return n ? l => n({
      className: l,
      parseClassName: a
    }) : a
  },
  D2 = e => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
      r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
    }), t.push(...n.sort()), t
  },
  F2 = e => ({
    cache: O2(e.cacheSize),
    parseClassName: L2(e),
    ...T2(e)
  }),
  $2 = /\s+/,
  B2 = (e, t) => {
    const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o
    } = t, s = [], a = e.trim().split($2);
    let l = "";
    for (let c = a.length - 1; c >= 0; c -= 1) {
      const u = a[c],
        {
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: v,
          maybePostfixModifierPosition: f
        } = n(u);
      let b = !!f,
        h = r(b ? v.substring(0, f) : v);
      if (!h) {
        if (!b) {
          l = u + (l.length > 0 ? " " + l : l);
          continue
        }
        if (h = r(v), !h) {
          l = u + (l.length > 0 ? " " + l : l);
          continue
        }
        b = !1
      }
      const y = D2(d).join(":"),
        x = p ? y + Uv : y,
        g = x + h;
      if (s.includes(g)) continue;
      s.push(g);
      const w = o(h, b);
      for (let N = 0; N < w.length; ++N) {
        const E = w[N];
        s.push(x + E)
      }
      l = u + (l.length > 0 ? " " + l : l)
    }
    return l
  };

function z2() {
  let e = 0,
    t, n, r = "";
  for (; e < arguments.length;)(t = arguments[e++]) && (n = Vv(t)) && (r && (
    r += " "), r += n);
  return r
}
const Vv = e => {
  if (typeof e == "string") return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = Vv(e[r])) && (n && (n +=
    " "), n += t);
  return n
};

function U2(e, ...t) {
  let n, r, o, s = a;

  function a(c) {
    const u = t.reduce((d, p) => p(d), e());
    return n = F2(u), r = n.cache.get, o = n.cache.set, s = l, l(c)
  }

  function l(c) {
    const u = r(c);
    if (u) return u;
    const d = B2(c, n);
    return o(c, d), d
  }
  return function() {
    return s(z2.apply(null, arguments))
  }
}
const le = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0, t
  },
  Hv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  V2 = /^\d+\/\d+$/,
  H2 = new Set(["px", "full", "screen"]),
  W2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Q2 =
  /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  G2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  q2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  K2 =
  /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Jt = e => uo(e) || H2.has(e) || V2.test(e),
  En = e => $o(e, "length", rN),
  uo = e => !!e && !Number.isNaN(Number(e)),
  lc = e => $o(e, "number", uo),
  rs = e => !!e && Number.isInteger(Number(e)),
  X2 = e => e.endsWith("%") && uo(e.slice(0, -1)),
  G = e => Hv.test(e),
  Cn = e => W2.test(e),
  Y2 = new Set(["length", "size", "percentage"]),
  J2 = e => $o(e, Y2, Wv),
  Z2 = e => $o(e, "position", Wv),
  eN = new Set(["image", "url"]),
  tN = e => $o(e, eN, sN),
  nN = e => $o(e, "", oN),
  os = () => !0,
  $o = (e, t, n) => {
    const r = Hv.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[
      2]) : !1
  },
  rN = e => Q2.test(e) && !G2.test(e),
  Wv = () => !1,
  oN = e => q2.test(e),
  sN = e => K2.test(e),
  aN = () => {
    const e = le("colors"),
      t = le("spacing"),
      n = le("blur"),
      r = le("brightness"),
      o = le("borderColor"),
      s = le("borderRadius"),
      a = le("borderSpacing"),
      l = le("borderWidth"),
      c = le("contrast"),
      u = le("grayscale"),
      d = le("hueRotate"),
      p = le("invert"),
      v = le("gap"),
      f = le("gradientColorStops"),
      b = le("gradientColorStopPositions"),
      h = le("inset"),
      y = le("margin"),
      x = le("opacity"),
      g = le("padding"),
      w = le("saturate"),
      N = le("scale"),
      E = le("sepia"),
      S = le("skew"),
      j = le("space"),
      C = le("translate"),
      P = () => ["auto", "contain", "none"],
      T = () => ["auto", "hidden", "clip", "visible", "scroll"],
      O = () => ["auto", G, t],
      M = () => [G, t],
      $ = () => ["", Jt, En],
      A = () => ["auto", uo, G],
      z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right",
        "right-bottom", "right-top", "top"
      ],
      B = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten",
        "color-dodge", "color-burn", "hard-light", "soft-light", "difference",
        "exclusion", "hue", "saturation", "color", "luminosity"
      ],
      R = () => ["start", "end", "center", "between", "around", "evenly",
        "stretch"
      ],
      I = () => ["", "0", G],
      D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right",
        "column"
      ],
      Q = () => [uo, G];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [os],
        spacing: [Jt, En],
        blur: ["none", "", Cn, G],
        brightness: Q(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Cn, G],
        borderSpacing: M(),
        borderWidth: $(),
        contrast: Q(),
        grayscale: I(),
        hueRotate: Q(),
        invert: I(),
        gap: M(),
        gradientColorStops: [e],
        gradientColorStopPositions: [X2, En],
        inset: O(),
        margin: O(),
        opacity: Q(),
        padding: M(),
        saturate: Q(),
        scale: Q(),
        sepia: I(),
        skew: Q(),
        space: M(),
        translate: M()
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", "video", G]
        }],
        container: ["container"],
        columns: [{
          columns: [Cn]
        }],
        "break-after": [{
          "break-after": D()
        }],
        "break-before": [{
          "break-before": D()
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
        display: ["block", "inline-block", "inline", "flex", "inline-flex",
          "table", "inline-table", "table-caption", "table-cell",
          "table-column", "table-column-group", "table-footer-group",
          "table-header-group", "table-row-group", "table-row", "flow-root",
          "grid", "inline-grid", "contents", "list-item", "hidden"
        ],
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
          object: [...z(), G]
        }],
        overflow: [{
          overflow: T()
        }],
        "overflow-x": [{
          "overflow-x": T()
        }],
        "overflow-y": [{
          "overflow-y": T()
        }],
        overscroll: [{
          overscroll: P()
        }],
        "overscroll-x": [{
          "overscroll-x": P()
        }],
        "overscroll-y": [{
          "overscroll-y": P()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: [h]
        }],
        "inset-x": [{
          "inset-x": [h]
        }],
        "inset-y": [{
          "inset-y": [h]
        }],
        start: [{
          start: [h]
        }],
        end: [{
          end: [h]
        }],
        top: [{
          top: [h]
        }],
        right: [{
          right: [h]
        }],
        bottom: [{
          bottom: [h]
        }],
        left: [{
          left: [h]
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: ["auto", rs, G]
        }],
        basis: [{
          basis: O()
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["wrap", "wrap-reverse", "nowrap"]
        }],
        flex: [{
          flex: ["1", "auto", "initial", "none", G]
        }],
        grow: [{
          grow: I()
        }],
        shrink: [{
          shrink: I()
        }],
        order: [{
          order: ["first", "last", "none", rs, G]
        }],
        "grid-cols": [{
          "grid-cols": [os]
        }],
        "col-start-end": [{
          col: ["auto", {
            span: ["full", rs, G]
          }, G]
        }],
        "col-start": [{
          "col-start": A()
        }],
        "col-end": [{
          "col-end": A()
        }],
        "grid-rows": [{
          "grid-rows": [os]
        }],
        "row-start-end": [{
          row: ["auto", {
            span: [rs, G]
          }, G]
        }],
        "row-start": [{
          "row-start": A()
        }],
        "row-end": [{
          "row-end": A()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": ["auto", "min", "max", "fr", G]
        }],
        "auto-rows": [{
          "auto-rows": ["auto", "min", "max", "fr", G]
        }],
        gap: [{
          gap: [v]
        }],
        "gap-x": [{
          "gap-x": [v]
        }],
        "gap-y": [{
          "gap-y": [v]
        }],
        "justify-content": [{
          justify: ["normal", ...R()]
        }],
        "justify-items": [{
          "justify-items": ["start", "end", "center", "stretch"]
        }],
        "justify-self": [{
          "justify-self": ["auto", "start", "end", "center", "stretch"]
        }],
        "align-content": [{
          content: ["normal", ...R(), "baseline"]
        }],
        "align-items": [{
          items: ["start", "end", "center", "baseline", "stretch"]
        }],
        "align-self": [{
          self: ["auto", "start", "end", "center", "stretch", "baseline"]
        }],
        "place-content": [{
          "place-content": [...R(), "baseline"]
        }],
        "place-items": [{
          "place-items": ["start", "end", "center", "baseline", "stretch"]
        }],
        "place-self": [{
          "place-self": ["auto", "start", "end", "center", "stretch"]
        }],
        p: [{
          p: [g]
        }],
        px: [{
          px: [g]
        }],
        py: [{
          py: [g]
        }],
        ps: [{
          ps: [g]
        }],
        pe: [{
          pe: [g]
        }],
        pt: [{
          pt: [g]
        }],
        pr: [{
          pr: [g]
        }],
        pb: [{
          pb: [g]
        }],
        pl: [{
          pl: [g]
        }],
        m: [{
          m: [y]
        }],
        mx: [{
          mx: [y]
        }],
        my: [{
          my: [y]
        }],
        ms: [{
          ms: [y]
        }],
        me: [{
          me: [y]
        }],
        mt: [{
          mt: [y]
        }],
        mr: [{
          mr: [y]
        }],
        mb: [{
          mb: [y]
        }],
        ml: [{
          ml: [y]
        }],
        "space-x": [{
          "space-x": [j]
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": [j]
        }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{
          w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
        }],
        "min-w": [{
          "min-w": [G, t, "min", "max", "fit"]
        }],
        "max-w": [{
          "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
            screen: [Cn]
          }, Cn]
        }],
        h: [{
          h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "min-h": [{
          "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "max-h": [{
          "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        size: [{
          size: [G, t, "auto", "min", "max", "fit"]
        }],
        "font-size": [{
          text: ["base", Cn, En]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: ["thin", "extralight", "light", "normal", "medium",
            "semibold", "bold", "extrabold", "black", lc
          ]
        }],
        "font-family": [{
          font: [os]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: ["tighter", "tight", "normal", "wide", "wider",
            "widest", G
          ]
        }],
        "line-clamp": [{
          "line-clamp": ["none", uo, lc]
        }],
        leading: [{
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose",
            Jt, G
          ]
        }],
        "list-image": [{
          "list-image": ["none", G]
        }],
        "list-style-type": [{
          list: ["none", "disc", "decimal", G]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "placeholder-color": [{
          placeholder: [e]
        }],
        "placeholder-opacity": [{
          "placeholder-opacity": [x]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "text-color": [{
          text: [e]
        }],
        "text-opacity": [{
          "text-opacity": [x]
        }],
        "text-decoration": ["underline", "overline", "line-through",
          "no-underline"
        ],
        "text-decoration-style": [{
          decoration: [...B(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: ["auto", "from-font", Jt, En]
        }],
        "underline-offset": [{
          "underline-offset": ["auto", Jt, G]
        }],
        "text-decoration-color": [{
          decoration: [e]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize",
          "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: M()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top",
            "text-bottom", "sub", "super", G
          ]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap",
            "break-spaces"
          ]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", G]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-opacity": [{
          "bg-opacity": [x]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: [...z(), Z2]
        }],
        "bg-repeat": [{
          bg: ["no-repeat", {
            repeat: ["", "x", "y", "round", "space"]
          }]
        }],
        "bg-size": [{
          bg: ["auto", "cover", "contain", J2]
        }],
        "bg-image": [{
          bg: ["none", {
            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, tN]
        }],
        "bg-color": [{
          bg: [e]
        }],
        "gradient-from-pos": [{
          from: [b]
        }],
        "gradient-via-pos": [{
          via: [b]
        }],
        "gradient-to-pos": [{
          to: [b]
        }],
        "gradient-from": [{
          from: [f]
        }],
        "gradient-via": [{
          via: [f]
        }],
        "gradient-to": [{
          to: [f]
        }],
        rounded: [{
          rounded: [s]
        }],
        "rounded-s": [{
          "rounded-s": [s]
        }],
        "rounded-e": [{
          "rounded-e": [s]
        }],
        "rounded-t": [{
          "rounded-t": [s]
        }],
        "rounded-r": [{
          "rounded-r": [s]
        }],
        "rounded-b": [{
          "rounded-b": [s]
        }],
        "rounded-l": [{
          "rounded-l": [s]
        }],
        "rounded-ss": [{
          "rounded-ss": [s]
        }],
        "rounded-se": [{
          "rounded-se": [s]
        }],
        "rounded-ee": [{
          "rounded-ee": [s]
        }],
        "rounded-es": [{
          "rounded-es": [s]
        }],
        "rounded-tl": [{
          "rounded-tl": [s]
        }],
        "rounded-tr": [{
          "rounded-tr": [s]
        }],
        "rounded-br": [{
          "rounded-br": [s]
        }],
        "rounded-bl": [{
          "rounded-bl": [s]
        }],
        "border-w": [{
          border: [l]
        }],
        "border-w-x": [{
          "border-x": [l]
        }],
        "border-w-y": [{
          "border-y": [l]
        }],
        "border-w-s": [{
          "border-s": [l]
        }],
        "border-w-e": [{
          "border-e": [l]
        }],
        "border-w-t": [{
          "border-t": [l]
        }],
        "border-w-r": [{
          "border-r": [l]
        }],
        "border-w-b": [{
          "border-b": [l]
        }],
        "border-w-l": [{
          "border-l": [l]
        }],
        "border-opacity": [{
          "border-opacity": [x]
        }],
        "border-style": [{
          border: [...B(), "hidden"]
        }],
        "divide-x": [{
          "divide-x": [l]
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": [l]
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{
          "divide-opacity": [x]
        }],
        "divide-style": [{
          divide: B()
        }],
        "border-color": [{
          border: [o]
        }],
        "border-color-x": [{
          "border-x": [o]
        }],
        "border-color-y": [{
          "border-y": [o]
        }],
        "border-color-s": [{
          "border-s": [o]
        }],
        "border-color-e": [{
          "border-e": [o]
        }],
        "border-color-t": [{
          "border-t": [o]
        }],
        "border-color-r": [{
          "border-r": [o]
        }],
        "border-color-b": [{
          "border-b": [o]
        }],
        "border-color-l": [{
          "border-l": [o]
        }],
        "divide-color": [{
          divide: [o]
        }],
        "outline-style": [{
          outline: ["", ...B()]
        }],
        "outline-offset": [{
          "outline-offset": [Jt, G]
        }],
        "outline-w": [{
          outline: [Jt, En]
        }],
        "outline-color": [{
          outline: [e]
        }],
        "ring-w": [{
          ring: $()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: [e]
        }],
        "ring-opacity": [{
          "ring-opacity": [x]
        }],
        "ring-offset-w": [{
          "ring-offset": [Jt, En]
        }],
        "ring-offset-color": [{
          "ring-offset": [e]
        }],
        shadow: [{
          shadow: ["", "inner", "none", Cn, nN]
        }],
        "shadow-color": [{
          shadow: [os]
        }],
        opacity: [{
          opacity: [x]
        }],
        "mix-blend": [{
          "mix-blend": [...V(), "plus-lighter", "plus-darker"]
        }],
        "bg-blend": [{
          "bg-blend": V()
        }],
        filter: [{
          filter: ["", "none"]
        }],
        blur: [{
          blur: [n]
        }],
        brightness: [{
          brightness: [r]
        }],
        contrast: [{
          contrast: [c]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", Cn, G]
        }],
        grayscale: [{
          grayscale: [u]
        }],
        "hue-rotate": [{
          "hue-rotate": [d]
        }],
        invert: [{
          invert: [p]
        }],
        saturate: [{
          saturate: [w]
        }],
        sepia: [{
          sepia: [E]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none"]
        }],
        "backdrop-blur": [{
          "backdrop-blur": [n]
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [r]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [c]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": [u]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [d]
        }],
        "backdrop-invert": [{
          "backdrop-invert": [p]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [x]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [w]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": [E]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": [a]
        }],
        "border-spacing-x": [{
          "border-spacing-x": [a]
        }],
        "border-spacing-y": [{
          "border-spacing-y": [a]
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["none", "all", "", "colors", "opacity", "shadow",
            "transform", G
          ]
        }],
        duration: [{
          duration: Q()
        }],
        ease: [{
          ease: ["linear", "in", "out", "in-out", G]
        }],
        delay: [{
          delay: Q()
        }],
        animate: [{
          animate: ["none", "spin", "ping", "pulse", "bounce", G]
        }],
        transform: [{
          transform: ["", "gpu", "none"]
        }],
        scale: [{
          scale: [N]
        }],
        "scale-x": [{
          "scale-x": [N]
        }],
        "scale-y": [{
          "scale-y": [N]
        }],
        rotate: [{
          rotate: [rs, G]
        }],
        "translate-x": [{
          "translate-x": [C]
        }],
        "translate-y": [{
          "translate-y": [C]
        }],
        "skew-x": [{
          "skew-x": [S]
        }],
        "skew-y": [{
          "skew-y": [S]
        }],
        "transform-origin": [{
          origin: ["center", "top", "top-right", "right", "bottom-right",
            "bottom", "bottom-left", "left", "top-left", G
          ]
        }],
        accent: [{
          accent: ["auto", e]
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move",
            "help", "not-allowed", "none", "context-menu", "progress",
            "cell", "crosshair", "vertical-text", "alias", "copy",
            "no-drop", "grab", "grabbing", "all-scroll", "col-resize",
            "row-resize", "n-resize", "e-resize", "s-resize", "w-resize",
            "ne-resize", "nw-resize", "se-resize", "sw-resize",
            "ew-resize", "ns-resize", "nesw-resize", "nwse-resize",
            "zoom-in", "zoom-out", G
          ]
        }],
        "caret-color": [{
          caret: [e]
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
          "scroll-m": M()
        }],
        "scroll-mx": [{
          "scroll-mx": M()
        }],
        "scroll-my": [{
          "scroll-my": M()
        }],
        "scroll-ms": [{
          "scroll-ms": M()
        }],
        "scroll-me": [{
          "scroll-me": M()
        }],
        "scroll-mt": [{
          "scroll-mt": M()
        }],
        "scroll-mr": [{
          "scroll-mr": M()
        }],
        "scroll-mb": [{
          "scroll-mb": M()
        }],
        "scroll-ml": [{
          "scroll-ml": M()
        }],
        "scroll-p": [{
          "scroll-p": M()
        }],
        "scroll-px": [{
          "scroll-px": M()
        }],
        "scroll-py": [{
          "scroll-py": M()
        }],
        "scroll-ps": [{
          "scroll-ps": M()
        }],
        "scroll-pe": [{
          "scroll-pe": M()
        }],
        "scroll-pt": [{
          "scroll-pt": M()
        }],
        "scroll-pr": [{
          "scroll-pr": M()
        }],
        "scroll-pb": [{
          "scroll-pb": M()
        }],
        "scroll-pl": [{
          "scroll-pl": M()
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
          "will-change": ["auto", "scroll", "contents", "transform", G]
        }],
        fill: [{
          fill: [e, "none"]
        }],
        "stroke-w": [{
          stroke: [Jt, En, lc]
        }],
        stroke: [{
          stroke: [e, "none"]
        }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom",
          "left"
        ],
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
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure",
          "fvn-spacing", "fvn-fraction"
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r",
          "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee",
          "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r",
          "border-w-b", "border-w-l"
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-s", "border-color-e", "border-color-t",
          "border-color-r", "border-color-b", "border-color-l"
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me",
          "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe",
          "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"
        ],
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
  },
  iN = U2(aN);

function se(...e) {
  return iN(Lv(e))
}
const lN = c2,
  Qv = m.forwardRef(({
    className: e,
    ...t
  }, n) => i.jsx(Rv, {
    ref: n,
    className: se(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e),
    ...t
  }));
Qv.displayName = Rv.displayName;
const cN = Ud(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }),
  Gv = m.forwardRef(({
    className: e,
    variant: t,
    ...n
  }, r) => i.jsx(Tv, {
    ref: r,
    className: se(cN({
      variant: t
    }), e),
    ...n
  }));
Gv.displayName = Tv.displayName;
const uN = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx(_v, {
  ref: n,
  className: se(
    "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
    e),
  ...t
}));
uN.displayName = _v.displayName;
const qv = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx(Mv, {
  ref: n,
  className: se(
    "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
    e),
  "toast-close": "",
  ...t,
  children: i.jsx(sl, {
    className: "h-4 w-4"
  })
}));
qv.displayName = Mv.displayName;
const Kv = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx(Iv, {
  ref: n,
  className: se("text-sm font-semibold", e),
  ...t
}));
Kv.displayName = Iv.displayName;
const Xv = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx(Av, {
  ref: n,
  className: se("text-sm opacity-90", e),
  ...t
}));
Xv.displayName = Av.displayName;

function dN() {
  const {
    toasts: e
  } = tr();
  return i.jsxs(lN, {
    children: [e.map(function({
      id: t,
      title: n,
      description: r,
      action: o,
      ...s
    }) {
      return i.jsxs(Gv, {
        ...s,
        children: [i.jsxs("div", {
          className: "grid gap-1",
          children: [n && i.jsx(Kv, {
            children: n
          }), r && i.jsx(Xv, {
            children: r
          })]
        }), o, i.jsx(qv, {})]
      }, t)
    }), i.jsx(Qv, {})]
  })
}
var Yp = ["light", "dark"],
  fN = "(prefers-color-scheme: dark)",
  pN = m.createContext(void 0),
  mN = {
    setTheme: e => {},
    themes: []
  },
  hN = () => {
    var e;
    return (e = m.useContext(pN)) != null ? e : mN
  };
m.memo(({
  forcedTheme: e,
  storageKey: t,
  attribute: n,
  enableSystem: r,
  enableColorScheme: o,
  defaultTheme: s,
  value: a,
  attrs: l,
  nonce: c
}) => {
  let u = s === "system",
    d = n === "class" ?
    `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(b=>`'${b}'`).join(",")})`};` :
    `var d=document.documentElement,n='${n}',s='setAttribute';`,
    p = o ? Yp.includes(s) && s ?
    `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` :
    "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
    v = (b, h = !1, y = !0) => {
      let x = a ? a[b] : b,
        g = h ? b + "|| ''" : `'${x}'`,
        w = "";
      return o && y && !h && Yp.includes(b) && (w +=
          `d.style.colorScheme = '${b}';`), n === "class" ? h || x ? w +=
        `c.add(${g})` : w += "null" : x && (w += `d[s](n,${g})`), w
    },
    f = e ? `!function(){${d}${v(e)}}()` : r ?
    `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${fN}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${v(a?"x[e]":"e",!0)}}${u?"":"else{"+v(s,!1,!1)+"}"}${p}}catch(e){}}()` :
    `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${v(a?"x[e]":"e",!0)}}else{${v(s,!1,!1)};}${p}}catch(t){}}();`;
  return m.createElement("script", {
    nonce: c,
    dangerouslySetInnerHTML: {
      __html: f
    }
  })
});
var gN = e => {
    switch (e) {
      case "success":
        return yN;
      case "info":
        return bN;
      case "warning":
        return wN;
      case "error":
        return NN;
      default:
        return null
    }
  },
  vN = Array(12).fill(0),
  xN = ({
    visible: e,
    className: t
  }) => _.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
  }, _.createElement("div", {
    className: "sonner-spinner"
  }, vN.map((n, r) => _.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
  })))),
  yN = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })),
  wN = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })),
  bN = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })),
  NN = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })),
  EN = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), _.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })),
  CN = () => {
    let [e, t] = _.useState(document.hidden);
    return _.useEffect(() => {
      let n = () => {
        t(document.hidden)
      };
      return document.addEventListener("visibilitychange", n), () => window
        .removeEventListener("visibilitychange", n)
    }, []), e
  },
  Su = 1,
  SN = class {
    constructor() {
      this.subscribe = e => (this.subscribers.push(e), () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1)
        }), this.publish = e => {
          this.subscribers.forEach(t => t(e))
        }, this.addToast = e => {
          this.publish(e), this.toasts = [...this.toasts, e]
        }, this.create = e => {
          var t;
          let {
            message: n,
            ...r
          } = e, o = typeof(e == null ? void 0 : e.id) == "number" || ((t = e
              .id) == null ? void 0 : t.length) > 0 ? e.id : Su++, s = this
            .toasts.find(l => l.id === o), a = e.dismissible === void 0 ? !0 :
            e.dismissible;
          return this.dismissedToasts.has(o) && this.dismissedToasts.delete(
            o), s ? this.toasts = this.toasts.map(l => l.id === o ? (this
              .publish({
                ...l,
                ...e,
                id: o,
                title: n
              }), {
                ...l,
                ...e,
                id: o,
                dismissible: a,
                title: n
              }) : l) : this.addToast({
              title: n,
              ...r,
              dismissible: a,
              id: o
            }), o
        }, this.dismiss = e => (this.dismissedToasts.add(e), e || this.toasts
          .forEach(t => {
            this.subscribers.forEach(n => n({
              id: t.id,
              dismiss: !0
            }))
          }), this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
          })), e), this.message = (e, t) => this.create({
          ...t,
          message: e
        }), this.error = (e, t) => this.create({
          ...t,
          message: e,
          type: "error"
        }), this.success = (e, t) => this.create({
          ...t,
          type: "success",
          message: e
        }), this.info = (e, t) => this.create({
          ...t,
          type: "info",
          message: e
        }), this.warning = (e, t) => this.create({
          ...t,
          type: "warning",
          message: e
        }), this.loading = (e, t) => this.create({
          ...t,
          type: "loading",
          message: e
        }), this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 && (n = this.create({
            ...t,
            promise: e,
            type: "loading",
            message: t.loading,
            description: typeof t.description != "function" ? t
              .description : void 0
          }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            s, a = r.then(async c => {
              if (s = ["resolve", c], _.isValidElement(c)) o = !1, this
                .create({
                  id: n,
                  type: "default",
                  message: c
                });
              else if (PN(c) && !c.ok) {
                o = !1;
                let u = typeof t.error == "function" ? await t.error(
                    `HTTP error! status: ${c.status}`) : t.error,
                  d = typeof t.description == "function" ? await t
                  .description(`HTTP error! status: ${c.status}`) : t
                  .description;
                this.create({
                  id: n,
                  type: "error",
                  message: u,
                  description: d
                })
              } else if (t.success !== void 0) {
                o = !1;
                let u = typeof t.success == "function" ? await t.success(
                    c) : t.success,
                  d = typeof t.description == "function" ? await t
                  .description(c) : t.description;
                this.create({
                  id: n,
                  type: "success",
                  message: u,
                  description: d
                })
              }
            }).catch(async c => {
              if (s = ["reject", c], t.error !== void 0) {
                o = !1;
                let u = typeof t.error == "function" ? await t.error(c) :
                  t.error,
                  d = typeof t.description == "function" ? await t
                  .description(c) : t.description;
                this.create({
                  id: n,
                  type: "error",
                  message: u,
                  description: d
                })
              }
            }).finally(() => {
              var c;
              o && (this.dismiss(n), n = void 0), (c = t.finally) == null ||
                c.call(t)
            }),
            l = () => new Promise((c, u) => a.then(() => s[0] === "reject" ?
              u(s[1]) : c(s[1])).catch(u));
          return typeof n != "string" && typeof n != "number" ? {
            unwrap: l
          } : Object.assign(n, {
            unwrap: l
          })
        }, this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Su++;
          return this.create({
            jsx: e(n),
            id: n,
            ...t
          }), n
        }, this.getActiveToasts = () => this.toasts.filter(e => !this
          .dismissedToasts.has(e.id)), this.subscribers = [], this
      .toasts = [], this.dismissedToasts = new Set
    }
  },
  He = new SN,
  jN = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Su++;
    return He.addToast({
      title: e,
      ...t,
      id: n
    }), n
  },
  PN = e => e && typeof e == "object" && "ok" in e && typeof e.ok ==
  "boolean" && "status" in e && typeof e.status == "number",
  kN = jN,
  RN = () => He.toasts,
  TN = () => He.getActiveToasts();
Object.assign(kN, {
  success: He.success,
  info: He.info,
  warning: He.warning,
  error: He.error,
  custom: He.custom,
  message: He.message,
  promise: He.promise,
  dismiss: He.dismiss,
  loading: He.loading
}, {
  getHistory: RN,
  getToasts: TN
});

function IN(e, {
  insertAt: t
} = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n
      .firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e :
    r.appendChild(document.createTextNode(e))
}
IN(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function Ia(e) {
  return e.label !== void 0
}
var AN = 3,
  _N = "32px",
  MN = "16px",
  Jp = 4e3,
  ON = 356,
  LN = 14,
  DN = 20,
  FN = 200;

function wt(...e) {
  return e.filter(Boolean).join(" ")
}

function $N(e) {
  let [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r
}
var BN = e => {
  var t, n, r, o, s, a, l, c, u, d, p;
  let {
    invert: v,
    toast: f,
    unstyled: b,
    interacting: h,
    setHeights: y,
    visibleToasts: x,
    heights: g,
    index: w,
    toasts: N,
    expanded: E,
    removeToast: S,
    defaultRichColors: j,
    closeButton: C,
    style: P,
    cancelButtonStyle: T,
    actionButtonStyle: O,
    className: M = "",
    descriptionClassName: $ = "",
    duration: A,
    position: z,
    gap: B,
    loadingIcon: V,
    expandByDefault: R,
    classNames: I,
    icons: D,
    closeButtonAriaLabel: Q = "Close toast",
    pauseWhenPageIsHidden: U
  } = e, [q, X] = _.useState(null), [we, Ie] = _.useState(null), [te, Ar] = _
    .useState(!1), [gn, or] = _.useState(!1), [vn, _r] = _.useState(!1), [xn,
      la
    ] = _.useState(!1), [kl, ca] = _.useState(!1), [Rl, Go] = _.useState(0), [
      Mr, Cf
    ] = _.useState(0), qo = _.useRef(f.duration || A || Jp), Sf = _.useRef(
      null), sr = _.useRef(null), Ay = w === 0, _y = w + 1 <= x, st = f.type,
    Or = f.dismissible !== !1, My = f.className || "", Oy = f
    .descriptionClassName || "", ua = _.useMemo(() => g.findIndex(H => H
      .toastId === f.id) || 0, [g, f.id]), Ly = _.useMemo(() => {
      var H;
      return (H = f.closeButton) != null ? H : C
    }, [f.closeButton, C]), jf = _.useMemo(() => f.duration || A || Jp, [f
      .duration, A
    ]), Tl = _.useRef(0), Lr = _.useRef(0), Pf = _.useRef(0), Dr = _.useRef(
      null), [Dy, Fy] = z.split("-"), kf = _.useMemo(() => g.reduce((H, oe,
      de) => de >= ua ? H : H + oe.height, 0), [g, ua]), Rf = CN(), $y = f
    .invert || v, Il = st === "loading";
  Lr.current = _.useMemo(() => ua * B + kf, [ua, kf]), _.useEffect(() => {
    qo.current = jf
  }, [jf]), _.useEffect(() => {
    Ar(!0)
  }, []), _.useEffect(() => {
    let H = sr.current;
    if (H) {
      let oe = H.getBoundingClientRect().height;
      return Cf(oe), y(de => [{
        toastId: f.id,
        height: oe,
        position: f.position
      }, ...de]), () => y(de => de.filter(gt => gt.toastId !== f.id))
    }
  }, [y, f.id]), _.useLayoutEffect(() => {
    if (!te) return;
    let H = sr.current,
      oe = H.style.height;
    H.style.height = "auto";
    let de = H.getBoundingClientRect().height;
    H.style.height = oe, Cf(de), y(gt => gt.find(vt => vt.toastId === f
      .id) ? gt.map(vt => vt.toastId === f.id ? {
      ...vt,
      height: de
    } : vt) : [{
      toastId: f.id,
      height: de,
      position: f.position
    }, ...gt])
  }, [te, f.title, f.description, y, f.id]);
  let yn = _.useCallback(() => {
    or(!0), Go(Lr.current), y(H => H.filter(oe => oe.toastId !== f.id)),
      setTimeout(() => {
        S(f)
      }, FN)
  }, [f, S, y, Lr]);
  _.useEffect(() => {
    if (f.promise && st === "loading" || f.duration === 1 / 0 || f
      .type === "loading") return;
    let H;
    return E || h || U && Rf ? (() => {
      if (Pf.current < Tl.current) {
        let oe = new Date().getTime() - Tl.current;
        qo.current = qo.current - oe
      }
      Pf.current = new Date().getTime()
    })() : qo.current !== 1 / 0 && (Tl.current = new Date().getTime(),
      H = setTimeout(() => {
        var oe;
        (oe = f.onAutoClose) == null || oe.call(f, f), yn()
      }, qo.current)), () => clearTimeout(H)
  }, [E, h, f, st, U, Rf, yn]), _.useEffect(() => {
    f.delete && yn()
  }, [yn, f.delete]);

  function By() {
    var H, oe, de;
    return D != null && D.loading ? _.createElement("div", {
      className: wt(I == null ? void 0 : I.loader, (H = f == null ?
          void 0 : f.classNames) == null ? void 0 : H.loader,
        "sonner-loader"),
      "data-visible": st === "loading"
    }, D.loading) : V ? _.createElement("div", {
      className: wt(I == null ? void 0 : I.loader, (oe = f == null ?
          void 0 : f.classNames) == null ? void 0 : oe.loader,
        "sonner-loader"),
      "data-visible": st === "loading"
    }, V) : _.createElement(xN, {
      className: wt(I == null ? void 0 : I.loader, (de = f == null ?
        void 0 : f.classNames) == null ? void 0 : de.loader),
      visible: st === "loading"
    })
  }
  return _.createElement("li", {
      tabIndex: 0,
      ref: sr,
      className: wt(M, My, I == null ? void 0 : I.toast, (t = f == null ?
          void 0 : f.classNames) == null ? void 0 : t.toast, I == null ?
        void 0 : I.default, I == null ? void 0 : I[st], (n = f == null ?
          void 0 : f.classNames) == null ? void 0 : n[st]),
      "data-sonner-toast": "",
      "data-rich-colors": (r = f.richColors) != null ? r : j,
      "data-styled": !(f.jsx || f.unstyled || b),
      "data-mounted": te,
      "data-promise": !!f.promise,
      "data-swiped": kl,
      "data-removed": gn,
      "data-visible": _y,
      "data-y-position": Dy,
      "data-x-position": Fy,
      "data-index": w,
      "data-front": Ay,
      "data-swiping": vn,
      "data-dismissible": Or,
      "data-type": st,
      "data-invert": $y,
      "data-swipe-out": xn,
      "data-swipe-direction": we,
      "data-expanded": !!(E || R && te),
      style: {
        "--index": w,
        "--toasts-before": w,
        "--z-index": N.length - w,
        "--offset": `${gn?Rl:Lr.current}px`,
        "--initial-height": R ? "auto" : `${Mr}px`,
        ...P,
        ...f.style
      },
      onDragEnd: () => {
        _r(!1), X(null), Dr.current = null
      },
      onPointerDown: H => {
        Il || !Or || (Sf.current = new Date, Go(Lr.current), H.target
          .setPointerCapture(H.pointerId), H.target.tagName !==
          "BUTTON" && (_r(!0), Dr.current = {
            x: H.clientX,
            y: H.clientY
          }))
      },
      onPointerUp: () => {
        var H, oe, de, gt;
        if (xn || !Or) return;
        Dr.current = null;
        let vt = Number(((H = sr.current) == null ? void 0 : H.style
              .getPropertyValue("--swipe-amount-x").replace("px", "")) ||
            0),
          wn = Number(((oe = sr.current) == null ? void 0 : oe.style
              .getPropertyValue("--swipe-amount-y").replace("px", "")) ||
            0),
          ar = new Date().getTime() - ((de = Sf.current) == null ?
            void 0 : de.getTime()),
          xt = q === "x" ? vt : wn,
          bn = Math.abs(xt) / ar;
        if (Math.abs(xt) >= DN || bn > .11) {
          Go(Lr.current), (gt = f.onDismiss) == null || gt.call(f, f), Ie(
            q === "x" ? vt > 0 ? "right" : "left" : wn > 0 ? "down" :
            "up"), yn(), la(!0), ca(!1);
          return
        }
        _r(!1), X(null)
      },
      onPointerMove: H => {
        var oe, de, gt, vt;
        if (!Dr.current || !Or || ((oe = window.getSelection()) == null ?
            void 0 : oe.toString().length) > 0) return;
        let wn = H.clientY - Dr.current.y,
          ar = H.clientX - Dr.current.x,
          xt = (de = e.swipeDirections) != null ? de : $N(z);
        !q && (Math.abs(ar) > 1 || Math.abs(wn) > 1) && X(Math.abs(ar) >
          Math.abs(wn) ? "x" : "y");
        let bn = {
          x: 0,
          y: 0
        };
        q === "y" ? (xt.includes("top") || xt.includes("bottom")) && (xt
            .includes("top") && wn < 0 || xt.includes("bottom") && wn > 0
            ) && (bn.y = wn) : q === "x" && (xt.includes("left") || xt
            .includes("right")) && (xt.includes("left") && ar < 0 || xt
            .includes("right") && ar > 0) && (bn.x = ar), (Math.abs(bn
            .x) > 0 || Math.abs(bn.y) > 0) && ca(!0), (gt = sr.current) ==
          null || gt.style.setProperty("--swipe-amount-x", `${bn.x}px`), (
            vt = sr.current) == null || vt.style.setProperty(
            "--swipe-amount-y", `${bn.y}px`)
      }
    }, Ly && !f.jsx ? _.createElement("button", {
      "aria-label": Q,
      "data-disabled": Il,
      "data-close-button": !0,
      onClick: Il || !Or ? () => {} : () => {
        var H;
        yn(), (H = f.onDismiss) == null || H.call(f, f)
      },
      className: wt(I == null ? void 0 : I.closeButton, (o = f == null ?
        void 0 : f.classNames) == null ? void 0 : o.closeButton)
    }, (s = D == null ? void 0 : D.close) != null ? s : EN) : null, f.jsx ||
    m.isValidElement(f.title) ? f.jsx ? f.jsx : typeof f.title ==
    "function" ? f.title() : f.title : _.createElement(_.Fragment, null,
      st || f.icon || f.promise ? _.createElement("div", {
          "data-icon": "",
          className: wt(I == null ? void 0 : I.icon, (a = f == null ?
            void 0 : f.classNames) == null ? void 0 : a.icon)
        }, f.promise || f.type === "loading" && !f.icon ? f.icon || By() :
        null, f.type !== "loading" ? f.icon || (D == null ? void 0 : D[
        st]) || gN(st) : null) : null, _.createElement("div", {
          "data-content": "",
          className: wt(I == null ? void 0 : I.content, (l = f == null ?
            void 0 : f.classNames) == null ? void 0 : l.content)
        }, _.createElement("div", {
          "data-title": "",
          className: wt(I == null ? void 0 : I.title, (c = f == null ?
            void 0 : f.classNames) == null ? void 0 : c.title)
        }, typeof f.title == "function" ? f.title() : f.title), f
        .description ? _.createElement("div", {
            "data-description": "",
            className: wt($, Oy, I == null ? void 0 : I.description, (u =
                f == null ? void 0 : f.classNames) == null ? void 0 : u
              .description)
          }, typeof f.description == "function" ? f.description() : f
          .description) : null), m.isValidElement(f.cancel) ? f.cancel : f
      .cancel && Ia(f.cancel) ? _.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: f.cancelButtonStyle || T,
        onClick: H => {
          var oe, de;
          Ia(f.cancel) && Or && ((de = (oe = f.cancel).onClick) ==
            null || de.call(oe, H), yn())
        },
        className: wt(I == null ? void 0 : I.cancelButton, (d = f ==
            null ? void 0 : f.classNames) == null ? void 0 : d
          .cancelButton)
      }, f.cancel.label) : null, m.isValidElement(f.action) ? f.action : f
      .action && Ia(f.action) ? _.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: f.actionButtonStyle || O,
        onClick: H => {
          var oe, de;
          Ia(f.action) && ((de = (oe = f.action).onClick) == null || de
            .call(oe, H), !H.defaultPrevented && yn())
        },
        className: wt(I == null ? void 0 : I.actionButton, (p = f ==
            null ? void 0 : f.classNames) == null ? void 0 : p
          .actionButton)
      }, f.action.label) : null))
};

function Zp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement)
    .direction : e
}

function zN(e, t) {
  let n = {};
  return [e, t].forEach((r, o) => {
    let s = o === 1,
      a = s ? "--mobile-offset" : "--offset",
      l = s ? MN : _N;

    function c(u) {
      ["top", "right", "bottom", "left"].forEach(d => {
        n[`${a}-${d}`] = typeof u == "number" ? `${u}px` : u
      })
    }
    typeof r == "number" || typeof r == "string" ? c(r) : typeof r ==
      "object" ? ["top", "right", "bottom", "left"].forEach(u => {
        r[u] === void 0 ? n[`${a}-${u}`] = l : n[`${a}-${u}`] = typeof r[
          u] == "number" ? `${r[u]}px` : r[u]
      }) : c(l)
  }), n
}
var UN = m.forwardRef(function(e, t) {
  let {
    invert: n,
    position: r = "bottom-right",
    hotkey: o = ["altKey", "KeyT"],
    expand: s,
    closeButton: a,
    className: l,
    offset: c,
    mobileOffset: u,
    theme: d = "light",
    richColors: p,
    duration: v,
    style: f,
    visibleToasts: b = AN,
    toastOptions: h,
    dir: y = Zp(),
    gap: x = LN,
    loadingIcon: g,
    icons: w,
    containerAriaLabel: N = "Notifications",
    pauseWhenPageIsHidden: E
  } = e, [S, j] = _.useState([]), C = _.useMemo(() => Array.from(new Set([r]
      .concat(S.filter(U => U.position).map(U => U.position)))), [S, r]), [
      P, T
    ] = _.useState([]), [O, M] = _.useState(!1), [$, A] = _.useState(!1), [
      z, B
    ] = _.useState(d !== "system" ? d : typeof window < "u" && window
      .matchMedia && window.matchMedia("(prefers-color-scheme: dark)")
      .matches ? "dark" : "light"), V = _.useRef(null), R = o.join("+")
    .replace(/Key/g, "").replace(/Digit/g, ""), I = _.useRef(null), D = _
    .useRef(!1), Q = _.useCallback(U => {
      j(q => {
        var X;
        return (X = q.find(we => we.id === U.id)) != null && X
          .delete || He.dismiss(U.id), q.filter(({
            id: we
          }) => we !== U.id)
      })
    }, []);
  return _.useEffect(() => He.subscribe(U => {
    if (U.dismiss) {
      j(q => q.map(X => X.id === U.id ? {
        ...X,
        delete: !0
      } : X));
      return
    }
    setTimeout(() => {
      lv.flushSync(() => {
        j(q => {
          let X = q.findIndex(we => we.id === U.id);
          return X !== -1 ? [...q.slice(0, X), {
            ...q[X],
            ...U
          }, ...q.slice(X + 1)] : [U, ...q]
        })
      })
    })
  }), []), _.useEffect(() => {
    if (d !== "system") {
      B(d);
      return
    }
    if (d === "system" && (window.matchMedia && window.matchMedia(
        "(prefers-color-scheme: dark)").matches ? B("dark") : B(
        "light")), typeof window > "u") return;
    let U = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      U.addEventListener("change", ({
        matches: q
      }) => {
        B(q ? "dark" : "light")
      })
    } catch {
      U.addListener(({
        matches: X
      }) => {
        try {
          B(X ? "dark" : "light")
        } catch (we) {
          console.error(we)
        }
      })
    }
  }, [d]), _.useEffect(() => {
    S.length <= 1 && M(!1)
  }, [S]), _.useEffect(() => {
    let U = q => {
      var X, we;
      o.every(Ie => q[Ie] || q.code === Ie) && (M(!0), (X = V
        .current) == null || X.focus()), q.code === "Escape" && (
        document.activeElement === V.current || (we = V.current) !=
        null && we.contains(document.activeElement)) && M(!1)
    };
    return document.addEventListener("keydown", U), () => document
      .removeEventListener("keydown", U)
  }, [o]), _.useEffect(() => {
    if (V.current) return () => {
      I.current && (I.current.focus({
        preventScroll: !0
      }), I.current = null, D.current = !1)
    }
  }, [V.current]), _.createElement("section", {
    ref: t,
    "aria-label": `${N} ${R}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, C.map((U, q) => {
    var X;
    let [we, Ie] = U.split("-");
    return S.length ? _.createElement("ol", {
      key: U,
      dir: y === "auto" ? Zp() : y,
      tabIndex: -1,
      ref: V,
      className: l,
      "data-sonner-toaster": !0,
      "data-theme": z,
      "data-y-position": we,
      "data-lifted": O && S.length > 1 && !s,
      "data-x-position": Ie,
      style: {
        "--front-toast-height": `${((X=P[0])==null?void 0:X.height)||0}px`,
        "--width": `${ON}px`,
        "--gap": `${x}px`,
        ...f,
        ...zN(c, u)
      },
      onBlur: te => {
        D.current && !te.currentTarget.contains(te
          .relatedTarget) && (D.current = !1, I.current && (I
          .current.focus({
            preventScroll: !0
          }), I.current = null))
      },
      onFocus: te => {
        te.target instanceof HTMLElement && te.target.dataset
          .dismissible === "false" || D.current || (D
            .current = !0, I.current = te.relatedTarget)
      },
      onMouseEnter: () => M(!0),
      onMouseMove: () => M(!0),
      onMouseLeave: () => {
        $ || M(!1)
      },
      onDragEnd: () => M(!1),
      onPointerDown: te => {
        te.target instanceof HTMLElement && te.target.dataset
          .dismissible === "false" || A(!0)
      },
      onPointerUp: () => A(!1)
    }, S.filter(te => !te.position && q === 0 || te.position ===
      U).map((te, Ar) => {
      var gn, or;
      return _.createElement(BN, {
        key: te.id,
        icons: w,
        index: Ar,
        toast: te,
        defaultRichColors: p,
        duration: (gn = h == null ? void 0 : h.duration) !=
          null ? gn : v,
        className: h == null ? void 0 : h.className,
        descriptionClassName: h == null ? void 0 : h
          .descriptionClassName,
        invert: n,
        visibleToasts: b,
        closeButton: (or = h == null ? void 0 : h
          .closeButton) != null ? or : a,
        interacting: $,
        position: U,
        style: h == null ? void 0 : h.style,
        unstyled: h == null ? void 0 : h.unstyled,
        classNames: h == null ? void 0 : h.classNames,
        cancelButtonStyle: h == null ? void 0 : h
          .cancelButtonStyle,
        actionButtonStyle: h == null ? void 0 : h
          .actionButtonStyle,
        removeToast: Q,
        toasts: S.filter(vn => vn.position == te.position),
        heights: P.filter(vn => vn.position == te.position),
        setHeights: T,
        expandByDefault: s,
        gap: x,
        loadingIcon: g,
        expanded: O,
        pauseWhenPageIsHidden: E,
        swipeDirections: e.swipeDirections
      })
    })) : null
  }))
});
const VN = ({
  ...e
}) => {
  const {
    theme: t = "system"
  } = hN();
  return i.jsx(UN, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
      }
    },
    ...e
  })
};
var HN = Qu[" useId ".trim().toString()] || (() => {}),
  WN = 0;

function fo(e) {
  const [t, n] = m.useState(HN());
  return qt(() => {
    n(r => r ?? String(WN++))
  }, [e]), t ? `radix-${t}` : ""
}
const QN = ["top", "right", "bottom", "left"],
  Xn = Math.min,
  Ye = Math.max,
  Pi = Math.round,
  Aa = Math.floor,
  Gt = e => ({
    x: e,
    y: e
  }),
  GN = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  },
  qN = {
    start: "end",
    end: "start"
  };

function ju(e, t, n) {
  return Ye(e, Xn(t, n))
}

function fn(e, t) {
  return typeof e == "function" ? e(t) : e
}

function pn(e) {
  return e.split("-")[0]
}

function Bo(e) {
  return e.split("-")[1]
}

function Hd(e) {
  return e === "x" ? "y" : "x"
}

function Wd(e) {
  return e === "y" ? "height" : "width"
}
const KN = new Set(["top", "bottom"]);

function Ht(e) {
  return KN.has(pn(e)) ? "y" : "x"
}

function Qd(e) {
  return Hd(Ht(e))
}

function XN(e, t, n) {
  n === void 0 && (n = !1);
  const r = Bo(e),
    o = Qd(e),
    s = Wd(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r ===
    "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = ki(a)), [a, ki(a)]
}

function YN(e) {
  const t = ki(e);
  return [Pu(e), t, Pu(t)]
}

function Pu(e) {
  return e.replace(/start|end/g, t => qN[t])
}
const em = ["left", "right"],
  tm = ["right", "left"],
  JN = ["top", "bottom"],
  ZN = ["bottom", "top"];

function eE(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? tm : em : t ? em : tm;
    case "left":
    case "right":
      return t ? JN : ZN;
    default:
      return []
  }
}

function tE(e, t, n, r) {
  const o = Bo(e);
  let s = eE(pn(e), n === "start", r);
  return o && (s = s.map(a => a + "-" + o), t && (s = s.concat(s.map(Pu)))), s
}

function ki(e) {
  return e.replace(/left|right|bottom|top/g, t => GN[t])
}

function nE(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  }
}

function Yv(e) {
  return typeof e != "number" ? nE(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  }
}

function Ri(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  }
}

function nm(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Ht(t),
    a = Qd(t),
    l = Wd(a),
    c = pn(t),
    u = s === "y",
    d = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    v = r[l] / 2 - o[l] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      }
  }
  switch (Bo(t)) {
    case "start":
      f[a] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      f[a] += v * (n && u ? -1 : 1);
      break
  }
  return f
}
const rE = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = n, l = s.filter(Boolean), c = await (a.isRTL == null ? void 0 : a
    .isRTL(t));
  let u = await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }),
    {
      x: d,
      y: p
    } = nm(u, r, c),
    v = r,
    f = {},
    b = 0;
  for (let h = 0; h < l.length; h++) {
    const {
      name: y,
      fn: x
    } = l[h], {
      x: g,
      y: w,
      data: N,
      reset: E
    } = await x({
      x: d,
      y: p,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: f,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = g ?? d, p = w ?? p, f = {
      ...f,
      [y]: {
        ...f[y],
        ...N
      }
    }, E && b <= 50 && (b++, typeof E == "object" && (E.placement && (v =
      E.placement), E.rects && (u = E.rects === !0 ? await a
      .getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : E.rects), {
      x: d,
      y: p
    } = nm(u, v, c)), h = -1)
  }
  return {
    x: d,
    y: p,
    placement: v,
    strategy: o,
    middlewareData: f
  }
};
async function Bs(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: a,
    elements: l,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: v = !1,
    padding: f = 0
  } = fn(t, e), b = Yv(f), y = l[v ? p === "floating" ? "reference" :
    "floating" : p], x = Ri(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(
      y))) == null || n ? y : y.contextElement || await (s
        .getDocumentElement == null ? void 0 : s.getDocumentElement(l
          .floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), g = p === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (s.getOffsetParent == null ? void 0 : s
    .getOffsetParent(l.floating)), N = await (s.isElement == null ? void 0 :
    s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) ||
  {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Ri(s.convertOffsetParentRelativeRectToViewportRelativeRect ?
    await s.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: l,
      rect: g,
      offsetParent: w,
      strategy: c
    }) : g);
  return {
    top: (x.top - E.top + b.top) / N.y,
    bottom: (E.bottom - x.bottom + b.bottom) / N.y,
    left: (x.left - E.left + b.left) / N.x,
    right: (E.right - x.right + b.right) / N.x
  }
}
const oE = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        platform: a,
        elements: l,
        middlewareData: c
      } = t, {
        element: u,
        padding: d = 0
      } = fn(e, t) || {};
      if (u == null) return {};
      const p = Yv(d),
        v = {
          x: n,
          y: r
        },
        f = Qd(o),
        b = Wd(f),
        h = await a.getDimensions(u),
        y = f === "y",
        x = y ? "top" : "left",
        g = y ? "bottom" : "right",
        w = y ? "clientHeight" : "clientWidth",
        N = s.reference[b] + s.reference[f] - v[f] - s.floating[b],
        E = v[f] - s.reference[f],
        S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(
          u));
      let j = S ? S[w] : 0;
      (!j || !await (a.isElement == null ? void 0 : a.isElement(S))) && (j =
        l.floating[w] || s.floating[b]);
      const C = N / 2 - E / 2,
        P = j / 2 - h[b] / 2 - 1,
        T = Xn(p[x], P),
        O = Xn(p[g], P),
        M = T,
        $ = j - h[b] - O,
        A = j / 2 - h[b] / 2 + C,
        z = ju(M, A, $),
        B = !c.arrow && Bo(o) != null && A !== z && s.reference[b] / 2 - (
          A < M ? T : O) - h[b] / 2 < 0,
        V = B ? A < M ? A - M : A - $ : 0;
      return {
        [f]: v[f] + V,
        data: {
          [f]: z,
          centerOffset: A - z - V,
          ...B && {
            alignmentOffset: V
          }
        },
        reset: B
      }
    }
  }),
  sE = function(e) {
    return e === void 0 && (e = {}), {
      name: "flip",
      options: e,
      async fn(t) {
        var n, r;
        const {
          placement: o,
          middlewareData: s,
          rects: a,
          initialPlacement: l,
          platform: c,
          elements: u
        } = t, {
          mainAxis: d = !0,
          crossAxis: p = !0,
          fallbackPlacements: v,
          fallbackStrategy: f = "bestFit",
          fallbackAxisSideDirection: b = "none",
          flipAlignment: h = !0,
          ...y
        } = fn(e, t);
        if ((n = s.arrow) != null && n.alignmentOffset) return {};
        const x = pn(o),
          g = Ht(l),
          w = pn(l) === l,
          N = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
          E = v || (w || !h ? [ki(l)] : YN(l)),
          S = b !== "none";
        !v && S && E.push(...tE(l, h, b, N));
        const j = [l, ...E],
          C = await Bs(t, y),
          P = [];
        let T = ((r = s.flip) == null ? void 0 : r.overflows) || [];
        if (d && P.push(C[x]), p) {
          const A = XN(o, a, N);
          P.push(C[A[0]], C[A[1]])
        }
        if (T = [...T, {
            placement: o,
            overflows: P
          }], !P.every(A => A <= 0)) {
          var O, M;
          const A = (((O = s.flip) == null ? void 0 : O.index) || 0) + 1,
            z = j[A];
          if (z && (!(p === "alignment" ? g !== Ht(z) : !1) || T.every(R =>
              R.overflows[0] > 0 && Ht(R.placement) === g))) return {
            data: {
              index: A,
              overflows: T
            },
            reset: {
              placement: z
            }
          };
          let B = (M = T.filter(V => V.overflows[0] <= 0).sort((V, R) => V
              .overflows[1] - R.overflows[1])[0]) == null ? void 0 : M
            .placement;
          if (!B) switch (f) {
            case "bestFit": {
              var $;
              const V = ($ = T.filter(R => {
                if (S) {
                  const I = Ht(R.placement);
                  return I === g || I === "y"
                }
                return !0
              }).map(R => [R.placement, R.overflows.filter(I => I > 0)
                .reduce((I, D) => I + D, 0)
              ]).sort((R, I) => R[1] - I[1])[0]) == null ? void 0 : $[0];
              V && (B = V);
              break
            }
            case "initialPlacement":
              B = l;
              break
          }
          if (o !== B) return {
            reset: {
              placement: B
            }
          }
        }
        return {}
      }
    }
  };

function rm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  }
}

function om(e) {
  return QN.some(t => e[t] >= 0)
}
const aE = function(e) {
    return e === void 0 && (e = {}), {
      name: "hide",
      options: e,
      async fn(t) {
        const {
          rects: n
        } = t, {
          strategy: r = "referenceHidden",
          ...o
        } = fn(e, t);
        switch (r) {
          case "referenceHidden": {
            const s = await Bs(t, {
                ...o,
                elementContext: "reference"
              }),
              a = rm(s, n.reference);
            return {
              data: {
                referenceHiddenOffsets: a,
                referenceHidden: om(a)
              }
            }
          }
          case "escaped": {
            const s = await Bs(t, {
                ...o,
                altBoundary: !0
              }),
              a = rm(s, n.floating);
            return {
              data: {
                escapedOffsets: a,
                escaped: om(a)
              }
            }
          }
          default:
            return {}
        }
      }
    }
  },
  Jv = new Set(["left", "top"]);
async function iE(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = pn(
    n), l = Bo(n), c = Ht(n) === "y", u = Jv.has(a) ? -1 : 1, d = s && c ? -
    1 : 1, p = fn(t, e);
  let {
    mainAxis: v,
    crossAxis: f,
    alignmentAxis: b
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return l && typeof b == "number" && (f = l === "end" ? b * -1 : b), c ? {
    x: f * d,
    y: v * u
  } : {
    x: v * u,
    y: f * d
  }
}
const lE = function(e) {
    return e === void 0 && (e = 0), {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        const {
          x: o,
          y: s,
          placement: a,
          middlewareData: l
        } = t, c = await iE(t, e);
        return a === ((n = l.offset) == null ? void 0 : n.placement) && (r =
          l.arrow) != null && r.alignmentOffset ? {} : {
          x: o + c.x,
          y: s + c.y,
          data: {
            ...c,
            placement: a
          }
        }
      }
    }
  },
  cE = function(e) {
    return e === void 0 && (e = {}), {
      name: "shift",
      options: e,
      async fn(t) {
        const {
          x: n,
          y: r,
          placement: o
        } = t, {
          mainAxis: s = !0,
          crossAxis: a = !1,
          limiter: l = {
            fn: y => {
              let {
                x,
                y: g
              } = y;
              return {
                x,
                y: g
              }
            }
          },
          ...c
        } = fn(e, t), u = {
          x: n,
          y: r
        }, d = await Bs(t, c), p = Ht(pn(o)), v = Hd(p);
        let f = u[v],
          b = u[p];
        if (s) {
          const y = v === "y" ? "top" : "left",
            x = v === "y" ? "bottom" : "right",
            g = f + d[y],
            w = f - d[x];
          f = ju(g, f, w)
        }
        if (a) {
          const y = p === "y" ? "top" : "left",
            x = p === "y" ? "bottom" : "right",
            g = b + d[y],
            w = b - d[x];
          b = ju(g, b, w)
        }
        const h = l.fn({
          ...t,
          [v]: f,
          [p]: b
        });
        return {
          ...h,
          data: {
            x: h.x - n,
            y: h.y - r,
            enabled: {
              [v]: s,
              [p]: a
            }
          }
        }
      }
    }
  },
  uE = function(e) {
    return e === void 0 && (e = {}), {
      options: e,
      fn(t) {
        const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          middlewareData: a
        } = t, {
          offset: l = 0,
          mainAxis: c = !0,
          crossAxis: u = !0
        } = fn(e, t), d = {
          x: n,
          y: r
        }, p = Ht(o), v = Hd(p);
        let f = d[v],
          b = d[p];
        const h = fn(l, t),
          y = typeof h == "number" ? {
            mainAxis: h,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...h
          };
        if (c) {
          const w = v === "y" ? "height" : "width",
            N = s.reference[v] - s.floating[w] + y.mainAxis,
            E = s.reference[v] + s.reference[w] - y.mainAxis;
          f < N ? f = N : f > E && (f = E)
        }
        if (u) {
          var x, g;
          const w = v === "y" ? "width" : "height",
            N = Jv.has(pn(o)),
            E = s.reference[p] - s.floating[w] + (N && ((x = a.offset) ==
              null ? void 0 : x[p]) || 0) + (N ? 0 : y.crossAxis),
            S = s.reference[p] + s.reference[w] + (N ? 0 : ((g = a.offset) ==
              null ? void 0 : g[p]) || 0) - (N ? y.crossAxis : 0);
          b < E ? b = E : b > S && (b = S)
        }
        return {
          [v]: f,
          [p]: b
        }
      }
    }
  },
  dE = function(e) {
    return e === void 0 && (e = {}), {
      name: "size",
      options: e,
      async fn(t) {
        var n, r;
        const {
          placement: o,
          rects: s,
          platform: a,
          elements: l
        } = t, {
          apply: c = () => {},
          ...u
        } = fn(e, t), d = await Bs(t, u), p = pn(o), v = Bo(o), f = Ht(
          o) === "y", {
            width: b,
            height: h
          } = s.floating;
        let y, x;
        p === "top" || p === "bottom" ? (y = p, x = v === (await (a.isRTL ==
            null ? void 0 : a.isRTL(l.floating)) ? "start" : "end") ?
          "left" : "right") : (x = p, y = v === "end" ? "top" : "bottom");
        const g = h - d.top - d.bottom,
          w = b - d.left - d.right,
          N = Xn(h - d[y], g),
          E = Xn(b - d[x], w),
          S = !t.middlewareData.shift;
        let j = N,
          C = E;
        if ((n = t.middlewareData.shift) != null && n.enabled.x && (C = w),
          (r = t.middlewareData.shift) != null && r.enabled.y && (j = g),
          S && !v) {
          const T = Ye(d.left, 0),
            O = Ye(d.right, 0),
            M = Ye(d.top, 0),
            $ = Ye(d.bottom, 0);
          f ? C = b - 2 * (T !== 0 || O !== 0 ? T + O : Ye(d.left, d
            .right)) : j = h - 2 * (M !== 0 || $ !== 0 ? M + $ : Ye(d.top, d
              .bottom))
        }
        await c({
          ...t,
          availableWidth: C,
          availableHeight: j
        });
        const P = await a.getDimensions(l.floating);
        return b !== P.width || h !== P.height ? {
          reset: {
            rects: !0
          }
        } : {}
      }
    }
  };

function il() {
  return typeof window < "u"
}

function zo(e) {
  return Zv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function et(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t
    .defaultView) || window
}

function Xt(e) {
  var t;
  return (t = (Zv(e) ? e.ownerDocument : e.document) || window.document) ==
    null ? void 0 : t.documentElement
}

function Zv(e) {
  return il() ? e instanceof Node || e instanceof et(e).Node : !1
}

function It(e) {
  return il() ? e instanceof Element || e instanceof et(e).Element : !1
}

function Kt(e) {
  return il() ? e instanceof HTMLElement || e instanceof et(e).HTMLElement : !1
}

function sm(e) {
  return !il() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot ||
    e instanceof et(e).ShadowRoot
}
const fE = new Set(["inline", "contents"]);

function na(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = At(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !fE.has(o)
}
const pE = new Set(["table", "td", "th"]);

function mE(e) {
  return pE.has(zo(e))
}
const hE = [":popover-open", ":modal"];

function ll(e) {
  return hE.some(t => {
    try {
      return e.matches(t)
    } catch {
      return !1
    }
  })
}
const gE = ["transform", "translate", "scale", "rotate", "perspective"],
  vE = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  xE = ["paint", "layout", "strict", "content"];

function Gd(e) {
  const t = qd(),
    n = It(e) ? At(e) : e;
  return gE.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n
    .containerType !== "normal" : !1) || !t && (n.backdropFilter ? n
    .backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !==
    "none" : !1) || vE.some(r => (n.willChange || "").includes(r)) || xE.some(
    r => (n.contain || "").includes(r))
}

function yE(e) {
  let t = Yn(e);
  for (; Kt(t) && !To(t);) {
    if (Gd(t)) return t;
    if (ll(t)) return null;
    t = Yn(t)
  }
  return null
}

function qd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports(
    "-webkit-backdrop-filter", "none")
}
const wE = new Set(["html", "body", "#document"]);

function To(e) {
  return wE.has(zo(e))
}

function At(e) {
  return et(e).getComputedStyle(e)
}

function cl(e) {
  return It(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  }
}

function Yn(e) {
  if (zo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || sm(e) && e.host || Xt(e);
  return sm(t) ? t.host : t
}

function e0(e) {
  const t = Yn(e);
  return To(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Kt(t) && na(
    t) ? t : e0(t)
}

function zs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = e0(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = et(o);
  if (s) {
    const l = ku(a);
    return t.concat(a, a.visualViewport || [], na(o) ? o : [], l && n ? zs(l) :
      [])
  }
  return t.concat(o, zs(o, [], n))
}

function ku(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function t0(e) {
  const t = At(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Kt(e),
    s = o ? e.offsetWidth : n,
    a = o ? e.offsetHeight : r,
    l = Pi(n) !== s || Pi(r) !== a;
  return l && (n = s, r = a), {
    width: n,
    height: r,
    $: l
  }
}

function Kd(e) {
  return It(e) ? e : e.contextElement
}

function po(e) {
  const t = Kd(e);
  if (!Kt(t)) return Gt(1);
  const n = t.getBoundingClientRect(),
    {
      width: r,
      height: o,
      $: s
    } = t0(t);
  let a = (s ? Pi(n.width) : n.width) / r,
    l = (s ? Pi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) &&
    (l = 1), {
      x: a,
      y: l
    }
}
const bE = Gt(0);

function n0(e) {
  const t = et(e);
  return !qd() || !t.visualViewport ? bE : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  }
}

function NE(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== et(e) ? !1 : t
}

function Pr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = Kd(e);
  let a = Gt(1);
  t && (r ? It(r) && (a = po(r)) : a = po(e));
  const l = NE(s, n, r) ? n0(s) : Gt(0);
  let c = (o.left + l.x) / a.x,
    u = (o.top + l.y) / a.y,
    d = o.width / a.x,
    p = o.height / a.y;
  if (s) {
    const v = et(s),
      f = r && It(r) ? et(r) : r;
    let b = v,
      h = ku(b);
    for (; h && r && f !== b;) {
      const y = po(h),
        x = h.getBoundingClientRect(),
        g = At(h),
        w = x.left + (h.clientLeft + parseFloat(g.paddingLeft)) * y.x,
        N = x.top + (h.clientTop + parseFloat(g.paddingTop)) * y.y;
      c *= y.x, u *= y.y, d *= y.x, p *= y.y, c += w, u += N, b = et(h), h = ku(
        b)
    }
  }
  return Ri({
    width: d,
    height: p,
    x: c,
    y: u
  })
}

function Xd(e, t) {
  const n = cl(e).scrollLeft;
  return t ? t.left + n : Pr(Xt(e)).left + n
}

function r0(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : Xd(e, r)),
    s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  }
}

function EE(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed",
    a = Xt(r),
    l = t ? ll(t.floating) : !1;
  if (r === a || l && s) return n;
  let c = {
      scrollLeft: 0,
      scrollTop: 0
    },
    u = Gt(1);
  const d = Gt(0),
    p = Kt(r);
  if ((p || !p && !s) && ((zo(r) !== "body" || na(a)) && (c = cl(r)), Kt(r))) {
    const f = Pr(r);
    u = po(r), d.x = f.x + r.clientLeft, d.y = f.y + r.clientTop
  }
  const v = a && !p && !s ? r0(a, c, !0) : Gt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + d.x + v.x,
    y: n.y * u.y - c.scrollTop * u.y + d.y + v.y
  }
}

function CE(e) {
  return Array.from(e.getClientRects())
}

function SE(e) {
  const t = Xt(e),
    n = cl(e),
    r = e.ownerDocument.body,
    o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Xd(e);
  const l = -n.scrollTop;
  return At(r).direction === "rtl" && (a += Ye(t.clientWidth, r.clientWidth) -
    o), {
    width: o,
    height: s,
    x: a,
    y: l
  }
}

function jE(e, t) {
  const n = et(e),
    r = Xt(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    a = r.clientHeight,
    l = 0,
    c = 0;
  if (o) {
    s = o.width, a = o.height;
    const u = qd();
    (!u || u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop)
  }
  return {
    width: s,
    height: a,
    x: l,
    y: c
  }
}
const PE = new Set(["absolute", "fixed"]);

function kE(e, t) {
  const n = Pr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = Kt(e) ? po(e) : Gt(1),
    a = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    c = o * s.x,
    u = r * s.y;
  return {
    width: a,
    height: l,
    x: c,
    y: u
  }
}

function am(e, t, n) {
  let r;
  if (t === "viewport") r = jE(e, n);
  else if (t === "document") r = SE(Xt(e));
  else if (It(t)) r = kE(t, n);
  else {
    const o = n0(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    }
  }
  return Ri(r)
}

function o0(e, t) {
  const n = Yn(e);
  return n === t || !It(n) || To(n) ? !1 : At(n).position === "fixed" || o0(n,
    t)
}

function RE(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = zs(e, [], !1).filter(l => It(l) && zo(l) !== "body"),
    o = null;
  const s = At(e).position === "fixed";
  let a = s ? Yn(e) : e;
  for (; It(a) && !To(a);) {
    const l = At(a),
      c = Gd(a);
    !c && l.position === "fixed" && (o = null), (s ? !c && !o : !c && l
      .position === "static" && !!o && PE.has(o.position) || na(a) && !c &&
      o0(e, a)) ? r = r.filter(d => d !== a) : o = l, a = Yn(a)
  }
  return t.set(e, r), r
}

function TE(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? ll(t) ? [] : RE(t, this._c) : []
      .concat(n), r
    ],
    l = a[0],
    c = a.reduce((u, d) => {
      const p = am(t, d, o);
      return u.top = Ye(p.top, u.top), u.right = Xn(p.right, u.right), u
        .bottom = Xn(p.bottom, u.bottom), u.left = Ye(p.left, u.left), u
    }, am(t, l, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  }
}

function IE(e) {
  const {
    width: t,
    height: n
  } = t0(e);
  return {
    width: t,
    height: n
  }
}

function AE(e, t, n) {
  const r = Kt(t),
    o = Xt(t),
    s = n === "fixed",
    a = Pr(e, !0, s, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Gt(0);

  function u() {
    c.x = Xd(o)
  }
  if (r || !r && !s)
    if ((zo(t) !== "body" || na(o)) && (l = cl(t)), r) {
      const f = Pr(t, !0, s, t);
      c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop
    } else o && u();
  s && !r && o && u();
  const d = o && !r && !s ? r0(o, l) : Gt(0),
    p = a.left + l.scrollLeft - c.x - d.x,
    v = a.top + l.scrollTop - c.y - d.y;
  return {
    x: p,
    y: v,
    width: a.width,
    height: a.height
  }
}

function cc(e) {
  return At(e).position === "static"
}

function im(e, t) {
  if (!Kt(e) || At(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Xt(e) === n && (n = n.ownerDocument.body), n
}

function s0(e, t) {
  const n = et(e);
  if (ll(e)) return n;
  if (!Kt(e)) {
    let o = Yn(e);
    for (; o && !To(o);) {
      if (It(o) && !cc(o)) return o;
      o = Yn(o)
    }
    return n
  }
  let r = im(e, t);
  for (; r && mE(r) && cc(r);) r = im(r, t);
  return r && To(r) && cc(r) && !Gd(r) ? n : r || yE(e) || n
}
const _E = async function(e) {
  const t = this.getOffsetParent || s0,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: AE(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  }
};

function ME(e) {
  return At(e).direction === "rtl"
}
const OE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: EE,
  getDocumentElement: Xt,
  getClippingRect: TE,
  getOffsetParent: s0,
  getElementRects: _E,
  getClientRects: CE,
  getDimensions: IE,
  getScale: po,
  isElement: It,
  isRTL: ME
};

function a0(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t
    .height
}

function LE(e, t) {
  let n = null,
    r;
  const o = Xt(e);

  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null
  }

  function a(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), s();
    const u = e.getBoundingClientRect(),
      {
        left: d,
        top: p,
        width: v,
        height: f
      } = u;
    if (l || t(), !v || !f) return;
    const b = Aa(p),
      h = Aa(o.clientWidth - (d + v)),
      y = Aa(o.clientHeight - (p + f)),
      x = Aa(d),
      w = {
        rootMargin: -b + "px " + -h + "px " + -y + "px " + -x + "px",
        threshold: Ye(0, Xn(1, c)) || 1
      };
    let N = !0;

    function E(S) {
      const j = S[0].intersectionRatio;
      if (j !== c) {
        if (!N) return a();
        j ? a(!1, j) : r = setTimeout(() => {
          a(!1, 1e-7)
        }, 1e3)
      }
      j === 1 && !a0(u, e.getBoundingClientRect()) && a(), N = !1
    }
    try {
      n = new IntersectionObserver(E, {
        ...w,
        root: o.ownerDocument
      })
    } catch {
      n = new IntersectionObserver(E, w)
    }
    n.observe(e)
  }
  return a(!0), s
}

function DE(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = Kd(e), d = o || s ? [...u ? zs(u) : [], ...zs(t)] : [];
  d.forEach(x => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), s && x.addEventListener("resize", n)
  });
  const p = u && l ? LE(u, n) : null;
  let v = -1,
    f = null;
  a && (f = new ResizeObserver(x => {
    let [g] = x;
    g && g.target === u && f && (f.unobserve(t), cancelAnimationFrame(v),
      v = requestAnimationFrame(() => {
        var w;
        (w = f) == null || w.observe(t)
      })), n()
  }), u && !c && f.observe(u), f.observe(t));
  let b, h = c ? Pr(e) : null;
  c && y();

  function y() {
    const x = Pr(e);
    h && !a0(h, x) && n(), h = x, b = requestAnimationFrame(y)
  }
  return n(), () => {
    var x;
    d.forEach(g => {
        o && g.removeEventListener("scroll", n), s && g.removeEventListener(
          "resize", n)
      }), p == null || p(), (x = f) == null || x.disconnect(), f = null, c &&
      cancelAnimationFrame(b)
  }
}
const FE = lE,
  $E = cE,
  BE = sE,
  zE = dE,
  UE = aE,
  lm = oE,
  VE = uE,
  HE = (e, t, n) => {
    const r = new Map,
      o = {
        platform: OE,
        ...n
      },
      s = {
        ...o.platform,
        _c: r
      };
    return rE(e, t, {
      ...o,
      platform: s
    })
  };
var WE = typeof document < "u",
  QE = function() {},
  ei = WE ? m.useLayoutEffect : QE;

function Ti(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0;)
        if (!Ti(e[r], t[r])) return !1;
      return !0
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !
    1;
    for (r = n; r-- !== 0;)
      if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0;) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Ti(e[s], t[s])) return !1
    }
    return !0
  }
  return e !== e && t !== t
}

function i0(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window)
    .devicePixelRatio || 1
}

function cm(e, t) {
  const n = i0(e);
  return Math.round(t * n) / n
}

function uc(e) {
  const t = m.useRef(e);
  return ei(() => {
    t.current = e
  }), t
}

function GE(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: l = !0,
    whileElementsMounted: c,
    open: u
  } = e, [d, p] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, f] = m.useState(r);
  Ti(v, r) || f(r);
  const [b, h] = m.useState(null), [y, x] = m.useState(null), g = m.useCallback(
      R => {
        R !== S.current && (S.current = R, h(R))
      }, []), w = m.useCallback(R => {
      R !== j.current && (j.current = R, x(R))
    }, []), N = s || b, E = a || y, S = m.useRef(null), j = m.useRef(null), C =
    m.useRef(d), P = c != null, T = uc(c), O = uc(o), M = uc(u), $ = m
    .useCallback(() => {
      if (!S.current || !j.current) return;
      const R = {
        placement: t,
        strategy: n,
        middleware: v
      };
      O.current && (R.platform = O.current), HE(S.current, j.current, R).then(
        I => {
          const D = {
            ...I,
            isPositioned: M.current !== !1
          };
          A.current && !Ti(C.current, D) && (C.current = D, ea.flushSync(
          () => {
              p(D)
            }))
        })
    }, [v, t, n, O, M]);
  ei(() => {
    u === !1 && C.current.isPositioned && (C.current.isPositioned = !1, p(
      R => ({
        ...R,
        isPositioned: !1
      })))
  }, [u]);
  const A = m.useRef(!1);
  ei(() => (A.current = !0, () => {
    A.current = !1
  }), []), ei(() => {
    if (N && (S.current = N), E && (j.current = E), N && E) {
      if (T.current) return T.current(N, E, $);
      $()
    }
  }, [N, E, $, T, P]);
  const z = m.useMemo(() => ({
      reference: S,
      floating: j,
      setReference: g,
      setFloating: w
    }), [g, w]),
    B = m.useMemo(() => ({
      reference: N,
      floating: E
    }), [N, E]),
    V = m.useMemo(() => {
      const R = {
        position: n,
        left: 0,
        top: 0
      };
      if (!B.floating) return R;
      const I = cm(B.floating, d.x),
        D = cm(B.floating, d.y);
      return l ? {
        ...R,
        transform: "translate(" + I + "px, " + D + "px)",
        ...i0(B.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: n,
        left: I,
        top: D
      }
    }, [n, l, B.floating, d.x, d.y]);
  return m.useMemo(() => ({
    ...d,
    update: $,
    refs: z,
    elements: B,
    floatingStyles: V
  }), [d, $, z, B, V])
}
const qE = e => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current")
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const {
          element: r,
          padding: o
        } = typeof e == "function" ? e(n) : e;
        return r && t(r) ? r.current != null ? lm({
          element: r.current,
          padding: o
        }).fn(n) : {} : r ? lm({
          element: r,
          padding: o
        }).fn(n) : {}
      }
    }
  },
  KE = (e, t) => ({
    ...FE(e),
    options: [e, t]
  }),
  XE = (e, t) => ({
    ...$E(e),
    options: [e, t]
  }),
  YE = (e, t) => ({
    ...VE(e),
    options: [e, t]
  }),
  JE = (e, t) => ({
    ...BE(e),
    options: [e, t]
  }),
  ZE = (e, t) => ({
    ...zE(e),
    options: [e, t]
  }),
  eC = (e, t) => ({
    ...UE(e),
    options: [e, t]
  }),
  tC = (e, t) => ({
    ...qE(e),
    options: [e, t]
  });
var nC = "Arrow",
  l0 = m.forwardRef((e, t) => {
    const {
      children: n,
      width: r = 10,
      height: o = 5,
      ...s
    } = e;
    return i.jsx(J.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : i.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    })
  });
l0.displayName = nC;
var rC = l0;

function c0(e) {
  const [t, n] = m.useState(void 0);
  return qt(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver(o => {
        if (!Array.isArray(o) || !o.length) return;
        const s = o[0];
        let a, l;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize,
            u = Array.isArray(c) ? c[0] : c;
          a = u.inlineSize, l = u.blockSize
        } else a = e.offsetWidth, l = e.offsetHeight;
        n({
          width: a,
          height: l
        })
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e)
    } else n(void 0)
  }, [e]), t
}
var u0 = "Popper",
  [d0, f0] = _t(u0),
  [BR, p0] = d0(u0),
  m0 = "PopperAnchor",
  h0 = m.forwardRef((e, t) => {
    const {
      __scopePopper: n,
      virtualRef: r,
      ...o
    } = e, s = p0(m0, n), a = m.useRef(null), l = ye(t, a);
    return m.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || a.current)
    }), r ? null : i.jsx(J.div, {
      ...o,
      ref: l
    })
  });
h0.displayName = m0;
var Yd = "PopperContent",
  [oC, sC] = d0(Yd),
  g0 = m.forwardRef((e, t) => {
    var te, Ar, gn, or, vn, _r;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: l = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: p = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: f = "optimized",
      onPlaced: b,
      ...h
    } = e, y = p0(Yd, n), [x, g] = m.useState(null), w = ye(t, xn => g(xn)), [
        N, E
      ] = m.useState(null), S = c0(N), j = (S == null ? void 0 : S.width) ??
      0, C = (S == null ? void 0 : S.height) ?? 0, P = r + (s !== "center" ?
        "-" + s : ""), T = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
      }, O = Array.isArray(u) ? u : [u], M = O.length > 0, $ = {
        padding: T,
        boundary: O.filter(iC),
        altBoundary: M
      }, {
        refs: A,
        floatingStyles: z,
        placement: B,
        isPositioned: V,
        middlewareData: R
      } = GE({
        strategy: "fixed",
        placement: P,
        whileElementsMounted: (...xn) => DE(...xn, {
          animationFrame: f === "always"
        }),
        elements: {
          reference: y.anchor
        },
        middleware: [KE({
          mainAxis: o + C,
          alignmentAxis: a
        }), c && XE({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? YE() : void 0,
          ...$
        }), c && JE({
          ...$
        }), ZE({
          ...$,
          apply: ({
            elements: xn,
            rects: la,
            availableWidth: kl,
            availableHeight: ca
          }) => {
            const {
              width: Rl,
              height: Go
            } = la.reference, Mr = xn.floating.style;
            Mr.setProperty("--radix-popper-available-width",
                `${kl}px`), Mr.setProperty(
                "--radix-popper-available-height", `${ca}px`), Mr
              .setProperty("--radix-popper-anchor-width",
              `${Rl}px`), Mr.setProperty(
                "--radix-popper-anchor-height", `${Go}px`)
          }
        }), N && tC({
          element: N,
          padding: l
        }), lC({
          arrowWidth: j,
          arrowHeight: C
        }), v && eC({
          strategy: "referenceHidden",
          ...$
        })]
      }), [I, D] = y0(B), Q = Tt(b);
    qt(() => {
      V && (Q == null || Q())
    }, [V, Q]);
    const U = (te = R.arrow) == null ? void 0 : te.x,
      q = (Ar = R.arrow) == null ? void 0 : Ar.y,
      X = ((gn = R.arrow) == null ? void 0 : gn.centerOffset) !== 0,
      [we, Ie] = m.useState();
    return qt(() => {
      x && Ie(window.getComputedStyle(x).zIndex)
    }, [x]), i.jsx("div", {
      ref: A.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...z,
        transform: V ? z.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: we,
        "--radix-popper-transform-origin": [(or = R.transformOrigin) ==
          null ? void 0 : or.x, (vn = R.transformOrigin) == null ?
          void 0 : vn.y
        ].join(" "),
        ...((_r = R.hide) == null ? void 0 : _r.referenceHidden) && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      },
      dir: e.dir,
      children: i.jsx(oC, {
        scope: n,
        placedSide: I,
        onArrowChange: E,
        arrowX: U,
        arrowY: q,
        shouldHideArrow: X,
        children: i.jsx(J.div, {
          "data-side": I,
          "data-align": D,
          ...h,
          ref: w,
          style: {
            ...h.style,
            animation: V ? void 0 : "none"
          }
        })
      })
    })
  });
g0.displayName = Yd;
var v0 = "PopperArrow",
  aC = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  },
  x0 = m.forwardRef(function(t, n) {
    const {
      __scopePopper: r,
      ...o
    } = t, s = sC(v0, r), a = aC[s.placedSide];
    return i.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [a]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        } [s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        } [s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0
      },
      children: i.jsx(rC, {
        ...o,
        ref: n,
        style: {
          ...o.style,
          display: "block"
        }
      })
    })
  });
x0.displayName = v0;

function iC(e) {
  return e !== null
}
var lC = e => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, x, g;
    const {
      placement: n,
      rects: r,
      middlewareData: o
    } = t, a = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0, l =
      a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [u, d] = y0(n), p = {
        start: "0%",
        center: "50%",
        end: "100%"
      } [d], v = (((x = o.arrow) == null ? void 0 : x.x) ?? 0) + l / 2, f =
      (((g = o.arrow) == null ? void 0 : g.y) ?? 0) + c / 2;
    let b = "",
      h = "";
    return u === "bottom" ? (b = a ? p : `${v}px`, h = `${-c}px`) : u ===
      "top" ? (b = a ? p : `${v}px`, h = `${r.floating.height+c}px`) : u ===
      "right" ? (b = `${-c}px`, h = a ? p : `${f}px`) : u === "left" && (b =
        `${r.floating.width+c}px`, h = a ? p : `${f}px`), {
        data: {
          x: b,
          y: h
        }
      }
  }
});

function y0(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n]
}
var cC = h0,
  uC = g0,
  dC = x0,
  [ul, zR] = _t("Tooltip", [f0]),
  Jd = f0(),
  w0 = "TooltipProvider",
  fC = 700,
  um = "tooltip.open",
  [pC, b0] = ul(w0),
  N0 = e => {
    const {
      __scopeTooltip: t,
      delayDuration: n = fC,
      skipDelayDuration: r = 300,
      disableHoverableContent: o = !1,
      children: s
    } = e, a = m.useRef(!0), l = m.useRef(!1), c = m.useRef(0);
    return m.useEffect(() => {
      const u = c.current;
      return () => window.clearTimeout(u)
    }, []), i.jsx(pC, {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: n,
      onOpen: m.useCallback(() => {
        window.clearTimeout(c.current), a.current = !1
      }, []),
      onClose: m.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
        () => a.current = !0, r)
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: m.useCallback(u => {
        l.current = u
      }, []),
      disableHoverableContent: o,
      children: s
    })
  };
N0.displayName = w0;
var E0 = "Tooltip",
  [UR, dl] = ul(E0),
  Ru = "TooltipTrigger",
  mC = m.forwardRef((e, t) => {
    const {
      __scopeTooltip: n,
      ...r
    } = e, o = dl(Ru, n), s = b0(Ru, n), a = Jd(n), l = m.useRef(null), c =
      ye(t, l, o.onTriggerChange), u = m.useRef(!1), d = m.useRef(!1), p = m
      .useCallback(() => u.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup",
      p), [p]), i.jsx(cC, {
      asChild: !0,
      ...a,
      children: i.jsx(J.button, {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: Y(e.onPointerMove, v => {
          v.pointerType !== "touch" && !d.current && !s
            .isPointerInTransitRef.current && (o.onTriggerEnter(),
              d.current = !0)
        }),
        onPointerLeave: Y(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1
        }),
        onPointerDown: Y(e.onPointerDown, () => {
          o.open && o.onClose(), u.current = !0, document
            .addEventListener("pointerup", p, {
              once: !0
            })
        }),
        onFocus: Y(e.onFocus, () => {
          u.current || o.onOpen()
        }),
        onBlur: Y(e.onBlur, o.onClose),
        onClick: Y(e.onClick, o.onClose)
      })
    })
  });
mC.displayName = Ru;
var hC = "TooltipPortal",
  [VR, gC] = ul(hC, {
    forceMount: void 0
  }),
  Io = "TooltipContent",
  C0 = m.forwardRef((e, t) => {
    const n = gC(Io, e.__scopeTooltip),
      {
        forceMount: r = n.forceMount,
        side: o = "top",
        ...s
      } = e,
      a = dl(Io, e.__scopeTooltip);
    return i.jsx(nr, {
      present: r || a.open,
      children: a.disableHoverableContent ? i.jsx(S0, {
        side: o,
        ...s,
        ref: t
      }) : i.jsx(vC, {
        side: o,
        ...s,
        ref: t
      })
    })
  }),
  vC = m.forwardRef((e, t) => {
    const n = dl(Io, e.__scopeTooltip),
      r = b0(Io, e.__scopeTooltip),
      o = m.useRef(null),
      s = ye(t, o),
      [a, l] = m.useState(null),
      {
        trigger: c,
        onClose: u
      } = n,
      d = o.current,
      {
        onPointerInTransitChange: p
      } = r,
      v = m.useCallback(() => {
        l(null), p(!1)
      }, [p]),
      f = m.useCallback((b, h) => {
        const y = b.currentTarget,
          x = {
            x: b.clientX,
            y: b.clientY
          },
          g = NC(x, y.getBoundingClientRect()),
          w = EC(x, g),
          N = CC(h.getBoundingClientRect()),
          E = jC([...w, ...N]);
        l(E), p(!0)
      }, [p]);
    return m.useEffect(() => () => v(), [v]), m.useEffect(() => {
      if (c && d) {
        const b = y => f(y, d),
          h = y => f(y, c);
        return c.addEventListener("pointerleave", b), d.addEventListener(
          "pointerleave", h), () => {
          c.removeEventListener("pointerleave", b), d
            .removeEventListener("pointerleave", h)
        }
      }
    }, [c, d, f, v]), m.useEffect(() => {
      if (a) {
        const b = h => {
          const y = h.target,
            x = {
              x: h.clientX,
              y: h.clientY
            },
            g = (c == null ? void 0 : c.contains(y)) || (d == null ?
              void 0 : d.contains(y)),
            w = !SC(x, a);
          g ? v() : w && (v(), u())
        };
        return document.addEventListener("pointermove", b), () => document
          .removeEventListener("pointermove", b)
      }
    }, [c, d, a, u, v]), i.jsx(S0, {
      ...e,
      ref: s
    })
  }),
  [xC, yC] = ul(E0, {
    isInside: !1
  }),
  wC = Nb("TooltipContent"),
  S0 = m.forwardRef((e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...l
    } = e, c = dl(Io, n), u = Jd(n), {
      onClose: d
    } = c;
    return m.useEffect(() => (document.addEventListener(um, d), () => document
      .removeEventListener(um, d)), [d]), m.useEffect(() => {
      if (c.trigger) {
        const p = v => {
          const f = v.target;
          f != null && f.contains(c.trigger) && d()
        };
        return window.addEventListener("scroll", p, {
          capture: !0
        }), () => window.removeEventListener("scroll", p, {
          capture: !0
        })
      }
    }, [c.trigger, d]), i.jsx(tl, {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      onFocusOutside: p => p.preventDefault(),
      onDismiss: d,
      children: i.jsxs(uC, {
        "data-state": c.stateAttribute,
        ...u,
        ...l,
        ref: t,
        style: {
          ...l.style,
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        },
        children: [i.jsx(wC, {
          children: r
        }), i.jsx(xC, {
          scope: n,
          isInside: !0,
          children: i.jsx(Wb, {
            id: c.contentId,
            role: "tooltip",
            children: o || r
          })
        })]
      })
    })
  });
C0.displayName = Io;
var j0 = "TooltipArrow",
  bC = m.forwardRef((e, t) => {
    const {
      __scopeTooltip: n,
      ...r
    } = e, o = Jd(n);
    return yC(j0, n).isInside ? null : i.jsx(dC, {
      ...o,
      ...r,
      ref: t
    })
  });
bC.displayName = j0;

function NC(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable")
  }
}

function EC(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      r.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break
  }
  return r
}

function CC(e) {
  const {
    top: t,
    right: n,
    bottom: r,
    left: o
  } = e;
  return [{
    x: o,
    y: t
  }, {
    x: n,
    y: t
  }, {
    x: n,
    y: r
  }, {
    x: o,
    y: r
  }]
}

function SC(e, t) {
  const {
    x: n,
    y: r
  } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const l = t[s],
      c = t[a],
      u = l.x,
      d = l.y,
      p = c.x,
      v = c.y;
    d > r != v > r && n < (p - u) * (r - d) / (v - d) + u && (o = !o)
  }
  return o
}

function jC(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n
    .y > r.y ? 1 : 0), PC(t)
}

function PC(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2;) {
      const s = t[t.length - 1],
        a = t[t.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) t.pop();
      else break
    }
    t.push(o)
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2;) {
      const s = n[n.length - 1],
        a = n[n.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) n.pop();
      else break
    }
    n.push(o)
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0]
    .y === n[0].y ? t : t.concat(n)
}
var kC = N0,
  P0 = C0;
const RC = kC,
  TC = m.forwardRef(({
    className: e,
    sideOffset: t = 4,
    ...n
  }, r) => i.jsx(P0, {
    ref: r,
    sideOffset: t,
    className: se(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e),
    ...n
  }));
TC.displayName = P0.displayName;
var fl = class {
    constructor() {
      this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
      return this.listeners.add(e), this.onSubscribe(), () => {
        this.listeners.delete(e), this.onUnsubscribe()
      }
    }
    hasListeners() {
      return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  pl = typeof window > "u" || "Deno" in globalThis;

function Nt() {}

function IC(e, t) {
  return typeof e == "function" ? e(t) : e
}

function AC(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function _C(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0)
}

function Tu(e, t) {
  return typeof e == "function" ? e(t) : e
}

function MC(e, t) {
  return typeof e == "function" ? e(t) : e
}

function dm(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: s,
    queryKey: a,
    stale: l
  } = e;
  if (a) {
    if (r) {
      if (t.queryHash !== Zd(a, t.options)) return !1
    } else if (!Vs(t.queryKey, a)) return !1
  }
  if (n !== "all") {
    const c = t.isActive();
    if (n === "active" && !c || n === "inactive" && c) return !1
  }
  return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state
    .fetchStatus || s && !s(t))
}

function fm(e, t) {
  const {
    exact: n,
    status: r,
    predicate: o,
    mutationKey: s
  } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Us(t.options.mutationKey) !== Us(s)) return !1
    } else if (!Vs(t.options.mutationKey, s)) return !1
  }
  return !(r && t.state.status !== r || o && !o(t))
}

function Zd(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Us)(e)
}

function Us(e) {
  return JSON.stringify(e, (t, n) => Iu(n) ? Object.keys(n).sort().reduce((r,
    o) => (r[o] = n[o], r), {}) : n)
}

function Vs(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e ==
    "object" && typeof t == "object" ? Object.keys(t).every(n => Vs(e[n], t[
    n])) : !1
}

function k0(e, t) {
  if (e === t) return e;
  const n = pm(e) && pm(t);
  if (n || Iu(e) && Iu(t)) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      s = n ? t : Object.keys(t),
      a = s.length,
      l = n ? [] : {},
      c = new Set(r);
    let u = 0;
    for (let d = 0; d < a; d++) {
      const p = n ? d : s[d];
      (!n && c.has(p) || n) && e[p] === void 0 && t[p] === void 0 ? (l[p] =
        void 0, u++) : (l[p] = k0(e[p], t[p]), l[p] === e[p] && e[p] !==
        void 0 && u++)
    }
    return o === a && u === o ? e : l
  }
  return t
}

function pm(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}

function Iu(e) {
  if (!mm(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(!mm(n) || !n.hasOwnProperty("isPrototypeOf") || Object
    .getPrototypeOf(e) !== Object.prototype)
}

function mm(e) {
  return Object.prototype.toString.call(e) === "[object Object]"
}

function OC(e) {
  return new Promise(t => {
    setTimeout(t, e)
  })
}

function LC(e, t, n) {
  return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) :
    n.structuralSharing !== !1 ? k0(e, t) : t
}

function DC(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r
}

function FC(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r
}
var ef = Symbol();

function R0(e, t) {
  return !e.queryFn && (t != null && t.initialPromise) ? () => t
    .initialPromise : !e.queryFn || e.queryFn === ef ? () => Promise.reject(
      new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var pr, In, ho, zm, $C = (zm = class extends fl {
    constructor() {
      super();
      ee(this, pr);
      ee(this, In);
      ee(this, ho);
      W(this, ho, t => {
        if (!pl && window.addEventListener) {
          const n = () => t();
          return window.addEventListener("visibilitychange", n, !1),
          () => {
              window.removeEventListener("visibilitychange", n)
            }
        }
      })
    }
    onSubscribe() {
      k(this, In) || this.setEventListener(k(this, ho))
    }
    onUnsubscribe() {
      var t;
      this.hasListeners() || ((t = k(this, In)) == null || t.call(this), W(
        this, In, void 0))
    }
    setEventListener(t) {
      var n;
      W(this, ho, t), (n = k(this, In)) == null || n.call(this), W(this, In,
        t(r => {
          typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }))
    }
    setFocused(t) {
      k(this, pr) !== t && (W(this, pr, t), this.onFocus())
    }
    onFocus() {
      const t = this.isFocused();
      this.listeners.forEach(n => {
        n(t)
      })
    }
    isFocused() {
      var t;
      return typeof k(this, pr) == "boolean" ? k(this, pr) : ((t =
          globalThis.document) == null ? void 0 : t.visibilityState) !==
        "hidden"
    }
  }, pr = new WeakMap, In = new WeakMap, ho = new WeakMap, zm),
  T0 = new $C,
  go, An, vo, Um, BC = (Um = class extends fl {
    constructor() {
      super();
      ee(this, go, !0);
      ee(this, An);
      ee(this, vo);
      W(this, vo, t => {
        if (!pl && window.addEventListener) {
          const n = () => t(!0),
            r = () => t(!1);
          return window.addEventListener("online", n, !1), window
            .addEventListener("offline", r, !1), () => {
              window.removeEventListener("online", n), window
                .removeEventListener("offline", r)
            }
        }
      })
    }
    onSubscribe() {
      k(this, An) || this.setEventListener(k(this, vo))
    }
    onUnsubscribe() {
      var t;
      this.hasListeners() || ((t = k(this, An)) == null || t.call(this), W(
        this, An, void 0))
    }
    setEventListener(t) {
      var n;
      W(this, vo, t), (n = k(this, An)) == null || n.call(this), W(this, An,
        t(this.setOnline.bind(this)))
    }
    setOnline(t) {
      k(this, go) !== t && (W(this, go, t), this.listeners.forEach(r => {
        r(t)
      }))
    }
    isOnline() {
      return k(this, go)
    }
  }, go = new WeakMap, An = new WeakMap, vo = new WeakMap, Um),
  Ii = new BC;

function zC() {
  let e, t;
  const n = new Promise((o, s) => {
    e = o, t = s
  });
  n.status = "pending", n.catch(() => {});

  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject
  }
  return n.resolve = o => {
    r({
      status: "fulfilled",
      value: o
    }), e(o)
  }, n.reject = o => {
    r({
      status: "rejected",
      reason: o
    }), t(o)
  }, n
}

function UC(e) {
  return Math.min(1e3 * 2 ** e, 3e4)
}

function I0(e) {
  return (e ?? "online") === "online" ? Ii.isOnline() : !0
}
var A0 = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert,
      this.silent = e == null ? void 0 : e.silent
  }
};

function dc(e) {
  return e instanceof A0
}

function _0(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const s = zC(),
    a = h => {
      var y;
      r || (v(new A0(h)), (y = e.abort) == null || y.call(e))
    },
    l = () => {
      t = !0
    },
    c = () => {
      t = !1
    },
    u = () => T0.isFocused() && (e.networkMode === "always" || Ii.isOnline()) &&
    e.canRun(),
    d = () => I0(e.networkMode) && e.canRun(),
    p = h => {
      var y;
      r || (r = !0, (y = e.onSuccess) == null || y.call(e, h), o == null || o(),
        s.resolve(h))
    },
    v = h => {
      var y;
      r || (r = !0, (y = e.onError) == null || y.call(e, h), o == null || o(), s
        .reject(h))
    },
    f = () => new Promise(h => {
      var y;
      o = x => {
        (r || u()) && h(x)
      }, (y = e.onPause) == null || y.call(e)
    }).then(() => {
      var h;
      o = void 0, r || (h = e.onContinue) == null || h.call(e)
    }),
    b = () => {
      if (r) return;
      let h;
      const y = n === 0 ? e.initialPromise : void 0;
      try {
        h = y ?? e.fn()
      } catch (x) {
        h = Promise.reject(x)
      }
      Promise.resolve(h).then(p).catch(x => {
        var S;
        if (r) return;
        const g = e.retry ?? (pl ? 0 : 3),
          w = e.retryDelay ?? UC,
          N = typeof w == "function" ? w(n, x) : w,
          E = g === !0 || typeof g == "number" && n < g || typeof g ==
          "function" && g(n, x);
        if (t || !E) {
          v(x);
          return
        }
        n++, (S = e.onFail) == null || S.call(e, n, x), OC(N).then(() =>
        u() ? void 0 : f()).then(() => {
          t ? v(x) : b()
        })
      })
    };
  return {
    promise: s,
    cancel: a,
    continue: () => (o == null || o(), s),
    cancelRetry: l,
    continueRetry: c,
    canStart: d,
    start: () => (d() ? b() : f().then(b), s)
  }
}
var VC = e => setTimeout(e, 0);

function HC() {
  let e = [],
    t = 0,
    n = l => {
      l()
    },
    r = l => {
      l()
    },
    o = VC;
  const s = l => {
      t ? e.push(l) : o(() => {
        n(l)
      })
    },
    a = () => {
      const l = e;
      e = [], l.length && o(() => {
        r(() => {
          l.forEach(c => {
            n(c)
          })
        })
      })
    };
  return {
    batch: l => {
      let c;
      t++;
      try {
        c = l()
      } finally {
        t--, t || a()
      }
      return c
    },
    batchCalls: l => (...c) => {
      s(() => {
        l(...c)
      })
    },
    schedule: s,
    setNotifyFunction: l => {
      n = l
    },
    setBatchNotifyFunction: l => {
      r = l
    },
    setScheduler: l => {
      o = l
    }
  }
}
var Be = HC(),
  mr, Vm, M0 = (Vm = class {
    constructor() {
      ee(this, mr)
    }
    destroy() {
      this.clearGcTimeout()
    }
    scheduleGc() {
      this.clearGcTimeout(), AC(this.gcTime) && W(this, mr, setTimeout(
    () => {
        this.optionalRemove()
      }, this.gcTime))
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (pl ? 1 / 0 : 5 * 60 *
        1e3))
    }
    clearGcTimeout() {
      k(this, mr) && (clearTimeout(k(this, mr)), W(this, mr, void 0))
    }
  }, mr = new WeakMap, Vm),
  xo, hr, lt, gr, Oe, Gs, vr, Et, Zt, Hm, WC = (Hm = class extends M0 {
      constructor(t) {
        super();
        ee(this, Et);
        ee(this, xo);
        ee(this, hr);
        ee(this, lt);
        ee(this, gr);
        ee(this, Oe);
        ee(this, Gs);
        ee(this, vr);
        W(this, vr, !1), W(this, Gs, t.defaultOptions), this.setOptions(t
            .options), this.observers = [], W(this, gr, t.client), W(this, lt,
            k(this, gr).getQueryCache()), this.queryKey = t.queryKey, this
          .queryHash = t.queryHash, W(this, xo, GC(this.options)), this
          .state = t.state ?? k(this, xo), this.scheduleGc()
      }
      get meta() {
        return this.options.meta
      }
      get promise() {
        var t;
        return (t = k(this, Oe)) == null ? void 0 : t.promise
      }
      setOptions(t) {
        this.options = {
          ...k(this, Gs),
          ...t
        }, this.updateGcTime(this.options.gcTime)
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && k(this,
          lt).remove(this)
      }
      setData(t, n) {
        const r = LC(this.state.data, t, this.options);
        return Ae(this, Et, Zt).call(this, {
          data: r,
          type: "success",
          dataUpdatedAt: n == null ? void 0 : n.updatedAt,
          manual: n == null ? void 0 : n.manual
        }), r
      }
      setState(t, n) {
        Ae(this, Et, Zt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n
        })
      }
      cancel(t) {
        var r, o;
        const n = (r = k(this, Oe)) == null ? void 0 : r.promise;
        return (o = k(this, Oe)) == null || o.cancel(t), n ? n.then(Nt).catch(
          Nt) : Promise.resolve()
      }
      destroy() {
        super.destroy(), this.cancel({
          silent: !0
        })
      }
      reset() {
        this.destroy(), this.setState(k(this, xo))
      }
      isActive() {
        return this.observers.some(t => MC(t.options.enabled, this) !== !1)
      }
      isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options
          .queryFn === ef || this.state.dataUpdateCount + this.state
          .errorUpdateCount === 0
      }
      isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Tu(t
          .options.staleTime, this) === "static") : !1
      }
      isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t
            .getCurrentResult().isStale) : this.state.data === void 0 || this
          .state.isInvalidated
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this
          .state.isInvalidated ? !0 : !_C(this.state.dataUpdatedAt, t)
      }
      onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
          cancelRefetch: !1
        }), (n = k(this, Oe)) == null || n.continue()
      }
      onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
          cancelRefetch: !1
        }), (n = k(this, Oe)) == null || n.continue()
      }
      addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t), this
          .clearGcTimeout(), k(this, lt).notify({
            type: "observerAdded",
            query: this,
            observer: t
          }))
      }
      removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(
            n => n !== t), this.observers.length || (k(this, Oe) && (k(this,
            vr) ? k(this, Oe).cancel({
            revert: !0
          }) : k(this, Oe).cancelRetry()), this.scheduleGc()), k(this, lt)
          .notify({
            type: "observerRemoved",
            query: this,
            observer: t
          }))
      }
      getObserversCount() {
        return this.observers.length
      }
      invalidate() {
        this.state.isInvalidated || Ae(this, Et, Zt).call(this, {
          type: "invalidate"
        })
      }
      fetch(t, n) {
        var u, d, p;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
            this.cancel({
              silent: !0
            });
          else if (k(this, Oe)) return k(this, Oe).continueRetry(), k(this,
            Oe).promise
        }
        if (t && this.setOptions(t), !this.options.queryFn) {
          const v = this.observers.find(f => f.options.queryFn);
          v && this.setOptions(v.options)
        }
        const r = new AbortController,
          o = v => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (W(this, vr, !0), r.signal)
            })
          },
          s = () => {
            const v = R0(this.options, n),
              b = (() => {
                const h = {
                  client: k(this, gr),
                  queryKey: this.queryKey,
                  meta: this.meta
                };
                return o(h), h
              })();
            return W(this, vr, !1), this.options.persister ? this.options
              .persister(v, b, this) : v(b)
          },
          l = (() => {
            const v = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: k(this, gr),
              state: this.state,
              fetchFn: s
            };
            return o(v), v
          })();
        (u = this.options.behavior) == null || u.onFetch(l, this), W(this, hr,
            this.state), (this.state.fetchStatus === "idle" || this.state
            .fetchMeta !== ((d = l.fetchOptions) == null ? void 0 : d.meta)
            ) && Ae(this, Et, Zt).call(this, {
            type: "fetch",
            meta: (p = l.fetchOptions) == null ? void 0 : p.meta
          });
        const c = v => {
          var f, b, h, y;
          dc(v) && v.silent || Ae(this, Et, Zt).call(this, {
              type: "error",
              error: v
            }), dc(v) || ((b = (f = k(this, lt).config).onError) == null ||
              b.call(f, v, this), (y = (h = k(this, lt).config)
              .onSettled) == null || y.call(h, this.state.data, v, this)),
            this.scheduleGc()
        };
        return W(this, Oe, _0({
          initialPromise: n == null ? void 0 : n.initialPromise,
          fn: l.fetchFn,
          abort: r.abort.bind(r),
          onSuccess: v => {
            var f, b, h, y;
            if (v === void 0) {
              c(new Error(`${this.queryHash} data is undefined`));
              return
            }
            try {
              this.setData(v)
            } catch (x) {
              c(x);
              return
            }(b = (f = k(this, lt).config).onSuccess) == null || b
              .call(f, v, this), (y = (h = k(this, lt).config)
                .onSettled) == null || y.call(h, v, this.state.error,
                this), this.scheduleGc()
          },
          onError: c,
          onFail: (v, f) => {
            Ae(this, Et, Zt).call(this, {
              type: "failed",
              failureCount: v,
              error: f
            })
          },
          onPause: () => {
            Ae(this, Et, Zt).call(this, {
              type: "pause"
            })
          },
          onContinue: () => {
            Ae(this, Et, Zt).call(this, {
              type: "continue"
            })
          },
          retry: l.options.retry,
          retryDelay: l.options.retryDelay,
          networkMode: l.options.networkMode,
          canRun: () => !0
        })), k(this, Oe).start()
      }
    }, xo = new WeakMap, hr = new WeakMap, lt = new WeakMap, gr = new WeakMap,
    Oe = new WeakMap, Gs = new WeakMap, vr = new WeakMap, Et = new WeakSet, Zt =
    function(t) {
      const n = r => {
        switch (t.type) {
          case "failed":
            return {
              ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t
                .error
            };
          case "pause":
            return {
              ...r, fetchStatus: "paused"
            };
          case "continue":
            return {
              ...r, fetchStatus: "fetching"
            };
          case "fetch":
            return {
              ...r, ...QC(r.data, this.options), fetchMeta: t.meta ?? null
            };
          case "success":
            return W(this, hr, void 0), {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
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
            const o = t.error;
            return dc(o) && o.revert && k(this, hr) ? {
              ...k(this, hr),
              fetchStatus: "idle"
            } : {
              ...r,
              error: o,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: o,
              fetchStatus: "idle",
              status: "error"
            };
          case "invalidate":
            return {
              ...r, isInvalidated: !0
            };
          case "setState":
            return {
              ...r, ...t.state
            }
        }
      };
      this.state = n(this.state), Be.batch(() => {
        this.observers.forEach(r => {
          r.onQueryUpdate()
        }), k(this, lt).notify({
          query: this,
          type: "updated",
          action: t
        })
      })
    }, Hm);

function QC(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: I0(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  }
}

function GC(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e
    .initialData,
    n = t !== void 0,
    r = n ? typeof e.initialDataUpdatedAt == "function" ? e
    .initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle"
  }
}
var $t, Wm, qC = (Wm = class extends fl {
    constructor(t = {}) {
      super();
      ee(this, $t);
      this.config = t, W(this, $t, new Map)
    }
    build(t, n, r) {
      const o = n.queryKey,
        s = n.queryHash ?? Zd(o, n);
      let a = this.get(s);
      return a || (a = new WC({
        client: t,
        queryKey: o,
        queryHash: s,
        options: t.defaultQueryOptions(n),
        state: r,
        defaultOptions: t.getQueryDefaults(o)
      }), this.add(a)), a
    }
    add(t) {
      k(this, $t).has(t.queryHash) || (k(this, $t).set(t.queryHash, t), this
        .notify({
          type: "added",
          query: t
        }))
    }
    remove(t) {
      const n = k(this, $t).get(t.queryHash);
      n && (t.destroy(), n === t && k(this, $t).delete(t.queryHash), this
        .notify({
          type: "removed",
          query: t
        }))
    }
    clear() {
      Be.batch(() => {
        this.getAll().forEach(t => {
          this.remove(t)
        })
      })
    }
    get(t) {
      return k(this, $t).get(t)
    }
    getAll() {
      return [...k(this, $t).values()]
    }
    find(t) {
      const n = {
        exact: !0,
        ...t
      };
      return this.getAll().find(r => dm(n, r))
    }
    findAll(t = {}) {
      const n = this.getAll();
      return Object.keys(t).length > 0 ? n.filter(r => dm(t, r)) : n
    }
    notify(t) {
      Be.batch(() => {
        this.listeners.forEach(n => {
          n(t)
        })
      })
    }
    onFocus() {
      Be.batch(() => {
        this.getAll().forEach(t => {
          t.onFocus()
        })
      })
    }
    onOnline() {
      Be.batch(() => {
        this.getAll().forEach(t => {
          t.onOnline()
        })
      })
    }
  }, $t = new WeakMap, Wm),
  Bt, Fe, xr, zt, Sn, Qm, KC = (Qm = class extends M0 {
      constructor(t) {
        super();
        ee(this, zt);
        ee(this, Bt);
        ee(this, Fe);
        ee(this, xr);
        this.mutationId = t.mutationId, W(this, Fe, t.mutationCache), W(this,
            Bt, []), this.state = t.state || XC(), this.setOptions(t.options),
          this.scheduleGc()
      }
      setOptions(t) {
        this.options = t, this.updateGcTime(this.options.gcTime)
      }
      get meta() {
        return this.options.meta
      }
      addObserver(t) {
        k(this, Bt).includes(t) || (k(this, Bt).push(t), this
        .clearGcTimeout(), k(this, Fe).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
          }))
      }
      removeObserver(t) {
        W(this, Bt, k(this, Bt).filter(n => n !== t)), this.scheduleGc(), k(
          this, Fe).notify({
          type: "observerRemoved",
          mutation: this,
          observer: t
        })
      }
      optionalRemove() {
        k(this, Bt).length || (this.state.status === "pending" ? this
          .scheduleGc() : k(this, Fe).remove(this))
      }
      continue () {
        var t;
        return ((t = k(this, xr)) == null ? void 0 : t.continue()) ?? this
          .execute(this.state.variables)
      }
      async execute(t) {
        var s, a, l, c, u, d, p, v, f, b, h, y, x, g, w, N, E, S, j, C;
        const n = () => {
          Ae(this, zt, Sn).call(this, {
            type: "continue"
          })
        };
        W(this, xr, _0({
          fn: () => this.options.mutationFn ? this.options.mutationFn(
            t) : Promise.reject(new Error("No mutationFn found")),
          onFail: (P, T) => {
            Ae(this, zt, Sn).call(this, {
              type: "failed",
              failureCount: P,
              error: T
            })
          },
          onPause: () => {
            Ae(this, zt, Sn).call(this, {
              type: "pause"
            })
          },
          onContinue: n,
          retry: this.options.retry ?? 0,
          retryDelay: this.options.retryDelay,
          networkMode: this.options.networkMode,
          canRun: () => k(this, Fe).canRun(this)
        }));
        const r = this.state.status === "pending",
          o = !k(this, xr).canStart();
        try {
          if (r) n();
          else {
            Ae(this, zt, Sn).call(this, {
              type: "pending",
              variables: t,
              isPaused: o
            }), await ((a = (s = k(this, Fe).config).onMutate) == null ?
              void 0 : a.call(s, t, this));
            const T = await ((c = (l = this.options).onMutate) == null ?
              void 0 : c.call(l, t));
            T !== this.state.context && Ae(this, zt, Sn).call(this, {
              type: "pending",
              context: T,
              variables: t,
              isPaused: o
            })
          }
          const P = await k(this, xr).start();
          return await ((d = (u = k(this, Fe).config).onSuccess) == null ?
            void 0 : d.call(u, P, t, this.state.context, this)), await ((v =
            (p = this.options).onSuccess) == null ? void 0 : v.call(p, P,
            t, this.state.context)), await ((b = (f = k(this, Fe).config)
            .onSettled) == null ? void 0 : b.call(f, P, null, this.state
            .variables, this.state.context, this)), await ((y = (h = this
            .options).onSettled) == null ? void 0 : y.call(h, P, null, t,
            this.state.context)), Ae(this, zt, Sn).call(this, {
            type: "success",
            data: P
          }), P
        } catch (P) {
          try {
            throw await ((g = (x = k(this, Fe).config).onError) == null ?
              void 0 : g.call(x, P, t, this.state.context, this)), await ((
              N = (w = this.options).onError) == null ? void 0 : N.call(w,
              P, t, this.state.context)), await ((S = (E = k(this, Fe)
              .config).onSettled) == null ? void 0 : S.call(E, void 0, P,
              this.state.variables, this.state.context, this)), await ((C =
              (j = this.options).onSettled) == null ? void 0 : C.call(j,
              void 0, P, t, this.state.context)), P
          } finally {
            Ae(this, zt, Sn).call(this, {
              type: "error",
              error: P
            })
          }
        } finally {
          k(this, Fe).runNext(this)
        }
      }
    }, Bt = new WeakMap, Fe = new WeakMap, xr = new WeakMap, zt = new WeakSet,
    Sn = function(t) {
      const n = r => {
        switch (t.type) {
          case "failed":
            return {
              ...r, failureCount: t.failureCount, failureReason: t.error
            };
          case "pause":
            return {
              ...r, isPaused: !0
            };
          case "continue":
            return {
              ...r, isPaused: !1
            };
          case "pending":
            return {
              ...r, context: t.context, data: void 0, failureCount: 0,
                failureReason: null, error: null, isPaused: t.isPaused,
                status: "pending", variables: t.variables, submittedAt: Date
                .now()
            };
          case "success":
            return {
              ...r, data: t.data, failureCount: 0, failureReason: null, error:
                null, status: "success", isPaused: !1
            };
          case "error":
            return {
              ...r, data: void 0, error: t.error, failureCount: r
                .failureCount + 1, failureReason: t.error, isPaused: !1,
                status: "error"
            }
        }
      };
      this.state = n(this.state), Be.batch(() => {
        k(this, Bt).forEach(r => {
          r.onMutationUpdate(t)
        }), k(this, Fe).notify({
          mutation: this,
          type: "updated",
          action: t
        })
      })
    }, Qm);

function XC() {
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
var rn, Ct, qs, Gm, YC = (Gm = class extends fl {
  constructor(t = {}) {
    super();
    ee(this, rn);
    ee(this, Ct);
    ee(this, qs);
    this.config = t, W(this, rn, new Set), W(this, Ct, new Map), W(this,
      qs, 0)
  }
  build(t, n, r) {
    const o = new KC({
      mutationCache: this,
      mutationId: ++da(this, qs)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(o), o
  }
  add(t) {
    k(this, rn).add(t);
    const n = _a(t);
    if (typeof n == "string") {
      const r = k(this, Ct).get(n);
      r ? r.push(t) : k(this, Ct).set(n, [t])
    }
    this.notify({
      type: "added",
      mutation: t
    })
  }
  remove(t) {
    if (k(this, rn).delete(t)) {
      const n = _a(t);
      if (typeof n == "string") {
        const r = k(this, Ct).get(n);
        if (r)
          if (r.length > 1) {
            const o = r.indexOf(t);
            o !== -1 && r.splice(o, 1)
          } else r[0] === t && k(this, Ct).delete(n)
      }
    }
    this.notify({
      type: "removed",
      mutation: t
    })
  }
  canRun(t) {
    const n = _a(t);
    if (typeof n == "string") {
      const r = k(this, Ct).get(n),
        o = r == null ? void 0 : r.find(s => s.state.status ===
        "pending");
      return !o || o === t
    } else return !0
  }
  runNext(t) {
    var r;
    const n = _a(t);
    if (typeof n == "string") {
      const o = (r = k(this, Ct).get(n)) == null ? void 0 : r.find(s =>
        s !== t && s.state.isPaused);
      return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
    } else return Promise.resolve()
  }
  clear() {
    Be.batch(() => {
      k(this, rn).forEach(t => {
        this.notify({
          type: "removed",
          mutation: t
        })
      }), k(this, rn).clear(), k(this, Ct).clear()
    })
  }
  getAll() {
    return Array.from(k(this, rn))
  }
  find(t) {
    const n = {
      exact: !0,
      ...t
    };
    return this.getAll().find(r => fm(n, r))
  }
  findAll(t = {}) {
    return this.getAll().filter(n => fm(t, n))
  }
  notify(t) {
    Be.batch(() => {
      this.listeners.forEach(n => {
        n(t)
      })
    })
  }
  resumePausedMutations() {
    const t = this.getAll().filter(n => n.state.isPaused);
    return Be.batch(() => Promise.all(t.map(n => n.continue().catch(Nt))))
  }
}, rn = new WeakMap, Ct = new WeakMap, qs = new WeakMap, Gm);

function _a(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id
}

function hm(e) {
  return {
    onFetch: (t, n) => {
      var d, p, v, f, b;
      const r = t.options,
        o = (v = (p = (d = t.fetchOptions) == null ? void 0 : d.meta) ==
          null ? void 0 : p.fetchMore) == null ? void 0 : v.direction,
        s = ((f = t.state.data) == null ? void 0 : f.pages) || [],
        a = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
      let l = {
          pages: [],
          pageParams: []
        },
        c = 0;
      const u = async () => {
        let h = !1;
        const y = w => {
            Object.defineProperty(w, "signal", {
              enumerable: !0,
              get: () => (t.signal.aborted ? h = !0 : t.signal
                .addEventListener("abort", () => {
                  h = !0
                }), t.signal)
            })
          },
          x = R0(t.options, t.fetchOptions),
          g = async (w, N, E) => {
            if (h) return Promise.reject();
            if (N == null && w.pages.length) return Promise.resolve(w);
            const j = (() => {
                const O = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: N,
                  direction: E ? "backward" : "forward",
                  meta: t.options.meta
                };
                return y(O), O
              })(),
              C = await x(j),
              {
                maxPages: P
              } = t.options,
              T = E ? FC : DC;
            return {
              pages: T(w.pages, C, P),
              pageParams: T(w.pageParams, N, P)
            }
          };
        if (o && s.length) {
          const w = o === "backward",
            N = w ? JC : gm,
            E = {
              pages: s,
              pageParams: a
            },
            S = N(r, E);
          l = await g(E, S, w)
        } else {
          const w = e ?? s.length;
          do {
            const N = c === 0 ? a[0] ?? r.initialPageParam : gm(r, l);
            if (c > 0 && N == null) break;
            l = await g(l, N), c++
          } while (c < w)
        }
        return l
      };
      t.options.persister ? t.fetchFn = () => {
        var h, y;
        return (y = (h = t.options).persister) == null ? void 0 : y.call(h,
          u, {
            client: t.client,
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          }, n)
      } : t.fetchFn = u
    }
  }
}

function gm(e, {
  pages: t,
  pageParams: n
}) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function JC(e, {
  pages: t,
  pageParams: n
}) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(
    e, t[0], t, n[0], n) : void 0
}
var ge, _n, Mn, yo, wo, On, bo, No, qm, ZC = (qm = class {
      constructor(e = {}) {
        ee(this, ge);
        ee(this, _n);
        ee(this, Mn);
        ee(this, yo);
        ee(this, wo);
        ee(this, On);
        ee(this, bo);
        ee(this, No);
        W(this, ge, e.queryCache || new qC), W(this, _n, e.mutationCache ||
            new YC), W(this, Mn, e.defaultOptions || {}), W(this, yo,
          new Map), W(this, wo, new Map), W(this, On, 0)
      }
      mount() {
        da(this, On)._++, k(this, On) === 1 && (W(this, bo, T0.subscribe(
        async e => {
            e && (await this.resumePausedMutations(), k(this, ge)
              .onFocus())
          })), W(this, No, Ii.subscribe(async e => {
          e && (await this.resumePausedMutations(), k(this, ge)
            .onOnline())
        })))
      }
      unmount() {
        var e, t;
        da(this, On)._--, k(this, On) === 0 && ((e = k(this, bo)) == null || e
          .call(this), W(this, bo, void 0), (t = k(this, No)) == null || t
          .call(this), W(this, No, void 0))
      }
      isFetching(e) {
        return k(this, ge).findAll({
          ...e,
          fetchStatus: "fetching"
        }).length
      }
      isMutating(e) {
        return k(this, _n).findAll({
          ...e,
          status: "pending"
        }).length
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
          queryKey: e
        });
        return (n = k(this, ge).get(t.queryHash)) == null ? void 0 : n.state
          .data
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = k(this, ge).build(this, t),
          r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n
          .isStaleByTime(Tu(t.staleTime, n)) && this.prefetchQuery(t),
          Promise.resolve(r))
      }
      getQueriesData(e) {
        return k(this, ge).findAll(e).map(({
          queryKey: t,
          state: n
        }) => {
          const r = n.data;
          return [t, r]
        })
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
          }),
          o = k(this, ge).get(r.queryHash),
          s = o == null ? void 0 : o.state.data,
          a = IC(t, s);
        if (a !== void 0) return k(this, ge).build(this, r).setData(a, {
          ...n,
          manual: !0
        })
      }
      setQueriesData(e, t, n) {
        return Be.batch(() => k(this, ge).findAll(e).map(({
          queryKey: r
        }) => [r, this.setQueryData(r, t, n)]))
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
          queryKey: e
        });
        return (n = k(this, ge).get(t.queryHash)) == null ? void 0 : n.state
      }
      removeQueries(e) {
        const t = k(this, ge);
        Be.batch(() => {
          t.findAll(e).forEach(n => {
            t.remove(n)
          })
        })
      }
      resetQueries(e, t) {
        const n = k(this, ge);
        return Be.batch(() => (n.findAll(e).forEach(r => {
          r.reset()
        }), this.refetchQueries({
          type: "active",
          ...e
        }, t)))
      }
      cancelQueries(e, t = {}) {
        const n = {
            revert: !0,
            ...t
          },
          r = Be.batch(() => k(this, ge).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(Nt).catch(Nt)
      }
      invalidateQueries(e, t = {}) {
        return Be.batch(() => (k(this, ge).findAll(e).forEach(n => {
            n.invalidate()
          }), (e == null ? void 0 : e.refetchType) === "none" ? Promise
          .resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ?
              void 0 : e.type) ?? "active"
          }, t)))
      }
      refetchQueries(e, t = {}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
          },
          r = Be.batch(() => k(this, ge).findAll(e).filter(o => !o
          .isDisabled() && !o.isStatic()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(Nt)), o.state
              .fetchStatus === "paused" ? Promise.resolve() : s
          }));
        return Promise.all(r).then(Nt)
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = k(this, ge).build(this, t);
        return n.isStaleByTime(Tu(t.staleTime, n)) ? n.fetch(t) : Promise
          .resolve(n.state.data)
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Nt).catch(Nt)
      }
      fetchInfiniteQuery(e) {
        return e.behavior = hm(e.pages), this.fetchQuery(e)
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Nt).catch(Nt)
      }
      ensureInfiniteQueryData(e) {
        return e.behavior = hm(e.pages), this.ensureQueryData(e)
      }
      resumePausedMutations() {
        return Ii.isOnline() ? k(this, _n).resumePausedMutations() : Promise
          .resolve()
      }
      getQueryCache() {
        return k(this, ge)
      }
      getMutationCache() {
        return k(this, _n)
      }
      getDefaultOptions() {
        return k(this, Mn)
      }
      setDefaultOptions(e) {
        W(this, Mn, e)
      }
      setQueryDefaults(e, t) {
        k(this, yo).set(Us(e), {
          queryKey: e,
          defaultOptions: t
        })
      }
      getQueryDefaults(e) {
        const t = [...k(this, yo).values()],
          n = {};
        return t.forEach(r => {
          Vs(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }), n
      }
      setMutationDefaults(e, t) {
        k(this, wo).set(Us(e), {
          mutationKey: e,
          defaultOptions: t
        })
      }
      getMutationDefaults(e) {
        const t = [...k(this, wo).values()],
          n = {};
        return t.forEach(r => {
          Vs(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }), n
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...k(this, Mn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Zd(t.queryKey, t)), t
          .refetchOnReconnect === void 0 && (t.refetchOnReconnect = t
            .networkMode !== "always"), t.throwOnError === void 0 && (t
            .throwOnError = !!t.suspense), !t.networkMode && t.persister && (t
            .networkMode = "offlineFirst"), t.queryFn === ef && (t.enabled = !
            1), t
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
          ...k(this, Mn).mutations,
          ...(e == null ? void 0 : e.mutationKey) && this
          .getMutationDefaults(e.mutationKey),
          ...e,
          _defaulted: !0
        }
      }
      clear() {
        k(this, ge).clear(), k(this, _n).clear()
      }
    }, ge = new WeakMap, _n = new WeakMap, Mn = new WeakMap, yo = new WeakMap,
    wo = new WeakMap, On = new WeakMap, bo = new WeakMap, No = new WeakMap, qm),
  eS = m.createContext(void 0),
  tS = ({
    client: e,
    children: t
  }) => (m.useEffect(() => (e.mount(), () => {
    e.unmount()
  }), [e]), i.jsx(eS.Provider, {
    value: e,
    children: t
  }));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Hs() {
  return Hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] =
        n[r])
    }
    return e
  }, Hs.apply(this, arguments)
}
var Fn;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Fn || (Fn = {}));
const vm = "popstate";

function nS(e) {
  e === void 0 && (e = {});

  function t(r, o) {
    let {
      pathname: s,
      search: a,
      hash: l
    } = r.location;
    return Au("", {
      pathname: s,
      search: a,
      hash: l
    }, o.state && o.state.usr || null, o.state && o.state.key || "default")
  }

  function n(r, o) {
    return typeof o == "string" ? o : L0(o)
  }
  return oS(t, n, null, e)
}

function Ce(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function O0(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t)
    } catch {}
  }
}

function rS() {
  return Math.random().toString(36).substr(2, 8)
}

function xm(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  }
}

function Au(e, t, n, r) {
  return n === void 0 && (n = null), Hs({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Uo(t) : t, {
    state: n,
    key: t && t.key || r || rS()
  })
}

function L0(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !==
    "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Uo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname =
      e)
  }
  return t
}

function oS(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: o = document.defaultView,
    v5Compat: s = !1
  } = r, a = o.history, l = Fn.Pop, c = null, u = d();
  u == null && (u = 0, a.replaceState(Hs({}, a.state, {
    idx: u
  }), ""));

  function d() {
    return (a.state || {
      idx: null
    }).idx
  }

  function p() {
    l = Fn.Pop;
    let y = d(),
      x = y == null ? null : y - u;
    u = y, c && c({
      action: l,
      location: h.location,
      delta: x
    })
  }

  function v(y, x) {
    l = Fn.Push;
    let g = Au(h.location, y, x);
    u = d() + 1;
    let w = xm(g, u),
      N = h.createHref(g);
    try {
      a.pushState(w, "", N)
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(N)
    }
    s && c && c({
      action: l,
      location: h.location,
      delta: 1
    })
  }

  function f(y, x) {
    l = Fn.Replace;
    let g = Au(h.location, y, x);
    u = d();
    let w = xm(g, u),
      N = h.createHref(g);
    a.replaceState(w, "", N), s && c && c({
      action: l,
      location: h.location,
      delta: 0
    })
  }

  function b(y) {
    let x = o.location.origin !== "null" ? o.location.origin : o.location.href,
      g = typeof y == "string" ? y : L0(y);
    return g = g.replace(/ $/, "%20"), Ce(x,
      "No window.location.(origin|href) available to create URL for href: " +
      g), new URL(g, x)
  }
  let h = {
    get action() {
      return l
    },
    get location() {
      return e(o, a)
    },
    listen(y) {
      if (c) throw new Error("A history only accepts one active listener");
      return o.addEventListener(vm, p), c = y, () => {
        o.removeEventListener(vm, p), c = null
      }
    },
    createHref(y) {
      return t(o, y)
    },
    createURL: b,
    encodeLocation(y) {
      let x = b(y);
      return {
        pathname: x.pathname,
        search: x.search,
        hash: x.hash
      }
    },
    push: v,
    replace: f,
    go(y) {
      return a.go(y)
    }
  };
  return h
}
var ym;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error =
    "error"
})(ym || (ym = {}));

function sS(e, t, n) {
  return n === void 0 && (n = "/"), aS(e, t, n, !1)
}

function aS(e, t, n, r) {
  let o = typeof t == "string" ? Uo(t) : t,
    s = $0(o.pathname || "/", n);
  if (s == null) return null;
  let a = D0(e);
  iS(a);
  let l = null;
  for (let c = 0; l == null && c < a.length; ++c) {
    let u = xS(s);
    l = gS(a[c], u, r)
  }
  return l
}

function D0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, a, l) => {
    let c = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s
    };
    c.relativePath.startsWith("/") && (Ce(c.relativePath.startsWith(r),
        'Absolute route path "' + c.relativePath + '" nested under path ' +
        ('"' + r + '" is not valid. An absolute child route path ') +
        "must start with the combined path of all its parent routes."), c
      .relativePath = c.relativePath.slice(r.length));
    let u = br([r, c.relativePath]),
      d = n.concat(c);
    s.children && s.children.length > 0 && (Ce(s.index !== !0,
      "Index routes must not have child routes. Please remove " + (
        'all child routes from route path "' + u + '".')), D0(s.children,
      t, d, u)), !(s.path == null && !s.index) && t.push({
      path: u,
      score: mS(u, s.index),
      routesMeta: d
    })
  };
  return e.forEach((s, a) => {
    var l;
    if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s,
    a);
    else
      for (let c of F0(s.path)) o(s, a, c)
  }), t
}

function F0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, o = n.endsWith("?"), s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let a = F0(r.join("/")),
    l = [];
  return l.push(...a.map(c => c === "" ? s : [s, c].join("/"))), o && l.push(...
    a), l.map(c => e.startsWith("/") && c === "" ? "/" : c)
}

function iS(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : hS(t.routesMeta
    .map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const lS = /^:[\w-]+$/,
  cS = 3,
  uS = 2,
  dS = 1,
  fS = 10,
  pS = -2,
  wm = e => e === "*";

function mS(e, t) {
  let n = e.split("/"),
    r = n.length;
  return n.some(wm) && (r += pS), t && (r += uS), n.filter(o => !wm(o)).reduce((
    o, s) => o + (lS.test(s) ? cS : s === "" ? dS : fS), r)
}

function hS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ?
    e[e.length - 1] - t[t.length - 1] : 0
}

function gS(e, t, n) {
  let {
    routesMeta: r
  } = e, o = {}, s = "/", a = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l],
      u = l === r.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      p = bm({
        path: c.relativePath,
        caseSensitive: c.caseSensitive,
        end: u
      }, d),
      v = c.route;
    if (!p && u && n && !r[r.length - 1].route.index && (p = bm({
        path: c.relativePath,
        caseSensitive: c.caseSensitive,
        end: !1
      }, d)), !p) return null;
    Object.assign(o, p.params), a.push({
      params: o,
      pathname: br([s, p.pathname]),
      pathnameBase: CS(br([s, p.pathnameBase])),
      route: v
    }), p.pathnameBase !== "/" && (s = br([s, p.pathnameBase]))
  }
  return a
}

function bm(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = vS(e.path, e.caseSensitive, e.end), o = t.match(n);
  if (!o) return null;
  let s = o[0],
    a = s.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, d, p) => {
      let {
        paramName: v,
        isOptional: f
      } = d;
      if (v === "*") {
        let h = l[p] || "";
        a = s.slice(0, s.length - h.length).replace(/(.)\/+$/, "$1")
      }
      const b = l[p];
      return f && !b ? u[v] = void 0 : u[v] = (b || "").replace(/%2F/g,
        "/"), u
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e
  }
}

function vS(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), O0(e === "*" || !e
    .endsWith("*") || e.endsWith("/*"), 'Route path "' + e +
    '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") +
      '" because the `*` character must ') +
    "always follow a `/` in the pattern. To get rid of this warning, " + (
      'please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [],
    o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(
      /[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, l, c) => (r
      .push({
        paramName: l,
        isOptional: c != null
      }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
      paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o +=
    "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o,
      t ? void 0 : "i"), r]
}

function xS(e) {
  try {
    return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/")
  } catch (t) {
    return O0(!1, 'The URL path "' + e +
      '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
      ("encoding (" + t + ").")), e
  }
}

function $0(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/"
}

function yS(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = ""
  } = typeof e == "string" ? Uo(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : wS(n, t) : t,
    search: SS(r),
    hash: jS(o)
  }
}

function wS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach(o => {
    o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
  }), n.length > 1 ? n.join("/") : "/"
}

function fc(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + (
      "`to." + t + "` field [" + JSON.stringify(r) +
      "].  Please separate it out to the ") + ("`to." + n +
      "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
}

function bS(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function NS(e, t) {
  let n = bS(e);
  return t ? n.map((r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) :
    n.map(r => r.pathnameBase)
}

function ES(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string" ? o = Uo(e) : (o = Hs({}, e), Ce(!o.pathname || !o
      .pathname.includes("?"), fc("?", "pathname", "search", o)), Ce(!o
      .pathname || !o.pathname.includes("#"), fc("#", "pathname", "hash", o)),
    Ce(!o.search || !o.search.includes("#"), fc("#", "search", "hash", o)));
  let s = e === "" || o.pathname === "",
    a = s ? "/" : o.pathname,
    l;
  if (a == null) l = n;
  else {
    let p = t.length - 1;
    if (!r && a.startsWith("..")) {
      let v = a.split("/");
      for (; v[0] === "..";) v.shift(), p -= 1;
      o.pathname = v.join("/")
    }
    l = p >= 0 ? t[p] : "/"
  }
  let c = yS(o, l),
    u = a && a !== "/" && a.endsWith("/"),
    d = (s || a === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c
}
const br = e => e.join("/").replace(/\/\/+/g, "/"),
  CS = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  SS = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
  jS = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function PS(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText ==
    "string" && typeof e.internal == "boolean" && "data" in e
}
const B0 = ["post", "put", "patch", "delete"];
new Set(B0);
const kS = ["get", ...B0];
new Set(kS);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ws() {
  return Ws = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] =
        n[r])
    }
    return e
  }, Ws.apply(this, arguments)
}
const tf = m.createContext(null),
  RS = m.createContext(null),
  ml = m.createContext(null),
  hl = m.createContext(null),
  Vo = m.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
  }),
  z0 = m.createContext(null);

function gl() {
  return m.useContext(hl) != null
}

function Ho() {
  return gl() || Ce(!1), m.useContext(hl).location
}

function U0(e) {
  m.useContext(ml).static || m.useLayoutEffect(e)
}

function hn() {
  let {
    isDataRoute: e
  } = m.useContext(Vo);
  return e ? US() : TS()
}

function TS() {
  gl() || Ce(!1);
  let e = m.useContext(tf),
    {
      basename: t,
      future: n,
      navigator: r
    } = m.useContext(ml),
    {
      matches: o
    } = m.useContext(Vo),
    {
      pathname: s
    } = Ho(),
    a = JSON.stringify(NS(o, n.v7_relativeSplatPath)),
    l = m.useRef(!1);
  return U0(() => {
    l.current = !0
  }), m.useCallback(function(u, d) {
    if (d === void 0 && (d = {}), !l.current) return;
    if (typeof u == "number") {
      r.go(u);
      return
    }
    let p = ES(u, JSON.parse(a), s, d.relative === "path");
    e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : br([t,
      p.pathname
    ])), (d.replace ? r.replace : r.push)(p, d.state, d)
  }, [t, r, a, s, e])
}

function IS(e, t) {
  return AS(e, t)
}

function AS(e, t, n, r) {
  gl() || Ce(!1);
  let {
    navigator: o
  } = m.useContext(ml), {
    matches: s
  } = m.useContext(Vo), a = s[s.length - 1], l = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : "/";
  a && a.route;
  let u = Ho(),
    d;
  if (t) {
    var p;
    let y = typeof t == "string" ? Uo(t) : t;
    c === "/" || (p = y.pathname) != null && p.startsWith(c) || Ce(!1), d = y
  } else d = u;
  let v = d.pathname || "/",
    f = v;
  if (c !== "/") {
    let y = c.replace(/^\//, "").split("/");
    f = "/" + v.replace(/^\//, "").split("/").slice(y.length).join("/")
  }
  let b = sS(e, {
      pathname: f
    }),
    h = DS(b && b.map(y => Object.assign({}, y, {
      params: Object.assign({}, l, y.params),
      pathname: br([c, o.encodeLocation ? o.encodeLocation(y.pathname)
        .pathname : y.pathname
      ]),
      pathnameBase: y.pathnameBase === "/" ? c : br([c, o.encodeLocation ?
        o.encodeLocation(y.pathnameBase).pathname : y.pathnameBase
      ])
    })), s, n, r);
  return t && h ? m.createElement(hl.Provider, {
    value: {
      location: Ws({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, d),
      navigationType: Fn.Pop
    }
  }, h) : h
}

function _S() {
  let e = zS(),
    t = PS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message :
    JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = {
      padding: "0.5rem",
      backgroundColor: "rgba(200,200,200, 0.5)"
    };
  return m.createElement(m.Fragment, null, m.createElement("h2", null,
    "Unexpected Application Error!"), m.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? m.createElement("pre", {
    style: o
  }, n) : null, null)
}
const MS = m.createElement(_S, null);
class OS extends m.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    }
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t
      .revalidation === "idle" ? {
        error: t.error,
        location: t.location,
        revalidation: t.revalidation
      } : {
        error: t.error !== void 0 ? t.error : n.error,
        location: n.location,
        revalidation: t.revalidation || n.revalidation
      }
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render",
      t, n)
  }
  render() {
    return this.state.error !== void 0 ? m.createElement(Vo.Provider, {
      value: this.props.routeContext
    }, m.createElement(z0.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children
  }
}

function LS(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, o = m.useContext(tf);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route
    .ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route
    .id), m.createElement(Vo.Provider, {
    value: t
  }, r)
}

function DS(e, t, n, r) {
  var o;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r =
      null), e == null) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n
      .initialized && n.matches.length > 0) e = n.matches;
    else return null
  }
  let a = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = a.findIndex(p => p.route.id && (l == null ? void 0 : l[p.route
      .id]) !== void 0);
    d >= 0 || Ce(!1), a = a.slice(0, Math.min(a.length, d + 1))
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < a.length; d++) {
      let p = a[d];
      if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u =
        d), p.route.id) {
        let {
          loaderData: v,
          errors: f
        } = n, b = p.route.loader && v[p.route.id] === void 0 && (!f || f[p
          .route.id] === void 0);
        if (p.route.lazy || b) {
          c = !0, u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
          break
        }
      }
    }
  return a.reduceRight((d, p, v) => {
    let f, b = !1,
      h = null,
      y = null;
    n && (f = l && p.route.id ? l[p.route.id] : void 0, h = p.route
      .errorElement || MS, c && (u < 0 && v === 0 ? (b = !0, y = null) :
        u === v && (b = !0, y = p.route.hydrateFallbackElement || null)));
    let x = t.concat(a.slice(0, v + 1)),
      g = () => {
        let w;
        return f ? w = h : b ? w = y : p.route.Component ? w = m
          .createElement(p.route.Component, null) : p.route.element ? w = p
          .route.element : w = d, m.createElement(LS, {
            match: p,
            routeContext: {
              outlet: d,
              matches: x,
              isDataRoute: n != null
            },
            children: w
          })
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || v === 0) ?
      m.createElement(OS, {
        location: n.location,
        revalidation: n.revalidation,
        component: h,
        error: f,
        children: g(),
        routeContext: {
          outlet: null,
          matches: x,
          isDataRoute: !0
        }
      }) : g()
  }, null)
}
var V0 = function(e) {
    return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e
      .UseNavigateStable = "useNavigate", e
  }(V0 || {}),
  Ai = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e
      .UseActionData = "useActionData", e.UseRouteError = "useRouteError", e
      .UseNavigation = "useNavigation", e.UseRouteLoaderData =
      "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator =
      "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId =
      "useRouteId", e
  }(Ai || {});

function FS(e) {
  let t = m.useContext(tf);
  return t || Ce(!1), t
}

function $S(e) {
  let t = m.useContext(RS);
  return t || Ce(!1), t
}

function BS(e) {
  let t = m.useContext(Vo);
  return t || Ce(!1), t
}

function H0(e) {
  let t = BS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ce(!1), n.route.id
}

function zS() {
  var e;
  let t = m.useContext(z0),
    n = $S(Ai.UseRouteError),
    r = H0(Ai.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function US() {
  let {
    router: e
  } = FS(V0.UseNavigateStable), t = H0(Ai.UseNavigateStable), n = m.useRef(!1);
  return U0(() => {
    n.current = !0
  }), m.useCallback(function(o, s) {
    s === void 0 && (s = {}), n.current && (typeof o == "number" ? e
      .navigate(o) : e.navigate(o, Ws({
        fromRouteId: t
      }, s)))
  }, [e, t])
}

function VS(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function en(e) {
  Ce(!1)
}

function HS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Fn.Pop,
    navigator: s,
    static: a = !1,
    future: l
  } = e;
  gl() && Ce(!1);
  let c = t.replace(/^\/*/, "/"),
    u = m.useMemo(() => ({
      basename: c,
      navigator: s,
      static: a,
      future: Ws({
        v7_relativeSplatPath: !1
      }, l)
    }), [c, l, s, a]);
  typeof r == "string" && (r = Uo(r));
  let {
    pathname: d = "/",
    search: p = "",
    hash: v = "",
    state: f = null,
    key: b = "default"
  } = r, h = m.useMemo(() => {
    let y = $0(d, c);
    return y == null ? null : {
      location: {
        pathname: y,
        search: p,
        hash: v,
        state: f,
        key: b
      },
      navigationType: o
    }
  }, [c, d, p, v, f, b, o]);
  return h == null ? null : m.createElement(ml.Provider, {
    value: u
  }, m.createElement(hl.Provider, {
    children: n,
    value: h
  }))
}

function WS(e) {
  let {
    children: t,
    location: n
  } = e;
  return IS(_u(t), n)
}
new Promise(() => {});

function _u(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return m.Children.forEach(e, (r, o) => {
    if (!m.isValidElement(r)) return;
    let s = [...t, o];
    if (r.type === m.Fragment) {
      n.push.apply(n, _u(r.props.children, s));
      return
    }
    r.type !== en && Ce(!1), !r.props.index || !r.props.children || Ce(!1);
    let a = {
      id: r.props.id || s.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props
        .errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (a.children = _u(r.props.children, s)), n.push(a)
  }), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const QS = "6";
try {
  window.__reactRouterVersion = QS
} catch {}
const GS = "startTransition",
  Nm = Qu[GS];

function qS(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: o
  } = e, s = m.useRef();
  s.current == null && (s.current = nS({
    window: o,
    v5Compat: !0
  }));
  let a = s.current,
    [l, c] = m.useState({
      action: a.action,
      location: a.location
    }),
    {
      v7_startTransition: u
    } = r || {},
    d = m.useCallback(p => {
      u && Nm ? Nm(() => c(p)) : c(p)
    }, [c, u]);
  return m.useLayoutEffect(() => a.listen(d), [a, d]), m.useEffect(() => VS(r),
    [r]), m.createElement(HS, {
    basename: t,
    children: n,
    location: l.location,
    navigationType: l.action,
    navigator: a,
    future: r
  })
}
var Em;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e
    .useViewTransitionState = "useViewTransitionState"
})(Em || (Em = {}));
var Cm;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e
    .UseScrollRestoration = "useScrollRestoration"
})(Cm || (Cm = {}));
const KS = Ud(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10"
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default"
      }
    }),
  ie = m.forwardRef(({
    className: e,
    variant: t,
    size: n,
    asChild: r = !1,
    ...o
  }, s) => {
    const a = r ? wb : "button";
    return i.jsx(a, {
      className: se(KS({
        variant: t,
        size: n,
        className: e
      })),
      ref: s,
      ...o
    })
  });
ie.displayName = "Button";
const XS = m.memo(() => i.jsx("header", {
    className: "fixed top-0 left-0 right-0 z-50 bg-background border-b",
    children: i.jsxs("div", {
      className: "container flex items-center justify-between p-3 md:p-4",
      children: [i.jsx(ie, {
        variant: "ghost",
        size: "icon",
        className: "h-9 w-9 md:h-10 md:w-10",
        children: i.jsx(sl, {
          className: "h-5 w-5 md:h-6 md:w-6"
        })
      }), i.jsxs("div", {
        className: "flex items-center gap-1 md:gap-2",
        children: [i.jsx(ie, {
          variant: "ghost",
          size: "icon",
          className: "h-9 w-9 md:h-10 md:w-10",
          children: i.jsx(k2, {
            className: "h-5 w-5 md:h-6 md:w-6"
          })
        }), i.jsx(ie, {
          variant: "ghost",
          size: "icon",
          className: "h-9 w-9 md:h-10 md:w-10",
          children: i.jsx(R2, {
            className: "h-5 w-5 md:h-6 md:w-6"
          })
        }), i.jsx(ie, {
          variant: "ghost",
          size: "icon",
          className: "h-9 w-9 md:h-10 md:w-10",
          children: i.jsx(v2, {
            className: "h-5 w-5 md:h-6 md:w-6"
          })
        })]
      })]
    })
  })),
  YS = m.memo(({
    images: e
  }) => {
    const [t, n] = m.useState(0), [r, o] = m.useState(!1), [s, a] = m
      .useState(0), l = m.useRef(0), c = m.useRef(0), u = m.useCallback(h => {
        l.current = h.touches[0].clientX, o(!0)
      }, []), d = m.useCallback(h => {
        if (!r) return;
        c.current = h.touches[0].clientX;
        const y = c.current - l.current;
        a(y)
      }, [r]), p = m.useCallback(() => {
        o(!1), a(0);
        const h = l.current - c.current;
        h > 50 ? n(y => y === e.length - 1 ? 0 : y + 1) : h < -50 && n(y =>
          y === 0 ? e.length - 1 : y - 1), l.current = 0, c.current = 0
      }, [e.length, r]), v = m.useCallback(h => {
        l.current = h.clientX, o(!0)
      }, []), f = m.useCallback(h => {
        if (h.buttons === 1 && r) {
          c.current = h.clientX;
          const y = c.current - l.current;
          a(y)
        }
      }, [r]), b = m.useCallback(() => {
        o(!1), a(0);
        const h = l.current - c.current;
        h > 50 ? n(y => y === e.length - 1 ? 0 : y + 1) : h < -50 && n(y =>
          y === 0 ? e.length - 1 : y - 1), l.current = 0, c.current = 0
      }, [e.length, r]);
    return i.jsx("div", {
      className: "relative w-full aspect-square bg-white overflow-hidden",
      children: i.jsx("div", {
        className: "relative w-full h-full cursor-grab active:cursor-grabbing select-none",
        onTouchStart: u,
        onTouchMove: d,
        onTouchEnd: p,
        onMouseDown: v,
        onMouseMove: f,
        onMouseUp: b,
        onMouseLeave: b,
        children: i.jsx("div", {
          className: "flex h-full transition-transform duration-300 ease-out",
          style: {
            transform: r ?
              `translateX(calc(-${t*100}% + ${s}px))` :
              `translateX(-${t*100}%)`,
            transition: r ? "none" : "transform 0.3s ease-out"
          },
          children: e.map((h, y) => i.jsx("img", {
            src: h,
            alt: `Product image ${y+1}`,
            className: "w-full h-full object-contain flex-shrink-0 pointer-events-none",
            draggable: "false",
            loading: y === 0 ? "eager" : "lazy"
          }, y))
        })
      })
    })
  }),
  JS = m.memo(() => {
    const [e, t] = m.useState({
      hours: 0,
      minutes: 59,
      seconds: 59
    });
    m.useEffect(() => {
      const o = setInterval(() => {
        t(s => s.seconds > 0 ? {
          ...s,
          seconds: s.seconds - 1
        } : s.minutes > 0 ? {
          ...s,
          minutes: s.minutes - 1,
          seconds: 59
        } : s.hours > 0 ? {
          hours: s.hours - 1,
          minutes: 59,
          seconds: 59
        } : s)
      }, 1e3);
      return () => clearInterval(o)
    }, []);
    const n = o => o.toString().padStart(2, "0"),
      r = e.hours === 0 && e.minutes === 0 && e.seconds === 0;
    return i.jsx("div", {
      className: "bg-sale text-sale-foreground py-2.5",
      children: i.jsx("div", {
        className: "container px-4",
        children: i.jsxs("div", {
          className: "flex items-center justify-between gap-4",
          children: [i.jsxs("div", {
            className: "flex-1",
            children: [i.jsxs("div", {
              className: "flex items-center gap-1.5 mb-1",
              children: [i.jsx("span", {
                className: "text-2xl md:text-3xl font-bold leading-none",
                children: "R$ 47,90"
              }), i.jsx(y2, {
                className: "h-4 w-4",
                strokeWidth: 2.5
              })]
            }), i.jsxs("div", {
              className: "flex items-center gap-2 text-sm",
              children: [i.jsx("span", {
                className: "line-through opacity-60",
                children: "R$ 1.389,90"
              }), i.jsx("span", {
                className: "font-normal px-2 py-0.5 rounded-full text-xs whitespace-nowrap",
                style: {
                  backgroundColor: "#FE5D38"
                },
                children: "Economize 88%"
              })]
            })]
          }), i.jsxs("div", {
            className: "flex flex-col items-end gap-0.5",
            children: [i.jsxs("div", {
              className: "flex items-center gap-0.5",
              children: [i.jsx(al, {
                className: "h-2 w-2",
                fill: "currentColor",
                strokeWidth: 0
              }), i.jsx("span", {
                className: "text-[11px] font-bold uppercase tracking-wide",
                children: "Oferta Relâmpago"
              })]
            }), r ? i.jsx("div", {
              className: "bg-white text-sale px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide",
              children: "OFERTA ENCERRADA"
            }) : i.jsxs("div", {
              className: "bg-white text-sale px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide",
              children: ["TERMINA EM ", n(e.minutes),
                ":", n(e.seconds)
              ]
            })]
          })]
        })
      })
    })
  });
var pc = "focusScope.autoFocusOnMount",
  mc = "focusScope.autoFocusOnUnmount",
  Sm = {
    bubbles: !1,
    cancelable: !0
  },
  ZS = "FocusScope",
  W0 = m.forwardRef((e, t) => {
    const {
      loop: n = !1,
      trapped: r = !1,
      onMountAutoFocus: o,
      onUnmountAutoFocus: s,
      ...a
    } = e, [l, c] = m.useState(null), u = Tt(o), d = Tt(s), p = m.useRef(
      null), v = ye(t, h => c(h)), f = m.useRef({
        paused: !1,
        pause() {
          this.paused = !0
        },
        resume() {
          this.paused = !1
        }
      }).current;
    m.useEffect(() => {
      if (r) {
        let h = function(w) {
            if (f.paused || !l) return;
            const N = w.target;
            l.contains(N) ? p.current = N : jn(p.current, {
              select: !0
            })
          },
          y = function(w) {
            if (f.paused || !l) return;
            const N = w.relatedTarget;
            N !== null && (l.contains(N) || jn(p.current, {
              select: !0
            }))
          },
          x = function(w) {
            if (document.activeElement === document.body)
              for (const E of w) E.removedNodes.length > 0 && jn(l)
          };
        document.addEventListener("focusin", h), document
          .addEventListener("focusout", y);
        const g = new MutationObserver(x);
        return l && g.observe(l, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("focusin", h), document
            .removeEventListener("focusout", y), g.disconnect()
        }
      }
    }, [r, l, f.paused]), m.useEffect(() => {
      if (l) {
        Pm.add(f);
        const h = document.activeElement;
        if (!l.contains(h)) {
          const x = new CustomEvent(pc, Sm);
          l.addEventListener(pc, u), l.dispatchEvent(x), x
            .defaultPrevented || (ej(sj(Q0(l)), {
              select: !0
            }), document.activeElement === h && jn(l))
        }
        return () => {
          l.removeEventListener(pc, u), setTimeout(() => {
            const x = new CustomEvent(mc, Sm);
            l.addEventListener(mc, d), l.dispatchEvent(x), x
              .defaultPrevented || jn(h ?? document.body, {
                select: !0
              }), l.removeEventListener(mc, d), Pm.remove(f)
          }, 0)
        }
      }
    }, [l, u, d, f]);
    const b = m.useCallback(h => {
      if (!n && !r || f.paused) return;
      const y = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey,
        x = document.activeElement;
      if (y && x) {
        const g = h.currentTarget,
          [w, N] = tj(g);
        w && N ? !h.shiftKey && x === N ? (h.preventDefault(), n && jn(
        w, {
          select: !0
        })) : h.shiftKey && x === w && (h.preventDefault(), n && jn(N, {
          select: !0
        })) : x === g && h.preventDefault()
      }
    }, [n, r, f.paused]);
    return i.jsx(J.div, {
      tabIndex: -1,
      ...a,
      ref: v,
      onKeyDown: b
    })
  });
W0.displayName = ZS;

function ej(e, {
  select: t = !1
} = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (jn(r, {
        select: t
      }), document.activeElement !== n) return
}

function tj(e) {
  const t = Q0(e),
    n = jm(t, e),
    r = jm(t.reverse(), e);
  return [n, r]
}

function Q0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r
          .tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t
}

function jm(e, t) {
  for (const n of e)
    if (!nj(n, {
        upTo: t
      })) return n
}

function nj(e, {
  upTo: t
}) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement
  }
  return !1
}

function rj(e) {
  return e instanceof HTMLInputElement && "select" in e
}

function jn(e, {
  select: t = !1
} = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && rj(e) && t && e.select()
  }
}
var Pm = oj();

function oj() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = km(e, t), e.unshift(t)
    },
    remove(t) {
      var n;
      e = km(e, t), (n = e[0]) == null || n.resume()
    }
  }
}

function km(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n
}

function sj(e) {
  return e.filter(t => t.tagName !== "A")
}
var hc = 0;

function aj() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Rm()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Rm()), hc++,
      () => {
        hc === 1 && document.querySelectorAll("[data-radix-focus-guard]")
          .forEach(t => t.remove()), hc--
      }
  }, [])
}

function Rm() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style
    .outline = "none", e.style.opacity = "0", e.style.position = "fixed", e
    .style.pointerEvents = "none", e
}
var Vt = function() {
  return Vt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] =
        n[s])
    }
    return t
  }, Vt.apply(this, arguments)
};

function G0(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) <
    0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t
      .indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[
      o]) && (n[r[o]] = e[r[o]]);
  return n
}

function ij(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)(s || !(r in t)) && (s || (s =
      Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t))
}
var ti = "right-scroll-bar-position",
  ni = "width-before-scroll-bar",
  lj = "with-scroll-bars-hidden",
  cj = "--removed-body-scroll-bar-size";

function gc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function uj(e, t) {
  var n = m.useState(function() {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o))
        }
      }
    }
  })[0];
  return n.callback = t, n.facade
}
var dj = typeof window < "u" ? m.useLayoutEffect : m.useEffect,
  Tm = new WeakMap;

function fj(e, t) {
  var n = uj(null, function(r) {
    return e.forEach(function(o) {
      return gc(o, r)
    })
  });
  return dj(function() {
    var r = Tm.get(n);
    if (r) {
      var o = new Set(r),
        s = new Set(e),
        a = n.current;
      o.forEach(function(l) {
        s.has(l) || gc(l, null)
      }), s.forEach(function(l) {
        o.has(l) || gc(l, a)
      })
    }
    Tm.set(n, e)
  }, [e]), n
}

function pj(e) {
  return e
}

function mj(e, t) {
  t === void 0 && (t = pj);
  var n = [],
    r = !1,
    o = {
      read: function() {
        if (r) throw new Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e
      },
      useMedium: function(s) {
        var a = t(s, r);
        return n.push(a),
          function() {
            n = n.filter(function(l) {
              return l !== a
            })
          }
      },
      assignSyncMedium: function(s) {
        for (r = !0; n.length;) {
          var a = n;
          n = [], a.forEach(s)
        }
        n = {
          push: function(l) {
            return s(l)
          },
          filter: function() {
            return n
          }
        }
      },
      assignMedium: function(s) {
        r = !0;
        var a = [];
        if (n.length) {
          var l = n;
          n = [], l.forEach(s), a = n
        }
        var c = function() {
            var d = a;
            a = [], d.forEach(s)
          },
          u = function() {
            return Promise.resolve().then(c)
          };
        u(), n = {
          push: function(d) {
            a.push(d), u()
          },
          filter: function(d) {
            return a = a.filter(d), n
          }
        }
      }
    };
  return o
}

function hj(e) {
  e === void 0 && (e = {});
  var t = mj(null);
  return t.options = Vt({
    async: !0,
    ssr: !1
  }, e), t
}
var q0 = function(e) {
  var t = e.sideCar,
    n = G0(e, ["sideCar"]);
  if (!t) throw new Error(
    "Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return m.createElement(r, Vt({}, n))
};
q0.isSideCarExport = !0;

function gj(e, t) {
  return e.useMedium(t), q0
}
var K0 = hj(),
  vc = function() {},
  vl = m.forwardRef(function(e, t) {
    var n = m.useRef(null),
      r = m.useState({
        onScrollCapture: vc,
        onWheelCapture: vc,
        onTouchMoveCapture: vc
      }),
      o = r[0],
      s = r[1],
      a = e.forwardProps,
      l = e.children,
      c = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      p = e.shards,
      v = e.sideCar,
      f = e.noRelative,
      b = e.noIsolation,
      h = e.inert,
      y = e.allowPinchZoom,
      x = e.as,
      g = x === void 0 ? "div" : x,
      w = e.gapMode,
      N = G0(e, ["forwardProps", "children", "className", "removeScrollBar",
        "enabled", "shards", "sideCar", "noRelative", "noIsolation",
        "inert", "allowPinchZoom", "as", "gapMode"
      ]),
      E = v,
      S = fj([n, t]),
      j = Vt(Vt({}, N), o);
    return m.createElement(m.Fragment, null, d && m.createElement(E, {
      sideCar: K0,
      removeScrollBar: u,
      shards: p,
      noRelative: f,
      noIsolation: b,
      inert: h,
      setCallbacks: s,
      allowPinchZoom: !!y,
      lockRef: n,
      gapMode: w
    }), a ? m.cloneElement(m.Children.only(l), Vt(Vt({}, j), {
      ref: S
    })) : m.createElement(g, Vt({}, j, {
      className: c,
      ref: S
    }), l))
  });
vl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
vl.classNames = {
  fullWidth: ni,
  zeroRight: ti
};
var vj = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function xj() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = vj();
  return t && e.setAttribute("nonce", t), e
}

function yj(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document
    .createTextNode(t))
}

function wj(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e)
}
var bj = function() {
    var e = 0,
      t = null;
    return {
      add: function(n) {
        e == 0 && (t = xj()) && (yj(t, n), wj(t)), e++
      },
      remove: function() {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t =
          null)
      }
    }
  },
  Nj = function() {
    var e = bj();
    return function(t, n) {
      m.useEffect(function() {
        return e.add(t),
          function() {
            e.remove()
          }
      }, [t && n])
    }
  },
  X0 = function() {
    var e = Nj(),
      t = function(n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null
      };
    return t
  },
  Ej = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  },
  xc = function(e) {
    return parseInt(e || "", 10) || 0
  },
  Cj = function(e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [xc(n), xc(r), xc(o)]
  },
  Sj = function(e) {
    if (e === void 0 && (e = "margin"), typeof window > "u") return Ej;
    var t = Cj(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
    }
  },
  jj = X0(),
  mo = "data-scroll-locked",
  Pj = function(e, t, n, r) {
    var o = e.left,
      s = e.top,
      a = e.right,
      l = e.gap;
    return n === void 0 && (n = "margin"), `
  .`.concat(lj, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(mo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")]
      .filter(Boolean).join(""), `
  }
  
  .`).concat(ti, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(ni, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(ti, " .").concat(ti, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ni, " .").concat(ni, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(mo, `] {
    `).concat(cj, ": ").concat(l, `px;
  }
`)
  },
  Im = function() {
    var e = parseInt(document.body.getAttribute(mo) || "0", 10);
    return isFinite(e) ? e : 0
  },
  kj = function() {
    m.useEffect(function() {
      return document.body.setAttribute(mo, (Im() + 1).toString()),
        function() {
          var e = Im() - 1;
          e <= 0 ? document.body.removeAttribute(mo) : document.body
            .setAttribute(mo, e.toString())
        }
    }, [])
  },
  Rj = function(e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    kj();
    var s = m.useMemo(function() {
      return Sj(o)
    }, [o]);
    return m.createElement(jj, {
      styles: Pj(s, !t, o, n ? "" : "!important")
    })
  },
  Mu = !1;
if (typeof window < "u") try {
  var Ma = Object.defineProperty({}, "passive", {
    get: function() {
      return Mu = !0, !0
    }
  });
  window.addEventListener("test", Ma, Ma), window.removeEventListener("test",
    Ma, Ma)
} catch {
  Mu = !1
}
var $r = Mu ? {
    passive: !1
  } : !1,
  Tj = function(e) {
    return e.tagName === "TEXTAREA"
  },
  Y0 = function(e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Tj(e) && n[
      t] === "visible")
  },
  Ij = function(e) {
    return Y0(e, "overflowY")
  },
  Aj = function(e) {
    return Y0(e, "overflowX")
  },
  Am = function(e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = J0(e, r);
      if (o) {
        var s = Z0(e, r),
          a = s[1],
          l = s[2];
        if (a > l) return !0
      }
      r = r.parentNode
    } while (r && r !== n.body);
    return !1
  },
  _j = function(e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r]
  },
  Mj = function(e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r]
  },
  J0 = function(e, t) {
    return e === "v" ? Ij(t) : Aj(t)
  },
  Z0 = function(e, t) {
    return e === "v" ? _j(t) : Mj(t)
  },
  Oj = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
  },
  Lj = function(e, t, n, r, o) {
    var s = Oj(e, window.getComputedStyle(t).direction),
      a = s * r,
      l = n.target,
      c = t.contains(l),
      u = !1,
      d = a > 0,
      p = 0,
      v = 0;
    do {
      if (!l) break;
      var f = Z0(e, l),
        b = f[0],
        h = f[1],
        y = f[2],
        x = h - y - s * b;
      (b || x) && J0(e, l) && (p += x, v += b);
      var g = l.parentNode;
      l = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
    } while (!c && l !== document.body || c && (t.contains(l) || t === l));
    return (d && (Math.abs(p) < 1 || !o) || !d && (Math.abs(v) < 1 || !o)) && (
      u = !0), u
  },
  Oa = function(e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e
      .changedTouches[0].clientY
    ] : [0, 0]
  },
  _m = function(e) {
    return [e.deltaX, e.deltaY]
  },
  Mm = function(e) {
    return e && "current" in e ? e.current : e
  },
  Dj = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
  },
  Fj = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
  },
  $j = 0,
  Br = [];

function Bj(e) {
  var t = m.useRef([]),
    n = m.useRef([0, 0]),
    r = m.useRef(),
    o = m.useState($j++)[0],
    s = m.useState(X0)[0],
    a = m.useRef(e);
  m.useEffect(function() {
    a.current = e
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = ij([e.lockRef.current], (e.shards || []).map(Mm), !0).filter(
        Boolean);
      return h.forEach(function(y) {
          return y.classList.add("allow-interactivity-".concat(o))
        }),
        function() {
          document.body.classList.remove("block-interactivity-".concat(o)),
            h.forEach(function(y) {
              return y.classList.remove("allow-interactivity-".concat(o))
            })
        }
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = m.useCallback(function(h, y) {
      if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h
        .ctrlKey) return !a.current.allowPinchZoom;
      var x = Oa(h),
        g = n.current,
        w = "deltaX" in h ? h.deltaX : g[0] - x[0],
        N = "deltaY" in h ? h.deltaY : g[1] - x[1],
        E, S = h.target,
        j = Math.abs(w) > Math.abs(N) ? "h" : "v";
      if ("touches" in h && j === "h" && S.type === "range") return !1;
      var C = Am(j, S);
      if (!C) return !0;
      if (C ? E = j : (E = j === "v" ? "h" : "v", C = Am(j, S)), !C) return !
      1;
      if (!r.current && "changedTouches" in h && (w || N) && (r.current = E),
        !E) return !0;
      var P = r.current || E;
      return Lj(P, y, h, P === "h" ? w : N, !0)
    }, []),
    c = m.useCallback(function(h) {
      var y = h;
      if (!(!Br.length || Br[Br.length - 1] !== s)) {
        var x = "deltaY" in y ? _m(y) : Oa(y),
          g = t.current.filter(function(E) {
            return E.name === y.type && (E.target === y.target || y
              .target === E.shadowParent) && Dj(E.delta, x)
          })[0];
        if (g && g.should) {
          y.cancelable && y.preventDefault();
          return
        }
        if (!g) {
          var w = (a.current.shards || []).map(Mm).filter(Boolean).filter(
              function(E) {
                return E.contains(y.target)
              }),
            N = w.length > 0 ? l(y, w[0]) : !a.current.noIsolation;
          N && y.cancelable && y.preventDefault()
        }
      }
    }, []),
    u = m.useCallback(function(h, y, x, g) {
      var w = {
        name: h,
        delta: y,
        target: x,
        should: g,
        shadowParent: zj(x)
      };
      t.current.push(w), setTimeout(function() {
        t.current = t.current.filter(function(N) {
          return N !== w
        })
      }, 1)
    }, []),
    d = m.useCallback(function(h) {
      n.current = Oa(h), r.current = void 0
    }, []),
    p = m.useCallback(function(h) {
      u(h.type, _m(h), h.target, l(h, e.lockRef.current))
    }, []),
    v = m.useCallback(function(h) {
      u(h.type, Oa(h), h.target, l(h, e.lockRef.current))
    }, []);
  m.useEffect(function() {
    return Br.push(s), e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: v
      }), document.addEventListener("wheel", c, $r), document
      .addEventListener("touchmove", c, $r), document.addEventListener(
        "touchstart", d, $r),
      function() {
        Br = Br.filter(function(h) {
            return h !== s
          }), document.removeEventListener("wheel", c, $r), document
          .removeEventListener("touchmove", c, $r), document
          .removeEventListener("touchstart", d, $r)
      }
  }, []);
  var f = e.removeScrollBar,
    b = e.inert;
  return m.createElement(m.Fragment, null, b ? m.createElement(s, {
    styles: Fj(o)
  }) : null, f ? m.createElement(Rj, {
    noRelative: e.noRelative,
    gapMode: e.gapMode
  }) : null)
}

function zj(e) {
  for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e
    .host), e = e.parentNode;
  return t
}
const Uj = gj(K0, Bj);
var ex = m.forwardRef(function(e, t) {
  return m.createElement(vl, Vt({}, e, {
    ref: t,
    sideCar: Uj
  }))
});
ex.classNames = vl.classNames;
var Vj = function(e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
  },
  zr = new WeakMap,
  La = new WeakMap,
  Da = {},
  yc = 0,
  tx = function(e) {
    return e && (e.host || tx(e.parentNode))
  },
  Hj = function(e, t) {
    return t.map(function(n) {
      if (e.contains(n)) return n;
      var r = tx(n);
      return r && e.contains(r) ? r : (console.error("aria-hidden", n,
        "in not contained inside", e, ". Doing nothing"), null)
    }).filter(function(n) {
      return !!n
    })
  },
  Wj = function(e, t, n, r) {
    var o = Hj(t, Array.isArray(e) ? e : [e]);
    Da[n] || (Da[n] = new WeakMap);
    var s = Da[n],
      a = [],
      l = new Set,
      c = new Set(o),
      u = function(p) {
        !p || l.has(p) || (l.add(p), u(p.parentNode))
      };
    o.forEach(u);
    var d = function(p) {
      !p || c.has(p) || Array.prototype.forEach.call(p.children, function(v) {
        if (l.has(v)) d(v);
        else try {
          var f = v.getAttribute(r),
            b = f !== null && f !== "false",
            h = (zr.get(v) || 0) + 1,
            y = (s.get(v) || 0) + 1;
          zr.set(v, h), s.set(v, y), a.push(v), h === 1 && b && La.set(
              v, !0), y === 1 && v.setAttribute(n, "true"), b || v
            .setAttribute(r, "true")
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", v, x)
        }
      })
    };
    return d(t), l.clear(), yc++,
      function() {
        a.forEach(function(p) {
          var v = zr.get(p) - 1,
            f = s.get(p) - 1;
          zr.set(p, v), s.set(p, f), v || (La.has(p) || p.removeAttribute(
            r), La.delete(p)), f || p.removeAttribute(n)
        }), yc--, yc || (zr = new WeakMap, zr = new WeakMap, La = new WeakMap,
          Da = {})
      }
  },
  Qj = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = Vj(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
      Wj(r, o, n, "aria-hidden")) : function() {
      return null
    }
  },
  xl = "Dialog",
  [nx, HR] = _t(xl),
  [Gj, Mt] = nx(xl),
  rx = e => {
    const {
      __scopeDialog: t,
      children: n,
      open: r,
      defaultOpen: o,
      onOpenChange: s,
      modal: a = !0
    } = e, l = m.useRef(null), c = m.useRef(null), [u, d] = Ir({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: xl
    });
    return i.jsx(Gj, {
      scope: t,
      triggerRef: l,
      contentRef: c,
      contentId: fo(),
      titleId: fo(),
      descriptionId: fo(),
      open: u,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d(p => !p), [d]),
      modal: a,
      children: n
    })
  };
rx.displayName = xl;
var ox = "DialogTrigger",
  qj = m.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, o = Mt(ox, n), s = ye(t, o.triggerRef);
    return i.jsx(J.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": of(o.open),
      ...r,
      ref: s,
      onClick: Y(e.onClick, o.onOpenToggle)
    })
  });
qj.displayName = ox;
var nf = "DialogPortal",
  [Kj, sx] = nx(nf, {
    forceMount: void 0
  }),
  ax = e => {
    const {
      __scopeDialog: t,
      forceMount: n,
      children: r,
      container: o
    } = e, s = Mt(nf, t);
    return i.jsx(Kj, {
      scope: t,
      forceMount: n,
      children: m.Children.map(r, a => i.jsx(nr, {
        present: n || s.open,
        children: i.jsx(Fd, {
          asChild: !0,
          container: o,
          children: a
        })
      }))
    })
  };
ax.displayName = nf;
var _i = "DialogOverlay",
  ix = m.forwardRef((e, t) => {
    const n = sx(_i, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      s = Mt(_i, e.__scopeDialog);
    return s.modal ? i.jsx(nr, {
      present: r || s.open,
      children: i.jsx(Yj, {
        ...o,
        ref: t
      })
    }) : null
  });
ix.displayName = _i;
var Xj = Fs("DialogOverlay.RemoveScroll"),
  Yj = m.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, o = Mt(_i, n);
    return i.jsx(ex, {
      as: Xj,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: i.jsx(J.div, {
        "data-state": of(o.open),
        ...r,
        ref: t,
        style: {
          pointerEvents: "auto",
          ...r.style
        }
      })
    })
  }),
  kr = "DialogContent",
  lx = m.forwardRef((e, t) => {
    const n = sx(kr, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      s = Mt(kr, e.__scopeDialog);
    return i.jsx(nr, {
      present: r || s.open,
      children: s.modal ? i.jsx(Jj, {
        ...o,
        ref: t
      }) : i.jsx(Zj, {
        ...o,
        ref: t
      })
    })
  });
lx.displayName = kr;
var Jj = m.forwardRef((e, t) => {
    const n = Mt(kr, e.__scopeDialog),
      r = m.useRef(null),
      o = ye(t, n.contentRef, r);
    return m.useEffect(() => {
      const s = r.current;
      if (s) return Qj(s)
    }, []), i.jsx(cx, {
      ...e,
      ref: o,
      trapFocus: n.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: Y(e.onCloseAutoFocus, s => {
        var a;
        s.preventDefault(), (a = n.triggerRef.current) == null || a
          .focus()
      }),
      onPointerDownOutside: Y(e.onPointerDownOutside, s => {
        const a = s.detail.originalEvent,
          l = a.button === 0 && a.ctrlKey === !0;
        (a.button === 2 || l) && s.preventDefault()
      }),
      onFocusOutside: Y(e.onFocusOutside, s => s.preventDefault())
    })
  }),
  Zj = m.forwardRef((e, t) => {
    const n = Mt(kr, e.__scopeDialog),
      r = m.useRef(!1),
      o = m.useRef(!1);
    return i.jsx(cx, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: s => {
        var a, l;
        (a = e.onCloseAutoFocus) == null || a.call(e, s), s
          .defaultPrevented || (r.current || (l = n.triggerRef
            .current) == null || l.focus(), s.preventDefault()), r
          .current = !1, o.current = !1
      },
      onInteractOutside: s => {
        var c, u;
        (c = e.onInteractOutside) == null || c.call(e, s), s
          .defaultPrevented || (r.current = !0, s.detail.originalEvent
            .type === "pointerdown" && (o.current = !0));
        const a = s.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) &&
        s.preventDefault(), s.detail.originalEvent.type === "focusin" &&
          o.current && s.preventDefault()
      }
    })
  }),
  cx = m.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      ...a
    } = e, l = Mt(kr, n), c = m.useRef(null), u = ye(t, c);
    return aj(), i.jsxs(i.Fragment, {
      children: [i.jsx(W0, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: i.jsx(tl, {
          role: "dialog",
          id: l.contentId,
          "aria-describedby": l.descriptionId,
          "aria-labelledby": l.titleId,
          "data-state": of(l.open),
          ...a,
          ref: u,
          onDismiss: () => l.onOpenChange(!1)
        })
      }), i.jsxs(i.Fragment, {
        children: [i.jsx(eP, {
          titleId: l.titleId
        }), i.jsx(nP, {
          contentRef: c,
          descriptionId: l.descriptionId
        })]
      })]
    })
  }),
  rf = "DialogTitle",
  ux = m.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, o = Mt(rf, n);
    return i.jsx(J.h2, {
      id: o.titleId,
      ...r,
      ref: t
    })
  });
ux.displayName = rf;
var dx = "DialogDescription",
  fx = m.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, o = Mt(dx, n);
    return i.jsx(J.p, {
      id: o.descriptionId,
      ...r,
      ref: t
    })
  });
fx.displayName = dx;
var px = "DialogClose",
  mx = m.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, o = Mt(px, n);
    return i.jsx(J.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Y(e.onClick, () => o.onOpenChange(!1))
    })
  });
mx.displayName = px;

function of(e) {
  return e ? "open" : "closed"
}
var hx = "DialogTitleWarning",
  [WR, gx] = xb(hx, {
    contentName: kr,
    titleName: rf,
    docsSlug: "dialog"
  }),
  eP = ({
    titleId: e
  }) => {
    const t = gx(hx),
      n =
      `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return m.useEffect(() => {
      e && (document.getElementById(e) || console.error(n))
    }, [n, e]), null
  },
  tP = "DialogDescriptionWarning",
  nP = ({
    contentRef: e,
    descriptionId: t
  }) => {
    const r =
      `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${gx(tP).contentName}}.`;
    return m.useEffect(() => {
      var s;
      const o = (s = e.current) == null ? void 0 : s.getAttribute(
        "aria-describedby");
      t && o && (document.getElementById(t) || console.warn(r))
    }, [r, e, t]), null
  },
  rP = rx,
  oP = ax,
  vx = ix,
  xx = lx,
  yx = ux,
  wx = fx,
  sP = mx;
const ra = rP,
  aP = oP,
  bx = m.forwardRef(({
    className: e,
    ...t
  }, n) => i.jsx(vx, {
    ref: n,
    className: se(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e),
    ...t
  }));
bx.displayName = vx.displayName;
const Wo = m.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => i.jsxs(aP, {
  children: [i.jsx(bx, {}), i.jsxs(xx, {
    ref: r,
    className: se(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
      e),
    ...n,
    children: [t, i.jsxs(sP, {
      className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
      children: [i.jsx(sl, {
        className: "h-4 w-4"
      }), i.jsx("span", {
        className: "sr-only",
        children: "Close"
      })]
    })]
  })]
}));
Wo.displayName = xx.displayName;
const oa = ({
  className: e,
  ...t
}) => i.jsx("div", {
  className: se("flex flex-col space-y-1.5 text-center sm:text-left", e),
  ...t
});
oa.displayName = "DialogHeader";
const sa = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx(yx, {
  ref: n,
  className: se("text-lg font-semibold leading-none tracking-tight", e),
  ...t
}));
sa.displayName = yx.displayName;
const iP = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx(wx, {
  ref: n,
  className: se("text-sm text-muted-foreground", e),
  ...t
}));
iP.displayName = wx.displayName;
var yl = "Collapsible",
  [lP, Nx] = _t(yl),
  [cP, sf] = lP(yl),
  Ex = m.forwardRef((e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: a,
      ...l
    } = e, [c, u] = Ir({
      prop: r,
      defaultProp: o ?? !1,
      onChange: a,
      caller: yl
    });
    return i.jsx(cP, {
      scope: n,
      disabled: s,
      contentId: fo(),
      open: c,
      onOpenToggle: m.useCallback(() => u(d => !d), [u]),
      children: i.jsx(J.div, {
        "data-state": lf(c),
        "data-disabled": s ? "" : void 0,
        ...l,
        ref: t
      })
    })
  });
Ex.displayName = yl;
var Cx = "CollapsibleTrigger",
  Sx = m.forwardRef((e, t) => {
    const {
      __scopeCollapsible: n,
      ...r
    } = e, o = sf(Cx, n);
    return i.jsx(J.button, {
      type: "button",
      "aria-controls": o.contentId,
      "aria-expanded": o.open || !1,
      "data-state": lf(o.open),
      "data-disabled": o.disabled ? "" : void 0,
      disabled: o.disabled,
      ...r,
      ref: t,
      onClick: Y(e.onClick, o.onOpenToggle)
    })
  });
Sx.displayName = Cx;
var af = "CollapsibleContent",
  jx = m.forwardRef((e, t) => {
    const {
      forceMount: n,
      ...r
    } = e, o = sf(af, e.__scopeCollapsible);
    return i.jsx(nr, {
      present: n || o.open,
      children: ({
        present: s
      }) => i.jsx(uP, {
        ...r,
        ref: t,
        present: s
      })
    })
  });
jx.displayName = af;
var uP = m.forwardRef((e, t) => {
  const {
    __scopeCollapsible: n,
    present: r,
    children: o,
    ...s
  } = e, a = sf(af, n), [l, c] = m.useState(r), u = m.useRef(null), d = ye(
      t, u), p = m.useRef(0), v = p.current, f = m.useRef(0), b = f.current,
    h = a.open || l, y = m.useRef(h), x = m.useRef(void 0);
  return m.useEffect(() => {
    const g = requestAnimationFrame(() => y.current = !1);
    return () => cancelAnimationFrame(g)
  }, []), qt(() => {
    const g = u.current;
    if (g) {
      x.current = x.current || {
          transitionDuration: g.style.transitionDuration,
          animationName: g.style.animationName
        }, g.style.transitionDuration = "0s", g.style.animationName =
        "none";
      const w = g.getBoundingClientRect();
      p.current = w.height, f.current = w.width, y.current || (g.style
        .transitionDuration = x.current.transitionDuration, g.style
        .animationName = x.current.animationName), c(r)
    }
  }, [a.open, r]), i.jsx(J.div, {
    "data-state": lf(a.open),
    "data-disabled": a.disabled ? "" : void 0,
    id: a.contentId,
    hidden: !h,
    ...s,
    ref: d,
    style: {
      "--radix-collapsible-content-height": v ? `${v}px` : void 0,
      "--radix-collapsible-content-width": b ? `${b}px` : void 0,
      ...e.style
    },
    children: h && o
  })
});

function lf(e) {
  return e ? "open" : "closed"
}
var dP = Ex,
  fP = Sx,
  pP = jx,
  mP = m.createContext(void 0);

function cf(e) {
  const t = m.useContext(mP);
  return e || t || "ltr"
}
var Ot = "Accordion",
  hP = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [uf, gP, vP] = Dd(Ot),
  [wl, QR] = _t(Ot, [vP, Nx]),
  df = Nx(),
  Px = _.forwardRef((e, t) => {
    const {
      type: n,
      ...r
    } = e, o = r, s = r;
    return i.jsx(uf.Provider, {
      scope: e.__scopeAccordion,
      children: n === "multiple" ? i.jsx(bP, {
        ...s,
        ref: t
      }) : i.jsx(wP, {
        ...o,
        ref: t
      })
    })
  });
Px.displayName = Ot;
var [kx, xP] = wl(Ot), [Rx, yP] = wl(Ot, {
  collapsible: !1
}), wP = _.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {},
    collapsible: s = !1,
    ...a
  } = e, [l, c] = Ir({
    prop: n,
    defaultProp: r ?? "",
    onChange: o,
    caller: Ot
  });
  return i.jsx(kx, {
    scope: e.__scopeAccordion,
    value: _.useMemo(() => l ? [l] : [], [l]),
    onItemOpen: c,
    onItemClose: _.useCallback(() => s && c(""), [s, c]),
    children: i.jsx(Rx, {
      scope: e.__scopeAccordion,
      collapsible: s,
      children: i.jsx(Tx, {
        ...a,
        ref: t
      })
    })
  })
}), bP = _.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {},
    ...s
  } = e, [a, l] = Ir({
      prop: n,
      defaultProp: r ?? [],
      onChange: o,
      caller: Ot
    }), c = _.useCallback(d => l((p = []) => [...p, d]), [l]), u = _
    .useCallback(d => l((p = []) => p.filter(v => v !== d)), [l]);
  return i.jsx(kx, {
    scope: e.__scopeAccordion,
    value: a,
    onItemOpen: c,
    onItemClose: u,
    children: i.jsx(Rx, {
      scope: e.__scopeAccordion,
      collapsible: !0,
      children: i.jsx(Tx, {
        ...s,
        ref: t
      })
    })
  })
}), [NP, bl] = wl(Ot), Tx = _.forwardRef((e, t) => {
  const {
    __scopeAccordion: n,
    disabled: r,
    dir: o,
    orientation: s = "vertical",
    ...a
  } = e, l = _.useRef(null), c = ye(l, t), u = gP(n), p = cf(o) === "ltr",
    v = Y(e.onKeyDown, f => {
      var C;
      if (!hP.includes(f.key)) return;
      const b = f.target,
        h = u().filter(P => {
          var T;
          return !((T = P.ref.current) != null && T.disabled)
        }),
        y = h.findIndex(P => P.ref.current === b),
        x = h.length;
      if (y === -1) return;
      f.preventDefault();
      let g = y;
      const w = 0,
        N = x - 1,
        E = () => {
          g = y + 1, g > N && (g = w)
        },
        S = () => {
          g = y - 1, g < w && (g = N)
        };
      switch (f.key) {
        case "Home":
          g = w;
          break;
        case "End":
          g = N;
          break;
        case "ArrowRight":
          s === "horizontal" && (p ? E() : S());
          break;
        case "ArrowDown":
          s === "vertical" && E();
          break;
        case "ArrowLeft":
          s === "horizontal" && (p ? S() : E());
          break;
        case "ArrowUp":
          s === "vertical" && S();
          break
      }
      const j = g % x;
      (C = h[j].ref.current) == null || C.focus()
    });
  return i.jsx(NP, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: s,
    children: i.jsx(uf.Slot, {
      scope: n,
      children: i.jsx(J.div, {
        ...a,
        "data-orientation": s,
        ref: c,
        onKeyDown: r ? void 0 : v
      })
    })
  })
}), Mi = "AccordionItem", [EP, ff] = wl(Mi), Ix = _.forwardRef((e, t) => {
  const {
    __scopeAccordion: n,
    value: r,
    ...o
  } = e, s = bl(Mi, n), a = xP(Mi, n), l = df(n), c = fo(), u = r && a.value
    .includes(r) || !1, d = s.disabled || e.disabled;
  return i.jsx(EP, {
    scope: n,
    open: u,
    disabled: d,
    triggerId: c,
    children: i.jsx(dP, {
      "data-orientation": s.orientation,
      "data-state": Dx(u),
      ...l,
      ...o,
      ref: t,
      disabled: d,
      open: u,
      onOpenChange: p => {
        p ? a.onItemOpen(r) : a.onItemClose(r)
      }
    })
  })
});
Ix.displayName = Mi;
var Ax = "AccordionHeader",
  _x = _.forwardRef((e, t) => {
    const {
      __scopeAccordion: n,
      ...r
    } = e, o = bl(Ot, n), s = ff(Ax, n);
    return i.jsx(J.h3, {
      "data-orientation": o.orientation,
      "data-state": Dx(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      ...r,
      ref: t
    })
  });
_x.displayName = Ax;
var Ou = "AccordionTrigger",
  Mx = _.forwardRef((e, t) => {
    const {
      __scopeAccordion: n,
      ...r
    } = e, o = bl(Ot, n), s = ff(Ou, n), a = yP(Ou, n), l = df(n);
    return i.jsx(uf.ItemSlot, {
      scope: n,
      children: i.jsx(fP, {
        "aria-disabled": s.open && !a.collapsible || void 0,
        "data-orientation": o.orientation,
        id: s.triggerId,
        ...l,
        ...r,
        ref: t
      })
    })
  });
Mx.displayName = Ou;
var Ox = "AccordionContent",
  Lx = _.forwardRef((e, t) => {
    const {
      __scopeAccordion: n,
      ...r
    } = e, o = bl(Ot, n), s = ff(Ox, n), a = df(n);
    return i.jsx(pP, {
      role: "region",
      "aria-labelledby": s.triggerId,
      "data-orientation": o.orientation,
      ...a,
      ...r,
      ref: t,
      style: {
        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
        ...e.style
      }
    })
  });
Lx.displayName = Ox;

function Dx(e) {
  return e ? "open" : "closed"
}
var CP = Px,
  SP = Ix,
  jP = _x,
  Fx = Mx,
  $x = Lx;
const PP = CP,
  Ur = m.forwardRef(({
    className: e,
    ...t
  }, n) => i.jsx(SP, {
    ref: n,
    className: se("border-b", e),
    ...t
  }));
Ur.displayName = "AccordionItem";
const Vr = m.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => i.jsx(jP, {
  className: "flex",
  children: i.jsxs(Fx, {
    ref: r,
    className: se(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e),
    ...n,
    children: [t, i.jsx(m2, {
      className: "h-4 w-4 shrink-0 transition-transform duration-200"
    })]
  })
}));
Vr.displayName = Fx.displayName;
const Hr = m.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => i.jsx($x, {
  ref: r,
  className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  ...n,
  children: i.jsx("div", {
    className: se("pb-4 pt-0", e),
    children: t
  })
}));
Hr.displayName = $x.displayName;
const kP = "/assets/review-profile-carlos-7iuLmgL6.jpg",
  RP = "/assets/review-profile-2-CPHO2E74.jpg",
  TP = "/assets/review-profile-3-DIYsgiJG.jpg",
  IP = "/assets/review-profile-new-4-CaSKJ7Oh.jpg",
  AP = "/assets/review-jbl-1-49B0eYAa.webp",
  _P = "/assets/review-jbl-2-BUSZ0QNT.webp",
  MP = "/assets/review-jbl-3-DtOtI_z4.webp",
  OP = "/assets/review-jbl-4-CjHBwwRH.webp",
  LP = "/assets/review-jbl-5-Bt3bh9Vd.webp",
  DP = "/assets/review-jbl-6-DV-J_ELQ.webp",
  FP = "/assets/review-jbl-7-bSZOCZEB.webp",
  $P = "/assets/review-jbl-8-DTrkFIqQ.webp",
  BP = "/assets/review-jbl-9-DBk0XvHG.webp",
  zP = "/assets/review-jbl-10-E_RW5IQH.webp",
  Oi = "/assets/jbl-logo-official-CrhYIL7o.png",
  UP = m.memo(() => {
    const [e, t] = m.useState(""), [n, r] = m.useState(!1), [o, s] = m
      .useState(!1), l = m.useCallback(() => {
        s(c => !c)
      }, [o]);
    return i.jsxs("div", {
      className: "container py-4 md:py-6 space-y-4 md:space-y-6 px-4",
      children: [i.jsxs("div", {
        children: [i.jsx("div", {
          className: "mb-1.5",
          children: i.jsx("span", {
            className: "inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold",
            style: {
              background: "linear-gradient(90deg, #FFC0CB 0%, #B0E0E6 100%)"
            },
            children: "Promo do Mês"
          })
        }), i.jsx("h1", {
          className: "text-xl md:text-2xl font-bold mb-2 leading-tight text-foreground",
          children: "Caixa De Som Bluetooth Partybox Encore Essential 100w Jbl Cor Preto"
        }), i.jsxs("div", {
          className: "flex items-center gap-2 text-xs md:text-sm text-muted-foreground",
          children: [i.jsxs("div", {
            className: "flex items-center gap-1",
            children: [i.jsx(Eu, {
              className: "h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400"
            }), i.jsx("span", {
              className: "font-semibold text-foreground",
              children: "4.7"
            }), i.jsx("span", {
              children: "(207)"
            })]
          }), i.jsx("span", {
            children: "•"
          }), i.jsx("span", {
            children: "4473 vendidos"
          })]
        })]
      }), i.jsx("div", {
        className: "space-y-3 md:space-y-4 pt-1",
        children: i.jsxs("div", {
          children: [i.jsx("h3", {
            className: "text-base md:text-lg font-semibold mb-2",
            children: "Voltagem"
          }), i.jsx(ie, {
            variant: e === "127-220" ? "default" :
              "outline",
            size: "sm",
            className: `text-xs md:text-sm font-semibold px-4 ${e==="127-220"?"bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white":""}`,
            onClick: () => t(e === "127-220" ? "" :
              "127-220"),
            children: "127/220V"
          })]
        })
      }), i.jsxs("div", {
        className: "border rounded-lg p-3 md:p-4 space-y-3",
        children: [i.jsxs("div", {
          className: "flex items-center gap-3",
          children: [i.jsx(Bv, {
            className: "h-5 w-5 text-green-600 flex-shrink-0"
          }), i.jsxs("div", {
            children: [i.jsx("p", {
              className: "font-semibold text-green-600 text-sm md:text-base",
              children: "Frete grátis"
            }), i.jsx("p", {
              className: "text-xs md:text-sm text-muted-foreground",
              children: "Entrega expressa em todo Brasil. Receba seu produto em até 15 dias úteis com código de rastreamento completo."
            })]
          })]
        }), i.jsxs("div", {
          className: "flex items-center gap-3 cursor-pointer hover:bg-accent/50 rounded-lg p-2 -m-2 transition-colors",
          onClick: () => r(!0),
          children: [i.jsx(qp, {
            className: "h-5 w-5 flex-shrink-0"
          }), i.jsxs("div", {
            children: [i.jsx("p", {
              className: "font-semibold text-sm md:text-base",
              children: "Devolução grátis até 30 dias"
            }), i.jsx("p", {
              className: "text-xs md:text-sm text-muted-foreground",
              children: "Não gostou? Devolvemos seu dinheiro sem burocracia. Frete de retorno gratuito e reembolso rápido garantido."
            })]
          })]
        })]
      }), i.jsx("div", {
        className: "border-t border-border my-4"
      }), i.jsx("div", {
        className: "space-y-3 md:space-y-4",
        id: "reviews-section",
        children: i.jsx("h2", {
          className: "text-lg md:text-xl font-bold",
          children: "Avaliações dos clientes (491)"
        })
      }), i.jsx("div", {
        className: "space-y-3 md:space-y-4",
        children: VP.map((c, u) => i.jsxs("div", {
          className: "border-b pb-3 md:pb-4 last:border-0",
          children: [i.jsxs("div", {
            className: "flex items-start gap-2 mb-2",
            children: [c.profileImage ? i.jsx("img", {
              src: c.profileImage,
              alt: c.name,
              className: "w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0",
              loading: "lazy"
            }) : i.jsx("div", {
              className: "w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center font-semibold text-sm flex-shrink-0",
              children: c.name[0]
            }), i.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [i.jsxs("div", {
                className: "flex items-center gap-2 mb-1",
                children: [i.jsx("p", {
                  className: "font-semibold text-sm md:text-base",
                  children: c.name
                }), i.jsx("div", {
                  className: "flex items-center gap-0.5",
                  children: i.jsx(
                    "span", {
                      className: "text-xs",
                      children: "⭐⭐⭐⭐⭐"
                    })
                })]
              }), i.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: c.location
              })]
            })]
          }), i.jsx("p", {
            className: "text-xs md:text-sm text-foreground mb-2 leading-relaxed",
            children: c.comment
          }), c.images && c.images.length > 0 && i.jsx(
            "div", {
              className: "flex gap-2 overflow-x-auto",
              children: c.images.map((d, p) => i.jsx(
                "img", {
                  src: d,
                  alt: `Review ${p+1}`,
                  className: "w-16 h-16 md:w-20 md:h-20 rounded object-cover flex-shrink-0",
                  loading: "lazy"
                }, p))
            })]
        }, u))
      }), i.jsx("div", {
        className: "border-t border-border my-4"
      }), i.jsxs("div", {
        className: "space-y-3 md:space-y-4",
        children: [i.jsx("h2", {
          className: "text-lg md:text-xl font-bold",
          children: "Avaliações da loja (207)"
        }), i.jsxs("div", {
          className: "flex flex-wrap gap-1.5",
          children: [i.jsxs(ie, {
            variant: "outline",
            size: "sm",
            className: "text-[10px] md:text-xs px-2 py-1 h-auto",
            children: [i.jsx("span", {
              className: "mr-1",
              children: "📷"
            }), i.jsx("span", {
              children: "Imagens (52)"
            })]
          }), i.jsx(ie, {
            variant: "outline",
            size: "sm",
            className: "text-[10px] md:text-xs px-2 py-1 h-auto",
            children: i.jsx("span", {
              children: "5 ⭐ (155)"
            })
          }), i.jsx(ie, {
            variant: "outline",
            size: "sm",
            className: "text-[10px] md:text-xs px-2 py-1 h-auto",
            children: i.jsx("span", {
              children: "4 ⭐ (22)"
            })
          })]
        })]
      }), i.jsx("div", {
        className: "border-t border-border my-4"
      }), i.jsx("div", {
        className: "space-y-3",
        children: i.jsxs("div", {
          className: "flex items-center gap-3 justify-between",
          children: [i.jsxs("div", {
            className: "flex items-center gap-3 flex-1",
            children: [i.jsx("img", {
              src: Oi,
              alt: "JBL Logo",
              className: "w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0",
              loading: "lazy"
            }), i.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [i.jsx("p", {
                className: "font-bold text-base md:text-lg",
                children: "JBL"
              }), i.jsx("p", {
                className: "text-xs md:text-sm text-muted-foreground",
                children: "207 produtos"
              })]
            })]
          }), i.jsx(ie, {
            variant: o ? "secondary" : "outline",
            size: "sm",
            className: "text-xs md:text-sm px-6",
            onClick: l,
            children: o ? "Seguindo" : "Seguir"
          })]
        })
      }), i.jsx("div", {
        className: "border-t border-border my-4"
      }), i.jsxs("div", {
        className: "space-y-4",
        children: [i.jsx("h2", {
          className: "text-lg md:text-xl font-bold",
          children: "Descrição do produto"
        }), i.jsxs("div", {
          className: "space-y-4 text-foreground",
          children: [i.jsx("div", {
            className: "space-y-2",
            children: i.jsx("h3", {
              className: "text-base md:text-lg font-semibold",
              children: "O JBL PartyBox Encore Essential é para todas as festa!"
            })
          }), i.jsxs("div", {
            className: "space-y-2",
            children: [i.jsx("h3", {
              className: "text-base md:text-lg font-semibold",
              children: "EXPERIÊNCIA IMERSIVA"
            }), i.jsx("p", {
              className: "text-sm md:text-base leading-relaxed",
              children: "Aproveite o som incrível JBL Original Pro com graves profundos, garantindo uma experiência sonora imersiva e envolvente em qualquer lugar."
            })]
          }), i.jsxs("div", {
            className: "space-y-2",
            children: [i.jsx("h3", {
              className: "text-base md:text-lg font-semibold",
              children: "ESPETÁCULO DE LUZES"
            }), i.jsx("p", {
              className: "text-sm md:text-base leading-relaxed",
              children: "Transforme qualquer ambiente em uma pista de dança com o show de luzes dinâmico, que acompanha o ritmo da sua música, adicionando mais cores na festa."
            })]
          }), i.jsxs("div", {
            className: "space-y-2",
            children: [i.jsx("h3", {
              className: "text-base md:text-lg font-semibold",
              children: "ATÉ 6 HORAS DE BATERIA"
            }), i.jsx("p", {
              className: "text-sm md:text-base leading-relaxed",
              children: "Com até 6 horas de tempo de reprodução, o JBL PartyBox Encore Essential permite que você mantenha a festa em movimento, sem se preocupar com tomadas ou cabos."
            })]
          }), i.jsxs("div", {
            className: "space-y-2",
            children: [i.jsx("h3", {
              className: "text-base md:text-lg font-semibold",
              children: "À PROVA DE ÁGUA"
            }), i.jsx("p", {
              className: "text-sm md:text-base leading-relaxed",
              children: "Dance sem preocupações na praia ou à beira da piscina, pois o PartyBox Encore Essential é à prova de água IPX4, garantindo durabilidade mesmo em ambientes úmidos."
            })]
          }), i.jsxs("div", {
            className: "space-y-2",
            children: [i.jsx("h3", {
              className: "text-base md:text-lg font-semibold",
              children: "QUAL O CONTEÚDO DA CAIXA?"
            }), i.jsxs("ul", {
              className: "text-sm md:text-base leading-relaxed list-disc list-inside space-y-1",
              children: [i.jsx("li", {
                children: "1 JBL PartyBox Encore Essential"
              }), i.jsx("li", {
                children: "1 Cabo de energia AC (o plugue AC e a quantidade variam conforme a região)"
              }), i.jsx("li", {
                children: "1 Guia de início rápido"
              }), i.jsx("li", {
                children: "1 Ficha de segurança"
              })]
            })]
          }), i.jsx("div", {
            className: "bg-accent/30 rounded-lg p-4 mt-4",
            children: i.jsxs("p", {
              className: "text-sm md:text-base leading-relaxed",
              children: [i.jsx("strong", {
                  children: "A JBL"
                }),
                " destaca-se com áudio de alta qualidade, tecnologia avançada e design moderno, proporcionando momentos únicos na vida das pessoas."
              ]
            })
          }), i.jsxs("div", {
            className: "space-y-2 mt-4",
            children: [i.jsx("h3", {
              className: "text-base md:text-lg font-semibold",
              children: "Aviso Legal"
            }), i.jsx("p", {
              className: "text-sm md:text-base leading-relaxed text-muted-foreground",
              children: "• A duração da bateria depende do uso que se dê ao produto."
            })]
          })]
        })]
      }), i.jsx("div", {
        className: "border-t border-border my-6"
      }), i.jsx("div", {
        className: "space-y-4",
        children: i.jsxs(PP, {
          type: "single",
          collapsible: !0,
          className: "w-full",
          children: [i.jsxs(Ur, {
            value: "shopping",
            children: [i.jsx(Vr, {
              className: "text-base md:text-lg font-bold hover:no-underline",
              children: "Comece a comprar"
            }), i.jsx(Hr, {
              className: "text-sm md:text-base text-muted-foreground",
              children: "Explore nossa ampla seleção de produtos de áudio premium e encontre o que você precisa."
            })]
          }), i.jsxs(Ur, {
            value: "money",
            children: [i.jsx(Vr, {
              className: "text-base md:text-lg font-bold hover:no-underline",
              children: "Ganhe dinheiro conosco"
            }), i.jsx(Hr, {
              className: "text-sm md:text-base text-muted-foreground",
              children: "Seja um parceiro JBL e ganhe comissões vendendo nossos produtos."
            })]
          }), i.jsxs(Ur, {
            value: "company",
            children: [i.jsx(Vr, {
              className: "text-base md:text-lg font-bold hover:no-underline",
              children: "Informações da empresa"
            }), i.jsx(Hr, {
              className: "text-sm md:text-base text-muted-foreground",
              children: "Saiba mais sobre a JBL, nossa história e nosso compromisso com qualidade."
            })]
          }), i.jsxs(Ur, {
            value: "support",
            children: [i.jsx(Vr, {
              className: "text-base md:text-lg font-bold hover:no-underline",
              children: "Suporte ao cliente"
            }), i.jsx(Hr, {
              className: "text-sm md:text-base text-muted-foreground",
              children: "Entre em contato com nossa equipe de suporte para qualquer dúvida ou assistência."
            })]
          }), i.jsxs(Ur, {
            value: "policy",
            children: [i.jsx(Vr, {
              className: "text-base md:text-lg font-bold hover:no-underline",
              children: "Política e legal"
            }), i.jsx(Hr, {
              className: "text-sm md:text-base text-muted-foreground",
              children: "Leia nossos termos de serviço, política de privacidade e informações legais."
            })]
          })]
        })
      }), i.jsxs("div", {
        className: "grid grid-cols-2 gap-2 max-w-[200px]",
        children: [i.jsx("a", {
          href: "https://play.google.com/store",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "block"
        }), i.jsx("a", {
          href: "https://www.apple.com/app-store/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "block ml-12"
        })]
      }), i.jsx(ra, {
        open: n,
        onOpenChange: r,
        children: i.jsxs(Wo, {
          className: "max-w-md",
          children: [i.jsx(oa, {
            children: i.jsxs(sa, {
              className: "text-xl font-bold flex items-center gap-2",
              children: [i.jsx(qp, {
                className: "h-5 w-5 text-primary"
              }), "Política de Devolução"]
            })
          }), i.jsxs("div", {
            className: "space-y-4 pt-2",
            children: [i.jsxs("div", {
              className: "bg-accent/50 rounded-lg p-4 border-l-4 border-primary",
              children: [i.jsx("p", {
                className: "text-sm font-semibold mb-1",
                children: "✓ 30 dias para devolução"
              }), i.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Você tem até 30 dias após o recebimento para solicitar a devolução, sem perguntas."
              })]
            }), i.jsxs("div", {
              className: "space-y-3",
              children: [i.jsxs("div", {
                className: "flex gap-3",
                children: [i.jsx("div", {
                  className: "bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0",
                  children: i.jsx(
                    "span", {
                      className: "text-primary font-bold",
                      children: "1"
                    })
                }), i.jsxs("div", {
                  children: [i.jsx(
                  "p", {
                    className: "text-sm font-semibold",
                    children: "Condições do produto"
                  }), i.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: "Produto em perfeitas condições, com embalagem original e todos os acessórios inclusos."
                  })]
                })]
              }), i.jsxs("div", {
                className: "flex gap-3",
                children: [i.jsx("div", {
                  className: "bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0",
                  children: i.jsx(
                    "span", {
                      className: "text-primary font-bold",
                      children: "2"
                    })
                }), i.jsxs("div", {
                  children: [i.jsx(
                  "p", {
                    className: "text-sm font-semibold",
                    children: "Frete totalmente grátis"
                  }), i.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: "Enviamos uma etiqueta de retorno. Você não paga nada pelo frete de devolução."
                  })]
                })]
              }), i.jsxs("div", {
                className: "flex gap-3",
                children: [i.jsx("div", {
                  className: "bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0",
                  children: i.jsx(
                    "span", {
                      className: "text-primary font-bold",
                      children: "3"
                    })
                }), i.jsxs("div", {
                  children: [i.jsx(
                  "p", {
                    className: "text-sm font-semibold",
                    children: "Reembolso rápido"
                  }), i.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: "Após inspeção, reembolso processado em até 7 dias úteis direto na sua conta."
                  })]
                })]
              })]
            }), i.jsx("div", {
              className: "bg-muted rounded-lg p-3 text-center",
              children: i.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Entre em contato pelo chat ou email para iniciar sua devolução"
              })
            })]
          })]
        })
      })]
    })
  }),
  VP = [{
    name: "Carlos Silva",
    rating: 5,
    location: "São Paulo, SP",
    comment: "Pra finalidade que vou usar,que é plugar um violão ou viola na entrada p 10 de mic ,ficou espetacular pra fazer rodas de viola onde tem muita gente conversando perto e cobrindo o som do instrumento, plugado para voz e violão também ficou um som muito limpo, única coisa que achei que daria mais que 120db com 100 watts rms,sendo que minha jbl flip 6 que tem apenas 30 wats alcança incríveis 99 db.",
    profileImage: kP,
    images: [AP, _P]
  }, {
    name: "Rafaela Lima",
    rating: 5,
    location: "Rio de Janeiro, RJ",
    comment: "Tem proporcionado momentos muitos divertidos com os amigos! única coisa que não me agradou é que os microfones não conectam com outros dispositivos… apenas nessa caixa. Então se algo acontecer com a caixa perco 2 microfones ótimos! a caixa é super linda e com som ótimo porem a bateria deixa a desejar mas se ligar na tomada fica perfeita.",
    profileImage: RP,
    images: [MP, OP, LP, DP]
  }, {
    name: "Pedro Raul",
    rating: 5,
    location: "Belo Horizonte, MG",
    comment: "Caramba que perfeição da jbl som fantástico grave muito forte melhor compra da jbl ja fiz recomendo a todos.",
    profileImage: TP,
    images: [FP, $P]
  }, {
    name: "Pietro Santos",
    rating: 5,
    location: "Curitiba, PR",
    comment: "Produto com ótima qualidade, grave muito bom e bateria muito duradoura.",
    profileImage: IP,
    images: [BP, zP]
  }],
  HP = ({
    open: e,
    onOpenChange: t
  }) => i.jsx(ra, {
    open: e,
    onOpenChange: t,
    children: i.jsxs(Wo, {
      className: "max-w-xs",
      children: [i.jsx(oa, {
        children: i.jsx(sa, {
          children: "Detalhes da Loja"
        })
      }), i.jsxs("div", {
        className: "space-y-4 pt-4",
        children: [i.jsxs("div", {
          className: "flex items-center gap-3",
          children: [i.jsx("img", {
            src: Oi,
            alt: "JBL Logo",
            className: "w-16 h-16 rounded-full object-cover flex-shrink-0",
            loading: "lazy"
          }), i.jsxs("div", {
            children: [i.jsx("h3", {
              className: "font-bold text-lg",
              children: "JBL"
            }), i.jsxs("div", {
              className: "flex items-center gap-1 text-sm",
              children: [i.jsx(Eu, {
                className: "h-4 w-4 fill-yellow-400 text-yellow-400"
              }), i.jsx("span", {
                className: "font-semibold",
                children: "4.8"
              }), i.jsx("span", {
                className: "text-muted-foreground",
                children: "(15.247 avaliações)"
              })]
            })]
          })]
        }), i.jsxs("div", {
          className: "border-t pt-4 space-y-3",
          children: [i.jsxs("div", {
            className: "flex items-start gap-3",
            children: [i.jsx(C2, {
              className: "h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5"
            }), i.jsxs("div", {
              children: [i.jsx("p", {
                className: "font-semibold text-sm",
                children: "Localização"
              }), i.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "São Paulo, Brasil"
              })]
            })]
          }), i.jsxs("div", {
            className: "flex items-start gap-3",
            children: [i.jsx(ol, {
              className: "h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5"
            }), i.jsxs("div", {
              children: [i.jsx("p", {
                className: "font-semibold text-sm",
                children: "Produtos"
              }), i.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "207 produtos disponíveis"
              })]
            })]
          }), i.jsxs("div", {
            className: "flex items-start gap-3",
            children: [i.jsx(Eu, {
              className: "h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5"
            }), i.jsxs("div", {
              children: [i.jsx("p", {
                className: "font-semibold text-sm",
                children: "Qualidade"
              }), i.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "98% de avaliações positivas"
              })]
            })]
          })]
        }), i.jsxs("div", {
          className: "border-t pt-4",
          children: [i.jsx("h4", {
            className: "font-semibold mb-2 text-sm",
            children: "Sobre a loja"
          }), i.jsx("p", {
            className: "text-sm text-muted-foreground leading-relaxed",
            children: "Loja oficial JBL com produtos originais e garantia do fabricante. Oferecemos frete grátis e devolução em até 30 dias. Atendimento especializado para melhor experiência de compra."
          })]
        })]
      })]
    })
  }),
  Om = {
    "Quanto tempo tenho de garantia?": "Nossos produtos têm garantia de 12 meses contra defeitos de fabricação. A garantia é válida a partir da data de compra e cobre problemas de funcionamento normal.",
    "Na primeira compra tem frete grátis?": "Sim! Para primeira compra o frete é totalmente grátis para todo o Brasil. O prazo de entrega varia entre 7 a 15 dias úteis dependendo da sua região.",
    "Como funciona a devolução do produto?": "Você tem até 30 dias após o recebimento para solicitar a devolução. O produto deve estar em perfeitas condições, sem uso, com embalagem original. O frete de devolução é grátis e o reembolso é processado em até 7 dias úteis."
  },
  WP = ({
    open: e,
    onOpenChange: t
  }) => {
    const [n, r] = m.useState([{
      text: "Olá! Me chamo Paulo do time de atendimento da JBL, como podemos ajudar você hoje?",
      isBot: !0
    }]), o = a => {
      r(l => [...l, {
        text: a,
        isBot: !1
      }]), setTimeout(() => {
        r(l => [...l, {
          text: Om[a],
          isBot: !0
        }])
      }, 500)
    }, s = () => {
      r([{
        text: "Olá! Me chamo Paulo do time de atendimento da JBL, como podemos ajudar você hoje?",
        isBot: !0
      }])
    };
    return i.jsx(ra, {
      open: e,
      onOpenChange: a => {
        t(a), a || setTimeout(s, 300)
      },
      children: i.jsxs(Wo, {
        className: "max-w-xs max-h-[75vh] flex flex-col p-0 gap-0 overflow-hidden",
        children: [i.jsx(oa, {
          className: "p-3 pb-2 border-b bg-gradient-to-r from-primary/5 to-primary/10",
          children: i.jsxs(sa, {
            className: "flex items-center gap-2",
            children: [i.jsxs("div", {
              className: "relative",
              children: [i.jsx("img", {
                src: Oi,
                alt: "JBL Logo",
                className: "h-8 w-8 rounded-full object-cover ring-2 ring-primary/20"
              }), i.jsx("div", {
                className: "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-background"
              })]
            }), i.jsxs("div", {
              className: "flex flex-col",
              children: [i.jsx("span", {
                className: "text-sm font-semibold",
                children: "Atendimento JBL"
              }), i.jsx("span", {
                className: "text-[10px] text-muted-foreground font-normal",
                children: "Online agora"
              })]
            })]
          })
        }), i.jsx("div", {
          className: "flex-1 overflow-y-auto space-y-2.5 p-3 min-h-[250px] max-h-[350px]",
          children: n.map((a, l) => i.jsxs("div", {
            className: `flex gap-1.5 ${a.isBot?"justify-start":"justify-end"}`,
            children: [a.isBot && i.jsx("img", {
              src: Oi,
              alt: "JBL",
              className: "h-6 w-6 rounded-full object-cover flex-shrink-0 mt-0.5"
            }), i.jsx("div", {
              className: `max-w-[75%] rounded-2xl px-2.5 py-1.5 ${a.isBot?"bg-muted text-foreground rounded-tl-sm":"bg-primary text-primary-foreground rounded-tr-sm"}`,
              children: i.jsx("p", {
                className: "text-[11px] leading-relaxed",
                children: a.text
              })
            })]
          }, l))
        }), i.jsxs("div", {
          className: "border-t bg-muted/30 p-2.5 space-y-1.5",
          children: [i.jsx("p", {
            className: "text-[9px] text-muted-foreground font-medium px-0.5",
            children: "Perguntas frequentes:"
          }), Object.keys(Om).map(a => i.jsx(ie, {
            variant: "outline",
            size: "sm",
            className: "w-full text-left justify-start text-[9px] h-auto py-1.5 px-2 whitespace-normal leading-tight hover:bg-primary/10 hover:border-primary/30 transition-colors",
            onClick: () => o(a),
            children: a
          }, a))]
        })]
      })
    })
  },
  QP = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
  e) {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16)
  }),
  wc = (e, t = "product-default") => e && typeof e == "string" && e.trim()
  .length > 0 ? e.trim() : (console.error(
    "❌ CRITICAL: content_id is missing! Using fallback:", t), t),
  Re = (e, t) => {
    var l;
    if (typeof window > "u" || !window.ttq) return;
    const n = t.event_id || QP(),
      r = wc(t.content_id, "product-generic"),
      o = t.content_ids && t.content_ids.length > 0 ? t.content_ids.map(c => wc(
        c, "product-generic")) : [r],
      s = ((l = t.contents) == null ? void 0 : l.map(c => ({
        ...c,
        content_id: wc(c.content_id, "product-generic")
      }))) || [{
        content_id: r,
        content_name: t.description || "Product",
        quantity: t.quantity || 1,
        price: t.value || 0
      }],
      a = {
        ...t,
        event_id: n,
        content_id: r,
        content_ids: o,
        content_type: t.content_type || "product",
        contents: s
      };
    try {
      window.ttq.track(e, a), console.log(
        `✅ TikTok ${e} tracked with event_id:`, n)
    } catch (c) {
      console.error("❌ Error tracking TikTok event:", c)
    }
  },
  pf = "/assets/jbl-01-yIkFYYPZ.webp",
  GP = m.memo(() => {
    const [e, t] = m.useState(!1), [n, r] = m.useState(!1), o = hn(), s = m
      .useCallback(() => {
        const l = document.getElementById("reviews-section");
        l && l.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }, []), a = m.useCallback(() => {
        Re("AddToCart", {
          content_id: "jbl-partybox-encore-essential-preto",
          description: "Caixa De Som Bluetooth Partybox Encore Essential 100w Jbl Cor Preto",
          quantity: 1,
          value: 47.9,
          currency: "BRL"
        }), window.location.href = `https://checkout.casaboreal.site/checkout?product=6ae74748-ba99-11f0-a710-46da4690ad53` + (window.location.search ? window.location.search.replace('?', '&') : '')
      }, []);
    return i.jsxs(i.Fragment, {
      children: [i.jsx("footer", {
        className: "fixed bottom-0 left-0 right-0 bg-background border-t z-50",
        children: i.jsxs("div", {
          className: "container flex items-center gap-2 p-3 px-4",
          children: [i.jsxs("button", {
            className: "flex flex-col items-center justify-center gap-1 min-w-[48px]",
            onClick: () => t(!0),
            children: [i.jsx(w2, {
              className: "h-5 w-5"
            }), i.jsx("span", {
              className: "text-xs",
              children: "Loja"
            })]
          }), i.jsxs("button", {
            className: "flex flex-col items-center justify-center gap-1 min-w-[48px]",
            onClick: () => r(!0),
            children: [i.jsx(S2, {
              className: "h-5 w-5"
            }), i.jsx("span", {
              className: "text-xs",
              children: "Chat"
            })]
          }), i.jsx(ie, {
            variant: "secondary",
            className: "flex-[2] h-12 text-[11px] font-semibold bg-muted hover:bg-muted/80 text-foreground whitespace-normal leading-tight px-2",
            onClick: s,
            children: i.jsxs("span", {
              className: "text-center block",
              children: ["Reviews do", i.jsx(
                "br", {}), "produto"
              ]
            })
          }), i.jsx(ie, {
            size: "lg",
            className: "h-11 text-sm font-bold bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white px-3",
            onClick: a,
            children: "COMPRAR AGORA"
          })]
        })
      }), i.jsx(HP, {
        open: e,
        onOpenChange: t
      }), i.jsx(WP, {
        open: n,
        onOpenChange: r
      })]
    })
  }),
  Dt = {
    id: "jbl-partybox-encore-essential-preto",
    name: "Caixa De Som Bluetooth Partybox Encore Essential 100w Jbl Cor Preto",
    image: pf,
    price: 30.32,
    originalPrice: 1389.9,
    discount: 98
  },
  qP = ({
    onClose: e,
    forceOpen: t,
    onForceOpenChange: n
  }) => {
    const [r, o] = m.useState(!1), [s, a] = m.useState(!1), l = hn();
    m.useEffect(() => {
      const d = sessionStorage.getItem("discountShownFromCheckout");
      t && !d && (o(!0), a(!0), sessionStorage.setItem(
        "discountShownFromCheckout", "true"), n == null || n(!1))
    }, [t, n]), m.useEffect(() => {
      sessionStorage.removeItem("discountShownFromCheckout"), window.history
        .pushState({
          preventBack: !0
        }, "");
      const d = p => {
        s || (p.preventDefault(), window.history.pushState({
          preventBack: !0
        }, ""), o(!0), a(!0))
      };
      return window.addEventListener("popstate", d), () => {
        window.removeEventListener("popstate", d)
      }
    }, [s]);
    const c = () => {
        o(!1), e == null || e()
      },
      u = () => {
        Re("InitiateCheckout", {
          content_id: Dt.id,
          description: Dt.name,
          quantity: 1,
          value: Dt.price,
          currency: "BRL"
        }), o(!1), window.location.href = `https://checkout.casaboreal.site/checkout?product=aa22e829-baa4-11f0-a710-46da4690ad53` + (window.location.search ? window.location.search.replace('?', '&') : '')
      };
    return i.jsx(i.Fragment, {
      children: i.jsx(ra, {
        open: r,
        onOpenChange: o,
        children: i.jsxs(Wo, {
          className: "max-w-[380px] w-[90vw] max-h-[85vh] overflow-y-auto p-0 gap-0 rounded-2xl",
          children: [i.jsxs("button", {
            onClick: c,
            className: "absolute right-3 top-3 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10",
            children: [i.jsx(sl, {
              className: "h-4 w-4"
            }), i.jsx("span", {
              className: "sr-only",
              children: "Fechar"
            })]
          }), i.jsxs("div", {
            className: "bg-sale text-sale-foreground p-4 text-center",
            children: [i.jsxs("div", {
              className: "flex items-center justify-center gap-2 mb-1",
              children: [i.jsx(al, {
                className: "h-5 w-5",
                fill: "currentColor"
              }), i.jsx("h2", {
                className: "text-xl font-bold",
                children: "ESPERE!"
              })]
            }), i.jsx("p", {
              className: "text-base font-semibold",
              children: "Não vá embora sem seu desconto especial!"
            })]
          }), i.jsxs("div", {
            className: "p-4 space-y-4",
            children: [i.jsx("div", {
              className: "text-center",
              children: i.jsxs("div", {
                className: "mb-4",
                children: [i.jsx("img", {
                  src: Dt.image,
                  alt: Dt.name,
                  className: "w-full max-w-[280px] mx-auto h-auto object-contain",
                  loading: "lazy"
                }), i.jsx("h3", {
                  className: "font-bold text-lg mt-2",
                  children: Dt.name
                })]
              })
            }), i.jsxs("div", {
              className: "bg-accent p-3 rounded-lg text-center space-y-1.5",
              children: [i.jsxs("p", {
                className: "text-xs text-muted-foreground",
                children: ["De: ", i.jsx("span", {
                  className: "line-through",
                  children: "R$ 1.389,90"
                })]
              }), i.jsxs("div", {
                className: "flex items-center justify-center gap-2",
                children: [i.jsx("span", {
                  className: "text-2xl font-bold text-sale",
                  children: "R$ 30,32"
                }), i.jsx("span", {
                  className: "bg-sale text-sale-foreground px-1.5 py-0.5 rounded text-[10px] font-bold",
                  children: "98% OFF"
                })]
              }), i.jsx("p", {
                className: "text-base font-bold text-green-600",
                children: "Economize R$ 1.359,58!"
              })]
            }), i.jsxs("div", {
              className: "space-y-2.5",
              children: [i.jsx(ie, {
                size: "lg",
                className: "w-full bg-sale hover:bg-sale/90 text-sale-foreground font-bold text-base h-12",
                onClick: u,
                children: "SIM! QUERO MEU DESCONTO"
              }), i.jsx("button", {
                onClick: c,
                className: "w-full text-xs text-muted-foreground hover:text-foreground underline",
                children: "Não, obrigado. Prefiro pagar R$ 1.389,90"
              })]
            }), i.jsx("div", {
              className: "text-center text-[10px] text-muted-foreground",
              children: "⚡ Oferta válida apenas nesta sessão"
            })]
          })]
        })
      })
    })
  },
  KP = "/assets/jbl-02-DEpYoRZp.webp",
  XP = "/assets/jbl-03-CdJbKwP5.webp",
  YP = "/assets/jbl-04-CvMjX3gJ.webp",
  JP = "/assets/jbl-05-DZ5CS0EQ.webp",
  ZP = "/assets/jbl-06-CeIS-6mT.webp",
  ek = [pf, KP, XP, YP, JP, ZP],
  Bx = m.memo(() => {
    const e = Ho(),
      [t, n] = m.useState(!1);
    return m.useEffect(() => {
      var r;
      (r = e.state) != null && r.openDiscount && (n(!0), window.history
        .replaceState({}, document.title)), Re("ViewContent", {
        content_id: "jbl-partybox-encore-essential-preto",
        description: "Caixa De Som Bluetooth Partybox Encore Essential 100w Jbl Cor Preto",
        quantity: 1,
        value: 47.9,
        currency: "BRL"
      })
    }, [e]), i.jsxs("div", {
      className: "min-h-screen bg-background pb-20 md:pb-24",
      children: [i.jsx(XS, {}), i.jsxs("main", {
        className: "pt-14 md:pt-16",
        children: [i.jsx(YS, {
          images: ek
        }), i.jsx(JS, {}), i.jsx(UP, {})]
      }), i.jsx(GP, {}), i.jsx(qP, {
        forceOpen: t,
        onForceOpenChange: n
      })]
    })
  });
Bx.displayName = "Index";
const at = m.forwardRef(({
  className: e,
  type: t,
  ...n
}, r) => i.jsx("input", {
  type: t,
  className: se(
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    e),
  ref: r,
  ...n
}));
at.displayName = "Input";
var tk = "Label",
  zx = m.forwardRef((e, t) => i.jsx(J.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e
          .onMouseDown) == null || o.call(e, n), !n.defaultPrevented &&
        n.detail > 1 && n.preventDefault())
    }
  }));
zx.displayName = tk;
var Ux = zx;
const nk = Ud(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    ),
  it = m.forwardRef(({
    className: e,
    ...t
  }, n) => i.jsx(Ux, {
    ref: n,
    className: se(nk(), e),
    ...t
  }));
it.displayName = Ux.displayName;
var bc = "rovingFocusGroup.onEntryFocus",
  rk = {
    bubbles: !1,
    cancelable: !0
  },
  aa = "RovingFocusGroup",
  [Lu, Vx, ok] = Dd(aa),
  [sk, Hx] = _t(aa, [ok]),
  [ak, ik] = sk(aa),
  Wx = m.forwardRef((e, t) => i.jsx(Lu.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: i.jsx(Lu.Slot, {
      scope: e.__scopeRovingFocusGroup,
      children: i.jsx(lk, {
        ...e,
        ref: t
      })
    })
  }));
Wx.displayName = aa;
var lk = m.forwardRef((e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      orientation: r,
      loop: o = !1,
      dir: s,
      currentTabStopId: a,
      defaultCurrentTabStopId: l,
      onCurrentTabStopIdChange: c,
      onEntryFocus: u,
      preventScrollOnEntryFocus: d = !1,
      ...p
    } = e, v = m.useRef(null), f = ye(t, v), b = cf(s), [h, y] = Ir({
      prop: a,
      defaultProp: l ?? null,
      onChange: c,
      caller: aa
    }), [x, g] = m.useState(!1), w = Tt(u), N = Vx(n), E = m.useRef(!1), [S,
      j
    ] = m.useState(0);
    return m.useEffect(() => {
      const C = v.current;
      if (C) return C.addEventListener(bc, w), () => C
        .removeEventListener(bc, w)
    }, [w]), i.jsx(ak, {
      scope: n,
      orientation: r,
      dir: b,
      loop: o,
      currentTabStopId: h,
      onItemFocus: m.useCallback(C => y(C), [y]),
      onItemShiftTab: m.useCallback(() => g(!0), []),
      onFocusableItemAdd: m.useCallback(() => j(C => C + 1), []),
      onFocusableItemRemove: m.useCallback(() => j(C => C - 1), []),
      children: i.jsx(J.div, {
        tabIndex: x || S === 0 ? -1 : 0,
        "data-orientation": r,
        ...p,
        ref: f,
        style: {
          outline: "none",
          ...e.style
        },
        onMouseDown: Y(e.onMouseDown, () => {
          E.current = !0
        }),
        onFocus: Y(e.onFocus, C => {
          const P = !E.current;
          if (C.target === C.currentTarget && P && !x) {
            const T = new CustomEvent(bc, rk);
            if (C.currentTarget.dispatchEvent(T), !T
              .defaultPrevented) {
              const O = N().filter(B => B.focusable),
                M = O.find(B => B.active),
                $ = O.find(B => B.id === h),
                z = [M, $, ...O].filter(Boolean).map(B => B.ref
                  .current);
              qx(z, d)
            }
          }
          E.current = !1
        }),
        onBlur: Y(e.onBlur, () => g(!1))
      })
    })
  }),
  Qx = "RovingFocusGroupItem",
  Gx = m.forwardRef((e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...l
    } = e, c = fo(), u = s || c, d = ik(Qx, n), p = d.currentTabStopId === u,
      v = Vx(n), {
        onFocusableItemAdd: f,
        onFocusableItemRemove: b,
        currentTabStopId: h
      } = d;
    return m.useEffect(() => {
      if (r) return f(), () => b()
    }, [r, f, b]), i.jsx(Lu.ItemSlot, {
      scope: n,
      id: u,
      focusable: r,
      active: o,
      children: i.jsx(J.span, {
        tabIndex: p ? 0 : -1,
        "data-orientation": d.orientation,
        ...l,
        ref: t,
        onMouseDown: Y(e.onMouseDown, y => {
          r ? d.onItemFocus(u) : y.preventDefault()
        }),
        onFocus: Y(e.onFocus, () => d.onItemFocus(u)),
        onKeyDown: Y(e.onKeyDown, y => {
          if (y.key === "Tab" && y.shiftKey) {
            d.onItemShiftTab();
            return
          }
          if (y.target !== y.currentTarget) return;
          const x = dk(y, d.orientation, d.dir);
          if (x !== void 0) {
            if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey)
              return;
            y.preventDefault();
            let w = v().filter(N => N.focusable).map(N => N.ref
              .current);
            if (x === "last") w.reverse();
            else if (x === "prev" || x === "next") {
              x === "prev" && w.reverse();
              const N = w.indexOf(y.currentTarget);
              w = d.loop ? fk(w, N + 1) : w.slice(N + 1)
            }
            setTimeout(() => qx(w))
          }
        }),
        children: typeof a == "function" ? a({
          isCurrentTabStop: p,
          hasTabStop: h != null
        }) : a
      })
    })
  });
Gx.displayName = Qx;
var ck = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};

function uk(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e ===
    "ArrowRight" ? "ArrowLeft" : e
}

function dk(e, t, n) {
  const r = uk(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t ===
      "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return ck[r]
}

function qx(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({
        preventScroll: t
      }), document.activeElement !== n)) return
}

function fk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length])
}
var pk = Wx,
  mk = Gx;

function hk(e) {
  const t = m.useRef({
    value: e,
    previous: e
  });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t
    .current.value, t.current.value = e), t.current.previous), [e])
}
var mf = "Radio",
  [gk, Kx] = _t(mf),
  [vk, xk] = gk(mf),
  Xx = m.forwardRef((e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: s,
      disabled: a,
      value: l = "on",
      onCheck: c,
      form: u,
      ...d
    } = e, [p, v] = m.useState(null), f = ye(t, y => v(y)), b = m.useRef(!1),
      h = p ? u || !!p.closest("form") : !0;
    return i.jsxs(vk, {
      scope: n,
      checked: o,
      disabled: a,
      children: [i.jsx(J.button, {
        type: "button",
        role: "radio",
        "aria-checked": o,
        "data-state": ey(o),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: l,
        ...d,
        ref: f,
        onClick: Y(e.onClick, y => {
          o || c == null || c(), h && (b.current = y
            .isPropagationStopped(), b.current || y
            .stopPropagation())
        })
      }), h && i.jsx(Zx, {
        control: p,
        bubbles: !b.current,
        name: r,
        value: l,
        checked: o,
        required: s,
        disabled: a,
        form: u,
        style: {
          transform: "translateX(-100%)"
        }
      })]
    })
  });
Xx.displayName = mf;
var Yx = "RadioIndicator",
  Jx = m.forwardRef((e, t) => {
    const {
      __scopeRadio: n,
      forceMount: r,
      ...o
    } = e, s = xk(Yx, n);
    return i.jsx(nr, {
      present: r || s.checked,
      children: i.jsx(J.span, {
        "data-state": ey(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      })
    })
  });
Jx.displayName = Yx;
var yk = "RadioBubbleInput",
  Zx = m.forwardRef(({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = m.useRef(null),
      l = ye(a, s),
      c = hk(n),
      u = c0(t);
    return m.useEffect(() => {
      const d = a.current;
      if (!d) return;
      const p = window.HTMLInputElement.prototype,
        f = Object.getOwnPropertyDescriptor(p, "checked").set;
      if (c !== n && f) {
        const b = new Event("click", {
          bubbles: r
        });
        f.call(d, n), d.dispatchEvent(b)
      }
    }, [c, n, r]), i.jsx(J.input, {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: l,
      style: {
        ...o.style,
        ...u,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    })
  });
Zx.displayName = yk;

function ey(e) {
  return e ? "checked" : "unchecked"
}
var wk = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Nl = "RadioGroup",
  [bk, GR] = _t(Nl, [Hx, Kx]),
  ty = Hx(),
  ny = Kx(),
  [Nk, Ek] = bk(Nl),
  ry = m.forwardRef((e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: s,
      required: a = !1,
      disabled: l = !1,
      orientation: c,
      dir: u,
      loop: d = !0,
      onValueChange: p,
      ...v
    } = e, f = ty(n), b = cf(u), [h, y] = Ir({
      prop: s,
      defaultProp: o ?? null,
      onChange: p,
      caller: Nl
    });
    return i.jsx(Nk, {
      scope: n,
      name: r,
      required: a,
      disabled: l,
      value: h,
      onValueChange: y,
      children: i.jsx(pk, {
        asChild: !0,
        ...f,
        orientation: c,
        dir: b,
        loop: d,
        children: i.jsx(J.div, {
          role: "radiogroup",
          "aria-required": a,
          "aria-orientation": c,
          "data-disabled": l ? "" : void 0,
          dir: b,
          ...v,
          ref: t
        })
      })
    })
  });
ry.displayName = Nl;
var oy = "RadioGroupItem",
  sy = m.forwardRef((e, t) => {
    const {
      __scopeRadioGroup: n,
      disabled: r,
      ...o
    } = e, s = Ek(oy, n), a = s.disabled || r, l = ty(n), c = ny(n), u = m
      .useRef(null), d = ye(t, u), p = s.value === o.value, v = m.useRef(!1);
    return m.useEffect(() => {
      const f = h => {
          wk.includes(h.key) && (v.current = !0)
        },
        b = () => v.current = !1;
      return document.addEventListener("keydown", f), document
        .addEventListener("keyup", b), () => {
          document.removeEventListener("keydown", f), document
            .removeEventListener("keyup", b)
        }
    }, []), i.jsx(mk, {
      asChild: !0,
      ...l,
      focusable: !a,
      active: p,
      children: i.jsx(Xx, {
        disabled: a,
        required: s.required,
        checked: p,
        ...c,
        ...o,
        name: s.name,
        ref: d,
        onCheck: () => s.onValueChange(o.value),
        onKeyDown: Y(f => {
          f.key === "Enter" && f.preventDefault()
        }),
        onFocus: Y(o.onFocus, () => {
          var f;
          v.current && ((f = u.current) == null || f.click())
        })
      })
    })
  });
sy.displayName = oy;
var Ck = "RadioGroupIndicator",
  ay = m.forwardRef((e, t) => {
    const {
      __scopeRadioGroup: n,
      ...r
    } = e, o = ny(n);
    return i.jsx(Jx, {
      ...o,
      ...r,
      ref: t
    })
  });
ay.displayName = Ck;
var iy = ry,
  ly = sy,
  Sk = ay;
const cy = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx(iy, {
  className: se("grid gap-2", e),
  ...t,
  ref: n
}));
cy.displayName = iy.displayName;
const Du = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx(ly, {
  ref: n,
  className: se(
    "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    e),
  ...t,
  children: i.jsx(Sk, {
    className: "flex items-center justify-center",
    children: i.jsx(h2, {
      className: "h-2.5 w-2.5 fill-current text-current"
    })
  })
}));
Du.displayName = ly.displayName;
const jk = "/assets/checkout-icon-CHwtyQQ6.webp",
  Pk = () => {
    const e = hn(),
      t = Ho(),
      {
        toast: n
      } = tr(),
      {
        productName: r,
        productId: o,
        amount: s,
        productImage: a
      } = t.state || {};
    if (!r || !s) return e(`/${window.location.search}`), null;
    m.useEffect(() => {
      window.scrollTo(0, 0);
      const C = o && o.trim() || "hoverboard-skate-eletrico";
      Re("InitiateCheckout", {
        content_id: C,
        description: r,
        quantity: 1,
        value: s,
        currency: "BRL"
      })
    }, []);
    const [l, c] = m.useState({
      name: "",
      email: "",
      phone: "",
      cpf: "",
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: ""
    }), [u, d] = m.useState("free"), [p, v] = m.useState(1), f = {
      free: {
        value: 0,
        name: "Frete Grátis",
        days: "8 a 10 dias"
      },
      full: {
        value: 12.91,
        name: "Frete Full",
        days: "1 a 3 dias"
      }
    }, b = s * p, h = b + f[u].value, y = C => {
      v(P => Math.max(1, P + C))
    }, x = (C, P) => {
      c(T => ({
        ...T,
        [C]: P
      }))
    }, g = C => C.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(
      /(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})/, "$1-$2").replace(
      /(-\d{2})\d+?$/, "$1"), w = C => C.replace(/\D/g, "").replace(
      /(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2").replace(
      /(-\d{4})\d+?$/, "$1"), N = C => C.replace(/\D/g, "").replace(
      /(\d{5})(\d)/, "$1-$2").replace(/(-\d{3})\d+?$/, "$1"), E = async C => {
        const P = C.replace(/\D/g, "");
        if (P.length === 8) try {
          const O = await (await fetch(
            `https://viacep.com.br/ws/${P}/json/`)).json();
          if (O.erro) throw new Error("ViaCEP não encontrou");
          c(M => ({
            ...M,
            street: O.logradouro || M.street,
            neighborhood: O.bairro || M.neighborhood,
            city: O.localidade || M.city,
            state: O.uf || M.state
          })), n({
            title: "CEP encontrado! ✅",
            description: "Endereço preenchido automaticamente."
          })
        } catch {
          try {
            const O = await (await fetch(
              `https://brasilapi.com.br/api/cep/v1/${P}`)).json();
            c(M => ({
              ...M,
              street: O.street || M.street,
              neighborhood: O.neighborhood || M.neighborhood,
              city: O.city || M.city,
              state: O.state || M.state
            })), n({
              title: "CEP encontrado! ✅",
              description: "Endereço preenchido automaticamente."
            })
          } catch {
            console.log("CEP não encontrado:", P)
          }
        }
      }, S = () => l.name.trim() ? !l.email.trim() || !l.email.includes("@") ?
      (n({
        title: "Erro no formulário",
        description: "E-mail válido é obrigatório",
        variant: "destructive"
      }), !1) : l.phone.replace(/\D/g, "").length < 11 ? (n({
        title: "Erro no formulário",
        description: "Telefone inválido",
        variant: "destructive"
      }), !1) : l.cpf.replace(/\D/g, "").length !== 11 ? (n({
        title: "Erro no formulário",
        description: "CPF inválido",
        variant: "destructive"
      }), !1) : !l.cep.trim() || !l.street.trim() || !l.number.trim() ? (n({
        title: "Erro no formulário",
        description: "Preencha todos os campos do endereço",
        variant: "destructive"
      }), !1) : !0 : (n({
        title: "Erro no formulário",
        description: "Nome completo é obrigatório",
        variant: "destructive"
      }), !1), j = C => {
        if (C.preventDefault(), !S()) return;
        const P = o && o.trim() || "hoverboard-skate-eletrico";
        Re("AddToCart", {
          content_id: P,
          description: r,
          quantity: p,
          value: h,
          currency: "BRL"
        }), Re("AddPaymentInfo", {
          content_id: P,
          description: r,
          quantity: p,
          value: h,
          currency: "BRL"
        });
        const T = {
          product_name: r,
          product_id: P,
          quantity: p,
          unit_price: s,
          total_amount: h,
          customer_email: l.email,
          customer_name: l.name
        };
        localStorage.setItem("orderData", JSON.stringify(T));
        const O = {
          name: l.name,
          email: l.email,
          cpf: l.cpf,
          phone: l.phone,
          address: {
            cep: l.cep,
            street: l.street,
            number: l.number,
            complement: l.complement,
            neighborhood: l.neighborhood,
            city: l.city,
            state: l.state
          }
        };
        localStorage.setItem("customer-data", JSON.stringify(O)), n({
          title: "Dados confirmados!",
          description: "Redirecionando para pagamento..."
        }), e(`/payment${window.location.search}`, {
          state: {
            productName: r,
            productImage: a,
            amount: h,
            quantity: p,
            customerData: l,
            shipping: {
              type: u,
              value: f[u].value,
              name: f[u].name
            }
          }
        })
      };
    return i.jsx("div", {
      className: "min-h-screen bg-background",
      children: i.jsxs("div", {
        className: "container max-w-4xl mx-auto px-4 py-8",
        children: [i.jsxs(ie, {
          variant: "ghost",
          className: "mb-6",
          onClick: () => e(`/${window.location.search}`, {
            state: {
              openDiscount: !0
            }
          }),
          children: [i.jsx(p2, {
            className: "h-4 w-4 mr-2"
          }), "Voltar"]
        }), i.jsxs("div", {
          className: "bg-card rounded-lg shadow-lg p-6 space-y-6",
          children: [i.jsx("div", {
            className: "flex justify-center",
            children: i.jsx("img", {
              src: jk,
              alt: "Checkout",
              className: "w-16 h-16"
            })
          }), i.jsx("h1", {
            className: "text-2xl font-bold text-center",
            children: "Finalizar Pedido"
          }), i.jsxs("div", {
            className: "flex items-center gap-3 p-3 bg-muted rounded-lg",
            children: [i.jsx("img", {
              src: a,
              alt: r,
              className: "w-20 h-16 rounded-lg object-contain bg-white"
            }), i.jsxs("div", {
              className: "flex-1 text-left",
              children: [i.jsx("p", {
                className: "font-semibold text-sm",
                children: r
              }), i.jsxs("p", {
                className: "text-lg font-bold text-primary",
                children: ["R$ ", s.toFixed(2),
                  " ", i.jsx("span", {
                    className: "text-sm text-muted-foreground",
                    children: "/ unidade"
                  })
                ]
              })]
            })]
          }), i.jsxs("div", {
            className: "flex items-center justify-between p-3 bg-background rounded-lg border",
            children: [i.jsx("span", {
              className: "font-semibold text-sm",
              children: "Quantidade:"
            }), i.jsxs("div", {
              className: "flex items-center gap-3",
              children: [i.jsx(ie, {
                type: "button",
                variant: "outline",
                size: "icon",
                className: "h-8 w-8",
                onClick: () => y(-1),
                disabled: p <= 1,
                children: i.jsx(j2, {
                  className: "h-4 w-4"
                })
              }), i.jsx("span", {
                className: "font-bold text-lg min-w-[2ch] text-center",
                children: p
              }), i.jsx(ie, {
                type: "button",
                variant: "outline",
                size: "icon",
                className: "h-8 w-8",
                onClick: () => y(1),
                children: i.jsx(P2, {
                  className: "h-4 w-4"
                })
              })]
            })]
          }), i.jsxs("div", {
            className: "flex items-center justify-between px-3 py-2 bg-muted/50 rounded-lg text-sm",
            children: [i.jsxs("span", {
              className: "text-muted-foreground",
              children: ["Subtotal (", p, " ", p ===
                1 ? "item" : "itens", "):"
              ]
            }), i.jsxs("span", {
              className: "font-bold text-primary",
              children: ["R$ ", b.toFixed(2)]
            })]
          }), i.jsxs("form", {
            onSubmit: j,
            className: "space-y-4 py-4",
            children: [i.jsxs("div", {
              className: "space-y-3",
              children: [i.jsx("h3", {
                className: "font-semibold text-sm",
                children: "Dados Pessoais"
              }), i.jsxs("div", {
                children: [i.jsx(it, {
                  htmlFor: "name",
                  children: "Nome Completo *"
                }), i.jsx(at, {
                  id: "name",
                  value: l.name,
                  onChange: C => x("name",
                    C.target.value),
                  placeholder: "Seu nome completo",
                  required: !0
                })]
              }), i.jsxs("div", {
                children: [i.jsx(it, {
                  htmlFor: "email",
                  children: "E-mail *"
                }), i.jsx(at, {
                  id: "email",
                  type: "email",
                  value: l.email,
                  onChange: C => x(
                    "email", C.target
                    .value),
                  placeholder: "seu@email.com",
                  required: !0
                })]
              }), i.jsxs("div", {
                className: "grid grid-cols-2 gap-2",
                children: [i.jsxs("div", {
                  children: [i.jsx(it, {
                    htmlFor: "phone",
                    children: "Telefone *"
                  }), i.jsx(at, {
                    id: "phone",
                    value: l.phone,
                    onChange: C =>
                      x("phone", w(C
                        .target
                        .value)),
                    placeholder: "(11) 99999-9999",
                    maxLength: 15,
                    required: !0
                  })]
                }), i.jsxs("div", {
                  children: [i.jsx(it, {
                    htmlFor: "cpf",
                    children: "CPF *"
                  }), i.jsx(at, {
                    id: "cpf",
                    value: l.cpf,
                    onChange: C =>
                      x("cpf", g(C
                        .target
                        .value)),
                    placeholder: "000.000.000-00",
                    maxLength: 14,
                    required: !0
                  })]
                })]
              })]
            }), i.jsxs("div", {
              className: "space-y-3 pt-2 border-t",
              children: [i.jsx("h3", {
                className: "font-semibold text-sm",
                children: "Endereço de Entrega"
              }), i.jsxs("div", {
                children: [i.jsx(it, {
                  htmlFor: "cep",
                  children: "CEP *"
                }), i.jsx(at, {
                  id: "cep",
                  value: l.cep,
                  onChange: C => {
                    const P = N(C.target
                      .value);
                    x("cep", P), E(P)
                  },
                  placeholder: "00000-000",
                  maxLength: 9,
                  required: !0
                })]
              }), i.jsxs("div", {
                children: [i.jsx(it, {
                  htmlFor: "street",
                  children: "Rua *"
                }), i.jsx(at, {
                  id: "street",
                  value: l.street,
                  onChange: C => x(
                    "street", C.target
                    .value),
                  placeholder: "Nome da rua",
                  required: !0
                })]
              }), i.jsxs("div", {
                className: "grid grid-cols-3 gap-2",
                children: [i.jsxs("div", {
                  className: "col-span-1",
                  children: [i.jsx(it, {
                    htmlFor: "number",
                    children: "Número *"
                  }), i.jsx(at, {
                    id: "number",
                    value: l.number,
                    onChange: C =>
                      x("number", C
                        .target
                        .value),
                    placeholder: "123",
                    required: !0
                  })]
                }), i.jsxs("div", {
                  className: "col-span-2",
                  children: [i.jsx(it, {
                    htmlFor: "complement",
                    children: "Complemento"
                  }), i.jsx(at, {
                    id: "complement",
                    value: l
                      .complement,
                    onChange: C =>
                      x("complement",
                        C.target
                        .value),
                    placeholder: "Apto, bloco..."
                  })]
                })]
              }), i.jsxs("div", {
                children: [i.jsx(it, {
                  htmlFor: "neighborhood",
                  children: "Bairro *"
                }), i.jsx(at, {
                  id: "neighborhood",
                  value: l.neighborhood,
                  onChange: C => x(
                    "neighborhood", C
                    .target.value),
                  placeholder: "Nome do bairro",
                  required: !0
                })]
              }), i.jsxs("div", {
                className: "grid grid-cols-3 gap-2",
                children: [i.jsxs("div", {
                  className: "col-span-2",
                  children: [i.jsx(it, {
                    htmlFor: "city",
                    children: "Cidade *"
                  }), i.jsx(at, {
                    id: "city",
                    value: l.city,
                    onChange: C =>
                      x("city", C
                        .target
                        .value),
                    placeholder: "Cidade",
                    required: !0
                  })]
                }), i.jsxs("div", {
                  children: [i.jsx(it, {
                    htmlFor: "state",
                    children: "UF *"
                  }), i.jsx(at, {
                    id: "state",
                    value: l.state,
                    onChange: C =>
                      x("state", C
                        .target
                        .value
                        .toUpperCase()
                        ),
                    placeholder: "SP",
                    maxLength: 2,
                    required: !0
                  })]
                })]
              })]
            }), i.jsxs("div", {
              className: "space-y-3 pt-2 border-t",
              children: [i.jsx("h3", {
                className: "font-semibold text-sm",
                children: "Escolha o Frete"
              }), i.jsxs(cy, {
                value: u,
                onValueChange: C => d(C),
                children: [i.jsxs("label", {
                  htmlFor: "free",
                  className: `flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${u==="free"?"border-primary bg-primary/10 shadow-sm":"border-border hover:border-primary/50 hover:bg-muted/50"}`,
                  children: [i.jsx(Du, {
                    value: "free",
                    id: "free"
                  }), i.jsxs("div", {
                    className: "flex items-center gap-3 flex-1",
                    children: [i
                      .jsx(ol, {
                        className: "h-5 w-5 text-primary"
                      }), i.jsxs(
                        "div", {
                          className: "flex-1",
                          children: [
                            i
                            .jsx(
                              "p", {
                                className: "font-semibold",
                                children: "Frete Grátis"
                              }
                              ),
                            i
                            .jsx(
                              "p", {
                                className: "text-xs text-muted-foreground",
                                children: "Entrega em 8 a 10 dias"
                              })
                          ]
                        }), i.jsx(
                        "p", {
                          className: "font-bold text-green-600",
                          children: "Grátis"
                        })
                    ]
                  })]
                }), i.jsxs("label", {
                  htmlFor: "full",
                  className: `flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${u==="full"?"border-sale-orange bg-sale-orange/10 shadow-sm":"border-border hover:border-sale-orange/50 hover:bg-muted/50"}`,
                  children: [i.jsx(Du, {
                    value: "full",
                    id: "full"
                  }), i.jsxs("div", {
                    className: "flex items-center gap-3 flex-1",
                    children: [i
                      .jsx(al, {
                        className: "h-5 w-5 text-sale-orange"
                      }), i.jsxs(
                        "div", {
                          className: "flex-1",
                          children: [
                            i
                            .jsx(
                              "p", {
                                className: "font-semibold",
                                children: "Frete Full"
                              }
                              ),
                            i
                            .jsx(
                              "p", {
                                className: "text-xs text-muted-foreground",
                                children: "Entrega expressa em 1 a 3 dias"
                              })
                          ]
                        }), i.jsx(
                        "p", {
                          className: "font-bold text-sale-orange",
                          children: "R$ 12,91"
                        })
                    ]
                  })]
                })]
              }), i.jsxs("div", {
                className: "flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20",
                children: [i.jsx("span", {
                  className: "font-semibold",
                  children: "Total com Frete:"
                }), i.jsxs("span", {
                  className: "text-xl font-bold text-primary",
                  children: ["R$ ", h
                    .toFixed(2)
                  ]
                })]
              })]
            }), i.jsxs("div", {
              className: "flex gap-2 pt-4",
              children: [i.jsx(ie, {
                type: "button",
                variant: "outline",
                className: "flex-1",
                onClick: () => e(
                  `/${window.location.search}`, {
                    state: {
                      openDiscount: !0
                    }
                  }),
                children: "Voltar"
              }), i.jsx(ie, {
                type: "submit",
                className: "flex-1 bg-[#F43F5E] hover:bg-[#F43F5E]/90",
                children: "Continuar para Pagamento"
              })]
            })]
          })]
        })]
      })
    })
  };
var hf = "Progress",
  gf = 100,
  [kk, qR] = _t(hf),
  [Rk, Tk] = kk(hf),
  uy = m.forwardRef((e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: s = Ik,
      ...a
    } = e;
    (o || o === 0) && !Lm(o) && console.error(Ak(`${o}`, "Progress"));
    const l = Lm(o) ? o : gf;
    r !== null && !Dm(r, l) && console.error(_k(`${r}`, "Progress"));
    const c = Dm(r, l) ? r : null,
      u = Li(c) ? s(c, l) : void 0;
    return i.jsx(Rk, {
      scope: n,
      value: c,
      max: l,
      children: i.jsx(J.div, {
        "aria-valuemax": l,
        "aria-valuemin": 0,
        "aria-valuenow": Li(c) ? c : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": py(c, l),
        "data-value": c ?? void 0,
        "data-max": l,
        ...a,
        ref: t
      })
    })
  });
uy.displayName = hf;
var dy = "ProgressIndicator",
  fy = m.forwardRef((e, t) => {
    const {
      __scopeProgress: n,
      ...r
    } = e, o = Tk(dy, n);
    return i.jsx(J.div, {
      "data-state": py(o.value, o.max),
      "data-value": o.value ?? void 0,
      "data-max": o.max,
      ...r,
      ref: t
    })
  });
fy.displayName = dy;

function Ik(e, t) {
  return `${Math.round(e/t*100)}%`
}

function py(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading"
}

function Li(e) {
  return typeof e == "number"
}

function Lm(e) {
  return Li(e) && !isNaN(e) && e > 0
}

function Dm(e, t) {
  return Li(e) && !isNaN(e) && e <= t && e >= 0
}

function Ak(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${gf}\`.`
}

function _k(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${gf} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var my = uy,
  Mk = fy;
const vf = m.forwardRef(({
  className: e,
  value: t,
  ...n
}, r) => i.jsx(my, {
  ref: r,
  className: se(
    "relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
  ...n,
  children: i.jsx(Mk, {
    className: "h-full w-full flex-1 bg-primary transition-all",
    style: {
      transform: `translateX(-${100-(t||0)}%)`
    }
  })
}));
vf.displayName = my.displayName;
var Qo = {},
  Ok = function() {
    return typeof Promise == "function" && Promise.prototype && Promise
      .prototype.then
  },
  hy = {},
  ot = {};
let xf;
const Lk = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532,
  581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
  1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362,
  3532, 3706
];
ot.getSymbolSize = function(t) {
  if (!t) throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40) throw new Error(
    '"version" should be in range from 1 to 40');
  return t * 4 + 17
};
ot.getSymbolTotalCodewords = function(t) {
  return Lk[t]
};
ot.getBCHDigit = function(e) {
  let t = 0;
  for (; e !== 0;) t++, e >>>= 1;
  return t
};
ot.setToSJISFunction = function(t) {
  if (typeof t != "function") throw new Error(
    '"toSJISFunc" is not a valid function.');
  xf = t
};
ot.isKanjiModeEnabled = function() {
  return typeof xf < "u"
};
ot.toSJIS = function(t) {
  return xf(t)
};
var El = {};
(function(e) {
  e.L = {
    bit: 1
  }, e.M = {
    bit: 0
  }, e.Q = {
    bit: 3
  }, e.H = {
    bit: 2
  };

  function t(n) {
    if (typeof n != "string") throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + n)
    }
  }
  e.isValid = function(r) {
    return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4
  }, e.from = function(r, o) {
    if (e.isValid(r)) return r;
    try {
      return t(r)
    } catch {
      return o
    }
  }
})(El);

function gy() {
  this.buffer = [], this.length = 0
}
gy.prototype = {
  get: function(e) {
    const t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) === 1
  },
  put: function(e, t) {
    for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) === 1)
  },
  getLengthInBits: function() {
    return this.length
  },
  putBit: function(e) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |=
      128 >>> this.length % 8), this.length++
  }
};
var Dk = gy;

function ia(e) {
  if (!e || e < 1) throw new Error(
    "BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = new Uint8Array(e * e), this.reservedBit =
    new Uint8Array(e * e)
}
ia.prototype.set = function(e, t, n, r) {
  const o = e * this.size + t;
  this.data[o] = n, r && (this.reservedBit[o] = !0)
};
ia.prototype.get = function(e, t) {
  return this.data[e * this.size + t]
};
ia.prototype.xor = function(e, t, n) {
  this.data[e * this.size + t] ^= n
};
ia.prototype.isReserved = function(e, t) {
  return this.reservedBit[e * this.size + t]
};
var Fk = ia,
  vy = {};
(function(e) {
  const t = ot.getSymbolSize;
  e.getRowColCoords = function(r) {
    if (r === 1) return [];
    const o = Math.floor(r / 7) + 2,
      s = t(r),
      a = s === 145 ? 26 : Math.ceil((s - 13) / (2 * o - 2)) * 2,
      l = [s - 7];
    for (let c = 1; c < o - 1; c++) l[c] = l[c - 1] - a;
    return l.push(6), l.reverse()
  }, e.getPositions = function(r) {
    const o = [],
      s = e.getRowColCoords(r),
      a = s.length;
    for (let l = 0; l < a; l++)
      for (let c = 0; c < a; c++) l === 0 && c === 0 || l === 0 && c === a -
        1 || l === a - 1 && c === 0 || o.push([s[l], s[c]]);
    return o
  }
})(vy);
var xy = {};
const $k = ot.getSymbolSize,
  Fm = 7;
xy.getPositions = function(t) {
  const n = $k(t);
  return [
    [0, 0],
    [n - Fm, 0],
    [0, n - Fm]
  ]
};
var yy = {};
(function(e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const t = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  e.isValid = function(o) {
    return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7
  }, e.from = function(o) {
    return e.isValid(o) ? parseInt(o, 10) : void 0
  }, e.getPenaltyN1 = function(o) {
    const s = o.size;
    let a = 0,
      l = 0,
      c = 0,
      u = null,
      d = null;
    for (let p = 0; p < s; p++) {
      l = c = 0, u = d = null;
      for (let v = 0; v < s; v++) {
        let f = o.get(p, v);
        f === u ? l++ : (l >= 5 && (a += t.N1 + (l - 5)), u = f, l = 1), f =
          o.get(v, p), f === d ? c++ : (c >= 5 && (a += t.N1 + (c - 5)), d =
            f, c = 1)
      }
      l >= 5 && (a += t.N1 + (l - 5)), c >= 5 && (a += t.N1 + (c - 5))
    }
    return a
  }, e.getPenaltyN2 = function(o) {
    const s = o.size;
    let a = 0;
    for (let l = 0; l < s - 1; l++)
      for (let c = 0; c < s - 1; c++) {
        const u = o.get(l, c) + o.get(l, c + 1) + o.get(l + 1, c) + o.get(
          l + 1, c + 1);
        (u === 4 || u === 0) && a++
      }
    return a * t.N2
  }, e.getPenaltyN3 = function(o) {
    const s = o.size;
    let a = 0,
      l = 0,
      c = 0;
    for (let u = 0; u < s; u++) {
      l = c = 0;
      for (let d = 0; d < s; d++) l = l << 1 & 2047 | o.get(u, d), d >=
        10 && (l === 1488 || l === 93) && a++, c = c << 1 & 2047 | o.get(d,
          u), d >= 10 && (c === 1488 || c === 93) && a++
    }
    return a * t.N3
  }, e.getPenaltyN4 = function(o) {
    let s = 0;
    const a = o.data.length;
    for (let c = 0; c < a; c++) s += o.data[c];
    return Math.abs(Math.ceil(s * 100 / a / 5) - 10) * t.N4
  };

  function n(r, o, s) {
    switch (r) {
      case e.Patterns.PATTERN000:
        return (o + s) % 2 === 0;
      case e.Patterns.PATTERN001:
        return o % 2 === 0;
      case e.Patterns.PATTERN010:
        return s % 3 === 0;
      case e.Patterns.PATTERN011:
        return (o + s) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(s / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return o * s % 2 + o * s % 3 === 0;
      case e.Patterns.PATTERN110:
        return (o * s % 2 + o * s % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (o * s % 3 + (o + s) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r)
    }
  }
  e.applyMask = function(o, s) {
    const a = s.size;
    for (let l = 0; l < a; l++)
      for (let c = 0; c < a; c++) s.isReserved(c, l) || s.xor(c, l, n(o, c,
        l))
  }, e.getBestMask = function(o, s) {
    const a = Object.keys(e.Patterns).length;
    let l = 0,
      c = 1 / 0;
    for (let u = 0; u < a; u++) {
      s(u), e.applyMask(u, o);
      const d = e.getPenaltyN1(o) + e.getPenaltyN2(o) + e.getPenaltyN3(o) +
        e.getPenaltyN4(o);
      e.applyMask(u, o), d < c && (c = d, l = u)
    }
    return l
  }
})(yy);
var Cl = {};
const $n = El,
  Fa = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4,
    2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11,
    4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6,
    13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9,
    18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40,
    13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45,
    54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43,
    59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81
  ],
  $a = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
    72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160,
    192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288,
    352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308,
    448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224,
    442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960,
    312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728,
    1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290,
    1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800,
    570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660,
    1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430
  ];
Cl.getBlocksCount = function(t, n) {
  switch (n) {
    case $n.L:
      return Fa[(t - 1) * 4 + 0];
    case $n.M:
      return Fa[(t - 1) * 4 + 1];
    case $n.Q:
      return Fa[(t - 1) * 4 + 2];
    case $n.H:
      return Fa[(t - 1) * 4 + 3];
    default:
      return
  }
};
Cl.getTotalCodewordsCount = function(t, n) {
  switch (n) {
    case $n.L:
      return $a[(t - 1) * 4 + 0];
    case $n.M:
      return $a[(t - 1) * 4 + 1];
    case $n.Q:
      return $a[(t - 1) * 4 + 2];
    case $n.H:
      return $a[(t - 1) * 4 + 3];
    default:
      return
  }
};
var wy = {},
  Sl = {};
const ws = new Uint8Array(512),
  Di = new Uint8Array(256);
(function() {
  let t = 1;
  for (let n = 0; n < 255; n++) ws[n] = t, Di[t] = n, t <<= 1, t & 256 && (
    t ^= 285);
  for (let n = 255; n < 512; n++) ws[n] = ws[n - 255]
})();
Sl.log = function(t) {
  if (t < 1) throw new Error("log(" + t + ")");
  return Di[t]
};
Sl.exp = function(t) {
  return ws[t]
};
Sl.mul = function(t, n) {
  return t === 0 || n === 0 ? 0 : ws[Di[t] + Di[n]]
};
(function(e) {
  const t = Sl;
  e.mul = function(r, o) {
    const s = new Uint8Array(r.length + o.length - 1);
    for (let a = 0; a < r.length; a++)
      for (let l = 0; l < o.length; l++) s[a + l] ^= t.mul(r[a], o[l]);
    return s
  }, e.mod = function(r, o) {
    let s = new Uint8Array(r);
    for (; s.length - o.length >= 0;) {
      const a = s[0];
      for (let c = 0; c < o.length; c++) s[c] ^= t.mul(o[c], a);
      let l = 0;
      for (; l < s.length && s[l] === 0;) l++;
      s = s.slice(l)
    }
    return s
  }, e.generateECPolynomial = function(r) {
    let o = new Uint8Array([1]);
    for (let s = 0; s < r; s++) o = e.mul(o, new Uint8Array([1, t.exp(s)]));
    return o
  }
})(wy);
const by = wy;

function yf(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this
    .degree)
}
yf.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = by.generateECPolynomial(this.degree)
};
yf.prototype.encode = function(t) {
  if (!this.genPoly) throw new Error("Encoder not initialized");
  const n = new Uint8Array(t.length + this.degree);
  n.set(t);
  const r = by.mod(n, this.genPoly),
    o = this.degree - r.length;
  if (o > 0) {
    const s = new Uint8Array(this.degree);
    return s.set(r, o), s
  }
  return r
};
var Bk = yf,
  Ny = {},
  rr = {},
  wf = {};
wf.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40
};
var Yt = {};
const Ey = "[0-9]+",
  zk = "[A-Z $%*+\\-./:]+";
let Qs =
  "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Qs = Qs.replace(/u/g, "\\u");
const Uk = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Qs + `)(?:.|[\r
]))+`;
Yt.KANJI = new RegExp(Qs, "g");
Yt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
Yt.BYTE = new RegExp(Uk, "g");
Yt.NUMERIC = new RegExp(Ey, "g");
Yt.ALPHANUMERIC = new RegExp(zk, "g");
const Vk = new RegExp("^" + Qs + "$"),
  Hk = new RegExp("^" + Ey + "$"),
  Wk = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Yt.testKanji = function(t) {
  return Vk.test(t)
};
Yt.testNumeric = function(t) {
  return Hk.test(t)
};
Yt.testAlphanumeric = function(t) {
  return Wk.test(t)
};
(function(e) {
  const t = wf,
    n = Yt;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, e.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, e.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, e.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, e.MIXED = {
    bit: -1
  }, e.getCharCountIndicator = function(s, a) {
    if (!s.ccBits) throw new Error("Invalid mode: " + s);
    if (!t.isValid(a)) throw new Error("Invalid version: " + a);
    return a >= 1 && a < 10 ? s.ccBits[0] : a < 27 ? s.ccBits[1] : s.ccBits[
      2]
  }, e.getBestModeForData = function(s) {
    return n.testNumeric(s) ? e.NUMERIC : n.testAlphanumeric(s) ? e
      .ALPHANUMERIC : n.testKanji(s) ? e.KANJI : e.BYTE
  }, e.toString = function(s) {
    if (s && s.id) return s.id;
    throw new Error("Invalid mode")
  }, e.isValid = function(s) {
    return s && s.bit && s.ccBits
  };

  function r(o) {
    if (typeof o != "string") throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + o)
    }
  }
  e.from = function(s, a) {
    if (e.isValid(s)) return s;
    try {
      return r(s)
    } catch {
      return a
    }
  }
})(rr);
(function(e) {
  const t = ot,
    n = Cl,
    r = El,
    o = rr,
    s = wf,
    a = 7973,
    l = t.getBCHDigit(a);

  function c(v, f, b) {
    for (let h = 1; h <= 40; h++)
      if (f <= e.getCapacity(h, b, v)) return h
  }

  function u(v, f) {
    return o.getCharCountIndicator(v, f) + 4
  }

  function d(v, f) {
    let b = 0;
    return v.forEach(function(h) {
      const y = u(h.mode, f);
      b += y + h.getBitsLength()
    }), b
  }

  function p(v, f) {
    for (let b = 1; b <= 40; b++)
      if (d(v, b) <= e.getCapacity(b, f, o.MIXED)) return b
  }
  e.from = function(f, b) {
    return s.isValid(f) ? parseInt(f, 10) : b
  }, e.getCapacity = function(f, b, h) {
    if (!s.isValid(f)) throw new Error("Invalid QR Code version");
    typeof h > "u" && (h = o.BYTE);
    const y = t.getSymbolTotalCodewords(f),
      x = n.getTotalCodewordsCount(f, b),
      g = (y - x) * 8;
    if (h === o.MIXED) return g;
    const w = g - u(h, f);
    switch (h) {
      case o.NUMERIC:
        return Math.floor(w / 10 * 3);
      case o.ALPHANUMERIC:
        return Math.floor(w / 11 * 2);
      case o.KANJI:
        return Math.floor(w / 13);
      case o.BYTE:
      default:
        return Math.floor(w / 8)
    }
  }, e.getBestVersionForData = function(f, b) {
    let h;
    const y = r.from(b, r.M);
    if (Array.isArray(f)) {
      if (f.length > 1) return p(f, y);
      if (f.length === 0) return 1;
      h = f[0]
    } else h = f;
    return c(h.mode, h.getLength(), y)
  }, e.getEncodedBits = function(f) {
    if (!s.isValid(f) || f < 7) throw new Error("Invalid QR Code version");
    let b = f << 12;
    for (; t.getBCHDigit(b) - l >= 0;) b ^= a << t.getBCHDigit(b) - l;
    return f << 12 | b
  }
})(Ny);
var Cy = {};
const Fu = ot,
  Sy = 1335,
  Qk = 21522,
  $m = Fu.getBCHDigit(Sy);
Cy.getEncodedBits = function(t, n) {
  const r = t.bit << 3 | n;
  let o = r << 10;
  for (; Fu.getBCHDigit(o) - $m >= 0;) o ^= Sy << Fu.getBCHDigit(o) - $m;
  return (r << 10 | o) ^ Qk
};
var jy = {};
const Gk = rr;

function Ao(e) {
  this.mode = Gk.NUMERIC, this.data = e.toString()
}
Ao.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
};
Ao.prototype.getLength = function() {
  return this.data.length
};
Ao.prototype.getBitsLength = function() {
  return Ao.getBitsLength(this.data.length)
};
Ao.prototype.write = function(t) {
  let n, r, o;
  for (n = 0; n + 3 <= this.data.length; n += 3) r = this.data.substr(n, 3),
    o = parseInt(r, 10), t.put(o, 10);
  const s = this.data.length - n;
  s > 0 && (r = this.data.substr(n), o = parseInt(r, 10), t.put(o, s * 3 + 1))
};
var qk = Ao;
const Kk = rr,
  Nc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D",
    "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/",
    ":"
  ];

function _o(e) {
  this.mode = Kk.ALPHANUMERIC, this.data = e
}
_o.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2)
};
_o.prototype.getLength = function() {
  return this.data.length
};
_o.prototype.getBitsLength = function() {
  return _o.getBitsLength(this.data.length)
};
_o.prototype.write = function(t) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let r = Nc.indexOf(this.data[n]) * 45;
    r += Nc.indexOf(this.data[n + 1]), t.put(r, 11)
  }
  this.data.length % 2 && t.put(Nc.indexOf(this.data[n]), 6)
};
var Xk = _o;
const Yk = rr;

function Mo(e) {
  this.mode = Yk.BYTE, typeof e == "string" ? this.data = new TextEncoder()
    .encode(e) : this.data = new Uint8Array(e)
}
Mo.getBitsLength = function(t) {
  return t * 8
};
Mo.prototype.getLength = function() {
  return this.data.length
};
Mo.prototype.getBitsLength = function() {
  return Mo.getBitsLength(this.data.length)
};
Mo.prototype.write = function(e) {
  for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
};
var Jk = Mo;
const Zk = rr,
  eR = ot;

function Oo(e) {
  this.mode = Zk.KANJI, this.data = e
}
Oo.getBitsLength = function(t) {
  return t * 13
};
Oo.prototype.getLength = function() {
  return this.data.length
};
Oo.prototype.getBitsLength = function() {
  return Oo.getBitsLength(this.data.length)
};
Oo.prototype.write = function(e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let n = eR.toSJIS(this.data[t]);
    if (n >= 33088 && n <= 40956) n -= 33088;
    else if (n >= 57408 && n <= 60351) n -= 49472;
    else throw new Error("Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`);
    n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13)
  }
};
var tR = Oo,
  Py = {
    exports: {}
  };
(function(e) {
  var t = {
    single_source_shortest_paths: function(n, r, o) {
      var s = {},
        a = {};
      a[r] = 0;
      var l = t.PriorityQueue.make();
      l.push(r, 0);
      for (var c, u, d, p, v, f, b, h, y; !l.empty();) {
        c = l.pop(), u = c.value, p = c.cost, v = n[u] || {};
        for (d in v) v.hasOwnProperty(d) && (f = v[d], b = p + f, h = a[
          d], y = typeof a[d] > "u", (y || h > b) && (a[d] = b, l.push(
            d, b), s[d] = u))
      }
      if (typeof o < "u" && typeof a[o] > "u") {
        var x = ["Could not find a path from ", r, " to ", o, "."].join(
          "");
        throw new Error(x)
      }
      return s
    },
    extract_shortest_path_from_predecessor_list: function(n, r) {
      for (var o = [], s = r; s;) o.push(s), n[s], s = n[s];
      return o.reverse(), o
    },
    find_path: function(n, r, o) {
      var s = t.single_source_shortest_paths(n, r, o);
      return t.extract_shortest_path_from_predecessor_list(s, o)
    },
    PriorityQueue: {
      make: function(n) {
        var r = t.PriorityQueue,
          o = {},
          s;
        n = n || {};
        for (s in r) r.hasOwnProperty(s) && (o[s] = r[s]);
        return o.queue = [], o.sorter = n.sorter || r.default_sorter, o
      },
      default_sorter: function(n, r) {
        return n.cost - r.cost
      },
      push: function(n, r) {
        var o = {
          value: n,
          cost: r
        };
        this.queue.push(o), this.queue.sort(this.sorter)
      },
      pop: function() {
        return this.queue.shift()
      },
      empty: function() {
        return this.queue.length === 0
      }
    }
  };
  e.exports = t
})(Py);
var nR = Py.exports;
(function(e) {
  const t = rr,
    n = qk,
    r = Xk,
    o = Jk,
    s = tR,
    a = Yt,
    l = ot,
    c = nR;

  function u(x) {
    return unescape(encodeURIComponent(x)).length
  }

  function d(x, g, w) {
    const N = [];
    let E;
    for (;
      (E = x.exec(w)) !== null;) N.push({
      data: E[0],
      index: E.index,
      mode: g,
      length: E[0].length
    });
    return N
  }

  function p(x) {
    const g = d(a.NUMERIC, t.NUMERIC, x),
      w = d(a.ALPHANUMERIC, t.ALPHANUMERIC, x);
    let N, E;
    return l.isKanjiModeEnabled() ? (N = d(a.BYTE, t.BYTE, x), E = d(a.KANJI,
      t.KANJI, x)) : (N = d(a.BYTE_KANJI, t.BYTE, x), E = []), g.concat(w,
      N, E).sort(function(j, C) {
      return j.index - C.index
    }).map(function(j) {
      return {
        data: j.data,
        mode: j.mode,
        length: j.length
      }
    })
  }

  function v(x, g) {
    switch (g) {
      case t.NUMERIC:
        return n.getBitsLength(x);
      case t.ALPHANUMERIC:
        return r.getBitsLength(x);
      case t.KANJI:
        return s.getBitsLength(x);
      case t.BYTE:
        return o.getBitsLength(x)
    }
  }

  function f(x) {
    return x.reduce(function(g, w) {
      const N = g.length - 1 >= 0 ? g[g.length - 1] : null;
      return N && N.mode === w.mode ? (g[g.length - 1].data += w.data,
        g) : (g.push(w), g)
    }, [])
  }

  function b(x) {
    const g = [];
    for (let w = 0; w < x.length; w++) {
      const N = x[w];
      switch (N.mode) {
        case t.NUMERIC:
          g.push([N, {
            data: N.data,
            mode: t.ALPHANUMERIC,
            length: N.length
          }, {
            data: N.data,
            mode: t.BYTE,
            length: N.length
          }]);
          break;
        case t.ALPHANUMERIC:
          g.push([N, {
            data: N.data,
            mode: t.BYTE,
            length: N.length
          }]);
          break;
        case t.KANJI:
          g.push([N, {
            data: N.data,
            mode: t.BYTE,
            length: u(N.data)
          }]);
          break;
        case t.BYTE:
          g.push([{
            data: N.data,
            mode: t.BYTE,
            length: u(N.data)
          }])
      }
    }
    return g
  }

  function h(x, g) {
    const w = {},
      N = {
        start: {}
      };
    let E = ["start"];
    for (let S = 0; S < x.length; S++) {
      const j = x[S],
        C = [];
      for (let P = 0; P < j.length; P++) {
        const T = j[P],
          O = "" + S + P;
        C.push(O), w[O] = {
          node: T,
          lastCount: 0
        }, N[O] = {};
        for (let M = 0; M < E.length; M++) {
          const $ = E[M];
          w[$] && w[$].node.mode === T.mode ? (N[$][O] = v(w[$].lastCount + T
              .length, T.mode) - v(w[$].lastCount, T.mode), w[$]
            .lastCount += T.length) : (w[$] && (w[$].lastCount = T.length),
            N[$][O] = v(T.length, T.mode) + 4 + t.getCharCountIndicator(T
              .mode, g))
        }
      }
      E = C
    }
    for (let S = 0; S < E.length; S++) N[E[S]].end = 0;
    return {
      map: N,
      table: w
    }
  }

  function y(x, g) {
    let w;
    const N = t.getBestModeForData(x);
    if (w = t.from(g, N), w !== t.BYTE && w.bit < N.bit) throw new Error('"' +
      x + '" cannot be encoded with mode ' + t.toString(w) + `.
 Suggested mode is: ` + t.toString(N));
    switch (w === t.KANJI && !l.isKanjiModeEnabled() && (w = t.BYTE), w) {
      case t.NUMERIC:
        return new n(x);
      case t.ALPHANUMERIC:
        return new r(x);
      case t.KANJI:
        return new s(x);
      case t.BYTE:
        return new o(x)
    }
  }
  e.fromArray = function(g) {
    return g.reduce(function(w, N) {
      return typeof N == "string" ? w.push(y(N, null)) : N.data && w
        .push(y(N.data, N.mode)), w
    }, [])
  }, e.fromString = function(g, w) {
    const N = p(g, l.isKanjiModeEnabled()),
      E = b(N),
      S = h(E, w),
      j = c.find_path(S.map, "start", "end"),
      C = [];
    for (let P = 1; P < j.length - 1; P++) C.push(S.table[j[P]].node);
    return e.fromArray(f(C))
  }, e.rawSplit = function(g) {
    return e.fromArray(p(g, l.isKanjiModeEnabled()))
  }
})(jy);
const jl = ot,
  Ec = El,
  rR = Dk,
  oR = Fk,
  sR = vy,
  aR = xy,
  $u = yy,
  Bu = Cl,
  iR = Bk,
  Fi = Ny,
  lR = Cy,
  cR = rr,
  Cc = jy;

function uR(e, t) {
  const n = e.size,
    r = aR.getPositions(t);
  for (let o = 0; o < r.length; o++) {
    const s = r[o][0],
      a = r[o][1];
    for (let l = -1; l <= 7; l++)
      if (!(s + l <= -1 || n <= s + l))
        for (let c = -1; c <= 7; c++) a + c <= -1 || n <= a + c || (l >= 0 &&
          l <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (l === 0 ||
            l === 6) || l >= 2 && l <= 4 && c >= 2 && c <= 4 ? e.set(s + l,
            a + c, !0, !0) : e.set(s + l, a + c, !1, !0))
  }
}

function dR(e) {
  const t = e.size;
  for (let n = 8; n < t - 8; n++) {
    const r = n % 2 === 0;
    e.set(n, 6, r, !0), e.set(6, n, r, !0)
  }
}

function fR(e, t) {
  const n = sR.getPositions(t);
  for (let r = 0; r < n.length; r++) {
    const o = n[r][0],
      s = n[r][1];
    for (let a = -2; a <= 2; a++)
      for (let l = -2; l <= 2; l++) a === -2 || a === 2 || l === -2 || l ===
        2 || a === 0 && l === 0 ? e.set(o + a, s + l, !0, !0) : e.set(o + a, s +
          l, !1, !0)
  }
}

function pR(e, t) {
  const n = e.size,
    r = Fi.getEncodedBits(t);
  let o, s, a;
  for (let l = 0; l < 18; l++) o = Math.floor(l / 3), s = l % 3 + n - 8 - 3, a =
    (r >> l & 1) === 1, e.set(o, s, a, !0), e.set(s, o, a, !0)
}

function Sc(e, t, n) {
  const r = e.size,
    o = lR.getEncodedBits(t, n);
  let s, a;
  for (s = 0; s < 15; s++) a = (o >> s & 1) === 1, s < 6 ? e.set(s, 8, a, !0) :
    s < 8 ? e.set(s + 1, 8, a, !0) : e.set(r - 15 + s, 8, a, !0), s < 8 ? e.set(
      8, r - s - 1, a, !0) : s < 9 ? e.set(8, 15 - s - 1 + 1, a, !0) : e.set(8,
      15 - s - 1, a, !0);
  e.set(r - 8, 8, 1, !0)
}

function mR(e, t) {
  const n = e.size;
  let r = -1,
    o = n - 1,
    s = 7,
    a = 0;
  for (let l = n - 1; l > 0; l -= 2)
    for (l === 6 && l--;;) {
      for (let c = 0; c < 2; c++)
        if (!e.isReserved(o, l - c)) {
          let u = !1;
          a < t.length && (u = (t[a] >>> s & 1) === 1), e.set(o, l - c, u), s--,
            s === -1 && (a++, s = 7)
        } if (o += r, o < 0 || n <= o) {
        o -= r, r = -r;
        break
      }
    }
}

function hR(e, t, n) {
  const r = new rR;
  n.forEach(function(c) {
    r.put(c.mode.bit, 4), r.put(c.getLength(), cR.getCharCountIndicator(c
      .mode, e)), c.write(r)
  });
  const o = jl.getSymbolTotalCodewords(e),
    s = Bu.getTotalCodewordsCount(e, t),
    a = (o - s) * 8;
  for (r.getLengthInBits() + 4 <= a && r.put(0, 4); r.getLengthInBits() % 8 !==
    0;) r.putBit(0);
  const l = (a - r.getLengthInBits()) / 8;
  for (let c = 0; c < l; c++) r.put(c % 2 ? 17 : 236, 8);
  return gR(r, e, t)
}

function gR(e, t, n) {
  const r = jl.getSymbolTotalCodewords(t),
    o = Bu.getTotalCodewordsCount(t, n),
    s = r - o,
    a = Bu.getBlocksCount(t, n),
    l = r % a,
    c = a - l,
    u = Math.floor(r / a),
    d = Math.floor(s / a),
    p = d + 1,
    v = u - d,
    f = new iR(v);
  let b = 0;
  const h = new Array(a),
    y = new Array(a);
  let x = 0;
  const g = new Uint8Array(e.buffer);
  for (let j = 0; j < a; j++) {
    const C = j < c ? d : p;
    h[j] = g.slice(b, b + C), y[j] = f.encode(h[j]), b += C, x = Math.max(x, C)
  }
  const w = new Uint8Array(r);
  let N = 0,
    E, S;
  for (E = 0; E < x; E++)
    for (S = 0; S < a; S++) E < h[S].length && (w[N++] = h[S][E]);
  for (E = 0; E < v; E++)
    for (S = 0; S < a; S++) w[N++] = y[S][E];
  return w
}

function vR(e, t, n, r) {
  let o;
  if (Array.isArray(e)) o = Cc.fromArray(e);
  else if (typeof e == "string") {
    let u = t;
    if (!u) {
      const d = Cc.rawSplit(e);
      u = Fi.getBestVersionForData(d, n)
    }
    o = Cc.fromString(e, u || 40)
  } else throw new Error("Invalid data");
  const s = Fi.getBestVersionForData(o, n);
  if (!s) throw new Error(
    "The amount of data is too big to be stored in a QR Code");
  if (!t) t = s;
  else if (t < s) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + s + `.
`);
  const a = hR(t, n, o),
    l = jl.getSymbolSize(t),
    c = new oR(l);
  return uR(c, t), dR(c), fR(c, t), Sc(c, n, 0), t >= 7 && pR(c, t), mR(c, a),
    isNaN(r) && (r = $u.getBestMask(c, Sc.bind(null, c, n))), $u.applyMask(r,
    c), Sc(c, n, r), {
      modules: c,
      version: t,
      errorCorrectionLevel: n,
      maskPattern: r,
      segments: o
    }
}
hy.create = function(t, n) {
  if (typeof t > "u" || t === "") throw new Error("No input text");
  let r = Ec.M,
    o, s;
  return typeof n < "u" && (r = Ec.from(n.errorCorrectionLevel, Ec.M), o = Fi
    .from(n.version), s = $u.from(n.maskPattern), n.toSJISFunc && jl
    .setToSJISFunction(n.toSJISFunc)), vR(t, o, r, s)
};
var ky = {},
  bf = {};
(function(e) {
  function t(n) {
    if (typeof n == "number" && (n = n.toString()), typeof n != "string")
      throw new Error("Color should be defined as hex string");
    let r = n.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8) throw new Error(
      "Invalid hex color: " + n);
    (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply(
    [], r.map(function(s) {
        return [s, s]
      }))), r.length === 6 && r.push("F", "F");
    const o = parseInt(r.join(""), 16);
    return {
      r: o >> 24 & 255,
      g: o >> 16 & 255,
      b: o >> 8 & 255,
      a: o & 255,
      hex: "#" + r.slice(0, 6).join("")
    }
  }
  e.getOptions = function(r) {
    r || (r = {}), r.color || (r.color = {});
    const o = typeof r.margin > "u" || r.margin === null || r.margin < 0 ?
      4 : r.margin,
      s = r.width && r.width >= 21 ? r.width : void 0,
      a = r.scale || 4;
    return {
      width: s,
      scale: s ? 4 : a,
      margin: o,
      color: {
        dark: t(r.color.dark || "#000000ff"),
        light: t(r.color.light || "#ffffffff")
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {}
    }
  }, e.getScale = function(r, o) {
    return o.width && o.width >= r + o.margin * 2 ? o.width / (r + o
      .margin * 2) : o.scale
  }, e.getImageWidth = function(r, o) {
    const s = e.getScale(r, o);
    return Math.floor((r + o.margin * 2) * s)
  }, e.qrToImageData = function(r, o, s) {
    const a = o.modules.size,
      l = o.modules.data,
      c = e.getScale(a, s),
      u = Math.floor((a + s.margin * 2) * c),
      d = s.margin * c,
      p = [s.color.light, s.color.dark];
    for (let v = 0; v < u; v++)
      for (let f = 0; f < u; f++) {
        let b = (v * u + f) * 4,
          h = s.color.light;
        if (v >= d && f >= d && v < u - d && f < u - d) {
          const y = Math.floor((v - d) / c),
            x = Math.floor((f - d) / c);
          h = p[l[y * a + x] ? 1 : 0]
        }
        r[b++] = h.r, r[b++] = h.g, r[b++] = h.b, r[b] = h.a
      }
  }
})(bf);
(function(e) {
  const t = bf;

  function n(o, s, a) {
    o.clearRect(0, 0, s.width, s.height), s.style || (s.style = {}), s
      .height = a, s.width = a, s.style.height = a + "px", s.style.width = a +
      "px"
  }

  function r() {
    try {
      return document.createElement("canvas")
    } catch {
      throw new Error("You need to specify a canvas element")
    }
  }
  e.render = function(s, a, l) {
    let c = l,
      u = a;
    typeof c > "u" && (!a || !a.getContext) && (c = a, a = void 0), a || (
      u = r()), c = t.getOptions(c);
    const d = t.getImageWidth(s.modules.size, c),
      p = u.getContext("2d"),
      v = p.createImageData(d, d);
    return t.qrToImageData(v.data, s, c), n(p, u, d), p.putImageData(v, 0,
      0), u
  }, e.renderToDataURL = function(s, a, l) {
    let c = l;
    typeof c > "u" && (!a || !a.getContext) && (c = a, a = void 0), c || (
      c = {});
    const u = e.render(s, a, c),
      d = c.type || "image/png",
      p = c.rendererOpts || {};
    return u.toDataURL(d, p.quality)
  }
})(ky);
var Ry = {};
const xR = bf;

function Bm(e, t) {
  const n = e.a / 255,
    r = t + '="' + e.hex + '"';
  return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
}

function jc(e, t, n) {
  let r = e + t;
  return typeof n < "u" && (r += " " + n), r
}

function yR(e, t, n) {
  let r = "",
    o = 0,
    s = !1,
    a = 0;
  for (let l = 0; l < e.length; l++) {
    const c = Math.floor(l % t),
      u = Math.floor(l / t);
    !c && !s && (s = !0), e[l] ? (a++, l > 0 && c > 0 && e[l - 1] || (r += s ?
        jc("M", c + n, .5 + u + n) : jc("m", o, 0), o = 0, s = !1), c + 1 <
      t && e[l + 1] || (r += jc("h", a), a = 0)) : o++
  }
  return r
}
Ry.render = function(t, n, r) {
  const o = xR.getOptions(n),
    s = t.modules.size,
    a = t.modules.data,
    l = s + o.margin * 2,
    c = o.color.light.a ? "<path " + Bm(o.color.light, "fill") + ' d="M0 0h' +
    l + "v" + l + 'H0z"/>' : "",
    u = "<path " + Bm(o.color.dark, "stroke") + ' d="' + yR(a, s, o.margin) +
    '"/>',
    d = 'viewBox="0 0 ' + l + " " + l + '"',
    v = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o
      .width + '" height="' + o.width + '" ' : "") + d +
    ' shape-rendering="crispEdges">' + c + u + `</svg>
`;
  return typeof r == "function" && r(null, v), v
};
const wR = Ok,
  zu = hy,
  Ty = ky,
  bR = Ry;

function Nf(e, t, n, r, o) {
  const s = [].slice.call(arguments, 1),
    a = s.length,
    l = typeof s[a - 1] == "function";
  if (!l && !wR()) throw new Error("Callback required as last argument");
  if (l) {
    if (a < 2) throw new Error("Too few arguments provided");
    a === 2 ? (o = n, n = t, t = r = void 0) : a === 3 && (t.getContext &&
      typeof o > "u" ? (o = r, r = void 0) : (o = r, r = n, n = t, t = void 0)
      )
  } else {
    if (a < 1) throw new Error("Too few arguments provided");
    return a === 1 ? (n = t, t = r = void 0) : a === 2 && !t.getContext && (r =
      n, n = t, t = void 0), new Promise(function(c, u) {
      try {
        const d = zu.create(n, r);
        c(e(d, t, r))
      } catch (d) {
        u(d)
      }
    })
  }
  try {
    const c = zu.create(n, r);
    o(null, e(c, t, r))
  } catch (c) {
    o(c)
  }
}
Qo.create = zu.create;
Qo.toCanvas = Nf.bind(null, Ty.render);
Qo.toDataURL = Nf.bind(null, Ty.renderToDataURL);
Qo.toString = Nf.bind(null, function(e, t, n) {
  return bR.render(e, n)
});

function Pl() {
  const e = new URLSearchParams(window.location.search),
    t = e.get("utm_source") || "",
    n = e.get("utm_medium") || "",
    r = e.get("utm_campaign") || "",
    o = e.get("utm_content") || "",
    s = e.get("utm_term") || "";
  let a = "";
  return t && (a += `utm_source=${t}`), n && (a +=
    `${a?"&":""}utm_medium=${n}`), r && (a += `${a?"&":""}utm_campaign=${r}`),
    o && (a += `${a?"&":""}utm_content=${o}`), s && (a +=
      `${a?"&":""}utm_term=${s}`), a
}
const NR = {
  SUCCESS_URL: "/upsell",
  DESCRIPTION: "Pagamento via Pix"
};

function ER() {
  var j;
  const e = Ho(),
    t = hn(),
    {
      toast: n
    } = tr(),
    r = e.state,
    [o, s] = m.useState(""),
    [a, l] = m.useState(""),
    [c, u] = m.useState(""),
    [d, p] = m.useState("PENDING"),
    [v, f] = m.useState(!0),
    [b, h] = m.useState(!1),
    [y, x] = m.useState(900),
    [g, w] = m.useState("low");
  m.useEffect(() => {
    r || t(`/${window.location.search}`)
  }, [r, t]), m.useEffect(() => {
    if (!r) return;
    (async () => {
      var P;
      f(!0);
      try {
        const T = r.amount - (((P = r.shipping) == null ? void 0 : P
            .value) || 0),
          O = Pl(),
          M = Math.round(r.amount * 100),
          $ = {
            amount: M,
            description: "Curso de DJ 2.0",
            customer: {
              name: r.customerData.name,
              document: r.customerData.cpf.replace(/\D/g, ""),
              email: r.customerData.email,
              phone: r.customerData.phone.replace(/\D/g, "")
            },
            item: {
              title: "Curso de DJ 2.0",
              price: M,
              quantity: 1
            },
            paymentMethod: "PIX"
          };
        O && ($.utm = O), console.log(
          "📤 Enviando dados para a API PIX:", $);
        const z = await (await fetch(
          "https://app.duttyfy.com.br/api-pix/4MgmIjFaI1qAtVuiVl2gfbWw1hWilaak9L8a-PnKKV2Z1VcZico-6ux_UrXculbv_9QeiS5xQ5v5UgWgegbH4Q", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify($)
          })).json();
        if (console.log("📥 Resposta da API PIX:", z), z.error || !z
          .transactionId || !z.pixCode) throw console.error(
          "❌ Erro nos dados:", z), new Error(z.error ||
          "Erro ao gerar PIX");
        s(z.pixCode), u(z.transactionId), p("PENDING");
        const B = await Qo.toDataURL(z.pixCode, {
          width: 300,
          margin: 2
        });
        l(B), n({
          title: "PIX gerado com sucesso!",
          description: "Realize o pagamento para garantir seu produto."
        })
      } catch (T) {
        console.error("Error generating PIX:", T), n({
          title: "Erro ao gerar PIX",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive"
        })
      } finally {
        f(!1)
      }
    })()
  }, [r, n]), m.useEffect(() => {
    if (y <= 0) return;
    const C = setInterval(() => {
      x(P => {
        const T = P - 1;
        return T <= 180 ? w("high") : T <= 420 ? w("medium") : w(
          "low"), T
      })
    }, 1e3);
    return () => clearInterval(C)
  }, [y]), m.useEffect(() => {
    if (!c || d === "COMPLETED") return;
    const C = async () => {
      try {
        const O = await (await fetch(
          `https://app.duttyfy.com.br/api-pix/4MgmIjFaI1qAtVuiVl2gfbWw1hWilaak9L8a-PnKKV2Z1VcZico-6ux_UrXculbv_9QeiS5xQ5v5UgWgegbH4Q?transactionId=${c}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })).json();
        if (!O.error) {
          const M = O.status;
          if (M === "COMPLETED") {
            if (p("COMPLETED"), typeof window < "u" && window.ttq) {
              const $ = localStorage.getItem("orderData");
              let A = null;
              if ($) try {
                A = JSON.parse($)
              } catch (B) {
                console.error("Error parsing order data:", B)
              }
              const z = (A == null ? void 0 : A.product_id) && A
                .product_id.trim() || "hoverboard-skate-eletrico";
              window.ttq.instance("D3EJ18RC77U0EI1CRR50").track(
                "Purchase", {
                  event_id: `${Date.now()}-${Math.random().toString(36).substr(2,9)}`,
                  content_type: "product",
                  content_id: z,
                  description: (A == null ? void 0 : A
                    .product_name) || r.productName,
                  quantity: (A == null ? void 0 : A.quantity) || 1,
                  value: r.amount,
                  currency: "BRL",
                  content_ids: [z],
                  contents: [{
                    content_id: z,
                    content_name: (A == null ? void 0 : A
                      .product_name) || r.productName,
                    quantity: (A == null ? void 0 : A.quantity) ||
                      1,
                    price: (A == null ? void 0 : A.unit_price) ||
                      r.amount
                  }]
                })
            }
            n({
              title: "Pagamento confirmado! 🎉",
              description: "Seu pedido está sendo processado."
            }), setTimeout(() => t(
              `${NR.SUCCESS_URL}${window.location.search}`), 2e3)
          } else p(M.toUpperCase())
        }
      } catch (T) {
        console.error("Error checking status:", T)
      }
    }, P = setInterval(C, 5e3);
    return C(), () => clearInterval(P)
  }, [c, d, t, n]);
  const N = async () => {
    try {
      await navigator.clipboard.writeText(o), h(!0), n({
        title: "Código copiado!",
        description: "Cole no seu aplicativo de pagamento."
      }), setTimeout(() => h(!1), 3e3)
    } catch {
      n({
        title: "Erro ao copiar",
        description: "Tente novamente.",
        variant: "destructive"
      })
    }
  }, E = () => {
    const C = document.createElement("a");
    C.download = "pix-qrcode.png", C.href = a, C.click()
  };
  if (!r) return null;
  const S = y / 900 * 100;
  return i.jsx("div", {
    className: "min-h-screen bg-gradient-to-br from-background via-muted/20 to-sale-orange/5 py-8 px-4",
    children: i.jsxs("div", {
      className: "max-w-2xl mx-auto space-y-6",
      children: [i.jsx("div", {
        className: "bg-card border border-border rounded-xl p-6",
        children: i.jsxs("div", {
          className: "space-y-4",
          children: [i.jsxs("div", {
            className: "flex items-center gap-4",
            children: [i.jsx("img", {
              src: r.productImage,
              alt: r.productName,
              className: "w-20 h-20 object-contain rounded-lg"
            }), i.jsxs("div", {
              className: "flex-1 text-left",
              children: [i.jsx("h1", {
                className: "text-base font-semibold text-foreground mb-1",
                children: r.productName
              }), i.jsxs("p", {
                className: "text-lg font-bold text-sale-orange",
                children: ["R$ ", (r
                    .amount - (((j = r
                        .shipping) ==
                      null ? void 0 : j
                      .value) || 0))
                  .toFixed(2)
                ]
              })]
            })]
          }), r.shipping && i.jsxs("div", {
            className: "pt-4 border-t border-border space-y-2",
            children: [i.jsxs("div", {
              className: "flex items-center justify-between text-sm",
              children: [i.jsx("span", {
                className: "text-muted-foreground",
                children: "Frete:"
              }), i.jsx("div", {
                className: "flex items-center gap-2",
                children: i.jsx("span", {
                  className: "font-bold",
                  children: r.shipping
                    .value === 0 ?
                    "Grátis" :
                    `R$ ${r.shipping.value.toFixed(2)}`
                })
              })]
            }), i.jsxs("div", {
              className: "flex items-center justify-between text-base pt-2 border-t border-border",
              children: [i.jsx("span", {
                className: "font-semibold",
                children: "Total:"
              }), i.jsxs("span", {
                className: "text-xl font-bold text-primary",
                children: ["R$ ", r.amount
                  .toFixed(2)
                ]
              })]
            })]
          })]
        })
      }), i.jsxs("div", {
        className: "relative bg-gradient-to-br from-card to-card/80 border-2 border-sale-orange/20 rounded-2xl p-6 text-center shadow-2xl overflow-hidden",
        children: [i.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-r from-sale-orange/5 via-transparent to-sale-orange/5"
        }), i.jsxs("div", {
          className: "relative",
          children: [i.jsxs("div", {
            className: "flex items-center justify-center gap-2 mb-4",
            children: [i.jsx("div", {
              className: `p-2 rounded-full ${g==="high"?"bg-red-500/20 animate-pulse":g==="medium"?"bg-sale-orange/20":"bg-primary/10"}`,
              children: i.jsx($s, {
                className: `h-5 w-5 ${g==="high"?"text-red-600":g==="medium"?"text-[hsl(var(--sale-orange))]":"text-primary"}`
              })
            }), i.jsx("p", {
              className: "text-sm text-muted-foreground font-semibold",
              children: "Tempo restante para pagamento"
            })]
          }), i.jsxs("div", {
            className: "space-y-2",
            children: [i.jsx(vf, {
              value: S,
              className: `h-4 ${g==="high"?"bg-red-100 dark:bg-red-950/20":g==="medium"?"bg-sale-orange/10":"bg-muted"}`
            }), i.jsxs("p", {
              className: "text-xs text-muted-foreground",
              children: [Math.round(S),
                "% do tempo disponível"
              ]
            })]
          }), y <= 0 && i.jsx("div", {
            className: "mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg",
            children: i.jsx("p", {
              className: "text-sm text-destructive font-semibold",
              children: "⏰ Tempo expirado! Atualize a página para gerar novo código."
            })
          })]
        })]
      }), v ? i.jsxs("div", {
        className: "relative bg-gradient-to-br from-card to-card/80 border-2 border-sale-orange/20 rounded-2xl p-12 shadow-2xl overflow-hidden",
        children: [i.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-r from-sale-orange/5 via-transparent to-sale-orange/5"
        }), i.jsxs("div", {
          className: "relative flex flex-col items-center justify-center",
          children: [i.jsx("div", {
            className: "animate-spin rounded-full h-16 w-16 border-4 border-sale-orange/20 border-t-sale-orange mb-4"
          }), i.jsx("p", {
            className: "text-muted-foreground font-medium",
            children: "Gerando código PIX..."
          })]
        })]
      }) : i.jsxs("div", {
        className: "relative bg-gradient-to-br from-card to-card/80 border-2 border-sale-orange/20 rounded-2xl p-6 shadow-2xl overflow-hidden",
        children: [i.jsx("div", {
          className: "absolute top-0 right-0 w-64 h-64 bg-sale-orange/5 rounded-full blur-3xl"
        }), i.jsx("div", {
          className: "absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        }), i.jsxs("div", {
          className: "relative space-y-6",
          children: [i.jsxs("div", {
            className: "flex flex-col items-center justify-center text-center",
            children: [i.jsx("h2", {
              className: "text-lg font-bold mb-4 bg-gradient-to-r from-foreground to-sale-orange bg-clip-text text-transparent",
              children: "Escaneie o QR Code no seu banco"
            }), i.jsxs("div", {
              className: "relative inline-block",
              children: [i.jsx("div", {
                className: "absolute inset-0 bg-sale-orange/20 rounded-2xl blur-xl"
              }), i.jsx("div", {
                className: "relative bg-white p-6 rounded-2xl shadow-xl border-2 border-sale-orange/20",
                children: i.jsx("img", {
                  src: a,
                  alt: "QR Code PIX",
                  className: "w-64 h-64"
                })
              })]
            }), i.jsxs(ie, {
              variant: "outline",
              onClick: E,
              className: "mt-6 border-sale-orange/30 hover:bg-sale-orange/10 hover:border-sale-orange/50 transition-all",
              children: [i.jsx($v, {
                className: "h-4 w-4 mr-2"
              }), "Baixar QR Code"]
            })]
          }), i.jsxs("div", {
            className: "w-full",
            children: [i.jsx("label", {
              className: "font-semibold text-sm block mb-3 text-muted-foreground text-center",
              children: "Ou use o código Copia e Cola"
            }), i.jsxs("div", {
              className: "space-y-3",
              children: [i.jsx("div", {
                className: "p-4 bg-gradient-to-br from-muted to-muted/50 rounded-xl text-xs break-all font-mono border-2 border-sale-orange/10 shadow-inner text-center",
                children: o
              }), i.jsxs(ie, {
                onClick: N,
                className: "w-full bg-primary hover:bg-primary/90 transition-all",
                variant: "default",
                children: [i.jsx(Fv, {
                    className: "h-4 w-4 mr-2"
                  }), b ?
                  "Código Copiado!" :
                  "Copiar Código PIX"
                ]
              })]
            })]
          }), i.jsxs("div", {
            className: "w-full bg-gradient-to-br from-muted/80 to-muted/40 p-5 rounded-xl space-y-2.5 text-sm border border-sale-orange/10",
            children: [i.jsxs("p", {
              className: "font-bold mb-3 text-base flex items-center justify-center gap-2",
              children: [i.jsx("span", {
                className: "text-sale-orange",
                children: "📱"
              }), "Como pagar:"]
            }), i.jsxs("div", {
              className: "space-y-2",
              children: [i.jsxs("p", {
                className: "flex items-start gap-2",
                children: [i.jsx("span", {
                  className: "font-bold text-sale-orange min-w-[20px]",
                  children: "1."
                }), i.jsx("span", {
                  children: "Abra o app do seu banco"
                })]
              }), i.jsxs("p", {
                className: "flex items-start gap-2",
                children: [i.jsx("span", {
                  className: "font-bold text-sale-orange min-w-[20px]",
                  children: "2."
                }), i.jsx("span", {
                  children: "Escolha pagar com PIX QR Code ou Copia e Cola"
                })]
              }), i.jsxs("p", {
                className: "flex items-start gap-2",
                children: [i.jsx("span", {
                  className: "font-bold text-sale-orange min-w-[20px]",
                  children: "3."
                }), i.jsx("span", {
                  children: "Escaneie o QR Code ou cole o código acima"
                })]
              }), i.jsxs("p", {
                className: "flex items-start gap-2",
                children: [i.jsx("span", {
                  className: "font-bold text-sale-orange min-w-[20px]",
                  children: "4."
                }), i.jsxs("span", {
                  children: [
                    "Confirme o pagamento de R$ ",
                    r.amount
                    .toFixed(2)
                  ]
                })]
              })]
            }), i.jsx("div", {
              className: "pt-3 mt-3 border-t border-sale-orange/20",
              children: i.jsxs("p", {
                className: "font-semibold flex items-center justify-center gap-2 text-sale-orange",
                children: [i.jsx(al, {
                    className: "h-4 w-4"
                  }),
                  "Após o pagamento, seu pedido sera processado e embalado para envio"
                ]
              })
            })]
          }), i.jsx("div", {
            className: "w-full text-center pt-4 border-t border-sale-orange/10",
            children: i.jsxs("p", {
              className: "text-sm text-muted-foreground",
              children: ["Status:", " ", i.jsx(
                "span", {
                  className: `font-bold ${d==="COMPLETED"?"text-green-600":"text-sale-orange animate-pulse"}`,
                  children: d === "PENDING" ?
                    "⏳ Aguardando pagamento..." :
                    d
                })]
            })
          })]
        })]
      }), i.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
      })]
    })
  })
}
const ro = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx("div", {
  ref: n,
  className: se(
    "rounded-lg border bg-card text-card-foreground shadow-sm", e),
  ...t
}));
ro.displayName = "Card";
const CR = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx("div", {
  ref: n,
  className: se("flex flex-col space-y-1.5 p-6", e),
  ...t
}));
CR.displayName = "CardHeader";
const SR = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx("h3", {
  ref: n,
  className: se("text-2xl font-semibold leading-none tracking-tight", e),
  ...t
}));
SR.displayName = "CardTitle";
const jR = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx("p", {
  ref: n,
  className: se("text-sm text-muted-foreground", e),
  ...t
}));
jR.displayName = "CardDescription";
const PR = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx("div", {
  ref: n,
  className: se("p-6 pt-0", e),
  ...t
}));
PR.displayName = "CardContent";
const kR = m.forwardRef(({
  className: e,
  ...t
}, n) => i.jsx("div", {
  ref: n,
  className: se("flex items-center p-6 pt-0", e),
  ...t
}));
kR.displayName = "CardFooter";
const Iy = "/assets/nfe-logo-C3aIwSRD.png",
  Ef = ({
    isOpen: e,
    onClose: t,
    pixCode: n,
    transactionId: r,
    amount: o,
    redirectTo: s,
    isUpsell: a = !1,
    orderDetails: l
  }) => {
    const c = hn(),
      {
        toast: u
      } = tr(),
      [d, p] = m.useState(""),
      [v, f] = m.useState(!1),
      [b, h] = m.useState(900),
      [y, x] = m.useState("PENDING"),
      [g, w] = m.useState(!0),
      [N, E] = m.useState(5e3);
    m.useEffect(() => {
      n && e && (S(), w(!1))
    }, [n, e]), m.useEffect(() => {
      if (!e) return;
      const O = setInterval(() => {
        h(M => M <= 0 ? (clearInterval(O), 0) : M - 1)
      }, 1e3);
      return () => clearInterval(O)
    }, [e]), m.useEffect(() => {
      if (!r || y === "COMPLETED" || !e) return;
      let O = 0;
      const M = async () => {
        try {
          const z = await (await fetch(
            `https://app.duttyfy.com.br/api-pix/4MgmIjFaI1qAtVuiVl2gfbWw1hWilaak9L8a-PnKKV2Z1VcZico-6ux_UrXculbv_9QeiS5xQ5v5UgWgegbH4Q?transactionId=${r}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            })).json();
          if (z && !z.error) {
            const B = z.status;
            if (B === "COMPLETED") {
              x("COMPLETED");
              const V = a ? "liberacao-alfandegaria" : l != null && l
                .productName && l.productName.trim() ? l.productName
                .toLowerCase().replace(/\s+/g, "-") :
                "hoverboard-skate-eletrico";
              Re("Purchase", {
                content_id: V,
                description: (l == null ? void 0 : l.productName) ||
                  "Produto",
                quantity: (l == null ? void 0 : l.quantity) || 1,
                value: o,
                currency: "BRL"
              }), u({
                title: "Pagamento confirmado! 🎉",
                description: "Seu pedido está sendo processado."
              }), setTimeout(() => c(s), 2e3)
            } else x(B.toUpperCase()), O++, O > 3 && E(V => Math.min(V *
              1.5, 3e4))
          }
        } catch (A) {
          console.error("Error checking status:", A)
        }
      }, $ = setInterval(M, N);
      return M(), () => clearInterval($)
    }, [r, y, e, c, u, o, s, a, l, N]);
    const S = async () => {
      try {
        const O = await Qo.toDataURL(n, {
          width: 300,
          margin: 2
        });
        p(O)
      } catch (O) {
        console.error("Error generating QR Code:", O), u({
          title: "Erro",
          description: "Erro ao gerar QR Code",
          variant: "destructive"
        })
      }
    }, j = O => {
      const M = Math.floor(O / 60),
        $ = O % 60;
      return `${M}:${$.toString().padStart(2,"0")}`
    }, C = async () => {
      try {
        await navigator.clipboard.writeText(n), f(!0), u({
          title: "Código copiado!",
          description: "Cole no seu aplicativo de pagamento."
        }), setTimeout(() => f(!1), 3e3)
      } catch {
        u({
          title: "Erro ao copiar",
          description: "Tente novamente.",
          variant: "destructive"
        })
      }
    }, P = () => {
      const O = document.createElement("a");
      O.download = "pix-qrcode.png", O.href = d, O.click()
    }, T = b / 900 * 100;
    return i.jsx(ra, {
      open: e,
      onOpenChange: t,
      children: i.jsxs(Wo, {
        className: "max-w-2xl max-h-[90vh] overflow-y-auto",
        children: [i.jsx(oa, {
          children: i.jsx(sa, {
            className: "text-2xl font-bold text-center",
            children: "Pagamento via PIX"
          })
        }), l && i.jsx("div", {
          className: "bg-muted p-4 rounded-lg mb-4",
          children: i.jsxs("div", {
            className: "flex items-center gap-4",
            children: [i.jsx("img", {
              src: Iy,
              alt: l.productName,
              className: "w-20 h-20 object-contain rounded-lg bg-white"
            }), i.jsxs("div", {
              className: "flex-1",
              children: [i.jsx("h3", {
                className: "font-semibold",
                children: l.productName
              }), i.jsxs("p", {
                className: "text-sm text-muted-foreground",
                children: ["Quantidade: ", l
                  .quantity
                ]
              }), i.jsxs("p", {
                className: "text-lg font-bold text-primary",
                children: ["R$ ", o.toFixed(2)]
              })]
            })]
          })
        }), i.jsxs("div", {
          className: "bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 mb-4",
          children: [i.jsxs("div", {
            className: "flex items-center justify-center gap-3",
            children: [i.jsx($s, {
              className: "h-6 w-6 text-orange-600 animate-pulse"
            }), i.jsxs("div", {
              className: "text-center",
              children: [i.jsx("p", {
                className: "text-sm text-muted-foreground mb-1",
                children: "Tempo restante:"
              }), i.jsx("p", {
                className: "text-2xl font-bold text-orange-600 font-mono",
                children: j(b)
              })]
            })]
          }), i.jsx(vf, {
            value: T,
            className: "mt-3 h-2"
          })]
        }), g ? i.jsxs("div", {
          className: "flex flex-col items-center justify-center py-12",
          children: [i.jsx(N2, {
            className: "h-16 w-16 animate-spin text-primary mb-4"
          }), i.jsx("p", {
            className: "text-muted-foreground",
            children: "Gerando código PIX..."
          })]
        }) : i.jsxs("div", {
          className: "space-y-6",
          children: [i.jsxs("div", {
            className: "flex flex-col items-center",
            children: [i.jsx("h3", {
              className: "text-lg font-semibold mb-4",
              children: "Escaneie o QR Code"
            }), i.jsx("div", {
              className: "bg-white p-6 rounded-lg border-2 border-primary/20",
              children: i.jsx("img", {
                src: d,
                alt: "QR Code PIX",
                className: "w-64 h-64"
              })
            }), i.jsxs(ie, {
              variant: "outline",
              onClick: P,
              className: "mt-4",
              children: [i.jsx($v, {
                className: "h-4 w-4 mr-2"
              }), "Baixar QR Code"]
            })]
          }), i.jsxs("div", {
            className: "space-y-3",
            children: [i.jsx("label", {
              className: "text-sm font-semibold block text-center",
              children: "Ou use o código Copia e Cola"
            }), i.jsx("div", {
              className: "p-3 bg-muted rounded-lg text-xs break-all font-mono",
              children: n
            }), i.jsxs(ie, {
              onClick: C,
              className: "w-full",
              children: [i.jsx(Fv, {
                  className: "h-4 w-4 mr-2"
                }), v ? "Código Copiado!" :
                "Copiar Código PIX"
              ]
            })]
          }), i.jsxs("div", {
            className: "bg-muted/50 p-4 rounded-lg space-y-2 text-sm",
            children: [i.jsx("p", {
              className: "font-semibold flex items-center gap-2",
              children: "📱 Como pagar:"
            }), i.jsxs("ol", {
              className: "space-y-1 ml-4 list-decimal",
              children: [i.jsx("li", {
                children: "Abra o app do seu banco"
              }), i.jsx("li", {
                children: "Escolha pagar com PIX"
              }), i.jsx("li", {
                children: "Escaneie o QR Code ou cole o código"
              }), i.jsxs("li", {
                children: [
                  "Confirme o pagamento de R$ ",
                  o.toFixed(2)
                ]
              })]
            })]
          }), i.jsx("div", {
            className: "text-center",
            children: i.jsxs("p", {
              className: "text-sm text-muted-foreground",
              children: ["Status:", " ", i.jsx("span", {
                className: `font-bold ${y==="COMPLETED"?"text-green-600":"text-orange-600 animate-pulse"}`,
                children: y === "PENDING" ?
                  "⏳ Aguardando pagamento..." :
                  y === "COMPLETED" ?
                  "✅ Pagamento confirmado!" : y
              })]
            })
          })]
        })]
      })
    })
  },
  RR = "/assets/liberacao-alfandegaria-correios-D0MKDXPt.jpg",
  TR = "/assets/tiktok-shop-logo-wf_Wp3UU.png",
  IR = () => {
    const e = hn(),
      {
        toast: t
      } = tr(),
      [n, r] = m.useState(29 * 60 + 57),
      [o, s] = m.useState(!1),
      [a, l] = m.useState(!1),
      [c, u] = m.useState(""),
      [d, p] = m.useState(""),
      [v, f] = m.useState(null);
    m.useEffect(() => {
      window.scrollTo(0, 0);
      const y = localStorage.getItem("customer-data");
      if (y) try {
        f(JSON.parse(y))
      } catch (g) {
        console.error("Error loading customer data:", g)
      }
      const x = setInterval(() => {
        r(g => g <= 0 ? (clearInterval(x), 0) : g - 1)
      }, 1e3);
      return Re("ViewContent", {
        content_id: "liberacao-alfandegaria-expressa",
        description: "Liberação Alfandegária Expressa",
        quantity: 1,
        value: 29.9,
        currency: "BRL"
      }), () => clearInterval(x)
    }, []);
    const b = y => {
        const x = Math.floor(y / 60),
          g = y % 60;
        return `${String(x).padStart(2,"0")}:${String(g).padStart(2,"0")}`
      },
      h = async () => {
        if (!v) {
          t({
            title: "Erro",
            description: "Dados do cliente não encontrados. Por favor, complete o checkout primeiro.",
            variant: "destructive"
          }), e(`https://checkout.casaboreal.site/checkout?product=6ae74748-ba99-11f0-a710-46da4690ad53${window.location.search ? window.location.search.replace('?', '&') : ''}`);
          return
        }
        l(!0), Re("AddToCart", {
          content_id: "liberacao-alfandegaria-expressa",
          description: "Liberação Alfandegária Expressa",
          quantity: 1,
          value: 29.9,
          currency: "BRL"
        });
        try {
          const y = Pl(),
            x = {
              amount: 2990,
              description: "Curso de DJ 2.0",
              customer: {
                name: v.name,
                document: v.cpf.replace(/\D/g, ""),
                email: v.email,
                phone: v.phone.replace(/\D/g, "")
              },
              item: {
                title: "Curso de DJ 2.0",
                price: 2990,
                quantity: 1
              },
              paymentMethod: "PIX"
            };
          y && (x.utm = y), console.log("Enviando dados para a API PIX:", x);
          const w = await (await fetch(
            "https://app.duttyfy.com.br/api-pix/4MgmIjFaI1qAtVuiVl2gfbWw1hWilaak9L8a-PnKKV2Z1VcZico-6ux_UrXculbv_9QeiS5xQ5v5UgWgegbH4Q", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(x)
            })).json();
          if (console.log("Resposta da API PIX:", w), w.error || !w
            .transactionId || !w.pixCode) throw new Error(w.error ||
            "Erro ao gerar PIX");
          u(w.pixCode), p(w.transactionId), s(!0), Re("Purchase", {
            content_id: "liberacao-alfandegaria-expressa",
            description: "Liberação Alfandegária Expressa",
            quantity: 1,
            value: 29.9,
            currency: "BRL"
          })
        } catch (y) {
          console.error("Error generating PIX:", y), t({
            title: "Erro",
            description: y instanceof Error ? y.message :
              "Erro ao gerar PIX. Tente novamente.",
            variant: "destructive"
          })
        } finally {
          l(!1)
        }
      };
    return i.jsxs("div", {
      className: "min-h-screen bg-gradient-to-b from-slate-50 to-gray-100",
      children: [i.jsx("header", {
        className: "border-b bg-white shadow-sm",
        children: i.jsx("div", {
          className: "container mx-auto px-4 py-4",
          children: i.jsx("img", {
            src: TR,
            alt: "TikTok Shop",
            className: "h-20 mx-auto"
          })
        })
      }), i.jsxs("div", {
        className: "container mx-auto px-4 py-8 max-w-4xl",
        children: [i.jsxs(ro, {
          className: "mb-6 p-6 text-center border-0 shadow-xl",
          children: [i.jsxs("div", {
            className: "flex items-center justify-center gap-3 mb-2",
            children: [i.jsx(dt, {
              className: "h-8 w-8 text-green-600"
            }), i.jsx("h1", {
              className: "text-2xl font-bold text-green-600",
              children: "Pedido Realizado com Sucesso!"
            })]
          }), i.jsx("p", {
            className: "text-muted-foreground",
            children: "Seu pedido foi confirmado e está sendo processado"
          })]
        }), i.jsx(ro, {
          className: "mb-6 p-6 border-0 shadow-xl bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500",
          children: i.jsxs("div", {
            className: "flex items-start gap-3",
            children: [i.jsx(fr, {
              className: "h-6 w-6 text-orange-600 flex-shrink-0 mt-1"
            }), i.jsxs("div", {
              children: [i.jsx("h2", {
                className: "text-xl font-bold text-orange-900 mb-2",
                children: "⚠️ Atenção: seu pedido só será enviado após a confirmação do pagamento da taxa obrigatória"
              }), i.jsx("p", {
                className: "text-sm text-orange-800",
                children: "De acordo com a legislação tributária brasileira (IN RFB nº 1.737/2017), todo produto adquirido precisa do recolhimento da taxa de imposto nacional para liberação do envio."
              })]
            })]
          })
        }), i.jsxs(ro, {
          className: "border-0 shadow-xl overflow-hidden",
          children: [i.jsx("div", {
            className: "bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative",
            children: i.jsxs("div", {
              className: "flex items-center justify-between gap-3 mb-2",
              children: [i.jsxs("div", {
                className: "flex items-center gap-3",
                children: [i.jsx(Gp, {
                  className: "h-8 w-8"
                }), i.jsxs("div", {
                  children: [i.jsx("h2", {
                    className: "text-2xl font-bold",
                    children: "Liberação Alfandegária Expressa"
                  }), i.jsx("p", {
                    className: "text-blue-100 text-sm",
                    children: "IN RFB nº 1.737/2017"
                  })]
                })]
              }), i.jsx("div", {
                className: "bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex-shrink-0",
                children: i.jsx("span", {
                  className: "text-xs font-bold",
                  children: "RFB"
                })
              })]
            })
          }), i.jsxs("div", {
            className: "p-6 space-y-6",
            children: [i.jsx("div", {
              className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
              children: i.jsxs("div", {
                className: "flex items-start gap-3",
                children: [i.jsx(fr, {
                  className: "h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5"
                }), i.jsxs("div", {
                  children: [i.jsx("h3", {
                    className: "font-semibold text-blue-900 mb-2",
                    children: "Informações Importantes"
                  }), i.jsxs("ul", {
                    className: "space-y-2 text-sm text-blue-800",
                    children: [i
                      .jsxs(
                      "li", {
                        className: "flex items-start gap-2",
                        children: [
                          i
                          .jsx(
                            dt, {
                              className: "h-4 w-4 mt-0.5 flex-shrink-0"
                            }
                            ),
                          i
                          .jsx(
                            "span", {
                              children: "Essa taxa é obrigatória e sem ela o produto não pode ser despachado"
                            })
                        ]
                      }), i.jsxs(
                        "li", {
                          className: "flex items-start gap-2",
                          children: [
                            i
                            .jsx(
                              fr, {
                                className: "h-4 w-4 mt-0.5 flex-shrink-0 text-orange-600"
                              }
                              ),
                            i
                            .jsx(
                              "span", {
                                children: "Caso não haja pagamento, o pedido será bloqueado e cancelado"
                              })
                          ]
                        })
                    ]
                  })]
                })]
              })
            }), i.jsxs("div", {
              className: "grid md:grid-cols-3 gap-4",
              children: [i.jsxs("div", {
                className: "text-center p-4 bg-slate-50 rounded-lg",
                children: [i.jsx(x2, {
                  className: "h-8 w-8 mx-auto mb-2 text-blue-600"
                }), i.jsx("h4", {
                  className: "font-semibold mb-1",
                  children: "Situação"
                }), i.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: "Aguardando Documentação"
                })]
              }), i.jsxs("div", {
                className: "text-center p-4 bg-slate-50 rounded-lg",
                children: [i.jsx(Gp, {
                  className: "h-8 w-8 mx-auto mb-2 text-orange-600"
                }), i.jsx("h4", {
                  className: "font-semibold mb-1",
                  children: "Necessário"
                }), i.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: "Liberação Alfandegária"
                })]
              }), i.jsxs("div", {
                className: "text-center p-4 bg-slate-50 rounded-lg",
                children: [i.jsx($s, {
                  className: "h-8 w-8 mx-auto mb-2 text-green-600"
                }), i.jsx("h4", {
                  className: "font-semibold mb-1",
                  children: "Próximo"
                }), i.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: "Processamento Expresso"
                })]
              })]
            }), i.jsxs("div", {
              className: "bg-slate-50 rounded-lg p-4",
              children: [i.jsx("h3", {
                className: "font-semibold mb-3",
                children: "Detalhes do Processo"
              }), i.jsxs("div", {
                className: "grid md:grid-cols-2 gap-3 text-sm",
                children: [i.jsxs("div", {
                  children: [i.jsx(
                    "span", {
                      className: "text-muted-foreground",
                      children: "Código do Processo:"
                    }), i.jsxs(
                    "span", {
                      className: "ml-2 font-mono font-semibold",
                      children: [
                        "BR-",
                        Math
                        .random()
                        .toString(
                          36)
                        .substr(2,
                          9)
                        .toUpperCase()
                      ]
                    })]
                }), i.jsxs("div", {
                  children: [i.jsx(
                    "span", {
                      className: "text-muted-foreground",
                      children: "Regime:"
                    }), i.jsx(
                    "span", {
                      className: "ml-2 font-semibold",
                      children: "Importação Expressa"
                    })]
                }), i.jsxs("div", {
                  children: [i.jsx(
                    "span", {
                      className: "text-muted-foreground",
                      children: "Unidade:"
                    }), i.jsx(
                    "span", {
                      className: "ml-2 font-semibold",
                      children: "Alfândega Internacional"
                    })]
                }), i.jsxs("div", {
                  children: [i.jsx(
                    "span", {
                      className: "text-muted-foreground",
                      children: "Prazo Limite:"
                    }), i.jsx(
                    "span", {
                      className: "ml-2 font-semibold text-red-600",
                      children: b(n)
                    })]
                }), i.jsxs("div", {
                  children: [i.jsx(
                    "span", {
                      className: "text-muted-foreground",
                      children: "Status Atual:"
                    }), i.jsx(
                    "span", {
                      className: "ml-2 font-semibold text-orange-600",
                      children: "Aguardando Pagamento"
                    })]
                }), i.jsxs("div", {
                  children: [i.jsx(
                    "span", {
                      className: "text-muted-foreground",
                      children: "Modalidade:"
                    }), i.jsx(
                    "span", {
                      className: "ml-2 font-semibold",
                      children: "Expressa"
                    })]
                })]
              })]
            }), i.jsxs("div", {
              className: "bg-green-50 border border-green-200 rounded-lg p-4",
              children: [i.jsx("h3", {
                className: "font-semibold text-green-900 mb-3",
                children: "Benefícios do Pagamento"
              }), i.jsxs("ul", {
                className: "space-y-2 text-sm text-green-800",
                children: [i.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [i.jsx(dt, {
                    className: "h-4 w-4 mt-0.5 flex-shrink-0"
                  }), i.jsx(
                  "span", {
                    children: "Garantia de liberação imediata do pedido"
                  })]
                }), i.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [i.jsx(dt, {
                    className: "h-4 w-4 mt-0.5 flex-shrink-0"
                  }), i.jsx(
                  "span", {
                    children: "Cumprimento da legislação tributária brasileira"
                  })]
                }), i.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [i.jsx(dt, {
                    className: "h-4 w-4 mt-0.5 flex-shrink-0"
                  }), i.jsx(
                  "span", {
                    children: "Despacho prioritário após a confirmação"
                  })]
                }), i.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [i.jsx(dt, {
                    className: "h-4 w-4 mt-0.5 flex-shrink-0"
                  }), i.jsx(
                  "span", {
                    children: "Segurança total do envio e entrega"
                  })]
                })]
              })]
            }), i.jsx("div", {
              className: "bg-red-50 border-2 border-red-300 rounded-lg p-4",
              children: i.jsxs("div", {
                className: "flex items-start gap-3",
                children: [i.jsx(fr, {
                  className: "h-6 w-6 text-red-600 flex-shrink-0 mt-0.5"
                }), i.jsxs("div", {
                  children: [i.jsx("p", {
                    className: "font-bold text-red-900 mb-1",
                    children: "⚠️ Prazo de 29 minutos"
                  }), i.jsx("p", {
                    className: "text-sm text-red-800",
                    children: "Se a taxa não for paga dentro desse prazo, seu pedido será automaticamente cancelado e o valor estornado."
                  })]
                })]
              })
            })]
          })]
        }), i.jsxs(ro, {
          className: "mt-6 p-6 border-0 shadow-xl",
          children: [i.jsxs("div", {
            className: "text-center mb-6",
            children: [i.jsx("h3", {
              className: "text-2xl font-bold mb-2",
              children: "Taxa de Liberação Alfandegária"
            }), i.jsx("div", {
              className: "text-5xl font-bold text-green-600 mb-2",
              children: "R$ 29,90"
            }), i.jsx("p", {
              className: "text-muted-foreground",
              children: "Pagamento único • Processamento imediato"
            })]
          }), i.jsx("div", {
            className: "bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 mb-6",
            children: i.jsxs("div", {
              className: "flex items-center justify-center gap-3",
              children: [i.jsx($s, {
                className: "h-6 w-6 text-orange-600 animate-pulse"
              }), i.jsxs("div", {
                className: "text-center",
                children: [i.jsx("p", {
                  className: "text-sm text-muted-foreground mb-1",
                  children: "Pagamento da taxa se expira em:"
                }), i.jsx("p", {
                  className: "text-3xl font-bold text-orange-600 font-mono",
                  children: b(n)
                })]
              })]
            })
          }), i.jsx(ie, {
            className: "w-full h-14 text-lg bg-green-600 hover:bg-green-700",
            onClick: h,
            disabled: a || n === 0,
            children: a ? "Processando..." : "GERAR PIX"
          }), i.jsxs("div", {
            className: "flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground",
            children: [i.jsxs("div", {
              className: "flex items-center gap-2",
              children: [i.jsx(ys, {
                className: "h-4 w-4 text-green-600"
              }), i.jsx("span", {
                children: "100% Seguro"
              })]
            }), i.jsxs("div", {
              className: "flex items-center gap-2",
              children: [i.jsx(E2, {
                className: "h-4 w-4 text-green-600"
              }), i.jsx("span", {
                children: "Dados Protegidos"
              })]
            })]
          }), i.jsx("p", {
            className: "text-center text-xs text-muted-foreground mt-4",
            children: "🔒 Pagamento 100% seguro | ✅ Pedido liberado imediatamente após confirmação"
          })]
        })]
      }), i.jsx(Ef, {
        isOpen: o,
        onClose: () => s(!1),
        pixCode: c,
        transactionId: d,
        amount: 29.9,
        redirectTo: "/upsell2",
        isUpsell: !0,
        orderDetails: {
          productName: "Liberação Alfandegária Expressa",
          productImage: RR,
          quantity: 1,
          unitPrice: 29.9,
          subtotal: 29.9,
          discount: 0,
          shipping: 0,
          total: 29.9
        }
      })]
    })
  },
  AR = () => {
    const e = hn(),
      {
        toast: t
      } = tr(),
      [n, r] = m.useState(29 * 60 + 57),
      [o, s] = m.useState(!1),
      [a, l] = m.useState(!1),
      [c, u] = m.useState(""),
      [d, p] = m.useState(""),
      [v, f] = m.useState(null);
    m.useEffect(() => {
      window.scrollTo(0, 0);
      const h = localStorage.getItem("customer-data");
      if (h) try {
        f(JSON.parse(h))
      } catch (x) {
        console.error("Error loading customer data:", x)
      }
      const y = setInterval(() => {
        r(x => x <= 0 ? (clearInterval(y), 0) : x - 1)
      }, 1e3);
      return Re("ViewContent", {
        content_id: "emissao-nota-fiscal",
        description: "Taxa de Emissão da Nota Fiscal (TENF)",
        quantity: 1,
        value: 17.2,
        currency: "BRL"
      }), () => clearInterval(y)
    }, []);
    const b = async () => {
      if (!v) {
        t({
          title: "Erro",
          description: "Dados do cliente não encontrados. Por favor, complete o checkout primeiro.",
          variant: "destructive"
        }), e(`https://checkout.casaboreal.site/checkout?product=6ae74748-ba99-11f0-a710-46da4690ad53${window.location.search}`);
        return
      }
      l(!0), Re("AddToCart", {
        content_id: "emissao-nota-fiscal",
        description: "Taxa de Emissão da Nota Fiscal (TENF)",
        quantity: 1,
        value: 17.2,
        currency: "BRL"
      });
      try {
        const h = Pl(),
          y = {
            amount: 1720,
            description: "Curso de DJ 2.0",
            customer: {
              name: v.name,
              document: v.cpf.replace(/\D/g, ""),
              email: v.email,
              phone: v.phone.replace(/\D/g, "")
            },
            item: {
              title: "Curso de DJ 2.0",
              price: 1720,
              quantity: 1
            },
            paymentMethod: "PIX"
          };
        h && (y.utm = h), console.log("Enviando dados para a API PIX:", y);
        const g = await (await fetch(
          "https://app.duttyfy.com.br/api-pix/4MgmIjFaI1qAtVuiVl2gfbWw1hWilaak9L8a-PnKKV2Z1VcZico-6ux_UrXculbv_9QeiS5xQ5v5UgWgegbH4Q", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(y)
          })).json();
        if (console.log("Resposta da API PIX:", g), g.error || !g
          .transactionId || !g.pixCode) throw new Error(g.error ||
          "Erro ao gerar PIX");
        u(g.pixCode), p(g.transactionId), s(!0), Re("Purchase", {
          content_id: "emissao-nota-fiscal",
          description: "Taxa de Emissão da Nota Fiscal (TENF)",
          quantity: 1,
          value: 17.2,
          currency: "BRL"
        })
      } catch (h) {
        console.error("Error generating PIX:", h), t({
          title: "Erro",
          description: h instanceof Error ? h.message :
            "Erro ao gerar PIX. Tente novamente.",
          variant: "destructive"
        })
      } finally {
        l(!1)
      }
    };
    return i.jsxs("div", {
      className: "min-h-screen bg-white",
      children: [i.jsx("header", {
        className: "border-b bg-white shadow-sm"
      }), i.jsxs("div", {
        className: "container mx-auto px-4 py-8 max-w-md",
        children: [i.jsx("div", {
          className: "text-center mb-6",
          children: i.jsx("img", {
            src: Iy,
            alt: "NFe",
            className: "h-24 mx-auto"
          })
        }), i.jsxs("div", {
          className: "text-center mb-6",
          children: [i.jsx("h1", {
            className: "text-2xl font-bold text-gray-900 mb-4",
            children: "Seu pedido foi realizado com sucesso!"
          }), i.jsxs("p", {
            className: "text-gray-600 text-sm leading-relaxed",
            children: [
              "Seu pedido foi realizado! Mas para emissão da sua nota fiscal é necessário o pagamento da taxa",
              " ", i.jsx("span", {
                className: "text-green-600 font-semibold",
                children: "TENF (Taxa de Emissão da Nota Fiscal)"
              }), ", no valor único de", " ", i.jsx(
                "span", {
                  className: "font-semibold",
                  children: "R$ 17,20"
                }), "."
            ]
          })]
        }), i.jsxs(ro, {
          className: "bg-red-500 text-white p-6 mb-8 border-0 shadow-lg",
          children: [i.jsx("h2", {
            className: "text-xl font-bold text-center mb-3",
            children: "AVISO"
          }), i.jsx("p", {
            className: "text-center text-sm leading-relaxed",
            children: "O não pagamento da TENF resultará no cancelamento do pedido e anotação no CPF."
          })]
        }), i.jsxs("div", {
          className: "space-y-4 mb-8",
          children: [i.jsxs("div", {
            className: "flex gap-4",
            children: [i.jsxs("div", {
              className: "flex flex-col items-center",
              children: [i.jsx("div", {
                className: "w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0",
                children: i.jsx(dt, {
                  className: "h-6 w-6 text-white"
                })
              }), i.jsx("div", {
                className: "w-0.5 h-16 bg-gray-200 mt-2"
              })]
            }), i.jsxs("div", {
              className: "flex-1 pt-2",
              children: [i.jsx("h3", {
                className: "font-semibold text-green-600 text-base",
                children: "Pedido Realizado"
              }), i.jsx("p", {
                className: "text-sm text-gray-500",
                children: v != null && v
                  .address ?
                  `${v.address.city}/${v.address.state}` :
                  "São Bernardo do Campo/SE"
              }), i.jsx("p", {
                className: "text-xs text-gray-400",
                children: "21/10/2025 22:34"
              })]
            })]
          }), i.jsxs("div", {
            className: "flex gap-4",
            children: [i.jsxs("div", {
              className: "flex flex-col items-center",
              children: [i.jsx("div", {
                className: "w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0",
                children: i.jsx(ol, {
                  className: "h-6 w-6 text-white"
                })
              }), i.jsx("div", {
                className: "w-0.5 h-16 bg-gray-200 mt-2"
              })]
            }), i.jsxs("div", {
              className: "flex-1 pt-2",
              children: [i.jsx("h3", {
                className: "font-semibold text-green-600 text-base",
                children: "Pedido pronto para envio"
              }), i.jsx("p", {
                className: "text-sm text-gray-500",
                children: v != null && v
                  .address ?
                  `${v.address.city}/${v.address.state}` :
                  "São Bernardo do Campo/SE"
              }), i.jsx("p", {
                className: "text-xs text-gray-400",
                children: "21/10/2025 22:34"
              })]
            })]
          }), i.jsxs("div", {
            className: "flex gap-4",
            children: [i.jsxs("div", {
              className: "flex flex-col items-center",
              children: [i.jsx("div", {
                className: "w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0",
                children: i.jsx(fr, {
                  className: "h-6 w-6 text-white"
                })
              }), i.jsx("div", {
                className: "w-0.5 h-16 bg-gray-200 mt-2"
              })]
            }), i.jsxs("div", {
              className: "flex-1 pt-2",
              children: [i.jsx("h3", {
                className: "font-semibold text-red-600 text-base",
                children: "Taxa de nota fiscal"
              }), i.jsx("p", {
                className: "text-sm text-red-500",
                children: "Aguardando pagamento da taxa TENF"
              })]
            })]
          }), i.jsxs("div", {
            className: "flex gap-4",
            children: [i.jsxs("div", {
              className: "flex flex-col items-center",
              children: [i.jsx("div", {
                className: "w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0",
                children: i.jsx(Bv, {
                  className: "h-6 w-6 text-gray-500"
                })
              }), i.jsx("div", {
                className: "w-0.5 h-16 bg-gray-200 mt-2"
              })]
            }), i.jsxs("div", {
              className: "flex-1 pt-2",
              children: [i.jsx("h3", {
                className: "font-semibold text-gray-500 text-base",
                children: "Em trânsito"
              }), i.jsx("p", {
                className: "text-sm text-gray-400",
                children: "Passo anterior não concluído"
              })]
            })]
          }), i.jsxs("div", {
            className: "flex gap-4",
            children: [i.jsx("div", {
              className: "flex flex-col items-center",
              children: i.jsx("div", {
                className: "w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0",
                children: i.jsx(dt, {
                  className: "h-6 w-6 text-gray-500"
                })
              })
            }), i.jsxs("div", {
              className: "flex-1 pt-2",
              children: [i.jsx("h3", {
                className: "font-semibold text-gray-500 text-base",
                children: "Pedido Entregue"
              }), i.jsx("p", {
                className: "text-sm text-gray-400",
                children: "Passo anterior não concluído"
              })]
            })]
          })]
        }), i.jsx("div", {
          className: "bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8",
          children: i.jsxs("p", {
            className: "text-sm text-gray-700 text-center leading-relaxed",
            children: [
              "O não pagamento da Nota Fiscal resulta no cancelamento do pedido, ",
              i.jsx("span", {
                className: "font-semibold",
                children: "impossibilitando novas compras por um prazo máximo de 90 dias"
              }), " e anotação no CPF."
            ]
          })
        }), i.jsxs("div", {
          className: "text-center mb-6",
          children: [i.jsx("h2", {
            className: "text-2xl font-bold text-gray-900 mb-2",
            children: "Pague via Pix"
          }), i.jsx("p", {
            className: "text-gray-600 mb-4",
            children: "O pagamento será confirmado imediatamente"
          }), i.jsx("div", {
            className: "text-5xl font-bold text-green-600 mb-6",
            children: "R$ 17,20"
          })]
        }), i.jsx(ie, {
          className: "w-full h-14 text-lg bg-green-600 hover:bg-green-700 mb-4",
          onClick: b,
          disabled: a || n === 0,
          children: a ? "Processando..." : "Efetuar pagamento"
        }), i.jsxs("div", {
          className: "flex items-center justify-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg py-3 px-4 border border-gray-200",
          children: [i.jsx(ys, {
            className: "w-5 h-5 text-green-600"
          }), i.jsx("span", {
            className: "font-medium",
            children: "Pagamento 100% Seguro"
          })]
        })]
      }), i.jsx(Ef, {
        isOpen: o,
        onClose: () => s(!1),
        pixCode: c,
        transactionId: d,
        amount: 17.2,
        redirectTo: "/upsell3",
        isUpsell: !0,
        orderDetails: {
          productName: "Taxa de Emissão da Nota Fiscal (TENF)",
          productImage: "",
          quantity: 1,
          unitPrice: 17.2,
          subtotal: 17.2,
          discount: 0,
          shipping: 0,
          total: 17.2
        }
      })]
    })
  },
  _R = () => {
    const e = hn(),
      {
        toast: t
      } = tr(),
      [n, r] = m.useState(14 * 60 + 57),
      [o, s] = m.useState(!1),
      [a, l] = m.useState(!1),
      [c, u] = m.useState(""),
      [d, p] = m.useState(""),
      [v, f] = m.useState(null);
    m.useEffect(() => {
      window.scrollTo(0, 0);
      const h = localStorage.getItem("customer-data");
      if (h) try {
        f(JSON.parse(h))
      } catch (x) {
        console.error("Error loading customer data:", x)
      }
      const y = setInterval(() => {
        r(x => x <= 0 ? (clearInterval(y), 0) : x - 1)
      }, 1e3);
      return Re("ViewContent", {
        content_id: "retry-payment",
        description: "Taxa de Emissão da Nota Fiscal - Recuperação",
        quantity: 1,
        value: 17.2,
        currency: "BRL"
      }), () => clearInterval(y)
    }, []);
    const b = async () => {
      if (!v) {
        t({
          title: "Erro",
          description: "Dados do cliente não encontrados. Por favor, complete o checkout primeiro.",
          variant: "destructive"
        }), e(`https://checkout.casaboreal.site/checkout?product=6ae74748-ba99-11f0-a710-46da4690ad53${window.location.search}`);
        return
      }
      l(!0), Re("AddToCart", {
        content_id: "retry-payment",
        description: "Taxa de Emissão da Nota Fiscal - Recuperação",
        quantity: 1,
        value: 17.2,
        currency: "BRL"
      });
      try {
        const h = Pl(),
          y = {
            amount: 1720,
            description: "Curso de DJ 2.0",
            customer: {
              name: v.name,
              document: v.cpf.replace(/\D/g, ""),
              email: v.email,
              phone: v.phone.replace(/\D/g, "")
            },
            item: {
              title: "Curso de DJ 2.0",
              price: 1720,
              quantity: 1
            },
            paymentMethod: "PIX"
          };
        h && (y.utm = h), console.log("Enviando dados para a API PIX:", y);
        const g = await (await fetch(
          "https://app.duttyfy.com.br/api-pix/4MgmIjFaI1qAtVuiVl2gfbWw1hWilaak9L8a-PnKKV2Z1VcZico-6ux_UrXculbv_9QeiS5xQ5v5UgWgegbH4Q", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(y)
          })).json();
        if (console.log("Resposta da API PIX:", g), g.error || !g
          .transactionId || !g.pixCode) throw new Error(g.error ||
          "Erro ao gerar PIX");
        u(g.pixCode), p(g.transactionId), s(!0), Re("Purchase", {
          content_id: "retry-payment",
          description: "Taxa de Emissão da Nota Fiscal (TENF) - Recuperação",
          quantity: 1,
          value: 17.2,
          currency: "BRL"
        })
      } catch (h) {
        console.error("Error generating PIX:", h), t({
          title: "Erro",
          description: h instanceof Error ? h.message :
            "Erro ao gerar PIX. Tente novamente.",
          variant: "destructive"
        })
      } finally {
        l(!1)
      }
    };
    return i.jsxs("div", {
      className: "min-h-screen bg-gray-50",
      children: [i.jsxs("div", {
        className: "container mx-auto px-4 py-8 max-w-md",
        children: [i.jsx("div", {
          className: "text-center mb-6",
          children: i.jsxs("div", {
            className: "relative w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center",
            children: [i.jsx("div", {
              className: "absolute inset-0 bg-blue-500/10 rounded-2xl transform rotate-6"
            }), i.jsxs("div", {
              className: "relative",
              children: [i.jsx(g2, {
                className: "w-24 h-24 text-blue-600 mb-2"
              }), i.jsx("div", {
                className: "absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center",
                children: i.jsx(fr, {
                  className: "w-6 h-6 text-white"
                })
              })]
            })]
          })
        }), i.jsx("div", {
          className: "flex justify-center mb-4",
          children: i.jsxs("div", {
            className: "inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full",
            children: [i.jsx(fr, {
              className: "w-4 h-4 text-red-600"
            }), i.jsx("span", {
              className: "text-red-600 font-semibold text-sm",
              children: "Erro"
            })]
          })
        }), i.jsx("h1", {
          className: "text-3xl font-bold text-red-600 text-center mb-4",
          children: "Erro no Pagamento"
        }), i.jsx("p", {
          className: "text-gray-700 text-center mb-2 font-semibold",
          children: "Infelizmente, não conseguimos processar seu pagamento."
        }), i.jsx("p", {
          className: "text-gray-600 text-center text-sm mb-6",
          children: "Isso pode ter ocorrido por algum erro na transação ou na sua conexão."
        }), i.jsx("div", {
          className: "bg-blue-50 border-2 border-blue-300 rounded-lg p-4 mb-4",
          children: i.jsxs("div", {
            className: "flex items-start gap-3",
            children: [i.jsx("div", {
              className: "w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0",
              children: i.jsx(b2, {
                className: "w-5 h-5 text-white"
              })
            }), i.jsxs("div", {
              children: [i.jsx("h3", {
                className: "font-bold text-blue-900 mb-2",
                children: "O que aconteceu com meu pagamento?"
              }), i.jsx("p", {
                className: "text-sm text-blue-800 leading-relaxed",
                children: "Se o valor foi debitado da sua conta, provavelmente ocorreu uma falha temporária no Sistema de Pagamentos Instantâneos (SPI) do Banco Central do Brasil. Este tipo de inconsistência ocorre em menos de 0,1% das transações."
              })]
            })]
          })
        }), i.jsx("div", {
          className: "bg-green-50 border-2 border-green-300 rounded-lg p-4 mb-4",
          children: i.jsxs("div", {
            className: "flex items-start gap-3",
            children: [i.jsx("div", {
              className: "w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0",
              children: i.jsx(ys, {
                className: "w-5 h-5 text-white"
              })
            }), i.jsxs("div", {
              children: [i.jsx("h3", {
                className: "font-bold text-green-900 mb-2",
                children: "✓ Garantia de Ressarcimento Automático"
              }), i.jsx("p", {
                className: "text-sm text-green-800 leading-relaxed mb-3",
                children: "Você pode realizar o pagamento novamente com total segurança! Se a primeira transação foi processada, o ressarcimento acontece automaticamente."
              }), i.jsxs("div", {
                className: "space-y-2 text-xs text-green-700",
                children: [i.jsxs("div", {
                  className: "flex items-start gap-2",
                  children: [i.jsx($s, {
                    className: "w-4 h-4 flex-shrink-0 mt-0.5"
                  }), i.jsxs("div", {
                    children: [i
                      .jsx(
                      "span", {
                        className: "font-semibold",
                        children: "Prazo:"
                      }),
                      " Estorno automático em até 24 horas úteis"
                    ]
                  })]
                }), i.jsxs("div", {
                  className: "flex items-start gap-2",
                  children: [i.jsx(ys, {
                    className: "w-4 h-4 flex-shrink-0 mt-0.5"
                  }), i.jsxs("div", {
                    children: [i
                      .jsx(
                      "span", {
                        className: "font-semibold",
                        children: "Proteção:"
                      }),
                      " Sistema anti-duplicidade do Banco Central"
                    ]
                  })]
                }), i.jsxs("div", {
                  className: "flex items-start gap-2",
                  children: [i.jsx(dt, {
                    className: "w-4 h-4 flex-shrink-0 mt-0.5"
                  }), i.jsxs("div", {
                    children: [i
                      .jsx(
                      "span", {
                        className: "font-semibold",
                        children: "Garantia:"
                      }),
                      " Protocolo de ressarcimento enviado por e-mail"
                    ]
                  })]
                })]
              }), i.jsx("p", {
                className: "text-xs text-green-700 mt-3 italic",
                children: "Procedimento regulamentado pela Resolução BCB nº 1 de 2020 - Banco Central do Brasil"
              })]
            })]
          })
        }), i.jsx("p", {
          className: "text-gray-700 text-center text-sm mb-3",
          children: "Clique no botão abaixo para realizar uma nova tentativa de pagamento"
        }), i.jsxs("div", {
          className: "flex items-center justify-center gap-2 mb-6",
          children: [i.jsx(dt, {
            className: "w-5 h-5 text-green-600"
          }), i.jsx("span", {
            className: "text-green-600 font-semibold text-sm",
            children: "Processo validado pelo Banco Central do Brasil"
          })]
        }), i.jsx(ie, {
          className: "w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold mb-4",
          onClick: b,
          disabled: a,
          children: a ? "Processando..." : "Tentar Novamente"
        }), i.jsxs("div", {
          className: "flex items-center justify-center gap-2 text-sm text-green-600",
          children: [i.jsx(ys, {
            className: "w-5 h-5"
          }), i.jsx("span", {
            className: "font-semibold",
            children: "Ambiente seguro"
          })]
        })]
      }), i.jsx(Ef, {
        isOpen: o,
        onClose: () => s(!1),
        pixCode: c,
        transactionId: d,
        amount: 17.2,
        redirectTo: "/thank-you",
        isUpsell: !0,
        orderDetails: {
          productName: "Taxa de Emissão da Nota Fiscal (TENF)",
          productImage: "",
          quantity: 1,
          unitPrice: 17.2,
          subtotal: 17.2,
          discount: 0,
          shipping: 0,
          total: 17.2
        }
      })]
    })
  };

function MR() {
  return hn(), m.useEffect(() => {
    window.scrollTo(0, 0);
    const e = localStorage.getItem("orderData");
    if (e) try {
      const n = JSON.parse(e);
      Re("Purchase", {
        content_id: n.product_id || "hoverboard-skate-eletrico",
        description: n.product_name || "Produto",
        quantity: n.quantity || 1,
        value: n.total_amount || 0,
        currency: "BRL"
      })
    } catch (n) {
      console.error(
        "Erro ao processar dados do pedido para evento Purchase:", n)
    }
    window.history.pushState(null, "", window.location.href);
    const t = () => {
      window.history.pushState(null, "", window.location.href)
    };
    return window.addEventListener("popstate", t), () => {
      window.removeEventListener("popstate", t)
    }
  }, []), i.jsx("div", {
    className: "min-h-screen bg-gradient-to-br from-background via-muted/20 to-sale-orange/5 py-12 px-4",
    children: i.jsx("div", {
      className: "max-w-2xl mx-auto",
      children: i.jsxs("div", {
        className: "relative bg-gradient-to-br from-card to-card/80 border-2 border-sale-orange/20 rounded-2xl p-8 shadow-2xl overflow-hidden",
        children: [i.jsx("div", {
          className: "absolute top-0 right-0 w-64 h-64 bg-sale-orange/5 rounded-full blur-3xl"
        }), i.jsx("div", {
          className: "absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        }), i.jsxs("div", {
          className: "relative space-y-6 text-center",
          children: [i.jsx("div", {
            className: "flex justify-center",
            children: i.jsxs("div", {
              className: "relative",
              children: [i.jsx("div", {
                className: "absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"
              }), i.jsx("div", {
                className: "relative bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-full",
                children: i.jsx(dt, {
                  className: "h-16 w-16 text-white"
                })
              })]
            })
          }), i.jsxs("div", {
            className: "space-y-2",
            children: [i.jsx("h1", {
              className: "text-3xl font-bold bg-gradient-to-r from-foreground to-sale-orange bg-clip-text text-transparent",
              children: "Pagamento Confirmado!"
            }), i.jsx("p", {
              className: "text-lg text-muted-foreground",
              children: "Obrigado pela sua compra"
            })]
          }), i.jsxs("div", {
            className: "bg-gradient-to-br from-muted/80 to-muted/40 p-6 rounded-xl border border-sale-orange/10",
            children: [i.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-4",
              children: [i.jsx(ol, {
                className: "h-6 w-6 text-sale-orange"
              }), i.jsx("h2", {
                className: "text-xl font-semibold",
                children: "Status do Pedido"
              })]
            }), i.jsx("p", {
              className: "text-muted-foreground leading-relaxed",
              children: "Seu pedido está sendo processado e será embalado em breve para envio. Você receberá atualizações sobre o status do seu pedido por e-mail."
            })]
          }), i.jsxs("div", {
            className: "bg-gradient-to-br from-muted/80 to-muted/40 p-6 rounded-xl border border-sale-orange/10 text-left",
            children: [i.jsx("h3", {
              className: "font-semibold mb-4 text-center",
              children: "Próximos Passos:"
            }), i.jsxs("div", {
              className: "space-y-3",
              children: [i.jsxs("div", {
                className: "flex items-start gap-3",
                children: [i.jsx("div", {
                  className: "min-w-[24px] h-6 rounded-full bg-green-500 flex items-center justify-center",
                  children: i.jsx(
                  dt, {
                    className: "h-4 w-4 text-white"
                  })
                }), i.jsxs("div", {
                  children: [i.jsx(
                    "p", {
                      className: "font-medium",
                      children: "Pagamento Confirmado"
                    }), i.jsx(
                  "p", {
                    className: "text-sm text-muted-foreground",
                    children: "Seu pagamento foi processado com sucesso"
                  })]
                })]
              }), i.jsxs("div", {
                className: "flex items-start gap-3",
                children: [i.jsx("div", {
                  className: "min-w-[24px] h-6 rounded-full bg-sale-orange flex items-center justify-center",
                  children: i.jsx(
                    "div", {
                      className: "h-2 w-2 rounded-full bg-white animate-pulse"
                    })
                }), i.jsxs("div", {
                  children: [i.jsx(
                    "p", {
                      className: "font-medium",
                      children: "Processando Pedido"
                    }), i.jsx(
                  "p", {
                    className: "text-sm text-muted-foreground",
                    children: "Estamos preparando seu produto"
                  })]
                })]
              }), i.jsxs("div", {
                className: "flex items-start gap-3",
                children: [i.jsx("div", {
                  className: "min-w-[24px] h-6 rounded-full bg-sale-orange flex items-center justify-center",
                  children: i.jsx(
                    "div", {
                      className: "h-2 w-2 rounded-full bg-white animate-pulse"
                    })
                }), i.jsxs("div", {
                  children: [i.jsx(
                    "p", {
                      className: "font-medium text-muted-foreground",
                      children: "Embalagem"
                    }), i.jsx(
                  "p", {
                    className: "text-sm text-muted-foreground",
                    children: "Seu pedido será embalado"
                  })]
                })]
              }), i.jsxs("div", {
                className: "flex items-start gap-3",
                children: [i.jsx("div", {
                  className: "min-w-[24px] h-6 rounded-full bg-sale-orange flex items-center justify-center",
                  children: i.jsx(
                    "div", {
                      className: "h-2 w-2 rounded-full bg-white animate-pulse"
                    })
                }), i.jsxs("div", {
                  children: [i.jsx(
                    "p", {
                      className: "font-medium text-muted-foreground",
                      children: "Envio"
                    }), i.jsx(
                  "p", {
                    className: "text-sm text-muted-foreground",
                    children: "Você receberá o código de rastreamento em seu e-mail"
                  })]
                })]
              })]
            })]
          }), i.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: "Em caso de dúvidas, entre em contato com nosso suporte."
          })]
        })]
      })
    })
  })
}
const OR = () => {
    const e = Ho();
    return m.useEffect(() => {
      console.error(
        "404 Error: User attempted to access non-existent route:", e
        .pathname)
    }, [e.pathname]), i.jsx("div", {
      className: "flex min-h-screen items-center justify-center bg-gray-100",
      children: i.jsxs("div", {
        className: "text-center",
        children: [i.jsx("h1", {
          className: "mb-4 text-4xl font-bold",
          children: "404"
        }), i.jsx("p", {
          className: "mb-4 text-xl text-gray-600",
          children: "Oops! Page not found"
        }), i.jsx("a", {
          href: "/",
          className: "text-blue-500 underline hover:text-blue-700",
          children: "Return to Home"
        })]
      })
    })
  },
  LR = new ZC,
  DR = () => i.jsx(tS, {
    client: LR,
    children: i.jsxs(RC, {
      children: [i.jsx(dN, {}), i.jsx(VN, {}), i.jsx(qS, {
        children: i.jsxs(WS, {
          children: [i.jsx(en, {
            path: "/",
            element: i.jsx(Bx, {})
          }), i.jsx(en, {
            path: "/aqui",
            element: i.jsx(Pk, {})
          }), i.jsx(en, {
            path: "/payment",
            element: i.jsx(ER, {})
          }), i.jsx(en, {
            path: "/upsell",
            element: i.jsx(IR, {})
          }), i.jsx(en, {
            path: "/upsell2",
            element: i.jsx(AR, {})
          }), i.jsx(en, {
            path: "/upsell3",
            element: i.jsx(_R, {})
          }), i.jsx(en, {
            path: "/thank-you",
            element: i.jsx(MR, {})
          }), i.jsx(en, {
            path: "*",
            element: i.jsx(OR, {})
          })]
        })
      })]
    })
  });
cv(document.getElementById("root")).render(i.jsx(DR, {}));
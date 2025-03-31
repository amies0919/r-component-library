import re from "react";
var T = { exports: {} }, v = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function te() {
  if (D) return v;
  D = 1;
  var o = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function l(u, s, i) {
    var b = null;
    if (i !== void 0 && (b = "" + i), s.key !== void 0 && (b = "" + s.key), "key" in s) {
      i = {};
      for (var R in s)
        R !== "key" && (i[R] = s[R]);
    } else i = s;
    return s = i.ref, {
      $$typeof: o,
      type: u,
      key: b,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return v.Fragment = c, v.jsx = l, v.jsxs = l, v;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ne() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : o(e.type) || "Memo";
          case N:
            r = e._payload, e = e._init;
            try {
              return o(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function l(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), c(e);
      }
    }
    function u(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var r = o(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = x.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (g.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function R(e, r) {
      function t() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function L() {
      var e = o(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, d, f, O, A) {
      return t = f.ref, e = {
        $$typeof: w,
        type: e,
        key: r,
        props: f,
        _owner: d
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: L
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function S(e, r, t, n, d, f, O, A) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (K(a)) {
            for (n = 0; n < a.length; n++)
              P(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(a);
      if (g.call(r, "key")) {
        a = o(e);
        var E = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", $[a + n] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          E,
          a
        ), $[a + n] = !0);
      }
      if (a = null, t !== void 0 && (l(t), a = "" + t), b(r) && (l(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var h in r)
          h !== "key" && (t[h] = r[h]);
      } else t = r;
      return a && R(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        a,
        f,
        d,
        s(),
        t,
        O,
        A
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var p = re, w = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), x = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, K = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var y, C = {}, Y = p["react-stack-bottom-frame"].bind(
      p,
      i
    )(), I = j(u(i)), $ = {};
    _.Fragment = k, _.jsx = function(e, r, t, n, d) {
      var f = 1e4 > x.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !1,
        n,
        d,
        f ? Error("react-stack-top-frame") : Y,
        f ? j(u(e)) : I
      );
    }, _.jsxs = function(e, r, t, n, d) {
      var f = 1e4 > x.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !0,
        n,
        d,
        f ? Error("react-stack-top-frame") : Y,
        f ? j(u(e)) : I
      );
    };
  }()), _;
}
var M;
function ae() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? T.exports = te() : T.exports = ne()), T.exports;
}
var m = ae();
function se({ variant: o, onClick: c, children: l }) {
  return /* @__PURE__ */ m.jsx("button", { className: `btn btn-${o}`, onClick: c, children: l });
}
function le({
  type: o,
  placeholder: c,
  value: l,
  onChange: u
}) {
  return /* @__PURE__ */ m.jsx(
    "input",
    {
      type: o,
      placeholder: c,
      value: l,
      onChange: u
    }
  );
}
function ce({
  title: o,
  isOpen: c,
  onClose: l,
  renderFooter: u,
  children: s
}) {
  return c ? /* @__PURE__ */ m.jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ m.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ m.jsx("h2", { className: "modal-title", children: o }),
    /* @__PURE__ */ m.jsx("div", { className: "modal-content", children: s }),
    u && /* @__PURE__ */ m.jsx("div", { className: "modal-footer", children: u() }),
    /* @__PURE__ */ m.jsx("button", { className: "modal-close", onClick: l, children: "X" })
  ] }) }) : null;
}
const ue = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71"
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px"
  }
};
export {
  se as Button,
  le as Input,
  ce as Modal,
  ue as defaultTheme
};

import {
    e as v,
    j as g,
    i as x,
    x as f,
    L as h,
    B as y,
    c as d,
    b as r,
    F as u,
    z as S,
    h as k,
    a as _,
    V as w,
    w as V,
    o as l,
    A as B,
    d as I,
    O as D,
    P as C
} from "./index.16ec0bdc.js"; /* empty css              */ /* empty css               */
import {
    _ as N
} from "./plugin-vue_export-helper.21dcd24c.js";
const A = t => (D("data-v-41772a5a"), t = t(), C(), t),
    F = A(() => r("div", {
        class: "msg-title text-slate-900 dark:text-slate-100"
    }, "\u63A7\u5236\u53F0", -1)),
    b = {
        class: "msg",
        id: "msg"
    },
    E = {
        class: "cmd"
    },
    K = v({
        __name: "index",
        setup(t) {
            const s = g(),
                o = x("");

            function c() {
                const e = {
                        type: "CMD",
                        data: o.value
                    },
                    a = JSON.stringify(e);
                s.socketSend(a)
            }
            return f(() => s.mesgData, () => {
                var e = document.getElementById("msg");
                e && (e.scrollTop = e.scrollHeight + 30)
            }, {
                immediate: !0,
                deep: !0
            }), (e, a) => {
                const i = h,
                    p = y;
                return l(), d(u, null, [F, r("div", b, [(l(!0), d(u, null, S(k(s).mesgData, (n, m) => (l(), d("p", {
                    class: "text-slate-900 dark:text-slate-100",
                    key: m
                }, B(n), 1))), 128))]), r("div", E, [_(i, {
                    modelValue: o.value,
                    "onUpdate:modelValue": a[0] || (a[0] = n => o.value = n),
                    placeholder: "",
                    "allow-clear": "",
                    onKeydown: w(c, ["enter"])
                }, null, 8, ["modelValue"]), _(p, {
                    type: "outline",
                    onClick: c
                }, {
                    default: V(() => [I("\u53D1\u9001")]),
                    _: 1
                })])], 64)
            }
        }
    });
var z = N(K, [
    ["__scopeId", "data-v-41772a5a"]
]);
export {
    z as
    default
};
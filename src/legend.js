var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import h from "snabbdom/h";
import { patch } from "./vdom";
import { dispatch } from "d3-dispatch";
import { format } from "d3-format";
var commafy = function (d) {
    return typeof d === "number" ? format(",")(parseFloat(d.toFixed(2))) : d;
};
var formatNumber = function (d) {
    if (String(d).length <= 4) {
        return commafy(d);
    }
    else if (d < 0.0001) {
        return format(".2")(d);
    }
    else {
        return format(".2s")(d);
    }
};
function rangeStep(domain, index, bins) {
    if (bins === void 0) { bins = 9; }
    if (index === 0) {
        return domain[0];
    }
    else if (index + 1 === bins) {
        return domain[1];
    }
    else {
        var increment = (domain[1] - domain[0]) / bins;
        return domain[0] + increment * index;
    }
}
function validateNumericalInput(previousValue, nextValue) {
    if (isNaN(parseFloat(nextValue))) {
        return parseFloat(previousValue);
    }
    else {
        return parseFloat(nextValue);
    }
}
function renderTickIcon(state, dispatch) {
    var _this = this;
    return h("div.tick", {
        on: { click: function () { return dispatch.call("open", _this, state.index); } }
    });
}
function renderToggleIcon(state, dispatch) {
    var _this = this;
    return h("div.open-toggle", {
        on: {
            click: function () {
                dispatch.call("toggle", _this, state);
            }
        }
    });
}
function renderLockIcon(locked, index, dispatch) {
    var _this = this;
    return h("div.lock" + (locked ? ".locked" : ".unlocked"), { on: { click: function () { return dispatch.call("lock", _this, { locked: locked, index: index }); } } }, [
        h("svg", { attrs: { viewBox: [0, 0, 48, 48] } }, [
            h("g", { style: { stroke: "white" } }, [
                h("path", {
                    attrs: {
                        d: locked
                            ? "M34,20v-4c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10v4H8v20h32V20H34z M18,16c0-3.3,2.7-6,6-6s6,2.7,6,6v4H18V16z"
                            : "M18,20v-8c0-3.3,2.7-6,6-6s6,2.7,6,6v2h4v-2c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10v8H8v20h32V20H18z"
                    }
                })
            ])
        ])
    ]);
}
function renderSortIcon(state, dispatch) {
    var _this = this;
    return h("div.sort", {
        on: { click: function () { return dispatch.call("sort", _this, state.index); } }
    }, [
        h("svg", {
            attrs: {
                width: 22,
                height: 10,
                viewBox: "0 0 22 12",
                class: "sort-icon"
            }
        }, [
            h("svg", {
                attrs: {
                    viewBox: "0 0 512 512",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [
                h("g", {}, [
                    h("g", {}, [
                        h("path", {
                            attrs: {
                                d: "M261.294,326.102c-8.3-7.3-21.8-6.2-29.1,2.1l-77,86.8v-346.9c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v346.9l-77-86.8c-8.3-8.3-20.8-9.4-29.1-2.1c-8.3,8.3-9.4,20.8-2.1,29.1l113.4,126.9c8.5,10.5,23.5,8.9,30.2,0l114.4-126.9C270.694,347.002,269.694,333.402,261.294,326.102z"
                            }
                        }),
                        h("path", {
                            attrs: {
                                d: "M483.994,134.702l-112.4-126.9c-10-10.1-22.5-10.7-31.2,0l-114.4,126.9c-7.3,8.3-6.2,21.8,2.1,29.1c12.8,10.2,25.7,3.2,29.1-2.1l77-86.8v345.9c0,11.4,9.4,20.8,20.8,20.8s20.8-8.3,20.8-19.8v-346.8l77,86.8c8.3,8.3,20.8,9.4,29.1,2.1C490.194,155.502,491.294,143.002,483.994,134.702z"
                            }
                        })
                    ])
                ])
            ])
        ])
    ]);
}
function renderInput(state, domain, dispatch) {
    var _this = this;
    return h("input", {
        hook: {
            update: function (prevNode, nextNode) {
                nextNode.elm.value = domain.value;
            }
        },
        props: {
            value: domain.value
        },
        on: {
            focus: function (e) {
                e.target.select();
            },
            blur: function (e) {
                var value = validateNumericalInput(domain.value, e.target.value);
                var _a = state.domain, min = _a[0], max = _a[1];
                dispatch.call("input", _this, {
                    index: state.index,
                    domain: domain.index === 0 ? [value, max] : [min, value]
                });
            },
            keydown: function (e) {
                if (e.code === "Enter") {
                    e.target.blur();
                }
            }
        }
    });
}
export function renderGradientLegend(state, dispatch) {
    var stacked = typeof state.index === "number";
    return h("div.legend.gradient-legend" + (stacked ? ".with-header" : ".legendables") + (state.open ? ".open" : ".collapsed") + (state.position ? "." + state.position : ""), [
        stacked
            ? h("div.header", [
                h("div.title-text", state.title),
                renderTickIcon(state, dispatch)
            ])
            : h("div"),
        state.open
            ? h("div.range", __spreadArrays(state.range.map(function (color, index) {
                var isMinMax = index === 0 || index === state.range.length - 1;
                var step = Array.isArray(state.domain)
                    ? formatNumber(rangeStep(state.domain, index, state.range.length))
                    : null;
                var domain = Array.isArray(state.domain)
                    ? state.domain
                    : [null, null];
                var min = domain[0], max = domain[1];
                return h("div.block", [
                    h("div.color", { style: { background: color } }),
                    h("div.text." + (isMinMax ? "extent" : "step"), [
                        h("span", "" + (domain.length > 2 ? domain[index] : step))
                    ].concat(isMinMax
                        ? [
                            renderInput(state, {
                                value: domain.length === 2
                                    ? domain[index === 0 ? 0 : 1]
                                    : domain[index],
                                index: index
                            }, dispatch)
                        ]
                        : []))
                ]);
            })))
            : h("div"),
        state.open
            ? renderLockIcon(state.locked, state.index, dispatch)
            : h("div")
    ]);
}
export function renderNominalLegend(state, dispatch) {
    var _this = this;
    var stacked = typeof state.index === "number";
    return h("div.legend.nominal-legend" + (stacked ? "" : ".legendables") + (state.open ? ".open" : ".collapsed") + (state.position ? "." + state.position : ""), {
        on: {
            scroll: function (event) {
                var target = event.target;
                if (target.scrollHeight - target.scrollTop <=
                    target.clientHeight + 10) {
                    // Reached the bottom
                    dispatch.call("fetchDomain", _this, state.index ? state.index : 0, state.page ? state.page++ : 1);
                }
            }
        }
    }, [
        !stacked ? renderToggleIcon(state, dispatch) : h("div"),
        state.title &&
            h("div.header", [
                h("div.title-text", state.title),
                renderSortIcon(state, dispatch),
                renderTickIcon(state, dispatch)
            ]),
        state.open
            ? h("div.body", state.domain.map(function (value, index) {
                return h("div.legend-row", { on: { click: function () { return dispatch.call("filter", _this, value); } } }, [
                    h("div.color", {
                        style: { background: state.range[index] }
                    }),
                    h("div.text", "" + value)
                ]);
            }))
            : h("div")
    ]);
}
export function renderStackedLegend(state, dispatch) {
    return h("div.legendables" + (state.open ? ".open" : ".collapsed") + (state.list.length > 1 ? ".show-ticks" : ""), { style: { maxHeight: state.maxHeight + "px" } }, [renderToggleIcon(state, dispatch)].concat(state.list.map(function (legend, index) {
        if (legend.type === "gradient") {
            return renderGradientLegend(__assign(__assign({}, legend), { index: index }), dispatch);
        }
        else if (legend.type === "nominal") {
            return renderNominalLegend(__assign(__assign({}, legend), { index: index }), dispatch);
        }
    })));
}
var Legend = /** @class */ (function () {
    function Legend(node) {
        var _this = this;
        this.setState = function (state) {
            if (typeof state === "function") {
                _this.state = state(_this.state);
            }
            else {
                _this.state = state;
            }
            var vnode;
            if (_this.state.type === "gradient") {
                vnode = renderGradientLegend(_this.state, _this.dispatch);
            }
            else if (_this.state.type === "nominal") {
                vnode = renderNominalLegend(_this.state, _this.dispatch);
            }
            else if (_this.state.type === "stacked") {
                vnode = renderStackedLegend(_this.state, _this.dispatch);
            }
            else {
                vnode = h("div");
            }
            _this.node = patch(_this.node, vnode);
            _this.dispatch.call("doneRender", _this, state);
            return _this.node;
        };
        this.node = node;
        this.dispatch = dispatch("filter", "input", "open", "lock", "toggle", "doneRender", "sort", "fetchDomain");
        this.state = null;
    }
    Legend.prototype.on = function (event, callback) {
        this.dispatch.on(event, callback);
    };
    return Legend;
}());
export default Legend;
//# sourceMappingURL=legend.js.map
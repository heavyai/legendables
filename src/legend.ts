import h from "snabbdom/h";
import { patch } from "./vdom";
import { VNode } from "snabbdom/vnode";
import { dispatch, Dispatch } from "d3-dispatch";
import { format } from "d3-format";

export interface GradientLegendState {
  type: "gradient";
  index?: number;
  title?: string;
  width?: number;
  height?: number;
  locked: boolean;
  open?: boolean;
  range: Array<string>;
  domain: [number, number];
  position?: "top-right" | "bottom-left";
}

export interface NominalLegendState {
  type: "nominal";
  index?: number;
  title?: string;
  width?: number;
  height?: number;
  open?: boolean;
  range: Array<string>;
  domain: [string, boolean];
  position?: "top-right" | "bottom-left";
  page?: number;
}

export interface StackedLegendState {
  type: "stacked";
  width: number;
  height: number;
  open?: boolean;
  list: Array<GradientLegendState | NominalLegendState>;
}

export type LegendState =
  | GradientLegendState
  | NominalLegendState
  | StackedLegendState;

type Handlers = {
  handleFilter: (ev: UIEvent) => void;
};

const commafy = d =>
  typeof d === "number" ? format(",")(parseFloat(d.toFixed(2))) : d;
const formatNumber = d => {
  if (String(d).length <= 4) {
    return commafy(d);
  } else if (d < 0.0001) {
    return format(".2")(d);
  } else {
    return format(".2s")(d);
  }
};

function rangeStep(domain: [number, number], index: number, bins: number = 9) {
  if (index === 0) {
    return domain[0];
  } else if (index + 1 === bins) {
    return domain[1];
  } else {
    const increment = (domain[1] - domain[0]) / bins;
    return domain[0] + increment * index;
  }
}

function validateNumericalInput(previousValue: number, nextValue: any): number {
  if (isNaN(parseFloat(nextValue))) {
    return parseFloat(previousValue);
  } else {
    return parseFloat(nextValue);
  }
}

function renderTickIcon(state, dispatch) {
  return h("div.tick", {
    on: { click: () => dispatch.call("open", this, state.index) }
  });
}

function renderToggleIcon(state, dispatch) {
  return h("div.open-toggle", {
    on: {
      click: () => {
        dispatch.call("toggle", this, state);
      }
    }
  });
}

function renderLockIcon(locked, index, dispatch) {
  return h(
    `div.lock${locked ? ".locked" : ".unlocked"}`,
    { on: { click: () => dispatch.call("lock", this, { locked, index }) } },
    [
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
    ]
  );
}

function renderSortIcon(state, dispatch) {
  return h(
    "div.sort",
    {
      on: { click: () => dispatch.call("sort", this, state.index) }
    },
    [
      h(
        "svg",
        {
          attrs: {
            width: 22,
            height: 10,
            viewBox: "0 0 22 12",
            class: "sort-icon"
          }
        },
        [
          h(
            "svg",
            {
              attrs: {
                viewBox: "0 0 512 512",
                xmlns: "http://www.w3.org/2000/svg"
              }
            },
            [
              h("g", {}, [
                h("g", {}, [
                  h("path", {
                    attrs: {
                      d:
                        "M261.294,326.102c-8.3-7.3-21.8-6.2-29.1,2.1l-77,86.8v-346.9c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v346.9l-77-86.8c-8.3-8.3-20.8-9.4-29.1-2.1c-8.3,8.3-9.4,20.8-2.1,29.1l113.4,126.9c8.5,10.5,23.5,8.9,30.2,0l114.4-126.9C270.694,347.002,269.694,333.402,261.294,326.102z"
                    }
                  }),
                  h("path", {
                    attrs: {
                      d:
                        "M483.994,134.702l-112.4-126.9c-10-10.1-22.5-10.7-31.2,0l-114.4,126.9c-7.3,8.3-6.2,21.8,2.1,29.1c12.8,10.2,25.7,3.2,29.1-2.1l77-86.8v345.9c0,11.4,9.4,20.8,20.8,20.8s20.8-8.3,20.8-19.8v-346.8l77,86.8c8.3,8.3,20.8,9.4,29.1,2.1C490.194,155.502,491.294,143.002,483.994,134.702z"
                    }
                  })
                ])
              ])
            ]
          )
        ]
      )
    ]
  );
}

function renderInput(state: GradientLegendState, domain, dispatch): VNode {
  return h("input", {
    hook: {
      update: (prevNode: VNode, nextNode: VNode) => {
        nextNode.elm.value = domain.value;
      }
    },
    props: {
      value: domain.value
    },
    on: {
      focus: e => {
        e.target.select();
      },
      blur: e => {
        const value = validateNumericalInput(domain.value, e.target.value);
        const [min, max] = state.domain;
        dispatch.call("input", this, {
          index: state.index,
          domain: domain.index === 0 ? [value, max] : [min, value]
        });
      },
      keydown: e => {
        if (e.code === "Enter") {
          e.target.blur();
        }
      }
    }
  });
}

export function renderGradientLegend(
  state: GradientLegendState,
  dispatch
): VNode {
  const stacked = typeof state.index === "number";
  return h(
    `div.legend.gradient-legend${stacked ? ".with-header" : ".legendables"}${
      state.open ? ".open" : ".collapsed"
    }${state.position ? `.${state.position}` : ""}`,
    [
      stacked
        ? h("div.header", [
            h("div.title-text", state.title),
            renderTickIcon(state, dispatch)
          ])
        : h("div"),
      state.open
        ? h("div.range", [
            ...state.range.map((color, index: number) => {
              const isMinMax = index === 0 || index === state.range.length - 1;
              const step = Array.isArray(state.domain)
                ? formatNumber(
                    rangeStep(state.domain, index, state.range.length)
                  )
                : null;
              const domain = Array.isArray(state.domain)
                ? state.domain
                : [null, null];
              const [min, max] = domain;

              return h("div.block", [
                h("div.color", { style: { background: color } }),
                h(
                  `div.text.${isMinMax ? "extent" : "step"}`,
                  [
                    h("span", `${domain.length > 2 ? domain[index] : step}`)
                  ].concat(
                    isMinMax
                      ? [
                          renderInput(
                            state,
                            {
                              value:
                                domain.length === 2
                                  ? domain[index === 0 ? 0 : 1]
                                  : domain[index],
                              index
                            },
                            dispatch
                          )
                        ]
                      : []
                  )
                )
              ]);
            })
          ])
        : h("div"),
      state.open
        ? renderLockIcon(state.locked, state.index, dispatch)
        : h("div")
    ]
  );
}

export function renderNominalLegend(
  state: NominalLegendState,
  dispatch
): VNode {
  const stacked = typeof state.index === "number";

  const handleScroll = (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 10) {
      // Reached the bottom
      dispatch.call(
        "fetchDomain",
        this,
        state.index ? state.index : 0,
        state.page ? state.page++ : 1
      );
    }
  };

  return h(
    `div.legend.nominal-legend${stacked ? "" : ".legendables"}${
      state.open ? ".open" : ".collapsed"
    }${state.position ? `.${state.position}` : ""}`,
    {
      on: !stacked ? { scroll: handleScroll } : {}
    },
    [
      !stacked ? renderToggleIcon(state, dispatch) : h("div"),
      state.title &&
        h("div.header", [
          h("div.title-text", state.title),
          renderSortIcon(state, dispatch),
          renderTickIcon(state, dispatch)
        ]),
      state.open
        ? h(
            "div.body",
            {
              on: stacked ? { scroll: handleScroll } : {}
            },
            state.domain.map((value, index) =>
              h(
                "div.legend-row",
                { on: { click: () => dispatch.call("filter", this, value) } },
                [
                  h("div.color", {
                    style: { background: state.range[index] }
                  }),
                  h("div.text", `${value}`)
                ]
              )
            )
          )
        : h("div")
    ]
  );
}

export function renderStackedLegend(state, dispatch): VNode {
  return h(
    `div.legendables${state.open ? ".open" : ".collapsed"}${
      state.list.length > 1 ? ".show-ticks" : ""
    }`,
    { style: { maxHeight: `${state.maxHeight}px` } },
    [renderToggleIcon(state, dispatch)].concat(
      state.list.map((legend, index) => {
        if (legend.type === "gradient") {
          return renderGradientLegend({ ...legend, index }, dispatch);
        } else if (legend.type === "nominal") {
          return renderNominalLegend({ ...legend, index }, dispatch);
        }
      })
    )
  );
}

export default class Legend {
  state: LegendState;
  node: HTMLElement | VNode;
  dispatch: Dispatch<EventTarget>;

  constructor(node: HTMLElement) {
    this.node = node;
    this.dispatch = dispatch(
      "filter",
      "input",
      "open",
      "lock",
      "toggle",
      "doneRender",
      "sort",
      "fetchDomain"
    );
    this.state = null;
  }

  on(event: string, callback: () => void) {
    this.dispatch.on(event, callback);
  }

  setState = (state: Function | LegendState): HTMLElement | VNode => {
    if (typeof state === "function") {
      this.state = state(this.state);
    } else {
      this.state = state;
    }

    let vnode;

    if (this.state.type === "gradient") {
      vnode = renderGradientLegend(this.state, this.dispatch);
    } else if (this.state.type === "nominal") {
      vnode = renderNominalLegend(this.state, this.dispatch);
    } else if (this.state.type === "stacked") {
      vnode = renderStackedLegend(this.state, this.dispatch);
    } else {
      vnode = h("div");
    }

    this.node = patch(this.node, vnode);
    this.dispatch.call("doneRender", this, state);

    return this.node;
  };
}

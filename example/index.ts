import Legend from "../src/legend";

const gradient = new Legend(
  document.getElementById("gradient-legend-container")
);
gradient.setState({
  type: "stacked",
  width: 50,
  height: 50,
  list: [
    {
      title: "Legend",
      type: "gradient",
      locked: true,
      width: 50,
      height: 100,
      domain: [0, 100],
      range: ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32"]
    },
    {
      title: "Legend",
      type: "gradient",
      locked: false,
      width: 50,
      height: 100,
      domain: [0, 100],
      range: ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32"]
    }
  ]
});

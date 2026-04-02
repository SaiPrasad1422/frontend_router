import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { formatBytes } from "../utils/format";

const COLORS = ["#007bff", "#f4b400"];

function TrafficPieChart({ data }) {
  const sent = data.local2remote || 0;
  const received = data.remote2local || 0;

  const total = sent + received || 1;

  const chartData = [
    { name: "Sent (Local → Remote)", value: sent },
    { name: "Received (Remote → Local)", value: received },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Traffic Breakdown</h3>

      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          dataKey="value"
          outerRadius={100}
          innerRadius={60}   // 🔥 donut style
          label={({ value }) =>
            `${((value / total) * 100).toFixed(1)}%`
          }
        >
          {chartData.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>

        <Tooltip formatter={(v) => formatBytes(v)} />
        <Legend />
      </PieChart>
    </div>
  );
}

export default TrafficPieChart;
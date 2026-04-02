import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { formatBytes } from "../utils/format";

const COLORS = ["#4da6ff", "#66cc66"];

function TrafficPieChart({ data }) {
  const chartData = [
    { name: "Local → Remote", value: data.local2remote || 0 },
    { name: "Remote → Local", value: data.remote2local || 0 },
  ];

  return (
    <div>
      <h3>Traffic Breakdown</h3>

      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          dataKey="value"
          outerRadius={100}
          label={({ name, value }) =>
            `${name}: ${formatBytes(value)}`
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
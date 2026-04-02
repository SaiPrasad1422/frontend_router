import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

function ProtocolChart({ data }) {
  return (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="protocol" outerRadius={150}>
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default ProtocolChart;
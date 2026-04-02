function FlowsTable({ data }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Client IP</th>
          <th>Server IP</th>
          <th>L4</th>
          <th>L7</th>
          <th>Duration</th>
          <th>Throughput (bps)</th>
        </tr>
      </thead>

      <tbody>
        {data.map((flow, i) => (
          <tr key={i}>
            <td>{flow.client?.ip}</td>
            <td>{flow.server?.ip}</td>
            <td>{flow.protocol?.l4}</td>

            {/* 👇 IMPORTANT */}
            <td>{flow.protocol?.l7}</td>

            <td>{flow.duration}</td>
            <td>{flow.thpt?.bps?.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FlowsTable;
function HostsTable({ data }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>IP</th>
          <th>Name</th>
          <th>MAC</th>
          <th>Throughput (bps)</th>
          <th>Total Flows</th>
          <th>Bytes Sent</th>
          <th>Bytes Received</th>
        </tr>
      </thead>

      <tbody>
        {data.map((host, i) => (
          <tr key={i}>
            <td>{host.ip}</td>
            <td>{host.name}</td>
            <td>{host.mac}</td>

            {/* nested fields */}
            <td>{host.thpt?.bps?.toFixed(2)}</td>
            <td>{host.num_flows?.total}</td>
            <td>{host.bytes?.sent}</td>
            <td>{host.bytes?.recvd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HostsTable;
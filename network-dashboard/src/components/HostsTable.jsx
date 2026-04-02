function HostsTable({ data }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>IP</th>
          <th>Location</th>
          <th>Throughput</th>
        </tr>
      </thead>
      <tbody>
        {data.map((h, i) => (
          <tr key={i}>
            <td>{h.ip}</td>
            <td>{h.location}</td>
            <td>{h.throughput}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HostsTable;
function FlowsTable({ data }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>App</th>
          <th>Protocol</th>
          <th>Client</th>
          <th>Server</th>
        </tr>
      </thead>
      <tbody>
        {data.map((f, i) => (
          <tr key={i}>
            <td>{f.app}</td>
            <td>{f.protocol}</td>
            <td>{f.client}</td>
            <td>{f.server}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FlowsTable;
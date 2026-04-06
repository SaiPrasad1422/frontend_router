function RulesTable({ data, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Device IP</th>
          <th>Remote IP</th>
          <th>Action</th>
          <th>Protocol</th>
          <th>Direction</th>
          <th>Remove</th>
        </tr>
      </thead>

      <tbody>
        {data.map((rule) => (
          <tr key={rule.id}>
            <td>{rule.id}</td>
            <td>{rule.device}</td>
            <td>{rule.remote}</td>
            <td>{rule.action}</td>
            <td>{rule.protocol}</td>
            <td>{rule.direction}</td>

            <td>
              <button onClick={() => onDelete(rule.id)}>
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RulesTable;
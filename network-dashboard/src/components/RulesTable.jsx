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
          <tr key={rule.rule_id}>
            <td>{rule.rule_id}</td>
            <td>{rule.device_ip}</td>
            <td>{rule.remote_ip}</td>
            <td>{rule.action}</td>
            <td>{rule.protocol}</td>
            <td>{rule.direction}</td>

            <td>
              <button onClick={() => onDelete(rule.rule_id)}>
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
function RulesTable({ data, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Device IP</th>
          <th>Remote IP</th>
          <th>Action</th>
          <th>Transport</th> {/* NEW */}
          <th>Protocol</th>
          <th>Direction</th>
          <th>Rate</th> {/* NEW */}
          <th>Priority</th> {/* NEW */}
          <th>Note</th> {/* NEW */}
          <th>Created At</th> {/* NEW */}
          <th>Remove</th>
        </tr>
      </thead>

      <tbody>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((rule) => (
            <tr key={rule.id}>
              <td>{rule.id}</td>
              <td>{rule.device}</td>
              <td>{rule.remote}</td>
              <td>{rule.action}</td>

              {/* 🔥 NEW FIELDS */}
              <td>{rule.transport}</td>
              <td>{rule.protocol}</td>
              <td>{rule.direction}</td>
              <td>{rule.rate || "-"}</td>
              <td>{rule.priority || "-"}</td>
              <td>{rule.note || "-"}</td>

              <td>
                {rule.created_at
                  ? new Date(rule.created_at).toLocaleString()
                  : "-"}
              </td>

              <td>
                <button onClick={() => onDelete(rule.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="12">No rules found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default RulesTable;
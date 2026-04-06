import { useNavigate } from "react-router-dom";

function FlowsTable({ data }) {
  const navigate = useNavigate();

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Client IP</th>
          <th>Client Port</th>
          <th>Server IP</th>
          <th>Server Port</th>
          <th>L4</th>
          <th>L7</th>
          <th>Duration</th>
          <th>Throughput (bps)</th>
          <th>Action</th> {/* ✅ NEW COLUMN */}
        </tr>
      </thead>

      <tbody>
        {data.map((flow, i) => (
          <tr key={i}>
            <td>{flow.client?.ip}</td>
            <td>{flow.client?.port}</td>

            <td>{flow.server?.ip}</td>
            <td>{flow.server?.port}</td>

            <td>{flow.protocol?.l4}</td>
            <td>{flow.protocol?.l7}</td>

            <td>{flow.duration}</td>
            <td>{flow.thpt?.bps?.toFixed(2)}</td>

            {/* ✅ BUTTON */}
            <td>
              <button
                onClick={() =>
                  navigate("/add-rule", {
                    state: {
                      client_ip: flow.client?.ip,
                      server_ip: flow.server?.ip,
                      transport: flow.protocol?.l4,
                      protocol: flow.protocol?.l7,
                    },
                  })
                }
              >
                Add Rule
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FlowsTable;
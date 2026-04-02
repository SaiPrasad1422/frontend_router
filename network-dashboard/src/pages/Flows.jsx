import { useEffect, useState } from "react";
import { getFlows } from "../services/api";
import FlowsTable from "../components/FlowsTable";

function Flows() {
  const [flows, setFlows] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    getFlows().then(setFlows);
  }, []);

  const start = (page - 1) * itemsPerPage;
  const currentData = flows.slice(start, start + itemsPerPage);

  return (
    <div>
      <h2>Active Flows</h2>

      <FlowsTable data={currentData} />

      {/* Pagination */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={start + itemsPerPage >= flows.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Flows;
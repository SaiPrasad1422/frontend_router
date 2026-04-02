import { useEffect, useState } from "react";
import { getFlows } from "../services/api";
import FlowsTable from "../components/FlowsTable";

function Flows() {
  const [flows, setFlows] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    getFlows().then(setFlows);
  }, []);

  // 🔥 pagination logic
  const totalPages = Math.ceil(flows.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const currentData = flows.slice(start, start + itemsPerPage);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Active Flows</h2>

      <FlowsTable data={currentData} />

      {/* 🔥 PAGINATION */}
      <div style={{ marginTop: "15px" }}>
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Flows;
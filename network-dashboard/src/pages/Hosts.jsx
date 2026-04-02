import { useEffect, useState } from "react";
import { getHosts } from "../services/api";
import HostsTable from "../components/HostsTable";

function Hosts() {
  const [hosts, setHosts] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    getHosts().then(setHosts);
  }, []);

  // 🔥 pagination logic
  const totalPages = Math.ceil(hosts.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const currentData = hosts.slice(start, start + itemsPerPage);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Hosts</h2>

      <HostsTable data={currentData} />

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

export default Hosts;
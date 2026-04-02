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

  const start = (page - 1) * itemsPerPage;
  const currentData = hosts.slice(start, start + itemsPerPage);

  return (
    <div>
      <h2>Hosts</h2>

      <HostsTable data={currentData} />

      {/* Pagination */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={start + itemsPerPage >= hosts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Hosts;
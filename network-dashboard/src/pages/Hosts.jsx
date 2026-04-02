import { useEffect, useState } from "react";
import { getHosts } from "../services/api";
import HostsTable from "../components/HostsTable";

function Hosts() {
  const [hosts, setHosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHosts();
      console.log("Hosts:", data); // 🔥 debug
      setHosts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Hosts</h2>
      <HostsTable data={hosts} />
    </div>
  );
}

export default Hosts;
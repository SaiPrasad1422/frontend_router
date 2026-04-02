import { useEffect, useState } from "react";
import { getFlows } from "../services/api";
import FlowsTable from "../components/FlowsTable";

function Flows() {
  const [flows, setFlows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFlows();
      console.log("Flows:", data); // 🔥 debug
      setFlows(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Active Flows</h2>
      <FlowsTable data={flows} />
    </div>
  );
}

export default Flows;
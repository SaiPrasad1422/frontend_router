import { useEffect, useState } from "react";
import { getStats } from "../services/api";
import ProtocolChart from "../components/ProtocolChart";

function Stats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStats().then(setData);
  }, []);

  return (
    <div>
      <h2>Protocol Stats</h2>
      <ProtocolChart data={data} />
    </div>
  );
}

export default Stats;
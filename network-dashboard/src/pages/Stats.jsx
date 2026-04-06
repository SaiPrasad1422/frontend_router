import { useEffect, useState } from "react";
import { getInterface } from "../services/api";
import InterfaceStats from "../components/InterfaceStats";

function Stats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getInterface();
      console.log("Interface Data:", res);
      setData(res);
    };

    fetchData();

    
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);

  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Traffic Overview</h2>
      <InterfaceStats data={data} />
    </div>
  );
}

export default Stats;
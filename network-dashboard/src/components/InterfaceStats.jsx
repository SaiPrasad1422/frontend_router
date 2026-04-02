import TrafficPieChart from "./TrafficPieChart";
import { formatBytes, formatSpeed } from "../utils/format";

function InterfaceStats({ data }) {
  const interfaceId = data.id;
  const interfaceName = data.name;

  const sentBytes = data.bytes_upload || 0;
  const recvBytes = data.remote2local || 0;

  const sentPackets = data.packets_upload || 0;
  const recvPackets = data.packets_download || 0;

  const uploadSpeed = data.throughput?.upload?.bps || 0;
  const downloadSpeed = data.throughput?.download?.bps || 0;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      {/* 🔥 HEADER */}
      <h2>
        Interface: {interfaceName || "Unknown"} (ID: {interfaceId})
      </h2>

      {/* 🔥 THROUGHPUT */}
      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        <div>
          <h4>Upload ⬆️</h4>
          <p>{formatSpeed(uploadSpeed)}</p>
        </div>

        <div>
          <h4>Download ⬇️</h4>
          <p>{formatSpeed(downloadSpeed)}</p>
        </div>
      </div>

      {/* 🔥 PIE CHART */}
      <TrafficPieChart data={data} />

      {/* 🔥 TRAFFIC DETAILS */}
      <div style={{ marginTop: "30px" }}>

        <div>
          <h4>Traffic Sent</h4>
          <p>{formatBytes(sentBytes)} ({sentPackets} pkts)</p>
        </div>

        <div style={{ marginTop: "15px" }}>
          <h4>Traffic Received</h4>
          <p>{formatBytes(recvBytes)} ({recvPackets} pkts)</p>
        </div>

      </div>

    </div>
  );
}

export default InterfaceStats;
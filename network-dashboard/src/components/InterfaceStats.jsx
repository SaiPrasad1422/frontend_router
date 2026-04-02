import TrafficPieChart from "./TrafficPieChart";
import { formatBytes, formatSpeed } from "../utils/format";

function InterfaceStats({ data }) {
  const sentBytes = data.bytes_upload || 0;
  const recvBytes = data.remote2local || 0;

  const sentPackets = data.packets_upload || 0;
  const recvPackets = data.packets_download || 0;

  const uploadSpeed = data.throughput?.upload?.bps || 0;
  const downloadSpeed = data.throughput?.download?.bps || 0;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      {/* TOP PIE CHARTS */}
      <div style={{ display: "flex", gap: "40px" }}>
        <TrafficPieChart data={data} />
      </div>

      {/* TRAFFIC STATS */}
      <div style={{ marginTop: "30px" }}>

        {/* Sent */}
        <div style={{ marginBottom: "25px" }}>
          <strong>Total Traffic Sent</strong>
          <p>
            {formatBytes(sentBytes)} ({sentPackets} pkts)
          </p>

          <div style={{ background: "#ddd", height: "10px", borderRadius: "5px" }}>
            <div style={{
              width: "60%",
              height: "100%",
              background: "#007bff"
            }} />
          </div>

          <p>↑ {formatSpeed(uploadSpeed)}</p>
        </div>

        {/* Received */}
        <div>
          <strong>Traffic Received</strong>
          <p>
            {formatBytes(recvBytes)} ({recvPackets} pkts)
          </p>

          <div style={{ background: "#ddd", height: "10px", borderRadius: "5px" }}>
            <div style={{
              width: "40%",
              height: "100%",
              background: "#f4b400"
            }} />
          </div>

          <p>↓ {formatSpeed(downloadSpeed)}</p>
        </div>

      </div>

    </div>
  );
}

export default InterfaceStats;
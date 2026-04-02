import TrafficPieChart from "./TrafficPieChart";
import { formatBytes, formatSpeed } from "../utils/format";

function InterfaceStats({ data }) {
  const interfaceId = data.ifid;
  const interfaceName = data.ifname;

  const sentBytes = data.bytes_upload || 0;
  const recvBytes = data.remote2local || 0;

  const sentPackets = data.packets_upload || 0;
  const recvPackets = data.packets_download || 0;

  const uploadSpeed = data.throughput?.upload?.bps || 0;
  const downloadSpeed = data.throughput?.download?.bps || 0;

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{
        width: "900px",
        textAlign: "center"
      }}>

        {/* 🔥 HEADER */}
        <h2>
          Interface: {interfaceName} (ID: {interfaceId})
        </h2>

        {/* 🔥 OVERVIEW CARDS */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "20px"
        }}>
          <div className="card">
            <h4>Devices</h4>
            <p>{data.num_devices ?? 0}</p>
          </div>

          <div className="card">
            <h4>Packet Drops</h4>
            <p style={{ color: "red" }}>
              {data.tot_pkt_drops ?? 0}
            </p>
          </div>

          <div className="card">
            <h4>Uptime</h4>
            <p>{data.uptime_sec} sec</p>
          </div>
        </div>

        {/* 🔥 THROUGHPUT */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "25px"
        }}>
          <div className="card">
            <h4>Upload ⬆️</h4>
            <p>{formatSpeed(uploadSpeed)}</p>
          </div>

          <div className="card">
            <h4>Download ⬇️</h4>
            <p>{formatSpeed(downloadSpeed)}</p>
          </div>

          <div className="card">
            <h4>Total</h4>
            <p>{formatSpeed(uploadSpeed + downloadSpeed)}</p>
          </div>
        </div>

        {/* 🔥 PIE CHART */}
        <div style={{ marginTop: "30px" }}>
          <TrafficPieChart data={data} />
        </div>

        {/* 🔥 TRAFFIC */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "30px"
        }}>
          <div className="card">
            <h4>Traffic Sent</h4>
            <p>{formatBytes(sentBytes)}</p>
            <p>{sentPackets} pkts</p>
          </div>

          <div className="card">
            <h4>Traffic Received</h4>
            <p>{formatBytes(recvBytes)}</p>
            <p>{recvPackets} pkts</p>
          </div>
        </div>

        {/* 🔥 TCP STATS */}
        <div style={{ marginTop: "30px" }}>
          <h3>TCP Stats</h3>

          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "10px"
          }}>
            <div className="card">
              <h5>Lost</h5>
              <p>{data.tcpPacketStats?.lost ?? 0}</p>
            </div>

            <div className="card">
              <h5>Out of Order</h5>
              <p>{data.tcpPacketStats?.out_of_order ?? 0}</p>
            </div>

            <div className="card">
              <h5>Retransmissions</h5>
              <p>{data.tcpPacketStats?.retransmissions ?? 0}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default InterfaceStats;
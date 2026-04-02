import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
export const getHosts = async () => {
  return Array.from({ length: 20 }, (_, i) => ({
    ip: `192.168.0.${i + 1}`,
    location: i % 2 === 0 ? "Local" : "Remote",
    throughput: `${Math.floor(Math.random() * 100)} Mbps`,
  }));
};





export const getFlows = async () => {
  try {
    const res = await api.get("/flows");
    return res.data;
  } catch (err) {
    console.error("Error fetching flows:", err);
    return [];
  }
};

export const getStats = async () => {
  return [
    { protocol: "QUIC", value: 60 },
    { protocol: "STUN", value: 30 },
    { protocol: "SSL", value: 10 },
  ];
};
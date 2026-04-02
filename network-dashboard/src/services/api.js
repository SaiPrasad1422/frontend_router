import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
export const getHosts = async () => {
  try {
    const res = await api.get("/hosts");
    return res.data;
  } catch (err) {
    console.error("Error fetching hosts:", err);
    return [];
  }
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
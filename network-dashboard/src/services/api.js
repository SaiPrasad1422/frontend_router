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

export const getInterface = async () => {
  try {
    const res = await api.get("/interface");
    return res.data;
  } catch (err) {
    console.error("Interface API error:", err);
    return null;
  }
};

export const getRules = async () => {
  try {
    const res = await api.get("/rules");
    return res.data;
  } catch (err) {
    console.error("Interface API error:", err);
    return null;
  }
};

export const removeRule = async (ruleId) => {
  try {
    await api.post(`/rules/remove/${ruleId}`);
    return true;
  } catch (err) {
    console.error("Error removing rule:", err);
    return false;
  }
};

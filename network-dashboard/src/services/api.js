export const getHosts = async () => {
  return Array.from({ length: 20 }, (_, i) => ({
    ip: `192.168.0.${i + 1}`,
    location: i % 2 === 0 ? "Local" : "Remote",
    throughput: `${Math.floor(Math.random() * 100)} Mbps`,
  }));
};

export const getFlows = async () => {
  return [
    {
      app: "QUIC",
      protocol: "UDP",
      client: "192.168.0.2",
      server: "google.com",
    },
    {
      app: "STUN",
      protocol: "UDP",
      client: "192.168.0.3",
      server: "stun.server.com",
    },
  ];
};

export const getStats = async () => {
  return [
    { protocol: "QUIC", value: 60 },
    { protocol: "STUN", value: 30 },
    { protocol: "SSL", value: 10 },
  ];
};
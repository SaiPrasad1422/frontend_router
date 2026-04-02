export const formatBytes = (bytes) => {
  if (!bytes) return "0 B";

  const units = ["B", "KB", "MB", "GB"];
  let i = 0;

  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }

  return `${bytes.toFixed(2)} ${units[i]}`;
};

export const formatSpeed = (bps) => {
  if (!bps) return "0 bps";

  if (bps >= 1_000_000) return (bps / 1_000_000).toFixed(2) + " Mbps";
  if (bps >= 1_000) return (bps / 1_000).toFixed(2) + " Kbps";

  return bps.toFixed(2) + " bps";
};
import { Chip } from "@mui/material";

export default function StatusChip({ status }) {
  const colorMap = {
    reported: { bg: "#2196F3", text: "#fff" },
    assigned: { bg: "#4CAF50", text: "#fff" },
    in_progress: { bg: "#FF9800", text: "#fff" },
    completed: { bg: "#9C27B0", text: "#fff" },
    reopened: { bg: "#FFC107", text: "#000" },
    rejected: { bg: "#F44336", text: "#fff" },
  };

  const colors = colorMap[status] || { bg: "#9E9E9E", text: "#fff" };

  return (
    <Chip
      label={status.replace(/_/g, " ")}
      sx={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontWeight: 600,
        height: "28px",
        borderRadius: "6px",
        textTransform: "capitalize",
      }}
    />
  );
}

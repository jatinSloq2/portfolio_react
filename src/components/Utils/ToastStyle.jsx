
export const toastStyle = (type) => ({
    backgroundColor: type === "success" ? "#34D399" : "#DC2626", // Green for success, Red for error
    color: type === "success" ? "#111111" : "#ffff", // White text
    fontSize: "14px",
    fontWeight: "800",
    borderRadius: "0px",
    padding: "12px 16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  });
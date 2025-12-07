export default function Console({ output }) {
  return (
    <div
      style={{
        background: "#111",
        padding: "15px",
        borderRadius: "8px",
        border: "1px solid #333",
        minHeight: "100px",
        whiteSpace: "pre-wrap",
        fontFamily: "monospace",
        marginTop: "10px"
      }}
    >
      {output || "Console output will appear here..."}
    </div>
  );
}

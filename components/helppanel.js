"use client";

import { getHelp } from "@/utils/helpkeywords";

export default function HelpPanel({ visible, onClose }) {
  if (!visible) return null;

  const handleHelp = (e) => {
    const msg = getHelp(e.target.value);
    alert(msg);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 70,
        right: 20,
        width: "250px",
        background: "#1e1e1e",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #333",
        boxShadow: "0 0 10px #000"
      }}
    >
      <h3>Help</h3>

      <input
        type="text"
        placeholder="Type a keyword…"
        onChange={handleHelp}
        style={{
          width: "100%",
          padding: "8px",
          marginTop: "10px",
          borderRadius: "6px",
          border: "1px solid #555",
          background: "#111",
          color: "white"
        }}
      />

      <button
        onClick={onClose}
        style={{
          marginTop: "10px",
          padding: "8px 20px",
          background: "#ff4444",
          border: "none",
          borderRadius: "6px",
          color: "white",
          cursor: "pointer"
        }}
      >
        Close
      </button>
    </div>
  );
}

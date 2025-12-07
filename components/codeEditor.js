"use client";
import { useState } from "react";

export default function CodeEditor({ onRun, onAutoFix }) {
  const [code, setCode] = useState(`console.log("Hello World")`);

  return (
    <div style={{ marginBottom: "20px" }}>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          background: "#0f0f0f",
          color: "#00ff99",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #444",
          fontFamily: "monospace",
          fontSize: "16px"
        }}
      />

      <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
        <button
          onClick={() => onRun(code)}
          style={{
            padding: "10px 20px",
            background: "#007acc",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer"
          }}
        >
          Run
        </button>

        <button
          onClick={() => onAutoFix(code, setCode)}
          style={{
            padding: "10px 20px",
            background: "#ff9800",
            border: "none",
            borderRadius: "8px",
            color: "black",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Auto Fix
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import CodeEditor from "../components/codeEditor";
import Console from "../components/console";
import HelpPanel from "../componentshelppanel";
import autoFix from "../utils/autofix";

export default function Home() {
  const [output, setOutput] = useState("");
  const [helpVisible, setHelpVisible] = useState(false);

  // RUN
  const runCode = (code) => {
    try {
      let consoleOutput = "";
      const customConsole = {
        log: (...args) => (consoleOutput += args.join(" ") + "\n")
      };

      eval(`(function(console){ ${code} })(customConsole);`);
      setOutput(consoleOutput || "No output");
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  // FIXED AUTOFIX — now correctly updates the editor
  const handleAutoFix = (code, setCode) => {
    const fixed = autoFix(code);
    setCode(fixed); // ← IMPORTANT
  };

  return (
    <div className="container">
      <h1>Simple Code Editor</h1>

      <button
        onClick={() => setHelpVisible(true)}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: "#007acc",
          color: "white"
        }}
      >
        Help
      </button>

      <HelpPanel visible={helpVisible} onClose={() => setHelpVisible(false)} />

      <CodeEditor onRun={runCode} onAutoFix={handleAutoFix} />
      <Console output={output} />
    </div>
  );
}

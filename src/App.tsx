import { useState } from "react";
import { cleanText } from "./utils/cleanText";

export default function App() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const handleClean = () => {
    const cleaned = cleanText(input);
    setOutput(cleaned);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>HumanizeSpace</h1>
      <p>Remove unnatural spacing from AI-generated text.</p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste AI-generated text here..."
        style={{
          width: "100%",
          minHeight: "180px",
          padding: "1rem",
          marginTop: "1rem",
          fontSize: "1rem",
          boxSizing: "border-box",
        }}
      />

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button onClick={handleClean} disabled={!input.trim()}>
          Clean Text
        </button>

        <button onClick={handleCopy} disabled={!output.trim()}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <textarea
        value={output}
        readOnly
        placeholder="Cleaned text will appear here..."
        style={{
          width: "100%",
          minHeight: "180px",
          padding: "1rem",
          marginTop: "1rem",
          fontSize: "1rem",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}
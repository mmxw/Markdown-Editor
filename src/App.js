import React, { useState } from "react";
import AceEditor from "react-ace";
import marked from "marked";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import "./App.css";

function App() {
  const [input, setInput] = useState("*test*");

  const handleChange = (value) => {
    const newInput = value;
    setInput(newInput);
  };

  return (
    <div className="App">
      <div className="bar">Editor</div>
      <AceEditor
        mode="markdown"
        theme="github"
        onChange={handleChange}
        value={input}
      />
      <div className="bar">Preview</div>
      <div
        dangerouslySetInnerHTML={{ __html: marked(input) }}
        className="preview"
      ></div>
    </div>
  );
}

export default App;

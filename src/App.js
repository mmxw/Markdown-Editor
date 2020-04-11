import React, {useState} from "react";
import TextEditor from './TextEditor';
import "./App.css";
const ReactMarkdown = require('react-markdown');

function App() {

  const [input, setInput] = useState('**test**');
  const [previewInput, setPreviewInput] = useState(input);

  const handleTextInput = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
    setPreviewInput(newInput);
  }


  return (
    <div className="App">
      <TextEditor 
        onChange = {handleTextInput}
        value={input}
      />
      <ReactMarkdown
        source={previewInput}
      />
      
    </div>
  );
}

export default App;

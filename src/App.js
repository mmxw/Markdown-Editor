import React, {useState} from "react";
import TextEditor from './TextEditor';
import "./App.css";
const ReactMarkdown = require('react-markdown');

function App() {

  const [input, setInput] = useState('**test**')

  return (
    <div className="App">
      <TextEditor 
        onChange = {(e) => {
          const newInput = e.target.value;
          setInput(newInput)}}
        value={input}
      />
      <ReactMarkdown
        source={input}
      />
      
    </div>
  );
}

export default App;

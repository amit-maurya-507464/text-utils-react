import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log(text);
    setText(text.toUpperCase());
  };

  function handleLowClick() {
    setText(text.toLowerCase())
  }

  function updateText(event) {
    setText(event.target.value);
  }

  function handleClearClick() {
    setText("");
  }

  function handleCopyClick() {
    let text = document.getElementById("txtArea");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  function handleExtraSpacesClick() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  return (
    <>
      <div className="container my-2">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h5>{props.title}</h5>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={updateText}
            id="txtArea"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          To Upper
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          To Lower
        </button>
        <button className="btn btn-info mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-info mx-1" onClick={handleCopyClick}>
          Copy
        </button>
        <button className="btn btn-info mx-1" onClick={handleExtraSpacesClick}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container">
        <h5 className="my-2">Your Text Summary:</h5>
        <p>
          {text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters
        </p>
      </div>

      <div className="container">
        <h5>Text Preview:</h5>
        <p>{text}</p>
      </div>
    </>
  );
}

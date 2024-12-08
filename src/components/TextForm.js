import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const uppercase = () => {
    if (text.trim()) {
      setText(text.toUpperCase());
      props.showAlert('Converted to uppercase', 'success');
    }
  };

  const lowercase = () => {
    if (text.trim()) {
      setText(text.toLowerCase());
      props.showAlert('Converted to lowercase', 'success');
    }
  };

  const cleartext = () => {
    setText('');
    props.showAlert('Text cleared', 'success');
  };

  const copy = () => {
    if (text.trim()) {
      navigator.clipboard.writeText(text);
      props.showAlert('Text copied to clipboard', 'success');
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const word_count = text.split(/\s+/).filter((word) => word.length > 0).length;
  const character_count = text.trim().length;

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'light' ? 'black' : 'white' }}
      >
        <h1>{props.heading}</h1>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#495057',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
            value={text}
            onChange={handleOnChange}
            id="textBox"
            placeholder="Enter text here"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={uppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={lowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={cleartext}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={copy}>
          Copy to Clipboard
        </button>
      </div>
      <div
        className="container mt-3"
        style={{ color: props.mode === 'light' ? 'black' : 'white' }}
      >
        <h2>Text Analysis</h2>
        <p>
          {word_count} words and {character_count} characters
        </p>
        <p>Average time to read: {Math.floor(0.48 * word_count)} seconds</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
};

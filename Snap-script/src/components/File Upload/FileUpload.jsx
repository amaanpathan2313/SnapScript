 import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2 className="title">Upload Your File</h2>

        {/* File Input */}
        <label className="upload-box">
          <input type="file" onChange={handleChange} />
          <div className="upload-content">
            <span className="icon"></span>
            <p>Select a file</p>
          </div>
        </label>

        {/* File Preview */}
        {file && (
          <div className="file-preview">
            <div>
              <p className="file-name">{file.name}</p>
              <p className="file-size">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>

            <button className="remove-btn" onClick={removeFile}>
              ✖
            </button>
          </div>
        )}

        {/* Upload Button */}
        <button className="upload-btn" disabled={!file}>
          Upload File
        </button>
      </div>
    </div>
  );
};

export default FileUpload;

import React from "react";

const FileUpload = ({ onFileChange, onUpload, disabled, selectedFile }) => (
  <div className="flex flex-col items-center gap-4 my-6">
    <input
      type="file"
      accept="audio/*"
      onChange={onFileChange}
      disabled={disabled}
      className="file-input file-input-bordered file-input-primary w-full max-w-xs"
    />
    <button
      onClick={onUpload}
      disabled={disabled || !selectedFile}
      className="px-6 py-2 rounded bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      Upload & Generate Report
    </button>
  </div>
);

export default FileUpload;

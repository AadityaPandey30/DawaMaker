import React from "react";

const ErrorDisplay = ({ error }) => (
  <div className="mt-6 bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg">
    <span className="font-semibold">Error: </span>{error}
  </div>
);

export default ErrorDisplay;

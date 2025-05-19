import React from "react";

const ReportDisplay = ({ report }) => (
  <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow text-left">
    <h2 className="text-xl font-bold mb-2 text-indigo-700">Generated Report</h2>
    <pre className="whitespace-pre-wrap break-words text-gray-800 text-base">{report}</pre>
  </div>
);

export default ReportDisplay;

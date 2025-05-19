import React from "react";

const LoadingModal = () => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg px-10 py-8 flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-medium text-gray-700 text-center">
        Uploading Audio<span className="animate-pulse">......</span>
        <br />
        Generating Report
      </p>
    </div>
  </div>
);

export default LoadingModal;

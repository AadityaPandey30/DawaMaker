import { useState } from "react";
import FileUpload from "./components/FileUpload";
import LoadingModal from "./components/LoadingModal";
import ReportDisplay from "./components/ReportDisplay";
import ErrorDisplay from "./components/ErrorDisplay";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setReport("");
    setError("");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select an audio file.");
      return;
    }
    setLoading(true);
    setReport("");
    setError("");
    try {
      const formData = new FormData();
      formData.append("audio", selectedFile);

      // Adjust the endpoint as per your backend route
      const response = await fetch("http://localhost:5000/api/audio/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload audio or generate report.");
      }

      const data = await response.json();
      setReport(data.report || "Report generated successfully.");
    } catch (err) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 mt-10">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
          Case Audio Report Generator
        </h1>
        <FileUpload
          onFileChange={handleFileChange}
          onUpload={handleUpload}
          disabled={loading}
          selectedFile={selectedFile}
        />
        {loading && <LoadingModal />}
        {report && <ReportDisplay report={report} />}
        {error && <ErrorDisplay error={error} />}
      </div>
      <footer className="mt-10 text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} DawaMaker
      </footer>
    </div>
  );
}

export default App;

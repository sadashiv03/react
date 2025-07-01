import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import * as XLSX from "xlsx";
import "./HomePage.css";

function HomePage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [csvData, setCsvData] = useState("");
  const [loading, setLoading] = useState(false); // <-- loading state

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    setCsvData("");
  };

  const convertToCSV = () => {
    if (!file) {
      alert("Please upload an XLSX file first!");
      return;
    }

    setLoading(true);  // start loading

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = new Uint8Array(evt.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const csv = XLSX.utils.sheet_to_csv(worksheet);
        setCsvData(csv);
      } catch (error) {
        alert("Error processing file");
      } finally {
        setLoading(false); // stop loading
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const downloadCSV = () => {
    if (!csvData) return;
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file ? file.name.replace(/\.[^/.]+$/, "") + ".csv" : "converted.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h2>XLSX to CSV Converter</h2>
        <button
          className="logout-button"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </header>

      <div className="converter-card">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="file-input"
          disabled={loading}
        />

        <div className="buttons">
          <button onClick={convertToCSV} disabled={!file || loading} className="btn primary">
            {loading ? "Converting..." : "Convert"}
          </button>
          <button onClick={downloadCSV} disabled={!csvData || loading} className="btn secondary">
            Download CSV
          </button>
        </div>

        {loading && <p style={{ fontStyle: "italic" }}>Processing file, please wait...</p>}

        {csvData && !loading && (
          <div className="csv-file-box">
            <div className="file-box-header">CSV Preview (first 500 chars):</div>
            <pre className="file-box-content">
              {csvData.slice(0, 500)}
              {csvData.length > 500 ? "..." : ""}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;

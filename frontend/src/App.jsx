import { useState } from "react";
import "./App.css";

function App() {
  const [tenderFile, setTenderFile] = useState(null);
  const [bidderFile, setBidderFile] = useState(null);
  const [status, setStatus] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!tenderFile || !bidderFile) {
      setStatus("Please select both the tender and bidder documents.");
      return;
    }

    const formData = new FormData();
    formData.append("tender_document", tenderFile);
    formData.append("bidder_document", bidderFile);

    try {
      setIsUploading(true);
      setStatus("Uploading documents...");

      const response = await fetch(
        "http://127.0.0.1:8000/api/upload-documents",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Upload failed.");
      }

      setStatus(
    `${data.message} Tender: ${data.tender_file}; Bidder: ${data.bidder_file}`,
      );
    } catch (error) {
      setStatus(`Upload failed: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <main className="app">
      <section className="upload-container">
        <h1>Tender Compliance Checker</h1>
        <p className="subtitle">
          Upload one tender document and one bidder document.
        </p>

        <form className="upload-form" onSubmit={handleSubmit}>
          <div className="file-group">
            <label htmlFor="tender-document">Tender document</label>
            <input
              id="tender-document"
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              onChange={(event) => setTenderFile(event.target.files[0] || null)}
            />
            {tenderFile && <small>Selected: {tenderFile.name}</small>}
          </div>

          <div className="file-group">
            <label htmlFor="bidder-document">Bidder document</label>
            <input
              id="bidder-document"
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              onChange={(event) => setBidderFile(event.target.files[0] || null)}
            />
            {bidderFile && <small>Selected: {bidderFile.name}</small>}
          </div>

          <button type="submit" disabled={isUploading}>
            {isUploading ? "Uploading..." : "Upload and Compare"}
          </button>
        </form>

        {status && (
          <p
            className={
              status.startsWith("Upload failed") ? "status error" : "status"
            }
          >
            {status}
          </p>
        )}
      </section>
    </main>
  );
}

export default App;

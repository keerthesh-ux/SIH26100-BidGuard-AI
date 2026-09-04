import { useState } from "react";

function TenderUpload({ onNext }) {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    const analyzeTender = () => {

        if (!file) {
            alert("Please upload a tender document.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            onNext();
        }, 2000);
    };

    return (
        <div className="upload-page">

            <div className="page-heading">

                <span>STEP 01</span>

                <h1>Upload Tender</h1>

                <p>
                    Upload the GeM tender document.
                    Our AI will extract all mandatory requirements.
                </p>

            </div>

            <div className="upload-box">

                <div className="upload-icon">
                    ↑
                </div>

                <h2>
                    Upload Tender Document
                </h2>

                <p>
                    Drag & drop your PDF here or browse files
                </p>

                <label className="browse-btn">

                    Browse Files

                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFile}
                        hidden
                    />

                </label>

                {file && (
                    <div className="selected-file">

                        <span>📄</span>

                        <div>
                            <strong>{file.name}</strong>
                            <small>
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                            </small>
                        </div>

                        <span>✓</span>

                    </div>
                )}

            </div>

            <button
                className="primary-btn analyze-btn"
                onClick={analyzeTender}
                disabled={loading}
            >

                {loading
                    ? "AI Analyzing Tender..."
                    : "Analyze Tender →"
                }

            </button>

        </div>
    );
}

export default TenderUpload;
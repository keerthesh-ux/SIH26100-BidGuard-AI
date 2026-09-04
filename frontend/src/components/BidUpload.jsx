import { useState } from "react";

function BidUpload({ onAnalyze }) {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const analyzeBid = () => {

        if (!file) {
            alert("Please upload bidder documents.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            onAnalyze();
        }, 2500);
    };

    return (
        <div className="upload-page">

            <div className="page-heading">

                <span>STEP 02</span>

                <h1>Upload Bid Documents</h1>

                <p>
                    Upload the bidder's technical and financial
                    documents for AI verification.
                </p>

            </div>

            <div className="upload-box">

                <div className="upload-icon">
                    ↑
                </div>

                <h2>
                    Upload Bid Documents
                </h2>

                <p>
                    Technical bid, certificates, experience documents
                </p>

                <label className="browse-btn">

                    Browse Files

                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setFile(e.target.files[0])}
                        hidden
                    />

                </label>

                {file && (
                    <div className="selected-file">

                        📄

                        <div>
                            <strong>{file.name}</strong>
                            <small>Ready for verification</small>
                        </div>

                        ✓

                    </div>
                )}

            </div>

            <button
                className="primary-btn analyze-btn"
                onClick={analyzeBid}
                disabled={loading}
            >

                {loading
                    ? "AI Comparing Documents..."
                    : "Verify Bid Compliance →"
                }

            </button>

        </div>
    );
}

export default BidUpload;
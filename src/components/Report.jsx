function Report() {

    return (
        <div className="report-page">

            <div className="report-header">

                <div>
                    <span>AI GENERATED REPORT</span>

                    <h1>
                        Bid Compliance Report
                    </h1>

                    <p>
                        GEM/2026/B/458921
                    </p>
                </div>

                <button
                    className="download-btn"
                    onClick={() => window.print()}
                >
                    Download Report
                </button>

            </div>

            <div className="report-card">

                <h2>Executive Summary</h2>

                <p>
                    The AI-powered compliance engine analyzed
                    the submitted bid against the mandatory
                    tender requirements.
                </p>

                <div className="report-score">

                    <strong>72%</strong>

                    <span>
                        Overall Compliance Score
                    </span>

                </div>

                <div className="recommendation">

                    <h3>⚠ Recommendation</h3>

                    <p>
                        Bid should be manually reviewed because
                        the bidder does not satisfy the processor
                        and annual turnover requirements.
                    </p>

                </div>

            </div>

            <div className="report-card">

                <h2>Detected Compliance Issues</h2>

                <div className="issue">

                    <strong>
                        Processor Requirement
                    </strong>

                    <p>
                        Tender requires Intel Core i7.
                        Bidder submitted Intel Core i5.
                    </p>

                </div>

                <div className="issue">

                    <strong>
                        Annual Turnover
                    </strong>

                    <p>
                        Tender requires minimum ₹50 lakh.
                        Bidder documents show ₹42 lakh.
                    </p>

                </div>

            </div>

            <div className="report-card ai-explanation">

                <h2>AI Explanation</h2>

                <p>
                    The system extracted requirements from the
                    tender document using document intelligence
                    and compared them with information extracted
                    from the bidder's submitted documents.
                </p>

                <p>
                    Each requirement was classified as
                    <b> Compliant, Warning, or Non-Compliant</b>.
                </p>

            </div>

        </div>
    );
}

export default Report;
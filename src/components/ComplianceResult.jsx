function ComplianceResult({ onReport }) {

    const results = [
        {
            requirement: "RAM Requirement",
            tender: "Minimum 16 GB",
            bidder: "16 GB",
            status: "COMPLIANT"
        },
        {
            requirement: "Processor",
            tender: "Intel Core i7",
            bidder: "Intel Core i5",
            status: "NON-COMPLIANT"
        },
        {
            requirement: "Experience",
            tender: "Minimum 3 years",
            bidder: "5 years",
            status: "COMPLIANT"
        },
        {
            requirement: "ISO Certification",
            tender: "ISO 9001 mandatory",
            bidder: "ISO 9001 available",
            status: "COMPLIANT"
        },
        {
            requirement: "Annual Turnover",
            tender: "₹50 lakh minimum",
            bidder: "₹42 lakh",
            status: "NON-COMPLIANT"
        },
        {
            requirement: "Product Warranty",
            tender: "3 years",
            bidder: "3 years",
            status: "COMPLIANT"
        }
    ];

    return (
        <div className="result-page">

            <div className="page-heading">

                <span>AI VERIFICATION COMPLETE</span>

                <h1>Compliance Analysis</h1>

                <p>
                    AI compared tender requirements against
                    submitted bidder documents.
                </p>

            </div>

            <div className="score-section">

                <div className="score-circle">
                    <strong>72%</strong>
                    <span>Compliance</span>
                </div>

                <div className="score-info">

                    <h2>Bid Requires Attention</h2>

                    <p>
                        4 out of 6 mandatory requirements were satisfied.
                        Two critical compliance issues were detected.
                    </p>

                    <div className="result-summary">

                        <div>
                            <strong>4</strong>
                            <span>Compliant</span>
                        </div>

                        <div>
                            <strong>0</strong>
                            <span>Warnings</span>
                        </div>

                        <div>
                            <strong>2</strong>
                            <span>Non-Compliant</span>
                        </div>

                    </div>

                </div>

            </div>

            <div className="compliance-table">

                <div className="table-header">
                    <span>Requirement</span>
                    <span>Tender</span>
                    <span>Bidder</span>
                    <span>Status</span>
                </div>

                {results.map((item, index) => (

                    <div
                        className="table-row"
                        key={index}
                    >

                        <strong>
                            {item.requirement}
                        </strong>

                        <span>
                            {item.tender}
                        </span>

                        <span>
                            {item.bidder}
                        </span>

                        <span
                            className={
                                item.status === "COMPLIANT"
                                    ? "status compliant"
                                    : "status non-compliant"
                            }
                        >
                            {item.status === "COMPLIANT"
                                ? "✓ COMPLIANT"
                                : "✕ FAILED"
                            }
                        </span>

                    </div>

                ))}

            </div>

            <button
                className="primary-btn"
                onClick={onReport}
            >
                Generate Detailed Report →
            </button>

        </div>
    );
}

export default ComplianceResult;
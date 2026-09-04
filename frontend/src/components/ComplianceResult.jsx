function ComplianceResult({ data, onReport }) {

    // Safety fallback
    const complianceData = data || {
        score: 72,
        totalRequirements: 6,
        compliant: 4,
        nonCompliant: 2,
        status: "Partially Compliant",

        issues: []
    };


    // ==========================================
    // DEMO REQUIREMENT RESULTS
    // ==========================================

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


    // ==========================================
    // DISPLAY VALUES
    // ==========================================

    const score = complianceData.score;

    const totalRequirements =
        complianceData.totalRequirements;

    const compliant =
        complianceData.compliant;

    const nonCompliant =
        complianceData.nonCompliant;


    // ==========================================
    // STATUS MESSAGE
    // ==========================================

    let heading = "Bid Requires Attention";

    if (score >= 90) {
        heading = "Bid is Highly Compliant";
    }
    else if (score >= 75) {
        heading = "Bid is Mostly Compliant";
    }


    return (

        <div className="result-page">


            {/* ==================================
                PAGE HEADING
            ================================== */}

            <div className="page-heading">

                <span>
                    AI VERIFICATION COMPLETE
                </span>

                <h1>
                    Compliance Analysis
                </h1>

                <p>
                    AI compared tender requirements against
                    submitted bidder documents.
                </p>

            </div>


            {/* ==================================
                SCORE SECTION
            ================================== */}

            <div className="score-section">


                <div className="score-circle">

                    <strong>
                        {score}%
                    </strong>

                    <span>
                        Compliance
                    </span>

                </div>


                <div className="score-info">

                    <h2>
                        {heading}
                    </h2>


                    <p>

                        {compliant} out of{" "}
                        {totalRequirements}{" "}
                        mandatory requirements were satisfied.

                        {nonCompliant > 0 && (
                            <>
                                {" "}
                                {nonCompliant} compliance
                                issue
                                {nonCompliant > 1
                                    ? "s"
                                    : ""
                                } detected.
                            </>
                        )}

                    </p>


                    {/* =========================
                        RESULT SUMMARY
                    ========================= */}

                    <div className="result-summary">


                        <div>

                            <strong>
                                {compliant}
                            </strong>

                            <span>
                                Compliant
                            </span>

                        </div>


                        <div>

                            <strong>
                                0
                            </strong>

                            <span>
                                Warnings
                            </span>

                        </div>


                        <div>

                            <strong>
                                {nonCompliant}
                            </strong>

                            <span>
                                Non-Compliant
                            </span>

                        </div>


                    </div>

                </div>

            </div>


            {/* ==================================
                COMPLIANCE TABLE
            ================================== */}

            <div className="compliance-table">


                <div className="table-header">

                    <span>
                        Requirement
                    </span>

                    <span>
                        Tender
                    </span>

                    <span>
                        Bidder
                    </span>

                    <span>
                        Status
                    </span>

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


            {/* ==================================
                AI DETECTED ISSUES
            ================================== */}

            {complianceData.issues &&
                complianceData.issues.length > 0 && (

                <div className="issues-section">

                    <div className="page-heading">

                        <span>
                            AI DETECTED ISSUES
                        </span>

                        <h2>
                            Compliance Issues
                        </h2>

                    </div>


                    <div className="issues-list">

                        {complianceData.issues.map(
                            (issue, index) => (

                            <div
                                className="issue-card"
                                key={index}
                            >

                                <div>

                                    <strong>
                                        {issue.requirement}
                                    </strong>

                                    <p>
                                        Required:{" "}
                                        {issue.required}
                                    </p>

                                    <p>
                                        Submitted:{" "}
                                        {issue.submitted}
                                    </p>

                                </div>


                                <span>
                                    {issue.severity}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            )}


            {/* ==================================
                REPORT BUTTON
            ================================== */}

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
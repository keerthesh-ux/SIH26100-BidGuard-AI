function Dashboard({ onStart }) {

    return (
        <div className="dashboard">

            <div className="hero">

                <div className="hero-content">

                    <span className="ai-tag">
                        ✦ AI-POWERED PROCUREMENT
                    </span>

                    <h1>
                        Intelligent Bid
                        <br />
                        <span>Compliance Verification</span>
                    </h1>

                    <p>
                        Automatically analyze GeM tenders and bidder
                        documents to identify compliance gaps, risks
                        and missing requirements.
                    </p>

                    <button
                        className="primary-btn"
                        onClick={onStart}
                    >
                        Start Compliance Check →
                    </button>

                </div>

                <div className="hero-ai">

                    <div className="ai-circle">
                        <span>AI</span>
                    </div>

                    <div className="floating-card card-one">
                        ✓ Tender analyzed
                    </div>

                    <div className="floating-card card-two">
                        94% Compliance
                    </div>

                </div>

            </div>

            <div className="stats">

                <div className="stat-card">
                    <span>Active Tenders</span>
                    <strong>128</strong>
                    <small>↑ 12% this month</small>
                </div>

                <div className="stat-card">
                    <span>Bids Verified</span>
                    <strong>1,284</strong>
                    <small>↑ 18% this month</small>
                </div>

                <div className="stat-card">
                    <span>Compliance Rate</span>
                    <strong>91.4%</strong>
                    <small>↑ 4.2%</small>
                </div>

                <div className="stat-card warning">
                    <span>Issues Detected</span>
                    <strong>47</strong>
                    <small>Needs attention</small>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;
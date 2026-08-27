import { useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TenderUpload from "./components/TenderUpload";
import TenderViewer from "./components/TenderViewer";
import BidUpload from "./components/BidUpload";
import ComplianceResult from "./components/ComplianceResult";
import Report from "./components/Report";

function App() {

    const [page, setPage] = useState("dashboard");

    const startProcess = () => {
        setPage("tender");
    };

    const tenderAnalyzed = () => {
        setPage("viewer");
    };

    const continueToBid = () => {
        setPage("bid");
    };

    const analyzeBid = () => {
        setPage("result");
    };

    const generateReport = () => {
        setPage("report");
    };

    return (

        <div className="app">

            <Navbar />

            <main>

                {page === "dashboard" && (
                    <Dashboard
                        onStart={startProcess}
                    />
                )}

                {page === "tender" && (
                    <TenderUpload
                        onNext={tenderAnalyzed}
                    />
                )}

                {page === "viewer" && (
                    <div>

                        <TenderViewer />

                        <div className="center-button">

                            <button
                                className="primary-btn"
                                onClick={continueToBid}
                            >
                                Continue to Bid Upload →
                            </button>

                        </div>

                    </div>
                )}

                {page === "bid" && (
                    <BidUpload
                        onAnalyze={analyzeBid}
                    />
                )}

                {page === "result" && (
                    <ComplianceResult
                        onReport={generateReport}
                    />
                )}

                {page === "report" && (
                    <Report />
                )}

            </main>

        </div>
    );
}

export default App;
function ComplianceTable({ results }) {

    return (
        <div className="compliance-table">

            <div className="table-header">
                <span>Requirement</span>
                <span>Required</span>
                <span>Bidder</span>
                <span>Status</span>
            </div>

            {results.map((item, index) => (

                <div
                    className="table-row"
                    key={index}
                >

                    <span>{item.requirement}</span>

                    <span>{item.required}</span>

                    <span>{item.provided}</span>

                    <span
                        className={
                            item.status === "Compliant"
                                ? "status compliant"
                                : "status non-compliant"
                        }
                    >
                        {item.status}
                    </span>

                </div>

            ))}

        </div>
    );
}

export default ComplianceTable;
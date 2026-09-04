function TenderViewer({ tender }) {
    return (
        <div className="tender-viewer">

            <div className="tender-notice">
                <div className="document-header">
                    <div>
                        <h2>GeM Tender Notice</h2>
                        <p>Government e-Marketplace</p>
                    </div>

                    <span className="status-badge">
                        AI ANALYSIS READY
                    </span>
                </div>

                <div className="tender-info">

                    <div>
                        <span>Tender ID</span>
                        <strong>GEM/2026/B/458921</strong>
                    </div>

                    <div>
                        <span>Department</span>
                        <strong>Ministry of Electronics</strong>
                    </div>

                    <div>
                        <span>Bid Submission</span>
                        <strong>15 September 2026</strong>
                    </div>

                    <div>
                        <span>Estimated Value</span>
                        <strong>₹25,00,000</strong>
                    </div>

                </div>

                <div className="requirements">

                    <h3>Extracted Tender Requirements</h3>

                    <div className="requirement">
                        <span className="requirement-number">01</span>

                        <div>
                            <strong>Technical Specification</strong>
                            <p>
                                Product must support minimum 16GB RAM
                                and Intel Core i7 processor.
                            </p>
                        </div>
                    </div>

                    <div className="requirement">
                        <span className="requirement-number">02</span>

                        <div>
                            <strong>Experience</strong>
                            <p>
                                Bidder must have minimum 3 years
                                experience in supplying similar products.
                            </p>
                        </div>
                    </div>

                    <div className="requirement">
                        <span className="requirement-number">03</span>

                        <div>
                            <strong>Certification</strong>
                            <p>
                                Valid ISO 9001 certification is mandatory.
                            </p>
                        </div>
                    </div>

                    <div className="requirement">
                        <span className="requirement-number">04</span>

                        <div>
                            <strong>Turnover</strong>
                            <p>
                                Average annual turnover must be
                                greater than ₹50 lakh.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default TenderViewer;
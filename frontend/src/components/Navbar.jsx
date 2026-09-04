function Navbar({ currentPage, onNavigate }) {

    return (
        <nav className="navbar">

            <div
                className="nav-logo"
                onClick={() => onNavigate("dashboard")}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onNavigate("dashboard");
                    }
                }}
            >
                <span>GeM</span>
                <strong>BidGuard AI</strong>
            </div>


            <div className="nav-links">

                <button
                    className={
                        currentPage === "dashboard"
                            ? "nav-link active"
                            : "nav-link"
                    }
                    onClick={() => onNavigate("dashboard")}
                >
                    Dashboard
                </button>


                <button
                    className={
                        currentPage === "tender"
                            ? "nav-link active"
                            : "nav-link"
                    }
                    onClick={() => onNavigate("tender")}
                >
                    Tender
                </button>


                <button
                    className={
                        currentPage === "bid"
                            ? "nav-link active"
                            : "nav-link"
                    }
                    onClick={() => onNavigate("bid")}
                >
                    Bid
                </button>

            </div>

        </nav>
    );
}

export default Navbar;
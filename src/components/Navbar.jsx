function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <div className="logo-icon">
                    AI
                </div>

                <div>
                    <h2>BidGuard AI</h2>
                    <span>GeM Compliance Platform</span>
                </div>
            </div>

            <div className="nav-links">
                <button>Dashboard</button>
                <button>Tenders</button>
                <button>Compliance</button>
                <button>Reports</button>
            </div>

            <div className="user-profile">
                <div className="avatar">A</div>

                <div>
                    <strong>Admin</strong>
                    <span>Procurement Officer</span>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
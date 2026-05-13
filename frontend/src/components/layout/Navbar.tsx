import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
      style={{ background: "var(--pm-nav-bg)", borderColor: "var(--pm-border)" }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <span className="text-xl font-black" style={{ color: "var(--pm-accent)" }}>Paikar</span>
          <span className="text-xl font-black" style={{ color: "var(--pm-text)" }}>Mart</span>
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            to="/search"
            className="p-2 rounded-full border transition-colors"
            style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
          >
            <Search className="w-5 h-5" style={{ color: "var(--pm-text)" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
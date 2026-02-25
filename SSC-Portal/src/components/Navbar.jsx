// Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import SSClogo from "../assets/ssc-logo.png";
import OSASlogo from "../assets/osas-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);
  const [reportsMobileOpen, setReportsMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "bg-blue-600 text-white"
      : "text-gray-700 hover:bg-gray-100";

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={SSClogo} className="h-7 sm:h-9" />
          <img src={OSASlogo} className="h-7 sm:h-9" />
          <span className="font-bold text-blue-700 text-lg sm:text-2xl">
            EvOSAS
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2 text-sm lg:text-base">
          <Link to="/" className={`px-3 py-2 rounded-lg ${isActive("/")}`}>Home</Link>
          <Link to="/announcements" className={`px-3 py-2 rounded-lg ${isActive("/announcements")}`}>Announcements</Link>

          <DesktopDropdown label="About" items={[
            { label: "OSAS", path: "/about" },
            { label: "SSC", path: "/about" },
          ]} />

          <DesktopDropdown label="Reports" items={[
            { label: "Disciplinary Report", path: "/reports" },
            { label: "Lost & Found", path: "/reports" },
          ]} />

          <Link to="/evaluation" className={`px-3 py-2 rounded-lg ${isActive("/evaluation")}`}>Evaluation</Link>
          <Link to="/login" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg">Login</Link>
        </div>

        {/* Mobile btn */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t text-sm">
          <MobileLink to="/" label="Home" setOpen={setMobileOpen} />
          <MobileLink to="/announcements" label="Announcements" setOpen={setMobileOpen} />

          <MobileDropdown label="About" open={aboutMobileOpen} setOpen={setAboutMobileOpen}
            items={[{ label: "OSAS", path: "/about" }, { label: "SSC", path: "/about" }]} />

          <MobileDropdown label="Reports" open={reportsMobileOpen} setOpen={setReportsMobileOpen}
            items={[{ label: "Disciplinary Report", path: "/reports" }, { label: "Lost & Found", path: "/reports" }]} />

          <MobileLink to="/evaluation" label="Evaluation" setOpen={setMobileOpen} />
          <MobileLink to="/login" label="Login" setOpen={setMobileOpen} />
        </div>
      )}
    </nav>
  );
};

const DesktopDropdown = ({ label, items }) => (
  <div className="relative group">
    <div className="px-3 py-2 flex items-center gap-1 hover:bg-gray-100 rounded-lg cursor-pointer">
      {label} <ChevronDown size={16} />
    </div>
    <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
      {items.map((i) => (
        <Link key={i.label} to={i.path} className="block px-4 py-2 hover:bg-gray-50">
          {i.label}
        </Link>
      ))}
    </div>
  </div>
);

const MobileDropdown = ({ label, open, setOpen, items }) => (
  <div>
    <button onClick={() => setOpen(!open)} className="w-full flex justify-between px-4 py-3 hover:bg-gray-100">
      {label} <ChevronDown size={16} />
    </button>
    {open && items.map((i) => (
      <Link key={i.label} to={i.path} className="block px-8 py-2 hover:bg-gray-100">
        {i.label}
      </Link>
    ))}
  </div>
);

const MobileLink = ({ to, label, setOpen }) => (
  <Link to={to} onClick={() => setOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
    {label}
  </Link>
);

export default Navbar;
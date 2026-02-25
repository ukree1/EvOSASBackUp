// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import Announcements from "./pages/Announcements";
import About from "./pages/About";
import Reports from "./pages/Reports";
import Evaluation from "./pages/Evaluation";
import Login from "./pages/Login";

// Admin Pages
import Terms from "./AdminDashboard/Terms";
import Homepage from "./AdminDashBoard/Homepage";

// ✅ ProtectedRoute for admin pages
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const accepted = localStorage.getItem("acceptedTerms") === "true";

  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (!accepted) return <Navigate to="/terms" replace />;

  return children;
}

// ✅ Layout controller
function LayoutWrapper() {
  const location = useLocation();

  // ✅ Check if current route is admin or terms page
  const isAdminRoute =
    location.pathname.startsWith("/admin") || location.pathname === "/terms";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar: show only on public pages */}
      {!isAdminRoute && <Navbar />}

      <main className="flex-1">
        <Routes>
          {/* PUBLIC PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/about" element={<About />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/login" element={<Login />} />

          {/* TERMS PAGE */}
          <Route
            path="/terms"
            element={
              localStorage.getItem("isLoggedIn") === "true" &&
              localStorage.getItem("acceptedTerms") !== "true"
                ? <Terms />
                : <Navigate to="/" replace />
            }
          />

          {/* ADMIN PAGES */}
          <Route
            path="/admin/homepage"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/total-case-2025"
            element={
              <ProtectedRoute>
                <Homepage page="total-case-2025" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/lost-found"
            element={
              <ProtectedRoute>
                <Homepage page="lost-found" />
              </ProtectedRoute>
            }
          />

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer: show only on public pages */}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import osasLogo from "../assets/osas-logo.png";
import wolfBg from "../assets/wolf.png";
import AdminLogout from "./AdminLogout"; // New logout component

export default function Homepage() {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  /* ================= CHECK IF TERMS ACCEPTED ================= */
  useEffect(() => {
    const storedAcceptance = localStorage.getItem("acceptedTerms");
    if (storedAcceptance === "true") setAccepted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#2d3748]">

      {/* ================= HEADER ================= */}
      <div className="bg-blue-400 h-24 flex items-center px-8 justify-between">
        <div className="flex items-center">
          <img src={osasLogo} alt="OSAS Logo" className="w-50 h-16 object-contain mr-6" />
          <div className="h-12 w-[2px] bg-black mr-6" />
          <h1 className="text-2xl font-serif">Admin Dashboard</h1>
        </div>

        {/* LOGOUT WITH CONFIRMATION */}
        <AdminLogout />
      </div>

      <div className="flex flex-1 relative">

        {/* ================= SIDEBAR ================= */}
        <div
          className="w-72 relative flex flex-col items-center"
          style={{
            backgroundColor: "#4a5568",
            backgroundImage: `url(${wolfBg})`,
            backgroundSize: "350px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="absolute inset-0 bg-[#4a5568]/70" />
          <div className="relative z-10 p-4 space-y-4 text-white w-full">

            <div
              onClick={() => navigate("/admin/homepage")}
              className="bg-[#5a6378]/90 px-4 py-3 rounded-full hover:bg-[#6b7280] cursor-pointer text-center transition"
            >
              Homepage
            </div>

            <div
              onClick={() => navigate("/admin/fill-up-form")}
              className="bg-[#5a6378]/90 px-4 py-3 rounded-full hover:bg-[#6b7280] cursor-pointer text-center transition"
            >
              Fill up form
            </div>

            {/* VERBAL WARNING DROPDOWN */}
            <div>
              <div
                onClick={() => setOpenDropdown(!openDropdown)}
                className="relative bg-[#5a6378]/90 px-4 py-3 rounded-full hover:bg-[#6b7280] cursor-pointer transition text-center"
              >
                Verbal Warning
                <ChevronDown
                  size={18}
                  className={`absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    openDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openDropdown && (
                <div className="mt-2 space-y-2 ml-4">
                  <div
                    onClick={() => navigate("/admin/written-warning")}
                    className="bg-[#6b7280]/90 px-4 py-2 rounded-full hover:bg-[#7c8596] cursor-pointer text-sm text-center"
                  >
                    Written Warning
                  </div>
                  <div
                    onClick={() => navigate("/admin/1st-offense")}
                    className="bg-[#6b7280]/90 px-4 py-2 rounded-full hover:bg-[#7c8596] cursor-pointer text-sm text-center"
                  >
                    1st Offense
                  </div>
                  <div
                    onClick={() => navigate("/admin/2nd-offense")}
                    className="bg-[#6b7280]/90 px-4 py-2 rounded-full hover:bg-[#7c8596] cursor-pointer text-sm text-center"
                  >
                    2nd Offense
                  </div>
                  <div
                    onClick={() => navigate("/admin/3rd-offense")}
                    className="bg-[#6b7280]/90 px-4 py-2 rounded-full hover:bg-[#7c8596] cursor-pointer text-sm text-center"
                  >
                    3rd Offense
                  </div>
                </div>
              )}
            </div>

            {/* Other links */}
            <div
              onClick={() => navigate("/admin/article-7")}
              className="bg-[#5a6378]/90 px-4 py-3 rounded-full hover:bg-[#6b7280] cursor-pointer text-center transition"
            >
              Article 7
            </div>
            <div
              onClick={() => navigate("/admin/article-10")}
              className="bg-[#5a6378]/90 px-4 py-3 rounded-full hover:bg-[#6b7280] cursor-pointer text-center transition"
            >
              Article 10
            </div>
            <div
              onClick={() => navigate("/admin/approval-of-case")}
              className="bg-[#5a6378]/90 px-4 py-3 rounded-full hover:bg-[#6b7280] cursor-pointer text-center transition"
            >
              Approval of Case
            </div>

          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex-1 flex justify-center items-center bg-[#2d3748] relative">
          <div className="absolute w-[900px] h-[600px] bg-gray-300 rounded-[30px]" />

          <div className="relative z-10 flex gap-20">
            <div
              onClick={() => navigate("/admin/total-case-2025")}
              className="w-64 h-40 bg-blue-400 rounded-2xl flex items-center justify-center text-2xl font-serif cursor-pointer hover:scale-105 transition shadow-xl"
            >
              Total Case of 2025
            </div>
            <div
              onClick={() => navigate("/admin/lost-found")}
              className="w-64 h-40 bg-green-400 rounded-2xl flex items-center justify-center text-2xl font-serif cursor-pointer hover:scale-105 transition shadow-xl"
            >
              Lost and Found
            </div>
          </div> 

        </div>
      </div> 
    </div>
  );
}
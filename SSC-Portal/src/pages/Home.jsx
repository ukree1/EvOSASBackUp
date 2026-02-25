import React from "react";
import QuickCard from "../components/QuickCard";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to EvOSAS</h1>
        <p className="max-w-2xl mx-auto text-blue-100">
          Centralized student services, reports, announcements, and evaluations.
        </p>
      </section>

      {/* QuickCard section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        <QuickCard
          title="Submit Reports"
          desc="Disciplinary & Lost and Found"
          color="bg-blue-700"
          to="/reports"
        />
        <QuickCard
          title="Announcements"
          desc="Lost & Found updates"
          color="bg-blue-700"
          to="/announcements"
        />
        <QuickCard
          title="Evaluation"
          desc="Give feedback on events"
          color="bg-blue-700"
          to="/evaluation"
        />
      </section>
    </>
  );
};

export default Home;
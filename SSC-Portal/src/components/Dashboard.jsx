import React from 'react';
import Card from './Card';
import Table from './Table';
import Form from './Form';

const Dashboard = ({ openModal }) => {
  const cardsData = [
    { title: 'Upcoming Exams', value: '5', icon: 'Calendar', color: 'bg-blue-500' },
    { title: 'Results Published', value: '12', icon: 'FileText', color: 'bg-green-500' },
    { title: 'Notifications', value: '3', icon: 'Bell', color: 'bg-yellow-500' },
  ];

  const tableData = {
    headers: ['Exam Name', 'Date', 'Status'],
    rows: [
      ['SSC CGL 2023', '2023-10-15', 'Scheduled'],
      ['SSC CHSL 2023', '2023-11-20', 'Results Out'],
      ['SSC MTS 2023', '2023-12-05', 'Application Open'],
    ],
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="bg-gradient-to-red from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Welcome to SSC Portal</h2>
        <p className="text-blue-100">Stay updated with the latest exams, results, and notifications.</p>
      </section>

      {/* Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>

      {/* Table */}
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Exams</h3>
        <Table data={tableData} openModal={openModal} />
      </section>

      {/* Form */}
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Login</h3>
        <Form />
      </section>
    </div>
  );
};

export default Dashboard;
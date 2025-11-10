import React from "react";

const StatsBar = () => {
  const stats = [
    {
      number: "15+",
      label: "Years of Excellence",
    },
    {
      number: "500+",
      label: "Successful Projects",
    },
    {
      number: "98%",
      label: "Client Retention",
    },
    {
      number: "99.99%",
      label: "Infrastructure Uptime",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

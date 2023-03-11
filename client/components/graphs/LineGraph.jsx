import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import dashboardData from "../../data/dashboard";

const LineGraph = () => {
  return (
    <LineChart
      width={800}
      height={300}
      data={dashboardData.emailStats}
      margin={{ top: 15, bottom: 15 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="emailReceived" stroke="#66649A" />
      <Line type="monotone" dataKey="emailResponded" stroke="#6E6BF8" />
    </LineChart>
  );
};

export default LineGraph;

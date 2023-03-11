import React from "react";
import CustomCard from "../../components/cards/CustomCard";
import EmailStatsCard from "../../components/cards/EmailStatsCard";
import PurpleCustomCard from "../../components/cards/PurpleCustomCard";
import dashboardData from "../../data/dashboard";
import RecentEmails from "./RecentEmails";

const Dashboard = () => {
  return (
    <div className="container p-04">
      <div className="row">
        {dashboardData.data1.map((item) => (
          <CustomCard data={item} key={item.id} />
        ))}
      </div>

      <div className="row">
        {/* purple cards */}
        <div style={{ display: "flex", flex: 2, flexDirection: "column" }}>
          {dashboardData.data2.map((item) => (
            <PurpleCustomCard data={item} key={item.id} />
          ))}
        </div>
        {/* line chart */}
        <div style={{ display: "flex", flex: 3, flexDirection: "column" }}>
          <EmailStatsCard />
        </div>
      </div>

      <div style={{ margin: "0em 1em" }}>
        <RecentEmails />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";

import ExitFrame from "./ExitFrame";
import ActiveWebhooks from "./pages/debugCards/ActiveWebhooks";
import BillingAPI from "./pages/debugCards/BillingAPI";
import DebugIndex from "./pages/debugCards/DebugIndex";
import DevNotes from "./pages/debugCards/DevNotes";
import GetData from "./pages/debugCards/GetData";
import Dashboard from "./pages/dashboard";
import EmailsListing from "./pages/emails";
import Settings from "./pages/settings";
import CreateEmailTemplate from "./pages/email-templates/CreateEmailTemplate";
import EditEmailTemplate from "./pages/email-templates/EditEmailTemplate";

const routes = {
  "/": () => <Dashboard />,
  "/exitframe": () => <ExitFrame />,
  //Debug Cards
  "/debug": () => <DebugIndex />,
  "/debug/activeWebhooks": () => <ActiveWebhooks />,
  "/debug/getData": () => <GetData />,
  "/debug/billing": () => <BillingAPI />,
  "/debug/devNotes": () => <DevNotes />,
  // dashboard routes
  "/dashboard": () => <Dashboard />,
  // email routes
  "/emails": () => <EmailsListing />,
  // email templates routes
  "/email-templates": () => <CreateEmailTemplate />,
  "/edit-template": () => <EditEmailTemplate />,
  // settings routes
  "/settings": () => <Settings />,
};

export default routes;

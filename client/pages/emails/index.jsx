import React, { useState } from "react";
import IconTabs from "../../components/tabs/IconsTab";
import { getTabComponent } from "./utils";

const EmailsListing = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <IconTabs value={value} setValue={setValue} />
      {getTabComponent(value)}
    </div>
  );
};

export default EmailsListing;

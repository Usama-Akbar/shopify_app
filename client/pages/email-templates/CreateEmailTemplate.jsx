import { Button, Typography } from "@mui/material";
import React from "react";
import ReactLabelSelect from "../../components/select/ReactLabelSelect";
import ReactSelect from "../../components/select/ReactSelect";
import emailTemplates from "../../data/emailTemplates";
import "./emailTemplate.css";

const CreateEmailTemplate = () => {
  return (
    <div className="container">
      <Typography variant="h6" component="div" className="bold">
        Manage Templates
      </Typography>
      <div className="email-template-card">
        {/* left container */}
        <div className="sub-container">
          <div className="border-container flex">
            <div className="classification-container">
              <Typography
                variant="subtitle1"
                component="div"
                className="form-title mb-5"
              >
                Classification
              </Typography>
              <ReactSelect menu={emailTemplates.classifications} />
            </div>
            <div className="status-container">
              <Typography
                variant="subtitle1"
                component="div"
                className="form-title mb-5"
              >
                Templates
              </Typography>
              <ReactSelect menu={emailTemplates.templates} />
            </div>
          </div>
          <div className="border-container">
            <Typography
              variant="subtitle1"
              component="div"
              className="form-title mb-5"
            >
              Classification to answer for AI
            </Typography>
            <ReactSelect
              menu={emailTemplates.classifications}
              fullWidth={true}
            />
            <ReactLabelSelect
              label={"Section"}
              fullWidth={true}
              menu={emailTemplates.classifications}
            />
          </div>
          <div className="border-container">
            <Typography
              variant="subtitle1"
              component="div"
              className="form-title"
            >
              Classification to answer for Humans
            </Typography>
            <Typography
              variant="p"
              component="div"
              className="form-text mt-5 mb-5"
            >
              The emails with these keywords will be filtered.
            </Typography>
            <ReactSelect
              menu={emailTemplates.classifications}
              fullWidth={true}
            />
          </div>
        </div>
        <div className="center-line" />
        {/* right container */}
        <div className="sub-container">
          <div className="left-border-container">
            <Typography
              variant="subtitle1"
              component="div"
              className="form-title mb-5"
            >
              Generate Template
            </Typography>
            <div className="mb-5">
              <Typography
                variant="subtitle1"
                component="div"
                className="form-text-bold mb-5"
              >
                Select Category
              </Typography>
              <ReactSelect
                menu={emailTemplates.classifications}
                fullWidth={true}
              />
            </div>
            <div className="mb-5">
              <Typography
                variant="subtitle1"
                component="div"
                className="form-text-bold mb-5"
              >
                Select Tone
              </Typography>
              <ReactSelect menu={emailTemplates.tones} fullWidth={true} />
            </div>
            <div className="flex-end-row mt-5">
              <Button
                variant="outlined"
                className="btn-shadow form-title-btn mt-5"
              >
                Clear everything
              </Button>
              <div style={{ margin: "0px 7px" }} />
              <Button
                variant="contained"
                className="btn-shadow form-title-btn mt-5"
              >
                Generate
              </Button>
            </div>
            <Typography
              variant="subtitle1"
              component="div"
              className="form-title mt-5 mb-5"
            >
              Generated Template
            </Typography>
            <div className="form-text">
              Hi, This is ABC I have done this thing which I think you should
              take a look at. Check this out at www.ab123.com.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmailTemplate;

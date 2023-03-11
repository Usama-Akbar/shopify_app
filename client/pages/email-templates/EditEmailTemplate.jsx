import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import ReactLabelSelect from "../../components/select/ReactLabelSelect";
import ReactSelect from "../../components/select/ReactSelect";
import emailTemplates from "../../data/emailTemplates";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import "./emailTemplate.css";

const EditEmailTemplate = () => {
  return (
    <div className="container">
      <Typography variant="h6" component="div" className="bold">
        Send Email
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
                Status
              </Typography>
              <ReactSelect menu={emailTemplates.status} />
            </div>
          </div>
          <div className="border-container">
            <Typography
              variant="subtitle1"
              component="div"
              className="form-title"
            >
              Message Attributes
            </Typography>
            <ReactLabelSelect
              label={"Language"}
              menu={emailTemplates.languages}
            />
            <ReactLabelSelect
              label={"Section"}
              menu={emailTemplates.classifications}
            />
          </div>
          <div className="border-container">
            <Typography
              variant="subtitle1"
              component="div"
              className="form-title"
            >
              Sentiment Analysis
            </Typography>
            <Typography
              variant="p"
              component="div"
              className="form-text mb-5 mt-5"
            >
              The text sentiment for this mesage
            </Typography>
            {emailTemplates.sentiments.map((item) => (
              <Button
                key={item.id}
                style={{ fontFamily: "Bold" }}
                variant="outlined"
                size="large"
                className="btn-container"
              >
                {item.label}
              </Button>
            ))}
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
              Recovery of your email
            </Typography>
            <div className="row-container">
              <Typography
                variant="subtitle1"
                component="div"
                className="bold fade-text"
                style={{ fontFamily: "Bold", color: "#787878" }}
              >
                From
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                className="bold"
                style={{ fontFamily: "Bold", color: "#787878" }}
              >
                Uzair Hamid
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                style={{ fontFamily: "Bold", color: "#787878" }}
                className="fade-text bold"
              >
                {"<"}umairabx123@gmail.com{">"}
              </Typography>
            </div>
            <div className="row-container">
              <Typography
                variant="subtitle1"
                component="div"
                className="bold fade-text"
                style={{ fontFamily: "Bold", color: "#787878" }}
              >
                To
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                className="bold"
                style={{ fontFamily: "Bold", color: "#787878" }}
              >
                Grey Buck
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                className="fade-text bold"
                style={{ fontFamily: "Bold", color: "#787878" }}
              >
                {"<"}greybuck2022@gmail.com{">"}
              </Typography>
            </div>
            <div
              className="form-text-bold mb-5 mt-5"
              style={{ width: "50rem" }}
            >
              Hi, This is ABC I have done this thing which I think you should
              take a look at. Check this out at www.ab123.com and then click
              further to learn about it. Its a nice app it works well. It has
              good design and good quality of code. Let me know what you think
              about it. <br /> Best Regards
            </div>

            <Button
              variant="text"
              component="label"
              style={{ fontFamily: "Bold", color: "#787878" }}
            >
              <AttachFileIcon htmlColor="#D9D9D9" />
              Attachments (0)
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </div>

          <div className="flex-end-row">
            <Button variant="outlined" className="btn-shadow form-title-btn">
              Save as Draft
            </Button>
            <div style={{ margin: "0px 7px" }} />
            <Button variant="contained" className="btn-shado form-title-btn">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmailTemplate;

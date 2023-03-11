import EmailAttachmentsIcon from "../assets/images/email-attachment.png";
import AIBotIcon from "../assets/images/ai-bot.png";
import FaceIcon from "../assets/images/face.png";
import TimerIcon from "../assets/images/timer.png";
import MoneyIcon from "../assets/images/money.png";
import SeventyFiveIcon from "../assets/images/75-percent.png";
import FortyFiveIcon from "../assets/images/45-percent.png";

const data1 = [
  {
    id: "emails-received",
    image: EmailAttachmentsIcon,
    progress: 45,
    title: "Emails Received",
    count: 200,
    description: "Emails received in this week -  223",
  },
  {
    id: "emails-replied-by-ai",
    image: AIBotIcon,
    progress: 62,
    title: "Emails Replied by AI",
    count: 121,
    description: "Emails received in this week -  223",
  },
  {
    id: "emails-required-human-attention",
    image: FaceIcon,
    progress: 62,
    title: "Emails Required human attention",
    count: 121,
    description: "Emails received in this week -  223",
  },
];

const data2 = [
  {
    id: "time-saved",
    image: TimerIcon,
    progressImage: SeventyFiveIcon,
    title: "Time Saved",
    description: "From Emails received this week",
    duration: "1 hr 32 m",
  },
  {
    id: "money-saved",
    image: MoneyIcon,
    progressImage: FortyFiveIcon,
    title: "Money Saved",
    description: "From Emails received this week",
    duration: "$ 1320",
  },
];

const emailStats = [
  {
    name: "Feb 14",
    emailReceived: 50,
    emailResponded: 100,
  },
  {
    name: "Feb 15",
    emailReceived: 100,
    emailResponded: 150,
  },
  {
    name: "Feb 16",
    emailReceived: 150,
    emailResponded: 200,
  },
  {
    name: "Feb 17",
    emailReceived: 500,
    emailResponded: 560,
  },
  {
    name: "Feb 18",
    emailReceived: 350,
    emailResponded: 250,
  },
  {
    name: "Feb 19",
    emailReceived: 400,
    emailResponded: 450,
  },
  {
    name: "Feb 20",
    emailReceived: 550,
    emailResponded: 500,
  },
];

const dashboardData = {
  data1,
  data2,
  emailStats,
};

export default dashboardData;

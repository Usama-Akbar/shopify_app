const classifications = [
  {
    id: "primary",
    value: "Primary",
    label: "Primary",
  },
  {
    id: "secondary",
    value: "Secondary",
    label: "Secondary",
  },
];
const templates = [
  {
    id: "template1",
    value: "Template 1",
    label: "Template 1",
  },
  {
    id: "template2",
    value: "Template 2",
    label: "Template 2",
  },
];

const status = [
  {
    id: "pending",
    value: "Pending",
    label: "Pending",
  },
  {
    id: "complete",
    value: "Complete",
    label: "Complete",
  },
];

const languages = [
  {
    id: "english",
    value: "🇺🇸 English",
    label: "🇺🇸 English",
  },
  {
    id: "german",
    value: "🇩🇪 German",
    label: "🇩🇪 German",
  },
];

const tones = [
  {
    id: "formal",
    value: "Formal",
    label: "Formal",
  },
  {
    id: "semi-formal",
    value: "Semi Formal",
    label: "Semi Formal",
  },
];

const sentiments = [
  {
    id: "happy",
    value: "😄 Happy",
    label: "😄 Happy",
  },
  {
    id: "neutral",
    value: "😒 Neutral",
    label: "😒 Neutral",
  },
  {
    id: "angry",
    value: "😠 Angry",
    label: "😠 Angry",
  },
];

const emailTemplates = {
  classifications,
  languages,
  sentiments,
  status,
  templates,
  tones,
};

export default emailTemplates;

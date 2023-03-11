export function getCurrentRouteName(url) {
  switch (url) {
    case "/dashboard":
      return "Home";
    case "/emails":
      return "Emails";
    case "/email-templates":
      return "Templates";
    case "/settings":
      return "Email";
    default:
      return "Home";
  }
}

export function getCurrentTitle(url) {
  switch (url) {
    case "/settings":
      return "Settings";
    default:
      return "Dashboard";
  }
}

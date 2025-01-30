class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi")) {
      this.actionProvider.greet();
    } else if (lowercase.includes("how are you")) {
      this.actionProvider.helloHaye();
    } else if (
      lowercase.includes("services") ||
      lowercase.includes("service")
    ) {
      this.actionProvider.listServices();
    } else if (lowercase.includes("pricing") || lowercase.includes("cost")) {
      this.actionProvider.showPricing();
    } else if (
      lowercase.includes("technologies") ||
      lowercase.includes("tech stack")
    ) {
      this.actionProvider.listTechnologies();
    } else if (
      lowercase.includes("hire") ||
      lowercase.includes("job") ||
      lowercase.includes("career")
    ) {
      this.actionProvider.hiringInfo();
    } else if (lowercase.includes("contact")) {
      this.actionProvider.contactInfo();
    } else if (
      lowercase.includes("about us") ||
      lowercase.includes("who are you")
    ) {
      this.actionProvider.aboutUs();
    } else if (
      lowercase.includes("portfolio") ||
      lowercase.includes("projects")
    ) {
      this.actionProvider.portfolio();
    } else if (
      lowercase.includes("why choose us") ||
      lowercase.includes("why you")
    ) {
      this.actionProvider.whyChooseUs();
    } else if (
      lowercase.includes("achievements") ||
      lowercase.includes("awards")
    ) {
      this.actionProvider.achievements();
    } else if (
      lowercase.includes("reviews") ||
      lowercase.includes("client feedback")
    ) {
      this.actionProvider.clientReviews();
    } else if (
      lowercase.includes("work process") ||
      lowercase.includes("how you work")
    ) {
      this.actionProvider.workProcess();
    } else {
      this.actionProvider.fallbackMessage();
    }
  }
}

export default MessageParser;

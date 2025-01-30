class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessageToState = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  greet = () => {
    const message = this.createChatBotMessage(
      "Hello! How can we assist you today?"
    );
    this.addMessageToState(message);
  };

  helloHaye = () => {
    const message = this.createChatBotMessage("I'm fine. How can I help you?");
    this.addMessageToState(message);
  };

  listServices = () => {
    const message = this.createChatBotMessage(
      "We offer Web Development, Mobile App Development, AI Solutions, and Cloud Services. Which one are you interested in?"
    );
    this.addMessageToState(message);
  };

  showPricing = () => {
    const message = this.createChatBotMessage(
      "Our pricing depends on the project scope. We offer flexible pricing models such as fixed-price, hourly, and dedicated teams. Contact us for a custom quote!"
    );
    this.addMessageToState(message);
  };

  listTechnologies = () => {
    const message = this.createChatBotMessage(
      "We work with React, Node.js, Python, AI/ML, AWS, Firebase, and many more. Need help choosing the right tech for your project?"
    );
    this.addMessageToState(message);
  };

  hiringInfo = () => {
    const message = this.createChatBotMessage(
      "We’re always looking for talented developers! Check out our Careers page or send your resume to careers@jadeedsoft.com."
    );
    this.addMessageToState(message);
  };

  contactInfo = () => {
    const message = this.createChatBotMessage(
      "You can reach us at info@jadeedsoft.com or call us at +92 303 8896 297."
    );
    this.addMessageToState(message);
  };

  aboutUs = () => {
    const message = this.createChatBotMessage(
      "Jadeed Soft is a leading software house specializing in innovative tech solutions for businesses. We focus on quality, scalability, and cutting-edge technologies."
    );
    this.addMessageToState(message);
  };

  portfolio = () => {
    const message = this.createChatBotMessage(
      "Check out our portfolio here: [Link to Portfolio]. We've worked with startups, enterprises, and everything in between!"
    );
    this.addMessageToState(message);
  };

  whyChooseUs = () => {
    const message = this.createChatBotMessage(
      "We deliver high-quality solutions with expertise in modern technologies, timely delivery, and excellent support. Our clients trust us for our commitment and innovation."
    );
    this.addMessageToState(message);
  };

  achievements = () => {
    const message = this.createChatBotMessage(
      "We’ve won multiple awards and successfully delivered over 500+ projects worldwide. Our clients include Fortune 500 companies and top startups!"
    );
    this.addMessageToState(message);
  };

  clientReviews = () => {
    const message = this.createChatBotMessage(
      "Our clients love working with us! Read their testimonials here: [Link to Reviews]"
    );
    this.addMessageToState(message);
  };

  workProcess = () => {
    const message = this.createChatBotMessage(
      "We follow Agile methodologies, ensuring iterative development, continuous feedback, and top-notch quality in every project. Let’s discuss your project!"
    );
    this.addMessageToState(message);
  };

  fallbackMessage = () => {
    const message = this.createChatBotMessage(
      "I didn't get your message. Try asking about our services, portfolio, pricing, or contact details."
    );
    this.addMessageToState(message);
  };
}

export default ActionProvider;

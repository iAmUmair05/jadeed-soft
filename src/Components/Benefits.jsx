const benefitsData = [
  {
    title: "Cutting-Edge Technology",
    description:
      "We use the latest tools and technologies to ensure your projects are future-proof and efficient.",
    icon: "💻",
  },
  {
    title: "Expert Team",
    description:
      "Our team comprises skilled professionals dedicated to delivering top-notch solutions.",
    icon: "👨‍💻",
  },
  {
    title: "Scalable Solutions",
    description:
      "We design solutions that grow with your business, ensuring long-term success.",
    icon: "📈",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Your needs are our priority. We work closely with you to achieve your goals.",
    icon: "🤝",
  },
  {
    title: "Innovative Strategies",
    description:
      "We bring creativity and innovation to every project, ensuring unique solutions.",
    icon: "🌟",
  },
  {
    title: "Proven Track Record",
    description:
      "Our experience speaks for itself, with numerous successful projects across industries.",
    icon: "📜",
  },
  {
    title: "Seamless Communication",
    description:
      "We keep you in the loop at every stage, ensuring transparency and collaboration.",
    icon: "📞",
  },
  {
    title: "24/7 Support",
    description:
      "Our team is always ready to assist you, ensuring smooth and uninterrupted service.",
    icon: "🕒",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "We provide high-quality services at competitive prices, maximizing your return on investment.",
    icon: "💰",
  },
  {
    title: "Sustainable Practices",
    description:
      "We are committed to sustainability, integrating eco-friendly practices into our workflows.",
    icon: "🌱",
  },
];

const Benefits = () => {
  return (
    <section className="sm:mt-24 mt-10">
      <div className="custom-container">
        <h2 className="main-heading">Why Choose Jadeed Soft Technology?</h2>
        <p className="text-para mb-12 text-center">
          Discover the unique benefits of partnering with us for your technology
          needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg shadow-md p-6 text-left hover:shadow-xl transition-shadow duration-300 border border-gray-300"
            >
              <div className="text-4xl text-blue-500 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-heading">
                {benefit.title}
              </h3>
              <p className="text-para">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

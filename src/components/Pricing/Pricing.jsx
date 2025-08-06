const pricingPlans = [
  {
    name: "Basic",
    price: "$55.55",
    period: "Per month",
    description:
      "Adipiscing elit sed do eiusmod tempor incididunt ut labore et.",
    buttonStyle:
      "border border-white text-white hover:bg-red-600 hover:border-red-600 hover:text-white",
  },
  {
    name: "Advanced",
    price: "$75.75",
    period: "Per month",
    description:
      "Adipiscing elit sed do eiusmod tempor incididunt ut labore et.",
    buttonStyle:
      "bg-red-500 text-white border border-red-500 hover:bg-red-600 hover:border-red-600 hover:text-white",
  },
  {
    name: "Strong",
    price: "$95.50",
    period: "Per month",
    description:
      "Adipiscing elit sed do eiusmod tempor incididunt ut labore et.",
    buttonStyle:
      "border border-white text-white hover:bg-red-600 hover:border-red-600 hover:text-white",
  },
];

const Pricing = () => {
  return (
    <section
      className="text-white py-16 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/bg-1.png')",
      }}
    >
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-12">
          <p className="uppercase text-sm tracking-widest text-gray-300">
            Personal Training
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing plans</h2>
          <p className="text-gray-400 max-w-lg">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#111111] p-8 rounded-lg shadow-lg flex flex-col items-start"
            >
              <h3 className="text-lg font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                {plan.price}
              </p>
              <p className="text-gray-400 mb-6">{plan.period}</p>
              <p className="text-gray-400 mb-8">{plan.description}</p>
              <button
                className={`${plan.buttonStyle} px-6 py-2 font-semibold transition`}
              >
                Get Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

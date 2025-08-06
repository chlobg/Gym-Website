import ServiceCard from "./ServiceCard";
import "../../App.css";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <p className="services-subtitle">WHAT WE OFFER</p>
        <h2>
          Achieve amazing results
          <br />
          with our services
        </h2>
        <div className="services-arrow flex justify-center">
          <svg
            fill="#FCFCFC"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="15"
            viewBox="0 0 25 15"
          >
            <text
              transform="translate(0 15) rotate(-90)"
              fontSize="29px"
              fontFamily="PlayfairDisplay-Regular, Playfair Display"
            >
              <tspan x="0" y="20">
                «
              </tspan>
            </text>
          </svg>
        </div>
      </div>

      <div className="services-grid">
        <ServiceCard
          iconClass="icon-equipment"
          title="Best equipment"
          description="Consectetur adipiscing elit, sed do eiusmod tempo."
        />
        <ServiceCard
          iconClass="icon-training"
          title="Training plan"
          description="Consectetur adipiscing elit, sed do eiusmod tempo."
        />
        <ServiceCard
          iconClass="icon-food"
          title="Nutrition plan"
          description="Consectetur adipiscing elit, sed do eiusmod tempo."
        />
        <ServiceCard
          iconClass="icon-pool"
          title="Swimming pool"
          description="Consectetur adipiscing elit, sed do eiusmod tempo."
        />
      </div>
    </section>
  );
};

export default Services;

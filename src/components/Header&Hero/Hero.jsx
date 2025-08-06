import NavLinks from "./NavLinks";
import "../../App.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url('https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/img-001-copyright.jpg')`,
      }}
    >
      <div className="hero-content">
        <h1>
          Ultimate <br /> Crossfit <br />
          <span>Facility</span>
        </h1>
      </div>

      <NavLinks />
    </section>
  );
};

export default Hero;

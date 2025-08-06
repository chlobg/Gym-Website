const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
      <div className="w-full h-full">
        <img
          src="https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/img-002-copyright.jpg"
          alt="About Gym"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="about-content">
        <h2>Sport has the power to change the world</h2>
        <p>
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident.
        </p>
        <button className="about-btn">About Us</button>
      </div>
    </div>
  );
};

export default About;

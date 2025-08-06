import About from "./About";
import ReviewSection from "./ReviewSection";
import NavSports from "./NavSports";

const ReviewBlock = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/bg-2-copyright.jpg')",
      }}
    >
      {/* Contenu About + Review */}
      <div className="container mx-auto px-4 py-16">
        <About />
        <ReviewSection />
      </div>

      {/* NavSports sous Review */}
      <NavSports />
    </section>
  );
};

export default ReviewBlock;

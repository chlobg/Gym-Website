import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sportsTags = [
  "Swimming",
  "Pool",
  "Healthy",
  "Bodybuilding",
  "Fitness",
  "Gym",
  "Personal",
  "Trainer",
  "Workout",
  "Krossfit",
  "Sport",
];

const loopTags = [...sportsTags, ...sportsTags];

const NavSports = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="bg-red-600 py-3 overflow-hidden">
      <Slider {...settings}>
        {loopTags.map((tag, index) => (
          <div
            key={index}
            className="text-white font-semibold text-center whitespace-nowrap px-4"
          >
            {tag}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NavSports;

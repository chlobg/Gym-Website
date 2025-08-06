import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

const navLinks = [
  "#gym",
  "#sportswear",
  "#pumping",
  "#pool",
  "#swimming",
  "#bodybuilding",
  "#personal",
  "#health",
  "#training",
  "#coach",
  "#crossfit",
  "#sport",
  "#workout",
  "#fitness",
  "#trainer",
  "#program",
];

const loopLinks = [...navLinks, ...navLinks];

const NavLinks = () => {
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
    <div className="nav-slider overflow-hidden">
      <Slider {...settings}>
        {loopLinks.map((tag, index) => (
          <div key={index} className="nav-slide-item">
            {tag}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NavLinks;

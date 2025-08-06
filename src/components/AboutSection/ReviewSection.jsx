import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    img: "https://gym-store.axiomthemes.com/wp-content/uploads/2020/04/testi-3-copyright-120x120.jpg",
    text: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
    name: "Gloria Gordon",
    role: "Client",
  },
  {
    id: 2,
    img: "https://gym-store.axiomthemes.com/wp-content/uploads/2020/04/testi-1-copyright-300x300.jpg",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Michael Smith",
    role: "Client",
  },
  {
    id: 3,
    img: "https://gym-store.axiomthemes.com/wp-content/uploads/2020/04/testi-2-copyright-120x120.jpg",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    name: "Sophia Johnson",
    role: "Client",
  },
];

const ReviewSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full flex justify-center relative py-12">
      <div className="w-full max-w-4xl relative">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          loop
          spaceBetween={30}
          slidesPerView={1.5} // <-- changed for preview effect
          centeredSlides={true} // <-- ensure this is true
          className="pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col items-center text-center px-6">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mb-6 object-cover"
                />
                <p className="text-lg leading-relaxed mb-4 text-white max-w-2xl">
                  {review.text}
                </p>
                <div className="text-yellow-400 text-3xl mb-2">”</div>
                <h4 className="font-bold text-white">{review.name}</h4>
                <span className="text-gray-400 text-sm">{review.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrows */}
        <button
          ref={prevRef}
          className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 border border-white rounded-full text-white hover:bg-white hover:text-black transition z-10"
        >
          ←
        </button>
        <button
          ref={nextRef}
          className="custom-next absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 border border-white rounded-full text-white hover:bg-white hover:text-black transition z-10"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;

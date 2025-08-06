import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const posts = [
  {
    category: "TRAINING",
    title: "That’s why stretching is worth trying",
    date: "Apr 21, 2020",
    comments: "0 Comments",
    image:
      "https://gym-store.axiomthemes.com/wp-content/uploads/2020/04/img-005-copyright-890x664.jpg",
    link: "/blog/stretching-worth-trying",
  },
  {
    category: "TRAINING",
    title: "10 strength exercises to improve your running",
    date: "Apr 21, 2020",
    comments: "1 Comment",
    image:
      "https://gym-store.axiomthemes.com/wp-content/uploads/2020/04/img-006-copyright-890x664.jpg",
    link: "/blog/strength-exercises-running",
  },
  {
    category: "TRAINING",
    title: "How to choose the right workout strategy",
    date: "Apr 21, 2020",
    comments: "0 Comments",
    image:
      "https://gym-store.axiomthemes.com/wp-content/uploads/2020/04/img-007-copyright-890x664.jpg",
    link: "/blog/right-workout-strategy",
  },
  {
    category: "TRAINING",
    title: "Top 5 workout locations to vary your daily routine",
    date: "Apr 21, 2020",
    comments: "0 Comments",
    image:
      "https://gym-store.axiomthemes.com/wp-content/uploads/2020/04/img-008-copyright-890x664.jpg",
    link: "/blog/workout-locations",
  },
  {
    category: "TRAINING",
    title: "10 strength exercises to improve your running",
    date: "Apr 21, 2020",
    comments: "1 Comment",
    image:
      "https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/img-015-copyright-890x664.jpg",
    link: "/blog/workout-locations",
  },
];

const Blog = () => {
  return (
    <section
      className="text-white py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/bg-1.png')",
      }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-widest text-gray-300">
            Our Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest new &amp; updates
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          allowTouchMove={false} // stops user from interrupting the flow
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <a
                href={post.link}
                className="group block hover:opacity-90 transition"
              >
                <div className="w-full h-56 overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs font-bold uppercase text-gray-400 mb-1">
                  {post.category}
                </p>
                <h3 className="font-semibold text-lg group-hover:text-red-500 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                  <span>{post.date}</span>
                  <span>{post.comments}</span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const testimonialsData = [
  {
    name: "Andrew Starc",
    position: "Client",
    avatarSrc: "/testimonial1.jpeg",
    rating: 5,
    comment:
      "Jadeed Soft Technologies transformed our digital presence! Their custom software development exceeded our expectations. The team's dedication to quality and innovation is commendable. Highly recommend their services.",
  },
  {
    name: "jos Williams",
    position: "Client",
    avatarSrc: "/testimonial2.jpeg",
    rating: 5,
    comment:
      "Working with Jadeed Soft was a game-changer for our business. Their web design and development team brought our vision to life seamlessly. From start to finish, their professionalism and attention to detail were exceptional.",
  },
  {
    name: "Dawson",
    position: "Client",
    avatarSrc: "/testimonial3.jpeg",
    rating: 4,
    comment:
      "Jadeed Soft Technologies delivered outstanding mobile applications for our company. Their expertise in mobile app development is unmatched. We're thrilled with the results and look forward to future collaborations.",
  },
  {
    name: "Harrison",
    position: "Client",
    avatarSrc: "/testimonial4.jpeg",
    rating: 5,
    comment:
      "Choosing Jadeed Soft for social media marketing was one of the best decisions we made. Their strategies boosted our online presence and engagement significantly. Kudos to the team for their expertise and dedication!",
  },
];

const TestimonialSection = () => {
  return (
    <div className="">
      <section className=" custom-container">
        <h1 className="main-heading">𝖳𝖾𝗌𝗍𝗂𝗆𝗈𝗇𝗂𝖺𝗅𝗌</h1>
        <p className="text-para mt-2 text-center">
          See what our clients say about us
        </p>

        <div className="w-[100%] sm:w-[90%] overflow-hidden mx-auto sm:mt-12 mt-5 ">
          <Swiper
            slidesPerView={"auto"}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
            centeredSlides={true}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 100, // Adjust this for spacing between slides
              depth: 220, // Adjust this to control 3D depth
              modifier: 1, // Controls overall scaling
              slideShadows: false,
            }}
            loop={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}" style="background-color: #faa32f; width: 20px; height: 20px; border-radius: 50%; display: inline-block; margin: 0 4px;"></span>`,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 },
            }}
            modules={[Pagination, EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="bg-secondary shadow-lg shadow-cyan-500/10 mb-20 mt-6"
              >
                {({ isActive }) => (
                  <div
                    className={` w-full h-[360px] overflow-hidden grid grid-cols-1 md:grid-col-2 justify-center items-center gap-12 py-4 rounded-lg shadow-lg ${
                      isActive ? "border-2 border-heading" : ""
                    } `}
                  >
                    <div className="mt-3 flex flex-col items-center">
                      <Image
                        src={testimonial.avatarSrc}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className={`mb-4 w-30 h-30 text-large rounded-full ${
                          isActive ? "border-8 p-1" : "border-2 p-0.5"
                        } border-buttonColor `}
                      />
                      <h5 className="font-sans text-xl font-semibold leading-snug tracking-normal antialiased mb-1 text-dark">
                        {testimonial.name}
                      </h5>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className="text-yellow-500"
                          />
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className="text-gray-300"
                          />
                        ))}
                      </div>
                      <p className="font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                        {testimonial.position}
                      </p>
                      <p className="font-sans text-base font-light leading-relaxed text-inherit antialiased mt-4 px-4 text-center text-para">
                        &quot;{testimonial.comment}&quot;
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;

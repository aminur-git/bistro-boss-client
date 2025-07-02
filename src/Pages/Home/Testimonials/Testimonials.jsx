import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      />

      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <div key={review._id}>
              <SwiperSlide key={review._id}>
                <div className="text-center gap-6 flex flex-col justify-center items-center py-10 px-10 lg:max-w-5xl mx-auto">
                  <Rating  itemStyles={{itemShapes: RoundedStar, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5'}} style={{ maxWidth: 180 }} value={review.rating} readOnly />
                  <BiSolidQuoteLeft className="text-6xl" />
                  <div>
                    <p className="leading-7">{review.details}</p>
                    <h1 className="text-2xl font-medium text-[#CD9003] py-2">
                      {review.name}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </>
    </section>
  );
};

export default Testimonials;

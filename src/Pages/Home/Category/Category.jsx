import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
      heading={'ORDER ONLINE'}
      subHeading={'---From 11:00am to 10:00pm---'}
      ></SectionTitle>
      <Swiper
      slidesPerView={4}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide >
        <img src={slide1} alt="slide-image" />
        <h3 className="uppercase text-xs sm:text-2xl cinzel text-center text-white text-shadow-md -mt-16">salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="slide-image" />
        <h3 className="uppercase text-xs sm:text-2xl cinzel text-center text-white text-shadow-md -mt-16">pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="slide-image" />
        <h3 className="uppercase text-xs sm:text-2xl cinzel text-center text-white text-shadow-md -mt-16">Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="slide-image" />
        <h3 className="uppercase text-xs sm:text-2xl cinzel text-center text-white text-shadow-md -mt-16">desserts</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="slide-image" />
        <h3 className="uppercase text-xs sm:text-2xl cinzel text-center text-white text-shadow-md -mt-16">salads</h3>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Category;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// Register the Autoplay module
SwiperCore.use([Autoplay]);

const images = [
  "https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/pages/top/kv/kv_gift_pc.webp",
  "https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/pages/top/kv/kv_life_pc.webp",
  "https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/pages/top/kv/kv_owners_pc.webp",
];

const PhotoSlider: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img width={1000} height={600} src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PhotoSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

// 최초 작업자: 이광호
// 2022-07-04
// 슬라이드 배너 컴포넌트

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = ({ data, idx }) => {
  return (
    <div className="banner_content_tag">
      {/* 슬라이드 검은색 투명도 */}
      <div className="blind"></div>
      {/* 슬라이더 시작 */}
      <Swiper
        style={{ width: "1200px" }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }} // 추가
      >
        {/* 슬라이드 배너 반복문  */}

        {data &&
          data.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="main_banner"
                style={{ backgroundImage: `URL(${data.img})`}}>
                <p className="banner_title">{data.title} </p>
                <p className="banner_type">펀딩</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;

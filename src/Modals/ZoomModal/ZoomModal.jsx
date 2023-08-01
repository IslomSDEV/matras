import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { MdClose } from "react-icons/md";
import "./ZoomModal.css";
import { Context } from "../../Context/Context";


export default function ZoomModal() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { zoom, handleZoomModal, zoomImage } = useContext(Context);

  return (
    <>
      <div className={`${zoom ? "showZoomModal" : null} zoommodaldiv`}>
        <div className="zoommodals">
          <Swiper
            style={{
              "--swiper-navigation-color": "#ff0000",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            // navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed
                  ? thumbsSwiper
                  : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={zoomImage.image_1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={zoomImage.image_2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={zoomImage.image_3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://sleephouse.am/wp-content/uploads/2019/12/verj.png" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={zoomImage.image_1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={zoomImage.image_2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={zoomImage.image_3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://sleephouse.am/wp-content/uploads/2019/12/verj.png" />
            </SwiperSlide>
          </Swiper>
          <button className="zoommodaclosebtn" onClick={handleZoomModal}>
            <MdClose className="zoommodalCloseIcon"/>
          </button>
        </div>  
      </div>
    </>
  );
}

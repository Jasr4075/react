import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GalleryHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const GalleryImg = styled.img`
  border-radius: 27px;
  max-height: 500px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

const Gallery = () => {
  const images = [
    "./src/assets/HomeActivoVo.png",
    "./src/assets/Discover.png",
    "./src/assets/Task.png",
    "./src/assets/Pending.png",
    "./src/assets/Exercise.png",
  ];

  return (
    <section id="gallery" className="py-4">
      <Container>
        <GalleryHeading data-aos="fade-up">Galeria</GalleryHeading>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper"
          data-aos="fade-up"
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <GalleryImg
                src={imageUrl}
                alt={`Imagem ${index + 1}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Gallery;

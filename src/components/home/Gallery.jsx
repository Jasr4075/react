import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GalleryStyled = styled.section`
  .GalleryHeading {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .GalleryImg {
    border-radius: 27px;
    max-height: 500px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }
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
      <GalleryStyled>
        <Container>
        <br />
        <br />
          <h2 className="GalleryHeading" data-aos="fade-up">Galeria</h2>
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={window.innerWidth > 768 ? 3 : 1}
            pagination={{ clickable: true }}
            navigation
            className="mySwiper"
            data-aos="fade-up"
          >
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  className="GalleryImg"
                  src={imageUrl}
                  alt={`Imagem ${index + 1}`}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </GalleryStyled>
    </section>
  );
};

export default Gallery;

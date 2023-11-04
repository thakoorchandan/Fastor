import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

const Card = styled.div`
  height: 10rem;
  margin-inline: 0.25rem;
  overflow: hidden;
  border-radius: 1rem;
  font-weight: 600;
  background: ${(props) => props.color};
`;

const Carousel = () => {
    const foodImages = [
      "https://img.freepik.com/premium-vector/restaurant-food-promotion-intagram-carousel-template_694794-41.jpg?w=2000",
      "https://img.freepik.com/free-psd/new-menu-social-media-post-template_23-2148968251.jpg?size=626&ext=jpg&ga=GA1.1.1411978801.1696291200&semt=ais",
      "https://img.freepik.com/free-psd/new-year-celebration-facebook-template_23-2149938177.jpg",
      "https://img.freepik.com/free-psd/social-media-promo-template-indian-food-restaurant_23-2149563830.jpg?q=10&h=200",
      "https://thumbs.dreamstime.com/b/indian-food-spicy-chicken-tikka-masala-rice-dark-background-tex-wooden-letters-indian-food-top-view-flat-lay-indian-148057259.jpg"
    ];
  return (
    <div style={{marginTop : '1.5rem'}}>
      <Swiper
        spaceBetween={12}
        centeredSlides={0}
        pagination={{ clickable: true }}
        slidesPerView={1}
        lazy={true}
      >
        {foodImages.map((e, i) => (
          <SwiperSlide key={i}>
            <Card>
             <img style={{height : '10rem', borderRadius:'.5rem'}} src={e} alt='fastor' />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

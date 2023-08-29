import React from "react";
import { HeroSection, HeroTitle } from "../components/GlobalStyle";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import galleryData from "../resources/gallery-data.json";

const HeroSectionStyled = styled(HeroSection)`
  padding: 2rem 5rem 5rem 5rem;
  @media (max-width: 650px) {
    padding: 2rem;
  }
`;

const HeroTitleStyled = styled(HeroTitle)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding-bottom: 2rem;
`;

const GalleryWrapper = styled.div`
  --dot-width: 10px;
  --dot-height: 10px;
  --small-dot-width: 8px;
  --small-dot-height: 8px;
  max-width: 50%;
  margin: 0 auto;
  @media (max-width: 1330px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0rem;
  }

  .carousel .slide img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 82%;
    margin: 0 auto;
    border-radius: var(--border-radius-primary);
    box-shadow: var(--box-shadow-components);
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .carousel .thumbs-wrapper {
    max-width: 85%;
    margin: 0 auto;
    margin-top: 3rem;
  }

  .carousel .control-next.control-arrow:before {
    border-left: 18px solid var(--color-pink-strong);
    @media (max-width: 768px) {
      border-left-width: 10px;
    }
  }

  .carousel .control-prev.control-arrow:before {
    border-right: 18px solid var(--color-pink-strong);
    @media (max-width: 768px) {
      border-right-width: 10px;
    }
  }

  .carousel .control-arrow {
    color: var(--color-pink-strong);
    padding: 0rem 1rem;
    @media (max-width: 768px) {
      padding: 0.5rem;
    }
  }

  .carousel .control-dots .dot {
    background: var(--color-white);
    width: var(--dot-width);
    height: var(--dot-height);
    @media (max-width: 768px) {
      width: var(--small-dot-width);
      height: var(--small-dot-height);
      margin: 0rem 0.4rem;
    }
    @media (max-width: 480px) {
      margin: 0rem 0.2rem;
    }
  }

  .carousel .control-dots .dot.selected {
    background: var(--color-pink-strong);
    width: var(--dot-width);
    height: var(--dot-height);
    @media (max-width: 768px) {
      width: 10px;
      height: 10px;
    }
  }

  .carousel .carousel-status {
    /* display: none; */
  }

  .carousel .thumbs-wrapper {
    /* display: flex;
    justify-content: center; */
  }
`;

const Gallery = () => {
  const images = galleryData.images;

  return (
    <HeroSectionStyled>
      <HeroTitleStyled>Gallery</HeroTitleStyled>
      <GalleryWrapper>
        <Carousel
          showThumbs={true}
          autoPlay
          infiniteLoop
          interval={3000}
          dynamicHeight
          useKeyboardArrows
        >
          {images.map((image, index) => {
            return (
              <div key={index}>
                <img src={image.src} alt={image.alt} />
              </div>
            );
          })}
        </Carousel>
      </GalleryWrapper>
    </HeroSectionStyled>
  );
};

export default Gallery;

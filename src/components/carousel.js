import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import * as S from "./styles";

const ArrowLeft = props => {
  const { onClick } = props;
  return (
    <S.ArrowLeftButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="32"
        viewBox="0 0 18 32"
      >
        <path
          fill="grey"
          fillRule="evenodd"
          d="M0 2.007L14.01 16 0 29.993 1.981 32 18 16 1.981 0z"
        />
      </svg>
    </S.ArrowLeftButton>
  );
};

const ArrowRight = props => {
  const { onClick } = props;
  return (
    <S.ArrowRightButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="32"
        viewBox="0 0 18 32"
      >
        <path
          fill="grey"
          fillRule="evenodd"
          d="M0 2.007L14.01 16 0 29.993 1.981 32 18 16 1.981 0z"
        />
      </svg>
    </S.ArrowRightButton>
  );
};

export default class Carousel extends PureComponent {
  render() {
    const { title, subTitle, cards, cardsToDisplay } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: cardsToDisplay,
      slidesToScroll: 1,
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />
    };

    return (
      <S.Carousel>
        <S.CarousalTitle>{title}</S.CarousalTitle>
        <S.CarousalSubTitle>{subTitle}</S.CarousalSubTitle>
        <S.CarouselContainer>
          <Slider {...settings}>
            {cards.map((card, index) => {
              return (
                <div>
                  <a className="product__link" href={card.link}>
                    <img className="carousal_image" src={card.imageLink} />
                    <S.CarousalCardTitle>{card.title}</S.CarousalCardTitle>
                  </a>
                </div>
              );
            })}
          </Slider>
        </S.CarouselContainer>
      </S.Carousel>
    );
  }
}

Carousel.defaultProps = {
  title: "",
  subTitle: "",
  cardsToDisplay: 3,
  cards: []
};

Carousel.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  cardsToDisplay: PropTypes.number,
  cards: PropTypes.array
};

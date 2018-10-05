import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import * as S from "./styles";

const ArrowLeft = () => {
  return (
    <S.ArrowLeftButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="32"
        viewBox="0 0 18 32"
      >
        <path
          fill="#0CA6D4"
          fillRule="evenodd"
          d="M0 2.007L14.01 16 0 29.993 1.981 32 18 16 1.981 0z"
        />
      </svg>
    </S.ArrowLeftButton>
  );
};

const ArrowRight = props => {
  return (
    <S.ArrowRightButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="32"
        viewBox="0 0 18 32"
      >
        <path
          fill="#0CA6D4"
          fillRule="evenodd"
          d="M0 2.007L14.01 16 0 29.993 1.981 32 18 16 1.981 0z"
        />
      </svg>
    </S.ArrowRightButton>
  );
};

export default class Carousel extends PureComponent {
  render() {
    const { title, subTitle, cards } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: this.props.cardsDisplay,
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
                <S.CarousalCardContainer key={index}>
                  <img src={card.imageLink} />
                  <S.CarousalCardTitle>{card.title}</S.CarousalCardTitle>
                </S.CarousalCardContainer>
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

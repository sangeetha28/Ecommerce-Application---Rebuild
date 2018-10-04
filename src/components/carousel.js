import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import * as S from "./styles";

const ArrowLeft = props => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} carousel__arrow carousel__arrow--left`}
      onClick={onClick}
    >
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
    </button>
  );
};

const ArrowRight = props => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} carousel__arrow carousel__arrow--right`}
      onClick={onClick}
    >
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
    </button>
  );
};

export default class Carousel extends PureComponent {
  render() {
    const { title, subTitle, cards } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: this.props.cardsDisplay,
      slidesToScroll: 1
    };

    return (
      <S.Carousel>
        <S.CarousalTitle>{title}</S.CarousalTitle>
        <S.CarousalSubTitle>{subTitle}</S.CarousalSubTitle>
        <S.CarouselContainer>
          {cards.map((card, index) => {
            return (
              <S.CarousalCardContainer key={index}>
                <img src={card.imageLink} />
                <S.CarousalCardTitle>{card.title}</S.CarousalCardTitle>
              </S.CarousalCardContainer>
            );
          })}
        </S.CarouselContainer>
      </S.Carousel>
    );
  }
}

// {cards.map((card, index) => {
//   return (
//     <S.CarousalCardContainer>
//       <img src={card.fields.imageFile.fields.file.url} />
//       <S.CarousalCardTitle>{card.fields.title}</S.CarousalCardTitle>
//     </S.CarousalCardContainer>
//   );
// })}

{
  /* <img src="./normal_large-linen-cushion-by-ruth-holly-paper-home.jpg" />
<S.CarousalCardTitle>HOME IDEAS WITH FREE MAINLAND UK DELIVERY</S.CarousalCardTitle>
</S.CarousalCardContainer>
<S.CarousalCardContainer>
 <img src='./normal_personalised-name-necklace.jpg' />
<S.CarousalCardTitle>BEST JEWELLERY FOR HER</S.CarousalCardTitle>
</S.CarousalCardContainer>
<S.CarousalCardContainer>
 <img src='./normal_personalised-baby-halloween-pumpkin-leggings.jpg' />
<S.CarousalCardTitle>TOP HALLOWEEN PICKS</S.CarousalCardTitle> */
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

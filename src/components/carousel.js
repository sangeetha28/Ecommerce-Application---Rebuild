import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import * as S from "./styles";

export default class Carousel extends PureComponent {
  render() {
    const { title, subTitle, cards } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: this.props.cardsDisplay,
      slidesToScroll: 1
    };
    // {cards.map((card, index) => {
    //   return (
    //     <S.CarousalCardContainer>
    //       <img src='../images/wk16-HeroStatic_desk-four-revision.jpg' />
    //       <S.CarousalCardTitle>WallPaper</S.CarousalCardTitle>
    //     </S.CarousalCardContainer>
    //   );
    // })}
    return (
      <S.Carousel>
        <S.CarousalTitle>{title}</S.CarousalTitle>
        <S.CarousalSubTitle>{subTitle}</S.CarousalSubTitle>
        <S.CarouselContainer>
          <S.CarousalCardContainer>
          <img src="./normal_large-linen-cushion-by-ruth-holly-paper-home.jpg" />
<S.CarousalCardTitle>HOME IDEAS WITH FREE MAINLAND UK DELIVERY</S.CarousalCardTitle>
</S.CarousalCardContainer>
<S.CarousalCardContainer>
 <img src='./normal_personalised-name-necklace.jpg' />
<S.CarousalCardTitle>BEST JEWELLERY FOR HER</S.CarousalCardTitle>
</S.CarousalCardContainer>
<S.CarousalCardContainer>
 <img src='./normal_personalised-baby-halloween-pumpkin-leggings.jpg' />
<S.CarousalCardTitle>TOP HALLOWEEN PICKS</S.CarousalCardTitle>
          </S.CarousalCardContainer>
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

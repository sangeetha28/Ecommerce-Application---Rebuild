import styled from "styled-components";

export const Carousel = styled.div``;

export const CarousalTitle = styled.div`
  font-family: "NOTHS Sans No2 SemiBold", "Helvetica Neue", HelveticaNeue, Arial,
    sans-serif;
  font-size: 21px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #2f2f2f;
  text-align: center;
  margin-top: 15px;
  padding: 2px 2px;
  margin-bottom: 10px;
  font-weight: 100px;
  font-style: normal;
  font-size: 21px;
  font-weight: 800;
  line-height: 18px;
  cursor: pointer;
  letter-spacing: 0.9px;
  font-family: "NOTHS Sans No2 Regular";
`;

export const ArrowRightButton = styled.button`
  display: block;
  position: absolute;
  top: 40%;
  right: -2%;
  cursor: pointer;
  width: 30px;
  height: 42px;
  background: none;
  border: none;

  &:focus {
    outline: 0;
  }

  svg {
    width: 15px;
    height: 15px;
    background-color: transparent;
    color: grey;
  }
`;

export const ArrowLeftButton = styled.button`
  display: block;
  background: none;
  position: absolute;
  top: 40%;
  left: -2%;
  border: none;

  &:focus {
    outline: 0;
  }
  svg {
    transform: rotate(180deg);
    width: 15px;
    height: 15px;
    border-color: none;
    background-color: transparent;
  }
`;

export const CarousalCardTitle = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  color: #2f2f2f;
  margin: 10px 0 12px;
  letter-spacing: 0.8px;
  font-family: "NOTHS Sans No3 Regular";
  &:hover {
    transform: scale(1.03);
    transition: transform 0.2s;
    color: #0a89af;
  }
  margin: 2px solid red;
`;

export const CarousalCardContainer = styled.div`
  // width: 350px;
  // height: 350px;
  // img {
  //   width: 323px;
  //   height: 323px;
  // }
  // cursor: pointer;
  // border: 2px solid orange;
  // padding-left: 20px;
  // position: absolute;
  // float: left;
  // &:hover {
  //   transform: scale3d(1.01, 1.01, 1);
  //   transition: all 0.3s;
  //   color: #0a89af;
  // }
  width: 30%;
  float: left;
  display: inline-block;
  border: 2px solid purple;
`;

export const CarouselContainer = styled.div`
  @media (min-width: 769px) {
    padding: 0 30px;
  }
  position: relative;
  width: 1140px;
  height: 450px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    min-height: fit-content;
    margin: 0;
  }
`;

export const CarousalSubTitle = styled.div`
  font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia,
    serif;
  font-size: 17px;
  line-height: 18px;
  color: #555;
  font-style: italic;
  text-align: center;
  margin-bottom: 40px;
`;

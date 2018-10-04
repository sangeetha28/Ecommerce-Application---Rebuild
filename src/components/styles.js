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
  letter-spacing: 0.9px;
  font-family: "NOTHS Sans No2 Regular";
`;

export const CarousalCardTitle = styled.p`
  text-transform: uppercase;
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
`;

export const CarousalCardContainer = styled.div`
  float: left;
  width: 350px;
  height: 350px;
  img {
    width: 323px;
    height: 323px;
  }
  cursor: pointer;
  margin: 20px 20px;
  &:hover {
    transform: scale3d(1.01, 1.01, 1);
    transition: all 0.3s;
    color: #0a89af;
    display: inline-block;
  }
`;

export const CarouselContainer = styled.div`
  position: center;
  box-sizing: border-box;
  min-width: 1300px;
  margin: 0 auto;
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

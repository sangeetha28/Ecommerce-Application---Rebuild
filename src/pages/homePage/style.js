import styled from "styled-components";

export const Container1 = styled.div`
  margin: 0 auto 50px;
  padding: 0 10px;
  max-width: 1020px;
  position: relative;
  justify-content: centre;
`;

export const Container2 = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
  min-height: 520px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

export const Container6 = styled.div`
  width: 1424px;
  height: 263px;
  background-color: #f4f6f6;
  color: #555;
`;

export const NewsLetterSubscribe = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 30px;
`;

export const Container3 = styled.div`
  margin: 100px auto 0;
  max-width: 800px;
`;

export const GCFormPrivacyPolicy = styled.p`
  font-size: 12px;
  font-family: NOTHS2, Helvetica Neue, HelveticaNeue, Arial, sans-serif;
  letter-spacing: 0.4px;
  justify-content: center;
  margin-left: 430px;
  margin-top: 10px;
  color: #555;
  background: transparent;
  font-size: 11px;
  color: #434343;
  margin-top: 20px;
  opacity: 0.5;

  a {
    text-decoration: underline;
  }
`;

export const Homepage = styled.div`
  width: 100%;
  margin-top: -8px;
  margin-bottom: 50px;
`;

export const GCFooterSubscribeTitle = styled.p`
  font-family: NOTHS2, Helvetica Neue, HelveticaNeue, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #033956;
  text-align: center;
  padding-top: 40px;
`;

export const GCFooterSubscribeSubTitle = styled.p`
  margin-top: -10px;
  text-align: center;
`;

export const GCFormFieldInput = styled.input`
  height: 51px;
  width: 383.83px;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #dde1e4;
  border-radius: 3px;
  line-height: 38px;
  font-size: 15px;
  margin-left: 430px;
  color: #434343;
  text-align: left;
  padding-left: 20px;
  letter-spacing: normal;
  opacity: 0.7;
`;

export const GCFormFieldSubscribeButton = styled.button`
  height: 51px;
  width: 196px;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 3px;
  line-height: 38px;
  font-size: 15px;
  background: #09b8ec;
  background-repeat: no-repeat;
  border-radius: 3px;
  border: none;
  padding: 11px 20px 9px;
  margin-left: 10px;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  color: #fff;
  white-space: nowrap;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.6px;
`;

export const Title = styled.div`
  font-family: "NOTHS Sans No2 SemiBold", "Helvetica Neue", HelveticaNeue, Arial,
    sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #2f2f2f;
  text-align: center;
  margin-top: 15px;
  padding: 2px 2px;
  margin-bottom: 10px;
  font-weight: 400px;
`;

export const CarousalTitle = styled.div`
  font-family: "NOTHS Sans No2 SemiBold", "Helvetica Neue", HelveticaNeue, Arial,
    sans-serif;
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #2f2f2f;
  text-align: center;
  margin-top: 350px;
  padding: 2px 2px;
  margin-bottom: 10px;
  font-weight: 100px;
`;

export const SubTitle = styled.div`
  font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia,
    serif;
  font-size: 17px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #555;
  font-style: italic;
  text-align: center;
  margin-bottom: 40px;
`;

export const CarousalSubTitle = styled.div`
  font-family: "NOTHS Sans No2 SemiBold", "Helvetica Neue", HelveticaNeue, Arial,
    sans-serif;
  font-size: 17px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #555;
  font-style: italic;
  text-align: center;
  margin-bottom: 40px;
`;

export const MainBanner = styled.div`
  @media(min-width: 768px) {
    background-image: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url('${props =>
      props.imageDesktop || ""}');
    background-repeat:no-repeat;
    background-size: initial;
    max-height: 170px;
  }
  background-image: url('${props => props.imageMobile || ""}');
  background-size: cover;
  max-height: 100px;
  background-position: center;
  color: #ffffff;
  text-align: center;
  padding: 80px 10px;
  margin-bottom: 30px;
  position: relative;
  align-items: center;
  justify-content: center;

  img {
    max-width: 770px;
    width: 100%;
  }
`;

export const Banner = styled.image`
  background-image: url('${props => props.bannerImage || ""}');
  background-size:initial;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 1000px;
  display: block;
  margin: 60px auto;
  text-align: center;
  justify-content: center;
  min-height: 400px;
  img {
    width: 100%;
    padding-top: 50px;
  }
`;

export const Container4 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 550px;
  color: #000;
  text-align: center;
  justify-content; center;
  h4 {
    font-family: "NOTHS Sans No2 SemiBold", "Helvetica Neue", HelveticaNeue,
      Arial, sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: #2f2f2f;
  }
  p {
    font-size: 17px;
    line-height: 18px;
  }
`;

export const BannerLink = styled.h1`
  max-width: 320px;
  background-color: ${props => props.color || "#f25b60"};
  color: #fff;
  justify-content: center;
  border-radius: 3px;
  padding: 20px 10px;
  margin: 15px auto 20px;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.5px;
`;

export const CarouselWrap = styled.div`
  @media (min-width: 769px) {
    margin-top: 90px;
  }

  margin: 30px -10px 30px 0;
  border-right: none;
  border-left: none;
  padding: 30px 0;
`;

export const Container5 = styled.div`
  height: 300px;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  font-family: NOTHS Sans No3 Regular, Helvetica Neue, HelveticaNeue, Arial,
    sans-serif;
  box-sizing: border-box;
  padding-bottom: -10px;
`;

export const FooterTitle = styled.p`
  font-family: "NOTHS Sans No2 SemiBold", "Helvetica Neue", HelveticaNeue, Arial,
    sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #2f2f2f;
  text-align: center;
  margin-top: 60px;
  text-align: left;
  padding: 2px 2px;
  margin-bottom: 10px;
  font-weight: 400px;
  min-width: 1028px;
  min-height: 24px;
`;

export const FooterDescription = styled.p`
  margin: 0 auto;
  font-family: NOTHS Sans No3 Regular, Helvetica Neue, HelveticaNeue, Arial,
    sans-serif;
  color: #2f2f2f;
  font-size: 13px;
  letter-spacing: 0.4px;
  margin-top: 20px;
  opacity: 0.7;
`;

export const Border = styled.span`
  border-bottom: solid 3px #eae8e6;
  display: block;
  margin: 50px auto;
`;

export const HeroSection = styled.div`
  height: 440px;
  width: 550px;
  float: left;
  margin: 0 20px;
  box-sizing: border-box;
  padding: 0 12px 0 0;
  position: relative;
`;

export const HeroColumn = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  float: left;
  align-items: strech;
`;

export const LargeImage = styled.a`
display: block;
  height: 335px;
  width: 335px;
background-image: url('${props => props.background || ""}');
background-repeat: no-repeat;
`;

export const SmallImage = styled.div`
background-image: url('${props => props.background || ""}');
height: 165px;
width: 165px;
display: block;
margin-left: 330px;
`;

export const HeroDivider = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  display: block;
`;

export const Container8 = styled.div`
  max-width: 960;
  margin-top: -60px;
  font-family: "NOTHS Sans No2 SemiBold", "Helvetica Neue", HelveticaNeue, Arial,
    sans-serif;
    padding-top: 20px;
  font-size: 15px;
  margin-top: -20px;  
  p {
  margin-left: 300px;
  opacity: 0.7;
  }
  letter-spacing: 0.4px;
  color: #2f2f2f;

  
`;

export const FooterContainer = styled.div`
  float: left;
  padding: 100px;
  margin-left:60px;
  li {
    list-style: none;  
  }
`;

// @media(min-width: 769px) {
//   margin:0 auto;
//  }
//    margin-top: 5px;
//    border: 3px solid red;
//   border-bottom: solid 2px #eae8e6;
//   display: block;
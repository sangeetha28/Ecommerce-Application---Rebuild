import styled from "styled-components";

export const NewsLetterSubscribe = styled.div`
  height: 220px;
  width: 1044px;
  top:40%;
  left:50%
  transform: translate(-50%, -50%);
  position:absolute; 

`;

export const GCFormPrivacyPolicy = styled.p`
  font-size: 12px;
  display: block;
  font-family: NOTHS Sans No2 SemiBold, Helvetica Neue, HelveticaNeue, Arial, sans-serif;
  letter-spacing: 0.4px;
  justify-content: center;
  color: #555;
  position: absolute;
  top: 100%;
  left: 20%

  background: transparent;
  font-size: 11px;
  color: #434343;
  opacity: 0.5;
  a {
    text-decoration: underline;
  }
`;

export const Homepage = styled.div`
  width: 100%;
  margin-top: -18px;
  margin-bottom: 50px;
  overflow: hidden;
`;

export const GCFooterSubscribeTitle = styled.h4`
  font-family: NOTHS2, Helvetica Neue, HelveticaNeue, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #033956;
  text-align: center;
  padding-top: 40px;
`;

export const GCFooterSubscribeSubTitle = styled.h5`
  margin-top: -10px;
  text-align: center;
`;

export const GCFormFieldInput = styled.input`
  height: 100%;
  width: 383.83px;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #dde1e4;
  border-radius: 3px;
  line-height: 38px;
  font-size: 15px;
  color: #434343;
  text-align: left;
  padding-left: 20px;
  letter-spacing: normal;
  opacity: 0.7;
`;
export const GCInputContainer = styled.div`
  top: 65%;
  left: 20%;
  height: 51px
  position: absolute;
  width: 700px;
`;

export const GCFormFieldSubscribeButton = styled.button`
  height: 100%;
  width: 196px;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 3px;
  line-height: 38px;
  font-size: 15px;
  background: #09b8ec;
  background-repeat: no-repeat;
  border: none;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  color: #fff;
  white-space: nowrap;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin-left: 20px;
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
  font-size: 21px;
  font-weight: 800;
  line-height: 18px;
  letter-spacing: 0.9px;
  font-family: "NOTHS Sans No2 Regular";
`;

export const CarouselWrap = styled.div`
  @media (min-width: 769px) {
    margin: 10px -40px;
  }

  margin: 30px 10px 30px 0;
  border-right: none;
  border-left: none;
  padding: 10px 0;
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
  font-weight: 300px;
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

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1020px;
  font-family: NOTHS Sans No3 Regular, Helvetica Neue, HelveticaNeue, Arial,
  sans-serif;
`;

{
  /* <p>A Flexible Layout must have a parent element with the <em>display</em> property set to <em>flex</em>.</p>

<p>Direct child elements(s) of the flexible container automatically becomes flexible items.</p> */
}

export const MainBanner = styled.div`
  @media(min-width: 768px) {
    background-image: url('${props => props.imageDesktop || ""}');
    max-height: 550px;
    background-repeat: no-repeat;
  }
  background-image: url('${props => props.imageMobile || ""}');
  background-size: cover;
  background-position: center;
  color: #ffffff;
  text-align: center;
  padding: 80px 10px;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 770px;
    width: 100%;
  }
`;

export const Banner = styled.div`
background-image: url('${props => props.bannerImage || ""}');
background-size: initial;
background-repeat: no-repeat;
background-position: center;
display: flex;
align-items: center;
justify-content: center;
padding: 50px 0 20px;

img {
  width: 100%;
}
`;

export const BannerLink = styled.h1`
  max-width: 320px;
  background-color: ${props => props.color || "#f25b60"};
  color: #fff;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  box-sizing: border-box;
  padding-bottm: 20px;
  border-radius: 3px;
  padding: 20px 10px;
  margin: 0px auto;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.9px;
  font-family: "NOTHS Sans No2 Regular";
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

export const FooterTitle = styled.div`
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

export const FooterDescription = styled.div`
  margin: 0 auto;
  font-family: NOTHS Sans No3 Regular, Helvetica Neue, HelveticaNeue, Arial,
    sans-serif;
  color: #2f2f2f;
  font-size: 13px;
  letter-spacing: 0.4px;
  margin-top: 20px;
  opacity: 0.7;
  font-family: NOTHS Sans No3 Regular, Helvetica Neue, HelveticaNeue, Arial,
    sans-serif;
`;

export const Border = styled.span`
@media(min-width: 768px) {
  margin: 30px auto;
}
border-bottom: solid 3px #eae8e6;
display: block;
margin: 10px auto;

`;

export const HeroSection = styled.div`
@media(min-width: 768px) {
  width: 48%;
  margin: 60px 7px;
}
  align-items: stretch;
  margin: 20px 7px;
  width: 100%;
  height: 100%;
  float: left;
`;

export const HeroColumn = styled.div`
@media(min-width: 768px) {
  width: 67.7%;
}
  width: 100%;
  height: auto;
  overflow: hidden;
  float: left;
`;

export const LargeImage = styled.a`
  display: block;
  width: 100%;
  height: 331px;
  background: #000;
  background-image: url('${props => props.background || ""}');
`;

export const HeroDivider = styled.div`
@media(min-width: 768px) {
  display: block;
  margin-left: 1px;
  width: 32%;
  float: right;
}
  
`;

export const SmallImage = styled.a`
@media(min-width: 768px) {
  display: block;
  background: #ccc;
  background-image: url('${props => props.background || ""}');
  width: 100%;
  height: 165px;

  + a {
    margin-top: 1px;
  }
}
`;


export const FooterContainer = styled.div`
  float: left;
  padding: 100px;
  margin-left: 60px;
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

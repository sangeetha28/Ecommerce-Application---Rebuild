import React, { PureComponent } from "react";
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Image from "../../components/homepageimage";
import * as contentful from "contentful";
import CuratedCollection from "../../components/curatedCollection";
import * as S from "./style";
import Carousel from "../../components/carousel";
import SimpleSlider from "../../components/slider";

import { connect } from "react-redux";
//Pure Component - Performance-optimized version of React.Component. Doesn’t rerender if props/state hasn’t changed.

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    };
  }

  client = contentful.createClient({
    space: "6pzvje8n0hm6",
    accessToken:
      "d715557b55ca0a5c942ce8fe6c05447e87aa14d3a4098c2c347682a3a0c0a829"
  });
  fetchResponse = () => this.client.getEntry("58APqj0PpmUoikogCAwWiu");
  setResponse = response => {
    console.log("RESPONSE", response.fields);
    this.setState({ page: response.fields });
  };

  componentDidMount() {
    this.fetchResponse().then(result => this.setResponse(result));
  }

  //
  render() {
    const { page } = this.state;
    if (!page) return null; // DO NOT UNDERSTAND THIS LINE
    return (
      <div>
        <Header />
        <Navigation />
        <S.Homepage>
          <S.MainBanner
            imageDesktop={page.hero.fields.bannerImageLink}
            imageMobile={page.hero.fields.bannerImageLink}
          >
            <S.Container>
              <img src="http://cdn.notonthehighstreet.com/campaigns/images/homepage-2017/ttl-wk24-HeroStatic_desk.png" />
              <S.BannerLink>{page.hero.fields.bannerImageText}</S.BannerLink>
            </S.Container>
          </S.MainBanner>
          <S.Container>
            <S.Border />
            <S.CarouselWrap>
              <Carousel
                title={page.carousalOne.fields.title}
                subTitle={page.carousalOne.fields.subTitle}
                cards={page.carousalOne.fields.json.carousal}
              />
            </S.CarouselWrap>

            <S.Banner bannerImage={page.banner.fields.bannerLinkImage}>
              <S.Container>
                <img src="http://cdn.notonthehighstreet.com/campaigns/images/homepage-2017/ttl-17Sept_Midi_Desktop-compressor.png" />
                <S.BannerLink color="#3a4687">
                  ALL THINGS CHRISTMAS »
                </S.BannerLink>
              </S.Container>
            </S.Banner>

            <S.CarouselWrap>
              <Carousel
                title={page.carousalTwo.fields.title}
                subTitle={page.carousalTwo.fields.subTitle}
                cards={page.carousalTwo.fields.json.carousal}
              />
            </S.CarouselWrap>
            <S.CarouselWrap>
              <Carousel
                title={page.carousalThree.fields.title}
                subTitle={page.carousalThree.fields.subTitle}
                cards={page.carousalThree.fields.json.carousal}
                cardsToDisplay="4"
              />
            </S.CarouselWrap>

            <S.Border />
            <S.Container>
              <S.Title>MEET THE MAKERS</S.Title>
              <S.SubTitle>The talented artisians behind your gifts</S.SubTitle>
              <S.HeroSection>
                <S.HeroColumn>
                  <S.LargeImage
                    background={page.heroAreaone[0].fields.imageUrl}
                  />
                </S.HeroColumn>
                <S.HeroDivider>
                  <S.SmallImage
                    background={page.heroAreaone[1].fields.imageUrl}
                  />
                  <S.SmallImage
                    background={page.heroAreaone[2].fields.imageUrl}
                  />
                </S.HeroDivider>
                <S.CarousalTitle>SEVEN SEVENTEEN </S.CarousalTitle>
                <S.CarousalSubTitle>
                  {" "}
                  Natural, mood-boosting candles
                </S.CarousalSubTitle>
              </S.HeroSection>
              <S.HeroSection>
                <S.HeroColumn>
                  <S.LargeImage
                    background={page.heroareatwo[0].fields.imageUrl}
                  />
                </S.HeroColumn>
                <S.HeroDivider>
                  <S.SmallImage
                    background={page.heroareatwo[1].fields.imageUrl}
                  />
                  <S.SmallImage
                    background={page.heroareatwo[2].fields.imageUrl}
                  />
                </S.HeroDivider>
                <S.CarousalTitle> THE FOREST & CO </S.CarousalTitle>
                <S.CarousalSubTitle>
                  {" "}
                  Beautifully unique homeware{" "}
                </S.CarousalSubTitle>
              </S.HeroSection>
            </S.Container>
            <S.Border />
            <S.FooterTitle>
              THOUGHTFUL GIFTS, MADE FOR YOUR FAVOURITES
            </S.FooterTitle>
            <S.FooterDescription>
              <p>
                When your mission is to find a gift for someone you love, ours
                is to make sure it’s the most thoughtful, heartfelt and original
                one going.
              </p>
              <p>
                That’s why we’ve scoured the nation to bring together
                beautifully made designs from thousands of the UK’s best small
                creative businesses - from handcrafted creations to personalised
                gift ideas brought to life with your own words.
              </p>
              <p>
                So go ahead and discover our curated collections of birthday
                gifts, wedding gifts, anniversary gifts, christening gifts,
                Mother’s Day gifts, Father’s Day gifts *deep breath*,
                housewarming, retirement and Christmas gifts - the list goes on.
              </p>
              <p>
                And because we believe thoughtful should be for every day,
                you’ll also find creative ways to say “I love you”, “I’m
                thinking of you” and “I’m treating you, just because”. Prepare
                to be inspired.
              </p>
            </S.FooterDescription>
          </S.Container>
        </S.Homepage>
      </div>
    );
  }
}

// <S.Border />
//
// */}
{
  /* <S.FooterTitle>
              THOUGHTFUL GIFTS, MADE FOR YOUR FAVOURITES
            </S.FooterTitle>
            <S.FooterDescription>
              <p>
                When your mission is to find a gift for someone you love, ours
                is to make sure it’s the most thoughtful, heartfelt and original
                one going.
              </p>
              <p>
                That’s why we’ve scoured the nation to bring together
                beautifully made designs from thousands of the UK’s best small
                creative businesses - from handcrafted creations to personalised
                gift ideas brought to life with your own words.
              </p>
              <p>
                So go ahead and discover our curated collections of birthday
                gifts, wedding gifts, anniversary gifts, christening gifts,
                Mother’s Day gifts, Father’s Day gifts *deep breath*,
                housewarming, retirement and Christmas gifts - the list goes on.
              </p>
              <p>
                And because we believe thoughtful should be for every day,
                you’ll also find creative ways to say “I love you”, “I’m
                thinking of you” and “I’m treating you, just because”. Prepare
                to be inspired.
              </p>
            </S.FooterDescription> */
}

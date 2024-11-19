import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propTypes from "prop-types";
import styled from "styled-components";
import Text from "../ui/Text";
import SliderCard from "../ui/SliderCard";
const Layout = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin-top: 30px;
  .sliderContainer {
    height: 200px;
  }
`;

function Hero({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
  };
  return (
    <Layout>
      <Text as="h1">Hot Topics</Text>
      <Slider className="sliderContainer" {...settings}>
        {data.map((items, index) => (
          <SliderCard
            key={index}
            author={items.author}
            publishedAt={items.publishedAt}
            title={items.title}
            urlToImage={items.urlToImage}
            url={items.url}
          />
        ))}
      </Slider>
    </Layout>
  );
}
Hero.propTypes = {
  data: propTypes.array,
};
export default Hero;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propTypes from "prop-types";
import styled from "styled-components";
import Text from "../ui/Text";
import SliderCard from "../ui/SliderCard";
import Loader from "../ui/Loader";
const Layout = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top: 30px;
  .sliderContainer {
    height: 200px;
    @media (min-width: 768px) {
      height: 355px;
    }
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
function Hero({ data , isLoading}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <Layout>
      <Text as="h1">Hot Topics</Text>
      {
        isLoading ? <Loader/> : <Slider className="sliderContainer" {...settings}>
        {data.map((items, index) => (
          <SliderCard
            key={index}
            publishedAt={items.pubDate}
            title={items.title}
            urlToImage={items.image_url}
            url={items.url}
          />
        ))}
      </Slider>
      }
    </Layout>
  );
}
Hero.propTypes = {
  data: propTypes.array,
  isLoading:propTypes.bool
};
SampleNextArrow.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
};
SamplePrevArrow.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
};
export default Hero;

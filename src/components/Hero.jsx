import styled from "styled-components";
import Text from "../ui/Text";

const Layout = styled.div`
  width: 100%;
  height: 258px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 48px;
  @media (min-width: 768px) {
    height: 355px;
  }
  .hero-bg {
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    height: 200px;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url("src/assets/image/Rectangle 1.png");
    @media (min-width: 768px) {
      height: 289px;
    }
    @media (min-width: 1100px) {
      height: 400px;
    }
  }
  span {
    display: flex;
    gap: 30px;
  }
`;
const Hero = () => {
  return (
    <Layout>
      <Text as="h1">Hot Topics</Text>
      <div className="hero-bg">
        <Text as="h3">
          Massa tortor nibh nulla condimentum imperdiet scelerisque...
        </Text>
        <span>
          <Text as="h4">2 Hours Agoi</Text>
          <Text as="h4">CNN Indonesia</Text>
        </span>
      </div>
    </Layout>
  );
};

export default Hero;

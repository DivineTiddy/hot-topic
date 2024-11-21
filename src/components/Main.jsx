import styled from "styled-components";
import Text from "../ui/Text";
import Card from "../ui/Card";
import Loader from "../ui/Loader";
import propTypes from "prop-types";

const Layout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 56px;
  .cardsContainer {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    gap: 20px;
    padding: 24px 0px;
    @media (min-width: 768px) {
      grid-template-columns: auto auto auto;
    }
    @media (min-width: 1100px) {
      grid-template-columns: auto auto auto auto;
      gap: 30px;
    }
    div {
      display: flex;
      gap: 16px;
    }
  }
  span {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 12px;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
`;
const Main = ({ data, isLoading }) => {
  return (
    <Layout>
      <Text as="h2">Latest News</Text>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <div className="cardsContainer">
          {data.map((items , index) => (
            <Card
              key={index}
              author={items.author}
              publishedAt={items.publishedAt}
              title={items.title}
              urlToImage={items.urlToImage}
              url={items.url}
            />
          ))}
        </div>
      {/* )} */}
    </Layout>
  );
};
Main.propTypes = {
  data: propTypes.array,
  isLoading: propTypes.bool,
};

export default Main;

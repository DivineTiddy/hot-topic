import styled from "styled-components";
import Text from "../ui/Text";
import { useEffect, useState } from "react";
import Card from "../ui/Card";
import Loader from "../ui/Loader";

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
const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);

  useEffect(function () {
    try {
      setIsLoading(true);

      async function getNews() {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=94803a79c2d04953a02ec0ad01ee097a`
        );
        setIsLoading(false);

        const result = await response.json();
        setData(result.articles);

      }
      getNews();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Layout>
      <Text as="h2">Latest News</Text>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="cardsContainer">
          {data.map((items) => (
            <Card
              key={items.title}
              author={items.author}
              publishedAt={items.publishedAt}
              title={items.title}
              urlToImage={items.urlToImage}
              url={items.url}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Main;

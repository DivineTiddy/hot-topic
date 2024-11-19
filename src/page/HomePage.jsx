import styled from "styled-components";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
const Layout = styled.div`
  width: 90%;
  height: auto;
`;

const HomePage = () => {
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
      <Nav />
      <Hero data={data}/>
      <Main isLoading={isLoading}  data={data}/>
      <Footer/>
    </Layout>
  );
};

export default HomePage;

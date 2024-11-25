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

  useEffect(function () {
    try {
      setIsLoading(true);

      async function getNews() {
        const response = await fetch(
          
          `https://newsdata.io/api/1/latest?apikey=pub_60266c3bf2a9cc3d29fcbe69d400ee113398a`
        );
        setIsLoading(false);

        const result = await response.json();
        if (result.status === "success") {
          setData(result.results);
        }
      }
      getNews();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Layout>
      <Nav />
      <Hero data={data} />
      <Main isLoading={isLoading} data={data} />
      <Footer />
    </Layout>
  );
};

export default HomePage;

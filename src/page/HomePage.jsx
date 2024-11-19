import styled from "styled-components";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Footer from "../components/Footer";
const Layout = styled.div`
  width: 90%;
  height: auto;
`;

const HomePage = () => {
  return (
    <Layout>
      <Nav />
      <Hero />
      <Main />
      <Footer/>
    </Layout>
  );
};

export default HomePage;

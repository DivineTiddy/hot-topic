import styled from "styled-components";
import HomePage from "./page/HomePage";
import { ContextApi } from "./context/ContextApi";

const Layout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
const App = () => {
  return (
    <Layout>
      <ContextApi>
        <HomePage />
      </ContextApi>
    </Layout>
  );
};

export default App;

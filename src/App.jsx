import styled from "styled-components";
import HomePage from "./page/HomePage";
import { ContextApi } from "./context/ContextApi";
import "./index.css"
import { useState } from "react";

const Layout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  button{
    position: fixed;
    left: 90%;
    top: 90%;
  }
`;
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <Layout className={`switch ${isDarkMode ? 'dark-mode' : ''}`}>
       <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <ContextApi>
        <HomePage />
      </ContextApi>
    </Layout>
  );
};

export default App;

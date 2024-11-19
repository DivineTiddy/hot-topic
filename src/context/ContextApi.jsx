import { createContext, useContext, useEffect, useReducer } from "react";
import propTypes from "prop-types";

const ContextProvider = createContext();
const currentState = {
  allData: [],
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "allData":
      return { ...state, allData: action.payLoad };

    default:
      return state;
  }
};

const ContextApi = ({ children }) => {
  const [{ allData }, dispatch] = useReducer(Reducer, currentState);
  useEffect(function () {
    async function getNews() {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=94803a79c2d04953a02ec0ad01ee097a`
      );
      const result = await response.json();
      dispatch({type:"allData" , payLoad:result})
    }
    getNews();
  }, []);
  return (
    <ContextProvider.Provider
      value={{
        allData,
        dispatch,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
function UseValue() {
  const context = useContext(ContextProvider);
  return context;
}
ContextApi.propTypes = {
  children: propTypes.object,
};
export { ContextApi, UseValue };

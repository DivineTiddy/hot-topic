import styled from "styled-components";
import Text from "./Text";
import propTypes from "prop-types";
const Layout = styled.a`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
  text-decoration: none;
  div {
    display: flex;
    gap: 16px;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
`;
const Card = ({ url, author, title, urlToImage, publishedAt }) => {
  return (
    <>
      {author === null || urlToImage === null ? (
        ""
      ) : (
        <Layout href={url}>
          <img src={urlToImage} />
          <Text as="h5">{title}</Text>
          <div>
            <Text as="h6">{publishedAt}</Text>
            <Text as="h6">{author}</Text>
          </div>
        </Layout>
      )}
    </>
  );
};
Card.propTypes = {
  author: propTypes.string,
  description: propTypes.string,
  title: propTypes.string,
  urlToImage: propTypes.string,
  publishedAt: propTypes.string,
  url: propTypes.string,
};

export default Card;

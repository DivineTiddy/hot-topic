import propTypes from "prop-types";
import styled from "styled-components";
import Text from "./Text";
const Layout = styled.div`
  div {
    display: flex;
    gap: 16px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`

const SliderCard = ({ author, urlToImage, publishedAt }) => {
  return (
    <>
      {author === null || urlToImage === null ? (
        ""
      ) : (
        <Layout>
          <img src={urlToImage} />
          <div>
            <Text as="h6">{publishedAt}</Text>
            <Text as="h6">{author}</Text>
          </div>
        </Layout>
      )}
    </>
  )
}
SliderCard.propTypes = {
    author: propTypes.string,
    description: propTypes.string,
    title: propTypes.string,
    urlToImage: propTypes.string,
    publishedAt: propTypes.string,
    url: propTypes.string,
  };
export default SliderCard
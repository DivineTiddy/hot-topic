import styled from "styled-components";
import Text from "../ui/Text";
import HamBurger from "../assets/icon/HamBurger";
import SearchIcon from "../assets/icon/SearchIcon";

const Container = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .textConainer {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .iconSpan {
    display: flex;
    gap: 39px;
    @media (min-width: 1100px) {
      display: none;
    }
  }
`;
const Nav = () => {
  return (
    <Container>
      <span className="textConainer">
        <Text type="news">News</Text>
        <Text type="portal">portal</Text>
      </span>
      <span className="iconSpan">
        <SearchIcon />
        <HamBurger />
      </span>
    </Container>
  );
};

export default Nav;

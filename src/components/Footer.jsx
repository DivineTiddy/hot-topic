import styled from "styled-components";
import Text from "../ui/Text";

const Layout = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return <Layout>
    <Text type="footer">Copyright 2021 News Portal</Text>
  </Layout>;
};

export default Footer;

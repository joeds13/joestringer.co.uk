import Link from "next/link";
import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: ${(props) => props.theme.colours.header};
  color: white;
  width: 100%;
  height: 50px;
  font-size: 2em;
`;

const Header = (props) => (
  <Link href="/">
    <HeaderStyle>{props.appTitle}</HeaderStyle>
  </Link>
);

export default Header;

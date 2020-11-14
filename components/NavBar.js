import styled from "styled-components";

const NavBarStyle = styled.div`
  background-color: ${(props) => props.theme.colours.nav};
  color: white;
  width: 100%;
  height: 60px;
`;

const NavBar = () => <NavBarStyle />;

export default NavBar;

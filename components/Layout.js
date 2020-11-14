import Head from "next/head";
import styled from "styled-components";

import Header from "./Header";
import NavBar from "./NavBar";

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Layout = (props) => {
  const appTitle = `Joe Stringer`;

  return (
    <LayoutStyle>
      <Head>
        <title>{appTitle}</title>
      </Head>

      <Header appTitle={appTitle} />

      <Content>{props.children}</Content>

      <NavBar />
    </LayoutStyle>
  );
};

export default Layout;

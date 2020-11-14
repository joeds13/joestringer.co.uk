import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

const Layout = (props) => {
  const appTitle = `Joe Stringer`;

  return (
    <div className="Layout">
      <Head>
        <title>{appTitle}</title>
      </Head>

      <Header appTitle={appTitle} />

      <div className="Content">{props.children}</div>

      <NavBar />

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #__next {
          height: 100%;
          width: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .Layout {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }

        .Content {
          flex: 1;
          display: flex;
          flex-direction: column;
          font-family: Arial;
        }

        .backgroundImage {
          margin-bottom: 5px;
          height: 300px;
          background-image: url("https://images.prismic.io/joestringer/4cbc5d6d-9873-470f-8b6f-bb7a673d4f3d_background-63bd90ab.png?auto=compress,format");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: left bottom;
        }
      `}</style>
    </div>
  );
};

export default Layout;

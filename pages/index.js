import Layout from "../components/Layout";
import Link from "next/link";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";

import BackgroundImage from "../components/BackgroundImage";

function Index(home) {
  return (
    <Layout>
      <BackgroundImage />
      <span>{RichText.asText(home.data.content)}</span>
      <ul>
        <li>
          <Link href="/cloud">
            <a>Cloud</a>
          </Link>
        </li>
        <li>
          <Link href="/delivery">
            <a>Delivery</a>
          </Link>
        </li>
        <li>
          <Link href="/development">
            <a>Development</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const req = context.req;
  const home = await Client(req).getSingle("homepage");

  return {
    props: home,
  };
}

export default Index;

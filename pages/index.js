import Head from "next/head";
import Feature from "./section";
import SectionFeature from "./section2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clinic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionFeature />
      <Feature />
    </>
  );
}

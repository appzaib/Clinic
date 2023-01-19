import Head from "next/head";
import Mypage from "./services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clinic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <Mypage/>     
      </div>
    </>
  );
}

import Head from "next/head";
import TopBar from "../src/components/TopBar";
import HeadLine from "../src/components/Headline";
import Footer from "../src/components/Footer";
import RoundArt from "../src/components/RoundArt";
import GridArt from "../src/components/GridArt";
export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Kongkow IT Pekanbaru</title>
        <link
          rel="preload"
          href="/fonts/Konnect-Regular.otf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Konnect-Medium.otf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Konnect-Bold.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <TopBar />
      <HeadLine />
      <Footer />
      <RoundArt />
      <GridArt />
    </div>
  );
}

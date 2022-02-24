import { Main } from './style';
import Footer from '../../footer';
import Head from '../../head';
import Header from '../../header';
import SecondMessageSection from '../../section/second-message';

export default function ServicesView() {
  return (
    <>
      <Head />
      <Header />
      <Main>
        <SecondMessageSection
          title={`Services`}
          text={`We work with B2B Tech businesses to increase revenues by building an efficient B2B Sales system, thus by accelerating commercial results and closing deals. From outbound to inbound sales, we create partnerships within your company value chain. We focus on capturing and enhancing your value proposition throughout the selling and buying process.`}
        />
      </Main>
      <Footer />
    </>
  );
}

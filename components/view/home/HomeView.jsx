import Footer from '../../footer';
import Head from '../../head';
import { Main } from './style';
import MainMessageSection from '../../section/main-message';
import TreeBoxes from '../../section/tree-boxes';
import CenterText from '../../section/center-text';
import SecondMessageSection from '../../section/second-message';

export default function HomeView() {
  return (
    <>
      <Head />
      <Main>
        <MainMessageSection />
        <TreeBoxes />
        <CenterText />
        <SecondMessageSection />
      </Main>
      <Footer />
    </>
  );
}

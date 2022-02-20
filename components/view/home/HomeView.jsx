import Footer from '../../footer';
import Head from '../../head';
import { Main } from './style';
import MainMessageSection from '../../section/main-message';
import TreeBoxes from '../../section/tree-boxes';
import CenterText from '../../section/center-text';
import BookACall from '../../section/book-a-call';
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
        <BookACall />
      </Main>
      <Footer />
    </>
  );
}

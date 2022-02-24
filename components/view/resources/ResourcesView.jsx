import { Main } from './style';
import Footer from '../../footer';
import Head from '../../head';
import Header from '../../header';
import SecondMessageSection from '../../section/second-message';

export default function AboutView() {
  return (
    <>
      <Head />
      <Header />
      <Main>
        <SecondMessageSection
          title={`Resources.`}
          text={`Our experiences have been gathered based on both empirical, real work situations, and learning a sound knowledge of B2B Sales best practices, studying  some essential books.`}
        />
      </Main>
      <Footer />
    </>
  );
}

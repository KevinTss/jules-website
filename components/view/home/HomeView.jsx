import Footer from '../../footer';
import Head from '../../head';
import { Main } from './style';
import MainMessageSection from '../../section/main-message';

export default function HomeView() {
  return (
    <>
      <Head />
      <Main>
        <MainMessageSection />
      </Main>
      <Footer />
    </>
  );
}

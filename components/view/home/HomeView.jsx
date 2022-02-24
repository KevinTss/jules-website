import { Main } from './style';
import { Wrapper, Container, Button } from '../../../styles';
import BookACall from '../../section/book-a-call';
// import CenterText from '../../section/center-text';
import Footer from '../../footer';
import Head from '../../head';
import Header from '../../header';
import Link from 'next/link';
import MainMessageSection from '../../section/main-message';
import SecondMessageSection from '../../section/second-message';
import TreeBoxes from '../../section/tree-boxes';

export default function HomeView() {
  return (
    <>
      <Head />
      <Header />
      <Main>
        <MainMessageSection />
        <TreeBoxes />
        <Wrapper>
          <Container style={{ margin: '50px 0' }}>
            <Link href='/' passHref style={{ margin: 'auto' }}>
              <Button as='a'>Discover more</Button>
            </Link>
          </Container>
        </Wrapper>
        {/* <CenterText /> */}
        <SecondMessageSection
          title={`We help grow your sales capacity within weeks, to win large deals
            and grow faster`}
          text={`Building a top sales system to nail your niche (better than others)
            takes more than 1000s emails and 100s phone calls… In fact, you want`}
          list={[
            `to align your verticals’ “readiness to buy” with THEIR pressing
            issues`,
            `to make every touchpoint valuable and meaningful to THEM at first`,
            `to match your pricing model to what THEY value the most from you`,
          ]}
        />
        <BookACall />
      </Main>
      <Footer />
    </>
  );
}

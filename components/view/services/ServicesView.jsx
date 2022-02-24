import { Main } from './style';
import Footer from '../../footer';
import Head from '../../head';
import Header from '../../header';
import SecondMessageSection from '../../section/second-message';
import CenterText from '../../section/center-text';
import TreeBoxes from '../../section/tree-boxes';
import { Wrapper, Container, Button } from '../../../styles';
import CalendlyCTA from '../../calendly-cta';

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
        <CenterText
          text={`We build a system called “Triple Wins” which is based on three parties`}
        />
        <TreeBoxes
          list={[
            {
              title: `Prescribers`,
              text: `They earn value from suggesting your solution to their existing clients`,
            },
            {
              title: `Beneficiaries`,
              text: `They pay for your services so they can outsource workload complexity to you`,
            },
            {
              title: `Users`,
              text: `They earn value from using your solution to achieve more with less complexity`,
            },
          ]}
        />
        <CenterText text={`Our 4 steps to accelerate your revenue growth`} />
        <TreeBoxes
          list={[
            {
              title: `Build your revenue system`,
              text: `we refine your niche, nail your PMF, and boost your sales processes`,
            },
            {
              title: `Grow your revenue efficiently`,
              text: `we go-to-market through outbound, inbound, and partnership best practices`,
            },
            {
              title: `Fine-tune your value`,
              text: `we keep aligning your pitch, support heavy due diligence, and unlock your upselling capabilities`,
            },
            {
              title: `Close deals together`,
              text: `we sign deals, spread a shared-vision, and promote successes on your market`,
            },
          ]}
        />
        <Wrapper>
          <Container style={{ margin: '50px 0' }}>
            <CalendlyCTA>{`Grow your revenues`}</CalendlyCTA>
          </Container>
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}

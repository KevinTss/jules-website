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
          title={`Sales Konsul is driven by 3 core values`}
          list={[
            `Win-Win: we build long term relationships based on trust and mutual interests. We are honest and direct. We do what we say and we think about the outcomes of our actions.`,
            `Empathy: we listen actively. We relate to employees and leaders. We dare to put ourselves in their shoes. We value and support them all the way with their challenges to solve them.`,
            `Efficiency: we act immediately on the actions required to deliver expected results. We don’t overcomplicate. We stay focused on the objectives and persistently work to achieve results.`,
          ]}
        />
      </Main>
      <Footer />
    </>
  );
}

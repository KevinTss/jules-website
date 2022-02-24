import { Container } from './style';
import { Wrapper } from '../../../styles';
import CalendlyCTA from '../../calendly-cta';

export default function BookACall() {
  return (
    <Wrapper>
      <Container>
        <CalendlyCTA>{`Do Value-Selling`}</CalendlyCTA>
      </Container>
    </Wrapper>
  );
}

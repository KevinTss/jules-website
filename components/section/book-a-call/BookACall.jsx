import Image from 'next/image';

import { Container } from './style';
import { Wrapper } from '../../../styles';
import CalendlyCTA from '../../calendly-cta';

export default function BookACall() {
  return (
    <Wrapper>
      <Container>
        <CalendlyCTA>{`Book a call`}</CalendlyCTA>
      </Container>
    </Wrapper>
  );
}

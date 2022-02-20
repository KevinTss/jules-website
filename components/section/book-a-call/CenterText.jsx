import Image from 'next/image';

import { Container } from './style';
import { Wrapper } from '../../../styles';
import CalendlyCTA from '../../calendly-cta';

export default function CenterText() {
  return (
    <Wrapper>
      <Container>
        <CalendlyCTA />
      </Container>
    </Wrapper>
  );
}

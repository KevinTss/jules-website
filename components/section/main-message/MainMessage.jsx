import Image from 'next/image';

import { Section, Container, Left, Heading, ImageContainer } from './style';
import { Wrapper, Text } from '../../../styles';
import CalendlyCTA from '../../calendly-cta';

export default function MainMessage() {
  return (
    <Section>
      <Wrapper>
        <Container>
          <Left>
            <Heading>
              I help companies to accelerate revenue growth by closing large
              deals
            </Heading>
            <Text>
              But the truth is that closing deals with large organisations can
              be really painful because they are…
            </Text>
            <CalendlyCTA>Book a call with me</CalendlyCTA>
          </Left>
          <ImageContainer>
            <Image src='/background.jpg' alt='Jules Kerner' layout='fill' />
          </ImageContainer>
        </Container>
      </Wrapper>
    </Section>
  );
}

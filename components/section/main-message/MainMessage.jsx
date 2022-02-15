import Image from 'next/image';

import { Container, Left, Heading, ImageContainer } from './style';
import { Wrapper, Button, Text } from '../../../styles';

export default function MainMessage() {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Heading>
            I help companies to accelerate revenue growth by closing large deals
          </Heading>
          <Text>
            But the truth is that closing deals with large organisations can be
            really painful because they are…
          </Text>
          <Button>Book a call with me</Button>
        </Left>
        <ImageContainer>
          <Image
            src='/jules.png'
            alt='Jules Kerner'
            width='700px'
            height='700px'
          />
        </ImageContainer>
      </Container>
    </Wrapper>
  );
}

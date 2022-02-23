import { Section, Container, Left, Heading, ImageContainer } from './style';
import { Wrapper, Text } from '../../../styles';

export default function MainMessage() {
  return (
    <Section>
      <Wrapper>
        <Container>
          <Left>
            <Heading>
              We help Tech companies to accelerate their revenue growth by
              closing large deals
            </Heading>
            <Text>
              Closing large deals efficiently is not an easy thing because
              companies are…
            </Text>
          </Left>
          <ImageContainer>
            <img src='background.jpg' alt='Jules Kerner' />
          </ImageContainer>
        </Container>
      </Wrapper>
    </Section>
  );
}

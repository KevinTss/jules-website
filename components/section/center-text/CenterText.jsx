import { Section, Container } from './style';
import { Wrapper, Text } from '../../../styles';

export default function CenterText({ text }) {
  return (
    <Section>
      <Wrapper>
        <Container>
          <Text>{text}</Text>
        </Container>
      </Wrapper>
    </Section>
  );
}

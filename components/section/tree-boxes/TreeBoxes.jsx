import { Container, Box, InnerBox, Sentence } from './style';
import { Wrapper, Text } from '../../../styles';

export default function TreeBoxes() {
  return (
    <Wrapper>
      <Container>
        <Box>
          <InnerBox>
            <Sentence>Large departments</Sentence>
            <Text>Hard to connect and meet with decision makers</Text>
          </InnerBox>
        </Box>
        <Box>
          <InnerBox>
            <Sentence>Complex buying-process</Sentence>
            <Text>Many international standards to meet expectations</Text>
          </InnerBox>
        </Box>
        <Box>
          <InnerBox>
            <Sentence>High expectations</Sentence>
            <Text>Risk-averse by obligations and need top service-level</Text>
          </InnerBox>
        </Box>
      </Container>
    </Wrapper>
  );
}

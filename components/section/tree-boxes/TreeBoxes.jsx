import { Container, Box, InnerBox, Sentence } from './style';
import { Wrapper } from '../../../styles';

export default function TreeBoxes() {
  return (
    <Wrapper>
      <Container>
        <Box>
          <InnerBox>
            <Sentence>Risk-averse and have huge expectations</Sentence>
          </InnerBox>
        </Box>
        <Box>
          <InnerBox>
            <Sentence>Hard to connect with many decision-makers</Sentence>
          </InnerBox>
        </Box>
        <Box>
          <InnerBox>
            <Sentence>Following complex security and legal standards</Sentence>
          </InnerBox>
        </Box>
      </Container>
    </Wrapper>
  );
}

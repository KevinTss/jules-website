import Image from 'next/image';

import { Container, Box, Sentence } from './style';
import { Wrapper, Text } from '../../../styles';

export default function TreeBoxes() {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Text>Large departments</Text>
          <Sentence>Hard to connect and meet with decision makers</Sentence>
        </Box>
        <Box>
          <Text>Complex buying-process</Text>
          <Sentence>Many international standards to meet expectations</Sentence>
        </Box>
        <Box>
          <Sentence>
            <Text>High expectations</Text>
            Risk-averse by obligations and need top service-level
          </Sentence>
        </Box>
      </Container>
    </Wrapper>
  );
}

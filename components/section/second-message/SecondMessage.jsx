import Image from 'next/image';

import { Container, Right, SmallHeading } from './style';
import { Wrapper, Text } from '../../../styles';

export default function SecondMessage() {
  return (
    <Wrapper>
      <Container>
        <Right>
          <SmallHeading>
            Nail the niche and maximise revenues by focusing on value-creation
          </SmallHeading>
          <Text>
            But the truth is that nailing your niche require more that 1000s
            mails and 100s of phone calls because…
          </Text>
        </Right>
      </Container>
    </Wrapper>
  );
}

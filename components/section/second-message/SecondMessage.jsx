import { Container, Left, Right, Image, SmallHeading, Ul, Li } from './style';
import { Wrapper, Text } from '../../../styles';

export default function SecondMessage() {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Image src='bg2.jpeg' alt='Sales Konsul' />
        </Left>
        <Right>
          <SmallHeading>
            We help grow your sales capacity within weeks, to win large deals
            and grow faster
          </SmallHeading>
          <Text>
            Building a top sales system to nail your niche (better than others)
            takes more than 1000s emails and 100s phone calls… In fact, you want
          </Text>
          <Ul>
            <Li>
              to align your verticals’ “readiness to buy” with THEIR pressing
              issues
            </Li>
            <Li>
              to make every touchpoint valuable and meaningful to THEM at first
            </Li>
            <Li>
              to match your pricing model to what THEY value the most from you
            </Li>
          </Ul>
        </Right>
      </Container>
    </Wrapper>
  );
}

import { Container, Left, Right, Image, SmallHeading, Ul, Li } from './style';
import { Wrapper, Text } from '../../../styles';

export default function SecondMessage({ title, text, list }) {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Image src='bg2.jpeg' alt='Sales Konsul' />
        </Left>
        <Right>
          <SmallHeading>{title}</SmallHeading>
          <Text>{text}</Text>
          {list && (
            <Ul>
              {list.map((item) => (
                <Li key={item}>{item}</Li>
              ))}
            </Ul>
          )}
        </Right>
      </Container>
    </Wrapper>
  );
}

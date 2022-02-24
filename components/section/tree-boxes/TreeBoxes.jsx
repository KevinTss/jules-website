import { Container, Box, InnerBox, Sentence, Title } from './style';
import { Wrapper } from '../../../styles';

export default function TreeBoxes({ list }) {
  return (
    <Wrapper>
      <Container nb={list.length}>
        {list.map((item) => (
          <Box key={item}>
            <InnerBox>
              {!!item?.title && <Title>{item.title}</Title>}
              <Sentence>{item.text}</Sentence>
            </InnerBox>
          </Box>
        ))}
      </Container>
    </Wrapper>
  );
}

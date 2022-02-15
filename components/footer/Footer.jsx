import { FooterContainer } from './style';
import { Text, Link } from '../ui';
import { Wrapper } from '../../styles';

export default function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <Text>
          Copyright &copy; {new Date().getFullYear()} Saleskonsult, all rights
          reserved
        </Text>
        <Text>
          Powered by
          <Link href='https://screenside.be/' target='_blank'>
            ScreenSide
          </Link>
        </Text>
      </Wrapper>
    </FooterContainer>
  );
}

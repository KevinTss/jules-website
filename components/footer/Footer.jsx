import { FooterContainer } from './style';

import { Wrapper } from '../../styles';

export default function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <p>
          Copyright &copy; {new Date().getFullYear()} Saleskonsult, all rights
          reserved
        </p>
        <p>
          Powered by{' '}
          <a href='https://screenside.be/' target='_blank' rel='noreferrer'>
            ScreenSide
          </a>
        </p>
      </Wrapper>
    </FooterContainer>
  );
}

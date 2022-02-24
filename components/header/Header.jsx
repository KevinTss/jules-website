import Link from 'next/link';

import {
  Header as HeaderEl,
  Container,
  Nav,
  Items,
  Item,
  NavLinkEl,
  Image,
} from './style';
import { Wrapper } from '../../styles';

export default function Header() {
  return (
    <HeaderEl>
      <Wrapper>
        <Container>
          <Link href='/' passHref>
            <a>
              <Image src='/logo.png' alt='Sales Konsul logo' />
            </a>
          </Link>
          <Nav>
            <Items>
              <Item>
                <Link href='/about' passHref>
                  <NavLinkEl>About</NavLinkEl>
                </Link>
              </Item>
              <Item>
                <Link href='/services' passHref>
                  <NavLinkEl>Services</NavLinkEl>
                </Link>
              </Item>
              <Item>
                <Link href='/resources' passHref>
                  <NavLinkEl>Resources</NavLinkEl>
                </Link>
              </Item>
            </Items>
          </Nav>
        </Container>
      </Wrapper>
    </HeaderEl>
  );
}

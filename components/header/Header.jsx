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
          <Image src='/logo.png' alt='Sales Konsul logo' />
          <Nav>
            <Items>
              <Item>
                <Link href='/' passHref>
                  <NavLinkEl>About</NavLinkEl>
                </Link>
              </Item>
              <Item>
                <Link href='/' passHref>
                  <NavLinkEl>Services</NavLinkEl>
                </Link>
              </Item>
              <Item>
                <Link href='/' passHref>
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

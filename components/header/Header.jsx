import Link from 'next/link';

import {
  Header as HeaderEl,
  Container,
  Nav,
  Items,
  Item,
  NavLinkEl,
} from './style';
import { Wrapper } from '../../styles';

export default function Header() {
  return (
    <HeaderEl>
      <Wrapper>
        <Container>
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

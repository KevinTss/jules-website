import { AdvertisementContainer, ButtonContainer } from './style';
import { Button } from '../../ui';
import { Wrapper } from '../../../styles';

export default function MainMessage() {
  return (
    <Wrapper>
      <AdvertisementContainer>
        <ButtonContainer>
          <Button variant='primary'>Discover</Button>
        </ButtonContainer>
      </AdvertisementContainer>
    </Wrapper>
  );
}

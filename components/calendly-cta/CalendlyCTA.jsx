import { openPopupWidget } from 'react-calendly';

import { Button } from '../../styles';

export default function CalendlyCTA({ children }) {
  return (
    <Button
      onClick={() =>
        openPopupWidget({
          url: 'https://calendly.com/jules-230',
        })
      }
    >
      {children}
    </Button>
  );
}

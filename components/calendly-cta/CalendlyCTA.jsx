import { openPopupWidget } from 'react-calendly';

import { Button } from '../../styles';

export default function CalendlyCTA({ children }) {
  return (
    <Button
      onClick={() =>
        openPopupWidget({
          url: 'https://calendly.com/kevin-tassi',
        })
      }
    >
      {children}
    </Button>
  );
}

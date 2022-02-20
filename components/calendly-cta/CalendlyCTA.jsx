import { openPopupWidget } from 'react-calendly';

export default function CalendlyCTA() {
  return (
    <div>
      <button
        onClick={() =>
          openPopupWidget({
            url: 'https://calendly.com/kevin-tassi',
            text: 'Schedule time with me',
            color: 'red',
            textColor: 'blue',
            branding: true,
          })
        }
      >
        Custom Button
      </button>
    </div>
  );
}

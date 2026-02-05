import { createTw } from 'react-pdf-tailwind';

export const tw = createTw({
  theme: {
    fontFamily: {
      sans: ['Helvetica'],
    },
    extend: {
      colors: {
        primary: '#2563EB',
        primaryLight: '#DBEAFE',
        grayText: '#374151',
      },
    },
  },
});

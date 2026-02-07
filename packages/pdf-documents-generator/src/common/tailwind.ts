import { createTw } from "react-pdf-tailwind";

export const tw = createTw({
  theme: {
    fontFamily: {
      sans: ['Helvetica'],
    },
    extends: {
      colors: {
        primary: '#2563EB',
        primaryLight: '#DBEAFE',
        grayText: '#374151',
      }
    },
  },
});

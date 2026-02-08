import { Style } from "@react-pdf/types";
import { createTw } from "react-pdf-tailwind";

type Tailwind = (input: string) => Style;

export const tw: Tailwind = createTw({
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

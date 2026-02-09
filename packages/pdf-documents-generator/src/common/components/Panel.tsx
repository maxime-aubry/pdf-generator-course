import { View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { PropsWithChildren } from "react";
import { tw } from "../tailwind";

interface PanelProps {
  style?: Style;
}

export default function Panel({ children, style }: PropsWithChildren<PanelProps>) {
  return <View style={[
    tw(`mt-6 ml-auto p-3 border border-gray-200 rounded bg-gray-200`),
    style ?? tw('')
  ]}>
    { children }
  </View>
}

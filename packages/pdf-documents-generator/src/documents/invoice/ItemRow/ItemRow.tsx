import { View, Text } from '@react-pdf/renderer';
import { ItemRowDto } from './ItemRow.dto';
import { tw } from '../../tailwind';

interface ItemsRowProps {
    item: ItemRowDto;
}

export default function ItemRow({ item }: ItemsRowProps) {
  const totalLine = item.quantity * item.unitPrice;
  return (
    <View style={tw('flex-row border-b border-gray-200 px-2 py-1')}>
      <Text style={tw('w-1/2 text-[9px]')}>{item.description}</Text>
      <Text style={tw('w-1/6 text-right text-[9px]')}>{item.quantity}</Text>
      <Text style={tw('w-1/6 text-right text-[9px]')}>
        {item.unitPrice.toFixed(2)}
      </Text>
      <Text style={tw('w-1/6 text-right text-[9px]')}>
        {totalLine.toFixed(2)}
      </Text>
    </View>
  );
}

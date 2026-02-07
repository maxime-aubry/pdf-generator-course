import { Text, View } from '@react-pdf/renderer';
import { tw } from '../../../common/tailwind';
import { IItemRowDto } from './ItemRow.dto';

interface ItemsRowProps {
  item: IItemRowDto;
}

export default function ItemRow({ item }: ItemsRowProps) {
  const totalLine: number = item.quantity * item.unitPrice;

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

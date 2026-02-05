import { View, Text } from '@react-pdf/renderer';
import { ItemRowDto } from '../ItemRow/ItemRow.dto';
import ItemRow from '../ItemRow/ItemRow';
import { tw } from '../../tailwind';

interface ItemsTableProps {
    items: ItemRowDto[];
}

export default function ItemsTable({ items }: ItemsTableProps) {
  return (
    <View>
      <View style={tw('flex-row bg-primary text-white px-2 py-1')}>
        <Text style={tw('w-1/2 text-[9px] font-bold')}>Description</Text>
        <Text style={tw('w-1/6 text-right text-[9px] font-bold')}>Qté</Text>
        <Text style={tw('w-1/6 text-right text-[9px] font-bold')}>PU €</Text>
        <Text style={tw('w-1/6 text-right text-[9px] font-bold')}>Total €</Text>
      </View>
      {items.map((item, idx) => (
        <ItemRow key={idx} item={item} />
      ))}
    </View>
  );
}

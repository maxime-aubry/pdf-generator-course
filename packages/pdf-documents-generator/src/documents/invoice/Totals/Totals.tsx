import { View, Text } from '@react-pdf/renderer';
import { ItemRowDto } from '../ItemRow/ItemRow.dto';
import { tw } from '../../tailwind';

interface TotalsProps {
    items: ItemRowDto[];
    tax: number;
}

export default function Totals({ items, tax }: TotalsProps) {
  const subtotal: number = items.reduce(
    (accumulator: number, item: ItemRowDto) => accumulator + item.quantity * item.unitPrice,
    0
  );
  const taxValue = (subtotal * tax) / 100;
  const total = subtotal + taxValue;

  return (
    <View style={tw('mt-6 ml-auto w-56 p-3 border border-gray-200 rounded bg-gray-50')}>
      <Text style={tw('flex-row justify-between text-[9px] mb-1')}>Sous-total : {subtotal.toFixed(2)} €</Text>
      <Text style={tw('flex-row justify-between text-[9px] mb-1')}>TVA ({tax}%) : {taxValue.toFixed(2)} €</Text>
      <Text style={tw('flex-row justify-between text-[10px] font-bold text-primary')}>Total TTC : {total.toFixed(2)} €</Text>
    </View>
  );
}

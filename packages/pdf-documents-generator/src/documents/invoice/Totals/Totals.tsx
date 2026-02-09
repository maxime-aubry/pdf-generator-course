import { Text } from '@react-pdf/renderer';
import Panel from '../../../common/components/Panel';
import { tw } from '../../../common/tailwind';
import { IItemRowDto } from '../ItemRow/ItemRow.dto';

interface TotalsProps {
  items: IItemRowDto[];
  tax: number;
}

// const styles = StyleSheet.create({
//   box: {
//     width: "170px",
//   }
// });

export default function Totals({ items, tax }: TotalsProps) {
  const subtotal: number = items.reduce(
    (accumulator: number, item: IItemRowDto) => accumulator + item.quantity * item.unitPrice,
    0
  );
  const taxValue: number = (subtotal * tax) / 100;
  const total: number = subtotal + taxValue;

  return (
    <Panel style={tw('w-56')}>
      <Text style={tw('flex-row justify-between text-[9px] mb-1')}>Sous-total : {subtotal.toFixed(2)} €</Text>
      <Text style={tw('flex-row justify-between text-[9px] mb-1')}>TVA ({tax}%) : {taxValue.toFixed(2)} €</Text>
      <Text style={tw('flex-row justify-between text-[10px] font-bold text-primary')}>Total TTC : {total.toFixed(2)} €</Text>
    </Panel>
  );
}

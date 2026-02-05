import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { ItemRowDto } from '../ItemRow/ItemRow.dto';

const styles = StyleSheet.create({
  totalSection: {
    marginTop: 8,
    textAlign: 'right',
  },
});

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
    <View style={styles.totalSection}>
      <Text>Sous-total : {subtotal.toFixed(2)} €</Text>
      <Text>TVA ({tax}%) : {taxValue.toFixed(2)} €</Text>
      <Text>Total TTC : {total.toFixed(2)} €</Text>
    </View>
  );
}

import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { ItemRowDto } from './ItemRow.dto';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 4,
    borderBottom: '0.5 solid #ccc',
  },
});

interface ItemsRowProps {
    item: ItemRowDto;
}

export default function ItemRow({ item }: ItemsRowProps) {
  const totalLine = item.quantity * item.unitPrice;
  return (
    <View style={styles.row}>
      <Text style={{ width: '50%' }}>{item.description}</Text>
      <Text style={{ width: '15%', textAlign: 'right' }}>{item.quantity}</Text>
      <Text style={{ width: '15%', textAlign: 'right' }}>
        {item.unitPrice.toFixed(2)}
      </Text>
      <Text style={{ width: '20%', textAlign: 'right' }}>
        {totalLine.toFixed(2)}
      </Text>
    </View>
  );
}

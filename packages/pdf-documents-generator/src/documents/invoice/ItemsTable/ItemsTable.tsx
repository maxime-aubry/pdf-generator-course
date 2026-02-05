import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { ItemRowDto } from '../ItemRow/ItemRow.dto';
import ItemRow from '../ItemRow/ItemRow';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderBottom: '1 solid #000',
    marginBottom: 4,
    fontWeight: 'bold',
  },
});

interface ItemsTableProps {
    items: ItemRowDto[];
}

export default function ItemsTable({ items }: ItemsTableProps) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={{ width: '50%' }}>Description</Text>
        <Text style={{ width: '15%', textAlign: 'right' }}>Qté</Text>
        <Text style={{ width: '15%', textAlign: 'right' }}>PU €</Text>
        <Text style={{ width: '20%', textAlign: 'right' }}>Total €</Text>
      </View>
      {items.map((item, idx) => (
        <ItemRow key={idx} item={item} />
      ))}
    </View>
  );
}

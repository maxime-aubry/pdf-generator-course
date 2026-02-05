import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { InvoiceInfoDto } from '../InvoiceInfoDto.dto';

const styles = StyleSheet.create({
  section: { marginBottom: 8 },
});

interface InvoiceInfoProps {
    invoiceInfo: InvoiceInfoDto;
}

export default function InvoiceInfo({ invoiceInfo: invocieInfo }: InvoiceInfoProps) {
  return (
    <View style={styles.section}>
      <Text>FACTURE #{invocieInfo.number}</Text>
      <Text>Date : {invocieInfo.date.toISOString()}</Text>
      <Text>Échéance : {invocieInfo.dueDate.toISOString()}</Text>
    </View>
  );
}

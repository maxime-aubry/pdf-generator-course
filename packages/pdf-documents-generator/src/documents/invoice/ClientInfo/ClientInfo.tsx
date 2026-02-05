import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { ClientInfoDto } from '../../../common/ClientInfo.dto';

const styles = StyleSheet.create({
  section: { marginBottom: 12 },
});

interface ClientInfoProps {
    clientInfo: ClientInfoDto;
}

export default function ClientInfo({ clientInfo }: ClientInfoProps) {
  return (
    <View style={styles.section}>
      <Text>Facturé à :</Text>
      <Text>{clientInfo.name}</Text>
      <Text>{clientInfo.address}</Text>
    </View>
  );
}

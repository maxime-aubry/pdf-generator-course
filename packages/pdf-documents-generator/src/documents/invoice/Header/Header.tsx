import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { CompanyInfoDto } from '../../../common/CompanyInfo.dto';
import { createTw } from 'react-pdf-tailwind';

const styles = StyleSheet.create({
  header: { marginBottom: 20 },
  logo: { width: 100, height: 50 },
});

const tw = createTw({});

interface HeaderProps {
    companyInfo: CompanyInfoDto;
}

export default function Header({ companyInfo: company }: HeaderProps) {
  return (
    <View style={styles.header} fixed>
      {company.logo && <Image style={styles.logo} src={company.logo} />}
      <Text>{company.name}</Text>
      <Text>{company.address}</Text>
      <Text>{company.contact}</Text>
    </View>
  );
}

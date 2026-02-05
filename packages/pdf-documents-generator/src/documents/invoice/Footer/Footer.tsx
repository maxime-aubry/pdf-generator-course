import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { CompanyInfoDto } from '../../../common/CompanyInfo.dto';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 9,
  },
});

interface FooterProps {
    companyInfo: CompanyInfoDto;
}

export default function Footer({ companyInfo }: FooterProps) {
  return (
    <View style={styles.footer} fixed>
      <Text>Merci pour votre confiance !</Text>
      <Text>{companyInfo.name} — {companyInfo.contact}</Text>
    </View>
  );
}

import { View, Text } from '@react-pdf/renderer';
import { CompanyInfoDto } from '../../../common/CompanyInfo.dto';
import { tw } from '../../tailwind';

interface FooterProps {
    companyInfo: CompanyInfoDto;
}

export default function Footer({ companyInfo }: FooterProps) {
  return (
    <View fixed style={tw('absolute bottom-8 left-10 right-10 text-center text-[8px] text-gray-400 border-t border-gray-200 pt-2')}>
      <Text>Merci pour votre confiance !</Text>
      <Text>{companyInfo.name} — {companyInfo.contact}</Text>
    </View>
  );
}

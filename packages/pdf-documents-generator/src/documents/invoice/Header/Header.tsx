import { Text, View } from '@react-pdf/renderer';
import { ICompanyInfoDto } from '../../../common/dtos/CompanyInfo.dto';
import { tw } from '../../../common/tailwind';

interface HeaderProps {
  companyInfo: ICompanyInfoDto;
}

export default function Header({ companyInfo: company }: HeaderProps) {
  return (
    <View fixed style={tw('absolute top-0 left-0 right-0 h-20 px-10 py-4 bg-primary text-white')}>
      {/* {company.logo && <Image style={styles.logo} src={company.logo} />} */}
      <Text style={tw('text-sm font-bold')}>{company.name}</Text>
      <Text style={tw('text-[9px] mt-1')}>{company.address}</Text>
      <Text style={tw('text-[9px] mt-1')}>{company.contact}</Text>
    </View>
  );
}

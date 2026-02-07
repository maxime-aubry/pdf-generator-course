import { Text, View } from '@react-pdf/renderer';
import { IClientInfoDto } from '../../../common/dtos/ClientInfo.dto';
import { tw } from '../../../common/tailwind';

interface ClientInfoProps {
  clientInfo: IClientInfoDto;
}

export default function ClientInfo({ clientInfo }: ClientInfoProps) {
  return (
    <View style={tw('mb-5 p-3 border border-gray-200 rounded')}>
      <Text style={tw('text-[11px] font-bold text-primary mb-1')}>Facturé à :</Text>
      <Text style={tw('text-[9px]')}>{clientInfo.name}</Text>
      <Text style={tw('text-[9px]')}>{clientInfo.address}</Text>
    </View>
  );
}

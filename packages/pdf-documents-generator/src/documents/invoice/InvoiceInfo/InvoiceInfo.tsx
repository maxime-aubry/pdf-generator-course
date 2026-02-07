import { Text, View } from '@react-pdf/renderer';
import { tw } from '../../../common/tailwind';
import { IInvoiceInfoDto } from '../InvoiceInfo.dto';

interface InvoiceInfoProps {
  invoiceInfo: IInvoiceInfoDto;
}

export default function InvoiceInfo({ invoiceInfo: invocieInfo }: InvoiceInfoProps) {
  return (
    <View style={tw('mt-4 mb-4 p-3 rounded bg-primaryLight')}>
      <Text style={tw('text-[11px] font-bold text-primary mb-1')}>FACTURE #{invocieInfo.number}</Text>
      <Text style={tw('text-[9px]')}>Date : {invocieInfo.date.toISOString()}</Text>
      <Text style={tw('text-[9px]')}>Échéance : {invocieInfo.dueDate.toISOString()}</Text>
    </View>
  );
}

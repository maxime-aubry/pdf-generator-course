import { Document, Page, View } from '@react-pdf/renderer';
import { tw } from '../tailwind';
import ClientInfo from './ClientInfo/ClientInfo';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { IInvoiceInfoDto } from './InvoiceInfo.dto';
import InvoiceInfo from './InvoiceInfo/InvoiceInfo';
import ItemsTable from './ItemsTable/ItemsTable';
import Totals from './Totals/Totals';

interface InvoiceProps {
  invoiceInfo: IInvoiceInfoDto;
}

export default function InvoiceDocument({ invoiceInfo }: InvoiceProps) {
  const { companyInfo, items, tax } = invoiceInfo;

  return (
    <Document>
      <Page size="A4" style={tw('pt-24 pb-24 px-10 text-[10px] text-grayText')}>
        <Header companyInfo={companyInfo} />
        <View>
          <InvoiceInfo invoiceInfo={invoiceInfo} />
          <ClientInfo clientInfo={invoiceInfo.client} />
          <ItemsTable items={items} />
          <Totals items={items} tax={tax} />
        </View>
        <Footer companyInfo={companyInfo} />
      </Page>
    </Document>
  );
};

import { Document, Page, View } from '@react-pdf/renderer';
import ClientInfo from './ClientInfo/ClientInfo';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import InvoiceInfo from './InvoiceInfo/InvoiceInfo';
import { InvoiceInfoDto } from './InvoiceInfoDto.dto';
import ItemsTable from './ItemsTable/ItemsTable';
import Totals from './Totals/Totals';
import { tw } from '../tailwind';

interface InvoiceProps {
  invoice: InvoiceInfoDto;
}

export const InvoiceDocument = ({ invoice }: InvoiceProps) => {
  const { companyInfo, items, tax } = invoice;

  return (
    <Document>
      <Page size="A4" style={tw('pt-24 pb-24 px-10 text-[10px] text-grayText')}>
        <Header companyInfo={companyInfo} />
        <View>
          <InvoiceInfo invoiceInfo={invoice} />
          <ClientInfo clientInfo={invoice.client} />
          <ItemsTable items={items} />
          <Totals items={items} tax={tax} />
        </View>
        <Footer companyInfo={companyInfo} />
      </Page>
    </Document>
  );
};

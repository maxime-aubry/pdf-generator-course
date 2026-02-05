import { Document, Page, StyleSheet, View } from '@react-pdf/renderer';
import ClientInfo from './ClientInfo/ClientInfo';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import InvoiceInfo from './InvoiceInfo/InvoiceInfo';
import { InvoiceInfoDto } from './InvoiceInfoDto.dto';
import ItemsTable from './ItemsTable/ItemsTable';
import Totals from './Totals/Totals';

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,   // espace pour le header
    paddingBottom: 80, // espace pour le footer
    paddingHorizontal: 40,
    fontSize: 10,
  },
});

interface InvoiceProps {
  invoice: InvoiceInfoDto;
}

export const InvoiceDocument = ({ invoice }: InvoiceProps) => {
  const { companyInfo, items, tax } = invoice;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
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

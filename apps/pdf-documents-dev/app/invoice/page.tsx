'use client';
import { PDFViewer } from "@react-pdf/renderer";
import { IInvoiceInfoDto, InvoiceDocument, IItemRowDto } from "@repo/pdf-documents-generator";

export default function InvoicePdfViewer() {
  const invoice: IInvoiceInfoDto = {
    number: 'FACT-20260101-0001',
    date: new Date(),
    dueDate: new Date(),
    client: {
      name: 'Isagri Evreux',
      address: '401 Rue Alberto Santos Dumont, 27930 Guichainville',
    },
    companyInfo: {
      logo: '',
      name: 'Isagri',
      address: '2 Av. des Censives, 60000 Tillé',
      contact: 'XXX',
    },
    items: Array.from<unknown, IItemRowDto>(
      { length: 10 },
      (_, index: number) => ({
        description: `Produit ${index + 1}`,
        quantity: Math.ceil(Math.random() * (20 - 1) + 1),
        unitPrice: Math.random() * (200 - 1) + 1,
      }),
    ),
    tax: 0.2,
  };

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <InvoiceDocument invoiceInfo={invoice} />
    </PDFViewer>
  );
}

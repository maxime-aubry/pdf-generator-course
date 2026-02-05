'use client';

import { PDFViewer } from '@react-pdf/renderer';
import { InvoiceDocument } from '@repo/pdf-documents-generator/documents/invoice/invoice';
import { InvoiceInfoDto } from '../../../../packages/pdf-documents-generator/src/documents/invoice/InvoiceInfoDto.dto';

export default function InvoicePdfViewer() {
    const invoice: InvoiceInfoDto = {
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
        items: [
            { description: 'produit A', quantity: 5, unitPrice: 27.9 },
            { description: 'produit B', quantity: 17, unitPrice: 8.7 },
            { description: 'produit C', quantity: 2, unitPrice: 95.1 },
            { description: 'produit D', quantity: 22, unitPrice: 10 },
            { description: 'produit E', quantity: 14, unitPrice: 4.5 },
            { description: 'produit F', quantity: 3, unitPrice: 120 },
            { description: 'produit G', quantity: 9, unitPrice: 15.8 },
            { description: 'produit H', quantity: 1, unitPrice: 450 },
            { description: 'produit I', quantity: 6, unitPrice: 32.4 },
            { description: 'produit J', quantity: 18, unitPrice: 7.9 },
            { description: 'produit K', quantity: 4, unitPrice: 210 },
            { description: 'produit L', quantity: 12, unitPrice: 18.6 },
            { description: 'produit M', quantity: 7, unitPrice: 64.3 },
            { description: 'produit N', quantity: 20, unitPrice: 5.5 },
            { description: 'produit O', quantity: 2, unitPrice: 980 },
            { description: 'produit P', quantity: 15, unitPrice: 11.2 },
            { description: 'produit Q', quantity: 8, unitPrice: 44.9 },
            { description: 'produit R', quantity: 30, unitPrice: 3.2 },
            { description: 'produit S', quantity: 10, unitPrice: 29.99 },
            { description: 'produit T', quantity: 6, unitPrice: 87.5 },
            { description: 'produit U', quantity: 13, unitPrice: 14.4 },
            { description: 'produit V', quantity: 21, unitPrice: 6.8 },
            { description: 'produit W', quantity: 5, unitPrice: 155 },
            { description: 'produit X', quantity: 2, unitPrice: 320 },
            { description: 'produit Y', quantity: 16, unitPrice: 9.3 },
            { description: 'produit Z', quantity: 11, unitPrice: 22.7 },
            { description: 'produit AA', quantity: 4, unitPrice: 75 },
            { description: 'produit AB', quantity: 19, unitPrice: 12.1 },
            { description: 'produit AC', quantity: 3, unitPrice: 260 },
            { description: 'produit AD', quantity: 27, unitPrice: 4.9 },
            { description: 'produit AE', quantity: 6, unitPrice: 98.6 },
            { description: 'produit AF', quantity: 14, unitPrice: 16.2 },
            { description: 'produit AG', quantity: 1, unitPrice: 1250 },
            { description: 'produit AH', quantity: 9, unitPrice: 33.3 },
            { description: 'produit AI', quantity: 24, unitPrice: 6.1 },
            { description: 'produit AJ', quantity: 7, unitPrice: 58 },
            { description: 'produit AK', quantity: 12, unitPrice: 19.9 },
            { description: 'produit AL', quantity: 18, unitPrice: 8.4 },
            { description: 'produit AM', quantity: 5, unitPrice: 142 },
            { description: 'produit AN', quantity: 2, unitPrice: 670 },
            ],
        tax: 0.2,
    };

    return <PDFViewer width={1200} height={1500}>
        <InvoiceDocument invoice={invoice} />
    </PDFViewer>;
}

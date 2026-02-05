import ReactPDF from '@react-pdf/renderer';
import { JSXElementConstructor, ReactElement } from 'react';
import { Invoice } from '../documents/invoice/invoice';
import { InvoiceInfoDto } from '../documents/invoice/invoice.dto';

type PdfDocumentFactoryFn<TDto extends object> = (dto: TDto) => Promise<NodeJS.ReadableStream>;

export const generateInvoiceAsync: PdfDocumentFactoryFn<InvoiceInfoDto> = async (dto: InvoiceInfoDto): Promise<NodeJS.ReadableStream> => {
    return await generateAsync<InvoiceInfoDto>(<Invoice dto={dto} />);
}

const generateAsync = async <TProps extends object>(template: ReactElement<ReactPDF.DocumentProps, string | JSXElementConstructor<TProps>>): Promise<NodeJS.ReadableStream> => {
    return await ReactPDF.renderToStream(template);
}

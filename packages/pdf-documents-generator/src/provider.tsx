import { renderToStream } from "@react-pdf/renderer";
import InvoiceDocument from "./documents/invoice/InvoiceDocument";
import { IInvoiceInfoDto } from "./documents/invoice/InvoiceInfo.dto";

type PdfDocumentFactoryFn<TDto extends object> = (dto: TDto) => Promise<NodeJS.ReadableStream>;

export const generateInvoiceAsync: PdfDocumentFactoryFn<IInvoiceInfoDto> = async (invoice: IInvoiceInfoDto): Promise<NodeJS.ReadableStream> => {
  return await renderToStream(<InvoiceDocument invoiceInfo={invoice} />);
}

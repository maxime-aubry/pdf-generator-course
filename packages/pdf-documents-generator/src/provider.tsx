import { renderToBuffer } from "@react-pdf/renderer";
import InvoiceDocument from "./documents/invoice/InvoiceDocument";
import { IInvoiceInfoDto } from "./documents/invoice/InvoiceInfo.dto";

type PdfDocumentFactoryFn<TDto extends object> = (dto: TDto) => Promise<Buffer>;

export const generateInvoiceAsync: PdfDocumentFactoryFn<IInvoiceInfoDto> = async (invoice: IInvoiceInfoDto): Promise<Buffer> => {
  return await renderToBuffer(<InvoiceDocument invoiceInfo={invoice} />);
}

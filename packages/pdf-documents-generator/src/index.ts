import { IClientInfoDto } from "./common/dtos/ClientInfo.dto";
import { ICompanyInfoDto } from "./common/dtos/CompanyInfo.dto";
import InvoiceDocument from "./documents/invoice/InvoiceDocument";
import { IInvoiceInfoDto } from "./documents/invoice/InvoiceInfo.dto";
import { IItemRowDto } from "./documents/invoice/ItemRow/ItemRow.dto";
import { generateInvoiceAsync } from "./provider";

export {
  generateInvoiceAsync,
  InvoiceDocument
};

export type {
  IClientInfoDto,
  ICompanyInfoDto,
  IInvoiceInfoDto,
  IItemRowDto
};

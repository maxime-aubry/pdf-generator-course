import { ClientInfoDto } from "../../common/ClientInfo.dto";
import { CompanyInfoDto } from "../../common/CompanyInfo.dto";
import { ItemRowDto } from "./ItemRow/ItemRow.dto";

export interface InvoiceInfoDto {
    number: string;
    date: Date;
    dueDate: Date;
    client: ClientInfoDto;
    companyInfo: CompanyInfoDto;
    items: ItemRowDto[];
    tax: number;
}

import { IClientInfoDto } from "../../common/dtos/ClientInfo.dto";
import { ICompanyInfoDto } from "../../common/dtos/CompanyInfo.dto";
import { IItemRowDto } from "./ItemRow/ItemRow.dto";

export interface IInvoiceInfoDto {
    number: string;
    date: Date;
    dueDate: Date;
    client: IClientInfoDto;
    companyInfo: ICompanyInfoDto;
    items: IItemRowDto[];
    tax: number;
}

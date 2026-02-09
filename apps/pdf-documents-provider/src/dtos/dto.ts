import { ApiProperty } from '@nestjs/swagger';
import {
  IClientInfoDto,
  ICompanyInfoDto,
  IInvoiceInfoDto,
  IItemRowDto,
} from '@repo/pdf-documents-generator';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

export class ClientInfoDto implements IClientInfoDto {
  @ApiProperty({ example: 'Maxime Aubry' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Fausse adresse' })
  @IsString()
  @IsNotEmpty()
  address: string;
}

export class CompanyInfoDto implements ICompanyInfoDto {
  @ApiProperty({ example: 'https://example.com/logo.png' })
  @IsString()
  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  logo: string;

  @ApiProperty({ example: 'Market Pont-Audemer Europe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Av. de l"Europe, 27500 Pont-Audemer' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 'contact@carrefour.fr' })
  @IsString()
  @IsNotEmpty()
  contact: string;
}

export class ItemRowDto implements IItemRowDto {
  @ApiProperty({ example: 'Produit A' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 2, minimum: 1 })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 120, minimum: 0 })
  @IsNumber()
  @Min(0)
  unitPrice: number;
}

export class InvoiceInfoDto implements IInvoiceInfoDto {
  @ApiProperty({ example: 'FACT-20260101-0001' })
  @IsString()
  @IsNotEmpty()
  number: string;

  @ApiProperty({ example: '2026-02-06T00:00:00.000Z', format: 'date-time' })
  @Type(() => Date)
  @IsDate()
  date: Date;

  @ApiProperty({ example: '2026-02-06T00:00:00.000Z', format: 'date-time' })
  @Type(() => Date)
  @IsDate()
  dueDate: Date;

  @ApiProperty({ type: () => ClientInfoDto })
  @ValidateNested()
  @Type(() => ClientInfoDto)
  client: ClientInfoDto;

  @ApiProperty({ type: () => CompanyInfoDto })
  @ValidateNested()
  @Type(() => CompanyInfoDto)
  companyInfo: CompanyInfoDto;

  @ApiProperty({
    type: () => [ItemRowDto],
    example: Array.from<unknown, ItemRowDto>(
      { length: 10 },
      (_, index: number) => ({
        description: `Produit ${index + 1}`,
        quantity: Math.ceil(Math.random() * (20 - 1) + 1),
        unitPrice: Math.random() * (200 - 1) + 1,
      }),
    ),
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ItemRowDto)
  items: ItemRowDto[];

  @ApiProperty({
    example: 0.2,
    minimum: 0,
    maximum: 1,
    description: 'Taux de TVA (ex: 0.2 = 20%)',
  })
  @IsNumber()
  @Min(0)
  @Max(1)
  tax: number;
}

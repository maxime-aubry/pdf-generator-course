import { Body, Controller, Post, Res, StreamableFile } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiProduces,
  ApiTags,
} from '@nestjs/swagger';
import {
  generateInvoiceAsync,
  IInvoiceInfoDto,
} from '@repo/pdf-documents-generator';
import { Response } from 'express';
import { InvoiceInfoDto } from './dtos/dto';
import { IEndpoint } from './interfaces/endpoint.interface';
import { IPresenter } from './interfaces/presenter.interface';
import { StreamPresenter } from './presenters/stream-presenter';

@ApiTags('download')
@Controller('download')
export class AppController implements IEndpoint<IInvoiceInfoDto> {
  @Post('invoice')
  @ApiOperation({ summary: 'Génère une facture PDF' })
  @ApiBody({ type: InvoiceInfoDto })
  @ApiProduces('application/pdf')
  @ApiOkResponse({
    description: 'PDF généré',
    content: {
      'application/pdf': {
        schema: { type: 'string', format: 'binary' },
      },
    },
  })
  public async executeAsync(
    @Body() dto: IInvoiceInfoDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<StreamableFile> {
    const stream: Buffer = await generateInvoiceAsync(dto);
    const presenter: IPresenter<Buffer, StreamableFile> = new StreamPresenter(
      response,
      'invoice',
    );
    return presenter.format(stream);
  }
}

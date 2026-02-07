import { StreamableFile } from '@nestjs/common';
import { Response } from 'express';

export interface IEndpoint<TDto extends object> {
  executeAsync(dto: TDto, response: Response): Promise<StreamableFile>;
}

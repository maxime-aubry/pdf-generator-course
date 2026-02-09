import { StreamableFile } from '@nestjs/common';
import { Response } from 'express';
import Stream, { PassThrough, Readable } from 'node:stream';
import { IPresenter } from '../interfaces/presenter.interface';

export class StreamPresenter implements IPresenter<
  NodeJS.ReadableStream,
  StreamableFile
> {
  constructor(
    private response: Response,
    private filename: string,
  ) {}

  public format(stream: NodeJS.ReadableStream): StreamableFile {
    this.response.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${this.filename}.pdf"`,
    });
    const readable: Stream.Readable = this.toNodeReadable(stream);
    return new StreamableFile(readable);
  }

  private toNodeReadable(stream: NodeJS.ReadableStream): Readable {
    if (stream instanceof Readable) return stream;
    const pass: PassThrough = new PassThrough();
    stream.pipe(pass);
    return pass;
  }
}

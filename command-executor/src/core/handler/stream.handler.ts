/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChildProcessWithoutNullStreams } from 'child_process';
import { IStreamLogger } from './srteam.interface';

export class StreamHandler {
  constructor(private logger: IStreamLogger) {}

  processOutput(stream: ChildProcessWithoutNullStreams) {
    stream.stdout.on('data', (data: any) => {
      this.logger.log(data.toString());
    });

    stream.stderr.on('data', (data: any) => {
      this.logger.error(data.toString());
    });

    stream.on('close', () => {
      this.logger.end();
    });
  }
}

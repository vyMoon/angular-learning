import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe'
})
export class PurePipePipe implements PipeTransform {
  private count = 1;
  transform(value: Array<number>): string {
    console.log('the job of the pipe is hard!!', this.count);
    this.count += 1;
    return `${value.join(', ')}.`;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { PurePipePipe } from './pure-pipe.pipe';

@Pipe({
  name: 'impurePipe',
  pure: false,
})
export class ImpurePipePipe extends PurePipePipe { }

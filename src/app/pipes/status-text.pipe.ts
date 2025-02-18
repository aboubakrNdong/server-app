import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../enum/status.enum';

@Pipe({
  name: 'statusText'
})
export class StatusTextPipe implements PipeTransform {
  transform(status: Status): string {
    return status.replace('_', ' ');
  }
}
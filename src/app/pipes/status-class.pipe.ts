import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../enum/status.enum';

@Pipe({
  name: 'statusClass'
})
export class StatusClassPipe implements PipeTransform {
  transform(status: Status): string {
    const statusClasses = {
      [Status.SERVER_UP]: 'badge-success',
      [Status.SERVER_DOWN]: 'badge-danger',
      [Status.ALL]: 'badge-secondary'
    };

    return statusClasses[status];
  }
}
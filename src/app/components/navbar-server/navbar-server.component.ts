import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataState } from 'src/app/enum/data-state.enum';
import { Status } from 'src/app/enum/status.enum';
import { AppState } from 'src/app/interface/app-state';
import { CustomResponse } from 'src/app/interface/custom-response';


@Component({
  selector: 'app-navbar-server-show',
  templateUrl: './navbar-server.component.html',
  styleUrls: ['./navbar-server.component.css']
})
export class NavbarServerComponent {

  appState$: Observable<AppState<CustomResponse>> | undefined;
  readonly DataState = DataState;
  readonly Status = Status;

  constructor(private router: Router) {
  }

  goToModal() {
    this.router.navigate(['addserver']);
  }


  printReport(): void {
    const tableElement = this.getTableElement('servers');
    if (!tableElement) {
        console.error('Table not found');
        return;
    }

    const tableHtml = this.prepareTableHtml(tableElement);
    this.downloadReport(tableHtml, 'server-report.xls');
}

private getTableElement(tableId: string): HTMLElement | null {
    return document.getElementById(tableId);
}

private prepareTableHtml(tableElement: HTMLElement): string {
    return tableElement.outerHTML.replace(/ /g, '%20');
}

private downloadReport(tableHtml: string, fileName: string): void {
    const dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    downloadLink.href = 'data:' + dataType + ', ' + tableHtml;
    downloadLink.download = fileName;
    downloadLink.click();
    document.body.removeChild(downloadLink);
}


}

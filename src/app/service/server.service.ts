import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';
import { Server } from '../interface/server';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private readonly apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getServer$ = <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUrl}/server/getservers`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  saveServer$ = (server: Server): Observable<CustomResponse> => {
    return this.http.post<CustomResponse>(`${this.apiUrl}/server/saveserver`, server)
      .pipe(
        tap(response => console.log("Server save response:", response)),
        catchError(this.handleError)
      );
  };

  pingServer$ = (ipAddress: String) => <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUrl}/server/pingserver/${ipAddress}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  deleteServer$ = (serverId: number) => <Observable<CustomResponse>>
    this.http.delete<CustomResponse>(`${this.apiUrl}/server/delete/${serverId}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );


  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(() => `An error occurred - Error code: ${error.status}`);
  }


}

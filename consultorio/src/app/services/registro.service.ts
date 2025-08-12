import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Registro } from '../models/registro';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegistroService {
  private base = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // Crea un registro en Firebase RTDB bajo /Registro
  create(reg: Registro): Observable<any> {
    return this.http.post(`${this.base}/Registro.json`, reg);
  }
}

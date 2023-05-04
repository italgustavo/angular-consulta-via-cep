import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../models/cep.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }


  public buscarEndereco(cep :string): Observable<Cep> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

}

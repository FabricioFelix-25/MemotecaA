import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
private readonly API = 'http://localhost:3000/pensamentos';

constructor(private http: HttpClient) { }

listar(pagina: number): Observable<Pensamento[]> {
  const itensPorPagina = 6;
  //GET /posts?_page=7&_limit=20

  let params = new  HttpParams().set('_page', pagina.toString()).set('_limit', itensPorPagina.toString());
  //return this.http
  //.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`);


  return this.http.get<Pensamento[]>(this.API, {params});
}


criar (pensamento: Pensamento): Observable<Pensamento> {
  return this.http.post<Pensamento>(this.API, pensamento);
}

editar(Pensamento: Pensamento): Observable<Pensamento> {
const url = `${this.API}/${Pensamento.id}`
return this.http.put<Pensamento>(url, Pensamento)
}

excluir(id: number): Observable<Pensamento> {
  const url = `${this.API}/${id}`
  return this.http.delete<Pensamento>(url)
}

buscarPorId(id: number): Observable<Pensamento> {
  const url = `${this.API}/${id}`
  return this.http.get<Pensamento>(url)
}




}

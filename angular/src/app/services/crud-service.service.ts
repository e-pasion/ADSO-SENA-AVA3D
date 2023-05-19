import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  url='http://localhost:4000/api/'

  constructor(private http: HttpClient) {}

  obtenerTodos(variable:String): Observable<any>{
    return this.http.get(this.url+variable+'/');
  }
  obtenerUno(variable:String,id:string): Observable<any>{
    return this.http.get(this.url+variable+'/'+id);
  }
  guardar(objeto:any,variable:string):Observable<any>{
    return this.http.post(this.url+variable+'/',objeto);
  }
  actualizar(objeto:any,variable:string,id:string):Observable<any>{
    return this.http.put(this.url+variable+'/'+id,objeto)
  }
  eliminar(id:string,variable:string):Observable<any>{
    return this.http.delete(this.url+variable+'/'+id)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  url='http://localhost:4000/api/'

  constructor(private http: HttpClient) {}

  obtenerTodos(variable:String, params?: any): Observable<any>{
    let parametros= new HttpParams;
    if(params){
      Object.keys(params).forEach(key=>{
        parametros=parametros.set(key,params[key])
      })
    }
    return this.http.get(this.url+variable+'/',{params: parametros});
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

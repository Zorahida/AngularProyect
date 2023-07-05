import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({             //se aplica a la clase ProductService
  providedIn: 'root'
})

export class ProductService {
  items= [];

  constructor(private http: HttpClient) { }  //define el constructor de la clase ProductService e inyecta HttpClient  
                                                 //método GET, devuelve la respuesta como objeto OBSERVABLE

getProductItem(id: string): Observable<any> {
  return this.http.get(`https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products/${id}`);
}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createProduct(product) {
    return this._http.post('/create', product);
  }

  getProducts() {
    return this._http.get('/getall');
  }

  getOne(id) {
    return this._http.get('/product/' + id);
  }

  deleteProduct(id) {
    return this._http.delete('/delete/' + id);
  }

  updateProduct(id, product) {
    return this._http.put('/update/' + id, product);
  }

}

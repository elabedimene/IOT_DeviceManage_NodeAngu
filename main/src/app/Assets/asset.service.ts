import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  public apiURL = 'http://localhost:8080/api/assets';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL, this.httpOptions)

  }

  add(data: any): Observable<any> {
    return this.httpClient.post(this.apiURL + '/add', data, this.httpOptions)

  }


  findOne(id: any): Observable<any> {
    return this.httpClient.get(this.apiURL + '/' + id, this.httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.apiURL + '/delete/' + id, this.httpOptions);
  }


  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.apiURL + '/delete', this.httpOptions)

  }

 

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  public  apiURL = 'http://localhost:8080/api/devices';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient ) { }
     
     
     
     
  getAll(): Observable<any> {
  return this.httpClient.get(this.apiURL , this.httpOptions )
  
}

add(data : any): Observable<any> {
  return this.httpClient.post(this.apiURL + '/add', data , this.httpOptions )
  
}
put(data : any , id : any ): Observable<any> {
  return this.httpClient.put(this.apiURL + '/' + id,   data ,  this.httpOptions )
  
}

get(id: any): Observable<any> {
  return this.httpClient.get(this.apiURL + '/' + id, this.httpOptions );
}

delete(id: any): Observable<any> {
  return this.httpClient.delete(this.apiURL + '/delete/ +' +  id, this.httpOptions );
}


deleteAll(): Observable<any> {
  return this.httpClient.delete(this.apiURL + '/delete', this.httpOptions )
  
}

}




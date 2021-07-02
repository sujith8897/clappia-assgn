import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import Employee from './models/employees';


@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) { 
    this.ROOT_URL = "http://localhost:3000";
  }

  get(uri: string){
   return this.http.get<Employee[]>(`${this.ROOT_URL}/${uri}`);
   
  }

  post(uri: string, payload: any){
    //console.log("webser", payload);
    return this.http.post<Employee>(`${this.ROOT_URL}/${uri}`, payload);
  
  }


  patch(uri: string, payload: any){
    return this.http.patch<Employee>(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string){
    return this.http.delete<Employee>(`${this.ROOT_URL}/${uri}`);
  }
}

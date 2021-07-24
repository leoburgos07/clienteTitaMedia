import { Injectable } from '@angular/core';
import {observable} from "rxjs";
import {HttpClient} from '@Angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  domain : string = 'http://localhost:8080';

  constructor(private http : HttpClient) { }

  public getLibros(){
    return this.http.get(`${this.domain}/api/libro`);
  }
}

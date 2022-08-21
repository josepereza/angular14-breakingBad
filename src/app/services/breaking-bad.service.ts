import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { Breaking } from '../interfaces/breaking';
@Injectable({
  providedIn: 'root'
})
export class BreakingBadService {

  constructor(public http:HttpClient) { 
    
  }
  
getAll():Observable<Breaking[]>{
return this.http.get<Breaking[]>(environment.apiUrl+'characters')
}

}

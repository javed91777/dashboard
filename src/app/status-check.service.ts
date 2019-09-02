import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class StatusCheckService {

testUrl = "https://reqres.in/api/users?page=2";

constructor(private http: HttpClient) { }

getTestData(){
  return this.http.get(this.testUrl);
}
}

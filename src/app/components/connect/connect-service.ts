import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConnectMessage} from './connect-message';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http: HttpClient) { }

  sendEmail(connectMessage: ConnectMessage): Observable<any> {
    return this.http.post('https://api.astroviking.com/connect', connectMessage);
}
}

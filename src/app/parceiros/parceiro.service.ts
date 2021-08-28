import {Injectable, SkipSelf} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParceiroService {

  constructor(@SkipSelf() private http: HttpClient) { }

  listaParceiros() {
    return this.http.get('http://localhost:9090/parceiros');
  }

  cadastraParceiro(value: any) {
    return this.http.post('http://localhost:9090/publico/parceiros', value);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { queryI } from 'src/models/query.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private urlApi = ' https://hn.algolia.com/api/v1/search_by_date'

  constructor(private http: HttpClient) { }

  getQueryData(query:string,page:string):Observable<queryI>{

    let params = `?query=${query}&page=${page}`
    let url = this.urlApi+params

    let result = this.http.get<queryI>(url)
    return result;
  }
}

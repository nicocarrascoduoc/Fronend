import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { retry } from 'rxjs/internal/operators/retry';
import { MealList } from '../entities/meal-list';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL ='http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getMeals(filtro: string): Observable<MealList> {
    return this.http.get(this.apiURL + '/search.php?f=' + filtro).pipe(retry(3));
  }
}
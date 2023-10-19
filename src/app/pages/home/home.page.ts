import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { MealList } from '../../entities/meal-list';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  meals: MealList={};

  constructor(private api: ApiService) {}

  loadMeals(){
    this.api.getMeals('a').subscribe(
      (meals: MealList)=>{
        console.log(meals);
        this.meals = meals;
      }
      ,
      (error)=>{
        console.log(error);
      }
    );
  }
}

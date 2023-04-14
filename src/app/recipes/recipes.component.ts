import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test recipe', 'https://shelfcooking.com/wp-content/uploads/2020/06/Homemade-Spaghetti-Sauce.jpg')
  ];

  constructor() {

  }

  ngOnInit() {

  }
}

import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  product: Array<object>;
  newFood: Object = {};
  food: Object = {}
  patern:string
  constructor() {}
  apear = {
    desaparecer: false
  }
  list: Array<object>=[]


  ngOnInit() {
    this.product = foods
  }

  addFood() {
    console.log("Add food has been called");
    this.product.push(this.newFood);
    this.newFood = {};
    this.apear.desaparecer = true
  }


  add (food){
    this.list.push(food);
    console.log(this.list)
  }
}

import { Component, OnInit } from '@angular/core';
import { FruitsStockService } from './fruits-stock.service';
export type FruitItem = {
  nom: string
  img: string
  stock: number
  prix: number
  reduction: number
  unite: number
  aimer: number
  rare: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public fruitStock: FruitsStockService) {
    this.fruits = []
  }
  fruits: FruitItem[] = []
  ngOnInit(): void {
    this.fruits = this.fruitStock.fruits
  }
  commandes: FruitItem[] = []
  updateCommande = () => {
    this.commandes = this.commandes.filter(fruit => fruit.unite)
  }
  title = 'ng-ecommerce';
}

import { Component, Input, OnInit } from '@angular/core';
import { FruitItem } from '../app.component';
import { prixFinal } from '../fruits-stock.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  get prixTotal(){
    return this.fruits.reduce((some,fruit)=>some+prixFinal(fruit)*fruit.unite,0)
  }
  get lenCommande(){
    return this.commandes.length
  }
  get commandes(){
    return this.fruits.filter(fruit=>fruit.unite)
  }
  @Input("fruits") fruits:FruitItem[]=[]
  prixFinal =prixFinal
}

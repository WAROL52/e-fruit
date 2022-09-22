import { Component, OnInit } from '@angular/core';
import { FruitsStockService, prixFinal } from '../fruits-stock.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public fruitStock: FruitsStockService) { }

  ngOnInit(): void {
  }
  trierAimer() {
    this.fruitStock.fruits.sort((fruita, fruitb) => fruitb.aimer - fruita.aimer)
  }
  trierRare() {
    this.fruitStock.fruits.sort((fruita, fruitb) => fruita.rare - fruitb.rare)
  }
  trierNom(croissant = true) {
    const sortedNom=this.fruitStock.fruits.map(fruit=>fruit.nom).sort()
    this.fruitStock.fruits.sort((a,b)=>{
      const indexA=sortedNom.findIndex(nom=>nom===a.nom)
      const indexB=sortedNom.findIndex(nom=>nom===b.nom)
      return croissant?indexA-indexB:indexB-indexA
    })
  }
  trierPrix(croissant = true) {
    if (croissant) {
      this.fruitStock.fruits.sort((fruita, fruitb) => prixFinal(fruitb) - prixFinal(fruita))
    } else {
      this.fruitStock.fruits.sort((fruita, fruitb) => prixFinal(fruita) - prixFinal(fruitb))
    }
  }
  trierReduction(croissant = true) {
    if (croissant) {
      this.fruitStock.fruits.sort((fruita, fruitb) => fruitb.reduction - fruita.reduction)
    } else {
      this.fruitStock.fruits.sort((fruita, fruitb) => fruita.reduction - fruitb.reduction)
    }
  }
}

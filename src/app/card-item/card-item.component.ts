import { Component, Input, OnInit } from '@angular/core';
import { FruitItem } from '../app.component';
import { prixFinal } from '../fruits-stock.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  prixFinal = 0
  ngOnInit(): void {
    this.prixFinal = prixFinal(this.fruit)
  }
  @Input("fruit")
  fruit: FruitItem = {
    img: "",
    nom: "",
    prix: 0,
    reduction: 0,
    stock: 0,
    unite: 0,
    aimer: 0,
    rare: 0
  }
  handleFruit() {
    this.fruit.unite++
    this.updateCommande()
    console.log(this.fruit);

  }
  @Input("updateCommande") updateCommande: () => void = () => { }
  repeter(char:string,count:number){
    return char.repeat(count)
  }
}

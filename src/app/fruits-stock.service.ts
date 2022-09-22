import { Injectable } from '@angular/core';
import { FruitItem } from './app.component';
function src(nom: string) {
  return "../../assets/img/" + nom + ".jpg"
}
function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}
export function prixFinal(fruit:FruitItem){
  return Math.floor(fruit.prix - (fruit.reduction * fruit.prix / 100))
}
@Injectable({
  providedIn: 'root'
})
export class FruitsStockService {

  constructor() { }
  fruits = [{
    nom: "Ananas",
    img: src("ananas"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "banane",
    img: src("banane"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "cerises",
    img: src("cerises"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "citron",
    img: src("citron"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "fraise",
    img: src("fraise"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "framboise",
    img: src("framboise"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "mandarine",
    img: src("mandarine"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "mangue",
    img: src("mangue"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "orange",
    img: src("orange"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "papaye",
    img: src("papaye"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "peche",
    img: src("peche"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "pomme",
    img: src("pomme"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  {
    nom: "raisin",
    img: src("raisin"),
    stock: random(0, 15),
    prix: random(500, 5000),
    reduction: random(0, 25),
    unite:0,
    aimer:random(0,6),
    rare:random(0,6)
  },
  ]
  get prixTotal(){
    return this.fruits.reduce((sommes,fruit)=>sommes+prixFinal(fruit)*fruit.unite,0)
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { DestinoPage } from '../destino/destino';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public livros: Livro[];
  constructor(public navCtrl: NavController) {

    var l1 = { name: '1984', author: 'George Orwell' };
    var l2 = { name: 'Harry Potter e a Pedra Filosofal', author: 'J. K. Rowling' };
    var l3 = { name: 'O Senhor dos Anéis', author: 'J. R. R. Tolkien' };
    var l4 = { name: 'Fundação', author: 'Isaac Asimov' };
    var l5 = { name: 'Neuromancer', author: 'William Gibson' };
    var l6 = { name: 'O Homem do Castelo do Alto', author: 'Philip K. Dick' };
    var l7 = { name: 'Snow Crash', author: 'Neal Stephenson' };
    var l8 = { name: '2001: Uma Odisséia no Espaço', author: 'Arthur Clarke' };
    var l9 = { name: 'Coraline', author: 'Neal Gaiman' };
    this.livros = [l1, l2, l3, l4, l5, l6, l7, l8, l9];

  }

  public irParaDestino(livro: Livro): void {
    this.navCtrl.push(DestinoPage, {livro});
  }

}

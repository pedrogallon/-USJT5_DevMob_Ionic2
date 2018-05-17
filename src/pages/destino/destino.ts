import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the DestinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-destino',
  templateUrl: 'destino.html',
})
export class DestinoPage {
  livro: Livro;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.livro = navParams.get("livro")
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinoPage');
  }

}

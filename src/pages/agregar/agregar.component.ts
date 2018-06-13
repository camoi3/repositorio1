import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarComponent {

  nombreLista: string = "";
  nombreItem: string = "";

  items:ListaItem[] = [];

  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController,
              public _listaDeseos: ListaDeseosService) {  }

  agregar(){

    if( this.nombreItem.length == 0 ){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push( item );
    this.nombreItem = "";

  }

  borrarItem( idx: number){
    this.items.splice(idx,1)
  }

  guardarLista(){

    if( this.nombreLista.length == 0 ){
      const alert = this.alertCtrl.create({
        title: 'Nombre de la Lista!',
        subTitle: 'El Nombre de la Lista es necesario!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    let lista = new Lista( this.nombreLista );
    lista.item = this.items;

    // this._listaDeseos.listas.push( lista );
    this._listaDeseos.agregarListas( lista );

    this.navCtrl.pop(); // navegar atras

  }

}
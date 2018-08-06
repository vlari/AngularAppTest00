import { Component } from '@angular/core';
import { Paquete } from './shared/models/Paquete.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  price: number = 0;
  newPack: Paquete = {
    valor: 0,
    peso: 0,
    origen: 'N/A',
    destino: 'N/A'
  };
  // arr = [
  //         ['USA',230],
  //         ['CANADA',230],
  //         ['PUERTO RICO',240],
  //         ['UK',290],
  //         ['ITALIS',290],
  //         ['MEXICO',230]
  //       ];

  // mapa = new Map(this.arr);

  setInfo(pack: Paquete){
    this.newPack = pack;
    this.price = pack.valor + (pack.valor * 0.18);
  }

}
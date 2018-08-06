import { Component, OnInit,ElementRef ,ViewChild, Output,EventEmitter} from '@angular/core';
import { Paquete } from '../shared/models/Paquete.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  @Output() sendPack = new EventEmitter<Paquete>();
  @ViewChild('c') country: ElementRef;
  countries: string[] = ['USA','PUERTO RICO','CANADA','UK','ITALIA','MEXICO'];
  cities: string[] = ['SANTO DOMINGO DN','SANTIAGO','LA ROMANA'];
  pack: Paquete;

  constructor() { 
    this.pack = {
      valor: 0,
      peso: 0,
      origen: this.countries[0],
      destino: this.cities[0]
    };
  }

  ngOnInit() {
  }

  onSubmit(){
    this.sendPack.emit(this.pack);
  }

  setCountry(el: string){
    this.pack.origen = el;
  }

  setCity(el: string){
    this.pack.destino = el;
  }

}

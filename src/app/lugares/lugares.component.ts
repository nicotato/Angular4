import { Component } from '@angular/core';
import { LugaresService } from "../services/lugares.service";
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        // backgroundColor:'green',
        // transform:'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity: 1,
        // backgroundColor:'yellow',
        // transform:'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final',animate(2000)),
      transition('final => inicial',animate(1000))
    ])
  ]
})
export class LugaresComponent {
  title = 'TatoSquare!';
  state = 'inicial';
  /*nico= 'Nicolas';
  listo = false;
  nombre='';*/

  lat: number = -34.898418;
  lng: number = -56.159007;
  lugares = null;
  
  animar(){
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }

  animacionInicia(e){
    console.log('Iniciado!');
    console.log(e);

  }

  animacionTermina(e){
    console.log('Terminado!');
    console.log(e);

  }
  constructor(private lugaresService: LugaresService){
    
    lugaresService.getLugares()
    .subscribe((lugares)=>{      
      this.lugares = lugares;
      var me = this;
      me.lugares = Object.keys(me.lugares).map(function(key){return me.lugares[key]});
      this.state = 'final';
    }, error => {
      console.log(error);
      alert('Tenemos dificultades, disculpe las molestias Error: '+ error.statusText)
    });
    
    /*setTimeout(()=> {
      this.listo=true;
    }, 2000);*/

  }
  /*hacerAlgo(){
    alert('Haciendo algo');
  }*/
}

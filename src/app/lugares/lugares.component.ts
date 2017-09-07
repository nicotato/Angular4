import { Component } from '@angular/core';
import { LugaresService } from "../services/lugares.service";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  title = 'TatoSquare!';
  /*nico= 'Nicolas';
  listo = false;
  nombre='';*/

  lat: number = -34.898418;
  lng: number = -56.159007;
  lugares = null;
  constructor(private lugaresService: LugaresService){
    
    lugaresService.getLugares()
    .subscribe((lugares)=>{      
      this.lugares = lugares;
      var me = this;
      me.lugares = Object.keys(me.lugares).map(function(key){return me.lugares[key]});
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

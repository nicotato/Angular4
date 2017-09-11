import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class LugaresService{
    API_ENDPOINT = 'https://tatosquare.firebaseio.com';
    lugares:any =[
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Floreria la Gardeni', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion'},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion'},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion'},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: true, nombre:'Floreria la Gardeni', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Donas la pasadita', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion'},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre:'Sushi shiroll', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion'},
    
      ];
    constructor(private afDB: AngularFireDatabase, private http: Http){
        
    }
    public getLugares(){
        return this.afDB.list('lugares/');//this.lugares;
        //return this.http.get(this.API_ENDPOINT + '/.json')
        // .map((resultado)=>{
        //     const data = resultado.json().lugares;
        //     return data;
        // });
    }
    public buscarLugar(id){
        return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
    }
    public guardarLugar(lugar){
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
        // const headers= new Headers({"Content-Type":"application/json"});
        // return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, {headers: headers});
    }
    public editarLugar(lugar){
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }
    public obtenerGeodata(direccion){
        //http://maps.google.com/maps/api/geocode/xml?address=78-43+diagonal+70f,+Bogota,Colombia

        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+ direccion)
    }
    public getLugar(id){
       return this.afDB.object('lugares/' + id);
    }
}
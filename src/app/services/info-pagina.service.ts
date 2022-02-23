import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  
  equipo: any[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
     // leer el archivo JSON

     this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp: InfoPagina) => {
       this.cargada = true;
       this.info = resp;

     } );
  }


  private cargarEquipo() {
     // leer el archivo JSON

     this.http.get('https://angular-html-78790-default-rtdb.firebaseio.com/.json')
     .subscribe( (resp: any) => {

       
       this.equipo = resp;
       console.log( resp );

     } );

    

  }

}

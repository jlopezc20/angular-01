import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  heroes:string[] = ['Spider Man', 'Iron Man','Thor', 'Vision'];
  
  heroeBorrado:string='';

  borrarheroe(){
    console.log('Borrando....');
    this.heroeBorrado = this.heroes.shift() || '';
    //this.heroesBorrados.push(heroeBorrado);
  }


}
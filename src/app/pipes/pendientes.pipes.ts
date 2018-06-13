import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/listas';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  transform(listas: Lista[], estado: boolean = false): Lista[] {

    // return listas.filter((lista) => lista.terminada === estado); // Forma corta, solo esta linea

    let nuevaLista: Lista[] = [];

    for( let lista of listas ){
        if( lista.terminada == estado){
            nuevaLista.push();
        }
    }
    return nuevaLista;
  }
}

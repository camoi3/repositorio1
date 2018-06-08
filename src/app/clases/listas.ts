import { ListaItem } from './listas-item';

export class Lista {
    nombre: string;
    terminada: boolean;
    item: ListaItem[];

    constructor( nombre: string){
        this.nombre = nombre;
        this.terminada = false;
    }

}
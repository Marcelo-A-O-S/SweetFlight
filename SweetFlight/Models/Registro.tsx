import Aviao from "./Aviao";

export default class Registro{
    registros:Aviao[]= [];
    AdicionarRegistro(aviao:Aviao):void{
        this.registros[this.registros.length] = aviao
    }
}
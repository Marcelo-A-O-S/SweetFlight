import Passageiro from "./Passageiro";

export default class Aviao{
    numeroId: number;
    nomeComercial: string;
    quantidadeDeAssentos:number
    passageiros: Passageiro[]=[];
    constructor(n:number, nc:string, q:number){
        this.numeroId = n;
        this.nomeComercial = nc;
        this.quantidadeDeAssentos = q;
    }
    Aviao(){
    }
    AdicionarPassageiro(passageiro:Passageiro){
        this.passageiros.push(passageiro)
    }
}
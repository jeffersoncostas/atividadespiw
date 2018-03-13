abstract class Conta {

    protected saldo: number;
    protected numero_conta: number;

    abstract depositar(x:number): void;
    abstract sacar(y:number): void;
    abstract mostrarSaldo(z:number): void

}

abstract class Impostos{
}

interface Rendimento {
    saque_imposto: number;
    rendimento: number;
    valorizar(x:number): void;

    relatorio(): void;
}

class Conta_Corrente extends Conta{

    constructor(numero_conta: number){
        super();

        this.saldo = 0
        this.numero_conta= numero_conta


    }
    depositar(quantia){
    
    this.saldo+=quantia

    }

    sacar(quantia){
        this.saldo-=quantia+2
    }

    mostrarSaldo(){

        return this.saldo
    }


}


class Conta_Poupanca extends Conta implements Rendimento{

    saque_imposto = 0.02
    rendimento = 0;

    constructor(numero_conta:number){
        super();

        this.saldo = 0
        this.numero_conta = numero_conta
    
    }

    depositar(quantia){
        this.saldo+=quantia
        return
    }
    sacar(quantia){
        this.saldo-=quantia+(this.saldo*this.saque_imposto)
        return
    }
    mostrarSaldo(){
        return this.saldo
    }
    valorizar(){
        this.rendimento+= this.saldo - (this.saldo*this.saque_imposto)
        this.saldo+= this.saldo*this.saque_imposto
        return
    }

    relatorio(){

        return console.log("Conta Investimento"+"\n"+"Numero da conta: "+ this.numero_conta +"  "+
                            "Saldo: "+ this.saldo+ "  "+
                            "Rendimento atual: "+ this.rendimento)
    }
}

class Conta_Investimento extends Conta implements Rendimento{
    saque_imposto:number = 0.05
    rendimento = 0;
    constructor(numero_conta:number){
        super();

        this.saldo = 0
        this.numero_conta = numero_conta
    
    }

    depositar(quantia){
        this.saldo+=quantia
        return console.log(this.saldo)
    }
    sacar(quantia){
        this.saldo-=quantia+(this.saldo*this.saque_imposto)+10
    }
    mostrarSaldo(){
        return this.saldo
    }
    valorizar(){
        this.rendimento+= (this.saldo*0.65)
        this.saldo+= this.saldo*0.65
        return
    } 

    relatorio(){

        return console.log("Conta Poupança"+"\n"+"Numero da conta: "+ this.numero_conta +"  "+
                            "Saldo: "+ this.saldo+ "  "+
                            "Rendimento atual: "+ this.rendimento)
    }
}





console.log("ola")

let conta1_corrente = new Conta_Corrente(5012)
conta1_corrente.depositar(120)
conta1_corrente.sacar(120)
console.log(conta1_corrente)


let conta1_poupanca = new Conta_Poupanca(1202)
conta1_poupanca.depositar(500)
conta1_poupanca.sacar(400)
conta1_poupanca.valorizar()
console.log(conta1_poupanca.relatorio())


let conta1_investimento = new Conta_Investimento(4292)
conta1_investimento.depositar(1000)

conta1_investimento.valorizar()
conta1_investimento.valorizar()

console.log(conta1_investimento.relatorio())
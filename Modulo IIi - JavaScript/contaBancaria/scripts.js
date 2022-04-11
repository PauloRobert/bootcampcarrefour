class ContaBancaria {
    //construindo o construtor da classe

    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        //incluindo o _ na frente para mostrar que ele terá um getter e setter
        this._saldo = saldo;
    }

    //add getter e setter
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo){
            return "Operação Negada"
        }
        this._saldo = this._saldo - valor;
        
        //Retorna o saldo
        return this._saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }

}
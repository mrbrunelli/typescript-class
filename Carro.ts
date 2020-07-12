export enum Cor {
    Azul = 'Azul',
    Vermelho = 'Vermelho'
}

export class Carro {
    private marca!: string
    private modelo!: string
    private cor!: Cor

    constructor(marca: string) {
        this.setMarca(marca)
    }

    imprimirDados() {
        return console.log({
            marca: this.getMarca(),
            modelo: this.getModelo(),
            cor: this.getCor()
        })
    }

    getMarca(): string {
        return this.marca
    }

    setMarca(marca: string) {
        this.marca = marca
    }

    getModelo(): string {
        return this.modelo
    }

    setModelo(modelo: string) {
        this.modelo = modelo
    }

    getCor(): Cor {
        return this.cor
    }

    setCor(cor: Cor) {
        this.cor = cor
    }
}
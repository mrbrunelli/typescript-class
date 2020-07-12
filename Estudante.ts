export enum Sexo {
    M = 'Masculino',
    F = 'Feminino'
}

interface Pessoa {
    nome: string
    idade: number
    sexo: Sexo
}

export class Estudante implements Pessoa {
    constructor(public nome: string, public idade: number, public sexo: Sexo) {
        this.setNome(nome)
        this.setIdade(idade)
        this.setSexo(sexo)
    }

    public imprimirDados() {
        return console.log({
            nome: this.getNome(),
            idade: this.getIdade(),
            sexo: this.getSexo()
        })
    }

    getNome() {
        return this.nome
    }

    setNome(nome: string) {
        this.nome = nome
    }

    getIdade() {
        return this.idade
    }

    setIdade(idade: number) {
        this.idade = idade
    }

    getSexo() {
        return this.sexo
    }

    setSexo(sexo: Sexo) {
        this.sexo = sexo
    }
}
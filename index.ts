//ts-node-dev --respawn --transpile-only index.ts
import { Estudante, Sexo } from './Estudante'
import { Carro, Cor } from './Carro'

const estudante = new Estudante('Matheus', 25, Sexo.M)
estudante.imprimirDados()

const carro = new Carro('Ford')
carro.setModelo('Escort L 1.6')
carro.setCor(Cor.Azul)
carro.imprimirDados()

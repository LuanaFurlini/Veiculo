export abstract class Veiculo{
    marca: string;
    modelo: string;

    constructor(_marca: string, _modelo: string){
        this.marca = _marca;
        this.modelo = _modelo;
    }

    apresentar(){
        console.log(`marca ${this.marca} modelo ${this.modelo}`)
    }
}


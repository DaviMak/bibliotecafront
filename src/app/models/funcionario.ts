export class Funcionario {

    idFuncionario!: number;
    nmFuncionario!: string;
    flFuncionario!: boolean;
    dsCpf!: string;
    dsEmail!: string;
    dsSenha!: string;

    constructor(idFuncionario: number,
        nmFuncionario: string,
        flFuncionario: boolean,
        dsCpf: string,
        dsEmail: string,
        dsSenha: string){
        
            this.idFuncionario = idFuncionario;
    }
}

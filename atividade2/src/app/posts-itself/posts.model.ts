export class Posts {

    id: number
    titulo: string
    nomePessoa: string;
    texto: string;
    tristezas: number;
    tristezaDada: boolean;
    editPost: boolean;

    constructor(id,titulo,nomePessoa,texto,tristezas,tristezaDada){
        this.id = id;
        this.titulo = titulo;
        this.nomePessoa = nomePessoa;
        this.texto = texto;
        this.tristezas = tristezas;
        this.tristezaDada = false;
        this.editPost = false;
    }
    
}
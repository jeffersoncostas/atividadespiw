var artigo = {
    'titulo': 'Artigo de Exemplo',
    'likes': 32,
    'tweets': 22,
    'comentarios': 45,
    'buzz': function () {
        return this.likes + this.tweets + this.comentarios;
    }
};


var template = $("#template").html()

var output = Mustache.render(template, artigo);

$(".artigo").append(output)
$(function() {
  let template = $('#mustache-list').html();
  Mustache.parse(template); 

  let rendered = Mustache.render(template, {linguages:[
      {"linguage": "Python"},
      {"linguage": "Ruby"},
      {"linguage": "C#"}
  ]});
  $('#list').html(rendered);

  let rendered1 = Mustache.render(template, {linguages1:[
      "Python", "Ruby", "C#"
  ]});
  $('#list1').html(rendered1);
})

$(function(){
  let template = $('#mustache-function').html();
  Mustache.parse(template);

  let rendered = Mustache.render(template, {templates: [
      {"nome": "Variáveis", "exemplo": "{{linguage}}"},
      {"nome": "Variáveis Escapam", "exemplo": "<b>{{linguage}}</b>"},
      {"nome": "Variáveis Escapam", "exemplo": "{{{linguage}}}"}
  ]});
  $('#templates').html(rendered);

  let rendered1 = Mustache.render(template, {templates1: [
      {"nome": "Variáveis", "exemplo": "{{linguage}}"},
      {"nome": "Variáveis Escapam", "exemplo": "<b>{{linguage}}</b>"},
      {"nome": "Variáveis Escapam", "exemplo": "{{{linguage}}}"}
  ], "exemplo": function(){
      return this.nome + " - " + this.exemplo;
  }
  });
  $('#templates1').html(rendered);
})
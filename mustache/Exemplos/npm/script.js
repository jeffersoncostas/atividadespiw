let divGrupos = document.createElement('div');

let divImagemGrupo = document.createElement('div');

let imagemGrupo = document.createElement('img');

let divNomeGrupo = document.createElement('div');

let spanNomeGrupo = document.createElement('span');

let nameGrupo = document.createTextNode(groupName);


imagemGrupo.src = linkFoto
divImagemGrupo.appendChild(imagemGrupo);

divNomeGrupo.appendChild(spanNomeGrupo);
spanNomeGrupo.appendChild(nameGrupo);



divGrupos.appendChild(divImagemGrupo);
divGrupos.appendChild(divNomeGrupo);

listaAmigos.appendChild(divGrupos);

spanNomeGrupo.className = 'span-nome';
divImagemGrupo.className = 'imagem-amigo';
divNomeGrupo.className = 'nome-amigo';
divGrupos.className = 'amigos amigos-surgir';
divGrupos.id = groupId;
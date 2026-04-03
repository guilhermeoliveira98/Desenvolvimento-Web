function adicionarItem() {
  var input = document.getElementById("id");
  var lista = document.getElementById("lista");

  if (input.value == "") return;

  var li = document.createElement("li");

  var texto = document.createTextNode(input.value);

  var botao = document.createElement("button");
  botao.className = "remover";
  botao.onclick = function() {
    removerItem(botao);
  };

  var img = document.createElement("img");
  img.src = "delete.png";

  botao.appendChild(img);

  li.appendChild(texto);
  li.appendChild(botao);

  lista.appendChild(li);

  input.value = "";
}

function removerItem(botao) {
  var item = botao.parentNode;
  item.remove();

  document.getElementById("alerta").style.display = "flex";
}

function fecharAlerta() {
  document.getElementById("alerta").style.display = "none";
}

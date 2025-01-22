let pixels = document.querySelectorAll(".pixel");
let texto = document.querySelector("#texto");
let criar = document.querySelector("#criar");
let nomeIcon = document.querySelector("#nameicon");
let span = document.querySelector("#span");

pixels = Array.from(pixels);

nomeIcon.focus = true

function chegar() {
  let codigo = Array();

  for (let i = 0; i < pixels.length; i++) {
    if (pixels[i].checked) {
      codigo[i] = "1";
    } else {
      codigo[i] = "0";
    }
  }

  return codigo;
}

function gerarCodigo(nomeIcon, codigo) {
  texto.value = "";
  if (nomeIcon.value != "") {
    texto.value = `byte ${nomeIcon.value}[8] = {`;
    for (let i = 0; i < codigo.length; i++) {
      if (i % 5 == 0) {
        texto.value += "\n";
        texto.value += "B";
      }
      texto.value += codigo[i];
      if (i % 5 == 4) {
        texto.value += ",";
      }
    }
    texto.value += "\n};";
  } else {
    texto.value = "Digite o nome para o Icone!";
  }
  return;
}

criar.addEventListener("click", () => {
  let codigo = chegar();
  gerarCodigo(nomeIcon, codigo);
});

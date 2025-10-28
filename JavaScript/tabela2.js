document.addEventListener("click", function (e) {
  const botaoMenu = e.target.closest(".opcoes-btn");
  const menuAberto = document.querySelector(".menu-opcoes.show");

  if (!botaoMenu && menuAberto && !e.target.closest(".menu-opcoes")) {
    menuAberto.classList.remove("show");
  }

  if (botaoMenu) {
    const menu = botaoMenu.nextElementSibling;
    if (menuAberto && menuAberto !== menu) menuAberto.classList.remove("show");
    menu.classList.toggle("show");
  }

  if (e.target.classList.contains("btn-editar")) {
    const linha = e.target.closest("tr");
    const id = parseInt(linha.dataset.id);
    abrirEdicao(id);
  }

  if (e.target.classList.contains("btn-excluir")) {
    const linha = e.target.closest("tr");
    const nome = linha.children[2].textContent;
    if (confirm(`Deseja realmente excluir ${nome}?`)) {
      linha.remove();
      alert("Funcionário excluído!");
    }
  }
});


const funcionarios = [
  { id: 1, nome: "Sophia Castro", email: "sophiaabiaki24@gmail.com", cargo: "Operador Geral", cpf: "22***4*1**" },
  { id: 2, nome: "Gabriel Hora", email: "gabrieldahora@gmail.com", cargo: "Operador Administrativo", cpf: "31***5*3**" },
  { id: 3, nome: "Vinícius Castro", email: "viniciuscastro@gmail.com", cargo: "Operário", cpf: "98***3*9**" },
];


function abrirEdicao(id) {
  const modal = document.getElementById("editarModal");
  const func = funcionarios.find(f => f.id === id);
  if (!func) return;

  document.getElementById("editId").value = func.id;
  document.getElementById("editNome").value = func.nome;
  document.getElementById("editEmail").value = func.email;
  document.getElementById("editCargo").value = func.cargo;  
  document.getElementById("editCpf").value = func.cpf;

  modal.style.display = "flex";
}

// =========================
// SALVAR E CANCELAR EDIÇÃO
// =========================
document.getElementById("salvarEdicao").addEventListener("click", function () {
  const id = parseInt(document.getElementById("editId").value);
  const func = funcionarios.find(f => f.id === id);
  const modal = document.getElementById("editarModal");

  if (func) {
    func.nome = document.getElementById("editNome").value;
    func.email = document.getElementById("editEmail").value;
    func.cargo = document.getElementById("editCargo").value;
    func.cpf = document.getElementById("editCpf").value;
    alert("Funcionário atualizado com sucesso!");
  }

  modal.style.display = "none";
});

document.getElementById("cancelarEdicao").addEventListener("click", function () {
  document.getElementById("editarModal").style.display = "none";
});

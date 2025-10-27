const botaoAbrir = document.querySelector('#botao-adicionar');
const modalFunc = document.getElementById('modal-func');
 
function abrirModal() {
  modalFunc.style.display = 'flex';
  localStorage.setItem('modalAberto', 'true');
  preencherCampos();
}
 
function fecharModal() {
  modalFunc.style.display = 'none';
  localStorage.removeItem('modalAberto');
}
 
if (botaoAbrir) {
  botaoAbrir.addEventListener('click', abrirModal);
}
 
window.addEventListener('click', (e) => {
  if (e.target === modalFunc) {
    fecharModal();
  }
});
 
function preencherCampos() {
  const inputs = modalFunc.querySelectorAll('input');
  const dados = {
    nome: 'Fulano da Silva',
    email: 'fulano@empresa.com',
    cargo: 'Administrador',
    empresa: 'Sinara Ltda'
  };
 
  if (inputs.length >= 4) {
    inputs[0].value = dados.nome;
    inputs[1].value = dados.email;
    inputs[2].value = dados.cargo;
    inputs[3].value = dados.empresa;
  }
 
  const botaoAdicionar = modalFunc.querySelector('#btnAdicionarFunc');
  if (botaoAdicionar) {
    botaoAdicionar.addEventListener('click', () => {
 
      alert('Funcionário adicionado com sucesso!');
 
      fecharModal();
    });
  }
}
 
window.addEventListener('DOMContentLoaded', () => {
  const modalAberto = localStorage.getItem('modalAberto');
  if (modalAberto === 'true') {
    abrirModal();
  }
});


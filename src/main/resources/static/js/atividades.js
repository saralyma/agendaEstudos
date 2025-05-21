// js/atividades.js

const API_URL = 'http://localhost:8080/atividades';

// Consulta todas as atividades e exibe no console (você pode substituir depois por exibição na tela)
function consultarAtividades() {
  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar atividades');
      }
      return response.json();
    })
    .then(data => {
      console.log('Atividades encontradas:', data);
      alert(`Encontramos ${data.length} atividades! (veja no console)`);
    })
    .catch(error => {
      console.error('Erro ao consultar atividades:', error);
      alert('Erro ao consultar atividades. Veja o console.');
    });
}

// Exemplo de função para filtrar atividades realizadas
document.getElementById('btnFiltrar').addEventListener('click', () => {
  fetch(`${API_URL}/realizadas`)
    .then(response => response.json())
    .then(data => {
      console.log('Atividades realizadas:', data);
      alert(`Atividades realizadas: ${data.length} (veja no console)`);
    })
    .catch(error => {
      console.error('Erro ao filtrar:', error);
      alert('Erro ao filtrar atividades.');
    });
});

// Ativação do mês
// js/atividades.js

document.addEventListener('DOMContentLoaded', () => {
  const btnAtivarMes = document.getElementById('btnAtivarMes');
  const gridMeses = document.getElementById('gridMeses');
  const mesAtivoContainer = document.getElementById('mesAtivoContainer');

  if (!btnAtivarMes) {
    console.error('Botão de ativar mês não encontrado!');
    return;
  }

  const anoAtual = new Date().getFullYear();
  const mesSalvo = localStorage.getItem('mesAtivo');
  if (mesSalvo) {
    mesAtivoContainer.textContent = `Mês ativado: ${mesSalvo}`;
    btnAtivarMes.textContent = '📅 Alterar Mês de Planejamento';
  }

  btnAtivarMes.addEventListener('click', () => {
    console.log('Clique detectado no botão!');
    gridMeses.style.display = 'grid';
  });

  document.querySelectorAll('.mes').forEach(mesDiv => {
    mesDiv.addEventListener('click', () => {
      const mes = mesDiv.getAttribute('data-mes');
      const mesAtivado = `${mes}/${anoAtual}`;
      localStorage.setItem('mesAtivo', mesAtivado);
      mesAtivoContainer.textContent = `Mês ativado: ${mesAtivado}`;
      gridMeses.style.display = 'none';
      btnAtivarMes.textContent = '📅 Alterar Mês de Planejamento';
    });
  });
});

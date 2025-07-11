// js/consultar.js

document.addEventListener('DOMContentLoaded', () => {
  const tabela = document.getElementById('tabelaConsulta');

  fetch('http://localhost:8080/atividades')
    .then(res => res.json())
    .then(atividades => {
      atividades.forEach(atividade => {
        const tr = document.createElement('tr');

        const tdNome = document.createElement('td');
        tdNome.textContent = atividade.atividadeNome;

        const tdData = document.createElement('td');
        tdData.textContent = `${atividade.dataInicio || '-'} até ${atividade.dataFim || '-'}`;

        const tdHora = document.createElement('td');
        tdHora.textContent = `${atividade.horaInicio || '-'} até ${atividade.horaFim || '-'}`;

        const tdStatus = document.createElement('td');
        tdStatus.textContent = atividade.statusRealizadoYesNo ? '✅ Concluída' : '❌ Pendente';

        tr.appendChild(tdNome);
        tr.appendChild(tdData);
        tr.appendChild(tdHora);
        tr.appendChild(tdStatus);

        tabela.appendChild(tr);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar atividades:', error);
      alert('Erro ao carregar atividades.');
    });
});

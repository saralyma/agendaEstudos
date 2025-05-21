// js/delete.js

document.addEventListener('DOMContentLoaded', () => {
  const tabela = document.getElementById('tabelaDelete');

  fetch('http://localhost:8080/atividades')
    .then(res => res.json())
    .then(atividades => {
      atividades.forEach(atividade => {
        const tr = document.createElement('tr');

        const tdNome = document.createElement('td');
        tdNome.textContent = atividade.atividadeNome;

        const tdStatus = document.createElement('td');
        tdStatus.textContent = atividade.statusRealizadoYesNo ? '✅ Concluída' : '❌ Pendente';

        const tdAcao = document.createElement('td');
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Deletar';
        btnExcluir.className = 'delete-btn';
        btnExcluir.addEventListener('click', () => {
          const confirmacao = confirm(`Deseja realmente deletar "${atividade.atividadeNome}"?`);
          if (confirmacao) {
            fetch(`http://localhost:8080/atividades/${atividade.id}`, {
              method: 'DELETE'
            })
              .then(() => {
                alert('Atividade deletada com sucesso!');
                tr.remove();
              })
              .catch(err => {
                console.error('Erro ao deletar atividade:', err);
                alert('Erro ao deletar atividade.');
              });
          }
        });

        tdAcao.appendChild(btnExcluir);

        tr.appendChild(tdNome);
        tr.appendChild(tdStatus);
        tr.appendChild(tdAcao);

        tabela.appendChild(tr);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar atividades:', error);
      alert('Erro ao carregar atividades.');
    });
});

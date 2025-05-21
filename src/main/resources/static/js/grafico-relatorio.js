// js/grafico-relatorio.js

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8080/atividades')
    .then(res => res.json())
    .then(atividades => {
      const concluídas = atividades.filter(a => a.statusRealizadoYesNo);
      const diasDoMes = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
      const contagemPorDia = {};

      diasDoMes.forEach(dia => contagemPorDia[dia] = 0);

      concluídas.forEach(atividade => {
        const data = atividade.dataInicio;
        if (
          data &&
          data.startsWith(
            new Date().getFullYear() + '-' +
            String(new Date().getMonth() + 1).padStart(2, '0')
          )
        ) {
          const dia = data.slice(8, 10);
          if (contagemPorDia[dia] !== undefined) {
            contagemPorDia[dia]++;
          }
        }
      });

      const labels = Object.keys(contagemPorDia);
      const dados = Object.values(contagemPorDia);

      const maiorValor = Math.max(...dados);
      const corBarra = dados.map(v => v === maiorValor ? '#28a745' : '#007bff');

      const ctx = document.getElementById('graficoConclusoes').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Atividades concluídas por dia',
            data: dados,
            backgroundColor: corBarra
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Quantidade'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Dias do Mês'
              }
            }
          }
        }
      });
    })
    .catch(err => {
      console.error('Erro ao carregar gráfico:', err);
      alert('Erro ao carregar dados do relatório.');
    });
});

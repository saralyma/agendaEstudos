// js/conclusao.js

document.addEventListener('DOMContentLoaded', () => {
    const tabela = document.getElementById('tabelaConclusao');

    fetch('http://localhost:8080/atividades')
        .then(res => res.json())
        .then(atividades => {
            // Filtra apenas as atividades que não foram concluídas (statusRealizadoYesNo é false)
            const atividadesNaoConcluidas = atividades.filter(atividade => !atividade.statusRealizadoYesNo);

            atividadesNaoConcluidas.forEach(atividade => {
                const tr = document.createElement('tr');

                const tdSelecionar = document.createElement('td');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = atividade.statusRealizadoYesNo; // Inicialmente deve ser false para as não concluídas
                tdSelecionar.appendChild(checkbox);

                const tdNome = document.createElement('td');
                tdNome.textContent = atividade.atividadeNome;

                const tdDescricao = document.createElement('td');
                tdDescricao.textContent = atividade.descricaoAtividade || '-';

                const tdDataConclusao = document.createElement('td');
                tdDataConclusao.textContent = `${atividade.dataInicio || '-'} até ${atividade.dataFim || '-'}`;

                const tdHoraInicio = document.createElement('td');
                tdHoraInicio.textContent = atividade.horaInicio || '-';

                const tdHoraFinal = document.createElement('td');
                tdHoraFinal.textContent = atividade.horaFim || '-';

                checkbox.addEventListener('change', () => {
                    atividade.statusRealizadoYesNo = checkbox.checked;
                    fetch(`http://localhost:8080/atividades/${atividade.id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(atividade)
                    })
                        .then(() => {
                            if (checkbox.checked) {
                                tr.style.backgroundColor = '#d4edda';
                                alert('✅ Atividade marcada como concluída!');
                            } else {
                                tr.style.backgroundColor = '';
                                alert('❎ Conclusão removida da atividade.');
                            }
                        })
                        .catch(err => {
                            console.error('Erro ao atualizar status:', err);
                            alert('Erro ao atualizar atividade.');
                        });
                });

                tr.appendChild(tdSelecionar);
                tr.appendChild(tdNome);
                tr.appendChild(tdDescricao);
                tr.appendChild(tdDataConclusao);
                tr.appendChild(tdHoraInicio);
                tr.appendChild(tdHoraFinal);

                tabela.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar atividades:', error);
            alert('Erro ao carregar atividades.');
        });
});
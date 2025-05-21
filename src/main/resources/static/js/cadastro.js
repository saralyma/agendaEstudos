// js/cadastro.js

document.addEventListener('DOMContentLoaded', () => {
    // Carregar e filtrar atividades existentes para o dropdown
    fetch('http://localhost:8080/atividades') // Endpoint para buscar atividades existentes
        .then(response => {
            if (!response.ok) {
                console.error('Erro ao buscar atividades existentes:', response.status);
                return [];
            }
            return response.json();
        })
        .then(atividades => {
            const selectAtividadeExistente = document.getElementById('atividadeExistente');
            const nomesAtividadesUnicos = new Set();

            // Adiciona os nomes das atividades ao Set (apenas valores únicos serão mantidos)
            atividades.forEach(atividade => {
                nomesAtividadesUnicos.add(atividade.atividadeNome);
            });

            // Adiciona as opções únicas ao dropdown
            nomesAtividadesUnicos.forEach(nomeAtividade => {
                const option = document.createElement('option');
                option.value = nomeAtividade; // Usamos o nome como valor aqui
                option.textContent = nomeAtividade;
                selectAtividadeExistente.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar atividades existentes:', error);
        });

    const form = document.getElementById('formAtividade');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const dados = Object.fromEntries(formData.entries());
        dados.statusRealizadoYesNo = false;

        // Adiciona os dias da semana selecionados ao objeto de dados
        const diasSelecionados = formData.getAll('diasSemana');
        dados.diasSemana = diasSelecionados;

        fetch('http://localhost:8080/atividades', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro ao salvar atividade');
            }
            return res.json();
        })
        .then(result => {
            const nomeAtividade = dados.atividadeNome;
            const horaInicio = dados.horaInicio;
            const horaFim = dados.horaFim;



    // Inicializa o Flatpickr nos campos de data
          const dataInicioPicker = flatpickr("#dataInicio", {
         dateFormat: "Y-m-d",
            locale: "pt",
         onChange: function(selectedDates, dateStr) {

            // Atualiza a data mínima do campo dataFim
            dataFimPicker.set("minDate", dateStr);
        }
    });

    const dataFimPicker = flatpickr("#dataFim", {
        dateFormat: "Y-m-d",
        locale: "pt",
        minDate: new Date() // Define a data mínima como hoje
    });





            let totalHoras = 0;
            if (horaInicio && horaFim) {
                const inicio = new Date(`2000-01-01T${horaInicio}`);
                const fim = new Date(`2000-01-01T${horaFim}`);
                const diffEmMilissegundos = fim.getTime() - inicio.getTime();
                const diffEmHoras = diffEmMilissegundos / (1000 * 60 * 60);
                totalHoras = diffEmHoras * diasSelecionados.length;
            }

            alert(`✅ Atividade: ${nomeAtividade} cadastrada com sucesso!\nVocê vai dedicar a esta atividade aproximadamente ${totalHoras.toFixed(2)} horas na semana.`);
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error(error);
            alert('Erro ao cadastrar atividade. Tente novamente.');
        });
    });

    // Lógica para preencher os campos ao selecionar uma atividade existente
    const selectAtividadeExistente = document.getElementById('atividadeExistente');
    const atividadeNomeInput = document.getElementById('atividadeNome');
    const descricaoAtividadeTextarea = document.getElementById('descricaoAtividade');

    selectAtividadeExistente.addEventListener('change', function() {
        const nomeAtividadeSelecionada = this.value;
        if (nomeAtividadeSelecionada) {
            // Busca a primeira atividade com o nome selecionado para preencher os campos
            fetch(`http://localhost:8080/atividades?atividadeNome=${encodeURIComponent(nomeAtividadeSelecionada)}`)
                .then(response => {
                    if (!response.ok) {
                        console.error('Erro ao buscar detalhes da atividade:', response.status);
                        return null;
                    }
                    return response.json();
                })
                .then(atividadesEncontradas => {
                    if (atividadesEncontradas && atividadesEncontradas.length > 0) {
                        atividadeNomeInput.value = atividadesEncontradas[0].atividadeNome || '';
                        descricaoAtividadeTextarea.value = atividadesEncontradas[0].descricaoAtividade || '';
                        // Você pode adicionar lógica para preencher outros campos, se necessário
                    } else {
                        atividadeNomeInput.value = '';
                        descricaoAtividadeTextarea.value = '';
                    }
                })
                .catch(error => {
                    console.error('Erro ao buscar detalhes da atividade:', error);
                });
        } else {
            atividadeNomeInput.value = '';
            descricaoAtividadeTextarea.value = '';
        }
    });
});
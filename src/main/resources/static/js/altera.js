// js/altera.js

document.addEventListener('DOMContentLoaded', () => {
const tabela = document.getElementById('tabelaAlteracao');

fetch('http://localhost:8080/atividades')
.then(res => res.json())
.then(atividades => {
atividades.forEach(atividade => {
const tr = document.createElement('tr');

const tdNome = document.createElement('td');
const inputNome = document.createElement('input');
inputNome.type = 'text';
inputNome.value = atividade.atividadeNome;
inputNome.className = 'input-edit';
tdNome.appendChild(inputNome);

const tdData = document.createElement('td');
const inputData = document.createElement('input');
inputData.type = 'date';
inputData.value = atividade.dataInicio;
inputData.className = 'input-edit';
tdData.appendChild(inputData);

const tdHora = document.createElement('td');
const inputHora = document.createElement('input');
inputHora.type = 'time';
inputHora.value = atividade.horaInicio || '';
inputHora.className = 'input-edit';
tdHora.appendChild(inputHora);

const tdAcoes = document.createElement('td');
const botaoSalvar = document.createElement('button');
botaoSalvar.textContent = 'Salvar';
botaoSalvar.className = 'edit-btn';
botaoSalvar.addEventListener('click', () => {
atividade.atividadeNome = inputNome.value;
atividade.dataInicio = inputData.value;
atividade.horaInicio = inputHora.value;

fetch(`http://localhost:8080/atividades/${atividade.id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(atividade)
})
.then(() => {
alert('✅ Atividade atualizada com sucesso!');
})
.catch(err => {
console.error('Erro ao atualizar atividade:', err);
alert('Erro ao atualizar atividade.');
});
});

tdAcoes.appendChild(botaoSalvar);

tr.appendChild(tdNome);
tr.appendChild(tdData);
tr.appendChild(tdHora);
tr.appendChild(tdAcoes);

tabela.appendChild(tr);
});
})
.catch(error => {
console.error('Erro ao carregar atividades:', error);
alert('Erro ao carregar atividades.');
});
});

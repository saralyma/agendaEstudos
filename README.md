# 📘 Agenda de Estudos

Uma aplicação web completa para gerenciar e organizar atividades de estudo, desenvolvida com Spring Boot e interface frontend moderna.


## 🚀 Tecnologias Utilizadas

### Backend
- **Java 17**
- **Spring Boot 3.4.6**
- **Spring Data MongoDB**
- **Spring Web**
- **Lombok**
- **Maven**

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Design Responsivo**

### Banco de Dados

- **MongoDB** (principal)
- **H2 Database** (desenvolvimento/testes)

## 📋 Funcionalidades

- ✅ **Cadastro de Atividades** - Criar novas atividades de estudo
- 📖 **Consulta de Atividades** - Visualizar todas as atividades cadastradas
- ✏️ **Alteração de Atividades** - Editar atividades existentes
- 🗑️ **Exclusão de Atividades** - Remover atividades desnecessárias
- ✅ **Marcar como Concluída** - Controlar status de conclusão
- 📊 **Relatórios Gráficos** - Visualizar progresso dos estudos

## 🏗️ Estrutura do Projeto

```
src/
├── main/
│   ├── java/com/sara/agendaestudos/
│   │   ├── controller/          # Controllers REST
│   │   ├── model/              # Entidades do domínio
│   │   ├── repository/         # Repositórios de dados
│   │   └── service/           # Lógica de negócio
│   └── resources/
│       ├── static/            # Frontend (HTML, CSS, JS)
│       └── application.properties
```

## ⚙️ Como Executar

### Pré-requisitos
- Java 17 ou superior
- Maven 3.6+
- MongoDB (local ou cloud)

### Execução
1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/agendaestudos.git
cd agendaestudos
```

2. Configure o MongoDB no `application.properties`

3. Execute a aplicação:
```bash
mvn spring-boot:run
```

4. Acesse: `http://localhost:8080`

## 🌐 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/atividades` | Lista todas as atividades |
| POST | `/atividades` | Cria nova atividade |
| GET | `/atividades/{id}` | Busca atividade por ID |
| PUT | `/atividades/{id}` | Atualiza atividade |
| DELETE | `/atividades/{id}` | Remove atividade |
| DELETE | `/atividades` | Remove todas as atividades |

## 🎯 Modelo de Dados

```java
public class Atividade {
    private String id;
    private String MesAnoAtivo;
    private String atividadeNome;
    private String descricaoAtividade;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private Boolean statusRealizadoYesNo;
    private LocalTime horaInicio;
    private LocalTime horaFim;
    private String observacoes;
}
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Saralyma**
- GitHub: [@saralyma](https://github.com/saralyma)

observação : este projeto nao esta concluido.

⭐ Se este projeto te ajudou, considere dar uma estrela!

package com.sara.agendaestudos.model;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "atividades")
public class Atividade {
    @Id
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


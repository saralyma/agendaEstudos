package com.sara.agendaestudos.repository;

import com.sara.agendaestudos.model.Atividade;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AtividadeRepository extends MongoRepository<Atividade, String> {





}

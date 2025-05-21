package com.sara.agendaestudos.service;
import com.sara.agendaestudos.model.Atividade;
import com.sara.agendaestudos.repository.AtividadeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AtividadeService {
    private final AtividadeRepository repository;

    public AtividadeService(AtividadeRepository repository) {
        this.repository = repository;
    }

    public Atividade save(Atividade atividade) {
        return repository.save(atividade);

    }

    public List<Atividade> findAll() {
        return repository.findAll();
    }

    public Optional<Atividade> findById(String id) {
        return repository.findById(id);
    }

    public void deleteById(String id) {
        repository.deleteById(id);

    }

    public void deleteAll() {
        repository.deleteAll();
    }

    public Atividade atualizar(String id, Atividade novaAtividade) {
        Optional<Atividade> existente = repository.findById(id);
        if (existente.isPresent()) {
            novaAtividade.setId(id);
            return repository.save(novaAtividade);
        }
        return null;
    }


}

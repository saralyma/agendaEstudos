package com.sara.agendaestudos.controller;

import com.sara.agendaestudos.model.Atividade;
import com.sara.agendaestudos.service.AtividadeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/atividades")
@CrossOrigin("*") // libera chamadas do front-end (ex: React, Postman, etc.)
public class AtividadeController {

    private final AtividadeService service;

    public AtividadeController(AtividadeService service) {
        this.service = service;
    }

    // 🔸 Criar nova atividade
    @PostMapping
    public Atividade criar(@RequestBody Atividade atividade) {
        return service.save(atividade);
    }

    // 🔸 Listar todas as atividades
    @GetMapping
    public List<Atividade> listarTodas() {
        return service.findAll();
    }



    // 🔸 Buscar uma atividade por ID
    @GetMapping("/{id}")
    public Atividade buscarPorId(@PathVariable String id) {
        return service.findById(id).orElse(null);
    }


    // 🔸 Atualizar uma atividade existente
    @PutMapping("/{id}")
    public Atividade atualizar(@PathVariable String id, @RequestBody Atividade atividade) {
        return service.atualizar(id, atividade);
    }

    // 🔸 Deletar uma atividade
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable String id) {
        service.deleteById(id);
    }

    @DeleteMapping
    public void deletarTodas() {
        service.deleteAll();
    }



}

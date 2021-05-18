package com.example.myhealth.refeicao.controller;


import com.example.myhealth.refeicao.Refeicao;
import com.example.myhealth.refeicao.repository.RefeicaoRepository;
import com.example.myhealth.refeicao.response.RefeicoesResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
    @RequestMapping("/refeicoes")
public class RefeicaoController {

    @Autowired
    private RefeicaoRepository repository;

    @GetMapping()
    public ResponseEntity listarRefeicao(@RequestParam Integer idUsuario) {
        List<Refeicao> refeicoes = repository.findAll();
        if (!(refeicoes.isEmpty() )){
            return ResponseEntity.status(200).body(
                    refeicoes.stream().map(RefeicoesResponse::new).collect(Collectors.toList()));
        }
        else{
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping()
    public ResponseEntity postCadastrarRefeicao(@RequestBody @Valid Refeicao refeicao) {
        repository.save(refeicao);
        return ResponseEntity.status(201).build();
    }

}


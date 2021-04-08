package com.example.myhealth.refeicao.controller;


import com.example.myhealth.refeicao.Refeicao;
//import com.example.myhealth.refeicao.repository.RefeicaoRepository;
import com.example.myhealth.refeicao.repository.RefeicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/refeicoes")
public class RefeicaoController {

    @Autowired
    private RefeicaoRepository repository;

    @GetMapping()
    public ResponseEntity listarRefeicao() {
        List<Refeicao> refeicoes = repository.findAll();
        if (refeicoes.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.ok(refeicoes);
        }
    }

}


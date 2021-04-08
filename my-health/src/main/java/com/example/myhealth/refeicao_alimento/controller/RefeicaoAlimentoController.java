package com.example.myhealth.refeicao_alimento.controller;

import com.example.myhealth.refeicao_alimento.RefeicaoAlimento;
import com.example.myhealth.refeicao_alimento.repository.RefeicaoAlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/refeicoes-alimentos")
public class RefeicaoAlimentoController {

    @Autowired
    private RefeicaoAlimentoRepository repository;

    @GetMapping()
    public ResponseEntity getRefeicoes() {
        List<RefeicaoAlimento> refeicaoAlimentos = repository.findAll();
        if (refeicaoAlimentos.isEmpty()){
            return ResponseEntity.noContent().build();
        } else{
            return ResponseEntity.ok(refeicaoAlimentos);
        }
    }
}

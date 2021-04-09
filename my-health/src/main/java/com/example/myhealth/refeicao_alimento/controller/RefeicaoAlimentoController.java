package com.example.myhealth.refeicao_alimento.controller;

import com.example.myhealth.refeicao_alimento.RefeicaoAlimento;
import com.example.myhealth.refeicao_alimento.RefeicaoAlimentoId;
import com.example.myhealth.refeicao_alimento.repository.RefeicaoAlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/refeicoes-alimentos")
public class RefeicaoAlimentoController {

    @Autowired
    private RefeicaoAlimentoRepository repository;

    @GetMapping()
    public ResponseEntity getRefeicoesAlimento() {
        List<RefeicaoAlimento> refeicaoAlimentos = repository.findAll();
        if (refeicaoAlimentos.isEmpty()){
            return ResponseEntity.noContent().build();
        } else{
            return ResponseEntity.ok(refeicaoAlimentos);
        }
    }

    @PostMapping()
    public ResponseEntity postCadastrarRefeicaoAlimento(@RequestBody @Valid RefeicaoAlimento refeicaoAlimento){
        repository.save(refeicaoAlimento);
        return ResponseEntity.status(201).build();
    }

}

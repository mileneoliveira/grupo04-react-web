package com.example.myhealth.refeicao.controller;


import com.example.myhealth.refeicao.Refeicao;
//import com.example.myhealth.refeicao.repository.RefeicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/refeicoes")
public class RefeicaoController {
//
//    @Autowired
//    private RefeicaoRepository repository;
//
//    @GetMapping()
//    public ResponseEntity listarRefeicao() {
//        List<Refeicao> refeicoes = repository.findAll();
//        if (refeicoes.isEmpty()){
//            return ResponseEntity.noContent().build();
//        }
//        else{
//            return ResponseEntity.ok(refeicoes);
//        }
//    }
//
//    @GetMapping("/{posicao}")
//    public Refeicao pesquisarRefeicao(@PathVariable int posicao) {
//        if ((refeicoes.size()-1) >= posicao){
//            return refeicoes.get(posicao);
//        } else {
//            return null;
//        }
//    }
//
//    @PostMapping()
//    public Refeicao criarAlimento(@RequestBody Refeicao refeicao){
//        refeicoes.add(refeicao);
//        return refeicao;
//    }
//
//    @PutMapping("/{posicao}")
//    public Refeicao atualizarRefeicao(@RequestBody Refeicao refeicao, @PathVariable int posicao) {
//        if ((refeicoes.size()-1) >= posicao){
//            return refeicoes.set(posicao, refeicao);
//        } else {
//            return null;
//        }
//    }
//
//    @DeleteMapping("/{posicao}")
//    public String deletarRefeicao(@PathVariable int posicao) {
//        if ((refeicoes.size()-1) >= posicao){
//            refeicoes.remove(posicao);
//            return "Refeicao deletada com sucesso";
//        } else {
//            return null;
//        }
//    }





}


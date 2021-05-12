package com.example.myhealth.dashboard.controller;

import com.example.myhealth.refeicao_alimento.repository.RefeicaoAlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboards")
public class DashboardController {

    @Autowired
    private RefeicaoAlimentoRepository repository;

    @GetMapping()
    public ResponseEntity somaElemento(){

        return ResponseEntity.status(200).body(repository.gramas());
    }



}

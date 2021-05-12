package com.example.myhealth.dashboard.controller;

import com.example.myhealth.dashboard.Conversao;
import com.example.myhealth.dashboard.Gramas;
import com.example.myhealth.refeicao.Refeicao;
import com.example.myhealth.refeicao.repository.RefeicaoRepository;
import com.example.myhealth.refeicao_alimento.repository.RefeicaoAlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/dashboards")
public class DashboardController {

    @Autowired
    private RefeicaoAlimentoRepository repository;

    @Autowired
    RefeicaoRepository repositoryRefeicao;

    @GetMapping()
    public ResponseEntity somaElemento(@RequestParam int idRefeicao) {
        Conversao conveter = new Conversao();
        if (repositoryRefeicao.existsById(idRefeicao)){
            Gramas gramas1 = new Gramas(
                    repository.somaColesterol(idRefeicao) / conveter.getPesoColesterol(),
                    repository.somaCarboidrato(idRefeicao) / conveter.getPesoCarboidrato(),
                    repository.somaFibra(idRefeicao) / conveter.getPesoFibra(),
                    repository.somaCalcio(idRefeicao) / conveter.getPesoCalcio(),
                    repository.somaFerro(idRefeicao) / conveter.getPesoFerro(),
                    repository.somaSodio(idRefeicao) / conveter.getPesoSodio(),
                    repository.somaProteina(idRefeicao) / conveter.getPesoProteina(),
                    repository.somaCalorias(idRefeicao));
            return ResponseEntity.status(200).body(gramas1);
        }
       return ResponseEntity.notFound().build();
    }


}

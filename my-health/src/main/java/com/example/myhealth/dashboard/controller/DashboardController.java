package com.example.myhealth.dashboard.controller;

import com.example.myhealth.alimento.repository.AlimentoRepository;
import com.example.myhealth.dashboard.Conversao;
import com.example.myhealth.dashboard.Gramas;
import com.example.myhealth.refeicao.Refeicao;
import com.example.myhealth.refeicao.repository.RefeicaoRepository;
import com.example.myhealth.refeicao_alimento.repository.RefeicaoAlimentoRepository;
import com.example.myhealth.usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/dashboards")
public class DashboardController {

    @Autowired
    private RefeicaoAlimentoRepository repositoryRefeicaoAlimento;

    @Autowired
    private RefeicaoRepository repositoryRefeicao;

    @Autowired
    private UsuarioRepository repositoryUsuario;


    @GetMapping("/somaNutrientes")
    public ResponseEntity somaElemento(@RequestParam int idRefeicao) {
        Conversao conveter = new Conversao();
        if (repositoryRefeicao.existsById(idRefeicao) && repositoryRefeicaoAlimento.refeicaoAlimentoExiste(idRefeicao)) {
            Gramas gramas = new Gramas(
                    repositoryRefeicaoAlimento.somaColesterol(idRefeicao) / conveter.getPesoColesterol(),
                    repositoryRefeicaoAlimento.somaCarboidrato(idRefeicao) / conveter.getPesoCarboidrato(),
                    repositoryRefeicaoAlimento.somaFibra(idRefeicao) / conveter.getPesoFibra(),
                    repositoryRefeicaoAlimento.somaCalcio(idRefeicao) / conveter.getPesoCalcio(),
                    repositoryRefeicaoAlimento.somaFerro(idRefeicao) / conveter.getPesoFerro(),
                    repositoryRefeicaoAlimento.somaSodio(idRefeicao) / conveter.getPesoSodio(),
                    repositoryRefeicaoAlimento.somaProteina(idRefeicao) / conveter.getPesoProteina(),
                    repositoryRefeicaoAlimento.somaCalorias(idRefeicao));
            return ResponseEntity.status(200).body(gramas);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("caloriasDia")
    public ResponseEntity getCaloriasDia(@RequestParam("data") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate data, Integer idUsuario) {
        LocalDateTime dtStart = data.atStartOfDay();
        LocalDateTime dtFinish = data.atTime(LocalTime.MAX);

        if (!(data.isAfter(LocalDate.now()) && repositoryUsuario.existsById(idUsuario))) {
            return ResponseEntity.status(200).body(repositoryRefeicaoAlimento.somaCaloriasDia(dtStart, dtFinish, idUsuario));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("caloriasIntervalo")
    public ResponseEntity getCaloriasIntervalo(@RequestParam("dataInicio") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dataInicio,
                                               @RequestParam("dataFim") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dataFim,
                                               Integer idUsuario) {

        LocalDateTime dtStart = dataInicio.atStartOfDay();
        LocalDateTime dtFinish = dataFim.atTime(LocalTime.MAX);

        if (!(dataInicio.isAfter(LocalDate.now()) && dataFim.isAfter(LocalDate.now()) && repositoryUsuario.existsById(idUsuario))) {
            return ResponseEntity.status(200).body(repositoryRefeicaoAlimento.somaCaloriasDia(dtStart, dtFinish, idUsuario));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

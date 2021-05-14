package com.example.myhealth.dashboard.controller;

import com.example.myhealth.dashboard.Conversao;
import com.example.myhealth.dashboard.Gramas;
import com.example.myhealth.refeicao.repository.RefeicaoRepository;
import com.example.myhealth.refeicao_alimento.repository.RefeicaoAlimentoRepository;
import com.example.myhealth.usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

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
    public ResponseEntity somaElemento(
            @RequestParam("data") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate data,
            @RequestParam Integer idUsuario,
            @RequestParam int idCategoriaRefeicao) {
        LocalDateTime dtStart = data.atStartOfDay();
        LocalDateTime dtFinish = data.atTime(LocalTime.MAX);
        Conversao conveter = new Conversao();
        if (!(data.isAfter(LocalDate.now())) && repositoryUsuario.existsById(idUsuario) && repositoryRefeicaoAlimento.refeicaoExisteNaData(dtStart, dtFinish, idCategoriaRefeicao, idUsuario)) {
            Gramas gramas = new Gramas(
                    repositoryRefeicaoAlimento.somaColesterol(dtStart, dtFinish, idUsuario, idCategoriaRefeicao) / conveter.getPesoColesterol(),
                    repositoryRefeicaoAlimento.somaCarboidrato(dtStart, dtFinish, idUsuario, idCategoriaRefeicao) / conveter.getPesoCarboidrato(),
                    repositoryRefeicaoAlimento.somaFibra(dtStart, dtFinish, idUsuario, idCategoriaRefeicao) / conveter.getPesoFibra(),
                    repositoryRefeicaoAlimento.somaCalcio(dtStart, dtFinish, idUsuario, idCategoriaRefeicao) / conveter.getPesoCalcio(),
                    repositoryRefeicaoAlimento.somaFerro(dtStart, dtFinish, idUsuario, idCategoriaRefeicao) / conveter.getPesoFerro(),
                    repositoryRefeicaoAlimento.somaSodio(dtStart, dtFinish, idUsuario, idCategoriaRefeicao) / conveter.getPesoSodio(),
                    repositoryRefeicaoAlimento.somaProteina(dtStart, dtFinish, idUsuario, idCategoriaRefeicao) / conveter.getPesoProteina(),
                    repositoryRefeicaoAlimento.somaCalorias(dtStart, dtFinish, idUsuario, idCategoriaRefeicao));
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

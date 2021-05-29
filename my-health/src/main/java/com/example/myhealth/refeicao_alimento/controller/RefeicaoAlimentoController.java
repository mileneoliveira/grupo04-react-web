package com.example.myhealth.refeicao_alimento.controller;

import com.example.myhealth.refeicao_alimento.RefeicaoAlimento;
import com.example.myhealth.refeicao_alimento.repository.RefeicaoAlimentoRepository;
import com.example.myhealth.refeicao_alimento.response.RefeicaoAlimentoResponse;
import com.example.myhealth.usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/refeicoes-alimentos")
public class RefeicaoAlimentoController {

    @Autowired
    private RefeicaoAlimentoRepository repository;

    @Autowired
    private UsuarioRepository repositoryUsuario;

    @GetMapping()
    public ResponseEntity getRefeicoesAlimento(@RequestParam Integer idUsuario) {
        List<RefeicaoAlimento> refeicaoAlimentos = repository.buscarTodasRefeicoesUsuario(idUsuario);
        if (!refeicaoAlimentos.isEmpty()) {
            return ResponseEntity.status(200).body(
                    refeicaoAlimentos.stream().map(RefeicaoAlimentoResponse::new).collect(Collectors.toList()));
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/refeicoes-dia")
    public ResponseEntity getRefeicoesAlimentoDia(
            @RequestParam("data") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate data,
            @RequestParam Integer idUsuario, Integer idTipo) {
        LocalDateTime dtStart = data.atStartOfDay();
        LocalDateTime dtFinish = data.atTime(LocalTime.MAX);
        if (!(data.isAfter(LocalDate.now())) & repositoryUsuario.existsById(idUsuario)) {
            List<RefeicaoAlimento> refeicaoAlimentos = repository.buscarTodasRefeicoesUsuarioByDay(dtStart, dtFinish, idUsuario, idTipo);
            return ResponseEntity.status(200).body(
                    refeicaoAlimentos.stream().map(RefeicaoAlimentoResponse::new).collect(Collectors.toList()));
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping()
    public ResponseEntity postCadastrarRefeicaoAlimento(@RequestBody @Valid RefeicaoAlimento refeicaoAlimento) {
        repository.save(refeicaoAlimento);
        return ResponseEntity.status(201).build();
    }


}

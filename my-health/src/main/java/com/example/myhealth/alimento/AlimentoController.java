package com.example.myhealth.alimento;

import com.example.myhealth.repository.AlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/alimentos")
public class AlimentoController {

    @Autowired
    private AlimentoRepository repository;

    @GetMapping()
    public ResponseEntity pesquisarAlimento() {
        List<Alimento> alimentos = repository.findAll();
        if (alimentos.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(alimentos);
    }

    @GetMapping("/nome")
    public ResponseEntity getPorNome(@RequestParam String nome){
        return ResponseEntity.status(200).body(repository.findByNomeContains(nome));
    }

//
//    @GetMapping("/todos")
//    public List<Aliment
//
//    @GetMapping("/{posicao}")
//    public Alimento pesquisarAlimento(@PathVariable int posicao) {
//        if ((alimentos.size()-1) >= posicao){
//            return alimentos.get(posicao);
//        } else {
//            return null;
//        }
//    }

}



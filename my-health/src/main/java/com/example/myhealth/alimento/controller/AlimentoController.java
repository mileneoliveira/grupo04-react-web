package com.example.myhealth.alimento.controller;

import com.example.myhealth.alimento.Alimento;
import com.example.myhealth.alimento.repository.AlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alimentos")
public class AlimentoController {

    @Autowired
    private AlimentoRepository repository;

    @GetMapping()
    public ResponseEntity getAlimentos() {
        List<Alimento> alimentos = repository.findAll();
        if (alimentos.isEmpty()){
            return ResponseEntity.noContent().build();
        } else{
            return ResponseEntity.ok(alimentos);
        }
    }

    @GetMapping("/nome")
    public ResponseEntity getByName(@RequestParam String nome){
        return ResponseEntity.status(200).body(repository.findByNomeContains(nome));
    }

    @GetMapping("{id}")
    public ResponseEntity getById(@PathVariable int id){
        if (repository.existsById(id)){
            return ResponseEntity.ok(repository.findById(id));
        }
        else{
            return ResponseEntity.notFound().build();
        }

    }




}



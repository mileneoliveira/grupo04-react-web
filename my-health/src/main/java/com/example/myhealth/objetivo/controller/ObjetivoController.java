package com.example.myhealth.objetivo.controller;

import com.example.myhealth.objetivo.Objetivo;
import com.example.myhealth.objetivo.repository.ObjetivoRepository;
import com.example.myhealth.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/objetivos")
public class ObjetivoController {

    @Autowired
    private ObjetivoRepository repository;

    @GetMapping
    public ResponseEntity getObjetivos(){
        List<Objetivo> objetivos = repository.findAll();

        if (!objetivos.isEmpty()){
            return ResponseEntity.ok(objetivos);
        }
        else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping()
    public ResponseEntity postCadastrarObjetivo(@RequestBody @Valid Objetivo objetivo) {
        repository.save(objetivo);
        return ResponseEntity.status(201).build();
    }



}

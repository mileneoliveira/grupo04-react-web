package com.example.myhealth.categoria.controller;

import com.example.myhealth.categoria.Categoria;
import com.example.myhealth.categoria.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaRepository repository;

    @GetMapping()
    public ResponseEntity getCategorias(){
        List<Categoria> categorias = repository.findAll();
        if (categorias.isEmpty()){
           return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.ok(categorias);
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

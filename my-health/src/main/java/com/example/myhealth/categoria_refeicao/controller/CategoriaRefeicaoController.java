package com.example.myhealth.categoria_refeicao.controller;

import com.example.myhealth.categoria.Categoria;
import com.example.myhealth.categoria_refeicao.CategoriaRefeicao;
import com.example.myhealth.categoria_refeicao.repository.CategoriaRefeicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/categoriaRefeicoes")
public class CategoriaRefeicaoController {

    @Autowired
    private CategoriaRefeicaoRepository repository;

    @GetMapping()
    public ResponseEntity getCategoriaRefeicoes(){
        List<CategoriaRefeicao> categoriaRefeicoes = repository.findAll();
        if (categoriaRefeicoes.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.ok(categoriaRefeicoes);
        }
    }

    @GetMapping("/nome")
    public ResponseEntity getByName(@RequestParam String nome){
        return ResponseEntity.status(200).body(repository.findByNomeContains(nome));
    }

    @GetMapping("/id")
    public ResponseEntity getCategoriaRefeicaoById(@RequestParam int id) {
        return ResponseEntity.ok().body(repository.findByIdCategoriaRefeicao(id));
    }


    @PostMapping()
    public ResponseEntity postCadastrarCategoria(@RequestBody @Valid CategoriaRefeicao categoriaRefeicao) {
        repository.save(categoriaRefeicao);
        return ResponseEntity.status(201).build();
    }

    @DeleteMapping()
    public ResponseEntity deleteCategoriaById(@RequestParam Integer id) {
        if (repository.existsById(id)){
            repository.deleteById(id);
            return ResponseEntity.status(200).build();
        }
        else{
            return ResponseEntity.status(404).build();
        }
    }

    @PutMapping()
    ResponseEntity alterCategoria(@RequestBody @Valid CategoriaRefeicao categoriaRefeicao, @RequestParam int id) {
        if (repository.existsById(id)){
            categoriaRefeicao.setIdCategoriaRefeicao(id);
            repository.save(categoriaRefeicao);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }
}

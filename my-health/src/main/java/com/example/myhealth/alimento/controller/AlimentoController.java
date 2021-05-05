package com.example.myhealth.alimento.controller;

import com.example.myhealth.alimento.Alimento;
import com.example.myhealth.alimento.repository.AlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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

//    @GetMapping("/categoria")
//    public ResponseEntity getAlimentos(@RequestParam int id) {
//        return ResponseEntity.ok().body(repository.findByCategoriaId(id));
//    }

    @PostMapping()
    public ResponseEntity postCadastrarAlimento(@RequestBody @Valid Alimento alimento) {
        repository.save(alimento);
        return ResponseEntity.status(201).build();
    }

    @DeleteMapping()
    public ResponseEntity deleteAlimentoById(@RequestParam Integer id) {
        if (repository.existsById(id)){
            repository.deleteById(id);
            return ResponseEntity.status(200).build();
        }
        else{
            return ResponseEntity.status(404).build();
        }

    }

    @PutMapping()
    ResponseEntity alterAlimento(@RequestBody @Valid Alimento alimento, @RequestParam int id) {
        if (repository.existsById(id)){
            alimento.setIdAlimento(id);
            repository.save(alimento);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }

}



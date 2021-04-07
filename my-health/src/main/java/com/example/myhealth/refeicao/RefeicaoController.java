package com.example.myhealth.refeicao;


import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/refeicoes")
public class RefeicaoController {
    List<Refeicao> refeicoes = new ArrayList<Refeicao>();

    @GetMapping()
    public List<Refeicao> listarRefeicao() {
        return refeicoes;
    }

    @GetMapping("/{posicao}")
    public Refeicao pesquisarRefeicao(@PathVariable int posicao) {
        if ((refeicoes.size()-1) >= posicao){
            return refeicoes.get(posicao);
        } else {
            return null;
        }
    }

    @PostMapping()
    public Refeicao criarAlimento(@RequestBody Refeicao refeicao){
        refeicoes.add(refeicao);
        return refeicao;
    }

    @PutMapping("/{posicao}")
    public Refeicao atualizarRefeicao(@RequestBody Refeicao refeicao, @PathVariable int posicao) {
        if ((refeicoes.size()-1) >= posicao){
            return refeicoes.set(posicao, refeicao);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{posicao}")
    public String deletarRefeicao(@PathVariable int posicao) {
        if ((refeicoes.size()-1) >= posicao){
            refeicoes.remove(posicao);
            return "Refeicao deletada com sucesso";
        } else {
            return null;
        }
    }





}


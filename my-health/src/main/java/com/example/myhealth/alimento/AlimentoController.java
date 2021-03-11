package com.example.myhealth.alimento;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/alimentos")
public class AlimentoController {
    List<Alimento> alimentos = new ArrayList<>();

    public AlimentoController() {
        alimentos.add(new Alimento("Arroz, integral, cozido", 2.0, 123.5348925, null,
                25.80975, 2.749333, 5.204, 0.262, 1.244666, 2.58825));

        alimentos.add(new Alimento("Arroz, integral, cru", 0.5, 359.678002032609, null,
                77.450714, 4.819166, 7.818, 0.948333, 1.645666, 7.323285));

        alimentos.add(new Alimento("Arroz, tipo 1, cozido", 3.0, 128.258485, null,
                28.05985, 1.561, 3.544333, 0.076666, 1.200666, 2.520816));
    }

    @GetMapping()
    public List<Alimento> pesquisarAlimento() {
        return alimentos;
    }

    @GetMapping("/{posicao}")
    public Alimento pesquisarAlimento(@PathVariable int posicao) {
        if ((alimentos.size()-1) >= posicao){
            return alimentos.get(posicao);
        } else {
            return null;
        }
    }

}



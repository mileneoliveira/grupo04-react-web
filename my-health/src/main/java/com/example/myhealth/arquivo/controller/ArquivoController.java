package com.example.myhealth.arquivo.controller;

import com.example.myhealth.alimento.Alimento;
import com.example.myhealth.alimento.repository.AlimentoRepository;
import com.example.myhealth.arquivo.GravaArquivo;
import com.example.myhealth.arquivo.ListaObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("/gerarArquivo")
public class ArquivoController {

    @Autowired
    private AlimentoRepository repository;


    @PostMapping()
    public ResponseEntity gerarArquivoAlimento(@RequestParam boolean isCsv) {

        long contagemRegistros = repository.count();
        ListaObj<Alimento> lista = new ListaObj<Alimento>((int) contagemRegistros);

        String nomeArquivo = "Alimentos";
        String header = "";
        String corpo = "";
        String trailer = "";


        for (int i = 1; i < 412; i++) {
            lista.adiciona(repository.getOne(i));
        }

        System.out.println(lista);

        lista.exibe();

        if (isCsv) {
            if (lista.getTamanhoVetor() <= 0) {
                return ResponseEntity.status(400).body("erro em Alimento");
            } else {
                Date dataDeHoje = new Date();
                SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
                header = header + "00ALIMENTOS";
                header = header + formatter.format(dataDeHoje);
                header = header + "01";

                GravaArquivo.gravaRegistro("Alimentos.csv", header);


                int contRegDados = 0;

//                corpo = "ID_CORPO;ID_ALIMENTO;NOME;PORÇÃO;CALORIAS;COLESTEROL;CARBOIDRATO;FIBRA;CALCIO;FERRO;SODIO;PROTEINA;CATEGORIA_ID";
//                GravaArquivo.gravaRegistro("Alimentos.csv", corpo);

                for (int i = 0; i < lista.getTamanhoVetor(); i++) {
                    Alimento alimento = lista.getElemento(i);
                    corpo = "02";
                    corpo += String.format(";%04d", alimento.getIdAlimento());
                    corpo += String.format(";%-45s", alimento.getNome());
                    corpo += String.format(";%.2f", alimento.getPorcao());
                    corpo += String.format(";%.2f", alimento.getCalorias());
                    corpo += String.format(";%.2f", alimento.getColesterol());
                    corpo += String.format(";%.2f", alimento.getCarboidrato());
                    corpo += String.format(";%.2f", alimento.getFibra());
                    corpo += String.format(";%.2f", alimento.getCalcio());
                    corpo += String.format(";%.2f", alimento.getFerro());
                    corpo += String.format(";%.2f", alimento.getSodio());
                    corpo += String.format(";%.2f", alimento.getProteina());
                    corpo += String.format(";%04d", alimento.getCategoria().getIdCategoria());

                    contRegDados++;

                    GravaArquivo.gravaRegistro("Alimentos.csv", corpo);
                    System.out.println(i);

                }

                trailer = trailer + "01";
                trailer = trailer + String.format("%05d", Integer.valueOf(contRegDados));
                GravaArquivo.gravaRegistro("Alimentos.csv", trailer);
            }
        } else {
            if (lista.getTamanhoVetor() <= 0) {
                return ResponseEntity.status(400).body("erro em Alimento");
            } else {
                Date dataDeHoje = new Date();
                SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
                header = header + "00ALIMENTOS";
                header = header + formatter.format(dataDeHoje);
                header = header + "01";

                GravaArquivo.gravaRegistro("Alimentos.txt", header);

                int contRegDados = 0;


                for (int i = 0; i < lista.getTamanhoVetor(); i++) {
                    Alimento alimento = lista.getElemento(i);
                    corpo = "02";
                    corpo += String.format("%04d", alimento.getIdAlimento());
                    corpo += String.format("%-45s", alimento.getNome());
                    corpo += String.format("%07.2f", alimento.getPorcao());
                    corpo += String.format("%07.2f", alimento.getCalorias());
                    corpo += String.format("%07.2f", alimento.getColesterol());
                    corpo += String.format("%07.2f", alimento.getCarboidrato());
                    corpo += String.format("%07.2f", alimento.getFibra());
                    corpo += String.format("%07.2f", alimento.getCalcio());
                    corpo += String.format("%07.2f", alimento.getFerro());
                    corpo += String.format("%07.2f", alimento.getSodio());
                    corpo += String.format("%07.2f", alimento.getProteina());
                    corpo += String.format("%04d", alimento.getCategoria().getIdCategoria());

                    contRegDados++;

                    GravaArquivo.gravaRegistro("Alimentos.txt", corpo);
                    System.out.println(i);

                }

                trailer = trailer + "01";
                trailer = trailer + String.format("%05d", Integer.valueOf(contRegDados));
                GravaArquivo.gravaRegistro("Alimentos.txt", trailer);
            }

        }

        return ResponseEntity.status(200).build();
    }

}

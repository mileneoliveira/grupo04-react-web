package com.example.myhealth.refeicao;

import com.example.myhealth.alimento.Alimento;
import com.example.myhealth.interfaces.CaloriasCalculaveis;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

//@Entity
public class Refeicao implements CaloriasCalculaveis {

    private List<Alimento> alimentos = new ArrayList<Alimento>();

    @Id
    private Integer id;
    private String tipo;
    private Double totalCalorias;
    private Double totalColesterol;
    private Double totalCarboidrato;
    private Double totalFibra;
    private Double totalCalcio;
    private Double totalFerro;
    private Double totalSodio;
    private Double totalProteina;
    private Integer usuarioId;

    public Refeicao(List<Alimento> alimentos, String tipo) {
        this.alimentos = alimentos;
        this.tipo = tipo;
    }

    @Override
    public Double calcularCalorias() {
        Double totalCaloria = 0.0;

        for (Alimento a : alimentos){
            totalCaloria += a.getCalorias() * a.getPorcao();
        }

        return totalCaloria;
    }

    public Double calcularColesterol() {
        Double totalColesterol = 0.0;

        for (Alimento a : alimentos){
            totalColesterol += a.getColesterol() * a.getPorcao();
        }

        return totalColesterol;
    }

    public Double calcularCarboidrato() {
        Double totalCarboidrato = 0.0;

        for (Alimento a : alimentos){
            totalCarboidrato += a.getCarboidrato() * a.getPorcao();
        }

        return totalCarboidrato;
    }

    public Double calcularFibra() {
        Double totalFibra = 0.0;

        for (Alimento a : alimentos){
            totalFibra += a.getFibra() * a.getPorcao();
        }

        return totalFibra;
    }

    public Double calcularCalcio() {
        Double totalCalcio = 0.0;

        for (Alimento a : alimentos){
            totalCalcio += a.getCalcio() * a.getPorcao();
        }

        return totalCalcio;
    }

    public Double calcularFerro() {
        Double totalFerro = 0.0;

        for (Alimento a : alimentos){
            totalFerro += a.getFerro() * a.getPorcao();
        }

        return totalFerro;
    }

    public Double calcularSodio() {
        Double totalSodio = 0.0;

        for (Alimento a : alimentos){
            totalSodio += a.getSodio() * a.getPorcao();
        }

        return totalSodio;
    }

    public Double calcularProteina() {
        Double totalProteina = 0.0;

        for (Alimento a : alimentos){
            totalProteina += a.getProteina() * a.getPorcao();
        }

        return totalProteina;
    }
}

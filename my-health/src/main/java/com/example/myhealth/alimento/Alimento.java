package com.example.myhealth.alimento;

public class Alimento {

    private String nome;
    private Double porcao;              //100 gramas cada
    private Double calorias;            // em Kcal
    private Double colesterol;          // em miligramas
    private Double carboidrato;         // em gramas
    private Double fibra;               // em miligramas
    private Double calcio;              // em miligramas
    private Double ferro;               // em miligramas
    private Double sodio;               // em miligramas
    private Double proteina;            // em gramas

    public Alimento(String nome,
                    Double porcao,
                    Double calorias,
                    Double colesterol,
                    Double carboidrato,
                    Double fibra,
                    Double calcio,
                    Double ferro,
                    Double sodio,
                    Double proteina) {

        this.nome = nome;
        this.porcao = porcao * 100;
        this.calorias = calorias;
        this.colesterol = colesterol;
        this.carboidrato = carboidrato;
        this.fibra = fibra;
        this.calcio = calcio;
        this.ferro = ferro;
        this.sodio = sodio;
        this.proteina = proteina;
    }

    public String getNome() {
        return nome;
    }

    public Double getPorcao() {
        return porcao;
    }

    public Double getCalorias() {
        return calorias;
    }

    public Double getColesterol() {
        return colesterol;
    }

    public Double getCarboidrato() {
        return carboidrato;
    }

    public Double getFibra() {
        return fibra;
    }

    public Double getCalcio() {
        return calcio;
    }

    public Double getFerro() {
        return ferro;
    }

    public Double getSodio() {
        return sodio;
    }

    public Double getProteina() {
        return proteina;
    }

}

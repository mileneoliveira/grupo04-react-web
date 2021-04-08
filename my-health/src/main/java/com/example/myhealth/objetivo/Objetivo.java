package com.example.myhealth.objetivo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Objetivo {

    @Id
    @Column(name = "id_objetivo")
    private Integer idObjetivo;
    private String titulo;
    private String descricao;
    private Integer tempo;
    @Column(name = "peso_meta")
    private Double pesoMeta;
    @Column(name = "data_meta")
    private LocalDate dataMeta;

    public Integer getIdObjetivo() {
        return idObjetivo;
    }

    public void setIdObjetivo(Integer idObjetivo) {
        this.idObjetivo = idObjetivo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getTempo() {
        return tempo;
    }

    public void setTempo(Integer tempo) {
        this.tempo = tempo;
    }

    public Double getPesoMeta() {
        return pesoMeta;
    }

    public void setPesoMeta(Double pesoMeta) {
        this.pesoMeta = pesoMeta;
    }

    public LocalDate getDataMeta() {
        return dataMeta;
    }

    public void setDataMeta(LocalDate dataMeta) {
        this.dataMeta = dataMeta;
    }
}

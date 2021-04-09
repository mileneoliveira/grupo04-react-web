package com.example.myhealth.objetivo;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDate;

@Entity
public class Objetivo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_objetivo")
    private Integer idObjetivo;

    @NotBlank
    @NotNull
    @Size(min = 1, max = 45)
    private String titulo;

    @NotBlank
    @NotNull
    @Size(min = 1, max = 45)
    private String descricao;

    @Positive
    @NotNull
    private Integer tempo;

    @Positive
    @NotNull
    @Column(name = "peso_meta")
    private Double pesoMeta;

    @FutureOrPresent
    @NotNull
    @Column(name = "data_meta")
    private LocalDate dataMeta;

    @NotNull
    @Column(name = "usuario_id")
    private Integer usuarioId;


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

    public Integer getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Integer usuarioId) {
        this.usuarioId = usuarioId;
    }
}

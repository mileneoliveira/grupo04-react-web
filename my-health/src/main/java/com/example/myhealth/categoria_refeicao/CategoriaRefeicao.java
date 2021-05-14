package com.example.myhealth.categoria_refeicao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CategoriaRefeicao {

    @Id
    @Column(name = "id_categoria_refeicao")
    private Integer idCategoriaRefeicao;
    private String nome;

    public Integer getIdCategoriaRefeicao() {
        return idCategoriaRefeicao;
    }

    public void setIdCategoriaRefeicao(Integer idCategoriaRefeicao) {
        this.idCategoriaRefeicao = idCategoriaRefeicao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}


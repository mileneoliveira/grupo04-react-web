package com.example.myhealth.categoria;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Categoria {

    @Id
    private Integer id;
    private String nome;

    public Integer getIdCategoria() {
        return id;
    }

    public void setIdCategoria(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}

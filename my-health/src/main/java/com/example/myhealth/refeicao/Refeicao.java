package com.example.myhealth.refeicao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Refeicao {

    @Id
    @Column(name = "id_refeicao")
    private Integer idRefeicao;
    private String tipo;
    @Column(name = "usuario_id")
    private Integer usuarioId;

    public Integer getIdRefeicao() {
        return idRefeicao;
    }

    public void setIdRefeicao(Integer idRefeicao) {
        this.idRefeicao = idRefeicao;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Integer usuarioId) {
        this.usuarioId = usuarioId;
    }
}

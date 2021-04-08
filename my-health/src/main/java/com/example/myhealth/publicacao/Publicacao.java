package com.example.myhealth.publicacao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Publicacao {

    @Id
    @Column(name = "id_publicacao")
    private Integer idPublicacao;
    private String titulo;
    private String descricao;
    private Integer curtida;
    @Column(name = "usuario_id")
    private Integer usuarioId;

    public Integer getIdPublicacao() {
        return idPublicacao;
    }

    public void setId(Integer id) {
        this.idPublicacao = id;
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

    public Integer getCurtida() {
        return curtida;
    }

    public void setCurtida(Integer curtida) {
        this.curtida = curtida;
    }

    public Integer getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Integer usuarioId) {
        this.usuarioId = usuarioId;
    }
}

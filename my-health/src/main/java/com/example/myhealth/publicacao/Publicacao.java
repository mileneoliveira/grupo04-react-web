package com.example.myhealth.publicacao;

import com.example.myhealth.usuario.Usuario;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
public class Publicacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_publicacao")
    private Integer idPublicacao;

    @Size(max = 255)
    private String descricao;

    @PositiveOrZero
    private Integer curtida = 0;

    @Column(name = "url_imagem")
    private String urlImagem;

    @Column(name = "data_publicacao")
    private LocalDateTime dataPublicacao;

    @JoinColumn(name = "usuario_id")
    @ManyToOne
    private Usuario usuario;

    public Publicacao() {
        this.dataPublicacao = LocalDateTime.now();
    }

    public Integer getIdPublicacao() {
        return idPublicacao;
    }

    public void setIdPublicacao(Integer idPublicacao) {
        this.idPublicacao = idPublicacao;
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

    public String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public LocalDateTime getDataPublicacao() {
        return dataPublicacao;
    }

    public void setDataPublicacao(LocalDateTime dataPublicacao) {
        this.dataPublicacao = dataPublicacao;
    }
}

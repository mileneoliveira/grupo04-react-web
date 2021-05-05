package com.example.myhealth.refeicao;

import com.example.myhealth.usuario.Usuario;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
public class Refeicao {

    @Id
    @Column(name = "id_refeicao")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idRefeicao;

    @NotBlank
    @NotNull
    @Size(min = 1, max = 45)
    private String tipo;

    @NotNull
    @Column(name = "data_refeicao")
    private LocalDateTime dataRefeicao;

    @JoinColumn(name = "usuario_id")
    @ManyToOne
    private Usuario usuario;


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

    public LocalDateTime getDataRefeicao() {
        return dataRefeicao;
    }

    public void setDataRefeicao(LocalDateTime dataRefeicao) {
        this.dataRefeicao = dataRefeicao;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}

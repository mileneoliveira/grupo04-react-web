package com.example.myhealth.refeicao.response;

import com.example.myhealth.refeicao.Refeicao;

import java.time.LocalDateTime;

public class RefeicoesResponse {

    private Integer idRefeicao;
    private String tipo;
    private LocalDateTime dataRefeicao;
    private Integer usuarioId;
    private String nomeUsuario;

    public RefeicoesResponse(Refeicao entidade) {
        this.idRefeicao = entidade.getIdRefeicao();
        this.tipo = entidade.getTipo();
        this.dataRefeicao = entidade.getDataRefeicao();
        this.usuarioId = entidade.getUsuario().getIdUsuario();
        this.nomeUsuario = entidade.getUsuario().getNome();
    }

    public Integer getIdRefeicao() {
        return idRefeicao;
    }

    public String getTipo() {
        return tipo;
    }

    public LocalDateTime getDataRefeicao() {
        return dataRefeicao;
    }

    public Integer getUsuarioId() {
        return usuarioId;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }
}

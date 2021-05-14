package com.example.myhealth.usuario.request;

public class AtualizarUserPesoDto {

    private Integer usuarioId;
    private Double peso;

    public AtualizarUserPesoDto(Integer usuarioId, Double peso) {
        this.usuarioId = usuarioId;
        this.peso = peso;
    }

    public Integer getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Integer usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

}

package com.example.myhealth.usuario;

public class Usuario {

    private String nome;
    private String senha;
    private Boolean autenticado;


    public Usuario(String nome, String senha) {
        this.nome = nome;
        this.senha = senha;
        this.autenticado = false;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Boolean getAutenticado() {
        return autenticado;
    }

    public void setAutenticado(Boolean autenticado) {
        this.autenticado = autenticado;
    }
}

package com.example.myhealth.usuario;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Usuario {

    @Id
    @Column(name = "id_usuario")
    private Integer idUsuario;
    private String nome;
    private String senha;
    private String email;
    private Double peso;
    private Double altura;
    @Column(name = "data_nascimento")
    private LocalDate dataNascimento;
    @Column(name = "objetivo_id")
    private Integer objetivoId;

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setId(Integer idUsuario) {
        this.idUsuario = idUsuario;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

    public Double getAltura() {
        return altura;
    }

    public void setAltura(Double altura) {
        this.altura = altura;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public Integer getObjetivoId() {
        return objetivoId;
    }

    public void setObjetivoId(Integer objetivoId) {
        this.objetivoId = objetivoId;
    }
}

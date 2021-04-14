package com.example.myhealth.usuario.response;

import com.example.myhealth.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;

public class UsuarioLogin {

    private String email;
    private String senha;

    private boolean logado;

    public UsuarioLogin(Usuario usuario) {
        this.email = usuario.getEmail();
        this.senha = usuario.getSenha();
        this.logado = false;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public boolean isLogado() {
        return logado;
    }

    public void setLogado(boolean logado) {
        this.logado = logado;
    }
}

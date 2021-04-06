package com.example.myhealth.usuario;


import com.example.myhealth.usuario.Usuario;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    List<Usuario> usuarios = new ArrayList<Usuario>();
    Usuario usuarioLogado;

    public UsuarioController() {
        usuarios.add(new Usuario("marcelo", "marcelo1"));
        usuarios.add(new Usuario("Thiago","socio1"));
        usuarios.add(new Usuario("yoshi","123"));
        usuarios.add(new Usuario("Alex","123"));
        usuarios.add(new Usuario("Vera","123"));
        usuarios.add(new Usuario("Thiago", "socio123"));
        usuarios.add(new Usuario("Yoshi", "123"));
        usuarios.add(new Usuario("Alex", "123"));
    }
    

    @GetMapping
    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    @PostMapping("/cadastrar")
    public String cadastro(@RequestBody Usuario a) {
        usuarios.add(a);
        return "Usuário cadastrado com sucesso";
    }

    @GetMapping("/login")
    public String login(@RequestBody Usuario usuario) {
        String retorno = "";

        for (Usuario a : usuarios) {
            if (a.getAutenticado().equals(false) && a.getNome().equals(usuario.getNome()) && a.getSenha().equals(usuario.getSenha())) {
                a.setAutenticado(true);
                usuarioLogado = a;
                retorno = "Usuário autenticado com sucesso";
                break;
            } else if (a.getAutenticado().equals(true) && a.getNome().equals(usuario.getNome()) && a.getSenha().equals(usuario.getSenha())) {
                retorno = "Usuario ja autenticado";
                break;

            } else {
                retorno = "Usuario ou senha incorreto";
            }
        }
        return retorno;
    }


    @GetMapping("/logout")
    public String logout() {
        String retorno = "";

        if (usuarioLogado != null) {
            usuarioLogado.setAutenticado(false);
            usuarioLogado = null;
            retorno = "Usuário deslogado com sucesso";
        } else {
            retorno = "Nenhum usuário está logado";
        }
        return retorno;
    }
}
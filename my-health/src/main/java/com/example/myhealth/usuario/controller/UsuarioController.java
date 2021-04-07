package com.example.myhealth.usuario.controller;


import com.example.myhealth.usuario.Usuario;
import com.example.myhealth.usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {


    @Autowired
    private UsuarioRepository repository;

//    @GetMapping
//    public List<Usuario> getUsuarios() {
//        return usuarios;
//    }
//
//    @PostMapping("/cadastrar")
//    public String cadastro(@RequestBody Usuario a) {
//        usuarios.add(a);
//        return "Usuário cadastrado com sucesso";
//    }
//
//    @GetMapping("/login")
//    public String login(@RequestBody Usuario usuario) {
//        String retorno = "";
//
//        for (Usuario a : usuarios) {
//            if (a.getAutenticado().equals(false) && a.getNome().equals(usuario.getNome()) && a.getSenha().equals(usuario.getSenha())) {
//                a.setAutenticado(true);
//                usuarioLogado = a;
//                retorno = "Usuário autenticado com sucesso";
//                break;
//            } else if (a.getAutenticado().equals(true) && a.getNome().equals(usuario.getNome()) && a.getSenha().equals(usuario.getSenha())) {
//                retorno = "Usuario ja autenticado";
//                break;
//
//            } else {
//                retorno = "Usuario ou senha incorreto";
//            }
//        }
//        return retorno;
//    }
//
//
//    @GetMapping("/logout")
//    public String logout() {
//        String retorno = "";
//
//        if (usuarioLogado != null) {
//            usuarioLogado.setAutenticado(false);
//            usuarioLogado = null;
//            retorno = "Usuário deslogado com sucesso";
//        } else {
//            retorno = "Nenhum usuário está logado";
//        }
//        return retorno;
//    }
}
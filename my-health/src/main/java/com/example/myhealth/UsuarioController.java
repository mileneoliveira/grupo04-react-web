package com.example.myhealth;


import org.springframework.web.bind.annotation.*;

import javax.transaction.xa.XAException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    List<Usuario> usuarios = new ArrayList<Usuario>();

    public UsuarioController() {
        usuarios.add(new Usuario(1, "marcelo", "marcelo1"));
        usuarios.add(new Usuario(2, "marcelow", "123"));
        usuarios.add(new Usuario(3, "marcelo2", "123"));
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

    @PutMapping("/login/{nome}/{senha}")
    public String login(@PathVariable String nome, @PathVariable String senha) {
        String retorno = "Usuário não encontrado";

        for (Usuario a : usuarios) {
            if (a.getNome().equals(nome) && a.getSenha().equals(senha)) {
                a.setAutenticado(true);
                retorno = "Usuário autenticado com sucesso";
            }
        }
        return retorno;
    }

    @PutMapping("/logout/{nome}")
    public String logout(@PathVariable String nome){
        String retorno = "Usuário não está logado";

        for (Usuario a : usuarios){
            if (a.getNome().equals(nome) && a.getAutenticado().equals(true)){
                a.setAutenticado(false);
                retorno = "Logout concluido, você está offline";
            }
        }
        return retorno;
    }
}
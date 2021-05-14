package com.example.myhealth.usuario.controller;


import com.example.myhealth.usuario.Usuario;
import com.example.myhealth.usuario.request.AtualizarUserPesoDto;
import com.example.myhealth.usuario.request.UserDto;
import com.example.myhealth.usuario.response.UsuarioLogin;
import com.example.myhealth.usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @GetMapping
    public ResponseEntity getUsuario(){
        List<Usuario> users = repository.findAll();

        if (!users.isEmpty()){
            return ResponseEntity.ok(users);
        }
        else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping()
    public ResponseEntity postCadastrarUsuario(@RequestBody @Valid Usuario usuario) {
        repository.save(usuario);
        return ResponseEntity.status(201).build();
    }

    @DeleteMapping()
    public ResponseEntity deleteUsuarioById(@RequestParam Integer id) {
        if (repository.existsById(id)){
            repository.deleteById(id);
            return ResponseEntity.status(200).build();
        }
        else{
            return ResponseEntity.status(404).build();
        }

    }

    @PutMapping()
    public ResponseEntity alterUsuario(@RequestBody @Valid Usuario usuario, @RequestParam int id) {
        if (repository.existsById(id)){
            usuario.setId(id);
            repository.save(usuario);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }

    @PostMapping("/login")
    public ResponseEntity login (@RequestBody UserDto usuario){
        List<UsuarioLogin> users = repository.pesquisarLogin(usuario.getEmail(), usuario.getSenha());

        if (!users.isEmpty()){
            UsuarioLogin usuarioLogin = users.get(0);
            if(usuarioLogin.getAutenticado()){
                return ResponseEntity.status(418).build();
            }

            Usuario userLogado = repository.findByEmailAndSenha(usuarioLogin.getEmail(), usuarioLogin.getSenha());
            userLogado.setAutenticado(true);
            repository.save(userLogado);

            return ResponseEntity.status(200).body(userLogado);
        }
        return ResponseEntity.status(404).build();
    }

    @PostMapping("/logout")
    public ResponseEntity logout(@RequestBody UserDto usuario){
        List<UsuarioLogin> users = repository.pesquisarLogin(usuario.getEmail(), usuario.getSenha());

        if (!users.isEmpty()){
            UsuarioLogin usuarioLogin = users.get(0);
            if(!usuarioLogin.getAutenticado()){
                return ResponseEntity.status(418).build();
            }

            Usuario userLogado = repository.findByEmailAndSenha(usuarioLogin.getEmail(), usuarioLogin.getSenha());
            userLogado.setAutenticado(false);
            repository.save(userLogado);

            return ResponseEntity.status(200).body(userLogado);
        }
        return ResponseEntity.status(404).build();
    }

//    @PutMapping("/atualizar")
//    public ResponseEntity atualizar(@RequestBody AtualizarUserPesoDto usuario){
//        AtualizarUserPesoDto user = repository.pesquisarPorId(usuario.getUsuarioId());
//        if (user != null){
//            Usuario usera = repository.findById(usuario.getUsuarioId());
//            usera.setPeso(usuario.getPeso());
//            repository.save(usuario1);
//            return ResponseEntity.status(200).build();
//        }
//        return ResponseEntity.status(404).build();
//    }
}
package com.example.myhealth.usuario.controller;


import com.example.myhealth.usuario.Usuario;
import com.example.myhealth.usuario.request.UserDto;
import com.example.myhealth.usuario.response.UsuarioLogin;
import com.example.myhealth.usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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
    ResponseEntity alterUsuario(@RequestBody @Valid Usuario usuario, @RequestParam int id) {
        if (repository.existsById(id)){
            usuario.setId(id);
            repository.save(usuario);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }


//    @GetMapping("/login")
//    public ResponseEntity login(@RequestBody UserDto usuarioRequest){
//
//        List<UsuarioLogin> usuarios = repository.findAllSimples();
//
//        for (UsuarioLogin usuario : usuarios){
//            if (usuario.getEmail().equals(usuarioRequest.getEmail())
//                    && usuario.getSenha().equals(usuarioRequest.getSenha())
//                    && !usuario.isLogado()){
//
//               usuario.setLogado(true);
//               return ResponseEntity.status(200).body(usuario);
//
//            }
//            return ResponseEntity.status(202).build();
//        }
//        return ResponseEntity.status(404).build();
//    }
}
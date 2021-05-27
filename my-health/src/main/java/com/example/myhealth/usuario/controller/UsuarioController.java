package com.example.myhealth.usuario.controller;


import com.example.myhealth.publicacao.Publicacao;
import com.example.myhealth.publicacao.response.PublicacaoResponse;
import com.example.myhealth.usuario.Usuario;
import com.example.myhealth.usuario.repository.UsuarioRepository;
import com.example.myhealth.usuario.request.UserDto;
import com.example.myhealth.usuario.response.UsuarioEdit;
import com.example.myhealth.usuario.response.UsuarioLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public ResponseEntity getUsuario(@RequestParam Integer idUsuario){
        List<Usuario> usuario = repository.findAllById(Collections.singleton(idUsuario));
        if (usuario.isEmpty()){
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(201).body(usuario.stream().map(UsuarioEdit::new).collect(Collectors.toList()));
    }

    @CrossOrigin(origins = "http://localhost:3000")
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

    @PostMapping("/cadastrarImagem")
    public ResponseEntity postCadastrarImagem(@RequestParam MultipartFile arquivo, @RequestParam int idUsuario) throws IOException {
        if (arquivo.isEmpty()){
            return ResponseEntity.status(400).body("Arquivo não enviado");
        }
        Usuario usuario = repository.getOne(idUsuario);
        usuario.setAvatar(arquivo.getBytes());
        repository.save(usuario);
        return ResponseEntity.status(201).build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/imagem/{id}")
    public ResponseEntity getProdutoImagem2(@PathVariable int id){
        Usuario imagemOptional = repository.getOne(id);

        byte[] imagem = imagemOptional.getAvatar();

        if(imagemOptional != null){
            return ResponseEntity.status(200).header("content-type", "image/jpeg").body(imagem);
        }
        return ResponseEntity.status(404).build();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping()
    public ResponseEntity alterUsuario(@RequestBody @Valid Usuario usuario, @RequestParam int id) {
        if (repository.existsById(id)){
            usuario.setId(id);
            repository.save(usuario);
            return ResponseEntity.status(200).body(usuario);
        }
        return ResponseEntity.status(404).build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity login (@RequestBody UserDto usuario){
        List<UsuarioLogin> users = repository.pesquisarLogin(usuario.getEmail(), usuario.getSenha());

        if (!users.isEmpty()){
            UsuarioLogin usuarioLogin = users.get(0);

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

            Usuario userLogado = repository.findByEmailAndSenha(usuarioLogin.getEmail(), usuarioLogin.getSenha());
            userLogado.setAutenticado(false);
            repository.save(userLogado);

            return ResponseEntity.status(200).body(userLogado);
        }
        return ResponseEntity.status(404).build();

    }

}
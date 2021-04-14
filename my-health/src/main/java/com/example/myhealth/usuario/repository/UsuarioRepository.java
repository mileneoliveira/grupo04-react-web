package com.example.myhealth.usuario.repository;

import com.example.myhealth.usuario.Usuario;
import com.example.myhealth.usuario.response.UsuarioLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

//    @Query("Select u from Usuario u")
//    List<UsuarioLogin> findAllSimples();
}

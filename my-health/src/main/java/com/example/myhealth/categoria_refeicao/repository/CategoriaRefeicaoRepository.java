package com.example.myhealth.categoria_refeicao.repository;

import com.example.myhealth.categoria.Categoria;
import com.example.myhealth.categoria_refeicao.CategoriaRefeicao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoriaRefeicaoRepository extends JpaRepository<CategoriaRefeicao, Integer> {

    List<CategoriaRefeicao> findByNomeContains(String nome);

    List<CategoriaRefeicao> findByIdCategoriaRefeicao(Integer id);

}

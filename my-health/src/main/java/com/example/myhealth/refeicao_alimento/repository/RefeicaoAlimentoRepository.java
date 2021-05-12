package com.example.myhealth.refeicao_alimento.repository;

import com.example.myhealth.dashboard.Gramas;
import com.example.myhealth.refeicao_alimento.RefeicaoAlimento;
import com.example.myhealth.refeicao_alimento.RefeicaoAlimentoId;
import com.example.myhealth.usuario.response.UsuarioLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RefeicaoAlimentoRepository extends JpaRepository<RefeicaoAlimento, RefeicaoAlimentoId> {

//    @Query(value = "SELECT sum(proteina) FROM Refeicao_alimento ra, Refeicao r, Alimento a where r.id_refeicao = 3 and ra.id_alimento = a.id_alimento", nativeQuery = true)
//    Double somaProteina();
//
//    @Query(value = "SELECT sum(colesterol) FROM Refeicao_alimento ra, Refeicao r, Alimento a where r.id_refeicao = 3 and ra.id_alimento = a.id_alimento", nativeQuery = true)
//    Double somaColesterol();
//
//    @Query(value = "SELECT sum(carboidrato) FROM Refeicao_alimento ra, Refeicao r, Alimento a where r.id_refeicao = 3 and ra.id_alimento = a.id_alimento", nativeQuery = true)
//    Double somaCarboidrato();
//
//    @Query(value = "SELECT sum(fibra) FROM Refeicao_alimento ra, Refeicao r, Alimento a where r.id_refeicao = 3 and ra.id_alimento = a.id_alimento", nativeQuery = true)
//    Double somaFibra();
//
//    @Query(value = "SELECT sum(calcio) FROM Refeicao_alimento ra, Refeicao r, Alimento a where r.id_refeicao = 3 and ra.id_alimento = a.id_alimento", nativeQuery = true)
//    Double somaCalcio();
//
//    @Query(value = "SELECT sum(ferro) FROM Refeicao_alimento ra, Refeicao r, Alimento a where r.id_refeicao = 3 and ra.id_alimento = a.id_alimento", nativeQuery = true)
//    Double somaFerro();
//
//    @Query(value = "SELECT sum(sodio) FROM Refeicao_alimento ra, Refeicao r, Alimento a where r.id_refeicao = 3 and ra.id_alimento = a.id_alimento", nativeQuery = true)
//    Double somaSodio();
//
//    @Query(value = "SELECT sum(calorias) FROM Refeicao_alimento ra, Refeicao r, Alimento a where r.id_refeicao = 3 and ra.id_alimento = a.id_alimento", nativeQuery = true)
//    Double somaCalorias();

}
package com.example.myhealth.refeicao_alimento.repository;

import com.example.myhealth.refeicao_alimento.RefeicaoAlimento;
import com.example.myhealth.refeicao_alimento.RefeicaoAlimentoId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RefeicaoAlimentoRepository extends JpaRepository<RefeicaoAlimento, RefeicaoAlimentoId> {

    @Query(value = "SELECT sum(proteina) FROM Refeicao_alimento ra, Refeicao r, Alimento a where ra.id_refeicao = ?1 and r.id_refeicao = ra.id_refeicao and ra.id_alimento = a.id_alimento", nativeQuery = true)
    Double somaProteina(Integer idRefeicao);

    @Query(value = "SELECT sum(colesterol) FROM Refeicao_alimento ra, Refeicao r, Alimento a where ra.id_refeicao = ?1 and r.id_refeicao = ra.id_refeicao and ra.id_alimento = a.id_alimento", nativeQuery = true)
    Double somaColesterol(Integer idRefeicao);

    @Query(value = "SELECT sum(carboidrato) FROM Refeicao_alimento ra, Refeicao r, Alimento a where ra.id_refeicao = ?1 and r.id_refeicao = ra.id_refeicao and ra.id_alimento = a.id_alimento", nativeQuery = true)
    Double somaCarboidrato(Integer idRefeicao);

    @Query(value = "SELECT sum(fibra) FROM Refeicao_alimento ra, Refeicao r, Alimento a where ra.id_refeicao = ?1 and r.id_refeicao = ra.id_refeicao and ra.id_alimento = a.id_alimento", nativeQuery = true)
    Double somaFibra(Integer idRefeicao);

    @Query(value = "SELECT sum(calcio) FROM Refeicao_alimento ra, Refeicao r, Alimento a where ra.id_refeicao = ?1 and r.id_refeicao = ra.id_refeicao and ra.id_alimento = a.id_alimento", nativeQuery = true)
    Double somaCalcio(Integer idRefeicao);

    @Query(value = "SELECT sum(ferro) FROM Refeicao_alimento ra, Refeicao r, Alimento a where ra.id_refeicao = ?1 and r.id_refeicao = ra.id_refeicao and ra.id_alimento = a.id_alimento", nativeQuery = true)
    Double somaFerro(Integer idRefeicao);

    @Query(value = "SELECT sum(sodio) FROM Refeicao_alimento ra, Refeicao r, Alimento a where ra.id_refeicao = ?1 and r.id_refeicao = ra.id_refeicao and ra.id_alimento = a.id_alimento", nativeQuery = true)
    Double somaSodio(Integer idRefeicao);

    @Query(value = "SELECT sum(calorias) FROM Refeicao_alimento ra, Refeicao r, Alimento a where ra.id_refeicao = ?1 and r.id_refeicao = ra.id_refeicao and ra.id_alimento = a.id_alimento", nativeQuery = true)
    Double somaCalorias(Integer idRefeicao);


//    @Query(value = "SELECT sum(proteina), sum(colesterol), sum(carboidrato), sum(fibra), sum(calcio), sum(ferro), sum(sodio), sum(calorias)" +
//            " FROM Refeicao_alimento ra, Refeicao r, Alimento a where r.id_refeicao = 3 and ra.id_alimento = a.id_alimento", nativeQuery = true)
//    List<Object[]> pegandoSoma();

}
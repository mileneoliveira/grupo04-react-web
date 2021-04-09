package com.example.myhealth.refeicao_alimento.repository;

import com.example.myhealth.refeicao_alimento.RefeicaoAlimento;
import com.example.myhealth.refeicao_alimento.RefeicaoAlimentoId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RefeicaoAlimentoRepository extends JpaRepository<RefeicaoAlimento, RefeicaoAlimentoId> {

}

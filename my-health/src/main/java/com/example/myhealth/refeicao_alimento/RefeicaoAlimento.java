package com.example.myhealth.refeicao_alimento;

import javax.persistence.*;

@Entity
public class RefeicaoAlimento {

    @Id
    @Column(name = "id_refeicao")
    private Integer idRefeicao;
    @Id
    @Column(name = "id_alimento")
    private Integer idAlimento;

    public Integer getIdRefeicao() {
        return idRefeicao;
    }

    public void setIdRefeicao(Integer idRefeicao) {
        this.idRefeicao = idRefeicao;
    }

    public Integer getIdAlimento() {
        return idAlimento;
    }

    public void setIdAlimento(Integer idAlimento) {
        this.idAlimento = idAlimento;
    }
}

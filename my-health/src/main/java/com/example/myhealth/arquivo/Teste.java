package com.example.myhealth.arquivo;

import com.example.myhealth.alimento.Alimento;

import java.util.Scanner;

 public class Teste {
    public static void main(String[] args) {

        //Lista
        ListaObj lista = new ListaObj(10);

        //Atributos
        Integer id,opcao;
        String nome;
        Double porcao;
        Double calorias;
        Double colesterol;
        Double carboidrato;
        Double fibra;
        Double calcio;
        Double ferro;
        Double sodio;
        Double proteina;

        Boolean fim = false;


        Scanner scan = new Scanner(System.in);

        while (!fim){
            System.out.println("\n1. Adicionar um alimento");
            System.out.println("2. Exibir Lista");
            System.out.println("3. Gravar arquivo CSV");
            System.out.println("4. Ler arquivo CSV");
            System.out.println("5. Gravar arquivo txt");
            System.out.println("6. Atualizar categoria de uma obra");
            System.out.println("7. Fim");


            System.out.println("\nOpção : ");
            opcao = scan.nextInt();

            switch (opcao){
                case 1:
                    //adicionando obras a lista
                    System.out.println("Id do Alimento :");
                    id = scan.nextInt();
                    System.out.println("Nome do Alimento :");
                    nome = scan.next();
                    System.out.println("Quantidade de porção :");
                    porcao = scan.nextDouble();
                    System.out.println("Quantidade de calorias :");
                    calorias = scan.nextDouble();
                    System.out.println("Quantidade de colesterol :");
                    colesterol = scan.nextDouble();
                    System.out.println("Quantidade de carboidrato:");
                    carboidrato = scan.nextDouble();
                    System.out.println("Quantidade de fibra:");
                    fibra = scan.nextDouble();
                    System.out.println("Quantidade de calcio:");
                    calcio = scan.nextDouble();
                    System.out.println("Quantidade de ferro:");
                    ferro = scan.nextDouble();
                    System.out.println("Quantidade de sodio:");
                    sodio = scan.nextDouble();
                    System.out.println("Quantidade de proteina:");
                    proteina = scan.nextDouble();

                    Alimento a = new Alimento(id,nome,porcao,calorias,colesterol,carboidrato,fibra,calcio,ferro,sodio,proteina);
                    lista.adiciona(a);
                    break;
                case 2:
                    //exibindo lista de obras cadastradas
                    if (lista.getTamanho() > 0) {
                        System.out.println("\nLista de alimentos cadastrados :");
                        lista.exibe();
                    } else {
                        System.out.println("Lista não possui alimentos cadastradas");
                    }
                    break;
                case 3:
                    //Gravando arquivo CSV
                    if(lista.getTamanho()==0){
                        System.out.println("Lista está vazia, não ha nada a gravar");
                    } else {
                        GravaLeArquivo.gravaLista(lista,true,"alimentos");
                        System.out.println("Arquivo csv gravado...");
                    }
                    break;
                case 4:
                    //Lendo arquivo CSV
                    GravaLeArquivo.leExibeArquivo(true,"alimentos");
                    break;

                case 5:
                    //arquivo txt
                    GravaLeArquivo.gravaLista(lista,false,"alimentos");
                    break;

                case 6:
                    fim = true;
                    break;
                default:
                    System.out.println("Opção inválida !");
                    break;
            }

        }

    }
}

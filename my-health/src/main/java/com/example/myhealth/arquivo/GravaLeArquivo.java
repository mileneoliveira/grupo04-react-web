package com.example.myhealth.arquivo;

import com.example.myhealth.alimento.Alimento;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;

public class GravaLeArquivo {
    public static void gravaRegistro (String nomeArq, String registro) {
        BufferedWriter saida = null;
        try {
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        } catch (IOException e) {
            System.err.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
        }

        try {
            saida.append(registro + "\n");
            saida.close();

        } catch (IOException e) {
            System.err.printf("Erro ao gravar arquivo: %s.\n", e.getMessage());
        }
    }
    public static void gravaLista(ListaObj<Alimento> lista, boolean isCSV, String nomeArquivo) {

        FileWriter arq = null;
        Formatter saida = null;
        boolean deuRuim = false;

        if (isCSV) {
            nomeArquivo += ".csv";
        }
        else {
            nomeArquivo += ".txt";
        }
        try {
            arq = new FileWriter(nomeArquivo, true);
            saida = new Formatter(arq);
        }
        catch (IOException erro) {
            System.err.println("Erro ao abrir arquivo");
            System.exit(1);
        }
        try {

            for (int i=0; i< lista.getTamanho(); i++) {
                Alimento alimento = lista.getElemento(i);
                if (isCSV) {
                    saida.format("%4d;%45s;%.2f;%.2f;%.2f;%.2f;%.2f;%.2f;%.2f;%.2f;%.2f;%3d%n",alimento.getIdAlimento(),
                            alimento.getNome(),
                            alimento.getPorcao(),
                            alimento.getCalorias(),
                            alimento.getColesterol(),
                            alimento.getCarboidrato(),
                            alimento.getFibra(),
                            alimento.getCalcio(),
                            alimento.getFerro(),
                            alimento.getSodio(),
                            alimento.getProteina());
                            alimento.getCategoriaId();
                }
                else {

                    String nomeArq = "ArquivoAlimento.txt";
                    String header = "";
                    String corpo = "";
                    String trailer = "";
                    int contRegDados = 0;

                    // Monta o registro header
                    Date dataDeHoje = new Date();
                    SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

                    header += "00ALIMENTO20201";
                    header += formatter.format(dataDeHoje);
                    header += "01";

                    gravaRegistro(nomeArq, header);

                    corpo += "02";
                    corpo += String.format("%3d", alimento.getIdAlimento());
                    corpo += String.format("%-45s", alimento.getNome());
                    corpo += String.format("%.2f", alimento.getPorcao());
                    corpo += String.format("%.2f", alimento.getCalorias());
                    corpo += String.format("%.2f", alimento.getColesterol());
                    corpo += String.format("%.2f", alimento.getCarboidrato());
                    corpo += String.format("%.2f", alimento.getFibra());
                    corpo += String.format("%.2f", alimento.getCalcio());
                    corpo += String.format("%.2f", alimento.getFerro());
                    corpo += String.format("%.2f", alimento.getSodio());
                    corpo += String.format("%.2f", alimento.getProteina());
                    corpo += String.format("%3d", alimento.getCategoriaId());

                    contRegDados++;
                    gravaRegistro(nomeArq,corpo);

                    // monta o trailer
                    trailer += "01";
                    trailer += String.format("%010d", contRegDados);
                    gravaRegistro(nomeArq,trailer);
                }

            }

        }
        catch (FormatterClosedException erro) {
            System.err.println("Erro ao gravar no arquivo");
            deuRuim= true;
        }
        finally {
            saida.close();
            try {
                arq.close();
            }
            catch (IOException erro) {
                System.err.println("Erro ao fechar arquivo.");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }
    }
    public static void leExibeArquivo(boolean isCSV, String nomeArquivo) {
        FileReader arq= null;		// objeto FileReader - representa o arquivo a ser lido
        Scanner entrada = null;		// objeto Scanner - para ler do arquivo
        boolean deuRuim= false;		// indica se deu erro

        if (isCSV) {
            nomeArquivo += ".csv";	// nome do arquivo, se for CSV
        }
        else {
            nomeArquivo += ".txt";	// nome do arquivo, se for TXT
        }

        // Abre o arquivo para leitura
        try {
            arq = new FileReader(nomeArquivo);
            if (isCSV) {
                // se o arquivo for CSV, usa como delimitador de campo o ';' e o fim de registro
                entrada = new Scanner(arq).useDelimiter(";|\\r\\n");
            }
            else {
                // se o arquivo for TXT, usa como delimitador de campo o ' ' e o fim de registro
                entrada = new Scanner(arq);
            }
        }
        catch (FileNotFoundException erro) {
            System.err.println("Arquivo não encontrado");
            System.exit(1);
        }


        try {

            System.out.printf("%4s%-45s%8s%10s%12s%13s%7s%8s%8s%8s%10s\n","ID","NOME",
                    "PORÇÃO","CALORIAS","COLESTEROL","CARBOIDRATO","FIBRA","CALCIO",
                    "FERRO","SODIO","PROTEINA");

            while (entrada.hasNext()) {
                Integer id = entrada.nextInt();
                String nome = entrada.next();
                Double porcao = entrada.nextDouble();
                Double calorias = entrada.nextDouble();
                Double colesterol = entrada.nextDouble();
                Double carboidrato = entrada.nextDouble();
                Double fibra = entrada.nextDouble();
                Double calcio = entrada.nextDouble();
                Double ferro = entrada.nextDouble();
                Double sodio = entrada.nextDouble();
                Double proteina = entrada.nextDouble();

                System.out.printf("%4s%-45s%8s%10s%12s%13s%7s%8s%8s%8s%10s\n",id,nome,porcao,calorias,
                        colesterol,carboidrato,fibra,calcio,ferro,sodio,proteina);
            }
        }
        catch (NoSuchElementException erro)
        {
            System.err.println("Arquivo com problemas.");
            deuRuim = true;
        }
        catch (IllegalStateException erro)
        {
            System.err.println("Erro na leitura do arquivo.");
            deuRuim = true;
        }
        finally {
            entrada.close();
            try {
                arq.close();
            }
            catch (IOException erro) {
                System.err.println("Erro ao fechar arquivo.");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }
    }
}

package com.sara.agendaestudos.controller;

import java.util.HashMap;
import java.util.Map;

public class ExemploHashMap  {

    public static void main(String[] args) {
        //Criando um objeto da classe HashMap   que implementa a interface Map

        Map<String, String> usandoHashMap = new HashMap<>();

        usandoHashMap.put("Gatos" ,"1");
        usandoHashMap.put("Cachorros" ,"2");
        usandoHashMap.put("Peixes" ,"3");


        int valor = Integer.parseInt(usandoHashMap.get("Cachorros"));
        System.out.println("O valor associado à chave 'cachorros' é: " + valor);

        for (String chave : usandoHashMap.keySet()) {
            System.out.println("Chave: " + chave);
            
            System.out.println("Valor: " + usandoHashMap.get(chave));
        }

    }




}

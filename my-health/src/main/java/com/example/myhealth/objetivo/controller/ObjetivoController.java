package com.example.myhealth.objetivo.controller;

import com.example.myhealth.objetivo.repository.ObjetivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/objetivos")
public class ObjetivoController {

    @Autowired
    private ObjetivoRepository repository;


}

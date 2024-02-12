package com.spring.boot.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student mariam = new Student(
                    "Mariam",
                    "mariam.jamal@gmail.com"
            );

            Student alex = new Student(
                    "Alex",
                    "alex@gmail.com"
            );

            repository.saveAll(
                    List.of(mariam, alex)
            );
        };
    }

}

package com.auth.authproj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class AuthProjApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthProjApplication.class, args);
    }

}

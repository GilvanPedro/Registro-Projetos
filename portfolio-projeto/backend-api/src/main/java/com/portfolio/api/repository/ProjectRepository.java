package com.portfolio.api.repository;

import com.portfolio.api.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    // CRUD basico ja vem pronto por causa do JpaRepository.
    // Se precisar de buscas por titulo, data etc, e so declarar o metodo aqui
    // que o Spring Data monta a query sozinho.
}

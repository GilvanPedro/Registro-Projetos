package com.portfolio.api.controller;

import com.portfolio.api.model.Project;
import com.portfolio.api.repository.ProjectRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "${app.cors.allowed-origin}")
public class ProjectController {

    private final ProjectRepository repository;

    public ProjectController(ProjectRepository repository) {
        this.repository = repository;
    }

    // GET /api/projects -> lista tudo, usado na home (SSR)
    @GetMapping
    public List<Project> listAll() {
        return repository.findAll();
    }

    // GET /api/projects/{id} -> usado na pagina /projeto/[id]
    @GetMapping("/{id}")
    public ResponseEntity<Project> findById(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST /api/projects -> criar novo projeto (area admin)
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Project create(@Valid @RequestBody Project project) {
        project.setId(null); // garante que e sempre um insert
        return repository.save(project);
    }

    // PUT /api/projects/{id} -> editar projeto existente (area admin)
    @PutMapping("/{id}")
    public ResponseEntity<Project> update(@PathVariable Long id, @Valid @RequestBody Project updated) {
        return repository.findById(id)
                .map(existing -> {
                    existing.setTitle(updated.getTitle());
                    existing.setSummary(updated.getSummary());
                    existing.setFullContent(updated.getFullContent());
                    existing.setRepoUrl(updated.getRepoUrl());
                    existing.setDocsUrl(updated.getDocsUrl());
                    return ResponseEntity.ok(repository.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE /api/projects/{id} -> remover projeto (area admin)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

package com.portfolio.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String title;

    @NotBlank
    @Column(nullable = false, length = 500)
    private String summary;

    // Conteudo completo em HTML/Rich Text — por isso o Lob, para nao limitar o tamanho
    @Lob
    @Column(name = "full_content", columnDefinition = "TEXT")
    private String fullContent;

    @Column(name = "repo_url")
    private String repoUrl;

    @Column(name = "docs_url")
    private String docsUrl;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    public Project() {
    }

    public Project(String title, String summary, String fullContent, String repoUrl, String docsUrl) {
        this.title = title;
        this.summary = summary;
        this.fullContent = fullContent;
        this.repoUrl = repoUrl;
        this.docsUrl = docsUrl;
    }

    // ===== Getters e Setters =====

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getFullContent() {
        return fullContent;
    }

    public void setFullContent(String fullContent) {
        this.fullContent = fullContent;
    }

    public String getRepoUrl() {
        return repoUrl;
    }

    public void setRepoUrl(String repoUrl) {
        this.repoUrl = repoUrl;
    }

    public String getDocsUrl() {
        return docsUrl;
    }

    public void setDocsUrl(String docsUrl) {
        this.docsUrl = docsUrl;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}

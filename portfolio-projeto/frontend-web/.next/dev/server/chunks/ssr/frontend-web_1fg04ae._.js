module.exports = [
"[project]/frontend-web/app/admin/AdminPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/lib/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const EMPTY_FORM = {
    title: "",
    summary: "",
    fullContent: "",
    repoUrl: "",
    docsUrl: ""
};
function AdminPanel({ initialProjects }) {
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialProjects);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(EMPTY_FORM);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (editingId) {
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProject"])(editingId, form);
            setProjects(projects.map((p)=>p.id === editingId ? updated : p));
        } else {
            const created = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProject"])(form);
            setProjects([
                created,
                ...projects
            ]);
        }
        setForm(EMPTY_FORM);
        setEditingId(null);
    }
    function handleEdit(project) {
        setEditingId(project.id);
        setForm({
            title: project.title,
            summary: project.summary,
            fullContent: project.fullContent,
            repoUrl: project.repoUrl,
            docsUrl: project.docsUrl
        });
    }
    async function handleDelete(id) {
        if (!confirm("Remover este projeto?")) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteProject"])(id);
        setProjects(projects.filter((p)=>p.id !== id));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "bg-surface p-6 rounded-xl border border-white/10 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-lg",
                        children: editingId ? "Editar projeto" : "Novo projeto"
                    }, void 0, false, {
                        fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "title",
                        placeholder: "Título",
                        value: form.title,
                        onChange: handleChange,
                        required: true,
                        className: "w-full px-3 py-2 rounded-lg bg-background border border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "summary",
                        placeholder: "Resumo (aparece no card)",
                        value: form.summary,
                        onChange: handleChange,
                        required: true,
                        rows: 2,
                        className: "w-full px-3 py-2 rounded-lg bg-background border border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "fullContent",
                        placeholder: "Conteúdo completo (HTML)",
                        value: form.fullContent,
                        onChange: handleChange,
                        rows: 8,
                        className: "w-full px-3 py-2 rounded-lg bg-background border border-white/10 font-mono text-sm"
                    }, void 0, false, {
                        fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "repoUrl",
                        placeholder: "URL do repositório (GitHub)",
                        value: form.repoUrl,
                        onChange: handleChange,
                        className: "w-full px-3 py-2 rounded-lg bg-background border border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "docsUrl",
                        placeholder: "URL da documentação",
                        value: form.docsUrl,
                        onChange: handleChange,
                        className: "w-full px-3 py-2 rounded-lg bg-background border border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-5 py-2 rounded-lg bg-accent font-medium",
                                children: editingId ? "Salvar alterações" : "Publicar"
                            }, void 0, false, {
                                fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setEditingId(null);
                                    setForm(EMPTY_FORM);
                                },
                                className: "px-5 py-2 rounded-lg border border-white/20",
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between bg-surface px-5 py-3 rounded-lg border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleEdit(project),
                                        className: "text-accent",
                                        children: "Editar"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDelete(project.id),
                                        className: "text-red-400",
                                        children: "Remover"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        ]
                    }, project.id, true, {
                        fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend-web/app/admin/AdminPanel.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend-web/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProject",
    ()=>createProject,
    "deleteProject",
    ()=>deleteProject,
    "getProjectById",
    ()=>getProjectById,
    "getProjects",
    ()=>getProjects,
    "updateProject",
    ()=>updateProject
]);
const API_URL = ("TURBOPACK compile-time value", "http://localhost:8080/api") ?? "http://localhost:8080/api";
async function getProjects() {
    const res = await fetch(`${API_URL}/projects`, {
        // sem cache pra sempre pegar a lista atualizada no SSR
        cache: "no-store"
    });
    if (!res.ok) {
        throw new Error("Falha ao buscar a lista de projetos");
    }
    return res.json();
}
async function getProjectById(id) {
    const res = await fetch(`${API_URL}/projects/${id}`, {
        cache: "no-store"
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error("Falha ao buscar o projeto");
    return res.json();
}
async function createProject(data) {
    const res = await fetch(`${API_URL}/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Falha ao criar o projeto");
    return res.json();
}
async function updateProject(id, data) {
    const res = await fetch(`${API_URL}/projects/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Falha ao atualizar o projeto");
    return res.json();
}
async function deleteProject(id) {
    const res = await fetch(`${API_URL}/projects/${id}`, {
        method: "DELETE"
    });
    if (!res.ok) throw new Error("Falha ao remover o projeto");
}
}),
"[project]/frontend-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/frontend-web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=frontend-web_1fg04ae._.js.map
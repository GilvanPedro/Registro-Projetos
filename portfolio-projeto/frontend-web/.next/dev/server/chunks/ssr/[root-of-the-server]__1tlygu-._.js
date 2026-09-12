module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/frontend-web/app/projeto/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$components$2f$CtaButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/components/CtaButtons.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function ProjectPage({ params }) {
    const { id } = await params;
    const project = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectById"])(id);
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-3xl mx-auto px-6 py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "text-accent text-sm",
                children: "← Voltar"
            }, void 0, false, {
                fileName: "[project]/frontend-web/app/projeto/[id]/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-4xl font-bold mt-4 mb-2",
                children: project.title
            }, void 0, false, {
                fileName: "[project]/frontend-web/app/projeto/[id]/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-sm mb-8",
                children: [
                    "Publicado em",
                    " ",
                    new Date(project.createdAt).toLocaleDateString("pt-BR")
                ]
            }, void 0, true, {
                fileName: "[project]/frontend-web/app/projeto/[id]/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "article-content",
                dangerouslySetInnerHTML: {
                    __html: project.fullContent
                }
            }, void 0, false, {
                fileName: "[project]/frontend-web/app/projeto/[id]/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$components$2f$CtaButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                repoUrl: project.repoUrl,
                docsUrl: project.docsUrl
            }, void 0, false, {
                fileName: "[project]/frontend-web/app/projeto/[id]/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend-web/app/projeto/[id]/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend-web/app/projeto/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend-web/app/projeto/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend-web/components/CtaButtons.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CtaButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function CtaButtons({ repoUrl, docsUrl }) {
    if (!repoUrl && !docsUrl) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-4 mt-12 pt-8 border-t border-white/10",
        children: [
            repoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: repoUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-5 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition",
                children: "Ver no GitHub"
            }, void 0, false, {
                fileName: "[project]/frontend-web/components/CtaButtons.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this),
            docsUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: docsUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-5 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition",
                children: "Ver documentação"
            }, void 0, false, {
                fileName: "[project]/frontend-web/components/CtaButtons.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend-web/components/CtaButtons.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend-web/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1tlygu-._.js.map
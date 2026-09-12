module.exports = [
"[project]/frontend-web/.next-internal/server/app/admin/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend-web/app/admin/login/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40cd3dd77c233040423024e97344fcee9ccab85a68",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$app$2f$admin$2f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$frontend$2d$web$2f$app$2f$admin$2f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/frontend-web/.next-internal/server/app/admin/login/page/actions.js { ACTIONS_MODULE0 => "[project]/frontend-web/app/admin/login/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$app$2f$admin$2f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/app/admin/login/page.tsx [app-rsc] (ecmascript)");
}),
"[project]/frontend-web/.next-internal/server/app/admin/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend-web/app/admin/login/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$app$2f$admin$2f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/app/admin/login/page.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/frontend-web/app/admin/login/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40cd3dd77c233040423024e97344fcee9ccab85a68":{"name":"$$RSC_SERVER_ACTION_0"}},"frontend-web/app/admin/login/page.tsx",""] */ var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend-web/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
const $$RSC_SERVER_ACTION_0 = async function login(formData) {
    const user = formData.get("user");
    const password = formData.get("password");
    // Comparacao simples com variaveis de ambiente.
    // Serve pra um projeto pessoal — em produção de verdade, troque por
    // hash de senha + uma tabela de usuários.
    if (user === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD) {
        (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).set("admin_session", "true", {
            httpOnly: true,
            maxAge: 60 * 60 * 8,
            path: "/"
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/admin");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/admin/login?erro=1");
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "40cd3dd77c233040423024e97344fcee9ccab85a68", null);
var login = $$RSC_SERVER_ACTION_0;
async function LoginPage({ searchParams }) {
    const { erro } = await searchParams;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex items-center justify-center px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            action: login,
            className: "w-full max-w-sm bg-surface p-8 rounded-xl border border-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-6",
                    children: "Login administrativo"
                }, void 0, false, {
                    fileName: "[project]/frontend-web/app/admin/login/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                erro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-400 text-sm mb-4",
                    children: "Usuário ou senha inválidos."
                }, void 0, false, {
                    fileName: "[project]/frontend-web/app/admin/login/page.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-sm text-gray-400 mb-1",
                    children: "Usuário"
                }, void 0, false, {
                    fileName: "[project]/frontend-web/app/admin/login/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "user",
                    type: "text",
                    required: true,
                    className: "w-full mb-4 px-3 py-2 rounded-lg bg-background border border-white/10 focus:border-accent outline-none"
                }, void 0, false, {
                    fileName: "[project]/frontend-web/app/admin/login/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-sm text-gray-400 mb-1",
                    children: "Senha"
                }, void 0, false, {
                    fileName: "[project]/frontend-web/app/admin/login/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "password",
                    type: "password",
                    required: true,
                    className: "w-full mb-6 px-3 py-2 rounded-lg bg-background border border-white/10 focus:border-accent outline-none"
                }, void 0, false, {
                    fileName: "[project]/frontend-web/app/admin/login/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "w-full py-2 rounded-lg bg-accent font-medium hover:opacity-90 transition",
                    children: "Entrar"
                }, void 0, false, {
                    fileName: "[project]/frontend-web/app/admin/login/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend-web/app/admin/login/page.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend-web/app/admin/login/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=frontend-web_0xa8qgo._.js.map
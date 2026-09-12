module.exports = [
"[turbopack-node]/transforms/postcss.ts?config=[project]/frontend-web/postcss.config.js { CONFIG => \"[project]/frontend-web/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/1sm9_1leenwp._.js",
  "chunks/[root-of-the-server]__1p7mv9_._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts?config=[project]/frontend-web/postcss.config.js { CONFIG => \"[project]/frontend-web/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];
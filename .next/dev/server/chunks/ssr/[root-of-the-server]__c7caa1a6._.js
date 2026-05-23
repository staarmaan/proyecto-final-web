module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const COLOR_PIEL_OPTIONS = [
    "PIEL",
    "AMARILLO",
    "ROJO",
    "PURPURA",
    "PRIETO"
];
const API_BASE = "/api";
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        fontSize: "14px"
    },
    header: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 20px",
        borderBottom: "1px solid #e5e5e5",
        background: "#fafafa"
    },
    title: {
        margin: 0,
        fontSize: "16px",
        fontWeight: 600
    },
    tabs: {
        display: "flex",
        gap: "4px",
        marginLeft: "24px"
    },
    tab: (active)=>({
            padding: "6px 16px",
            border: active ? "1px solid #111" : "1px solid #e5e5e5",
            borderRadius: "6px",
            background: active ? "#111" : "transparent",
            color: active ? "#fff" : "#666",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: active ? 600 : 400
        }),
    body: {
        display: "flex",
        flex: 1,
        overflow: "hidden"
    },
    panel: {
        flex: 1,
        padding: "20px",
        overflowY: "auto"
    },
    panelTitle: {
        margin: "0 0 16px",
        fontSize: "13px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        color: "#888"
    },
    formGroup: {
        marginBottom: "12px"
    },
    label: {
        display: "block",
        marginBottom: "4px",
        fontSize: "12px",
        fontWeight: 500,
        color: "#555"
    },
    select: {
        width: "100%",
        padding: "8px 10px",
        border: "1px solid #e5e5e5",
        borderRadius: "6px",
        fontSize: "14px",
        background: "#fff"
    },
    input: {
        width: "100%",
        padding: "8px 10px",
        border: "1px solid #e5e5e5",
        borderRadius: "6px",
        fontSize: "14px"
    },
    buttonRow: {
        display: "flex",
        gap: "8px",
        marginTop: "16px"
    },
    button: (variant = "primary")=>({
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: 500,
            cursor: "pointer",
            background: variant === "primary" ? "#111" : variant === "danger" ? "#dc2626" : "#f5f5f5",
            color: variant === "primary" || variant === "danger" ? "#fff" : "#111"
        }),
    recordList: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: "6px"
    },
    recordItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 12px",
        border: "1px solid #eee",
        borderRadius: "6px"
    },
    recordInfo: {
        display: "flex",
        flexDirection: "column",
        gap: "2px"
    },
    recordId: {
        fontSize: "12px",
        color: "#888"
    },
    recordValue: {
        fontSize: "14px",
        fontWeight: 500
    },
    recordActions: {
        display: "flex",
        gap: "6px"
    },
    smallButton: (variant = "edit")=>({
            padding: "4px 10px",
            border: "1px solid #e5e5e5",
            borderRadius: "4px",
            fontSize: "12px",
            cursor: "pointer",
            background: variant === "delete" ? "#fef2f2" : "#fff",
            color: variant === "delete" ? "#dc2626" : "#555"
        }),
    empty: {
        color: "#888",
        fontSize: "13px",
        padding: "20px 0"
    },
    divider: {
        width: "1px",
        background: "#e5e5e5"
    },
    error: {
        color: "#dc2626",
        fontSize: "12px",
        marginTop: "8px"
    },
    cancelLink: {
        color: "#888",
        fontSize: "13px",
        cursor: "pointer",
        textDecoration: "underline",
        border: "none",
        background: "none",
        padding: "8px 0"
    }
};
function isRabanoide(r) {
    return "colorpiel" in r;
}
function TestPage() {
    const [model, setModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("rabanoides");
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [colorpiel, setColorpiel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("PIEL");
    const [itemId, setItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isEditing = editingId !== null;
    const resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setEditingId(null);
        setColorpiel("PIEL");
        setItemId("");
        setError("");
    }, []);
    const fetchRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setError("");
        try {
            const res = await fetch(`${API_BASE}/${model}`);
            if (!res.ok) throw new Error("Failed to fetch");
            setRecords(await res.json());
        } catch  {
            setError("Could not load records");
        }
    }, [
        model
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchRecords();
        resetForm();
    }, [
        fetchRecords,
        resetForm
    ]);
    function populateEdit(r) {
        setEditingId(r.id);
        if (isRabanoide(r)) {
            setColorpiel(r.colorpiel);
        } else {
            setItemId(String(r.itemId));
        }
        setError("");
    }
    async function handleCreate() {
        setError("");
        setLoading(true);
        try {
            const body = model === "rabanoides" ? {
                colorpiel
            } : {
                itemId: Number(itemId)
            };
            const res = await fetch(`${API_BASE}/${model}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            if (!res.ok) throw new Error("Create failed");
            resetForm();
            await fetchRecords();
        } catch  {
            setError("Failed to create record");
        } finally{
            setLoading(false);
        }
    }
    async function handleUpdate() {
        if (editingId === null) return;
        setError("");
        setLoading(true);
        try {
            const body = model === "rabanoides" ? {
                colorpiel
            } : {
                itemId: Number(itemId)
            };
            const res = await fetch(`${API_BASE}/${model}/${editingId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            if (!res.ok) throw new Error("Update failed");
            resetForm();
            await fetchRecords();
        } catch  {
            setError("Failed to update record");
        } finally{
            setLoading(false);
        }
    }
    async function handleDelete(id) {
        setError("");
        try {
            const res = await fetch(`${API_BASE}/${model}/${id}`, {
                method: "DELETE"
            });
            if (!res.ok) throw new Error("Delete failed");
            if (editingId === id) resetForm();
            await fetchRecords();
        } catch  {
            setError("Failed to delete record");
        }
    }
    function recordLabel(r) {
        if (isRabanoide(r)) return `Color: ${r.colorpiel}`;
        return `ItemId: ${r.itemId}`;
    }
    function recordValue(r) {
        if (isRabanoide(r)) return r.colorpiel;
        return String(r.itemId);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: styles.title,
                        children: "CRUD Test"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.tabs,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.tab(model === "rabanoides"),
                                onClick: ()=>setModel("rabanoides"),
                                children: "Rabanoide"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.tab(model === "items"),
                                onClick: ()=>setModel("items"),
                                children: "Item"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...styles.panel,
                            maxWidth: "360px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.panelTitle,
                                children: isEditing ? "Edit Record" : "New Record"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            model === "rabanoides" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: styles.label,
                                        children: "Colorpiel"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        style: styles.select,
                                        value: colorpiel,
                                        onChange: (e)=>setColorpiel(e.target.value),
                                        children: COLOR_PIEL_OPTIONS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: c,
                                                children: c
                                            }, c, false, {
                                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: styles.label,
                                        children: "Item ID"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        style: styles.input,
                                        type: "number",
                                        value: itemId,
                                        onChange: (e)=>setItemId(e.target.value),
                                        placeholder: "Enter item ID"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.buttonRow,
                                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: styles.button("primary"),
                                            onClick: handleUpdate,
                                            disabled: loading,
                                            children: loading ? "Saving..." : "Update"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: styles.button("secondary"),
                                            onClick: resetForm,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                            lineNumber: 374,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: styles.button("primary"),
                                    onClick: handleCreate,
                                    disabled: loading,
                                    children: loading ? "Creating..." : "Create"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.error,
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                lineNumber: 392,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.divider
                    }, void 0, false, {
                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.panel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.panelTitle,
                                children: [
                                    model === "rabanoides" ? "Rabanoides" : "Items",
                                    " (",
                                    records.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            records.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.empty,
                                children: "No records yet."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                lineNumber: 403,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: styles.recordList,
                                children: records.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        style: styles.recordItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.recordInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.recordId,
                                                        children: [
                                                            "#",
                                                            r.id
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: styles.recordValue,
                                                        children: recordLabel(r)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.recordActions,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: styles.smallButton("edit"),
                                                        onClick: ()=>populateEdit(r),
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: styles.smallButton("delete"),
                                                        onClick: ()=>handleDelete(r.id),
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                                lineNumber: 412,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, r.id, true, {
                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/test/page.tsx",
        lineNumber: 311,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c7caa1a6._.js.map
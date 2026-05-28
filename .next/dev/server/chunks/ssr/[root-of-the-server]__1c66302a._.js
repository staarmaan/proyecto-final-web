module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/*itemId disponibles
0 - Manzana verde
1 - Manzana roja
2 - Naranja
3 - Platano
4 - Cherrys
5 - Tarta
6 - Bate
7 - Navaja
8 - Revólver
9 - Escudo
10 - Bola de cañón
11 - Craneo
12 - Pinguino
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
const COLOR_TALLO_OPTIONS = [
    "VERDE",
    "AZUL",
    "NARANJA",
    "AMARILLO",
    "ROJO"
];
const ITEM_OPTIONS = [
    {
        value: 0,
        label: "Manzana verde"
    },
    {
        value: 1,
        label: "Manzana roja"
    },
    {
        value: 2,
        label: "Naranja"
    },
    {
        value: 3,
        label: "Platano"
    },
    {
        value: 4,
        label: "Cherrys"
    },
    {
        value: 5,
        label: "Tarta"
    },
    {
        value: 6,
        label: "Bate"
    },
    {
        value: 7,
        label: "Navaja"
    },
    {
        value: 8,
        label: "Revólver"
    },
    {
        value: 9,
        label: "Escudo"
    },
    {
        value: 10,
        label: "Bola de cañón"
    },
    {
        value: 11,
        label: "Craneo"
    },
    {
        value: 12,
        label: "Pinguino"
    }
];
const API_BASE = "/api";
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
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
        overflow: "hidden",
        height: "420px"
    },
    panel: {
        flex: 1,
        padding: "20px",
        overflowY: "auto",
        minHeight: 0
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
function Home() {
    const [model, setModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("rabanoides");
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [colorpiel, setColorpiel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("PIEL");
    const [colortallo, setColortallo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("VERDE");
    const [itemId, setItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isEditing = editingId !== null;
    const resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setEditingId(null);
        setNombre("");
        setColorpiel("PIEL");
        setColortallo("VERDE");
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
            setNombre(r.nombre);
            setColorpiel(r.colorpiel);
            setColortallo(r.colortallo);
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
                nombre,
                colorpiel,
                colortallo
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
                nombre,
                colorpiel,
                colortallo
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
    function itemLabel(itemId) {
        const opt = ITEM_OPTIONS.find((o)=>o.value === itemId);
        return opt ? `${itemId} — ${opt.label}` : String(itemId);
    }
    function recordLabel(r) {
        if (isRabanoide(r)) return `#${r.id} ${r.nombre} — piel:${r.colorpiel} tallo:${r.colortallo}`;
        return `#${r.id} ${itemLabel(r.itemId)}`;
    }
    function recordValue(r) {
        if (isRabanoide(r)) return r.nombre;
        return String(r.itemId);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crud-container",
                style: {
                    border: "1px solid #e0e0e0",
                    borderRadius: "12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    maxWidth: "900px",
                    margin: "2rem auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.header,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: styles.title,
                                    children: "CRUD Test"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.tabs,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: styles.tab(model === "rabanoides"),
                                            onClick: ()=>setModel("rabanoides"),
                                            children: "Rabanoide"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: styles.tab(model === "items"),
                                            onClick: ()=>setModel("items"),
                                            children: "Item"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                            lineNumber: 372,
                            columnNumber: 11
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
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 392,
                                            columnNumber: 15
                                        }, this),
                                        model === "rabanoides" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: styles.label,
                                                            children: "Nombre"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 21
                                                        }, this),
                                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.recordValue,
                                                                margin: 0
                                                            },
                                                            children: nombre
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            style: styles.input,
                                                            type: "text",
                                                            value: nombre,
                                                            onChange: (e)=>setNombre(e.target.value),
                                                            placeholder: "Enter name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: styles.label,
                                                            children: "Colorpiel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            style: styles.select,
                                                            value: colorpiel,
                                                            onChange: (e)=>setColorpiel(e.target.value),
                                                            children: COLOR_PIEL_OPTIONS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c,
                                                                    children: c
                                                                }, c, false, {
                                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                    lineNumber: 422,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: styles.label,
                                                            children: "Colortallo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            style: styles.select,
                                                            value: colortallo,
                                                            onChange: (e)=>setColortallo(e.target.value),
                                                            children: COLOR_TALLO_OPTIONS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c,
                                                                    children: c
                                                                }, c, false, {
                                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                    lineNumber: 436,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.formGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: styles.label,
                                                    children: "Item"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    style: styles.select,
                                                    value: itemId,
                                                    onChange: (e)=>setItemId(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select an item..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 21
                                                        }, this),
                                                        ITEM_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: opt.value,
                                                                children: [
                                                                    opt.value,
                                                                    " — ",
                                                                    opt.label
                                                                ]
                                                            }, opt.value, true, {
                                                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 444,
                                            columnNumber: 17
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
                                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: styles.button("secondary"),
                                                        onClick: resetForm,
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: styles.button("primary"),
                                                onClick: handleCreate,
                                                disabled: loading || model === "rabanoides" && !nombre.trim() || model === "items" && itemId === "",
                                                children: loading ? "Creating..." : "Create"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                lineNumber: 479,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 15
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.error,
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 493,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.divider
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                    lineNumber: 496,
                                    columnNumber: 13
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
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 15
                                        }, this),
                                        records.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.empty,
                                            children: "No records yet."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 505,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            style: styles.recordList,
                                            children: records.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: styles.recordItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: styles.recordInfo,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: styles.recordValue,
                                                                children: recordLabel(r)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                lineNumber: 511,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: styles.recordActions,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    style: styles.smallButton("edit"),
                                                                    onClick: ()=>populateEdit(r),
                                                                    children: "Edit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                    lineNumber: 514,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    style: styles.smallButton("delete"),
                                                                    onClick: ()=>handleDelete(r.id),
                                                                    children: "Delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, r.id, true, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                            lineNumber: 390,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty-container"
            }, void 0, false, {
                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                lineNumber: 535,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
        lineNumber: 359,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1c66302a._.js.map
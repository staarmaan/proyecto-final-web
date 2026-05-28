(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/tareas/desweb/proyecto-final-web/src/components/GameEmbed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameEmbed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function GameEmbed() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: "/dist/index.html",
            style: {
                width: "min(1200px, 95vw)",
                height: "min(600px, 47.5vw)",
                border: "none"
            },
            title: "Love2D Game",
            allow: "cross-origin-isolated",
            allowFullScreen: true
        }, void 0, false, {
            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/components/GameEmbed.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/components/GameEmbed.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = GameEmbed;
var _c;
__turbopack_context__.k.register(_c, "GameEmbed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$src$2f$components$2f$GameEmbed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tareas/desweb/proyecto-final-web/src/components/GameEmbed.tsx [app-client] (ecmascript)");
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const [model, setModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("rabanoides");
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [colorpiel, setColorpiel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("PIEL");
    const [colortallo, setColortallo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("VERDE");
    const [itemId, setItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isEditing = editingId !== null;
    const resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[resetForm]": ()=>{
            setEditingId(null);
            setNombre("");
            setColorpiel("PIEL");
            setColortallo("VERDE");
            setItemId("");
            setError("");
        }
    }["Home.useCallback[resetForm]"], []);
    const fetchRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[fetchRecords]": async ()=>{
            setError("");
            try {
                const res = await fetch(`${API_BASE}/${model}`);
                if (!res.ok) throw new Error("Failed to fetch");
                setRecords(await res.json());
            } catch  {
                setError("Could not load records");
            }
        }
    }["Home.useCallback[fetchRecords]"], [
        model
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetchRecords();
            resetForm();
        }
    }["Home.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crud-container",
                style: {
                    border: "1px solid #e0e0e0",
                    borderRadius: "12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    maxWidth: "900px",
                    margin: "2rem auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.header,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: styles.title,
                                    children: "CRUD Test"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.tabs,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: styles.tab(model === "rabanoides"),
                                            onClick: ()=>setModel("rabanoides"),
                                            children: "Rabanoide"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 377,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: styles.tab(model === "items"),
                                            onClick: ()=>setModel("items"),
                                            children: "Item"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.body,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        ...styles.panel,
                                        maxWidth: "360px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.panelTitle,
                                            children: isEditing ? "Edit Record" : "New Record"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this),
                                        model === "rabanoides" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: styles.label,
                                                            children: "Nombre"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 21
                                                        }, this),
                                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.recordValue,
                                                                margin: 0
                                                            },
                                                            children: nombre
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            style: styles.input,
                                                            type: "text",
                                                            value: nombre,
                                                            onChange: (e)=>setNombre(e.target.value),
                                                            placeholder: "Enter name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: styles.label,
                                                            children: "Colorpiel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            style: styles.select,
                                                            value: colorpiel,
                                                            onChange: (e)=>setColorpiel(e.target.value),
                                                            children: COLOR_PIEL_OPTIONS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c,
                                                                    children: c
                                                                }, c, false, {
                                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 418,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.formGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: styles.label,
                                                            children: "Colortallo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            style: styles.select,
                                                            value: colortallo,
                                                            onChange: (e)=>setColortallo(e.target.value),
                                                            children: COLOR_TALLO_OPTIONS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c,
                                                                    children: c
                                                                }, c, false, {
                                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                    lineNumber: 438,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.formGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: styles.label,
                                                    children: "Item"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    style: styles.select,
                                                    value: itemId,
                                                    onChange: (e)=>setItemId(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select an item..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 21
                                                        }, this),
                                                        ITEM_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: opt.value,
                                                                children: [
                                                                    opt.value,
                                                                    " — ",
                                                                    opt.label
                                                                ]
                                                            }, opt.value, true, {
                                                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.buttonRow,
                                            children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: styles.button("primary"),
                                                        onClick: handleUpdate,
                                                        disabled: loading,
                                                        children: loading ? "Saving..." : "Update"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: styles.button("secondary"),
                                                        onClick: resetForm,
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: styles.button("primary"),
                                                onClick: handleCreate,
                                                disabled: loading || model === "rabanoides" && !nombre.trim() || model === "items" && itemId === "",
                                                children: loading ? "Creating..." : "Create"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                lineNumber: 481,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.error,
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 495,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.divider
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.panel,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.panelTitle,
                                            children: [
                                                model === "rabanoides" ? "Rabanoides" : "Items",
                                                " (",
                                                records.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 501,
                                            columnNumber: 15
                                        }, this),
                                        records.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.empty,
                                            children: "No records yet."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            style: styles.recordList,
                                            children: records.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: styles.recordItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: styles.recordInfo,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: styles.recordValue,
                                                                children: recordLabel(r)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: styles.recordActions,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    style: styles.smallButton("edit"),
                                                                    onClick: ()=>populateEdit(r),
                                                                    children: "Edit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    style: styles.smallButton("delete"),
                                                                    onClick: ()=>handleDelete(r.id),
                                                                    children: "Delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                                    lineNumber: 522,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, r.id, true, {
                                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                            lineNumber: 392,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty-container"
            }, void 0, false, {
                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                lineNumber: 537,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$src$2f$components$2f$GameEmbed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tareas/desweb/proyecto-final-web/src/app/page.tsx",
        lineNumber: 361,
        columnNumber: 5
    }, this);
}
_s(Home, "56Ufv1lSIGOLItLp0iu1bBmaK3U=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tareas$2f$desweb$2f$proyecto$2d$final$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/tareas/desweb/proyecto-final-web/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Desktop_tareas_desweb_proyecto-final-web_c221fd87._.js.map
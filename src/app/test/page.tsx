"use client";

import { useState, useEffect, useCallback } from "react";

type Model = "rabanoides" | "items";

interface Rabanoide {
  id: number;
  nombre: string;
  colorpiel: string;
  colortallo: string;
}

interface Item {
  id: number;
  itemId: number;
}

type Record = Rabanoide | Item;

const COLOR_PIEL_OPTIONS = ["PIEL", "AMARILLO", "ROJO", "PURPURA", "PRIETO"];
const COLOR_TALLO_OPTIONS = ["VERDE", "AZUL", "NARANJA", "AMARILLO", "ROJO"];

const API_BASE = "/api";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    height: "100vh",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    fontSize: "14px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 20px",
    borderBottom: "1px solid #e5e5e5",
    background: "#fafafa",
  },
  title: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 600,
  },
  tabs: {
    display: "flex",
    gap: "4px",
    marginLeft: "24px",
  },
  tab: (active: boolean) => ({
    padding: "6px 16px",
    border: active ? "1px solid #111" : "1px solid #e5e5e5",
    borderRadius: "6px",
    background: active ? "#111" : "transparent",
    color: active ? "#fff" : "#666",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: active ? 600 : 400,
  }),
  body: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  },
  panel: {
    flex: 1,
    padding: "20px",
    overflowY: "auto" as const,
  },
  panelTitle: {
    margin: "0 0 16px",
    fontSize: "13px",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    color: "#888",
  },
  formGroup: {
    marginBottom: "12px",
  },
  label: {
    display: "block",
    marginBottom: "4px",
    fontSize: "12px",
    fontWeight: 500,
    color: "#555",
  },
  select: {
    width: "100%",
    padding: "8px 10px",
    border: "1px solid #e5e5e5",
    borderRadius: "6px",
    fontSize: "14px",
    background: "#fff",
  },
  input: {
    width: "100%",
    padding: "8px 10px",
    border: "1px solid #e5e5e5",
    borderRadius: "6px",
    fontSize: "14px",
  },
  buttonRow: {
    display: "flex",
    gap: "8px",
    marginTop: "16px",
  },
  button: (
    variant: "primary" | "secondary" | "danger" = "primary"
  ) => ({
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    background:
      variant === "primary"
        ? "#111"
        : variant === "danger"
        ? "#dc2626"
        : "#f5f5f5",
    color:
      variant === "primary" || variant === "danger" ? "#fff" : "#111",
  }),
  recordList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
  },
  recordItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 12px",
    border: "1px solid #eee",
    borderRadius: "6px",
  },
  recordInfo: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "2px",
  },
  recordId: {
    fontSize: "12px",
    color: "#888",
  },
  recordValue: {
    fontSize: "14px",
    fontWeight: 500,
  },
  recordActions: {
    display: "flex",
    gap: "6px",
  },
  smallButton: (variant: "edit" | "delete" = "edit") => ({
    padding: "4px 10px",
    border: "1px solid #e5e5e5",
    borderRadius: "4px",
    fontSize: "12px",
    cursor: "pointer",
    background: variant === "delete" ? "#fef2f2" : "#fff",
    color: variant === "delete" ? "#dc2626" : "#555",
  }),
  empty: {
    color: "#888",
    fontSize: "13px",
    padding: "20px 0",
  },
  divider: {
    width: "1px",
    background: "#e5e5e5",
  },
  error: {
    color: "#dc2626",
    fontSize: "12px",
    marginTop: "8px",
  },
  cancelLink: {
    color: "#888",
    fontSize: "13px",
    cursor: "pointer",
    textDecoration: "underline",
    border: "none",
    background: "none",
    padding: "8px 0",
  },
};

function isRabanoide(r: Record): r is Rabanoide {
  return "colorpiel" in r;
}

export default function TestPage() {
  const [model, setModel] = useState<Model>("rabanoides");
  const [records, setRecords] = useState<Record[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [nombre, setNombre] = useState("");
  const [colorpiel, setColorpiel] = useState("PIEL");
  const [colortallo, setColortallo] = useState("VERDE");
  const [itemId, setItemId] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isEditing = editingId !== null;

  const resetForm = useCallback(() => {
    setEditingId(null);
    setNombre("");
    setColorpiel("PIEL");
    setColortallo("VERDE");
    setItemId("");
    setError("");
  }, []);

  const fetchRecords = useCallback(async () => {
    setError("");
    try {
      const res = await fetch(`${API_BASE}/${model}`);
      if (!res.ok) throw new Error("Failed to fetch");
      setRecords(await res.json());
    } catch {
      setError("Could not load records");
    }
  }, [model]);

  useEffect(() => {
    fetchRecords();
    resetForm();
  }, [fetchRecords, resetForm]);

  function populateEdit(r: Record) {
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
      const body =
        model === "rabanoides"
          ? { nombre, colorpiel, colortallo }
          : { itemId: Number(itemId) };
      const res = await fetch(`${API_BASE}/${model}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Create failed");
      resetForm();
      await fetchRecords();
    } catch {
      setError("Failed to create record");
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate() {
    if (editingId === null) return;
    setError("");
    setLoading(true);
    try {
      const body =
        model === "rabanoides"
          ? { nombre, colorpiel, colortallo }
          : { itemId: Number(itemId) };
      const res = await fetch(`${API_BASE}/${model}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Update failed");
      resetForm();
      await fetchRecords();
    } catch {
      setError("Failed to update record");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    setError("");
    try {
      const res = await fetch(`${API_BASE}/${model}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      if (editingId === id) resetForm();
      await fetchRecords();
    } catch {
      setError("Failed to delete record");
    }
  }

  function recordLabel(r: Record): string {
    if (isRabanoide(r))
      return `#${r.id} ${r.nombre} — piel:${r.colorpiel} tallo:${r.colortallo}`;
    return `#${r.id} ItemId: ${r.itemId}`;
  }

  function recordValue(r: Record): string {
    if (isRabanoide(r)) return r.nombre;
    return String(r.itemId);
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>CRUD Test</h1>
        <div style={styles.tabs}>
          <button
            style={styles.tab(model === "rabanoides")}
            onClick={() => setModel("rabanoides")}
          >
            Rabanoide
          </button>
          <button
            style={styles.tab(model === "items")}
            onClick={() => setModel("items")}
          >
            Item
          </button>
        </div>
      </div>

      <div style={styles.body}>
        <div style={{ ...styles.panel, maxWidth: "360px" }}>
          <p style={styles.panelTitle}>
            {isEditing ? "Edit Record" : "New Record"}
          </p>

          {model === "rabanoides" ? (
            <>
              <div style={styles.formGroup}>
                <label style={styles.label}>Nombre</label>
                {isEditing ? (
                  <p style={{ ...styles.recordValue, margin: 0 }}>{nombre}</p>
                ) : (
                  <input
                    style={styles.input}
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Enter name"
                  />
                )}
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Colorpiel</label>
                <select
                  style={styles.select}
                  value={colorpiel}
                  onChange={(e) => setColorpiel(e.target.value)}
                >
                  {COLOR_PIEL_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Colortallo</label>
                <select
                  style={styles.select}
                  value={colortallo}
                  onChange={(e) => setColortallo(e.target.value)}
                >
                  {COLOR_TALLO_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ) : (
            <div style={styles.formGroup}>
              <label style={styles.label}>Item ID</label>
              <input
                style={styles.input}
                type="number"
                value={itemId}
                onChange={(e) => setItemId(e.target.value)}
                placeholder="Enter item ID"
              />
            </div>
          )}

          <div style={styles.buttonRow}>
            {isEditing ? (
              <>
                <button
                  style={styles.button("primary")}
                  onClick={handleUpdate}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Update"}
                </button>
                <button
                  style={styles.button("secondary")}
                  onClick={resetForm}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                style={styles.button("primary")}
                onClick={handleCreate}
                disabled={loading || (model === "rabanoides" && !nombre.trim())}
              >
                {loading ? "Creating..." : "Create"}
              </button>
            )}
          </div>

          {error && <p style={styles.error}>{error}</p>}
        </div>

        <div style={styles.divider} />

        <div style={styles.panel}>
          <p style={styles.panelTitle}>
            {model === "rabanoides" ? "Rabanoides" : "Items"} ({records.length})
          </p>

          {records.length === 0 ? (
            <p style={styles.empty}>No records yet.</p>
          ) : (
            <ul style={styles.recordList}>
              {records.map((r) => (
                <li key={r.id} style={styles.recordItem}>
                  <div style={styles.recordInfo}>
                    <span style={styles.recordValue}>{recordLabel(r)}</span>
                  </div>
                  <div style={styles.recordActions}>
                    <button
                      style={styles.smallButton("edit")}
                      onClick={() => populateEdit(r)}
                    >
                      Edit
                    </button>
                    <button
                      style={styles.smallButton("delete")}
                      onClick={() => handleDelete(r.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

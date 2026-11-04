import React, { useEffect, useState } from "react";
import {
  fetchAdminTestimonials,
  saveTestimonial,
  toggleTestimonialPublish,
  deleteTestimonial,
  uploadImage,
  mediaUrl,
} from "../../services/api";
import { Plus, RefreshCw, Star, Pencil, Trash2, Eye, EyeOff, X, Upload } from "lucide-react";

const emptyForm = {
  client_name: "",
  company: "",
  designation: "",
  message: "",
  rating: 5,
  image: "",
  is_published: true,
};

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetchAdminTestimonials();
      if (res.success) setItems(Array.isArray(res.data) ? res.data : []);
      else setError(res.message || "Could not load testimonials.");
    } catch {
      setError("Unable to reach the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const setField = (key, value) => setEditing((prev) => ({ ...prev, [key]: value }));
  const openNew = () => setEditing({ ...emptyForm });
  const openEdit = (item) =>
    setEditing({ ...item, image: item.image || "", is_published: Boolean(Number(item.is_published)) });

  const handleImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const res = await uploadImage(file);
      const url = res?.data?.url || res?.url || res?.data?.path || res?.path;
      if (res?.success && url) setField("image", url);
      else setError(res?.message || "Image upload failed.");
    } catch {
      setError("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await saveTestimonial(editing);
      if (res.success) {
        setEditing(null);
        load();
      } else {
        setError(res.message || "Could not save.");
      }
    } catch {
      setError("Unable to reach the server.");
    } finally {
      setSaving(false);
    }
  };

  const handleToggle = async (id) => {
    const res = await toggleTestimonialPublish(id);
    if (res.success) load();
    else setError(res.message || "Could not update.");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this testimonial?")) return;
    const res = await deleteTestimonial(id);
    if (res.success) load();
    else setError(res.message || "Could not delete.");
  };

  const inputCls =
    "w-full px-4 py-3 bg-[#111] border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#ff7a00]";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">Testimonials</h1>
          <p className="text-sm text-gray-400 mt-1">Manage client reviews</p>
        </div>
        <div className="flex gap-3">
          <button onClick={load} className="p-3 bg-[#1e1e1e] rounded-xl text-orange-400">
            <RefreshCw size={18} />
          </button>
          <button
            onClick={openNew}
            className="px-4 py-3 bg-[#ff7a00] hover:bg-orange-600 rounded-xl text-white text-sm font-bold flex items-center gap-2"
          >
            <Plus size={16} /> Add
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-gray-400">Loading testimonials...</p>
      ) : items.length === 0 ? (
        <div className="bg-[#161616] border border-gray-800 rounded-2xl p-10 text-center">
          <Star size={32} className="mx-auto text-orange-500 mb-3" />
          <p className="text-white font-bold">No testimonials yet</p>
          <p className="text-gray-500 text-sm mt-1">Click Add to create the first one.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item) => {
            const published = Boolean(Number(item.is_published));
            return (
              <div
                key={item.id}
                className={`bg-[#161616] border border-gray-800 rounded-2xl p-6 ${published ? "" : "opacity-60"}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex text-orange-400">
                    {Array.from({ length: Number(item.rating || 5) }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                      published ? "bg-green-500/10 text-green-400" : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {published ? "Published" : "Hidden"}
                  </span>
                </div>
                <p className="text-gray-300">{item.message}</p>
                <div className="flex items-center gap-3 mt-4">
                  {item.image && (
                    <img src={mediaUrl(item.image)} alt="" className="w-12 h-12 rounded-full object-cover" />
                  )}
                  <div>
                    <h3 className="font-bold text-white">{item.client_name}</h3>
                    <p className="text-xs text-gray-500">
                      {[item.designation, item.company].filter(Boolean).join(", ")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => openEdit(item)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300"
                    title="Edit"
                  >
                    <Pencil size={15} />
                  </button>
                  <button
                    onClick={() => handleToggle(item.id)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300"
                    title={published ? "Hide" : "Publish"}
                  >
                    {published ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-red-400"
                    title="Delete"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <form
            onSubmit={handleSave}
            className="w-full max-w-lg bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">
                {editing.id ? "Edit testimonial" : "New testimonial"}
              </h2>
              <button type="button" onClick={() => setEditing(null)} className="text-gray-400">
                <X size={20} />
              </button>
            </div>

            <input
              required
              className={inputCls}
              placeholder="Client name"
              value={editing.client_name}
              onChange={(e) => setField("client_name", e.target.value)}
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                className={inputCls}
                placeholder="Designation"
                value={editing.designation || ""}
                onChange={(e) => setField("designation", e.target.value)}
              />
              <input
                className={inputCls}
                placeholder="Company"
                value={editing.company || ""}
                onChange={(e) => setField("company", e.target.value)}
              />
            </div>
            <textarea
              required
              rows={4}
              className={inputCls}
              placeholder="Testimonial message"
              value={editing.message}
              onChange={(e) => setField("message", e.target.value)}
            />

            <div className="flex items-center gap-4">
              {editing.image ? (
                <img src={mediaUrl(editing.image)} alt="" className="w-16 h-16 rounded-full object-cover" />
              ) : (
                <div className="w-16 h-16 rounded-full bg-[#111] border border-gray-700 flex items-center justify-center text-gray-500">
                  <Upload size={18} />
                </div>
              )}
              <label className="text-sm text-[#ff7a00] cursor-pointer">
                {uploading ? "Uploading..." : editing.image ? "Change photo" : "Upload photo"}
                <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
              </label>
            </div>

            <div className="flex items-center justify-between gap-4">
              <label className="text-sm text-gray-300 flex items-center gap-2">
                Rating
                <select
                  className="bg-[#111] border border-gray-700 rounded-lg px-2 py-1 text-white"
                  value={editing.rating}
                  onChange={(e) => setField("rating", Number(e.target.value))}
                >
                  {[5, 4, 3, 2, 1].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm text-gray-300 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={editing.is_published}
                  onChange={(e) => setField("is_published", e.target.checked)}
                />
                Published
              </label>
            </div>

            <button
              type="submit"
              disabled={saving || uploading}
              className="w-full py-3 bg-[#ff7a00] hover:bg-orange-600 disabled:opacity-50 text-white font-bold rounded-xl text-sm"
            >
              {saving ? "Saving..." : "Save testimonial"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
import React, { useEffect, useState } from "react";
import {
  fetchAdminServices,
  saveService,
  deleteService,
  toggleServicePublish,
  uploadImage,
} from "../../services/api";
import { Plus, Edit2, Trash2, Eye, EyeOff, Upload, Check, X } from "lucide-react";

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  const initialForm = {
    id: 0,
    title: "",
    slug: "",
    category: "Corporate Solutions",
    short_description: "",
    heading: "",
    description: "",
    image: "",
    is_published: 1,
    sort_order: 0,
  };
  const [form, setForm] = useState(initialForm);

  const loadServices = async () => {
    setLoading(true);
    const res = await fetchAdminServices();
    if (res.success) setServices(res.data);
    setLoading(false);
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleOpenModal = (item = null) => {
    if (item) {
      setForm(item);
    } else {
      setForm({ ...initialForm, sort_order: services.length + 1 });
    }
    setModalOpen(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const res = await uploadImage(file);
    if (res.success && res.data?.url) {
      setForm((prev) => ({ ...prev, image: res.data.url }));
    } else {
      alert(res.message || "Upload failed");
    }
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await saveService(form);
    if (res.success) {
      setModalOpen(false);
      loadServices();
    } else {
      alert(res.message || "Failed to save service");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    const res = await deleteService(id);
    if (res.success) loadServices();
  };

  const handleToggle = async (id) => {
    await toggleServicePublish(id);
    loadServices();
  };

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">Services Management</h1>
          <p className="text-gray-400 text-sm mt-1">
            Create, edit, toggle visibility, and configure service pages
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-[#ff7a00] hover:bg-orange-600 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-orange-500/20"
        >
          <Plus size={16} /> Add New Service
        </button>
      </div>

      {/* Services Table */}
      <div className="bg-[#161616] border border-gray-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e1e1e] text-[11px] font-bold uppercase tracking-wider text-gray-400">
              <tr>
                <th className="py-3 px-6">Image</th>
                <th className="py-3 px-6">Title & Category</th>
                <th className="py-3 px-6">Slug</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-300">
              {services.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition">
                  <td className="py-4 px-6 w-24">
                    <img
                      src={item.image || "https://placehold.co/100x70?text=Service"}
                      alt={item.title}
                      className="w-16 h-12 object-cover rounded-lg border border-gray-700"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-bold text-white text-base">{item.title}</p>
                    <span className="text-[11px] text-orange-400 font-semibold">{item.category}</span>
                  </td>
                  <td className="py-4 px-6 text-xs text-gray-400 font-mono">/services/{item.slug}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleToggle(item.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition ${
                        item.is_published
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-gray-500/10 text-gray-400 border-gray-500/30"
                      }`}
                    >
                      {item.is_published ? (
                        <>
                          <Eye size={12} /> Published
                        </>
                      ) : (
                        <>
                          <EyeOff size={12} /> Draft
                        </>
                      )}
                    </button>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenModal(item)}
                        className="p-2 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-400 transition"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create / Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-white my-8">
            <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
              <h2 className="text-xl font-bold">
                {form.id ? "Edit Service" : "Add New Service"}
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Service Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. Customized Apparel"
                    className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    placeholder="customized-apparel"
                    className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                  >
                    <option value="Corporate Solutions">Corporate Solutions</option>
                    <option value="Engagement Solutions">Engagement Solutions</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    value={form.sort_order}
                    onChange={(e) =>
                      setForm({ ...form, sort_order: Number(e.target.value) })
                    }
                    className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Image (Upload or Image URL)
                </label>
                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    placeholder="https://... or upload below"
                    className="flex-1 bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                  />
                  <label className="cursor-pointer bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Upload size={14} />
                    {uploading ? "Uploading..." : "Upload"}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Short Card Summary *
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.short_description}
                  onChange={(e) =>
                    setForm({ ...form, short_description: e.target.value })
                  }
                  className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Full Page Heading
                </label>
                <input
                  type="text"
                  value={form.heading}
                  onChange={(e) => setForm({ ...form, heading: e.target.value })}
                  placeholder="e.g. Bespoke Corporate Apparel & Uniforms"
                  className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Detailed Page Description
                </label>
                <textarea
                  rows={4}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="pub"
                  checked={Boolean(form.is_published)}
                  onChange={(e) =>
                    setForm({ ...form, is_published: e.target.checked ? 1 : 0 })
                  }
                  className="w-4 h-4 accent-[#ff7a00]"
                />
                <label htmlFor="pub" className="text-sm font-semibold">
                  Publish to public website immediately
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 text-xs font-bold uppercase text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#ff7a00] hover:bg-orange-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20"
                >
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
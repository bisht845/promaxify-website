
import React, { useEffect, useState } from "react";
import {
  fetchAdminCaseStudies,
  saveCaseStudy,
  deleteCaseStudy,
  toggleCaseStudyPublish,
  uploadImage,
} from "../../services/api";
import { Plus, Edit2, Trash2, Eye, EyeOff, Upload, X, Trash } from "lucide-react";

export default function AdminCaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  const initialForm = {
    id: 0,
    title: "",
    slug: "",
    client_name: "",
    industry: "",
    thumbnail: "",
    hero_image: "",
    challenge: "",
    strategy: "",
    results: "",
    before_after_metrics: [
      { label: "Metric 1", before: "10%", after: "45%" },
      { label: "Metric 2", before: "₹5,000", after: "₹2,100" },
    ],
    chart_data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [{ name: "Impact Score", values: [20, 45, 75, 110] }],
    },
    gallery: [],
    testimonial_quote: "",
    testimonial_author: "",
    testimonial_role: "",
    is_published: 1,
    sort_order: 0,
  };

  const [form, setForm] = useState(initialForm);

  const loadCaseStudies = async () => {
    setLoading(true);
    const res = await fetchAdminCaseStudies();
    if (res.success) setCaseStudies(res.data);
    setLoading(false);
  };

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const handleOpenModal = (item = null) => {
    if (item) {
      setForm({
        ...item,
        before_after_metrics: Array.isArray(item.before_after_metrics)
          ? item.before_after_metrics
          : [],
        chart_data:
          item.chart_data && typeof item.chart_data === "object"
            ? item.chart_data
            : { labels: [], datasets: [] },
        gallery: Array.isArray(item.gallery) ? item.gallery : [],
      });
    } else {
      setForm({ ...initialForm, sort_order: caseStudies.length + 1 });
    }
    setModalOpen(true);
  };

  const handleThumbnailUpload = async (e, field = "thumbnail") => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const res = await uploadImage(file);
    if (res.success && res.data?.url) {
      setForm((prev) => ({ ...prev, [field]: res.data.url }));
    }
    setUploading(false);
  };

  const handleAddGalleryImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const res = await uploadImage(file);
    if (res.success && res.data?.url) {
      setForm((prev) => ({
        ...prev,
        gallery: [...prev.gallery, res.data.url],
      }));
    }
    setUploading(false);
  };

  const handleRemoveGalleryImage = (idx) => {
    setForm((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== idx),
    }));
  };

  // Metrics handlers
  const handleAddMetric = () => {
    setForm((prev) => ({
      ...prev,
      before_after_metrics: [
        ...prev.before_after_metrics,
        { label: "New Metric", before: "0", after: "100" },
      ],
    }));
  };

  const handleUpdateMetric = (index, key, value) => {
    setForm((prev) => {
      const updated = [...prev.before_after_metrics];
      updated[index][key] = value;
      return { ...prev, before_after_metrics: updated };
    });
  };

  const handleRemoveMetric = (index) => {
    setForm((prev) => ({
      ...prev,
      before_after_metrics: prev.before_after_metrics.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await saveCaseStudy(form);
    if (res.success) {
      setModalOpen(false);
      loadCaseStudies();
    } else {
      alert(res.message || "Failed to save case study");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this case study?")) return;
    const res = await deleteCaseStudy(id);
    if (res.success) loadCaseStudies();
  };

  const handleToggle = async (id) => {
    await toggleCaseStudyPublish(id);
    loadCaseStudies();
  };

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Advanced Case Studies
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Build interactive client transformations with metrics, charts & galleries
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-[#ff7a00] hover:bg-orange-600 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-orange-500/20"
        >
          <Plus size={16} /> Create Case Study
        </button>
      </div>

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((item) => (
          <div
            key={item.id}
            className="bg-[#161616] border border-gray-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-gray-700 transition"
          >
            <div>
              <div className="h-44 relative overflow-hidden bg-black/40">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => handleToggle(item.id)}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border ${
                      item.is_published
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                        : "bg-black/60 text-gray-400 border-gray-700"
                    }`}
                  >
                    {item.is_published ? <Eye size={12} /> : <EyeOff size={12} />}
                    {item.is_published ? "Published" : "Draft"}
                  </button>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-[#ff7a00] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {item.industry}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white text-lg leading-tight line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">Client: {item.client_name}</p>
                <p className="text-xs text-gray-500 mt-3 line-clamp-3">
                  {item.challenge}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-gray-800/80 flex items-center justify-between mt-4">
              <span className="text-xs text-gray-500 font-mono">
                /case-studies/{item.slug}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleOpenModal(item)}
                  className="p-2 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition"
                  title="Edit Case Study"
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
            </div>
          </div>
        ))}
      </div>

      {/* Editor Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl max-w-4xl w-full p-6 sm:p-8 text-white my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
              <h2 className="text-xl font-bold">
                {form.id ? "Edit Case Study" : "Create Advanced Case Study"}
              </h2>
              <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Case Study Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. E-commerce Growth & Revenue Optimization"
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
                    placeholder="ecommerce-growth-revenue-optimization"
                    className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.client_name}
                    onChange={(e) => setForm({ ...form, client_name: e.target.value })}
                    placeholder="e.g. Aura Lifestyle Retails"
                    className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Industry *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    placeholder="e.g. E-commerce & Retail"
                    className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                  />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Card Thumbnail Image *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      value={form.thumbnail}
                      onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
                      placeholder="https://..."
                      className="flex-1 bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                    />
                    <label className="cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-3 rounded-xl text-xs flex items-center justify-center">
                      <Upload size={14} />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleThumbnailUpload(e, "thumbnail")}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Hero Banner Image
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={form.hero_image}
                      onChange={(e) => setForm({ ...form, hero_image: e.target.value })}
                      placeholder="https://..."
                      className="flex-1 bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                    />
                    <label className="cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-3 rounded-xl text-xs flex items-center justify-center">
                      <Upload size={14} />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleThumbnailUpload(e, "hero_image")}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Story Trio: Challenge, Strategy, Results */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                    The Challenge
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={form.challenge}
                    onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                    placeholder="Describe client pain points, bottlenecks, or obstacles..."
                    className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                    Strategy & Solution
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={form.strategy}
                    onChange={(e) => setForm({ ...form, strategy: e.target.value })}
                    placeholder="Detail our tailored approach, execution, and methodologies..."
                    className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                    The Results & Impact
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={form.results}
                    onChange={(e) => setForm({ ...form, results: e.target.value })}
                    placeholder="Highlight tangible outcomes, percentage growths, and revenue impact..."
                    className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                  />
                </div>
              </div>

              {/* Before & After Metrics Builder */}
              <div className="p-4 bg-[#141414] border border-gray-800 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Before vs After Metrics
                  </label>
                  <button
                    type="button"
                    onClick={handleAddMetric}
                    className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                  >
                    <Plus size={14} /> Add Metric
                  </button>
                </div>

                {form.before_after_metrics.map((m, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Label (e.g. CAC)"
                      value={m.label}
                      onChange={(e) => handleUpdateMetric(idx, "label", e.target.value)}
                      className="flex-1 bg-[#111] border border-gray-700 rounded-lg p-2.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Before (e.g. ₹4,500)"
                      value={m.before}
                      onChange={(e) => handleUpdateMetric(idx, "before", e.target.value)}
                      className="w-32 bg-[#111] border border-gray-700 rounded-lg p-2.5 text-xs text-red-300"
                    />
                    <input
                      type="text"
                      placeholder="After (e.g. ₹1,200)"
                      value={m.after}
                      onChange={(e) => handleUpdateMetric(idx, "after", e.target.value)}
                      className="w-32 bg-[#111] border border-gray-700 rounded-lg p-2.5 text-xs text-emerald-300"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveMetric(idx)}
                      className="p-2 text-gray-400 hover:text-red-400"
                    >
                      <Trash size={14} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Gallery Images */}
              <div className="p-4 bg-[#141414] border border-gray-800 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Image Gallery
                  </label>
                  <label className="cursor-pointer text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1">
                    <Upload size={14} /> Add Gallery Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAddGalleryImage}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="flex flex-wrap gap-3">
                  {form.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="relative group w-24 h-20 rounded-lg overflow-hidden border border-gray-700">
                      <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => handleRemoveGalleryImage(idx)}
                        className="absolute inset-0 bg-red-600/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  ))}
                  {form.gallery.length === 0 && (
                    <p className="text-xs text-gray-500 italic">No gallery images added yet.</p>
                  )}
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="p-4 bg-[#141414] border border-gray-800 rounded-2xl space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Client Testimonial (Optional)
                </label>
                <textarea
                  rows={2}
                  value={form.testimonial_quote}
                  onChange={(e) => setForm({ ...form, testimonial_quote: e.target.value })}
                  placeholder="Client feedback quote..."
                  className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Author Name"
                    value={form.testimonial_author}
                    onChange={(e) => setForm({ ...form, testimonial_author: e.target.value })}
                    className="bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                  />
                  <input
                    type="text"
                    placeholder="Designation / Role"
                    value={form.testimonial_role}
                    onChange={(e) => setForm({ ...form, testimonial_role: e.target.value })}
                    className="bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="cs_pub"
                  checked={Boolean(form.is_published)}
                  onChange={(e) =>
                    setForm({ ...form, is_published: e.target.checked ? 1 : 0 })
                  }
                  className="w-4 h-4 accent-[#ff7a00]"
                />
                <label htmlFor="cs_pub" className="text-sm font-semibold">
                  Publish to homepage marquee & public showcase
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
                  Save Case Study
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
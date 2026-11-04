// src/services/api.js - Frontend API Service
// const API_BASE = import.meta.env.VITE_API_URL || "/api";
const API_BASE = import.meta.env.VITE_API_URL || "https://api.promaxifymarketing.com";
export async function request(endpoint, options = {}) {
  const token = localStorage.getItem("promaxify_admin_token");
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  const response = await fetch(`${API_BASE}${endpoint}`, config);
  const json = await response.json().catch(() => ({
    success: false,
    message: "Network error or invalid server response.",
  }));

  if (!response.ok && !json.message) {
    json.message = `HTTP Error ${response.status}`;
  }

  return json;
}

// Enquiries
export const submitEnquiry = (data) =>
  request("/enquiries.php", {
    method: "POST",
    body: JSON.stringify(data),
  });

// Admin Auth
export const adminLogin = (username, password) =>
  request("/auth.php", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

export const checkAuth = () => request("/auth.php", { method: "GET" });

// Dashboard
export const fetchDashboardData = () => request("/dashboard.php");
export const updateEnquiry = (id, fields) =>
  request("/dashboard.php", {
    method: "PUT",
    body: JSON.stringify({ id, ...fields }),
  });

// Services
export const fetchPublicServices = () => request("/services.php");
export const fetchAdminServices = () => request("/services.php?admin=1");
export const saveService = (service) =>
  request("/services.php", {
    method: service.id ? "PUT" : "POST",
    body: JSON.stringify(service),
  });
export const toggleServicePublish = (id) =>
  request("/services.php", {
    method: "PUT",
    body: JSON.stringify({ id, toggle_publish: true }),
  });
export const deleteService = (id) =>
  request(`/services.php?id=${id}`, { method: "DELETE" });

// Case Studies
export const fetchPublicCaseStudies = () => request("/case-studies.php");
export const fetchCaseStudyDetail = (slug) =>
  request(`/case-studies.php?slug=${encodeURIComponent(slug)}`);
export const fetchAdminCaseStudies = () =>
  request("/case-studies.php?admin=1");
export const saveCaseStudy = (caseStudy) =>
  request("/case-studies.php", {
    method: caseStudy.id ? "PUT" : "POST",
    body: JSON.stringify(caseStudy),
  });
export const toggleCaseStudyPublish = (id) =>
  request("/case-studies.php", {
    method: "PUT",
    body: JSON.stringify({ id, toggle_publish: true }),
  });
export const deleteCaseStudy = (id) =>
  request(`/case-studies.php?id=${id}`, { method: "DELETE" });

// Upload
export async function uploadImage(file) {
  const token = localStorage.getItem("promaxify_admin_token");
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/upload.php`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  return res.json();
}
// Testimonials
export const fetchPublicTestimonials = () => request("/testimonials.php");
export const fetchAdminTestimonials = () => request("/testimonials.php?admin=1");
export const saveTestimonial = (t) =>
  request("/testimonials.php", {
    method: t.id ? "PUT" : "POST",
    body: JSON.stringify(t),
  });
export const toggleTestimonialPublish = (id) =>
  request("/testimonials.php", {
    method: "PUT",
    body: JSON.stringify({ id, toggle_publish: true }),
  });
export const deleteTestimonial = (id) =>
  request(`/testimonials.php?id=${id}`, { method: "DELETE" });
   export const mediaUrl = (p) =>
     !p ? "" : /^https?:\/\//i.test(p) ? p : `${API_BASE}/${String(p).replace(/^\/+/, "")}`;
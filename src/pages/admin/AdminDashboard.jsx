import React, { useEffect, useState } from "react";
import { fetchDashboardData, updateEnquiry } from "../../services/api";
import {
  Users,
  Clock,
  CheckCircle2,
  PhoneCall,
  Calendar,
  Layers,
  Sparkles,
  RefreshCw,
  Building,
} from "lucide-react";

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [notesModal, setNotesModal] = useState(null);
  const loadData = async () => {
    setLoading(true);
    const res = await fetchDashboardData();
    if (res.success && res.data) {
      setData(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    await updateEnquiry(id, { status: newStatus });
    await loadData();
    setUpdatingId(null);
  };

  const handleSaveNotes = async () => {
    if (!notesModal) return;
    await updateEnquiry(notesModal.id, {
      notes: notesModal.notes,
      follow_up_date: notesModal.follow_up_date,
    });
    setNotesModal(null);
    loadData();
  };

  if (loading && !data) {
    return (
      <div className="p-12 flex justify-center text-orange-500">
        <RefreshCw className="animate-spin" size={32} />
      </div>
    );
  }

  const { stats, monthly_chart, upcoming_followups, recent_enquiries } = data || {
    stats: { total_enquiries: 0, status_counts: {} },
    monthly_chart: [],
    upcoming_followups: [],
    recent_enquiries: [],
  };

  const statusColors = {
    New: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/30",
    Contacted: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    Converted: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Closed: "bg-gray-500/10 text-gray-400 border-gray-500/30",
  };

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">Dashboard Overview</h1>
          <p className="text-gray-400 text-sm mt-1">
            Real-time pipeline analytics, lead stages, and scheduled follow-ups
          </p>
        </div>
        <button
          onClick={loadData}
          className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-white/10 text-gray-300 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border border-white/10 transition"
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} /> Refresh Data
        </button>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-[#161616] border border-gray-800 p-6 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Leads</span>
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
              <Users size={20} />
            </div>
          </div>
          <div className="mt-4 text-3xl font-black text-white">{stats.total_enquiries}</div>
          <p className="text-xs text-gray-500 mt-1">All captured corporate enquiries</p>
        </div>

        <div className="bg-[#161616] border border-gray-800 p-6 rounded-2xl">
  <div className="flex items-center justify-between">
    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
      Listed Services
    </span>
    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
      <Layers size={20} />
    </div>
  </div>

  <div className="mt-4 text-3xl font-black text-blue-400">
    {stats.active_services ?? 0}
  </div>

  <p className="text-xs text-gray-500 mt-1">
    Currently active services
  </p>
        </div>

       <div className="bg-[#161616] border border-gray-800 p-6 rounded-2xl">
  <div className="flex items-center justify-between">
    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
      Testimonials
    </span>
    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
      <CheckCircle2 size={20} />
    </div>
  </div>

  <div className="mt-4 text-3xl font-black text-emerald-400">
    {stats.total_testimonials ?? 0}
  </div>

  <p className="text-xs text-gray-500 mt-1">
    Published client testimonials
  </p>
      </div>
{/* 
        <div className="bg-[#161616] border border-gray-800 p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Published Content</span>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Sparkles size={20} />
            </div>
          </div>
          <div className="mt-4 text-3xl font-black text-purple-400">
            {stats.active_services} <span className="text-sm font-normal text-gray-500">serv.</span> /{" "}
            {stats.active_cases} <span className="text-sm font-normal text-gray-500">cases</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Live dynamic offerings</p>
        </div> */}
      </div>

      {/* Visual Chart & Lead Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 cols: Monthly Enquiries Bar Chart */}
        {/* <div className="lg:col-span-2 bg-[#161616] border border-gray-800 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white">Monthly Enquiries Volume</h2>
            <span className="text-xs text-gray-500">Last 6 Months</span>
          </div>
          <div className="h-48 flex items-end justify-between gap-3 pt-6 pb-2">
            {monthly_chart && monthly_chart.length > 0 ? (
              monthly_chart.map((m, idx) => {
                const max = Math.max(...monthly_chart.map((item) => Number(item.total)), 1);
                const heightPct = Math.round((Number(m.total) / max) * 100);
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-xs font-bold text-orange-400">{m.total}</span>
                    <div
                      style={{ height: `${Math.max(heightPct, 12)}%` }}
                      className="w-full max-w-[48px] bg-gradient-to-t from-orange-600 to-[#ff7a00] rounded-t-lg transition-all duration-500"
                    />
                    <span className="text-[11px] text-gray-400 truncate w-full text-center">
                      {m.month_name}
                    </span>
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-gray-500 m-auto">No monthly data recorded yet</p>
            )}
          </div>
        </div> */}

        {/* Right 1 col: Lead Status Distribution */}
        {/* <div className="bg-[#161616] border border-gray-800 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Pipeline Distribution</h2>
            <div className="space-y-3">
              {Object.entries(stats.status_counts || {}).map(([st, cnt]) => {
                const total = stats.total_enquiries || 1;
                const pct = Math.round((cnt / total) * 100);
                return (
                  <div key={st}>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-gray-300">{st}</span>
                      <span className="text-gray-400">
                        {cnt} ({pct}%)
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${pct}%` }}
                        className={`h-full rounded-full ${
                          st === "Converted"
                            ? "bg-emerald-500"
                            : st === "New"
                            ? "bg-blue-500"
                            : st === "In Progress"
                            ? "bg-amber-500"
                            : "bg-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
      </div>
  
  {/* Recent Enquiries Table */}
      <div className="bg-[#161616] border border-gray-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Recent Enquiries</h2>
            <p className="text-xs text-gray-400 mt-0.5">Change status in real time</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e1e1e] text-[11px] font-bold uppercase tracking-wider text-gray-400">
              <tr>
                <th className="py-3 px-6">Client / Contact</th>
                <th className="py-3 px-6">Requirement</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-300">
              {recent_enquiries.length > 0 ? (
  recent_enquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-white/[0.02] transition">
                  <td className="py-4 px-6">
                    <p className="font-bold text-white">{enq.name}</p>
                    <p className="text-xs text-gray-500">{enq.company || "Individual"}</p>
                    <p className="text-xs text-gray-400">{enq.phone}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-semibold text-gray-200">{enq.service}</p>
                    {enq.budget && <p className="text-xs text-gray-500">Budget: {enq.budget}</p>}
                  </td>
                  <td className="py-4 px-6">
                    <select
                      value={enq.status}
                      disabled={updatingId === enq.id}
                      onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                      className={`text-xs font-bold rounded-lg px-2.5 py-1.5 border bg-transparent outline-none cursor-pointer ${
                        statusColors[enq.status] || ""
                      }`}
                    >
                      <option value="New" className="bg-[#161616] text-white">
                        New
                      </option>
                      <option value="In Progress" className="bg-[#161616] text-white">
                        In Progress
                      </option>
                      <option value="Contacted" className="bg-[#161616] text-white">
                        Contacted
                      </option>
                      <option value="Converted" className="bg-[#161616] text-white">
                        Converted
                      </option>
                      <option value="Closed" className="bg-[#161616] text-white">
                        Closed
                      </option>
                    </select>
                  </td>
                  <td className="py-4 px-6 text-xs text-gray-400 whitespace-nowrap">
                    {new Date(enq.created_at).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => setNotesModal(enq)}
                      className="text-xs font-semibold text-orange-400 hover:text-orange-300 underline"
                    >
                      Update Notes
                    </button>
                  </td>
                </tr>
                ))
) : (
  <tr>
    <td colSpan="5" className="text-center py-10 text-gray-500">
      No enquiries found.
    </td>
  </tr>
)}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Follow-ups Section */}
      {/* <div className="bg-[#161616] border border-gray-800 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="text-orange-500" size={20} />
          <h2 className="text-lg font-bold text-white">Upcoming Follow-Ups</h2>
        </div>

        {upcoming_followups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcoming_followups.map((lead) => (
              <div
                key={lead.id}
                className="bg-[#1e1e1e] border border-gray-800 hover:border-gray-700 p-4 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-orange-400 flex items-center gap-1">
                      <Calendar size={12} /> {lead.follow_up_date}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${
                        statusColors[lead.status] || ""
                      }`}
                    >
                      {lead.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-base">{lead.name}</h3>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                    <Building size={12} /> {lead.company || "Individual"}
                  </p>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                    <span className="text-gray-300 font-semibold">Service:</span> {lead.service}
                  </p>
                  {lead.notes && (
                    <p className="text-xs text-amber-300/80 mt-1 italic line-clamp-2">
                      "{lead.notes}"
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between">
                  <a
                    href={`tel:${lead.phone}`}
                    className="text-xs text-gray-300 hover:text-orange-400 flex items-center gap-1"
                  >
                    <PhoneCall size={12} /> {lead.phone}
                  </a>
                  <button
                    onClick={() => setNotesModal(lead)}
                    className="text-xs font-bold text-orange-400 hover:underline"
                  >
                    Edit Note
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 py-4 text-center">No upcoming follow-ups scheduled.</p>
        )}
      </div> */}

      {/* Edit Notes Modal */}
      {notesModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl max-w-lg w-full p-6 text-white space-y-4">
            <h3 className="text-lg font-bold">Follow-Up & Notes for {notesModal.name}</h3>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Follow-up Date
              </label>
              <input
                type="date"
                value={notesModal.follow_up_date || ""}
                onChange={(e) =>
                  setNotesModal({ ...notesModal, follow_up_date: e.target.value })
                }
                className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Internal Remarks / Discussion
              </label>
              <textarea
                rows={4}
                value={notesModal.notes || ""}
                onChange={(e) => setNotesModal({ ...notesModal, notes: e.target.value })}
                placeholder="Log notes from client call, sample requirements, custom packaging requests..."
                className="w-full bg-[#111] border border-gray-700 rounded-xl p-3 text-sm text-white"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setNotesModal(null)}
                className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveNotes}
                className="px-5 py-2 bg-[#ff7a00] hover:bg-orange-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { request } from "../../services/api";
import { RefreshCw, Search, Mail, Phone } from "lucide-react";

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const loadEnquiries = async () => {
    setLoading(true);
    try {
      const res = await request("/enquiries.php");
      if (res.success) {
        const rows = Array.isArray(res.data)
          ? res.data
          : res.data?.enquiries || [];
        setEnquiries(rows);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEnquiries();
  }, []);

  const filtered = enquiries.filter((item) =>
    [item.name, item.email, item.phone, item.service]
      .some((value) =>
        String(value || "").toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">Enquiries</h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage all website enquiries
          </p>
        </div>
        <button onClick={loadEnquiries} className="p-3 bg-[#1e1e1e] rounded-xl text-orange-400">
          <RefreshCw size={18} />
        </button>
      </div>

      <div className="bg-[#161616] border border-gray-800 rounded-2xl p-4">
        <div className="flex items-center gap-3 bg-[#0f0f0f] border border-gray-800 rounded-xl px-4">
          <Search size={18} className="text-gray-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, phone or service..."
            className="w-full bg-transparent py-3 text-white outline-none"
          />
        </div>
      </div>

      <div className="bg-[#161616] border border-gray-800 rounded-2xl overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1e1e1e] text-gray-400 uppercase text-xs">
            <tr>
              <th className="p-4">Client</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Service</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-gray-300">
            {loading ? (
              <tr><td colSpan="5" className="p-8 text-center">Loading enquiries...</td></tr>
            ) : filtered.length ? (
              filtered.map((item) => (
                <tr key={item.id}>
                  <td className="p-4">
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.company || "Individual"}</p>
                  </td>
                  <td className="p-4">
                    <p className="flex items-center gap-2"><Mail size={13} />{item.email}</p>
                    <p className="flex items-center gap-2 mt-1"><Phone size={13} />{item.phone}</p>
                  </td>
                  <td className="p-4">{item.service}</td>
                  <td className="p-4">{item.status}</td>
                  <td className="p-4">
                    {item.created_at ? new Date(item.created_at).toLocaleDateString() : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="5" className="p-8 text-center text-gray-500">No enquiries found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
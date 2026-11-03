import React, { useEffect, useState } from "react";
import { request } from "../../services/api";
import { Plus, RefreshCw, Star } from "lucide-react";

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTestimonials = async () => {
    setLoading(true);
    try {
      const res = await request("/testimonials.php");
      if (res.success) {
        setItems(Array.isArray(res.data) ? res.data : res.data?.testimonials || []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">Testimonials</h1>
          <p className="text-sm text-gray-400 mt-1">Manage client reviews</p>
        </div>
        <button onClick={loadTestimonials} className="p-3 bg-[#1e1e1e] rounded-xl text-orange-400">
          <RefreshCw size={18} />
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading testimonials...</p>
      ) : items.length === 0 ? (
        <div className="bg-[#161616] border border-gray-800 rounded-2xl p-10 text-center">
          <Star size={32} className="mx-auto text-orange-500 mb-3" />
          <p className="text-white font-bold">No testimonials yet</p>
          <p className="text-gray-500 text-sm mt-1">
            Your client testimonials will appear here.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item) => (
            <div key={item.id} className="bg-[#161616] border border-gray-800 rounded-2xl p-6">
              <div className="flex text-orange-400 mb-3">
                {Array.from({ length: Number(item.rating || 5) }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300">{item.message}</p>
              <h3 className="font-bold text-white mt-4">{item.client_name}</h3>
              <p className="text-xs text-gray-500">{item.designation} {item.company}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
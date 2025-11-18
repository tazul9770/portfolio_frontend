import { Mail, Phone, MessageSquare, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import apiClient from "../services/api_client";

const ContactList = () => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    apiClient.get('/contact')
      .then((res) => {
        setContact(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/contact/${id}/`);
      // Remove from UI
      setContact(contact.filter((item) => item.id !== id));
      setMessage("Message deleted successfully");
      setTimeout(() => setMessage(null), 3000);

    } catch (err) {
      setMessage(err.message);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0f12]">
      <p className="text-gray-400 animate-pulse text-lg">Loading messages...</p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0f12]">
      <p className="text-red-400 text-xl">{error}</p>
    </div>
  );

  if (contact.length === 0) return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0f12]">
      <p className="text-gray-400 text-xl">No messages found.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0d0f12] p-6">

      {/* ✅ Success / Error Alert Message */}
      {message && (
        <div className="max-w-7xl mx-auto mb-6 bg-gray-800 border border-gray-600 text-white text-center py-3 rounded-lg shadow-lg">
          {message}
        </div>
      )}

      <h1 className="text-3xl sm:text-2xl font-bold text-white text-center mb-12 tracking-wide">
        Contact List
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {contact.map((c, index) => (
          <div
            key={c.id}
            className="group bg-gray-800/70 border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-400">Message #{index + 1}</p>
              <MessageSquare className="text-gray-400 w-5 h-5 group-hover:text-indigo-400" />
            </div>

            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-200 font-medium">
                <Mail className="w-5 h-5 text-indigo-400" /> {c.email}
              </p>

              <p className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone className="w-5 h-5 text-green-400" /> {c.phone_number}
              </p>

              <p className="text-gray-300 bg-gray-900/60 border border-gray-700 rounded-lg p-3 text-sm leading-relaxed">
                {c.comment}
              </p>
            </div>

            <button
              onClick={() => handleDelete(c.id)}
              className="cursor-pointer mt-6 w-full py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Trash className="w-4 h-4" /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
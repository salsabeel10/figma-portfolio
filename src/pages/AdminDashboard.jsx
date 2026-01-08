import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        <button
          onClick={() => navigate("/admin/hero")}
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg text-left"
        >
          <h2 className="text-xl font-semibold">🖼️ Edit Hero Section</h2>
          <p className="text-gray-500 mt-2">
            Change hero title, description and images
          </p>
        </button>

        <button
          onClick={() => navigate("/admin/projects")}
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg text-left"
        >
          <h2 className="text-xl font-semibold">🗂️ Manage Projects</h2>
          <p className="text-gray-500 mt-2">
            Add, edit or delete portfolio projects
          </p>
        </button>

        <button
          onClick={handleLogout}
          className="p-6 bg-red-500 text-white rounded-xl shadow hover:bg-red-600"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;

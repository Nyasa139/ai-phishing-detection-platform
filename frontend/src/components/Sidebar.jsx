import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Link as LinkIcon, 
  Mail, 
  History, 
  LogOut, 
  ShieldCheck 
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const userEmail = localStorage.getItem("user");

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "URL Scanner", path: "/dashboard/url", icon: LinkIcon },
    { name: "Email Analyzer", path: "/dashboard/email", icon: Mail },
    { name: "Scan History", path: "/dashboard/history", icon: History },
  ];

  return (
    <aside className="w-64 bg-slate-900/80 border-r border-slate-800 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <Link to="/dashboard" className="flex items-center gap-3 text-indigo-400">
          <ShieldCheck className="w-8 h-8" />
          <h2 className="text-xl font-bold tracking-tight text-slate-200">
            AI Phish<span className="text-indigo-400">Guard</span>
          </h2>
        </Link>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? "bg-indigo-500/10 text-indigo-400 font-medium" 
                  : "text-slate-400 hover:bg-slate-800/80 hover:text-slate-200"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
            {userEmail ? userEmail[0].toUpperCase() : "U"}
          </div>
          <div className="text-sm truncate text-slate-400">{userEmail}</div>
        </div>
        <Link 
          to="/login"
          onClick={() => localStorage.removeItem("user")}
          className="w-full py-2 text-sm text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

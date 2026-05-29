import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, AlertOctagon, CheckCircle2, AlertTriangle } from "lucide-react";
import API from "../services/api";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const userEmail = localStorage.getItem("user");
        const res = await API.get(`/api/history?userEmail=${encodeURIComponent(userEmail)}`);
        setHistory(res.data);
      } catch (error) {
        console.error("Failed to fetch history:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  // Compute Stats
  const totalScans = history.length;
  const highRisk = history.filter(h => h.riskLevel === "HIGH RISK").length;
  const safe = history.filter(h => h.riskLevel === "SAFE").length;
  const suspicious = history.filter(h => h.riskLevel === "SUSPICIOUS").length;

  const urlScans = history.filter(h => h.scanType === "URL").length;
  const emailScans = history.filter(h => h.scanType === "EMAIL").length; // assuming EMAIL is used for emails

  // Chart Data
  const pieData = [
    { name: "Safe", value: safe, color: "#10b981" },
    { name: "Suspicious", value: suspicious, color: "#f59e0b" },
    { name: "High Risk", value: highRisk, color: "#f43f5e" },
  ];

  const barData = [
    { name: "URL", count: urlScans },
    { name: "Email", count: emailScans },
  ];

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-slate-400 mt-2">
          Monitor your phishing detection metrics and recent activity.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Total Scans" 
          value={totalScans} 
          icon={Activity} 
          colorClass="bg-indigo-500/20 text-indigo-400" 
        />
        <StatsCard 
          title="High Risk" 
          value={highRisk} 
          icon={AlertOctagon} 
          colorClass="bg-rose-500/20 text-rose-400" 
        />
        <StatsCard 
          title="Safe Content" 
          value={safe} 
          icon={CheckCircle2} 
          colorClass="bg-emerald-500/20 text-emerald-400" 
        />
        <StatsCard 
          title="Suspicious" 
          value={suspicious} 
          icon={AlertTriangle} 
          colorClass="bg-amber-500/20 text-amber-400" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-6">Risk Distribution</h3>
          {totalScans === 0 ? (
            <div className="h-64 flex items-center justify-center text-slate-500">No data available</div>
          ) : (
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                    itemStyle={{ color: '#f8fafc' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bar Chart */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-6">Scans by Type</h3>
          {totalScans === 0 ? (
            <div className="h-64 flex items-center justify-center text-slate-500">No data available</div>
          ) : (
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#94a3b8' }} />
                  <YAxis stroke="#64748b" tick={{ fill: '#94a3b8' }} allowDecimals={false} />
                  <Tooltip 
                    cursor={{ fill: '#1e293b' }}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                  />
                  <Bar dataKey="count" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
